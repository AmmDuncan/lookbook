# Cookbook — the editorial index (curated listing)

> A publication's front page — the curated *index* that leads to its articles. A magazine homepage, a culture-site landing, a section page, a newsletter archive front. The library has the single long-form ARTICLE (`reading-surface`) — a reading column — but never the *listing* that sends readers into it. That listing has its own furniture: publication chrome, a scale-dominant featured lead, a ruled multi-column scanning grid, and a second stacked rhythm.
>
> **Earned by:** reproduction #13 (`reproductions/editorial-index.md`), grounded in real magazine indexes (The New Yorker columnar index; Quartz Presents stacked list). It applies a register *voice* to a new *archetype* — so this cookbook is the index composition, not the voice.

## When to reach for this

A surface that *curates many pieces* and routes the reader onward: a publication homepage, a section/category index, a "latest"/"featured" page, a blog or essay archive front. If the reader settles into ONE piece to read top-to-bottom, that's `reading-surface`. If it's a dense functional table of records, that's `data-table`/`dense-data-list`. Reach here when an editor has *arranged* a set of stories by weight and the reader is choosing what to read.

## The voice comes from elsewhere; this is the composition

Pick the voice from `registers.md` — warm-editorial (serif-on-cream) is the heritage default, but a cold-Didone or a clean grotesque index is equally valid (don't let "editorial" auto-pick warm — the temperature dial is yours to set). This cookbook adds only the index *composition* on top.

## The skeleton: chrome → lead → ruled grid → stacked department

```
  offer · · ·                              account  shop  search   ← utility bar (thin, quiet)
              T H E   M E R I D I A N                                ← masthead (centered wordmark)
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   (2px ink rule)
  LATEST  CULTURE  FICTION  ESSAYS  CRITICISM  NOTEBOOK   [Subscribe] ← section nav (active underline)
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  COVER ESSAY                          │  A story of two sisters…    ← FEATURED LEAD (3fr / 2fr)
  Everything We Said                   │  By … · 24 min             (display H1 left, dek+byline right)
  in the Key of Rain                   │
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  CULTURE         │ FICTION·FILM      │ CITIES                       ← RULED 3-COL INDEX
  The Architect   │ The Slow Cinema   │ A Room in Lisbon            (vertical + horizontal hairlines)
  Who Refused…    │ of Grief…         │ That Belongs to No Decade
  [dek] [byline]  │ [dek] [byline]    │ [dek] [byline]    ← lead cell
  ───────────────────────────────────────────────────────
  Reading Woolf…  │ Against the…      │ ┌───────────────┐
  [one-line dek]  │ [one-line dek]    │ │ amber promo   │ ← mid cells; col 3 ends in
  ───────────────────────────────────│ │ card (flex:1) │   the promo card, not an entry
  On Keeping Lists│ Toni Morrison's…  │ └───────────────┘
  [no dek, byline]│ [no dek, byline]  │              ← short cells (dek removed)
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  FROM THE NOTEBOOK                                                  ← STACKED DEPARTMENT (2nd rhythm)
  04 │ NOTEBOOK·LANGUAGE  The Word for Homesickness…   By … · 6 min
  MAY│
  28 │ NOTEBOOK·MUSIC     Listening to Ebo Taylor…     By … · 9 min
```

1. **Publication chrome is the spine.** Utility bar → centered masthead (the wordmark is the one legitimate centered element) with a heavy `2px` underline → section nav with an active-underline and a right-pinned subscribe pill. This frame is what separates an *index* from a blog list.
2. **The featured lead earns scale dominance.** ONE story gets the largest display headline (asymmetric split — headline one side, dek+byline the other, divided by a vertical rule). It's the editor saying "read this first." Everything below is smaller by construction.
3. **The ruled grid is the core scanning-unit.** Columns divided by vertical hairlines, rows by horizontal hairlines — *structure from rules, never cards*. Each cell = kicker (the section label, accent, tracked caps) + serif headline + dek + byline.
4. **The stacked department is a deliberate second rhythm.** Below the grid, switch cadence — a full-width stacked list with a typographic date-block thumbnail. One index, two rhythms; never the same grid twice.

## The cells MUST carry weight tiers (or it's a stamped grid)

The §11 stamped-grid tell applies *intra-page*: a 3-column grid of identical cells is slop even with different text in each. Differing CONTENT in identical SHAPES does not count. Vary the **arrangement**:

- **lead cell** — large headline + full dek + byline.
- **mid cell** — smaller headline + one-line dek.
- **short cell** — smallest headline, **dek removed entirely** (`display:none`), byline only.

The short tier is the load-bearing move: *removing a content row* makes the cell a physically shorter shape, not just smaller type. Let one column terminate differently (a promo card via `flex:1`, or a lead-bearing first cell). If every column runs the identical lead→mid→short ladder, the page is more symmetric than a real editor's index — stagger the ladder between columns.

## Imagery: text-forward is authentic; don't fabricate

An editorial index is legitimately text-heavy — kickers + serif headlines + deks + bylines + rules carry it. Warm-editorial imagery can't be faked with CSS (botanical line-art, gradient panels, fake card-stills all read as slop), so **go text-forward** and let three things substitute for images: the weight ladder (scale contrast), the structural hairline ruling, and an oversized display numeral/initial as a typographic "thumbnail." A real photo or a curated product object is fine; a fabricated illustration is not. Text-forward reads *rich*, not thin, when the weight ladder and rules do their job.

## Contrast: the audit's blind spot keeps migrating

Every text tier must clear AA on the surface it sits on — the oxblood kicker (it's text), the dek, the byline, the date meta, and any text on a non-cream promo panel (measure against the *promo* bg, not the page). And note where the failure hides now: it has migrated named-tier → border-token-as-text → **a hardcoded magic hex on a glyph** (a `·` separator at `#c4b498` / 1.79:1 that dodged the token table so the gate wouldn't measure it). The token gate can't pass/fail a literal (a `#hex` glyph is indistinguishable from a decorative one), but `check-contrast.mjs` now **surfaces every hardcoded `color:#hex` on text as a `⚐` advisory** — when you see one, confirm it's genuinely decorative or move it onto a measured text tier (`--faint`, not a magic hex). Run `node scripts/check-contrast.mjs <file>` and clear both the gate and the advisory.

## Don't

- ❌ A grid of identical cells — vary the weight tier (and drop the dek on short cells); a stamped grid is the §11 tell even with unique text.
- ❌ Cards/shadows for structure — an editorial index is ruled (hairlines), not boxed.
- ❌ The display face on deks/body — display serif for headlines/wordmark/date-numeral only; deks in the reading serif (`reading-surface`'s rule).
- ❌ Fabricated CSS imagery to fill the page — go text-forward; let scale + rules + a display numeral carry it.
- ❌ A hardcoded `color:#…` on a quiet glyph/separator to dodge the contrast gate — put it on a measured tier.
- ❌ One rhythm repeated — pair the ruled grid with a stacked department so the index has cadence.
- ❌ Assume "editorial" means warm — set the temperature dial on purpose (a cold-Didone index is equally valid).
- ❌ `<br>` hard-breaks in editorial headlines — they rag naturally (`text-wrap: balance`); a hard-break shatters on reflow.
