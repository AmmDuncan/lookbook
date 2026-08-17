# Spec card — overlay-directions

**Source:** /Users/ammielyawson/work/tools/ammiels-bot-overlay/design/overlay-directions.html  
**Captured:** 2026-08-13 · 1440×922

## Spacing
- Base unit **2px**, 55.4% of values on scale
- 16 distinct values; steps used: 7, 11, 8, 16, 6, 9, 10, 12, 4, 14, 2, 13
- **Proximity 2.54×** (median per-group ratio, 16 groups — 8 nested, 8 within-container)
  - typical inside-group gap 4px · typical between-group gap 11px *(independent medians — don't divide these)*
- → space encodes grouping strongly *(confidence: high)*

## Type
- Families: -apple-system, ui-monospace
- Body **12px**; 5 sizes: 11, 12, 13, 16, 20
- Weights: 400, 500, 600, 700 · **16 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **ink** (spread — size 0.24, weight 0.33, ink 0.41)
- Prose measure ≈ **67 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 12 | 400 | #4a4e57 | 1.55 | 0 | Identity and the buttons come first; what the se |
| 11 | 400 | #787e88 | — | 0 | pulled from Case Review & Action-Center Studies  |
| 13 | 400 | #4a4e57 | 1.6 | 0 | Same tokens in all three: one light paper surfac |
| 13 | 600 | #16171a | — | -0.13 | Waiting on you |
| 13 | 400 | #16171a | 1.45 | 0 | The bot wants to . |
| 16 | 700 | #16171a | — | -0.16 | Verdict first |
| 12 | 500 | #ffffff | — | 0 | Allow once |
| 12 | 400 | #16171a | — | 0 | Open |
| 12 | 400 | #787e88 | — | 0 | Later |
| 11 | 400 | #3b3bc4 | — | 0.66 | DIRECTION A |

## Colour & depth
- Page bg #e8e8e4; max background chroma **53.7**
- Chromatic area **2%** → accent is scarce
- Neutrals tinted 9/11 → neutrals are tinted (designed)
- Depth: 38 bordered / 3 shadowed → **border-led, shadows reserved**
- Radius scale: 7, 6, 50, 12, 4, 8 · gradients: 0

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #ffffff | 0 | 0 | 100 | 0 | 48.4 |
| #fbfbff | 240 | 100 | 99.2 | 1.6 | 7.8 |
| #f4f4f1 | 60 | 12 | 95.1 | 1.2 | 5.6 |
| #3b3bc4 | 240 | 53.7 | 50 | 53.7 | 1.9 |
| #fbf3dc | 45 | 79.5 | 92.4 | 12.2 | 0.1 |
| #16171a | 225 | 8.3 | 9.4 | 1.6 | 0.1 |
| #e3e3de | 60 | 8.2 | 88 | 2 | 0.1 |
| #ededfb | 240 | 63.6 | 95.7 | 5.5 | 0 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #4a4e57 | 8.1 | 31.6 | 5.1 | 54 |
| #787e88 | 6.3 | 50.2 | 6.3 | 21.9 |
| #16171a | 8.3 | 9.4 | 1.6 | 19.6 |
| #ffffff | 0 | 100 | 0 | 2.3 |
| #3b3bc4 | 53.7 | 50 | 53.7 | 1.6 |
| #a32f2f | 55.2 | 41.2 | 45.5 | 0.3 |

## Composition
- Main region **1360px**; prose cap 660px; horizontal bleed: false
- Alignment: 28 distinct left edges, **10** cover 80% of content
- Grid primitives: none
- Density: 123 visible elements, **120/screenful**
