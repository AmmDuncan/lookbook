# Spec card — direction-b

**Source:** direction-b.html  
**Captured:** 2026-08-23 · 1440×900

## Spacing
- Base unit **2px**, 94% of values on scale
- 17 distinct values; steps used: 12, 20, 10, 14, 8, 4, 6, 11, 18, 16, 2, 40
- **Proximity 5×** (median per-group ratio, 8 groups — 4 nested, 4 within-container)
  - typical inside-group gap 4px · typical between-group gap 17.5px *(independent medians — don't divide these)*
- → space encodes grouping strongly *(confidence: high)*

## Type
- Families: Inter
- Body **14px**; 8 sizes: 12, 13, 14, 15, 16, 22, 26, 32
- Weights: 400, 500, 600, 700 · **18 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **ink** (spread — size 0.19, weight 0.33, ink 0.9)
- Prose measure ≈ **68 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 14 | 400 | #696969 | 1.5 | 0 | 23 August 2026 |
| 15 | 400 | #ffffff | 1.5 | 0 | Services stay locked until your registration det |
| 16 | 400 | #ffffff | 1.5 | 0 | Dashboard |
| 16 | 600 | #071a2b | 1.5 | 0 | Your vehicles |
| 13 | 400 | #ffffff | 1.5 | 0 | ammduncan+11... |
| 14 | 500 | #05663e | 1.5 | 0 | View fleet |
| 16 | 500 | #05663e | 1.5 | 0 | Continue setup |
| 16 | 400 | #696969 | 1.5 | 0 | Here is where your business stands. |
| 22 | 600 | #ffffff | 1.5 | 0 | Complete your business profile |
| 15 | 400 | #696969 | 1.5 | 0 | Nissan Rogue |

## Colour & depth
- Page bg #f8f9fb; max background chroma **0**
- Chromatic area **0.4%** → accent is scarce
- Neutrals tinted 1/4 → neutrals are near-pure grey (default-ish)
- Depth: 11 bordered / 0 shadowed → **borders only, zero resting shadows**
- Radius scale: 10, 12, 50, 8, 4 · gradients: 2

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #ffffff | 0 | 0 | 100 | 0 | 29.9 |
| #eef2f5 | 206 | 25.9 | 94.7 | 2.7 | 0.3 |
| #071a2b | 208 | 72 | 9.8 | 14.1 | 0.3 |
| #bdfabe | 121 | 85.9 | 86.1 | 23.9 | 0.1 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #ffffff | 0 | 100 | 0 | 40.8 |
| #696969 | 0 | 41.2 | 0 | 36.6 |
| #05663e | 90.7 | 21 | 38 | 11.3 |
| #071a2b | 72 | 9.8 | 14.1 | 11.3 |
| #8f9fab | 14.3 | 61.6 | 11 | 0.1 |

## Composition
- Main region **1440px**; prose cap — (no prose); horizontal bleed: false
- Alignment: 19 distinct left edges, **8** cover 80% of content
- Grid primitives: `2-col: px px` ×1 · `4-col: px px px px` ×1
- Density: 86 visible elements, **86/screenful**
