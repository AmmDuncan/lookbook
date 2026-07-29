# Spec card — ontario-components

**Source:** https://designsystem.ontario.ca/components/  
**Captured:** 2026-07-29 · 1440×2023

## Spacing
- Base unit **8px**, 92% of values on scale
- 7 distinct values; steps used: 16, 24, 32
- **Proximity 1.92×** (median per-group ratio, 4 groups — 2 nested, 2 within-container)
  - typical inside-group gap 12.25px · typical between-group gap 31.5px *(independent medians — don't divide these)*
- → space encodes grouping *(confidence: medium)*

## Type
- Families: Open Sans, Raleway Modified
- Body **16px**; 5 sizes: 16, 22, 24, 33, 40
- Weights: 400, 700 · **6 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **mixed (size+ink)** (spread — size 1.04, weight 0.5, ink 0.9)

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 16 | 400 | #1a1a1a | 1.6 | 0 | Every element and style available in the design  |
| 22 | 400 | #ffffff | 1.6 | 0 | Design and coding standards for building Governm |
| 16 | 400 | #0066cc | 1.6 | 0 | View all components |
| 33 | 700 | #1a1a1a | 1.33 | 0.32 | Using the design system |
| 24 | 700 | #1a1a1a | 1.5 | 0.5 | Components |
| 40 | 700 | #ffffff | 1.2 | 0.64 | Ontario Design System |

## Colour & depth
- Page bg #ffffff; max background chroma **26.7**
- Chromatic area **23.6%** → accent is present
- Neutrals tinted 0/2 → neutrals are near-pure grey (default-ish)
- Depth: 0 bordered / 0 shadowed → **borders only, zero resting shadows**
- Radius scale: none · gradients: 0

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #367a76 | 176 | 38.6 | 34.5 | 26.7 | 23.6 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #1a1a1a | 0 | 10.2 | 0 | 55.2 |
| #ffffff | 0 | 100 | 0 | 31.3 |
| #0066cc | 100 | 40 | 80 | 13.5 |

## Composition
- Main region **1440px**; prose cap — (no prose); horizontal bleed: false
- Alignment: 7 distinct left edges, **4** cover 80% of content
- Grid primitives: none
- Density: 32 visible elements, **14/screenful**
