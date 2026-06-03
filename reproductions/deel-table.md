# Reproduction #7 — people / payroll data table

**Domain:** system/component (data table) · **Target:** a real shipped payroll product's people directory.
**Reference:** `_ref/deel-table.png` (eyedrop only).
**Build:** `deel-table.html` → render `deel-table@2x.png`. **Gate:** pushed live beside the reference. Status: **awaiting user eye-gate.**

> Deepening pass: the *table* tested hard. The list (repro #1) was rhythm + a single anchor column; this is the real §8 surface — a filter toolbar, sortable headers, a multi-column grid, an anchor identity cell, status pills, bulk-select, and per-row actions all at once.

## The decisions I extracted (not traced)

1. **The anchor column carries identity, the rest recede.** The Person cell is a colored monogram avatar + a link-blue name + a muted role subtitle stacked under it. Every other column (Country, Entity, Group, Worker type, Coverage, Start) is one muted line. §8: one column does the work of telling rows apart; the others are reference data, so they drop to `--muted`. Without this the table is a wall of equal-weight text.
2. **Hairlines horizontal only — no vertical rules (§6/§8).** Rows are separated by a single `#ecedf0` hairline; there are *no* column dividers. Vertical rules are the spreadsheet tell; the eye tracks rows by rhythm + the left-anchored identity, not by boxing every cell.
3. **Status is color + a WORD, never color alone (§11 / AP25 done right).** The pill is a soft tinted chip with a leading dot *and* the label ("Active" / "Invited"). The dot reinforces; the word carries. Green = active, indigo = invited — two hues, each with its own tint/text/dot triad as tokens.
4. **The filter toolbar is a row of ghost pills with one filled.** Eight filter pills (Group, Worker status, …), each a chevron dropdown; exactly one is "on" (near-black fill) to show the active facet. Right-aligned utility pills (View as report, Configure columns) + an overflow ⋮. This is the §8 toolbar pattern: facets left, table-level utilities right.
5. **Bulk-select + sortable affordances are present but quiet.** A header checkbox + per-row checkboxes (unfilled, hairline border) for bulk actions; up/down chevrons only on the genuinely sortable columns (Person, Worker status), not on every header. Affordances signal capability without shouting.
6. **Light done quiet (§4).** White table surface on a faintly cooler `#fcfcfd` chrome; the only saturated colors are the avatar monograms, the link-blue names, and the two status hues. Everything structural is a neutral.

## Where the base HELPED

- **§8 Tables** — the whole hairline-not-rules, anchor-column, quiet-header discipline came straight off the spine.
- **§11 status** — "color + a word, never color alone" is exactly the AP25 antidote folded in last session; the pill obeys it by construction.
- **§4 light mode** — white-on-cooler-chrome, neutrals structural, saturation reserved for identity + status.
- **§6 depth** — flat surface, hairline dividers, no shadows on a non-floating table.
- **§2 tokens** — the status triads (bg/fg/dot ×2) and the muted/faint/ink ramp are all named tokens; nothing hardcoded per cell.

## Where the base was SILENT (the distillable)

1. **No data-table recipe.** §8 *names* tables and gives the principles (hairlines, anchor column, quiet headers) but no assembled how-to: the toolbar-of-filter-pills + count line + sortable-header + bulk-select-column + anchor-identity-cell + status-pill + row-action-⋮ anatomy as one coherent surface, and which columns earn an affordance vs stay plain. → **cookbook candidate: "the data table."** It also shares the status-pill vocabulary with `state-as-shape.md` and the toolbar vocabulary with `dense-data-list.md` — the cookbook should cross-reference, not restate.

## Build misses (mine)

- Column widths are content-sized rather than the reference's slightly more deliberate fixed rhythm — Entity/Group truncate with `…` like the reference, but my truncation points are approximate.
- The reference avatars carry a faint 1px ring; mine are flat fills (negligible at this scale).
- Flags are live `flagcdn` rasters (an asset stand-in, like the browser-frame imagery cookbook) rather than the reference's own flag set — fidelity, not a decision.

## Score (my eye — pending the user's, decision-transfer bar)

Reproduces convincingly. The anchor identity cell, the no-vertical-rules hairline grid, the two-hue status pills with dot+word, the one-filled filter toolbar, and the quiet bulk-select + sortable affordances all land at the decision level. ~0 base gaps — §8 + §11 + §4 carried it; the only distillable is the *assembly* (a data-table cookbook). Same exit signal as the prior six: strong spine, one cookbook's worth of recipe, no invented machinery.

**Cookbook written after the user confirms the reproduction landed.**
