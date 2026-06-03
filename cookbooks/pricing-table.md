# Cookbook — the pricing table

> The 3-tier pricing surface. The single most slop-prone marketing screen — it begs for three-identical-cards-with-a-loud-badge. The job: differentiate the tiers with intent, not a template.
>
> **Earned by:** reproduction #5 (`reproductions/epidemic-pricing.md`). §12-B names pricing as a section but gives no recipe; §11 warns against the three-card tell without saying how to fix it. This is the how.

## When to reach for this

Any plans/pricing surface — usually three tiers (sometimes 2 or 4), a billing-period toggle, per-tier feature lists, and a CTA per tier. Marketing dials (§12-B): generous space, editorial voice, one accent.

## The anatomy

```
              Editorial headline (serif/voiced — courage, not a plain sans)
                    [ Pay yearly | ●Pay monthly ]   ← billing toggle (segmented)

   ┌── Personal ──────┐  ┌── Commercial ────┐  ┌── Enterprise ───────┐
   │ US$12.99 /month  │  │ US$33.99 /month  │  │ Request a quote     │ ← tier differentiated
   │ Save 38% yearly  │  │ Save 56% yearly  │  │                     │   (no price)
   │ ✓ feature        │  │ Everything in    │  │ Everything in       │
   │ ✓ feature        │  │ Personal, plus:  │  │ Commercial, plus:   │ ← cumulative lists
   │ ✓ feature        │  │ ✓ feature        │  │ ✓ feature           │
   │ [ Start trial ]  │  │ [ Start trial ]  │  │ [ Contact sales ]   │ ← dark CTA, not accent
   └──────────────────┘  └──────────────────┘  └─────────────────────┘
              🔒 100% secure payments · ▣ VISA AMEX PayPal   ← trust strip
```

## Differentiate the tiers — two legitimate ways (pick one, commit)

The slop is three identical cards. The fix is real differentiation:

- **A — Lift the recommended tier.** One tier gets *stacked* cues: a subtle "Most popular" eyebrow + a slightly elevated/bordered card + the filled (accent) CTA while the others are outline. Use when there's a clear tier you want to steer to. Lift with **2–3 quiet cues**, not a screaming badge + a different color + a scale jump all at once.
- **B — Editorial restraint + a structurally-different enterprise.** No badge at all. Tiers read as peers; the top tier is differentiated *structurally* — no price ("Request a quote" / "Custom"), a near-black "Contact sales" CTA instead of the accent. Voice comes from the headline (a serif/display line), not from card chrome. (This is what reproduction #5 did — and it reads more premium than a badge.)

Either beats three-identical-cards. Never do neither.

## The load-bearing details

- **CTA accent discipline (§4).** The brand accent goes on the *primary* CTAs only. The enterprise/contact CTA goes **near-black** — a different action deserves a different weight, and it keeps the accent scarce. One filled accent button per *intent*, not one per card.
- **Cumulative feature lists.** Base tier = a plain checklist. Higher tiers = "**Everything in {prev}, plus:**" + only the *new* features. This communicates value-stacking without repeating every line.
- **Billing toggle.** A segmented monthly/yearly pill, with a "save X%" cue (under each price or on the toggle). Toggling swaps prices — wire it if interactive; static is fine for a mockup.
- **Trust strip.** Pricing is a decision point — add the de-risking signals: "secure payments," payment-brand wordmarks, "cancel anytime," a guarantee. Quiet, below the cards.
- **Equal-height cards, CTA pinned to the bottom.** Tiers have different feature counts; flex-column the card and `margin-top:auto` the CTA so all buttons align on one line.
- **Type (§3).** A pricing page is where a display serif or a voiced headline earns its place — the §3 serif+sans pairing. The prices are tabular sans; the headline can have character.

## Don't

- ❌ Three identical centered cards differentiated only by the numbers (§11). Differentiate by A or B.
- ❌ A loud "MOST POPULAR" badge + accent fill + scale-up + border all at once — pick 2–3 quiet cues.
- ❌ The accent on every CTA — primary CTAs only; enterprise goes dark.
- ❌ Repeat the full feature list in every tier — use "Everything in X, plus:".
- ❌ Skip the trust strip — pricing is the highest-anxiety moment on the page.
