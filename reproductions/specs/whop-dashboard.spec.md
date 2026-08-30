# Spec card — whop-dashboard

**Source:** reproductions/whop-dashboard.html  
**Captured:** 2026-07-29 · 1440×900

## Spacing
- Base unit **2px**, 99.6% of values on scale
- 12 distinct values; steps used: 10, 8, 12, 6, 16, 4, 1, 28, 14
- **Proximity 1.8×** (median per-group ratio, 13 groups — 10 nested, 3 within-container)
  - typical inside-group gap 6px · typical between-group gap 10px *(independent medians — don't divide these)*
- → space encodes grouping *(confidence: high)*

## Type
- Families: Hanken Grotesk
- Body **13px**; 8 sizes: 10, 11, 12, 13, 16, 21, 24, 64
- Weights: 400, 500, 600, 700 · **14 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **mixed (size+weight)** (spread — size 0.38, weight 0.33, ink 0.31)

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 13 | 500 | #4b5563 | 1.45 | 0 | Business home |
| 13 | 500 | #6b7280 | 1.45 | 0 | Gross revenue |
| 10 | 400 | #9ca3af | 1.45 | 0 | Jan 2026 |
| 12 | 400 | #9ca3af | 1.45 | 0 | No data available |
| 10 | 400 | #c7cad1 | 1.45 | 0 | Jan 2026 |
| 13 | 600 | #1a1d24 | 1.45 | 0 | Mob Design Courses |
| 11 | 600 | #9ca3af | 1.45 | 0.22 | Dashboard |
| 24 | 700 | #1a1d24 | 1.45 | -0.24 | $1.40 |
| 13 | 400 | #9ca3af | 1.45 | 0 | Search Mob Design Courses |
| 12 | 600 | #15a34a | 1.45 | 0 | +$1.40 |

## Colour & depth
- Page bg #ffffff; max background chroma **2**
- Chromatic area **0.1%** → accent is scarce
- Neutrals tinted 5/7 → neutrals are tinted (designed)
- Depth: 20 bordered / 0 shadowed → **borders only, zero resting shadows**
- Radius scale: 7, 12, 5, 6, 14, 50 · gradients: 2

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #ffffff | 0 | 0 | 100 | 0 | 54 |
| #fbfbfc | 240 | 14.3 | 98.6 | 0.4 | 14.5 |
| #eef0f3 | 216 | 17.2 | 94.3 | 2 | 0.6 |
| #e9f7ef | 146 | 46.7 | 94.1 | 5.5 | 0.2 |
| #fa4616 | 13 | 95.8 | 53.3 | 89.4 | 0.1 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #9ca3af | 10.6 | 64.9 | 7.5 | 33.9 |
| #4b5563 | 13.8 | 34.1 | 9.4 | 27.1 |
| #6b7280 | 8.9 | 46.1 | 8.2 | 17.9 |
| #1a1d24 | 16.1 | 12.2 | 3.9 | 9.3 |
| #c7cad1 | 9.8 | 80 | 3.9 | 9 |
| #15a34a | 77.2 | 36.1 | 55.7 | 2.8 |

## Composition
- Main region **1440px**; prose cap — (no prose); horizontal bleed: false
- Alignment: 37 distinct left edges, **12** cover 80% of content
- Grid primitives: `2-col: px px` ×1 · `3-col: px px px` ×1
- Density: 227 visible elements, **227/screenful**
