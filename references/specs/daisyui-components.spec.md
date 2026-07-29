# Spec card — daisyui-components

**Source:** https://daisyui.com/components/  
**Captured:** 2026-07-29 · 1440×5334

## Spacing
- Base unit **4px**, 87% of values on scale
- 15 distinct values; steps used: 8, 12, 16, 6, 4, 7, 24, 1, 32
- **Proximity 1.95×** (median per-group ratio, 6 groups — 6 nested, 0 within-container)
  - typical inside-group gap 6px · typical between-group gap 12px *(independent medians — don't divide these)*
- → space encodes grouping *(confidence: medium)*

## Type
- Families: ui-sans-serif, ui-monospace, system-ui, Outfit
- Body **12px**; 6 sizes: 10, 11, 12, 14, 16, 36
- Weights: 400, 600, 800 · **12 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **size** (spread — size 0.22, weight 0, ink 0)

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 12 | 400 | #18181b | 1.5 | 0 | Search… |
| 14 | 400 | #18181b | 1.5 | 0 | Components |
| 14 | 600 | #19191b | 1.5 | 0 | Components |
| 10 | 400 | #18181b | 1.5 | 0 | ads via Carbon |
| 11 | 400 | #18181b | 1.33 | 0 | daisyUI MCP v1.5: Generate unique UIs now! |
| 10 | 400 | #18181c | 1.5 | 0.25 | Beautiful chart integrations |
| 36 | 800 | #18181b | 1.11 | 0 | All daisyUI components |
| 14 | 400 | #18181c | 1.5 | 0 | Docs |
| 11 | 600 | #18181c | 1.5 | 0 | daisyUI Charts |
| 16 | 400 | #18181b | 1.75 | 0 | 68 components |

## Colour & depth
- Page bg transparent (inherits canvas); max background chroma **0**
- Chromatic area **0%** → accent is scarce
- Neutrals tinted 5/10 → neutrals are near-pure grey (default-ish)
- Depth: 86 bordered / 4 shadowed → **border-led, shadows reserved**
- Radius scale: 8, 4, 33554400, 6 · gradients: 0

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #ffffff | 0 | 0 | 100 | 0 | 113.2 |
| #eeeeee | 0 | 0 | 93.3 | 0 | 32.4 |
| #f8f8f8 | 0 | 0 | 97.3 | 0 | 0.8 |
| #18181b | 240 | 5.9 | 10 | 1.2 | 0 |
| #09090b | 240 | 10 | 3.9 | 0.8 | 0 |
| #422ad5 | 248 | 67.1 | 50 | 67.1 | 0 |
| #f43098 | 328 | 89.9 | 57.3 | 76.9 | 0 |
| #00d3bb | 173 | 100 | 41.4 | 82.7 | 0 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #18181b | 5.9 | 10 | 1.2 | 98.2 |
| #19191b | 3.8 | 10.2 | 0.8 | 0.9 |
| #18181c | 7.7 | 10.2 | 1.6 | 0.8 |
| #17171b | 8 | 9.8 | 1.6 | 0.1 |
| #e4e4e7 | 5.9 | 90 | 1.2 | 0 |

## Composition
- Main region **1440px**; prose cap 1px; horizontal bleed: false
- Alignment: 45 distinct left edges, **9** cover 80% of content
- Grid primitives: `2-col: px px` ×10 · `3-col: px px px` ×1
- Density: 832 visible elements, **140/screenful**
