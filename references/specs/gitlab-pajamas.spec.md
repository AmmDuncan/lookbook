# Spec card — gitlab-pajamas

**Source:** https://design.gitlab.com/components/overview  
**Captured:** 2026-07-29 · 1440×3343

## Spacing
- Base unit **8px**, 90.6% of values on scale
- 10 distinct values; steps used: 16, 8, 2, 4, 32
- **Proximity 2×** (median per-group ratio, 3 groups — 3 nested, 0 within-container)
  - typical inside-group gap 8px · typical between-group gap 12px *(independent medians — don't divide these)*
- → space encodes grouping strongly *(confidence: low — too few groups to generalise)*

## Type
- Families: GitLab Sans
- Body **14px**; 5 sizes: 12, 14, 16, 25, 36
- Weights: 400, 425, 600 · **11 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **ink** (spread — size 0, weight 0.04, ink 0.07)
- Prose measure ≈ **45 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 14 | 400 | #3a383f | 1.43 | 0 | An accordion is used to show and hide content. |
| 14 | 600 | #18171d | 1.14 | 0 | Accordion |
| 14 | 400 | #626168 | 1.43 | 0 | Part of the extended design system layer |
| 16 | 400 | #3a383f | 1.5 | 0 | A component is a UI element that serves a singul |
| 14 | 425 | #28272d | 1.14 | 0 | Introduction |
| 14 | 400 | #2f5ca0 | 1.43 | 0 | Page source |
| 14 | 600 | #3a383f | 1.14 | 0 | Pajamas Design System |
| 14 | 400 | #ffffff | 1.14 | 0 | Skip to main content |
| 36 | 600 | #18171d | 1.13 | -0.36 | Pajamas components |
| 25 | 600 | #18171d | 1.25 | -0.25 | Main navigation |

## Colour & depth
- Page bg #ffffff; max background chroma **1.2**
- Chromatic area **0%** → accent is scarce
- Neutrals tinted 6/8 → neutrals are tinted (designed)
- Depth: 66 bordered / 1 shadowed → **border-led, shadows reserved**
- Radius scale: 4, 8 · gradients: 0

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #ffffff | 0 | 0 | 100 | 0 | 58.8 |
| #fbfafd | 260 | 42.9 | 98.6 | 1.2 | 4.8 |
| #3a383f | 257 | 5.9 | 23.3 | 2.7 | 0 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #3a383f | 5.9 | 23.3 | 2.7 | 83.7 |
| #18171d | 11.5 | 10.2 | 2.4 | 8.6 |
| #626168 | 3.5 | 39.4 | 2.7 | 4.5 |
| #28272d | 7.1 | 16.5 | 2.4 | 2.2 |
| #2f5ca0 | 54.6 | 40.6 | 44.3 | 0.7 |
| #ffffff | 0 | 100 | 0 | 0.3 |

## Composition
- Main region **1440px**; prose cap 653px; horizontal bleed: false
- Alignment: 18 distinct left edges, **7** cover 80% of content
- Grid primitives: `3-col: px px px` ×1
- Density: 379 visible elements, **102/screenful**
