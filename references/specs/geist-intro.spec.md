# Spec card — geist-intro

**Source:** https://vercel.com/geist/introduction  
**Captured:** 2026-07-29 · 1440×1075

## Spacing
- Base unit **2px**, 100% of values on scale
- 15 distinct values; steps used: 6, 12, 2, 8, 10, 32, 16, 24, 4, 1, 48, 28
- **Proximity 8×** (median per-group ratio, 9 groups — 9 nested, 0 within-container)
  - typical inside-group gap 0px · typical between-group gap 16px *(independent medians — don't divide these)*
- → space encodes grouping strongly *(confidence: high)*

## Type
- Families: GeistSans, Geist, Geist Mono
- Body **14px**; 7 sizes: 12, 13, 14, 16, 20, 24, 40
- Weights: 400, 500, 600 · **17 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **mixed (ink+size)** (spread — size 0.19, weight 0.17, ink 0.21)

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 14 | 400 | #4d4d4d | 1.43 | 0 | Give feedback |
| 16 | 400 | #4d4d4d | 1.5 | 0 | Learn how to work with our brand assets. |
| 16 | 600 | #171717 | 1.5 | -0.32 | Geist Design System |
| 20 | 400 | #4d4d4d | 1.5 | 0 | Vercel design system for building consistent web |
| 14 | 500 | #171717 | 1.43 | 0 | Foundations |
| 16 | 400 | #171717 | 1.5 | 0 | Select a display theme: |
| 24 | 600 | #8f8f8f | 1.33 | -0.96 | Geist Sans |
| 40 | 600 | #171717 | 1.2 | -2.4 | Geist Design System |
| 13 | 400 | #8f8f8f | 1.54 | 0 | npx create-next-app |
| 14 | 400 | #8f8f8f | 1.43 | 0 | Search Geist |

## Colour & depth
- Page bg #ffffff; max background chroma **0**
- Chromatic area **0%** → accent is scarce
- Neutrals tinted 0/10 → neutrals are near-pure grey (default-ish)
- Depth: 48 bordered / 10 shadowed → **border-led, shadows reserved**
- Radius scale: 6, 33554400, 4, 50, 30 · gradients: 1

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #fafafa | 0 | 0 | 98 | 0 | 102.7 |
| #ffffff | 0 | 0 | 100 | 0 | 9.3 |
| #000000 | 0 | 0 | 0 | 0 | 0.6 |
| #171717 | 0 | 0 | 9 | 0 | 0.1 |
| #f2f2f2 | 0 | 0 | 94.9 | 0 | 0.1 |
| #7d7d7d | 0 | 0 | 49 | 0 | 0 |
| #0062d1 | 212 | 100 | 41 | 82 | 0 |
| #8e4ec6 | 272 | 51.3 | 54.1 | 47.1 | 0 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #4d4d4d | 0 | 30.2 | 0 | 81.1 |
| #171717 | 0 | 9 | 0 | 12.1 |
| #8f8f8f | 0 | 56.1 | 0 | 6.5 |
| #ffffff | 0 | 100 | 0 | 0.3 |

## Composition
- Main region **1440px**; prose cap — (no prose); horizontal bleed: false
- Alignment: 59 distinct left edges, **11** cover 80% of content
- Grid primitives: `2-col: px px` ×3 · `9-col: px px px px px px px px px` ×1
- Density: 579 visible elements, **485/screenful**
