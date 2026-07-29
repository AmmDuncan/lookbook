# Spec card — pinterest-gestalt

**Source:** https://gestalt.pinterest.systems/web/overview  
**Captured:** 2026-07-29 · 1440×10786

## Spacing
- Base unit **8px**, 95.5% of values on scale
- 11 distinct values; steps used: 8, 2, 16, 24, 12, 32, 4, 6, 40
- **Proximity 2×** (median per-group ratio, 3 groups — 2 nested, 1 within-container)
  - typical inside-group gap 8px · typical between-group gap 8px *(independent medians — don't divide these)*
- → space encodes grouping strongly *(confidence: low — too few groups to generalise)*

## Type
- Families: -apple-system
- Body **16px**; 4 sizes: 12, 16, 20, 36
- Weights: 400, 600 · **7 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **size** (spread — size 0, weight 0, ink 0)
- Prose measure ≈ **40 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 16 | 400 | #111111 | — | 0 | Information might be outdated. For the latest do |
| 20 | 600 | #111111 | — | 0 | This is Gestalt’s legacy documentation |
| 16 | 600 | #111111 | — | 0 | Get started |
| 12 | 400 | #111111 | — | 0 | © 2026 Pinterest |
| 16 | 600 | #ffffff | — | 0 | Explore Gestalt 2.0 |
| 36 | 600 | #111111 | — | 0 | Web component overview |
| 16 | 400 | #ffffff | — | 0 | Overview |

## Colour & depth
- Page bg transparent (inherits canvas); max background chroma **15.7**
- Chromatic area **27.6%** → accent is dominant
- Neutrals tinted 0/7 → neutrals are near-pure grey (default-ish)
- Depth: 3 bordered / 1 shadowed → **shadow-led**
- Radius scale: 8, 50, 999, 2, 12 · gradients: 0

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #ffffff | 0 | 0 | 100 | 0 | 124.9 |
| #e3fae1 | 115 | 71.4 | 93.1 | 9.8 | 26.5 |
| #f1f1f1 | 0 | 0 | 94.5 | 0 | 5.5 |
| #d7edff | 207 | 100 | 92.2 | 15.7 | 1 |
| #4a4a4a | 0 | 0 | 29 | 0 | 0.8 |
| #efefef | 0 | 0 | 93.7 | 0 | 0.1 |
| #111111 | 0 | 0 | 6.7 | 0 | 0.1 |
| #e60023 | 351 | 100 | 45.1 | 90.2 | 0.1 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #111111 | 0 | 6.7 | 0 | 99.6 |
| #ffffff | 0 | 100 | 0 | 0.4 |

## Composition
- Main region **1440px**; prose cap 660px; horizontal bleed: false
- Alignment: 188 distinct left edges, **13** cover 80% of content
- Grid primitives: `3-col: px px px` ×1
- Density: 2792 visible elements, **233/screenful**
