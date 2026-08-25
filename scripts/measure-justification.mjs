#!/usr/bin/env node
// measure-justification.mjs — the JUSTIFICATION / DECORATION gate (guardian axis 2).
//
// Ammiel's rule: every foreground element must EARN its place; decoration that carries no
// information is deleted. This gate flags the checkable cases of "earns nothing":
//   1. A DIVIDER that separates nothing — a rule that is the first/last child, or sits in a
//      container without two groups on either side of it. A line grouping one thing is noise.
//   2. A meaningless STANDALONE ICON — a small icon element with no adjacent text AND no
//      accessible label (aria-label / title / alt): pure ornament, no meaning.
//
// Semantic, so it catches TELLS, not all meaninglessness. The number FLAGS, the eye RULES —
// always look at the overlay. Usage:
//   node measure-justification.mjs <file-or-url> [...] [--json] [--shot <dir>]

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
if (!targets.length) { console.error('usage: measure-justification.mjs <file-or-url> [...] [--json] [--shot <dir>]'); process.exit(2) }

const toUrl = (t) => /^https?:\/\//.test(t) ? t : pathToFileURL(t).href

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 })
const results = []

for (const t of targets) {
  await page.goto(toUrl(t), { waitUntil: 'networkidle' })
  const findings = await page.evaluate(() => {
    const px = (v) => parseFloat(v) || 0
    const vis = (el) => { const s = getComputedStyle(el); return s.display !== 'none' && s.visibility !== 'hidden' && +s.opacity !== 0 }
    const rectOf = (el) => { const r = el.getBoundingClientRect(); return { el, w: r.width, h: r.height, x: r.left, y: r.top } }
    const out = []

    // 1. DIVIDERS that separate nothing
    for (const el of document.querySelectorAll('*')) {
      const tag = el.tagName.toLowerCase()
      const s = getComputedStyle(el)
      const r = el.getBoundingClientRect()
      const isRule = tag === 'hr' || (r.height <= 4 && r.width >= 40 && (px(s.borderTopWidth) >= 1 || px(s.borderBottomWidth) >= 1 || (s.backgroundColor && s.backgroundColor !== 'rgba(0, 0, 0, 0)')))
      if (!isRule || !vis(el)) { continue }
      const parent = el.parentElement
      if (!parent) { continue }
      const sibs = [...parent.children].filter((c) => c !== el && vis(c) && c.getBoundingClientRect().height >= 8)
      const before = sibs.filter((c) => c.getBoundingClientRect().top < r.top).length
      const after = sibs.filter((c) => c.getBoundingClientRect().top >= r.bottom - 2).length
      if (before === 0 || after === 0) {
        out.push({ kind: 'divider', why: before === 0 ? 'nothing above it' : 'nothing below it', box: { x: r.left, y: r.top - 4, w: r.width, h: Math.max(r.height, 8) } })
      }
    }

    // 2. Standalone icons with no adjacent text AND no accessible label
    for (const el of document.querySelectorAll('svg, i, [class*="icon"], [class*="Icon"]')) {
      if (!vis(el)) { continue }
      const r = el.getBoundingClientRect()
      if (r.width < 8 || r.width > 48 || r.height < 8 || r.height > 48) { continue }
      // labelled = aria-label/title/alt on the icon OR any ancestor (role=img wrapper is common)
      let labelled = false
      for (let a = el; a && a !== document.body; a = a.parentElement) {
        if (a.getAttribute('aria-label') || a.getAttribute('title') || a.getAttribute('alt') || (a === el && a.querySelector('title'))) { labelled = true; break }
      }
      if (labelled) { continue }
      // adjacent text: same row within 40px, OR directly BELOW within 40px (a hero icon over a title)
      let near = false
      for (const o of document.querySelectorAll('span, p, label, a, h1, h2, h3, h4, button, li, td')) {
        if (!o.textContent.trim() || !vis(o)) { continue }
        const b = o.getBoundingClientRect()
        const sameRow = Math.min(r.bottom, b.bottom) - Math.max(r.top, b.top) > 4
        const closeX = Math.abs(b.left - r.right) < 40 || Math.abs(r.left - b.right) < 40
        const below = b.top >= r.bottom - 2 && b.top - r.bottom < 40 && Math.min(r.right, b.right) - Math.max(r.left, b.left) > -20
        if ((sameRow && closeX) || below) { near = true; break }
      }
      if (!near) { out.push({ kind: 'icon', why: 'no label and no adjacent text', box: { x: r.left, y: r.top, w: r.width, h: r.height } }) }
    }
    return out
  })

  const verdict = findings.length === 0 ? 'JUSTIFIED' : 'DECORATION'
  const rec = { target: basename(t), verdict, findings }

  if (shotDir) {
    await page.evaluate(({ findings }) => {
      const layer = document.createElement('div'); layer.style.cssText = 'position:absolute;inset:0;z-index:99999;pointer-events:none'
      const sx = window.scrollX, sy = window.scrollY
      for (const f of findings) { const d = document.createElement('div'); d.style.cssText = `position:absolute;left:${f.box.x + sx - 3}px;top:${f.box.y + sy - 3}px;width:${f.box.w + 6}px;height:${f.box.h + 6}px;outline:2px solid #d1242f;background:#d1242f14`; layer.appendChild(d) }
      const bg = findings.length ? '#d1242f' : '#12805c'
      const badge = document.createElement('div'); badge.textContent = findings.length ? `JUSTIFICATION: ${findings.length} decoration` : 'JUSTIFICATION: clean'
      badge.style.cssText = `position:absolute;left:16px;top:16px;color:#fff;background:${bg};padding:8px 14px;border-radius:8px;font:600 15px -apple-system,sans-serif`; layer.appendChild(badge)
      document.body.appendChild(layer)
    }, { findings })
    rec.shot = join(shotDir, basename(t).replace(/\.html?$/i, '') + '.justification.png')
    await page.screenshot({ path: rec.shot, fullPage: true, scale: 'device' })
  }
  results.push(rec)
}

await browser.close()

if (asJson) { console.log(JSON.stringify(results, null, 2)) } else {
  for (const r of results) {
    console.log(`\n${r.target}  ->  ${r.verdict}  (${r.findings.length} decoration)`)
    for (const f of r.findings) { console.log(`   ${f.kind}: ${f.why}`) }
  }
  console.log('')
}
