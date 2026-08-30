# Spec card — c-summary-history

**Source:** c-summary-history.html  
**Captured:** 2026-08-27 · 1440×900

## Spacing
- Base unit **3px**, 54.2% of values on scale
- 18 distinct values; steps used: 9, 20, 2, 18, 8, 6, 24, 7, 11, 5, 15
- **Proximity 3.23×** (median per-group ratio, 8 groups — 6 nested, 2 within-container)
  - typical inside-group gap 7.5px · typical between-group gap 16px *(independent medians — don't divide these)*
- → space encodes grouping strongly *(confidence: high)*

## Type
- Families: Inter, Roboto Mono, Arial
- Body **12px**; 8 sizes: 11, 12, 13, 13.3, 14, 15, 21, 22
- Weights: 400, 500, 600 · **12 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **weight** (spread — size 0.22, weight 0.33, ink 0.23)
- Prose measure ≈ **38 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 12 | 400 | #525252 | — | 0 | services on |
| 14 | 500 | #171717 | — | 0 | Nana Kwame Kuhney |
| 14 | 400 | #525252 | — | 0 | Website: |
| 11 | 600 | #525252 | — | 0.44 | Ultra |
| 13 | 400 | #525252 | — | 0 | AFRIGYEI |
| 13.3 | 500 | #171717 | — | 0 | Edit branch |
| 22 | 600 | #171717 | 1.15 | -0.22 | Afrigyei, Awoshie |
| 15 | 600 | #171717 | — | 0 | Change history |
| 14 | 500 | #028043 | — | 0 | ‹ Back |
| 13 | 500 | #028043 | — | 0 | Manage |

## Colour & depth
- Page bg #eef0f3; max background chroma **0**
- Chromatic area **0%** → accent is scarce
- Neutrals tinted 0/3 → neutrals are near-pure grey (default-ish)
- Depth: 16 bordered / 0 shadowed → **borders only, zero resting shadows**
- Radius scale: 10, 999, 8 · gradients: 0

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #ffffff | 0 | 0 | 100 | 0 | 47.6 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #525252 | 0 | 32.2 | 0 | 62.9 |
| #171717 | 0 | 9 | 0 | 35.2 |
| #028043 | 96.9 | 25.5 | 49.4 | 1.9 |

## Composition
- Main region **1440px**; prose cap — (no prose); horizontal bleed: false
- Alignment: 16 distinct left edges, **6** cover 80% of content
- Grid primitives: `2-col: px px` ×1
- Density: 78 visible elements, **78/screenful**
