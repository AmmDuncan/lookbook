# Anti-patterns — the "looks like AI" tells

`fundamentals.md` is the floor: pass/fail rules with numbers. This file is a **different verification mode**. These are not rule violations — most of the tells below technically pass every `F`-rule. They're the *accumulation* problems: individually defensible choices that, stacked, make a design read as machine-generated. A page can score 49/49 on fundamentals and still scream "AI made this" because it took the median, safe, most-probable choice at every fork.

This is the **second pass**, after the fundamentals check. Walk the catalog; for each tell, ask "is this present?" The scoring is not pass/fail per item — it's cumulative:

- **0 tells** — reads as designed by someone with a point of view.
- **1–2 tells** — forgivable; most shipped real products have a couple.
- **3+ tells** — reads as AI-generated regardless of how clean each piece is. Fix until under 3.

Each entry: the **Tell** (what it looks like), **Why it reads as AI** (the underlying cause), **Instead** (the move out).

Cite these by ID (`AP1`, `AP2`, …) in the verification narration, the same way fundamentals are cited.

---

## Color & surface

**AP1. The purple-to-blue (or teal-to-indigo) diagonal gradient.**
*Tell:* A 135° linear gradient from violet to blue on the hero, the CTA, or a card. Often `#6366f1 → #8b5cf6`.
*Why it reads as AI:* It's the single most over-represented gradient in training data — the default "make it look techy" move. Its presence is almost a watermark.
*Instead:* One flat accent from the project palette. If you want depth, reach for texture (F35–F39) or a single subtle atmospheric gradient in the *brand's* hue, not the stock violet-blue.

**AP2. Gradient text on headings.**
*Tell:* `background-clip: text` rainbow or violet-blue gradient on an `<h1>`.
*Why it reads as AI:* Decoration masquerading as hierarchy; it fights legibility (F15) and is a hallmark of template/AI output.
*Instead:* Solid ink. Earn emphasis through size and weight (F13), not a gradient fill.

**AP3. Everything glassmorphism.**
*Tell:* `backdrop-filter: blur()` + semi-transparent white on every card, nav, and modal.
*Why it reads as AI:* A trend applied indiscriminately. Glass is an atmosphere effect for *one* floating layer over a rich background; on flat cards it just muddies contrast.
*Instead:* Solid surfaces (F20). Reserve blur for a genuine floating layer over imagery or texture, once.

**AP4. Neon glow on dark.**
*Tell:* Dark UI where every accent element has a colored `box-shadow` bloom.
*Why it reads as AI:* "Futuristic" by default. Glow-everywhere flattens hierarchy — if everything glows, nothing is emphasized (echoes F16/F17).
*Instead:* Glow is a focal device — at most one per view, on the single most important element, if at all.

---

## Layout & composition

**AP5. The three evenly-sized feature cards.**
*Tell:* A row of exactly three (sometimes four) identical cards — icon on top, bold title, two lines of gray body — all equal size, equal weight.
*Why it reads as AI:* It's the default "features section." Equal sizing means no editorial point of view — the design refused to say which feature matters most.
*Instead:* Vary the composition. One large + two small (bento), an asymmetric grid, alternating left/right rows, or a single hero feature with the rest as a list. Let importance show in size (F13).
*Not this tell:* Ordered/numbered process steps (01·02·03) are *sequential peers* — equal treatment is correct, the same way KPI tiles or small multiples are peers. The tell is equal-weight *features* refusing to rank, not equal-weight *steps* that are genuinely parallel.

**AP6. Centered everything.**
*Tell:* Every section is center-aligned: centered eyebrow, centered heading, centered deck, centered single-column body, all the way down.
*Why it reads as AI:* Center is the safe default that never commits to a reading axis. Long centered blocks fatigue the eye (F23) and the whole page lacks a spine.
*Instead:* Establish a left edge for sustained reading; reserve center for short isolated display moments (F23). Mix alignment to create rhythm.

**AP7. Symmetric two-column "split" hero, text-left / illustration-right.**
*Tell:* 50/50 hero — headline + CTA on the left, a generic illustration or floating UI screenshot on the right.
*Why it reads as AI:* The single most-generated landing layout. Not wrong, but on its own it's invisible — a thousand AI sites open this way.
*Instead:* If you use it, make *one* element distinctive (the type treatment, a real product shot, an asymmetric split like 60/40, a signature texture). The layout can stay; the genericness can't.

**AP8. Uniform spacing everywhere.**
*Tell:* The same gap between everything — sections, cards, list items — so nothing groups.
*Why it reads as AI:* Violates the spirit of F12 (gap encodes relationship) even when each value is on-scale. Equal gaps = no hierarchy of relatedness.
*Instead:* Tighten related elements, widen between groups. Proximity should do work.

**AP9. The endless vertical stack.**
*Tell:* Hero → features → testimonials → pricing → FAQ → CTA, each a full-width centered band, no compositional variety between them.
*Why it reads as AI:* The default marketing skeleton with no editorial sequencing. Every band has the same shape, so the page has no pacing.
*Instead:* Vary band rhythm — full-bleed next to contained, dense next to sparse, a band that breaks the grid. Pacing is composition (F26 density should *change* across a marketing page).

**AP21. Wandering content edges — every section invents its own width.**
*Tell:* The hero content is 760px and left-flush, the feature section is 1120px centered, the quote is 840px centered. Scroll down and the content's left edge hops inward and outward; nothing lines up on a shared axis.
*Why it reads as AI:* It's the *cumulative* face of a broken alignment spine (F74). Each section was generated in isolation with its own "sensible" max-width, so the page has no shared measure — the hallmark of stacked fragments rather than one designed layout. Every section can look fine alone and the page still reads as assembled. (The tell is *arbitrary, unrelated* widths off different axes — not simply having more than one width; a narrow prose block nested inside the wide container is correct.)
*Instead:* Draw section widths from a small defined set (≤3) on one shared axis (F74). Full-bleed backgrounds span edge to edge but their inner content returns to the set; narrower measures align to the default container's edge or center, not their own.

**AP10. Inter / Geist / system-sans and nothing else, untreated.**
*Tell:* Default sans at default tracking and weight, no display face, no optical adjustment, no character.
*Why it reads as AI:* The most-probable font with zero typographic decisions on top of it. Safe, mute, anonymous.
*Instead:* The body sans is fine — but make *one* typographic decision with personality: a display face for headings, deliberate tracking (F7), a weight jump, a distinctive numeric treatment. One signature is enough.

**AP11. Gray-on-gray body text washout.**
*Tell:* Body text at `#9ca3af`-ish on white because "soft gray looks refined."
*Why it reads as AI:* Defaulting to low-contrast as a stand-in for elegance — usually fails F15 too, but even when it scrapes 4.5:1 it reads as timid and templated.
*Instead:* Primary body at ≥7:1 (F15). Save the muted gray for genuinely secondary text, and even then keep it ≥4.5:1.

**AP12. Emoji as section icons.**
*Tell:* 🚀 ⚡ 🔒 ✨ as feature/section markers.
*Why it reads as AI:* The laziest "add an icon" move; clashes with any real icon set (F41) and dates instantly.
*Instead:* One consistent icon family (F41), outline by default (F44).

---

## Imagery & icon

**AP13. Smiling-people-pointing-at-laptops stock photography.**
*Tell:* Diverse team high-fiving, person pointing at a screen, abstract handshake. (Same as F46 — repeated here because it's the loudest *cumulative* tell.)
*Why it reads as AI:* Signals "we couldn't be bothered to make real imagery."
*Instead:* Real product UI in device frames, real customer/founder photography, custom illustration, or no imagery (F46, F49).

**AP14. The undifferentiated icon-in-a-rounded-square grid.**
*Tell:* A grid of identical rounded-square tiles, each a thin-line icon centered in a pale accent-tinted box.
*Why it reads as AI:* The default "iconography section." All tiles equal weight, all the same — decorative, not informative.
*Instead:* Let the icons sit inline with their content, vary the treatment by importance, or drop the boxes entirely (boxes are usually F13 noise tax).

**AP15. Generic blob / isometric / 3D-floating-shapes illustration.**
*Tell:* Corporate-memphis blobs, isometric tiny-people scenes, or floating glassy 3D geometric shapes.
*Why it reads as AI:* These illustration styles are training-data-saturated and carry no brand specificity — they're the visual equivalent of filler text.
*Instead:* Illustration in the brand palette doing a real job (F48, F49), or restraint — no illustration beats generic illustration.

---

## Copy & content

**AP16. "Lorem ipsum" energy — real words, no information.**
*Tell:* "Empower your workflow." "Seamlessly integrate." "Unlock the power of." Headlines that could belong to any product.
*Why it reads as AI:* Maximally generic copy is the text-equivalent of the violet-blue gradient — the most-probable string that says nothing.
*Instead:* Specific, concrete claims. Name the actual benefit, the actual number, the actual job. Copy is design (it sets the whole tone).

**AP17. Placeholder names that scream demo.**
*Tell:* "John Doe," "Acme Inc.," "Lorem Ipsum," `user@example.com`, `$XX.XX`.
*Why it reads as AI:* Untouched scaffolding left in the design.
*Instead:* Plausible, realistic sample content — real-sounding names, real-shaped data, believable numbers. Realistic content exposes layout problems that placeholder content hides.

---

## Component & state

**AP18. Two equal-weight primary buttons side by side.**
*Tell:* "Get Started" and "Learn More" rendered as two identical filled accent buttons.
*Why it reads as AI:* Refuses to choose a primary action (violates F16's spirit). The default "put two buttons here" move.
*Instead:* One primary (filled), one secondary (ghost/text). Make the hierarchy of intent visible.

**AP19. Only the happy path exists.**
*Tell:* Beautiful populated state; no loading, empty, or error state designed (F33). Hover states missing (F32).
*Why it reads as AI:* Generation optimizes the screenshot, not the system. The states that signal craft are exactly the ones skipped.
*Instead:* Ship all four data states (F33) and all five interactive states (F32). This is where real design separates from generated.

**AP20. Perfectly even, perfectly safe everything.**
*Tell:* No element breaks the grid, no intentional asymmetry, no single bold move, nothing that a committee would flag. Immaculate and forgettable.
*Why it reads as AI:* The model regresses to the mean at every decision. The *absence* of any risk is itself the tell — real design has at least one opinion.
*Instead:* Make one deliberate, defensible bold move — the signature move from `personality.md`. One element that commits. Safe-everywhere is the meta-tell that contains all the others.
*Surface scope:* This tell applies to **expressive surfaces** — marketing, hero, landing, brand moments — where restraint reads as timidity. It does **not** bite on scan-first product surfaces (dashboards, data tables, settings), where restraint *is* the goal (familiarity beats novelty; see `patterns/dashboard.md`). On those surfaces the design earns its quality through **clarity, not a decorative gesture** — give it *zero* added flourish, only functional treatments (tabular numerals, a clear status channel, a tuned density). A signature move bolted onto a dashboard is noise, not personality. Don't flag AP20 on a calm dashboard; *do* flag the inverse (AP23/AP24) when a functional surface gets decorated.

**AP22. Tells instead of shows — all text, no craft.**
*Tell:* The page *describes* the product in prose — hero headline, feature paragraphs, three text steps, a quote — with little or no product imagery, depth, iconography, or texture. Flat type blocks on a flat background. The canonical AI-SaaS skeleton, and "spacious" sections that are actually just *empty*.
*Why it reads as AI:* A human who ships software *shows* the software — real UI in a frame, an annotated screenshot, a diagram of how it works, a code/diff, a data viz, depth and layering. Generation defaults to *describing* because describing is just more text. The result passes every rule and still screams "generated." It's the cumulative face of P-M-07 (imagery is product-true), F49 (imagery does a job), and AP20 (no opinion).
*Instead:* Show the product. At least one substantial visual that *is* the explanation, not text about it. Add craft — depth, one real texture device with intent, iconography with weight. Spacious ≠ empty: fill the room with something worth seeing.
*Detect:* You can only catch this by **looking at the rendered design** — viewing the actual output, not reading the markup or the rules. It is invisible to every rule check: each element is individually fine; the page is flat. (Battle-tested: a fully rule-compliant Mason landing read as "text on paper, screams AI" — caught only once the rendered result was actually viewed.)

**AP23. Status double-encoded in two visual channels.**
*Tell:* The same status said twice at once — a "Critical/Low" badge *and* a colored depletion/progress bar in the same cell; or a status pill *and* a tinted row *and* an icon, all carrying the one fact.
*Why it reads as AI:* Redundant encoding masquerading as thoroughness — it adds visual weight without adding information (the F13 noise tax) and crowds dense cells until they read as "too much." One status, one channel.
*Instead:* Pick the single most legible channel for the context — a pill for a category, a bar for magnitude, a colored value for a threshold breach — not two. If both magnitude *and* category matter, show magnitude (the bar/number) and let *its* color carry the category. (Battle-tested: a warehouse dashboard stacked a Critical/Low badge over a depletion bar in one status column — the redundancy was the noise.)

**AP24. Decorative icons on stat / KPI tiles.**
*Tell:* Every KPI/overview tile gets a little glyph in the corner (a box, a truck, a warning mark) — an icon per card because "cards have icons."
*Why it reads as AI:* The reflex "add an icon" move (cousin of AP12/AP14). On a stat tile the **number is the content**; a decorative icon is F13 noise tax that competes with the figure for the eye and makes a clean strip look busy.
*Instead:* Let the label + number carry the tile. Add a glyph only when it's *functional* — a trend arrow that encodes direction, a status dot that flags a breach — never as per-card decoration. (Battle-tested: KPI tiles with corner icons read measurably busier than the same strip without them.)

**AP25. Decorative accent border on cards / tiles — the colored-edge "AI favorite."**
*Tell:* A colored accent strip down the left edge (sometimes top, sometimes a full accent outline) of cards, KPI tiles, or panels, applied for emphasis "because it looks designed" — frequently on one tile to "highlight" it, or on every-other row.
*Why it reads as AI:* A reflex decoration that spends the accent on a container *edge* rather than on *meaning* — the border carries no information (violates F17 accent-scarcity and F19 accent-encodes-meaning; an F13 noise tax). It became a recognizable generated-UI signature: ornament masquerading as hierarchy. Real emphasis comes from size / weight / position or a tonal surface, not a candy stripe.
*Instead:* Earn emphasis *structurally* (the depth rubric's hierarchy axis) — a larger figure, a heavier weight, a tinted or elevated surface, or the hero slot. A colored edge is legitimate only when it is the **sole or primary carrier** of that meaning — a status accent on an *otherwise-neutral* row, a selected-state marker. **If a tint, icon, or colored heading already encodes the same status, the edge is redundant** (F13 noise-tax, AP23-adjacent) — drop it. "It encodes severity" is a **loophole** when severity is already shown three other ways: a red-tinted, red-iconed, red-headed alert does **not** also need a red left edge. Never default card chrome. (Flagged by eye twice: across the depth-rubric battle test the accent left-border was the one tell that survived an otherwise-clean dashboard; and a brain-on *clinical alert* later slipped a redundant red left-edge past both the design agent and a blind fundamentals auditor under the "encodes severity" excuse — which is exactly why the test is now sole/primary-carrier, not merely "encodes something.")

---

## How to use this file

- **Run it as the second verification pass**, after the fundamentals `Check:` sweep. Fundamentals catch broken rules; anti-patterns catch a technically-correct-but-generic result. AP22 in particular is only visible once you've actually looked at the rendered design (not the markup).
- **Count the tells.** 0 ideal, 1–2 acceptable, 3+ means rework. Report the count and the IDs in narration: *"Anti-pattern pass: 2 tells — AP5 (three equal feature cards), AP10 (untreated Inter). Under threshold; flagging AP5 as the one to revisit."*
- **AP20 is the meta-tell.** If a design trips nothing specific but still feels generated, it's AP20 — the absence of any opinion. The fix is the signature move, not another safe tweak.
- **Cross-references:** many anti-patterns are the *cumulative* face of a fundamental (AP8↔F12, AP13↔F46, AP18↔F16). The fundamental is the floor; the anti-pattern is what failing it looks like in the wild even when the number technically passes.
