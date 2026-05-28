# Pattern: Dashboard

**Inherits:** all of `fundamentals.md` unless overridden below.
**Cite as:** `P-D-<nn>` (e.g. P-D-04).

## Surface intent
A scan-first interface for monitoring state: KPIs, trends, anomalies. Read in seconds, returned to many times a day. Familiarity beats novelty. The user's eye moves *fast*; everything must answer "what changed?" before "what is this?"

## Density band
**Compact (F26).** Row height 32–40px (F27); inner padding 12–16px. Anything more is wrong density — dashboards with marketing whitespace feel empty and broken.

## Calibrations

**P-D-01. KPI tile padding 16–24px; height 96–128px desktop, 80–96px mobile.**
Refines: F10, F27. *Why:* the label, value, and delta need to breathe without the value being dwarfed. *Check:* tile inner padding + height in range.

**P-D-02. KPI value 28–40px desktop / 24–32px mobile; weight 500–600; line-height 1.1.**
Refines: F4. *Why:* the value is the headline; below 28px it stops feeling like one.

**P-D-03. Tile-to-tile gap is one token (16 OR 24, never both in the same grid).**
Refines: F12. *Why:* tiles are peers; equal gap, not hierarchical.

**P-D-04. Maximum 4 KPI tiles in the hero row (desktop); 2 per row mobile. More = compact into a list.**
New. *Why:* 4-up is the cognitive limit for parallel KPIs; 5+ stops being scannable.

**P-D-05. Charts get ≥240px height (desktop). Below that, axes and trend become illegible.**
New. Exception: a single sparkline inside a tile.

**P-D-06. One accent color across the whole dashboard (F17 enforced strictly).** Status colors (success / warning / danger) only on the values they describe — never on chrome or accent placements.
Refines: F17. *Why:* dashboards accumulate color through charts; the chrome must stay neutral or the page becomes a quilt.

**P-D-07. No decorative texture (F36 enforced strictly).** Grain, gradients-as-background, pattern fills — all out. Chart fills are the only "texture," and they come from neutrals + accent at low opacity.
Refines: F36.

**P-D-08. Tabular numbers everywhere numeric (`font-variant-numeric: tabular-nums`).**
Refines: F24. *Why:* scanning a column needs consistent digit width.

**P-D-09. Small multiples are first-class.** When showing 4+ comparable charts, drop to a uniform grid of small charts with shared axes, not 4 individually-tuned big charts.
New. *Why:* Tufte — small multiples beat dashboards-of-singles for comparison.

**P-D-10. Every chart has a one-line description above it.** "Revenue, last 30 days" — not just "Revenue." Numbers without scope are unreadable.
New.

## Composition defaults
- **Hero row** of 3–4 KPI tiles, full bleed.
- **Body** is a 12-col grid; charts span 4, 6, or 12. Never odd spans (5, 7) — they look like accidents.
- **Filter bar** sticky above the hero OR a `1fr/280px` right rail for filter-heavy dashboards.
- **No tabs in a dashboard hero.** If you need tabs you have two dashboards — split them.
- **Breadcrumb / scope** (date range, segment) always visible — a dashboard without scope context is a number salad.

## Forbidden moves
- Pie charts with >4 slices. Use a bar.
- 3D charts of any kind.
- Animated value counters that delay reading.
- Background gradients behind chart canvases.
- Mixed densities — compact tiles next to a spacious table = collage.
- Hero "highlight" callout *and* the same value in a KPI tile = duplicate signal; pick one.

## Sources
Tufte (*Visual Display*, *Envisioning Information*) · Few (*Information Dashboard Design*) · Lookbook gallery → Recipes (Dashboard) · DVLA `/performance-metrics` (KpiTile heights, breakdown overflow patterns — battle-tested).
