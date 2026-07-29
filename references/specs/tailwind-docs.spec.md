# Spec card — tailwind-docs

**Source:** https://tailwindcss.com/docs/flex-basis  
**Captured:** 2026-07-29 · 1440×4568

## Spacing
- Base unit **8px**, 82.4% of values on scale
- 21 distinct values; steps used: 8, 16, 4, 12, 24, 20, 30, 32, 40, 2, 6, 10
- **Proximity 1.5×** (median per-group ratio, 32 groups — 27 nested, 5 within-container)
  - typical inside-group gap 8px · typical between-group gap 12px *(independent medians — don't divide these)*
- → space encodes grouping *(confidence: high)*

## Type
- Families: plexMono, inter
- Body **14px**; 7 sizes: 10, 12, 13, 14, 16, 18, 30
- Weights: 400, 500, 600, 700 · **32 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **ink** (spread — size 0.22, weight 0.17, ink 0.6)
- Prose measure ≈ **96 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 14 | 400 | #4a5565 | 2 | 0 | Components |
| 14 | 400 | #364153 | 2 | 0 | Use utilities like and to set the initial size o |
| 12 | 400 | #7f22fe | 2 | 0 | flex-basis: calc(var(--spacing) * ); |
| 14 | 400 | #74d4ff | 1.43 | 0 | "flex flex-row" |
| 12 | 400 | #99a1af | 2 | 0 | /* 16rem (256px) */ |
| 14 | 500 | #030712 | 2 | 0 | basis- |
| 12 | 500 | #6a7282 | 2 | 1.2 | Getting started |
| 12 | 500 | #00a6f4 | 2 | 0 | basis- |
| 14 | 400 | #030712 | 1.71 | 0 | Docs |
| 14 | 400 | #90a1b9 | 1.43 | 0 | <!-- ... --> |

## Colour & depth
- Page bg transparent (inherits canvas); max background chroma **95.7**
- Chromatic area **1.9%** → accent is scarce
- Neutrals tinted 3/5 → neutrals are tinted (designed)
- Depth: 242 bordered / 15 shadowed → **border-led, shadows reserved**
- Radius scale: 12, 8, 33554400, 16, 32 · gradients: 7

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #ffffff | 0 | 0 | 100 | 0 | 86.3 |
| #030712 | 224 | 71.4 | 4.1 | 5.9 | 11.6 |
| #000014 | 240 | 100 | 3.9 | 7.8 | 8.6 |
| #615fff | 241 | 100 | 68.6 | 62.7 | 0.5 |
| #ad46ff | 273 | 100 | 63.7 | 72.5 | 0.5 |
| #00a6f4 | 199 | 100 | 47.8 | 95.7 | 0.5 |
| #71d5ff | 198 | 100 | 72.2 | 55.7 | 0.4 |
| #000000 | 0 | 0 | 0 | 0 | 0.1 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #4a5565 | 15.4 | 34.3 | 10.6 | 42.9 |
| #364153 | 21.2 | 26.9 | 11.4 | 15.2 |
| #030712 | 71.4 | 4.1 | 5.9 | 10.2 |
| #7f22fe | 99.1 | 56.5 | 86.3 | 9.3 |
| #74d4ff | 100 | 72.7 | 54.5 | 4.3 |
| #99a1af | 12.1 | 64.3 | 8.6 | 3.9 |

## Composition
- Main region **1440px**; prose cap — (no prose); horizontal bleed: false
- Alignment: 86 distinct left edges, **11** cover 80% of content
- Grid primitives: `4-col: subgrid [] [] []` ×22 · `4-col: px px px px` ×2 · `2-col: px px` ×2 · `3-col: subgrid [] []` ×1 · `3-col: px px px` ×1
- Density: 1224 visible elements, **241/screenful**
