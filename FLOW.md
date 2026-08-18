# FLOW — the design flow, start to ship

The sequence a screen actually goes through. Eight steps, each with **what you open**, the
**gate that closes it**, and **the tell** that says you skipped it.

This is the canonical form of the protocol that used to live only inside `SKILL.md`
("Composing a page"). It is the same loop, with one step added: the **reference pass**
(step 3), which was previously only an ordering rule and never a step you had to perform.

> **The one rule that governs the whole flow:** **layout and composition come from
> somewhere real — and you say where.** Look in the Lookbook variation specimens first;
> they are the preferred source, not a mandatory one. Mobbin, a real shipped product, or
> your own generation are all legitimate when no specimen fits — the specimen layer is
> not mature enough to cover every surface, and pretending otherwise produces a forced
> adaptation that is worse than an honest original.
>
> What is **not** negotiable: every direction names its source, and when the source
> wasn't a specimen, the gap gets logged in `harvest/GAPS.md`. That log is how the
> variation layer grows toward being the default it wants to be.
>
> Separately: `fundamentals.md`, `the-design-brain.md` and `patterns/*` are the floor you
> **judge against**, not a generator. Deriving a layout from a rules doc is still the
> weakest of the options — it is the one that produces generic work.

---

## 1. Frame it — show, don't ask

Get only the inputs you genuinely cannot infer, in plain concrete terms: brand / accent ·
light vs dark · desktop vs mobile · which screens are in scope (for a redesign, also:
what's broken today · what must stay · how far to go).

Everything else — density, archetype, the six dials, the signature — you **derive** and
**express in what you show**. Do not interrogate anyone with mood-words ("calm", "bold",
"editorial"); that vocabulary means nothing to someone who wants to see a design.

- **Open:** `patterns/approach.md` (P-AP-11 question set; the dials are inferred per P-AP-05)
- **Gate:** every answer you hold is either something you were told, or something you can
  point at in the brief or the content. No adjective you invented.
- **Tell:** a brand-archetype quiz before anything has been rendered.

## 2. Identify the archetype

Name the page archetype: CRUD list · record detail · create/edit form · wizard ·
settings · search & results · feed · dashboard · checkout · pricing · kanban · inbox ·
calendar · empty states · error pages.

- **Open:** `harvest/HARVEST.md` (the 20-archetype catalog), gallery → **Recipes**
- **Gate:** the archetype is named out loud, and it is one from the catalog — not a
  hybrid you invented to avoid choosing.
- **Tell:** "it's kind of a dashboard and kind of a list" — you have two screens, or you
  have not looked at the catalog.

## 3. Reference pass — look at real shipped screens

**Before you pull, spend ten minutes looking at how real products solved this surface.**
Two or three of them, named. Extract the **decisions** — the type scale, where the
hierarchy comes from, what the one loud move is, what they refused to put on screen —
and write them down as a short list.

**Extract decisions, not a traced layout.** A reference can legitimately become the
composition you build on (step 5) — but only once you can say *which* decisions you are
taking and which you are refusing. Copying a screen you haven't decomposed is how the
wrong genre gets imported wholesale.

- **Open:** `reproductions/*.md` (14 real screens already decision-extracted) ·
  `references/specs/` + `references/visual/` (48 harvested cards) · Mobbin or the live
  product for anything those don't cover.
- **Gate:** you can name 2–3 real products and, for each, one decision you are taking and
  one you are refusing. Written down, not recalled.
- **Tell:** every reference is a design-system docs site. Those show components, not
  screens — and back-office work in particular has a genre problem here (a consumer
  sign-in page is the wrong reference for an internal console).

## 4. Pull the recipe

Take the archetype's recipe: which components it needs, its required states, its
responsive note.

- **Open:** `harvest/HARVEST.md` → the archetype's entry; the composed recipe in
  `harvest/specimens/`
- **Gate:** the required-states list is written down now, at the start — loading, empty,
  one item, many, error, permission-denied. Not discovered at the end.
- **Tell:** a build that has only ever been seen with its happy-path data.

## 5. Generate 2–3 directions — each from a named source

**Look in `harvest/specimens/` first** — that is where layout and composition should come
from when the layer covers your surface. When it doesn't, take the composition from a
real product you decomposed in step 3, or generate an original. All three are legitimate;
what is not legitimate is a direction whose origin you can't state.

**If you didn't pull, log the gap** — one line in `harvest/GAPS.md`: the surface, what you
needed, what the nearest specimen was and why it didn't fit. That file is the shopping
list for the variation layer, and it is the only reason it will ever be mature enough to
be the default.

Then make the directions genuinely distinct across three layers: **composition**
(arrangement, emphasis, density) · **visual** (how the same tokens are spent — dark rail
vs light, accent-on-fill vs accent-on-text, elevated vs flat) · **structural** (the shell
itself). Vary at least visual + composition; composition-only produces one design three
times.

Diverge on composition, visual expression and shell. **Converge on the token system** —
same accent, same fonts, same primitives. A new accent or an off-scale value is not a
direction, it is a bug.

- **Open:** `harvest/specimens/` — the `* Variations` sheets, `* Studies` drill-downs,
  composed recipes; then your step-3 references
- **Gate:** each direction names its source — `<specimen file> · variant <name>`, or the
  product it came from, or "original" — and any non-specimen source has a line in
  `harvest/GAPS.md`. Plus ≥3 of these visibly differ between directions: rail styling ·
  active-nav treatment · surface/card model · table treatment · KPI treatment · type
  rhythm · accent placement · density · chart presentation · header treatment.
- **Tell:** "I looked at the specimens" with no file named. A silent fallback is the
  failure here — not the fallback itself.

## 6. Build the chosen direction

**Lock the two scales before placing anything.** Name the type ramp (the `F2` ratio and
the actual sizes) and the spacing ramp (`F8` base, `F9` geometric steps). After that every
`font-size` reduces to the type ramp and every `margin`/`padding`/`gap` to the spacing
ramp; an off-ramp value is a bug, not a choice.

**Then manifest every primary shell surface, each citing a specimen** — nav rail · top
bar · stat/KPI treatment · primary viz · table chrome · active-nav state · empty/loading/
error. **"Default" is not an allowed answer for a primary surface**; a bare white rail
that wasn't pulled from anywhere is the AP29 tell and reads as unfinished scaffold. This
is the step that quietly fails when work is handed off under-specified.

Source assets as you go — icons from the Lucide sprite, illustrations recolored from
Popsy/unDraw, imagery product-true. Bind each to the tokens.

- **Open:** `patterns/assets.md`, `patterns/layout.md`, the kit for the register
- **Gate:** both ramps are declared, every primary shell surface names its source, and
  rule IDs (`F<n>`) are cited in narration as decisions are made.
- **Tell:** a 22px gap or a 19px heading. Off-ramp values mean no ramp was ever locked.

## 7. Verify — against the rules, then with your eyes

Walk the `Check:` lines in `fundamentals.md` against the rendered output. A violation is
either fixed or declared in `personality.md` with a justification — an undeclared
deviation is a bug, not a style choice.

Then **render it and actually look at it.** The render-and-look loop is the part no
checklist replaces.

- **Open:** `fundamentals.md` · `CHECKLIST.md` (the runnable pass) · `depth-rubric.md`
  (the depth floor) · `verification.md` (the receipt)
- **Gate:** the checklist is filled in with numbers, not vibes; a11y floor holds
  (contrast, visible focus, target size, color never the only cue); the depth rubric is
  answered.
- **Tell:** "looks good to me" with no rendered artefact and no numbers.

## 8. Present, pull reaction, revise

Present in the surface the human chose — browser, easel, screenshots, or the running app
(ask once per session, reuse it). Label each direction A/B/C with its one-line emphasis.
Never hand over a file path and stop.

Then **don't lock the design on your own eye.** Pull structured reaction: *how does this
land?* → **Ship it · Close, small tweaks · Needs real work · Wrong direction.** If "ship
it", stop — don't fish for problems. Otherwise, multi-select what to change, and
deliberately offer **"it feels flat or boring"** and, on any editable surface, **"it'd be
tiresome to use repeatedly"** — those two are the signals a self-grade reliably misses.

Map each reaction to the lever that owns it and re-enter the loop:

| Reaction | Lever |
|---|---|
| color / accent | `patterns/identity.md` (re-verify on-color, F66) |
| density | `F26` · `patterns/approach.md` P-AP-03 |
| fonts & overall feel | identity dials · `F1` |
| a specific region | composition variants (P-AP-10) · `patterns/layout.md` |
| **flat / boring** | a depth pass — `depth-rubric.md`, earn the missing axes |
| **tiresome to use** | the flow audit — count the clicks |
| hierarchy / emphasis | P-AP-10 |
| copy & tone | `F67`–`F69` |

- **Gate:** revise → re-render → **look** → re-present → re-ask the gut check, until
  "ship it". Record what changed against the readout (P-AP-09).
- **Tell:** shipping on your own approval. A model's "I'd ship it" has a taste ceiling and
  a flatness blind spot; the human's eye is the authority.

---

## Where the layers sit

| Layer | Role in this flow |
|---|---|
| `harvest/specimens/` | **First place to look** for layout & composition (steps 4–5). Preferred, not mandatory — it does not yet cover every surface. |
| `reproductions/`, `references/`, Mobbin | **Calibrate against** (step 3), and a legitimate composition source when no specimen fits. |
| `harvest/GAPS.md` | **The shopping list.** Every surface the specimen layer failed to cover, with why. |
| `cookbooks/` | **Deepen with.** Earned against a real screen; beats `patterns/*` for its surface. |
| `fundamentals.md`, `the-design-brain.md` | **Judge against.** Step 7. Never the generator. |
| `patterns/`, `kits/` | **Untrusted reference** until re-earned through `EXPERIMENT.md`. |
