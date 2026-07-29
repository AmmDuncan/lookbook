# Spec card — shadcn-dashboard

**Source:** https://ui.shadcn.com/examples/dashboard  
**Captured:** 2026-07-29 · 1440×2045

## Spacing
- Base unit **4px**, 88.5% of values on scale
- 12 distinct values; steps used: 8, 4, 6, 24, 12, 2, 16, 10, 32, 3
- **Proximity 2×** (median per-group ratio, 20 groups — 17 nested, 3 within-container)
  - typical inside-group gap 6px · typical between-group gap 16px *(independent medians — don't divide these)*
- → space encodes grouping strongly *(confidence: high)*

## Type
- Families: Geist, Geist Mono
- Body **14px**; 7 sizes: 12, 12.8, 14, 16, 18, 24, 48
- Weights: 400, 500, 600 · **19 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **mixed (ink+size)** (spread — size 0.42, weight 0.17, ink 0.45)
- Prose measure ≈ **100 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 14 | 500 | #000000 | 1.43 | 0 | Home |
| 14 | 400 | #737373 | 1.43 | 0 | Total Revenue |
| 14 | 500 | #737373 | 1.43 | 0 | Drag to reorder |
| 14 | 400 | #000000 | 1.43 | 0 | Neutral |
| 12 | 500 | #737373 | 1.33 | 0 | 120k |
| 18 | 400 | #000000 | 1.56 | 0 | A set of beautifully designed components that yo |
| 12 | 400 | #000000 | 1.33 | 0 | Jun 24 |
| 12 | 500 | #000000 | 1.33 | 0 | Home |
| 16 | 500 | #737373 | 1.5 | 0 | Examples |
| 48 | 600 | #000000 | 1.1 | -2.4 | The Foundation for your Design System |

## Colour & depth
- Page bg transparent (inherits canvas); max background chroma **0.4**
- Chromatic area **0%** → accent is scarce
- Neutrals tinted 0/12 → neutrals are near-pure grey (default-ish)
- Depth: 89 bordered / 55 shadowed → **shadow-led**
- Radius scale: 8, 33554400, 4, 10, 14, 2 · gradients: 1

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #ffffff | 0 | 0 | 100 | 0 | 240.6 |
| #fafafa | 0 | 0 | 98 | 0 | 12.3 |
| #f7f7f7 | 0 | 0 | 96.9 | 0 | 4.7 |
| #f5f5f5 | 0 | 0 | 96.1 | 0 | 2.6 |
| #feffff | 180 | 100 | 99.8 | 0.4 | 1.8 |
| #000000 | 0 | 0 | 0 | 0 | 0.3 |
| #747474 | 0 | 0 | 45.5 | 0 | 0 |
| #2b7fff | 216 | 100 | 58.4 | 83.1 | 0 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #000000 | 0 | 0 | 0 | 60.6 |
| #737373 | 0 | 45.1 | 0 | 36 |
| #171717 | 0 | 9 | 0 | 2.2 |
| #fafafa | 0 | 98 | 0 | 1.2 |

## Composition
- Main region **1440px**; prose cap 896px; horizontal bleed: false
- Alignment: 97 distinct left edges, **34** cover 80% of content
- Grid primitives: `2-col: px px` ×5 · `4-col: px px px px` ×1
- Density: 847 visible elements, **373/screenful**
