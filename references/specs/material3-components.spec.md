# Spec card — material3-components

**Source:** https://m3.material.io/components/buttons/overview  
**Captured:** 2026-07-29 · 1440×900

## Spacing
- Base unit **4px**, 97.9% of values on scale
- 17 distinct values; steps used: 1, 16, 12, 8, 4, 20, 2, 24, 56, 14, 104, 64
- **Proximity 2.25×** (median per-group ratio, 10 groups — 8 nested, 2 within-container)
  - typical inside-group gap 16px · typical between-group gap 24px *(independent medians — don't divide these)*
- → space encodes grouping strongly *(confidence: high)*

## Type
- Families: Google Sans Text, Google Symbols, Google Sans
- Body **16px**; 9 sizes: 11, 12, 14, 16, 22, 24, 40, 57, 96
- Weights: 400, 475, 500, 600 · **24 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **size** (spread — size 0.78, weight 0.17, ink 0.44)
- Prose measure ≈ **95 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 16 | 400 | #1c1b1d | 1 | 0 | android |
| 14 | 400 | #4d4256 | 1.43 | 0 | Availability & resources |
| 16 | 500 | #6442d6 | 1.5 | 0 | Skip to main content |
| 24 | 400 | #4d4256 | 1 | 0 | search |
| 16 | 400 | #4d4256 | 1 | 0 | language |
| 14 | 500 | #6442d6 | 1.71 | 0 | Design Kit (Figma) |
| 12 | 400 | #f2f2f2 | 1.33 | 0.1 | Copy link |
| 14 | 500 | #4d4256 | 1.43 | 0 | Type |
| 57 | 475 | #1c1b1d | 1.12 | 0 | Availability & resources |
| 12 | 500 | #0f5223 | 1.33 | 0.1 | Available |

## Colour & depth
- Page bg transparent (inherits canvas); max background chroma **16.5**
- Chromatic area **1.6%** → accent is scarce
- Neutrals tinted 8/11 → neutrals are tinted (designed)
- Depth: 4 bordered / 0 shadowed → **borders only, zero resting shadows**
- Radius scale: 4, 16, 8, 40, 24, 32 · gradients: 0

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #fefbff | 285 | 100 | 99.2 | 1.6 | 109.1 |
| #f8f1f6 | 317 | 33.3 | 95.9 | 2.7 | 57.6 |
| #f5eff1 | 340 | 23.1 | 94.9 | 2.4 | 27.9 |
| #f2ecee | 340 | 18.7 | 93.7 | 2.4 | 6.1 |
| #c4eed0 | 137 | 55.3 | 85.1 | 16.5 | 0.9 |
| #dcdaf5 | 244 | 57.4 | 90.8 | 10.6 | 0.5 |
| #f1d3f9 | 287 | 76 | 90.2 | 14.9 | 0.2 |
| #e9eef6 | 217 | 41.9 | 93.9 | 5.1 | 0.2 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #1c1b1d | 3.6 | 11 | 0.8 | 55 |
| #4d4256 | 13.2 | 29.8 | 7.8 | 24.8 |
| #6442d6 | 64.3 | 54.9 | 58 | 13.1 |
| #f2f2f2 | 0 | 94.9 | 0 | 3.2 |
| #0f5223 | 69.1 | 19 | 26.3 | 2.3 |
| #21182b | 28.4 | 13.1 | 7.5 | 1.2 |

## Composition
- Main region **1440px**; prose cap 760px; horizontal bleed: false
- Alignment: 54 distinct left edges, **25** cover 80% of content
- Grid primitives: `4-col: px px px px` ×11 · `2-col: px px` ×1 · `6-col: px px px px px px` ×1
- Density: 419 visible elements, **419/screenful**
