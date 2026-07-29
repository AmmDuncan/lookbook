# Spec card — salesforce-lightning

**Source:** https://www.lightningdesignsystem.com/components/overview/  
**Captured:** 2026-07-29 · 1440×900

## Spacing
- Base unit **8px**, 92.1% of values on scale
- 17 distinct values; steps used: 2, 8, 16, 24, 40, 12, 1, 5, 6, 32
- **Proximity 2.25×** (median per-group ratio, 4 groups — 2 nested, 2 within-container)
  - typical inside-group gap 12px · typical between-group gap 30px *(independent medians — don't divide these)*
- → space encodes grouping strongly *(confidence: medium)*

## Type
- Families: Inter, AvantGardeForSalesforce, DM sans
- Body **16px**; 6 sizes: 13, 14, 16, 24, 32, 40
- Weights: 300, 400, 500, 700 · **15 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **mixed (size+weight)** (spread — size 0.19, weight 0.17, ink 0.09)
- Prose measure ≈ **103 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 16 | 400 | #444444 | 1.5 | 0 | SLDS 2 includes a curated collection of reusable |
| 14 | 500 | #2e2e2e | 1.43 | 0 | Get Started |
| 16 | 700 | #444444 | 1.5 | 0 | Pre-Built, Accessible UI Elements |
| 24 | 300 | #5c5c5c | 1.33 | 0 | A distinct element within a user interface that  |
| 16 | 400 | #3a49da | 1.5 | 0 | Components · Lightning Base Components |
| 14 | 400 | #03234d | 1.43 | 0 | Lightning Base Components |
| 16 | 500 | #444444 | 1.5 | 0 | Lighting Web Components |
| 24 | 400 | #03234d | — | 0 | Lightning Base Components |
| 32 | 400 | #001642 | — | 0 | Component Types |
| 13 | 400 | #000000 | — | 0 | Styleguide secondary navigation |

## Colour & depth
- Page bg #ffffff; max background chroma **10.6**
- Chromatic area **7.8%** → accent is scarce
- Neutrals tinted 0/6 → neutrals are near-pure grey (default-ish)
- Depth: 14 bordered / 3 shadowed → **border-led, shadows reserved**
- Radius scale: 3, 4, 20, 24, 2 · gradients: 0

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #ffffff | 0 | 0 | 100 | 0 | 126.8 |
| #fbf3e0 | 42 | 77.1 | 93.1 | 10.6 | 6.8 |
| #e0e5f8 | 227 | 63.2 | 92.5 | 9.4 | 0.6 |
| #c51d54 | 340 | 74.3 | 44.3 | 65.9 | 0.4 |
| #3a49da | 234 | 68.4 | 54.1 | 62.7 | 0 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #444444 | 0 | 26.7 | 0 | 76.9 |
| #2e2e2e | 0 | 18 | 0 | 13.1 |
| #03234d | 92.5 | 15.7 | 29 | 3.6 |
| #5c5c5c | 0 | 36.1 | 0 | 2.2 |
| #3a49da | 68.4 | 54.1 | 62.7 | 2 |
| #001642 | 100 | 12.9 | 25.9 | 1.1 |

## Composition
- Main region **1440px**; prose cap 848px; horizontal bleed: false
- Alignment: 33 distinct left edges, **7** cover 80% of content
- Grid primitives: none
- Density: 729 visible elements, **729/screenful**
