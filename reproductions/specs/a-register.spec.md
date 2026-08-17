# Spec card — a-register

**Source:** a-register.html  
**Captured:** 2026-07-30 · 1440×900

## Spacing
- Base unit **2px**, 81.8% of values on scale
- 15 distinct values; steps used: 16, 9, 10, 12, 8, 3, 6, 2, 20, 28, 18
- **Proximity 3×** (median per-group ratio, 3 groups — 1 nested, 2 within-container)
  - typical inside-group gap 6px · typical between-group gap 18px *(independent medians — don't divide these)*
- → space encodes grouping strongly *(confidence: low — too few groups to generalise)*

## Type
- Families: Manrope
- Body **13px**; 6 sizes: 11, 12, 13, 14, 15, 28
- Weights: 400, 500, 600 · **16 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **ink** (spread — size 0.11, weight 0.17, ink 0.68)
- Prose measure ≈ **117 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 13 | 400 | #5e6c65 | — | 0 | OFFICE |
| 14 | 400 | #42524a | — | 0 | ← Setup |
| 14 | 400 | #dbe6df | — | 0 | Home |
| 15 | 400 | #42524a | — | 0 | The top level of the catalogue tree items are gr |
| 14 | 500 | #2e3833 | — | 0 | Office supplies |
| 12 | 500 | #5e6c65 | — | 0.72 | Business category |
| 11 | 400 | #91a39a | — | 0.88 | Daily work |
| 13 | 600 | #2e3833 | 1.6 | 0 | Shared by both directions. |
| 14 | 400 | #7d8983 | — | 0 | Search by category name or code |
| 14 | 500 | #ffffff | — | 0 | New business category |

## Colour & depth
- Page bg #f7f9f8; max background chroma **38**
- Chromatic area **0.7%** → accent is scarce
- Neutrals tinted 9/11 → neutrals are tinted (designed)
- Depth: 4 bordered / 0 shadowed → **borders only, zero resting shadows**
- Radius scale: 8, 999, 10, 12 · gradients: 0

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #ffffff | 0 | 0 | 100 | 0 | 30.6 |
| #0e1a14 | 150 | 30 | 7.8 | 4.7 | 17.2 |
| #1a2a22 | 150 | 23.5 | 13.3 | 6.3 | 0.6 |
| #147543 | 149 | 70.8 | 26.9 | 38 | 0.6 |
| #eff3f0 | 135 | 14.3 | 94.5 | 1.6 | 0.2 |
| #e9c93b | 49 | 79.8 | 57.3 | 68.2 | 0.1 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #5e6c65 | 6.9 | 39.6 | 5.5 | 43.3 |
| #42524a | 10.8 | 29 | 6.3 | 20 |
| #2e3833 | 9.8 | 20 | 3.9 | 15.3 |
| #dbe6df | 18 | 88 | 4.3 | 10 |
| #91a39a | 8.9 | 60.4 | 7.1 | 4.1 |
| #7d8983 | 4.8 | 51.4 | 4.7 | 3.9 |

## Composition
- Main region **1440px**; prose cap 760px; horizontal bleed: false
- Alignment: 14 distinct left edges, **7** cover 80% of content
- Grid primitives: `2-col: px px` ×1
- Density: 74 visible elements, **74/screenful**
