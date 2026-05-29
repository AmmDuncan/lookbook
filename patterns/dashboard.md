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

**P-D-04. 4–6 KPI tiles in the hero row (desktop) — 4 ideal, 6 the ceiling; 2 per row mobile. ≥7 = compact into a list.** _(Calibrated 2026-05-29: real dashboards cluster at 4–6, e.g. a 6-up 3×2 grid; the old hard "4" was too strict — the scan-breakdown trigger is ≥7.)_
New. *Why:* 4-up is the cognitive limit for parallel KPIs; 5+ stops being scannable.

**P-D-05. Charts get ≥240px height (desktop). Below that, axes and trend become illegible.**
New. Exception: a single sparkline inside a tile.

**P-D-06. Near-monochrome is the norm. Accent appears in ~1–3 places total — often just the single primary action — and status/data colors only on the values they describe.** Never accent on chrome.
Refines: F17 (tighter than the ≤5 floor). *Why:* dashboards accumulate color through charts and status; the chrome must stay neutral or the page becomes a quilt. Evidence: real analytics products run near-monochrome — Gumroad uses *zero* accent (black/white/cream); TheyDo/Apollo confine color to one primary button + status pills (`evidence/dashboard.md`). When in doubt, take color *out*.

**P-D-07. No decorative texture (F36 enforced strictly).** Grain, gradients-as-background, pattern fills — all out. Chart fills are the only "texture," and they come from neutrals + accent at low opacity.
Refines: F36.

**P-D-08. Tabular numbers everywhere numeric (`font-variant-numeric: tabular-nums`).**
Refines: F24. *Why:* scanning a column needs consistent digit width.

**P-D-09. Small multiples are first-class.** When showing 4+ comparable charts, drop to a uniform grid of small charts with shared axes, not 4 individually-tuned big charts.
New. *Why:* Tufte — small multiples beat dashboards-of-singles for comparison.

**P-D-10. Every chart has a one-line description above it.** "Revenue, last 30 days" — not just "Revenue." Numbers without scope are unreadable.
New.

## Composition defaults
- **App shell: a persistent left sidebar (grouped nav), not a top nav bar.** Evidence: 4/4 real analytics products use a left rail (TheyDo, Mixpanel, Apollo, Gumroad — see `evidence/dashboard.md`). A pinned trial/account card at the sidebar bottom is a common real pattern.
- **The main surface is often a table or chart+table, not a KPI-tile row.** Table-led and chart-over-table are first-class; a 3–4 tile hero is *one* option, not the default. Lead with whatever answers "what changed?" fastest.
- **Body** is a 12-col grid; charts span 4, 6, or 12. Never odd spans (5, 7) — they look like accidents.
- **Filter / scope** lives in a left filter rail, a right `~280px` rail, OR a sticky top scope bar — all three are real (Apollo uses a *left* filter rail). Filter-heavy → a dedicated rail.
- **Tabs are fine to switch report views/categories** (Overview · Reports · Goals — Apollo does this well). The real tell is cramming *unrelated KPIs* into one hero; that's two dashboards. Ban the number-salad, not the tabs.
- **Scope** (date range, segment) always visible — a dashboard without scope context is a number salad.

## Forbidden moves
- Pie charts with >4 slices. Use a bar.
- 3D charts of any kind.
- Animated value counters that delay reading.
- Background gradients behind chart canvases.
- Mixed densities — compact tiles next to a spacious table = collage.
- Hero "highlight" callout *and* the same value in a KPI tile = duplicate signal; pick one.

## Sources
Tufte (*Visual Display*, *Envisioning Information*) · Few (*Information Dashboard Design*) · Lookbook gallery → Recipes (Dashboard) · DVLA `/performance-metrics` (KpiTile heights, breakdown overflow patterns — battle-tested) · **Reference study of real public products (TheyDo, Mixpanel, Apollo, Gumroad) → `evidence/dashboard.md`** (left-shell, near-monochrome, table-led, tabs-OK calibrations).
