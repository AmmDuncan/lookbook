# `reskin` / `relayout` — the compose-then-skin command

Interview-driven flow for building a screen as **composition first, skin second**, then iterating on either axis **independently**. This is the operational front-door to the composed-recipe catalog (`harvest/HARVEST.md`) and the skin-token system.

> **The one idea:** a screen = **composition** (the skeleton: shell, where filters/actions/nav live, table-vs-cards, what's pinned, how it reads) **× skin** (the paint: color · type · radius · elevation · density · border · accent-discipline tokens). The two are orthogonal. Pick a composition, drop a skin on it. Change one without disturbing the other. **5 palette reskins of one layout = 1 design, not 5.** Variety lives in composition; consistency lives in skin.

Invoke when the user says "reskin", "relayout", "restyle this", "give me this layout in our brand", "same look, different layout", or "build me a <archetype>" and you want the worked starting point instead of cold-deriving.

---

## Phase 0 — Frame (one question if unclear)

Is this a **new build** (no composition yet) or an **iteration** on an existing surface?
- New build → Phase 1 (Compose) → Phase 2 (Skin).
- Iteration → jump to Phase 3 and pick the lever (`reskin` or `relayout`).

## Phase 1 — COMPOSE (lock the skeleton first)

1. Name the **archetype** and the **job** (view-oriented vs edit-oriented — it changes the gate later; see SKILL.md). Map to one of the 20 archetypes in `harvest/HARVEST.md → COMPOSED RECIPES`.
2. Open that archetype's recipe. It lists **5 composition variations**, each with the families it pulls + **why they team up**. Pick the composition whose *bones* fit the job — e.g. list-index: "toolbar-classic" (dense table + bulk bar) vs "card-rows" (human-readable records) vs "command/dense" (keyboard-first). Pull the worked HTML from `harvest/specimens/<file>.html` as the starting skeleton.
3. If nothing fits cleanly, **assemble** from the atom/molecule galleries in `harvest/specimens/` (App Shell / Sidebar / Header / Tabs / Input Pattern / Badge / Card / Data Display / Overlay / List-Avatar-Timeline / Usage Examples), guided by the recipe's "recurring team-ups" line.
4. **Lock the composition in a neutral skin** so the structure is judged on its own. Do NOT skin-shop yet — a half-skinned skeleton hides structural problems.

Output of Phase 1: a working layout in the neutral skin. Run `check-layout.mjs` against sibling compositions so it isn't a re-skin of one you already have.

## Phase 2 — SKIN (apply paint uniformly)

Interview for the skin token set (ask only what you can't infer from the project/brand):
- **Color** — brand/primary accent (read it from the project theme if one exists; Rule: discover before inventing), bg, surface, ink, muted, border, status.
- **Type** — font-family voice (system-sans / grotesque / serif-hero / mono-data). See `patterns/typefaces.md`.
- **Radius** — sharp (0) / slightly-rounded / rounded / pill.
- **Elevation** — flat / hairline-border / soft-shadow.
- **Density** — compact / comfortable / spacious.
- **Accent discipline** — how loud, how often (≤ a few instances per screen).
- **Mode** — light / dark / both (use `light-dark()` or a dark override; the contrast gate checks both).

Resolve to a single token block (start from a skin source in `harvest/specimens/` or a `kits/*/_tokens.css`) and **apply it across every composition on the screen uniformly**. The skin must NOT change the layout — only `:root`/token values + the type face. Composition = skeleton, skin = paint; any composition renders coherently in any skin.

Output of Phase 2: the same layout, now skinned. Re-render.

## Phase 3 — ITERATE (two independent levers)

- **`reskin`** — swap the skin token set; **composition untouched**. Use when the layout is right but the look should change (rebrand, light↔dark, denser, rounder, a different type voice). Only `:root`/tokens/font change.
- **`relayout`** — swap the composition; **skin carried over**. Use when the look is right but the structure should change (table → cards, sidebar → top-nav, add a detail rail). Pull a different composition variation from the same archetype recipe and re-apply the *same* skin tokens.

Either way: re-render + run the gates (Phase 4). State which lever you pulled so the change is legible.

## Phase 4 — Verify (every iteration)

Run the existing Lookbook gates — they don't change just because you started from a recipe:
- `node scripts/check-contrast.mjs <file>` (AA, faint tier, light + dark)
- `node scripts/check-focus.mjs <file>` (visible focus ring on every interactive element)
- `node scripts/check-layout.mjs <file> <siblings…>` (not a fake-variety re-skin)
- The render-and-LOOK loop + depth/flow/a11y sweeps + the verification receipt (SKILL.md).

## Guardrails (baked in — these bit us, don't reship them)

- **Toggles** must render a visible sliding thumb (a contrasting circle, left=off / right=on) in BOTH states.
- **Badges / pills / chips / tags** hug their content (`inline-flex` / `width:fit-content`) — never stretch full-width (a flex-column child inherits `align-items:stretch`; set `align-self:flex-start`).
- **Charts** to the chart standard: smooth curves (Catmull-Rom), 1px muted gridlines or none, single accent stroke, thin even donut (no 3D), consistent-width bars on a shared baseline, tabular-numeral axis labels, generous padding — designer-drawn, not script-drawn.
- **No AI-slop**: no glassmorphism, neon/glow, purple→blue gradients, neumorphism, skeuomorphism, fake illustration (use hairline-striped placeholders for imagery).
- **Scope interactive controls to their own composition frame** on any multi-composition specimen page — page-global selectors collide across compositions.
- WCAG AA throughout.

## Why this beats cold-deriving

The composed-recipe catalog is 20 archetypes × 5 worked compositions, each render-verified and labeled with *why the pieces team up*. Starting from a recipe means a weak model ships a coherent page by **pulling**, not inventing; the skin layer keeps a whole product consistent; the two-lever iteration makes "make it on-brand" (reskin) and "change the structure" (relayout) cheap, separate moves instead of a full rebuild.
