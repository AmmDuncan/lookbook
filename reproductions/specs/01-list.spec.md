# Spec card — 01-list

**Source:** ./01-list.html  
**Captured:** 2026-07-29 · 1440×1048

## Spacing
- Base unit **2px**, 83.8% of values on scale
- 18 distinct values; steps used: 12, 8, 18, 5, 3, 9, 10, 14, 2, 6, 11, 7
- **Proximity 4.19×** (median per-group ratio, 4 groups — 2 nested, 2 within-container)
  - typical inside-group gap 6px · typical between-group gap 16.75px *(independent medians — don't divide these)*
- → space encodes grouping strongly *(confidence: medium)*

## Type
- Families: Inter, Arial
- Body **13px**; 5 sizes: 11, 12, 13, 14, 26
- Weights: 400, 500, 600, 700 · **25 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **ink** (spread — size 0.22, weight 0.17, ink 0.36)
- Prose measure ≈ **101 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 13 | 400 | #737373 | 1.45 | 0 | Fee management |
| 12 | 400 | #737373 | 1.45 | 0 | Q3 tariff revision approved by board |
| 14 | 400 | #171717 | 1.45 | 0 | Steve Rogers |
| 14 | 500 | #171717 | 1.45 | 0 | Roadworthy premium uplift |
| 12 | 600 | #737373 | 1.45 | 0.72 | Fees |
| 14 | 400 | #737373 | 1.45 | 0 | What is staged, what is scheduled, and what is a |
| 12 | 500 | #5b21b6 | 1.45 | 0 | Scheduled · 2 Aug, 19:00 |
| 14 | 400 | #c3c9d6 | 1.45 | 0 | Transactions |
| 12 | 400 | #9a3412 | 1.45 | 0 | Rejected: awaiting board minute reference |
| 12 | 500 | #854d0e | 1.45 | 0 | Pending approval |

## Colour & depth
- Page bg #eef0f3; max background chroma **10.6**
- Chromatic area **17.6%** → accent is present
- Neutrals tinted 4/11 → neutrals are near-pure grey (default-ish)
- Depth: 10 bordered / 1 shadowed → **border-led, shadows reserved**
- Radius scale: 9999, 4, 6, 8, 12 · gradients: 0

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #eef0f3 | 216 | 17.2 | 94.3 | 2 | 83.6 |
| #ffffff | 0 | 0 | 100 | 0 | 56.3 |
| #0f172a | 222 | 47.4 | 11.2 | 10.6 | 16.4 |
| #fafafa | 0 | 0 | 98 | 0 | 10.1 |
| #f5f5f5 | 0 | 0 | 96.1 | 0 | 1 |
| #f0fdf4 | 138 | 76.5 | 96.7 | 5.1 | 0.7 |
| #ede9fe | 251 | 91.3 | 95.5 | 8.2 | 0.5 |
| #fef9c3 | 55 | 96.7 | 88 | 23.1 | 0.4 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #737373 | 0 | 45.1 | 0 | 50.9 |
| #171717 | 0 | 9 | 0 | 25.9 |
| #9a3412 | 79.1 | 33.7 | 53.3 | 4.7 |
| #404040 | 0 | 25.1 | 0 | 3.9 |
| #015a2f | 97.8 | 17.8 | 34.9 | 3.5 |
| #5b21b6 | 69.3 | 42.2 | 58.4 | 3 |

## Composition
- Main region **1440px**; prose cap 655px; horizontal bleed: false
- Alignment: 23 distinct left edges, **9** cover 80% of content
- Grid primitives: none
- Density: 163 visible elements, **140/screenful**
