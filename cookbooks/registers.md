# Cookbook — registers (deriving a voice from the dials)

> A "register" is the *voice* of an interface — cool-technical, warm-editorial, bold-expressive, and infinitely more. The trap (the one that makes everything you build look the same): treating registers as a **fixed list of named presets**. They aren't. A voice is a **point in a space of independent dials**, and the named registers are just three coherent points. Learn the dials and you can compose a voice for any brief — and stop shipping the same three looks.
>
> **Earned by:** the register exercise (`registers/float-*.html`) — the same product and copy ("Float") rendered in four voices from the spine alone. Because the content was held constant, every difference is *purely voice*. This replaces the old self-judged `kits/` (cool-technical / marketing / warm-editorial) with an empirical, composable model.

## The mistake this fixes

> *"Why does it seem like we only have three voices? Can't editorial be paired with anything else? I keep seeing the same thing over and over."*

Exactly right. **"Editorial" is not a voice — it's one value on the *type* dial.** Pairing it only with cream-paper + warm + airy gives one look every time. Pair the same editorial type with a *dark* surface and a *gold* accent and you get a "private-bank at night" voice that shares nothing visually with the cream one (`registers/float-dark-editorial.html` proves it — same editorial type, two different points, two unrelated-looking pages). Three presets sample three points; the space holds dozens.

## The dials (compose a voice by choosing a value on each)

| Dial | Some values |
|---|---|
| **Type** | geometric-sans · mono-technical · humanist-serif · display-expressive · grotesque |
| **Serif character** *(if serif)* | warm-humanist (Fraunces) · cold-Didone (Bodoni/Didot) · transitional · slab |
| **Surface** | light · dark · cream/paper · saturated-color |
| **Temperature** | **warm** (taupe greys, cream, gold/oxblood) · **cool** (blue-greys, ink-blue) · **achromatic** (true black/white) |
| **Density** | airy (marketing) · dense (product) |
| **Depth** | flat-hairline · soft-shadow · rules-not-shadows · dark+glow |
| **Composition** | centered · asymmetric-editorial · big-type-hero · structured-grid |
| **Accent** | scarce-cool · loud-electric · warm-oxblood · gold/brass · ink-blue · none |
| **Shape** | sharp (0–4px, serious) · soft (12–16px, friendly) · pill |
| **Motion/finish** | crisp & keyboard-first · playful · calm & unhurried |

**Temperature is its own dial — the one most likely to get stapled to a type choice by reflex.** "Editorial" does not imply "warm." A warm-humanist serif (Fraunces) on cream with gold is *one* editorial point; a cold Didone (Bodoni) on cool-white with ink-blue is an equally valid, totally different one. If your editorial pages all come out warm, you're not setting temperature — you're inheriting it. Set it on purpose, every time.

A **register is a coherent selection across these dials** — coherent meaning the choices reinforce one feeling. The spine's laws (hierarchy, grid, one-accent, depth discipline, anti-slop) hold at *every* point; the dials only set the voice.

## Four worked examples (same content, four points)

- **Cool-technical** (`float-cool-technical`): mono/sans · **dark** · **dense** · flat-hairline + earned glow · centered · **scarce mint** · sharp · keyboard-first. Richness comes from *density of considered detail* (a real dashboard, a floating chip), never louder color. Grounded in Fey/Linear.
- **Bold-expressive** (`float-bold-expressive`): **display** (huge Bricolage) · light · airy · flat · big-type-hero · **loud electric-green** · pill · playful. The type *is* the design; one accent shouts. Grounded in Wise.
- **Warm-editorial** (`float-warm-editorial`): **humanist-serif** (Fraunces) · **cream/paper** · airy · **rules-not-shadows** · asymmetric-editorial · **oxblood** · low-radius · unhurried. Grounded in Monarch.
- **Dark-editorial** (`float-dark-editorial`): **same serif type** · **dark surface** · airy · rules + glow · editorial · **gold/brass**. A recombination — none of the three presets — proving the type dial detaches from the surface dial. *But note:* it's still **warm** (Fraunces + warm-black + gold) — "warm-editorial with the lights off." It moved the surface dial but not the temperature dial.
- **Cold-editorial** (`float-cold-editorial`): **cold Didone** (Bodoni) · cool-white surface · airy · rules · editorial · **ink-blue** · **cool temperature**. The actual temperature proof — same editorial register (reading rhythm, statement object, mixed roman/italic) but fashion/clinical-luxury, not heritage-warm. Shares *nothing* visually with warm-editorial despite being the same register.

The first three look unrelated because they differ on *most* dials. Dark-editorial differs on just *two* (surface + accent) — enough to look unrelated, but it left temperature warm. Cold-editorial flips *temperature + serif-character* and finally makes editorial read cold. The lesson: you don't need a whole new type system for a new voice — **re-point two or three dials**; just make sure *temperature* is one you set on purpose, not by reflex.

## How to derive a voice for a real brief

1. **Read the brief for feeling-words** (the §-identity interview): serious/playful, calm/urgent, heritage/modern, technical/human, premium/accessible.
2. **Set each dial from the feeling**, not from a preset. "Premium + calm + heritage" → serif + dark-or-cream + rules + gold + airy. "Technical + fast" → mono/sans + dark + dense + hairlines + scarce-cool.
3. **Ground it in a real exemplar** of that point (name one — the empirical check), extract its dial values, don't trace.
4. **Hold the spine's laws** at the chosen point. The voice is the dials; the discipline is constant.
5. **Render and look.** A voice is judged by eye, at a real point, never asserted from a name.

## Two hard-won cautions (both cost a gate)

- **Warm-editorial imagery can't be faked with CSS.** Cool-technical can synthesize a dashboard (vector-native); bold can synthesize flat playful shapes; but editorial *warmth* comes from real photography or a genuine product surface. Botanical line-art, muddy gradient panels, and stock card-stills all read as slop and kill the voice. On the paper/serif point, use a **real photo or a curated product object** (e.g. a printed-statement card), never a fabricated illustration.
- **Run the slop-radar on your *own* marketing chrome, not just on product screens.** A colored status-dot beside a mono eyebrow ("● Personal finance, reimagined") is the AP28 status-cosplay tell — and it slipped into a hand-built hero. The anti-patterns apply to the decorative bits you add, not only the UI you reproduce.
- **Watch your temperature reflex.** Editorial kept coming out warm (Fraunces + cream/warm-black + gold) until temperature was named as its own dial — even a deliberate "dark editorial" stayed warm because only the surface moved. If a register keeps converging on one feeling across briefs, a dial you *think* you're choosing is actually on autopilot. Set type, temperature, and accent independently; verify by eye that the one you meant to move actually moved.
- **Legibility overrides voice for load-bearing content.** A display face sets the *headline*, never the data. A cold high-contrast Didone (Bodoni) made the `$48,210.34` statement figure fragile — its hairline thins break up at number size, and an unreadable amount is disqualifying in a finance app. Use the expressive face for the hero line; set numbers, amounts, and dense data in a **legible tabular companion** (a sturdy grotesque or a low-contrast serif with `tabular-nums`). The voice still reads — it's carried by the headline, the palette, the composition — while the content the product exists to show stays instantly readable. This applies to any voice whose display type is expressive (Didone, ultra-thin, heavily-styled): expressive up top, legible where it counts.

## Don't

- ❌ Treat registers as a fixed menu of 3 (or N) named looks — that's why everything converges. Compose from dials.
- ❌ Assume a type value implies a surface value — "editorial" is not "cream," "technical" is not "dark." Re-point them independently.
- ❌ Add "richness" by turning up color or size — in a restrained voice, richness is *density of considered detail* (see cool-technical).
- ❌ Break the spine's laws to chase a voice — the dials set the feeling; hierarchy/grid/one-accent/depth discipline hold at every point.
- ❌ Fake editorial photography with CSS illustration — real photo or a curated product object only.
- ❌ Name a voice without rendering it — a register is judged at a real point, by eye.
