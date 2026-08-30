# Spec card — a-hero-tabs

**Source:** a-hero-tabs.html  
**Captured:** 2026-08-27 · 1440×900

## Spacing
- Base unit **3px**, 60.3% of values on scale
- 16 distinct values; steps used: 9, 18, 2, 20, 13, 6, 8, 7, 11, 1
- **Proximity 1.82×** (median per-group ratio, 6 groups — 5 nested, 1 within-container)
  - typical inside-group gap 10px · typical between-group gap 18px *(independent medians — don't divide these)*
- → space encodes grouping *(confidence: medium)*

## Type
- Families: Inter, Roboto Mono, Arial
- Body **14px**; 7 sizes: 11, 12, 13, 13.3, 14, 21, 26
- Weights: 400, 500, 600 · **9 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **mixed (size+weight)** (spread — size 0.35, weight 0.33, ink 0.23)
- Prose measure ≈ **92 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 14 | 500 | #171717 | — | 0 | Overview |
| 12 | 400 | #525252 | — | 0 | Code |
| 11 | 600 | #525252 | — | 0.44 | Ultra |
| 14 | 500 | #525252 | — | 0 | Services offered |
| 26 | 600 | #171717 | 1.15 | -0.26 | Afrigyei, Awoshie |
| 13.3 | 500 | #171717 | — | 0 | Edit branch |
| 21 | 600 | #171717 | 1.1 | 0 | Active |
| 13 | 400 | #525252 | — | 0 | AFRIGYEI |
| 14 | 500 | #028043 | — | 0 | ‹ Back |

## Colour & depth
- Page bg #eef0f3; max background chroma **0**
- Chromatic area **0%** → accent is scarce
- Neutrals tinted 0/3 → neutrals are near-pure grey (default-ish)
- Depth: 14 bordered / 0 shadowed → **borders only, zero resting shadows**
- Radius scale: 999, 10, 8 · gradients: 0

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #ffffff | 0 | 0 | 100 | 0 | 25.9 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #171717 | 0 | 9 | 0 | 49.4 |
| #525252 | 0 | 32.2 | 0 | 48.8 |
| #028043 | 96.9 | 25.5 | 49.4 | 1.8 |

## Composition
- Main region **1440px**; prose cap — (no prose); horizontal bleed: false
- Alignment: 12 distinct left edges, **5** cover 80% of content
- Grid primitives: `2-col: px px` ×1
- Density: 50 visible elements, **50/screenful**
