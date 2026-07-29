# Spec card — radix-themes

**Source:** https://www.radix-ui.com/themes/docs/components/button  
**Captured:** 2026-07-29 · 1440×6484

## Spacing
- Base unit **4px**, 99.2% of values on scale
- 15 distinct values; steps used: 8, 12, 4, 1, 16, 3, 24, 2, 10, 40, 48, 64
- **Proximity 8×** (median per-group ratio, 43 groups — 43 nested, 0 within-container)
  - typical inside-group gap 0px · typical between-group gap 8px *(independent medians — don't divide these)*
- → space encodes grouping strongly *(confidence: high)*

## Type
- Families: soehneMono, untitledSans, -apple-system
- Body **13.3px**; 9 sizes: 12, 12.6, 13.3, 14, 14.4, 16, 18, 24, 35
- Weights: 400, 500, 700 · **29 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **ink** (spread — size 0.27, weight 0.17, ink 0.41)
- Prose measure ≈ **91 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 13.3 | 400 | #1c2024 | 1.65 | 0 | Bookmark |
| 16 | 400 | #1c2024 | 1.5 | 0 | Radix Homepage |
| 13.3 | 400 | #3a5bc7 | 1.65 | 0 | Button |
| 14 | 400 | #1c2024 | 1.43 | 0 | Documentation |
| 13.3 | 400 | #cb1d63 | 1.65 | 0 | align |
| 13.3 | 400 | #1f2d5c | 1.65 | 0 | center |
| 14 | 400 | #000613 | 1.14 | 0.14 | Primitives |
| 12.6 | 400 | #000613 | 1.58 | -0.09 | boolean |
| 14 | 500 | #002bb7 | 1.43 | 0 | Edit profile |
| 16 | 400 | #002bb7 | 1.5 | 0 | View source |

## Colour & depth
- Page bg transparent (inherits canvas); max background chroma **94.5**
- Chromatic area **1.2%** → accent is scarce
- Neutrals tinted 6/10 → neutrals are tinted (designed)
- Depth: 1 bordered / 29 shadowed → **shadow-led**
- Radius scale: 999, 4, 3, 8, 6, 7 · gradients: 4

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #ffffff | 0 | 0 | 100 | 0 | 108.9 |
| #f7f9ff | 225 | 100 | 98.4 | 3.1 | 32.8 |
| #0047f1 | 222 | 100 | 47.3 | 94.5 | 0.5 |
| #000033 | 240 | 100 | 10 | 20 | 0.4 |
| #3e63dd | 226 | 70 | 55.5 | 62.4 | 0.2 |
| #0044ff | 224 | 100 | 50 | 100 | 0.1 |
| #1c2024 | 210 | 12.5 | 12.5 | 3.1 | 0.1 |
| #f5f7ff | 228 | 100 | 98 | 3.9 | 0.1 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #1c2024 | 12.5 | 12.5 | 3.1 | 49.7 |
| #3a5bc7 | 55.7 | 50.4 | 55.3 | 14.1 |
| #cb1d63 | 75 | 45.5 | 68.2 | 10.9 |
| #000613 | 100 | 3.7 | 7.5 | 8.8 |
| #002bb7 | 100 | 35.9 | 71.8 | 6.6 |
| #1f2d5c | 49.6 | 24.1 | 23.9 | 6 |

## Composition
- Main region **1440px**; prose cap 730px; horizontal bleed: false
- Alignment: 88 distinct left edges, **15** cover 80% of content
- Grid primitives: none
- Density: 2106 visible elements, **292/screenful**
