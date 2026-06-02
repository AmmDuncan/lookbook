# Warm-editorial kit — register: `warm-editorial`

The **warm-editorial** register: a surface that *reads* — long-form, considered, print-derived.
The third register, distinct from `cool-technical` (operate data) and `marketing` (convince).
Same Lookbook family: it converges on the brand-continuous indigo accent + token discipline,
and diverges on type, density, and texture (the cardinal rule). Its distinctiveness is an
**all-serif voice** (the other two registers are sans-bodied).

Dials from the brain's editorial column (`patterns/identity.md` adjective table · `patterns/approach.md`
P-AP-05 Editorial archetype): near-neutral **warm**, **airy**, **low radius**, **restrained shadow**
(rules carry structure, not shadows), **serif display**, slow fades.

## Register dials (`_tokens.css`)
- **Type voice:** Fraunces (display) + Lora (body) — both open, warm serifs (user-picked, easel #57→#59). Fraunces carries headlines + uppercase kickers; Lora carries deck/body/caption/byline. Two families, all-serif; the cap of two per screen holds (P-ID-04). The HTML must LOAD both (Google Fonts) or it falls back to system serif ≠ the voice.
- **Accent:** brand-continuous indigo `#5B5BD6`, spent the **most scarcely of the three registers** — a kicker, a link, the one pull-quote mark. Ink carries the page. Link text uses `--accent-ink` (#4A4AC4) for AA on paper.
- **Surface:** warm cream `--paper` #FBF9F4 (never #FFF; editorial reads ON the paper). `--surface` (#FFF) is the rare card. Depth is almost nil — `--rule` hairlines divide, shadows don't.
- **Density:** airy — `--measure` 66ch reading spine, generous `--section-gap` 88px, Lora body at 19/1.72.
- **Radius:** LOW (3–4px) — print-derived, not app-rounded.

## Atoms (treatments — the vocabulary, recur for coherence)
- `atom-masthead` — how an article opens: kicker → serif headline → standfirst → byline rule → lead image + caption. Compositions: centered long-read / left-aligned standard. Drop-cap opening + dinkus prove the body voice.
- `atom-prose` — the reading surface: measure-spine body (print-convention indented paragraphs), Fraunces subhead, pull-quote that BREAKS the measure (the one accent mark), rule+italic blockquote, breakout figure + caption, quiet list, accent link, dinkus scene-break.
- `atom-index` — the publication landing: one story-card treatment (thumb + kicker + Fraunces headline + Lora dek + byline). Compositions: featured-lead + secondary grid (one story promoted) / text-river (no thumbs, archive).

## Organisms (worked pages)
- `organism-article` — header → masthead → prose → "More from" related grid → footer. The reading page.
- `organism-index` — header → featured lead → secondary grid → "Latest" river → footer. A different shape (the promoted lead + river is the centre of gravity), one register — variety via composition.

## Discipline (what makes it editorial, not generic)
- **The measure is the spine.** Body sits at `--measure` (66ch); only the pull-quote and breakout figure leave it, deliberately.
- **One story is promoted** on the index — the editorial point of view (the AP5 answer; never an equal grid of peers).
- **Accent is the scarcest of the three registers** — kicker, link, one pull-quote mark, and stop. The page is carried by ink on warm paper.
- **Rules and space carry structure, not shadows.** One soft shadow exists (`--shadow-card`) for the rare floating element; the kit uses it almost never.
- **One ornament per surface** — a drop cap opens the body, a dinkus (· · ·) marks a scene break. Never a pattern wash.

## Convergence
Verified 2026-06-02: a fresh rules-only build of a text-forward essay (no lead image — a composition not explicitly shipped) came back **"INVENTED: none"** — the masthead simply stops before the figure and the prose atom carries the rest. The register ports cleanly; the existing cardinal/identity/AP5 rules generalize to it without new machinery.

## Notes for real builds
- Lead images / thumbs are labelled placeholder gradients; production drops in photography (P-AS-04). Editorial favours photographic leads + the occasional scene illustration (P-MOL-12, the warmer-register illustration style).
- The non-color a11y floor (landmarks, real link/heading semantics, focus-visible) is wired at build time per `patterns/accessibility.md`.

## Discipline
Render every change at 2x (`--force-device-scale-factor=2 --virtual-time-budget` so Fraunces + Lora load) and LOOK. Contrast-gate every non-neutral text pair (`scripts/contrast.mjs`). Distilled from a study of real shipped editorial/long-form products.
