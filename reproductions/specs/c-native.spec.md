# Spec card — c-native

**Source:** c-native.html  
**Captured:** 2026-07-30 · 1440×2178

## Spacing
- Base unit **2px**, 78.8% of values on scale
- 16 distinct values; steps used: 8, 6, 10, 9, 4, 16, 3, 14, 12, 7, 11, 1
- **Proximity 1.1×** (median per-group ratio, 9 groups — 8 nested, 1 within-container)
  - typical inside-group gap 10px · typical between-group gap 11px *(independent medians — don't divide these)*
- → space encodes little grouping — flat rhythm *(confidence: high)*

## Type
- Families: -apple-system, SF Mono, Arial, monospace
- Body **13.5px**; 12 sizes: 9.5, 10.5, 11, 11.5, 12, 12.5, 13, 13.3, 13.5, 14, 15, 26
- Weights: 400, 500, 600, 700 · **27 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **ink** (spread — size 0.28, weight 0.33, ink 0.48)
- Prose measure ≈ **86 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 13.5 | 500 | #1c1c1e | — | 0 | Packaging hierarchy: the two-unit model can't ex |
| 11.5 | 400 | #55555c | — | 0 | packaging-hierarchy |
| 14 | 400 | #8d94a2 | 1.5 | 0 | macOS-shaped and quiet: source-list sidebar with |
| 12 | 400 | #86868c | 1 | 0 | dvla-stores · decision blocked · |
| 11 | 400 | #86868c | 1 | 0 | 1440×900 |
| 13 | 500 | #1c1c1e | — | 0 | Library |
| 13.3 | 400 | #55555c | — | 0 | Sub-line at 500 still reads heavier than the pri |
| 11.5 | 600 | #86868c | — | 0.57 | Needs you |
| 12 | 600 | #55555c | — | 0 | A — 01-baseline-capture |
| 12.5 | 400 | #1f57e0 | — | 0 | dvla-stores |

## Colour & depth
- Page bg #0b0d11; max background chroma **81.6**
- Chromatic area **2.6%** → accent is scarce
- Neutrals tinted 7/12 → neutrals are near-pure grey (default-ish)
- Depth: 45 bordered / 18 shadowed → **shadow-led**
- Radius scale: 6, 4, 50, 7, 5, 12 · gradients: 3

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #ffffff | 0 | 0 | 100 | 0 | 123.7 |
| #ececf0 | 240 | 11.8 | 93.3 | 1.6 | 82.3 |
| #f6f6f8 | 240 | 12.5 | 96.9 | 0.8 | 32.4 |
| #e6e6ea | 240 | 8.7 | 91 | 1.6 | 12.4 |
| #e9434e | 356 | 79 | 58.8 | 65.1 | 2.1 |
| #dfe1e7 | 225 | 14.3 | 89 | 3.1 | 1 |
| #2f6bff | 223 | 100 | 59.2 | 81.6 | 0.5 |
| #d9dce2 | 220 | 13.4 | 86.9 | 3.5 | 0.2 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #86868c | 2.5 | 53.7 | 2.4 | 27.7 |
| #1c1c1e | 3.4 | 11.4 | 0.8 | 25.9 |
| #55555c | 4 | 34.7 | 2.7 | 22.8 |
| #8d94a2 | 10.1 | 59.4 | 8.2 | 15.1 |
| #1f57e0 | 75.7 | 50 | 75.7 | 3.1 |
| #7b8291 | 9.1 | 52.5 | 8.6 | 2.4 |

## Composition
- Main region **1440px**; prose cap 600px; horizontal bleed: true
- Alignment: 40 distinct left edges, **18** cover 80% of content
- Grid primitives: `3-col: px px px` ×12 · `2-col: px px` ×11 · `4-col: px px px px` ×6
- Density: 295 visible elements, **122/screenful**
