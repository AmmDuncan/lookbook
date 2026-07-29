# Spec card — ionic-components

**Source:** https://ionicframework.com/docs/components  
**Captured:** 2026-07-29 · 1440×3784

## Spacing
- Base unit **2px**, 83.7% of values on scale
- 18 distinct values; steps used: 8, 24, 12, 21, 5, 14, 16, 7, 2, 20, 6
- **Proximity 5×** (median per-group ratio, 16 groups — 4 nested, 12 within-container)
  - typical inside-group gap 1px · typical between-group gap 5px *(independent medians — don't divide these)*
- → space encodes grouping strongly *(confidence: high)*

## Type
- Families: system-ui, ui-monospace, -apple-system
- Body **12px**; 9 sizes: 12, 13, 14, 15, 16, 16.6, 20, 22.4, 48
- Weights: 400, 500, 600, 700 · **20 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **size** (spread — size 0.42, weight 0.33, ink 0.19)
- Prose measure ≈ **43 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 12 | 400 | #222d3a | 2 | 0 | Accordions provide collapsible sections in your  |
| 13 | 500 | #445b78 | 1.23 | -0.13 | ion-accordion |
| 20 | 400 | #35404e | 2 | 0 | Ionic apps are made of high-level building block |
| 15 | 600 | #141414 | 1 | -0.15 | Getting Started |
| 16 | 600 | #222d3a | 1.4 | 0 | Accordion |
| 14 | 500 | #445b78 | 1.21 | 0 | Guide |
| 12 | 600 | #ffffff | 1 | 0 | Ionic v8.0.0 Upgrade Guide |
| 16 | 400 | #1b6dff | 1.15 | 0 | Edit this page |
| 16 | 400 | #1c1e21 | 1.15 | 0 | Skip to main content |
| 13 | 500 | #1b6dff | 1.23 | -0.13 | UI Components |

## Colour & depth
- Page bg transparent (inherits canvas); max background chroma **0**
- Chromatic area **0%** → accent is scarce
- Neutrals tinted 4/7 → neutrals are near-pure grey (default-ish)
- Depth: 41 bordered / 2 shadowed → **border-led, shadows reserved**
- Radius scale: 4, 12, 50, 6, 200, 8 · gradients: 2

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #ffffff | 0 | 0 | 100 | 0 | 56.3 |
| #f0f6ff | 216 | 100 | 97.1 | 5.9 | 0.1 |
| #ced6e0 | 213 | 22.5 | 84.3 | 7.1 | 0 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #222d3a | 26.1 | 18 | 9.4 | 62.7 |
| #445b78 | 27.7 | 36.9 | 20.4 | 22.9 |
| #35404e | 19.1 | 25.7 | 9.8 | 5.7 |
| #141414 | 0 | 7.8 | 0 | 5.6 |
| #1b6dff | 100 | 55.3 | 89.4 | 1.2 |
| #ffffff | 0 | 100 | 0 | 0.7 |

## Composition
- Main region **1440px**; prose cap 960px; horizontal bleed: false
- Alignment: 43 distinct left edges, **5** cover 80% of content
- Grid primitives: `2-col: px px` ×2 · `3-col: px px px` ×1
- Density: 733 visible elements, **174/screenful**
