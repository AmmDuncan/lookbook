# Spec card — govuk-patterns

**Source:** https://design-system.service.gov.uk/patterns/  
**Captured:** 2026-07-29 · 1440×2094

## Spacing
- Base unit **5px**, 95.1% of values on scale
- 16 distinct values; steps used: 5, 2, 15, 10, 20, 25, 50
- **Proximity 1.58×** (median per-group ratio, 5 groups — 5 nested, 0 within-container)
  - typical inside-group gap 20px · typical between-group gap 30px *(independent medians — don't divide these)*
- → space encodes grouping *(confidence: medium)*

## Type
- Families: GDS Transport
- Body **16px**; 6 sizes: 16, 19, 24, 28.5, 31, 48
- Weights: 400, 700 · **12 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **ink** (spread — size 0.25, weight 0, ink 0.33)
- Prose measure ≈ **76 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 16 | 400 | #1a65a6 | 1.25 | 0 | Addresses |
| 19 | 400 | #0b0c0c | 1.32 | 0 | We’d like to use analytics cookies so we can und |
| 19 | 400 | #1a65a6 | 1 | 0 | View cookies |
| 19 | 400 | #ffffff | 1 | 0 | Accept analytics cookies |
| 19 | 400 | #484949 | 1.32 | 0 | Ask users for… |
| 24 | 700 | #0b0c0c | 1.25 | 0 | Cookies on GOV.UK Design System |
| 16 | 400 | #0b0c0c | 1.25 | 0 | Skip to main content |
| 24 | 700 | #000000 | 1.25 | 0 | Pages in this section |
| 16 | 400 | #ffffff | 1 | 0 | Search Design system |
| 31 | 400 | #ffffff | 1 | -0.47 | Design System |

## Colour & depth
- Page bg #ffffff; max background chroma **60.8**
- Chromatic area **3.5%** → accent is scarce
- Neutrals tinted 1/6 → neutrals are near-pure grey (default-ish)
- Depth: 8 bordered / 2 shadowed → **border-led, shadows reserved**
- Radius scale: none · gradients: 0

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #f4f8fb | 206 | 46.7 | 97.1 | 2.7 | 29.3 |
| #1d70b8 | 208 | 72.8 | 41.8 | 60.8 | 2.9 |
| #0f7a52 | 158 | 78.1 | 26.9 | 42 | 0.6 |
| #ffffff | 0 | 0 | 100 | 0 | 0.5 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #1a65a6 | 72.9 | 37.6 | 54.9 | 50 |
| #0b0c0c | 4.3 | 4.5 | 0.4 | 41.2 |
| #ffffff | 0 | 100 | 0 | 5.2 |
| #484949 | 0.7 | 28.4 | 0.4 | 2.1 |
| #000000 | 0 | 0 | 0 | 1.4 |

## Composition
- Main region **1440px**; prose cap — (no prose); horizontal bleed: false
- Alignment: 24 distinct left edges, **5** cover 80% of content
- Grid primitives: none
- Density: 177 visible elements, **76/screenful**
