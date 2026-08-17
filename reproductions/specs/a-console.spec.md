# Spec card — a-console

**Source:** a-console.html  
**Captured:** 2026-07-30 · 1440×2177

## Spacing
- Base unit **2px**, 71.4% of values on scale
- 18 distinct values; steps used: 12, 6, 8, 7, 10, 4, 9, 1, 11, 5, 16, 3
- **Proximity 1.5×** (median per-group ratio, 9 groups — 7 nested, 2 within-container)
  - typical inside-group gap 8px · typical between-group gap 12px *(independent medians — don't divide these)*
- → space encodes grouping *(confidence: high)*

## Type
- Families: SF Mono, -apple-system, Arial
- Body **11.5px**; 9 sizes: 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 26
- Weights: 400, 500, 600 · **23 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **ink** (spread — size 0.35, weight 0.17, ink 0.45)
- Prose measure ≈ **86 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 11.5 | 400 | #6d7482 | 1.45 | 0 | dvla-stores · · ref packaging-hierarchy |
| 13.5 | 500 | #e8eaef | — | 0 | Packaging hierarchy: today's two-unit model can' |
| 14 | 400 | #8d94a2 | 1.5 | 0 | Dark-only, dense, keyboard-first. Metadata in mo |
| 10.5 | 400 | #6d7482 | 1.3 | 0 | 01-filtered-list |
| 11.5 | 500 | #a2a9b7 | 1.45 | 0 | decision blocked |
| 12.5 | 400 | #a2a9b7 | 1.45 | 0 | Scroll offset restored but the chips render one  |
| 11 | 600 | #6d7482 | 1 | 1.1 | Needs you |
| 12 | 400 | #a2a9b7 | 1 | 0 | dvla-stores |
| 12.5 | 400 | #6d7482 | — | 0 | Click the frame to pin a note |
| 12 | 600 | #7b8291 | — | 0.96 | A1 — Inbox |

## Colour & depth
- Page bg #0b0d11; max background chroma **66.7**
- Chromatic area **2.9%** → accent is scarce
- Neutrals tinted 11/11 → neutrals are tinted (designed)
- Depth: 54 bordered / 15 shadowed → **border-led, shadows reserved**
- Radius scale: 8, 3, 7, 6, 5, 9 · gradients: 3

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #0f1116 | 223 | 18.9 | 7.3 | 2.7 | 82.4 |
| #0a0c10 | 220 | 23.1 | 5.1 | 2.4 | 31.9 |
| #1d222b | 219 | 19.4 | 14.1 | 5.5 | 23.9 |
| #171b22 | 218 | 19.3 | 11.2 | 4.3 | 23.7 |
| #161920 | 222 | 18.5 | 10.6 | 3.9 | 15.2 |
| #0c0e12 | 220 | 20 | 5.9 | 2.4 | 3.2 |
| #1b1f27 | 220 | 18.2 | 12.9 | 4.7 | 2.8 |
| #ff5566 | 354 | 100 | 66.7 | 66.7 | 2.5 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #6d7482 | 8.8 | 46.9 | 8.2 | 44.8 |
| #e8eaef | 17.9 | 92.4 | 2.7 | 24.8 |
| #8d94a2 | 10.1 | 59.4 | 8.2 | 13.5 |
| #a2a9b7 | 12.7 | 67.6 | 8.2 | 12.3 |
| #7b8291 | 9.1 | 52.5 | 8.6 | 1.7 |
| #e9ebef | 15.8 | 92.5 | 2.4 | 1.3 |

## Composition
- Main region **1440px**; prose cap 600px; horizontal bleed: true
- Alignment: 47 distinct left edges, **22** cover 80% of content
- Grid primitives: `4-col: px px px px` ×8 · `2-col: px px` ×5
- Density: 247 visible elements, **102/screenful**
