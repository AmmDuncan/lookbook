# Spec card — f-split

**Source:** f-split.html  
**Captured:** 2026-08-23 · 1440×918

## Spacing
- Base unit **2px**, 97.3% of values on scale
- 18 distinct values; steps used: 14, 8, 10, 16, 20, 12, 32, 18, 6, 24, 2, 5
- **Proximity 2.15×** (median per-group ratio, 8 groups — 5 nested, 3 within-container)
  - typical inside-group gap 7px · typical between-group gap 14px *(independent medians — don't divide these)*
- → space encodes grouping strongly *(confidence: high)*

## Type
- Families: Roboto, Montserrat, Roboto Mono
- Body **12px**; 6 sizes: 11, 12, 14, 16, 20, 24
- Weights: 400, 500, 600, 700 · **13 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **mixed (size+ink)** (spread — size 0.22, weight 0.17, ink 0.2)
- Prose measure ≈ **120 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 12 | 400 | #6e6868 | 1.5 | 0 | Invoices |
| 14 | 500 | #3a3636 | 1.5 | 0 | Depot 3 Ltd |
| 14 | 400 | #3a3636 | 1.5 | 0 | X1AXJXIY5 |
| 14 | 400 | #6e6868 | 1.5 | 0 | Invoice no. |
| 11 | 500 | #6e6868 | 1.5 | 0.6 | Billed to |
| 16 | 600 | #3a3636 | 1.3 | -0.16 | Ghana National Fire Service |
| 14 | 600 | #3a3636 | 1.4 | -0.14 | Payment |
| 12 | 500 | #6e6868 | 1.5 | 0 | Charge |
| 20 | 700 | #3a3636 | 1.5 | 0 | GHS 50.00 |
| 24 | 600 | #3a3636 | 1.1 | -0.72 | Invoice X1AXJXIY5 |

## Colour & depth
- Page bg #f3f4f6; max background chroma **36.1**
- Chromatic area **0.5%** → accent is scarce
- Neutrals tinted 3/5 → neutrals are tinted (designed)
- Depth: 17 bordered / 4 shadowed → **border-led, shadows reserved**
- Radius scale: 999, 10, 14, 8 · gradients: 0

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #ffffff | 0 | 0 | 100 | 0 | 63.5 |
| #5c0000 | 0 | 100 | 18 | 36.1 | 0.5 |
| #fff8f2 | 28 | 100 | 97.5 | 5.1 | 0.2 |
| #007a55 | 162 | 100 | 23.9 | 47.8 | 0 |
| #973c00 | 24 | 100 | 29.6 | 59.2 | 0 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #6e6868 | 2.8 | 42 | 2.4 | 53.1 |
| #3a3636 | 3.6 | 22 | 1.6 | 43.5 |
| #ffffff | 0 | 100 | 0 | 1.7 |
| #973c00 | 100 | 29.6 | 59.2 | 1.6 |

## Composition
- Main region **1240px**; prose cap — (no prose); horizontal bleed: false
- Alignment: 18 distinct left edges, **9** cover 80% of content
- Grid primitives: `2-col: px px` ×7
- Density: 100 visible elements, **98/screenful**
