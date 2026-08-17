# Spec card — b-case

**Source:** b-case.html  
**Captured:** 2026-08-09 · 1440×916

## Spacing
- Base unit **2px**, 77.7% of values on scale
- 12 distinct values; steps used: 4, 14, 10, 1, 7, 6, 5, 2, 20, 12, 3
- **Proximity 6×** (median per-group ratio, 13 groups — 4 nested, 9 within-container)
  - typical inside-group gap 3.5px · typical between-group gap 14px *(independent medians — don't divide these)*
- → space encodes grouping strongly *(confidence: high)*

## Type
- Families: IBM Plex Sans, IBM Plex Mono, Arial
- Body **12.5px**; 9 sizes: 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 18
- Weights: 400, 500, 600 · **25 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **ink** (spread — size 0.3, weight 0.33, ink 0.43)
- Prose measure ≈ **94 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 12.5 | 400 | #9dafb7 | 1.45 | 0 | VFM/PA/2026/0148 |
| 12 | 400 | #6c838c | 1.45 | 0 | Search this case — findings, evidence, requests |
| 13 | 500 | #e4ebee | 1.45 | 0 | Surfacing rate exceeds benchmark |
| 10.5 | 400 | #6c838c | 1.45 | 0 | 14 · 2 uncited |
| 12 | 400 | #9dafb7 | 1.45 | 0 | Steve Rogers · Team lead |
| 13.5 | 600 | #e4ebee | 1.45 | 0 | Unit rate for bituminous surfacing exceeds the p |
| 11 | 500 | #e5675c | 1.45 | 0 | Critical |
| 11 | 500 | #2fb3a3 | 1.45 | 0 | High |
| 12.5 | 400 | #e4ebee | 1.45 | 0 | Confidence |
| 10 | 600 | #6c838c | 1.45 | 0.4 | SCRN |

## Colour & depth
- Page bg #0e1417; max background chroma **60.4**
- Chromatic area **6.7%** → accent is scarce
- Neutrals tinted 6/6 → neutrals are tinted (designed)
- Depth: 97 bordered / 1 shadowed → **border-led, shadows reserved**
- Radius scale: 4, 50, 6, 5, 3, 7 · gradients: 0

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #151d21 | 200 | 22.2 | 10.6 | 4.7 | 87.6 |
| #0e1417 | 200 | 24.3 | 7.3 | 3.5 | 53.4 |
| #1b252a | 200 | 21.7 | 13.5 | 5.9 | 7.4 |
| #0a0f11 | 197 | 25.9 | 5.3 | 2.7 | 3.9 |
| #31b5a5 | 173 | 57.4 | 45.1 | 51.8 | 1.8 |
| #e8645d | 3 | 75.1 | 63.7 | 54.5 | 1.3 |
| #223037 | 200 | 23.6 | 17.5 | 8.2 | 1.3 |
| #2fb3a3 | 173 | 58.4 | 44.3 | 51.8 | 1.1 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #6c838c | 12.9 | 48.6 | 12.5 | 30 |
| #e4ebee | 22.7 | 91.4 | 3.9 | 28.7 |
| #9dafb7 | 15.3 | 66.7 | 10.2 | 27 |
| #2fb3a3 | 58.4 | 44.3 | 51.8 | 6.1 |
| #e5675c | 72.5 | 62.9 | 53.7 | 4.5 |
| #d9a441 | 66.7 | 55.3 | 59.6 | 2.1 |

## Composition
- Main region **1440px**; prose cap 585px; horizontal bleed: false
- Alignment: 68 distinct left edges, **26** cover 80% of content
- Grid primitives: `4-col: px px px px` ×5 · `2-col: px px` ×1 · `3-col: px px px` ×1
- Density: 301 visible elements, **296/screenful**
