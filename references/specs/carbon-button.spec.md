# Spec card — carbon-button

**Source:** https://carbondesignsystem.com/components/button/usage/  
**Captured:** 2026-07-29 · 1440×47976

## Spacing
- Base unit **8px**, 94.2% of values on scale
- 29 distinct values; steps used: 16, 32, 24, 320, 8, 6, 64, 80, 378, 15, 7, 48
- **Proximity 7×** (median per-group ratio, 5 groups — 2 nested, 3 within-container)
  - typical inside-group gap 8px · typical between-group gap 38px *(independent medians — don't divide these)*
- → space encodes grouping strongly *(confidence: medium)*

## Type
- Families: IBM Plex Sans Var, IBM Plex Sans, IBM Plex Mono
- Body **16px**; 6 sizes: 12, 14, 16, 21.9, 32, 67.5
- Weights: 300, 400, 600 · **21 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **size** (spread — size 0.19, weight 0, ink 0)
- Prose measure ≈ **88 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 16 | 400 | #161616 | 1.5 | 0 | Buttons are clickable elements that are used to  |
| 14 | 400 | #161616 | 1.29 | 0.16 | Some of the examples we discuss here include flu |
| 16 | 600 | #161616 | 1.5 | 0 | When to use |
| 16 | 400 | #0f62fe | 1.29 | 0.16 | links |
| 21.9 | 400 | #161616 | 1.4 | 0 | Buttons are used to initialize an action. Button |
| 14 | 400 | #525252 | 1.43 | 0.1 | Overview |
| 14 | 600 | #c6c6c6 | 1.43 | 0.16 | IBM Brand Center |
| 14 | 600 | #161616 | 1.29 | 0.16 | Components |
| 14 | 400 | #f4f4f4 | 1.43 | 0.16 | Contact us |
| 32 | 400 | #161616 | 1.25 | 0 | Live demo |

## Colour & depth
- Page bg #000000; max background chroma **0**
- Chromatic area **0%** → accent is scarce
- Neutrals tinted 1/14 → neutrals are near-pure grey (default-ish)
- Depth: 29 bordered / 1 shadowed → **border-led, shadows reserved**
- Radius scale: 4, 16 · gradients: 0

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #f4f4f4 | 0 | 0 | 95.7 | 0 | 99.9 |
| #ffffff | 0 | 0 | 100 | 0 | 36.9 |
| #000000 | 0 | 0 | 0 | 0 | 1.4 |
| #262626 | 0 | 0 | 14.9 | 0 | 0.3 |
| #edf5ff | 213 | 100 | 96.5 | 7.1 | 0.2 |
| #161616 | 0 | 0 | 8.6 | 0 | 0.1 |
| #0f62fe | 219 | 99.2 | 52.7 | 93.7 | 0 |
| #8c8c8c | 0 | 0 | 54.9 | 0 | 0 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #161616 | 0 | 8.6 | 0 | 94.3 |
| #0f62fe | 99.2 | 52.7 | 93.7 | 2 |
| #525252 | 0 | 32.2 | 0 | 1.7 |
| #c6c6c6 | 0 | 77.6 | 0 | 0.9 |
| #f4f4f4 | 0 | 95.7 | 0 | 0.6 |
| #ffffff | 0 | 100 | 0 | 0.4 |

## Composition
- Main region **1440px**; prose cap 704px; horizontal bleed: false
- Alignment: 85 distinct left edges, **6** cover 80% of content
- Grid primitives: none
- Density: 2109 visible elements, **40/screenful**
