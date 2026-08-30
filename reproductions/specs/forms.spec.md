# Spec card — forms

**Source:** reproductions/forms.html  
**Captured:** 2026-07-29 · 1440×4170

## Spacing
- Base unit **2px**, 100% of values on scale
- 18 distinct values; steps used: 6, 10, 14, 12, 20, 8, 4, 28, 1, 24, 36, 64
- **Proximity 3×** (median per-group ratio, 33 groups — 18 nested, 15 within-container)
  - typical inside-group gap 6px · typical between-group gap 14px *(independent medians — don't divide these)*
- → space encodes grouping strongly *(confidence: high)*

## Type
- Families: Geist, Geist Mono, monospace
- Body **12.5px**; 12 sizes: 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 15, 16, 19, 40
- Weights: 400, 500, 600, 700 · **26 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **mixed (size+ink)** (spread — size 0.42, weight 0.17, ink 0.38)
- Prose measure ≈ **187 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 12.5 | 400 | #868c96 | 1.5 | 0 | Provision a project and its first environment. |
| 12.5 | 400 | #9aa0a8 | 1.55 | 0 | the control for entry fields; for preference row |
| 10.5 | 400 | #868c96 | 1.5 | 0 | Default · empty |
| 13.5 | 400 | #ededf0 | 1.5 | 0 | Platform |
| 13.5 | 400 | #868c96 | 1.5 | 0 | One believable form holding the whole inventory. |
| 16 | 400 | #9aa0a8 | 1.6 | 0 | The input furniture every build inherits — text, |
| 12 | 400 | #868c96 | 1.5 | 1.68 | Float · form system |
| 13 | 500 | #ededf0 | 1.5 | 0 | Name |
| 10.5 | 400 | #6fe0c0 | 1.5 | 0.84 | Focus |
| 13 | 500 | #9aa0a8 | — | 0 | Preview |

## Colour & depth
- Page bg #08090b; max background chroma **44.7**
- Chromatic area **1.7%** → accent is scarce
- Neutrals tinted 12/13 → neutrals are tinted (designed)
- Depth: 95 bordered / 25 shadowed → **border-led, shadows reserved**
- Radius scale: 8, 50, 6, 5, 12, 10 · gradients: 4

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #0e0f12 | 225 | 12.5 | 6.3 | 1.6 | 18.7 |
| #16181c | 220 | 12 | 9.8 | 2.4 | 4.4 |
| #121317 | 228 | 12.2 | 8 | 2 | 2.9 |
| #e99090 | 0 | 66.9 | 73.9 | 34.9 | 0.9 |
| #73e5bf | 160 | 68.7 | 67.5 | 44.7 | 0.7 |
| #ededf0 | 240 | 9.1 | 93.5 | 1.2 | 0.4 |
| #0a0b0d | 220 | 13 | 4.5 | 1.2 | 0.3 |
| #ffffff | 0 | 0 | 100 | 0 | 0.1 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #868c96 | 7.1 | 55.7 | 6.3 | 59.5 |
| #9aa0a8 | 7.4 | 63.1 | 5.5 | 16.4 |
| #ededf0 | 9.1 | 93.5 | 1.2 | 15.2 |
| #6fe0c0 | 64.6 | 65.7 | 44.3 | 4.7 |
| #e89090 | 65.7 | 73.7 | 34.5 | 2.2 |
| #08090b | 15.8 | 3.7 | 1.2 | 2 |

## Composition
- Main region **1280px**; prose cap 1168px; horizontal bleed: false
- Alignment: 66 distinct left edges, **22** cover 80% of content
- Grid primitives: `2-col: px px` ×2
- Density: 485 visible elements, **105/screenful**
