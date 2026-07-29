# Spec card — tremor-blocks

**Source:** https://tremor.so/  
**Captured:** 2026-07-29 · 1440×7419

## Spacing
- Base unit **4px**, 86.7% of values on scale
- 19 distinct values; steps used: 16, 24, 1, 8, 32, 4, 6, 12, 14, 10, 2, 20
- **Proximity 3.5×** (median per-group ratio, 54 groups — 35 nested, 19 within-container)
  - typical inside-group gap 8px · typical between-group gap 26.75px *(independent medians — don't divide these)*
- → space encodes grouping strongly *(confidence: high)*

## Type
- Families: ui-monospace, __GeistSans_fb8f2c
- Body **14px**; 8 sizes: 12, 14, 16, 18, 20, 30, 36, 60
- Weights: 400, 500, 600, 700 · **42 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **ink** (spread — size 0.36, weight 0.17, ink 0.89)
- Prose measure ≈ **68 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 14 | 400 | #ffffff | 1.43 | 0 | is joining . |
| 14 | 400 | #9cd2bb | 1.43 | 0 | import |
| 14 | 400 | #ffd66d | 1.43 | 0 | "react" |
| 14 | 400 | #364153 | 1.71 | 0 | tremor.so is dope |
| 16 | 400 | #6a7282 | 1.75 | 0 | We already pushed the pixels so that you can foc |
| 14 | 400 | #888d94 | 1.43 | 0 |  |
| 14 | 400 | #4a5565 | 1.43 | 0 | 10k requests |
| 14 | 400 | #f96379 | 1.43 | 0 | TooltipProps |
| 14 | 400 | #9ca3af | 1.43 | 0 | // Tremor DonutChart [v0.0.0] |
| 16 | 400 | #4a5565 | 1.75 | 0 | Analytical interfaces that allow your audience t |

## Colour & depth
- Page bg transparent (inherits canvas); max background chroma **83.1**
- Chromatic area **0.5%** → accent is scarce
- Neutrals tinted 6/11 → neutrals are near-pure grey (default-ish)
- Depth: 44 bordered / 100 shadowed → **shadow-led**
- Radius scale: 6, 1, 12, 8, 4, 33554400 · gradients: 15

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #ffffff | 0 | 0 | 100 | 0 | 61.6 |
| #030712 | 224 | 71.4 | 4.1 | 5.9 | 37.4 |
| #fafafa | 0 | 0 | 98 | 0 | 25.1 |
| #000000 | 0 | 0 | 0 | 0 | 1.3 |
| #f9fafb | 210 | 20 | 98 | 0.8 | 1.1 |
| #2b7fff | 216 | 100 | 58.4 | 83.1 | 0.5 |
| #f3f4f6 | 220 | 14.3 | 95.9 | 1.2 | 0.3 |
| #99a1af | 218 | 12.1 | 64.3 | 8.6 | 0 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #ffffff | 0 | 100 | 0 | 20.1 |
| #4a5565 | 15.4 | 34.3 | 10.6 | 12 |
| #101828 | 42.9 | 11 | 9.4 | 10.4 |
| #6a7282 | 10.2 | 46.3 | 9.4 | 8.8 |
| #364153 | 21.2 | 26.9 | 11.4 | 8.3 |
| #9cd2bb | 37.5 | 71.8 | 21.2 | 7.5 |

## Composition
- Main region **1440px**; prose cap 1140px; horizontal bleed: false
- Alignment: 178 distinct left edges, **42** cover 80% of content
- Grid primitives: `3-col: px px px` ×6 · `2-col: px px` ×4 · `12-col: px px px px px px px px px px px px` ×1
- Density: 3578 visible elements, **434/screenful**
