# Spec card — shoelace-components

**Source:** https://shoelace.style/components/button  
**Captured:** 2026-07-29 · 1440×10602

## Spacing
- Base unit **8px**, 94.9% of values on scale
- 16 distinct values; steps used: 16, 2, 4, 24, 8, 48, 10, 32, 52, 3, 28, 20
- **Proximity 3.75×** (median per-group ratio, 14 groups — 8 nested, 6 within-container)
  - typical inside-group gap 6px · typical between-group gap 24px *(independent medians — don't divide these)*
- → space encodes grouping strongly *(confidence: high)*

## Type
- Families: -apple-system, SFMono-Regular
- Body **16px**; 11 sizes: 11.2, 12, 12.2, 14, 14.6, 16, 20, 24, 26, 30, 40
- Weights: 400, 500, 700 · **26 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **size** (spread — size 0.13, weight 0, ink 0)
- Prose measure ≈ **65 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 16 | 400 | #18181b | 1.8 | 0 | Web Awesome has an even bigger library of free . |
| 14.6 | 400 | #18181b | 1.8 | 0 | variant |
| 14 | 400 | #3f3f46 | 1.33 | 0 | Variants |
| 16 | 500 | #18181b | 1.8 | 0 | Getting Started |
| 26 | 500 | #18181b | 1.8 | 0 | Variants |
| 11.2 | 500 | #52525b | 1.8 | 0 | Source |
| 16 | 400 | #0369a1 | 1.33 | 0 | Button |
| 30 | 500 | #18181b | 1.8 | 0 | Examples |
| 16 | 400 | #075985 | 1.8 | 0 | When a is set, the link will receive for . |
| 20 | 400 | #18181b | 1.6 | 0 | Buttons represent actions that are available to  |

## Colour & depth
- Page bg #ffffff; max background chroma **0**
- Chromatic area **0.4%** → accent is scarce
- Neutrals tinted 5/10 → neutrals are near-pure grey (default-ish)
- Depth: 105 bordered / 2 shadowed → **border-led, shadows reserved**
- Radius scale: 4, 3, 9999, 8 · gradients: 1

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #ffffff | 0 | 0 | 100 | 0 | 12.8 |
| #f9f9f9 | 0 | 0 | 97.6 | 0 | 10.7 |
| #e0f2fe | 204 | 93.8 | 93.7 | 11.8 | 0.4 |
| #27272a | 240 | 3.7 | 15.9 | 1.2 | 0 |
| #f4f4f5 | 240 | 4.8 | 95.9 | 0.4 | 0 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #18181b | 5.9 | 10 | 1.2 | 91.3 |
| #3f3f46 | 5.3 | 26.1 | 2.7 | 2.4 |
| #52525b | 5.2 | 33.9 | 3.5 | 2 |
| #0369a1 | 96.3 | 32.2 | 62 | 1.3 |
| #075985 | 90 | 27.5 | 49.4 | 1 |
| #0284c7 | 98 | 39.4 | 77.3 | 0.6 |

## Composition
- Main region **1120px**; prose cap 760px; horizontal bleed: false
- Alignment: 111 distinct left edges, **22** cover 80% of content
- Grid primitives: `2-col: px px` ×1
- Density: 1029 visible elements, **87/screenful**
