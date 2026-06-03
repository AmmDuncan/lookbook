# Reproduction #9 — create/edit modal (over a dimmed app)

**Domain:** system/component (overlay) · **Target:** a real shipped link-in-bio tool's "add field" modal.
**Reference:** `_ref/linktree-modal.png` (eyedrop only).
**Build:** `linktree-modal.html` → render `linktree-modal@2x.png`. **Gate:** pushed live beside the reference. Status: **GATED — user "all looks good" 2026-06-03.**

> Deepening pass: this **validates the overlay shell** the command-palette cookbook (#6) claimed was reusable — scrim + centered floating surface + shadow. Same backdrop/float contract, different payload: a form instead of a command list. If the shell didn't transfer, this is where it'd show.

## The decisions I extracted (not traced)

1. **The overlay shell transfers (§6/§7).** Scrim that dims the app (still faintly visible — a layer, not a navigation) + a centered floating surface + a real shadow (it floats, so it earns the shadow). This is the *exact* contract from the ⌘K reproduction; only the contents changed. That transfer is the point of the exercise.
2. **A multi-step modal STACKS — the prior step peeks behind.** The card isn't alone: a faint, slightly-offset previous-step card sits behind the top edge (a back-arrow + a muted "Add field"). It signals "you're mid-flow, there's a step to go back to" without a breadcrumb. The front card has a centered title + an X; the *back* card carries the back-affordance. Subtle, but it's what makes this a wizard step rather than a lone dialog.
3. **The form is the modal's body, on the spine's form rules.** Field-Type as a select (a filled radio showing the chosen option + a chevron), Label as a soft-filled input — and crucially a **character counter** (`12/200`) right-aligned under it. Bold-ish field labels above each control (P-F-01: label above, not floating/inside).
4. **The choices REPEATER is the load-bearing detail.** Each option row = a **drag handle** (reorderable) + an input + a **trash** (removable), then a **"+ Add another option"** affordance in the accent. An empty trailing row invites the next entry. This repeater — drag + delete + add-row — is the reusable "edit a list of things" pattern that forms reach for constantly and the base never spelled out.
5. **One accent, three placements (§4).** A lavender→violet, used on exactly three things: the filled radio, the "Add another option" link, and the full-width Save. Everything else is neutral. The Save is a pill, full-width, gradient — a single unmistakable primary action (no competing secondary button up top; Cancel is the X).
6. **Soft-filled inputs, generous radii.** Inputs are a faint grey fill with a hairline, ~11px radius; the card is ~22px radius. A friendlier register than the table/rail reproductions — the §3/§4 dials moved toward warmth, which suits a consumer creator tool.

## Where the base HELPED

- **§6 depth** — "shadows only for things that float"; the modal + the stacked card are exactly that.
- **§7 / overlay** — the scrim-dims-app, centered-float contract carried straight over from repro #6's shell.
- **§4 accent discipline** — one hue, three placements, neutral everything else.
- **Forms (P-F-01)** — label-above-control, the input/select anatomy.

## Where the base was SILENT (the distillable)

1. **No modal recipe, no repeater recipe, no multi-step-stack note.** The overlay *shell* is now covered by `command-palette.md`, but the modal-specific layer isn't: the form-in-a-modal anatomy, the **character-counter** on a limited field, the **choices repeater** (drag + delete + add-another + empty trailing row), the **multi-step stack** (prior step peeking behind), and the full-width single-primary Save. → **cookbook candidate: "the modal & the repeater."** It should *reference* `command-palette.md` for the shell (don't restate the scrim/float/shadow contract) and `settings-page.md` for the save-action discipline, and add only the modal-and-repeater-specific parts.

## Build misses (mine)

- The reference's lavender Save reads very slightly more "disabled/inactive" (the form isn't complete); mine is at `.92` opacity — close, but the reference's is a hair flatter.
- The reference dimmed app behind is the real link-in-bio editor (sidebar + forms + a phone preview); mine is an abstract stand-in with a phone-shaped block. Reads as "modal over an app" but less specific (same call as repro #6).
- The drag-handle and trash glyphs are my icon set, not the reference's exact ones (negligible at scale).

## Score (my eye — pending the user's, decision-transfer bar)

Reproduces convincingly, and — the actual test — the overlay shell from repro #6 **transferred cleanly**: same scrim/float/shadow, new payload. The multi-step stack, the char counter, the choices repeater, and the one-accent/full-width-Save all land at the decision level. ~0 base gaps; §6 + §7 + §4 + the forms rules carried it, and the ⌘K cookbook's shell did real work here. The distillable is the modal-and-repeater recipe layered on the shared shell — no invented machinery.

**Cookbook distilled (user gated 2026-06-03).**
