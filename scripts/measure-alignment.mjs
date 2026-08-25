#!/usr/bin/env node
// measure-alignment.mjs — the ALIGNMENT gate, SIBLING-SCOPED (canon gate-zero).
//
// The defect is a NEAR-MISS: an element a few px off an axis it should share. The hard part is
// "should share" — pure global edge-clustering can't tell a stray field from a legitimately
// distinct rail (it false-flagged right-aligned buttons and missed real nudges; disproved
// 2026-08-25). The fix: use the DOM as the intent signal. Elements that are SIBLINGS in one
// container are meant to align — a stacked group shares a LEFT rail, a row shares a TOP rail.
// Compare WITHIN each container, not across the whole page.
//
// A child 2-8px off its siblings' shared rail = a near-miss. <1.5px = same rail; >8px = a
// deliberately distinct position (indent) — fine.
//
// Usage: node measure-alignment.mjs <file-or-url> [...] [--json] [--shot <dir>]

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
if (!targets.length) { console.error('usage: measure-alignment.mjs <file-or-url> [...] [--json] [--shot <dir>]'); process.exit(2) }

const toUrl = (t) => /^https?:\/\//.test(t) ? t : pathToFileURL(t).href

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 })
const results = []

for (const t of targets) {
  await page.goto(toUrl(t), { waitUntil: 'networkidle' })
  const nearMisses = await page.evaluate(() => {
    const NEAR_MIN = 1.5, NEAR_MAX = 8
    const vis = (el) => { const s = getComputedStyle(el); return s.visibility !== 'hidden' && s.display !== 'none' && +s.opacity !== 0 }
    const rectOf = (el) => { const r = el.getBoundingClientRect(); return { el, left: r.left, right: r.right, top: r.top, bottom: r.bottom, w: r.width, h: r.height } }
    // cluster values into rails; return [{x, items:[kid]}]
    const cluster = (kids, pick) => {
      const arr = kids.map((k) => ({ k, v: pick(k) })).sort((a, b) => a.v - b.v)
      const out = []
      for (const e of arr) {
        const last = out[out.length - 1]
        if (last && e.v - last.x <= NEAR_MIN) { last.items.push(e.k); last.x = last.items.reduce((s, i) => s + pick(i), 0) / last.items.length }
        else { out.push({ x: e.v, items: [e.k] }) }
      }
      return out
    }
    const misses = []
    for (const el of document.querySelectorAll('*')) {
      const kids = [...el.children].filter((c) => vis(c)).map(rectOf).filter((k) => k.w >= 24 && k.h >= 8)
      if (kids.length < 2) { continue }
      const byTop = [...kids].sort((a, b) => a.top - b.top)
      const stacked = byTop.every((k, i) => i === 0 || k.top >= byTop[i - 1].bottom - 4)
      // Only the STACKED-group LEFT rail is checked. Row vertical alignment is deliberately NOT
      // checked: row children of different font-size are baseline/center-aligned (align-items), so
      // box-top legitimately differs — checking it false-flags every price/label pair (disproved on
      // the Detail specimen, 2026-08-25). Row alignment needs align-items awareness; left-rail alone
      // is the clean, high-value signal.
      let axis = null, pick = null
      if (stacked && kids.length >= 3) { axis = 'left'; pick = (k) => k.left }
      if (!axis) { continue }

      const rs = cluster(kids, pick)
      if (rs.length < 2) { continue }
      const mode = rs.reduce((a, b) => b.items.length > a.items.length ? b : a)
      if (mode.items.length < 2) { continue }   // no shared rail to be off from
      for (const r of rs) {
        if (r === mode) { continue }
        const d = Math.abs(r.x - mode.x)
        if (d >= NEAR_MIN && d <= NEAR_MAX) {
          misses.push({
            axis, gap: +d.toFixed(1), rail: +mode.x.toFixed(1), stray: +r.x.toFixed(1),
            container: el.tagName.toLowerCase() + (el.className ? '.' + String(el.className).split(' ')[0] : ''),
            offenders: r.items.map((k) => ({ tag: k.el.tagName.toLowerCase(), text: (k.el.textContent || '').trim().slice(0, 24), [axis]: +pick(k).toFixed(1), box: { x: k.left, y: k.top, w: k.w, h: k.h } })),
          })
        }
      }
    }
    return misses
  })

  const verdict = nearMisses.length === 0 ? 'ALIGNED' : 'MISALIGNED'
  const rec = { target: basename(t), verdict, nearMisses }

  if (shotDir) {
    await page.evaluate(({ nearMisses }) => {
      const layer = document.createElement('div')
      layer.style.cssText = 'position:absolute;inset:0;z-index:99999;pointer-events:none'
      const sx = window.scrollX, sy = window.scrollY
      for (const nm of nearMisses) {
        for (const o of nm.offenders) {
          const b = document.createElement('div')
          b.style.cssText = `position:absolute;left:${o.box.x + sx - 2}px;top:${o.box.y + sy - 2}px;width:${o.box.w + 4}px;height:${o.box.h + 4}px;outline:2px solid #d1242f;background:rgba(209,36,47,.08)`
          layer.appendChild(b)
        }
      }
      const badge = document.createElement('div')
      badge.textContent = nearMisses.length ? `ALIGNMENT: ${nearMisses.length} near-miss(es)` : 'ALIGNMENT: clean'
      badge.style.cssText = `position:absolute;left:16px;top:16px;color:#fff;background:${nearMisses.length ? '#d1242f' : '#12805c'};padding:8px 14px;border-radius:8px;font:600 15px -apple-system,sans-serif`
      layer.appendChild(badge)
      document.body.appendChild(layer)
    }, { nearMisses })
    rec.shot = join(shotDir, basename(t).replace(/\.html?$/i, '') + '.align.png')
    await page.screenshot({ path: rec.shot, fullPage: true, scale: 'device' })
  }
  results.push(rec)
}

await browser.close()

if (asJson) {
  console.log(JSON.stringify(results, null, 2))
} else {
  for (const r of results) {
    console.log(`\n${r.target}  ->  ${r.verdict}  (${r.nearMisses.length} near-miss)`)
    for (const nm of r.nearMisses) {
      console.log(`   [${nm.container}] ${nm.axis} rail ${nm.rail}px vs stray ${nm.stray}px (${nm.gap}px): ${nm.offenders.map((o) => `"${o.text}"`).join(', ')}`)
    }
  }
  console.log('')
}
