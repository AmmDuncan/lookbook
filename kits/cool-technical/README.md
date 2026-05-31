# Kit — Cool-technical (runnable molecule library)

A self-contained, runnable reference kit for the **cool-technical** register (Linear / Vercel /
Stripe surfaces): cool-slate neutrals + off-axis indigo accent, for metrics/data-dense admin UIs.
This is the concrete machinery behind the brain's cardinal rule (*converge on vocabulary, diverge
on composition*) — see `patterns/molecules.md` for the model and `anti-patterns.md` AP26/AP27.

## What's here
- **`_tokens.css`** — the coherence layer. Include once; every atom reads it. (Adopting over
  `@lookbook/tokens` instead? Use `packages/tokens/skins/cool-technical.css`.)
- **`KIT.md`** — the picker: dials → atoms → recipes → composition grammar → depth floor → restraint.
- **Atoms (treatment):** `atom-shell-frame` · `atom-figure` (hero-figure + stat) · `atom-table-row`
  · `atom-chart` · `atom-status` · `atom-overlay` (modal/slideover shell) · `atom-empty` (DM-1) ·
  `atom-cmdk` (⌘K, DM-2). Each shows its genuine variants. (Icons are unicode PLACEHOLDERS —
  swap for one monoline set per P-MOL-11.)
- **Recipes (composition):** `recipe-figure` — `hero + stat-row` · `hero + rail` · `stat-tiles`
  · `hero-solo` · `dual-hero`. `recipe-table` — `toolbar-list` · `filter-rail-list` ·
  `grouped-list` · `split-list`. Structurally distinct (boxing is a flag, not a recipe).
- **Organisms (verified worked examples):** `organism-ops-console` · `organism-infra-monitoring`
  · `organism-account-detail` · `organism-revenue-overview`. Same kit, four different skeletons.

## How to use
1. Include `_tokens.css` once at the app root. Never hardcode a value that lives there.
2. Pick the atom variant + composition recipe that fit the brief (KIT.md guides this).
3. Spend the character budget once; honor the restraint, inner-scroll, and shell-seam disciplines.

## Provenance
Each file's top comment cites its grounding ("distilled from a study of real shipped products" —
Linear, Vercel, Stripe, Mercury, Ramp). Battle-tested 2026-05-30 via a weak-builder (Sonnet)
compose-vs-free-design trial: the kit lifted taste and compelled appropriate composition variety.
Open any file headless to render; the whole kit is WCAG-AA gate-clean (`scripts/contrast.mjs`).
