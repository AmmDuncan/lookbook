# Spec card — linktree-modal

**Source:** reproductions/linktree-modal.html  
**Captured:** 2026-07-29 · 1440×900

## Spacing
- Base unit **2px**, 100% of values on scale
- 10 distinct values; steps used: 14, 8, 10, 20, 24, 28
- **Proximity 2.35×** (median per-group ratio, 4 groups — 1 nested, 3 within-container)
  - typical inside-group gap 9px · typical between-group gap 21px *(independent medians — don't divide these)*
- → space encodes grouping strongly *(confidence: medium)*

## Type
- Families: Inter
- Body **14px**; 5 sizes: 12, 13.5, 14, 15, 16
- Weights: 400, 600 · **7 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **mixed (ink+weight)** (spread — size 0.15, weight 0.33, ink 0.38)

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 14 | 400 | #1d1f24 | — | 0 | Single choice |
| 13.5 | 600 | #1d1f24 | — | 0 | Field Type |
| 13.5 | 600 | #8129d9 | — | 0 | Add another option |
| 14 | 600 | #6c7079 | — | 0 | Add field |
| 16 | 600 | #1d1f24 | — | 0 | Add field |
| 12 | 400 | #a2a7b0 | — | 0 | 12/200 |
| 15 | 600 | #ffffff | — | 0 | Save |

## Colour & depth
- Page bg transparent (inherits canvas); max background chroma **3.5**
- Chromatic area **0%** → accent is scarce
- Neutrals tinted 7/13 → neutrals are near-pure grey (default-ish)
- Depth: 9 bordered / 3 shadowed → **shadow-led**
- Radius scale: 7, 11, 12, 5, 28, 22 · gradients: 1

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #f4f4f6 | 240 | 10 | 96.1 | 0.8 | 79 |
| #14121b | 253 | 20 | 8.8 | 3.5 | 79 |
| #ffffff | 0 | 0 | 100 | 0 | 36.2 |
| #1a1a1f | 240 | 8.8 | 11.2 | 2 | 14.6 |
| #fbfbfc | 240 | 14.3 | 98.6 | 0.4 | 12.3 |
| #f3f3f5 | 240 | 9.1 | 95.7 | 0.8 | 5.5 |
| #f0f0f3 | 240 | 11.1 | 94.7 | 1.2 | 2.1 |
| #f2f2f4 | 240 | 8.3 | 95.3 | 0.8 | 0.2 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #1d1f24 | 10.8 | 12.7 | 2.7 | 63.4 |
| #8129d9 | 69.8 | 50.6 | 69 | 17.8 |
| #6c7079 | 5.7 | 44.9 | 5.1 | 8.9 |
| #a2a7b0 | 8.1 | 66.3 | 5.5 | 5.9 |
| #ffffff | 0 | 100 | 0 | 4 |

## Composition
- Main region **1280px**; prose cap — (no prose); horizontal bleed: false
- Alignment: 12 distinct left edges, **6** cover 80% of content
- Grid primitives: `3-col: px px px` ×1
- Density: 73 visible elements, **73/screenful**
