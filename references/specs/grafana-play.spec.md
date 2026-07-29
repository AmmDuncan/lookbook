# Spec card — grafana-play

**Source:** https://play.grafana.org/  
**Captured:** 2026-07-29 · 1440×900

## Spacing
- Base unit **4px**, 89.8% of values on scale
- 17 distinct values; steps used: 8, 4, 16, 7, 12, 3, 10, 15, 24, 20
- **Proximity 2×** (median per-group ratio, 24 groups — 24 nested, 0 within-container)
  - typical inside-group gap 4px · typical between-group gap 9px *(independent medians — don't divide these)*
- → space encodes grouping strongly *(confidence: high)*

## Type
- Families: Inter, Segoe UI
- Body **14px**; 8 sizes: 11.9, 12, 12.6, 14, 15.4, 16.8, 18.2, 28
- Weights: 400, 500, 600, 700 · **18 distinct roles** (size+weight+colour)
- Hierarchy carried mostly by **ink** (spread — size 0, weight 0, ink 0.28)
- Prose measure ≈ **80 chars**

| size | weight | colour | line-height | tracking | sample |
|---|---|---|---|---|---|
| 14 | 400 | #ccccdc | 1.57 | 0.15 | Grafana |
| 14 | 400 | #6e9fff | 1.57 | 0.15 | Automate all the things: How to use Grafana Clou |
| 14 | 400 | #ffffff | 1.5 | 0.15 | Play is a sandbox for testing and learning Grafa |
| 14 | 500 | #ccccdc | 2.14 | 0.15 | Edit |
| 12 | 400 | #ccccdc | 1.5 | 0.15 | What shipped this week |
| 14 | 700 | #000000 | 1.57 | 0.15 | Grafana Cloud |
| 14 | 400 | #38bdf8 | 1.5 | 0.15 | get started fast with the free tier of Grafana C |
| 16.8 | 400 | #ffffff | 1.17 | 0 | 🧪 What is Grafana Play? |
| 12.6 | 400 | #94a3b8 | 1.57 | 0.15 | Senior SRE at COIN Metrics · Grafana Champion |
| 11.9 | 400 | #94a3b8 | 1.57 | 0.15 | Senior Observability Architect |

## Colour & depth
- Page bg #111217; max background chroma **83.1**
- Chromatic area **51%** → accent is dominant
- Neutrals tinted 8/10 → neutrals are tinted (designed)
- Depth: 42 bordered / 9 shadowed → **border-led, shadows reserved**
- Radius scale: 6, 10, 8, 4, 50 · gradients: 1

| background | h | s | l | chroma | area% |
|---|---|---|---|---|---|
| #181b1f | 214 | 12.7 | 10.8 | 2.7 | 306.2 |
| #1f2937 | 215 | 27.9 | 16.9 | 9.4 | 43.7 |
| #111217 | 230 | 15 | 7.8 | 2.4 | 6.8 |
| #0f172a | 222 | 47.4 | 11.2 | 10.6 | 3.6 |
| #f9a825 | 37 | 94.6 | 56.1 | 83.1 | 2.8 |
| #2c2f35 | 220 | 9.3 | 19 | 3.5 | 1.3 |
| #cecede | 240 | 19.5 | 83.9 | 6.3 | 0.7 |
| #475569 | 215 | 19.3 | 34.5 | 13.3 | 0.5 |

| ink | s | l | chroma | share% |
|---|---|---|---|---|
| #ccccdc | 18.6 | 83.1 | 6.3 | 64.7 |
| #6e9fff | 100 | 71.6 | 56.9 | 15.5 |
| #ffffff | 0 | 100 | 0 | 14.4 |
| #38bdf8 | 93.2 | 59.6 | 75.3 | 2.2 |
| #000000 | 0 | 0 | 0 | 1.7 |
| #94a3b8 | 20.2 | 65.1 | 14.1 | 1.3 |

## Composition
- Main region **1440px**; prose cap 557px; horizontal bleed: false
- Alignment: 71 distinct left edges, **20** cover 80% of content
- Grid primitives: `2-col: px px` ×1
- Density: 531 visible elements, **531/screenful**
