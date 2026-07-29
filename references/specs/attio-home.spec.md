# Spec card — attio-home

**Source:** https://attio.com/  
**Captured:** 2026-07-29 · 1440×17668

## Spacing
- Base unit **2px**, 90.4% of values on scale
- 40 distinct values; steps used: 4, 6, 8, 10, 1, 12, 24, 32, 2, 7, 5, 16
- **Proximity 3.33×** (median per-group ratio, 117 groups — 102 nested, 15 within-container)
  - typical inside-group gap 4px · typical between-group gap 12px *(independent medians — don't divide these)*
- → space encodes grouping strongly *(confidence: high)*

## Type
- Families: inter, interDisplay, tiemposText, JetBrains Mono
- Body **14px**; 19 sizes: 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 20, 24, 32, 38.4, 40, 48, 56, 64
- Weights: 400, 500, 600 · **94 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **size** (spread — size 1.13, weight 0, ink 0.69)
- Prose measure ≈ **47 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 14 | 500 | #1c1d1f | 1.43 | -0.14 | 🚨 Deals at Risk |
| 14 | 500 | #242629 | 1.43 | -0.14 | Home |
| 16 | 500 | #8f99a8 | 1.38 | -0.16 | Agents handle the research and busywork. Reps fo |
| 10 | 500 | #6f7988 | 1.5 | -0.16 | Everything's in spreadsheets right now and it's  |
| 24 | 500 | #6f7988 | 1.15 | -0.24 | Agents prospect and reach out when buyers are lo |
| 12 | 500 | #505967 | 1.33 | -0.16 | Changed roles |
| 12 | 500 | #000000 | 1.33 | -0.12 | Favorites |
| 40 | 500 | #6f7988 | 1.1 | -0.4 | Picks up leads at 2am. Catches renewals before t |
| 14 | 400 | #b5bdc9 | 1.43 | -0.07 | Refer a team |
| 14 | 500 | #000000 | 1.43 | -0.14 | Configure |

## Colour & depth
- Page bg #ffffff; max background chroma **3.1**
- Chromatic area **0.1%** → accent is scarce
- Neutrals tinted 10/18 → neutrals are near-pure grey (default-ish)
- Depth: 249 bordered / 83 shadowed → **shadow-led**
- Radius scale: 8, 33554400, 12, 10, 5, 6 · gradients: 87

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #ffffff | 0 | 0 | 100 | 0 | 64.7 |
| #fafafb | 240 | 11.1 | 98.2 | 0.4 | 53.6 |
| #101010 | 0 | 0 | 6.3 | 0 | 50.9 |
| #f3f4f6 | 220 | 14.3 | 95.9 | 1.2 | 30.6 |
| #f2f4f6 | 210 | 18.2 | 95.7 | 1.6 | 3.2 |
| #e4e7ec | 218 | 17.4 | 91 | 3.1 | 2 |
| #000000 | 0 | 0 | 0 | 0 | 0.6 |
| #fbfbfb | 0 | 0 | 98.4 | 0 | 0.6 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #1c1d1f | 5.1 | 11.6 | 1.2 | 20.6 |
| #6f7988 | 10.1 | 48.4 | 9.8 | 18 |
| #242629 | 6.5 | 15.1 | 2 | 10.8 |
| #000000 | 0 | 0 | 0 | 10.3 |
| #8f99a8 | 12.6 | 61 | 9.8 | 9 |
| #505967 | 12.6 | 35.9 | 9 | 7.3 |

## Composition
- Main region **1440px**; prose cap 879px; horizontal bleed: false
- Alignment: 416 distinct left edges, **153** cover 80% of content
- Grid primitives: `24-col: px px px px px px px px px px px px px px px px px px px px px px px px` ×11 · `2-col: px px` ×8 · `12-col: px px px px px px px px px px px px` ×6 · `5-col: px px px px px` ×2 · `4-col: px px px px` ×2 · `8-col: subgrid [] [] [] [] [] [] []` ×1 · `3-col: px px px` ×1
- Density: 2945 visible elements, **150/screenful**
