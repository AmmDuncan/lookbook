# Spec card — nordhealth

**Source:** https://nordhealth.design/components/  
**Captured:** 2026-07-29 · 1440×900

## Spacing
- Base unit **8px**, 92.5% of values on scale
- 9 distinct values; steps used: 16, 8, 36, 4, 24, 10, 48
- **Proximity 15×** (median per-group ratio, 13 groups — 13 nested, 0 within-container)
  - typical inside-group gap 0px · typical between-group gap 16px *(independent medians — don't divide these)*
- → space encodes grouping strongly *(confidence: high)*

## Type
- Families: Nordhealth Sans, Nord Custom, Arial, Times
- Body **14px**; 8 sizes: 9, 10, 11, 12, 14, 16, 20, 24
- Weights: 400, 600, 670, 700 · **20 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **ink** (spread — size 0.19, weight 0, ink 0.31)
- Prose measure ≈ **32 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 14 | 400 | #667680 | 1.5 | 0 | Buttons are used for interface actions, with a p |
| 14 | 400 | #36434a | 1.14 | 0 | Search |
| 20 | 600 | #0c1a3d | 1.2 | 0 | Button |
| 14 | 400 | #0c1a3d | 1.15 | 0 | Alpha |
| 20 | 400 | #667680 | 1.5 | 0 | Presentational user interface components with en |
| 12 | 400 | #667680 | 1.67 | 0 | Tags |
| 14 | 400 | #3559c7 | 1.4 | 0 | — 18 new components, Light DOM APIs, and updates |
| 24 | 670 | #0c1a3d | 1.2 | 0 | Action |
| 12 | 400 | #36434a | 1.5 | 0 | GitHub |
| 16 | 400 | #000000 | — | 0 | Keyboard shortcut ⌥ + L |

## Colour & depth
- Page bg transparent (inherits canvas); max background chroma **4.7**
- Chromatic area **0%** → accent is scarce
- Neutrals tinted 3/6 → neutrals are near-pure grey (default-ish)
- Depth: 75 bordered / 2 shadowed → **border-led, shadows reserved**
- Radius scale: 5, 3, 999 · gradients: 0

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #f6f8f8 | 180 | 12.5 | 96.9 | 0.8 | 230.8 |
| #f6f8fa | 210 | 28.6 | 97.3 | 1.6 | 112.6 |
| #ffffff | 0 | 0 | 100 | 0 | 100.4 |
| #eff2fb | 225 | 60 | 96.1 | 4.7 | 4.6 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #667680 | 11.3 | 45.1 | 10.2 | 74.9 |
| #0c1a3d | 67.1 | 14.3 | 19.2 | 12.6 |
| #36434a | 15.6 | 25.1 | 7.8 | 10.5 |
| #3559c7 | 57.9 | 49.4 | 57.3 | 1.5 |
| #000000 | 0 | 0 | 0 | 0.5 |

## Composition
- Main region **1440px**; prose cap 700px; horizontal bleed: false
- Alignment: 118 distinct left edges, **24** cover 80% of content
- Grid primitives: `3-col: px px px` ×10
- Density: 1884 visible elements, **1884/screenful**
