# Reproduction #11 — editorial article (a reading surface)

**Domain:** content / long-form reading · **Target:** a real shipped magazine reader (The New Yorker).
**Reference:** `_ref/newyorker-article.png` (eyedrop only).
**Build:** `editorial-article.html` → render `editorial-article@2x.png`. **Gate:** contrast tool PASS; adversarial critic + user eye-gate pending.

> The orphan the registers never covered (per `kits/COVERAGE.md`): every register voice did a landing or a dashboard; **none did long-form reading**. This applies the established warm-editorial voice (Fraunces + Newsreader + cream + oxblood) to a genuinely new *archetype*. The point of the reproduction is the article-specific *furniture*, not the voice.

## The decisions I extracted (not traced)

1. **A narrow reading measure, centered in a wide page.** The body column is ~640px (~62ch) centered with generous side margins — the single most important reading decision. A landing fills the width; an article protects the line length. (Centering here is the *correct* measure-centering, not the §11 centered-everything tell.)
2. **Serif body at reading size and leading.** ~19px / 1.75 line-height in the reading serif (Newsreader), not the display serif. Long-form wants comfort, not drama; the display face (Fraunces) is reserved for the headline, pull-quote, and module heads.
3. **A quiet floating utility rail beside the column.** Share / save / link icons sit to the *left* of the measure, present but outside the reading width so they never intrude. Utility without clutter.
4. **Inline modules BREAK the column.** A newsletter/aside is set off with a heavier top rule + lighter bottom rule, full column width, a tonal pause in the reading flow. The magazine move: the page can interrupt itself without losing the reader.
5. **Reading furniture, used structurally not decoratively.** A drop-cap opens the body; a **pull-quote** (display italic, oxblood left-rule) lifts one line for rhythm; **italic emphasis** marks terms/titles inline; an **end-mark** (❦) closes the piece. Each is a reading signal, not ornament.
6. **Editorial top + publication chrome.** Masthead + a subscribe CTA + an issue strip (the publication frame), then kicker → headline (mixed roman/italic) → italic dek → byline (avatar + name + date, bracketed by hairlines). The hierarchy is headline ≫ dek ≫ byline, all above the body.

## Where the base / prior cookbooks HELPED

- **`registers.md` warm-editorial voice** — Fraunces/Newsreader pairing, cream paper, oxblood accent, rules-not-shadows all carried straight over; the voice didn't need re-deriving, only re-applying.
- **§3 type / §5 editorial** — measure, scale contrast, reading rhythm, the courage to make the headline big and the body quiet.
- **§4 + the contrast gate** — neutrals structural, one scarce accent; passed `check-contrast.mjs` first try.

## Where the prior library was SILENT (the distillable)

1. **No reading-surface recipe anywhere.** Every cookbook is a landing, a dashboard, a table, a form, or an overlay — all *scanning* surfaces. None addresses *reading*: the protected measure, reading-size serif body + leading, the column-breaking inline module, the drop-cap/pull-quote/end-mark furniture, the floating utility rail, the byline hierarchy. → **cookbook candidate: "the reading surface (long-form article)."** It references `registers.md` for the editorial voice (don't restate it) and adds only the article furniture.

## Self-assessment (pending the critic + user eye)

Reads as a genuine reading surface, not a landing in disguise — the protected measure, reading-serif body, column-breaking module, and drop-cap/pull-quote/end-mark furniture all land. Contrast gate passes. One open risk to verify with the critic: the pull-quote currently lifts a line *verbatim* from the adjacent paragraph (a real editorial debate — some consider it redundant); and the rag/widows want a magazine eye. Distillable: a reading-surface cookbook, the first non-scanning archetype in the library.

**Critic verdict: MOSTLY → keeper (it cooked); pull-quote + measure fixed per findings. Cookbook `cookbooks/reading-surface.md` distilled. User eye-gate pending.**
