# Spec card — lemni-inbox

**Source:** reproductions/lemni-inbox.html  
**Captured:** 2026-07-29 · 1440×900

## Spacing
- Base unit **2px**, 100% of values on scale
- 10 distinct values; steps used: 8, 10, 12, 20, 14, 6, 16, 4, 2
- **Proximity 1.5×** (median per-group ratio, 10 groups — 8 nested, 2 within-container)
  - typical inside-group gap 8px · typical between-group gap 12px *(independent medians — don't divide these)*
- → space encodes grouping *(confidence: high)*

## Type
- Families: Inter
- Body **13.5px**; 9 sizes: 9, 11, 11.5, 12, 12.5, 13, 13.5, 14.5, 15
- Weights: 400, 450, 500, 600 · **20 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **ink** (spread — size 0.11, weight 0.17, ink 0.35)
- Prose measure ≈ **68 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 13.5 | 400 | #3a3f47 | 1.6 | 0 | alexsmith.mobbin@gmail.com |
| 13 | 400 | #3a3f47 | — | 0 | Tutorials |
| 12.5 | 400 | #767c86 | — | 0 | Busy, unable to do teardown |
| 13 | 400 | #9aa1ac | — | 0 | Write a short email to explain we don't offer re |
| 11 | 500 | #9298a2 | — | 0.66 | Manage |
| 13.5 | 450 | #3a3f47 | — | 0 | Assigned |
| 12 | 400 | #767c86 | 1.4 | 0 | Upgrade your free trial today |
| 13.5 | 500 | #20242b | — | 0 | Sam Lee's Works… |
| 13 | 600 | #20242b | — | 0 | Get a 50% discount |
| 13.5 | 400 | #767c86 | — | 0 | · CPO at ASMobbin |

## Colour & depth
- Page bg transparent (inherits canvas); max background chroma **1.2**
- Chromatic area **0.5%** → accent is scarce
- Neutrals tinted 10/13 → neutrals are tinted (designed)
- Depth: 11 bordered / 0 shadowed → **borders only, zero resting shadows**
- Radius scale: 7, 50, 1, 12, 6, 11 · gradients: 0

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #ffffff | 0 | 0 | 100 | 0 | 134 |
| #fbfbfc | 240 | 14.3 | 98.6 | 0.4 | 29.6 |
| #f0f1f3 | 220 | 11.1 | 94.7 | 1.2 | 1.6 |
| #6b5bd6 | 248 | 60 | 59.8 | 48.2 | 0.4 |
| #e0795f | 12 | 67.5 | 62.5 | 50.6 | 0.1 |
| #efeaff | 254 | 100 | 95.9 | 8.2 | 0 |
| #ffe9d6 | 28 | 100 | 92 | 16.1 | 0 |
| #20242b | 218 | 14.7 | 14.7 | 4.3 | 0 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #3a3f47 | 10.1 | 25.3 | 5.1 | 63.8 |
| #767c86 | 6.3 | 49.4 | 6.3 | 17.7 |
| #9aa1ac | 9.8 | 63.9 | 7.1 | 5.9 |
| #20242b | 14.7 | 14.7 | 4.3 | 5.7 |
| #9298a2 | 7.9 | 60.4 | 6.3 | 5.3 |
| #ffffff | 0 | 100 | 0 | 0.8 |

## Composition
- Main region **1280px**; prose cap 457px; horizontal bleed: false
- Alignment: 28 distinct left edges, **11** cover 80% of content
- Grid primitives: `4-col: px px px px` ×1
- Density: 165 visible elements, **165/screenful**
