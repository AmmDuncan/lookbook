# Spec card — shells

**Source:** /Users/ammielyawson/.claude/evidence/afcas/2026-08-17_ui-baseline/03-shell-directions/shells.html  
**Captured:** 2026-08-17 · 1440×4014

## Spacing
- Base unit **3px**, 43.4% of values on scale
- 26 distinct values; steps used: 9, 8, 7, 11, 13, 3, 5, 6, 14, 2, 15, 1
- **Proximity 2.43×** (median per-group ratio, 25 groups — 6 nested, 19 within-container)
  - typical inside-group gap 3px · typical between-group gap 11.5px *(independent medians — don't divide these)*
- → space encodes grouping strongly *(confidence: high)*

## Type
- Families: ui-sans-serif, ui-monospace, Arial
- Body **14px**; 12 sizes: 9, 10, 11, 12, 13, 14, 15, 18, 19, 21, 27, 46
- Weights: 400, 500, 600, 700 · **34 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **size** (spread — size 0.45, weight 0.33, ink 0.19)
- Prose measure ≈ **99 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 14 | 400 | #4a463d | 1.5 | 0 | Institution comes from the session. Evidence tha |
| 15 | 400 | #4a463d | 1.5 | 0 | Use when one fact must never leave the screen. T |
| 12 | 400 | #7d776c | 1.5 | 0 | axis A · sunken nav + raised content · axis B ·  |
| 12 | 400 | #4a463d | — | 0 | Export |
| 11 | 400 | #7d776c | 1 | 0 | afcas.gov.gh/sd/invoices?status=pending&sort=-is |
| 9 | 600 | #7d776c | 1 | 1.35 | Work |
| 18 | 400 | #4a463d | 1.5 | 0 | Same nav, same page, same data in all three. Onl |
| 13 | 400 | #7d776c | 1.5 | 0 | Captured against local seeded data — 21 SD invoi |
| 13 | 400 | #b9b5ab | 1.5 | 0 | Overview |
| 12 | 700 | #7d776c | 1.5 | 0.6 | What it buys / what it costs |

## Colour & depth
- Page bg #eceae4; max background chroma **4.3**
- Chromatic area **0%** → accent is scarce
- Neutrals tinted 17/19 → neutrals are tinted (designed)
- Depth: 65 bordered / 4 shadowed → **border-led, shadows reserved**
- Radius scale: 6, 3, 8, 5, 999, 50 · gradients: 0

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #ffffff | 0 | 0 | 100 | 0 | 86.8 |
| #141310 | 45 | 11.1 | 7.1 | 1.6 | 12.1 |
| #eceae4 | 45 | 17.4 | 91 | 3.1 | 12.1 |
| #f6f4f0 | 40 | 25 | 95.3 | 2.4 | 2.7 |
| #faf9f6 | 45 | 28.6 | 97.3 | 1.6 | 2.3 |
| #e6e3db | 44 | 18 | 88 | 4.3 | 2.1 |
| #1c1b16 | 50 | 12 | 9.8 | 2.4 | 2 |
| #302e27 | 47 | 10.3 | 17.1 | 3.5 | 0.2 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #4a463d | 9.6 | 26.5 | 5.1 | 60.9 |
| #7d776c | 7.3 | 45.7 | 6.7 | 25.7 |
| #16150f | 18.9 | 7.3 | 2.7 | 8.7 |
| #b9b5ab | 9.1 | 69.8 | 5.5 | 2.1 |
| #ffffff | 0 | 100 | 0 | 1 |
| #8a6d1f | 63.3 | 33.1 | 42 | 0.7 |

## Composition
- Main region **1320px**; prose cap 1256px; horizontal bleed: false
- Alignment: 64 distinct left edges, **30** cover 80% of content
- Grid primitives: `2-col: px px` ×3 · `4-col: px px px px` ×3
- Density: 351 visible elements, **79/screenful**
