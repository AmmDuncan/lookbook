# Thesis test — does the cookbook compel a good voice from a weaker model?

**The question** (the original Phase-5 test, finally run): hand the spine + `cookbooks/registers.md` (and nothing else — no example files) to a *weaker* model and a fresh brief. Does it produce a coherent, non-generic, checklist-passing voice, or default to slop? If the cookbook only works in the hands of the author who wrote it, it isn't ready.

**The setup.** A Sonnet agent was given only `the-design-brain.md` + `registers.md` + the brief: *"Forge — a CI/CD tool for developers; feeling: fast · technical · precise · confident · keyboard-first."* It was forbidden from reading any `float-*.html` example. It set every dial explicitly, built `forge.html`, rendered it, and self-graded against the pre-ship checklist.

**Two independent checks then ran on its output** (the readiness mechanism — author self-grade is not trusted):
- `scripts/check-contrast.mjs` (objective WCAG gate)
- an adversarial design critic (Opus, "find flaws, no praise")

## Result: **MOSTLY — the cookbook works, and the gaps it exposed are fixable.**

The Sonnet output was a coherent **cool-technical** voice, not generic dark-SaaS: cool-tinted dark surface (`#0D0F14`), Geist + Geist Mono, sharp radii, flat-hairline depth, a scarce load-bearing cyan accent, real per-stage pipeline data, and — crucially — **numbers in mono+`tabular-nums`, the data dial set correctly**. The critic: *"a deliberate point in the dial space, grounded recognizably in the Linear/Vercel/Fey lineage. It clears the 'generic' bar."* The model nailed **every dial that has a named value or a measurable threshold.**

It fell down in exactly two places — and the pattern is the finding:

1. **Contrast self-grade was optimistic.** The model claimed contrast passed; the objective gate found `--gray-600` log-timestamp text at **1.68:1** (invisible) + a marginal faint tier. → *Self-grading misses contrast; the machine gate catches it.* (This is why the checklist's contrast line is now `node scripts/check-contrast.mjs`.)
2. **It defaulted on the anti-patterns stated only as prohibitions** — a three-identical-feature-card row and four stacked full-bleed bands — even though it was *told* to avoid them. Because the composition dial named *hero* shapes only and gave **no positive vocabulary for the body**. Told only what to avoid, it avoided by reflex and landed on the default grid. It also slipped a status-cosplay dot (a "live" dot beside a static build count).

## What it changed in the cookbook (the actionable output)

- **Added a "Composing the body (below the hero)" section** — positive patterns to reach *for* (bento · asymmetric span · staggered 1+2 · inset-vs-full-bleed · big-number/editorial list) + the explicit note that the three-card / stacked-band tells apply **intra-page**, and that differing *content* in identical *card shapes* does NOT satisfy "bones differ."
- **Made the contrast checklist line machine-enforceable** (`check-contrast.mjs`).
- **Did NOT add a quantitative accent threshold** — the model *asked* for "≤N instances," but the critic argued (convincingly) that scarcity is a *visual-weight* judgment, not a tally, and a hard count would force deleting a meaningful colour to hit a number. The checklist now says exactly that.

## The meta-finding

The cookbook compels good design **precisely to the degree that a dial has a named value or a measurable gate.** Where it states a *prohibition without a positive recipe*, a weaker model avoids-by-reflex and defaults. The work of making Lookbook "ready" is therefore: turn every prohibition into a positive pattern, and every measurable rule into a gate. The thesis test passed — and told us exactly what to do next.

---

# Re-run #2 — Sift (the body-composition fix, validated)

**The question this run answers:** Forge fell into the two anti-patterns stated only as *prohibitions* — a 3-identical-feature-card grid and four stacked full-bleed bands — because the cookbook named only *hero* composition shapes. In response, `cookbooks/registers.md` gained a **"Composing the body (below the hero)"** section turning those prohibitions into positive patterns (bento · asymmetric span · staggered 1+2 · inset-vs-full-bleed · big-number list). Does a weaker model handed the *improved* cookbook now avoid that default?

**The setup (a clean A/B).** A Sonnet agent was given only `the-design-brain.md` + `registers.md` and the brief: *"Sift — an observability / log-search tool for backend engineers; feeling: fast · technical · precise · confident · keyboard-first."* The feeling-words were chosen to be **near-identical to Forge's** so the voice region is held constant and the *only* changed variable is the cookbook's new body section. Same rules: no example files, set every dial, build, render 2x, self-grade.

**Three independent checks ran on its output** (the readiness mechanism — author self-grade is not trusted):
- `scripts/check-contrast.mjs` (objective WCAG gate)
- `scripts/check-layout.mjs` (the new "fake variety" gate — fingerprints layout geometry, flags shared skeletons)
- an adversarial design critic (Opus, "find flaws, no praise")

## Result: **MOSTLY — and the specific gap Forge exposed is now closed.**

**The body-default problem is fixed.** Forge's `repeat(4,1fr)` stat grid + `1fr 1fr 1fr` feature triad + stacked equal bands do **not** recur. The layout-diff gate scores forge↔sift at **0.40 (PASS, no shared skeleton)**, and Sift's layout primitives contain **zero** equal-column grids (`repeat(3,1fr)`/`repeat(4,1fr)`) — every body section is an asymmetric span. The five body sections each have a distinct skeleton (verified by eye *and* by the gate):

- **Query** — asymmetric span (`280px 1fr`): narrow copy rail + a wide real query-result table. Hierarchy from scale contrast, no card chrome.
- **Speed** — staggered 1+2: one 76px stat alone on a row, then two 36px proof-points sharing the next. Row *rhythm* differs, not three-across.
- **Setup** — big-number editorial list (`80px 1fr 360px`): four ruled rows, 48px ordinals, copy, a per-row code artifact whose *contents differ* (npm line / export / 6-line block / search chip) — avoiding the "differing content in identical card shapes" trap.
- **Testimonial** — `1fr 1fr` quote + a 3-row metric ledger. The one band that brushes the "identical stacked cards" tell, but saved as a half-column data ledger, not a full-bleed triad. The weakest-composed band, not a blocker.
- **CTA** — `1fr 400px` inset: headline left, contained form right. Asymmetric, not centered-everything.

This is the actionable proof that the prior run's prescription worked: **turning the prohibition into a positive vocabulary changed the weaker model's default.**

## Where it still fell down (the evolved meta-finding)

The self-grade-vs-gate contrast gap **reappeared — but as a hairline crack, not the chasm.** Unlike Forge (which shipped invisible 1.68:1 log-*timestamps* and never measured them), Sift's model demonstrably **learned the contrast self-audit**: it proactively *found and fixed* a 1.78:1 step-ordinal (corrected to `#606075`, 3.24:1, verified passing as large text), and it measured and annotated every **named** text tier correctly (`--ink` 16.3:1, `--muted` 8.5:1, `--faint` 5.08:1 — all true).

It missed exactly **one** tier: `.lnum` (code line-numbers + the `$` shell-prompt glyph) was set to `--border-strong` (#3a3a48) at **1.58:1** and never self-audited — because it reached for a **border/divider token as a text color**, the one tier its own audit skipped. The harm is low (line-numbers carry no information a user must read — milder than Forge's timestamps), but it's a hard gate FAIL and a one-line fix.

**The finding sharpens the prior one:** the model *can* learn "measure every text token," and mostly did — the failure migrated from a *named* text tier (caught by self-audit) to a **non-text-named token reused as text** (skipped by self-audit). The objective gate still earns its keep precisely there: it caught the one `color:` usage the improved-but-imperfect self-audit didn't think to check. **The lesson the cookbook should add: a border/divider/decorative token reused as a `color:` is the tier most likely to dodge the audit — measure *those* usages especially.**

## What this run changed (the actionable output)

- **Validated the "Composing the body" section** against a fresh, voice-matched brief — the fix holds in a weaker model's hands, not just the author's.
- **Added the layout-diff gate** (`scripts/check-layout.mjs`) to the readiness mechanism and wired it into the pre-ship checklist's composition line — the "composition moved, not just palette" rule is now machine-enforceable, the way contrast already was.
- **Added a contrast caution** to `registers.md`: a non-text-named token (border/divider/decorative) reused as a text `color:` is the tier most likely to skip the self-audit — measure those usages.
- **Did NOT fix sift.html** — it is preserved as the as-built evidence (like forge.html), warts intact.
