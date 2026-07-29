# Spec card — twilio-paste

**Source:** https://paste.twilio.design/components  
**Captured:** 2026-07-29 · 1440×5925

## Spacing
- Base unit **8px**, 82.1% of values on scale
- 14 distinct values; steps used: 16, 4, 8, 28, 20, 12, 24, 2, 52, 48, 76, 68
- **Proximity 1.8×** (median per-group ratio, 12 groups — 8 nested, 4 within-container)
  - typical inside-group gap 10px · typical between-group gap 14px *(independent medians — don't divide these)*
- → space encodes grouping *(confidence: high)*

## Type
- Families: TwilioSansText, Helvetica Neue
- Body **14px**; 5 sizes: 10, 11, 12, 14, 32
- Weights: 400, 500, 600, 700 · **18 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **ink** (spread — size 0.22, weight 0, ink 0.7)
- Prose measure ≈ **138.5 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 14 | 400 | #121c2d | 1.43 | 0 | Assistant |
| 14 | 400 | #0263e0 | 1.43 | 0 | Skip to content |
| 12 | 400 | #cacdd8 | 1.67 | 0 | AI Chat Log |
| 14 | 400 | #030b5d | 1.43 | 0 | (information) |
| 14 | 400 | #606b85 | — | 0 | Switch the site theme |
| 14 | 400 | #8d3118 | 1.43 | 0 | The website will be retired on .After this date, |
| 14 | 400 | #ffffff | 1.43 | 0 | About |
| 14 | 400 | #cacdd8 | 1.43 | 0 | Introduction |
| 14 | 600 | #ffffff | 1.43 | -0.28 | Twilio Paste |
| 14 | 600 | #030b5d | 1.43 | 0 | Don't see a component, primitive, or layout you  |

## Colour & depth
- Page bg #ffffff; max background chroma **10.6**
- Chromatic area **8.3%** → accent is scarce
- Neutrals tinted 2/9 → neutrals are near-pure grey (default-ish)
- Depth: 13 bordered / 10 shadowed → **shadow-led**
- Radius scale: 4, 8, 2, 3 · gradients: 2

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #ffffff | 0 | 0 | 100 | 0 | 211.5 |
| #121c2d | 218 | 42.9 | 12.4 | 10.6 | 8.2 |
| #f9f9fa | 240 | 9.1 | 97.8 | 0.4 | 4 |
| #fdf7f4 | 20 | 69.2 | 97.5 | 3.5 | 0.8 |
| #1f304c | 217 | 42.1 | 21 | 17.6 | 0.1 |
| #006dfa | 214 | 100 | 49 | 98 | 0 |
| #f4f4f6 | 240 | 10 | 96.1 | 0.8 | 0 |
| #eeeeee | 0 | 0 | 93.3 | 0 | 0 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #121c2d | 42.9 | 12.4 | 10.6 | 27.1 |
| #0263e0 | 98.2 | 44.3 | 87.1 | 23.7 |
| #cacdd8 | 15.2 | 82 | 5.5 | 21.8 |
| #030b5d | 93.7 | 18.8 | 35.3 | 9.9 |
| #606b85 | 16.2 | 44.9 | 14.5 | 9 |
| #ffffff | 0 | 100 | 0 | 4.6 |

## Composition
- Main region **1440px**; prose cap 1200px; horizontal bleed: false
- Alignment: 53 distinct left edges, **12** cover 80% of content
- Grid primitives: `3-col: px px px` ×1
- Density: 2418 visible elements, **367/screenful**
