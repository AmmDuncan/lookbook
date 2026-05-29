# Evidence — Accessibility (semantics) (P-AY calibration)

Method: **this pattern is grounded in CANON, not visual trend.** Unlike the surface archetypes (calibrated from reference study of real screens) or the contrast gate (calibrated by measuring pairs), accessibility *semantics* live in the accessibility tree and in normative specs — they are right-vs-wrong by standard, not better-vs-worse by taste. So the backbone here is the **WCAG 2.2 AA success criteria**, the **WAI-ARIA Authoring Practices Guide (APG)** patterns, the **HTML living standard** and **MDN ARIA** reference, and the **`fundamentals.md` precedence ladder** ("Tier 1 — Accessibility & perception never yields"). A secondary, corroborating layer comes from a **reference study of real, public, shipped products** — how well-built apps actually do focus order, keyboard operability, dialog focus, and error wiring — but it confirms the canon rather than setting it. Each P-AY rule below maps to its normative basis. 2026-05-29.

This file complements `scripts/contrast.mjs` (the *computed color* gate, F15/F54/F55/F66). Color is the half of a11y a tool can fully verify; this is the half verified by markup inspection + one keyboard/SR pass — which is why the pattern's `Check:` lines are markup-auditable, not "look at the pixels."

## Rule → standard map (the backbone)

| Rule | What it requires | Normative basis (the canon) | Corroboration |
|---|---|---|---|
| **P-AY-01** Accessible name on every control; icon-only must be labeled | WCAG **4.1.2 Name, Role, Value** (Level A) | MDN: `aria-label` / `aria-labelledby`; decorative icons `aria-hidden` | Well-built apps label every icon button (a trash/kebab/`×` reads as "Delete row", "More actions", "Close") — never "button"/"". |
| **P-AY-02** Native `<button>`/`<a>`; no `<div onclick>` | WCAG **4.1.2**, **2.1.1 Keyboard** (A); **ARIA rule 1** ("use a native element before a role") | HTML living standard (`<button>`, `<a href>` self-announce role + are keyboard-operable) | Real products use native controls; the `<div onclick>` tell is an AI/template hallmark, not shipped-product practice. |
| **P-AY-03** Visible focus indicator; ring ≥3:1 | WCAG **2.4.7 Focus Visible** (AA); **1.4.11 Non-text Contrast** (AA, ring is a graphic); **2.4.11/2.4.13 Focus Appearance** (2.2) | `:focus-visible` (CSS spec); F34 ring spec | Good apps *restyle* focus (keyboard-only via `:focus-visible`), never delete it; the deleted-outline is the AI tell. |
| **P-AY-04** Logical focus order; full keyboard operability; no trap; conventional keys | WCAG **2.4.3 Focus Order** (A), **2.1.1 Keyboard** (A), **2.1.2 No Keyboard Trap** (A) | APG keyboard conventions per widget (`Esc`, arrows, Enter/Space); no positive `tabindex` (HTML) | Hover-only menus / drag-only reorder with no keyboard path is the mouse-only-interaction tell shipped apps avoid. |
| **P-AY-05** Semantic HTML + landmarks; one `<main>`/`<h1>`; no skipped headings; real tables | WCAG **1.3.1 Info & Relationships** (A), **2.4.1 Bypass Blocks** (A) | HTML sectioning elements; ARIA landmark roles (MDN); `<th scope>` | SR users navigate by landmark/heading; a div-soup page has no doors — corroborated by AT-user navigation behavior. |
| **P-AY-06** Dialog focus contract: focus-in, trap, `Esc`+close, return focus, `role=dialog`+`aria-modal`+`aria-labelledby`, background `inert` | WCAG **2.4.3** (A), **4.1.2** (A); **APG Dialog (Modal) pattern** (the canonical recipe) | HTML `<dialog>` + `inert`; MDN `aria-modal` | Restates P-CN-10 (containers.md); every well-built modal traps + restores focus — the leaky/un-restoring modal is the failure. |
| **P-AY-07** Error association: `aria-invalid` + `aria-describedby`; real `<label for>`; `<fieldset><legend>` groups | WCAG **3.3.1 Error Identification** (A), **3.3.3 Error Suggestion** (AA), **1.3.1** (A), **4.1.2** (A) | MDN `aria-describedby`/`aria-invalid`; HTML `<label>/<fieldset>/<legend>` | Wires up P-F-06 (form.md, *where* the error sits + F69 copy) so a SR announces it; visual-only adjacency is silent. |
| **P-AY-08** Live region for async/dynamic change; region exists in DOM before content changes | WCAG **4.1.3 Status Messages** (AA) | MDN `aria-live` (`polite`/`assertive`), `role="status"`/`role="alert"`; live region must pre-exist | Toasts/counts/saves a sighted user sees are silent to SR without a live region; cross-ref F33 / empty-states for the *visible* states. |
| **P-AY-09** Target ≥24px any pointer; ≥44px coarse | WCAG **2.5.8 Target Size (Minimum)** (AA, new in **2.2**, the 24px floor); F52/P-MO-07 (44px touch) | Apple HIG 44pt / Material 48dp (the 44px corroboration) | The 24px AA baseline catches cramped *desktop* toolbars a mouse can technically hit but AA fails; 44px is the stronger touch bar. |
| **P-AY-10** No color/shape-only meaning; parallel text/state channel | WCAG **1.4.1 Use of Color** (A) + the SR corollary (color isn't in the a11y tree) | `aria-required`/`aria-invalid` for state; textual labels/legends | The SR/non-color complement to F55/F19/AP23 (AP23 forbids redundant *visual* channels; this requires a *non-visual* one). |
| **P-AY-11** Skip link to `#main`, first focusable, `.sr-only`+`:focus` reveal, target `tabindex="-1"` | WCAG **2.4.1 Bypass Blocks** (A) | Common visually-hidden-until-focus pattern (MDN/WebAIM) | Keyboard users otherwise tab the full header/nav on every page; landmarks (P-AY-05) give the SR shortcut, skip link the keyboard one. |
| **P-AY-12** Reduced-motion fallback (deferred to motion.md) | WCAG **2.3.3 Animation from Interactions** (AAA) + F31 (Lookbook elevates to floor) | P-MT-10 owns the full recipe | Named here only so the a11y audit doesn't skip it; not re-specified. |

## Why canon, not reference-screens, sets this pattern
Surface archetypes calibrate well from screenshots because *what good looks like* is partly a taste/trend judgment a still image carries. Accessibility semantics are the opposite: **a screenshot cannot show whether a button has an accessible name, whether focus is trapped in a dialog, whether an error is `aria-describedby`-linked, or whether a toast hits a live region** — those live in the DOM/accessibility tree, not the pixels. The honest test is *markup inspection + a keyboard pass + a screen-reader pass*, not "look at the render." So the pattern is set by the normative specs (which define right-vs-wrong unambiguously) and merely *corroborated* by how real shipped products behave. This is also why this pattern's `Check:` lines are auditable in markup/by keyboard, unlike the visual patterns' "render and look."

## The determinism lesson (the dynamic-generation note)
Most Lookbook patterns are *contextual* — the right container, the right density, the right section rhythm depends on the flow. Accessibility-semantics are mostly **deterministic**: there is a correct markup and an incorrect one. An icon button either has a name or it doesn't; a control is either a native `<button>` or a `<div onclick>`; an error is either `aria-describedby`-linked or it's floating. That makes the agent's job *easier here than anywhere else in the brain* — the rules are self-verifiable against the markup the agent just wrote. The failure mode is not "I made a contextual judgment call wrong"; it's "I skipped the check entirely" — which is exactly what SKILL.md guards against for contrast (the computed gate that "silently skips otherwise") and what this pattern's markup-audit `Check:` lines guard against for semantics.

## The failures AI-built UI ships most (priority order — what the rules front-load)
1. **Icon-only control with no name** (P-AY-01) — the single most common; trash/kebab/`×`/hamburger announcing nothing.
2. **`<div onclick>` instead of `<button>`** (P-AY-02) — keyboard can't reach it, no role.
3. **`outline:none` / no visible focus ring** (P-AY-03) — deleted "because it looked ugly."
4. **Error text not associated with its input** (P-AY-07) — visually adjacent, programmatically orphaned.
5. **Modal that doesn't trap or restore focus** (P-AY-06) — focus leaks to the frozen page, or dumps to top on close.
6. **Color-only state** (P-AY-10) — a red border / green dot with no text or `aria-*`.
7. **Silent async updates** (P-AY-08) — toast/results-count/save the SR never hears.
8. **Div-soup, no landmarks/headings** (P-AY-05); **sub-24px targets** (P-AY-09); **no skip link** (P-AY-11).

## Calibrations applied to patterns/accessibility.md
1. **Name-role-value** on every control; icon-only must be labeled (P-AY-01 ← WCAG 4.1.2).
2. **Native element first**; no `<div onclick>` (P-AY-02 ← 4.1.2/2.1.1, ARIA rule 1).
3. **Visible focus ring**, ≥3:1 (P-AY-03 ← 2.4.7/1.4.11/2.4.11; F34).
4. **Logical focus order + full keyboard + no trap + conventional keys** (P-AY-04 ← 2.4.3/2.1.1/2.1.2; APG).
5. **Semantic HTML + landmarks + heading outline + real tables** (P-AY-05 ← 1.3.1/2.4.1).
6. **Dialog focus contract** (P-AY-06 ← APG Dialog; restates P-CN-10).
7. **Error association** `aria-invalid`+`aria-describedby`, real labels, fieldset groups (P-AY-07 ← 3.3.1/3.3.3/1.3.1; wires P-F-06).
8. **Live regions** for async change (P-AY-08 ← 4.1.3; cross-ref F33/empty-states).
9. **Target size** ≥24px any pointer / ≥44px coarse (P-AY-09 ← 2.5.8; F52).
10. **No color-only meaning** — parallel text/state channel (P-AY-10 ← 1.4.1; SR complement to AP23).
11. **Skip link** to main (P-AY-11 ← 2.4.1).
12. **Reduced-motion** deferred to P-MT-10/F31 (P-AY-12 ← 2.3.3).
