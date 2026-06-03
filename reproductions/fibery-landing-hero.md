# Reproduction #2 — marketing landing hero (Fibery)

**Domain:** marketing · **Target:** a real shipped work-platform SaaS landing page, above-the-fold hero + audience band.
**Reference:** `_ref/fibery-landing-hero.png` (eyedrop only).
**Build:** `fibery-landing-hero.html` → render `fibery-landing-hero@2x.png`.
**Gate:** pushed live to easel. Status: **awaiting user eye-gate.**

---

## The decisions I extracted (not traced)

The hero's identity is **typographic courage + asymmetry** — the opposite discipline from repro #1's quiet density.

1. **One loud move: a giant left-aligned headline.** Two lines, near-black, weight 800, tracking −0.03em, 58px. Contrast of scale carries the whole hero; everything else is deliberately quiet. *Left*-aligned, not centered — the §11 antidote to centered-hero slop.
2. **Asymmetric grid, visual bleeds off-edge.** Copy left (~47%, inside the centered container); an angled, overlapping **product collage that breaks the container and clips at the right viewport edge** (§5 intentional grid-break). Over a soft directional gradient wash weighted to the top-right.
3. **Restraint: one blue accent.** Near-black ink + gray subhead + a *single* blue on the CTA and the text link. The nav's primary button is near-**black**, not the accent — so the accent stays scarce (§4 60-30-10).
4. **Marketing whitespace (§12-B).** 72px nav, generous hero padding, one primary CTA + one ghost link, big breathing room before the audience band.
5. **Signature detail: synthetic product imagery.** Browser-frame cards (roadmap / feature board / sticky-note ideas / analytics chart) with miniature UI — bars, status dots, a mini bar-chart — angled and stacked so they read as *real shipped product* without faking specifics.

Type: Archivo (a grotesque with more edge than default Inter), single family, courage via scale + weight.

---

## Where the base HELPED

- **§3 Type** — "typographic courage… heroes 60–96px… a typeface with a point of view." Drove the 58px/800 Archivo headline directly.
- **§4 Color** — 60-30-10, "one accent is plenty," tinted off-white. The single-blue discipline is straight from here.
- **§5 Space** — marketing-generous whitespace, and "break the grid intentionally, rarely, for emphasis — a full-bleed image" → the off-edge collage.
- **§11 Slop avoidance** — explicitly steered away from centered-hero + three-identical-cards + gradient-soup. The left-aligned asymmetric hero *is* the §11 "DO this instead."
- **§12-B Marketing playbook** — "one dominant headline, one primary CTA, imagery earns its place, vary section layouts." The whole structure.

The base is a strong operating system for marketing too — no invented machinery.

## Where the base was SILENT (the distillables)

1. **No recipe for the marketing-hero product collage.** §5 says "break the grid rarely, for emphasis" and §12-B says "imagery earns its place" — but neither gives the *how*: angled overlapping product cards, bleeding off the right viewport edge, over a directional wash. This is a specific, repeatable marketing move the base only gestures at. → **cookbook candidate: "the asymmetric marketing hero (copy-left, visual-bleeds-right)."**
2. **No technique for standing in for the product shot.** §12-B is purist — "use real product UI; request real assets rather than faking it." Correct for production, but useless when prototyping or reproducing: you need to *evoke* product imagery now. The browser-frame-card-with-miniature-UI technique reads as product without faking specifics, and stays honest (clearly a stylized stand-in, not a fake screenshot of a real claim). → **cookbook candidate: "synthetic product imagery for hero/marketing visuals."** (The base should also soften §12-B to name this as the legitimate prototyping path.)

## Build misses (mine)

- Archivo 800 is slightly more industrial/condensed than the reference's more neutral grotesque — defensible as courage, but a closer face (Söhne/Graphik-class) would track tighter to the original.
- The real collage is denser (more cards, more detail); mine is cleaner. Evokes the decision rather than matching the density.

---

## Score (my eye — pending the user's)

Reproduces convincingly: the typographic hero, the asymmetric copy-left/visual-bleeds-right composition, the single-accent restraint, and the synthetic product collage all land close to the reference. Base supplied ~90% directly; the two gaps are *marketing-hero specifics* the base gestures at but doesn't operationalize — distillable cookbooks, not missing fundamentals. Same exit signal as repro #1.

**Cookbooks written only after the user confirms the reproduction landed.**
