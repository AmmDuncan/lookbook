#!/usr/bin/env node
// measure-concentric-radii.mjs — the CONCENTRIC-RADII gate (Ammiel, 2026-08-25).
//
// A rounded element nested inside another rounded element must keep CONCENTRIC corners:
// outer_radius == inner_radius + the inset between them. When it doesn't, the two curves fight
// (a tight inner corner inside a soft outer one, or vice-versa) and the nesting looks wrong.
//
// Method: render, find each rounded box nested (inset on all sides) inside a rounded box, and check
// outer_radius against inner_radius + inset. Off by more than TOL px = a finding.
//
// The number FLAGS, the eye RULES — always look at the overlay. Usage:
//   node measure-concentric-radii.mjs <file-or-url> [...] [--json] [--shot <dir>]

import { createRequire } from 'node:module'
import { homedir } from 'node:os'
import { join, basename } from 'node:path'
import { pathToFileURL } from 'node:url'

const require = createRequire(join(homedir(), '.claude/lib/wren/node_modules/noop.js'))
const { chromium } = require('playwright')

const TOL = 3          // px tolerance on outer == inner + inset
const INSET_MIN = 2, INSET_MAX = 48   // a real padding inset (not "same box" and not "unrelated")

const args = process.argv.slice(2)
const asJson = args.includes('--json')
const shotIdx = args.indexOf('--shot')
const shotDir = shotIdx >= 0 ? args[shotIdx + 1] : null
const targets = args.filter((a) => !a.startsWith('--') && a !== shotDir)
if (!targets.length) { console.error('usage: measure-concentric-radii.mjs <file-or-url> [...] [--json] [--shot <dir>]'); process.exit(2) }

const toUrl = (t) => /^https?:\/\//.test(t) ? t : pathToFileURL(t).href

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 })
const results = []

for (const t of targets) {
  await page.goto(toUrl(t), { waitUntil: 'networkidle' })
  const findings = await page.evaluate(({ TOL, INSET_MIN, INSET_MAX }) => {
    const px = (v) => parseFloat(v) || 0
    const boxes = []
    for (const el of document.querySelectorAll('*')) {
      const s = getComputedStyle(el)
      const rad = px(s.borderTopLeftRadius)
      if (rad < 2) { continue }
      if (s.display === 'none' || s.visibility === 'hidden' || +s.opacity === 0) { continue }
      const r = el.getBoundingClientRect()
      if (r.width < 20 || r.height < 16) { continue }
      const painted = (s.backgroundColor && s.backgroundColor !== 'rgba(0, 0, 0, 0)') || px(s.borderTopWidth) >= 1
      if (!painted) { continue }
      boxes.push({ el, rad, left: r.left, top: r.top, right: r.right, bottom: r.bottom, w: r.width, h: r.height })
    }
    const out = []
    for (const inner of boxes) {
      // nearest rounded box that strictly contains inner with a real inset on all four sides
      let outer = null, bestArea = Infinity
      for (const o of boxes) {
        if (o === inner) { continue }
        const iL = inner.left - o.left, iT = inner.top - o.top, iR = o.right - inner.right, iB = o.bottom - inner.bottom
        if (iL < INSET_MIN || iT < INSET_MIN || iR < INSET_MIN || iB < INSET_MIN) { continue }
        if (iL > INSET_MAX || iT > INSET_MAX || iR > INSET_MAX || iB > INSET_MAX) { continue }
        const area = o.w * o.h
        if (area < bestArea) { bestArea = area; outer = { o, inset: (iL + iT + iR + iB) / 4 } }
      }
      if (!outer) { continue }
      const expected = inner.rad + outer.inset
      const off = Math.abs(outer.o.rad - expected)
      if (off > TOL) {
        out.push({
          off: +off.toFixed(1), outerRad: +outer.o.rad.toFixed(1), innerRad: +inner.rad.toFixed(1),
          inset: +outer.inset.toFixed(1), expectedOuter: +expected.toFixed(1),
          text: (inner.el.textContent || '').trim().slice(0, 22),
          box: { x: outer.o.left, y: outer.o.top, w: outer.o.w, h: outer.o.h },
        })
      }
    }
    return out
  }, { TOL, INSET_MIN, INSET_MAX })

  const verdict = findings.length === 0 ? 'CONCENTRIC' : 'MISMATCH'
  const rec = { target: basename(t), verdict, findings }

  if (shotDir) {
    await page.evaluate(({ findings }) => {
      const layer = document.createElement('div'); layer.style.cssText = 'position:absolute;inset:0;z-index:99999;pointer-events:none'
      const sx = window.scrollX, sy = window.scrollY
      for (const f of findings) { const d = document.createElement('div'); d.style.cssText = `position:absolute;left:${f.box.x + sx - 2}px;top:${f.box.y + sy - 2}px;width:${f.box.w + 4}px;height:${f.box.h + 4}px;outline:2px solid #d1242f;background:#d1242f14`; layer.appendChild(d) }
      const bg = findings.length ? '#d1242f' : '#12805c'
      const badge = document.createElement('div'); badge.textContent = findings.length ? `CONCENTRIC-RADII: ${findings.length} mismatch` : 'CONCENTRIC-RADII: clean'
      badge.style.cssText = `position:absolute;left:16px;top:16px;color:#fff;background:${bg};padding:8px 14px;border-radius:8px;font:600 15px -apple-system,sans-serif`; layer.appendChild(badge)
      document.body.appendChild(layer)
    }, { findings })
    rec.shot = join(shotDir, basename(t).replace(/\.html?$/i, '') + '.concentric.png')
    await page.screenshot({ path: rec.shot, fullPage: true, scale: 'device' })
  }
  results.push(rec)
}

await browser.close()

if (asJson) { console.log(JSON.stringify(results, null, 2)) } else {
  for (const r of results) {
    console.log(`\n${r.target}  ->  ${r.verdict}  (${r.findings.length} mismatch)`)
    for (const f of r.findings) { console.log(`   outer radius ${f.outerRad}px but inner ${f.innerRad}px + inset ${f.inset}px = expected ${f.expectedOuter}px (off ${f.off}px)  "${f.text}"`) }
  }
  console.log('')
}
