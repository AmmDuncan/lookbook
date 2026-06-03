# Cookbook — charts, the honest combo

> The real multi-series chart — bars and a line, two axes, a story in the shape. The job: make the chart *be* the explanation (the visualization law), and keep it honest — a second axis only when there are genuinely two units, never to dramatize a flat line.
>
> **Earned by:** reproduction #10 (`reproductions/causal-chart.md`). `dashboard-kpi.md` covers the KPI tile + its sparkline; this is a full chart. Built in plain SVG — no chart library needed for a static, well-decided frame.

## When to reach for this

A dashboard panel that shows more than one number over time — ARR + growth rate, revenue + margin, traffic + conversion. Two series that tell *related but different* stories. If it's one series and one number, you want a KPI tile (`dashboard-kpi.md`); reach here when there are two stories on one x-axis.

## The visualization law first

Before drawing anything: **could a bullet list say this just as well?** If yes, it's decoration — rebuild it. A chart earns its space when the *shape* carries something a number can't: a trend, a turning point, a divergence. The ARR+growth chart passes because the line's spike-then-decay *is* the "growth rate falls as you scale" story — no sentence does that as fast.

## The anatomy

```
 ARR + Growth ⓘ
 $4m ┤- - - - - - - - - - - - - - - - - - - - - - -  150%
     │        ╱╲  ← growth line (rate, right axis)
 $3m ┤- - - -╱- -╲- - - - - - - - - - ▁▂▃▅▆█ - - -  100%
     │      ╱     ╲___                ▁▂▃▅▆██         ← bars (level, left axis)
 $2m ┤- - ╱- - - - - ╲___▁▂▃▄▅▆▇█████████████ - - -   50%
     │   ╱      ▁▂▃▄▅▆███████  $2.2m $2.4m …
 $0  ┼─●─────────────────────────────────────────     0%
     Jan'22   Jul'22   Jan'23   Jul'23   Jan'24
              ● ARR   ● Growth rate          ← legend: swatch encodes the shape
```

## The load-bearing rules

- **Two series because two stories.** Bars carry the *level* (a magnitude you read off the left axis); the line carries the *rate* (a percentage off the right axis). Pick the mark to the meaning — bars for discrete magnitudes, a line for a continuous rate/trend.
- **Dual axes only for two genuine units (and label both).** Dollars left, percent right — legitimate, because they're different units on a shared x. This is the *one* honest use of a second axis. Using a second axis to rescale one series so a flat line looks dramatic is the slop version — don't.
- **Per-bar value labels do a tooltip's job in a static frame.** A live chart leans on hover; a frame that stands still labels the bars/points so the exact number is readable. Mute the labels (`--val`, a grey) — they're reference, not hierarchy, and shouldn't fight the bars. *If the labels crowd past a density threshold, label every-other one* rather than letting them collide.
- **Let the line's shape carry the story; dot only the interesting region.** Mark points where curvature is high (the early spike the eye wants to track); leave the flat tail undotted. The shape is the message — don't bury it in markers.
- **Data-ink restraint (§4).** Exactly the series colors (here two: one for bars, one for the line) and nothing else saturated. Gridlines are **faint dashes** — present so you can read a value, quiet so they don't compete. Axis labels and value labels are neutral greys. No fills under the line, no gradient on the bars, no shadows.
- **The frame is a plain card (§6).** A titled white card (title + an info affordance), the plot, a centered legend below. Legend swatches **encode the shape** — a square for bars, a dot/line for the line — so the legend teaches the mark, not just the color.
- **You don't need a chart library for this.** A static, well-decided chart is hand-built SVG: compute the scales, map the points, draw rects + a polyline + dashed gridlines. Reach for a library when you need interactivity (hover, zoom, live data), not for a frame.

## Don't

- ❌ A chart a bullet list could replace — that's decoration; cut it or rebuild it.
- ❌ A second y-axis to make a flat series look dramatic — dual axes only for two real units.
- ❌ A static chart with no value labels — the reader can't get the number without a hover that isn't there.
- ❌ Gridlines as solid mid-grey lines competing with the data — faint dashes.
- ❌ Gradient bars, fills under the line, drop shadows — data-ink only.
- ❌ More than ~2–3 series on one chart — past that, small multiples beat a tangle.
