# Spec card — stock

**Source:** http://localhost:3011/stock  
**Captured:** 2026-07-29 · 1440×900

## Spacing
- Base unit **2px**, 100% of values on scale
- 12 distinct values; steps used: 10, 32, 16, 14
- **Proximity 2.75×** (median per-group ratio, 5 groups — 2 nested, 3 within-container)
  - typical inside-group gap 16px · typical between-group gap 28px *(independent medians — don't divide these)*
- → space encodes grouping strongly *(confidence: medium)*

## Type
- Families: Google Sans
- Body **16px**; 3 sizes: 14, 16, 24
- Weights: 400, 500, 600 · **5 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **mixed (size+weight)** (spread — size 0.19, weight 0.17, ink 0.14)

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 16 | 400 | #505f57 | 1.5 | 0 | Only approved DVLA staff can use this system. |
| 14 | 500 | #0e5b34 | 1.43 | 0 | DVLA Stores |
| 14 | 500 | #2e3833 | 1.43 | 0 | Email |
| 24 | 600 | #1a2a22 | 1.33 | -0.6 | Sign in |
| 14 | 500 | #ffffff | 1.43 | 0 | Sign in |

## Colour & depth
- Page bg transparent (inherits canvas); max background chroma **30.2**
- Chromatic area **1.3%** → accent is scarce
- Neutrals tinted 3/5 → neutrals are tinted (designed)
- Depth: 3 bordered / 2 shadowed → **shadow-led**
- Radius scale: 8, 16, 6 · gradients: 1

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #ffffff | 0 | 0 | 100 | 0 | 20.1 |
| #0e5b34 | 150 | 73.3 | 20.6 | 30.2 | 1.3 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #505f57 | 8.6 | 34.3 | 5.9 | 45.5 |
| #0e5b34 | 73.3 | 20.6 | 30.2 | 27.3 |
| #2e3833 | 9.8 | 20 | 3.9 | 13.1 |
| #1a2a22 | 23.5 | 13.3 | 6.3 | 7.1 |
| #ffffff | 0 | 100 | 0 | 7.1 |

## Composition
- Main region **1440px**; prose cap — (no prose); horizontal bleed: false
- Alignment: 6 distinct left edges, **2** cover 80% of content
- Grid primitives: none
- Density: 30 visible elements, **30/screenful**
