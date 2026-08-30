# Spec card — direction-c

**Source:** direction-c.html  
**Captured:** 2026-08-23 · 1440×900

## Spacing
- Base unit **2px**, 94% of values on scale
- 16 distinct values; steps used: 12, 8, 14, 4, 16, 20, 10, 18, 24, 11, 6, 2
- **Proximity 6.67×** (median per-group ratio, 11 groups — 4 nested, 7 within-container)
  - typical inside-group gap 8px · typical between-group gap 20px *(independent medians — don't divide these)*
- → space encodes grouping strongly *(confidence: high)*

## Type
- Families: Inter
- Body **14px**; 7 sizes: 12, 13, 14, 15, 16, 18, 26
- Weights: 400, 500, 600, 700 · **17 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **ink** (spread — size 0.19, weight 0.33, ink 0.9)

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 14 | 400 | #696969 | 1.5 | 0 | 23 August 2026 |
| 16 | 500 | #071a2b | 1.5 | 0 | Finish your business profile |
| 16 | 400 | #ffffff | 1.5 | 0 | Dashboard |
| 15 | 400 | #696969 | 1.5 | 0 | Vehicle GR 2419-25 added to your fleet |
| 14 | 500 | #05663e | 1.5 | 0 | Add vehicle |
| 16 | 400 | #696969 | 1.5 | 0 | 3 things need your attention. |
| 16 | 500 | #05663e | 1.5 | 0 | Add driver |
| 16 | 600 | #071a2b | 1.5 | 0 | AMM Logistics |
| 13 | 400 | #ffffff | 1.5 | 0 | ammduncan+11... |
| 13 | 600 | #ffffff | 1.5 | 0 | AMM Logistics |

## Colour & depth
- Page bg #f8f9fb; max background chroma **0**
- Chromatic area **0.8%** → accent is scarce
- Neutrals tinted 2/5 → neutrals are near-pure grey (default-ish)
- Depth: 15 bordered / 0 shadowed → **borders only, zero resting shadows**
- Radius scale: 10, 50, 12, 8 · gradients: 1

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #ffffff | 0 | 0 | 100 | 0 | 36.8 |
| #05663e | 155 | 90.7 | 21 | 38 | 0.4 |
| #eef2f5 | 206 | 25.9 | 94.7 | 2.7 | 0.3 |
| #071a2b | 208 | 72 | 9.8 | 14.1 | 0.3 |
| #eaf5ee | 142 | 35.5 | 93.9 | 4.3 | 0.2 |
| #fff5dd | 42 | 100 | 93.3 | 13.3 | 0.1 |
| #41a66b | 145 | 43.7 | 45.3 | 39.6 | 0 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #696969 | 0 | 41.2 | 0 | 47 |
| #071a2b | 72 | 9.8 | 14.1 | 21.9 |
| #ffffff | 0 | 100 | 0 | 20.3 |
| #05663e | 90.7 | 21 | 38 | 10.9 |

## Composition
- Main region **1440px**; prose cap — (no prose); horizontal bleed: false
- Alignment: 17 distinct left edges, **8** cover 80% of content
- Grid primitives: `2-col: px px` ×2
- Density: 103 visible elements, **103/screenful**
