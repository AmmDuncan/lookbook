# Fundamentals — the hard floor

The rules below are the **non-negotiable floor** every Lookbook design starts from. They come from human perception (contrast, readability), mathematics (modular scales, base units), and established typographic + grid tradition — not from current SaaS fashion. They should age well.

Each rule has:
- **ID** (`F1`, `F2`, …) — cite in narration when applying or evaluating.
- **Rule** — the statement with concrete numbers, not adjectives.
- **Why** — the perceptual / mathematical reason it holds.
- **Check** — how to verify, post-design (when applicable).

If a project intentionally deviates from a rule, declare the deviation in `personality.md` at the project root with the new value and reason. Anything not declared is a violation, not a choice.

These numbers are a v1 starting set, grounded in classical sources and Lookbook's existing token system. The `lookbook:calibrate` command (future) refines individual rules by measuring 20–30 reference screens per fundamental and updating the ranges with evidence.

---

## Typography

**F1. One primary UI family. Display face optional, for hero/marketing only. Never more than two families on a screen.**
*Why:* Each family adds cognitive switching cost. One family is a system; three is a collage.
*Check:* Count `font-family` declarations in computed styles of visible text — ≤2 distinct stacks.

**F2. Modular type scale only. Pick one ratio (1.2 minor third, 1.25 major third, or 1.333 perfect fourth) and stick to it. No off-scale sizes.**
*Why:* Mathematical relationships between sizes produce visual harmony; arbitrary sizes produce noise.
*Check:* All `font-size` values reduce to base × ratio^n.

**F3. Body text 15–17px desktop, 16px mobile. Line-height 1.5–1.6.**
*Why:* Calibrated to viewing distance and saccade length for sustained reading.
*Check:* Default paragraph computed `font-size` in `[15, 17]`, `line-height / font-size` in `[1.5, 1.6]`.

**F4. Heading line-height tightens as size grows: ~1.5 at body, ~1.25 at 24–32px, ~1.1 at 48px+.**
*Why:* Large text needs less leading because vertical rhythm is set by visual mass, not x-height.
*Check:* Headings ≥48px have `line-height ≤ 1.2`.

**F5. Line length 45–75 characters for prose. Never wider than 80; never narrower than 35.**
*Why:* Bringhurst's rule — the eye loses its place outside this band.
*Check:* Prose containers (`<p>`, article body) `max-width` resolves to ~45–75ch.

**F6. Two weights minimum (regular + medium/semibold for emphasis). Maximum four weights on a screen.**
*Why:* Weight is a hierarchy tool; more than four weights muddles emphasis instead of clarifying it.
*Check:* Distinct `font-weight` values used on the page ≤4.

**F7. Letter-spacing: tighten large display (−0.01 to −0.025em at 32px+); loosen small caps/eyebrows (+0.06 to +0.1em).**
*Why:* Optical compensation — large type looks loose at default tracking; small caps look crammed.

---

## Spacing

**F8. One base unit (4px or 8px). Every spacing value is an integer multiple. No 7px, no 13px, no 22px.**
*Why:* A single unit produces visual rhythm across the entire UI for free.
*Check:* Every `margin`, `padding`, `gap` resolves to `n × base`.

**F9. Spacing scale follows a geometric progression, not arithmetic. E.g. 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128.**
*Why:* Equal *visual* jumps require multiplicative steps, not additive. Linear scales feel cramped at the bottom and sparse at the top.

**F10. Component inner padding ≥ space-3 (12px) on all sides. Never crowd the edges.**
*Why:* Content needs breathing room from its container; flush-to-edge reads as broken.

**F11. Section padding (vertical between major page regions): 64–128px desktop, 32–64px mobile.**
*Why:* Sections need to feel like sections. Less than this reads as one continuous blob.
*Check:* Major region top/bottom padding in range.

**F12. Gap encodes relationship: related elements gap ≤ space-3 (12px), unrelated elements gap ≥ space-6 (24px). Gap is hierarchy.**
*Why:* The gestalt law of proximity — what's close belongs together. Equal gaps everywhere = no hierarchy.

---

## Hierarchy

**F13. Hierarchy comes from size, weight, color contrast, and position. Never from borders or boxes.**
*Why:* Borders are noise tax. If you need a border to separate two things, the spacing or contrast is wrong.

**F14. Maximum three levels of hierarchy per screen-region. More is noise.**
*Why:* Human working memory caps around 3–4 levels; more levels read as "everything is equally important," which is worse than no hierarchy.

**F15. Text contrast: primary ≥ 7:1 (AAA), secondary ≥ 4.5:1 (AA), muted/disabled ≥ 3:1. Never below 3:1.**
*Why:* WCAG perceptual thresholds — below 3:1 the text disappears for a meaningful fraction of users.
*Check:* Computed contrast ratios on all text against background.

**F16. One primary action per region. Secondary actions are visually subordinate (ghost/text, not equal-weight buttons).**
*Why:* Two primaries = no primary. The user can't tell what you want them to do.

---

## Color

**F17. One accent color. Primary actions, focus, key state — nothing else. Maximum 4–5 accent instances per screen.**
*Why:* Accent earns attention by scarcity. Sprinkled accents are decoration; concentrated accents are signal.
*Check:* Count visible accent-colored elements on a screen ≤5.

**F18. The neutral ramp (8–10 steps minimum) does ~80% of the work. Backgrounds, text, borders, dividers — all neutrals.**
*Why:* Color is rare, intentional. Neutrals carry the interface; color punctuates it.

**F19. Semantic colors (success / warning / danger / info) for *status only*. Never as decoration.**
*Why:* If green means "success" *and* "free plan" *and* "primary CTA," it means nothing.

**F20. Page background NEVER pure white (#fff) in light mode. Use off-white (#fafafa, #f5f5f5, or token equivalent). Cards on top are the pure tone.**
*Why:* Pure-white pages with pure-white cards leave nothing to separate them; an off-white shell lets cards pop without needing borders or shadows.
*Check:* `body` background ≠ `#ffffff`.

**F21. Borders ≤ 1px, low-contrast (neutral-200 range). Heavy or dark borders are a tell.**
*Why:* Borders should hint, not shout. A heavy border means the spacing or background isn't doing its job.

**F54. A fill color is not automatically a text color. Re-run F15 whenever a non-neutral (accent, brand, or semantic hue) is used for text or a meaning-bearing icon.** UI-component/graphic contrast (≥3:1) and text contrast (≥4.5:1) are different thresholds — a hue picked to read well as a fill routinely lands near 3:1 as text.
*Why:* Accent and brand hues are chosen for saturation and presence in fills; reused for type they silently fail F15. (Battle-tested: accent `#d97742` = 3.15:1 as text, green `#1f9d57` = 3.49:1 as text — both fine as fills, both failing as text.)
*Check:* Every non-neutral text or meaningful-icon color resolves to ≥4.5:1 against its background. Run it — don't eyeball: `node scripts/contrast.mjs "<fg>:<bg>:<label>" …` (exits non-zero on any failure).

**F55. Semantic status colors must pass F15 against the surface they sit on — including their own tint.** A green label on a light-green pill, amber on amber, red on red must each clear 4.5:1. Darken the text or deepen the tint until it does; same-hue text-on-tint is the default failure mode.
*Why:* A status tint and its same-hue text are close in luminance by construction, so tinted pills near-universally miss 4.5:1 even though they look fine. This is one of the most common shipped a11y bugs.
*Check:* Status label text contrast ≥4.5:1 measured against its pill/chip fill, not against the page.

**F66. Every filled control (button, selected chip, badge) pairs its fill with a label color that passes F15 against that fill. The accent must define a tonal step dark enough to carry white text — or the control uses dark ink on a light accent.** Don't assume the brand accent works as a button fill with white text; verify it.
*Why:* White-on-accent is the single most-shipped contrast bug. A mid-tone accent picked for vibrancy carries white text at only ~3:1 — it needs a 600/700 step for white-text fills, or dark ink on the light tint. (Battle-tested *twice*: the same white-on-`#d97742` CTA failed at 3.15:1 in two separate tests, even after F54/F55 existed — because the failing pair is *neutral text on a non-neutral fill*, which those rules don't cover.)
*Check:* Every filled control's label contrast ≥4.5:1 against its fill (≥3:1 only if the label is genuinely WCAG-large: ≥18.66px, or ≥24px regular).

---

## Alignment

**F22. Every element sits on the spacing grid AND a typographic baseline. No off-grid placements.**
*Why:* Implicit alignment is the difference between "made" and "thrown together."

**F23. Left-align text by default (in LTR). Center only for short isolated labels (≤4 words) or deliberate display moments.**
*Why:* Centered ragged-left blocks force the eye to relocate on every line — fatiguing for anything longer than a phrase.

**F24. Numeric columns right-align or use `font-variant-numeric: tabular-nums`. Currency aligns on the decimal.**
*Why:* The eye compares magnitudes by digit-column position; left-aligned numbers are unreadable in tables.

**F25. Optical alignment overrides mathematical when they conflict. (Icon optical centers; round letters extending past the cap-line.)**
*Why:* What's mathematically centered often looks off-center because human perception weights mass, not bounding boxes.

**F74. Section content widths come from a small, defined set of measures — not an arbitrary per-section number — and all share ONE alignment axis (a common centered container, or a common left edge).** A page needs at most two or three sanctioned widths: a default container (~1080–1200px) and a narrow prose/focal measure (~60–75ch, F5). Every section uses one of those; narrower measures **nest inside and align to** the default container's edge or center. Full-bleed backgrounds span edge to edge, but their inner content returns to the same set. Don't mix left-flush and centered strategies down the page.
*Why:* Consistency — not uniformity — is the goal. Two or three related widths on a shared axis read as a system; the page feels designed. *Arbitrary* per-section widths (760, then 1120, then 840) and flip-flopping between left-flush and centered make the content edges wander, which the eye reads as "assembled, not designed." It's fine for a prose section to be narrower than a feature grid — it is **not** fine for each to invent its own width off its own axis. (Battle-tested: my own marketing page used three unrelated widths and a left-flush hero against centered sections — a real alignment break the contrast/AP/copy sweeps all passed over.)
*Check:* List every section's content width — they reduce to ≤3 sanctioned measures, all on one axis. Trace the left (and right) content edge down the page: narrower sections sit *inside* the wider ones and align to a shared edge/center, never off to the side.

---

## Density

**F26. Density matches the work. Marketing / auth / onboarding: sparse. Dashboards / data tables: compact. Forms / settings: medium.**
*Why:* Wrong density is the #1 tell of generic AI-generated UI — a dashboard with marketing-page whitespace, or a marketing page with dashboard density.

**F27. Compact: 32–40px row height, 12–16px inner padding. Medium: 44–56px, 16–24px. Spacious: 64px+, 32px+.**
*Why:* Concrete bands so "compact" doesn't drift across designers/sessions.

**F28. Pick one density per surface and hold it. Mixing densities within a region is a tell.**
*Why:* A compact table next to a spacious form reads as two different products glued together.

---

## Responsive

**F50. Mobile-first reflow. Design the single narrow column first; wider viewports *add* columns and breathing room — they never reveal content hidden from mobile.** Everything reachable on desktop is reachable on mobile.
*Why:* Progressive enhancement starts from the hardest constraint and relaxes it. Content parity is an accessibility and SEO requirement, not a nicety — `display:none` below a breakpoint usually means either the content wasn't essential (cut it everywhere) or the layout failed (fix it).
*Check:* No element carrying content (not pure decoration) is `display:none` below a breakpoint without an equivalent affordance at that width.

**F51. Breakpoints derive from content, not device sizes. Add a breakpoint at the width where a rule breaks** — prose leaves the 45–75ch band (F5), a grid cell drops below its minimum legible width, or a row's columns collide. Never target iPhone/iPad pixel widths.
*Why:* Devices change every year; reading ergonomics don't. A layout pinned to 768px breaks on the next form factor; one pinned to "where the text gets too wide" never does.

**F52. Touch targets ≥ 44×44px (48×48 preferred), with ≥ 8px clear space between adjacent targets. Applies to any coarse-pointer / touch context, at every viewport width.**
*Why:* The adult fingerpad is ~45–57px wide; smaller targets get missed. Apple HIG (44pt) and Material (48dp) converged on the same human-factors number — it's measured, not platform fashion.
*Check:* Under `@media (pointer: coarse)`, every interactive element's hit area is ≥44px in both dimensions.

**F53. Type and spacing scale fluidly between breakpoints, anchored to the modular scale (F2 / F9) at each end. Use `clamp()` with min and max pinned to scale steps; let the viewport interpolate between them.** No fixed-px type that only jumps at breakpoints.
*Why:* A size that steps only at breakpoints is visibly too large just before the break and too small just after. Fluid interpolation holds proportion at every width; anchoring both ends to the scale keeps every intermediate value on-system.
*Check:* Heading `font-size` uses `clamp()`; its min and max both reduce to `base × ratio^n`.

---

## Motion

**F29. Default UI motion: 150–250ms. State change (hover/press): 100–150ms. Enter: 200–300ms. Exit: 150–200ms.**
*Why:* Below 100ms reads as instant (no feedback); above 300ms reads as slow. The band is psychophysical, not aesthetic.

**F30. Easing: `ease-out` for enter (decelerate into rest), `ease-in` for exit (accelerate away), `ease-in-out` for in-place transitions. Never `linear` for UI motion.**
*Why:* Linear motion looks mechanical because physical objects in the real world never move linearly.

**F31. `prefers-reduced-motion`: replace all transitions with instant or single-frame fade. Non-negotiable.**
*Why:* Motion-sensitive users get vertigo from non-essential animation. Accessibility, not preference.

---

## Texture

Texture is everything visual that isn't content: grain, pattern, gradient, material, atmosphere. Used well, it adds character and depth without competing. Used badly, it's the loudest tell of generic AI design.

**Families to draw from** (not exhaustive, but the operating set):
1. **Generative pattern** — film grain, halftone, crosshatch, contour lines, isometric/hex grids, scanlines, pinstripe, risograph offset, moiré, Truchet tiles.
2. **Material grain** — paper (cold-press, kraft), concrete, plaster, linen weave, brushed metal, marble.
3. **Type-as-texture** — repeated wordmark at low opacity, oversized background numerals, vertical text rails, marquee/ticker bands.
4. **Atmospheric light** — conic gradients, mesh/blob gradients, spotlight (radial from a focal point), vignettes, bloom around accents, color spill.
5. **Geometric devices** — concentric circles / target marks, sine waves, isolines, crop/registration marks, quadrant rules, wireframe.
6. **Cartographic** — contour maps, latitude lines, isobars (monotone).

**F35. Texture must do a job, not decorate.** Each instance must (a) establish character/genre, (b) separate a zone without needing a border, (c) add depth to a flat surface, (d) absorb negative space meaningfully, or (e) signal a surface metaphor (paper, fabric, metal). If none of those, delete it.
*Check:* For each visible texture instance, name the job in one phrase. If you can't, it's decoration.

**F36. Density gates texture.** Compact / data-dense surfaces (dashboards, tables, forms, settings): **no decorative texture** — it competes with content. Sparse surfaces (marketing, auth, empty states, hero, splash, 404): texture earns its keep. Medium density: one texture, atmospheric only.
*Why:* Texture is signal-cost. The denser the data, the less room there is to pay.

**F37. One texture per surface.** Two textures = collage, and collage must be intentional. Default to one. Atmospheric light counts as a texture; a conic gradient + a grain overlay is two.

**F38. Texture opacity bands.** Grain over content: 2–5%. Decorative pattern in negative space: up to ~15%. Atmosphere where no content overlays: up to ~40%. Above 40%, the texture *is* the surface — only valid for marketing hero, splash, or full-bleed empty states.
*Check:* All text on a textured surface still passes F15 contrast against the *darkest* point of the texture.

**F39. Texture color comes from existing tokens** — page neutrals, or the accent at low opacity. Never introduce a new color just to texture. (A "blue noise" overlay where the brand has no blue is a tell.)

**F40. Animated texture (drifting noise, moving blobs, ticker rails) stops or fades for `prefers-reduced-motion`.** Corollary of F31.
*Check:* `@media (prefers-reduced-motion: reduce)` cuts all texture animation to 0 or static.

**Where texture belongs by surface (default placement):**
- Hero / marketing background — yes, often atmospheric + light grain.
- Empty states / 404 / splash — yes, occupies negative space meaningfully.
- Auth card backplate — yes, single subtle pattern.
- Section transitions / zone separators — yes, sub-borders.
- Behind a single hero CTA — sometimes, spotlight only.
- Inside data-dense product UI (tables, dashboards, forms) — **almost never**.
- On cards stacked next to other cards — rarely (creates noise rhythm).
- As button or input fill — almost never (gimmicky).

---

## Iconography

**F41. One icon family per project.** Lucide, Tabler, Phosphor, Heroicons, Bootstrap, Carbon — pick one. Mixing families is a tell.
*Why:* each family has its own visual logic (stroke weight, corner radius, terminal shape). Two families on a screen reads as a Frankenstein set.
*Check:* every imported icon traces to one library.

**F42. Icon stroke weight matches body font weight.**
- Sans body 400 → 1.5–1.75px stroke.
- Sans body 500 → 1.75–2px stroke.
- Heavy display brands → 2–2.5px stroke.
*Why:* icons read as text-adjacent — they must visually match the type. Thin icons next to bold type (or vice versa) look unbalanced.

**F43. Icon size relative to text, not absolute.**
- Inline with body text: 1em (matches caps height).
- Button / nav affordance: 16–20px.
- Display moment (empty state, feature card): 32–48px.
- Hero / illustration icon: 64–96px.
*Why:* text-relative sizing keeps icons aligned to typography rhythm. 14px icon in 18px body looks broken.

**F44. Outline is default; filled is for state; color is for semantics only.**
- Outline icon = passive / default / decorative.
- Filled icon = selected / active / notification badge.
- Colored icon = status (success ✓ green, warning ⚠ amber, danger ✕ red).
- Never mix outline + filled for the same icon role in the same view (e.g. half the nav items filled, half outline).
*Why:* outline/filled is a state encoding; spending it on stylistic choices means you can't use it to communicate. Same logic as F19 for color.
*Check:* in a given view, the same icon (e.g. "user") is either always outline or always filled — never inconsistent.

---

## Imagery

**F45. One image style across the surface — ideally across the product.** Photography OR illustration OR 3D OR none. Mixing styles within a surface reads as undecided; mixing across the product is allowed *only* when the split is purposeful (e.g. illustration for empty states, photos for case studies).
*Why:* visual coherence — the brain trusts a system and distrusts a collage.
*Check:* every image on the surface is recognizably the same family.

**F46. Stock photography ages instantly.** Forbidden tells:
- Smiling-people-pointing-at-laptops.
- Abstract business handshakes.
- Models with too-perfect hair using the product.
- Generic startup-office shots.

Use instead: **real product UI in device frames**, **real customer photography**, **custom illustration**, or **no imagery**.
*Why:* stock photo is the #1 imagery tell of AI-generated / cheaply-built sites. It signals "we couldn't be bothered."

**F47. Image aspect ratios from a small fixed set.** Pick from: `1:1` · `4:3` · `16:9` · `3:2` · `21:9` (wide editorial). Use the *same ratio* for the same role across the surface (all feature thumbs 16:9, all avatars 1:1).
*Why:* aspect-ratio rhythm is visible even when image content varies; random ratios break the grid.

**F48. Decorative imagery uses the brand palette only.** Illustration: brand neutrals + accent, not the illustrator's default rainbow. Photography: duotone-treated or warmth-graded toward the brand neutral. Hero photos may be color-untouched only if the photo *is* the brand (e.g. founder portrait, real product).
*Why:* rogue palettes in imagery break F17 (one accent, ≤5 instances) silently. An illustration with 7 colors is 7 accent violations.

**F49. Imagery must do a job, just like texture (F35).**
Justifiable jobs: hero / product shot · feature illustration · empty-state mascot · customer photography for proof · contextual instruction (a screenshot showing where to click). "Image to fill space" — never. A surface with no imagery beats a surface with decorative imagery.
*Check:* for each image, name the job in one phrase. If you can't, delete it.

---

## Data visualization

Charts are not decoration — they're arguments made in ink. These rules come from Tufte (*The Visual Display of Quantitative Information*), Cleveland (graphical perception), and Few (*Show Me the Numbers*). They're the floor; `patterns/dashboard.md` (P-D-05/09/10) calibrates them per surface.

**F56. Maximize data-ink; erase chartjunk. Every mark must encode data or essential scaffolding — nothing else.** No 3D, no drop shadows on data marks, no decorative fills, no moiré, no redundant gridlines, no background images behind a plot.
*Why:* Tufte's data-ink ratio — ink spent on decoration is ink stolen from the data. Chartjunk lowers comprehension, never raises it.
*Check:* For every non-data mark (gridline, frame, fill), name its job. If it isn't axis, scale, or label, delete it.

**F57. Bars start at a zero baseline — always. A line or area chart showing *change* may use a non-zero baseline, but only if the axis is labeled so the truncation is visible.**
*Why:* A bar's meaning *is* its length; truncating the axis lies about the ratio between bars. A line encodes slope/trend, so a zoomed baseline is honest *if disclosed*.
*Check:* Bar value-axis minimum = 0. Any non-zero line/area baseline has a labeled axis showing it.

**F58. Rank by magnitude. Categories with no inherent order (not time, not a named sequence, not a scale) sort by value, descending.** Natural-order categories (months, sizes, stages) keep their order.
*Why:* An unordered bar chart left unsorted forces the eye to do the ranking the chart should have done. (Battle-tested: a "tells by category" bar chart left Component above Typography despite being shorter — a slip nothing else caught.)
*Check:* Unordered categorical bars are monotonic in length.

**F59. Axis ticks sit at uniform, "nice" intervals — multiples of 1, 2, or 5 × 10ⁿ. Never uneven or arbitrary steps.**
*Why:* Non-uniform ticks (90·87·85·82·80) distort the mental spacing between values and read as careless. Uniform ticks let the eye interpolate linearly.
*Check:* Consecutive axis tick deltas are equal and "nice."

**F60. Encode quantity by position and length first, area and angle last. Bar / line / dot for precise comparison; pie only for ≤4 parts of a whole; never bubble-area or angle for values that must be compared exactly.**
*Why:* Cleveland's ranking of graphical perception — humans judge position far more accurately than area or angle. A pie with 6 slices is unreadable; a bar of the same data is trivial.

**F61. Color in a chart encodes data *type*, not decoration. Categorical → distinct hues (≤6, then group into "other"). Sequential → one hue, light→dark. Diverging → two hues around a meaningful midpoint.** Never rainbow a sequential measure; never spend the brand accent on a single category's meaning.
*Why:* Color misused in charts reads as noise and breaks F17 silently — six "category" hues are six accent violations. The encoding must match the data's structure or it misleads.
*Check:* Number of distinct data hues ≤6; a sequential/quantitative measure uses a single-hue ramp.

**F62. Direct-label the data when series ≤ ~4; reach for a legend only when direct labels would collide.**
*Why:* A legend forces a round-trip — eye to key, back to line, match the color, repeat. A label on the line itself is read once. Legends are a last resort, not a default.

**F63. Every chart states scope and units: what is measured, over what period or population, in what unit.** "Revenue (GH₵), last 30 days, all branches" — not "Revenue."
*Why:* A number without scope is unreadable; the reader fills the gap with a wrong assumption. (Generalizes P-D-10 from the dashboard pattern to the floor.)
*Check:* Each chart has a one-line scope/unit caption.

**F64. Gridlines are scaffolding, not content: ≤1px, low-contrast neutral, behind the data — or dropped entirely in favor of direct point labels. Axis *labels*, however, carry meaning and still meet F15.**
*Why:* Heavy gridlines compete with the data line they're meant to support (F56). But muting the *labels* to match the gridlines is the opposite error — axis numbers are meaningful secondary text, not decoration. (Battle-tested: axis labels at `#9a938a` = 3.04:1 failed F15.)
*Check:* Gridline contrast is low; axis-label text contrast ≥4.5:1 (F15).

**F65. Sparklines are word-scale graphics: no axis, no gridlines, one hue, at most one end-marker, sized to sit inline with text.**
*Why:* Tufte's sparkline — a datawords device for trend-at-a-glance inside a sentence or a KPI tile. Adding axes or a legend defeats the form. (The one P-D-05 exception to the ≥240px chart-height rule.)

---

## Copy & microcopy

The words are part of the design. A form, an error, an empty state, a button — their copy carries as much load as their layout. These rules come from Nielsen Norman Group, Jarrett & Gaffney (*Forms that Work*), and the established voice-and-tone canon (Apple HIG, Mailchimp). They govern *what the text says*, where the rest of the file governs how it looks.

**F67. Sentence case for all UI text — labels, buttons, headings, menu items, table headers.** Not Title Case. ALL CAPS only for short eyebrows/overlines (≤1 line, with the F7 tracking).
*Why:* Sentence case reads measurably faster and is the modern default; Title-Casing every label is a dated tell. Reserve caps for the one typographic accent role.
*Check:* No multi-word UI string is Title-Cased; caps appear only on tracked eyebrows.

**F68. Buttons name the action with a verb — the label completes "I want to ___".** "Create audit", "Send invite", "Delete project" — never "Submit", "OK", "Yes", "Confirm" alone.
*Why:* A button labeled with its outcome removes the "what happens if I click this?" hesitation. Generic labels force the user to predict.

**F69. Error messages say what went wrong AND how to fix it, in plain language — no codes, no blame.** "Enter an email like name@company.com", not "Invalid input" or "Error 422".
*Why:* An error that only names the problem leaves the user stuck; the recovery path is the entire point of the message. (Battle-tested: a form's "Enter a valid https URL" names the problem but not the fix — the kind of copy nothing in the brain flagged before this rule.)

**F70. Cut filler. Help text earns its place by adding what the label can't carry — it never restates the label.** Drop "Please", "Kindly", "In order to", "Note that". A label "Repository URL" needs no helper reading "Enter the repository URL."
*Why:* Every redundant word is attention tax (P-F surface intent). Concise copy is read; padded copy is skipped.

**F71. One voice: address the user as "you", refer to the product as "we" or by name — and never mix.** Not "my account" in one place and "your account" in another.
*Why:* Pronoun drift makes a product feel assembled by committee. Consistency is a trust signal.

**F72. Numbers, dates, currency are human-readable and localized: thousands separators, currency symbol/unit, relative time where it aids scanning.** "1,284", "GH₵ 920.70", "2 days ago" — not "1284", "920.7", a raw timestamp.
*Why:* Raw machine values force the reader to parse; formatted values are read at a glance. (Pairs with F24 tabular alignment and F63 chart units.)

**F73. Tone matches the moment, and no jargon ever. Calm and factual in errors and destructive confirmations; warmer in empty states and success. Never jokey in an error; never expose system vocabulary** ("null", "param", "exception", DB field names) to the user.
*Why:* Tone is contextual trust — a quip in a payment failure reads as the product not taking the user's problem seriously. Jargon leaks the implementation and excludes the non-technical reader.

---

## Finishing

**F32. Every interactive atom ships: rest, hover, focus-visible, active, disabled. Missing any state = unfinished.**
*Why:* The unfinished states are where the design's craft becomes legible (or fails to).

**F33. Every data view ships: loading, empty, error, populated. Missing any = unfinished.**
*Why:* Empty/error states are where most products feel cheap. A polished empty state is worth ten polished happy paths.

**F34. Focus-visible rings: 2–3px ring, accent color, 2–3px offset from the element. Never invisible.**
*Why:* Keyboard users are first-class. An invisible focus state is an inaccessible product.

---

## When rules conflict — precedence

Rules collide. F13 says hierarchy never comes from borders, but a dense table genuinely needs a divider. F23 says left-align, but F25 says optical alignment can override it. A declared personality deviation says pure-white pages, but F20 forbids them. When two directives disagree, resolve **top-down** by tier — a higher tier always wins, and you may never break a higher tier to satisfy a lower one.

**Tier 1 — Accessibility & perception. Never yields, ever.**
`F15` contrast · `F31` reduced-motion · `F34` focus-visible · `F52` touch targets · `F3`/`F5` legibility (body size, line length). These protect whether the interface *works for a human at all*. No personality, pattern, brand spec, or aesthetic preference overrides them. You cannot declare away contrast.

**Tier 2 — Declared personality deviations.**
A specific fundamental, intentionally overridden in `personality.md` with a value and a reason (e.g. `F20: pure-white page — brand spec`). A declared deviation beats the default fundamental it names — that's the whole point of declaring it. But it is bounded: it overrides **only the one rule it names**, and it can never reach into Tier 1.

**Tier 3 — Fundamentals (the floor).**
Every undeclared `F`-rule. The default truth for anything Tiers 1–2 haven't spoken to.

**Tier 4 — Pattern calibrations.**
`patterns/<archetype>.md` *refines* fundamentals for a surface — it may tighten a range (a dashboard picking 32px rows within F27's compact band) but may never breach the fundamental it inherits from, nor any tier above.

**Tier 5 — Anti-pattern avoidance & stylistic preference.**
Dodging an `AP` tell, and personal taste. Lowest tier: you may **not** break a higher tier to avoid a tell. If avoiding AP5 (three equal cards) would force a contrast or legibility failure, the tell stays and you find a different escape. The signature move (the AP20 fix) lives here too — it must clear every tier above it.

**Within a tier, two tie-breakers:**
- **Optical over mathematical** — when a perceptual rule and a geometric one disagree, perception wins (this is `F25` generalized: what *looks* right beats what *measures* right).
- **Reading over decoration** — when two same-tier rules still conflict, the one protecting scanning/reading/comprehension beats the one protecting visual polish.

*Worked example:* dense table, F13 (no borders for hierarchy) vs. the real need to separate rows. F13 is Tier 3; legibility of the data is Tier 1 (F3/F5 spirit — the user must be able to parse rows). Tier 1 wins: add the lightest divider that restores scannability (a 1px neutral hairline per F21), and prefer the F13-honoring move first — zebra striping or spacing — escalating to a border only if those fail. The border is permitted *because* a Tier-1 concern forced it, not as a default.

---

## How to use this file

- **At the start of any UI task** — read this file in full. Keep rule IDs in mind while designing.
- **In narration** — cite rule IDs when applying or evaluating decisions: *"body 16px/1.55 [F3], section padding 96px [F11], primary action only on the right rail [F16]."* This makes the application auditable.
- **Post-design verification** — run through the `Check:` lines for measurable rules. Flag violations, or declare them in `personality.md` with reason. Then run the second sweep against `anti-patterns.md` — count the "looks like AI" tells and rework until under 3. Three checks always run explicitly, because they get skipped otherwise: (1) **compute** the contrast of every non-neutral text color and every status label against the surface it sits on, tints included (F15/F54/F55); (2) **state the responsive reflow** and run a coarse-pointer touch-target check (F50–F53), since a desktop-only frame can't prove them; (3) **trace the alignment spine** — list section content widths, confirm ≤3 sanctioned measures on one axis (F74); this hides from the other sweeps because each section looks fine in isolation.
- **Project personality** — the project's `personality.md` lists declared deviations (e.g. `F20: page background pure white because brand spec`) plus the signature move (one pick from gallery → Variation). Both are intentional, both are bounded.
- **When two rules disagree** — resolve top-down by the precedence tiers above. Accessibility never yields; declared deviations override only the rule they name; you never break a higher tier to satisfy a lower one. Name the tiers in narration when a conflict is resolved.

## What lives where

- **`fundamentals.md`** (this file) — the rules. Loaded every design.
- **`anti-patterns.md`** — the "looks like AI" tells (`AP1`…). A second verification mode: catches technically-rule-compliant-but-generic results. Loaded for the post-design sweep.
- **`patterns/<archetype>.md`** — per-surface calibrations (dashboard, form, marketing, auth, detail-page). Loaded once the archetype is identified. Inherit from fundamentals; add surface-specific numbers (e.g. dashboard tile padding, form field height).
- **`personality.md`** (per project, at project root) — declared deviations + signature move.
- **`evidence/<rule-id>.md`** — receipts for each rule (source screens, measurements, reasoning). Loaded only by `lookbook:calibrate` when refining a rule. Keeps design-time context lean.
