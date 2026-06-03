# Cookbook — the asymmetric marketing hero

> The above-the-fold hero for a landing page that sells. Confident, spacious, one loud move — the antidote to the centered-hero-slop default.
>
> **Earned by:** reproduction #2 (`reproductions/fibery-landing-hero.md`) — reproduced a real shipped SaaS landing hero from the base alone. §5/§12-B gesture at "break the grid for emphasis" and "imagery earns its place"; this is the *how*.

## When to reach for this

A marketing/landing hero where one value proposition must dominate and a product visual has to feel real. Not for app surfaces (that's density, not drama) and not when the brand is genuinely minimal-centered (some are — but make centered a *decision*, not a reflex).

## The shape: copy left, visual bleeds right

```
┌─ container (centered, max ~1200px) ───────────────┐
│  HEADLINE (huge, left)        ╲   product collage  │ ← collage breaks the
│  subhead (gray)                ╲  angled, overlap  │   container and clips
│  [primary CTA]  ghost link →    ╲ bleeding off ────┼──→ at the viewport edge
└─────────────────────────────────╲─────────────────┘
```

- **Copy sits inside the centered container** (~45–50% width, left-aligned).
- **The visual escapes the container and clips at the right viewport edge.** This is the §5 "break the grid intentionally, rarely, for emphasis" move — and it's what makes the hero read as *designed* rather than two tidy columns. Mechanically: position the visual `absolute`, anchor it past the container's right padding (`right: -64px`), and let the section's `overflow:hidden` crop it at the viewport.
- **Asymmetric, never centered.** Centered hero + subhead + two buttons is a fine pattern and the #1 marketing tell when it's your *only* move (§11). Left-aligned asymmetry is the default here.

## The one loud move: typographic courage

- Headline **48–72px** (apps top out lower; marketing goes big — §3), weight 700–800, tracking **−0.025 to −0.03em**, line-height **~1.02**. `text-wrap: balance`.
- One headline, two lines max, *human* value prop — not a buzzword stack.
- Everything else stays quiet: subhead at 18px muted gray (`text-wrap: pretty`, ~30rem measure), and exactly **one** primary CTA + **one** ghost/text link beside it.

## Restraint: one accent, and the nav button isn't it

- Single accent (§4 60-30-10) on the **CTA and the text link only**.
- **The nav's primary button is near-black, not the accent** — this keeps the accent scarce so the hero CTA is the one colored thing that pulls the eye. (Reproduction #2's tell: if the nav "Sign up" were also blue, the accent stops meaning "the action.")
- Off-white canvas, near-black ink (`#16181d`, not `#000`), a soft directional gradient **wash** weighted toward the visual (top-right radial, low chroma) — *one* subtle gradient on the hero background is fine; gradient soup is the tell (§11).

## Tokens (starting point)

```
--ink:    #16181d;   /* headline / primary — near-black */
--muted:  #5b6068;   /* subhead */
--accent: #3a5bd9;   /* the single blue — CTA + link only */
--bg:     #ffffff;   --bg-tint: #f7f8fb;   /* audience/proof band */
--wash:   radial-gradient(120% 90% at 88% 18%, #eef1fc 0%, transparent 55%);
nav height: 72px;  hero min-height: ~540px;  section padding: generous (44–80px);
```

## The product visual → see `synthetic-product-imagery.md`

The collage that bleeds off-edge is built from synthetic product cards (you rarely have the real screenshot when prototyping). That technique is its own cookbook.

## Don't

- ❌ Center everything by reflex (§11). If you center, have a reason.
- ❌ Make the nav button the accent color too — the accent must stay scarce.
- ❌ Box the hero copy in a card — whitespace separates here, not borders (§11 "everything in a box").
- ❌ Stack a gradient on the headline text or the buttons — flat color, one background wash only.
- ❌ Let the visual sit politely inside the container — the off-edge bleed *is* the move.
