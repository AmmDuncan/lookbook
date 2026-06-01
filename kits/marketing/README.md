# Marketing kit — register: `marketing`

The **marketing** register: a surface that *convinces*, not one that operates. The deliberate
opposite of `cool-technical` — **spacious** (not dense), a real **display + sans pairing**
(not single-family), **texture allowed** (not banned). Same Lookbook family: it converges on
the brand-continuous indigo accent + token discipline, and diverges on type, density, and
composition (the cardinal rule).

Governed by `patterns/marketing.md` (P-M), `patterns/pricing.md` (P-PR), `patterns/site-archetypes.md`
(P-SA), `patterns/assets.md` (P-AS). Grounding ledgers: `evidence/marketing.md`, `evidence/pricing.md`.

## Register dials (`_tokens.css`)
- **Type voice:** Bricolage Grotesque (display) + Geist (body/UI) — one display + one sans (P-M-08 / P-AS-03). The HTML must LOAD both (Google Fonts); a declared-but-unloaded face silently falls back to Inter.
- **Accent:** brand-continuous indigo `#5B5BD6` (white text on it = 5.37:1 AA, F66). The Lookbook family shares the palette; marketing differentiates via type + density + texture.
- **Surface:** warm-paper `#FAF9F7` (never pure white, F20). Depth (`--shadow-float`) earned on product visuals (P-M-13). One atmospheric glow token (`--atmos`) — texture is allowed here, on the band only (P-M-05).
- **Density:** spacious — `--section-pad: 112px`, content max 1180px, prose 68ch.

## Atoms (treatments — the vocabulary, recur for coherence)
- `atom-hero` — eyebrow → headline → deck → one primary CTA + ghost → trust → product visual (P-M-01/13/14/15). Two compositions: centered-with-visual-below (default) + left/right split.
- `atom-feature-grid` — bento (asymmetric, one product-visual cell) + hierarchy triplet. Dodges the 3-equal-cards tell (P-M-09).
- `atom-pricing-row` — full P-PR anatomy: 3 tiers, recommended lifted by stacked cues, price-as-hero, toggle + savings, trust strip, Enterprise-below.
- `atom-cta-band` — the closing-CTA treatment (vocabulary). **See `recipe-cta` for compositions.**
- `atom-nav-footer` — marketing top-nav (default + floating scrolled) + dark fat-footer (P-SA shell).
- `atom-social-faq` — curated monochrome logo-wall (P-AS-04) + single-quote testimonial + **testimonial-with-metrics** (quote paired with proof figures, for dev/data products) + accordion FAQ (P-PR-08).
- `atom-code` — **dev-product visual** (P-M-18), three treatments: terminal (live-log stream) / **split** (two-panel "run it, see it" — editor pane calls, terminal pane answers) / code block (syntax-highlighted). Syntax is token-derived (`--code-*`), keyword = indigo. The hero product-visual is product-type-fit: dashboard (SaaS) / terminal+code (dev) / device (consumer).
- `atom-chart` — **data-proof visual**: spark (bare inline sparkline) / data feature-cell (figure + typographic delta over a sparkline — the proof band) / area card (framed, gridlines + time axis — a bento big-cell visual). Adopts cool-technical's signature viz vocab (single-hue indigo area + thin stroke + end dot) so the chart language converges across registers. Geist tabular figures; deltas typographic `↑↓✓` (colour = sentiment, arrow = direction).

## Recipes (compositions — vary with the brief, for variety)
- `recipe-cta` — **four structurally-distinct CTA compositions** (centered / split-horizontal / with-visual / slim-inline), with the surface flag (dark / tint / surface / paper) demoted to an orthogonal flag. This is the granularity principle: the CTA-band is a *treatment*; the variety is composition, not the dark/tint skin (near-duplicate recipes = AP27). Answers "won't every page have the same band?" — no.

## Organisms (worked pages)
- `organism-landing` — hero → logo-wall → bento → testimonial → split → dark CTA. Rhythm via **surface alternation** (paper → white → tint → paper → dark), not hairline rules (**P-M-16**, battle-test).
- `organism-pricing` — value hero → toggle + 3 tiers → trust → Enterprise → FAQ → slim CTA. A *different page shape* from the landing (the comparison row is the centre of gravity) — variety via composition, one register. Mobile stacks recommended-first (P-PR-11).

## Rules earned in this kit's battle-test (loop to cool-technical parity)
- **P-M-16** — marketing rhythm = surface alternation + whitespace, never `border-top` hairlines between sections; **the band delta must be perceptible** (`--accent-band`, not the 5% wash).
- **P-M-17** — hero/section headlines use `text-wrap: balance` — no orphaned last word.
- **P-M-18** — hero product-visual is product-type-fit (dashboard / terminal+code / device); code syntax is token-derived (`--code-*`). Shipped `atom-code` + the testimonial-with-metrics treatment for it.
- **Mobile CTAs** (`patterns/marketing.md` composition) — stacked CTAs stay content-width centered, never stretched full-bleed pills.
- Convergence test (a fresh rules-only dev-tool build) drove P-M-18 + the `--accent-band`/`--code-*` tokens.

## Notes for real builds
- `atom-nav-footer` shows default + `.scrolled` nav visually; wire the scroll-trigger in the app, or a CSS-only always-blurred sticky nav is an acceptable fallback.
- Logo wall: real monochromed SVG customer logos in production; the kit's icon+wordmark pairs are stand-ins.
- The non-color a11y floor (accessible names, landmarks, real button/link semantics) is wired at build time per `patterns/accessibility.md`; the kit specifies the visual focus-visible ring + reduced-motion guard.

## Discipline
Render every change at 2x (`--force-device-scale-factor=2 --virtual-time-budget` so webfonts load) and LOOK. Contrast-gate every non-neutral text pair (`scripts/contrast.mjs`). The icon set (`_icons.svg`, Lucide) and assets follow `patterns/assets.md`.
