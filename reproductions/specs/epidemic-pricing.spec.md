# Spec card — epidemic-pricing

**Source:** reproductions/epidemic-pricing.html  
**Captured:** 2026-07-29 · 1440×900

## Spacing
- Base unit **2px**, 98.8% of values on scale
- 18 distinct values; steps used: 10, 2, 24, 4, 12, 8, 16, 20, 1, 28
- **Proximity 2.3×** (median per-group ratio, 9 groups — 6 nested, 3 within-container)
  - typical inside-group gap 12px · typical between-group gap 22px *(independent medians — don't divide these)*
- → space encodes grouping strongly *(confidence: high)*

## Type
- Families: Hanken Grotesk, Newsreader
- Body **13.5px**; 10 sizes: 11, 12.5, 13, 13.5, 14, 15, 16, 26, 30, 38
- Weights: 400, 500, 600, 700, 800 · **16 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **ink** (spread — size 0.36, weight 0.33, ink 0.46)

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 13.5 | 400 | #2c2b27 | 1.4 | 0 | Publish anywhere online |
| 13 | 400 | #6b6a64 | 1.5 | 0 | /month |
| 13.5 | 600 | #15140f | 1.5 | 0 | Everything in Personal, plus: |
| 14 | 600 | #ffffff | — | 0 | Start free trial |
| 38 | 500 | #15140f | 1.5 | -0.38 | 30-day free trial. Cancel anytime. |
| 15 | 600 | #15140f | 1.5 | 0 | Personal |
| 11 | 600 | #2c2b27 | 1.5 | 1.32 | 100% SECURE PAYMENTS |
| 26 | 600 | #15140f | 1.5 | -0.26 | Request a quote |
| 13.5 | 500 | #ffffff | — | 0 | Pay monthly |
| 13.5 | 500 | #2c2b27 | — | 0 | Pay yearly |

## Colour & depth
- Page bg #f4f3f1; max background chroma **66.3**
- Chromatic area **1.8%** → accent is scarce
- Neutrals tinted 6/8 → neutrals are tinted (designed)
- Depth: 4 bordered / 0 shadowed → **borders only, zero resting shadows**
- Radius scale: 10, 50, 999 · gradients: 0

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #ffffff | 0 | 0 | 100 | 0 | 30.4 |
| #fb529b | 334 | 95.5 | 65.3 | 66.3 | 1.8 |
| #15140f | 50 | 16.7 | 7.1 | 2.4 | 1.2 |
| #e7e5e0 | 43 | 12.7 | 89.2 | 2.7 | 0.7 |
| #eb001b | 353 | 100 | 46.1 | 92.2 | 0 |
| #f79e1b | 36 | 93.2 | 53.7 | 86.3 | 0 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #2c2b27 | 6 | 16.3 | 2 | 55.5 |
| #15140f | 16.7 | 7.1 | 2.4 | 22.9 |
| #6b6a64 | 3.4 | 40.6 | 2.7 | 11.1 |
| #ffffff | 0 | 100 | 0 | 8.4 |
| #8a8983 | 2.9 | 52.7 | 2.7 | 1.2 |
| #7a8aa3 | 18.2 | 55.9 | 16.1 | 0.4 |

## Composition
- Main region **1000px**; prose cap — (no prose); horizontal bleed: false
- Alignment: 19 distinct left edges, **9** cover 80% of content
- Grid primitives: `3-col: px px px` ×1
- Density: 87 visible elements, **87/screenful**
