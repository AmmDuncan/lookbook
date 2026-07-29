# Spec card — excalidraw-app

**Source:** https://excalidraw.com/  
**Captured:** 2026-07-29 · 1440×900

## Spacing
- Base unit **2px**, 93.8% of values on scale
- 14 distinct values; steps used: 8, 10, 12, 4, 16, 1, 3, 20
- **Proximity 15.75×** (median per-group ratio, 9 groups — 5 nested, 4 within-container)
  - typical inside-group gap 8px · typical between-group gap 31.5px *(independent medians — don't divide these)*
- → space encodes grouping strongly *(confidence: high)*

## Type
- Families: Assistant, Arial, Excalifont, monospace
- Body **18px**; 8 sizes: 10, 12, 13.3, 14, 16, 18, 24, 32
- Weights: 400, 500, 700 · **13 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **mixed (ink+size)** (spread — size 0.58, weight 0.17, ink 0.61)
- Prose measure ≈ **51 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 18 | 400 | #b8b8b8 | 1.2 | 0 | Your drawings are saved in your browser's storag |
| 16 | 400 | #b8b8b8 | — | 0 | Export, preferences, languages, ... |
| 12 | 400 | #b8b8b8 | — | 0 | Cmd+O |
| 14 | 400 | #999999 | — | 0 | Open |
| 10 | 400 | #b8b8b8 | — | 0 | Scroll wheel |
| 24 | 700 | #1b1b1f | — | 0 | Shapes |
| 16 | 400 | #1b1b1f | — | 0 | Drawing canvas |
| 13.3 | 500 | #1b1b1f | — | 0 | Excalidraw+ |
| 32 | 700 | #000000 | — | 0 | Excalidraw |
| 14 | 500 | #999999 | — | 0 | Sign up |

## Colour & depth
- Page bg transparent (inherits canvas); max background chroma **3.1**
- Chromatic area **0.2%** → accent is scarce
- Neutrals tinted 3/8 → neutrals are near-pure grey (default-ish)
- Depth: 7 bordered / 8 shadowed → **shadow-led**
- Radius scale: 8, 6, 4 · gradients: 0

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #ffffff | 0 | 0 | 100 | 0 | 2.4 |
| #ececf4 | 240 | 26.7 | 94.1 | 3.1 | 1.1 |
| #6965db | 242 | 62.1 | 62.7 | 46.3 | 0.1 |
| #e0dfff | 242 | 100 | 93.7 | 12.5 | 0.1 |
| #f1f0ff | 244 | 100 | 97.1 | 5.9 | 0 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #b8b8b8 | 0 | 72.2 | 0 | 76 |
| #1b1b1f | 6.9 | 11.4 | 1.6 | 11.7 |
| #999999 | 0 | 60 | 0 | 8.6 |
| #000000 | 0 | 0 | 0 | 2.4 |
| #ffffff | 0 | 100 | 0 | 1.2 |
| #030064 | 100 | 19.6 | 39.2 | 0.2 |

## Composition
- Main region **1440px**; prose cap 455px; horizontal bleed: false
- Alignment: 43 distinct left edges, **26** cover 80% of content
- Grid primitives: `3-col: px px px` ×6 · `15-col: px px px px px px px px px px px px px px px` ×1 · `2-col: px px` ×1
- Density: 247 visible elements, **247/screenful**
