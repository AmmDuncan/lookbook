# Spec card — mantine-demo

**Source:** https://mantine.dev/core/button/  
**Captured:** 2026-07-29 · 1440×16595

## Spacing
- Base unit **2px**, 75.4% of values on scale
- 24 distinct values; steps used: 6, 12, 5, 16, 2, 10, 1, 7, 18, 15, 9, 4
- **Proximity 4.14×** (median per-group ratio, 49 groups — 21 nested, 28 within-container)
  - typical inside-group gap 7px · typical between-group gap 29px *(independent medians — don't divide these)*
- → space encodes grouping strongly *(confidence: high)*

## Type
- Families: Menlo, -apple-system, Outfit
- Body **15px**; 9 sizes: 11, 12, 13, 14, 15, 16, 18, 26, 44
- Weights: 400, 500, 600, 700 · **42 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **ink** (spread — size 0.21, weight 0.33, ink 0.47)
- Prose measure ≈ **110 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 15 | 400 | #000000 | 1.65 | 0 | If the prop is set, the will take 100% of the pa |
| 13 | 400 | #1f2328 | 1.7 | 0 | { Button } |
| 13 | 400 | #0550ae | 1.7 | 0 | variant |
| 13 | 400 | #0a3069 | 1.7 | 0 | '@mantine/core' |
| 14 | 400 | #495057 | 1.55 | 0 | Get started |
| 12 | 400 | #000000 | 1.55 | 0 | fullWidth |
| 13 | 400 | #cf222e | 1.7 | 0 | import |
| 13 | 400 | #116329 | 1.7 | 0 | Button |
| 13 | 400 | #6e7781 | 1.7 | 0 | * Hover over selectors to apply outline styles |
| 14 | 600 | #000000 | 1 | 0 | Mantine UI |

## Colour & depth
- Page bg #ffffff; max background chroma **60.8**
- Chromatic area **2%** → accent is scarce
- Neutrals tinted 6/10 → neutrals are tinted (designed)
- Depth: 173 bordered / 42 shadowed → **border-led, shadows reserved**
- Radius scale: 4, 8, 1000, 32, 7, 50 · gradients: 41

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #ffffff | 0 | 0 | 100 | 0 | 84.6 |
| #f8f9fa | 210 | 16.7 | 97.6 | 0.8 | 32.9 |
| #2b71c6 | 213 | 64.3 | 47.3 | 60.8 | 1.5 |
| #228be6 | 208 | 79.7 | 51.8 | 76.9 | 0.3 |
| #efefef | 0 | 0 | 93.7 | 0 | 0.1 |
| #e9ecef | 210 | 15.8 | 92.5 | 2.4 | 0.1 |
| #f1f3f5 | 210 | 16.7 | 95.3 | 1.6 | 0.1 |
| #e7f5ff | 205 | 100 | 95.3 | 9.4 | 0.1 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #000000 | 0 | 0 | 0 | 37.6 |
| #1f2328 | 12.7 | 13.9 | 3.5 | 14.2 |
| #495057 | 8.8 | 31.4 | 5.5 | 9 |
| #0550ae | 94.4 | 35.1 | 66.3 | 7.4 |
| #0a3069 | 82.6 | 22.5 | 37.3 | 7.3 |
| #cf222e | 71.8 | 47.3 | 67.8 | 5.6 |

## Composition
- Main region **1440px**; prose cap 822px; horizontal bleed: false
- Alignment: 230 distinct left edges, **38** cover 80% of content
- Grid primitives: none
- Density: 3401 visible elements, **184/screenful**
