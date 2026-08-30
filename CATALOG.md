# Lookbook catalog — the single source of truth

**If you are looking for design reference, start here and nowhere else.** Every live file in this
library is listed below. If something is not on this page, it is not part of the library — either it
was removed (see the bottom section) or it is scaffolding.

Last catalogued: 2026-08-30.

---

## Order of sources (when you need a layout)

1. **Specimens** (`harvest/specimens/`) — rendered variation sheets. **Render one and LOOK at it.**
   Grepping a specimen's headings gives you variant names and copy, never composition; composition
   lives in the pixels.
2. **Cookbooks** (`cookbooks/`) — the recipe for a named surface, written to be applied.
3. **Reproductions** (`reproductions/`) — a real shipped screen rebuilt, with notes on what makes it work.
4. **Patterns + evidence** (`patterns/`, `evidence/`) — the reasoning and the research behind a surface.
5. **Specs** (`references/specs/`) — what the big design systems actually specify.
6. Only then: an external reference (Mobbin), and deriving from principles LAST.

`fundamentals.md` and `the-design-brain.md` are what you JUDGE against — not what you generate from.

---

## 1 · Specimens — `harvest/specimens/` (64 sheets)

Per-family variation sheets and composed page recipes. The first place to look for any layout.
Catalogued in detail in `harvest/HARVEST.md`.

**Component families**
`App Shell Variations` · `Sidebar Variations` · `Header Topbar Variations` · `Button Variations` ·
`Card Variations` · `Badge, Chip & Tag Variations` · `Input Pattern Variations` ·
`Tabs & Segmented Variations` · `List, Avatar & Timeline Molecules` · `Data Display Gallery` ·
`Overlays & Navigation Gallery` · `Overlay Compositions` · `Component Gallery` ·
`Monochrome Component Gallery` · `Editorial Component Gallery` · `Usage Examples - Molecules & Organisms`

**Studies** (drill-downs on one hard question)
`Action & Commit Placement` · `Authentication Flow` · `Internal Auth` · `Bulk-Select Action Bar` ·
`Calendar Event-Creation` · `Case Review & Action-Center` · `Containment & Chrome Context` ·
`Dashboard Shell & Widget` · `Filter Placement` · `Inbox & Thread` · `Kanban Board` ·
`Long-Form Organization` · `Master-Detail Reveal` · `Mobile App Shell` · `Pagination & Load-More` ·
`Per-Row Action Affordance` · `Pricing Plan` · `Printable Financial Document` · `Responsive Reflow` ·
`Role-Gated UI` · `Stepper & Progress Orientation` · `Tenant Accent Theming` · `View-Mode & Density` ·
`Adding Personality to UI` · `Marketing Sections` · `Auth Screens`

**Composed recipes** (whole pages, 5 composition-distinct variations each)
`Activity Feed Notifications` · `Admin User Management` · `Analytics Overview` · `Auth Onboarding` ·
`Calendar Scheduling` · `Card Gallery Grid` · `Checkout Wizard` · `Create Edit Form Flow` ·
`Dashboard Home` · `Detail Record Page` · `Empty First-Run States` · `Error Pages` ·
`Inbox Messaging` · `Kanban Board View` · `List Index View` · `Pricing Plans` ·
`Profile Public Page` · `Reports Export Builder` · `Search Results Page` · `Settings`

---

## 2 · Cookbooks — `cookbooks/` (17 recipes)

How to build one named surface, end to end.

`charts` · `command-palette` · `dashboard-kpi` · `data-table` · `dense-data-list` · `details-rail` ·
`editorial-index` · `forms` · `marketing-hero` · `modal-and-repeater` · `ops-console` ·
`pricing-table` · `reading-surface` · `registers` · `settings-page` · `state-as-shape` ·
`synthetic-product-imagery`

---

## 3 · Reproductions — `reproductions/` (14 real screens)

A shipped product screen rebuilt faithfully, each with `.html` (the build), `.md` (what makes it
work) and `@2x.png` (the reference shot).

`causal-chart` · `clickup-settings` · `deel-table` · `editorial-article` · `editorial-index` ·
`epidemic-pricing` · `fibery-landing-hero` · `forms` · `lemni-inbox` · `linear-issue-list` ·
`linktree-modal` · `ops-console` · `vapi-cmdk` · `whop-dashboard`

---

## 4 · Patterns — `patterns/` (25 guides)

The reasoning for a surface type: what the choices are and why one wins.

`accessibility` · `approach` · `assets` · `auth` · `checkout` · `containers` · `dashboard` ·
`detail` · `empty-states` · `engagement` · `feed` · `form` · `identity` · `layout` · `list` ·
`marketing` · `mobile` · `molecules` · `motion` · `pricing` · `search` · `site-archetypes` ·
`states` · `typefaces` · `usability`

## 5 · Evidence — `evidence/` (24 studies)

The research a pattern rests on — one per surface, same names as `patterns/` plus `app-shell`.

---

## 6 · Specs — `references/specs/` (55 systems)

What the major design systems actually specify, as `.spec.md` + `.spec.json` pairs: Ant, Atlassian,
Carbon, Chakra, Polaris, Gestalt, Twilio Paste, Material, Primer, Radix, Spectrum, GOV.UK and more.
Reach for these to settle "what is the accepted value for X".

---

## 7 · Core docs (root)

| File | What it is |
|---|---|
| `SKILL.md` | The skill definition — how to use the library, by project stage |
| `README.md` | Entry point; what Lookbook is and is not |
| `fundamentals.md` | The design fundamentals to judge against |
| `the-design-brain.md` | How to reason about a surface |
| `anti-patterns.md` | What not to do, with the failure each causes |
| `verification.md` | The render-and-look loop |
| `depth-rubric.md` | How much depth a surface needs |
| `archetype-completeness.md` | Whether an archetype has been covered properly |
| `PROGRESSIVE-GENERATION.md` | Generating a surface in passes |
| `AGENTS.md` | Notes for agents working in this repo |

## 8 · Gallery + apps — `apps/`

`apps/gallery/` holds 18 rendered guide pages (Atoms, Molecules, Organisms, Foundations, Layout,
States, Motion, Identity, Imagery, DataViz, Personality, Recipes, Marketing, Auth, Approach,
SiteArchetypes, Variation, Guide). `apps/palette/`, `apps/sidebars/`, `apps/typefaces/` are small
utilities.

## 9 · Scripts + gates — `scripts/`

Measurement and render scripts. **Most `measure-*.mjs` / `check-*.mjs` files here are now symlinks
into `~/.claude/wren/gates/`** — wren owns the gates; this repo consumes them. `references/visual/`
is where the visual-pass gate writes its scratch output; it is gitignored and regenerable, never
reference material.

---

## REMOVED 2026-08-30 — do not go looking for these

The library had accumulated a parallel, dead layer. It is gone. If you find prose in an older doc
that still mentions any of it, **the prose is stale and this catalog wins.**

| Removed | Why |
|---|---|
| `kits/` (warm-editorial, cool-technical, marketing) | The three-named-voice model. Its own `COVERAGE.md` declared it "conceptually superseded" and the artifacts "untrusted" — it stayed on disk anyway and kept getting cited. A skin is a token set you choose per project, not one of three named voices. |
| `registers/float-*.html` | The rendered demos of those same three voices, plus `dark-editorial` and `bold-expressive`. |
| `packages/tokens/skins/cool-technical.css` | The token file for the dead voice system. |
| `references/visual/*` (81M) | Per-run gate scratch — hundreds of screenshots from past wren runs (`afcas-*`, `vfm-*`, `fees-*`). Regenerable, never reference. The directory survives, gitignored, because the gate writes there. |
| `STATUS.md` | Tracked a package (`@lookbook/ui-vue`) that was removed in May 2026. |
| `KIT.md` | Index of the removed kits. |
| `RESKIN.md` | How to reskin between the removed named voices. |
| `PERSONA-skill-design-advisor.md`, `BRIDGE-self-service.md`, `PRODUCT.md`, `CHECKLIST.md` | One-off scaffolding, superseded by `SKILL.md` and the cookbooks. |

**The replacement idea, in one line:** a register is any number of voices expressed as a token set,
not a fixed three — see `cookbooks/registers.md`.
