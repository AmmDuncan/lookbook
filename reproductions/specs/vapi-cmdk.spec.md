# Spec card — vapi-cmdk

**Source:** reproductions/vapi-cmdk.html  
**Captured:** 2026-07-29 · 1440×900

## Spacing
- Base unit **2px**, 100% of values on scale
- 9 distinct values; steps used: 12, 10, 8, 4, 6, 16, 20
- **Proximity 4.25×** (median per-group ratio, 5 groups — 2 nested, 3 within-container)
  - typical inside-group gap 12px · typical between-group gap 68px *(independent medians — don't divide these)*
- → space encodes grouping strongly *(confidence: medium)*

## Type
- Families: Geist
- Body **14px**; 3 sizes: 11, 12, 14
- Weights: 400, 500 · **4 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **ink** (spread — size 0.22, weight 0, ink 0.44)

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 14 | 400 | #e6e7ea | — | 0 | Switch Organization |
| 14 | 400 | #71757e | — | 0 | — Observe |
| 12 | 400 | #71757e | — | 0 | to navigate |
| 11 | 500 | #565a62 | — | 0.44 | Actions |

## Colour & depth
- Page bg #0b0c0e; max background chroma **2**
- Chromatic area **0%** → accent is scarce
- Neutrals tinted 6/7 → neutrals are tinted (designed)
- Depth: 12 bordered / 1 shadowed → **border-led, shadows reserved**
- Radius scale: 5, 8, 4, 3, 14 · gradients: 1

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #050709 | 210 | 28.6 | 2.7 | 1.6 | 88.9 |
| #17181c | 228 | 9.8 | 10 | 2 | 21.7 |
| #0e0f12 | 225 | 12.5 | 6.3 | 1.6 | 7.7 |
| #ffffff | 0 | 0 | 100 | 0 | 1.8 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #71757e | 5.4 | 46.9 | 5.1 | 51.9 |
| #e6e7ea | 8.7 | 91 | 1.6 | 40.5 |
| #565a62 | 6.5 | 36.1 | 4.7 | 7.6 |

## Composition
- Main region **1440px**; prose cap — (no prose); horizontal bleed: false
- Alignment: 21 distinct left edges, **9** cover 80% of content
- Grid primitives: `2-col: px px` ×1
- Density: 125 visible elements, **125/screenful**
