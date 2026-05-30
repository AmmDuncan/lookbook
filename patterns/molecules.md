# Pattern: Molecules — treatment atoms, composition recipes, granularity

**Inherits:** all of `fundamentals.md` unless overridden below.
**Cite as:** `P-MOL-<nn>`.
**Runnable kit:** `kits/cool-technical/` (atoms, recipes, organisms, picker). **Adoption skin:** `packages/tokens/skins/cool-technical.css`.

## Surface intent
This file is not a page archetype — it is the **generative machinery** behind the cardinal rule (*converge on vocabulary, diverge on composition*). It gives that rule concrete parts so a builder of any model strength can assemble on-taste screens without re-inventing them: **treatment atoms** carry the taste, a **shared token foundation** carries coherence, and **composition recipes** carry variety. Use it whenever you compose a data/metrics surface (dashboard, ops console, monitoring, record detail, revenue overview) and want the result distinctive without drifting off-system.

## The two layers (and why each recurs differently)
- **Treatment atoms** — `hero-figure`, `stat`, `table-row`, `chart`, `status`, `shell-frame`. An atom dictates only **how one thing looks** (size, weight, tracking, encoding). Atoms recur ON PURPOSE — that recurrence IS the brand (every Stripe number looks like Stripe). Coherence is free because every atom reads the same token foundation.
- **Composition recipes** — named arrangements built FROM atoms (`hero + stat-row`, `hero + rail`, `stat-tiles`, `hero-solo`, `dual-hero`). A recipe dictates **where things sit relative to each other**. Recipes should VARY across surfaces. A recipe is a convenience (drop it in whole) and a starting point (deviate freely).

## Calibrations

**P-MOL-01. Granularity test — a molecule carries TREATMENT, never a frozen composition.** If a unit dictates *where things sit relative to each other*, it is a composition → split the treatment out and name the arrangement as a recipe. If it only dictates *how one thing looks*, it is a molecule → keep it.
New (deepens the cardinal rule). *Why:* a molecule that bakes in a layout ("hero + exactly 4 stats in a row") becomes a mini-organism — every screen that reaches for it reproduces that one layout. That is homogenization wearing a system's clothes. *Check:* could two different briefs use this unit and end up with visibly different screens? If no, it's over-composed.

**P-MOL-02. Recipes must be STRUCTURALLY distinct — boxing/density are flags, not recipes.** Two recipes that differ only by card-vs-bare or compact-vs-roomy are the same recipe. Real recipes differ in WHERE the supporting elements go.
New. *Why:* near-duplicate recipes fake variety — a builder picking between them still produces the same shape. *Check:* if you removed the card border, would the two recipes be identical? Then merge them and make boxing a flag.

**P-MOL-03. The hero figure lives in a 44–54px band — cap it.** Dominance comes from the number standing ALONE (`hero-solo`) or being LARGEST relative to its stats, never from absolute size. Even `hero-solo` stays ≤54px.
Refines: F (type scale). *Why:* a 60px+ figure stops reading as confident and starts reading as shouting — the "out of hand" tell. *Check:* measure the hero figure; >54px fails.

**P-MOL-04. Tables stay one line tall and SCROLL rather than wrap.** Wrap every table in an `overflow-x:auto` container with `min-width:max-content`; every cell `nowrap`; the ONE long-text column truncates with an ellipsis. Short data ("6h 22m", "New York, NY") never wraps to a second line.
Refines: F (table density / MC-2). *Why:* a narrow main column squeezing cells until they wrap is the #1 thing weak builders get wrong — uneven row heights destroy the pro-tool rhythm. The fix is to scroll, not crush. *Check:* fill the table with long multi-word values at a constrained width; if any cell wraps, it fails.

**P-MOL-05. The shell seam is one continuous line.** The rail's brand-header row and the topbar share `--topbar-h` (52px) so their bottom borders meet in a single horizontal line. Never give the brand header an ad-hoc padding-driven height.
New. *Why:* a taller brand block jogs the divider at the rail edge — the most common shell tell. *Check:* the brand-header bottom border and topbar bottom border sit at the same y.

**P-MOL-06. Restraint counts as depth — never pile on to feel complete.** A secondary rail holds ONE chart plus a short figure cluster; do not stack two charts in a narrow rail or add a list to "reach" a depth count. No redundant double-encoding (a zone chip beside a spelled-out destination; a colored age beside a status dot beside a priority pill — pick the one encoding that carries the signal).
Refines: F (accent restraint), AP (decoration). *Why:* a weak builder's instinct is to add; restraint is the harder, better move. *Check:* can you remove a panel/encoding without losing information? Then remove it.

**P-MOL-07. Spend the character budget once.** Pick a SINGLE distinctive move per surface (hero number OR signature chart OR ⌘K), don't stack them.
Refines: F (signature move). *Why:* recognizability comes from one repeated gesture, not five competing ones.

## Atom catalog (the treatment vocabulary)
Each ships a clean original on the shared tokens; provenance is in each kit file's top comment ("distilled from a study of real shipped products").
- **`shell-frame`** (`atom-shell-frame.html`) — app skeleton: rail + topbar + content well. Variants: light labeled-rail / dark-anchor rail (a treatment choice, not a composition). Carries P-MOL-05.
- **`figure`** (`atom-figure.html`) — `hero-figure` (eyebrow + 44–54px tabular figure + delta; the DM-5 move) and `stat` (eyebrow + 20–26px figure + delta). Carries P-MOL-03.
- **`table-row`** (`atom-table-row.html`) — dense 38px row, hairline dividers, right-aligned tabular numerals, quiet hover. Variants: standard / leading-dot + inline sparkline. Carries P-MOL-04. Composes via the table/list recipes (`recipe-table.html`).
- **`chart`** (`atom-chart.html`) — one signature viz: single-hue soft area fill + thin top stroke + end dot. Variants: single-series area / dual-series gap-band (shows a RELATIONSHIP).
- **`status`** (`atom-status.html`) — quiet 8px dot + label (dense) / low-chroma tint pill (standalone). Never a full-saturation badge; always paired with text.

## Recipe catalog (the composition vocabulary — figures)
All built from `hero-figure` + `stat`; differ in where the stats go (P-MOL-02):
- **`hero + stat-row`** — stats in a horizontal row. The conventional. *(boxed flag: card or bare-on-page)*
- **`hero + rail`** — stats stacked vertically in a side rail.
- **`stat-tiles`** — NO hero; peer stats as tiles, one promoted to lead. For "nothing dominates."
- **`hero-solo`** — NO stats; the hero stands alone, context comes from the chart/table below.
- **`dual-hero`** — two co-equal hero-figures, no stat row. For two-headline briefs.

A revenue brief naturally pulls `hero + stat-row`, but the right recipe tracks the brief's emphasis: one dominant number → `hero-solo`; two co-equal → `dual-hero`; no headline → `stat-tiles`. (Verified: the same domain across briefs of different emphasis yields structurally different summaries.)

## Recipe catalog (the composition vocabulary — tables/lists)
All built from the `table-row` atom (`recipe-table.html`); differ in where controls/grouping/detail sit (P-MOL-02):
- **`toolbar-list`** — controls in a top toolbar (search + filter chips + primary action) over the table. The default admin list.
- **`filter-rail-list`** — a persistent left facet rail + table. For heavy filtering, logs, catalog.
- **`grouped-list`** — rows under section group headers. For grouping by status / date / owner.
- **`split-list`** — a narrow master list + a detail pane. For triage / rapid record review.

Pick by where the list's controls belong: light filtering → `toolbar-list`; faceted → `filter-rail-list`; the grouping IS the story → `grouped-list`; review-one-then-next → `split-list`.

## How a builder uses the kit (the picker)
The dials are inherited from the register (see the skin); the builder makes only composition choices. Full picker — dials → atoms → recipes → composition grammar → depth floor → restraint — is `kits/cool-technical/KIT.md`.

## Forbidden moves
- A molecule that bakes in a layout (over-composed → it's a mini-organism). (P-MOL-01)
- Two recipes that differ only boxed-vs-bare. (P-MOL-02)
- A hero figure over 54px. (P-MOL-03)
- A table cell that wraps to a second line; crushing columns instead of scrolling. (P-MOL-04)
- A brand-header taller than the topbar (broken shell seam). (P-MOL-05)
- Two charts stacked in a narrow rail; a panel added only to feel complete; redundant double-encoding. (P-MOL-06)
- Stacking multiple distinctive moves on one surface. (P-MOL-07)

## Sources
Cardinal rule + tokens contract (`SKILL.md`, `fundamentals.md`) · `anti-patterns.md` (over-composition, near-duplicate recipes) · runnable kit `kits/cool-technical/` · **Reference study of real shipped products (Linear, Vercel, Stripe, Mercury, Ramp) → the molecule-library taste rules.** Battle-tested 2026-05-30 via a weak-builder (Sonnet) compose-vs-free-design trial: the kit lifted taste and compelled appropriate composition variety across briefs; the granularity + structural-distinctness rules were the load-bearing fixes.
