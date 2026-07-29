# Spec card — raycast-home

**Source:** https://www.raycast.com/  
**Captured:** 2026-07-29 · 1440×15626

## Spacing
- Base unit **2px**, 83.6% of values on scale
- 36 distinct values; steps used: 15, 8, 24, 12, 10, 16, 4, 3, 32, 50, 40, 20
- **Proximity 2×** (median per-group ratio, 49 groups — 45 nested, 4 within-container)
  - typical inside-group gap 10px · typical between-group gap 12px *(independent medians — don't divide these)*
- → space encodes grouping strongly *(confidence: high)*

## Type
- Families: Inter, SF Pro Text, GeistMono
- Body **14px**; 14 sizes: 10, 11, 12, 13, 14, 16, 18, 20, 22, 23.8, 24, 32, 56, 64
- Weights: 300, 400, 500, 600, 700 · **35 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **mixed (size+ink)** (spread — size 0.62, weight 0.33, ink 0.58)
- Prose measure ≈ **45 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 14 | 500 | #9c9c9d | — | 0.2 | Store |
| 16 | 500 | #ffffff | 1.6 | 0.2 | Remember Everything. |
| 13 | 400 | #ffffff | 1.15 | 0.1 | All Types |
| 14 | 600 | #ffffff | 1.4 | 0 | Introducing Raycast Focus |
| 14 | 500 | #6a6b6c | 1.6 | 0.2 | Engineering |
| 20 | 500 | #6a6b6c | — | 0.2 | One interface, everything you need. |
| 16 | 600 | #6a6b6c | — | 0.3 | CEO, Vercel |
| 18 | 400 | #ffffff | — | 0.2 | A collection of powerful productivity tools all  |
| 20 | 500 | #ffffff | — | 0.2 | Take shortcuts, not detours. |
| 16 | 600 | #ffffff | — | 0.3 | Guillermo Rauch |

## Colour & depth
- Page bg #07080a; max background chroma **23.1**
- Chromatic area **3%** → accent is scarce
- Neutrals tinted 5/14 → neutrals are near-pure grey (default-ish)
- Depth: 108 bordered / 322 shadowed → **shadow-led**
- Radius scale: 11, 8, 100, 6, 12, 20 · gradients: 234

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #07080a | 220 | 17.6 | 3.3 | 1.2 | 8.8 |
| #000000 | 0 | 0 | 0 | 0 | 8 |
| #ffffff | 0 | 0 | 100 | 0 | 3.5 |
| #9dbad8 | 211 | 43.1 | 73.1 | 23.1 | 3 |
| #434345 | 240 | 1.5 | 26.7 | 0.8 | 2.4 |
| #111214 | 220 | 8.1 | 7.3 | 1.2 | 0.9 |
| #e6e6e6 | 0 | 0 | 90.2 | 0 | 0.2 |
| #08090c | 225 | 20 | 3.9 | 1.6 | 0.1 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #ffffff | 0 | 100 | 0 | 56.7 |
| #9c9c9d | 0.5 | 61.4 | 0.4 | 18.9 |
| #6a6b6c | 0.9 | 42 | 0.8 | 16 |
| #434345 | 1.5 | 26.7 | 0.8 | 6.6 |
| #2f3031 | 2.1 | 18.8 | 0.8 | 1.2 |
| #8cd6ff | 100 | 77.5 | 45.1 | 0.6 |

## Composition
- Main region **1440px**; prose cap 430px; horizontal bleed: false
- Alignment: 626 distinct left edges, **295** cover 80% of content
- Grid primitives: `2-col: px px` ×38 · `5-col: px px px px px` ×2 · `3-col: px px px` ×2 · `6-col: px px px px px px` ×1
- Density: 2459 visible elements, **142/screenful**
