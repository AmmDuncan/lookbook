# Cookbook — the reading surface (long-form article)

> A page that asks to be *read*, not scanned — an essay, a long post, a magazine feature. Every other cookbook is a *scanning* surface (landing, dashboard, table, form, overlay); this is the only one built for sustained reading, and it has its own furniture. The job: protect the line, set a reading rhythm, and let the page interrupt itself without losing the reader.
>
> **Earned by:** reproduction #11 (`reproductions/editorial-article.md`), grounded in a real magazine reader (The New Yorker). It applies a register *voice* to a new *archetype* — so this cookbook is the article furniture, not the voice.

## When to reach for this

Anything long-form and continuous: an essay, a blog post, a newsletter issue, documentation prose, a story. If the user's eye *jumps* (cards, rows, KPIs), it's a scanning surface — use the relevant cookbook. Reach here when the eye *travels left-to-right, top-to-bottom* for paragraphs at a time.

## The voice comes from elsewhere; this is the furniture

Pick the voice from `registers.md` (warm-editorial serif-on-cream, cold-editorial Didone, even a clean sans for a docs-reader). This cookbook adds only what *reading* needs on top.

## The non-negotiable: a protected measure

- **Narrow column, centered in a wide page.** ~**62–66 characters per line** — the single most important reading decision. At 19–20px serif that's roughly a **560–580px** column, *not* 640+ (640px of 19px serif runs ~78ch and tires the eye). Measure it; don't eyeball the pixel width.
- **Reading-size body in the *reading* face.** ~19–20px / **1.7–1.8 line-height**, in the low-contrast reading serif (Newsreader, Source Serif) — *not* the display serif. The display face (Fraunces, Didone) is for the headline, pull-quote, and module heads only.
- **Generous side margins.** The empty space around the column is the point — it's what makes it feel like a page, not a feed.

## The reading furniture (used structurally, never decoratively)

```
  PERSONAL FINANCE · NO. 01            ← kicker (accent, letter-spaced)
  The quiet luxury of knowing          ← headline (display, rags naturally — NO <br>)
  where you stand.
  For years I treated my accounts…     ← dek (italic, one step below headline)
  ─────────────────────────────
  ⬤ Adriana Costa · 9 min read         ← byline (avatar+name+date), hairline-bracketed
  ─────────────────────────────
  T̲here is a particular kind of dread… ← drop-cap opens the body
  …
  ▎The number stopped being weather.   ← pull-quote (display italic + accent rule)
  …
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ← inline module BREAKS the column
  FROM THE EDITORS                       (heavier top rule, lighter bottom)
  The Ledger, weekly.  [____] [Subscribe]
  ───────────────────────────────────────
  …
            ❦                            ← end-mark closes the read
```

- **Drop-cap** opens the body — display face, floated, its baseline aligned to line 2–3 (true drop-cap), padding generous enough that the next word doesn't crowd the crossbar.
- **Pull-quote** lifts a line for rhythm — display italic with an accent left-rule. **Lift a line from *elsewhere* in the piece** (tease ahead or echo back), **never the sentence immediately above or below it** — reading the same line twice in a row reads as a copy-paste error, not emphasis. (This is the one thing a magazine editor stops on first.)
- **Inline module breaks the column** — a newsletter signup / aside / note, set off with a **heavier top rule + lighter bottom rule**, full column width. The magazine move: the page interrupts itself with a tonal pause. It is *not* a rounded "card" dropped into prose — a card reads as web-app chrome; the rule-bracketed break reads as editorial.
- **Italic emphasis** marks terms/titles inline (not bold — bold is for scanning).
- **End-mark** (❦, ▪, the publication's glyph) closes the piece, centered, in the accent.
- **Byline hierarchy:** headline ≫ dek ≫ byline. The dek sits one clear step below the headline; keep it out of the pull-quote's size slot or the eye conflates them.

## The utility rail lives OUTSIDE the measure

Share / save / link icons sit in a quiet rail *beside* the column, in the margin — never inside the reading width. Present for utility, invisible to the read. (Decorative-leaning is acceptable here; just keep it out of the measure.)

## Publication chrome (if it's a publication)

A masthead + a subscribe CTA + an issue/section strip frame the column the way a magazine does. Optional for a bare blog post; expected for a publication.

## Don't

- ❌ A wide measure — 75–80ch is the most common reading-surface failure; protect 62–66ch.
- ❌ Body in the display/high-contrast serif — reading wants the low-contrast reading face; save the display face for headline/pull-quote.
- ❌ A pull-quote that repeats the adjacent sentence — lift from elsewhere, or cut it.
- ❌ A `<br>` hard-break in the headline — editorial heads rag naturally; hard-breaks are a landing habit that shatters on reflow.
- ❌ An inline aside as a rounded card — break the column with rules, not app chrome.
- ❌ Utility icons inside the measure — park them in the margin.
- ❌ Treating it like a landing — no CTA stack, no feature grid, no hero. This page sells nothing; it asks to be read.
