# Spec card — b-studio

**Source:** b-studio.html  
**Captured:** 2026-07-30 · 1440×2177

## Spacing
- Base unit **2px**, 75.2% of values on scale
- 23 distinct values; steps used: 8, 10, 6, 14, 4, 9, 13, 15, 1, 7, 11, 12
- **Proximity 1.4×** (median per-group ratio, 9 groups — 8 nested, 1 within-container)
  - typical inside-group gap 10px · typical between-group gap 14px *(independent medians — don't divide these)*
- → space encodes grouping *(confidence: high)*

## Type
- Families: -apple-system, SF Mono, Arial
- Body **11.5px**; 12 sizes: 10.5, 11, 11.5, 12, 12.5, 13, 13.3, 13.5, 14, 15, 22, 26
- Weights: 400, 500, 600, 700 · **32 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **ink** (spread — size 0.28, weight 0.33, ink 0.5)
- Prose measure ≈ **86 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 11.5 | 400 | #7d8492 | 1 | 0 | dvla-stores · decision blocked · packaging-hiera |
| 13 | 400 | #4e5663 | — | 0 | dvla-stores |
| 14 | 500 | #14171e | — | -0.07 | Packaging hierarchy: the two-unit model can't ex |
| 14 | 400 | #8d94a2 | 1.5 | 0 | Light app chrome, dark theatre for the media. Na |
| 13.5 | 400 | #7d8492 | — | 0 | 3 things need you. 4 rounds captured in the last |
| 12 | 600 | #7d8492 | — | 0.72 | Needs you |
| 13 | 400 | #7d8492 | — | 0 | Click the frame while it plays to pin at that ti |
| 10.5 | 400 | #8f97a5 | 1.3 | 0 | 01-queue.png |
| 12 | 600 | #7b8291 | — | 0.96 | B1 — Inbox |
| 11 | 400 | #7d8492 | 1.4 | 0 | 0:14 · 61%, 38% |

## Colour & depth
- Page bg #0b0d11; max background chroma **80.8**
- Chromatic area **1.2%** → accent is scarce
- Neutrals tinted 11/12 → neutrals are tinted (designed)
- Depth: 39 bordered / 23 shadowed → **shadow-led**
- Radius scale: 8, 7, 5, 11, 9, 999 · gradients: 3

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #f2f3f6 | 225 | 18.2 | 95.7 | 1.6 | 82.4 |
| #ffffff | 0 | 0 | 100 | 0 | 57.8 |
| #eef0f4 | 220 | 21.4 | 94.5 | 2.4 | 26.8 |
| #12141a | 225 | 18.2 | 8.6 | 3.1 | 24.4 |
| #f7f8fa | 220 | 23.1 | 97.5 | 1.2 | 15.3 |
| #1c2029 | 222 | 18.8 | 13.5 | 5.1 | 1.8 |
| #dfe3ea | 218 | 20.8 | 89.6 | 4.3 | 1.1 |
| #316cff | 223 | 100 | 59.6 | 80.8 | 0.5 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #7d8492 | 8.8 | 53.1 | 8.2 | 36.2 |
| #14171e | 20 | 9.8 | 3.9 | 20.3 |
| #4e5663 | 11.9 | 34.7 | 8.2 | 18.6 |
| #8d94a2 | 10.1 | 59.4 | 8.2 | 13.6 |
| #8f97a5 | 10.9 | 60.4 | 8.6 | 3.1 |
| #7b8291 | 9.1 | 52.5 | 8.6 | 2.1 |

## Composition
- Main region **1440px**; prose cap 600px; horizontal bleed: true
- Alignment: 41 distinct left edges, **18** cover 80% of content
- Grid primitives: `2-col: px px` ×14 · `3-col: px px px` ×12
- Density: 267 visible elements, **110/screenful**
