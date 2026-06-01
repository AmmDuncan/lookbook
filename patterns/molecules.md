# Pattern: Molecules — treatment atoms, composition recipes, granularity

**Inherits:** all of `fundamentals.md` unless overridden below.
**Cite as:** `P-MOL-<nn>`.
**Runnable kits:** `kits/cool-technical/` (data/app surfaces) · `kits/marketing/` (marketing/convince surfaces) — each ships atoms, recipes, organisms. **Register index + when-to-use:** root `KIT.md`. **Adoption skin:** `packages/tokens/skins/cool-technical.css`.

## Surface intent
This file is not a page archetype — it is the **generative machinery** behind the cardinal rule (*converge on vocabulary, diverge on composition*). It gives that rule concrete parts so a builder of any model strength can assemble on-taste screens without re-inventing them: **treatment atoms** carry the taste, a **shared token foundation** carries coherence, and **composition recipes** carry variety. Use it whenever you compose a data/metrics surface (dashboard, ops console, monitoring, record detail, revenue overview) and want the result distinctive without drifting off-system. **The machinery is register-agnostic — the two-layer model and the granularity rules (P-MOL-01/02) apply to ANY register; only the atom/recipe *catalogs* are per-register.** Two runnable registers exist today: `cool-technical` (data/app surfaces, catalogs below) and `marketing` (marketing/convince surfaces, catalog further below). The CTA recipes in the marketing kit are the cleanest cross-register proof of P-MOL-01/02.

## The two layers (and why each recurs differently)
- **Treatment atoms** — `hero-figure`, `stat`, `table-row`, `chart`, `status`, `shell-frame`. An atom dictates only **how one thing looks** (size, weight, tracking, encoding). Atoms recur ON PURPOSE — that recurrence IS the brand (every Stripe number looks like Stripe). Coherence is free because every atom reads the same token foundation.
- **Composition recipes** — named arrangements built FROM atoms (`hero + stat-row`, `hero + rail`, `stat-tiles`, `hero-solo`, `dual-hero`). A recipe dictates **where things sit relative to each other**. Recipes should VARY across surfaces. A recipe is a convenience (drop it in whole) and a starting point (deviate freely).

## Calibrations

**P-MOL-01. Granularity test — a molecule carries TREATMENT, never a frozen composition.** If a unit dictates *where things sit relative to each other*, it is a composition → split the treatment out and name the arrangement as a recipe. If it only dictates *how one thing looks*, it is a molecule → keep it.
New (deepens the cardinal rule). *Why:* a molecule that bakes in a layout ("hero + exactly 4 stats in a row") becomes a mini-organism — every screen that reaches for it reproduces that one layout. That is homogenization wearing a system's clothes. *Check:* could two different briefs use this unit and end up with visibly different screens? If no, it's over-composed.

**P-MOL-02. Recipes must be STRUCTURALLY distinct — boxing/density are flags, not recipes.** Two recipes that differ only by card-vs-bare or compact-vs-roomy are the same recipe. Real recipes differ in WHERE the supporting elements go.
New. *Why:* near-duplicate recipes fake variety — a builder picking between them still produces the same shape. *Check:* if you removed the card border, would the two recipes be identical? Then merge them and make boxing a flag.

**P-MOL-03. In-app focal numbers sit at 32–40px; a standalone hero ≤44px. A figure ≥48px reads as a marketing/landing hero, not a product metric.** Dominance comes from the number standing ALONE (`hero-solo`) or being LARGEST relative to its stats — never from absolute size.
Refines: F (type scale). *Why (measured):* real working dashboards run their focal number far smaller than design instinct suggests — Wise balance ~24px, Monarch net-worth ~26px, Rocket Money spend ~32px, Stripe/Mercury in-app figures ~32–40px. ≥48px belongs to a marketing splash, not an app surface; oversizing is the single most common "this was designed in isolation, not shipped" tell. *Check:* measure the hero figure against the page chrome — if it's more than ~2.5× the body size (≈14px → ≤~40px) it's too big; >44px fails for any in-app context.

**P-MOL-04. Tables stay one line tall and SCROLL rather than wrap.** Wrap every table in an `overflow-x:auto` container with `min-width:max-content`; every cell `nowrap`; the ONE long-text column truncates with an ellipsis. Short data ("6h 22m", "New York, NY") never wraps to a second line.
Refines: F (table density / MC-2). *Why:* a narrow main column squeezing cells until they wrap is the #1 thing weak builders get wrong — uneven row heights destroy the pro-tool rhythm. The fix is to scroll, not crush. *Check:* fill the table with long multi-word values at a constrained width; if any cell wraps, it fails.

**P-MOL-05. The shell seam is one continuous line.** The rail's brand-header row and the topbar share `--topbar-h` (52px) so their bottom borders meet in a single horizontal line. Never give the brand header an ad-hoc padding-driven height.
New. *Why:* a taller brand block jogs the divider at the rail edge — the most common shell tell. *Check:* the brand-header bottom border and topbar bottom border sit at the same y.

**P-MOL-06. Restraint counts as depth — never pile on to feel complete.** A secondary rail holds ONE chart plus a short figure cluster; do not stack two charts in a narrow rail or add a list to "reach" a depth count. No redundant double-encoding (a zone chip beside a spelled-out destination; a colored age beside a status dot beside a priority pill — pick the one encoding that carries the signal).
Refines: F (accent restraint), AP (decoration). *Why:* a weak builder's instinct is to add; restraint is the harder, better move. *Check:* can you remove a panel/encoding without losing information? Then remove it.

**P-MOL-07. Spend the character budget once.** Pick a SINGLE distinctive move per surface (hero number OR signature chart OR ⌘K), don't stack them.
Refines: F (signature move). *Why:* recognizability comes from one repeated gesture, not five competing ones.

**P-MOL-08. An admin/CRUD table carries its affordances: a trailing row-action + sortable-header signal.** Every actionable row ends in a trailing action cell (a `⋮` menu, or inline actions) — keep it quiet (persistent at low contrast OR hover-revealed), never a full-opacity `⋮` on every row. Columns the user can reorder by show a sort signal (`↓`/`↑`/`⇅`) in the header.
New (measured). *Why:* a table with no per-row action and no sort affordance reads as a static *readout*, not a *tool* — it's the most common "looks designed, isn't usable" gap. Real admin tables ship both: Fresha (⋮ per row, sortable headers), Airtable/Linear (sort + row context menu). *Check:* can the user act on a row and re-sort a column from the table itself? If not, it's a readout, not an admin table. *Restraint tie-in (P-MOL-06):* reveal the row-action on hover; don't show a ⋮ on every row at full opacity (that's noise).

**P-MOL-09. A primary chart labels its TIME axis, not just its values.** A chart presented as a widget/panel shows x-axis time ticks (at minimum the two endpoints + 2–3 interior) alongside the y-axis value ticks. Only an inline/in-row sparkline omits axis labels.
New (measured). *Why:* a time-series with y-values but no x-labels reads as an oversized **sparkline** — decorative, not readable; the viewer can't tell *when*. Every real chart widget labels time (Visitors endpoints "Jan 15 → Jan 23", Deputy full date axis, Mixpanel ticked). *Check:* can you read WHEN a point occurred from the chart alone? If not, add x-axis labels — or it's a sparkline, and belongs inline in a row (M3-B), not as a standalone panel.

**P-MOL-10. Color encodes STATE, not category — a hue means ONE thing per screen.** Status/state columns get the semantic palette (the quiet dot/pill, M5). CATEGORY columns — plan tier, type, role, team — render NEUTRAL: plain text or a single neutral pill (`--bg`/`--muted`/hairline border). Reserve the accent for the one signature move + the primary action.
New (measured). *Why:* the convergence build colored plan tiers (Enterprise indigo / Growth green / Trial amber) AND status (Active green / Past-due amber) — so **green meant both "Active" and "Growth"** on one screen. When a hue carries two meanings the viewer can't decode it at a glance, and the chroma blows past the accent-scarcity floor (≤4 accent instances). Real restrained products (Stripe, Attio) render plan/type as neutral text and spend color only on state. *Check:* list every hue on the screen and what it means — if any hue appears with two meanings (a plan color that's also a status color), neutralize the category use. The M5 tint-pill is a STATUS atom; using it for a category is the misuse this rule guards.

**P-MOL-11. Icons are ONE real monoline set, delivered as a sprite — never unicode glyphs, emoji, or per-file hand-drawn one-offs.** Reach for a public, MIT/ISC-licensed set (default **Lucide**; Phosphor / Tabler / Heroicons are valid alternates) and inline it as a `<symbol>` sprite. The kit ships this: `kits/cool-technical/_icons.svg` (Lucide, ISC, 21 symbols, `viewBox 0 0 24`, `stroke-width 1.75`, `stroke="currentColor"`). Reference an icon with `<svg class="ic"><use href="#i-NAME"/></svg>` so it inherits ink/subtle/muted/accent from context; size 14–16px inline, 24px standalone, 40–48px as an empty-state spot mark. The `atom-icon.html` specimen is the primitive every other atom references.
Operationalizes MC-4 / AD-3 for the kit. *Why:* there are two failure modes, not one. (a) Mismatched unicode glyphs (a thin `↗` next to a heavy `▦` next to a `⚙`) read as unpolished — the eye catches the inconsistent weights/baselines instantly. (b) **Per-file hand-drawn SVG** is just as bad in slow motion: each file invents its own geometry, so a `nav` magnifier and a `search` magnifier two atoms over don't match. A single real set fixes both at once and is one of the cheapest, highest-signal production markers — Lucide is what shadcn/Linear-adjacent products ship, so it lands on-register for free. *Swap discipline:* change the SET wholesale (replace `_icons.svg`), never mix sets or hand-draw a one-off into a single file. *Stays typographic (NOT icons):* the `⌘`/`↑`/`↓`/`↵` glyphs inside `<kbd>` key-chips, the `·` middot separator, and small `↑`/`↓` direction arrows inside delta/number chips — these are key labels and micro-indicators, not iconography. *Check:* does every standalone affordance icon resolve to `_icons.svg`, at one stroke weight? Any inline-drawn `<path>` icon or unicode symbol standing in for an affordance fails.

**P-MOL-12. Illustrations come from a real recolorable source, tinted to the register — and the STYLE is register-dependent.** Empty-state / first-run spot art is not decoration you hand-draw per screen: pull from a free, recolorable open set (**Popsy** monoline line-art, **unDraw** scenes — both recolor to a chosen ink) and remap its ink(s) to the register's tokens (`--subtle` for the line, `--accent` only on a focal element). BUT the *kind* of illustration tracks the register: **cool-technical defaults to a restrained large monoline mark** (a 40–48px Lucide glyph — the Linear/Vercel empty state), reserving scene illustrations for warmer registers (warm-editorial / consumer). When you do use a scene, remap ALL of its inks (a stock palette's own violet ≠ your `--accent`).
New. *Why:* hand-drawn per-screen spot art drifts off-system and eats time; a recolorable source stays coherent and is swappable. And a colorful person-at-a-desk scene on a cool-technical admin tool is itself an off-register tell — restraint is the on-brand move here. *"Get a better one if needed":* a free set is the floor, not the ceiling — flag a bespoke/paid upgrade (Phosphor duotone, Streamline, custom spot art) only when a marquee surface genuinely earns it; don't reach for it by default. *Check:* is the illustration from a real source, recolored to the register's tokens, and is its style appropriate to the register (mark for cool-technical, scene only for warm)? A multi-hue stock illustration dropped in un-remapped fails.

## Atom catalog (the treatment vocabulary)
Each ships a clean original on the shared tokens; provenance is in each kit file's top comment ("distilled from a study of real shipped products").
- **`icon`** (`atom-icon.html` + `_icons.svg`) — the icon primitive: ONE real monoline set (Lucide, ISC) inlined as a `<symbol>` sprite, `currentColor`, one stroke weight. Every other atom references it via `<use href="#i-NAME"/>` instead of inventing a glyph. Carries P-MOL-11. The SET is swappable wholesale.
- **`shell-frame`** (`atom-shell-frame.html`) — app skeleton: rail + topbar + content well. Variants: light labeled-rail / dark-anchor rail (a treatment choice, not a composition). Carries P-MOL-05.
- **`figure`** (`atom-figure.html`) — `hero-figure` (eyebrow + 44–54px tabular figure + delta; the DM-5 move) and `stat` (eyebrow + 20–26px figure + delta). Carries P-MOL-03.
- **`table-row`** (`atom-table-row.html`) — dense 38px row, hairline dividers, right-aligned tabular numerals, quiet hover. Variants: standard / leading-dot + inline sparkline. Carries P-MOL-04. Composes via the table/list recipes (`recipe-table.html`).
- **`chart`** (`atom-chart.html`) — one signature viz: single-hue soft area fill + thin top stroke + end dot. Variants: single-series area / dual-series gap-band (shows a RELATIONSHIP).
- **`status`** (`atom-status.html`) — quiet 8px dot + label (dense) / low-chroma tint pill (standalone). Never a full-saturation badge; always paired with text. STATE only (P-MOL-10).
- **`overlay`** (`atom-overlay.html`) — the dialog shell: modal (centered ~440px) / slideover (right-edge ~460px), each = dimmed backdrop + panel + title-and-✕ header + body slot + footer action-bar (secondary + primary). HOSTS a form recipe (containers.md P-CN).
- **`empty`** (`atom-empty.html`) — DM-1: centered spot art + confident one-line heading + optional sub + ONE CTA. Variants: illustrated (first-run; recolorable open illustration — Popsy/unDraw, tinted to tokens) / minimal mark (in-panel; a 40px Lucide spot mark — the cool-technical default). Carries P-MOL-12. Copy is confident, not "No data."
- **`cmdk`** (`atom-cmdk.html`) — DM-2: centered ~540px palette, search + grouped action list + per-row shortcut + nav footer + optional context chip. Opened by the shell topbar's ⌘K affordance.

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

## Marketing register — atom catalog (the convince-surface treatments)
The SAME two-layer machinery on a different register. Runnable kit: `kits/marketing/` (spacious · Bricolage Grotesque display + Geist body · brand-continuous indigo · texture allowed — the deliberate opposite of cool-technical). Governed by `patterns/marketing.md` (P-M), `pricing.md` (P-PR), `assets.md` (P-AS). Reuses the `icon` primitive (Lucide). Register dials in `kits/marketing/_tokens.css`.
- **`hero`** (`atom-hero.html`) — eyebrow → headline → deck → one primary CTA + ghost → trust markers → product-true visual with depth (P-M-13/14/15). Compositions: centered-visual-below (default) / left-text right-visual.
- **`feature-grid`** (`atom-feature-grid.html`) — feature cells (Lucide chip + title + body). Compositions: asymmetric **bento** (one product-visual cell) / hierarchy **triplet**. Dodges the 3-equal-cards tell (P-M-09).
- **`pricing-row`** (`atom-pricing-row.html`) — the comparison instrument: 2–4 tier cards, recommended lifted by *stacked* cues, price-as-hero, billing toggle + savings, trust strip, Enterprise-below (full P-PR-01..11). Equal-height, CTAs bottom-pinned (the AP5 comparison-peer carve-out).
- **`cta-band`** (`atom-cta-band.html`) — the closing-CTA TREATMENT (headline + deck + CTA cluster + trust). The surface flag (dark/tint/surface/paper) is orthogonal; the compositions live in `recipe-cta`.
- **`nav-footer`** (`atom-nav-footer.html`) — marketing top-nav (default + floating scrolled) + dark fat-footer sitemap (the P-SA marketing shell).
- **`social-faq`** (`atom-social-faq.html`) — curated monochrome logo-wall (P-AS-04) + single-quote testimonial + **testimonial-with-metrics** (quote paired with proof figures, for dev/data products) + accordion FAQ (P-PR-08).
- **`code`** (`atom-code.html`) — the DEV-product visual: three treatments — **terminal** (live-log stream) / **split** (two-panel "run it, see it": editor pane calls, terminal pane answers, one frame) / **codeblock** (syntax-highlighted snippet). Token-derived `--code-*` palette (keyword = indigo). Operationalizes P-M-18: the hero visual is product-type-fit — dashboard (SaaS) / terminal+code (dev) / device (consumer).
- **`chart`** (`atom-chart.html`) — the DATA-PROOF visual. Adopts the cool-technical signature viz vocab wholesale (single-hue indigo area `0.14→0.01` + 1.5px stroke + one end dot, DM-3) so the chart language converges across registers. Treatments: **spark** (bare inline sparkline) / **data feature-cell** (figure + right-edge typographic delta over a sparkline — the marketing proof band) / **area card** (framed, depth-bearing, gridlines + time axis — a bento big-cell product visual). Figures use Geist tabular (not Bricolage) so data reads precise; deltas are typographic `↑↓✓` (P-MOL-11), colour = sentiment + arrow = direction (P-MOL-10).

## Marketing register — recipe catalog (CTA — the cross-register P-MOL-01/02 exemplar)
`recipe-cta.html` is the clearest proof of the granularity rules on a second register: the **CTA-band is a TREATMENT**; variety lives in **structurally-distinct compositions** (P-MOL-02), with dark/tint/surface/paper demoted to an orthogonal surface **flag** (not a recipe). Built from the `cta-band` treatment, differ in WHERE the elements sit:
- **`centered`** — stacked headline + deck + CTA, symmetric. The big closing moment.
- **`split-horizontal`** — copy left, action right; the eye reads ACROSS.
- **`with-visual`** — copy + CTA beside a product frame; a closing mini-hero.
- **`slim-inline`** — one compact row; a mid-page / end-of-section nudge.
A page picks the composition that fits its moment; any composition wears any surface flag — exactly the figure-recipe lesson, on a marketing surface. (Whole-page marketing rhythm = surface alternation between bands, P-M-16, not hairline separators.)

## How a builder uses the kit (the picker)
The dials are inherited from the register (see the skin); the builder makes only composition choices. Pick the register first via the root `KIT.md` (data/app → `cool-technical`; marketing/convince → `marketing`). Full data-surface picker — dials → atoms → recipes → composition grammar → depth floor → restraint — is `kits/cool-technical/KIT.md`; the marketing kit's parts + rules are in `kits/marketing/README.md`.

## Forbidden moves
- A molecule that bakes in a layout (over-composed → it's a mini-organism). (P-MOL-01)
- Two recipes that differ only boxed-vs-bare. (P-MOL-02)
- A hero figure over 54px. (P-MOL-03)
- A table cell that wraps to a second line; crushing columns instead of scrolling. (P-MOL-04)
- A brand-header taller than the topbar (broken shell seam). (P-MOL-05)
- Two charts stacked in a narrow rail; a panel added only to feel complete; redundant double-encoding. (P-MOL-06)
- Stacking multiple distinctive moves on one surface. (P-MOL-07)
- A unicode glyph, emoji, or per-file hand-drawn `<path>` standing in for an affordance icon. (P-MOL-11)
- A multi-hue stock illustration dropped in un-remapped, or a scene illustration on a cool-technical surface. (P-MOL-12)

## Sources
Cardinal rule + tokens contract (`SKILL.md`, `fundamentals.md`) · `anti-patterns.md` (over-composition, near-duplicate recipes) · runnable kits `kits/cool-technical/` (data surfaces) + `kits/marketing/` (marketing surfaces, governed by `patterns/marketing.md`/`pricing.md`, battle-tested to parity 2026-06-01) · root `KIT.md` (register index) · **Reference study of real shipped products (Linear, Vercel, Stripe, Mercury, Ramp) → the molecule-library taste rules.** Battle-tested 2026-05-30 via a weak-builder (Sonnet) compose-vs-free-design trial: the kit lifted taste and compelled appropriate composition variety across briefs; the granularity + structural-distinctness rules were the load-bearing fixes. **Grounding ledger** (real-product validation of the molecule numbers + pre-grounding for the next families — overlays, empty-states, command-palette): `evidence/molecules.md`. **Icon/illustration sourcing** (P-MOL-11/12): icons = Lucide (ISC) — the set shadcn/Linear-adjacent products ship, so it lands on-register; illustrations = Popsy/unDraw (free, recolorable). The kit's previous unicode + hand-drawn glyphs were retired wholesale to `_icons.svg`.
