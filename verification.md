# Verification — sweeps, gates, and the receipt

> Pulled from SKILL.md's core. The firm principle stays in SKILL.md ("don't claim a design good from
> the markup; run the contrast + a11y gates; look at the pixels before you ship"). This file is the
> full procedure — load it for any **substantial** designed output before presenting. For a quick
> mockup, the core principle plus the two always-run checks (contrast + responsive) is enough; the
> full 6-section receipt and adversarial critic are for work you're about to ship or hand over.

## The two sweeps (after the design is built)

Run a verification pass in two sweeps. First, **fundamentals**: walk the rules that have a `Check:` line, confirm the rendered output complies, and flag violations. A violation must be either fixed or moved to `personality.md` with a justification — undeclared deviations are not a choice. Second, load `anti-patterns.md` and run the "looks like AI" sweep: count the tells (`AP1`…), report the IDs in narration, and rework until under 3. Fundamentals catch broken rules; anti-patterns catch a technically-correct-but-generic result.

## The deterministic gates (run before the critic)

Three checklist lines are deterministic gates:
- `node scripts/check-contrast.mjs <file>` — WCAG-AA, incl. the faint tier; checks LIGHT and DARK independently when a dark override exists, so dark-mode-only failures don't slip through. (A *warning* on faint-vs-elevated-surface is a real failure if any faint text renders there.) Or the pair-form: `node scripts/contrast.mjs "<fg>:<bg>:<label>" …` on every non-neutral text/surface pair, every status label on its tint, and every filled control's label on its fill (F15, F54, F55, F66). Exits non-zero on any failure — a blocking gate.
- `node scripts/check-layout.mjs <a> <b> …` — fingerprints layout geometry, flags shared skeletons = the fake-variety/re-skin tell.
- `node scripts/check-focus.mjs <file>` — fails on any interactive element whose focus ring is suppressed without replacement (the bare-button bug a real build shipped).

## The checks that get skipped silently otherwise

- **Color-as-text contrast.** Run the checker, don't eyeball (see the contrast gate above). Fill-valid ≠ text-valid; same-hue text-on-tint is the default failure.
- **Responsive + touch.** A desktop-only render cannot prove F50–F53 — so **render THREE widths and LOOK: desktop (~1280) / tablet (~768) / mobile (~390).** Two widths is the common trap; the medium/tablet band breaks most often (cramped grids, awkward N→1 column jumps). Confirm content parity (nothing essential `display:none`'d without an affordance, F50), intermediate reflow (no direct N-col→1-col jump), and a coarse-pointer F52 check. See `patterns/mobile.md`.
- **Alignment spine.** List every section's content width and trace its left/right edge down the page (F74). Widths must reduce to ≤3 sanctioned measures on one shared axis; narrower sections nest inside the wider container, not off to the side. This hides from the contrast/AP/copy sweeps — each section looks fine alone while the page reads as assembled. Across multiple pages of one product, the axis must hold *between* pages too (`patterns/site-archetypes.md` P-SA-02).
- **Flow cost (edit-oriented & mixed surfaces — skip only for purely view-oriented ones).** Depth scores *read* quality and says nothing about the cost of *doing* the task. Name the **2–3 most common tasks** the surface supports (one line each), then **count clicks / key-presses for each in the proposed design vs the current/baseline.** Any **regression must be justified out loud, never assumed** — a visually richer proposal that adds real edit clicks is usually the *wrong* trade however well it scores on depth. The still frame can't show it, only the count can. The proposal that *leaves a working primary interaction alone* often wins.
- **Accessibility semantics.** Contrast is only half of a11y. Load `patterns/accessibility.md` and confirm the *non-color* floor against the markup — deterministic and skipped silently otherwise: accessible name on every control (icon-only buttons especially, P-AY-01), native `<button>`/`<a>` not `<div onclick>` (P-AY-02), visible `:focus-visible` ring ≥3:1 (P-AY-03), logical focus order + full keyboard operability (P-AY-04), landmarks + one `<h1>` (P-AY-05), the dialog focus contract (P-AY-06), errors via `aria-invalid`/`aria-describedby` (P-AY-07), async changes via a live region (P-AY-08), target size ≥24px / 44px-coarse (P-AY-09), no color-only meaning (P-AY-10), a skip link (P-AY-11), reduced-motion fallback (P-AY-12).
- **Engagement ethics floor** (whenever the surface ships to real users — especially signup / checkout / subscription / cancellation / notification / retention). Load `patterns/engagement.md` and confirm: **no deceptive pattern** (P-EN-11) and **every engagement mechanic passes the five manipulation tests** (P-EN-10). Scope is **production** (placeholder counts/scarcity in a mockup are fine). No engagement/commercial mechanic → reduces to the exit-path check, otherwise N/A.

## The adversarial critic (recommended for substantial work)

The builder's own eye runs generous (proven: it rated a whole set "done" in which an independent critic then found blockers in every file — WCAG-failing text, fake variety, §11 tells). For anything substantial, run an adversarial critic pass — a fresh agent prompted to find flaws and forbidden to praise — after the deterministic gates. The work is done when it survives an adversary, not when it looks good to its author. (For a quick mockup this is optional; for anything you ship or hand over, do it.)

## The verification receipt — make the review *visible*

A skill is instruction, not enforcement: the render-and-look loop and these sweeps are worthless if they silently get skipped, and the reader can't tell a reviewed design from an un-reviewed one. So for substantial output the pass is not complete until you **emit a short receipt** the reader sees at a glance — claims don't count, paste the evidence:
- **Render** — the method used + the widths looked at ("headless screenshot, 1280 / 768 / 390"), with the screenshot(s) actually viewed. This covers **every surface in scope this turn — including any new mockup you generated to *propose* something** (a proposal mockup is its own surface, needing its own render-and-look before you push it).
- **Contrast** — the contrast table (every pair + pass/fail).
- **Anti-patterns** — the tell count + the IDs.
- **Depth** — which depth-rubric axes the surface earned + the count vs its gate (see `depth-rubric.md`).
- **Alignment spine** — the section widths traced down the page.
- **Flow cost** (edit-oriented & mixed surfaces) — the top 2–3 task click-counts, proposed vs current, with any regression justified. (Omit only for purely view-oriented surfaces.)

## Three hard rules

- **No "done / looks good / shipped" claim without a pasted render.** Evidence before assertions — you may not call a design good from the markup. If you didn't look at the pixels, you don't know.
- **If you *cannot* render in this environment, say so and stop short of the claim** — *after* generating. Deliver the output, but flag it explicitly as **visually unverified** ("I have not been able to render this, so I have not seen it — please render it, or tell me how") instead of asserting it's good. Never silently skip the loop and proceed as if it ran.
- **A NEW surface you generate gets its OWN Step 0 — even mid-session, even right after receipting a different surface.** The moment you generate a new designed artifact — a proposal mockup, an alternative direction, a redesign, *anything you're about to push to easel / hand over* — it is a fresh surface: render it and look at it locally **before** the push. Pushing is *delivery, not iteration*. The tell to catch yourself: *"I just designed a proposal — let me push it"* → no, that mockup hasn't been render-looked yet.

## Converge, then deliver — the loop is self-critique, not delivery

The render-and-look loop (Step 0) is *private iteration*: render, look, fix, re-render until the design is genuinely good — *converged*, meaning it holds the north star and clears the receipt above. **Deliver only once it has converged.** Don't surface a flat first draft as if it were the answer; "I rendered it once" is not done — a look that reveals a problem means another fix, not delivery.
- **Translated to a real destination → re-verify there.** A loop that passed on a standalone HTML mockup does *not* transfer to the integrated component — different CSS cascade, real data, real states. After translating a mockup into the app, run the loop again *in the app* (or flag it visually-unverified).
- **Even when the destination *is* a mockup surface** (easel / visual companion), converge *first*, then take one post-delivery fidelity glance.
