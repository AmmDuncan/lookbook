# Spec card — index

**Source:** index.html  
**Captured:** 2026-08-17 · 1440×2951

## Spacing
- Base unit **2px**, 93.4% of values on scale
- 12 distinct values; steps used: 16, 8, 2, 6, 12, 1, 11, 10, 7, 44, 14
- **Proximity 6×** (median per-group ratio, 11 groups — 6 nested, 5 within-container)
  - typical inside-group gap 6px · typical between-group gap 14px *(independent medians — don't divide these)*
- → space encodes grouping strongly *(confidence: high)*

## Type
- Families: Inter, Roboto Mono
- Body **13px**; 6 sizes: 11, 12, 13, 14, 18, 26
- Weights: 400, 600, 700 · **22 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **weight** (spread — size 0.22, weight 0.33, ink 0.23)
- Prose measure ≈ **138 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 13 | 400 | #525252 | 1.55 | 0 | ~100px rows for six short fields · two bordered  |
| 12 | 400 | #404040 | — | 0 | Regular |
| 14 | 600 | #171717 | — | 0 | Adenta |
| 14 | 400 | #525252 | — | 0 | Same data, same tokens, three different structur |
| 14 | 400 | #171717 | — | 0 | Greater Accra |
| 11 | 600 | #525252 | — | 0.66 | Branch |
| 13 | 600 | #171717 | 1.55 | 0 | Same columns, half the height. |
| 12 | 400 | #525252 | — | 0 | Adenta |
| 14 | 400 | #737373 | — | 0 | Active |
| 18 | 700 | #171717 | — | -0.18 | What ships today |

## Colour & depth
- Page bg #f4f5f7; max background chroma **2**
- Chromatic area **0%** → accent is scarce
- Neutrals tinted 3/10 → neutrals are near-pure grey (default-ish)
- Depth: 108 bordered / 0 shadowed → **borders only, zero resting shadows**
- Radius scale: 999, 8, 12 · gradients: 0

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #ffffff | 0 | 0 | 100 | 0 | 70.5 |
| #f5f5f5 | 0 | 0 | 96.1 | 0 | 7.7 |
| #eef0f3 | 216 | 17.2 | 94.3 | 2 | 6.9 |
| #fffbeb | 48 | 100 | 96.1 | 7.8 | 0.1 |
| #e8f5ee | 148 | 39.4 | 93.5 | 5.1 | 0.1 |
| #dbeafe | 214 | 94.6 | 92.7 | 13.7 | 0 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #525252 | 0 | 32.2 | 0 | 49.3 |
| #171717 | 0 | 9 | 0 | 28.1 |
| #404040 | 0 | 25.1 | 0 | 14.7 |
| #737373 | 0 | 45.1 | 0 | 4.4 |
| #b45309 | 90.5 | 37.1 | 67.1 | 1.1 |
| #a3a3a3 | 0 | 63.9 | 0 | 1.1 |

## Composition
- Main region **1340px**; prose cap 900px; horizontal bleed: false
- Alignment: 48 distinct left edges, **17** cover 80% of content
- Grid primitives: none
- Density: 554 visible elements, **169/screenful**
