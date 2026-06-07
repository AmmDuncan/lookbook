# Cookbook — registers (deriving a voice from the dials)

> A "register" is the *voice* of an interface — cool-technical, warm-editorial, bold-expressive, and infinitely more. The trap (the one that makes everything you build look the same): treating registers as a **fixed list of named presets**. They aren't. A voice is a **point in a space of independent dials**, and the named registers are just three coherent points. Learn the dials and you can compose a voice for any brief — and stop shipping the same three looks.
>
> **Earned by:** the register exercise (`registers/float-*.html`) — the same product and copy ("Float") rendered in four voices from the spine alone. Because the content was held constant, every difference is *purely voice*. This replaces the old self-judged `kits/` (cool-technical / marketing / warm-editorial) with an empirical, composable model.

## The mistake this fixes

> *"Why does it seem like we only have three voices? Can't editorial be paired with anything else? I keep seeing the same thing over and over."*

Exactly right. **"Editorial" is not a voice — it's one value on the *type* dial.** Pairing it only with cream-paper + warm + airy gives one look every time. Pair the same editorial type with a *dark* surface and a *gold* accent and you get a "private-bank at night" voice that reads completely different at a glance (`registers/float-dark-editorial.html`). Three presets sample three points; the space holds dozens.

But beware the *other* half of this trap: **re-skinning is not re-composing.** It's easy to move the colour/type dials while leaving the *layout* identical — and three pages with the same skeleton in three palettes are still one design wearing hats, not three voices. Composition is a dial too, and it's the one most often left on autopilot while you fuss over palette. (`float-cold-editorial.html` was rebuilt to move it — a fashion *cover* + horizontal data ribbon, sharing no layout with the others — precisely because the first cut hadn't.)

## The dials (compose a voice by choosing a value on each)

| Dial | Some values |
|---|---|
| **Type** | geometric-sans · mono-technical · humanist-serif · display-expressive · grotesque |
| **Serif character** *(if serif)* | warm-humanist (Fraunces) · cold-Didone (Bodoni/Didot) · transitional · slab |
| **Surface** | light · dark · cream/paper · saturated-color |
| **Temperature** | **warm** (taupe greys, cream, gold/oxblood) · **cool** (blue-greys, ink-blue) · **achromatic** (true black/white) |
| **Density** | airy (marketing) · dense (product) |
| **Depth** | flat-hairline · soft-shadow · rules-not-shadows · dark+glow |
| **Composition** | centered-cover · asymmetric (object beside) · object-below · horizontal-ribbon · structured-grid · two-column-spread |
| **Accent** | scarce-cool · loud-electric · warm-oxblood · gold/brass · ink-blue · none |
| **Data / number type** | display face (headline only) → **always pair a legible tabular companion for amounts & dense data** |
| **Shape** | sharp (0–4px, serious) · soft (12–16px, friendly) · pill |
| **Motion/finish** | crisp & keyboard-first · playful · calm & unhurried |

**Composition is a dial, and re-skinning is not re-composing.** Moving type + palette while holding the layout gives you the same page in a new coat — the most common "fake variety" tell. Move *where things sit* (object beside the hero vs below it vs a thin ribbon vs a cover with no card), not just the ink. If two voices share a skeleton, at least one needs its bones rearranged.

**Data/number type is its own dial** because the display face that carries the voice (Didone, ultra-thin, heavy display) is usually the *worst* face for amounts. Decide up front: expressive face → headline; tabular companion (`font-variant-numeric: tabular-nums`) → every number a user must read.

**Temperature is its own dial — the one most likely to get stapled to a type choice by reflex.** "Editorial" does not imply "warm." A warm-humanist serif (Fraunces) on cream with gold is *one* editorial point; a cold Didone (Bodoni) on cool-white with ink-blue is an equally valid, totally different one. If your editorial pages all come out warm, you're not setting temperature — you're inheriting it. Set it on purpose, every time.

A **register is a coherent selection across these dials** — coherent meaning the choices reinforce one feeling. The spine's laws (hierarchy, grid, one-accent, depth discipline, anti-slop) hold at *every* point; the dials only set the voice.

## Four worked examples (same content, four points)

- **Cool-technical** (`float-cool-technical`): mono/sans · **dark** · **dense** · flat-hairline + earned glow · centered · **scarce mint** · sharp · keyboard-first. Richness comes from *density of considered detail* (a real dashboard, a floating chip), never louder color. Grounded in Fey/Linear.
- **Bold-expressive** (`float-bold-expressive`): **display** (huge Bricolage) · light · airy · flat · big-type-hero · **loud electric-green** · pill · playful. The type *is* the design; one accent shouts. Grounded in Wise.
- **Warm-editorial** (`float-warm-editorial`): **humanist-serif** (Fraunces) · **cream/paper** · airy · **rules-not-shadows** · asymmetric-editorial · **oxblood** · low-radius · unhurried. Grounded in Monarch.
- **Dark-editorial** (`float-dark-editorial`): **same serif type** · **dark surface** · airy · rules + glow · editorial · **gold/brass**. A recombination — none of the three presets — proving the type dial detaches from the surface dial. *But note:* it's still **warm** (Fraunces + warm-black + gold) — "warm-editorial with the lights off." It moved the surface dial but not the temperature dial.
- **Cold-editorial** (`float-cold-editorial`): **cold Didone** (Bodoni) · cool-white · airy · rules · **ink-blue** · **cool temperature** · **fashion-cover composition** (full-bleed headline + horizontal data ribbon + 3-column ruled features). Moves three dials warm-editorial holds — temperature, serif-character, *and composition* — so it shares neither palette nor layout with the others. Fashion/clinical-luxury, not heritage-warm.

Warm- and dark-editorial deliberately **hold composition constant** (hero + statement-beside) so you can read the temperature/surface change in isolation — a controlled comparison, not three independent voices. Cold-editorial then moves composition too, to show that dial is independent. The lesson: you don't need a new type system for a new voice — **re-point two or three dials** — but make sure *temperature* and *composition* are dials you set on purpose, because both love to ride on autopilot while you fuss over colour.

## Composing the body (below the hero) — reach FOR these, don't just avoid the tells

The composition dial above names *hero* shapes (cover / object-beside / ribbon …). But a page is mostly *body* — the proof, features, and CTA below the hero — and the anti-slop rules there are usually stated as **prohibitions** ("no three-identical-feature cards," "no stacked full-bleed bands"). A prohibition with no positive alternative is a trap: told only what to avoid, you avoid by reflex and land on the default grid anyway. (Proven — a weaker model handed this cookbook nailed every *named* dial and still shipped a 3-up feature grid + four stacked bands, because the body had no vocabulary to reach for.) So, body patterns to choose from:

- **Bento.** A few cells of *different sizes* in an irregular grid — one large feature cell + two small, a wide data cell spanning two columns. Breaks the equal-column rhythm by construction.
- **Asymmetric span.** One feature gets a wide 2-column treatment (its artifact full-width — a log stream, a chart, a real screenshot); the others are narrow. Scale contrast = hierarchy.
- **Staggered 1 + 2 (or 2 + 1).** Not three-across: one feature alone on a row, two sharing the next. The row rhythm itself differs.
- **Inset vs full-bleed, alternated.** Don't make every band edge-to-edge with the same horizontal rhythm. Inset the CTA, let the hero card bleed past the grid, give the page a *silhouette* instead of four identical rectangles.
- **Big-number / editorial list.** Features as a ruled list with oversized display numerals (see `float-bold-expressive`) or roman-numeral editorial rows (`float-warm-editorial`) — scale contrast instead of icon cards.

**The §11 "three-identical-cards" and "stacked-bands" tells apply *intra-page*, not just across voices.** Differing *content* inside identical *card shapes* does not satisfy "bones differ" — it's the most common way the tell sneaks back (rich artifacts in a stamped 3-up grid still reads as a stamped grid). Vary at least one band's *arrangement*, not just its contents.

## How to derive a voice for a real brief

1. **Read the brief for feeling-words** (the §-identity interview): serious/playful, calm/urgent, heritage/modern, technical/human, premium/accessible.
2. **Set each dial from the feeling**, not from a preset. "Premium + calm + heritage" → serif + dark-or-cream + rules + gold + airy. "Technical + fast" → mono/sans + dark + dense + hairlines + scarce-cool.
3. **Ground it in a real exemplar** of that point (name one — the empirical check), extract its dial values, don't trace.
4. **Hold the spine's laws** at the chosen point. The voice is the dials; the discipline is constant.
5. **Render and look.** A voice is judged by eye, at a real point, never asserted from a name.
6. **Adversarially critique before you ship — don't trust your own eye.** This is not optional. The generous eye that built a voice rated this entire set "done"; an independent ruthless critic then found *blockers* in every file (fake variety, a `#e3fbe c` CSS typo, WCAG-failing text, a centered-everything hero). Run a harsh critic pass — a fresh agent prompted to find flaws and forbidden to praise, or the checklist below — against the spine's §11 anti-patterns. The work is done when it survives an adversary, not when it looks good to you.

## Hard-won cautions (each cost a gate, or a critic pass)

- **Your tertiary/`--faint` colour is text, and it probably fails contrast.** The "quiet" label tier — eyebrows, dates, statement labels, table headers, kbd hints — carries words a user must read, yet it's the token most likely set too light. Across this set the faint token failed WCAG AA in *four of five* voices (2.37–2.97:1) until measured and darkened. De-emphasis is a luminance *step*, not a trip toward the background. Measure every text token, including the faintest.

- **A border/divider/decorative token reused as a `color:` is the tier the self-audit skips.** Once you've learned to measure your named text tiers (`--ink`/`--muted`/`--faint`), the failure migrates: it hides in a *non-text-named* token pressed into service as a text colour — a `--border-strong` used for code line-numbers, a `--divider` used for a ghost ordinal, a `--hairline` used for a `$` prompt glyph. The audit checks the tiers you *think of as text* and walks past these. They're usually the faintest values you have (they were chosen to be invisible-as-borders), so as text they're far below AA. **Grep your stylesheet for `color:\s*var(--…)` where the token name says border/divider/hairline/rule/decoration, and measure those too.** The contrast gate flags them automatically; your eye and your self-audit will not. (Earned: a weaker model that correctly measured all three named tiers still shipped `.lnum` line-numbers at 1.58:1 in a border token — `registers/thesis-test` re-run #2.)

- **Warm-editorial imagery can't be faked with CSS.** Cool-technical can synthesize a dashboard (vector-native); bold can synthesize flat playful shapes; but editorial *warmth* comes from real photography or a genuine product surface. Botanical line-art, muddy gradient panels, and stock card-stills all read as slop and kill the voice. On the paper/serif point, use a **real photo or a curated product object** (e.g. a printed-statement card), never a fabricated illustration.
- **Run the slop-radar on your *own* marketing chrome, not just on product screens.** A colored status-dot beside a mono eyebrow ("● Personal finance, reimagined") is the AP28 status-cosplay tell — and it slipped into a hand-built hero. The anti-patterns apply to the decorative bits you add, not only the UI you reproduce.
- **Watch your temperature reflex.** Editorial kept coming out warm (Fraunces + cream/warm-black + gold) until temperature was named as its own dial — even a deliberate "dark editorial" stayed warm because only the surface moved. If a register keeps converging on one feeling across briefs, a dial you *think* you're choosing is actually on autopilot. Set type, temperature, and accent independently; verify by eye that the one you meant to move actually moved.
- **Legibility overrides voice for load-bearing content.** A display face sets the *headline*, never the data. A cold high-contrast Didone (Bodoni) made the `$48,210.34` statement figure fragile — its hairline thins break up at number size, and an unreadable amount is disqualifying in a finance app. Use the expressive face for the hero line; set numbers, amounts, and dense data in a **legible tabular companion** (a sturdy grotesque or a low-contrast serif with `tabular-nums`). The voice still reads — it's carried by the headline, the palette, the composition — while the content the product exists to show stays instantly readable. This applies to any voice whose display type is expressive (Didone, ultra-thin, heavily-styled): expressive up top, legible where it counts.

## Pre-ship checklist (run on your OWN output before showing anyone)

Every caution above, made pass/fail. This exists because the discipline kept living in prose the builder forgot to apply to their own work. If any line fails, it's not ready — no matter how good it looks to you.

- [ ] **Composition moved, not just palette.** No two voices share a layout skeleton. At least where you claim distinct voices, the *bones* differ (object-beside vs below vs ribbon vs cover), not only the ink. **This line is machine-enforceable:** run `node scripts/check-layout.mjs <file-a.html> <file-b.html> ...` — it fingerprints each file's layout geometry (grid/flex primitives + structural density, ignoring colour and text) and flags any pair that shares a skeleton, plus any primitive that recurs across the set (e.g. `repeat(3,1fr)` in N files = the §11 three-up feature grid recurring). A flag is not auto-fail — a deliberate controlled comparison (warm- vs dark-editorial hold composition constant on purpose) shares a skeleton legitimately — but every flag must be a choice you can defend, not a re-skin you forgot to recompose.
- [ ] **Contrast: every text-carrying token clears AA at its real size** — including the tertiary/`--faint` label colour (eyebrows, dates, table headers, captions are *text*, not decoration). ≥4.5:1 small, ≥3:1 only for ≥18.66px bold. Faint means de-emphasised, not invisible. **This line is machine-enforceable:** run `node scripts/check-contrast.mjs <file.html>` — it parses the token table, detects foreground-vs-surface polarity, and fails on any named text tier (`--faint`/`--muted`/`--ink`) below 4.5 (accents below 3.0). It caught a 1.68:1 log-timestamp text in a weaker model's output that the model's own eye had passed.
- [ ] **Numbers in a tabular companion, never the display face.** Amounts, data, dense figures use a legible face with `tabular-nums`; the expressive/Didone/display face is headline-only.
- [ ] **No status-cosplay.** No coloured dot beside a label on non-live state. Dots are for genuinely live channels only; use a real glyph otherwise.
- [ ] **No centered-everything hero**, no three-identical-icon feature row, no scattered tilted "floating cards," no decorative macOS traffic-lights — the named §11 marketing tells. Run the slop-radar on your *own* chrome, not just reproduced UI.
- [ ] **Temperature + accent set on purpose.** Confirm by eye the dial you meant to move actually moved (the "dark editorial that's still warm" trap).
- [ ] **Imagery is real or a genuine product object** — never fabricated CSS illustration on the warm/editorial point.
- [ ] **One accent hue, every instance load-bearing.** Scarcity is a *visual-weight* judgment, not a tally — don't count to a magic number, and don't delete a meaningful colour (an active pipeline bar, a live indicator) just to hit one. Ask of each instance "does this carry meaning or is it decoration?"; kill the decoration, keep the rest. Grounded in a *named* real exemplar; no CSS typos; every font-weight you use is actually loaded.
- [ ] **An adversary reviewed it** (critic agent or this list), not just the author.

## Don't

- ❌ Treat registers as a fixed menu of 3 (or N) named looks — that's why everything converges. Compose from dials.
- ❌ Re-skin and call it a new voice — if the layout skeleton is identical, it's one design in a new palette (fake variety).
- ❌ Ship your own eye's verdict as final — it runs generous; make an adversary sign off first.
- ❌ Assume a type value implies a surface value — "editorial" is not "cream," "technical" is not "dark." Re-point them independently.
- ❌ Add "richness" by turning up color or size — in a restrained voice, richness is *density of considered detail* (see cool-technical).
- ❌ Break the spine's laws to chase a voice — the dials set the feeling; hierarchy/grid/one-accent/depth discipline hold at every point.
- ❌ Fake editorial photography with CSS illustration — real photo or a curated product object only.
- ❌ Name a voice without rendering it — a register is judged at a real point, by eye.
