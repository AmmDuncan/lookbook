# Spec card — sentry-docs

**Source:** https://docs.sentry.io/product/issues/  
**Captured:** 2026-07-29 · 1440×4562

## Spacing
- Base unit **4px**, 91.2% of values on scale
- 14 distinct values; steps used: 8, 4, 16, 12, 6, 20, 32, 24, 26, 11
- **Proximity 1.8×** (median per-group ratio, 18 groups — 12 nested, 6 within-container)
  - typical inside-group gap 9px · typical between-group gap 20px *(independent medians — don't divide these)*
- → space encodes grouping *(confidence: high)*

## Type
- Families: Rubik, Roboto Mono
- Body **16px**; 11 sizes: 10, 12, 12.8, 14, 14.4, 15.2, 16, 17.2, 20.8, 24, 32
- Weights: 300, 400, 500, 600, 700 · **26 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **ink** (spread — size 0.07, weight 0, ink 0.26)
- Prose measure ≈ **128 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 16 | 400 | #21201c | 1.75 | 0 | The page in Sentry displays information about pr |
| 15.2 | 400 | #21201c | 1.5 | 0 | Getting Started With Sentry |
| 14 | 400 | #21201c | 1.5 | 0 | SDKs |
| 16 | 400 | #6a5fc1 | 1.75 | 0 | triage |
| 20.8 | 300 | #362d59 | 1.54 | 0 | Learn how to use Sentry’s Issues page, where you |
| 17.2 | 500 | #6a5fc1 | 1.5 | 0 | Issue Views |
| 16 | 500 | #21201c | 1.75 | 0 | Issues and Event Quotas |
| 14 | 400 | #9c5f99 | 1.75 | 0 | is:unresolved |
| 14 | 500 | #21201c | 1.43 | 0 | Was this helpful? |
| 14.4 | 400 | #6a5fc1 | 1.75 | 0 | How to contribute |

## Colour & depth
- Page bg transparent (inherits canvas); max background chroma **2.7**
- Chromatic area **0.3%** → accent is scarce
- Neutrals tinted 6/9 → neutrals are tinted (designed)
- Depth: 26 bordered / 4 shadowed → **border-led, shadows reserved**
- Radius scale: 4, 6, 8, 9999, 9 · gradients: 0

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #ffffff | 0 | 0 | 100 | 0 | 103.9 |
| #f8f8ff | 240 | 100 | 98.6 | 2.7 | 2.3 |
| #fdfdfc | 60 | 20 | 99 | 0.4 | 1.4 |
| #6a5fc1 | 247 | 44.1 | 56.5 | 38.4 | 0.3 |
| #ffd00e | 48 | 100 | 52.7 | 94.5 | 0 |
| #00f261 | 144 | 100 | 47.5 | 94.9 | 0 |
| #e5e7eb | 220 | 13 | 91 | 2.4 | 0 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #21201c | 8.2 | 12 | 2 | 86 |
| #6a5fc1 | 44.1 | 56.5 | 38.4 | 7.2 |
| #362d59 | 32.8 | 26.3 | 17.3 | 3.4 |
| #9c5f99 | 24.3 | 49.2 | 23.9 | 1.2 |
| #63635e | 2.6 | 37.8 | 2 | 1.1 |
| #ffffff | 0 | 100 | 0 | 0.6 |

## Composition
- Main region **1440px**; prose cap 1052px; horizontal bleed: false
- Alignment: 70 distinct left edges, **16** cover 80% of content
- Grid primitives: `2-col: px px` ×1
- Density: 481 visible elements, **95/screenful**
