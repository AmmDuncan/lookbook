# Spec card — c-case

**Source:** c-case.html  
**Captured:** 2026-08-09 · 1440×2030

## Spacing
- Base unit **2px**, 73.1% of values on scale
- 14 distinct values; steps used: 12, 5, 2, 8, 9, 40, 16, 24, 10, 4, 6
- **Proximity 2×** (median per-group ratio, 15 groups — 8 nested, 7 within-container)
  - typical inside-group gap 12px · typical between-group gap 24px *(independent medians — don't divide these)*
- → space encodes grouping strongly *(confidence: high)*

## Type
- Families: Inter, Newsreader
- Body **16px**; 16 sizes: 9.5, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 15, 16, 17, 19, 21, 22, 34
- Weights: 400, 500, 600, 700 · **30 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **size** (spread — size 0.56, weight 0.33, ink 0.4)
- Prose measure ≈ **75 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 16 | 400 | #2e2c29 | 1.6 | 0 | The submission proposes GHS 412,000 per kilometr |
| 12.5 | 400 | #85817a | 1.55 | 0 | › › › |
| 15 | 400 | #85817a | 1.6 | 0 | Traffic forecasts and the corridor's condition s |
| 13 | 400 | #1a1a19 | 1.55 | 0 | Engineer's estimate, revision 2 |
| 19 | 600 | #1a1a19 | 1.3 | 0 | The unit rate for bituminous surfacing exceeds t |
| 12 | 400 | #85817a | 1.7 | 0 | Threshold register v4, effective 1 July 2026 Ste |
| 13 | 400 | #5f211a | 1.55 | 0 | No registered evidence is cited. A finding canno |
| 10.5 | 600 | #85817a | 1.55 | 1.16 | Estimated value |
| 14 | 400 | #1a1a19 | 1.55 | 0 | GHS 48,600,000 |
| 17 | 400 | #55534e | 1.55 | 0 | Ministry of Roads & Highways · matter VFM/PA/202 |

## Colour & depth
- Page bg #fbfaf8; max background chroma **4.7**
- Chromatic area **0.8%** → accent is scarce
- Neutrals tinted 9/12 → neutrals are tinted (designed)
- Depth: 38 bordered / 0 shadowed → **borders only, zero resting shadows**
- Radius scale: 2, 50 · gradients: 0

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #ffffff | 0 | 0 | 100 | 0 | 13.2 |
| #f7edeb | 10 | 42.9 | 94.5 | 4.7 | 1.8 |
| #f7efdc | 42 | 62.8 | 91.6 | 10.6 | 0.4 |
| #8c332a | 6 | 53.8 | 35.7 | 38.4 | 0.4 |
| #e9f0ec | 146 | 18.9 | 92.7 | 2.7 | 0.3 |
| #f2f0ec | 40 | 18.7 | 93.7 | 2.4 | 0.2 |
| #e2dfd8 | 42 | 14.7 | 86.7 | 3.9 | 0 |
| #cfcbc2 | 42 | 11.9 | 78.6 | 5.1 | 0 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #85817a | 4.3 | 50 | 4.3 | 31.2 |
| #2e2c29 | 5.7 | 17.1 | 2 | 27.3 |
| #1a1a19 | 2 | 10 | 0.4 | 22 |
| #5f211a | 57 | 23.7 | 27.1 | 6.7 |
| #55534e | 4.3 | 32 | 2.7 | 6 |
| #8c332a | 53.8 | 35.7 | 38.4 | 2.7 |

## Composition
- Main region **1440px**; prose cap 601px; horizontal bleed: false
- Alignment: 38 distinct left edges, **11** cover 80% of content
- Grid primitives: `3-col: px px px` ×1 · `2-col: px px` ×1
- Density: 172 visible elements, **76/screenful**
