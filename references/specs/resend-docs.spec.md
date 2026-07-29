# Spec card — resend-docs

**Source:** https://resend.com/docs/send-with-nodejs  
**Captured:** 2026-07-29 · 1440×900

## Spacing
- Base unit **2px**, 100% of values on scale
- 18 distinct values; steps used: 6, 8, 12, 16, 4, 1, 10, 2, 20, 24, 40, 28
- **Proximity 4×** (median per-group ratio, 32 groups — 29 nested, 3 within-container)
  - typical inside-group gap 4px · typical between-group gap 16px *(independent medians — don't divide these)*
- → space encodes grouping strongly *(confidence: high)*

## Type
- Families: Inter, paperMono
- Body **14px**; 6 sizes: 12, 14, 16, 18, 24, 36
- Weights: 400, 500, 600, 700 · **33 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **ink** (spread — size 0.19, weight 0.17, ink 0.35)

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 14 | 400 | #3e3e3e | 1.43 | 0 | Introduction |
| 16 | 400 | #4f4f4f | 1.5 | 0 | Full Express app with TypeScript |
| 16 | 400 | #3e3e3e | 1.75 | 0 | Before you start, you’ll need: |
| 14 | 400 | #24292e | 1.71 | 0 | RESEND_API_KEY |
| 16 | 400 | #000000 | 1.5 | 0 | Fetch the complete documentation index at: |
| 14 | 400 | #032f62 | 1.71 | 0 | install |
| 16 | 600 | #252525 | 1.5 | 0 | Express (TypeScript) |
| 16 | 400 | #161616 | 1.75 | 0 | Install |
| 14 | 400 | #4f4f4f | 1.43 | 0 | Guides |
| 18 | 400 | #3e3e3e | 1.56 | 0 | Learn how to send your first email using the Res |

## Colour & depth
- Page bg transparent (inherits canvas); max background chroma **0.4**
- Chromatic area **0%** → accent is scarce
- Neutrals tinted 3/20 → neutrals are near-pure grey (default-ish)
- Depth: 32 bordered / 103 shadowed → **shadow-led**
- Radius scale: 12, 16, 6, 9999, 8, 14 · gradients: 1

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #ffffff | 0 | 0 | 100 | 0 | 125.1 |
| #f2f2f2 | 0 | 0 | 94.9 | 0 | 28.1 |
| #fafaf9 | 60 | 9.1 | 97.8 | 0.4 | 4.3 |
| #000000 | 0 | 0 | 0 | 0 | 1.2 |
| #ededed | 0 | 0 | 92.9 | 0 | 0.5 |
| #0a0c10 | 220 | 23.1 | 5.1 | 2.4 | 0.2 |
| #9e9e9e | 0 | 0 | 62 | 0 | 0.1 |
| #d4d4d4 | 0 | 0 | 83.1 | 0 | 0.1 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #3e3e3e | 0 | 24.3 | 0 | 30.9 |
| #4f4f4f | 0 | 31 | 0 | 16.9 |
| #000000 | 0 | 0 | 0 | 8.2 |
| #24292e | 12.2 | 16.1 | 3.9 | 6.9 |
| #161616 | 0 | 8.6 | 0 | 6.2 |
| #252525 | 0 | 14.5 | 0 | 5.9 |

## Composition
- Main region **1440px**; prose cap — (no prose); horizontal bleed: false
- Alignment: 80 distinct left edges, **19** cover 80% of content
- Grid primitives: `3-col: px px px` ×1 · `2-col: px px` ×1
- Density: 820 visible elements, **820/screenful**
