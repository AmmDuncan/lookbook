# Spec card — linear-docs

**Source:** https://linear.app/docs/creating-issues  
**Captured:** 2026-07-29 · 1440×6609

## Spacing
- Base unit **2px**, 87.4% of values on scale
- 22 distinct values; steps used: 1, 3, 16, 8, 12, 5, 2, 6, 4, 24, 56, 20
- **Proximity 3.24×** (median per-group ratio, 10 groups — 6 nested, 4 within-container)
  - typical inside-group gap 10px · typical between-group gap 22px *(independent medians — don't divide these)*
- → space encodes grouping strongly *(confidence: high)*

## Type
- Families: Inter Variable, Berkeley Mono
- Body **15px**; 9 sizes: 12, 13, 13.1, 14, 15, 17, 20, 24, 32
- Weights: 400, 510, 590 · **19 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **mixed (size+weight)** (spread — size 0.19, weight 0.18, ink 0.12)
- Prose measure ≈ **87 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 15 | 400 | #d0d6e0 | 1.6 | -0.17 | Creating issues is the most common action taken  |
| 13.1 | 400 | #d0d6e0 | 1.3 | -0.17 | title |
| 13 | 400 | #8a8f98 | 1.5 | -0.13 | Previous |
| 14 | 510 | #8a8f98 | 1.5 | -0.18 | Getting started |
| 15 | 590 | #f7f8f8 | 1.6 | -0.17 | Create new issue |
| 20 | 590 | #f7f8f8 | 1.6 | 0 | Create a recurring issue |
| 15 | 510 | #f7f8f8 | 1.6 | -0.17 | Creating a recurring issue from the issue compos |
| 15 | 400 | #f7f8f8 | 1.6 | -0.17 | https://linear.new |
| 24 | 590 | #f7f8f8 | 1.33 | -0.29 | Overview |
| 12 | 510 | #d0d6e0 | — | -0.17 | Option/Alt |

## Colour & depth
- Page bg #08090a; max background chroma **1.2**
- Chromatic area **0%** → accent is scarce
- Neutrals tinted 4/8 → neutrals are near-pure grey (default-ish)
- Depth: 62 bordered / 14 shadowed → **border-led, shadows reserved**
- Radius scale: 4, 8, 5, 9999 · gradients: 0

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #08090a | 210 | 11.1 | 3.5 | 0.8 | 103.6 |
| #1c1c1f | 240 | 5.1 | 11.6 | 1.2 | 5 |
| #e5e5e6 | 240 | 2 | 90 | 0.4 | 0 |
| #3e3e44 | 240 | 4.6 | 25.5 | 2.4 | 0 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #d0d6e0 | 20.5 | 84.7 | 6.3 | 79.2 |
| #f7f8f8 | 6.7 | 97.1 | 0.4 | 12.1 |
| #8a8f98 | 6.4 | 56.9 | 5.5 | 8.6 |
| #08090a | 11.1 | 3.5 | 0.8 | 0.1 |

## Composition
- Main region **1440px**; prose cap 650px; horizontal bleed: false
- Alignment: 71 distinct left edges, **11** cover 80% of content
- Grid primitives: none
- Density: 568 visible elements, **77/screenful**
