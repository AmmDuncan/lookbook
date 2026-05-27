---
name: lookbook
description: Use when designing, building, OR EXPLORING any web-app UI — pages, components, layouts, forms, dashboards, detail/list pages, auth, styling/composing a screen, AND mockup/design exploration (easel pushes, brainstorming visual companion, Claude Design prompts, static HTML mockups, Figma explorations, "show me N directions"). Establishes the Lookbook design system (tokens, component specs, page recipes, composition grammar) so every screen AND every exploratory mockup is consistent, on-brand, accessible, and never generic-AI. Trigger for any frontend/UI work or visual exploration, not just final builds.
---

# Lookbook — the UI design mastermind

Lookbook is the design system every UI is built from. Four layers:

1. **Tokens** (`@lookbook/tokens`) — the contract. CSS custom properties for color, spacing, radius, shadow, type, motion, sizing, status, tints. The single source of truth.
2. **Components** (`@lookbook/ui-vue`, future `ui-react`) — primitives implementing the specs, per framework, built once.
3. **Recipes** — sanctioned page-level compositions per archetype.
4. **Composition grammar** — how to lay out a blank page (grid, regions, reflow).

The **gallery** (`apps/gallery`, the Claude Design export) is the canonical *visual* spec. This file is how to *use* it. When in doubt, open the relevant gallery chapter and match it.

---

## The cardinal rule: converge on vocabulary, diverge on composition

This resolves the central tension — consistency vs. "every page looks the same":

- **Converge at the token + primitive layer.** The same Badge, the same `--accent`, the same spacing scale, everywhere. This is the consistency you *want* — it's what makes two pages feel like one product and what lets a re-skin ripple through for free.
- **Diverge at the composition layer.** *How* a page is arranged — the grid, the column split, the rhythm — is where variety lives.

Never introduce ad-hoc colors, spacing, or one-off components (that breaks convergence). Never force every page into one identical template (that kills healthy divergence). Variety comes from composition, not from reinventing the parts.

---

## Tokens — the contract

- Everything references token names: `--bg`, `--surface`, `--border`, `--text-primary/secondary/muted`, `--accent`/`--accent-hover`, status `--success/warning/danger/info-bg/-fg`, `--space-*`, `--radius-*`, `--shadow-*`, type `--text-*` + `--font-display/sans/mono`, `--size-*`, `--tint-1..6-*`, motion `--duration-*`/`--ease-*`.
- **Re-skin = override values in `:root`**, never hardcode. Accent, fonts, neutrals, and radius personality are all re-skin dials.
- **The gradient/secondary accent (`--accent-gradient`, `--accent-secondary`) is hero/CTA/signature ONLY** — never on cards, atoms, status, or in-product UI.
- Light/dark via `[data-theme]`. Full reference + theme presets: gallery → **Foundations**.

### Banned (the generic-AI tells)
Raw Tailwind default colors (`bg-emerald-500`, `text-rose-100`, `bg-amber-300/20`), hardcoded hex/px where a token exists, Inter-everywhere with no display face, purple→blue gradients, glassmorphism by default, emoji-as-icons, pure-white page backgrounds, missing interaction/empty/error states.

---

## Using components

1. **Check for an existing primitive** in the project's `components/ui/` (Vue) or `@lookbook/ui-*`.
2. **If it exists** — use it, and verify it matches the gallery spec (variants, sizes, states). If it drifts, fix the primitive, don't fork it.
3. **If it doesn't exist** — build it to the gallery spec in the shared UI package. **Never one-off it inline.**
4. Every interactive atom ships all states; every data view ships **loading + empty + error (+ success)** — not optional.

---

## Composing a page — the protocol

When building or redesigning a screen:

1. **Identify the archetype** (gallery → **Recipes**): CRUD list · record detail/profile · create/edit form · wizard/onboarding · settings · search & results · feed/activity · dashboard · checkout/billing · pricing · detail-with-map · kanban.
2. **Pull the recipe** — its Ingredients (which components), Required states, and responsive note.
3. **Generate 2–3 composition directions** using the Layout grammar (gallery → **Layout**). Vary **primary/secondary emphasis**, the **region split**, and the **section rhythm** — *never* the design language. For a new or important surface, render all directions and let the human choose. (This is what makes pages feel distinct while staying consistent.)
4. **Build the chosen direction** from Lookbook primitives + tokens, with all required states.

### How to make 3 directions (without breaking consistency)
Same components, same tokens. Only vary:
- **Emphasis** — what's the focal region? (hero-led vs. content-led vs. summary-led)
- **Split** — single column vs. `1fr + rail` vs. sticky-summary split vs. stacked-with-anchors.
- **Rhythm/density** — airy vs. compact section spacing.

Directions are "different arrangements of the same kit," not different design languages.

---

## Layout grammar (summary — full specimens in gallery → Layout)

- **Grid**: content max-widths (prose ~720px, app ~1280px, full-bleed), token-based gutters + section rhythm.
- **Region splits**: single · `1fr/320px` rail · 2-col · 3-col · asymmetric (8/4, 7/5) — choose by primary/secondary content + scan order; mark sticky regions.
- **Dynamic layout**: `repeat(auto-fit, minmax(Npx, 1fr))` so tiles flow to fit; fluid vs. fixed.
- **Responsive reflow**: rail drops under content, columns stack, tables scroll/stack, sticky→static. Mobile-first, on `--bp-*`.
- **Density**: comfortable (marketing) vs. compact (data admin).

---

## Design & mockup exploration

This skill applies to *exploration*, not just final builds. When producing mockups via **easel pushes, the brainstorming visual companion, Claude Design prompts, static HTML, or Figma** — build them on Lookbook so explorations are already on-system:

- Pull `@lookbook/tokens` (or inline the token `:root` block) into the mockup; use token colors/spacing/type, not ad-hoc values.
- Reuse the component specs (Badge, Tabs, cards, etc.) and the recipe archetypes.
- When asked for **"N directions"**, generate them with the composition-directions method (vary emphasis / split / rhythm, never the design language) — so every direction is consistent and brand-true, and only the layout differs.

## When an external source is named (Mobbin, a site, Dribbble, Figma…)

Lookbook does **not** auto-override an explicitly requested source, and does not silently stay out either. **Ask the user which mode** (use AskUserQuestion), then proceed:

1. **Inspire → land in Lookbook** — use the source for structure/layout ideas, but render in Lookbook tokens + primitives so it's on-system. *(usually recommended)*
2. **Faithful reproduction** — reproduce the source's look as-is; Lookbook steps aside. Say explicitly that the result is intentionally off-system.
3. **Blend** — borrow the source's composition/ideas, keep Lookbook's vocabulary (tokens + components).

Never assume — surface the choice. Default lean: (1) or (3), so external inspiration still ships consistent.

## Accessibility & responsive (non-negotiable)

Visible `focus-visible` rings · 4.5:1 text contrast · ≥44px touch targets (tokens auto-promote on `pointer: coarse`) · label every input · `aria-live="polite"` for toasts/async · `prefers-reduced-motion` fallbacks · mobile-first. Detail: gallery → **Guide**.

---

## Per-project setup (the bridge)

```ts
import "@lookbook/tokens/tokens.css";   // shared contract
// + install @lookbook/ui-vue (or ui-react)
```
- Point Tailwind theme at the CSS vars (see `@lookbook/tokens` README).
- Override skin tokens in the app's `:root`.
- `tokens.css` is shared **verbatim**; components are per-framework, **built once, reused**.

---

## Gallery map

`Foundations` (tokens + theme presets + font pairings) · `Atoms` · `Molecules` · `Organisms` · `Auth` · `States` · `Motion` · `DataViz` · `Marketing` · `Personality` · `Recipes` · `Layout` · `Guide`.

---

## Worked example — DVLA service-detail hero

**Before** (`VehicleServiceDetailHero.vue`): the status pill is ~40 lines of inline conditional Tailwind using raw default colors — `bg-emerald-500/20 text-emerald-100`, `bg-rose-400/20`, `bg-amber-300/20`. Tabs and the key-facts grid are hand-rolled too.

**After (Lookbook):**
- Status pill → `<Badge :tone="status.tone" dot>{{ status.label }}</Badge>`, driven by `--success/warning/danger-bg/-fg`. No stock Tailwind colors.
- Tabs → the Tabs primitive (underline variant).
- Key-facts strip → a shared `KeyFacts`/description-list primitive.
- The page composition follows the **Record detail** recipe; alternate directions come from the Layout grammar.

Result: the hero re-skins with the brand for free, and three other detail pages can each pick a *different* composition direction while sharing the exact same Badge, tabs, and tokens.
