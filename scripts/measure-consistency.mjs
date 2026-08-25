#!/usr/bin/env node
// measure-consistency.mjs — the CONSISTENCY gate (canon gate-zero, 4th gate of intentional).
//
// Canon: "the same thing looks the same everywhere — one caps-eyebrow level per surface, one status
// treatment, one way of expressing a label/value pair. A second way of doing an already-solved thing
// is a defect." Measured as STYLE DIVERGENCE within a role-group, plus the size of the corner-radius
// vocabulary (too many distinct radii = inconsistent rounding).
//
// Role-groups checked (each SHOULD be uniform): <label>, eyebrow headings (h3/h4), filled buttons,
// ghost buttons. A group with >1 distinct style signature = that role is styled multiple ways.
//
// The number FLAGS, the eye RULES — always look at the overlay. Usage:
//   node measure-consistency.mjs <file-or-url> [...] [--json] [--shot <dir>]

import { createRequire } from 'node:module'
import { homedir } from 'node:os'
import { join, basename } from 'node:path'
import { pathToFileURL } from 'node:url'

const require = createRequire(join(homedir(), '.claude/lib/wren/node_modules/noop.js'))
const { chromium } = require('playwright')
const RADIUS_VOCAB_MAX = 4   // >4 distinct CARD radii = inconsistent rounding (soft signal; a design
                             // system legitimately runs sm/md/lg + one more. Role-divergence below is
                             // the high-confidence check; radius is a surfaced flag, the eye rules.)

const args = process.argv.slice(2)
const asJson = args.includes('--json')
const shotIdx = args.indexOf('--shot')
const shotDir = shotIdx >= 0 ? args[shotIdx + 1] : null
const targets = args.filter((a) => !a.startsWith('--') && a !== shotDir)
if (!targets.length) { console.error('usage: measure-consistency.mjs <file-or-url> [...] [--json] [--shot <dir>]'); process.exit(2) }

const toUrl = (t) => /^https?:\/\//.test(t) ? t : pathToFileURL(t).href

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 })
const results = []

for (const t of targets) {
  await page.goto(toUrl(t), { waitUntil: 'networkidle' })
  const data = await page.evaluate(() => {
    const rgb = (s) => { const m = /rgba?\(([^)]+)\)/.exec(s || ''); if (!m) { return null } const p = m[1].split(',').map(Number); return { r: p[0], g: p[1], b: p[2] } }
    const colorTier = (c) => c ? Math.round((c.r + c.g + c.b) / 3 / 32) : 0   // coarse ink bucket
    const groups = {}   // roleKey -> [{sig, text, box}]
    const radii = new Set()
    const push = (role, el, sig, r) => { (groups[role] ||= []).push({ sig, text: (el.textContent || '').trim().slice(0, 22), box: { x: r.left, y: r.top, w: r.width, h: r.height } }) }
    for (const el of document.querySelectorAll('*')) {
      const tag = el.tagName.toLowerCase()
      const r = el.getBoundingClientRect()
      const s = getComputedStyle(el)
      if (r.width < 8 || r.height < 6 || s.display === 'none' || s.visibility === 'hidden') { continue }
      const size = Math.round(parseFloat(s.fontSize))
      const weight = parseFloat(s.fontWeight) >= 600 ? 'b' : 'n'
      const tf = s.textTransform
      const sig = `${size}|${weight}|${tf}|${colorTier(rgb(s.color))}`
      // role assignment (elements that SHOULD be uniform)
      // Only single-role text elements are checked — labels and eyebrow headings. NOT buttons:
      // <button> is role-ambiguous (nav tabs, primary actions, destructive all share the tag), so
      // grouping them false-flags a tab styled unlike a Save button (disproved on Settings specimen).
      if (tag === 'label' && el.textContent.trim()) { push('label', el, sig, r) }
      else if ((tag === 'h3' || tag === 'h4') && el.textContent.trim()) { push('eyebrow(h3/h4)', el, `${size}|${weight}|${tf}`, r) }
      // radius vocabulary among CARD-ish boxes. Exclude fully-round (pill/avatar): a radius >= 20px or
      // >= half the height is an intentional round SHAPE, not part of the card-radius vocabulary.
      const rad = parseFloat(s.borderTopLeftRadius) || 0
      const painted = (s.backgroundColor && s.backgroundColor !== 'rgba(0, 0, 0, 0)') || parseFloat(s.borderTopWidth) >= 1
      const fullyRound = rad >= 20 || rad >= r.height / 2 - 1
      if (rad >= 3 && !fullyRound && painted && r.width >= 40 && r.height >= 20) { radii.add(Math.round(rad)) }
    }
    return { groups, radii: [...radii].sort((a, b) => a - b) }
  })

  const findings = []
  for (const [role, members] of Object.entries(data.groups)) {
    if (members.length < 2) { continue }
    const sigs = [...new Set(members.map((m) => m.sig))]
    if (sigs.length > 1) {
      // minority signature(s) = the offenders (the majority sig is "the established way")
      const counts = {}; members.forEach((m) => { counts[m.sig] = (counts[m.sig] || 0) + 1 })
      const mode = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0]
      const offenders = members.filter((m) => m.sig !== mode)
      findings.push({ kind: 'role', role, treatments: sigs.length, offenders })
    }
  }
  if (data.radii.length > RADIUS_VOCAB_MAX) {
    findings.push({ kind: 'radius', role: 'corner radii', treatments: data.radii.length, values: data.radii, offenders: [] })
  }

  const verdict = findings.length === 0 ? 'CONSISTENT' : 'INCONSISTENT'
  const rec = { target: basename(t), verdict, findings }

  if (shotDir) {
    await page.evaluate(({ findings }) => {
      const layer = document.createElement('div'); layer.style.cssText = 'position:absolute;inset:0;z-index:99999;pointer-events:none'
      const sx = window.scrollX, sy = window.scrollY
      for (const f of findings) { for (const o of f.offenders || []) { const d = document.createElement('div'); d.style.cssText = `position:absolute;left:${o.box.x + sx - 2}px;top:${o.box.y + sy - 2}px;width:${o.box.w + 4}px;height:${o.box.h + 4}px;outline:2px solid #d1242f;background:#d1242f18`; layer.appendChild(d) } }
      const bg = findings.length ? '#d1242f' : '#12805c'
      const badge = document.createElement('div'); badge.textContent = findings.length ? `CONSISTENCY: ${findings.length} issue(s)` : 'CONSISTENCY: clean'
      badge.style.cssText = `position:absolute;left:16px;top:16px;color:#fff;background:${bg};padding:8px 14px;border-radius:8px;font:600 15px -apple-system,sans-serif`; layer.appendChild(badge)
      document.body.appendChild(layer)
    }, { findings })
    rec.shot = join(shotDir, basename(t).replace(/\.html?$/i, '') + '.consistency.png')
    await page.screenshot({ path: rec.shot, fullPage: true, scale: 'device' })
  }
  results.push(rec)
}

await browser.close()

if (asJson) { console.log(JSON.stringify(results, null, 2)) } else {
  for (const r of results) {
    console.log(`\n${r.target}  ->  ${r.verdict}  (${r.findings.length} issue)`)
    for (const f of r.findings) {
      if (f.kind === 'radius') { console.log(`   ${f.treatments} distinct corner radii: [${f.values.join(', ')}]px — pick fewer`) }
      else { console.log(`   ${f.role} styled ${f.treatments} ways: ${f.offenders.map((o) => `"${o.text}"`).join(', ')} differ from the norm`) }
    }
  }
  console.log('')
}
