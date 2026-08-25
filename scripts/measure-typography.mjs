#!/usr/bin/env node
// measure-typography.mjs — the TYPOGRAPHY / WEIGHT gate (Ammiel, 2026-08-25).
//
// "Font weights thrown about" - labels heavy for no reason, buttons heavy, too many weights. A
// proper type system uses a SMALL weight set with ROLES: body/labels/metadata quiet (regular),
// values/UI medium, and bold reserved for HEADINGS. This gate flags the checkable violations:
//   1. WEIGHT VOCABULARY  - more than 3 distinct font-weights on the surface = thrown about.
//   2. INVERTED EMPHASIS  - a label sits ABOVE its value and is HEAVIER than it (the label shouts,
//      the value whispers). The value should carry, the label should be quiet.
//   3. HEAVY BUTTONS      - a button at weight >= 600. UI text rarely needs bold; 500 reads cleaner.
//   4. BOLD BODY          - non-heading text (not h1-h4, not >=20px) at weight >= 600, aggregate:
//      when most body text is bold, nothing is emphasised.
//
// The number FLAGS, the eye RULES (a bold value for real emphasis can be right) - look at the overlay.
// Usage: node measure-typography.mjs <file-or-url> [...] [--json] [--shot <dir>]

import { createRequire } from 'node:module'
import { homedir } from 'node:os'
import { join, basename } from 'node:path'
import { pathToFileURL } from 'node:url'

const require = createRequire(join(homedir(), '.claude/lib/wren/node_modules/noop.js'))
const { chromium } = require('playwright')
const WEIGHT_VOCAB_MAX = 3
const HEADING_SIZE = 20   // >= this (or h1-h4) may be bold; below is "body"

const args = process.argv.slice(2)
const asJson = args.includes('--json')
const shotIdx = args.indexOf('--shot')
const shotDir = shotIdx >= 0 ? args[shotIdx + 1] : null
const targets = args.filter((a) => !a.startsWith('--') && a !== shotDir)
if (!targets.length) { console.error('usage: measure-typography.mjs <file-or-url> [...] [--json] [--shot <dir>]'); process.exit(2) }

const toUrl = (t) => /^https?:\/\//.test(t) ? t : pathToFileURL(t).href

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 })
const results = []

for (const t of targets) {
  await page.goto(toUrl(t), { waitUntil: 'networkidle' })
  const data = await page.evaluate(({ HEADING_SIZE }) => {
    const TEXT = ['h1', 'h2', 'h3', 'h4', 'p', 'span', 'a', 'label', 'button', 'strong', 'li', 'td', 'div']
    const items = []
    for (const el of document.querySelectorAll('*')) {
      const tag = el.tagName.toLowerCase()
      if (!TEXT.includes(tag)) { continue }
      // leaf text only
      if ([...el.children].some((c) => c.textContent.trim())) { continue }
      const txt = el.textContent.trim()
      if (!txt) { continue }
      const r = el.getBoundingClientRect()
      const s = getComputedStyle(el)
      if (r.width < 8 || r.height < 6 || s.display === 'none' || s.visibility === 'hidden') { continue }
      const size = parseFloat(s.fontSize)
      const weight = parseFloat(s.fontWeight) || 400
      const cm = /rgba?\(([^)]+)\)/.exec(s.color)
      const [cr, cg, cb] = cm ? cm[1].split(',').map(Number) : [0, 0, 0]
      const darkness = 1 - (0.2126 * cr + 0.7152 * cg + 0.0722 * cb) / 255   // dark text = high
      const eyebrow = s.textTransform === 'uppercase' && size <= 14   // small-caps section header = heading-role
      const heading = ['h1', 'h2', 'h3', 'h4'].includes(tag) || size >= HEADING_SIZE || eyebrow
      items.push({ tag, size, weight, darkness, heading, eyebrow, text: txt.slice(0, 22), box: { x: r.left, y: r.top, w: r.width, h: r.height }, top: r.top, bottom: r.bottom, left: r.left, right: r.right })
    }
    return items
  }, { HEADING_SIZE })

  const findings = []
  // 1. weight vocabulary
  const weights = [...new Set(data.map((i) => i.weight))].sort((a, b) => a - b)
  if (weights.length > WEIGHT_VOCAB_MAX) { findings.push({ kind: 'weight-vocab', why: `${weights.length} distinct weights [${weights.join(', ')}] - cap at ${WEIGHT_VOCAB_MAX}`, offenders: [] }) }

  // 2. inverted emphasis: a smaller-or-equal element directly above another, but HEAVIER
  const sameCol = (a, b) => Math.min(a.right, b.right) - Math.max(a.left, b.left) >= 20
  for (const a of data) {
    if (a.eyebrow || a.heading) { continue }   // an eyebrow/heading above content is not a label->value pair
    // nearest element below a, same column, within 24px
    let b = null, best = Infinity
    for (const c of data) {
      if (c === a || !sameCol(a, c) || c.top < a.bottom - 2) { continue }
      const g = c.top - a.bottom
      if (g >= 0 && g <= 24 && g < best) { best = g; b = c }
    }
    if (!b) { continue }
    // skip when the lower element is MORE MUTED than the upper - then upper is a PRIMARY identifier
    // over a secondary descriptor (plate over model, name over role), not a quiet label over its value
    if (b.darkness < a.darkness - 0.12) { continue }
    if (a.size <= b.size && a.weight > b.weight) {
      findings.push({ kind: 'inverted', why: `"${a.text}" (${a.weight}) is heavier than its value "${b.text}" (${b.weight}) - label should be the quiet one`, offenders: [{ box: a.box, text: a.text }] })
    }
  }

  // 3. heavy buttons
  for (const i of data.filter((x) => x.tag === 'button' && x.weight >= 600)) {
    findings.push({ kind: 'heavy-button', why: `button "${i.text}" at ${i.weight} - 500 reads cleaner`, offenders: [{ box: i.box, text: i.text }] })
  }

  // 4. bold body (aggregate): most non-heading text is bold
  const body = data.filter((i) => !i.heading)
  const boldBody = body.filter((i) => i.weight >= 600)
  if (body.length >= 4 && boldBody.length / body.length > 0.5) {
    findings.push({ kind: 'bold-body', why: `${boldBody.length}/${body.length} non-heading elements are bold (>=600) - reserve bold for headings`, offenders: boldBody.map((i) => ({ box: i.box, text: i.text })) })
  }

  const verdict = findings.length === 0 ? 'CLEAN' : 'ISSUES'
  const rec = { target: basename(t), verdict, weights, findings }

  if (shotDir) {
    await page.evaluate(({ findings }) => {
      const layer = document.createElement('div'); layer.style.cssText = 'position:absolute;inset:0;z-index:99999;pointer-events:none'
      const sx = window.scrollX, sy = window.scrollY
      for (const f of findings) { for (const o of f.offenders || []) { const d = document.createElement('div'); d.style.cssText = `position:absolute;left:${o.box.x + sx - 2}px;top:${o.box.y + sy - 2}px;width:${o.box.w + 4}px;height:${o.box.h + 4}px;outline:2px solid #d1242f;background:#d1242f14`; layer.appendChild(d) } }
      const bg = findings.length ? '#d1242f' : '#12805c'
      const badge = document.createElement('div'); badge.textContent = findings.length ? `TYPOGRAPHY: ${findings.length} issue(s)` : 'TYPOGRAPHY: clean'
      badge.style.cssText = `position:absolute;left:16px;top:16px;color:#fff;background:${bg};padding:8px 14px;border-radius:8px;font:600 15px -apple-system,sans-serif`; layer.appendChild(badge)
      document.body.appendChild(layer)
    }, { findings })
    rec.shot = join(shotDir, basename(t).replace(/\.html?$/i, '') + '.typography.png')
    await page.screenshot({ path: rec.shot, fullPage: true, scale: 'device' })
  }
  results.push(rec)
}

await browser.close()

if (asJson) { console.log(JSON.stringify(results, null, 2)) } else {
  for (const r of results) {
    console.log(`\n${r.target}  ->  ${r.verdict}  (weights: ${r.weights.join(', ')})`)
    for (const f of r.findings) { console.log(`   ${f.kind}: ${f.why}`) }
  }
  console.log('')
}
