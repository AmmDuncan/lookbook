# Lookbook — build status

_Last updated: 2026-05-29 (deepen pass #2 — states / accessibility / identity / site-archetypes, battle-tested)_

## 2026-05-29 — Deepen pass #2 (battle-tested)

Four candidate brain files authored by blind sub-agents, then each put through a **baseline-vs-deepened battle test** (a blind agent designs one brief on the current brain vs the brain + the new file; renders judged help/neutral/nerf, gated by the user's eye — never self-grade). Outcomes:

- **`patterns/states.md` (P-ST-01..12)** — the unhappy-path / state-machine pattern (loading-skeleton-vs-spinner, error scope, partial failure, optimistic+rollback, stale-while-revalidate, offline, success ceremony, a11y announce) + the empty≠error≠loading truth-split. Battle: **HELP (clear)** — deepened arm designed the full state set; baseline did only filtered-empty. **Shipped.**
- **`patterns/accessibility.md` (P-AY-01..12)** — the non-color a11y floor (names, native elements, focus order/ring, landmarks, dialog contract, error association, live regions, target size, skip link, reduced-motion). Battle = **markup diff** (deterministic, not render): **HELP (modest)** — closed page-level gaps (skip link, async live region) on a baseline already strong from form/containers. **Shipped.** Wired into SKILL's always-run checks.
- **`patterns/identity.md` (P-ID-01..09)** — brand → token-system derivation (accent ramp + F66 on-color, one-accent, type pairing, the four tactile dials, motion register, the one signature, and the **P-ID-09 guardrail**). Battle flagged the first P-ID-09 ("functional surfaces = ZERO decorative identity") as a **NERF** — it stripped a legitimate brand-hero moment, making a Pulse billing panel blander than the no-identity baseline. **P-ID-09 softened**: scan-first *body* = zero decoration; the one expressive element (hero/showcase) may carry a single restrained, removable brand moment; a no-hero surface (warehouse dashboard) still gets zero. Re-rendered to confirm the carve-out doesn't reopen the Variation drift. **Shipped (softened).**
- **`patterns/site-archetypes.md` (P-SA-01..03)** — multi-page composition. Battle was **NEUTRAL for the brief** (F74 + layout.md already deliver cross-page coherence within one shell; a 2-page marketing test didn't stress shell-choice / supporting-pages). **Trimmed from 6 rules to 3** — kept shell choice (P-SA-01), the cross-page axis F74 can't see (P-SA-02), and the supporting-pages test (P-SA-03); dropped the nav-model / persistent-contextual-chrome / entry-exit rules as `layout.md`/IA/`containers.md` restatements. **Shipped (lean).**

Also fixed dangling references to the dropped `variation.md` brain file in `approach.md` (P-AP-06) and `identity.md` (P-AP-06/P-ID-08 now point at `personality.template.md`); the gallery `Variation.html` chapter still exists and its `gallery → Variation` references stay valid. **Coverage now ~13 archetypes + 5 cross-cutting** (states / motion / mobile / containers / accessibility) + the approach/layout/identity/site-archetypes framing files. Method confirmed again: **more rules ≠ better** — the battle test caught one nerf (P-ID-09) and one neutral (P-SA), both corrected before ship.

_Earlier status (components demoted, V1, gallery, tokens) below — unchanged._

## 2026-05-29 — Component package demoted & removed

Lookbook is repositioned as **brain + gallery + tokens, bring-your-own-components** — the layer that makes any component library produce good UI, not another Vue lib. Every design win on the design-brain track was achieved with **zero component imports** (Mode B), proving the brain stands on its own.

- **`@lookbook/ui-vue` (Vue primitives) and `apps/playground` (their demo) were removed** from this repo. The components were **vendored** into the one app that used them — DVLA self-service (`feat/self-service-design-refresh`), now living at `lib/lookbook-ui/` there with the lookbook alias dropped from its `nuxt.config.ts` (also fixed a broken Netlify fallback). The batch-2 molecule work was committed first (`3baedaf`) so it's preserved in history.
- **`@lookbook/tokens` stays** — the framework-agnostic convergence contract, the one shipped package.
- The component **specs** (gallery `Atoms`/`Molecules`/`States` chapters + styling rules) remain the standard to build/vendor primitives against. See `BRIDGE-self-service.md`.
- The `@lookbook/ui-vue` build status below is **superseded** — kept as a historical record of what was built before the demotion.

## Design brain — V1 COMPLETE (reference-calibrated + render-loop, 2026-05-28)

> **North star:** ship genuinely GOOD designs (and *dynamic* ones — generate the right composition per context), not merely "not AI-looking."
>
> **What completes it:** all 4 core archetypes calibrated against real shipped screens (reference study → rule-application reading → `evidence/<arch>.md` → pattern edits), each rebuilt and **verified by looking at rendered pixels** (the render-and-look loop — a LOCAL refinement practice, not shipped). Reading *how rules are applied* in real products found rules that were wrong/too-strict (e.g. dashboard "no tabs", form "top labels only", auth "SSO above") → all made **contextual**, which is what makes the brain generate *dynamically* rather than stamp a template.
>
> **Calibration receipts:** `evidence/dashboard.md` (left-shell, near-mono, table-led, tabs-OK) · `evidence/form.md` (entry-vs-settings, contextual labels, destructive section) · `evidence/auth.md` (centered-OR-split, SSO contextual, texture optional) · `evidence/marketing.md` (hero-shows-product, trust-near-CTA).
>
> **Verified-by-eye mockups** (sandbox `~/work/sandbox/` + `$JOB/tmp`): dashboard (table-led), settings form (sectioned), split-screen auth, marketing (show-don't-tell). All structurally distinct, one vocabulary = dynamic generation demonstrated.
>
> **`CHECKLIST.md`** — standalone runnable verification pass (look → measurable → completeness → AP sweep → pattern fit → deviations).
>
> **Earlier blind-spot lesson (kept):** self-audit alone missed contrast-wording, alignment (F74/AP21), whitespace, and "text on paper" (AP22) — all caught only by rendering + looking, or by user review. "Ready" stays gated on viewing pixels + human review, never code-audit alone.

### the agent-facing design intelligence

The reasoning layer that makes AI-built UI not look AI-built. Separate from the component/gallery track below. Loaded by `SKILL.md`'s "Read first" protocol.

- **`fundamentals.md`** — **F1–F74**, the hard floor with concrete numbers + `Check:` lines, cited by ID. Sections: Typography · Spacing · Hierarchy · Color (incl. F54 fill≠text, F55 status-on-tint, F66 on-color) · Alignment (incl. **F74 section-width consistency**) · Density · **Responsive (F50–53)** · Motion · Texture · Iconography · Imagery · **Data visualization (F56–65)** · **Copy & microcopy (F67–73)** · Finishing · **conflict-precedence ladder**.
- **`anti-patterns.md`** — **AP1–21**, the "looks like AI" tells (second verification sweep). Surface-scoped notes on AP5 (steps) + AP20 (dashboards); AP21 = wandering content edges.
- **`patterns/`** — dashboard · form · marketing · auth (P-D/P-F/P-M/P-A calibrations).
- **`personality.template.md`** — per-project deviations + signature move.
- **Verification pass** (in SKILL.md): two sweeps + mandatory computed-contrast and responsive/touch checks.

**Battle-tested (5 tests, fictional "Mason" universe, sandbox `~/work/sandbox/lookbook-battle-test*`):**
1. Marketing landing (test #1) — caught a real WCAG CTA bug; exposed the responsive gap.
2. Dashboard (Mason Console) — exposed: no data-viz floor, status-tint + fill-vs-text contrast gaps → added F54/55, F56–65.
3. Form (audit setup) — exposed: no copy floor + recurring white-on-accent CTA → added F66, F67–73.
4. Marketing re-audit — **convergence #1**: 0 shippable violations, 0 new rules. F66 closed the recurring bug.
5. Auth sign-in — **convergence #2**: 0 shippable violations, 0 new rules.

Two consecutive clean archetypes = convergence bar met. **Brain is v1-ready.** Remaining (optional polish, not blocking): extracted standalone checklist; `lookbook:calibrate` (reference evidence loop to refine the v1 numbers); more archetypes (detail/settings/pricing) on demand.

## Done & browser-verified

### Gallery (visual spec) — complete
13 chapters exported from Claude Design, synced into `apps/gallery/`:
Foundations · Atoms · Molecules · Organisms · Auth · States · Motion · DataViz · Marketing · Personality · Recipes · **Layout** · Guide.

### `@lookbook/tokens` — complete
- `src/tokens.css` — the contract (OKLCH ramps, semantic light/dark roles, size scale, status, tints, hero-only gradient, motion).
- `skins/dvla-self-service.css` — example skin mapping the contract onto the DVLA-green brand.

### `@lookbook/ui-vue` — ATOMS done (Reka pattern) — ⚠️ SUPERSEDED (package removed 2026-05-29, vendored into DVLA self-service)
Built on the spec's `components.css` (shipped as `styles.css`) + typed Vue SFCs. All **browser-verified** in the playground across default-light, default-dark, and the DVLA skin (see `/tmp/lookbook-shots/`, or run the playground):

| Atom | Notes |
|---|---|
| Button | 5 variants, 5 sizes (xs–xl), icon-only, loading, disabled, **focus-visible ring** |
| Input | sm/md/lg/xl, error (`aria-invalid`), disabled, readonly, leading/trailing affix |
| Textarea, Select | sized, error states (Select = native styled) |
| Checkbox, Radio, Switch | native (accessible), `v-model` |
| Stepper | min/max/step, `v-model` |
| Badge | 6 variants × subtle/solid, dot, sm/md |
| Avatar | image + initials fallback, sizes, status dot |
| Card (+ Header/Body/Footer) | base + interactive |
| Spinner, Skeleton | sizes / variants |

### Playground — `apps/playground`
Vite + Vue gallery of every atom with light/dark + DVLA-skin toggles. `pnpm --filter @lookbook/playground dev` (or `preview`).

### `@lookbook/ui-vue` molecules — core done (Reka-backed)
Built + verified in the playground:

| Molecule | Backing | Verified |
|---|---|---|
| Alert / inline-banner | native | ✓ 4 variants, dismissible |
| Tabs (pill + underline) | Reka `Tabs*` | ✓ active/disabled, keyboard |
| Tooltip | Reka `Tooltip*` | built (hover) |
| Dialog / Modal | Reka `Dialog*` | ✓ scrim + header/body/footer; **scroll-aware separators** (hairline only when content clips the edge) + `stickyBorders` to force; sticky header/footer, body scrolls |
| DropdownMenu | Reka `DropdownMenu*` | ✓ items, shortcut, separator, destructive |
| Combobox | Reka `Combobox*` | ✓ client + **server-search** (focus-clears-search, loading, seen-map), capped + scrollable popover |
| MultiCombobox | Reka `Combobox*` (multiple) | ✓ chips-in-field, checkmark rows, clears search on **close**, seen-map |
| OverflowScroll | native + `useHoldRepeat` | ✓ scroll arrows (h/v/both), fade edges, press-hold |
| Popover | Reka `Popover*` | ✓ side/align/offset, optional arrow |
| Drawer | Reka `Dialog*` (side) | ✓ left/right, scrim, header/body/footer; same scroll-aware separators + `stickyBorders` |
| Accordion | Reka `Accordion*` | ✓ single/multiple, collapsible, animated height |
| Field | native wrapper | ✓ label + helper/error/success, `aria-describedby` via slot props |
| Toast | Reka `Toast*` + `useToast` | ✓ success/danger/warning/info, action, sticky, stack position |

**Composables:** `useServerSearch(fetcher)` (debounced + seen-map + `optionsFor(selected)`), `useHoldRepeat` (press-and-hold). DVLA patterns from v2 (`useSearchableUsers`/`OverflowScroll`) distilled into reusable, framework-light form.

Styling note: live overlay positioning lives in `ui-vue/src/overlays.css` (the gallery's
`components.css` styles overlays as in-frame demos; `styles.css` aggregates both).

## Pending

### `@lookbook/ui-vue` molecules — DONE
All molecules built (see table above). Batch 2 (Drawer, Toast, MultiCombobox, Popover, Accordion, Field) browser-verified across light, dark, and DVLA skin.

### Gallery specimens — Lists & selection LANDED
Synced the Remix export: Molecules now has Combobox / MultiCombobox / OverflowScroll specimens. ui-vue Combobox/MultiCombobox/OverflowScroll were **re-pointed onto the gallery's official classes** (`.combobox-popover`/`.combobox-list`/`.combobox-row`/`.combobox-check`, `.multicombo`/`.chip--token`, `.overflow`/`.overflow-track`/`.overflow-arrow`) — implementation == spec, no more `.lb-*` forks (overlays.css keeps only the Reka popover width/height shim).

**Pending round-trip:** OverflowScroll's component outgrew the spec, so `.overflow*` in components.css was hand-extended (`.overflow--both`, `--overflow-fade-size/-color`, `--overflow-arrow-size`). A Claude Design prompt (`gallery-overflow-upgrade.txt`) is queued to make that canonical — until it's pasted + re-synced, a `sync-gallery.sh` would overwrite the hand edit.

### Accordion
Styling still lives in `overlays.css` (`.lb-accordion*`) — the export didn't add an Accordion specimen. Promote into `components.css` once the gallery ships one.

### Organisms — NEXT
App shell (sidebar + topbar), data table, page header, filter bar — bigger; build after molecules.

## Notes
- Self-service worktree was **not touched** — integration is a separate, user-led step.
- v2 is intentionally **not** bridged (user is happy with it).
- Verification: agent-browser headless. Re-verify with `pnpm --filter @lookbook/playground preview` then screenshot `localhost:4455`.
