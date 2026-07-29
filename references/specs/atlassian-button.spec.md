# Spec card — atlassian-button

**Source:** https://atlassian.design/components/button/examples  
**Captured:** 2026-07-29 · 1440×900

## Spacing
- Base unit **4px**, 87.2% of values on scale
- 12 distinct values; steps used: 4, 2, 12, 8, 6, 16, 24, 32, 1, 40
- **Proximity 0.67×** (median per-group ratio, 27 groups — 25 nested, 2 within-container)
  - typical inside-group gap 6px · typical between-group gap 4px *(independent medians — don't divide these)*
- → space encodes little grouping — flat rhythm *(confidence: high)*

## Type
- Families: Atlassian Mono, Atlassian Sans, Charlie Display
- Body **14px**; 8 sizes: 12, 12.3, 13.3, 14, 16, 20, 24, 40
- Weights: 400, 500, 600, 653, 700 · **29 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **weight** (spread — size 0.19, weight 0.42, ink 0.24)
- Prose measure ≈ **108 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 14 | 400 | #292a2e | 1.43 | 0 | Use default buttons for most actions that aren't |
| 12.3 | 400 | #292a2e | 1.63 | 0 | React |
| 14 | 500 | #505258 | 1.43 | 0 | What's new |
| 12.3 | 700 | #1558bc | 1.63 | 0 | import |
| 12.3 | 400 | #216e4e | 1.63 | 0 | 'react' |
| 12.3 | 400 | #206a83 | 1.63 | 0 | appearance |
| 14 | 400 | #505258 | 1.43 | 0 | We use this feedback to improve our documentatio |
| 12.3 | 400 | #803fa5 | 1.63 | 0 | Button |
| 12 | 500 | #6b6e76 | 1.33 | 0 | Default |
| 12 | 653 | #6b6e76 | 1.33 | 0 | Forms and input |

## Colour & depth
- Page bg #ffffff; max background chroma **82.7**
- Chromatic area **13.9%** → accent is present
- Neutrals tinted 3/7 → neutrals are near-pure grey (default-ish)
- Depth: 73 bordered / 16 shadowed → **border-led, shadows reserved**
- Radius scale: 6, 4, 2, 8, 9999 · gradients: 16

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #f8f8f8 | 0 | 0 | 97.3 | 0 | 280.2 |
| #ffffff | 0 | 0 | 100 | 0 | 97.4 |
| #fff5db | 43 | 100 | 92.9 | 14.1 | 6.3 |
| #1868db | 215 | 80.2 | 47.6 | 76.5 | 3 |
| #e9f2fe | 214 | 91.3 | 95.5 | 8.2 | 1.1 |
| #001122 | 210 | 100 | 6.7 | 13.3 | 1 |
| #fbc828 | 45 | 96.3 | 57.1 | 82.7 | 0.7 |
| #ffd5d2 | 4 | 100 | 91.2 | 17.6 | 0.6 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #292a2e | 5.7 | 17.1 | 2 | 47.9 |
| #505258 | 4.8 | 32.9 | 3.1 | 22.5 |
| #1558bc | 79.9 | 41 | 65.5 | 7.4 |
| #216e4e | 53.8 | 28 | 30.2 | 6.4 |
| #206a83 | 60.7 | 32 | 38.8 | 5.2 |
| #6b6e76 | 4.9 | 44.1 | 4.3 | 4.1 |

## Composition
- Main region **1440px**; prose cap 756px; horizontal bleed: false
- Alignment: 124 distinct left edges, **19** cover 80% of content
- Grid primitives: `4-col: px px px px` ×105 · `6-col: subgrid [] [] [] [] []` ×104 · `2-col: px px` ×17 · `3-col: px px px` ×2 · `5-col: px px px px px` ×1
- Density: 3986 visible elements, **3986/screenful**
