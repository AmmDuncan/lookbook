# Reproduction #4 — analytics dashboard (charts)

**Domain:** app (data-viz) · **Target:** a real shipped SaaS "Stats" analytics page.
**Reference:** `_ref/whop-dashboard.png` (eyedrop only).
**Build:** `whop-dashboard.html` → render `whop-dashboard@2x.png`. **Gate:** pushed live beside the reference. Status: **awaiting user eye-gate.**

> Deepening pass (post-merge): the dashboard/charts surface was the largest untested gap on the coverage map.

## The decisions I extracted (not traced)

1. **The KPI-card-with-trend.** Each card pairs a big tabular value + a delta chip + a small line chart *with axes*. The number never stands alone — it always shows its trend over time. This is the depth rubric's "data shows a relationship, not a lone reading" (#4) done as the default card.
2. **Designed empty states.** MRR / ARR / Churn / Payments-breakdown show the value but "No data available" (on a tint chip, ghost axis labels beneath) where the chart would be — not a blank void. §12-A: design the wait/empty.
3. **One data accent.** The chart line is a single blue; the active nav item is a *gray* highlight (not colored); green appears only on positive deltas (semantic). Brand orange is confined to the logo. 60-30-10 held.
4. **Hierarchy inside the card.** The value is the loudest thing (24px/700); title, axes, and delta recede. Squint and you read the numbers.
5. **Type (§3).** Hanken Grotesk — a clean grotesque, distinct from the faces in #1–#3; tabular-nums on every figure and axis.

## Where the base HELPED

- **§12-A Dashboard playbook** — "very neutral; accent reserved; status colors functional; every chart needs empty/loading/error states." Drove the empty states + restraint directly.
- **Depth rubric (SKILL)** — "data shows a relationship not a lone reading" + "hierarchy with real contrast." The KPI-with-trend card is exactly axis #4; the big-value dominance is axis #2. The functional-surface gate (≥2 data axes) is met by composition, not decoration.
- **§4 Color** — one accent, semantic-only status color, tinted neutrals.
- **§8 Empty states** — "never a blank void; explain + (here) show the axis frame."

## Where the base was SILENT (the distillable)

1. **No recipe for the KPI-card or the dashboard grid.** §12-A names the *principles* (states, neutrality) and the depth rubric names the *test* (relationship), but neither gives the canonical card recipe: title + big value + delta chip + mini-trend-with-axes, tiled on a 3-col grid, with a designed empty variant. This is the single most common app-dashboard unit and the base has no how-to. → **cookbook candidate: "the dashboard KPI grid (value + trend card, designed empty state, one chart accent)."**

## Build misses (mine)

- My trend lines carry a faint area-gradient fill; the reference lines are line-only. Defensible (the area adds a touch of depth), but a hair off the original — a sub-choice within "value + trend," not a base gap.
- Reference cards are marginally tighter; mine breathe slightly more.

## Score (my eye — pending the user's, decision-transfer bar)

As close as #3 — dashboard chrome and the KPI-card pattern are fairly deterministic. The base + depth rubric supplied the discipline (relationship-not-lone-number, designed empty states, one accent) directly; the one gap is the *card/grid recipe* itself, which the base gestures at but doesn't operationalize. Same exit signal: strong spine + one distillable cookbook, no invented machinery.

**Cookbook written after the user confirms the reproduction landed.**
