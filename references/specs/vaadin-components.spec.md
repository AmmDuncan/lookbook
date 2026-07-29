# Spec card — vaadin-components

**Source:** https://vaadin.com/docs/latest/components  
**Captured:** 2026-07-29 · 1440×9731

## Spacing
- Base unit **8px**, 93% of values on scale
- 14 distinct values; steps used: 8, 16, 24, 2, 4, 32, 6, 3, 64, 48
- **Proximity 1.83×** (median per-group ratio, 8 groups — 7 nested, 1 within-container)
  - typical inside-group gap 20px · typical between-group gap 32px *(independent medians — don't divide these)*
- → space encodes grouping *(confidence: high)*

## Type
- Families: nb_international_pro, Arial, -apple-system, nb_international_promono
- Body **14px**; 8 sizes: 12, 12.6, 13.3, 14, 16, 18, 24, 32
- Weights: 400, 500, 600 · **19 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **ink** (spread — size 0.07, weight 0.17, ink 0.53)
- Prose measure ≈ **44 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 14 | 400 | #232e3c | 1.6 | 0.16 | Text fields, date pickers, combo boxes, and ever |
| 13.3 | 400 | #a2b4cb | — | 0 | Show sub-pages of Getting Started |
| 14 | 500 | #1a81fa | 1.6 | 0.16 | Web Components 25.2.6 |
| 14 | 400 | #576b85 | 1.4 | 0 | Search |
| 16 | 400 | #0d1219 | 1.4 | 0 | Docs |
| 14 | 500 | #576b85 | 1 | 0.16 | Documentation versions (currently viewingVaadin  |
| 18 | 400 | #0d1219 | 1.4 | 0 | Data Entry |
| 14 | 500 | #0d1219 | 1.4 | 0.16 | Vaadin 25.3 (pre-release) |
| 14 | 600 | #0d1219 | 1.4 | 0.16 | Getting Started |
| 24 | 400 | #0d1219 | 1.25 | -0.48 | Data Entry |

## Colour & depth
- Page bg transparent (inherits canvas); max background chroma **0**
- Chromatic area **1.8%** → accent is scarce
- Neutrals tinted 2/4 → neutrals are near-pure grey (default-ish)
- Depth: 75 bordered / 3 shadowed → **border-led, shadows reserved**
- Radius scale: 8, 4, 6, 3 · gradients: 0

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #ffffff | 0 | 0 | 100 | 0 | 31.5 |
| #e7f1ff | 215 | 100 | 95.3 | 9.4 | 0.3 |
| #8378ff | 245 | 100 | 73.5 | 52.9 | 0.3 |
| #38c694 | 159 | 55.9 | 49.8 | 55.7 | 0.3 |
| #ff7d5f | 11 | 100 | 68.6 | 62.7 | 0.3 |
| #ffe8ab | 44 | 100 | 83.5 | 32.9 | 0.3 |
| #b4fbe1 | 158 | 89.9 | 84.5 | 27.8 | 0.3 |
| #f5f8fd | 218 | 66.7 | 97.6 | 3.1 | 0.1 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #232e3c | 26.3 | 18.6 | 9.8 | 56.9 |
| #a2b4cb | 28.3 | 71.6 | 16.1 | 16.1 |
| #1a81fa | 95.7 | 54.1 | 87.8 | 10.3 |
| #0d1219 | 31.6 | 7.5 | 4.7 | 9.1 |
| #576b85 | 20.9 | 43.1 | 18 | 7.3 |
| #ffffff | 0 | 100 | 0 | 0.1 |

## Composition
- Main region **1440px**; prose cap 307px; horizontal bleed: false
- Alignment: 59 distinct left edges, **7** cover 80% of content
- Grid primitives: `3-col: px px px` ×5 · `4-col: px px px px` ×1
- Density: 1200 visible elements, **111/screenful**
