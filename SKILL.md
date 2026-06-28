---
name: lookbook
description: >-
  Use when designing, building, OR EXPLORING any web-app UI — pages, components,
  layouts, forms, dashboards, detail/list pages, auth, styling/composing a
  screen, AND mockup/design exploration (easel pushes, brainstorming visual
  companion, Claude Design prompts, static HTML mockups, Figma explorations,
  "show me N directions"). It is design intelligence, not just a component
  library: use it EVEN when the project keeps its own components and never
  imports Lookbook — including a new flow inside an already-established app, not
  only greenfield or full redesigns. Establishes the Lookbook design system
  (tokens, component specs, page recipes, composition grammar) so every screen
  and mockup is consistent, on-brand, accessible, and never generic-AI. Do NOT
  use for pure logic / state / data / backend work with no visual decisions, or
  to faithfully reproduce an off-system external design (that steps outside it).
---

# Lookbook — the UI design mastermind

## The layers — pull each on demand

Lookbook is layered; load only what the task needs. From fastest-start to deepest:

- **`harvest/HARVEST.md` + `RESKIN.md` — compose-then-skin (START HERE for app screens).** The 20-archetype composed-recipe catalog + the build command. The fastest correct start for a full screen — see the next section.
- **`the-design-brain.md` — the principles spine** (the *why*). 5 laws · 4 lineages · the Job→Hierarchy→Grid→Tokens→Components→States→Polish process · the type/space/color/depth/motion scales · anti-slop · domain playbooks. Validated by reproduction; a tighter distillation of `fundamentals.md`, which remains the cited-rule floor.
- **`cookbooks/` — per-surface recipes earned by reproducing a real screen** (not self-graded). When the surface you're building matches a cookbook, load it — it beats `patterns/*` for that surface because it was proven against reality. Cookbooks grow by coverage; `patterns/` and `kits/` are superseded surface-by-surface as cookbooks reach them.
- **`depth-rubric.md` + `verification.md` — judge & verify.** The depth floor, the gates, the receipt. Load before shipping substantial output (summarized below).

The brain and cookbooks are how you *judge and deepen* what compose-then-skin lets you *pull*; the render-and-look discipline (below) is additive to all of it and is Lookbook's unique value. Older self-graded layers (`patterns/` rules, `kits/` artifacts) are **untrusted reference** until re-earned through the reproduction gate (`EXPERIMENT.md`) — treat `kits/` specimens as the layer that shipped AP28.

## Compose-then-skin — the composed-recipe catalog (START HERE for app screens)

The newest empirical layer sits **above** the brain and cookbooks as the *fastest correct start* for a full screen. It encodes one idea proven across 20 archetypes:

> **A screen = COMPOSITION × SKIN.** Composition is the skeleton (shell · where filters/actions/nav live · table-vs-cards · what's pinned · how it reads · the interaction pattern). Skin is the paint (color · type · radius · elevation · density · border · accent-discipline tokens). They are **orthogonal** — pick a composition, drop a skin on it, change either without disturbing the other. **Variety lives in composition; consistency lives in skin.** Five palette reskins of one layout = one design, not five.

> **Source = the variations; skin = OPEN.** The thing you *pull from* is the **variation layer** — the `* Variations` component-family sheets, the `* Studies` drill-downs, and the composed recipes (all in `harvest/specimens/`). Use them as **source or inspiration** for the composition. The **skin is whatever paint you choose — NOT limited to the skins named in this skill, and not limited to Lookbook at all.** Bring a brand's own palette + type, a skin from another system, or one composed from scratch (the dial space: `cookbooks/registers.md`), and apply it to any variation. The named/example skins exist to show the dials moving, not to be picked from a fixed menu. Lookbook deliberately ships **no** fixed-preset "built dashboards" — using a skin Lookbook never listed is the normal case.

- **`harvest/HARVEST.md` — the catalog.** A by-component-family dictionary PLUS a `COMPOSED RECIPES` section: **20 page archetypes** (analytics · list-table · list-grid · detail · dashboard-home · search · reports · kanban · inbox · calendar · activity-feed · admin · settings · create/edit · checkout · auth/onboarding · pricing · profile · empty-states · error-pages), each with **5 composition-distinct variations** named + the families each pulls + **why the pieces team up** (the recommended-pairing rationale) + a recurring-team-ups line. Plus a `SKINS & how to apply` section defining the full skin token set. A weak model can read this, pick an archetype, and **pull** a coherent page instead of cold-deriving it.
- **`harvest/specimens/` — the worked HTML** for every recipe + the atom/molecule galleries the recipes pull from (App Shell / Sidebar / Header / Tabs / Input / Badge / Card / Data Display / Overlay / List-Avatar-Timeline / Usage Examples) + the skin sources. **Adapt** a specimen as the starting skeleton — learn its composition grammar and rebuild it on the project's own tokens and components; never transplant its raw HTML into a real app (an un-remapped specimen is an off-system tell). The specimens teach the *bones*, not the bytes.
- **`RESKIN.md` — the command.** Interview-driven build: **compose first → skin second → iterate on two independent levers (`reskin` = swap skin, layout fixed · `relayout` = swap composition, skin carried).** Invoke for "build me a <archetype>", "reskin/restyle this", "same look, different layout", or any rebrand/restructure. It bakes in the guardrails (visible toggle thumb · content-hugging pills · designer-drawn charts · scope controls per composition-frame · anti-slop · AA).

**The build flow (recipe-first):** identify archetype → pull the matching **composition** from `HARVEST.md` (HTML in `specimens/`) → lock it in a neutral skin → pick ONE **skin** and apply uniformly → assemble any extra pieces from the galleries → render + run the gates below → iterate via `reskin`/`relayout`. This is *additive*: `the-design-brain.md` is still the **why** (principles), `cookbooks/` are the deeper per-surface **earned** recipes, and every gate/sweep below still runs. The catalog is the **pull-from starting point**; the brain and cookbooks are how you judge and deepen what you pulled.

## Read this first — every time

**Before any UI work** (design, mockup, code, exploration), load `fundamentals.md` from this skill directory. It is the hard floor — measurable rules with concrete numbers, cited by ID (`F1`, `F2`, …). Keep the rule IDs in mind while designing and cite them in narration when applying or evaluating choices ("body 16px/1.55 [F3]; section padding 96px [F11]; one accent at 5 instances max [F17]").

> **To GENERATE directions/screens, your FIRST action is to open the variation specimens and pull (`harvest/specimens/` — `* Variations` sheets · `* Studies` drill-downs · composed recipes; catalog `harvest/HARVEST.md`).** `fundamentals.md` and `the-design-brain.md` are the **floor you judge against, not the source you generate from** — never cold-derive a layout from principles when a specimen exists to pull. (This is the #1 misfire: deriving from the brain instead of pulling from the source. See protocol step 3.)

**Once the page archetype is identified** (per the composing-a-page protocol below), additionally load `patterns/<archetype>.md` if it exists. Patterns inherit from fundamentals and add surface-specific calibrations.

**Also load the cross-cutting patterns** the surface actually involves (not just its archetype) — each only when its trigger applies:

| Pattern | Load when the surface… |
|---|---|
| `patterns/accessibility.md` | **always** — the non-color a11y floor (see the always-run checks below) |
| `patterns/states.md` | is a data view or fires any async action (loading · error · empty · partial-failure · optimistic · offline) |
| `patterns/usability.md` | a human *operates* it (≈ nearly all) — recognition-over-recall, cognitive-load budget, good defaults, error-prevention, the latency budget |
| `patterns/engagement.md` | ships to real users — the **P-EN-10/11 ethical floor** (manipulation tests + deceptive-pattern taxonomy) applies to *every* such product; the habit mechanics (P-EN-01..09) only when return-visits genuinely benefit the user |
| `patterns/mobile.md` | needs the three-width reflow (≈ always) |
| `patterns/motion.md` | has animation or transitions |
| `patterns/containers.md` | uses a modal / slideover / full page |
| `patterns/typefaces.md` | is picking a type voice (the by-voice font menu; specimen `apps/typefaces/index.html`) |
| `patterns/approach.md` · `identity.md` · `site-archetypes.md` | is a **new product or site** (the framing step) |

**If the project has a `personality.md`** (at project root or `design/personality.md`), load it too. It lists declared deviations from the fundamentals + the project's signature move. Anything not declared there must follow the floor.

**Step 0 — render it and LOOK at the pixels (before any sweep).** Rules can't see flatness, a mis-wrapped headline, a clipped texture, or "text-on-paper" emptiness (AP22) — only your eyes on the *rendered* output can. Never verify from the markup. *How* you render depends on the environment, so don't assume — **ask the user once which they have, then reuse that choice for the session:**
1. **The project's running app** — its dev server + whatever browser tool the user has (Claude-in-Chrome, agent-browser, Playwright, or a manual screenshot they paste). Highest fidelity; use for real in-app screens.
2. **A headless screenshot of a static file** — for standalone mockups/HTML: any installed Chrome/Chromium in headless screenshot mode, or an equivalent renderer.
3. **A mockup surface** — easel or the brainstorming visual companion render pushed HTML you can then view.

If none is obvious, ask which is available rather than guessing. Then look, critique against the north star (*is it genuinely good?* — not merely rule-passing), fix, and **re-render after each fix** until it holds. This look-fix-look loop is where craft becomes legible; the sweeps below only catch what rules can express.

**The depth rubric — earn designed depth, or the surface reads flat.** A model's self-grade has a dryness blind spot — it calls its own flat work shippable. Don't rely on taste; **count designed substance.** A **functional** surface earns depth on **≥2** of: a compositional anchor · hierarchy with real contrast · type-character on the numbers that matter · data showing a *relationship* (not a lone reading) · a genuine secondary view. An **expressive** surface needs an anchor + show-don't-tell + ≥1 more. Depth comes from *designing more, not decorating more* — ornament fails AP20/AP22/AP23/AP24. Edit-oriented surfaces trade read-depth for **flow cost**: count clicks, never reward a richer view that adds edit clicks. The axes are *illustrative, not a stamp* — vary the instantiation (a dark rail is one anchor option, not the answer). Full rubric, the view-vs-edit job split, and the anti-stamp guard: **`depth-rubric.md`** — load it on any dryness-prone surface or a "feels flat" reaction.

**Before you call any design done — the firm floor (full procedure, gates & receipt in `verification.md`):**
- **Look at the pixels, never the markup.** No "done / looks good / shipped" claim without a render you actually viewed. If you can't render here, deliver but flag it **visually unverified** ("I have not seen this — please render it") — never assert it's good unseen. A NEW surface you generate (a proposal mockup, an alternative direction) gets its OWN render-and-look **before** you push it — pushing is *delivery, not iteration*.
- **Run the two always-skipped checks explicitly:** color-as-text **contrast** (`node scripts/check-contrast.mjs <file>`, or the pair-form `contrast.mjs` — a blocking gate; fill-valid ≠ text-valid) and **responsive** (render THREE widths — 1280 / 768 / 390 — and LOOK; the tablet band breaks most). Plus the non-color **a11y** floor (`patterns/accessibility.md`) and, for production user-facing flows, the **engagement-ethics** floor (`patterns/engagement.md`).
- **Then the two sweeps:** fundamentals `Check:` lines (fix or declare in `personality.md`), and the `anti-patterns.md` "looks like AI" sweep (rework until under 3 tells).
- **For substantial output**, emit the verification **receipt** (render · contrast · anti-patterns · depth · alignment spine · flow cost) and run an **adversarial critic** — the work is done when it survives an adversary, not when it looks good to its author. The receipt format and the deterministic gates (`check-layout.mjs` / `check-focus.mjs`) live in **`verification.md`**.

**Converge, then deliver.** The render-and-look loop is *private self-critique* — render, look, fix, re-render until genuinely good, then deliver; a look that reveals a problem means another fix, not delivery. Translated into a real app → re-verify there (different cascade, real data, real states) or flag it visually-unverified.

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
1. **Design with Lookbook guidance** — brainstorm / mock up the screen or flow (easel, visual companion, static HTML, Figma) using Lookbook's tokens, recipes, and component *styling*, exactly as if it were on-system. The mockup is the target. **That mockup is itself a designed surface — run Step 0 against it (render it, look at the pixels) before treating it as a deliverable or pushing it.** Auditing an existing UI and then *proposing* a redesign are two surfaces, two render-and-looks — don't let the audit's receipt stand in for the proposal's.
2. **Build it on the project's own components** — implement using whatever primitives the app already has. Match the Lookbook-guided design: the spacing, radius, states, hierarchy, the calm/dense rhythm. You're translating the visual language onto existing parts, not swapping the parts.
3. **Then optionally evolve the project's components toward the design** — once a screen is designed to Lookbook's standard, you *may* choose to bring the app's shared components up to match (adopt the field fill, the chip treatment, the focus ring, the empty/error states). Incremental and opt-in — make the project's components match the generated design when it's worth it, not as a precondition.

**The point:** designing a new flow *inside an already-established app* is squarely in scope. Lookbook guides the decisions and the styling; the components can stay the project's own. Never decline or downgrade the guidance just because the app won't import Lookbook.

---

## The cardinal rule: converge on vocabulary, diverge on composition

This resolves the central tension — consistency vs. "every page looks the same":

- **Converge at the token + primitive layer.** The same Badge, the same `--accent`, the same spacing scale, everywhere. This is the consistency you *want* — it's what makes two pages feel like one product and what lets a re-skin ripple through for free.
- **Diverge at the composition layer — and, when asked for genuinely distinct directions, at the visual-expression and shell layers too.** *How* a page is arranged (grid, column split, rhythm) is the default axis of variety; for distinct directions you also vary *how the tokens are spent* (light vs. dark rail, surface model, accent placement) and the *shell* (sidebar vs. topbar vs. workbench) — all still inside the token contract, never a new palette or one-off parts. See **How to make 3 directions**.

Never introduce ad-hoc colors, spacing, or one-off components (that breaks convergence). Never force every page into one identical template (that kills healthy divergence). Variety comes from composition and from how the system is *spent* — not from reinventing the parts.

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

### Asset sourcing — reach for these, don't wait to be told
A ban only says what to avoid. When a build needs a concrete asset, **pick and source it yourself** — full detail + real sources in **`patterns/assets.md`** (`P-AS`):
- **Icon?** → ONE monoline set, **Lucide** default, inline as a `<symbol>` sprite, `currentColor`. Reuse `kits/cool-technical/_icons.svg` or pull from `lucide-static`. Swap the set wholesale; never emoji, unicode, or a hand-drawn one-off (`P-AS-01`/`P-MOL-11`).
- **Empty-state / first-run / marketing spot?** → a recolorable open illustration (**Popsy / unDraw**) remapped to tokens, OR a large Lucide mark for product registers; style tracks the register (`P-AS-02`/`P-MOL-12`).
- **Type voice?** → a **display + sans** pairing via `identity.md` tokens (gallery → Foundations), **never Inter-only** (`P-AS-03`).
- **Hero visual / logo / social proof?** → product-true imagery, a bespoke mark, a monochromed logo wall — never stock (`P-AS-04`/`P-M-07`).

The discipline for every class: **bind the asset to the tokens** (recolor to `--accent`/`--ink`/`--subtle`, scale to the type/space tokens) — a raw asset dropped in un-remapped is an off-system tell.

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
4. Every interactive atom ships all states; every data view ships **loading + empty + error (+ success)** — not optional (the full state machine, plus partial-failure / optimistic-rollback / stale-while-revalidate / offline and the empty≠error≠loading truth-split, lives in `patterns/states.md`). For the **per-archetype "don't forget" floor** — the easy-to-miss pieces by surface type (list: first-run-empty *and* filtered-no-results *and* bulk bar; form: validation + unsaved guard + submitting state; dashboard: per-widget states; etc.) — run **`archetype-completeness.md`** at build time. This is design-system law in *both* modes.

---

## Composing a page — the protocol

When building, redesigning, OR adding a new screen/flow inside an existing app (any mode — even when you'll build on the project's own components):

0. **Frame it — SHOW, don't ask.** For a new product/site, *a new flow in an existing app*, OR *a redesign*: **do NOT interrogate the user with abstract personality / brand-archetype adjectives** ("calm/precise", "bold/energetic", "editorial", "technical", "luxe", "playful" — that vocabulary means nothing to someone who just wants to *see* a design, and it contradicts the variations-as-source model). Instead **lead by showing** — generate 2–3 concrete directions from the variation layer and let the user *react and pick* (the Review intake, step 6). Ask ONLY the handful of inputs you genuinely can't infer and shouldn't guess, in plain concrete terms, via structured multiple-choice with a recommended default: **brand / accent color · light vs dark · desktop vs mobile · what screens are in/out of scope** (for a redesign, also: what's broken today · what must stay · how far to go). Everything else — the six dials, density, archetype, the signature — you **derive** from the job + brand + content and **express in the directions you show**, never put to the user as mood-words. (Mechanics + the adapted concrete question set: `patterns/approach.md` P-AP-11; the dials are *inferred* per P-AP-05, not asked.) Then run the rest of `patterns/approach.md` (job → archetype → density → the six dials → one signature *on expressive surfaces only*); for site-level shape load `patterns/site-archetypes.md` (shell choice + the cross-page invariants; gallery → **SiteArchetypes** for specimens); derive the brand token system with `patterns/identity.md` (gallery → **Identity** + **Imagery** for specimens).
1. **Identify the page archetype** (gallery → **Recipes**): CRUD list · record detail/profile · create/edit form · wizard/onboarding · settings · search & results · feed/activity · dashboard · checkout/billing · pricing · detail-with-map · kanban.
2. **Pull the recipe** — its Ingredients (which components), Required states, and responsive note.
3. **Generate 2–3 directions — by PULLING from the variation library, NOT by deriving from principles. This is the primary path.** Each direction **starts from a named variation specimen**: open `harvest/specimens/` and pull/adapt a composition from the `* Variations` family sheets, the `* Studies` drill-downs, or a composed recipe (catalog: `harvest/HARVEST.md`). **Source first — pull a specimen, then adapt it to the job + chosen skin.** ⚠️ **Do NOT cold-derive directions from `the-design-brain.md` / `fundamentals.md` / `patterns/*`** — those are for *judging and deepening* what you pulled, **never the generator**. The tell you went wrong: a direction that didn't begin from a specimen. (If no specimen fits the surface, say so explicitly and adapt the nearest one — don't silently fall back to deriving from scratch.) Then use the three-direction-types method (see **How to make 3 directions**) to make them genuinely distinct — vary composition / how the tokens are spent / the shell, *never the token system itself* (same accent, fonts, primitives); `patterns/layout.md` (gallery → **Layout**) and `patterns/site-archetypes.md` are *reference for the axes*, not the source. For a new or important surface, render all directions and let the human choose — **presented in the user's chosen view surface, not as a bare path** (see *Presenting directions* below). (On expressive surfaces an optional single signature move may distinguish a direction — gallery → **Variation**; on functional surfaces, none.)
4. **Build the chosen direction** from Lookbook primitives + tokens, with all required states. **Source assets as you go — `patterns/assets.md` (`P-AS`): icons → Lucide sprite, illustrations → recolored Popsy/unDraw, fonts → display+sans pairing, imagery → product-true. Don't wait to be told which to use; bind each to the tokens.** Cite fundamental rule IDs (`F<n>`) in narration as decisions are made — body size, spacing, hierarchy, accent placement — so the application is auditable.
   - **Lock the two scales first — before placing anything.** Name the **type scale** (the `F2` ratio + the actual size ramp you'll spend, e.g. 1.25 → `13 · 16 · 20 · 25 · 31 · 39`) AND the **spacing scale** (the `F8` base + the `F9` geometric ramp, e.g. 4px base → `4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96`). Then *every* `font-size` reduces to the type ramp and *every* `margin / padding / gap` reduces to the spacing ramp — an off-ramp value (a 22px gap, a 19px heading) is a bug (`F2`/`F8`/`F9`), not a choice. Declaring both ramps up front is what turns "modular scale" and "spacing rhythm" from aspirations into things you (and the receipt) can actually check; skip it and sizes/gaps drift ad-hoc and the page loses its rhythm even when each value "looks fine."
   - **Manifest the primary shell surfaces — each one cites a specimen.** Before building an app screen, enumerate its primary shell surfaces — **nav rail · top/context bar · stat/KPI treatment · primary viz · table chrome · active-nav state · empty / loading / error states** — and for EACH name the source it's pulled from: `<specimen file> · variant <name/number>` (gallery → the relevant Variations file: rail → `Sidebar Variations.html`, top bar → `Header Topbar Variations.html`, whole shell → `App Shell Variations.html`, table/data → `Data Display Gallery.html`). **"Default" / "generic" is not an allowed answer for a primary surface.** A bare white 240px rail or an undifferentiated topbar that wasn't pulled from a specimen is the `AP29` tell (generic shell chrome) — it reads as unfinished scaffold. If a surface genuinely needs none, say so explicitly. This is the step that stops attention from going only to the "obvious" surfaces (cards, KPIs, charts) while a primary shell surface quietly regresses to a generic default — the exact miss when a build is under-specified, **especially when it's handed to a sub-agent** (see the handoff note in `RESKIN.md`: *under-specified surface = generic surface*).
5. **Verify against `fundamentals.md`** — walk the `Check:` lines for measurable rules, confirm the rendered output complies, and flag any violation. A violation must be either fixed or declared in `personality.md` with a justification. Undeclared deviations are not a choice — they are bugs.
6. **Present and pull reaction — the Review intake** (the bookend to the Frame-it intake, step 0). First **present the render(s) in the user's chosen view surface** — ask once per session how they want to see directions (browser / easel / screenshots / running app), then reuse it; never just hand over a file path (see **Presenting directions** below). Then, **don't lock the design on your own eye.** Your self-grade has a taste ceiling (it routinely fails to see its own flatness); the user's eye is the authority. ASK for structured reaction through the host's question UI, then feed it into a revise cycle. See **The Review intake** below.

### How to make 3 directions (without breaking consistency)

**Source the directions by PULLING from the variation specimens first (step 3) — this method only describes how to make the pulled directions *distinct*, not where they come from.** Each direction begins as an adapted specimen (`harvest/specimens/`), never a from-principles derivation.

**First decide what "direction" means here.** "Another direction / option / take / version" is ambiguous, and the common miss is varying only the shallowest layer — panels rearranged, everything else identical — so two "directions" read as the same screen. Three layers can vary:

1. **Composition** — same visual language + shell; varies *arrangement*: focal region / emphasis, region split, order, section rhythm, density.
2. **Visual** — same requirements + shell; varies *how the tokens are spent*: light vs. dark rail, accent-on-fill vs. accent-on-text, elevated-card vs. flat-bordered vs. table-first surface, type rhythm, contrast model, active-nav treatment, KPI & chart presentation.
3. **Structural** — varies the *shell / nav model*: sidebar vs. topbar vs. icon-rail, split-pane vs. workbench vs. report-page (the sanctioned shells in `patterns/site-archetypes.md`).

**Ask which layer should vary** when the user hasn't said (offer the structured choice: composition / visual styling / shell / any combo). **If they say proceed without answering, default to VISUAL + COMPOSITION — never composition-only.** Two directions must never read as the same screen with the panels moved.

**This doesn't break the cardinal rule — it *spends* the system, it doesn't abandon it.** Every layer stays inside the token contract: a visual direction re-spends the SAME `--accent` / `--surface` / type tokens (a dark rail and a light rail are the same tokens applied differently, not a new palette); a structural direction picks from the SAME sanctioned shells. **Converge on the token system; diverge on composition, visual expression, and shell.** Still banned is *ad-hoc* divergence — a new accent, off-scale spacing, a one-off component, or three genuinely different design languages. (Battle-tested: three directions that varied shell / surface / KPI / density on one fixed token set read as "same design language, different implementations" — distinct yet unmistakably one product.)

**Acceptance check (for a visual direction):** ≥3 of these must visibly differ between directions — rail styling (light / dark / topbar) · active-nav treatment · surface/card model · table treatment · KPI treatment · type scale/rhythm · accent placement · density rhythm · chart presentation · header/action treatment. If only emphasis / split / rhythm moved, you produced one direction three times.

### Granularity — the machinery behind the cardinal rule (treatment vs composition)
The cardinal rule has concrete parts. **Treatment atoms** (`hero-figure`, `stat`, `table-row`, `chart`, `status`, `shell-frame`) ARE the vocabulary — they recur on purpose (coherence). **Composition recipes** (`hero + stat-row`, `hero-solo`, `stat-tiles`, `hero + rail`, `dual-hero`…) ARE the composition — they vary with the brief (variety). The discipline that keeps them honest: **a molecule carries treatment, never a frozen layout** (if a unit dictates *where things sit relative to each other*, split it — it's a composition, not a molecule), and **recipes must be structurally distinct** (boxing/density are flags, not separate recipes). This is what stops a "design system" from quietly homogenizing — the failure where the same prominent block recurs across every screen. Full machinery, atom/recipe catalogs (for BOTH registers), and the picker: **`patterns/molecules.md`**. Two runnable registers: **`kits/cool-technical/`** (data/app surfaces — its `KIT.md` picker + the `packages/tokens/skins/cool-technical.css` skin) and **`kits/marketing/`** (marketing/convince surfaces — `README.md`, governed by `marketing.md`/`pricing.md`). Pick the register by surface job via the root **`KIT.md`**. The marketing `recipe-cta` is the cleanest cross-register example of the treatment-vs-composition split. Tells: `anti-patterns.md` AP26 (over-composed molecule) · AP27 (near-duplicate recipes).

### Presenting directions — let the user pick the view surface (once per session)

A generated direction is worthless to the user as a bare file path. **Before pulling reaction, present the renders in a surface the user chose — and let them choose.** The first time you present in a session, offer the surfaces you can actually use (a capability ladder — lead with the highest-fidelity available) through the host's structured choice, let the user pick, then **reuse that pick for the rest of the session** (they can override anytime). Don't silently default to one, and never hand over a path and stop.

- **Open the HTML in a browser** — the live, interactive page at real responsive width (the OS "open" command, the user's browser tool, or a dev-server URL). Highest fidelity for a static mockup; the user can resize and click. *Usually the recommended lead.*
- **A mockup / presentation surface** — push to easel or the brainstorming visual companion as a *labeled* gallery (best for N-up comparison and presentation framing), when one is available.
- **Rendered screenshots** — the 3-width PNGs from Step 0, shown inline if the chat surface renders images, else as file paths. Quick and shareable, but static.
- **The running app** — for an in-app flow, the live dev-server URL at the route.

Whichever surface, **label each direction** (A / B / C + its one-line emphasis) so the choice is legible. The Step-0 renders are the artifacts; this is how the user *views* them — it precedes the Review intake's reaction pull.

### The Review intake — show → react → revise

The closing half of the human eye-gate, and the mirror of the Frame-it intake: the intake pulls *direction* before composing; this pulls *reaction* after presenting. It exists because the design must converge on the **user's** judgment, not the builder's — a model's "I'd ship it" has a taste ceiling and a flatness blind spot, so the user's eye is the authority, and you capture it deliberately instead of waiting for free-form "make it better."

After presenting any non-trivial UI (a finished screen, or N directions), pull reaction through the host's **structured multiple-choice** UI — give the user *options to react to*, never an open "thoughts?" (hard to answer well). Keep it light: one gut-check, drill in only if they want changes.

- **Gut check (always):** *"How does this land?"* → **Ship it · Close — small tweaks · Needs real work · Wrong direction.** If "ship it," stop — don't fish for problems.
- **What to change (only if not ship-it):** multi-select over the levers you can actually act on — **accent / color · density (too tight / too airy) · fonts & overall feel · a specific region (hero / chart / table / nav / …) · "it feels flat or boring" · "it'd be tiresome to use repeatedly" · hierarchy / what's emphasized · copy & tone.** Deliberately offer **"feels flat or boring"** — the *user-perceivable* signal for the one thing rules and a model's self-grade routinely miss (the dryness blind spot); and on any editable surface also offer **"it'd be tiresome to use repeatedly"** — the user-perceivable signal for *flow* cost, the edit-surface blind spot the depth rubric and a model's self-grade both miss (a richer-looking proposal can read great and cost more clicks). On either, the user is the detector the brain can't be; "tiresome" routes back to the Flow audit.
- **Direction picker (if 2–3 were shown):** which is closest, and what to borrow from the others.

Then **map each reaction to the lever that owns it and re-enter the loop:**
- color/accent → `patterns/identity.md` (P-ID dials; re-verify on-color, F66)
- density → `F26` / `patterns/approach.md` P-AP-03
- fonts & overall feel → identity dials / `F1`
- a specific region → composition variants (P-AP-10) / `patterns/layout.md`
- **flat / boring → a depth pass** — run **the depth rubric** (Step 0) against the surface and earn the missing axes: a bolder compositional anchor, a *relationship* in the data viz, type-character on the key numbers, a genuine secondary view. *Designed*, not decorated (AP20/AP23/AP24 hold).
- hierarchy / emphasis → P-AP-10
- copy & tone → `F67`–`F69`

**Revise → re-render and LOOK → re-present → re-ask the gut check**, until "ship it." Record what changed against the readout (P-AP-09). The Frame-it intake (before) and the Review intake (after) bookend the work with the user's eye.

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
- When asked for **"N directions"**, **pull each from a variation specimen first** (`harvest/specimens/` — the `* Variations` sheets, `* Studies`, composed recipes; NOT derived from principles, see protocol step 3), then make them distinct with the three-direction-types method (vary composition / token-spend / shell; see **How to make 3 directions**). **Present them in the user's chosen view surface** (ask once per session — browser / easel / screenshots / running app), each direction labeled; never just hand over a file path (see *Presenting directions*).

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

## Worked example — adopting Lookbook on an existing component (Mode B)

*The component-level lens: bringing one hand-rolled component up to the gallery spec. For the page-level **compose-then-skin** flow on a DVLA detail page, see the README's worked example — this one is its complement, not a repeat.*

**Before** (`VehicleServiceDetailHero.vue`): the status pill is ~40 lines of inline conditional Tailwind using raw default colors — `bg-emerald-500/20 text-emerald-100`, `bg-rose-400/20`, `bg-amber-300/20`. Tabs and the key-facts grid are hand-rolled too.

**After (Lookbook):**
- Status pill → `<Badge :tone="status.tone" dot>{{ status.label }}</Badge>`, driven by `--success/warning/danger-bg/-fg`. No stock Tailwind colors.
- Tabs → the Tabs primitive (underline variant).
- Key-facts strip → a shared `KeyFacts`/description-list primitive.

Result: the hero re-skins with the brand for free, and the same Badge / Tabs / tokens carry to every other detail page — each free to pick a *different* composition (per the compose-then-skin section) without forking the parts.
