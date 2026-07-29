# Spec card — primer-components

**Source:** https://primer.style/components  
**Captured:** 2026-07-29 · 1440×11323

## Spacing
- Base unit **8px**, 85.1% of values on scale
- 12 distinct values; steps used: 8, 32, 12, 28, 16, 6, 24, 7
- **Proximity 2.5×** (median per-group ratio, 53 groups — 0 nested, 53 within-container)
  - typical inside-group gap 12px · typical between-group gap 30px *(independent medians — don't divide these)*
- → space encodes grouping strongly *(confidence: high)*

## Type
- Families: Mona Sans, Mona Sans VF
- Body **16px**; 6 sizes: 14, 16, 18, 22, 24, 40
- Weights: 400, 460, 480, 500, 600, 700 · **13 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **ink** (spread — size 0.17, weight 0.13, ink 0.23)
- Prose measure ≈ **29 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 16 | 400 | #58635b | 1.5 | 0.24 | A collection of horizontally aligned IconButtons |
| 16 | 400 | #1f2328 | 1.25 | 0 | Component status |
| 16 | 500 | #005dd5 | 1.5 | 0.24 | Learn more |
| 22 | 480 | #000000 | 1.4 | 0 | ActionBar |
| 18 | 400 | #58635b | 1.5 | 0.18 | Primer Components are reusable, interactive buil |
| 14 | 600 | #1f2328 | 1.5 | 0 | Search Product UI |
| 16 | 400 | #0969da | 1.5 | 0 | Skip to main content |
| 16 | 400 | #59636e | 1.5 | 0 | Brand UI |
| 24 | 700 | #1f2328 | 1.5 | 0 | Product UI navigation |
| 16 | 600 | #1f2328 | 1.5 | 0 | Primer |

## Colour & depth
- Page bg #ffffff; max background chroma **0**
- Chromatic area **0%** → accent is scarce
- Neutrals tinted 5/7 → neutrals are tinted (designed)
- Depth: 72 bordered / 3 shadowed → **border-led, shadows reserved**
- Radius scale: 6, 8 · gradients: 0

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #ffffff | 0 | 0 | 100 | 0 | 57.3 |
| #f6f8fa | 210 | 28.6 | 97.3 | 1.6 | 0 |
| #d1d9e0 | 208 | 19.5 | 84.9 | 5.9 | 0 |
| #0377ff | 212 | 100 | 50.6 | 98.8 | 0 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #58635b | 5.9 | 36.7 | 4.3 | 67.8 |
| #1f2328 | 12.7 | 13.9 | 3.5 | 18.1 |
| #000000 | 0 | 0 | 0 | 6.5 |
| #005dd5 | 100 | 41.8 | 83.5 | 6.5 |
| #0969da | 92.1 | 44.5 | 82 | 0.5 |
| #59636e | 10.6 | 39 | 8.2 | 0.4 |

## Composition
- Main region **1440px**; prose cap 948px; horizontal bleed: false
- Alignment: 23 distinct left edges, **5** cover 80% of content
- Grid primitives: `3-col: px px px` ×140 · `4-col: px px px px` ×138 · `2-col: px px` ×62
- Density: 1627 visible elements, **129/screenful**
