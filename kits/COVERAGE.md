# kits/ — coverage & status (retire-by-coverage)

**Status: conceptually superseded, artifact-layer untrusted.** The 3-named-registers *model* is dead — `cookbooks/registers.md` replaces it with a composable dial-space (any number of voices, not a fixed three). But the kit *artifacts* — the per-voice `_tokens.css` foundations and the copy-paste atom/recipe/organism specimens — are the **self-judged layer that shipped AP28** (the status-cosplay tell a real designer's glance caught). They were never validated by reproduction.

**How to use this directory:** don't import or copy a kit specimen as if it's trusted. For any surface, check the table below:
- **COVERED** → use the named cookbook instead; it was earned against a real screen.
- **ORPHAN** → no cookbook yet; the kit specimen is the only reference, but treat it as *untrusted* — reproduce it through the `EXPERIMENT.md` gate before relying on it. These are the reproduction backlog.

Nothing here is deleted or moved (that would fragment the kits — atoms share each voice's `_tokens.css`). This file is the authoritative status; the specimens stay as frozen reference.

## cool-technical/

| Specimen | Status | Covered by / note |
|---|---|---|
| `_tokens.css` | concept COVERED | dial-space (`registers.md`); cool-technical token values demonstrated in `registers/float-cool-technical.html` |
| `_icons.svg` | infra | shared icon set — keep |
| `atom-chart` | **COVERED** | `cookbooks/charts.md` |
| `atom-cmdk` | **COVERED** | `cookbooks/command-palette.md` |
| `atom-empty` | ORPHAN (light) | empty-state pattern lives in `patterns/empty-states.md`; no reproduction-earned cookbook yet |
| `atom-field` | **COVERED** | `cookbooks/settings-page.md` + `modal-and-repeater.md` |
| `atom-figure` | ORPHAN | explanatory figure/diagram frame — partially `charts.md`, but the figure-as-explanation recipe isn't earned |
| `atom-icon` | infra | icon usage — keep |
| `atom-overlay` | **COVERED** | `cookbooks/command-palette.md` (overlay shell) + `modal-and-repeater.md` |
| `atom-shell-frame` | ORPHAN | app-shell (topbar + nav + panes); the master-detail shell in `details-rail.md` covers the pane case only |
| `atom-status` | **COVERED** | `cookbooks/state-as-shape.md` |
| `atom-table-row` | **COVERED** | `cookbooks/data-table.md` |
| `recipe-figure` | ORPHAN | see `atom-figure` |
| `recipe-form` | **COVERED** | `cookbooks/settings-page.md` + `modal-and-repeater.md` |
| `recipe-table` | **COVERED** | `cookbooks/data-table.md` |
| `organism-account-detail` | **COVERED** | `cookbooks/details-rail.md` |
| `organism-revenue-overview` | mostly COVERED | `cookbooks/dashboard-kpi.md` (KPI cards) + `charts.md` (combo chart) |
| `organism-infra-monitoring` | **COVERED** | `cookbooks/ops-console.md` (reproduction #12 — three-band metrics+status+logs console) |
| `organism-ops-console` | **COVERED** | `cookbooks/ops-console.md` (reproduction #12 — streaming log stream + Live + actions) |

## marketing/

| Specimen | Status | Covered by / note |
|---|---|---|
| `_tokens.css` | concept COVERED | a marketing voice is demonstrated in `registers/float-bold-expressive.html` |
| `atom-hero` | **COVERED** | `cookbooks/marketing-hero.md` |
| `atom-pricing-row` | **COVERED** | `cookbooks/pricing-table.md` |
| `atom-chart` | **COVERED** | `cookbooks/charts.md` |
| `organism-landing` | **COVERED** | `cookbooks/marketing-hero.md` + the registers landings |
| `organism-pricing` | **COVERED** | `cookbooks/pricing-table.md` |
| `atom-feature-grid` | ORPHAN (light) | the §11 "three-identical-features" trap; the registers bold redesign shows a non-cliché alternative, but no cookbook |
| `atom-cta-band` | ORPHAN (light) | closing-CTA band — demonstrated in registers voices, not a cookbook |
| `atom-nav-footer` | ORPHAN (light) | nav + footer chrome — common, no cookbook |
| `atom-social-faq` | ORPHAN | social proof + FAQ block — no cookbook |
| `atom-code` | ORPHAN | code block as a marketing/dev-tool visual — no cookbook (`synthetic-product-imagery` is product imagery, not code) |
| `recipe-cta` | ORPHAN (light) | CTA composition — see `atom-cta-band` |

## warm-editorial/

| Specimen | Status | Covered by / note |
|---|---|---|
| `_tokens.css` | concept COVERED | editorial voices demonstrated in `registers/float-{warm,dark,cold}-editorial.html` |
| `atom-masthead` | ORPHAN (light) | masthead — demonstrated in editorial register voices, not a cookbook |
| `organism-index` | **COVERED** | `cookbooks/editorial-index.md` (reproduction #13 — chrome + featured lead + ruled column grid + stacked department) |
| `atom-index` | **COVERED** | `cookbooks/editorial-index.md` (the kicker + serif headline + dek + byline scanning-unit, with weight tiers) |
| `organism-article` | ✅ COVERED | `cookbooks/reading-surface.md` (reproduction #11, grounded in The New Yorker) |
| `atom-prose` | ✅ COVERED | `cookbooks/reading-surface.md` (the reading measure + serif body recipe) |

## The reproduction backlog (orphans worth a cookbook, ranked)

1. ~~Editorial article / reading surface~~ — **DONE** → `cookbooks/reading-surface.md` (reproduction #11). The first non-scanning archetype in the library.
2. ~~Ops / monitoring dashboard~~ — **DONE** → `cookbooks/ops-console.md` (reproduction #12). The three-band operational surface (live metrics + status grid + streaming logs + actions) the parts-cookbooks never composed; adds status-as-shape at log-table scale.
3. ~~Editorial index / content homepage~~ — **DONE** → `cookbooks/editorial-index.md` (reproduction #13). The curated listing (chrome → featured lead → weight-varied ruled column grid → stacked department) that leads to articles; distinct organism from the `reading-surface` article.
4. **QUEUED — Forms / input furniture (a real consumer appeared).** The form atoms (`atom-field`, `recipe-form`) are nominally "COVERED" by `settings-page.md` + `modal-and-repeater.md`, but a real Lookbook-guided build shipped controls with **no focus states** — proving that coverage is thin: no cookbook *owns* the input/control furniture as a recipe. Re-earn a dedicated **forms cookbook** grounded in real shipped forms (Linear/Stripe/Vercel/Supabase). Must own: the control inventory (text field · select · combobox w/ server-search · textarea · checkbox · radio · toggle · segmented · the 3-tier button hierarchy) × the full state matrix (default · hover · **focus-visible** · active · disabled · error · loading), label/help/error placement (P-F-06/11), validate-on-blur, and **focus as a first-class state, not a bolt-on** (`:focus-visible` for buttons/controls, `:focus` for text fields; the 3:1 ring; gate with `scripts/check-focus.mjs`). This is where focus *should* live so builds inherit it instead of copying a deprecated kit specimen. Then mark `atom-field`/`recipe-form` COVERED by the new cookbook, not the settings/modal stand-ins.
5. **Lighter, covered-by-example** (backlog only if a real second consumer appears): empty-state, figure/diagram frame, app-shell-frame, feature-grid, cta-band, nav-footer, social-faq, code-block.
