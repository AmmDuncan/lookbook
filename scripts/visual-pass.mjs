#!/usr/bin/env node
// visual-pass.mjs — judge a screen from its PIXELS, not its DOM.
//
// extract-spec.mjs and craft-brief.mjs both read the DOM, which means they can
// only ever answer questions about markup: what gap, what size, what colour. A
// screen can satisfy every one of those targets and still be dead on arrival —
// no focal point, weight dumped in one corner, uniformly busy with nowhere for
// the eye to land. None of that is visible to a stylesheet reader.
//
// So this rasterises the page and measures the picture:
//
//   ink coverage      how much of the screen is painted vs left as air
//   balance           where the visual weight actually sits, vs the centre
//   focal dominance   does ONE region survive a squint, or is everything equal
//   busyness          edge density — how much detail competes for attention
//   colour clustering is the accent concentrated in a few places or sprayed
//
// It also writes a SQUINT image: the page downsampled hard and blurred, which is
// the oldest trick in design review. If hierarchy survives a squint, it is real;
// if the squint is uniform mush, the hierarchy was only ever in the markup. The
// reviewer is expected to LOOK at that file, not just read the numbers.
//
// Usage:
//   node visual-pass.mjs <url-or-file> [--name slug] [--out dir] [--width 1440]

import { createRequire } from 'node:module'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { homedir } from 'node:os'
import { join, resolve, basename, extname } from 'node:path'
import { pathToFileURL } from 'node:url'

const require = createRequire(join(homedir(), '.claude/lib/wren/node_modules/noop.js'))
const { chromium } = require('playwright')

/**
 * All pixel work happens inside the page, using canvas to decode the screenshot.
 * Keeps the script dependency-free — no image library to install or keep current.
 */
function analysePixels({ dataUrl, w: targetW }) {
  return new Promise((done) => {
    const img = new Image()
    img.onload = () => {
      const W = targetW
      const H = Math.round((img.height / img.width) * W)
      const cv = document.createElement('canvas')
      cv.width = W
      cv.height = H
      const ctx = cv.getContext('2d', { willReadFrequently: true })
      ctx.drawImage(img, 0, 0, W, H)
      const { data } = ctx.getImageData(0, 0, W, H)

      const lum = new Float32Array(W * H)
      const sat = new Float32Array(W * H)
      for (let i = 0, p = 0; i < data.length; i += 4, p++) {
        const r = data[i]
        const g = data[i + 1]
        const b = data[i + 2]
        lum[p] = 0.2126 * r + 0.7152 * g + 0.0722 * b
        sat[p] = (Math.max(r, g, b) - Math.min(r, g, b)) / 255
      }

      // The page background is whatever luminance dominates; "ink" is everything
      // that departs from it. Using a fixed white assumption breaks on dark UIs.
      const hist = new Array(256).fill(0)
      for (let p = 0; p < lum.length; p++) hist[Math.round(lum[p])]++
      let bgLum = 0
      let bgCount = -1
      for (let v = 0; v < 256; v++) {
        if (hist[v] > bgCount) {
          bgCount = hist[v]
          bgLum = v
        }
      }

      const INK_THRESHOLD = 18 // luminance units away from the background
      let inkPixels = 0
      let sumX = 0
      let sumY = 0
      const quad = [0, 0, 0, 0]
      let colourPixels = 0
      let colourSumX = 0
      let colourSumY = 0

      for (let y = 0; y < H; y++) {
        for (let x = 0; x < W; x++) {
          const p = y * W + x
          const isInk = Math.abs(lum[p] - bgLum) > INK_THRESHOLD
          if (isInk) {
            inkPixels++
            sumX += x
            sumY += y
            const q = (y < H / 2 ? 0 : 2) + (x < W / 2 ? 0 : 1)
            quad[q]++
          }
          if (sat[p] > 0.25) {
            colourPixels++
            colourSumX += x
            colourSumY += y
          }
        }
      }

      const total = W * H
      const inkPct = (inkPixels / total) * 100

      // Balance: how far the centre of painted mass sits from the true centre,
      // as a fraction of half the page. A magazine spread is deliberately
      // off-balance; an app screen that is 40% off usually just forgot a column.
      const comX = inkPixels ? sumX / inkPixels : W / 2
      const comY = inkPixels ? sumY / inkPixels : H / 2
      const balanceX = ((comX - W / 2) / (W / 2)) * 100
      const balanceY = ((comY - H / 2) / (H / 2)) * 100

      // Busyness: mean absolute luminance gradient. High means detail everywhere.
      let edgeSum = 0
      for (let y = 1; y < H - 1; y++) {
        for (let x = 1; x < W - 1; x++) {
          const p = y * W + x
          edgeSum += Math.abs(lum[p] - lum[p + 1]) + Math.abs(lum[p] - lum[p + W])
        }
      }
      const busyness = edgeSum / ((W - 2) * (H - 2))

      // SQUINT: downsample to a coarse grid, then ask whether any cell stands out.
      // If the strongest cell is barely above the average, nothing dominates and
      // the eye has nowhere to land — the screen has no focal point.
      const GX = 16
      const GY = Math.max(4, Math.round((GX * H) / W))
      const cells = new Float32Array(GX * GY)
      const cellW = W / GX
      const cellH = H / GY
      for (let y = 0; y < H; y++) {
        for (let x = 0; x < W; x++) {
          const p = y * W + x
          if (Math.abs(lum[p] - bgLum) > INK_THRESHOLD) {
            const gx = Math.min(GX - 1, Math.floor(x / cellW))
            const gy = Math.min(GY - 1, Math.floor(y / cellH))
            cells[gy * GX + gx]++
          }
        }
      }
      const per = cellW * cellH
      const dens = Array.from(cells, (c) => c / per)
      const mean = dens.reduce((a, b) => a + b, 0) / dens.length
      const sorted = [...dens].sort((a, b) => b - a)
      const peak = sorted[0]
      const dominance = mean > 0 ? peak / mean : 0
      const topIdx = dens.indexOf(peak)

      done({
        width: W,
        height: H,
        bgLum: Math.round(bgLum),
        inkPct: +inkPct.toFixed(1),
        balanceX: +balanceX.toFixed(1),
        balanceY: +balanceY.toFixed(1),
        busyness: +busyness.toFixed(2),
        dominance: +dominance.toFixed(2),
        focalCell: { col: topIdx % GX, row: Math.floor(topIdx / GX), cols: GX, rows: GY },
        colourPct: +((colourPixels / total) * 100).toFixed(1),
        colourCentroid: colourPixels
          ? { x: +(colourSumX / colourPixels / W).toFixed(2), y: +(colourSumY / colourPixels / H).toFixed(2) }
          : null,
        grid: dens.map((d) => +d.toFixed(3)),
      })
    }
    img.src = dataUrl
  })
}

/** Render the squint view: hard downsample, blur, upscale. Meant to be looked at. */
function renderSquint({ dataUrl, w }) {
  return new Promise((done) => {
    const img = new Image()
    img.onload = () => {
      const small = document.createElement('canvas')
      small.width = 48
      small.height = Math.max(8, Math.round((img.height / img.width) * 48))
      const sctx = small.getContext('2d')
      sctx.imageSmoothingEnabled = true
      sctx.drawImage(img, 0, 0, small.width, small.height)

      const out = document.createElement('canvas')
      out.width = w
      out.height = Math.round((img.height / img.width) * w)
      const octx = out.getContext('2d')
      octx.imageSmoothingEnabled = true
      octx.filter = 'blur(2px)'
      octx.drawImage(small, 0, 0, out.width, out.height)
      done(out.toDataURL('image/png'))
    }
    img.src = dataUrl
  })
}

function verdicts(m) {
  // Thresholds calibrated against 27 reference screens measured by this same
  // script, then checked so Linear's issue list comes back clean and the flat
  // control fixture still fires. Corpus ranges for reference:
  //   ink coverage    p10 5.3  median 9.8  p90 29.4
  //   dominance       p10 3.49 median 6.14 p90 12.38
  //   busyness        p10 4.8  median 6.59 p90 10.32
  //   colour          p25 0.2  median 0.7  p90 11.1
  //   |balance X|     median 12   p90 29.1  max 31.5
  //   |balance Y|     median 7.2  p90 29    max 42.4
  const out = []

  if (m.dominance < 3.0) {
    out.push([
      'focal point',
      `nothing dominates — the strongest area is only ${m.dominance}x the average, where reference screens run 3.5x to 12x. Look at the squint image: the eye has nowhere to land. Give one element real prominence.`,
    ])
  }
  if (m.inkPct > 38) {
    out.push([
      'density',
      `${m.inkPct}% of the screen is painted, against about 10% on a typical reference screen and 29% at the heavy end. There is almost no air left.`,
    ])
  }
  if (m.inkPct < 4) {
    out.push(['density', `only ${m.inkPct}% painted — thinner than any reference screen. Content is lost in the space.`])
  }
  if (Math.abs(m.balanceX) > 32) {
    out.push([
      'balance',
      `weight sits ${Math.abs(m.balanceX)}% ${m.balanceX > 0 ? 'right' : 'left'} of centre, beyond anything in the reference set (max 31%). Usually a column that never got filled.`,
    ])
  }
  if (Math.abs(m.balanceY) > 40) {
    out.push([
      'balance',
      `weight piles ${Math.abs(m.balanceY)}% toward the ${m.balanceY > 0 ? 'bottom' : 'top'}, beyond the reference range. Check the screen is not top-loaded with chrome before content.`,
    ])
  }
  if (m.colourPct > 15) {
    out.push([
      'colour',
      `${m.colourPct}% of pixels are saturated, where a typical reference screen sits under 1% and the most colourful reaches 11%. Colour has stopped meaning "act here".`,
    ])
  }
  if (m.busyness > 12) {
    out.push([
      'busyness',
      `edge density ${m.busyness} against a reference ceiling near 10 — detail competes everywhere. Usually too many borders or too many type sizes.`,
    ])
  }
  return out
}

const argv = process.argv.slice(2)
const target = argv[0]
const flag = (n, d) => {
  const i = argv.indexOf(`--${n}`)
  return i === -1 ? d : argv[i + 1]
}

if (!target) {
  console.error('usage: visual-pass.mjs <url-or-file> [--name slug] [--out dir] [--width 1440]')
  process.exit(1)
}

const width = Number(flag('width', 1440))
const name = flag('name', basename(target, extname(target)).replace(/[^a-z0-9-]+/gi, '-').toLowerCase())
const outDir = flag('out', join(homedir(), '.claude/skills/lookbook/references/visual'))
const url = /^https?:\/\//.test(target) ? target : pathToFileURL(resolve(target)).href

// Pointing this at an IMAGE file instead of a page loads Chrome's standalone
// image viewer, which mats the picture on a near-black backdrop. That backdrop
// then wins the background-luminance vote, so every light pixel in the actual
// screenshot counts as "ink" and the reading inverts: a white table measured
// 55% painted, "almost no air left". Wrap image targets in a bare page sized to
// the image so there is no matting at all.
const IMAGE_TARGET = /\.(png|jpe?g|webp|avif)$/i.test(target)

const browser = await chromium.launch()
const ctx = await browser.newContext({ viewport: { width, height: 900 }, deviceScaleFactor: 2 })
const page = await ctx.newPage()

if (IMAGE_TARGET) {
  // Inline as a data URL: a page created with setContent has an opaque origin,
  // so a file:// <img src> is blocked and never loads.
  const bytes = await readFile(resolve(target))
  const ext = target.split('.').pop().toLowerCase()
  const mime = ext === 'png' ? 'image/png' : ext === 'webp' ? 'image/webp' : ext === 'avif' ? 'image/avif' : 'image/jpeg'
  const inlined = `data:${mime};base64,${bytes.toString('base64')}`
  await page.setContent(
    `<!doctype html><meta charset="utf-8">` +
      `<style>html,body{margin:0;padding:0}img{display:block}</style>` +
      `<img id="t" src="${inlined}">`,
  )
  await page.waitForFunction(() => {
    const i = document.getElementById('t')
    return i && i.complete && i.naturalWidth > 0
  })
  const dim = await page.evaluate(() => {
    const i = document.getElementById('t')
    return { w: i.naturalWidth, h: i.naturalHeight }
  })
  await page.setViewportSize({ width: dim.w, height: dim.h })
} else {
  await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 }).catch(() => page.goto(url, { timeout: 45000 }))
}
await page.evaluate(() => document.fonts?.ready)
await page.waitForTimeout(1200)

const shot = await page.screenshot({ type: 'png' })
const dataUrl = `data:image/png;base64,${shot.toString('base64')}`

// page.evaluate passes exactly ONE argument, so both helpers take a single object.
const metrics = await page.evaluate(analysePixels, { dataUrl, w: 600 })
const squint = await page.evaluate(renderSquint, { dataUrl, w: 600 })

await browser.close()
await mkdir(outDir, { recursive: true })
await writeFile(join(outDir, `${name}.squint.png`), Buffer.from(squint.split(',')[1], 'base64'))
await writeFile(join(outDir, `${name}.shot.png`), shot)
await writeFile(join(outDir, `${name}.visual.json`), JSON.stringify({ name, source: target, ...metrics }, null, 2))

const v = verdicts(metrics)
console.log(`VISUAL PASS — ${name}`)
console.log('')
console.log(`  ink coverage     ${metrics.inkPct}% painted`)
console.log(`  balance          ${metrics.balanceX > 0 ? '+' : ''}${metrics.balanceX}% horizontal, ${metrics.balanceY > 0 ? '+' : ''}${metrics.balanceY}% vertical`)
console.log(`  focal dominance  ${metrics.dominance}x  (strongest area vs average)`)
console.log(`  busyness         ${metrics.busyness}`)
console.log(`  colour           ${metrics.colourPct}% of pixels`)
console.log('')
if (v.length) {
  for (const [k, msg] of v) console.log(`  ${k.padEnd(12)} ${msg}`)
} else {
  console.log('  no pixel-level problems detected')
}
console.log('')
console.log(`  squint image: ${join(outDir, `${name}.squint.png`)}`)
console.log('  LOOK at it. If hierarchy survives the blur it is real; if it is uniform mush, it was only in the markup.')
