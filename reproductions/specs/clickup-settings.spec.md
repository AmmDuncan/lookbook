# Spec card — clickup-settings

**Source:** reproductions/clickup-settings.html  
**Captured:** 2026-07-29 · 1440×940

## Spacing
- Base unit **2px**, 99.6% of values on scale
- 15 distinct values; steps used: 8, 6, 10, 4, 12, 40, 1, 28, 16, 2, 14, 20
- **Proximity 2.86×** (median per-group ratio, 11 groups — 8 nested, 3 within-container)
  - typical inside-group gap 8px · typical between-group gap 20px *(independent medians — don't divide these)*
- → space encodes grouping strongly *(confidence: high)*

## Type
- Families: Plus Jakarta Sans
- Body **13px**; 10 sizes: 8, 9, 10, 11, 12, 12.5, 13, 14, 15, 21
- Weights: 400, 500, 600, 700 · **15 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **ink** (spread — size 0.16, weight 0.33, ink 0.42)
- Prose measure ≈ **37 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 13 | 400 | #8a8f9c | 1.45 | 0 | Search |
| 13 | 500 | #4b5060 | 1.45 | 0 | People |
| 13 | 600 | #1f2233 | 1.45 | 0 | AS Mobbin Official |
| 14 | 700 | #1f2233 | 1.45 | 0 | Profile |
| 9 | 500 | #4b5060 | 1.45 | 0 | Home |
| 12 | 600 | #4b5060 | 1.45 | 0 | Full Name |
| 11 | 600 | #8a8f9c | 1.45 | 0.22 | Workspace |
| 13 | 600 | #7b68ee | 1.45 | 0 | My Settings |
| 15 | 700 | #1f2233 | 1.45 | 0 | All settings |
| 14 | 600 | #ffffff | 1.45 | 0 | Save changes |

## Colour & depth
- Page bg #ffffff; max background chroma **7.8**
- Chromatic area **0.2%** → accent is scarce
- Neutrals tinted 11/13 → neutrals are tinted (designed)
- Depth: 20 bordered / 3 shadowed → **border-led, shadows reserved**
- Radius scale: 7, 8, 4, 9, 50, 11 · gradients: 5

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #f7f8fa | 220 | 23.1 | 97.5 | 1.2 | 16.8 |
| #ffffff | 0 | 0 | 100 | 0 | 5.7 |
| #f1f2f5 | 225 | 16.7 | 95.3 | 1.6 | 3.6 |
| #efeafe | 255 | 90.9 | 95.7 | 7.8 | 0.6 |
| #1f2233 | 231 | 24.4 | 16.1 | 7.8 | 0.4 |
| #23252f | 230 | 14.6 | 16.1 | 4.7 | 0.3 |
| #d8dbe3 | 224 | 16.4 | 86.9 | 4.3 | 0.3 |
| #e7e9ef | 225 | 20 | 92.2 | 3.1 | 0.1 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #8a8f9c | 8.3 | 57.6 | 7.1 | 50.3 |
| #4b5060 | 12.3 | 33.5 | 8.2 | 27.1 |
| #1f2233 | 24.4 | 16.1 | 7.8 | 18.4 |
| #7b68ee | 79.8 | 67.1 | 52.5 | 2.4 |
| #ffffff | 0 | 100 | 0 | 1.8 |

## Composition
- Main region **1440px**; prose cap 240px; horizontal bleed: false
- Alignment: 33 distinct left edges, **10** cover 80% of content
- Grid primitives: `2-col: px px` ×4 · `3-col: px px px` ×1
- Density: 233 visible elements, **223/screenful**
