# Evidence — Marketing (P-M calibration)

Studied 4 real SaaS landing heroes. Screens: Fireflies, Fibery, Dovetail, Visitors. 2026-05-28.

## Rule-application reading

| Rule | What real landings do | Verdict |
|---|---|---|
| Hero shows product | **ALL 4**: screenshot below (Fireflies, Visitors), fanned app screens right (Fibery), integration/feature cluster right (Dovetail) | **STRONGLY CONFIRM AP22 / P-M-07**: the hero region shows the product — text-only heroes are the AI tell. Make it a hero requirement. |
| Hero alignment | centered (Fireflies, Visitors) **OR** left-text / right-product-visual (Fibery, Dovetail) | **CONTEXTUAL**: both first-class. |
| P-M-03 two CTAs | all 4: primary filled + secondary ghost/link | CONFIRM. |
| Trust markers | rating chip "4.8/5" + compliance (Fireflies), logo wall (Dovetail), "No credit card required" (Visitors) — **near the hero CTA** | **ADD**: trust markers sit right under the hero CTA, not only in a later section. |
| P-M-02 eyebrow | "An alternative to Fathom" (Visitors), "Watch keynote" pill (Dovetail) | CONFIRM. |
| Dark hero | Fireflies, Dovetail are dark | **ADD**: dark hero is a valid option (not only pure-white per P-M-04). |
| Depth/craft on visuals | Fibery layered screens w/ shadow, Dovetail card cluster | CONFIRM (depth, not flat). |

## The dynamic-generation lesson
Marketing heroes vary by what's being shown: centered+screenshot-below when the product is one strong screen; left-text/right-visual when there are multiple screens or an integration story. The constant is *show the product*; the composition flexes.

## Calibrations applied to patterns/marketing.md
1. **Hero must show the product** (screenshot / fanned screens / device frame / feature cluster) — promote from "imagery is product-true" to a hero requirement (ties AP22).
2. Hero alignment **contextual**: centered OR left-text/right-visual.
3. **Trust markers near the hero CTA** (rating, logo wall, "no card").
4. **Dark hero** is a valid option alongside the pure-white deviation.

---

# Calibration pass 2 — 20 live B2B/SaaS marketing + pricing screens. 2026-05-29.

Source: a reference study of real, public, shipped products. Screens read:
**Heroes (12):** Fibery, Linear, Deel, Coda, Wrangle, Air, Visitors, Deputy, Time2book, Fireflies, Chatbase, ClickUp.
**Pricing (8):** OpenTable, Productboard, Height, Retool, Going, Webflow, Bonsai, ElevenLabs.
Sizes corroborated against published SaaS-typography reference data (hero clamps, container widths, 8px spacing rhythm).

## Rule-application reading — fundamentals numbers the marketing surface exercises

| Fn / rule | Current | Live-UI cluster | Verdict |
|---|---|---|---|
| **F11 section padding** (64–128 desktop / 32–64 mobile) — P-M density band overrides to 96–160 / 56–80 | base 64–128; P-M 96–160 | Heroes leave ~80% viewport before fold (Linear, Coda, ClickUp); inter-section gaps cluster **96–128px** desktop on the spacious landings, rarely past 160. Reference spacing data lands on an 8px rhythm topping out ~96–128. | **VALIDATE** P-M 96–160 ceiling as a *ceiling*; the working cluster is 96–128. The 160 cases are hero-only, not every section. Tighten P-M density-band note to say "section-to-section 96–128; the 160 reach is the hero/CTA bookends only." |
| **F2 type scale ratio** (1.2 / 1.25 / 1.333) | one ratio, pick one | Display jumps are *bigger* than the small-third on every large-display hero (Linear/Coda/ClickUp headline ≫ deck by more than 1.333×). Real sites run a **dual scale**: tight ratio (~1.2) for body→small-headings, then a *display* leap to the hero. | **CALIBRATE note (not number):** F2's single-ratio rule holds for the text scale; marketing display sizes sit ABOVE the scale as named display steps (F2 already permits via display sizes). Make P-M explicit that the hero size is a display step, not the next rung of the body ratio. |
| **P-M-01 hero headline 56–96 desktop / 36–48 mobile** | floor 56 | Top cluster confirms 56–96 (Fibery, Linear, Coda, ClickUp ~64–88px, wt 600–700, 2 lines, tight tracking). BUT excellent centered heroes sit **below 56**: Visitors ~44px, Wrangle ~44px, Deputy ~40px — and still read as heroes via centered comp + dominant product visual + tight 2-line wrap. | **TOO-STRICT (floor):** 56px floor is broken by excellent screens. Lower the floor to **44px when centered with a dominant product visual below**; keep 56px floor for left-aligned / visual-beside heroes where the headline must carry more weight. Top of band (96) validated. |
| **F74 container width** (~1080–1200 default + narrow prose measure) | 1080–1200 | Reference cluster **1100–1280**; Linear/Stripe ~1080–1140, Coda/ClickUp/Deel wider toward 1200–1280. | **CALIBRATE (minor):** default container realistically **1080–1280**; raise the ceiling note from 1200 to 1280. The ≤2–3 sanctioned-widths rule itself VALIDATES — every screen pins to one default + a narrow measure; none mix left-flush and centered down the page. |
| **F3 body / P-M-02 deck** (body 15–17; deck 20–24) | as stated | Decks read 18–22px regular, line-height ~1.5 (Fibery, Deel, Deputy, Fireflies). Body in feature sections 15–17. | **VALIDATE.** Deck low end is really ~18, so 18–24 is the honest band (P-M-02 says 20–24 — slightly high at the floor). Minor: widen deck floor to 18. |
| **F17 / P-M-10 accent 3–5 per page** | max 4–5 | Heroes are accent-restrained: one accent at the primary CTA, occasionally a second on a state-mark/rating chip. Gradient accents (ClickUp, Chatbase) live on the **product-card frame**, not the page background — not the banned gradient-hero tell. | **VALIDATE.** 3–5 holds. Worth a P-M note: a brand gradient confined to a product-visual frame/card is NOT the banned "purple-to-blue gradient hero" (the ban is about the gradient being the *page/hero background*). |
| **P-M-13 hero shows product** | required | **12/12** show the product in the hero region (screenshot below, device frame, fanned screens, or feature/integration card cluster). Even text-forward Linear/Coda/ClickUp drop a large product screenshot directly under the headline. | **STRONGLY VALIDATE.** No change. |
| **P-M-14 hero alignment contextual** | centered OR left/right | Updated split: **centered + screenshot-below is now dominant (~8/12)** (Linear, Coda, ClickUp, Wrangle, Air, Fireflies, Visitors, Deel-tablet); left-text/right-visual the minority (Fibery, Chatbase). | **VALIDATE**, recalibrate the prose: centered-with-visual-below is the *default*; left/right is for multi-screen / integration stories. |
| **P-M-15 trust near CTA** | required | ~7/12: Deel (top trust bar: "Trusted by 35,000+ · 10,000+ reviews · data security"), Chatbase (logo wall under hero), Fireflies (rating chip + compliance), Visitors ("No credit card required"), Deputy ("no credit card required"), ClickUp ("Free Forever. No Credit Card."), Coda (none). | **VALIDATE.** Holds for product-led-growth landings; sales-led (Deel "Book a demo") put trust in a top strip instead of under the CTA — both are "near the decision point." |
| **P-M-03 one primary CTA + ghost secondary** | as stated | Every hero: one filled primary + one ghost/outline secondary ("Book a demo", "See demo", "Contact sales", "See How It Works"). | **STRONGLY VALIDATE.** |
| **P-M-04 pure-white deviation** | declared deviation | Pure/near-white heroes common: Fibery, Coda, Wrangle, Time2book, Chatbase, ClickUp. Dark heroes: Linear, Fireflies, Deputy. | **VALIDATE** the deviation slot is real and frequently exercised — keep it a *declared* deviation, not a default. |

## Pricing-surface reads (corroborates pricing.md; logged here for the marketing sweep)
- 3-up tier cards (Bonsai, OpenTable) vs full feature-comparison tables (Productboard, Retool, Webflow, Height, ElevenLabs). One **recommended/highlighted tier** with accent fill/tint is near-universal (Going green column, OpenTable center column). Container + width rules match the marketing default.

## The dynamic lesson (pass 2)
The headline-size *floor* is not absolute: a smaller centered headline + dominant product visual is a complete, excellent hero. Size compensates for, or is compensated by, composition. The invariant is **show the product** and **one decisive CTA with proof beside it** — the px on the headline flexes with the layout.

## Proposed pattern edits (NOT yet applied — maintainer triage)
1. P-M-01: lower headline floor to 44px for centered + dominant-visual heroes; keep 56 for left/right.
2. P-M-14 prose: centered-with-visual-below is the default; left/right for multi-screen/integration.
3. P-M density band: clarify 96–128 is the section-to-section working cluster; 160 is hero/CTA bookends only.
4. P-M-02 deck: widen floor to 18px (18–24).
5. F74 ceiling note: default container 1080–**1280**.
6. P-M / forbidden-moves note: a brand gradient on a product-visual *frame/card* is not the banned gradient-*hero-background* tell.
