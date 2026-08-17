# Spec card — c-shell

**Source:** c-shell.html  
**Captured:** 2026-08-09 · 1440×1421

## Spacing
- Base unit **2px**, 73% of values on scale
- 13 distinct values; steps used: 16, 24, 5, 2, 9, 40, 10, 8, 3, 12, 4
- **Proximity 2.67×** (median per-group ratio, 10 groups — 4 nested, 6 within-container)
  - typical inside-group gap 7.5px · typical between-group gap 16px *(independent medians — don't divide these)*
- → space encodes grouping strongly *(confidence: high)*

## Type
- Families: Inter, Newsreader
- Body **12.5px**; 12 sizes: 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 15, 17, 18, 22, 34
- Weights: 400, 500, 600 · **20 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **size** (spread — size 0.71, weight 0.33, ink 0.4)
- Prose measure ≈ **57.5 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 12.5 | 400 | #85817a | 1.55 | 0 | Home |
| 13 | 400 | #55534e | 1.55 | 0 | Ministry of Roads & Highways · MDA, Greater Accr |
| 17 | 400 | #55534e | 1.55 | 0 | Every pre-award matter before the Office, in the |
| 18 | 500 | #1a1a19 | 1.25 | 0 | Rehabilitation of the Accra–Kumasi Highway, Sect |
| 11 | 600 | #85817a | 1.55 | 1.21 | Matters open |
| 12.5 | 500 | #55534e | 1.55 | 0 | GHS 48,600,000 |
| 11.5 | 600 | #5f211a | 1.55 | 0.23 | Overdue — technical review |
| 12 | 400 | #85817a | 1.7 | 0 | Threshold register v4, effective 1 July 2026 Ste |
| 11.5 | 600 | #2c6046 | 1.55 | 0.23 | Assessment |
| 13.5 | 400 | #55534e | 1.55 | 0 | Screening |

## Colour & depth
- Page bg #fbfaf8; max background chroma **4.7**
- Chromatic area **0.4%** → accent is scarce
- Neutrals tinted 6/8 → neutrals are tinted (designed)
- Depth: 27 bordered / 0 shadowed → **borders only, zero resting shadows**
- Radius scale: 2, 50 · gradients: 0

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #ffffff | 0 | 0 | 100 | 0 | 8 |
| #f7edeb | 10 | 42.9 | 94.5 | 4.7 | 0.8 |
| #e9f0ec | 146 | 18.9 | 92.7 | 2.7 | 0.6 |
| #f7efdc | 42 | 62.8 | 91.6 | 10.6 | 0.4 |
| #f2f0ec | 40 | 18.7 | 93.7 | 2.4 | 0.3 |
| #5f211a | 6 | 57 | 23.7 | 27.1 | 0 |
| #2c6046 | 150 | 37.1 | 27.5 | 20.4 | 0 |
| #8a6212 | 40 | 76.9 | 30.6 | 47.1 | 0 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #85817a | 4.3 | 50 | 4.3 | 36.6 |
| #55534e | 4.3 | 32 | 2.7 | 35.3 |
| #1a1a19 | 2 | 10 | 0.4 | 14.5 |
| #5f211a | 57 | 23.7 | 27.1 | 5.5 |
| #2c6046 | 37.1 | 27.5 | 20.4 | 3.6 |
| #8a6212 | 76.9 | 30.6 | 47.1 | 2.5 |

## Composition
- Main region **1440px**; prose cap 626px; horizontal bleed: false
- Alignment: 35 distinct left edges, **12** cover 80% of content
- Grid primitives: `3-col: px px px` ×5 · `4-col: px px px px` ×1
- Density: 149 visible elements, **94/screenful**
