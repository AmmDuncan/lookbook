# Spec card — chakra-components

**Source:** https://chakra-ui.com/docs/components  
**Captured:** 2026-07-29 · 1440×958

## Spacing
- Base unit **4px**, 90.4% of values on scale
- 7 distinct values; steps used: 8, 4, 14, 12, 32
- **Proximity 0.8×** (median per-group ratio, 3 groups — 2 nested, 1 within-container)
  - typical inside-group gap 10px · typical between-group gap 8px *(independent medians — don't divide these)*
- → space encodes little grouping — flat rhythm *(confidence: low — too few groups to generalise)*

## Type
- Families: Wix Madefor Text, SFMono-Regular
- Body **14px**; 4 sizes: 11.2, 14, 16, 24
- Weights: 400, 500, 600 · **7 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **ink** (spread — size 0.19, weight 0.17, ink 0.96)

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 14 | 500 | #ffffff | 1.43 | 0 | Build faster with Premium Chakra UI Components � |
| 14 | 400 | #52525b | 1.5 | 0 | Showcase |
| 16 | 400 | #09090b | 1.5 | 0 | The page you are looking for does not exist. |
| 24 | 600 | #09090b | 1.33 | 0 | 404. Page not found |
| 14 | 500 | #09090b | 1.5 | 0 | Docs |
| 14 | 500 | #27272a | 1.43 | 0 | Sponsor |
| 11.2 | 500 | #27272a | 1.79 | 1.12 |  |

## Colour & depth
- Page bg transparent (inherits canvas); max background chroma **0.4**
- Chromatic area **0%** → accent is scarce
- Neutrals tinted 2/7 → neutrals are near-pure grey (default-ish)
- Depth: 12 bordered / 0 shadowed → **borders only, zero resting shadows**
- Radius scale: 4 · gradients: 1

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #ffffff | 0 | 0 | 100 | 0 | 10.9 |
| #f4f4f5 | 240 | 4.8 | 95.9 | 0.4 | 0.7 |
| #000000 | 0 | 0 | 0 | 0 | 0.2 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #09090b | 10 | 3.9 | 0.8 | 36.8 |
| #ffffff | 0 | 100 | 0 | 28.2 |
| #52525b | 5.2 | 33.9 | 3.5 | 27.8 |
| #27272a | 3.7 | 15.9 | 1.2 | 7.2 |

## Composition
- Main region **1440px**; prose cap — (no prose); horizontal bleed: false
- Alignment: 22 distinct left edges, **15** cover 80% of content
- Grid primitives: none
- Density: 62 visible elements, **58/screenful**
