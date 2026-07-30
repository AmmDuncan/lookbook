#!/usr/bin/env node
// craft-compare.mjs — measure whether a redesign actually improved anything.
//
// "It looks better now" is the least trustworthy sentence in design work, because
// the person saying it just spent an hour on it. This runs both the DOM profile
// and the pixel pass over a before and an after, and prints the deltas with the
// reference range beside them, so the claim either survives contact with the
// numbers or it doesn't.
//
// Usage:
//   node craft-compare.mjs <before> <after> [--archetype table] [--name slug]

import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { extractSpec } from './extract-spec.mjs'

const HERE = dirname(fileURLToPath(import.meta.url))
const CORPUS = join(HERE, '..', 'references', 'specs')
const VISUAL = join(HERE, '..', 'references', 'visual')

function corpusRange(pick, lo = 0.25, hi = 0.75) {
  if (!existsSync(CORPUS)) return null
  const rows = readdirSync(CORPUS)
    .filter((f) => f.endsWith('.json'))
    .map((f) => JSON.parse(readFileSync(join(CORPUS, f), 'utf8')))
  const vals = rows.map(pick).filter((v) => typeof v === 'number' && Number.isFinite(v))
  if (!vals.length) return null
  const s = vals.sort((a, b) => a - b)
  return { lo: s[Math.floor(s.length * lo)], hi: s[Math.floor(s.length * hi)] }
}

function visualFor(target, name) {
  execFileSync('node', [join(HERE, 'visual-pass.mjs'), target, '--name', name], { stdio: 'pipe' })
  return JSON.parse(readFileSync(join(VISUAL, `${name}.visual.json`), 'utf8'))
}

const [before, after] = process.argv.slice(2).filter((a) => !a.startsWith('--'))
const nameFlag = process.argv.indexOf('--name')
const slug = nameFlag === -1 ? 'compare' : process.argv[nameFlag + 1]

if (!before || !after) {
  console.error('usage: craft-compare.mjs <before> <after> [--name slug]')
  process.exit(1)
}

const tmp = join(HERE, '.compare-out')
const [b, a] = [
  (await extractSpec(before, { out: tmp, name: `${slug}-before` })).spec,
  (await extractSpec(after, { out: tmp, name: `${slug}-after` })).spec,
]
const bv = visualFor(before, `${slug}-before`)
const av = visualFor(after, `${slug}-after`)

const proxRange = corpusRange((r) =>
  r.spacing.grouping.confidence !== 'low' ? r.spacing.grouping.medianRatio : null,
)
const accentRange = corpusRange((r) => r.color.accentAreaPct)

// Each row carries the reference BAND, not a direction. Scoring by direction
// rewards moving a number and quietly blesses overshoot — a redesign that pushed
// group separation from 0.33x to 32x scored "improved" on a band of 2-4.5x, which
// is not better, it is a different failure. In range or out; that is the question.
const rows = [
  ['group separation', b.spacing.grouping.medianRatio, a.spacing.grouping.medianRatio, proxRange?.lo ?? 2, 6, 'x'],
  ['body size', b.type.bodySize, a.type.bodySize, 14, 16, 'px'],
  ['text sizes used', b.type.sizes.filter((s) => s >= 12).length, a.type.sizes.filter((s) => s >= 12).length, 2, 7, ''],
  ['colour, from markup', b.color.accentAreaPct, a.color.accentAreaPct, 0, accentRange?.hi ?? 2, '%'],
  ['colour, from pixels', bv.colourPct, av.colourPct, 0, 3, '%'],
  ['focal dominance', bv.dominance, av.dominance, 3.5, 12, 'x'],
  ['ink coverage', bv.inkPct, av.inkPct, 4, 38, '%'],
  ['busyness', bv.busyness, av.busyness, 4, 12, ''],
]

const inRange = (v, lo, hi) => typeof v === 'number' && v >= lo && v <= hi
const mark = (v, lo, hi) => (inRange(v, lo, hi) ? 'in ' : v > hi ? 'OVER' : 'under')

console.log(`CRAFT COMPARE — ${slug}`)
console.log(`  before: ${before}`)
console.log(`  after:  ${after}`)
console.log('')
console.log('  metric                 before          after           reference band')
for (const [label, from, to, lo, hi, unit] of rows) {
  const b1 = `${from}${unit} ${mark(from, lo, hi)}`
  const a1 = `${to}${unit} ${mark(to, lo, hi)}`
  console.log(`  ${label.padEnd(21)} ${b1.padEnd(15)} ${a1.padEnd(15)} ${lo}-${hi}${unit}`)
}

const wasIn = rows.filter(([, f, , lo, hi]) => inRange(f, lo, hi)).length
const nowIn = rows.filter(([, , t, lo, hi]) => inRange(t, lo, hi)).length
const over = rows.filter(([, , t, lo, hi]) => typeof t === 'number' && t > hi)
console.log('')
console.log(`  in reference range: ${wasIn}/${rows.length} before  ->  ${nowIn}/${rows.length} after`)
if (over.length) {
  console.log(`  OVERSHOT (worth checking by eye, not celebrating): ${over.map((r) => r[0]).join(', ')}`)
}
console.log('')
console.log(`  squint before: ${join(VISUAL, `${slug}-before.squint.png`)}`)
console.log(`  squint after:  ${join(VISUAL, `${slug}-after.squint.png`)}`)
console.log('  Open both. The numbers say whether it changed; the squints say whether it got better.')
