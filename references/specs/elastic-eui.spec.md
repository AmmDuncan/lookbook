# Spec card — elastic-eui

**Source:** https://eui.elastic.co/docs/components/  
**Captured:** 2026-07-29 · 1440×973

## Spacing
- Base unit **2px**, 93.6% of values on scale
- 16 distinct values; steps used: 8, 4, 14, 6, 12, 7, 24, 16, 32
- **Proximity 3.69×** (median per-group ratio, 6 groups — 4 nested, 2 within-container)
  - typical inside-group gap 12px · typical between-group gap 28px *(independent medians — don't divide these)*
- → space encodes grouping strongly *(confidence: medium)*

## Type
- Families: Inter
- Body **16px**; 5 sizes: 12, 14, 16, 24, 30
- Weights: 400, 450, 500, 600, 700 · **17 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **ink** (spread — size 0.19, weight 0.33, ink 0.51)
- Prose measure ≈ **100 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 16 | 400 | #1d2a3e | 1.75 | 0 | EUI offers a wide variety of components. This se |
| 16 | 600 | #1750ba | 1.75 | 0 | patterns |
| 14 | 600 | #1d2a3e | 1.43 | 0 | Layout |
| 14 | 500 | #1d2a3e | 1.14 | 0 | Getting started |
| 14 | 450 | #61a2ff | 1.43 | 0 | Elastic License 2.0 |
| 14 | 400 | #cad3e2 | 1.43 | 0 | EUI is dual-licensed under and · Crafted with ❤️ |
| 12 | 400 | #1d2a3e | 1.75 | 0 | Overview |
| 14 | 400 | #1c1e21 | 1.14 | 0 | Skip to main content |
| 12 | 600 | #1750ba | 1.75 | 0 | Elastic UI Framework |
| 24 | 600 | #111c2c | 1.33 | 0 | Components by topic |

## Colour & depth
- Page bg transparent (inherits canvas); max background chroma **9.4**
- Chromatic area **7.4%** → accent is scarce
- Neutrals tinted 4/5 → neutrals are tinted (designed)
- Depth: 6 bordered / 0 shadowed → **borders only, zero resting shadows**
- Radius scale: 4, 50, 21 · gradients: 0

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #07101f | 218 | 63.2 | 7.5 | 9.4 | 7 |
| #ffffff | 0 | 0 | 100 | 0 | 6.3 |
| #f6f9fc | 210 | 50 | 97.6 | 2.4 | 0.5 |
| #d9e8ff | 216 | 100 | 92.5 | 14.9 | 0.4 |
| #e3e8f2 | 220 | 36.6 | 92 | 5.9 | 0.1 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #1d2a3e | 36.3 | 17.8 | 12.9 | 59 |
| #1750ba | 78 | 41 | 63.9 | 16.6 |
| #61a2ff | 100 | 69 | 62 | 7.4 |
| #cad3e2 | 29.3 | 83.9 | 9.4 | 6.7 |
| #111c2c | 44.3 | 12 | 10.6 | 3.6 |
| #1c1e21 | 8.2 | 12 | 2 | 2.6 |

## Composition
- Main region **1440px**; prose cap 802px; horizontal bleed: false
- Alignment: 39 distinct left edges, **14** cover 80% of content
- Grid primitives: `2-col: px px` ×1
- Density: 196 visible elements, **181/screenful**
