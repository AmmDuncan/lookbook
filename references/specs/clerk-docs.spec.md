# Spec card — clerk-docs

**Source:** https://clerk.com/docs/quickstarts/nextjs  
**Captured:** 2026-07-29 · 1440×6288

## Spacing
- Base unit **2px**, 83.9% of values on scale
- 25 distinct values; steps used: 8, 6, 12, 16, 5, 4, 7, 28, 2, 24, 64, 32
- **Proximity 1.8×** (median per-group ratio, 32 groups — 21 nested, 11 within-container)
  - typical inside-group gap 12px · typical between-group gap 28px *(independent medians — don't divide these)*
- → space encodes grouping *(confidence: high)*

## Type
- Families: soehneMono, geistNumbers
- Body **15px**; 10 sizes: 10, 12, 13, 14, 15, 16, 18, 20, 24, 32
- Weights: 400, 450, 500, 600 · **34 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **ink** (spread — size 0.21, weight 0.17, ink 0.65)
- Prose measure ≈ **86.5 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 15 | 400 | #42434d | 1.87 | 0 | This is the default quickstart for new Next.js a |
| 13 | 400 | #5de3ff | 1.85 | 0 | create |
| 13 | 500 | #131316 | 1.85 | 0 | Open in Cursor |
| 13 | 400 | #ffffff | 1.85 | 0 | { clerkMiddleware } |
| 14 | 400 | #5e5f6e | 1.43 | 0 | Learn how to add Clerk's prebuilt authentication |
| 13 | 400 | #131316 | 1.85 | 0 | clerkMiddleware() |
| 13 | 400 | #bab1ff | 1.85 | 0 | import |
| 15 | 400 | #131316 | 1.87 | 0 | Pages Router quickstart |
| 14 | 450 | #5e5f6e | 1.43 | 0 | Reference |
| 13 | 450 | #5e5f6e | 1.23 | 0 | Create a new Next.js app |

## Colour & depth
- Page bg #f7f7f8; max background chroma **9**
- Chromatic area **5.4%** → accent is scarce
- Neutrals tinted 11/17 → neutrals are tinted (designed)
- Depth: 19 bordered / 31 shadowed → **shadow-led**
- Radius scale: 6, 8, 4, 33554400, 12, 16 · gradients: 21

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #f7f7f8 | 240 | 6.7 | 97.1 | 0.4 | 101 |
| #ffffff | 0 | 0 | 100 | 0 | 18.4 |
| #212126 | 240 | 7 | 13.9 | 2 | 14 |
| #2f3037 | 233 | 7.8 | 20 | 3.1 | 10.4 |
| #34424b | 203 | 18.1 | 24.9 | 9 | 5.4 |
| #f7f7f7 | 0 | 0 | 96.9 | 0 | 0.5 |
| #eeeef0 | 240 | 6.2 | 93.7 | 0.8 | 0.1 |
| #42434d | 235 | 7.7 | 28 | 4.3 | 0 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #42434d | 7.7 | 28 | 4.3 | 42.2 |
| #131316 | 7.3 | 8 | 1.2 | 20 |
| #5e5f6e | 7.8 | 40 | 6.3 | 11.4 |
| #5de3ff | 100 | 68.2 | 63.5 | 9.8 |
| #ffffff | 0 | 100 | 0 | 5.1 |
| #bab1ff | 100 | 84.7 | 30.6 | 4 |

## Composition
- Main region **1440px**; prose cap 680px; horizontal bleed: false
- Alignment: 132 distinct left edges, **42** cover 80% of content
- Grid primitives: `22-col: px px px px px px px px px px px px px px px px px px px px px px` ×1 · `2-col: px px` ×1 · `6-col: px px px px px px` ×1
- Density: 1114 visible elements, **159/screenful**
