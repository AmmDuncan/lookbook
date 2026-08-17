# Spec card — a

**Source:** http://localhost:8901/a.html  
**Captured:** 2026-08-10 · 1440×900

## Spacing
- Base unit **4px**, 92.3% of values on scale
- 10 distinct values; steps used: 16, 12, 8, 10, 6, 32, 20, 2
- **Proximity 2.67×** (median per-group ratio, 3 groups — 1 nested, 2 within-container)
  - typical inside-group gap 8px · typical between-group gap 16px *(independent medians — don't divide these)*
- → space encodes grouping strongly *(confidence: low — too few groups to generalise)*

## Type
- Families: Inter, JetBrains Mono, Archivo
- Body **12px**; 6 sizes: 10, 11, 12, 14, 20, 24
- Weights: 400, 500, 600, 700 · **26 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **ink** (spread — size 0.35, weight 0.33, ink 0.48)
- Prose measure ≈ **189 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 12 | 400 | #5f6b77 | 1.5 | 0 | 13 above threshold |
| 14 | 400 | #101820 | 1.57 | 0 | Classroom block construction, 24 units |
| 14 | 400 | #5f6b77 | 1.57 | 0 | Casework › |
| 14 | 400 | #dfe5ea | 1.57 | 0 | Cases |
| 14 | 600 | #101820 | 1.57 | -0.14 | SUB-2026-1242 |
| 11 | 500 | #5f6b77 | 2 | 0.66 | Submission & entity |
| 11 | 600 | #3d4a56 | 2 | 0 | Ready to screen |
| 10 | 400 | #8794a0 | 2.2 | 0.8 | Casework |
| 11 | 400 | #5f6b77 | 2 | 0.66 | Ready to screen |
| 14 | 600 | #5f6b77 | 1.57 | -0.14 | SUB-2026-1452 |

## Colour & depth
- Page bg #eef1f4; max background chroma **37.3**
- Chromatic area **0.7%** → accent is scarce
- Neutrals tinted 6/8 → neutrals are tinted (designed)
- Depth: 16 bordered / 0 shadowed → **borders only, zero resting shadows**
- Radius scale: 6, 999 · gradients: 0

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #ffffff | 0 | 0 | 100 | 0 | 99.7 |
| #eef1f4 | 210 | 21.4 | 94.5 | 2.4 | 83.4 |
| #171d25 | 214 | 23.3 | 11.8 | 5.5 | 16.7 |
| #f6f8fa | 210 | 28.6 | 97.3 | 1.6 | 10.8 |
| #121820 | 214 | 28 | 9.8 | 5.5 | 3.2 |
| #0f6e6e | 180 | 76 | 24.5 | 37.3 | 0.7 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #5f6b77 | 11.2 | 42 | 9.4 | 64.6 |
| #101820 | 33.3 | 9.4 | 6.3 | 19.2 |
| #dfe5ea | 20.8 | 89.6 | 4.3 | 3.9 |
| #8794a0 | 11.6 | 57.8 | 9.8 | 3.5 |
| #3d4a56 | 17 | 28.8 | 9.8 | 2.6 |
| #909dab | 13.8 | 61.8 | 10.6 | 1.6 |

## Composition
- Main region **1440px**; prose cap 1136px; horizontal bleed: false
- Alignment: 26 distinct left edges, **11** cover 80% of content
- Grid primitives: `3-col: px px px` ×1
- Density: 198 visible elements, **198/screenful**
