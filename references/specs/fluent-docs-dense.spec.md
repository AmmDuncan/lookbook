# Spec card — fluent-docs-dense

**Source:** https://fluent2.microsoft.design/components/web/react/DataGrid/usage  
**Captured:** 2026-07-29 · 1440×1156

## Spacing
- Base unit **2px**, 87.8% of values on scale
- 24 distinct values; steps used: 6, 8, 2, 4, 32, 5, 3, 14, 12, 20, 11, 10
- **Proximity 4.5×** (median per-group ratio, 7 groups — 5 nested, 2 within-container)
  - typical inside-group gap 4px · typical between-group gap 40px *(independent medians — don't divide these)*
- → space encodes grouping strongly *(confidence: medium)*

## Type
- Families: Segoe UI, monospace
- Body **20px**; 7 sizes: 10, 12, 14, 16, 18, 20, 68
- Weights: 400, 600 · **20 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **size** (spread — size 0.74, weight 0.33, ink 0.38)
- Prose measure ≈ **77 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 20 | 400 | #000000 | 1.4 | 0 | The URL may be incorrect or the page may no long |
| 12 | 400 | #616161 | 1.33 | 0 | Share your email with us, if you allow us to get |
| 14 | 600 | #1b1a19 | 1.15 | 0 | Get started |
| 14 | 400 | #000000 | 1.43 | 0 | Give your voice and shape the future of Fluent 2 |
| 14 | 400 | #242424 | 1.43 | 0 | Feedback type |
| 16 | 600 | #616161 | 1.5 | 0 | Fluent 1 |
| 12 | 400 | #4d4d4d | 1.33 | 0 | Contact Microsoft |
| 68 | 600 | #000000 | 1.35 | -2.72 | We couldn’t load that page |
| 14 | 600 | #000000 | 1.15 | 0 | Feedback |
| 14 | 400 | #444444 | 1.43 | 0 | Android |

## Colour & depth
- Page bg #ffffff; max background chroma **0**
- Chromatic area **0%** → accent is scarce
- Neutrals tinted 1/15 → neutrals are near-pure grey (default-ish)
- Depth: 13 bordered / 2 shadowed → **border-led, shadows reserved**
- Radius scale: 2, 4, 8, 20, 6, 22 · gradients: 0

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #ffffff | 0 | 0 | 100 | 0 | 34.9 |
| #f5f5f5 | 0 | 0 | 96.1 | 0 | 11.7 |
| #f0f0f0 | 0 | 0 | 94.1 | 0 | 0.1 |
| #ebebeb | 0 | 0 | 92.2 | 0 | 0.1 |
| #000000 | 0 | 0 | 0 | 0 | 0.1 |
| #b4d6fa | 211 | 87.5 | 84.3 | 27.5 | 0 |
| #0c0c0c | 0 | 0 | 4.7 | 0 | 0 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #000000 | 0 | 0 | 0 | 41.3 |
| #616161 | 0 | 38 | 0 | 20.9 |
| #1b1a19 | 3.8 | 10.2 | 0.8 | 16.2 |
| #242424 | 0 | 14.1 | 0 | 8.2 |
| #4d4d4d | 0 | 30.2 | 0 | 5.6 |
| #444444 | 0 | 26.7 | 0 | 2.4 |

## Composition
- Main region **1440px**; prose cap — (no prose); horizontal bleed: false
- Alignment: 33 distinct left edges, **15** cover 80% of content
- Grid primitives: `2-col: px px` ×2
- Density: 159 visible elements, **124/screenful**
