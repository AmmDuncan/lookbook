# Cool-technical kit — the picker

How a builder (any model) USES this kit to compose an on-taste organism. The taste is
already in the molecules; the builder only makes **composition** choices.

## 0. The contract
- Include `_tokens.css` ONCE at the app root. Every molecule reads its custom properties
  → coherence is automatic. Never hardcode a value that lives in `_tokens.css`.
- Pick ONE variant per molecule per surface. Variants are real alternatives, not skins —
  choosing different ones across surfaces is how you get variety without going off-taste.
- Spend the character budget ONCE (DM rule): pick a single distinctive move for the
  surface (hero number OR signature chart OR ⌘K), don't stack them.

## 0.5 Granularity — a molecule carries TREATMENT, never a frozen composition
The make-or-break rule. A molecule is a **taste-bearing treatment** (how a hero number looks,
how a row reads, how a status dot is encoded) — NOT a fixed arrangement. The moment a molecule
bakes in *a layout* ("hero + exactly 4 stats in a row under a hairline"), it stops being a
molecule and becomes a mini-organism — and every screen that reaches for it reproduces that one
layout. That is the homogenization failure, wearing a system's clothes.

So there are TWO layers, and they recur differently:
- **Treatments (atoms)** — `hero-figure`, `stat`, `status-dot`, `table-row`, `chart-area`.
  These recur ON PURPOSE — that's the brand/coherence (Stripe styles every number the same way).
- **Composition recipes** — named arrangements built FROM atoms: `summary-card`,
  `graded-tiles`, `bare-hero-band`, `hero + rail`. These should VARY across screens. A recipe is
  a convenience (drop it in whole) AND a starting point (deviate freely). Nothing is lost by
  naming them — the good arrangement survives as a recipe; it just stops being the *only* one.

Test for "is this a molecule or a mini-organism?": if it dictates *where things sit relative to
each other*, it's a composition — split the treatment out. If it only dictates *how one thing
looks*, it's a molecule. Keep molecules at the treatment grain.

**Granularity audit (2026-05-30):** applied the test to all five.
| Unit | Verdict | Why |
|------|---------|-----|
| M1 shell | frame (keep) | rail+topbar+content is the universal app skeleton, not a homogenizing arrangement; content well is free. Atoms inside (nav-item, rail temperature, ⌘K, topbar) are sound; light/dark = treatment variant. Alt frames (top-nav) = future recipe. |
| **M2 figures** | **split ✓** | bundled a real arrangement (hero + 4 stats in a row). Re-atomized → `hero-figure` + `stat` atoms + 4 recipes. |
| M3 table | treatment | the *row* is the atom; the table is a thin recipe. A/B are row treatments (standard vs sparkline). |
| M4 chart | treatment | A/B are treatment variants of one signature viz; card is optional chrome. |
| M5 status | treatment | dot+label vs tint-pill are pure treatment variants. |
M2 was the only over-composition — it was the one bundling an actual layout. The rest are correctly at the treatment grain.

## 1. Dials (inherited from the register — already decided for cool-technical)
| Dial | Value | Token |
|------|-------|-------|
| Temperature | cool-slate neutral | the `--bg/--surface/--border/--ink/--muted` ramp |
| Accent | indigo-violet, off-axis | `--accent #5B5BD6` (+ `--accent-ink`, `--accent-tint`) |
| Type | Geist/Inter UI + mono for data/IDs | `--font-ui`, `--font-mono` |
| Craft | 7px radius · 1px hairline · 38px rows · 140ms | `--radius`, `--border-w`, `--row-h`, `--motion` |

## 2. Molecule menu (pick one variant each)
| Molecule | Variant A | Variant B | Pick B when… |
|----------|-----------|-----------|--------------|
| **M1 shell** | light labeled-rail | dark-anchor rail | you want one bold compositional anchor / a more app-like feel |
| **M2 figures** | *(re-atomized — see below)* | | |
| **M3 table** | standard data row | row + leading dot + sparkline (DM-3) | the row's trend matters as much as its current value |
| **M4 chart** | single-series area (DM-3) | dual-series gap-band (relationship) | two series tell a story together (invoiced vs collected, plan vs actual) |
| **M5 status** | dot + label (dense) | tint pill (standalone) | status appears outside a dense table (headers, cards) |

### M2 figures — re-atomized (the granularity fix, §0.5)
The old "M2 KPI variants A/B" are gone — they were compositions, not molecules. M2 is now **two
treatment atoms** + **named recipes** (`atom-figure.html`, `recipe-figure.html`).
- **Atoms (treatments — always coherent):**
  - `hero-figure` — eyebrow + big tabular figure (44–54px, tight tracking) + delta. The DM-5 move.
  - `stat` — eyebrow + small tabular figure (20–26px) + delta. The supporting unit.
- **Recipes (compositions — STRUCTURALLY distinct, pick by where the supporting stats go):**
  - `hero + stat-row` — stats in a horizontal row beside/under the hero. The conventional. *(boxed flag: card or bare-on-page — boxing is a FLAG, not a separate recipe)*
  - `hero + rail` — stats stacked VERTICALLY in a side rail (different axis from the row).
  - `stat-tiles` — NO hero; peer `stat`s as tiles, one promoted to lead. For "nothing dominates."
  - `hero-solo` — NO stats; the hero stands alone, context comes from the chart/table below. Maximal focus.
  - `dual-hero` — two co-equal hero-figures, no stat row. For two-headline briefs (revenue + profit).
- **Structural-distinctness rule:** recipes differ in WHERE elements sit, never just boxed-vs-bare.
  (We collapsed the old `summary-card` + `bare-hero-band` — they were the same shape, hero + a stat
  ROW, just boxed vs not. Boxing/density are flags.) A revenue brief naturally pulls `hero + stat-row`,
  but `hero-solo`, `hero + rail`, and `dual-hero` are genuinely different summaries — reach for them
  when the brief's emphasis differs, so two revenue-ish pages don't share one summary shape.

## 3. Composition grammar (the variety lever — vary THIS, not the tokens)
Three on-taste layouts from the SAME molecules:
- **Metrics-forward**: M2-A hero + M4-B beside it → M3-A table full-width below. (the organism here)
- **Operations-forward**: M1-B dark rail + M3-A table as the page's spine + M2-B tiles in a slim right rail.
- **Monitoring-forward**: M2-B tile strip on top + M4-A trend + M3-B sparkline rows (latency/uptime).

Each is genuinely different in emphasis/rhythm/split, yet unmistakably one product —
because every piece reads from the same `_tokens.css`.

## 4. Depth floor (so a weak model doesn't ship flat)
Hit ≥2 of: a compositional anchor (hero figure OR dark rail) · a chart that shows a
RELATIONSHIP not just a trend (M4-B) · type-character on key numbers (tabular, tight) ·
a genuine secondary view (sparkline rows). Decoration is banned (no stat-tile icons, no
status double-encoding, no candy accent-border on cards).

## 5. Restraint discipline (the OTHER failure mode — applies BEFORE the depth floor)
A weak builder's instinct is to PILE ON to feel "complete." Restraint counts as depth.
Composing tightly is the move — adding surfaces is not. Hard rules:
- **Tables stay one line tall, and SCROLL rather than wrap.** Wrap every table in
  `.tbl-scroll` (`overflow-x:auto`) and give the table `min-width:max-content`. Every cell
  nowraps; the ONE long-text column uses `.t-title` and truncates with an ellipsis. When the
  columns need more width than the panel has, the table SCROLLS horizontally — it never
  crushes short data ("6h 22m", "New York, NY") into a wrapped second line. Rows that vary
  in height destroy the pro-tool rhythm. This is the #1 thing weak builders get wrong: they
  let a narrow main column squeeze the table until cells wrap. Don't — scroll instead.
- **A secondary rail holds ONE chart, max — plus a short figure cluster.** Do NOT stack
  two charts in a narrow (~290px) rail; at that width a second chart reads muddy. Pick the
  single most diagnostic viz; cut the rest. A standalone list (e.g. operators) only goes
  in the rail if there's genuine room after that — otherwise drop it or move it inline.
- **Never add a chart or a list just to reach the depth-floor count.** If a rail or table
  feels busy, the answer is cut, not rearrange. The depth floor is a FLOOR, not a target.
- **No redundant double-encoding.** A zone chip next to a spelled-out destination, a colored
  age next to a status dot next to a priority pill — pick the ONE encoding that carries the
  signal. Stacking them is decoration.
- **In-app focal numbers sit at 32–40px; a standalone hero ≤44px (P-MOL-03).** Dominance
  comes from the number standing ALONE (hero-solo) or being LARGEST relative to its stats,
  never from absolute bigness. A figure ≥48px reads as a marketing/landing hero, not a
  product metric — measured against real dashboards (Wise ~24, Monarch ~26, Rocket ~32).
  Oversizing the number is the most common "designed in isolation, not shipped" tell.
- **The shell seam is ONE line.** The rail's brand-header row and the topbar both use
  `--topbar-h` (52px) so their bottom borders meet in a single continuous horizontal line. A
  taller brand block jogs the divider at the rail edge — the most common shell tell. Never
  give the brand header its own ad-hoc padding-driven height.

## 6. Files
**Foundation:** `_tokens.css` (the coherence layer — include once).
**Atoms (treatment):** `atom-shell-frame.html` · `atom-figure.html` (hero-figure + stat) ·
`atom-table-row.html` · `atom-chart.html` · `atom-status.html`.
**Recipes (composition):** `recipe-figure.html` (hero+stat-row · hero+rail · stat-tiles ·
hero-solo · dual-hero) · `recipe-table.html` (toolbar-list · filter-rail-list · grouped-list ·
split-list).
**Organisms (verified worked examples):** `organism-ops-console.html` ·
`organism-infra-monitoring.html` · `organism-account-detail.html` ·
`organism-revenue-overview.html`.
Provenance + taste-rule IDs are in each file's top comment ("distilled from a study of real
shipped products"). For adoption over `@lookbook/tokens`, see
`packages/tokens/skins/cool-technical.css`.
