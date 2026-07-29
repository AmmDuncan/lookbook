# Spec card — supabase-docs

**Source:** https://supabase.com/docs/guides/auth  
**Captured:** 2026-07-29 · 1440×3761

## Spacing
- Base unit **4px**, 90.5% of values on scale
- 24 distinct values; steps used: 8, 12, 4, 24, 32, 6, 16, 10, 40, 19, 20, 44
- **Proximity 2.2×** (median per-group ratio, 21 groups — 12 nested, 9 within-container)
  - typical inside-group gap 10px · typical between-group gap 22px *(independent medians — don't divide these)*
- → space encodes grouping strongly *(confidence: high)*

## Type
- Families: Inter, Manrope, Source Code Pro
- Body **15px**; 10 sizes: 11, 12, 12.8, 13, 14, 15, 16, 18, 22, 34
- Weights: 450, 500, 600, 700 · **26 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **ink** (spread — size 0.32, weight 0, ink 0.4)
- Prose measure ≈ **94 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 15 | 500 | #464646 | 1.87 | 0 | Supabase Auth makes it easy to implement authent |
| 13 | 500 | #696969 | 1.43 | 0 | Architecture |
| 13 | 500 | #464646 | 1.54 | 0 | Overview |
| 16 | 500 | #464646 | 1.75 | 0 | Start here if you're new to Supabase Auth: |
| 15 | 500 | #030303 | 1.87 | 0 | JSON Web Tokens (JWTs) |
| 12 | 500 | #696969 | 1.33 | 0 | Search |
| 15 | 600 | #030303 | 1.5 | 0 | Apple |
| 12 | 500 | #030303 | 1.33 | 0 | Skip to content |
| 22 | 600 | #030303 | 1.33 | 0 | About authentication and authorization |
| 16 | 700 | #464646 | 1.75 | 0 | Pricing MAU |

## Colour & depth
- Page bg #fdfdfd; max background chroma **0**
- Chromatic area **0%** → accent is scarce
- Neutrals tinted 0/10 → neutrals are near-pure grey (default-ish)
- Depth: 52 bordered / 7 shadowed → **border-led, shadows reserved**
- Radius scale: 8, 6, 4, 33554400 · gradients: 1

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #fdfdfd | 0 | 0 | 99.2 | 0 | 17.8 |
| #ffffff | 0 | 0 | 100 | 0 | 8.6 |
| #fefefe | 0 | 0 | 99.6 | 0 | 1.4 |
| #000000 | 0 | 0 | 0 | 0 | 0 |
| #72e3ad | 151 | 66.9 | 66.9 | 44.3 | 0 |
| #696969 | 0 | 0 | 41.2 | 0 | 0 |
| #030303 | 0 | 0 | 1.2 | 0 | 0 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #464646 | 0 | 27.5 | 0 | 60.9 |
| #696969 | 0 | 41.2 | 0 | 22 |
| #030303 | 0 | 1.2 | 0 | 15.5 |
| #0a874f | 86.2 | 28.4 | 49 | 1.3 |
| #ffffff | 0 | 100 | 0 | 0.3 |

## Composition
- Main region **1440px**; prose cap 706px; horizontal bleed: false
- Alignment: 70 distinct left edges, **14** cover 80% of content
- Grid primitives: `12-col: px px px px px px px px px px px px` ×5
- Density: 767 visible elements, **184/screenful**
