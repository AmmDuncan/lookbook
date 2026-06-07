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
