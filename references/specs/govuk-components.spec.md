# Spec card — govuk-components

**Source:** https://design-system.service.gov.uk/components/  
**Captured:** 2026-07-29 · 1440×2074

## Spacing
- Base unit **5px**, 95.3% of values on scale
- 16 distinct values; steps used: 5, 2, 15, 20, 10, 25, 50
- **Proximity 2.04×** (median per-group ratio, 6 groups — 6 nested, 0 within-container)
  - typical inside-group gap 19.5px · typical between-group gap 25px *(independent medians — don't divide these)*
- → space encodes grouping strongly *(confidence: medium)*

## Type
- Families: GDS Transport
- Body **19px**; 6 sizes: 16, 19, 24, 28.5, 31, 48
- Weights: 400, 700 · **11 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **ink** (spread — size 0.25, weight 0, ink 0.33)
- Prose measure ≈ **76 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 19 | 400 | #0b0c0c | 1.32 | 0 | We’d like to use analytics cookies so we can und |
| 16 | 400 | #1a65a6 | 1.25 | 0 | Accordion |
| 19 | 400 | #1a65a6 | 1 | 0 | View cookies |
| 19 | 400 | #ffffff | 1 | 0 | Accept analytics cookies |
| 24 | 700 | #0b0c0c | 1.25 | 0 | Cookies on GOV.UK Design System |
| 16 | 400 | #0b0c0c | 1.25 | 0 | Skip to main content |
| 24 | 700 | #000000 | 1.25 | 0 | Pages in this section |
| 16 | 400 | #ffffff | 1 | 0 | Search Design system |
| 31 | 400 | #ffffff | 1 | -0.47 | Design System |
| 28.5 | 700 | #0b0c0c | 1.32 | 0 | Support links |

## Colour & depth
- Page bg #ffffff; max background chroma **60.8**
- Chromatic area **3.5%** → accent is scarce
- Neutrals tinted 1/5 → neutrals are near-pure grey (default-ish)
- Depth: 8 bordered / 2 shadowed → **border-led, shadows reserved**
- Radius scale: none · gradients: 0

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #f4f8fb | 206 | 46.7 | 97.1 | 2.7 | 29.6 |
| #1d70b8 | 208 | 72.8 | 41.8 | 60.8 | 2.9 |
| #0f7a52 | 158 | 78.1 | 26.9 | 42 | 0.6 |
| #ffffff | 0 | 0 | 100 | 0 | 0.5 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #0b0c0c | 4.3 | 4.5 | 0.4 | 53.4 |
| #1a65a6 | 72.9 | 37.6 | 54.9 | 40.9 |
| #ffffff | 0 | 100 | 0 | 4.5 |
| #000000 | 0 | 0 | 0 | 1.2 |

## Composition
- Main region **1440px**; prose cap 722px; horizontal bleed: false
- Alignment: 29 distinct left edges, **6** cover 80% of content
- Grid primitives: none
- Density: 189 visible elements, **82/screenful**
