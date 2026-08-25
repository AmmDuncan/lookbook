#!/usr/bin/env node
// measure-hierarchy.mjs — the HIERARCHY gate (canon gate-zero, 4th of the gates of intentional).
//
// Canon test: "if everything is emphasised, nothing is." Name the single most important element,
// confirm it is unambiguously the loudest, then each rank steps down. Ranks separated by WEIGHT and
// COLOUR first, size second. A muted hero or an equal-weight TIE between two elements is the failure.
//
// Prominence per element = composite of weight, ink-darkness, size (+ fill boost for buttons), with
// weight/colour outranking size per canon. Two checks:
//   FLAT     — prominence has almost no spread (everything equal ink/weight/size). No hierarchy.
//   NO-PRIMARY (tie) — 2+ elements share the loudest prominence. No single hero.
//   CLEAR    — one apex, real spread.
//
// The number FLAGS; the eye rules (optical adjustments are legitimate) — always look at the overlay.
//
// Usage: node measure-hierarchy.mjs <file-or-url> [...] [--json] [--shot <dir>]

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
if (!targets.length) { console.error('usage: measure-hierarchy.mjs <file-or-url> [...] [--json] [--shot <dir>]'); process.exit(2) }

const toUrl = (t) => /^https?:\/\//.test(t) ? t : pathToFileURL(t).href

const FLAT_STANDOUT = 1.25   // apex must rise at least this x above the median element
const TIE_BAND = 0.92      // elements >= this fraction of apex prominence are "co-loudest"

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 })
const results = []

for (const t of targets) {
  await page.goto(toUrl(t), { waitUntil: 'networkidle' })
  const items = await page.evaluate(() => {
    const rgb = (s) => { const m = /rgba?\(([^)]+)\)/.exec(s || ''); if (!m) { return null } const p = m[1].split(',').map(Number); return { r: p[0], g: p[1], b: p[2], a: p[3] == null ? 1 : p[3] } }
    const lum = (c) => { if (!c) { return 1 } const f = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4 }; return 0.2126 * f(c.r) + 0.7152 * f(c.g) + 0.0722 * f(c.b) }
    const TEXT = ['h1', 'h2', 'h3', 'h4', 'p', 'span', 'a', 'label', 'button', 'strong', 'li']
    const out = []
    for (const el of document.querySelectorAll('*')) {
      const tag = el.tagName.toLowerCase()
      if (!TEXT.includes(tag)) { continue }
      if (!el.textContent.trim()) { continue }
      // leaf-ish: skip if it contains another text element we'd also capture
      if ([...el.children].some((c) => TEXT.includes(c.tagName.toLowerCase()) && c.textContent.trim())) { continue }
      const r = el.getBoundingClientRect()
      const s = getComputedStyle(el)
      if (r.width < 8 || r.height < 6) { continue }
      if (s.visibility === 'hidden' || s.display === 'none' || +s.opacity === 0) { continue }
      const size = parseFloat(s.fontSize)
      const weight = parseFloat(s.fontWeight) || 400
      const txt = rgb(s.color)
      const bg = rgb(s.backgroundColor)
      const bgDark = bg && bg.a > 0.05 ? 1 - lum(bg) : 0
      // a "loud fill" = a painted background that is actually dark/coloured (a primary button),
      // NOT a white/near-white ghost background
      const loudFill = bgDark > 0.3
      // a destructive (red-dominant) fill is a different ROLE, not a competing primary — don't count it
      const destructive = bg && bg.r > bg.g * 1.4 && bg.r > bg.b * 1.4 && bg.r > 120
      const darkness = 1 - lum(loudFill ? bg : txt)
      out.push({ tag, text: el.textContent.trim().slice(0, 28), size, weight, darkness, filled: loudFill && !destructive, box: { x: r.left, y: r.top, w: r.width, h: r.height } })
    }
    return out
  })

  let verdict = 'CLEAR', why = null, apex = null, coLoud = []
  if (items.length >= 2) {
    const maxSize = Math.max(...items.map((i) => i.size))
    for (const it of items) {
      const sizeN = it.size / maxSize
      const weightN = Math.max(0, Math.min(1, (it.weight - 400) / 300))
      // weight + colour outrank size (canon): 0.34 weight, 0.34 darkness, 0.20 size, 0.12 fill
      it.prom = 0.34 * weightN + 0.34 * it.darkness + 0.20 * sizeN + (it.filled ? 0.12 : 0)
    }
    // CONTENT hierarchy is judged among non-button elements; buttons have their own "one primary"
    // check. A filled primary button legitimately rivals the H1 in prominence — that is NOT a tie.
    const content = items.filter((i) => i.tag !== 'button')
    const sorted = (content.length ? content : items).sort((a, b) => b.prom - a.prom)
    apex = sorted[0]
    coLoud = sorted.filter((i) => i.prom >= apex.prom * TIE_BAND)
    // FLAT = no TYPE RAMP: count distinct type styles (size tier + bold + darkness tier). A real
    // hierarchy has >=3 (title / section / body / meta); a flat screen collapses to 1-2. This holds
    // where apex/median failed — bold dark labels compress prominence but still ramp by size.
    const styleKey = (i) => `${Math.round(i.size / 2)}-${i.weight >= 600 ? 'b' : 'n'}-${Math.round(i.darkness * 3)}`
    const styles = new Set(items.map(styleKey)).size
    // ACTION hierarchy (canon "one primary action"): among buttons, at most ONE loud-filled primary
    const primaries = items.filter((i) => i.tag === 'button' && i.filled)
    if (items.length >= 4 && styles <= 2) { verdict = 'FLAT'; why = `only ${styles} distinct type styles across ${items.length} elements — no type ramp, no hierarchy` }
    else if (coLoud.length >= 2) { verdict = 'NO-PRIMARY'; why = `${coLoud.length} elements tie for loudest (>=${TIE_BAND} of apex) — no single hero` }
    else if (primaries.length >= 2) { verdict = 'NO-PRIMARY'; why = `${primaries.length} filled primary buttons — two primary actions, no single one`; coLoud = primaries }
    else { why = `apex "${apex.text}" prom ${apex.prom.toFixed(2)}, ${styles} type styles` }
  }

  const rec = { target: basename(t), verdict, why, apex: apex ? apex.text : null, coLoud: coLoud.map((c) => c.text) }

  if (shotDir) {
    await page.evaluate(({ items, verdict, apexText, coLoudTexts }) => {
      const layer = document.createElement('div'); layer.style.cssText = 'position:absolute;inset:0;z-index:99999;pointer-events:none'
      const sx = window.scrollX, sy = window.scrollY
      const draw = (b, color) => { const d = document.createElement('div'); d.style.cssText = `position:absolute;left:${b.x + sx - 2}px;top:${b.y + sy - 2}px;width:${b.w + 4}px;height:${b.h + 4}px;outline:2px solid ${color};background:${color}18`; layer.appendChild(d) }
      for (const it of items) {
        if (verdict === 'CLEAR' && it.text === apexText) { draw(it.box, '#12805c') }              // the single hero, green
        else if (verdict !== 'CLEAR' && coLoudTexts.includes(it.text)) { draw(it.box, '#d1242f') }  // ties/flat offenders, red
      }
      const bg = verdict === 'CLEAR' ? '#12805c' : '#d1242f'
      const badge = document.createElement('div'); badge.textContent = `HIERARCHY: ${verdict}`
      badge.style.cssText = `position:absolute;left:16px;top:16px;color:#fff;background:${bg};padding:8px 14px;border-radius:8px;font:600 15px -apple-system,sans-serif`; layer.appendChild(badge)
      document.body.appendChild(layer)
    }, { items, verdict, apexText: rec.apex, coLoudTexts: rec.coLoud.length ? rec.coLoud : items.map(i => i.text) })
    rec.shot = join(shotDir, basename(t).replace(/\.html?$/i, '') + '.hier.png')
    await page.screenshot({ path: rec.shot, fullPage: true, scale: 'device' })
  }
  results.push(rec)
}

await browser.close()

if (asJson) { console.log(JSON.stringify(results, null, 2)) } else {
  for (const r of results) {
    console.log(`\n${r.target}  ->  ${r.verdict}`)
    console.log(`   ${r.why || ''}`)
    if (r.verdict === 'CLEAR') { console.log(`   hero: "${r.apex}"`) } else if (r.coLoud.length) { console.log(`   co-loudest: ${r.coLoud.map((c) => `"${c}"`).join(', ')}`) }
  }
  console.log('')
}
