# Spec card — atlassian-components

**Source:** https://atlassian.design/components  
**Captured:** 2026-07-29 · 1440×900

## Spacing
- Base unit **4px**, 96.7% of values on scale
- 11 distinct values; steps used: 4, 16, 2, 8, 6, 12, 24, 32, 40, 64
- **Proximity 16×** (median per-group ratio, 21 groups — 21 nested, 0 within-container)
  - typical inside-group gap 0px · typical between-group gap 16px *(independent medians — don't divide these)*
- → space encodes grouping strongly *(confidence: high)*

## Type
- Families: Atlassian Sans
- Body **14px**; 5 sizes: 12, 14, 16, 32, 48
- Weights: 400, 500, 653, 700 · **16 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **weight** (spread — size 0.19, weight 0.42, ink 0.16)
- Prose measure ≈ **41 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 14 | 400 | #292a2e | 1.43 | 0 | A button triggers an event or action. They let u |
| 14 | 500 | #505258 | 1.43 | 0 | What's new |
| 16 | 653 | #292a2e | 1.25 | 0 | Button |
| 14 | 400 | #505258 | 1.43 | 0 | What's new |
| 32 | 700 | #292a2e | 1.13 | 0 | Forms and inputs |
| 12 | 653 | #6b6e76 | 1.33 | 0 | Forms and input |
| 16 | 400 | #292a2e | 1.5 | 0 | Components are reusable building blocks that mee |
| 12 | 400 | #5d1f1a | 1.33 | 0 | Deprecated |
| 12 | 400 | #693200 | 1.33 | 0 | Caution |
| 12 | 400 | #48245d | 1.33 | 0 | Beta |

## Colour & depth
- Page bg #ffffff; max background chroma **33.7**
- Chromatic area **3.8%** → accent is scarce
- Neutrals tinted 4/6 → neutrals are tinted (designed)
- Depth: 130 bordered / 0 shadowed → **borders only, zero resting shadows**
- Radius scale: 6, 16, 4, 2 · gradients: 0

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #f8f8f8 | 0 | 0 | 97.3 | 0 | 354.6 |
| #ffffff | 0 | 0 | 100 | 0 | 34.2 |
| #ffd5d2 | 4 | 100 | 91.2 | 17.6 | 1.2 |
| #fce4a6 | 43 | 93.5 | 82 | 33.7 | 1 |
| #e9f2fe | 214 | 91.3 | 95.5 | 8.2 | 0.8 |
| #eed7fc | 277 | 86 | 91.6 | 14.5 | 0.8 |
| #1868db | 215 | 80.2 | 47.6 | 76.5 | 0 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #292a2e | 5.7 | 17.1 | 2 | 82 |
| #505258 | 4.8 | 32.9 | 3.1 | 13 |
| #6b6e76 | 4.9 | 44.1 | 4.3 | 1.9 |
| #5d1f1a | 56.3 | 23.3 | 26.3 | 1 |
| #693200 | 100 | 20.6 | 41.2 | 0.8 |
| #48245d | 44.2 | 25.3 | 22.4 | 0.6 |

## Composition
- Main region **1440px**; prose cap 578px; horizontal bleed: false
- Alignment: 60 distinct left edges, **9** cover 80% of content
- Grid primitives: `4-col: px px px px` ×99 · `6-col: subgrid [] [] [] [] []` ×98 · `3-col: px px px` ×16 · `5-col: px px px px px` ×1
- Density: 2264 visible elements, **2264/screenful**
