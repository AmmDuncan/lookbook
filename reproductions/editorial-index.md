# Reproduction #13 — editorial index (a curated listing surface)

**Domain:** content / publication homepage · **Target:** real shipped magazine indexes (The New Yorker columnar index; Quartz Presents stacked list).
**References:** `_ref/newyorker-index.webp` (ruled multi-column index), `_ref/newyorker-index-alt.webp` (featured lead + masthead chrome), `_ref/quartz-presents-list.webp` (stacked-list variant) — eyedrop only.
**Build:** `editorial-index.html` → render `editorial-index@2x.png`. **Gate:** contrast tool PASS (clean, all pairings ≥4.5:1); layout tool PASS (0.24 vs `editorial-article` — distinct skeleton); adversarial critic **KEEPER** (two minor fixes applied); user eye-gate pending.

> The orphan the registers never covered (per `kits/COVERAGE.md`, backlog #3): `organism-index` / `atom-index`. The library has the single long-form ARTICLE (`reading-surface`, repro #11) — a reading column. This is the **curated LISTING that leads to articles**: a publication's index/homepage. Same warm-editorial *voice* as #11, completely different *organism*. The point is the index composition, not the voice.

## The decisions I extracted (not traced)

1. **Publication chrome as a horizontal stack.** Utility bar (offer + account/shop/search) → centered masthead with a `2px solid ink` underline → section nav with an active-underline + a right-pinned subscribe pill. Where `reading-surface` mentions chrome in one optional line, here it's the organism's spine — it's what makes it a *publication*, not a blog.
2. **A featured lead as an asymmetric 3fr/2fr split.** The lead story's display headline takes the left three-fifths (rags naturally, no `<br>`); its dek + hairline-bracketed byline take the right two-fifths, divided by a vertical rule. The one place display type runs at 80px. It anchors the page above the listing.
3. **The ruled multi-column scanning-unit (the core archetype).** A 3-column grid with vertical AND horizontal hairlines, each cell a unit of kicker (oxblood, tracked caps) + serif headline + dek + byline. **The cells carry weight tiers** — `lead` (30px headline + full dek + byline), `mid` (22px + one-line dek), `short` (17px, **dek removed entirely**, byline only). The short tier *removes a content row*, so short cells are physically shorter shapes — real composition, not a font-size tweak.
4. **A second listing rhythm (the stacked department).** "From the Notebook" abandons the grid for a full-width stacked list: an oversized Fraunces day-numeral + month as a *typographic thumbnail*, a vertical hairline, then kicker + headline + dek + meta. The Quartz-variant rhythm — proving an index has more than one cadence, not one grid repeated.
5. **A woven promo, not a banner.** The amber promo card fills the remaining height of column 3 via `flex:1` — the single non-cream surface, legible as promotional without a banner. No radius, no shadow, no left-accent.
6. **Rules-not-shadows is the entire depth model.** `2px` ink rules quarter the page into chrome/lead/index/notebook; `1px` hairlines divide columns and rows. Zero drop-shadows. No cards anywhere.

## Where the base / prior cookbooks HELPED

- **`registers.md` warm-editorial voice + `reading-surface`** — Fraunces (display, headlines only) + Newsreader (reading serif, deks/body), cream paper, oxblood, rules-not-shadows all carried straight over; the "display face for heads, reading face for deks" discipline came from the article cookbook.
- **The two gates** — `check-layout.mjs` proved it's a distinct organism (0.24 vs the article — single column `grid:1` vs the index's `3fr 2fr` lead + `1fr 1fr 1fr` + `96px 1fr` stacked); `check-contrast.mjs` confirmed the cream-surface tiers + the amber promo card clear AA.

## Where the prior library was SILENT (the distillable)

1. **No curated-index composition anywhere.** `reading-surface` is a reading column; `data-table`/`dense-data-list` are functional scanning tables; neither is a *publication's editorial index*. → **cookbook candidate: "the editorial index (curated listing)."** References `registers.md`/`reading-surface` for the warm-editorial voice; adds only the index composition — chrome → featured lead → weight-varied ruled column grid → stacked-department list, separated by structural hairlines and never a card.

## The imagery trap (handled by going text-forward)

Warm-editorial imagery can't be faked with CSS (the cookbook's caution). An editorial index is authentically text-heavy — the reference's text columns carry on type alone — so this went **fully text-forward**: zero fabricated photos or CSS illustrations. The richness that substitutes for imagery: the weight ladder (scale contrast), the structural hairline ruling, and the oversized Fraunces date-numerals as typographic thumbnails. The amber promo panel is the one chromatic break (a flat color, not an illustration). The critic confirmed: honest, and reads rich not thin.

## The contrast fixes (the lesson propagated, then migrated again)

The build proactively caught the two prior failure modes — it did NOT reuse a `--rule`/border token as a text color, and it darkened `--faint` to clear AA on the amber promo-bg. But the critic found the failure had **migrated one step further**: a `·` separator glyph hardcoded to `#c4b498` (1.79:1) — an off-scale literal that *dodged the token table precisely so the contrast script wouldn't measure it*. This is the exact pattern the ops-console caution warns about (a quiet text color escaping the audit), now in its sneakiest form: not a token at all, but a magic hex on a glyph. Fixed to `--faint` (a real measured tier). Also bumped the promo "Cancel anytime." microcopy from 3.55:1 → AA, removed a `<br>` from the promo tagline (block `em` instead), and corrected a stale "end-marks" dial comment copy-pasted from the article voice.

**The lesson:** the contrast audit's blind spot keeps migrating — named tier → border-token-as-text → **hardcoded magic hex on a glyph**. The gate only measures tokens; a hardcoded `color:#…` on text slips it. Grep for `color:\s*#` on text elements, not just `var(--…)`.

## Self-assessment

Reads as a real literary quarterly's index — masthead chrome, a scale-dominant featured lead, a weight-laddered ruled column grid (not a stamped grid — the critic verified cell by cell), and a distinct stacked department. Warm-editorial voice coherent, text-forward honest, both gates clean, distinct organism from the article. Open note for the cookbook (not a blocker): cols 1 and 2 run the identical lead→mid→short ladder, so the left two-thirds is more symmetric than a real editor's index — a future iteration could stagger the ladder between columns.

**Critic verdict: KEEPER (it cooked); the migrated-contrast glyph + promo microcopy + stale comment + `<br>` all fixed. Cookbook `cookbooks/editorial-index.md` distilled. User eye-gate pending.**
