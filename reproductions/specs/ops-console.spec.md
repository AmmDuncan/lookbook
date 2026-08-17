# Spec card — ops-console

**Source:** reproductions/ops-console.html  
**Captured:** 2026-07-29 · 1440×900

## Spacing
- Base unit **2px**, 100% of values on scale
- 9 distinct values; steps used: 10, 6, 8, 1, 4, 2, 16, 12, 14
- **Proximity 2×** (median per-group ratio, 13 groups — 2 nested, 11 within-container)
  - typical inside-group gap 4px · typical between-group gap 8px *(independent medians — don't divide these)*
- → space encodes grouping strongly *(confidence: high)*

## Type
- Families: Geist Mono, Geist, Arial
- Body **12px**; 5 sizes: 10, 11, 12, 13, 22
- Weights: 400, 500, 600 · **30 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **ink** (spread — size 0.24, weight 0.17, ink 0.36)

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 12 | 400 | #e8eaf0 | 1.45 | 0 | 14:02:31.814 |
| 12 | 400 | #9aa0ad | 1.45 | 0 | api-gateway · prod |
| 12 | 400 | #2dd4bf | — | 0 | Live |
| 12 | 400 | #f87171 | 1.45 | 0 | +18ms |
| 11 | 400 | #8a909e | 1 | 0.66 | p99 latency |
| 13 | 500 | #e8eaf0 | 1.45 | 0 | api-gateway |
| 11 | 400 | #9aa0ad | 1.45 | 0 | us-east-1 |
| 10 | 400 | #8a909e | 1.45 | 0 | 3f2a1c9 |
| 13 | 400 | #9aa0ad | 1.45 | 0 | Overview |
| 12 | 500 | #34d399 | 1.45 | 0 | Healthy |

## Colour & depth
- Page bg #0c0e11; max background chroma **87.1**
- Chromatic area **2%** → accent is scarce
- Neutrals tinted 10/10 → neutrals are tinted (designed)
- Depth: 64 bordered / 2 shadowed → **border-led, shadows reserved**
- Radius scale: 4, 3, 50, 10 · gradients: 0

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #0c0e11 | 216 | 17.2 | 5.7 | 2 | 109.7 |
| #111318 | 223 | 17.1 | 8 | 2.7 | 25.6 |
| #161a20 | 216 | 18.5 | 10.6 | 3.9 | 13.3 |
| #232830 | 217 | 15.7 | 16.3 | 5.1 | 9.4 |
| #31d69c | 159 | 66.8 | 51.6 | 64.7 | 0.7 |
| #ffbd21 | 42 | 100 | 56.5 | 87.1 | 0.5 |
| #9d9db1 | 240 | 11.4 | 65.5 | 7.8 | 0.4 |
| #33d9bf | 171 | 68.6 | 52.5 | 65.1 | 0.4 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #e8eaf0 | 21.1 | 92.5 | 3.1 | 54.2 |
| #9aa0ad | 10.4 | 64.1 | 7.5 | 18.9 |
| #8a909e | 9.3 | 58 | 7.8 | 8.7 |
| #f87171 | 90.6 | 70.8 | 52.9 | 5.9 |
| #2dd4bf | 66 | 50.4 | 65.5 | 5.7 |
| #34d399 | 64.4 | 51.6 | 62.4 | 3.5 |

## Composition
- Main region **1440px**; prose cap — (no prose); horizontal bleed: false
- Alignment: 56 distinct left edges, **17** cover 80% of content
- Grid primitives: `2-col: px px` ×1 · `5-col: px px px px px` ×1
- Density: 429 visible elements, **429/screenful**
