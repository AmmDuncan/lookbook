# Spec card — 02-diff

**Source:** ./02-diff.html  
**Captured:** 2026-07-29 · 1440×1213

## Spacing
- Base unit **2px**, 74.1% of values on scale
- 21 distinct values; steps used: 12, 9, 14, 4, 16, 8, 3, 13, 10, 2, 6, 5
- **Proximity 2.1×** (median per-group ratio, 4 groups — 3 nested, 1 within-container)
  - typical inside-group gap 8.5px · typical between-group gap 14.75px *(independent medians — don't divide these)*
- → space encodes grouping strongly *(confidence: medium)*

## Type
- Families: Inter, monospace
- Body **14px**; 6 sizes: 11, 12, 13, 14, 18, 26
- Weights: 400, 500, 600, 700 · **25 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **weight** (spread — size 0.22, weight 0.33, ink 0.23)
- Prose measure ≈ **152 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 14 | 400 | #525252 | 1.45 | 0 | 4 decisions · 14 rows |
| 14 | 500 | #171717 | 1.45 | 0 | Steve Rogers |
| 14 | 400 | #7f1d1d | 1.45 | 0 | Every total below uses the submitted baseline, s |
| 12 | 400 | #525252 | 1.45 | 0 | Submitted by |
| 14 | 400 | #171717 | 1.45 | 0 | 150.00 |
| 14 | 500 | #404040 | 1.45 | 0 | Nothing here is live. Clerks are charging the ol |
| 12 | 600 | #525252 | 1.45 | 0.72 | Price change batch |
| 12 | 400 | #b91c1c | 1.45 | 0 | Provisional — 1 row moved |
| 14 | 700 | #7f1d1d | 1.45 | 0 | 1 of 14 rows has moved since this was submitted. |
| 11 | 400 | #ffffff | 1.25 | 0 | Transactions |

## Colour & depth
- Page bg #eef0f3; max background chroma **49.4**
- Chromatic area **10.4%** → accent is present
- Neutrals tinted 3/11 → neutrals are near-pure grey (default-ish)
- Depth: 13 bordered / 0 shadowed → **borders only, zero resting shadows**
- Radius scale: 8, 9999, 12, 6, 4 · gradients: 0

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #eef0f3 | 216 | 17.2 | 94.3 | 2 | 92.9 |
| #ffffff | 0 | 0 | 100 | 0 | 60 |
| #fafafa | 0 | 0 | 98 | 0 | 11.2 |
| #0f172a | 222 | 47.4 | 11.2 | 10.6 | 9.7 |
| #fef2f2 | 0 | 85.7 | 97.3 | 4.7 | 8.4 |
| #028043 | 151 | 96.9 | 25.5 | 49.4 | 0.5 |
| #f0fdf4 | 138 | 76.5 | 96.7 | 5.1 | 0.2 |
| #f5f5f5 | 0 | 0 | 96.1 | 0 | 0.2 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #525252 | 0 | 32.2 | 0 | 47.9 |
| #171717 | 0 | 9 | 0 | 21.6 |
| #7f1d1d | 62.8 | 30.6 | 38.4 | 12.6 |
| #404040 | 0 | 25.1 | 0 | 6.1 |
| #b91c1c | 73.7 | 41.8 | 61.6 | 5.1 |
| #ffffff | 0 | 100 | 0 | 4.3 |

## Composition
- Main region **1440px**; prose cap 1197px; horizontal bleed: false
- Alignment: 34 distinct left edges, **14** cover 80% of content
- Grid primitives: `4-col: px px px px` ×1
- Density: 175 visible elements, **130/screenful**
