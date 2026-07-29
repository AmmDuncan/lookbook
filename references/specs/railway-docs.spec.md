# Spec card — railway-docs

**Source:** https://docs.railway.com/guides/services  
**Captured:** 2026-07-29 · 1440×9095

## Spacing
- Base unit **2px**, 99.8% of values on scale
- 19 distinct values; steps used: 6, 12, 2, 8, 20, 16, 24, 4, 10, 28, 32, 48
- **Proximity 3.5×** (median per-group ratio, 12 groups — 8 nested, 4 within-container)
  - typical inside-group gap 8px · typical between-group gap 32px *(independent medians — don't divide these)*
- → space encodes grouping strongly *(confidence: high)*

## Type
- Families: Inter, JetBrains Mono, IBM Plex Serif
- Body **16px**; 7 sizes: 12, 14, 16, 18, 20, 24, 36
- Weights: 400, 500, 600 · **19 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **ink** (spread — size 0.19, weight 0, ink 0.27)
- Prose measure ≈ **81 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 16 | 400 | #65636e | 1.75 | 0 | A Railway service is a deployment target. Under  |
| 14 | 400 | #65636e | 1.43 | 0 | Search... |
| 14 | 400 | #201f27 | — | 0 | Home |
| 24 | 600 | #201f27 | 1.33 | 0 | Types of services |
| 16 | 400 | #201f27 | 1.75 | 0 | You can configure the Railway App in GitHub by c |
| 16 | 500 | #201f27 | 1.75 | 0 | deployment attempts |
| 20 | 600 | #201f27 | 1.4 | 0 | Deploying from a GitHub repo |
| 14 | 400 | #50a14f | 1.63 | 0 | service |
| 14 | 400 | #243c58 | 1.75 | 0 | Private Docker registry deployments require the  |
| 12 | 500 | #65636e | 1.33 | 0 | Previous |

## Colour & depth
- Page bg #f1f0ef; max background chroma **2.4**
- Chromatic area **0.2%** → accent is scarce
- Neutrals tinted 9/12 → neutrals are tinted (designed)
- Depth: 68 bordered / 1 shadowed → **border-led, shadows reserved**
- Radius scale: 6, 4, 8, 33554400 · gradients: 1

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #f1f0ef | 30 | 6.7 | 94.1 | 0.8 | 3.2 |
| #f9f9fc | 240 | 33.3 | 98.2 | 1.2 | 1.3 |
| #f0eff5 | 250 | 23.1 | 94.9 | 2.4 | 1.1 |
| #fafafa | 0 | 0 | 98 | 0 | 0.8 |
| #efeff5 | 240 | 23.1 | 94.9 | 2.4 | 0.4 |
| #f4f9ff | 213 | 100 | 97.8 | 4.3 | 0.3 |
| #59497a | 260 | 25.1 | 38.2 | 19.2 | 0.1 |
| #e2dcf3 | 256 | 48.9 | 90.8 | 9 | 0.1 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #65636e | 5.3 | 41 | 4.3 | 86.1 |
| #201f27 | 11.4 | 13.7 | 3.1 | 11.7 |
| #50a14f | 34.2 | 47.1 | 32.2 | 1.2 |
| #243c58 | 41.9 | 24.3 | 20.4 | 0.5 |
| #ffffff | 0 | 100 | 0 | 0.3 |
| #4078f2 | 87.3 | 60 | 69.8 | 0.3 |

## Composition
- Main region **1440px**; prose cap 650px; horizontal bleed: false
- Alignment: 76 distinct left edges, **8** cover 80% of content
- Grid primitives: `2-col: px px` ×2 · `3-col: px px px` ×1
- Density: 1190 visible elements, **118/screenful**
