# Evidence — Engagement (motivation, habit & the ethical line) (P-EN calibration)

Method: **grounded in behavioural-science canon + real shipped products + regulatory record, not visual reproduction.** Like usability, engagement can't be earned by rebuilding a screen — "does this form a habit, and is it ethical?" isn't in the pixels. Adapted gate (signed off 2026-06-11): each rule maps to **(a) a named source, (b) the mechanism, (c) a real product, (d) the evidence/measure, (e) the RECOMMENDED/FORBIDDEN classification + reasoning**. The ethics half (P-EN-10/11) is additionally grounded in the **enforcement record** — these are not opinions, they carry nine-figure penalties.

**Production-scope (carried from the pattern file).** The `[FORBIDDEN]` classifications concern *deceiving a real user in a shipped product*. Placeholder counts/ratings/scarcity in a mockup or prototype are scaffolding, not dark patterns — the violation is *intent to deceive a real end user at ship time*. Ideation is unconstrained; the discipline is to flag placeholder social-proof so it's replaced before production.

## Rule → source map (the backbone)

| Rule | Class | Mechanism | Named source | Real product | Measured or observed? |
|---|---|---|---|---|---|
| **P-EN-01** Activation to first-value | RECOMMENDED | Retention is decided at first value; minimize time-to-value | NN/g (time-to-value framing); product-led-growth canon | Slack starter channels; Notion live-preview onboarding; Superhuman live onboarding | **Observed/measured** (TTV & activation→retention is standard PLG metric) |
| **P-EN-02** Ability before motivation | RECOMMENDED | B=MAP; raising ability beats raising motivation, and is sustainable | **BJ Fogg** (Behaviour Model, *Tiny Habits*) | Google "did you mean?"; "just 5 minutes" framing | **Measured** (Fogg's lab trials; motivation-dependent behaviours lapse) |
| **P-EN-03** Progress toward user-set goals | RECOMMENDED | Goal-gradient + endowed progress accelerate effort | **Kivetz, Urminsky & Zheng 2006** | LinkedIn profile strength; Notion checklist | **Measured** (Kivetz: ~33% faster completion with endowed head-start) |
| **P-EN-04** Streaks + escape valve | RECOMMENDED — bounded | Loss aversion (~2× gains) ties effort to threat-of-loss | **Kahneman & Tversky 1979** (Prospect Theory); applied: Duolingo | Duolingo streak + **streak-freeze** (forgiveness) | **Measured** (loss aversion is canon; Duolingo retention/streak data reported) |
| **P-EN-05** Open loops | RECOMMENDED | Unfinished tasks persist in working memory | **Zeigarnik 1927** | LinkedIn profile %; Notion getting-started | **Measured** (classic effect; replication is mixed-strength ⚠️) |
| **P-EN-06** Variable reward (real value only) | RECOMMENDED — bounded / FORBIDDEN if empty | Variable-ratio reinforcement is the strongest schedule | **Skinner**; applied via **Eyal** (Hook Model + Manipulation Matrix) | Spotify Discover Weekly (healthy); infinite-scroll feeds (forbidden) | **Measured** (operant conditioning) — the *ethics* line is judgment, not data |
| **P-EN-07** Accurate social proof only | RECOMMENDED — bounded / FORBIDDEN if fake | Social proof + reciprocity reduce decision uncertainty | **Cialdini**, *Influence* | Airbnb reviews; Dropbox referral (reciprocity) | **Measured** (Cialdini's principles); fake variants → FTC enforcement |
| **P-EN-08** User-owned, portable investment | RECOMMENDED — bounded / FORBIDDEN as lock-in | Investment raises value *and* switching cost | **Eyal** (Hook investment phase) | Notion/Figma/GitHub (real value) vs roach-motel lock-in | **Observed** (lock-in well-understood; the line is whether value is portable) |
| **P-EN-09** Notifications as signal | RECOMMENDED — bounded / FORBIDDEN as nagging | Prompt when motivation+ability present; permission-prime at value | **Fogg** (prompts/signals); permission-priming practice | Slack @-mention default | **Observed/measured** (opt-in lift from priming is well-documented) |
| **P-EN-10** The five manipulation tests | GATE | Operational test for "would the user consent if they understood it?" | Synthesis: **Brignull** + **FTC** pattern + **Harris/CHT**; cf. **Mathur et al. 2019** | — | **Framework** (synthesized; not a single study) |
| **P-EN-11** Deceptive-patterns taxonomy | FORBIDDEN | Exploit biases against the user's interest | **Harry Brignull**, deceptive.design / *Deceptive Patterns* (2023) | Enforcement cases below | **Measured by enforcement** (see record) |

## The enforcement record (why P-EN-11 is legal risk, not taste)
- **FTC** — Epic Games **$245M** (2023, manipulative purchase UI for children); **Amazon Prime** (active case, alleged dark patterns in signup/cancel); **Vonage $100M** (2022, cancellation barriers); **Credit Karma $3M** (2023, fake "pre-approved").
- **EU** — **TikTok €345M** (Irish DPC 2023, steering children to privacy-invasive defaults); cookie-UI fines: **Google €150M, Meta €60M, Amazon €35M**; the **Digital Services Act** (2022) and **Data Act** (2023) expressly prohibit dark patterns; **GDPR** consent rules.
- **Scale** — ICPEN/GPEN sweep (Jan–Feb 2024, 642 sites / 26 countries): **76% used ≥1 dark pattern; 67% multiple.**

## The ethics line — why "neutral mechanic" is not a defence
Every mechanic in Part A *works* — that's the danger. Variable reward, loss aversion, progress, social proof, open loops are behavioural levers; the same lever helps a user finish *their* course or traps them in a feed. So the classification is never "is the mechanic allowed?" but **"in whose interest is it pointed?"** — which is exactly what P-EN-10's five tests operationalize. Eyal's own Manipulation Matrix (build it only if it materially improves the user's life *and* you'd use it yourself) is the gate his framework is most often stripped of in practice.

## The honesty notes (what is NOT firmly measured)
- **P-EN-05 Zeigarnik**: the classic effect is real but replication strength is debated; treat as directional.
- **P-EN-01 "do, don't tell" retention multiple**: folklore-level; no firm citation — flagged in the pattern, not asserted.
- **P-EN-06/07/08/09 ethics lines**: the *mechanics* are measured science; the RECOMMENDED-vs-FORBIDDEN *boundary* is a judgment grounded in Brignull/FTC/CHT, not an experiment. Stated as judgment, not data.
- **Duolingo specifics** (streak retention %, streak-freeze churn reduction): reported in product write-ups, not peer-reviewed; directional.

## Classification summary applied to patterns/engagement.md
- **Floor (every product):** P-EN-10 (five tests) + P-EN-11 (no deceptive patterns) — the engagement equivalent of the contrast/a11y floor.
- **Opt-in by product type:** P-EN-01 near-universal; P-EN-02 the default reflex (friction before pressure); P-EN-03/04/05/06/07/08/09 only for products the user wants a habit with, each passing the five tests first.
- **Through-line:** honesty — real progress, real activity behind streaks, real social proof, portable investment, signal notifications; exit parity everywhere.
