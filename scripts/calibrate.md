# lookbook:calibrate — maintainer protocol

**This is maintainer tooling, NOT part of the consumer skill.** `SKILL.md` is how an agent *uses* the brain to design a screen; this is how a maintainer *refines* the brain against reality. Nothing here is loaded when designing — don't reference it from `SKILL.md`, patterns, or fundamentals. The scaffolder is `scripts/calibrate.mjs`.

## What calibration is (and isn't)

Calibration **refines existing rules against real, shipped products** — it adjusts numbers, and turns rigid mandates into contextual choices, based on how excellent real products actually apply (or break) a rule. It is the loop that keeps the brain grounded in reality instead of theory.

It is **not** rule-invention from first principles, and it is **not** a license to add rules. The hardest-won lesson of this project: **more rules ≠ better.** A calibration run that ends with *fewer or more-contextual* rules is usually healthier than one that adds. The strongest output of reading real screens is discovering a rule that is **wrong or too strict** — that finding is worth more than any new rule.

Run it when: a pattern's numbers feel asserted-not-measured; a rule keeps getting overridden in practice; a new archetype needs grounding; or on a periodic health pass. Don't run it to bulk-add rules.

## The source (swappable, never named in committed files)

Calibration needs reference screens of the archetype: **real, public, shipped products.** The *source* of those screens is a maintainer choice you supply at runtime — a screen-search tool, a folder of screenshots, or a list of product URLs. It is deliberately **not hardcoded here**, and the **committed brain must never name a specific reference aggregator or tool brand** (durable copyright rule) — phrase calibration provenance generically as "a reference study of real, public, shipped products." Public *product* names (Stripe, Linear, Vercel, …) are fair references and stay. Keep your concrete source recipe in memory or a gitignored local note, not in a committed file.

## The loop

Per pattern (use `node scripts/calibrate.mjs <pattern>` to scaffold a run):

1. **Pick the pattern** and read its current calibrations (`patterns/<pattern>.md`) so you know what you're testing.
2. **Gather ~4–16 reference screens** of that archetype from your source. Favour breadth (different products, different takes) over one product's whole flow.
3. **Read each screen by HOW THE RULES ARE APPLIED** — not "is it pretty," but, rule by rule, which of:
   - **VALIDATE** — real screens consistently do what the rule says → the rule holds, cite the corroboration.
   - **CALIBRATE** — real screens cluster on a *different* number/treatment than the rule states → adjust the rule's number to match reality.
   - **TOO-STRICT** — excellent real screens routinely break the rule with no harm → make it contextual ("when X, do Y") or drop it. *This is the most valuable finding.*
4. **Write the receipts** in `evidence/<pattern>.md` — what each screen showed, mapped to the rule IDs it validated / calibrated / loosened. Source phrased generically (see above). Stamp the date.
5. **Apply the calibrations** to `patterns/<pattern>.md` — adjust numbers, make rigid rules contextual, delete dead ones. Keep the house format (ID + `Check:` line, `New`/`Refines:` provenance).
6. **GATE — render and look** (never trust the markup): generate a mockup to the calibrated pattern, render at three widths (desktop ~1280 / tablet ~768 / mobile ~390), run `node scripts/contrast.mjs "<fg>:<bg>:<label>" …` on every text/fill pair, and judge against the north star (*is it genuinely good?*). Fix and re-render until it holds. A human eye-gate on the render is the real bar — self-grade is not.
7. **If you ADDED a rule or materially changed behavior, BATTLE-TEST it** before shipping: a blind agent designs the same brief on the brain *without* the change vs *with* it; render both; judge help / neutral / nerf; gate by a human eye. (Calibrating an existing *number* rarely needs this; adding or loosening a *rule* does — it's how the P-ID-09 nerf and the P-SA neutral were caught.)
8. **Commit** the pattern + evidence together; update `STATUS.md` with the run and its outcome.

## Convergence contract

Stop a calibration sweep when **two consecutive different-archetype runs yield zero shippable changes and zero new rules** — the brain has converged against current reality. Stop early only for a design-philosophy fork or an unresolvable precedence conflict (escalate to the user). Re-open when reality moves (a new product paradigm) or a rule starts getting overridden in practice.

## Classification heuristics

- A rule that *every* reference screen follows → VALIDATE (and you can tighten its `Check:` with the corroboration).
- A rule whose number is off by a consistent margin across screens → CALIBRATE to the observed cluster, not to one outlier.
- A rule broken by *excellent* screens with no cost → TOO-STRICT → contextualize; a rule broken only by *mediocre* screens → it's holding, keep it.
- When two readings conflict, the **precedence ladder** in `fundamentals.md` decides (a11y never yields; declared deviations; fundamentals; pattern calibrations; anti-pattern/taste).
- Resist "the screens vary, so add a rule for each case" — variety on functional surfaces comes from composition (P-AP-10), not more rules.
