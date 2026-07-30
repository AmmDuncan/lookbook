#!/usr/bin/env node
// craft-brief.mjs — turn the reference corpus into build targets, BEFORE markup exists.
//
// extract-spec.mjs measures a screen that already exists, which means the corpus
// only ever arrives as a verdict. That is the expensive end of the loop: the
// screen gets built flat, reviewed, rejected, and rebuilt. The numbers are just as
// usable as instructions — "separate groups by about 3x, one accent, 5-7 sizes,
// 2-3 ink levels" is something you can hold in your head while writing the markup.
//
// Two modes, deliberately the same numbers in both:
//   brief            what to build to, in plain language
//   --check <file>   grade what you built against those same targets
//
// Usage:
//   node craft-brief.mjs [archetype]
//   node craft-brief.mjs --check <url-or-file> [archetype]
//
// Archetypes: table | form | dashboard | detail | marketing | generic

import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { extractSpec } from './extract-spec.mjs'

const HERE = dirname(fileURLToPath(import.meta.url))
const CORPUS = join(HERE, '..', 'references', 'specs')

/**
 * Recompute targets from the corpus on every run rather than hardcoding them, so
 * the brief cannot drift from the spec cards the way a copied number would.
 */
function corpusTargets() {
  if (!existsSync(CORPUS)) return null
  const rows = readdirSync(CORPUS)
    .filter((f) => f.endsWith('.json'))
    .map((f) => JSON.parse(readFileSync(join(CORPUS, f), 'utf8')))
  if (!rows.length) return null

  const pct = (arr, p) => {
    const s = [...arr].sort((a, b) => a - b)
    return s[Math.floor(s.length * p)]
  }
  const measurable = rows.filter((r) => r.spacing.grouping.confidence !== 'low' && r.spacing.grouping.medianRatio)
  const prox = measurable.map((r) => r.spacing.grouping.medianRatio)
  const body = rows.map((r) => r.type.bodySize).filter(Boolean)
  const sizes = rows.map((r) => r.type.distinctSizes).filter(Boolean)
  const accent = rows.map((r) => r.color.accentAreaPct)

  const depth = rows.reduce((acc, r) => {
    const k = r.color.depth.strategy.startsWith('shadow') ? 'shadow' : 'border'
    acc[k] = (acc[k] || 0) + 1
    return acc
  }, {})

  const carrier = rows.reduce((acc, r) => {
    const k = r.type.hierarchyCarriedBy.split(' ')[0]
    acc[k] = (acc[k] || 0) + 1
    return acc
  }, {})

  return {
    n: rows.length,
    proxLow: pct(prox, 0.25),
    proxMid: pct(prox, 0.5),
    bodyLow: pct(body, 0.25),
    bodyMid: pct(body, 0.5),
    sizesMid: pct(sizes, 0.5),
    accentMid: pct(accent, 0.5),
    accentMax: Math.max(...accent),
    borderLed: depth.border || 0,
    shadowLed: depth.shadow || 0,
    inkLed: carrier.ink || 0,
  }
}

const ARCHETYPES = {
  table: {
    label: 'admin list / table',
    grammar: [
      'Search left, filters beside it, bulk action right — one control row above the table.',
      'Anchor column carries identity in two lines: name at full strength, one muted line beneath.',
      'Status as a dot plus a word, or a tinted pill. Never colour on its own.',
      'At most one visible action per row plus an overflow menu.',
      'Pagination footer with an explicit rows-per-page control.',
      'No vertical rules between columns. No raw UUIDs, ISO timestamps or raw enum strings in cells.',
    ],
    density: 'Rows 40-56px for single-line content.',
  },
  form: {
    label: 'form / settings',
    grammar: [
      'Group fields into cards, each with a heading and a one-line description.',
      'Entry fields: label above the input. Toggle rows: control on the left, label and help to its right.',
      'Help text sits under the label, muted, and explains the consequence before the user acts.',
      'Save bar appears only when the form is dirty.',
      'Destructive actions get their own card, last, with an explanation.',
      'One primary action per screen.',
    ],
    density: 'Single column. Field width matches the expected input length.',
  },
  dashboard: {
    label: 'dashboard',
    grammar: [
      'Most important number top-left; 2-4 tiles maximum.',
      'Every tile routes somewhere — a tile nobody clicks is filler.',
      'Charts: colour carries identity, length carries magnitude.',
      'No decorative stat cards.',
    ],
    density: 'Let the numbers breathe; this is the one screen where whitespace is the point.',
  },
  detail: {
    label: 'detail page',
    grammar: [
      'Identity block at top: the human name, not the id.',
      'Breadcrumbs when the object sits 3+ levels deep.',
      'Related lists as child tables, following the table grammar.',
      'Actions grouped, destructive ones separated.',
    ],
    density: 'Key-value rows aligned to one edge.',
  },
  marketing: {
    label: 'marketing / editorial',
    grammar: [
      'Size-led hierarchy is correct here — this is the exception.',
      'Prose measure 45-75 characters.',
      'One idea per section, generous vertical rhythm.',
    ],
    density: 'Two to three times the whitespace of an app screen.',
  },
  generic: { label: 'generic surface', grammar: [], density: '' },
}

function renderBrief(t, archetypeKey) {
  const a = ARCHETYPES[archetypeKey] || ARCHETYPES.generic
  const L = []
  L.push(`CRAFT BRIEF — ${a.label}`)
  L.push(`Targets derived from ${t.n} real shipped sites. Build to these; don't discover them in review.`)
  L.push('')
  // Answer these before any of the numbers below. Every target in this brief is
  // about FORM, and form applied to the wrong content produces a beautiful screen
  // nobody can act on. A stock list can hit every spacing and colour target and
  // still be useless because it shows quantity-on-hand with no reorder level —
  // the number is inert, so the screen cannot answer "what am I short of".
  L.push('CONTENT FIRST — answer these before you touch spacing or colour')
  L.push('  1. What decision does someone make on this screen? Name it in one sentence.')
  L.push('  2. What data does that decision require? List it. Anything missing is a')
  L.push('     requirements gap to raise, not a styling problem to work around.')
  L.push('  3. What is currently shown that nobody reads or acts on? Raw ids, internal')
  L.push('     codes, precise timestamps where a relative date would do, columns that')
  L.push('     repeat each other. Cut or humanise it — moving it elsewhere is not a fix.')
  L.push('  4. Which single value is the one being scanned for? That is the anchor;')
  L.push('     everything else supports it and recedes.')
  L.push('  If you cannot answer 1 and 2, stop and ask. Styling an unanswerable screen')
  L.push('  just makes the wrong thing look finished.')
  L.push('')
  L.push('SPACE')
  L.push(`  Separate groups by about ${Math.round(t.proxMid)}x the gap you use inside a group.`)
  L.push(`  If fields sit 8px apart, sections sit ~${8 * Math.round(t.proxMid)}px apart. Equal gaps everywhere = no structure.`)
  L.push(`  Anything under ${t.proxLow}x reads flat unless dividers or a background change carry the grouping instead.`)
  L.push('')
  L.push('TYPE')
  L.push(`  Body ${t.bodyLow}-${t.bodyMid + 1}px. Never below 14px for anything read; 12px is the hard floor for metadata.`)
  L.push(`  About ${t.sizesMid > 7 ? 7 : t.sizesMid} sizes total. No two sizes within 1px. No half-pixel sizes.`)
  L.push('')
  L.push('HIERARCHY')
  L.push(`  Make unimportant text greyer; don't make important text bigger. ${t.inkLed} of ${t.n} references lead this way.`)
  L.push('  Two or three levels: full strength for the identifying value, one muted, optionally one fainter.')
  L.push('  Hold the size steady across a row. Weight is the weakest lever — reinforce with it, never rely on it.')
  L.push('')
  L.push('COLOUR & DEPTH')
  L.push(`  Colour covers under 2% of a typical reference screen; the most colourful reaches ${t.accentMax}%.`)
  L.push('  Accent belongs on the primary action, the active nav item, and status marks. Nowhere else.')
  L.push(`  Separate with lines and background tiers, not shadows (${t.borderLed} of ${t.n} do). Shadows only for things that float.`)
  if (a.grammar.length) {
    L.push('')
    L.push('ARRANGEMENT')
    for (const g of a.grammar) L.push(`  - ${g}`)
    if (a.density) L.push(`  - ${a.density}`)
  }
  L.push('')
  L.push('Project tokens and taste lessons override every line above.')
  return L.join('\n')
}

function renderCheck(spec, t) {
  const L = []
  const g = spec.spacing.grouping
  const issues = []

  L.push(`CRAFT CHECK — ${spec.name}`)
  L.push('')

  // Calibration note: every threshold here was tuned until Linear's issue list —
  // a genuinely excellent dense UI — comes back clean. A checker that fails known-
  // good work does not raise the bar, it drags everything toward the average,
  // which is the specific failure this whole corpus exists to avoid.
  if (g.confidence.startsWith('low')) {
    L.push(`  space      not measurable (${g.samples} groups) — check by eye against the brief`)
  } else if (g.medianRatio < t.proxLow) {
    // Cannot detect dividers / background tiers / deliberate uniform rhythm
    // automatically, and those are legitimate ways to carry grouping (Linear uses
    // the third). So ask rather than fail.
    L.push(
      `  space      CHECK — groups separated by ${g.medianRatio}x vs about ${Math.round(t.proxMid)}x. Fine IF dividers, a background change or a deliberate uniform rhythm carry the grouping; a real problem if nothing does.`,
    )
  } else {
    L.push(`  space      ok — ${g.medianRatio}x between groups`)
  }

  // 13px body is legitimate on a dense power tool (Linear, Vapi) and wrong on a
  // reading surface. Nothing in the corpus ships below 13, so that is the line.
  if (spec.type.bodySize < 13) {
    L.push(`  body       SMALL — ${spec.type.bodySize}px, nothing in the reference set ships below 13px`)
    issues.push('body')
  } else if (spec.type.bodySize < 14) {
    L.push(`  body       ${spec.type.bodySize}px — fine for a dense console, too small for a reading surface`)
  } else {
    L.push(`  body       ok — ${spec.type.bodySize}px`)
  }

  // Sizes below 12px are badge, icon and counter glyphs, not text roles. Counting
  // them as scale collisions flagged Linear's 9/10px status marks as sprawl.
  const textSizes = spec.type.sizes.filter((s) => s >= 12)
  const near = textSizes.filter((s, i, arr) => i && s - arr[i - 1] <= 1)
  // Size count is countable and therefore failable. "Two sizes 1px apart" is NOT:
  // Linear ships 13px body beside 12px metadata deliberately, and the numbers
  // cannot tell that from drift. So the count fails; the pair only asks.
  if (textSizes.length > 7) {
    L.push(`  type       SPRAWL — ${textSizes.length} text sizes vs about 7`)
    issues.push('type')
  } else {
    L.push(`  type       ok — ${textSizes.length} text sizes`)
  }
  if (near.length) {
    L.push(
      `  type pairs CHECK — ${near.join(', ')}px sit 1px from a neighbour. Deliberate if they do different jobs (13px body + 12px metadata is a real pattern); drift if they do the same one.`,
    )
  }

  if (spec.color.accentAreaPct > 10) {
    L.push(`  colour     HEAVY — ${spec.color.accentAreaPct}% of screen, most colourful reference is ${t.accentMax}%`)
    issues.push('colour')
  } else {
    L.push(`  colour     ok — ${spec.color.accentAreaPct}%`)
  }

  L.push(`  depth      ${spec.color.depth.strategy}`)
  L.push(`  hierarchy  carried by ${spec.type.hierarchyCarriedBy}`)
  L.push('')
  L.push(issues.length ? `${issues.length} to fix before this is presentable: ${issues.join(', ')}` : 'Clears the brief.')
  return L.join('\n')
}

const args = process.argv.slice(2)
const checkIdx = args.indexOf('--check')
const targets = corpusTargets()

if (!targets) {
  console.error(`no corpus at ${CORPUS} — run extract-spec.mjs against reference sites first`)
  process.exit(1)
}

if (checkIdx !== -1) {
  const target = args[checkIdx + 1]
  const archetype = args.filter((a, i) => i !== checkIdx && i !== checkIdx + 1 && !a.startsWith('--'))[0] || 'generic'
  if (!target) {
    console.error('usage: craft-brief.mjs --check <url-or-file> [archetype]')
    process.exit(1)
  }
  const { spec } = await extractSpec(target, { out: join(HERE, '.brief-out'), name: 'craft-check' })
  console.log(renderCheck(spec, targets))
  console.log('')
  console.log(renderBrief(targets, archetype))
} else {
  console.log(renderBrief(targets, args[0] || 'generic'))
}
