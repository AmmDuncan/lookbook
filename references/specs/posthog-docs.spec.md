# Spec card — posthog-docs

**Source:** https://posthog.com/docs/product-analytics/insights  
**Captured:** 2026-07-29 · 1440×900

## Spacing
- Base unit **4px**, 80.3% of values on scale
- 23 distinct values; steps used: 4, 2, 8, 6, 1, 16, 17, 12, 30, 20, 9, 32
- **Proximity 1.45×** (median per-group ratio, 45 groups — 33 nested, 12 within-container)
  - typical inside-group gap 8px · typical between-group gap 8.5px *(independent medians — don't divide these)*
- → space encodes grouping *(confidence: high)*

## Type
- Families: RoundHog, ui-monospace, Source Code Pro
- Body **15px**; 11 sizes: 12, 12.9, 13, 14, 15, 16, 18, 19.3, 20, 21.4, 30
- Weights: 400, 500, 600, 700, 800 · **36 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **weight** (spread — size 0.1, weight 0.33, ink 0.2)
- Prose measure ≈ **66 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 15 | 500 | #111111 | 1.71 | 0 | Hi I've created an insight of type Trend which i |
| 15 | 500 | #374151 | 1.5 | 0 | Insights are the main building blocks of product |
| 14 | 400 | #23251d | 1.25 | 0 | Product |
| 16 | 600 | #111111 | 1.25 | 0 | Consider dashboard filters in custom query insig |
| 14 | 400 | #65675e | 1.43 | 0 | PostHog.com doesn't use third-party cookies, onl |
| 14 | 500 | #9ea096 | 1.43 | 0 | a year ago |
| 13 | 500 | #ffffff | 1.25 | 0 | Home |
| 15 | 600 | #111827 | 1.5 | 0 | events |
| 19.3 | 600 | #111827 | 1.56 | -0.48 | Trends |
| 15 | 600 | #111111 | 1.71 | 0 | https://posthog.com/docs/product-analytics/sql#s |

## Colour & depth
- Page bg #eeefe9; max background chroma **5.1**
- Chromatic area **1.2%** → accent is scarce
- Neutrals tinted 10/14 → neutrals are tinted (designed)
- Depth: 116 bordered / 7 shadowed → **border-led, shadows reserved**
- Radius scale: 4, 9999, 2, 6, 20 · gradients: 4

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #e5e7e0 | 77 | 12.7 | 89.2 | 2.7 | 133.5 |
| #e6e7e0 | 69 | 12.7 | 89.2 | 2.7 | 70.5 |
| #ffffff | 0 | 0 | 100 | 0 | 16.9 |
| #2a2734 | 254 | 14.3 | 17.8 | 5.1 | 5.4 |
| #fdfdf7 | 60 | 60 | 98 | 2.4 | 4.4 |
| #1b2222 | 180 | 11.5 | 12 | 2.7 | 0.8 |
| #717180 | 240 | 6.2 | 47.3 | 5.9 | 0.4 |
| #cd8407 | 38 | 93.4 | 41.6 | 77.6 | 0.3 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #111111 | 0 | 6.7 | 0 | 45.5 |
| #374151 | 19.1 | 26.7 | 10.2 | 26.1 |
| #23251d | 12.1 | 12.9 | 3.1 | 11.2 |
| #111827 | 39.3 | 11 | 8.6 | 5 |
| #65675e | 4.6 | 38.6 | 3.5 | 2.9 |
| #9ea096 | 5 | 60.8 | 3.9 | 2.2 |

## Composition
- Main region **1440px**; prose cap 543px; horizontal bleed: false
- Alignment: 121 distinct left edges, **33** cover 80% of content
- Grid primitives: `2-col: px px` ×1
- Density: 1484 visible elements, **1484/screenful**
