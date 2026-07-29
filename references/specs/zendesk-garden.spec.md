# Spec card — zendesk-garden

**Source:** https://garden.zendesk.com/components/overview  
**Captured:** 2026-07-29 · 1440×1077

## Spacing
- Base unit **2px**, 100% of values on scale
- 11 distinct values; steps used: 10, 20, 8, 6, 12
- **Proximity 1.5×** (median per-group ratio, 3 groups — 2 nested, 1 within-container)
  - typical inside-group gap 8px · typical between-group gap 12px *(independent medians — don't divide these)*
- → space encodes grouping *(confidence: low — too few groups to generalise)*

## Type
- Families: system-ui
- Body **22px**; 4 sizes: 14, 16, 22, 48
- Weights: 400, 700 · **5 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **ink** (spread — size 0.65, weight 0, ink 0.81)
- Prose measure ≈ **48 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 22 | 400 | #5c6970 | 1.27 | 0 | You won’t find anything growing on this page. He |
| 14 | 400 | #ffffff | 1.43 | 0 | Garden is the design system by Zendesk. |
| 14 | 400 | #293239 | 1.43 | 0 | Design |
| 48 | 700 | #293239 | 1.08 | 0 | Nothing to see here |
| 16 | 400 | #5c6970 | 1.5 | 0 | 404 page not found |

## Colour & depth
- Page bg transparent (inherits canvas); max background chroma **22.7**
- Chromatic area **14.8%** → accent is present
- Neutrals tinted 3/5 → neutrals are tinted (designed)
- Depth: 2 bordered / 1 shadowed → **shadow-led**
- Radius scale: 4, 100 · gradients: 0

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #063940 | 187 | 82.9 | 13.7 | 22.7 | 14.8 |
| #ffffff | 0 | 0 | 100 | 0 | 8 |
| #daeded | 180 | 34.5 | 89.2 | 7.5 | 4.7 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #5c6970 | 9.8 | 40 | 7.8 | 49.6 |
| #ffffff | 0 | 100 | 0 | 31.4 |
| #293239 | 16.3 | 19.2 | 6.3 | 19 |

## Composition
- Main region **1440px**; prose cap — (no prose); horizontal bleed: false
- Alignment: 20 distinct left edges, **12** cover 80% of content
- Grid primitives: none
- Density: 67 visible elements, **56/screenful**
