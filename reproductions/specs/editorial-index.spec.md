# Spec card — editorial-index

**Source:** reproductions/editorial-index.html  
**Captured:** 2026-07-29 · 1440×2167

## Spacing
- Base unit **4px**, 82.4% of values on scale
- 15 distinct values; steps used: 32, 36, 12, 14, 64, 24, 20, 8, 10, 4, 16
- **Proximity 2.78×** (median per-group ratio, 5 groups — 4 nested, 1 within-container)
  - typical inside-group gap 11.5px · typical between-group gap 32px *(independent medians — don't divide these)*
- → space encodes grouping strongly *(confidence: medium)*

## Type
- Families: Newsreader, Fraunces
- Body **14.5px**; 17 sizes: 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 14.5, 17, 19, 22, 24, 26, 30, 44, 80
- Weights: 300, 400, 500, 600 · **30 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **size** (spread — size 1, weight 0.17, ink 0.22)
- Prose measure ≈ **53 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 14.5 | 400 | #4a4339 | 1.6 | 0 | Olu Martins built fourteen public libraries acro |
| 14 | 400 | #4a4339 | — | 0.12 | A short meditation on , , and the words that res |
| 24 | 500 | #1c1915 | 1.14 | -0.36 | The Word for Homesickness That Requires Two Tran |
| 19 | 400 | #4a4339 | 1.65 | 0 | A story of two sisters, a failing archive, and t |
| 12 | 400 | #5e5242 | — | 0.12 | Newsletter |
| 11 | 500 | #8b2517 | — | 2.2 | Cover Essay · Fiction |
| 12.5 | 400 | #5e5242 | — | 0 | By Ekundayo Babatunde |
| 30 | 500 | #1c1915 | 1.08 | -0.45 | The Architect Who Refused to Name His Buildings |
| 17 | 500 | #1c1915 | 1.15 | -0.26 | On Keeping Lists No One Will Ever See |
| 14 | 400 | #1c1915 | 1.55 | 0 | Print + digital subscription. Access to our full |

## Colour & depth
- Page bg #f6f0e3; max background chroma **52.5**
- Chromatic area **4.5%** → accent is scarce
- Neutrals tinted 5/5 → neutrals are tinted (designed)
- Depth: 25 bordered / 0 shadowed → **borders only, zero resting shadows**
- Radius scale: 3, 2 · gradients: 0

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #f6f0e3 | 41 | 51.4 | 92.7 | 7.5 | 100 |
| #f0d96a | 50 | 81.7 | 67.8 | 52.5 | 4.3 |
| #1c1915 | 34 | 14.3 | 9.6 | 2.7 | 0.2 |
| #8b2517 | 7 | 71.6 | 31.8 | 45.5 | 0.1 |
| #d9ceb2 | 43 | 33.9 | 77.5 | 15.3 | 0.1 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #4a4339 | 13 | 25.7 | 6.7 | 54 |
| #1c1915 | 14.3 | 9.6 | 2.7 | 27.3 |
| #5e5242 | 17.5 | 31.4 | 11 | 12.3 |
| #8b2517 | 71.6 | 31.8 | 45.5 | 5.7 |
| #f0d96a | 81.7 | 67.8 | 52.5 | 0.4 |
| #fff7f0 | 100 | 97.1 | 5.9 | 0.3 |

## Composition
- Main region **1440px**; prose cap 1184px; horizontal bleed: false
- Alignment: 36 distinct left edges, **12** cover 80% of content
- Grid primitives: `2-col: px px` ×5 · `3-col: px px px` ×1
- Density: 139 visible elements, **58/screenful**
