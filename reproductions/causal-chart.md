# Reproduction #10 — ARR + growth combo chart (bars + line, dual axes)

**Domain:** dashboard / data-visualization (§12-A) · **Target:** a real shipped financial-modelling tool.
**Reference:** `_ref/causal-chart.png` (eyedrop only).
**Build:** `causal-chart.html` (HTML + hand-built SVG) → render `causal-chart@2x.png`. **Gate:** pushed live beside the reference. Status: **GATED — user "all looks good" 2026-06-03.**

> Deepening pass: the **visualization axis** the other nine reproductions never ran. The KPI cookbook (#4) covered *cards with a sparkline*; this is a real multi-series chart — and the visualization law ("could a bullet list say this just as well? if yes, rebuild it") is the whole test.

## The decisions I extracted (not traced)

1. **The chart IS the explanation — two series because two stories.** Bars carry the *level* (ARR climbing $75k → $3.2m); the line carries the *rate* (MoM growth, which spikes when the base is tiny then decays as it compounds). Those are the two things a founder reads off this one frame. No bullet list does that — it's the visualization law passing, not decoration.
2. **Dual y-axes because they're two units (§12-A).** Dollars on the left ($0–$4m), percent on the right (0–150%). Each series binds to its own axis. This is the one legitimate use of a second axis — two genuinely different units on a shared x — not the slop version (a second axis to make a flat line look dramatic).
3. **Per-bar value labels do a tooltip's job in a static frame.** Every bar is labeled ($75k … $3.2m) so the exact number is readable without hover. A live chart would lean on a tooltip; a frame that has to stand still labels the bars. The labels are muted (they're reference, not hierarchy) so they don't fight the bars.
4. **The growth line is the data, not chartjunk.** It spikes hard early (169k off a 73k base ≈ 130% MoM) then decays toward zero — the *shape itself* tells the "growth rate inevitably falls as you scale" story. Early points get dots (high-curvature region the eye wants to track); the flat tail doesn't need them.
5. **Restraint (§4 / data-ink).** Exactly two series colors — one blue, one rose — and nothing else is saturated. Gridlines are faint dashes (present so you can read a value off the chart, quiet so they don't compete). Axis labels and bar labels are neutral greys. No fills under the line, no gradient on the bars, no drop shadows.
6. **Card frame (§6).** The chart sits in a plain white card with a hairline border and a near-invisible shadow — a titled container ("ARR + Growth" + an info affordance), a plot, a centered legend below. The legend swatches encode the shape (square = bars, dot = line).

## Where the base HELPED

- **§12-A dashboards / "killer details"** — the dual-axis combo, the value-labeled bars, the quiet gridlines are exactly the dashboard discipline.
- **The visualization law** — "could a bullet list communicate this?" forced the bars-for-level / line-for-rate split rather than two separate charts or a table.
- **§4 restraint / data-ink** — two series colors, neutral everything, faint dashed grid.
- **§6 depth** — flat card, hairline, near-zero shadow.

## Where the base was SILENT (the distillable)

1. **No multi-series-chart recipe.** `dashboard-kpi.md` covers the KPI tile + its sparkline, but not a *real chart*: when a second y-axis is honest (two units on a shared x) vs slop, the bars-for-level + line-for-rate pairing, per-bar value labels as the static-frame substitute for tooltips, the faint-dashed-gridline / neutral-axis-label discipline, the shape-encoding legend, and the "let the line's shape carry the story" rule. → **cookbook candidate: "charts — the honest combo."** It should reference `dashboard-kpi.md` (the chart often lives in a KPI dashboard) and not restate the card-frame (that's settled), adding only the multi-series + dual-axis + data-ink specifics.

## Build misses (mine)

- The reference growth line reads slightly smoother/rounder at the peak (interpolated); my polyline is a touch more angular at the apex. Same shape and the same axis zone (~125–150%), marginally less smooth.
- The value labels crowd in the dense middle stretch ($2.2m $2.2m $2.3m…) — the reference has the same crowding and lets it ride, so this is faithful, but neither is perfectly clean; a real fix is labeling every-other bar past a density threshold (worth a cookbook note).
- My ARR series is a hand-authored monotonic rise to $3.2m; the exact month-to-month wiggle differs from the reference's (it's a model output). The decisions (shape, labels, axes) transfer; the precise numbers are stand-in data.

## Score (my eye — pending the user's, decision-transfer bar)

Reproduces convincingly, and it's the first reproduction to exercise the **visualization** axis: the honest dual-axis bars-plus-line, per-bar value labels standing in for tooltips, the spike-then-decay growth shape carrying the story, and the two-color/faint-grid data-ink restraint all land at the decision level. ~0 base gaps — §12-A + the visualization law + §4 restraint carried it; the distillable is a *charts cookbook* (multi-series + dual-axis honesty + static-frame labeling). No invented machinery; built with plain SVG, no chart library.

**Cookbook distilled (user gated 2026-06-03).**
