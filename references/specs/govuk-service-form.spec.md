# Spec card — govuk-service-form

**Source:** https://design-system.service.gov.uk/patterns/question-pages/  
**Captured:** 2026-07-29 · 1440×10880

## Spacing
- Base unit **5px**, 94.2% of values on scale
- 20 distinct values; steps used: 20, 5, 2, 10, 15, 30, 4, 16, 25, 50
- **Proximity 1.54×** (median per-group ratio, 8 groups — 6 nested, 2 within-container)
  - typical inside-group gap 20px · typical between-group gap 30px *(independent medians — don't divide these)*
- → space encodes grouping *(confidence: high)*

## Type
- Families: GDS Transport, ui-monospace
- Body **19px**; 7 sizes: 16, 19, 24, 28.5, 31, 36, 48
- Weights: 400, 700 · **20 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **ink** (spread — size 0.25, weight 0, ink 0.33)
- Prose measure ≈ **76 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 19 | 400 | #0b0c0c | 1.32 | 0 | We’d like to use analytics cookies so we can und |
| 16 | 400 | #1a65a6 | 1.25 | 0 | Addresses |
| 19 | 400 | #1a65a6 | 1 | 0 | View cookies |
| 19 | 700 | #0b0c0c | 1.32 | 0 | Start by asking one question per page |
| 24 | 700 | #0b0c0c | 1.25 | 0 | Cookies on GOV.UK Design System |
| 36 | 700 | #0b0c0c | 1.11 | 0 | When to use this pattern |
| 19 | 400 | #ffffff | 1 | 0 | Accept analytics cookies |
| 16 | 400 | #d13118 | 1.25 | 0 | <legend> |
| 19 | 400 | #d13118 | 1.32 | 0 | "govuk-caption-l" |
| 19 | 400 | #484949 | 1.32 | 0 | Ask users for… |

## Colour & depth
- Page bg #ffffff; max background chroma **60.8**
- Chromatic area **0.7%** → accent is scarce
- Neutrals tinted 1/7 → neutrals are near-pure grey (default-ish)
- Depth: 48 bordered / 3 shadowed → **border-led, shadows reserved**
- Radius scale: none · gradients: 0

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #ffffff | 0 | 0 | 100 | 0 | 22.8 |
| #f4f8fb | 206 | 46.7 | 97.1 | 2.7 | 5.6 |
| #f3f3f3 | 0 | 0 | 95.3 | 0 | 0.9 |
| #1d70b8 | 208 | 72.8 | 41.8 | 60.8 | 0.6 |
| #0f7a52 | 158 | 78.1 | 26.9 | 42 | 0.1 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #0b0c0c | 4.3 | 4.5 | 0.4 | 77.1 |
| #1a65a6 | 72.9 | 37.6 | 54.9 | 19.9 |
| #ffffff | 0 | 100 | 0 | 0.9 |
| #d13118 | 79.4 | 45.7 | 72.5 | 0.9 |
| #484949 | 0.7 | 28.4 | 0.4 | 0.4 |
| #003078 | 100 | 23.5 | 47.1 | 0.3 |

## Composition
- Main region **1440px**; prose cap 722px; horizontal bleed: false
- Alignment: 57 distinct left edges, **9** cover 80% of content
- Grid primitives: none
- Density: 384 visible elements, **32/screenful**
