# Spec card — snapshot

**Source:** snapshot.html  
**Captured:** 2026-08-28 · 1440×968

## Spacing
- Base unit **4px**, 91.1% of values on scale
- 12 distinct values; steps used: 8, 4, 12, 16, 20, 24, 2, 6, 10, 32
- **Proximity 1.42×** (median per-group ratio, 12 groups — 10 nested, 2 within-container)
  - typical inside-group gap 8px · typical between-group gap 15px *(independent medians — don't divide these)*
- → space encodes grouping *(confidence: high)*

## Type
- Families: Inter, Roboto Mono
- Body **14px**; 4 sizes: 11, 12, 14, 26
- Weights: 400, 500, 600 · **14 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **ink** (spread — size 0.35, weight 0.17, ink 0.91)
- Prose measure ≈ **179 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 14 | 400 | #171717 | 1.43 | 0 | GT 1188-22 |
| 14 | 400 | #525252 | 1.43 | 0 | This record is pending review. The vehicle can s |
| 12 | 400 | #525252 | 1.33 | 0 | Registration |
| 11 | 400 | #ffffff | 1.25 | 0 | Non-Compliance |
| 14 | 500 | #171717 | 1.43 | 0 | Abena Ofori |
| 14 | 500 | #ffffff | 1.43 | 0 | 01:36 AM |
| 14 | 600 | #171717 | 1.43 | 0 | Vehicle and customer |
| 14 | 500 | #015a2f | 1.43 | 0 | 28 August 2026 |
| 12 | 500 | #894b00 | 1.33 | 0 | Under review |
| 12 | 600 | #432dd7 | 1.33 | 0.3 | Compliance |

## Colour & depth
- Page bg transparent (inherits canvas); max background chroma **49.4**
- Chromatic area **11.5%** → accent is present
- Neutrals tinted 1/7 → neutrals are near-pure grey (default-ish)
- Depth: 11 bordered / 1 shadowed → **border-led, shadows reserved**
- Radius scale: 8, 33554400, 12, 3 · gradients: 1

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #eef0f3 | 216 | 17.2 | 94.3 | 2 | 93 |
| #ffffff | 0 | 0 | 100 | 0 | 54.7 |
| #0f172a | 222 | 47.4 | 11.2 | 10.6 | 9 |
| #f5f5f5 | 0 | 0 | 96.1 | 0 | 5.6 |
| #028043 | 151 | 96.9 | 25.5 | 49.4 | 1.1 |
| #dc2626 | 0 | 72.2 | 50.6 | 71.4 | 0.4 |
| #dcfce7 | 141 | 84.2 | 92.5 | 12.5 | 0.3 |
| #fef9c2 | 55 | 96.8 | 87.8 | 23.5 | 0.3 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #171717 | 0 | 9 | 0 | 39.4 |
| #525252 | 0 | 32.2 | 0 | 34.8 |
| #ffffff | 0 | 100 | 0 | 19.7 |
| #894b00 | 100 | 26.9 | 53.7 | 2.5 |
| #015a2f | 97.8 | 17.8 | 34.9 | 1.8 |
| #432dd7 | 68 | 51 | 66.7 | 1.3 |

## Composition
- Main region **1440px**; prose cap — (no prose); horizontal bleed: false
- Alignment: 31 distinct left edges, **10** cover 80% of content
- Grid primitives: `3-col: px px px` ×1 · `2-col: px px` ×1
- Density: 198 visible elements, **184/screenful**
