# Reproduction #8 — four-pane master-detail inbox

**Domain:** system (app layout) · **Target:** a real shipped CRM / agent inbox.
**Reference:** `_ref/lemni-inbox.png` (eyedrop only).
**Build:** `lemni-inbox.html` → render `lemni-inbox@2x.png`. **Gate:** pushed live beside the reference. Status: **awaiting user eye-gate.**

> Deepening pass: the *layout* tested. The table (repro #7) was one grid; this is four panes of progressive disclosure with full-height pane rules and — the real distillable — a structured **details rail** of label→value field rows.

## The decisions I extracted (not traced)

1. **Progressive disclosure across four panes (§8).** Nav (which section) → list (which item) → reading (the item) → details (structured metadata about the item). Each pane to the right narrows scope. The widths encode the hierarchy: nav and list are fixed-narrow chrome, the reading pane takes the `1fr` flex, the details rail is fixed-narrow again. This is the canonical inbox/CRM shape.
2. **Full-height hairline rules between panes — the one place vertical rules are right (§8).** The table cookbook bans column rules; here a 1px vertical hairline *separates panes*, which is correct — it's structural, not per-cell. The distinction matters: rules between *regions* organise; rules between *cells* clutter.
3. **The details rail is a stack of label→value field rows in quiet-captioned sections.** Uppercase section captions (Information / Contact / Thread), then rows of `label (muted, fixed-width left) → value (right)`. Values can carry a leading glyph — a colored **status dot**, a tiny **bar-chart for priority**, a **mini-avatar** for an assignee, a calendar icon for a date. The fixed-width label column keeps the values left-aligned into a readable column.
4. **Empty fields show a "+ Add" affordance, never a blank gap.** Phone and Address have no value, so the value slot reads "+ Add" in a faint tone — it tells you the field exists and is fillable. A blank would read as broken; the affordance reads as designed.
5. **The reading pane structures the email as labeled fields too.** Email Address / Subject / Email Text And Signature — the same caption→value rhythm as the rail, inside a hairline-bordered quote card. Consistency: the app has one way of showing a field, used in two places.
6. **Light done quiet (§4) with one scarce accent.** Everything structural is a neutral on a faintly-cooler chrome; the only saturated color is the violet upgrade-card CTA and the amber status dot. Selected nav/list rows carry state by a tonal wash (`#f0f1f3`), not an accent.

## Where the base HELPED

- **§8 layout / navigation** — the progressive-disclosure pane model, the selected-state tonal wash, the icon discipline (one set, one stroke) all came off the spine.
- **§6 depth** — flat panes, hairline rules, no shadows anywhere (nothing floats).
- **§4 light + scarce accent** — neutrals structural, one violet CTA, one amber status dot.
- **§2 tokens** — the caption / label / value / add ramp and the status-dot / accent colors are all named tokens.

## Where the base was SILENT (the distillable)

1. **No details-rail recipe, and no app-shell-panes recipe.** §8 gives layout *principles* but not this assembled surface: the four-pane progressive-disclosure shell with full-height pane rules, and especially the **details rail** — section captions, the fixed-label / value-with-leading-glyph row, the "+ Add" empty-field affordance, the status-dot / priority-bars / mini-avatar value vocabulary. → **cookbook candidate: "the details rail" (and the master-detail shell it sits in).** It shares the status-as-shape vocabulary with `state-as-shape.md` and the overlay-vs-inline distinction is a useful contrast to `command-palette.md`'s shell — cross-reference, don't restate.

## Build misses (mine)

- The reference reading pane runs a touch wider with slightly more body text visible before the fold; my `1fr` column is faithful but my body copy wraps a hair earlier.
- The reference's Tutorials/Docs footer icons are small custom illustrations; mine are emoji-in-a-tinted-tile stand-ins (asset fidelity, not a decision).
- The priority "bars" glyph is my interpretation of the reference's small chart icon — same idea (ordinal strength), approximate form.

## Score (my eye — pending the user's, decision-transfer bar)

Reproduces convincingly. The four-pane progressive disclosure, the full-height pane rules, the field-labeled email quote, and — the point of the exercise — the details rail with its captioned sections, fixed-label rows, leading-glyph values, and "+ Add" empty-field affordances all land at the decision level. ~0 base gaps — §8 + §4 + §6 carried the structure; the distillable is the *details-rail recipe* + the master-detail shell. Same exit signal as the prior seven: strong spine, one cookbook's worth of recipe, no invented machinery.

**Cookbook written after the user confirms the reproduction landed.**
