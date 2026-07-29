# Spec card — baseweb-components

**Source:** https://baseweb.design/components/button/  
**Captured:** 2026-07-29 · 1440×5140

## Spacing
- Base unit **2px**, 98% of values on scale
- 20 distinct values; steps used: 6, 16, 12, 8, 72, 14, 4, 10, 48, 3, 20, 5
- **Proximity 7.5×** (median per-group ratio, 10 groups — 7 nested, 3 within-container)
  - typical inside-group gap 2.5px · typical between-group gap 16px *(independent medians — don't divide these)*
- → space encodes grouping strongly *(confidence: high)*

## Type
- Families: UberMoveText, Consolas, UberMove, UberMoveMono
- Body **16px**; 9 sizes: 12, 13, 13.6, 14, 16, 18, 20, 24, 28
- Weights: 400, 500, 700 · **27 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **mixed (ink+size)** (spread — size 0.19, weight 0.17, ink 0.2)
- Prose measure ≈ **74 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 16 | 400 | #000000 | 1.5 | 0 | Home |
| 16 | 500 | #000000 | — | 0 | Skip to content |
| 14 | 500 | #000000 | 1.14 | 0 | v18.2.0 |
| 14 | 400 | #333333 | 1.71 | 0 | import * as React from "react"; import { Button  |
| 16 | 500 | #ffffff | 1.25 | 0 | Hello |
| 20 | 700 | #000000 | 1.4 | 0 | Basic usage |
| 14 | 400 | #000000 | 1.43 | 0 | medium |
| 14 | 400 | #448c27 | 1.71 | 0 | "react" |
| 13 | 400 | #333333 | 1.85 | 0 | Hello |
| 16 | 500 | #bb032a | 1.25 | 0 | DangerSecondary |

## Colour & depth
- Page bg transparent (inherits canvas); max background chroma **12.9**
- Chromatic area **1.7%** → accent is scarce
- Neutrals tinted 1/10 → neutrals are near-pure grey (default-ish)
- Depth: 143 bordered / 2 shadowed → **border-led, shadows reserved**
- Radius scale: 8, 50, 12, 3, 4, 999 · gradients: 1

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #ffffff | 0 | 0 | 100 | 0 | 220.3 |
| #f3f3f3 | 0 | 0 | 95.3 | 0 | 11.3 |
| #000000 | 0 | 0 | 0 | 0 | 2.2 |
| #fdf2dc | 40 | 89.2 | 92.7 | 12.9 | 1.6 |
| #fdfdfd | 0 | 0 | 99.2 | 0 | 0.6 |
| #142727 | 180 | 32.2 | 11.6 | 7.5 | 0.2 |
| #de1135 | 349 | 85.8 | 46.9 | 80.4 | 0.1 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #000000 | 0 | 0 | 0 | 83.9 |
| #333333 | 0 | 20 | 0 | 6.3 |
| #ffffff | 0 | 100 | 0 | 5.3 |
| #448c27 | 56.4 | 35.1 | 39.6 | 1.3 |
| #aaaaaa | 0 | 66.7 | 0 | 0.7 |
| #bb032a | 96.8 | 37.3 | 72.2 | 0.7 |

## Composition
- Main region **1440px**; prose cap 592px; horizontal bleed: false
- Alignment: 80 distinct left edges, **6** cover 80% of content
- Grid primitives: none
- Density: 947 visible elements, **166/screenful**
