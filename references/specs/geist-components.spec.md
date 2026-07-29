# Spec card — geist-components

**Source:** https://vercel.com/geist/button  
**Captured:** 2026-07-29 · 1440×4333

## Spacing
- Base unit **2px**, 100% of values on scale
- 15 distinct values; steps used: 6, 2, 12, 4, 10, 16, 48, 8, 24, 14, 1, 28
- **Proximity 6.65×** (median per-group ratio, 21 groups — 14 nested, 7 within-container)
  - typical inside-group gap 2px · typical between-group gap 22px *(independent medians — don't divide these)*
- → space encodes grouping strongly *(confidence: high)*

## Type
- Families: GeistSans, Geist, Geist Mono
- Body **16px**; 8 sizes: 12, 13, 13.7, 14, 16, 20, 24, 40
- Weights: 400, 500, 600 · **22 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **mixed (size+ink)** (spread — size 0.22, weight 0.17, ink 0.21)
- Prose measure ≈ **104 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 16 | 400 | #4d4d4d | 1.5 | 0 | The default size is medium. |
| 14 | 400 | #4d4d4d | 1.43 | 0 | Show code |
| 24 | 600 | #171717 | 1.33 | -0.96 | Sizes |
| 20 | 400 | #4d4d4d | 1.5 | 0 | Trigger an action or event, such as submitting a |
| 14 | 500 | #8f8f8f | 1.5 | 0 | Loading... |
| 14 | 500 | #171717 | 1.5 | 0 | Upload |
| 14 | 500 | #ffffff | 1.5 | 0 | Upload |
| 16 | 500 | #171717 | 1.5 | 0 | Upload |
| 16 | 400 | #171717 | 1.5 | 0 | Select a display theme: |
| 16 | 500 | #8f8f8f | 1.5 | 0 | Loading... |

## Colour & depth
- Page bg #ffffff; max background chroma **0**
- Chromatic area **0.3%** → accent is scarce
- Neutrals tinted 0/12 → neutrals are near-pure grey (default-ish)
- Depth: 78 bordered / 12 shadowed → **border-led, shadows reserved**
- Radius scale: 6, 33554400, 8, 50, 4, 30 · gradients: 1

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #fafafa | 0 | 0 | 98 | 0 | 113.6 |
| #ffffff | 0 | 0 | 100 | 0 | 22.8 |
| #f2f2f2 | 0 | 0 | 94.9 | 0 | 1.9 |
| #171717 | 0 | 0 | 9 | 0 | 0.7 |
| #000000 | 0 | 0 | 0 | 0 | 0.1 |
| #da2f35 | 358 | 69.8 | 52 | 67.1 | 0.1 |
| #ff990a | 35 | 100 | 52 | 96.1 | 0.1 |
| #0072f5 | 212 | 100 | 48 | 96.1 | 0.1 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #4d4d4d | 0 | 30.2 | 0 | 82.7 |
| #171717 | 0 | 9 | 0 | 9.7 |
| #8f8f8f | 0 | 56.1 | 0 | 3.9 |
| #ffffff | 0 | 100 | 0 | 2.5 |
| #f5f5f5 | 0 | 96.1 | 0 | 0.6 |
| #0a0a0a | 0 | 3.9 | 0 | 0.6 |

## Composition
- Main region **1440px**; prose cap 830px; horizontal bleed: false
- Alignment: 112 distinct left edges, **20** cover 80% of content
- Grid primitives: `2-col: px px` ×1
- Density: 792 visible elements, **165/screenful**
