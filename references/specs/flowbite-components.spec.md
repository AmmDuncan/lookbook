# Spec card — flowbite-components

**Source:** https://flowbite.com/docs/components/buttons/  
**Captured:** 2026-07-29 · 1440×11451

## Spacing
- Base unit **4px**, 91.1% of values on scale
- 18 distinct values; steps used: 8, 12, 16, 24, 32, 10, 4, 2, 6, 20, 48, 96
- **Proximity 7×** (median per-group ratio, 24 groups — 17 nested, 7 within-container)
  - typical inside-group gap 7.5px · typical between-group gap 18px *(independent medians — don't divide these)*
- → space encodes grouping strongly *(confidence: high)*

## Type
- Families: ui-monospace, Inter, -apple-system
- Body **14px**; 9 sizes: 8, 12, 13, 14, 16, 18, 20, 24, 30
- Weights: 400, 500, 600 · **29 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **ink** (spread — size 0, weight 0, ink 0.02)
- Prose measure ≈ **249 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 14 | 400 | #79b8ff | 1.43 | 0 | button |
| 14 | 400 | #b392f0 | 1.43 | 0 | type |
| 16 | 400 | #4a5565 | 1.5 | 0 | The button component is probably the most widely |
| 14 | 400 | #e1e4e8 | 1.43 | 0 | >Default</ |
| 12 | 500 | #4a5565 | 1.67 | 0 | 9.3k |
| 14 | 500 | #4a5565 | 1.43 | 0 | Introduction |
| 14 | 400 | #f97583 | 1.43 | 0 |  |
| 14 | 400 | #4a5565 | 1.43 | 0 | Search |
| 24 | 500 | #101828 | 1.33 | 0 | Default button |
| 14 | 500 | #101828 | 1.43 | 0 | We have launched the new Flowbite Design System  |

## Colour & depth
- Page bg #ffffff; max background chroma **3.9**
- Chromatic area **0.1%** → accent is scarce
- Neutrals tinted 4/8 → neutrals are near-pure grey (default-ish)
- Depth: 265 bordered / 13 shadowed → **border-led, shadows reserved**
- Radius scale: 12, 33554400, 8, 6, 3, 16 · gradients: 1

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #24292e | 210 | 12.2 | 16.1 | 3.9 | 30.7 |
| #ffffff | 0 | 0 | 100 | 0 | 27.4 |
| #f9fafb | 210 | 20 | 98 | 0.8 | 12.5 |
| #f3f4f6 | 220 | 14.3 | 95.9 | 1.2 | 0.2 |
| #eff6ff | 214 | 100 | 96.9 | 6.3 | 0.1 |
| #1447e6 | 225 | 84 | 49 | 82.4 | 0.1 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #79b8ff | 100 | 73.7 | 52.5 | 80.5 |
| #4a5565 | 15.4 | 34.3 | 10.6 | 8.3 |
| #b392f0 | 75.8 | 75.7 | 36.9 | 6.3 |
| #e1e4e8 | 13.2 | 89.6 | 2.7 | 2.7 |
| #f97583 | 91.7 | 71.8 | 51.8 | 1.1 |
| #101828 | 42.9 | 11 | 9.4 | 0.9 |

## Composition
- Main region **1440px**; prose cap 48002px; horizontal bleed: false
- Alignment: 806 distinct left edges, **209** cover 80% of content
- Grid primitives: `3-col: px px px` ×17 · `2-col: px px` ×17 · `6-col: px px px px px px` ×1
- Density: 5080 visible elements, **399/screenful**
