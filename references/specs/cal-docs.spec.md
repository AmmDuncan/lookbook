# Spec card — cal-docs

**Source:** https://cal.com/docs/introduction  
**Captured:** 2026-07-29 · 1440×900

## Spacing
- Base unit **4px**, 90.9% of values on scale
- 11 distinct values; steps used: 8, 4, 48, 12
- **Proximity 2.29×** (median per-group ratio, 5 groups — 4 nested, 1 within-container)
  - typical inside-group gap 14px · typical between-group gap 24px *(independent medians — don't divide these)*
- → space encodes grouping strongly *(confidence: medium)*

## Type
- Families: Inter
- Body **16px**; 5 sizes: 12, 14, 16, 24, 48
- Weights: 400, 500, 600 · **10 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **ink** (spread — size 0, weight 0.17, ink 0.44)

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 16 | 400 | #000000 | 1.5 | 0 | Documentation Index |
| 16 | 400 | #3f3f3f | 1.75 | 0 | We couldn't find the page. Maybe you were lookin |
| 16 | 400 | #707071 | 1.5 | 0 | Skip to main content |
| 16 | 400 | #111827 | 1.5 | 0 | Calendar |
| 24 | 500 | #252626 | 1.33 | 0 | Page Not Found |
| 14 | 400 | #707071 | 1.71 | 0 | Search... |
| 14 | 500 | #ffffff | 1.43 | 0 | Dashboard |
| 14 | 500 | #505051 | 1.43 | 0 | Support |
| 48 | 600 | #111827 | 1 | 0 |  |
| 12 | 600 | #707071 | 1.33 | 0 |  |

## Colour & depth
- Page bg transparent (inherits canvas); max background chroma **0**
- Chromatic area **0.3%** → accent is scarce
- Neutrals tinted 0/7 → neutrals are near-pure grey (default-ish)
- Depth: 1 bordered / 1 shadowed → **shadow-led**
- Radius scale: 12 · gradients: 0

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #ffffff | 0 | 0 | 100 | 0 | 108.3 |
| #111827 | 221 | 39.3 | 11 | 8.6 | 0.3 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #000000 | 0 | 0 | 0 | 41.8 |
| #3f3f3f | 0 | 24.7 | 0 | 22.6 |
| #707071 | 0.4 | 44.1 | 0.4 | 15.2 |
| #111827 | 39.3 | 11 | 8.6 | 11.7 |
| #252626 | 1.3 | 14.7 | 0.4 | 4 |
| #ffffff | 0 | 100 | 0 | 2.6 |

## Composition
- Main region **1440px**; prose cap — (no prose); horizontal bleed: false
- Alignment: 17 distinct left edges, **8** cover 80% of content
- Grid primitives: none
- Density: 60 visible elements, **60/screenful**
