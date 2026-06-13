# Evidence — Usability (ease & felt-quality) (P-UX calibration)

Method: **this pattern is grounded in canon + real shipped products, not visual reproduction.** Usability rules can't be earned the way a surface archetype is (rebuild a screen and look) — "is this easy to use?" doesn't live in a still image. So the gate is *adapted* (signed off 2026-06-11): each rule maps to **(a) a named source/law, (b) the mechanism, (c) a real shipped product that exhibits it, (d) how it's measured or the evidence behind it, (e) the common failure**. The backbone is the canon — Nielsen's 10 heuristics, NN/g research, the Laws of UX, Krug, and the Miller/Card response-time limits — corroborated by named products. Where a claim is *observed* (pattern across products) rather than *measured* (a study), it is flagged below; we do not launder folklore as evidence.

This file is the consolidating spine's receipt: most P-UX rules *name the law behind* an existing Lookbook rule (F52, F33, P-ST, P-F, P-ES, P-AY) rather than introducing new machinery.

## Rule → source map (the backbone)

| Rule | What it requires | Named source (the canon) | Real product / corroboration | Measured or observed? |
|---|---|---|---|---|
| **P-UX-01** Recognition over recall | Surface options/state/prior values; never force memory | Nielsen heuristic **#6** (Recognition rather than recall); Miller (working-memory limits) | Slack (visible channel/unread state); command palettes expose actions vs memorized shortcuts | **Measured** (heuristic is canon; working-memory load well-studied) |
| **P-UX-02** Cognitive-load budget | Cap & chunk simultaneous choices; system absorbs complexity | **Hick's Law** (decision time ∝ log choices); **Miller** ~7±2 (chunking caveat); **Tesler's Law** (conservation of complexity) | Grouped vs flat menus; "advanced" sections | **Measured** (Hick) + **theory** (Tesler is a design principle, not an RCT) |
| **P-UX-03** Good defaults | Pre-select safe/common/reversible option | Choice architecture — **Thaler & Sunstein, *Nudge*** | Locale-prefilled forms; sensible product defaults | **Measured** (default-effect is heavily studied in behavioural econ) |
| **P-UX-04** Progressive disclosure | Common first, advanced on demand, ≤2 levels | **NN/g** (Progressive Disclosure) | macOS print "Show Details"; settings "Advanced" | **Mixed** — strongest RCT is **Carroll's IBM "training wheels"** (single product); broader claim widely accepted but lightly RCT'd ⚠️ |
| **P-UX-05** Error prevention by constraint | Make invalid states unreachable; forgiving formats | Nielsen heuristic **#5** (Error prevention); **poka-yoke** (Shingo); **Postel's Law** (be liberal in what you accept) | Stripe input formatting; constrained date pickers | **Measured** (heuristic ranking) + **principle** (poka-yoke from manufacturing) |
| **P-UX-06** Forgiveness over confirmation | Undo > confirm; non-destructive defaults, autosave | Nielsen heuristic **#3** (User control & freedom) | **Gmail Undo Send** (delays real send ~5–30s); **Figma version history** | **Observed** (strong product convention; the "confirm-fatigue" cost is well-argued, less formally measured) |
| **P-UX-07** System status + latency budget | Feedback within 0.1/1/10s; aim <400ms | Nielsen heuristic **#1**; response-time limits — **Miller (1968)**, **Card et al. (1991)**; **Doherty Threshold (IBM, 1982)** | Gmail's 100ms "instant" bar (Buchheit); Amazon "100ms ≈ 1% sales" | **Measured** (Doherty study: ~25–45% productivity gains sub-400ms; limits are long-standing HCI) |
| **P-UX-08** Perceived performance | Skeleton vs spinner; optimistic UI; honest progress; goal-gradient | **NN/g** (Skeleton Screens); **Kivetz et al. 2006** (goal-gradient); optimistic-UI as product practice | Facebook/LinkedIn skeletons; Linear/Superhuman optimistic UI | **Mixed** — goal-gradient **measured** (Kivetz); skeleton perceived-gain figures vary by study ⚠️; optimistic UI **observed** |
| **P-UX-09** One primary action per screen | One dominant CTA; next step obvious <2s | **Krug**, *Don't Make Me Think* | Stripe checkout (one CTA/step) | **Observed** (Krug's clarity test; corroborated by eye-tracking on hierarchy) |
| **P-UX-10** Consistency with conventions | Match platform + internal conventions | **Jakob's Law** (external consistency); Nielsen heuristic **#4** | Conventional nav/cart/dialog-button placements | **Measured** (consistency heuristic; transfer-of-learning is well-studied) |

## Why canon + products, not visual reproduction
A surface archetype earns its place by rebuilding a real screen and judging the pixels. Usability can't: a screenshot cannot show whether an action is undoable, whether a value was carried forward or re-asked, whether feedback arrived within 400ms, or whether the default served the user. The honest test is *interaction* (operate it, time it, count the steps) plus the canon that defines right-vs-better. So these rules are set by the heuristics/laws and *corroborated* by how good products behave — and the few that rest on observation rather than measurement (P-UX-06, the skeleton magnitude in P-UX-08, P-UX-09) say so.

## The honesty notes (what is NOT firmly measured)
- **P-UX-04 progressive disclosure**: the *direction* is canon, but the headline empirical support is one classic study (Carroll's training wheels). Treat the learnability/efficiency/error-rate "improves three of five" claim as NN/g's well-reasoned position, not a meta-analysis.
- **P-UX-08 skeleton magnitude**: "30–50% perceived improvement" / "300ms faster perceived" figures circulate widely but vary by study and context; the *mechanism* (structure-arriving beats blank wait) is sound, the exact percentage is not a fixed constant.
- **P-UX-06 confirm-fatigue**: the argument (confirms tax every action, train click-through) is strong and widely held; it's more design-reasoning than a single citable RCT.
- **"Do, don't tell" retention multiple** (referenced via P-EN-01): folklore-level; directional only.

## Calibrations applied to patterns/usability.md
1. Recognition over recall (P-UX-01 ← Nielsen #6).
2. Cognitive-load budget (P-UX-02 ← Hick / Miller / Tesler; extends F52).
3. Good defaults (P-UX-03 ← Nudge; guards against P-EN-11 preselection).
4. Progressive disclosure ≤2 levels (P-UX-04 ← NN/g; ⚠️ light RCT).
5. Error prevention by constraint (P-UX-05 ← Nielsen #5 / poka-yoke / Postel; refines P-ST/F69/P-F).
6. Forgiveness over confirmation (P-UX-06 ← Nielsen #3; Gmail/Figma).
7. System status + latency budget with numbers (P-UX-07 ← Nielsen #1 / Miller / Card / Doherty; consolidates P-ST loading + system-status feedback).
8. Perceived performance (P-UX-08 ← NN/g skeletons / Kivetz / optimistic-UI; refines P-ST).
9. One primary action per screen (P-UX-09 ← Krug; extends F12–F14).
10. Consistency with conventions (P-UX-10 ← Jakob's Law / Nielsen #4).
