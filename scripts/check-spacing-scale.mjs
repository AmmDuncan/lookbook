#!/usr/bin/env node
// check-spacing-scale.mjs — enforce §5's spacing scale on the source, not the render.
//
// §5 of the design brain names an exact set and calls it "the only values you may
// use". extract-spec.mjs reports a *base unit*, which is a weaker question: a design
// using 6/9/11/22 divides cleanly by nothing useful, yet a base-unit read shrugs and
// says "2px scale, 88% on scale" because everything even divides by 2. Membership in
// the named set is the actual rule, so this gate asks that instead.
//
// Scope is deliberately narrow — padding, margin, gap only. Not font-size (a type
// scale is a different scale), not border-radius (§6 owns that), not border-width
// (hairlines are 1px by definition), not width/height (content dictates those).
//
// Usage:
//   node check-spacing-scale.mjs <files...>          # report
//   node check-spacing-scale.mjs <files...> --fix    # snap to nearest allowed value

import { readFile, writeFile } from 'node:fs/promises'
import { basename } from 'node:path'

/**
 * §5 spacing scale — the complete allowed set. Progressive steps: 2 up to 16,
 * 4 up to 40, then 8 and wider. Keep in sync with the-design-brain.md §5.
 */
export const SCALE = [0, 2, 4, 6, 8, 10, 12, 14, 16, 20, 24, 28, 32, 36, 40, 48, 56, 64, 80, 96, 128]

/**
 * Hairlines are drawing, not spacing — a 1px rule and the 1px nudge that centres
 * against it are correct at 1px, and snapping them to 2 doubles every border in
 * the design. Left alone by both the report and the fixer.
 */
const HAIRLINE_MAX = 1.5

// Longhands and shorthands whose values are pure spacing. `inset`/`top`/`left` are
// excluded on purpose: they position against a box, not within a rhythm, and are
// routinely legitimate odd numbers (centring a 17px icon needs -8.5px).
const SPACING_PROPS =
  /^(margin|padding|gap|row-gap|column-gap|margin-(top|right|bottom|left|inline|block)(-(start|end))?|padding-(top|right|bottom|left|inline|block)(-(start|end))?)$/

/** Nearest allowed value. Ties round up — cramped is the more common failure. */
export function snap(px) {
  let best = SCALE[0]
  let bestD = Infinity
  for (const s of SCALE) {
    const d = Math.abs(s - px)
    if (d < bestD || (d === bestD && s > best)) {
      best = s
      bestD = d
    }
  }
  return best
}

export function isOnScale(px) {
  return SCALE.includes(px) || Math.abs(px) <= HAIRLINE_MAX
}

/**
 * Find every off-scale spacing value in a stylesheet-bearing source file.
 * @returns {{decls: Array, offScale: Array}} matched declarations and the violations
 */
export function analyseSource(src) {
  const decls = []
  // `prop: value;` inside any <style> block or style="" attribute. Values that are
  // not plain px (var(), calc(), %, em) are left alone — they are indirections, and
  // rewriting them would fight the token layer rather than fix the drift.
  const re = /(^|[;{"'\s])([a-z-]+)\s*:\s*([^;{}"']+)\s*(?=[;}"'])/g
  let m
  while ((m = re.exec(src)) !== null) {
    const prop = m[2]
    if (!SPACING_PROPS.test(prop)) continue
    const value = m[3].trim()
    if (/var\(|calc\(|%|\bem\b|rem/.test(value)) continue
    // Escape hatch. Some spacing is content-driven, not rhythm-driven: the inset
    // that reserves room for an input prefix is whatever the prefix measures, and
    // snapping it to the nearest scale step overlaps the prefix with the value.
    // A rule that has no exemption gets disabled instead of obeyed, so mark the
    // exception in the source and let the gate honour it.
    const tail = src.slice(m.index + m[0].length, m.index + m[0].length + 60)
    // The marker may sit after the declaration's `;` and the rule's `}`, so allow
    // both before the comment opens.
    if (/^[\s;}]*\/\*\s*scale-exempt/.test(tail)) continue
    const pxs = [...value.matchAll(/(-?[\d.]+)px/g)].map((x) => parseFloat(x[1]))
    if (!pxs.length) continue
    decls.push({ prop, value, pxs, index: m.index + m[1].length, raw: m[0] })
  }
  const offScale = decls.filter((d) => d.pxs.some((p) => !isOnScale(Math.abs(p))))
  return { decls, offScale }
}

/** Rewrite every off-scale px in spacing declarations to its nearest allowed value. */
export function fixSource(src) {
  const { offScale } = analyseSource(src)
  let out = src
  let changes = 0
  // Replace from the end so earlier offsets stay valid.
  for (const d of [...offScale].sort((a, b) => b.index - a.index)) {
    const fixedValue = d.value.replace(/(-?[\d.]+)px/g, (whole, n) => {
      const px = parseFloat(n)
      const mag = Math.abs(px)
      if (isOnScale(mag)) return whole
      const snapped = snap(mag) * Math.sign(px || 1)
      changes++
      return `${snapped}px`
    })
    if (fixedValue === d.value) continue
    const before = out.slice(0, d.index)
    const after = out.slice(d.index + d.raw.length - (d.raw.length - d.raw.indexOf(d.value) - d.value.length))
    // Rebuild the declaration precisely rather than a blind global replace, which
    // would also hit an identical value on an unrelated property.
    const declStart = d.index
    const declEnd = d.index + d.raw.length - (d.raw.startsWith(d.prop) ? 0 : 0)
    const original = out.slice(declStart, declEnd)
    const rebuilt = original.replace(d.value, fixedValue)
    out = out.slice(0, declStart) + rebuilt + out.slice(declEnd)
    void before
    void after
  }
  return { out, changes }
}

// Only run the CLI when invoked as a command. Without this the report fires on
// every `import`, so the module cannot be reused by another script.
const invokedDirectly = process.argv[1] && process.argv[1].endsWith('check-spacing-scale.mjs')
const files = invokedDirectly ? process.argv.slice(2).filter((a) => !a.startsWith('--')) : []
const doFix = process.argv.includes('--fix')

if (invokedDirectly && !files.length) {
  console.error('usage: check-spacing-scale.mjs <files...> [--fix]')
  process.exit(1)
}

let totalOff = 0
for (const f of files) {
  const src = await readFile(f, 'utf8')
  const { decls, offScale } = analyseSource(src)
  const values = new Map()
  for (const d of offScale) {
    for (const p of d.pxs) {
      const mag = Math.abs(p)
      if (!isOnScale(mag)) values.set(mag, (values.get(mag) || 0) + 1)
    }
  }
  totalOff += offScale.length
  const list = [...values.entries()].sort((a, b) => b[1] - a[1])
  const pct = decls.length ? Math.round((offScale.length / decls.length) * 100) : 0
  console.log(
    `${basename(f).padEnd(26)} ${String(offScale.length).padStart(3)}/${String(decls.length).padEnd(3)} decls off-scale (${String(pct).padStart(2)}%)  ${list
      .map(([v, c]) => `${v}px×${c}→${snap(v)}`)
      .join(' ')}`,
  )

  if (doFix && offScale.length) {
    const { out, changes } = fixSource(src)
    await writeFile(f, out)
    console.log(`${' '.repeat(26)} fixed ${changes} values`)
  }
}
console.log(`\n${totalOff} off-scale declarations across ${files.length} files`)
