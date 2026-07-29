# Spec card — mercury-home

**Source:** https://mercury.com/  
**Captured:** 2026-07-29 · 1440×13012

## Spacing
- Base unit **4px**, 100% of values on scale
- 16 distinct values; steps used: 32, 12, 40, 20, 4, 8, 1, 2, 72, 24, 16, 128
- **Proximity 9.26×** (median per-group ratio, 33 groups — 28 nested, 5 within-container)
  - typical inside-group gap 2px · typical between-group gap 12px *(independent medians — don't divide these)*
- → space encodes grouping strongly *(confidence: high)*

## Type
- Families: arcadia, arcadiaDisplay
- Body **12px**; 10 sizes: 12, 16, 18, 21, 24, 28, 32, 42, 49.3, 65.3
- Weights: 360, 400, 420, 480, 700 · **25 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **size** (spread — size 0.81, weight 0.2, ink 0.16)
- Prose measure ≈ **56 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 12 | 400 | #ededf3 | 1.4 | 0.24 | Disclaimers and footnotes |
| 18 | 360 | #c3c3cc | 1.35 | 0 | Instantly spin up as many virtual cards as you n |
| 16 | 400 | #c3c3cc | 1.4 | 0 | Apply for free checking and savings accounts wit |
| 16 | 420 | #ededf3 | 1 | 0 | Products |
| 18 | 480 | #ededf3 | 1.35 | 0 | Create cards in a couple of clicks |
| 16 | 480 | #c3c3cc | 1.35 | 0 | Cards & expense management |
| 42 | 480 | #ededf3 | 1.15 | 0.42 | Loved by + of themost ambitious entrepreneurs on |
| 32 | 480 | #ededf3 | 1.15 | 0.48 | Banking’s been a headache. Now, it’s a head star |
| 24 | 480 | #ededf3 | 1.2 | 0.48 | Everything you do with money. All in one place. |
| 21 | 480 | #ededf3 | 1.2 | 0.42 | Unlike most financial institutions, Mercury is b |

## Colour & depth
- Page bg transparent (inherits canvas); max background chroma **4.7**
- Chromatic area **0.4%** → accent is scarce
- Neutrals tinted 7/9 → neutrals are tinted (designed)
- Depth: 22 bordered / 1 shadowed → **border-led, shadows reserved**
- Radius scale: 4, 12, 8, 40, 33554400, 32 · gradients: 1

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #171721 | 240 | 17.9 | 11 | 3.9 | 146.9 |
| #1e1e2a | 240 | 16.7 | 14.1 | 4.7 | 3.9 |
| #afb4cd | 230 | 23.1 | 74.5 | 11.8 | 0.2 |
| #9bb4e6 | 220 | 60 | 75.5 | 29.4 | 0.1 |
| #5266eb | 232 | 79.3 | 62.2 | 60 | 0.1 |
| #ededf3 | 240 | 20 | 94.1 | 2.4 | 0 |
| #272735 | 240 | 15.2 | 18 | 5.5 | 0 |
| #cdddff | 221 | 100 | 90.2 | 19.6 | 0 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #ededf3 | 20 | 94.1 | 2.4 | 68 |
| #c3c3cc | 8.1 | 78.2 | 3.5 | 30.2 |
| #f4f5f9 | 29.4 | 96.7 | 2 | 1.3 |
| #ffffff | 0 | 100 | 0 | 0.4 |
| #000000 | 0 | 0 | 0 | 0.2 |

## Composition
- Main region **1440px**; prose cap 926px; horizontal bleed: false
- Alignment: 104 distinct left edges, **33** cover 80% of content
- Grid primitives: `16-col: px px px px px px px px px px px px px px px px` ×23 · `14-col: subgrid [] [] [] [] [] [] [] [] [] [] [] [] []` ×11 · `2-col: px px` ×3 · `8-col: subgrid [] [] [] [] [] [] []` ×1 · `3-col: px px px` ×1 · `4-col: px px px px` ×1 · `12-col: px px px px px px px px px px px px` ×1
- Density: 1124 visible elements, **78/screenful**
