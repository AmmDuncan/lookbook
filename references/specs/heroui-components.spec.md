# Spec card — heroui-components

**Source:** https://www.heroui.com/docs/components/button  
**Captured:** 2026-07-29 · 1440×11396

## Spacing
- Base unit **2px**, 99.7% of values on scale
- 16 distinct values; steps used: 8, 3, 10, 16, 4, 6, 12, 2, 40, 32, 24, 20
- **Proximity 2.78×** (median per-group ratio, 24 groups — 11 nested, 13 within-container)
  - typical inside-group gap 7px · typical between-group gap 17px *(independent medians — don't divide these)*
- → space encodes grouping strongly *(confidence: high)*

## Type
- Families: ui-monospace, Inter
- Body **16px**; 8 sizes: 10, 12, 13, 14, 16, 20, 24, 28
- Weights: 400, 500, 600 · **38 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **ink** (spread — size 0.3, weight 0.17, ink 0.41)
- Prose measure ≈ **102 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 16 | 400 | #18181b | 1.75 | 0 | Your browser does not support the video tag. |
| 13 | 400 | #18181b | 2.15 | 0 | @layer components |
| 14 | 400 | #737373 | 1.43 | 0 | All Components |
| 13 | 400 | #032f62 | 1.43 | 0 | '@heroui/react' |
| 14 | 400 | #18181b | 1.71 | 0 | Visual style variant |
| 13 | 400 | #24292e | 1.43 | 0 | { Button } |
| 13 | 400 | #d73a49 | 1.43 | 0 | import |
| 13 | 400 | #737373 | 1.43 | 0 | Variants |
| 20 | 600 | #18181b | 1.6 | 0 | Usage |
| 14 | 500 | #18181b | 1.43 | 0 | Overview |

## Colour & depth
- Page bg #f5f5f5; max background chroma **0.4**
- Chromatic area **0.5%** → accent is scarce
- Neutrals tinted 4/13 → neutrals are near-pure grey (default-ish)
- Depth: 98 bordered / 20 shadowed → **border-led, shadows reserved**
- Radius scale: 12, 24, 5, 8, 33554400, 16 · gradients: 0

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #ffffff | 0 | 0 | 100 | 0 | 1.1 |
| #ebebec | 240 | 2.6 | 92.4 | 0.4 | 1.1 |
| #f5f5f5 | 0 | 0 | 96.1 | 0 | 0.9 |
| #0485f7 | 208 | 96.8 | 49.2 | 95.3 | 0.4 |
| #efeff0 | 240 | 3.2 | 93.9 | 0.4 | 0.3 |
| #ff383c | 359 | 100 | 61 | 78 | 0.1 |
| #000000 | 0 | 0 | 0 | 0 | 0 |
| #ff363c | 358 | 100 | 60.6 | 78.8 | 0 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #18181b | 5.9 | 10 | 1.2 | 48.5 |
| #737373 | 0 | 45.1 | 0 | 18.3 |
| #032f62 | 94.1 | 19.8 | 37.3 | 8.7 |
| #24292e | 12.2 | 16.1 | 3.9 | 7.1 |
| #d73a49 | 66.2 | 53.5 | 61.6 | 7 |
| #71717a | 3.8 | 46.1 | 3.5 | 2.7 |

## Composition
- Main region **1440px**; prose cap 816px; horizontal bleed: false
- Alignment: 159 distinct left edges, **31** cover 80% of content
- Grid primitives: `5-col: px px px px px` ×1 · `3-col: px px px` ×1 · `4-col: px px px px` ×1 · `2-col: px px` ×1
- Density: 1665 visible elements, **131/screenful**
