# Cookbook — the dashboard KPI grid

> The analytics/stats overview: a grid of metric cards a user scans to read "how are we doing." Each metric must show its *trend*, not just a number.
>
> **Earned by:** reproduction #4 (`reproductions/whop-dashboard.md`). §12-A names the principles and the depth rubric names the test ("relationship not lone reading"), but neither gives the card recipe. This is it.

## When to reach for this

A metrics overview — revenue, users, conversion, ops health — tiled as cards. View-oriented (the eye, not the click-stream governs), so the depth gate applies: earn ≥2 of the data axes by *composition*, never decoration.

## The unit: the KPI-card-with-trend

A number alone is the dry default (depth-rubric failure). The card pairs the value with its relationship over time:

```
┌──────────────────────────────────┐
│ Gross revenue              ⌄      │  ← title (muted), quiet menu
│ $1.40   +$1.40                    │  ← big tabular value + delta chip
│              ╱‾                1.4 │
│           ╱                    1.0 │  ← mini line chart WITH axes
│      ╱‾                        0.4 │     (the trend = the relationship)
│ Jan 2026            Mar 2026    0  │  ← x dates · y ticks (right)
└──────────────────────────────────┘
```

- **Title** — 13px, muted; the metric name, quiet.
- **Value** — the loudest thing in the card (24px/700, tabular-nums). Hierarchy lives here.
- **Delta chip** — small, semantic color only (green up / red down), on a faint tint. Pair sign + value (`+$1.40`), never color alone.
- **Mini chart** — a single trend line with **light axis labels** (y ticks right, x dates below). The axes are what separate a real chart from a decorative sparkline — they make it readable, not just shapely. Optional faint area fill; line-only is equally valid (match the product).

## Empty / loading / error are part of the card, not afterthoughts (§12-A)

Every data card needs its non-happy states *designed*:
- **Empty** — show the value if known, then "No data available" on a tint chip where the chart would be, with **ghost axis labels** still in place so the card keeps its shape. Never a blank void (§8).
- **Loading** — a skeleton in the chart area (not a spinner that collapses the card).
- A dashboard that only designs the happy path is the most common "looks unfinished" tell on data surfaces.

## Grid + restraint

- **3-column grid** of equal cards (2 on tablet, 1 on mobile), hairline borders, consistent padding (16px), 12px radius. Cards are the one legitimate "box" here — they're repeatable units (§8).
- **One data accent.** All trend lines share a single hue. The active nav item is a **gray** highlight, not the accent. Status/brand color stays out of the chrome (brand in the logo only). Six chart colors = the rainbow tell (§4/§11).
- **A toolbar** above the grid drives the whole page: date range, comparison range, granularity, scope — pills, left-aligned, with Add/Edit on the right.

## Depth check (functional / view-oriented → ≥2 data axes)

This grid earns depth by composition: **#4 relationship** (every card is value+trend) + **#2 hierarchy** (the value dominates each card). Add **#5 a genuine secondary view** (a breakdown card, a distribution) for a third. No decoration needed — and none allowed (no per-card icons AP24, no accent-edge AP25).

## Don't

- ❌ A lone big number with no trend — that's the dry default the depth rubric fails.
- ❌ A sparkline with no axes — pretty, unreadable; the axes are the information.
- ❌ Skip the empty/loading states — design them or the dashboard reads unfinished.
- ❌ Rainbow chart series or a colored accent edge on the "highlight" card (AP25) — one accent, earn emphasis by size/value.
- ❌ Delta by color alone — pair the arrow/sign with the number.
