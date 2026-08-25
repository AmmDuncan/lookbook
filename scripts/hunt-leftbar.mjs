#!/usr/bin/env node
// hunt-leftbar.mjs — find the rounded + coloured-left-bar tell by RENDERED geometry.
//
// check-ai-tells.mjs parses CSS SOURCE, so it misses the tell when it's authored as
// utility classes (`rounded-lg border-l-4 border-blue-500`) or split across two classes
// on one element — which is how generated UI actually ships it. This renders each page
// and reads COMPUTED styles per element, catching it however it was written.
//
// Signature (Ammiel's most-detested tell): an element that is ROUNDED and carries a
// >=2px LEFT border that is chromatic (not grey) and thicker/other than its siblings —
// i.e. a squared accent bar fighting a corner radius. Symmetric bordered cards and
// nav/active edge-markers are excluded.
//
// Usage:
//   node hunt-leftbar.mjs <file-or-url> [...] [--json] [--shot <dir>]

import { createRequire } from 'node:module'
import { homedir } from 'node:os'
import { join, basename } from 'node:path'
import { pathToFileURL } from 'node:url'

const require = createRequire(join(homedir(), '.claude/lib/wren/node_modules/noop.js'))
const { chromium } = require('playwright')

const args = process.argv.slice(2)
const asJson = args.includes('--json')
const shotIdx = args.indexOf('--shot')
const shotDir = shotIdx >= 0 ? args[shotIdx + 1] : null
const targets = args.filter((a) => !a.startsWith('--') && a !== shotDir)
if (!targets.length) { console.error('usage: hunt-leftbar.mjs <file-or-url> [...] [--json] [--shot <dir>]'); process.exit(2) }

const toUrl = (t) => /^https?:\/\//.test(t) ? t : pathToFileURL(t).href

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 })
const results = []

for (const t of targets) {
  await page.goto(toUrl(t), { waitUntil: 'networkidle' })
  const hits = await page.evaluate(() => {
    // parse "rgb(a)" / "rgba" into {r,g,b,a}
    const rgb = (s) => {
      const m = /rgba?\(([^)]+)\)/.exec(s || '')
      if (!m) { return null }
      const p = m[1].split(',').map((x) => parseFloat(x))
      return { r: p[0], g: p[1], b: p[2], a: p[3] == null ? 1 : p[3] }
    }
    // chromatic = has real saturation (max-min channel spread), not grey/near-grey
    const chromatic = (c) => {
      if (!c || c.a === 0) { return false }
      const mx = Math.max(c.r, c.g, c.b), mn = Math.min(c.r, c.g, c.b)
      return (mx - mn) > 24   // spread > ~9% of 255
    }
    const px = (v) => parseFloat(v) || 0
    const has = (w, style, color) => px(w) >= 1 && style !== 'none' && (rgb(color)?.a ?? 1) > 0
    const key = (c) => c ? `${Math.round(c.r / 12)}-${Math.round(c.g / 12)}-${Math.round(c.b / 12)}` : 'none'  // quantised colour
    const out = []
    for (const el of document.querySelectorAll('*')) {
      const s = getComputedStyle(el)
      const radius = Math.max(px(s.borderTopLeftRadius), px(s.borderBottomLeftRadius), px(s.borderTopRightRadius), px(s.borderBottomRightRadius))
      if (radius < 3) { continue }                          // must be rounded
      const edges = [
        { k: 'top', w: px(s.borderTopWidth), c: rgb(s.borderTopColor), on: has(s.borderTopWidth, s.borderTopStyle, s.borderTopColor) },
        { k: 'right', w: px(s.borderRightWidth), c: rgb(s.borderRightColor), on: has(s.borderRightWidth, s.borderRightStyle, s.borderRightColor) },
        { k: 'bottom', w: px(s.borderBottomWidth), c: rgb(s.borderBottomColor), on: has(s.borderBottomWidth, s.borderBottomStyle, s.borderBottomColor) },
        { k: 'left', w: px(s.borderLeftWidth), c: rgb(s.borderLeftColor), on: has(s.borderLeftWidth, s.borderLeftStyle, s.borderLeftColor) },
      ]
      const bordered = edges.filter((e) => e.on)
      if (bordered.length === 0) { continue }
      const maxW = Math.max(...bordered.map((e) => e.w))
      if (maxW < 2) { continue }                            // all hairlines — not the tell
      const colors = new Set(bordered.map((e) => key(e.c)))
      // THE RULE (Ammiel, refined 2026-08-25): the defect is a COLOUR BREAK on a rounded edge — a
      // border edge whose colour differs from the rest, stranded square on the round corner.
      //  - >=2 distinct border colours  -> a colour break (e.g. grey border + coloured accent bar). FLAG.
      //  - one colour, but a PARTIAL (1-3 edge) CHROMATIC bar on an otherwise borderless card -> breaks
      //    against the (bg) edges. FLAG.
      //  - one colour, uniform OR same-colour-heavy side OR a grey/mono partial -> NO break. FINE.
      let reason = null
      if (colors.size >= 2) {
        reason = 'colour break between edges'
      } else if (bordered.length < 4 && chromatic(bordered[0].c)) {
        reason = 'lone coloured partial border'
      }
      if (!reason) { continue }
      const r = el.getBoundingClientRect()
      if (r.width < 24 || r.height < 16) { continue }
      const sides = bordered.map((e) => `${e.k} ${e.w}px`).join(', ')
      out.push({
        tag: el.tagName.toLowerCase(),
        cls: (el.className && el.className.toString().slice(0, 60)) || '',
        w: maxW, radius: Math.round(radius), sides, reason,
        text: (el.textContent || '').trim().slice(0, 40),
        box: { x: r.x + window.scrollX, y: r.y + window.scrollY, w: r.width, h: r.height },
      })
    }
    return out
  })

  if (shotDir && hits.length) {
    await page.evaluate((hits) => {
      const layer = document.createElement('div')
      layer.style.cssText = 'position:absolute;inset:0;z-index:99999;pointer-events:none'
      for (const h of hits) {
        const box = document.createElement('div')
        box.style.cssText = `position:absolute;left:${h.box.x - 3}px;top:${h.box.y - 3}px;width:${h.box.w + 6}px;height:${h.box.h + 6}px;outline:3px solid #d1242f;outline-offset:0;background:rgba(209,36,47,.08)`
        layer.appendChild(box)
      }
      const badge = document.createElement('div')
      badge.textContent = `LEFT-BAR TELL: ${hits.length} occurrence(s)`
      badge.style.cssText = 'position:absolute;left:16px;top:16px;z-index:100000;color:#fff;background:#d1242f;padding:8px 14px;border-radius:8px;font:600 15px -apple-system,sans-serif'
      layer.appendChild(badge)
      document.body.appendChild(layer)
    }, hits)
    const outPath = join(shotDir, basename(t).replace(/\.html?$/i, '') + '.leftbar.png')
    await page.screenshot({ path: outPath, fullPage: true, scale: 'device' })
    results.push({ target: basename(t), count: hits.length, hits, shot: outPath })
  } else {
    results.push({ target: basename(t), count: hits.length, hits })
  }
}

await browser.close()

if (asJson) {
  console.log(JSON.stringify(results.filter((r) => r.count), null, 2))
} else {
  let total = 0
  for (const r of results) {
    if (!r.count) { continue }
    total += r.count
    console.log(`\n${r.target}  ->  ${r.count} left-bar tell(s)`)
    for (const h of r.hits) { console.log(`   <${h.tag} class="${h.cls}"> border [${h.sides}] on radius ${h.radius}px  "${h.text}"`) }
  }
  console.log(`\n${total} left-bar tell(s) across ${results.length} file(s)`)
  process.exit(total ? 1 : 0)
}
