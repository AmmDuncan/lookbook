# Spec card — mui-components

**Source:** https://mui.com/material-ui/all-components/  
**Captured:** 2026-07-29 · 1440×5658

## Spacing
- Base unit **2px**, 88.2% of values on scale
- 22 distinct values; steps used: 4, 6, 16, 12, 7, 36, 8, 0, 20, 10, 5, 2
- **Proximity 3×** (median per-group ratio, 13 groups — 10 nested, 3 within-container)
  - typical inside-group gap 6px · typical between-group gap 8px *(independent medians — don't divide these)*
- → space encodes grouping strongly *(confidence: high)*

## Type
- Families: IBM Plex Sans, General Sans
- Body **14px**; 9 sizes: 10, 11, 12, 13, 14, 16, 18, 26, 36
- Weights: 400, 500, 600, 700 · **25 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **mixed (weight+size)** (spread — size 0.3, weight 0.33, ink 0.3)
- Prose measure ≈ **70.5 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 14 | 600 | #1a1e23 | 1.5 | 0 | Getting started |
| 14 | 500 | #303741 | 1.5 | 0 | Autocomplete |
| 16 | 400 | #1a1e23 | 1.63 | 0 | Material UI aims to provide building blocks for  |
| 13 | 600 | #1a1e23 | 1.5 | 0 | No guidelines |
| 14 | 400 | #1a1e23 | 1.5 | 0 | We use cookies to understand site usage and impr |
| 12 | 500 | #006bd6 | 1.5 | 0 | 🚀 Material UI and MUI X v9 are out! Check out t |
| 13 | 600 | #0073e6 | 1.5 | 0 |  |
| 11 | 600 | #576375 | 1.5 | 1.6 | Inputs |
| 26 | 600 | #1a1e23 | 1.5 | 0.1 | Inputs |
| 13 | 500 | #1a1e23 | 1.5 | 0 | Inputs |

## Colour & depth
- Page bg #ffffff; max background chroma **7.8**
- Chromatic area **0.5%** → accent is scarce
- Neutrals tinted 4/9 → neutrals are near-pure grey (default-ish)
- Depth: 202 bordered / 75 shadowed → **shadow-led**
- Radius scale: 6, 12, 16, 8, 10, 7 · gradients: 59

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #ffffff | 0 | 0 | 100 | 0 | 33.4 |
| #ebf5ff | 210 | 100 | 96.1 | 7.8 | 0.6 |
| #f5f7f7 | 180 | 11.1 | 96.5 | 0.8 | 0.5 |
| #cde6ff | 210 | 100 | 90.2 | 19.6 | 0.4 |
| #f7f7f8 | 240 | 6.7 | 97.1 | 0.4 | 0.1 |
| #0073e6 | 210 | 100 | 45.1 | 90.2 | 0.1 |
| #ebebeb | 0 | 0 | 92.2 | 0 | 0 |
| #0076e2 | 209 | 100 | 44.3 | 88.6 | 0 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #1a1e23 | 14.8 | 12 | 3.5 | 60.2 |
| #303741 | 15 | 22.2 | 6.7 | 25.6 |
| #006bd6 | 100 | 42 | 83.9 | 6.1 |
| #0073e6 | 100 | 45.1 | 90.2 | 3.3 |
| #576375 | 14.7 | 40 | 11.8 | 3 |
| #0f1214 | 14.3 | 6.9 | 2 | 0.8 |

## Composition
- Main region **1440px**; prose cap 778px; horizontal bleed: false
- Alignment: 53 distinct left edges, **13** cover 80% of content
- Grid primitives: `2-col: px px` ×1
- Density: 868 visible elements, **138/screenful**
