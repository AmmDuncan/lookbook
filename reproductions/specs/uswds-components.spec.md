# Spec card — uswds-components

**Source:** https://designsystem.digital.gov/components/  
**Captured:** 2026-07-29 · 1440×4382

## Spacing
- Base unit **8px**, 97.9% of values on scale
- 10 distinct values; steps used: 24, 8, 16, 32, 12, 2, 20
- **Proximity 2×** (median per-group ratio, 9 groups — 6 nested, 3 within-container)
  - typical inside-group gap 10px · typical between-group gap 16.5px *(independent medians — don't divide these)*
- → space encodes grouping strongly *(confidence: high)*

## Type
- Families: Public Sans Web, Source Sans Pro Web
- Body **16px**; 8 sizes: 12, 13, 14.1, 15, 16, 17, 20, 40
- Weights: 300, 400, 700 · **32 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **weight** (spread — size 0.17, weight 0.5, ink 0.25)
- Prose measure ≈ **38 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 16 | 400 | #1b1b1b | 1.5 | 0 | An accordion is a list of headers that hide or r |
| 15 | 400 | #5c5c5c | 1.4 | 0 | Accordion |
| 20 | 700 | #005ea2 | 1.2 | 0 | Accordion |
| 15 | 400 | #adadad | 1.4 | 0 | About GSA |
| 16 | 400 | #000000 | 1.6 | 0 | Filter by name and keyword |
| 14.1 | 400 | #2f4668 | 1.4 | 0 | Reach out in GitHub |
| 14.1 | 400 | #1b1b1b | 1.4 | 0 | Have an idea or an issue? |
| 20 | 300 | #000000 | 1.6 | 0 | USWDS components are simple and consistent solut |
| 15 | 400 | #757575 | 1 | 0 | How to use USWDS |
| 16 | 700 | #ffffff | 0.9 | 0 | Download |

## Colour & depth
- Page bg #fcfcfc; max background chroma **9.8**
- Chromatic area **1.9%** → accent is scarce
- Neutrals tinted 1/15 → neutrals are near-pure grey (default-ish)
- Depth: 103 bordered / 3 shadowed → **border-led, shadows reserved**
- Radius scale: 4, 50 · gradients: 0

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #fcfcfc | 0 | 0 | 98.8 | 0 | 81.1 |
| #ffffff | 0 | 0 | 100 | 0 | 55 |
| #f0f0f0 | 0 | 0 | 94.1 | 0 | 6.8 |
| #1b1b1b | 0 | 0 | 10.6 | 0 | 5.5 |
| #e6e6e6 | 0 | 0 | 90.2 | 0 | 3.1 |
| #252f3e | 216 | 25.3 | 19.4 | 9.8 | 1.8 |
| #adadad | 0 | 0 | 67.8 | 0 | 0.8 |
| #13171f | 220 | 24 | 9.8 | 4.7 | 0.1 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #1b1b1b | 0 | 10.6 | 0 | 70.6 |
| #005ea2 | 100 | 31.8 | 63.5 | 7.9 |
| #5c5c5c | 0 | 36.1 | 0 | 7.8 |
| #000000 | 0 | 0 | 0 | 3.7 |
| #ffffff | 0 | 100 | 0 | 3 |
| #adadad | 0 | 67.8 | 0 | 2.3 |

## Composition
- Main region **1440px**; prose cap 596px; horizontal bleed: false
- Alignment: 63 distinct left edges, **15** cover 80% of content
- Grid primitives: none
- Density: 589 visible elements, **121/screenful**
