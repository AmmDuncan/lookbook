# Spec card — spectrum-components

**Source:** https://spectrum.adobe.com/page/button/  
**Captured:** 2026-07-29 · 1440×16737

## Spacing
- Base unit **4px**, 84.2% of values on scale
- 18 distinct values; steps used: 16, 24, 10, 12, 7, 80, 64, 20, 4, 33, 6, 8
- **Proximity 2.46×** (median per-group ratio, 20 groups — 10 nested, 10 within-container)
  - typical inside-group gap 17px · typical between-group gap 33px *(independent medians — don't divide these)*
- → space encodes grouping strongly *(confidence: high)*

## Type
- Families: adobe-clean, adobe-clean-serif, monospace
- Body **16px**; 7 sizes: 12, 14, 16, 18, 20, 22, 58
- Weights: 400, 700, 800 · **13 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **weight** (spread — size 0.19, weight 0.5, ink 0.14)
- Prose measure ≈ **59 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 16 | 400 | #222222 | 1.5 | 0 | Buttons should always have a label, unless they  |
| 14 | 400 | #464646 | 1.5 | 0 | Includes all interactive states that are applica |
| 14 | 400 | #222222 | 1.5 | 0 | Version 7.0.1 |
| 18 | 700 | #000000 | 1.3 | 0 | Label and icon |
| 16 | 700 | #000000 | 1.3 | 0 | All interactive states |
| 18 | 400 | #222222 | 1.5 | 0 | Buttons allow users to perform an action or to n |
| 14 | 700 | #222222 | 1.3 | 0 | Property |
| 22 | 700 | #000000 | 1.3 | 0 | Table of contents |
| 16 | 400 | #0000ee | 1.5 | 0 | Spectrum color theme |
| 18 | 400 | #0000ee | 1.5 | 0 | Anatomy |

## Colour & depth
- Page bg transparent (inherits canvas); max background chroma **21.2**
- Chromatic area **0.6%** → accent is scarce
- Neutrals tinted 1/9 → neutrals are near-pure grey (default-ish)
- Depth: 82 bordered / 0 shadowed → **borders only, zero resting shadows**
- Radius scale: 4, 1 · gradients: 0

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #ffffff | 0 | 0 | 100 | 0 | 82.5 |
| #f8f8f8 | 0 | 0 | 97.3 | 0 | 15.6 |
| #f4f6fc | 225 | 57.1 | 97.3 | 3.1 | 9.4 |
| #afbfe5 | 222 | 50.9 | 79.2 | 21.2 | 0.6 |
| #000000 | 0 | 0 | 0 | 0 | 0.3 |
| #222222 | 0 | 0 | 13.3 | 0 | 0.2 |
| #d5d5d5 | 0 | 0 | 83.5 | 0 | 0 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #222222 | 0 | 13.3 | 0 | 75.1 |
| #464646 | 0 | 27.5 | 0 | 14.1 |
| #000000 | 0 | 0 | 0 | 8.8 |
| #0000ee | 100 | 46.7 | 93.3 | 2 |

## Composition
- Main region **1440px**; prose cap 976px; horizontal bleed: false
- Alignment: 40 distinct left edges, **9** cover 80% of content
- Grid primitives: none
- Density: 916 visible elements, **49/screenful**
