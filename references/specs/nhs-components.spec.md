# Spec card — nhs-components

**Source:** https://service-manual.nhs.uk/design-system/components  
**Captured:** 2026-07-29 · 1440×2358

## Spacing
- Base unit **4px**, 97.4% of values on scale
- 13 distinct values; steps used: 4, 8, 16, 24, 2, 12
- **Proximity 1.92×** (median per-group ratio, 4 groups — 3 nested, 1 within-container)
  - typical inside-group gap 8px · typical between-group gap 28px *(independent medians — don't divide these)*
- → space encodes grouping *(confidence: medium)*

## Type
- Families: Frutiger W01
- Body **19px**; 6 sizes: 16, 19, 22, 26, 36, 48
- Weights: 400, 600 · **14 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **ink** (spread — size 0.25, weight 0, ink 0.84)
- Prose measure ≈ **116 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 19 | 400 | #212b32 | 1.47 | 0 | We've put some small files called cookies on you |
| 16 | 400 | #005eb8 | — | 0 | Skip to main content |
| 16 | 400 | #212b32 | 1.5 | 0 | Maintained by the at NHS England. If you've got  |
| 16 | 400 | #003087 | 1.5 | 0 | Accessibility statement |
| 19 | 400 | #005eb8 | 1.47 | 0 | read more about our cookies |
| 16 | 400 | #ffffff | 1.5 | 0 | NHS service standard |
| 19 | 400 | #ffffff | 1.1 | 0 | Digital service manual |
| 19 | 600 | #ffffff | 1.47 | 0 | I'm OK with analytics cookies |
| 26 | 400 | #212b32 | 1.23 | 0 | Components are reusable elements of the user int |
| 19 | 600 | #4c6272 | 1.25 | 0 | Form elements |

## Colour & depth
- Page bg #f0f4f5; max background chroma **72.2**
- Chromatic area **8.8%** → accent is scarce
- Neutrals tinted 3/5 → neutrals are tinted (designed)
- Depth: 5 bordered / 4 shadowed → **shadow-led**
- Radius scale: 4 · gradients: 0

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #ffffff | 0 | 0 | 100 | 0 | 15 |
| #d8dde0 | 202 | 11.4 | 86.3 | 3.1 | 10.5 |
| #005eb8 | 209 | 100 | 36.1 | 72.2 | 7.8 |
| #007f3b | 148 | 100 | 24.9 | 49.8 | 1 |
| #edf4fa | 208 | 56.5 | 95.5 | 5.1 | 0.1 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #212b32 | 20.5 | 16.3 | 6.7 | 51.5 |
| #005eb8 | 100 | 36.1 | 72.2 | 26.8 |
| #ffffff | 0 | 100 | 0 | 11 |
| #003087 | 100 | 26.5 | 52.9 | 7.9 |
| #4c6272 | 20 | 37.3 | 14.9 | 2.7 |

## Composition
- Main region **1440px**; prose cap 1100px; horizontal bleed: false
- Alignment: 32 distinct left edges, **5** cover 80% of content
- Grid primitives: none
- Density: 179 visible elements, **68/screenful**
