# Evidence — receipts for each rule

One file per fundamental rule (`F3.md`, `F11.md`, …) or pattern calibration. Each file holds the measurements, source screens, and reasoning that justify the rule's numbers.

**Not loaded at design time.** Only loaded by the `lookbook:calibrate <rule-id>` command (future) when refining a rule. Keeps the design-time context lean.

## File shape

```markdown
# Evidence: F<n> — <rule summary>

**Current rule:** <copy of the rule text + numbers>

**Last calibrated:** <YYYY-MM-DD> (or "v1 — uncalibrated; numbers from classical sources")

## Sources

- Bringhurst, *Elements of Typographic Style* — <relevant page/section>
- Müller-Brockmann, *Grid Systems* — <…>
- Reference set (<surface category>, n=<count>, pulled <date>):
  - <screen URL or id> — measured: <key value>
  - …

## Measurements

| Source              | Measured value | Notes              |
|---------------------|----------------|--------------------|
| Linear (dashboard)  | 16px / 1.55    | …                  |
| Stripe (settings)   | 15px / 1.5     | …                  |
| …                   | …              | …                  |

**Distribution:** <range, median, mode>

**Recommended rule value:** <number or range>

## Reasoning

<why this number, what perceptual / mathematical / ergonomic principle backs it, what edge cases were considered>
```

## How files get created

- **v1 (now)** — rules in `fundamentals.md` are based on classical sources + Lookbook's existing tokens. Evidence files don't exist yet; that's fine.
- **Future** — `lookbook:calibrate F<n>` pulls real-product references for the relevant surface, measures the rule's variable, and writes/updates `evidence/F<n>.md` with the receipts + a proposed new rule value. The user approves or edits.

Evidence is append-only history; rules are the current state. The two stay in sync via the calibrate command.
