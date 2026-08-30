# Progressive (scaffold-first) UI generation — spec

**Problem it kills:** generate a whole blobby screen in one shot from a blank page, then iterate a million times to make it intentional. Intentionality ends up retrofitted, never constructed.

**The move:** build in STAGES. Each stage lays down anchors the next stage *aligns to* and *spaces from*. Alignment, spacing and hierarchy become correct **by construction** (rails), not by post-hoc fixing. The measured gates run BETWEEN stages, while a fix is still cheap.

**The core mechanism: an ARTBOARD, not a text buffer.** The model works the way a designer works in Figma/Sketch — on a persistent canvas, not by emitting a wall of HTML blind. This is what dissolves the "LLM can't see the canvas" problem: the artboard IS the externalized canvas, and it is rendered to an image the model looks at after every move.

**The artboard model is AUTO-LAYOUT, not absolute x/y.** This is the single most important decision — absolute pixel pins are exactly why Figma→code ships non-responsive garbage. Containers declare *relationships* (flex/grid), children *flow*. Responsiveness is native because the source is relational, and it is NOTED PER CONTAINER as you place, never retrofitted.

```
ARTBOARD   { w, h, background, breakpoints: [sm 640, md 768, lg 1024] }
GRID       { cols: 12, gutter, margin }
CONTAINERS [ {
  id, layout: 'stack' | 'row' | 'grid',        // = flex-col / flex-row / grid  (Figma auto-layout)
  gap: '--s-field',                            // a spacing TOKEN, never a literal
  align, justify,                              // cross / main axis
  wrap: true|false,
  cols: 3,                                     // grid only
  responsive: { sm: { layout:'stack', gap:'--s-group' } },   // row->stack at sm, DECLARED HERE
} ]
CHILDREN   [ { id, in:'container#2', type, text, style,
               grow:0|1, shrink, basis, alignSelf } ]        // flow inside its container
OVERLAYS   [ { id, absolute:{ x, y }, anchor } ]             // absolute is the EXCEPTION — badges, FABs, popovers only
```

The model operates with artboard verbs, not raw CSS:
- **place** a child INTO a container — it flows; position comes from the container's layout + gap. No x/y to hand-tune.
- **set layout** on a container (stack/row/grid + gap token) — this is auto-layout. Alignment is free (the flex axis aligns children); spacing rhythm is the gap token.
- **add a responsive rule** to a container the moment you place it — e.g. "row on desktop, stack under sm." Responsiveness accrues AS YOU GO.
- **align / distribute** — first-class, but usually unnecessary because auto-layout already aligns.
- **grow / shrink / basis** on a child — how it flexes. This is what makes it a layout, not a picture.
- **render** — the scene draws to PNG **at each breakpoint**. The model Reads them and looks — it sees desktop AND mobile every step, so a broken stack is caught immediately, not after ship.
- Absolute x/y is allowed ONLY in OVERLAYS (a badge on a card, a FAB) — never for layout flow.

**Why the gates get trivial and exact here:** alignment, spacing rhythm and hierarchy are computed **directly from layer coordinates** in the scene — no reverse-engineering a rendered DOM. Alignment near-miss = two layers with x within a few px but not equal. Proximity = the gaps between stacked layers. Hierarchy = the dominant layer by size×weight×colour. The scene is ground truth.

**Compile last:** the finished scene compiles to semantic HTML/Vue (regions → elements, tokens → CSS vars). Design happens on the board; code is the export, not the medium.

**What remains true:** the model still can't see *live* as it types a coordinate — but it doesn't need to. It places → snaps → renders → looks → adjusts, in small verified moves on a board it can reason about spatially. That is the artboard workflow, and it removes the blob and the iteration spiral.

---

## Principles

1. **Tokens are a hard constraint, declared first.** Spacing scale, type scale, grid columns, radius, ONE accent — as CSS variables before any markup. Literal px in layout is forbidden. The model builds onto a fixed vocabulary, so spacing/alignment can't drift.
2. **Place, don't nudge.** Content goes INTO named regions that already have defined gaps. Things align because they share region edges — not because a gap was hand-tuned.
3. **Skin last.** Structure (grid, regions, hierarchy) is sound BEFORE colour/type/depth. Never open on brand or polish.
4. **Gate between stages, not only at the end.** The measured scripts (proximity/alignment/hierarchy) run after each structural stage. Enforce during, per the standing rule.
5. **State the intent before each stage** (canon: state the expected answer before generating). Rank hierarchy in words before styling; name the archetype before laying the grid.

---

## The stages

**Stage 0 — Content + hierarchy (words, no pixels).**
List every element on the screen. Rank them by what the screen is FOR: name the ONE primary, then each rank stepping down. Output is a ranked list, nothing rendered.

**Stage 1 — Archetype + scaffold (skeleton, no content).**
Pick the archetype (from lookbook `harvest/` / canon archetype refs). Declare the grid (columns), the spacing scale, and NAMED REGIONS with their inter-region gaps (`--s-group`) and intra-region gaps (`--s-field`). Render the skeleton as grey boxes.
→ **Gate: alignment** (regions share axes across containers) + **spacing** (region gaps are on-scale and inner<outer). Fix the skeleton here — cheap, no content to disturb.

**Stage 2 — Place content (into regions, tokens only).**
Fill each region. Label→control bonding uses `--s-label`; field→field uses `--s-field`; group→group uses `--s-group`. No literal px. Render.
→ **Gate: proximity** (`measure-proximity.mjs` — bonding) + **hierarchy** (one unambiguously loudest element).

**Stage 3 — Skin (colour, type, depth).**
Apply the palette, type scale and depth per canon type-color-depth. Render.
→ **Gate: contrast, ai-tells (incl. incomplete-border-on-rounded), brand fidelity.**

**Stage 4 — States.**
Empty / loading / error, each built on the same scaffold.

Between every stage: RENDER → LOOK → gate → fix → next. Never skip the look.

---

## The scaffold artifact (the novel piece)

A scaffold is a pre-content structural declaration the model commits to before styling:

```
TOKENS   spacing: --s-label 6 / --s-field 20 / --s-group 40 (one scale, non-linear)
         type:    3-5 sizes, hierarchy on weight+colour not size
         grid:    12-col / content max-width / gutter
         radius:  one value ; accent: ONE colour, <2% of surface
REGIONS  header      gap-below --s-group
         body-grid   region gaps --s-group ; within-region --s-field
         footer/actions  one primary, right-aligned
HIERARCHY  1 <primary>  2 <secondary> ...  (ranked BEFORE styling)
```

The gates read this: spacing values must come from the scale; region edges must align; exactly one primary.

---

## Where it lives

- A generation discipline invoked at design time (fold into the lookbook/canon preflight, or a `progressive-ui` skill).
- The between-stage gates ARE the guardian scripts: proximity (built), alignment + hierarchy (to build), ai-tells/border (built). So building the gates and building progressive generation are the same work from two ends.

---

## MVP + how we PROVE it beats blob generation (falsifiable)

**MVP:** the staged prompt discipline (stages 0-3) + wire `measure-proximity.mjs` as the Stage-2 gate, on ONE real screen.

**Proof (A/B, evidence-based):** take one real DVLA screen brief. Generate it two ways —
- **(A) blob:** one-shot, whole screen.
- **(B) staged:** the stages above.
Measure on FIRST render: proximity score, alignment near-misses, hierarchy (one loudest y/n). Then count fix-iterations to reach "acceptable."
**Hypothesis:** B scores higher on first render AND needs fewer iterations. If B doesn't beat A, the scaffold overhead isn't paying — stop and rethink. Same disprove-or-prove discipline as the proximity metric (v1 was killed this way).
