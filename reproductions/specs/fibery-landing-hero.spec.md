# Spec card — fibery-landing-hero

**Source:** reproductions/fibery-landing-hero.html  
**Captured:** 2026-07-29 · 1440×900

## Spacing
- Base unit **2px**, 100% of values on scale
- 15 distinct values; steps used: 8, 6, 10, 12, 16, 24, 40, 2, 32
- **Proximity 2×** (median per-group ratio, 8 groups — 1 nested, 7 within-container)
  - typical inside-group gap 8px · typical between-group gap 14px *(independent medians — don't divide these)*
- → space encodes grouping strongly *(confidence: high)*

## Type
- Families: Archivo
- Body **18px**; 8 sizes: 8, 9, 12, 15, 16, 18, 19, 58
- Weights: 400, 500, 600, 700, 800 · **13 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **size** (spread — size 1.08, weight 0.5, ink 0.9)
- Prose measure ≈ **53 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 18 | 400 | #5b6068 | 1.55 | 0 | Fibery is a work platform that replaces scattere |
| 15 | 500 | #3a3d44 | 1.5 | 0 | Solutions |
| 18 | 700 | #16181d | 1.5 | -0.18 | Product |
| 9 | 600 | #9aa0ab | 1.5 | 0.18 | Roadmap |
| 58 | 800 | #16181d | 1.02 | -1.74 | Your company's operating system |
| 12 | 600 | #2f8f57 | 1.5 | 0 | 6 months for free |
| 15 | 600 | #ffffff | 1.5 | 0 | Sign up for free |
| 16 | 600 | #ffffff | 1.5 | 0 | Sign up for free |
| 16 | 600 | #3a5bd9 | 1.5 | 0 | Book a demo |
| 19 | 700 | #16181d | 1.5 | -0.19 | Fibery |

## Colour & depth
- Page bg #ffffff; max background chroma **62.4**
- Chromatic area **2.3%** → accent is scarce
- Neutrals tinted 8/11 → neutrals are tinted (designed)
- Depth: 12 bordered / 4 shadowed → **shadow-led**
- Radius scale: 50, 4, 3, 6, 12, 11 · gradients: 7

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #ffffff | 0 | 0 | 100 | 0 | 39.4 |
| #eceef3 | 223 | 22.6 | 93.9 | 2.7 | 2.4 |
| #e3e7f7 | 228 | 55.6 | 92.9 | 7.8 | 0.7 |
| #3a5bd9 | 228 | 67.7 | 53.9 | 62.4 | 0.6 |
| #16181d | 223 | 13.7 | 10 | 2.7 | 0.5 |
| #fdf0c8 | 45 | 93 | 88.8 | 20.8 | 0.4 |
| #d8ecfb | 206 | 81.4 | 91.6 | 13.7 | 0.4 |
| #e6e0fb | 253 | 77.1 | 93.1 | 10.6 | 0.4 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #5b6068 | 6.7 | 38.2 | 5.1 | 34.7 |
| #16181d | 13.7 | 10 | 2.7 | 23.4 |
| #3a3d44 | 7.9 | 24.7 | 3.9 | 12.5 |
| #ffffff | 0 | 100 | 0 | 10.7 |
| #9aa0ab | 9.2 | 63.7 | 6.7 | 10.1 |
| #2f8f57 | 50.5 | 37.3 | 37.6 | 5 |

## Composition
- Main region **1440px**; prose cap — (no prose); horizontal bleed: false
- Alignment: 51 distinct left edges, **34** cover 80% of content
- Grid primitives: `2-col: px px` ×1 · `4-col: px px px px` ×1
- Density: 131 visible elements, **131/screenful**
