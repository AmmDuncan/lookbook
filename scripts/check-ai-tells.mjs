#!/usr/bin/env node
/**
 * AI-tell linter — the checkable half of "does this look generated?".
 *
 * "Generic-AI tells" has been a judgement call with no rule behind it, which is
 * exactly why the left-accent callout survived six independent builds and three
 * design reviews. This makes the specific, repeatable tells measurable.
 *
 * Calibration rule for every check added here: it must pass good work. A checker
 * that fires on a legitimate 1px divider or a transparent nav placeholder drags
 * everything toward the average, which is the failure this exists to prevent.
 *
 * Usage: node check-ai-tells.mjs <file.html> [more.html ...]
 */
import { readFile } from 'node:fs/promises'

/** Split a stylesheet into { selector, body } rules, ignoring at-rule wrappers. */
function rules(css) {
  const out = []
  const re = /([^{}]+)\{([^{}]*)\}/g
  let m
  while ((m = re.exec(css))) {
    const selector = m[1].trim().replace(/\s+/g, ' ')
    if (selector.startsWith('@')) {
      continue
    }
    out.push({ selector, body: m[2] })
  }
  return out
}

const decl = (body, prop) => {
  const m = new RegExp(`(?:^|;)\\s*${prop}\\s*:([^;]+)`, 'i').exec(body)
  return m ? m[1].trim() : null
}

const widthPx = (value) => {
  const m = /(-?[\d.]+)px/.exec(value ?? '')
  return m ? Number(m[1]) : null
}

/** A colour that actually paints. `transparent` and `currentColor` placeholders do not. */
const paints = (value) => {
  if (!value) {
    return false
  }
  const v = value.toLowerCase()
  return !/\btransparent\b/.test(v) && !/\bnone\b/.test(v)
}

/**
 * TELL 1 — the left-accent callout.
 *
 * A tinted block with a coloured bar down its left edge. Ubiquitous in generated
 * UI, near-absent from shipped product surfaces, which carry the same emphasis
 * with a heading, an icon, or the background tint alone.
 *
 * Deliberately narrow: it needs BOTH a painted background AND a left border of
 * 2px or more that actually paints. A 1px divider, a table cell rule and a
 * `border-left: 3px solid transparent` nav placeholder all pass clean.
 */
function leftAccentCallout(rule) {
  const border = decl(rule.body, 'border-left') ?? decl(rule.body, 'border-inline-start')
  if (!border) {
    return null
  }
  const w = widthPx(border)
  if (w === null || w < 2 || !paints(border)) {
    return null
  }
  const bg = decl(rule.body, 'background') ?? decl(rule.body, 'background-color')
  if (!bg || !paints(bg)) {
    return null
  }
  // Nav/tab active states legitimately mark the selected item with an edge bar.
  if (/(nav|menu|tab|sidebar|\.active|\[aria-current)/i.test(rule.selector)) {
    return null
  }
  return `left-accent callout — "${rule.selector}" tints a block and puts a ${w}px bar down its left edge. Shipped products carry that emphasis with a heading, an icon or the tint alone. Drop the border-left.`
}

/**
 * TELL 2 — the rounded left-bar. Ammiel's most-detested generated tell (2026-08-25):
 * a rounded element with a coloured bar down ONLY its left edge. The squared accent
 * fights the corner radius and reads as machine-made. Broader than TELL 1 — it does
 * NOT require a background tint, which is exactly why the tinted-only rule missed it.
 *
 * Fires on: border-left >= 2px that paints + a non-zero border-radius, WITHOUT a
 * symmetric all-side `border` (that's a bordered card, not an accent). Nav/tab/active
 * edge-markers are exempt, same as TELL 1.
 */
function roundedLeftBar(rule) {
  const border = decl(rule.body, 'border-left') ?? decl(rule.body, 'border-inline-start')
  if (!border) {
    return null
  }
  const w = widthPx(border)
  if (w === null || w < 2 || !paints(border)) {
    return null
  }
  const radius = decl(rule.body, 'border-radius')
    ?? decl(rule.body, 'border-top-left-radius')
    ?? decl(rule.body, 'border-top-right-radius')
    ?? decl(rule.body, 'border-bottom-left-radius')
  if (!radius || widthPx(radius) === 0) {
    return null
  }
  // A symmetric card border (all four sides via `border:`) is not a left accent.
  const full = decl(rule.body, 'border')
  if (full && (widthPx(full) ?? 0) >= 2 && paints(full)) {
    return null
  }
  // NOTE: role (nav/active/tab) does NOT exempt. Ammiel's rule (2026-08-25): the crime is
  // a border-left riding a ROUNDED edge — square strip-ends on round corners — whatever the
  // element's job. A rounded active marker with a border-left is the same conflict.
  return `rounded + left-bar — "${rule.selector}" rounds the corners AND runs a ${w}px bar down the left EDGE (square strip-ends fighting the round corner). Re-do it as an INSET accent (a strip inset from the edge, or its own rounding) — keep the colour, lose the edge conflict.`
}

const CHECKS = [leftAccentCallout, roundedLeftBar]

async function lint(path) {
  const src = await readFile(path, 'utf8')
  const css = [...src.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)].map((m) => m[1]).join('\n').replace(/\/\*[\s\S]*?\*\//g, '')
  const findings = []
  for (const rule of rules(css)) {
    for (const check of CHECKS) {
      const hit = check(rule)
      if (hit) {
        findings.push(hit)
      }
    }
  }
  // Inline styles bypass the stylesheet entirely — check them too, or the rule is
  // trivially defeated by moving the declaration onto the element.
  for (const m of src.matchAll(/style="([^"]*)"/gi)) {
    for (const check of CHECKS) {
      const hit = check({ selector: 'inline style', body: m[1] })
      if (hit) {
        findings.push(hit)
      }
    }
  }
  return findings
}

const files = process.argv.slice(2)
if (!files.length) {
  console.error('Usage: node check-ai-tells.mjs <file.html> [more.html ...]')
  process.exit(2)
}

let total = 0
for (const f of files) {
  const findings = await lint(f)
  total += findings.length
  console.log(`\n${f}`)
  if (!findings.length) {
    console.log('  clean — no checked AI tells')
  }
  for (const x of findings) {
    console.log(`  TELL: ${x}`)
  }
}
console.log(`\n${total} tell(s) across ${files.length} file(s)`)
process.exit(total ? 1 : 0)
