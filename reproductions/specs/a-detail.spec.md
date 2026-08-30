# Spec card — a-detail

**Source:** a-detail.html  
**Captured:** 2026-07-30 · 1440×900

## Spacing
- Base unit **2px**, 81.6% of values on scale
- 17 distinct values; steps used: 16, 10, 12, 9, 8, 7, 18, 14, 6, 2, 20, 28
- **Proximity 3×** (median per-group ratio, 3 groups — 1 nested, 2 within-container)
  - typical inside-group gap 6px · typical between-group gap 22px *(independent medians — don't divide these)*
- → space encodes grouping strongly *(confidence: low — too few groups to generalise)*

## Type
- Families: Manrope
- Body **13px**; 6 sizes: 11, 12, 13, 14, 15, 24
- Weights: 400, 500, 600 · **16 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **ink** (spread — size 0.11, weight 0.33, ink 0.4)
- Prose measure ≈ **117 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 13 | 400 | #5e6c65 | — | 0 | PAPER |
| 14 | 400 | #42524a | — | 0 | ← Business categories |
| 13 | 600 | #2e3833 | 1.6 | 0 | Direction A — the house pattern. |
| 14 | 400 | #dbe6df | — | 0 | Home |
| 14 | 500 | #2e3833 | — | 0 | Edit category |
| 15 | 400 | #2e3833 | — | 0 | Everyday consumables. |
| 12 | 500 | #5e6c65 | — | 0.72 | Subcategory |
| 11 | 400 | #91a39a | — | 0.88 | Daily work |
| 13 | 500 | #2e3833 | — | 0 | New subcategory |
| 12 | 400 | #5e6c65 | — | 0.72 | Description |

## Colour & depth
- Page bg #f7f9f8; max background chroma **6.3**
- Chromatic area **0.1%** → accent is scarce
- Neutrals tinted 8/9 → neutrals are tinted (designed)
- Depth: 9 bordered / 0 shadowed → **borders only, zero resting shadows**
- Radius scale: 8, 12, 10 · gradients: 0

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #ffffff | 0 | 0 | 100 | 0 | 41.1 |
| #0e1a14 | 150 | 30 | 7.8 | 4.7 | 17.2 |
| #e1e7e3 | 140 | 11.1 | 89.4 | 2.4 | 5.7 |
| #1a2a22 | 150 | 23.5 | 13.3 | 6.3 | 0.6 |
| #e9c93b | 49 | 79.8 | 57.3 | 68.2 | 0.1 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #5e6c65 | 6.9 | 39.6 | 5.5 | 49 |
| #2e3833 | 9.8 | 20 | 3.9 | 27.9 |
| #42524a | 10.8 | 29 | 6.3 | 10.3 |
| #dbe6df | 18 | 88 | 4.3 | 8.5 |
| #91a39a | 8.9 | 60.4 | 7.1 | 3.5 |
| #b45309 | 90.5 | 37.1 | 67.1 | 0.7 |

## Composition
- Main region **1440px**; prose cap 760px; horizontal bleed: false
- Alignment: 19 distinct left edges, **9** cover 80% of content
- Grid primitives: `2-col: px px` ×2
- Density: 84 visible elements, **84/screenful**
