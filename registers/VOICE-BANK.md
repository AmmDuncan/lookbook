# Voice Bank — dashboard-capable registers (pick-from index)

A bank of **earned** voices for **functional / dashboard / admin** surfaces. Each is a *point in the dial-space* (not a fixed preset to stamp) — pick the nearest, then **diverge composition** for your brief (`check-layout.mjs` keeps you honest). This bank exists so a model — Sonnet included — can pick a proven starting look without deriving a voice from cold.

**Earn bar (every entry):** rendered on the constant "Harbor" dashboard content → `check-contrast` PASS (body ≥4.5, faint ≥3, badges/accent text ≥4.5) · `check-focus` PASS · `check-layout` distinct bones from siblings · render-looked · adversarial critique survived. Un-earned candidates do NOT go in the table.

**Constant content (the harness):** Harbor ops dashboard — sidebar nav + topbar + 4-KPI strip + revenue-vs-baseline chart + recent-transactions table (status badges) + empty Activity panel. Same content per voice so every difference is pure voice. Specimens: `registers/dash-<voice>.html`. Skins: the `:root` block in each specimen (copyable).

## The dials (what varies between voices)

`surface` (light/warm/dark) · `density` (airy↔dense) · `depth` (flat/bordered/shadowed) · `radius` · `type` (face pairing) · `data-number type` (grotesque tabular / mono) · `accent` (hue + discipline) · `composition` (the bones — vary per brief).

## The bank

| Voice | Reach for it when | surface | density | depth | radius | type | numbers | accent | Specimen |
|---|---|---|---|---|---|---|---|---|---|
| **civic** ✅ | official / government / "must get it right"; legibility + trust over flair | cool off-white | compact-comfortable | flat, 1px borders | 4px (squared) | system grotesque | tabular grotesque | institutional blue, restrained | `dash-civic.html` **earned** |
| **dark-ops** ✅ | mission-control / observability / trading; status-at-a-glance, numbers are the star | dark | dense | panel-lightness elevation | 6px | Geist + Geist Mono | mono tabular, prominent | electric blue `#58a6ff` | `dash-darkops.html` **earned** |
| **soft-admin** ✅ (approved) | humane internal tools; approachable, not corporate | warm off-white | comfortable | soft shadow, no borders | 16px (rounded) | Geist | tabular grotesque | teal `#0f766e` | `dash-soft.html` **earned** |
| **brutalist-mono** ✅ | dev tools / docs admin; raw, precise, engineer-grade | stark warm-grey | dense | hard 1.5px ink borders, no shadow, exposed grid | 0px | Geist Mono | mono tabular | loud orange `#d6400a` | `dash-brutalist.html` **earned** |
| **premium-fintech** ✅ | high-end money / considered B2B; restrained, expensive | refined neutral | airy | hairline + whisper shadow | 9px | Lora serif hero + Geist data | tabular grotesque | deep emerald `#0f5d46` | `dash-premium.html` **earned** |
| **calm-clinical** ✅ | health / care / sensitive contexts; reassuring, low-anxiety | cool airy | comfortable | soft, low elevation | 18px | Geist | tabular grotesque | calm sky-blue `#1f7aa8` | `dash-calm.html` **earned** |

## How to pick (for any model, Sonnet included)
1. Match the **brief's job** to a "reach for it when" row.
2. Copy that specimen's `:root` skin.
3. Build YOUR surface with it — and **move the composition** (different bones than the specimen); run `node scripts/check-layout.mjs your.html registers/dash-<voice>.html` — if it flags a shared skeleton, recompose.
4. Run the gates (`check-contrast`, `check-focus`) on your result. The skin clears them; your composition must too.

_Status: bank under construction (2026-06-18). civic = first earned template._
