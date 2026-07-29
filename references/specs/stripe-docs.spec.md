# Spec card — stripe-docs

**Source:** https://docs.stripe.com/payments  
**Captured:** 2026-07-29 · 1440×900

## Spacing
- Base unit **2px**, 94.6% of values on scale
- 16 distinct values; steps used: 8, 4, 18, 16, 7, 20, 1, 10, 6, 14, 24, 32
- **Proximity 1.67×** (median per-group ratio, 11 groups — 8 nested, 3 within-container)
  - typical inside-group gap 8px · typical between-group gap 16px *(independent medians — don't divide these)*
- → space encodes grouping *(confidence: high)*

## Type
- Families: -apple-system, Source Code Pro
- Body **15px**; 9 sizes: 12, 14, 15, 16, 18, 20, 21, 24, 32
- Weights: 400, 500, 600, 700 · **25 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **ink** (spread — size 0.19, weight 0.33, ink 0.4)
- Prose measure ≈ **40 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 15 | 400 | #4e566d | 1.4 | 0 | Build a payment form or use a prebuilt payment p |
| 14 | 400 | #1a2c44 | 1.43 | 0 | Accept a payment |
| 14 | 500 | #5469d4 | 1.43 | 0 | Create account |
| 16 | 500 | #5469d4 | 1.5 | 0 | Find your use case |
| 16 | 400 | #3c4257 | 1.63 | 0 | Integrate with Stripe to start accepting payment |
| 14 | 600 | #414552 | 1.43 | 0 | Online payments |
| 14 | 400 | #414552 | — | 0 | Need help? . |
| 21 | 700 | #1a1f36 | — | 0 | Payment options |
| 14 | 500 | #3c4257 | 1.43 | 0 | Get started |
| 16 | 500 | #1a1f36 | 1.5 | 0 | Payment interfaces |

## Colour & depth
- Page bg transparent (inherits canvas); max background chroma **2.4**
- Chromatic area **0.3%** → accent is scarce
- Neutrals tinted 3/5 → neutrals are tinted (designed)
- Depth: 16 bordered / 53 shadowed → **shadow-led**
- Radius scale: 4, 6, 8 · gradients: 0

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #ffffff | 0 | 0 | 100 | 0 | 290.5 |
| #f4f7fa | 210 | 37.5 | 96.9 | 2.4 | 12.8 |
| #f7fafc | 204 | 45.5 | 97.8 | 2 | 12.4 |
| #d4dee9 | 211 | 32.3 | 87.3 | 8.2 | 0.2 |
| #273951 | 214 | 35 | 23.5 | 16.5 | 0.1 |
| #5469d4 | 230 | 59.8 | 58 | 50.2 | 0 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #4e566d | 16.6 | 36.7 | 12.2 | 28.7 |
| #1a2c44 | 44.7 | 18.4 | 16.5 | 21.9 |
| #5469d4 | 59.8 | 58 | 50.2 | 20.9 |
| #3c4257 | 18.4 | 28.8 | 10.6 | 9.1 |
| #1a1f36 | 35 | 15.7 | 11 | 7.2 |
| #414552 | 11.6 | 28.8 | 6.7 | 7.1 |

## Composition
- Main region **1440px**; prose cap 512px; horizontal bleed: false
- Alignment: 61 distinct left edges, **16** cover 80% of content
- Grid primitives: `3-col: px px px` ×4
- Density: 755 visible elements, **755/screenful**
