# Spec card — flat-admin-table

**Source:** /Users/ammielyawson/.claude/skills/lookbook/scripts/fixtures/flat-admin-table.html  
**Captured:** 2026-07-29 · 1440×900

## Spacing
- Base unit **8px**, 100% of values on scale
- 1 distinct values; steps used: 16
- **Proximity 9×** (median per-group ratio, 2 groups — 2 nested, 0 within-container)
  - typical inside-group gap 4px · typical between-group gap 16px *(independent medians — don't divide these)*
- → space encodes grouping strongly *(confidence: low — too few groups to generalise)*

## Type
- Families: system-ui, Arial
- Body **12px**; 9 sizes: 10, 12, 14, 15, 18, 20, 24, 32, 48
- Weights: 400, 500, 600, 700 · **11 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **mixed (ink+size)** (spread — size 0.85, weight 0.33, ink 0.89)

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 12 | 400 | #111827 | — | 0 | 8f2a1c4e-3b90-4d21-a7f6-1c9e0b3d5a88 |
| 14 | 400 | #111827 | — | 0 | Kofi Mensah |
| 10 | 400 | #111827 | — | 0 | 2026-03-14T09:22:41.000Z |
| 18 | 600 | #ffffff | — | 0 | Manage all vehicle registration records |
| 14 | 400 | #ffffff | — | 0 | View |
| 15 | 600 | #111827 | — | 0 | Record ID |
| 15 | 500 | #111827 | — | 0 | Showing 6 of 1,284 records |
| 32 | 700 | #ffffff | — | 0 | Vehicle Registrations |
| 20 | 600 | #ffffff | — | 0 | Registration records |
| 24 | 700 | #111827 | — | 0 | All records |

## Colour & depth
- Page bg #ffffff; max background chroma **77.6**
- Chromatic area **30.3%** → accent is dominant
- Neutrals tinted 0/2 → neutrals are near-pure grey (default-ish)
- Depth: 30 bordered / 1 shadowed → **border-led, shadows reserved**
- Radius scale: 8 · gradients: 0

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #ffffff | 0 | 0 | 100 | 0 | 52.8 |
| #2563eb | 221 | 83.2 | 53.3 | 77.6 | 30.3 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #111827 | 39.3 | 11 | 8.6 | 71.1 |
| #ffffff | 0 | 100 | 0 | 28.9 |

## Composition
- Main region **1440px**; prose cap — (no prose); horizontal bleed: false
- Alignment: 16 distinct left edges, **10** cover 80% of content
- Grid primitives: none
- Density: 69 visible elements, **69/screenful**
