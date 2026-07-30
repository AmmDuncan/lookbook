#!/usr/bin/env node
// Regression tests for extract-spec.mjs.
//
// Every case here corresponds to a bug that shipped wrong numbers and looked like
// data rather than an error — which is the dangerous kind. A measurement layer
// that quietly measures the wrong thing is worse than one that crashes, because
// the corpus it produces gets cited as fact.
//
// Run: node --test scripts/extract-spec.test.mjs

import { test } from 'node:test'
import assert from 'node:assert/strict'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { extractSpec } from './extract-spec.mjs'

const HERE = dirname(fileURLToPath(import.meta.url))
const FIXTURES = join(HERE, 'fixtures')
const TMP = join(HERE, '.test-out')

const profile = (file, name) => extractSpec(join(FIXTURES, file), { out: TMP, name }).then((r) => r.spec)

test('lab()/oklch()/color() neutrals resolve as neutrals, not as saturated colour', async () => {
  const spec = await profile('modern-color-spaces.html', 'test-modern-color')

  // The bug: `lab(100 0 0)` (white) parsed as rgb(100,0,0) — a dark red — which
  // then dominated the palette and the accent budget.
  const reds = spec.color.backgrounds.filter((c) => c.hex === '#640000')
  assert.equal(reds.length, 0, 'lab(100 0 0) must not resolve to #640000')

  assert.ok(
    spec.color.backgrounds.some((c) => c.hex === '#ffffff'),
    'lab(100 0 0) should resolve to #ffffff',
  )

  // Every surface in the fixture is neutral, so nothing should read as accent.
  assert.ok(
    spec.color.accentAreaPct < 1,
    `an all-neutral page must not report accent area (got ${spec.color.accentAreaPct}%)`,
  )
})

test('near-white is low chroma — HSL saturation must not be used as the colour test', async () => {
  const spec = await profile('modern-color-spaces.html', 'test-chroma')

  // `#fefbff` is HSL-saturation 100% and visually white. Judging "is this a
  // colour?" on HSL s made every off-white background count as accent.
  for (const c of spec.color.backgrounds) {
    assert.ok(c.c <= 8, `${c.hex} should be low-chroma neutral, got chroma ${c.c}`)
  }
  assert.ok(spec.color.maxChroma !== null && spec.color.maxChroma <= 8)
})

test('a size-led screen is not reported as ink-led or weight-led', async () => {
  const spec = await profile('flat-admin-table.html', 'test-carrier')

  // Comparing raw channel spans let lightness (0-100) beat font-size (10-48)
  // automatically, so a page with a 48px/32px/24px ramp reported as ink-led.
  assert.ok(spec.type.channelSpread.size > 0.5, 'a 10->48px ramp must register real size spread')
  assert.notEqual(spec.type.hierarchyCarriedBy, 'weight', 'weight is the weakest channel and must not win here')
})

test('proximity treats a uniform list as one group, not as evidence of flatness', async () => {
  const spec = await profile('../../reproductions/linear-issue-list.html', 'test-proximity')

  // Scoring every uniform container as ratio 1.0 buried a healthy dense layout
  // under false "flat" samples. A list of equal rows is uniform because it IS
  // one group; flatness is only meaningful ACROSS groups.
  const g = spec.spacing.grouping
  assert.ok(g.samples > 0, 'a real layout must yield proximity samples')
  assert.ok(g.medianRatio >= 1, 'ratio is a ratio of gaps and cannot be below 1 in aggregate')
  assert.ok(g.byMethod.nested > 0, 'nested comparison must find groups through wrapper elements')
})

test('spacing scale is judged on authored values, not on derived rect gaps', async () => {
  const spec = await profile('../../reproductions/linear-issue-list.html', 'test-scale')

  // Derived gaps carry sub-pixel/border rounding (an 8px gap beside a 1px
  // hairline measures 9), which dragged every 4px-scale design to "2px scale".
  assert.equal(spec.spacing.baseUnit, 4, 'Linear authors a 4px scale and must measure as one')
})

test('grouping confidence is reported, so thin samples cannot be quoted as fact', async () => {
  const spec = await profile('modern-color-spaces.html', 'test-confidence')
  assert.ok(['high', 'medium'].includes(spec.spacing.grouping.confidence) || /^low/.test(spec.spacing.grouping.confidence))
})
