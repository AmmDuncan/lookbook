# Lookbook — build status

_Last updated: 2026-06-18 (cool-technical specimens re-earned against the contrast gate via Claude Design audit)_

## 2026-06-18 — Specimen audit via Claude Design (cool-technical contrast re-earn)

Pushed all 33 kit specimens to a Claude Design project (`Lookbook Specimens`) as `@dsCard`-tagged cards, render-looked them, and ran the three deterministic gates. Findings:

- **Render-look verdict: the specimen layer is largely healthy** — well-composed, on-system, real depth (infra-monitoring's throughput-vs-baseline deviation band; the recipe sheets `recipe-table`/`recipe-form`/`recipe-cta` are strong anti-fake-variety exemplars, each packing genuinely distinct compositions). Not the flat/AP28 layer the "untrusted" flag implied.
- **One real contrast bug, fixed.** The 4 cool-technical organisms each **inline their own `:root`** (duplicating `_tokens.css`) with `--subtle: #9AA1AC` (2.60:1) and **hardcode raw `#9AA1AC`** on faint chart-axis labels — banned raw-hex *and* below the 3:1 faint floor → `check-contrast` BLOCKING on all 4. Fixed: `--subtle`/`#9AA1AC` → `#838A95` (3.27:1 bg / 3.48 surface) in the 4 organisms **and** in `_tokens.css` (light); dark-theme `--subtle #5C626C` → `#6A7079` (latent 2.89:1-on-surface failure). All 4 now `check-contrast` **PASS**; `check-focus` PASS throughout; re-rendered, no visual regression.
- **Two gate false-positives confirmed (left as-is):** `#C7C7F5` (active-nav text on the dark sidebar) and `#8A909B` (badge text on dark `#24262C`/`#2A2D35`) — both correct/high-contrast on their *real* dark backgrounds; the gate only flags them because it measures against the lightest page surface, not local bg. Worth noting as a `check-contrast.mjs` limitation (no local-bg resolution).
- Marketing + warm-editorial specimens use var-chains/rgba the static checker can't resolve → unverified-by-tool, verified visually (clean). Lone soft note: warm-editorial uses gradient blocks as photo stand-ins (asset-rule tension, not fixed — would need real imagery).

## 2026-06-08 — F75 elevation adopted (battle-tested) + palette generator

Two things this session, both off the back of reading *Practical UI* (Adham Dannaway) end-to-end and reconciling it against the brain. The honest headline from that read: **the brain already encodes ~90% of the book** as F-rules + patterns, often calibrated *tighter* (e.g. body 15–17/16 vs the book's flat 18 — F3 already allowed the 16 the user wanted). The book is near-total external validation, not a pile of missing cookbooks. Only one genuine foundational gap survived: **no rule governed depth**, even though `--shadow-sm/md/lg/xl` ship in tokens.

- **F75 (Depth / elevation)** — three semantic levels (resting/raised/overlay) mapped onto the four shipped shadow tokens; light-from-top; shadow = darkest neutral never `#000`; colour-as-depth; density-gated (corollary of F36). **Battle-tested** (the repo bar): baseline vs brain+F75 on a depth-heavy "team members settings" brief (resting cards + open dropdown + confirm modal + toast). The F75 arm gave a real dimming scrim under the modal and lifted overlays while keeping resting cards flat; the baseline's overlay tier failed to read against a too-weak scrim — no over-shadow nerf (density gate held). **User-gated HELP → folded into fundamentals.md.** Caveat on record: n=1 pair + author wrote both rule and brief.
- **`apps/palette/` — palette/skin generator tool.** One brand colour → the 7-step ramp mapped onto the semantic tokens, each role graded (WCAG matching `scripts/contrast.mjs`, + APCA Lc), F66 white-on-accent auto-fix, status colours (F55), add-your-own swatches, light/dark, drop-in skin export. Self-contained (opens offline over `file://`; `index.html` + `color.js` + `palette.js` as classic scripts). check-focus PASS. This is the book's most generator-shaped artifact (the palette tables) operationalised onto the token contract.

## 2026-05-29 — Deepen pass #2 (battle-tested)

Four candidate brain files authored by blind sub-agents, then each put through a **baseline-vs-deepened battle test** (a blind agent designs one brief on the current brain vs the brain + the new file; renders judged help/neutral/nerf, gated by the user's eye — never self-grade). Outcomes:

- **`patterns/states.md` (P-ST-01..12)** — the unhappy-path / state-machine pattern (loading-skeleton-vs-spinner, error scope, partial failure, optimistic+rollback, stale-while-revalidate, offline, success ceremony, a11y announce) + the empty≠error≠loading truth-split. Battle: **HELP (clear)** — deepened arm designed the full state set; baseline did only filtered-empty. **Shipped.**
- **`patterns/accessibility.md` (P-AY-01..12)** — the non-color a11y floor (names, native elements, focus order/ring, landmarks, dialog contract, error association, live regions, target size, skip link, reduced-motion). Battle = **markup diff** (deterministic, not render): **HELP (modest)** — closed page-level gaps (skip link, async live region) on a baseline already strong from form/containers. **Shipped.** Wired into SKILL's always-run checks.
- **`patterns/identity.md` (P-ID-01..09)** — brand → token-system derivation (accent ramp + F66 on-color, one-accent, type pairing, the four tactile dials, motion register, the one signature, and the **P-ID-09 guardrail**). Battle flagged the first P-ID-09 ("functional surfaces = ZERO decorative identity") as a **NERF** — it stripped a legitimate brand-hero moment, making a Pulse billing panel blander than the no-identity baseline. **P-ID-09 softened**: scan-first *body* = zero decoration; the one expressive element (hero/showcase) may carry a single restrained, removable brand moment; a no-hero surface (warehouse dashboard) still gets zero. Re-rendered to confirm the carve-out doesn't reopen the Variation drift. **Shipped (softened).**
- **`patterns/site-archetypes.md` (P-SA-01..03)** — multi-page composition. Battle was **NEUTRAL for the brief** (F74 + layout.md already deliver cross-page coherence within one shell; a 2-page marketing test didn't stress shell-choice / supporting-pages). **Trimmed from 6 rules to 3** — kept shell choice (P-SA-01), the cross-page axis F74 can't see (P-SA-02), and the supporting-pages test (P-SA-03); dropped the nav-model / persistent-contextual-chrome / entry-exit rules as `layout.md`/IA/`containers.md` restatements. **Shipped (lean).**

Also fixed dangling references to the dropped `variation.md` brain file in `approach.md` (P-AP-06) and `identity.md` (P-AP-06/P-ID-08 now point at `personality.template.md`); the gallery `Variation.html` chapter still exists and its `gallery → Variation` references stay valid. **Coverage now ~13 archetypes + 5 cross-cutting** (states / motion / mobile / containers / accessibility) + the approach/layout/identity/site-archetypes framing files. Method confirmed again: **more rules ≠ better** — the battle test caught one nerf (P-ID-09) and one neutral (P-SA), both corrected before ship.

## 2026-05-29 — First live-UI calibration pass (dashboard · form · marketing)

Ran `lookbook:calibrate` for real — three parallel passes, each studying ~12–20 real shipped products and classifying every rule VALIDATE / CALIBRATE / TOO-STRICT. **All three were healthy refine-don't-add results: number/branch tweaks only, ZERO new rules adopted.** Evidence appended (dated Run-2 sections) to `evidence/{dashboard,form,marketing}.md` (source phrased generically). Applied + render-gated (`$JOB/tmp/calibrate/verify.png` — 40px fields · 6-KPI row · 44px centered hero all confirmed good):

- **P-D-04** — max 4 KPI tiles → **4–6** (4 ideal, 6 ceiling; ≥7 compacts to a list). Real dashboards cluster 4–6.
- **P-F-02** — field height 44–48 desktop → **38–44 (40 sweet spot)**; 44–48 is the *touch* number, mobile-only. De-chunks generated forms (our own mockups had used the chunky 44px).
- **P-F-05** — added the missing real branches: **entry cards → full-width primary** (7/8 live forms), **settings → per-section Save**.
- **P-M-01** — hero floor 56 → **44 when centered with a dominant visual below** (composition carries it); 56 kept for left/right heroes.
- **P-M-14** — recalibrated: **centered-with-visual-below is the default** (~8/12), not the old 50/50.
- **P-M-02** — deck floor 20 → **18**.
- **F74** — default container ceiling note 1200 → **1280** (the ≤3-widths/single-axis rule itself validated).
- **F11** — added a **scope clause** (it's a page/marketing-region number, NOT the dashboard/settings inter-region gap which is ~24–32px) — both passes flagged this confusion.
- **Validated, no change:** F2/F3/F8/F16/F17/F24/F26/F27/F32/F34 and most P-D/P-F/P-M rules — the numbers were largely already grounded. P-M-13 (hero-shows-product) validated 12/12.

**Parked from this pass (NOT adopted — refine-don't-add):** a floating/embedded-label form variant (battle-test candidate before any P-F-01 sub-clause); minor wording-clarity adds (label→field 6–8px gap, P-D-10 Check tighten, gradient-on-product-frame ≠ banned-bg note, "hero is a display step above the F2 ratio" note).

## 2026-05-29 — Review intake (show → react → revise)

Added the **post-present feedback loop** to `SKILL.md` (composition protocol step 6 + a dedicated "The Review intake" section), cross-referenced from `approach.md` P-AP-11 as its mirror. After presenting a finished render (or N directions), pull **structured reaction** via the host's multiple-choice UI — a gut-check (Ship it · small tweaks · needs work · wrong direction), then, only if not ship-it, a multi-select of the levers you can act on (accent · density · type/personality · a specific region · **"feels flat or boring"** · hierarchy · copy). Each reaction maps to its owning lever (color→P-ID, density→F26/P-AP-03, flat→a depth pass of teachable craft moves, region→P-AP-10/layout, …) and re-enters revise→re-render→re-present→re-ask, until "ship it." Rationale: the model's self-grade has a taste ceiling + flatness blind spot (proven this session — the P-ID-09 nerf and "Opus is strongest" were both the user's eye correcting the model's), so the design must converge on the **user's** eye, not the builder's. Frame-it intake (before) + Review intake (after) bookend the work. The "feels flat/boring" option deliberately makes the user the dryness detector the brain can't be.

## 2026-05-29 — Frame-it intake (P-AP-11)

Formalized the design-intake interview into `patterns/approach.md` as **P-AP-11** and wired it into `SKILL.md`'s Frame-it step: before composing a new surface OR a redesign, ASK the user the framing inputs through the host's structured multiple-choice UI (personality · accent/brand · theme · platform · scope), adapting the set to the situation — **new product/site** (full brief), **new flow in an existing app** (inherit dials, ask only job/primary/archetype/components), or **redesign** (also: what's not working · what must stay · reskin/restructure/rebuild, then the P-AP-08 four-lens audit). Each question leads with a recommended option; answers feed the readout (P-AP-09). Validated live: a 4-question intake set the dials for a calm-focused "Cadence" todo app that shipped a uniform 12-screen set (auth → states → settings, desktop + mobile).

## 2026-05-29 — lookbook:calibrate (maintainer tooling)

The reference-study calibration loop, formalized so any session runs it identically instead of re-deriving from memory. **Maintainer-only — NOT loaded by the consumer `SKILL.md`** (per the tier model: render-and-look ships in SKILL Step 0; calibrate is how the brain is *maintained*, not *used*).

- **`scripts/calibrate.md`** — the protocol: what calibration is (refine numbers / contextualize rules against real shipped products; NOT bulk-add — more rules ≠ better), the source-agnostic reference step (committed files never name the aggregator; phrase as "a reference study of real, public, shipped products"), the loop (gather screens → read by HOW RULES ARE APPLIED → VALIDATE/CALIBRATE/TOO-STRICT → evidence receipts → render+contrast gate → battle-test if a rule is added → commit), the convergence contract, and classification heuristics.
- **`scripts/calibrate.mjs`** — zero-dep scaffolder mirroring `contrast.mjs`. `node scripts/calibrate.mjs` lists every pattern with its rule count + evidence-file age; `node scripts/calibrate.mjs <pattern>` prints the loop, the pattern's current calibration IDs, the evidence status, and a dated run-log template.

Roadmap remaining: **portability experiment** (Opus/Sonnet/Haiku render grading — zero non-Opus data yet).

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
