---
name: lookbook
description: Use when designing, building, OR EXPLORING any web-app UI — pages, components, layouts, forms, dashboards, detail/list pages, auth, styling/composing a screen, AND mockup/design exploration (easel pushes, brainstorming visual companion, Claude Design prompts, static HTML mockups, Figma explorations, "show me N directions"). Establishes the Lookbook design system (tokens, component specs, page recipes, composition grammar) so every screen AND every exploratory mockup is consistent, on-brand, accessible, and never generic-AI. Trigger for any frontend/UI work or visual exploration, not just final builds. Lookbook is design intelligence, not just a component library: use it EVEN when the project keeps its own components and never imports Lookbook — it guides the design and styling, and the project's components can be brought to match afterward. Applies to designing flows inside an already-established app, not only new projects or full redesigns.
---

# Lookbook — the UI design mastermind

## Read this first — every time

**Before any UI work** (design, mockup, code, exploration), load `fundamentals.md` from this skill directory. It is the hard floor — measurable rules with concrete numbers, cited by ID (`F1`, `F2`, …). Keep the rule IDs in mind while designing and cite them in narration when applying or evaluating choices ("body 16px/1.55 [F3]; section padding 96px [F11]; one accent at 5 instances max [F17]").

**Once the page archetype is identified** (per the composing-a-page protocol below), additionally load `patterns/<archetype>.md` if it exists. Patterns inherit from fundamentals and add surface-specific calibrations.

**Also load the cross-cutting patterns** for whatever the surface actually involves, not just its archetype: `patterns/states.md` (loading / error / empty / partial-failure / optimistic / offline — any data view or async action), `patterns/motion.md`, `patterns/mobile.md` (the three-width reflow), `patterns/containers.md` (modal vs slideover vs page), and `patterns/accessibility.md` (the non-color a11y floor — see the always-run checks below). For a new product or site, the framing step also loads `patterns/approach.md`, `patterns/identity.md`, and `patterns/site-archetypes.md`.

**If the project has a `personality.md`** (at project root or `design/personality.md`), load it too. It lists declared deviations from the fundamentals + the project's signature move. Anything not declared there must follow the floor.

**Step 0 — render it and LOOK at the pixels (before any sweep).** Rules can't see flatness, a mis-wrapped headline, a clipped texture, or "text-on-paper" emptiness (AP22) — only your eyes on the *rendered* output can. Never verify from the markup. *How* you render depends on the environment, so don't assume — **ask the user once which they have, then reuse that choice for the session:**
1. **The project's running app** — its dev server + whatever browser tool the user has (Claude-in-Chrome, agent-browser, Playwright, or a manual screenshot they paste). Highest fidelity; use for real in-app screens.
2. **A headless screenshot of a static file** — for standalone mockups/HTML: any installed Chrome/Chromium in headless screenshot mode, or an equivalent renderer.
3. **A mockup surface** — easel or the brainstorming visual companion render pushed HTML you can then view.

If none is obvious, ask which is available rather than guessing. Then look, critique against the north star (*is it genuinely good?* — not merely rule-passing), fix, and **re-render after each fix** until it holds. This look-fix-look loop is where craft becomes legible; the sweeps below only catch what rules can express.

**After the design is built**, run a verification pass in two sweeps. First, fundamentals: walk the rules that have a `Check:` line, confirm the rendered output complies, and flag violations. A violation must be either fixed or moved to `personality.md` with a justification — undeclared deviations are not a choice. Second, load `anti-patterns.md` and run the "looks like AI" sweep: count the tells (`AP1`…), report the IDs in narration, and rework until under 3. Fundamentals catch broken rules; anti-patterns catch a technically-correct-but-generic result.

**Two checks the pass must always run explicitly — they get skipped silently otherwise:**
- **Color-as-text contrast.** Run the checker, don't eyeball: `node scripts/contrast.mjs "<fg>:<bg>:<label>" …` on every non-neutral text/surface pair, every status label on its tint, and every filled control's label on its fill (F15, F54, F55, F66). It exits non-zero on any failure — a blocking gate; paste the table into the verification. Fill-valid ≠ text-valid; same-hue text-on-tint is the default failure.
- **Responsive + touch.** A desktop-only render cannot prove F50–F53 — so **render THREE widths and LOOK: desktop (~1280) / tablet (~768) / mobile (~390).** Two widths is the common trap; the medium/tablet band breaks most often (cramped grids, awkward N→1 column jumps) precisely because it's skipped. Stating the reflow hides what only appears at width: nav overflow, cramped toolbars, lost affordances, sub-44px targets. Confirm content parity (nothing essential `display:none`'d without an affordance, F50), intermediate reflow (no direct N-col→1-col jump), and a coarse-pointer F52 check. See `patterns/mobile.md` for the reflow grammar + mobile-native compositions (nav, filter sheet, bottom sheet).
- **Alignment spine.** List every section's content width and trace its left/right edge down the page (F74). Widths must reduce to ≤3 sanctioned measures on one shared axis; narrower sections nest inside the wider container, not off to the side. This one hides from the contrast/AP/copy sweeps — each section looks fine alone while the page reads as assembled. Run it explicitly. (Across multiple pages of one product, the axis must hold *between* pages too — `patterns/site-archetypes.md` P-SA-02.)
- **Accessibility semantics.** Contrast (above) is only half of a11y. Load `patterns/accessibility.md` and confirm the *non-color* floor against the markup — it's deterministic and skipped silently otherwise: every control has an accessible name (icon-only buttons especially, P-AY-01), native `<button>`/`<a>` not `<div onclick>` (P-AY-02), a visible `:focus-visible` ring ≥3:1 (P-AY-03), logical focus order + full keyboard operability (P-AY-04), landmarks + one `<h1>` (P-AY-05), the dialog focus contract (P-AY-06), errors associated via `aria-invalid`/`aria-describedby` (P-AY-07), async changes announced via a live region (P-AY-08), target size ≥24px / 44px-coarse (P-AY-09), no color-only meaning (P-AY-10), a skip link (P-AY-11), and a reduced-motion fallback (P-AY-12).

A template for the project file lives at `personality.template.md` in this skill — copy and fill in for new projects.

---

Lookbook is the design system every UI is built from. Four layers:

1. **Tokens** (`@lookbook/tokens`) — the contract, and the **one shipped package**. CSS custom properties for color, spacing, radius, shadow, type, motion, sizing, status, tints. The single source of truth.
2. **Component specs** — the gallery + styling rules define what each primitive *looks and behaves like* (variants, sizes, states). Lookbook is **not** a component library you install — you build the primitives on your own stack (or vendor a reference implementation) to match these specs.
3. **Recipes** — sanctioned page-level compositions per archetype.
4. **Composition grammar** — how to lay out a blank page (grid, regions, reflow).

The **gallery** (`apps/gallery`, the Claude Design export) is the canonical *visual* spec. This file is how to *use* it. When in doubt, open the relevant gallery chapter and match it.

---

## Lookbook is design intelligence, not (just) a component library

**Do not read this skill as "only for new projects, full re-skins, or apps that import `@lookbook/ui-*`."** Lookbook is bigger than its components — it is *how to design good, on-system, non-generic UI*: the tokens, the recipes, the composition grammar, the component **specs and styling**, the banned-tells list. All of that applies **even when not a single Lookbook component ships in the project.**

There are **two modes of adoption**, and both are first-class. Pick per task; you do not need permission to use Mode B.

**Mode A — adopt Lookbook's layers directly.** Install `@lookbook/tokens` (the one shipped package) and build — or vendor a reference implementation — the primitives to the gallery specs so they literally power the app. Best for greenfield, or a full re-skin where you're (re)building the component layer. The "Using components" / "Per-project setup" sections below assume this mode. (There is no component package to `npm install` — Lookbook ships the tokens, the specs, and the brain; the primitives are yours.)

**Mode B — Lookbook as a design guide (the common case for established apps).** The project keeps using **its own existing components** (`components/ui/`, legacy primitives, whatever's there). Lookbook never gets imported. Instead you *borrow its visual language* — token values, spacing/radius/shadow scale, type hierarchy, the recipe for the archetype, the composition directions, the component **styling specs** (what a good Field / Card / Badge / Tabs *looks and behaves like*) — and design the screen or flow to that standard. This is fully legitimate. A great design guided by Lookbook, built on the project's own components, is a *success*, not a compromise.

**The Mode-B workflow (design-first, adopt-on-demand):**
1. **Design with Lookbook guidance** — brainstorm / mock up the screen or flow (easel, visual companion, static HTML, Figma) using Lookbook's tokens, recipes, and component *styling*, exactly as if it were on-system. The mockup is the target.
2. **Build it on the project's own components** — implement using whatever primitives the app already has. Match the Lookbook-guided design: the spacing, radius, states, hierarchy, the calm/dense rhythm. You're translating the visual language onto existing parts, not swapping the parts.
3. **Then optionally evolve the project's components toward the design** — once a screen is designed to Lookbook's standard, you *may* choose to bring the app's shared components up to match (adopt the field fill, the chip treatment, the focus ring, the empty/error states). Incremental and opt-in — make the project's components match the generated design when it's worth it, not as a precondition.

**The point:** designing a new flow *inside an already-established app* is squarely in scope. Lookbook guides the decisions and the styling; the components can stay the project's own. Never decline or downgrade the guidance just because the app won't import Lookbook.

---

## The cardinal rule: converge on vocabulary, diverge on composition

This resolves the central tension — consistency vs. "every page looks the same":

- **Converge at the token + primitive layer.** The same Badge, the same `--accent`, the same spacing scale, everywhere. This is the consistency you *want* — it's what makes two pages feel like one product and what lets a re-skin ripple through for free.
- **Diverge at the composition layer.** *How* a page is arranged — the grid, the column split, the rhythm — is where variety lives.

Never introduce ad-hoc colors, spacing, or one-off components (that breaks convergence). Never force every page into one identical template (that kills healthy divergence). Variety comes from composition, not from reinventing the parts.

**The three-layer model (how a project becomes recognizably itself):**
1. **System** — tokens + primitives. Identical across every project.
2. **Personality dials** — per-project token *values* (accent, fonts, neutrals, radius, density), set from the brand via **Identity**.
3. **Signature move** — exactly **one** pick from **Variation**'s catalog (oversized type, asymmetric hero, edge anchor, etc.), used **at most 3 times** on a page, built last, and removable without breaking the layout.

Two signatures cancel each other out. Five of six dials match the chosen brand archetype; the sixth is the deliberate wildcard (see **Approach**). This is how every project shares DNA yet none look the same.

---

## Tokens — the contract

- Everything references token names: `--bg`, `--surface`, `--border`, `--text-primary/secondary/muted`, `--accent`/`--accent-hover`, status `--success/warning/danger/info-bg/-fg`, `--space-*`, `--radius-*`, `--shadow-*`, type `--text-*` + `--font-display/sans/mono`, `--size-*`, `--tint-1..6-*`, motion `--duration-*`/`--ease-*`.
- **Re-skin = override values in `:root`**, never hardcode. Accent, fonts, neutrals, and radius personality are all re-skin dials.
- **The gradient/secondary accent (`--accent-gradient`, `--accent-secondary`) is hero/CTA/signature ONLY** — never on cards, atoms, status, or in-product UI.
- Light/dark via `[data-theme]`. Full reference + theme presets: gallery → **Foundations**.

### Banned (the generic-AI tells)
Raw Tailwind default colors (`bg-emerald-500`, `text-rose-100`, `bg-amber-300/20`), hardcoded hex/px where a token exists, Inter-everywhere with no display face, purple→blue gradients, glassmorphism by default, emoji-as-icons, pure-white page backgrounds, missing interaction/empty/error states.

---

## Lists, search & overflow (DVLA-proven patterns)

- **Long or growing list → `Combobox`, not `Select`.** Select is for small bounded sets (regions, statuses, year ranges). Anything that grows (users, vehicles, businesses, officers) uses `Combobox`.
- **`Combobox` clears its search on open** so the full list shows, not a list pre-filtered to the current selection's label. (Baked in — don't re-implement.)
- **Paginated/backend list → server-side search.** Wrap the endpoint in `useServerSearch(fetcher)` (debounced 300ms + a **seen-map** so a selected item keeps its label after it leaves the results batch), and pass `server-side`, `:options`, `:loading`, and `v-model:search-term` to `Combobox`. Never dump `page_size: 100` and filter client-side for growing data.
- **Scroll-arrow overflow → `OverflowScroll`.** For lists/rows that overflow (horizontal tile strips, capped-height lists), wrap them in `OverflowScroll` (press-and-hold arrows, fade edges, vertical/horizontal/both) instead of a bare scroll container.

## Using components

This is the **Mode A** path (primitives built/vendored to Lookbook's specs). In **Mode B**, swap "the project's spec-built primitives" for "the project's own existing component layer" throughout — the gallery spec is still the standard you build/style *to*, you're just building it on the app's own primitives.

1. **Check for an existing primitive** — in the project's own `components/ui/` (or wherever its primitives live), including any vendored from Lookbook's specs.
2. **If it exists** — use it, and verify it matches the gallery spec (variants, sizes, states). If it drifts, fix the primitive, don't fork it. In Mode B, "fix the primitive" means bring the *project's* component up to the Lookbook styling spec.
3. **If it doesn't exist** — build it to the gallery spec (in the shared UI package for Mode A, or as a proper project component for Mode B). **Never one-off it inline.**
4. Every interactive atom ships all states; every data view ships **loading + empty + error (+ success)** — not optional (the full state machine, plus partial-failure / optimistic-rollback / stale-while-revalidate / offline and the empty≠error≠loading truth-split, lives in `patterns/states.md`). This is design-system law in *both* modes.

---

## Composing a page — the protocol

When building, redesigning, OR adding a new screen/flow inside an existing app (any mode — even when you'll build on the project's own components):

0. **Frame it** — for a new product/site *or a new flow in an existing app*, run `patterns/approach.md` first (job → archetype → density → the six dials → one signature *on expressive surfaces only*); for site-level shape load `patterns/site-archetypes.md` (shell choice + the cross-page invariants; gallery → **SiteArchetypes** for specimens); derive the brand token system with `patterns/identity.md` (gallery → **Identity** + **Imagery** for specimens).
1. **Identify the page archetype** (gallery → **Recipes**): CRUD list · record detail/profile · create/edit form · wizard/onboarding · settings · search & results · feed/activity · dashboard · checkout/billing · pricing · detail-with-map · kanban.
2. **Pull the recipe** — its Ingredients (which components), Required states, and responsive note.
3. **Generate 2–3 composition directions** using `patterns/layout.md` (the composition grammar; specimens in gallery → **Layout**). Vary **primary/secondary emphasis**, the **region split**, and the **section rhythm** — *never* the design language. This is where variety comes from: distinct *compositions* of one clean system, not decoration bolted on. For a new or important surface, render all directions and let the human choose. (On expressive surfaces an optional single signature move may distinguish a direction — gallery → **Variation**; on functional surfaces, none.)
4. **Build the chosen direction** from Lookbook primitives + tokens, with all required states. Cite fundamental rule IDs (`F<n>`) in narration as decisions are made — body size, spacing, hierarchy, accent placement — so the application is auditable.
5. **Verify against `fundamentals.md`** — walk the `Check:` lines for measurable rules, confirm the rendered output complies, and flag any violation. A violation must be either fixed or declared in `personality.md` with a justification. Undeclared deviations are not a choice — they are bugs.

### How to make 3 directions (without breaking consistency)
Same components, same tokens. Only vary:
- **Emphasis** — what's the focal region? (hero-led vs. content-led vs. summary-led)
- **Split** — single column vs. `1fr + rail` vs. sticky-summary split vs. stacked-with-anchors.
- **Rhythm/density** — airy vs. compact section spacing.

Directions are "different arrangements of the same kit," not different design languages.

---

## Layout grammar (summary — full grammar in `patterns/layout.md`, specimens in gallery → Layout)

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

## When an external source is named (a public site, Dribbble, Figma…)

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
import "@lookbook/tokens/tokens.css";   // shared contract — the one installable package
// build (or vendor) the primitives to the gallery specs; there is no component package
```
- Point Tailwind theme at the CSS vars (see `@lookbook/tokens` README).
- Override skin tokens in the app's `:root`.
- `tokens.css` is shared **verbatim**; the primitives are the project's own, **built/vendored to the gallery spec** and kept in sync with it.

---

## Gallery map (18 chapters, grouped)

- **Approach** — how to approach a design problem (read first for strategy).
- **System** — `Foundations` (tokens + theme presets + font pairings) · `Atoms` · `Molecules` · `Organisms` · `States`.
- **Flows** — `Auth`.
- **Brand** — `Identity` · `Personality` · `Imagery`.
- **Craft** — `Motion` · `DataViz`.
- **Outward** — `Marketing` · `SiteArchetypes` (pick the site/app archetype).
- **Reference** — `Layout` (composition grammar) · `Recipes` (page archetypes) · `Variation` (how to make designs differ without breaking the system) · `Guide` (decision rules).

The gallery ships a grouped chapter switcher (top-right, `G` shortcut).

---

## Worked example — DVLA service-detail hero

**Before** (`VehicleServiceDetailHero.vue`): the status pill is ~40 lines of inline conditional Tailwind using raw default colors — `bg-emerald-500/20 text-emerald-100`, `bg-rose-400/20`, `bg-amber-300/20`. Tabs and the key-facts grid are hand-rolled too.

**After (Lookbook):**
- Status pill → `<Badge :tone="status.tone" dot>{{ status.label }}</Badge>`, driven by `--success/warning/danger-bg/-fg`. No stock Tailwind colors.
- Tabs → the Tabs primitive (underline variant).
- Key-facts strip → a shared `KeyFacts`/description-list primitive.
- The page composition follows the **Record detail** recipe; alternate directions come from the Layout grammar.

Result: the hero re-skins with the brand for free, and three other detail pages can each pick a *different* composition direction while sharing the exact same Badge, tabs, and tokens.
