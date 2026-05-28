# Verification checklist

The standalone, runnable verification pass. Run top to bottom after building any surface. Each line is pass/fail or a number to fill in — no hand-waving. Cite IDs in narration.

## 0 · Look at it first
- [ ] **Viewed the rendered design** (the actual pixels, not the markup). Everything below assumes you have looked.
- [ ] **Is it genuinely good / would I ship it?** (the north star — not "does it avoid the tells")
- [ ] Reads as *made by someone who ships software*, not text-on-paper (AP22)
- [ ] Shows substance/craft/depth where the surface calls for it — not flat
- [ ] "Spacious" sections are full, not *empty*
- [ ] Nothing reads as accidental (clipped texture, floating content, mis-wrapped headline)

## 1 · Measurable (compute, don't eyeball)
- [ ] **Contrast**: every non-neutral text colour and every status label ≥4.5:1 against the surface it sits on, tints included (F15, F54, F55, F66). Filled controls' labels ≥4.5:1 on their fill (F66).
- [ ] **Type** on the modular scale (F2); body 15–17px / lh 1.5–1.6 (F3); ≤2 families, ≤4 weights (F1, F6)
- [ ] **Spacing** every value = n × base unit (F8); section padding in the surface's band (F11 / pattern)
- [ ] **Alignment spine**: section content widths reduce to ≤3 measures on one axis; edges line up down the page (F74)
- [ ] **Accent budget**: count accent instances — within the surface's limit (F17; dashboards near-mono, P-D-06)
- [ ] **Responsive**: mobile reflow stated or built (F50–F53); every touch target ≥44px under coarse pointer (F52)
- [ ] **Numerics** tabular + right-aligned in tables (F24)

## 2 · Completeness (states & copy)
- [ ] Interactive atoms ship rest/hover/focus-visible/active/disabled (F32); focus ring visible (F34)
- [ ] Data views ship loading/empty/error/populated (F33)
- [ ] One primary action per region (F16)
- [ ] Copy: sentence case (F67); buttons are verbs (F68); errors say problem + fix (F69); no jargon (F73)

## 3 · Anti-pattern sweep (count the tells)
- [ ] Walked AP1–AP22. **Tell count: ___** (0 ideal · 1–2 OK · **3+ = rework**)
- [ ] No violet-blue gradient (AP1), gradient text (AP2), glassmorphism (AP3)
- [ ] Has a point of view — not perfectly-safe-everywhere on an expressive surface (AP20)
- [ ] Shows the product, not just describes it (AP22)

## 4 · Pattern fit (load the archetype's pattern file)
- [ ] Right density for the surface (F26 / pattern band)
- [ ] Dashboard → left-shell, near-monochrome, table-led OK, tabs OK (P-D + `evidence/dashboard.md`)
- [ ] Form → entry-card vs settings-in-shell; labels & primary placement contextual; destructive separated (P-F + `evidence/form.md`)
- [ ] Auth → centered card OR split; SSO above/below by context; texture optional (P-A + `evidence/auth.md`)
- [ ] Marketing → hero shows the product with depth; trust near CTA; varied section rhythm (P-M + `evidence/marketing.md`)

## 5 · Deviations
- [ ] Every rule broken on purpose is declared in `personality.md` with a reason. Undeclared deviations are violations, not choices.

---
**Precedence when two checks conflict** (fundamentals.md): accessibility → declared deviations → fundamentals → pattern calibrations → anti-pattern/taste. Never break a higher tier to satisfy a lower one.
