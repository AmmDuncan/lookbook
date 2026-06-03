# Experiment: empirical rebuild (reproduce-from-real)

Branch `experiment/empirical-rebuild`. Nothing here touches `main` until it proves out.

## Why

The current Lookbook's authority rests on **rules I authored + convergence tests I graded with my own (too-generous) eye.** This session proved that's too soft: a real designer's one glance found a tell (AP28, status-cosplay) that shipped in the kits and passed every self-judged convergence run. Self-grading is not ground truth.

The fix (user's direction): **ground the brain in reality and validate by reproduction.**
- **The base** = `the-design-brain.md` (a tight, opinionated principles spine — replaces the sprawl).
- **The truth** = real shipped screens from a reference aggregator (Mobbin) — not my eye.
- **The test** = can the base + a documented process *reproduce* a real great screen? Reproduction is the adversarial gate.
- **The output** = only the patterns/cookbooks that **demonstrably cooked** — distilled from successful reproductions, not aspiration.

## The loop (the unit of work)

For each target, one pass:
1. **Pick** a specific excellent production screen (name app + surface). Span the three domains over time: SaaS/app · marketing · (system/component).
2. **Study → extract decisions** (not trace): type scale, color/accent, spacing rhythm, the hierarchy, the *one loud move*, the signature detail. (§14: extract the decision.)
3. **Reproduce from the base only** — build it as a self-contained HTML file using `the-design-brain.md` as the sole spec. Token-first (§2–3).
4. **Render at 2× and LOOK** — side-by-side with the real screen. The render-and-look loop stays (it's Lookbook's unique value; the base doesn't have it).
5. **Score the gap honestly** — does it reproduce convincingly? Where does it fall short, and *why* (a base gap? a build miss? a taste call)?
6. **Document the path** — `reproductions/<app>-<surface>.md`: the decisions, the steps, where the base helped, where the base was **silent or wrong**.
7. **Distill** — if a reusable pattern emerged AND the reproduction landed, write it into a cookbook (`cookbooks/`). If the base had a gap, log it for the base. A pattern earns its place only by cooking.

**Exit criterion** ("the base is good enough to replace the old brain"): several reproductions across all three domains come back reproducing real screens convincingly, with the base needing no invented machinery — and the cookbooks are all earned by a real reproduction.

## Keep / cut — current Lookbook vs the base

Honest first pass (revise as reproductions teach us):

| Current artifact | Verdict | Why |
|---|---|---|
| **render-and-look loop** (SKILL.md) | **KEEP** | Lookbook's unique value; the base is principles, not a verification process. |
| **Frame-it / Review intakes** (approach.md) | **KEEP** | Ask-before / ask-after converges on the user's eye, not the model's. |
| **the molecule granularity idea** (treatment vs composition, P-MOL-01/02) | **KEEP (as concept)** | The real insight behind "coherence vs variety"; fold into how cookbooks are written. |
| **evidence/ ledgers** (Mobbin grounding) | **KEEP + extend** | Becomes the reproduction record. |
| **specific anti-patterns** not in base §11 (AP25 left-border, AP26/27 molecule, **AP28 status-cosplay**) | **MERGE into base §11** | The base §11 is tighter but missing these hard-won specifics. |
| **fundamentals.md** (F-rules) | **REPLACE/MERGE** | Heavily overlaps base §0–10; the base is tighter and more copyable. |
| **patterns/*.md** (per-surface) | **CUT → re-earn as cookbooks** | Detailed per-surface rules built on self-judgment; let cookbooks emerge from reproductions instead. |
| **kits/ (3 registers + molecule library)** | **SUPERSEDE, don't delete yet** | The most self-judged layer. Replace a register only when a reproduction-distilled cookbook beats it. cool-technical/marketing/warm-editorial stay as reference until then. |
| **convergence test** | **REPLACE** | Reproduce-a-real-screen is the stronger gate. |

## Render conventions
- **Give the reproduction shell an intrinsic px height (e.g. `height: 1024px`), never `100vh`.** Easel sizes each card to the content's intrinsic height; `100vh` resolves against easel's own frame and collapses to a default, so the easel card and the local render disagree. An explicit px height makes both agree. (Proven A/B/C: 1100px→tall, 800px→shorter, 100vh→collapsed.)
- Render the local look at `--force-device-scale-factor=2 --virtual-time-budget=6000` (webfonts), window matched to the shell height. The render window only affects the local PNG — it never reaches easel.
- **Easel pushes are LIVE HTML, never a screenshot of the HTML.** The render-and-look PNG is for the local look only. The one exception is the real reference screen (ground truth is a raster).

## Status
- [x] Base saved (`the-design-brain.md`)
- [x] Method + keep/cut written (this file)
- [x] Reproduction #1 — Linear issue list (`reproductions/linear-issue-list.*`), committed `26f2e99`; 3 cookbook candidates pending user gate
- [ ] … iterate, distill cookbooks
- [ ] Decide whether to merge to `main`
