# Spec card — linear-issue-list

**Source:** reproductions/linear-issue-list.html  
**Captured:** 2026-07-29 · 1440×900

## Spacing
- Base unit **4px**, 81.5% of values on scale
- 10 distinct values; steps used: 8, 6, 16, 12, 1, 10, 4, 2, 28
- **Proximity 1.33×** (median per-group ratio, 16 groups — 15 nested, 1 within-container)
  - typical inside-group gap 7px · typical between-group gap 8px *(independent medians — don't divide these)*
- → space encodes little grouping — flat rhythm *(confidence: high)*

## Type
- Families: Geist
- Body **13px**; 5 sizes: 8, 9, 10, 12, 13
- Weights: 400, 500, 600 · **13 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **ink** (spread — size 0.12, weight 0, ink 0.53)

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 13 | 400 | #eeeef0 | 1.4 | 0 | Issues |
| 12 | 400 | #8a8f98 | 1.4 | 0 | 29 days |
| 13 | 400 | #8a8f98 | 1.4 | 0 | Inbox |
| 12 | 400 | #62666d | 1.4 | 0.12 | Workspace |
| 13 | 400 | #62666d | 1.4 | 0 | Performance pass |
| 12 | 500 | #eeeef0 | 1.4 | 0 | In Progress |
| 13 | 500 | #eeeef0 | 1.4 | 0 | Northwind |
| 9 | 600 | #ffffff | 1.4 | 0 |  |
| 12 | 500 | #62666d | 1.4 | 0 |  |
| 9 | 600 | #62666d | 1.4 | 0 |  |

## Colour & depth
- Page bg #08090a; max background chroma **1.6**
- Chromatic area **0.7%** → accent is scarce
- Neutrals tinted 4/7 → neutrals are near-pure grey (default-ish)
- Depth: 12 bordered / 0 shadowed → **borders only, zero resting shadows**
- Radius scale: 5, 50, 4, 11, 8 · gradients: 2

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #0f1011 | 210 | 6.3 | 6.3 | 0.8 | 84 |
| #131417 | 225 | 9.5 | 8.2 | 1.6 | 13.5 |
| #5d6cd1 | 232 | 55.8 | 59.2 | 45.5 | 0.4 |
| #15161a | 228 | 10.6 | 9.2 | 2 | 0.1 |
| #3d8f6f | 157 | 40.2 | 40 | 32.2 | 0.1 |
| #8a5cc4 | 267 | 46.8 | 56.5 | 40.8 | 0.1 |
| #c2683f | 19 | 51.8 | 50.4 | 51.4 | 0.1 |
| #5e6ad2 | 234 | 56.3 | 59.6 | 45.5 | 0 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #eeeef0 | 6.2 | 93.7 | 0.8 | 42.8 |
| #8a8f98 | 6.4 | 56.9 | 5.5 | 37.2 |
| #62666d | 5.3 | 40.6 | 4.3 | 18 |
| #ffffff | 0 | 100 | 0 | 2 |

## Composition
- Main region **1440px**; prose cap — (no prose); horizontal bleed: false
- Alignment: 32 distinct left edges, **12** cover 80% of content
- Grid primitives: `2-col: px px` ×1
- Density: 344 visible elements, **344/screenful**
