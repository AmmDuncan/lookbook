# Spec card — ant-components

**Source:** https://ant.design/components/overview/  
**Captured:** 2026-07-29 · 1440×7067

## Spacing
- Base unit **4px**, 96.4% of values on scale
- 20 distinct values; steps used: 12, 4, 36, 8, 7, 24, 16, 38, 2, 15, 48, 32
- **Proximity 4×** (median per-group ratio, 16 groups — 14 nested, 2 within-container)
  - typical inside-group gap 4px · typical between-group gap 16px *(independent medians — don't divide these)*
- → space encodes grouping strongly *(confidence: high)*

## Type
- Families: AlibabaSans, Avenir, sans-serif, ui-monospace
- Body **14px**; 8 sizes: 12, 12.6, 14, 16, 16.8, 18, 24, 32
- Weights: 400, 500, 600, 700 · **14 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **weight** (spread — size 0, weight 0.33, ink 0)
- Prose measure ≈ **133 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 14 | 400 | #000000 | 4.57 | 0 | Design |
| 14 | 600 | #000000 | 1.57 | 0 | Button |
| 24 | 500 | #000000 | 1.33 | 0 | General |
| 14 | 400 | #1677ff | 4.57 | 0 | Components |
| 16 | 500 | #000000 | 1.5 | 0 | Resources |
| 32 | 600 | #000000 | 1.21 | 0 | Components Overview |
| 12 | 400 | #52c41a | 1.67 | 0 | v6.5.2 |
| 12 | 500 | #000000 | 1.67 | 0 |  |
| 18 | 700 | #000000 | 1.78 | -0.18 | Ant Design |
| 12 | 400 | #cf1322 | 1.67 | 0 | DEPRECATED |

## Colour & depth
- Page bg #ffffff; max background chroma **3.9**
- Chromatic area **0.1%** → accent is scarce
- Neutrals tinted 3/8 → neutrals are near-pure grey (default-ish)
- Depth: 185 bordered / 3 shadowed → **border-led, shadows reserved**
- Radius scale: 8, 4, 50, 6, 20 · gradients: 0

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #ffffff | 0 | 0 | 100 | 0 | 47.4 |
| #f0f3fa | 222 | 50 | 96.1 | 3.9 | 7.8 |
| #e6f4ff | 206 | 100 | 95.1 | 9.8 | 0.1 |
| #f5f5f5 | 0 | 0 | 96.1 | 0 | 0 |
| #f6ffed | 90 | 100 | 96.5 | 7.1 | 0 |
| #fff1f0 | 4 | 100 | 97.1 | 5.9 | 0 |
| #000000 | 0 | 0 | 0 | 0 | 0 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #000000 | 0 | 0 | 0 | 96.2 |
| #1677ff | 100 | 54.3 | 91.4 | 2.5 |
| #52c41a | 76.6 | 43.5 | 66.7 | 0.7 |
| #cf1322 | 83.2 | 44.3 | 73.7 | 0.4 |
| #ffffff | 0 | 100 | 0 | 0.1 |

## Composition
- Main region **1440px**; prose cap 928px; horizontal bleed: false
- Alignment: 95 distinct left edges, **17** cover 80% of content
- Grid primitives: none
- Density: 1531 visible elements, **195/screenful**
