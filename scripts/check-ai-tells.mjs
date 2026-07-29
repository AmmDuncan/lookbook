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

const CHECKS = [leftAccentCallout]

async function lint(path) {
  const src = await readFile(path, 'utf8')
  const css = [...src.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)].map((m) => m[1]).join('\n')
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
    const hit = leftAccentCallout({ selector: 'inline style', body: m[1] })
    if (hit) {
      findings.push(hit)
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
