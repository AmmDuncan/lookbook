#!/usr/bin/env node
// measure-proximity.mjs — the GRAMMAR gate check-spacing-scale is missing.
//
// check-spacing-scale asks "are your gap VALUES on the allowed set?" (vocabulary) and
// rewards a flat form where every gap is a uniform on-scale 16px. This asks the real
// question a human designer answers: "is each thing BONDED to what it belongs to?"
//
// THE BONDING LAW (proximity, Gestalt): a field label sits CLOSER to its own control
// than it is separated from the element above it. label->control gap < gap-above-label.
// Flat design breaks it — every gap equal, so nothing reads as grouped.
//
// v1 (gap-distribution / CV) was DISPROVED 2026-08-25: margin-collapse artifacts gave
// a visually-flat form spurious tiers and a false INTENTIONAL. The histogram can't tell
// an accidental 50px from a designed group break. The SEQUENCE can. This is v2.
//
// Measures RENDERED geometry (bounding boxes), not CSS source — a human judges pixels.
//
// Usage:
//   node measure-proximity.mjs <file-or-url> [...] [--json]

import { createRequire } from 'node:module'
import { homedir } from 'node:os'
import { join, basename } from 'node:path'
import { pathToFileURL } from 'node:url'

const require = createRequire(join(homedir(), '.claude/lib/wren/node_modules/noop.js'))
const { chromium } = require('playwright')

const BOND_RATIO = 0.7    // label->control must be <= 70% of the gap above the label
const MAX_LABEL_GAP = 40  // above this, a label isn't "attached" to the box below it
const PASS_SCORE = 0.6    // >=60% of fields bonded => intentional grouping

const args = process.argv.slice(2)
const asJson = args.includes('--json')
const shotIdx = args.indexOf('--shot')
const shotDir = shotIdx >= 0 ? args[shotIdx + 1] : null
const targets = args.filter((a, i) => !a.startsWith('--') && a !== shotDir)
if (!targets.length) { console.error('usage: measure-proximity.mjs <file-or-url> [...] [--json] [--shot <dir>]'); process.exit(2) }

const toUrl = (t) => /^https?:\/\//.test(t) ? t : pathToFileURL(t).href

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 })
const results = []

for (const t of targets) {
  await page.goto(toUrl(t), { waitUntil: 'networkidle' })
  const data = await page.evaluate(() => {
    const CONTROL = ['input', 'select', 'textarea', 'button']
    const isContent = (el) => {
      const tag = el.tagName.toLowerCase()
      return CONTROL.includes(tag) || ['label', 'h1', 'h2', 'h3', 'h4', 'p', 'span'].includes(tag)
    }
    const boxes = []
    for (const el of document.querySelectorAll('*')) {
      if (!isContent(el)) { continue }
      const r = el.getBoundingClientRect()
      const st = getComputedStyle(el)
      if (r.width < 40 || r.height < 8) { continue }
      if (st.visibility === 'hidden' || st.display === 'none' || +st.opacity === 0) { continue }
      const isControl = CONTROL.includes(el.tagName.toLowerCase())
      if (!isControl && !el.textContent.trim()) { continue }
      boxes.push({ top: r.top, bottom: r.bottom, left: r.left, right: r.right, tag: el.tagName.toLowerCase(), control: isControl })
    }
    // keep innermost leaves (drop wrappers that fully contain another captured box)
    const leaves = boxes.filter(b =>
      !boxes.some(o => o !== b && o.top >= b.top - 1 && o.bottom <= b.bottom + 1 &&
        o.left >= b.left - 1 && o.right <= b.right + 1 && (o.bottom - o.top) < (b.bottom - b.top) - 1))
    leaves.sort((a, b) => a.top - b.top || a.left - b.left)

    const sameCol = (a, b) => Math.min(a.right, b.right) - Math.max(a.left, b.left) >= 20
    const gap = (a, b) => b.top - a.bottom   // a above b, same column

    // Field = a label paired with the nearest CONTROL BELOW it in the SAME COLUMN.
    // (Not the immediately-next leaf in sort order — in a flex row of 3 fields the next leaf
    // is the neighbouring label, not this label's input. Pair by column+below instead.)
    const fields = []
    for (let i = 0; i < leaves.length; i++) {
      const label = leaves[i]
      if (label.control) { continue }
      // nearest control directly below, same column, within the label-gap window
      let ctrl = null, best = Infinity
      for (let j = 0; j < leaves.length; j++) {
        const c = leaves[j]
        if (!c.control || !sameCol(label, c)) { continue }
        const g = gap(label, c)
        if (g < 0 || g > 40) { continue }
        if (g < best) { best = g; ctrl = c }
      }
      if (!ctrl) { continue }
      // reject if some OTHER label sits between this label and the control (control belongs to it)
      const intervening = leaves.some(x => !x.control && x !== label && sameCol(label, x) &&
        x.top > label.top + 1 && x.bottom <= ctrl.top + 1)
      if (intervening) { continue }
      const labelGap = best
      // gap ABOVE the label = nearest stacked box above it in the column
      let aboveGap = null, bestAbove = Infinity
      for (let j = 0; j < leaves.length; j++) {
        const a = leaves[j]
        if (a === label || !sameCol(a, label) || a.bottom > label.top + 2) { continue }
        const g = gap(a, label)
        if (g >= 0 && g < bestAbove) { bestAbove = g; aboveGap = g }
      }
      fields.push({
        labelGap: +labelGap.toFixed(1),
        aboveGap: aboveGap == null ? null : +aboveGap.toFixed(1),
        rect: { lx: label.left, lb: label.bottom, ct: ctrl.top, cl: ctrl.left, cr: ctrl.right },
      })
    }
    return { fields, leafCount: leaves.length }
  })

  const fields = data.fields
  const scored = fields.filter(f => f.aboveGap != null)
  const bonded = scored.filter(f => f.labelGap <= f.aboveGap * BOND_RATIO)
  const score = scored.length ? bonded.length / scored.length : 0
  const verdict = fields.length === 0 ? 'NO-FIELDS' : score >= PASS_SCORE ? 'INTENTIONAL' : 'FLAT'

  if (shotDir) {
    const bondedSet = fields.map(f => f.aboveGap != null && f.labelGap <= f.aboveGap * BOND_RATIO)
    await page.evaluate(({ fields, bondedSet, score, verdict }) => {
      const layer = document.createElement('div')
      layer.style.cssText = 'position:absolute;inset:0;z-index:99999;pointer-events:none;font:600 12px -apple-system,Segoe UI,sans-serif'
      const sx = window.scrollX, sy = window.scrollY
      fields.forEach((f, i) => {
        const ok = bondedSet[i]
        const col = ok ? '#12805c' : '#d1242f'
        const { lb, ct, cl, cr } = f.rect
        // bracket over the label->control gap, on the right edge of the field
        const band = document.createElement('div')
        const x = cr + sx + 8
        band.style.cssText = `position:absolute;left:${x}px;top:${lb + sy}px;height:${Math.max(ct - lb, 1)}px;width:2px;background:${col}`
        layer.appendChild(band)
        const tag = document.createElement('div')
        tag.textContent = `${ok ? '✓' : '✗'} ${f.labelGap}px`
        tag.style.cssText = `position:absolute;left:${x + 8}px;top:${lb + sy - 2}px;color:#fff;background:${col};padding:1px 6px;border-radius:4px;white-space:nowrap`
        layer.appendChild(tag)
      })
      const badge = document.createElement('div')
      badge.textContent = `PROXIMITY: ${verdict}  ·  score ${score.toFixed(2)}`
      const bg = verdict === 'INTENTIONAL' ? '#12805c' : '#d1242f'
      badge.style.cssText = `position:absolute;left:16px;top:16px;color:#fff;background:${bg};padding:8px 14px;border-radius:8px;font-size:15px;box-shadow:0 2px 8px rgba(0,0,0,.2)`
      layer.appendChild(badge)
      document.body.appendChild(layer)
    }, { fields, bondedSet, score, verdict })
    const outPath = join(shotDir, basename(t).replace(/\.html?$/i, '') + '.prox.png')
    await page.screenshot({ path: outPath, fullPage: true, scale: 'device' })
    results.push({ target: basename(t), verdict, score: +score.toFixed(2), fields: fields.length, scored: scored.length, bonded: bonded.length, detail: fields, shot: outPath })
  } else {
    results.push({ target: basename(t), verdict, score: +score.toFixed(2), fields: fields.length, scored: scored.length, bonded: bonded.length, detail: fields })
  }
}

await browser.close()

if (asJson) {
  console.log(JSON.stringify(results, null, 2))
} else {
  for (const r of results) {
    console.log(`\n${r.target}  ->  ${r.verdict}   (${r.bonded}/${r.scored} fields bonded, score ${r.score})`)
    for (const f of r.detail) {
      const mark = f.aboveGap == null ? '·' : (f.labelGap <= f.aboveGap * 0.7 ? '✓' : '✗')
      console.log(`   ${mark} label->control ${f.labelGap}px   gap-above ${f.aboveGap == null ? 'n/a' : f.aboveGap + 'px'}`)
    }
    if (r.verdict === 'FLAT') { console.log('   -> labels not bonded to their controls. Proximity carries no grouping; reads assembled.') }
  }
  console.log('')
}
