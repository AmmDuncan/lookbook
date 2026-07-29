# Spec card — backstage-storybook

**Source:** https://backstage.io/storybook/  
**Captured:** 2026-07-29 · 1440×900

## Spacing
- Base unit **2px**, 82.9% of values on scale
- 16 distinct values; steps used: 6, 8, 4, 2, 5, 7, 10, 15, 16, 20, 12, 40
- **Proximity 10×** (median per-group ratio, 2 groups — 1 nested, 1 within-container)
  - typical inside-group gap 2px · typical between-group gap 16px *(independent medians — don't divide these)*
- → space encodes grouping strongly *(confidence: low — too few groups to generalise)*

## Type
- Families: Nunito Sans, ui-monospace
- Body **14px**; 7 sizes: 11, 12, 13, 14, 16, 24, 32
- Weights: 400, 700 · **18 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **weight** (spread — size 0.11, weight 0.5, ink 0.2)

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 14 | 400 | #2e3338 | — | 0 | Accordion |
| 11 | 700 | #5c6570 | 1 | 1.76 | Backstage UI |
| 16 | 400 | #2e3338 | — | 0 | Component test is rendering. |
| 13 | 700 | #5c6570 | 0.92 | 0 | Actions |
| 24 | 400 | #2e3338 | — | 0 | Stories |
| 12 | 400 | #2e3338 | 1.08 | 0 | union |
| 13 | 700 | #2e3338 | 1.46 | 0 | children |
| 12 | 700 | #2e3338 | 1 | 0 | Skip to sidebar |
| 12 | 700 | #0055b8 | 1 | 0 | Light |
| 32 | 400 | #2e3338 | — | 0 | Storybook |

## Colour & depth
- Page bg #f6f9fc; max background chroma **92.2**
- Chromatic area **0.9%** → accent is scarce
- Neutrals tinted 3/5 → neutrals are tinted (designed)
- Depth: 11 bordered / 4 shadowed → **shadow-led**
- Radius scale: 4, 3, 6 · gradients: 0

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #ffffff | 0 | 0 | 100 | 0 | 89.7 |
| #f6f9fc | 210 | 50 | 97.6 | 2.4 | 35.1 |
| #006deb | 212 | 100 | 46.1 | 92.2 | 0.6 |
| #0071f1 | 212 | 100 | 47.3 | 94.5 | 0.3 |
| #284a72 | 212 | 48.1 | 30.2 | 29 | 0 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #2e3338 | 9.8 | 20 | 3.9 | 87.4 |
| #5c6570 | 9.8 | 40 | 7.8 | 10.7 |
| #0055b8 | 100 | 36.1 | 72.2 | 0.9 |
| #006deb | 100 | 46.1 | 92.2 | 0.5 |
| #ffffff | 0 | 100 | 0 | 0.4 |
| #ff4400 | 100 | 50 | 100 | 0.1 |

## Composition
- Main region **1440px**; prose cap — (no prose); horizontal bleed: false
- Alignment: 37 distinct left edges, **3** cover 80% of content
- Grid primitives: `3-col: px px px` ×1
- Density: 1189 visible elements, **1189/screenful**
