#!/usr/bin/env node
// extract-spec.mjs — profile what a GOOD design actually does, in numbers.
//
// The existing scripts here are GATES: they hunt defects (faint tier, re-skin,
// contrast fails). This one is the opposite — it is DESCRIPTIVE. Point it at a
// reference design that is already good and it answers "what decisions is this
// screen making?" so those decisions become citable numbers instead of vibes.
//
// It exists because a design reviewer with no positive reference can only detect
// violations of a floor. "Your spacing is on an 8px scale" passes every floor and
// still reads flat; "Stripe's inside-group gap is 8 and its between-group gap is
// 32 — a 4x ratio — while yours is 16/16, so your spacing encodes no grouping" is
// an actionable finding. The second sentence needs this script.
//
// Four profiles, matching the four things that carry a screen's character:
//   1. SPACING     — scale, rhythm, and crucially the grouping RATIO (proximity)
//   2. TYPE        — scale, role count, and WHICH channel carries hierarchy
//   3. COLOR/DEPTH — palette roles, neutral tint, accent scarcity, border-vs-shadow
//   4. COMPOSITION — grid primitives, alignment rhythm, density, measure
//
// Usage:
//   node extract-spec.mjs <url-or-html-path> [--name slug] [--width 1440]
//                                            [--out dir] [--json]
//
// Writes <out>/<slug>.spec.json and <out>/<slug>.spec.md.

import { createRequire } from 'node:module'
import { mkdir, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { homedir } from 'node:os'
import { resolve, join, basename, extname } from 'node:path'
import { pathToFileURL } from 'node:url'

// Playwright is installed once, in wren's rig. Resolve it from there rather than
// carrying a second copy — a duplicate install is a second version to drift.
const WREN_MODULES = join(homedir(), '.claude/lib/wren/node_modules')
const require = createRequire(join(WREN_MODULES, 'noop.js'))
const { chromium } = require('playwright')

// ---------------------------------------------------------------------------
// In-page collection. Everything below runs in the browser.
// ---------------------------------------------------------------------------

/**
 * Walk the rendered document once and return raw per-element facts.
 * Deliberately dumb: no analysis in here, so the analysis stays testable in node.
 */
function collectInPage() {
  const MAX_ELEMENTS = 6000

  // Resolve ANY CSS colour syntax to straight sRGB.
  //
  // Reading `ctx.fillStyle` back is NOT enough: Canvas2D normalises hex and rgb()
  // but returns `lab(...)`, `oklch(...)` and `color(...)` untouched. Regexing the
  // numbers out of those then silently misreads them — `lab(100 0 0)` is pure
  // white and parses as rgb(100,0,0), a dark red. Modern design systems author in
  // exactly these spaces, so the failure lands on precisely the sites worth
  // measuring, and it looks like data rather than an error.
  //
  // So make the browser rasterise it instead. Painting the colour over white and
  // over black gives two equations we can solve for alpha and the straight
  // colour, and works for every colour space the browser can render.
  const cv = document.createElement('canvas')
  cv.width = cv.height = 1
  const ctx = cv.getContext('2d', { willReadFrequently: true })
  const colorCache = new Map()

  const paintOn = (str, backdrop) => {
    ctx.clearRect(0, 0, 1, 1)
    ctx.fillStyle = backdrop
    ctx.fillRect(0, 0, 1, 1)
    ctx.fillStyle = str
    ctx.fillRect(0, 0, 1, 1)
    return ctx.getImageData(0, 0, 1, 1).data
  }

  const resolveColor = (css) => {
    if (!css || css === 'none' || css === 'transparent') return null
    if (colorCache.has(css)) return colorCache.get(css)
    let out = null
    try {
      // An unpaintable string leaves the backdrop untouched — the validity check.
      ctx.clearRect(0, 0, 1, 1)
      ctx.fillStyle = '#000000'
      ctx.fillStyle = css
      if (ctx.fillStyle === '#000000' && !/^(#000000|black|rgba?\(0,\s*0,\s*0)/i.test(css.trim())) {
        colorCache.set(css, null)
        return null
      }
      const onWhite = paintOn(css, '#ffffff')
      const onBlack = paintOn(css, '#000000')
      // c_white = a*C + (1-a)*255 ; c_black = a*C  →  a = 1 - (c_white - c_black)/255
      const a = Math.min(
        1,
        Math.max(0, [0, 1, 2].map((i) => 1 - (onWhite[i] - onBlack[i]) / 255).reduce((s, v) => s + v, 0) / 3),
      )
      if (a < 0.004) {
        out = { r: 0, g: 0, b: 0, a: 0 }
      } else {
        const [r, g, b] = [0, 1, 2].map((i) => Math.min(255, Math.max(0, Math.round(onBlack[i] / a))))
        out = { r, g, b, a: Number(a.toFixed(3)) }
      }
    } catch {
      out = null
    }
    colorCache.set(css, out)
    return out
  }

  const isVisible = (el, cs, rect) => {
    if (rect.width <= 0 || rect.height <= 0) return false
    if (cs.visibility === 'hidden' || cs.display === 'none') return false
    if (parseFloat(cs.opacity) === 0) return false
    return true
  }

  /** Text owned directly by this element, not by its descendants. */
  const ownText = (el) => {
    let s = ''
    for (const node of el.childNodes) {
      if (node.nodeType === 3) s += node.nodeValue
    }
    return s.replace(/\s+/g, ' ').trim()
  }

  const all = Array.from(document.body.querySelectorAll('*')).slice(0, MAX_ELEMENTS)
  const nodes = []
  const byEl = new Map()

  for (const el of all) {
    const cs = getComputedStyle(el)
    const rect = el.getBoundingClientRect()
    if (!isVisible(el, cs, rect)) continue

    const text = ownText(el)
    const rec = {
      tag: el.tagName.toLowerCase(),
      x: Math.round(rect.left + window.scrollX),
      y: Math.round(rect.top + window.scrollY),
      w: Math.round(rect.width),
      h: Math.round(rect.height),
      display: cs.display,
      position: cs.position,
      // spacing
      pt: parseFloat(cs.paddingTop) || 0,
      pr: parseFloat(cs.paddingRight) || 0,
      pb: parseFloat(cs.paddingBottom) || 0,
      pl: parseFloat(cs.paddingLeft) || 0,
      mt: parseFloat(cs.marginTop) || 0,
      mb: parseFloat(cs.marginBottom) || 0,
      rowGap: parseFloat(cs.rowGap) || 0,
      colGap: parseFloat(cs.columnGap) || 0,
      // type
      text,
      chars: text.length,
      fontSize: parseFloat(cs.fontSize) || 0,
      fontWeight: parseInt(cs.fontWeight, 10) || 400,
      lineHeight: cs.lineHeight === 'normal' ? null : parseFloat(cs.lineHeight),
      letterSpacing: cs.letterSpacing === 'normal' ? 0 : parseFloat(cs.letterSpacing),
      textTransform: cs.textTransform,
      fontFamily: (cs.fontFamily || '').split(',')[0].replace(/["']/g, '').trim(),
      color: resolveColor(cs.color),
      // colour & depth
      bg: resolveColor(cs.backgroundColor),
      bgImage: cs.backgroundImage !== 'none' ? cs.backgroundImage.slice(0, 80) : null,
      borderWidths: [cs.borderTopWidth, cs.borderRightWidth, cs.borderBottomWidth, cs.borderLeftWidth].map(
        (v) => parseFloat(v) || 0,
      ),
      borderColor: resolveColor(cs.borderTopColor),
      radius: [cs.borderTopLeftRadius, cs.borderTopRightRadius, cs.borderBottomRightRadius, cs.borderBottomLeftRadius]
        .map((v) => parseFloat(v) || 0),
      shadow: cs.boxShadow !== 'none' ? cs.boxShadow : null,
      // composition
      gridCols: cs.display.includes('grid') ? cs.gridTemplateColumns : null,
      flexDir: cs.display.includes('flex') ? cs.flexDirection : null,
      maxWidth: cs.maxWidth === 'none' ? null : cs.maxWidth,
      childIdx: [],
    }
    byEl.set(el, nodes.length)
    nodes.push(rec)
  }

  // Second pass: parent/child links, restricted to elements that survived the
  // visibility filter, so a wrapper with zero height doesn't break a gap chain.
  for (const el of all) {
    const idx = byEl.get(el)
    if (idx === undefined) continue
    let p = el.parentElement
    while (p && !byEl.has(p)) p = p.parentElement
    if (p !== null && p !== undefined && byEl.has(p)) {
      nodes[byEl.get(p)].childIdx.push(idx)
      nodes[idx].parent = byEl.get(p)
    } else {
      nodes[idx].parent = null
    }
  }

  const bodyCs = getComputedStyle(document.body)
  return {
    nodes,
    page: {
      width: document.documentElement.clientWidth,
      height: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight),
      scrollWidth: document.documentElement.scrollWidth,
      bodyBg: resolveColor(bodyCs.backgroundColor),
      bodyFont: (bodyCs.fontFamily || '').split(',')[0].replace(/["']/g, '').trim(),
      rootFontSize: parseFloat(getComputedStyle(document.documentElement).fontSize),
      title: document.title,
    },
  }
}

// ---------------------------------------------------------------------------
// Analysis. Pure functions over the raw collection — no browser here.
// ---------------------------------------------------------------------------

const round = (n, d = 2) => Number(n.toFixed(d))

/** Frequency map -> array sorted by count desc. */
function tally(values) {
  const m = new Map()
  for (const v of values) m.set(v, (m.get(v) || 0) + 1)
  return [...m.entries()].sort((a, b) => b[1] - a[1]).map(([value, count]) => ({ value, count }))
}

function median(arr) {
  if (!arr.length) return null
  const s = [...arr].sort((a, b) => a - b)
  const mid = s.length >> 1
  return s.length % 2 ? s[mid] : (s[mid - 1] + s[mid]) / 2
}

function toHex({ r, g, b }) {
  return '#' + [r, g, b].map((v) => Math.round(v).toString(16).padStart(2, '0')).join('')
}

/**
 * Chroma: how much colour is present, 0-100, independent of lightness.
 *
 * HSL saturation cannot answer that question at the ends of the lightness range —
 * `#fefbff` is a near-white with a 4/255 channel spread and HSL calls it 100%
 * saturated, so every off-white page background counted as accent colour. Plain
 * max-minus-min doesn't have that failure mode.
 */
function chroma({ r, g, b }) {
  return ((Math.max(r, g, b) - Math.min(r, g, b)) / 255) * 100
}

/** sRGB -> HSL. `l` is trustworthy; prefer chroma() over `s` for "is this colour?". */
function hsl({ r, g, b }) {
  const R = r / 255
  const G = g / 255
  const B = b / 255
  const max = Math.max(R, G, B)
  const min = Math.min(R, G, B)
  const l = (max + min) / 2
  const d = max - min
  if (d === 0) return { h: 0, s: 0, l: l * 100 }
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
  let h
  if (max === R) h = ((G - B) / d + (G < B ? 6 : 0)) / 6
  else if (max === G) h = ((B - R) / d + 2) / 6
  else h = ((R - G) / d + 4) / 6
  return { h: h * 360, s: s * 100, l: l * 100 }
}

/**
 * Detect the spacing base unit: the divisor that the most values land on cleanly.
 * Prefers the LARGEST qualifying base, since every 8-scale is also a 4-scale and
 * reporting "4px scale" for an 8px design understates the discipline.
 */
function detectBase(values) {
  // Values under 4px are hairlines, optical nudges and icon insets — they are not
  // scale decisions, and letting them vote drags every design down to a 1-2px
  // "scale" that describes nothing. Judge the scale on the spacing that spaces.
  const scaleValues = values.filter((v) => v >= 4)
  const candidates = [8, 6, 5, 4, 3, 2]
  const best = { base: 1, coverage: 0 }
  for (const base of candidates) {
    const hits = scaleValues.filter((v) => Math.abs(v % base) < 0.51).length
    const coverage = scaleValues.length ? hits / scaleValues.length : 0
    if (coverage >= 0.8 && base > best.base) {
      best.base = base
      best.coverage = coverage
    }
  }
  if (best.base === 1 && scaleValues.length) {
    for (const base of candidates) {
      const hits = scaleValues.filter((v) => Math.abs(v % base) < 0.51).length
      const coverage = hits / scaleValues.length
      if (coverage > best.coverage) {
        best.base = base
        best.coverage = coverage
      }
    }
  }
  return { base: best.base, onScale: round(best.coverage * 100, 1), sampled: scaleValues.length }
}

/**
 * Gaps between consecutive siblings inside one container, split by axis.
 * A container only contributes when its children genuinely stack (column) or
 * genuinely sit side by side (row) — mixed/overlapping layouts produce noise.
 */
function containerGaps(node, nodes) {
  const kids = node.childIdx.map((i) => nodes[i]).filter((k) => k.position !== 'absolute' && k.position !== 'fixed')
  if (kids.length < 2) return null

  const col = [...kids].sort((a, b) => a.y - b.y)
  const stacked = col.every((k, i) => i === 0 || k.y >= col[i - 1].y + col[i - 1].h - 2)
  if (stacked) {
    const gaps = []
    for (let i = 1; i < col.length; i++) gaps.push(col[i].y - (col[i - 1].y + col[i - 1].h))
    return { axis: 'y', gaps: gaps.filter((g) => g >= 0 && g < 400) }
  }

  const row = [...kids].sort((a, b) => a.x - b.x)
  const inline = row.every((k, i) => i === 0 || k.x >= row[i - 1].x + row[i - 1].w - 2)
  if (inline) {
    const gaps = []
    for (let i = 1; i < row.length; i++) gaps.push(row[i].x - (row[i - 1].x + row[i - 1].w))
    return { axis: 'x', gaps: gaps.filter((g) => g >= 0 && g < 400) }
  }
  return null
}

/**
 * The proximity metric.
 *
 * For every container that stacks groups, compare the gap it puts BETWEEN its
 * children to the gap those children put between their OWN children. That ratio
 * is how hard the design uses space to say "these belong together, that one
 * doesn't". A ratio near 1 means space encodes nothing — the classic flat screen
 * that passes every spacing-scale check and still reads as undifferentiated.
 */
function groupingRatios(nodes) {
  const gapsByNode = new Map()
  nodes.forEach((n, i) => {
    const g = containerGaps(n, nodes)
    if (g && g.gaps.length) gapsByNode.set(i, g)
  })

  const pairs = []

  // For a child that is a bare wrapper, the gaps live on a descendant, not on the
  // child itself. Looking only one level down made real markup unmeasurable — the
  // common `section > div.stack > items` shape hid every group behind the wrapper.
  const nearestGapBearing = (idx, axis, depth = 0) => {
    if (depth > 3) return null
    const own = gapsByNode.get(idx)
    if (own && own.axis === axis) return own
    for (const c of nodes[idx].childIdx) {
      const found = nearestGapBearing(c, axis, depth + 1)
      if (found) return found
    }
    return null
  }

  // Method 1 — NESTED. The gap a container puts between its children vs the gaps
  // those children put between theirs. Catches card-in-section-in-page layering.
  for (const [i, outer] of gapsByNode) {
    const inners = nodes[i].childIdx.map((c) => nearestGapBearing(c, outer.axis)).filter(Boolean)
    // One inner group is enough to make the comparison meaningful; requiring two
    // discarded most real layouts and left the metric describing almost nothing.
    if (inners.length < 1) continue
    const between = median(outer.gaps)
    const inside = median(inners.flatMap((g) => g.gaps))
    if (between === null || inside === null) continue
    if (between < 1 && inside < 1) continue
    pairs.push({
      method: 'nested',
      between: round(between, 1),
      inside: round(inside, 1),
      ratio: round(between / Math.max(inside, 1), 2),
    })
  }

  // Method 2 — WITHIN. One container whose own gap sequence is bimodal: a nav list
  // that separates its sections with a bigger gap than it separates its items. The
  // nested method is blind to this (there is only one container) and it is exactly
  // how sidebars, settings pages and grouped lists encode structure — which is why
  // the nested method alone undersampled and called disciplined screens "flat".
  for (const [, g] of gapsByNode) {
    const gaps = g.gaps.filter((v) => v > 0)
    if (gaps.length < 2) continue
    const lo = Math.min(...gaps)
    const hi = Math.max(...gaps)
    // Uniform gaps inside one container are NOT the flat defect — a list of equal
    // rows is uniform because it is one group, and that is correct. (Scoring these
    // as 1.0 buried Linear's healthy layout under 16 false "flat" samples while a
    // deliberately flat fixture scored 2x.) Flatness is a statement about groups
    // against each other, so it belongs to the nested method alone.
    if (hi - lo < 4) continue
    const split = (lo + hi) / 2
    const small = gaps.filter((v) => v <= split)
    const large = gaps.filter((v) => v > split)
    if (!small.length || !large.length) continue
    const inside = median(small)
    const between = median(large)
    pairs.push({
      method: 'within',
      between: round(between, 1),
      inside: round(inside, 1),
      ratio: round(between / Math.max(inside, 1), 2),
    })
  }

  return pairs
}

function analyseSpacing(nodes) {
  const raw = []
  for (const n of nodes) {
    raw.push(n.pt, n.pr, n.pb, n.pl, n.mt, n.mb, n.rowGap, n.colGap)
  }
  const values = raw.filter((v) => v > 0)
  const gapsAll = []
  for (const n of nodes) {
    const g = containerGaps(n, nodes)
    if (g) gapsAll.push(...g.gaps.filter((v) => v > 0))
  }

  // Scale is judged on AUTHORED values only — padding, margin, gap. Inter-element
  // gaps are derived by subtracting rects, so they carry sub-pixel and border
  // rounding (an 8px gap next to a 1px hairline measures 9, a 12px one measures
  // 11). Feeding those in made every 4px-scale design look like a 2px one, which
  // is the opposite of the discipline the design actually has. Derived gaps are
  // still exactly right for the proximity metric, which compares gaps to gaps.
  const { base, onScale, sampled } = detectBase(values)
  const steps = tally(values.map((v) => Math.round(v))).filter((s) => s.count >= 3)

  const ratios = groupingRatios(nodes).filter((r) => r.between >= 2 && Number.isFinite(r.ratio) && r.ratio > 0)
  // A single 400px hero gap against a 1px inner rule yields a 300x "ratio" that
  // says nothing about grouping discipline. Trim both tails before taking the
  // median so one outlier container can't set the headline number.
  const sorted = [...ratios].sort((a, b) => a.ratio - b.ratio)
  const trim = Math.floor(sorted.length * 0.1)
  const core = sorted.length >= 10 ? sorted.slice(trim, sorted.length - trim) : sorted
  const medRatio = core.length ? round(median(core.map((r) => r.ratio)), 2) : null

  return {
    baseUnit: base,
    onScalePct: onScale,
    authoredValuesSampled: sampled,
    distinctValues: new Set(values.map((v) => Math.round(v))).size,
    topSteps: steps.slice(0, 12),
    grouping: {
      samples: core.length,
      byMethod: {
        nested: core.filter((r) => r.method === 'nested').length,
        within: core.filter((r) => r.method === 'within').length,
      },
      medianInsideGap: median(core.map((r) => r.inside)),
      medianBetweenGap: median(core.map((r) => r.between)),
      medianRatio: medRatio,
      // A ratio computed from one or two containers describes those containers,
      // not the design. Say so rather than letting a thin sample read as a fact.
      confidence: core.length >= 8 ? 'high' : core.length >= 4 ? 'medium' : 'low — too few groups to generalise',
      verdict:
        medRatio === null
          ? 'not measurable (too few nested groups)'
          : medRatio >= 2
            ? 'space encodes grouping strongly'
            : medRatio >= 1.4
              ? 'space encodes grouping'
              : 'space encodes little grouping — flat rhythm',
    },
  }
}

function analyseType(nodes) {
  const texts = nodes.filter((n) => n.chars > 0 && n.fontSize > 0)
  if (!texts.length) return { roles: [], note: 'no text found' }

  const roleKey = (n) => `${Math.round(n.fontSize)}/${n.fontWeight}/${n.color ? toHex(n.color) : '?'}`
  const roles = new Map()
  for (const n of texts) {
    const k = roleKey(n)
    const r = roles.get(k) || {
      size: round(n.fontSize, 1),
      weight: n.fontWeight,
      color: n.color ? toHex(n.color) : null,
      lineHeight: n.lineHeight ? round(n.lineHeight / n.fontSize, 2) : null,
      tracking: round(n.letterSpacing, 2),
      transform: n.textTransform,
      chars: 0,
      count: 0,
      sample: '',
    }
    r.chars += n.chars
    r.count += 1
    if (!r.sample && n.chars > 3) r.sample = n.text.slice(0, 48)
    roles.set(k, r)
  }
  const ranked = [...roles.values()].sort((a, b) => b.chars - a.chars)
  const body = ranked[0]

  const sizes = [...new Set(texts.map((n) => round(n.fontSize, 1)))].sort((a, b) => a - b)
  const weights = [...new Set(texts.map((n) => n.fontWeight))].sort((a, b) => a - b)
  const families = tally(texts.map((n) => n.fontFamily).filter(Boolean))

  // Which channel actually carries hierarchy: size, weight, or ink level?
  //
  // Two traps, both of which produced wrong answers before:
  //  1. RAW MIN/MAX lets one 9px badge or one white-on-colour label define the
  //     whole range. Weight by how much TEXT sits at each value and read the
  //     10th-90th percentile, so the answer describes the bulk of the screen.
  //  2. COMPARING RAW SPANS compares px against lightness-percent against weight
  //     units. Lightness spans 0-100 and font-size spans ~10-48, so ink always
  //     looked larger and a blatantly size-led page reported as ink-led. Each
  //     channel has to be normalised into its own perceptual range first:
  //     size in octaves, ink as a fraction of the full lightness range, weight
  //     as a fraction of the usable 300-unit span.
  const weightedRange = (pairs) => {
    const expanded = pairs.filter(([v]) => Number.isFinite(v)).sort((a, b) => a[0] - b[0])
    const total = expanded.reduce((s, [, w]) => s + w, 0)
    if (!total) return null
    const at = (frac) => {
      let acc = 0
      for (const [v, w] of expanded) {
        acc += w
        if (acc >= total * frac) return v
      }
      return expanded[expanded.length - 1][0]
    }
    return { lo: at(0.1), hi: at(0.9) }
  }

  const sizeR = weightedRange(texts.map((n) => [n.fontSize, n.chars]))
  const weightR = weightedRange(texts.map((n) => [n.fontWeight, n.chars]))
  const inkR = weightedRange(texts.filter((n) => n.color).map((n) => [hsl(n.color).l, n.chars]))

  const channels = {
    size: sizeR && sizeR.lo > 0 ? round(Math.log2(sizeR.hi / sizeR.lo), 2) : 0,
    // Divisor 600, not the 300 of the usable weight span: weight is the weakest of
    // the three channels (a 400->500 shift is nearly invisible at 13px), so a full
    // 400->700 sweep should score 0.5 — half a full black-to-white ink sweep, not
    // equal to it. At /300 the metric called 10 of 32 references weight-led, which
    // no one would say looking at them; at /600 that drops to 4 and ink leads 14.
    weight: weightR ? round((weightR.hi - weightR.lo) / 600, 2) : 0,
    ink: inkR ? round((inkR.hi - inkR.lo) / 100, 2) : 0,
  }
  // Naming a winner that leads by 0.04 invents a distinction the screen isn't
  // making. A design genuinely can move two channels together — say so.
  const rankedChannels = Object.entries(channels).sort((a, b) => b[1] - a[1])
  const carrier =
    rankedChannels[0][1] > 0 && rankedChannels[1][1] / rankedChannels[0][1] > 0.85
      ? `mixed (${rankedChannels[0][0]}+${rankedChannels[1][0]})`
      : rankedChannels[0][0]

  // Measure: chars per line for prose-ish blocks (wide, multi-line, real text).
  const prose = texts.filter((n) => n.chars > 80 && n.w > 200)
  const measures = prose.map((n) => Math.round(n.w / (n.fontSize * 0.5)))

  const scaleRatios = []
  for (let i = 1; i < sizes.length; i++) scaleRatios.push(round(sizes[i] / sizes[i - 1], 3))

  return {
    families: families.slice(0, 4),
    bodySize: body?.size ?? null,
    sizes,
    distinctSizes: sizes.length,
    weights,
    roleCount: ranked.length,
    scaleRatios,
    hierarchyCarriedBy: carrier,
    channelSpread: channels,
    measureChars: measures.length ? median(measures) : null,
    topRoles: ranked.slice(0, 10).map((r) => ({ ...r, chars: undefined })),
  }
}

function analyseColorDepth(nodes, page) {
  const painted = nodes.filter((n) => n.bg && n.bg.a > 0.05)
  const bgByArea = new Map()
  for (const n of painted) {
    const k = toHex(n.bg)
    bgByArea.set(k, (bgByArea.get(k) || 0) + n.w * n.h)
  }
  const pageArea = Math.max(page.width * page.height, 1)
  const backgrounds = [...bgByArea.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 12)
    .map(([hex, area]) => {
      const rgb = hexToRgb(hex)
      const c = hsl(rgb)
      return {
        hex,
        h: round(c.h, 0),
        s: round(c.s, 1),
        l: round(c.l, 1),
        c: round(chroma(rgb), 1),
        areaPct: round((area / pageArea) * 100, 1),
      }
    })

  const inkByChars = new Map()
  for (const n of nodes) {
    if (!n.color || !n.chars) continue
    const k = toHex(n.color)
    inkByChars.set(k, (inkByChars.get(k) || 0) + n.chars)
  }
  const totalChars = [...inkByChars.values()].reduce((a, b) => a + b, 0) || 1
  const inks = [...inkByChars.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([hex, chars]) => {
      const rgb = hexToRgb(hex)
      const c = hsl(rgb)
      return {
        hex,
        s: round(c.s, 1),
        l: round(c.l, 1),
        c: round(chroma(rgb), 1),
        sharePct: round((chars / totalChars) * 100, 1),
      }
    })

  // "Neutral" = low chroma. Whether those neutrals are pure grey or tinted is one
  // of the loudest tells separating a designed palette from a default one — but
  // the tint is a few points of chroma, so the threshold has to be measured on a
  // lightness-independent axis or every off-white reads as a colour.
  const neutrals = [...backgrounds, ...inks].filter((c) => c.c <= 8)
  const tinted = neutrals.filter((c) => c.c >= 1)
  const chromatic = backgrounds.filter((c) => c.c > 8)
  // Nested painted elements each contribute their own rect, so a chip inside a
  // card inside a panel counts its area three times and the total can exceed the
  // page. Clamp it: the number is a relative read on how much saturated surface
  // the design commits to, not a literal coverage measurement.
  const accentAreaPct = Math.min(
    100,
    round(
      chromatic.reduce((a, c) => a + c.areaPct, 0),
      1,
    ),
  )

  // Table cells are excluded from the depth verdict. A table's internal rules are
  // a table decision (canon-table-* owns it), not the page's depth strategy, and
  // a single 4-column table contributes ~30 bordered elements — enough to report
  // a shadow-on-every-card page as "border-led" purely because it has a table.
  const structural = nodes.filter((n) => n.tag !== 'td' && n.tag !== 'th' && n.tag !== 'tr')
  const bordered = structural.filter((n) => n.borderWidths.some((w) => w > 0))
  const shadowed = structural.filter((n) => n.shadow)
  const radii = tally(nodes.flatMap((n) => n.radius).filter((r) => r > 0).map((r) => Math.round(r)))
  const gradients = nodes.filter((n) => n.bgImage && n.bgImage.includes('gradient')).length

  return {
    // A transparent body resolves to rgba(0,0,0,0), and hexing that reports a
    // black page for a white site. Alpha has to be checked, not just presence.
    pageBg: page.bodyBg && page.bodyBg.a > 0 ? toHex(page.bodyBg) : 'transparent (inherits canvas)',
    backgrounds,
    inks,
    neutralsTinted: neutrals.length ? `${tinted.length}/${neutrals.length}` : 'n/a',
    neutralTintVerdict:
      neutrals.length === 0
        ? 'n/a'
        : tinted.length / neutrals.length >= 0.6
          ? 'neutrals are tinted (designed)'
          : 'neutrals are near-pure grey (default-ish)',
    // Chroma of surfaces you actually SEE. A vivid 4px dot is not a statement
    // about the palette; the unweighted max reported it as one.
    maxChroma: (() => {
      const seen = backgrounds.filter((c) => c.areaPct >= 0.5)
      return seen.length ? round(Math.max(...seen.map((c) => c.c)), 1) : null
    })(),
    accentAreaPct,
    accentVerdict:
      accentAreaPct < 10 ? 'accent is scarce' : accentAreaPct < 25 ? 'accent is present' : 'accent is dominant',
    depth: {
      borderedElements: bordered.length,
      shadowedElements: shadowed.length,
      borderToShadowRatio: shadowed.length ? round(bordered.length / shadowed.length, 2) : null,
      strategy:
        shadowed.length === 0
          ? 'borders only, zero resting shadows'
          : bordered.length / Math.max(shadowed.length, 1) > 3
            ? 'border-led, shadows reserved'
            : 'shadow-led',
      distinctShadows: [...new Set(nodes.map((n) => n.shadow).filter(Boolean))].slice(0, 5),
      radiusScale: radii.slice(0, 6).map((r) => r.value),
      gradientElements: gradients,
    },
  }
}

function hexToRgb(hex) {
  return {
    r: parseInt(hex.slice(1, 3), 16),
    g: parseInt(hex.slice(3, 5), 16),
    b: parseInt(hex.slice(5, 7), 16),
  }
}

function analyseComposition(nodes, page) {
  // A one-track grid is a layout no-op, not a composition decision — drop it or
  // it buries the real multi-column primitives under its own frequency.
  const grids = tally(
    nodes
      .map((n) => n.gridCols)
      .filter(Boolean)
      .map(normaliseTrack)
      .filter((g) => !g.startsWith('1-col')),
  )
  const flexes = tally(nodes.map((n) => n.flexDir).filter(Boolean))

  // Alignment rhythm: how few distinct left edges the design commits to. A tight
  // screen aligns everything to a handful of x positions; a loose one scatters.
  const significant = nodes.filter((n) => n.w * n.h > 600)
  const edges = tally(significant.map((n) => Math.round(n.x / 2) * 2))
  const total = significant.length || 1
  let acc = 0
  let edgesFor80 = 0
  for (const e of edges) {
    acc += e.count
    edgesFor80++
    if (acc / total >= 0.8) break
  }

  // Two different questions, previously conflated into one wrong number. On a
  // marketing or article page the cap on a PROSE block is the design decision; on
  // a dense app screen there is no prose, and the meaningful number is how wide
  // the main region runs. Report both and let the reader use the relevant one.
  const prose = nodes.filter((n) => n.chars > 120)
  const proseWidth = prose.length ? Math.max(...prose.map((n) => n.w)) : null
  const topRegions = nodes.filter((n) => n.parent === null || nodes[n.parent]?.parent === null)
  const mainRegionWidth = topRegions.length ? Math.max(...topRegions.map((n) => n.w)) : null

  const screenfuls = Math.max(page.height / 900, 1)
  return {
    pageWidth: page.width,
    pageHeight: page.height,
    horizontalBleed: page.scrollWidth > page.width + 1,
    proseMaxWidth: proseWidth,
    mainRegionWidth,
    gridPrimitives: grids.slice(0, 8),
    flexDirections: flexes,
    alignmentEdges: {
      distinct: edges.length,
      coveringMostContent: edgesFor80,
      top: edges.slice(0, 8).map((e) => e.value),
    },
    density: {
      visibleElements: nodes.length,
      perScreenful: Math.round(nodes.length / screenfuls),
    },
  }
}

/** Collapse pixel track lists to a shape so `240px 1fr` and `260px 1fr` rhyme. */
function normaliseTrack(v) {
  const shape = v
    .replace(/[\d.]+px/g, 'px')
    .replace(/\s+/g, ' ')
    .trim()
  const tracks = shape.split(' ').filter(Boolean)
  return `${tracks.length}-col: ${shape}`
}

// ---------------------------------------------------------------------------
// Report
// ---------------------------------------------------------------------------

/**
 * Render the spec card a reviewer actually reads. Numbers first, verdicts after —
 * a verdict without its number is exactly the vibes-based critique this replaces.
 */
function toMarkdown(spec) {
  const { source, name, spacing, type, color, composition } = spec
  const L = []
  L.push(`# Spec card — ${name}`)
  L.push('')
  L.push(`**Source:** ${source}  `)
  L.push(`**Captured:** ${spec.capturedAt} · ${composition.pageWidth}×${composition.pageHeight}`)
  L.push('')

  L.push('## Spacing')
  L.push(`- Base unit **${spacing.baseUnit}px**, ${spacing.onScalePct}% of values on scale`)
  L.push(`- ${spacing.distinctValues} distinct values; steps used: ${spacing.topSteps.map((s) => s.value).join(', ')}`)
  // Median-of-ratios, not ratio-of-medians: one group separating 32/8 and another
  // separating 12/10 should read as "one of these encodes hard", which averaging
  // the gaps first would erase.
  L.push(
    `- **Proximity ${spacing.grouping.medianRatio}×** (median per-group ratio, ${spacing.grouping.samples} groups — ${spacing.grouping.byMethod.nested} nested, ${spacing.grouping.byMethod.within} within-container)`,
  )
  L.push(
    `  - typical inside-group gap ${spacing.grouping.medianInsideGap}px · typical between-group gap ${spacing.grouping.medianBetweenGap}px *(independent medians — don't divide these)*`,
  )
  L.push(`- → ${spacing.grouping.verdict} *(confidence: ${spacing.grouping.confidence})*`)
  L.push('')

  L.push('## Type')
  L.push(`- Families: ${type.families.map((f) => f.value).join(', ') || 'n/a'}`)
  L.push(`- Body **${type.bodySize}px**; ${type.distinctSizes} sizes: ${type.sizes.join(', ')}`)
  L.push(`- Weights: ${type.weights.join(', ')} · **${type.roleCount} distinct roles** (size+weight+colour)`)
  L.push(
    `- Hierarchy carried mostly by **${type.hierarchyCarriedBy}** (spread — size ${type.channelSpread.size}, weight ${type.channelSpread.weight}, ink ${type.channelSpread.ink})`,
  )
  if (type.measureChars) L.push(`- Prose measure ≈ **${type.measureChars} chars**`)
  L.push('')
  L.push('| size | weight | colour | line-height | tracking | sample |')
  L.push('|---|---|---|---|---|---|')
  for (const r of type.topRoles) {
    L.push(
      `| ${r.size} | ${r.weight} | ${r.color ?? '—'} | ${r.lineHeight ?? '—'} | ${r.tracking} | ${(r.sample || '').replace(/\|/g, '·')} |`,
    )
  }
  L.push('')

  L.push('## Colour & depth')
  L.push(`- Page bg ${color.pageBg}; max background chroma **${color.maxChroma}**`)
  L.push(`- Chromatic area **${color.accentAreaPct}%** → ${color.accentVerdict}`)
  L.push(`- Neutrals tinted ${color.neutralsTinted} → ${color.neutralTintVerdict}`)
  L.push(
    `- Depth: ${color.depth.borderedElements} bordered / ${color.depth.shadowedElements} shadowed → **${color.depth.strategy}**`,
  )
  L.push(`- Radius scale: ${color.depth.radiusScale.join(', ') || 'none'} · gradients: ${color.depth.gradientElements}`)
  L.push('')
  L.push('| background | h | s | l | chroma | area% |')
  L.push('|---|---|---|---|---|---|')
  for (const c of color.backgrounds.slice(0, 8)) L.push(`| ${c.hex} | ${c.h} | ${c.s} | ${c.l} | ${c.c} | ${c.areaPct} |`)
  L.push('')
  L.push('| ink | s | l | chroma | share% |')
  L.push('|---|---|---|---|---|')
  for (const c of color.inks.slice(0, 6)) L.push(`| ${c.hex} | ${c.s} | ${c.l} | ${c.c} | ${c.sharePct} |`)
  L.push('')

  L.push('## Composition')
  L.push(
    `- Main region **${composition.mainRegionWidth}px**; prose cap ${composition.proseMaxWidth ? composition.proseMaxWidth + 'px' : '— (no prose)'}; horizontal bleed: ${composition.horizontalBleed}`,
  )
  L.push(
    `- Alignment: ${composition.alignmentEdges.distinct} distinct left edges, **${composition.alignmentEdges.coveringMostContent}** cover 80% of content`,
  )
  L.push(`- Grid primitives: ${composition.gridPrimitives.map((g) => `\`${g.value}\` ×${g.count}`).join(' · ') || 'none'}`)
  L.push(
    `- Density: ${composition.density.visibleElements} visible elements, **${composition.density.perScreenful}/screenful**`,
  )
  L.push('')
  return L.join('\n')
}

// ---------------------------------------------------------------------------
// Driver
// ---------------------------------------------------------------------------

function parseArgs(argv) {
  const target = argv[0]
  const opts = { width: 1440, out: null, name: null, json: false, height: 900, wait: 1200 }
  for (let i = 1; i < argv.length; i++) {
    const a = argv[i]
    if (a === '--json') opts.json = true
    else if (a === '--width') opts.width = Number(argv[++i])
    else if (a === '--height') opts.height = Number(argv[++i])
    else if (a === '--wait') opts.wait = Number(argv[++i])
    else if (a === '--out') opts.out = argv[++i]
    else if (a === '--name') opts.name = argv[++i]
  }
  return { target, opts }
}

/**
 * Profile one design and write its spec card.
 * @param {string} target URL, or a path to a local HTML file.
 * @returns {Promise<object>} the spec object (also written to disk).
 */
export async function extractSpec(target, opts = {}) {
  const width = opts.width ?? 1440
  const height = opts.height ?? 900
  const isUrl = /^https?:\/\//.test(target)
  const url = isUrl ? target : pathToFileURL(resolve(target)).href
  const name = opts.name ?? basename(target, extname(target)).replace(/[^a-z0-9-]+/gi, '-').toLowerCase()

  const browser = await chromium.launch()
  const ctx = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: 1 })
  const page = await ctx.newPage()
  let raw
  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 }).catch(() => page.goto(url, { timeout: 45000 }))
    await page.waitForTimeout(opts.wait ?? 1200)
    await page.evaluate(() => document.fonts?.ready)
    raw = await page.evaluate(collectInPage)
  } finally {
    await browser.close()
  }

  const spec = {
    name,
    source: target,
    capturedAt: new Date().toISOString().slice(0, 10),
    viewport: { width, height },
    spacing: analyseSpacing(raw.nodes),
    type: analyseType(raw.nodes),
    color: analyseColorDepth(raw.nodes, raw.page),
    composition: analyseComposition(raw.nodes, raw.page),
  }

  const outDir = opts.out ?? join(homedir(), '.claude/skills/lookbook/reproductions/specs')
  await mkdir(outDir, { recursive: true })
  await writeFile(join(outDir, `${name}.spec.json`), JSON.stringify(spec, null, 2))
  await writeFile(join(outDir, `${name}.spec.md`), toMarkdown(spec))
  return { spec, outDir }
}

const invokedDirectly = process.argv[1] && process.argv[1].endsWith('extract-spec.mjs')
if (invokedDirectly) {
  const { target, opts } = parseArgs(process.argv.slice(2))
  if (!target) {
    console.error('usage: extract-spec.mjs <url-or-html-path> [--name slug] [--width 1440] [--out dir] [--json]')
    process.exit(1)
  }
  if (!/^https?:\/\//.test(target) && !existsSync(resolve(target))) {
    console.error(`no such file: ${target}`)
    process.exit(1)
  }
  const { spec, outDir } = await extractSpec(target, opts)
  if (opts.json) console.log(JSON.stringify(spec, null, 2))
  else console.log(toMarkdown(spec))
  console.error(`\nwrote ${join(outDir, spec.name + '.spec.{json,md}')}`)
}
