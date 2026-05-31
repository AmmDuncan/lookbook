# Pattern: Marketing

**Inherits:** all of `fundamentals.md` unless overridden below.
**Cite as:** `P-M-<nn>`.

## Surface intent
A surface that convinces, not a surface that operates. The reader is undecided, distracted, and skeptical. Each section earns the next scroll. The visual job is to make the product feel inevitable — premium without trying, opinionated without preaching.

## Density band
**Spacious (F26).** Section padding 96–160px desktop, 56–80px mobile (F11 ceiling). Inner section content stays narrow (max-width 1080–1200px) so whitespace frames it. Sparse density is what separates marketing from product.

## Calibrations

**P-M-01. Hero headline 44–96px desktop, 36–48px mobile; weight 500–600; line-height 1.05–1.1; tracking −0.025 to −0.03em.** The 44px floor applies ONLY to a centered hero with a dominant product visual below (composition carries the impact); a left/right-aligned hero keeps the 56px floor.
Refines: F4, F7. *Why:* the headline is the entire first impression. _(Calibrated 2026-05-29: excellent centered heroes with a big visual run ~40–44px — the 56px floor was too strict for that composition, but still holds when the headline is doing the heavy lifting alone.)_

**P-M-02. Sub-headline (eyebrow OR deck): eyebrow 13px uppercase tracked +0.12em; deck 18–24px regular-weight line-height 1.5.**
Refines: F7. *Why:* the deck explains what the headline asserts; both can't be the same weight class.

**P-M-03. One primary CTA in the hero. Secondary "Learn more" allowed as ghost/text.**
Refines: F16, P-F-04. *Why:* two equally-weighted CTAs split conversion. The user can't pick what you can't pick.

**P-M-04. Marketing surfaces *may* use pure-white pages if the brand spec demands it.** Declare in `personality.md` as a deviation from F20.
Deviation slot for F20. *Why:* many premium brands insist on stark white; declaring it forces it to be intentional.

**P-M-05. Texture is encouraged on marketing — atmospheric light + grain, type-as-texture, geometric devices (F35 families).** One per section, max two stacked (atmospheric + grain).
Refines: F37. *Why:* marketing is the surface that earns texture; product is the surface that doesn't.

**P-M-06. Maximum 5 sections in a single scrolled page above the footer.** More = the page hasn't earned them.
New. *Why:* Refactoring UI — every section is a fresh argument; six arguments suggests none is strong enough.

**P-M-07. Imagery is product-true, not stock.** Real product UI in device frames, real photography, custom illustration. Stock photo of "diverse people pointing at a laptop" is a tell.
New. *Why:* the imagery sells the product; stock sells doubt.

**P-M-08. Type pairing is one display + one sans (F1).** Display for hero + section titles; sans for everything else. Never three families.

**P-M-09. Sections have visual rhythm, not equal heights.** Alternate left-content / right-content, full-bleed image / contained text, dense feature grid / single quote. Equal-rhythm sections read as a wireframe.
New. *Why:* monotony of section shape is the AI-generated marketing tell.

**P-M-10. Accent color shows up in 3–5 places per page total**, concentrated at CTAs and one or two key state-marks.
Refines: F17. *Why:* less rare = less convincing.

**P-M-11. Reading width stays narrow (60–75ch) even when the section is full-bleed.** Don't run prose across 1200px of viewport.
Refines: F5.

**P-M-12. Hero on first paint takes ~80% of viewport on desktop, full viewport on mobile.** Below the fold should be visible enough to suggest scroll but not consumed in the hero.
New.

**P-M-13. The hero SHOWS the product — a real screenshot, fanned app screens, a device frame, or a feature/integration cluster — with depth (shadow/layering).** Not optional. A text-only hero is the #1 AI-marketing tell (ties AP22).
New. *Why:* all 4 reference landings show the product in the hero (Fireflies, Fibery, Dovetail, Visitors — `evidence/marketing.md`). Telling-instead-of-showing is what reads as generated.

**P-M-14. Hero alignment is contextual — centered with a dominant product visual below is the DEFAULT (the most common live pattern); reach for left-text / right-product-visual when there are multiple screens or an integration story to show.** Both first-class. Dark hero is a valid option alongside the pure-white deviation (P-M-04). _(Calibrated 2026-05-29: at n=12, ~8 are centered-with-visual — the earlier 50/50 read shifts to centered-dominant.)_
New. *Why:* the composition flexes to what's being shown; the constant is *show the product*.

**P-M-15. Trust markers sit near the hero CTA, not only in a later section** — a rating chip, a curated logo wall, or "no credit card required" microcopy directly under the CTA cluster.
New. *Why:* the skeptical reader needs proof at the decision point (Fireflies rating + compliance, Dovetail logo wall, Visitors "no card").

**P-M-16. A multi-section landing builds rhythm through SURFACE ALTERNATION, not hairline rules. Use ≥2 distinct full-bleed section surfaces down the page (paper / white-card-band / accent-tint / dark), and separate sections by the surface change + whitespace — never a `border-top` hairline between major marketing sections.**
New (battle-test 2026-05-31 — derived from Linear / Stripe / Vercel / Mercury, against the `kits/marketing` landing organism). *Why:* an all-one-background landing whose sections are divided by hairline rules reads FLAT even when the content varies — and the hairline-between-sections is the cool-technical/app/doc tell leaking onto a marketing surface. Real premium landings give each argument its own ground: a tinted testimonial band, a white feature band, a dark CTA. The fix that proved it (a flat paper page with `border-top` separators → paper→white→tint→paper→dark bands, hairlines removed) measurably lifted the rhythm. *Check:* count distinct section-background treatments down the page (≥2); confirm no `border-top` hairline separates two stacked full-width marketing sections.

## Composition defaults
- **Hero**: eyebrow → headline → deck → CTA cluster → **trust markers** → **product visual** (right side or below, with depth). The product visual and trust markers are required, not optional (P-M-13/15).
- **Section rhythm**: ~5 sections — hero, "what it is" (feature triplet or split), "how it works" (steps or product shots), "social proof" (quote or logo wall), CTA + footer.
- **Footer**: dark or neutral; sitemap + legal + brand mark.
- **Sticky nav** on long pages; compact, blurred backdrop when scrolled past the hero.
- **Mobile** drops to one column always; hero text shrinks first, then deck, then visual.

## Forbidden moves
- The "purple-to-blue gradient" hero. Generic-AI tell. (Listed in SKILL.md banned set.)
- Three+ equally-weighted CTAs in the hero.
- Stock photography of people pointing at screens.
- Logo walls with no curation (10+ logos at equal size = no logo matters).
- Animated text reveals on every section heading.
- Glassmorphism by default. (Banned tell.)
- Equal-rhythm sections (5 sections all "title + paragraph + image right").
- Hairline (`border-top`) separators between major marketing sections on one flat background — alternate full-bleed section surfaces + whitespace instead (P-M-16).
- "Generic SaaS hero" — laptop on a 3D pedestal, blob background, gradient text. Avoid the trifecta.

## Sources
Refactoring UI (Wathan & Schoger) · Lookbook gallery → Marketing + SiteArchetypes + Identity · canonical observable examples: Linear, Stripe, Vercel, Arc, Apple product pages · **Reference study of real public products (Fireflies, Fibery, Dovetail, Visitors) → `evidence/marketing.md`** (hero-shows-product, contextual alignment, trust-near-CTA, dark hero).
