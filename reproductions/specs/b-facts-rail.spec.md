# Spec card — b-facts-rail

**Source:** b-facts-rail.html  
**Captured:** 2026-08-27 · 1440×2068

## Spacing
- Base unit **2px**, 94.4% of values on scale
- 21 distinct values; steps used: 10, 4, 26, 9, 8, 24, 20, 18, 7, 6, 15, 13
- **Proximity 2.4×** (median per-group ratio, 7 groups — 5 nested, 2 within-container)
  - typical inside-group gap 10px · typical between-group gap 18px *(independent medians — don't divide these)*
- → space encodes grouping strongly *(confidence: medium)*

## Type
- Families: Inter, Roboto Mono, Arial
- Body **14px**; 4 sizes: 12, 13, 14, 26
- Weights: 400, 500, 600 · **10 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **mixed (ink+size)** (spread — size 0.22, weight 0, ink 0.23)
- Prose measure ≈ **36 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 14 | 400 | #171717 | — | 0 | Amendment Of Records |
| 12 | 400 | #525252 | — | 0 | 24 on |
| 14 | 500 | #171717 | — | 0 | Edit branch |
| 14 | 600 | #171717 | — | 0 | All 109 services are offered here |
| 26 | 600 | #171717 | 1.15 | -0.26 | Afrigyei, Awoshie |
| 14 | 500 | #ffffff | — | 0 | Manage services |
| 12 | 600 | #525252 | — | 0.48 | Branch details |
| 13 | 400 | #525252 | — | 0 | AFRIGYEI |
| 14 | 500 | #525252 | — | 0 | History |
| 14 | 500 | #016d39 | — | 0 | ‹ Back |

## Colour & depth
- Page bg #eef0f3; max background chroma **10.6**
- Chromatic area **9.9%** → accent is scarce
- Neutrals tinted 0/4 → neutrals are near-pure grey (default-ish)
- Depth: 15 bordered / 0 shadowed → **borders only, zero resting shadows**
- Radius scale: 3, 8, 10, 6 · gradients: 0

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #ffffff | 0 | 0 | 100 | 0 | 61.6 |
| #0f172a | 222 | 47.4 | 11.2 | 10.6 | 9.7 |
| #028043 | 151 | 96.9 | 25.5 | 49.4 | 0.2 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #171717 | 0 | 9 | 0 | 87.5 |
| #525252 | 0 | 32.2 | 0 | 12 |
| #ffffff | 0 | 100 | 0 | 0.4 |
| #016d39 | 98.2 | 21.6 | 42.4 | 0.1 |

## Composition
- Main region **1300px**; prose cap — (no prose); horizontal bleed: false
- Alignment: 26 distinct left edges, **9** cover 80% of content
- Grid primitives: `2-col: px px` ×114
- Density: 388 visible elements, **169/screenful**
