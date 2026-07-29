# Spec card — polaris-components

**Source:** https://polaris.shopify.com/components  
**Captured:** 2026-07-29 · 1440×9504

## Spacing
- Base unit **4px**, 99.4% of values on scale
- 19 distinct values; steps used: 8, 1, 0, 4, 16, 12, 48, 24, 2, 36, 28, 32
- **Proximity 3.75×** (median per-group ratio, 88 groups — 6 nested, 82 within-container)
  - typical inside-group gap 4px · typical between-group gap 15.5px *(independent medians — don't divide these)*
- → space encodes grouping strongly *(confidence: high)*

## Type
- Families: Inter, Shopify Sans
- Body **13px**; 12 sizes: 10, 12.8, 13, 14, 14.4, 16, 16.8, 18, 20.3, 22.8, 28.8, 36.5
- Weights: 400, 450, 500, 600, 700 · **22 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **size** (spread — size 0.3, weight 0, ink 0)
- Prose measure ≈ **41 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 13 | 450 | #434e4e | 1.55 | 0 | Used for connecting or disconnecting a store to  |
| 14.4 | 450 | #434e4e | 1.55 | -0.14 | Account connection |
| 18 | 700 | #4e52b8 | 1.25 | -0.09 | Account connection |
| 12.8 | 400 | #434e4e | 1.55 | -0.14 | Deprecated |
| 14.4 | 450 | #1c1e1e | 1.55 | -0.14 | Search |
| 20.3 | 450 | #ffffff | 1.6 | 0 | Polaris Web Components are now the default way t |
| 10 | 450 | #ffffff | 1.2 | 0 | We and our partners use cookies and other techno |
| 22.8 | 700 | #1c1e1e | 1.25 | -0.34 | Actions |
| 16 | 450 | #1c1e1e | 1.55 | -0.04 | Getting started |
| 18 | 500 | #434e4e | 1.55 | -0.18 | Components are the reusable building blocks for  |

## Colour & depth
- Page bg #ffffff; max background chroma **7.8**
- Chromatic area **0.1%** → accent is scarce
- Neutrals tinted 2/11 → neutrals are near-pure grey (default-ish)
- Depth: 96 bordered / 4 shadowed → **border-led, shadows reserved**
- Radius scale: 8, 10, 14, 50, 1000, 100 · gradients: 1

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #f1f1f1 | 0 | 0 | 94.5 | 0 | 25.6 |
| #f9f9f9 | 0 | 0 | 97.6 | 0 | 1.8 |
| #ffffff | 0 | 0 | 100 | 0 | 1.2 |
| #ffeceb | 3 | 100 | 96.1 | 7.8 | 0.5 |
| #000000 | 0 | 0 | 0 | 0 | 0.3 |
| #d4f5e7 | 155 | 62.3 | 89.6 | 12.9 | 0.1 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #434e4e | 7.6 | 28.4 | 4.3 | 86.9 |
| #4e52b8 | 42.7 | 51.4 | 41.6 | 6.2 |
| #1c1e1e | 3.4 | 11.4 | 0.8 | 3.2 |
| #ffffff | 0 | 100 | 0 | 2.6 |
| #00936f | 100 | 28.8 | 57.6 | 0.3 |
| #767676 | 0 | 46.3 | 0 | 0.3 |

## Composition
- Main region **1440px**; prose cap 836px; horizontal bleed: false
- Alignment: 81 distinct left edges, **9** cover 80% of content
- Grid primitives: `4-col: px px px px` ×12
- Density: 1298 visible elements, **123/screenful**
