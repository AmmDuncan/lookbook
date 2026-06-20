# The Design Brain

> A working manual for producing world-class interface design. Opinionated by intent — strong defaults beat neutral advice. When in doubt, follow the rule; break it only with a reason you can name.

How to use this (for Claude Code / any agent): Treat this as your design operating system. Before generating any UI, load the relevant section. When a decision is ambiguous, default to the rule stated here. Every numeric spec (type scale, spacing, motion timing, color token) is meant to be copied into real tokens, not paraphrased. The fastest way to look machine-generated is to ignore the specifics and reach for the obvious — §11 (Avoid AI Slop) exists to stop exactly that.

Covers: web apps & SaaS dashboards, marketing & landing pages, design systems.

---

## 0. The five laws

Everything below is downstream of these. If a design fails, it usually broke one of these first.

- **Clarity over cleverness.** The user should never wonder what something is or what will happen when they touch it. A design that needs explaining has already failed.
- **Hierarchy is the whole job.** Every screen answers, instantly: what is this, what matters most, what do I do next. If three things shout, nothing is heard. Decide what's loudest before you style anything.
- **Remove until it breaks, then add one thing back.** The default answer to "should I add this?" is no. Subtraction is the highest-leverage design move. (Rams: "Good design is as little design as possible.")
- **Consistency is a feature.** A button behaves the same everywhere. A system that's 80% consistent feels broken; one that's 100% consistent feels invisible — which is the goal.
- **Details are not details.** The 1px misalignment, the easing that's slightly wrong, the label that's almost right — these are the design. Craft is the sum of decisions nobody notices individually and everybody feels collectively.

> The mark of slop is arbitrariness — values that could have been anything. The mark of craft is intentionality — every value is the answer to a question. Be able to defend any number on the screen.

---

## 1. Operating philosophy

You are not choosing one school. You are blending four lineages, each contributing a discipline:

- **Swiss / typographic minimalism (Müller-Brockmann).** The grid is law. Type is the design. Whitespace is an active material, not leftover. Alignment and ratio over decoration. → Your structural backbone.
- **Functional systematic (Dieter Rams).** Honest, unobtrusive, long-lasting, thorough to the last detail. Design serves the product; the product serves the user. → Your conscience — it tells you what to remove.
- **Editorial / magazine.** Contrast of scale, confident headlines, a real reading rhythm, imagery that earns its space. Pages have a voice. → Your sense of drama and pacing.
- **Refined product-craft (Linear, Stripe, Vercel).** Restraint plus precision. Tasteful motion, immaculate spacing, dark surfaces done right, microcopy that respects the reader. → Your finish and modernity.

How they combine in practice: Swiss gives you the grid and type discipline. Rams keeps you honest about what to cut. Editorial gives you the courage to make one thing huge and one thing quiet. Product-craft supplies the polish: the 200ms ease-out, the 1px hairline border, the focus ring that's actually visible.

The taste test for any screen: Could this exist in 2010? If it's full of gradients, glossy buttons, and drop shadows — no taste. Could this exist in any decade? If it's pure Helvetica-on-white with zero personality — no courage. World-class lives in the tension: timeless structure, contemporary finish, one moment of nerve.

---

## 2. The process — zero to hero

Design is a sequence, not a vibe. Follow the order. Most bad UI comes from styling before structuring.

**Phase 1 — Understand (no pixels yet)**
- Name the one job. What is the single most important thing a user does here? Write it in one sentence. Everything serves it.
- Identify the audience and context. Power user on a 27" monitor vs. anxious first-timer on a phone in line at a store are opposite designs.
- Inventory the content. Real content, real lengths, real edge cases (empty, one item, 10,000 items, error, loading, longest possible string). Design for the worst case, not the demo case.
- Define the emotional target. Calm and trustworthy? Fast and dense? Premium and quiet? Pick adjectives — they decide type, color, motion later.

**Phase 2 — Structure (still no color, no style)**
- Hierarchy first. Rank everything on the screen 1→N by importance. There is exactly one #1. This ranking is your layout.
- Wireframe in grayscale. Boxes and real text only. If it doesn't work in gray, color won't save it. (See §6 — establish hierarchy with space and size before you ever reach for color.)
- Choose the layout archetype. Single-column reading, sidebar + canvas, dashboard grid, split-screen, centered card. Pick deliberately; don't drift into one.
- Set the grid. Columns, gutters, margins, max-width. Commit before placing anything.

**Phase 3 — Systematize (define the tokens)**
- Establish the spacing scale, type scale, color tokens, radius/shadow set before styling components. Design the system, then apply it. Never invent a one-off value mid-component.

**Phase 4 — Compose (apply the system)**
- Style with your tokens only. If you need a value the system doesn't have, the system is wrong — fix the system, don't patch the component.
- Build the real states: default, hover, active, focus, disabled, loading, empty, error, selected. A component is not done until all states exist.

**Phase 5 — Refine (the part that separates good from great)**
- Squint test. Blur your eyes (or the screen). The hierarchy should still read. If everything turns to gray mush, contrast is too low.
- Alignment audit. Everything aligns to something. Hunt for the 1px drift, the odd gutter, the optical misalignment.
- The 10% polish pass: focus rings, hover transitions, empty states, loading skeletons, error copy, keyboard nav, reduced-motion. This is 10% of the work and 90% of the perceived quality.
- Cut one more thing. There is always one more element that can go.

**Phase 6 — Pre-ship checklist → §13.**

> Decision sequence cheat code: Job → Hierarchy → Grid → Tokens → Components → States → Polish. Never skip backwards into styling.

---

## 3. Typography

Type is 90% of interface design. Get this right and the rest follows. Most "ugly" UI is just bad typography wearing a color problem's clothes.

**Rules**
- One typeface, used well, beats two used timidly. A single great family with a real weight range (400/500/600/700) outperforms a clever pairing 90% of the time. If you pair: one display/serif + one neutral sans, or one sans + one mono. Never two sans that are nearly the same.
- Limit to 2 families, ~4–5 sizes per screen. More than that is noise.
- Size creates hierarchy; weight refines it; color/opacity finishes it. In that order. Reach for size first, not bold-everything.
- Set a real type scale (see below) and use only its steps. No arbitrary 17px.
- Line length 60–75 characters for body reading (max-width: 65ch). Dashboards/labels can be shorter.
- Line-height inverse to size. Body ~1.5–1.6; large headings 1.05–1.2; the bigger the type, the tighter the leading.
- Letter-spacing inverse to size too. Large display: tighten slightly (-0.02em to -0.03em). Body: 0. All-caps labels: open up (+0.04em to +0.08em).
- Numbers in tables/dashboards: use `font-variant-numeric: tabular-nums` so columns align.
- Never center long text. Center only short headlines (≤2 lines). Body copy is left-aligned (or start-aligned).
- `text-wrap: balance` on headlines, `text-wrap: pretty` on body.

**A type scale (modular, ratio ≈ 1.25 — "major third")**
Base body = 16px. Scale up by ×1.25, down by /1.125. Round to whole pixels.

| Token | px | rem | Use |
|---|---|---|---|
| text-xs | 12 | 0.75 | captions, legal, meta |
| text-sm | 14 | 0.875 | secondary text, dense UI labels |
| text-base | 16 | 1.0 | body — the default, never go below this for reading |
| text-lg | 20 | 1.25 | lead paragraphs, large labels |
| text-xl | 25 | 1.5625 | card titles, small headings |
| text-2xl | 31 | 1.9375 | section headings |
| text-3xl | 39 | 2.4375 | page titles |
| text-4xl | 49 | 3.0625 | hero (apps) |
| text-5xl | 61 | 3.8125 | hero (marketing) |
| text-6xl | 76 | 4.75 | display / marketing statement |

> For dense dashboards, shift the base mentally: 14px is often the workhorse body and 13px the dense-label size — but never below 12px for anything a user reads. For marketing, go bigger and bolder: heroes at 60–96px are normal and good.

**Choosing typefaces (with taste)**
- Safe-but-excellent neutral sans: a clean grotesque with personality — Hanken Grotesk, Archivo, Söhne (licensed), ABC Diatype (licensed), Geist.
- Editorial serif (display or body): Newsreader, Source Serif 4, Spectral, Fraunces (use carefully — overexposed).
- Mono (code, data, accents): JetBrains Mono, IBM Plex Mono, Geist Mono, Berkeley Mono (licensed).
- AVOID as defaults (the AI-slop tells, see §11): Inter (fine, but the single biggest "an AI made this" signal — only use with strong intent), Roboto, Arial/Helvetica-by-default, Montserrat, Poppins, Open Sans, Lato. They're not bad fonts; they're invisible fonts that signal "no decision was made."

> The single highest-leverage taste move in all of UI: pick a typeface with a point of view and set it impeccably. A confident, slightly unexpected typeface instantly separates your work from the template pile.

---

## 4. Color

Color is the easiest place to look amateur and the easiest place to fake expertise: use less than you think. The most sophisticated palettes are nearly monochrome with one decisive accent.

**Architecture (build tokens in three tiers)**
- Primitives — the raw ramp. e.g. gray-50 … gray-950, brand-50 … brand-950. 11 steps each (50, 100, 200…900, 950).
- Semantic tokens — what they mean, mapped to primitives. `bg, bg-subtle, surface, border, border-strong, text, text-muted, text-subtle, primary, primary-hover, danger, success, warning, focus-ring`. Components reference only these, never primitives directly.
- Component tokens (optional, large systems) — `button-bg, card-border`, etc., mapped to semantic.

This is what makes dark mode a remap of ~15 semantic tokens, not a rewrite.

**The 60-30-10 rule**
~60% dominant neutral (background/surfaces), ~30% secondary (text, borders, secondary surfaces), ~10% accent (primary actions, key highlights). If accent is everywhere, accent is nowhere.

**Rules**
- Neutrals carry the design; accent punctuates it. Most of the screen is grays. The brand color appears on the primary button, active states, key links — and almost nowhere else.
- Tint your grays. Pure #808080 is dead. Shift neutrals slightly toward your brand hue (warm grays for warm brands, cool/blue-gray for cool brands). It makes the whole UI feel considered.
- Define color in OKLCH, not hex, when generating ramps — it gives perceptually even steps and predictable lightness. `oklch(L C H)`. Hold H constant, step L evenly, taper C at the extremes.
- Don't signal with color alone (accessibility): pair color with icon/text. Red + "Error" + icon, not just red.
- Semantic colors are functional, not decorative: success green, danger red, warning amber, info blue. Don't use them for vibes.
- One accent is plenty. Two max (a primary + a rare secondary). A rainbow UI is a slop tell.

**Contrast (non-negotiable — WCAG)**
- Body text vs background: ≥ 4.5:1. Large text (≥24px or 19px bold) and UI components/borders: ≥ 3:1.
- Don't put body text on busy images without a scrim/overlay.
- Disabled ≠ invisible: keep it perceivable.

**Dark mode (do it right or don't ship it)**
- Not pure black. Base around #0A0A0B–#121214. Pure #000 makes shadows impossible and causes halation on OLED.
- Elevation = lighter, not bigger shadow. In dark UI, higher surfaces get lighter (raise L), since shadows barely read on dark.
- Desaturate and brighten accents for dark: a color that pops on white often vibrates on black. Lower C, raise L.
- Reduce pure-white text: body text at ~oklch(0.92 …) / #E8E8E8, not #FFF, to cut glare. Reserve true white for emphasis.

**A neutral ramp to start from (cool gray, OKLCH-even)**
50 #FAFAFA · 100 #F4F4F5 · 200 #E4E4E7 · 300 #D4D4D8 · 400 #A1A1AA · 500 #71717A · 600 #52525B · 700 #3F3F46 · 800 #27272A · 900 #18181B · 950 #09090B

---

## 5. Space & layout

Spacing is the invisible skeleton. Inconsistent spacing is the #1 reason a design "feels off" even when the user can't say why.

**The spacing scale (4px base, the only values you may use)**
0 · 2 · 4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 128
Every margin, padding, and gap is one of these. No 13px, no 30px. This single discipline does more for "looks professional" than almost anything else.

**Rules**
- Relationship through proximity. Related things sit close; unrelated things get air. The gap between groups must be visibly larger than the gap within a group (e.g. 32 between sections, 8–12 within). This one rule creates legible structure for free.
- Space scales with importance and screen size. A hero section breathes (96–128 vertical); a dense table row is tight (8–12). Marketing pages use 2–3× the whitespace of apps.
- Use gap, not margins, for groups. Flex/grid + gap for any row/stack/grid of siblings. It survives reordering and is explicit. Reserve margins for one-off separation.
- Pad containers generously, then hold the line. A card with 24–32px padding reads as premium; 8px reads as cramped. Pick the padding for a container type and use it everywhere that type appears.
- Vertical rhythm: prefer consistent vertical spacing steps so things sit on an invisible baseline grid.
- Optical > mathematical. Sometimes equal numbers look unequal (icons next to text, punctuation, caps). Trust your eye and nudge — but only after the math is right.

**The grid**
- 12-column is the versatile default (divisible by 2/3/4/6). 16 for complex dashboards. 4–6 for simple/mobile.
- Set max content width: reading/marketing ~1100–1280px centered with ≥24px side margins; app shells can go full-width with a max on the content region.
- Gutters from the spacing scale (16/24/32). Margins ≥ gutters.
- Break the grid intentionally, rarely, for emphasis — a full-bleed image, an oversized number. Deliberate, not accidental.

**Density**
- Marketing/landing: low density, big type, huge whitespace. Generosity signals confidence and premium.
- SaaS app: medium density. Comfortable but efficient.
- Power dashboard / data tool: high density. Tight rows, 13–14px text, but still on the spacing scale — dense ≠ sloppy.

---

## 6. Depth, borders, radius, shadow

Modern depth is subtle. The era of heavy drop shadows and skeuomorphic bevels is over. Depth should whisper.

**Borders & separation — prefer over shadows**
- A 1px hairline border (border-subtle, low-contrast) is the most underrated tool in modern UI. Use it to separate surfaces before reaching for a shadow.
- Borders at 1px. For emphasis, raise contrast, not thickness. 2px borders read as "selected/focus," not decoration.
- Dividers: low-contrast hairlines, generous space around them. Often a little extra space removes the need for a divider at all — try that first.

**Radius — pick a system and commit**
- Define a radius scale: sm 4–6px · md 8–10px · lg 12–16px · xl 20–24px · full 9999px.
- Be consistent: one radius family per product. Mixing sharp and very-round reads as careless.
- Nested radius rule: inner radius = outer radius − padding. A 16px-radius card with 8px padding wants ~8px inner radius, or the corners look wrong.
- Sharp (0–4px) reads serious/editorial/technical. Soft (12–16px) reads friendly/consumer. Pill (full) for tags/small buttons. Pick for the brand.

**Shadows — layered and soft, or not at all**
- Tint shadows toward the brand/cool, not pure black. Pure-black shadows look muddy.
- Layer two shadows for realism: a tight ambient one + a softer, larger one. Single harsh shadows look 2008.
- A usable elevation scale (light mode):
  - xs: `0 1px 2px rgba(16,24,40,.06)`
  - sm: `0 1px 3px rgba(16,24,40,.10), 0 1px 2px rgba(16,24,40,.06)`
  - md: `0 4px 8px -2px rgba(16,24,40,.10), 0 2px 4px -2px rgba(16,24,40,.06)`
  - lg: `0 12px 16px -4px rgba(16,24,40,.08), 0 4px 6px -2px rgba(16,24,40,.03)`
  - xl: `0 20px 24px -4px rgba(16,24,40,.08), 0 8px 8px -4px rgba(16,24,40,.03)`
- Shadow = elevation, and elevation = meaning. Only things that float (menus, popovers, modals, dragged items) get real shadows. Resting cards often need only a border.
- In dark mode, shadows barely show — use lighter surfaces for elevation instead (§4).

---

## 7. Motion

Motion is punctuation, not prose. Its job is to explain change — where did this come from, where did it go — not to entertain. Great motion is felt, not noticed.

**Timings**
- Micro (hover, toggle, button press): 100–150ms.
- Standard (dropdowns, tooltips, small reveals): 150–250ms.
- Larger (modals, drawers, page/section transitions): 250–400ms.
- Over ~400ms feels slow for UI. Reserve longer only for large, deliberate, full-screen moments.

**Easing**
- Enter: ease-out (`cubic-bezier(0.16, 1, 0.3, 1)` for a crisp decelerate). Things arrive quickly then settle.
- Exit: ease-in (accelerate away), and exits should be faster than enters (~0.7×).
- Move/resize on screen: ease-in-out.
- Never linear except for continuous things (spinners, progress, marquee).
- Spring for playful/physical interfaces (drag, bounce) — but springs that overshoot a lot read as toy-like; keep damping high for product UI.

**Rules**
- Animate cheap properties: transform and opacity only (GPU-friendly). Avoid animating width/height/top/left (layout thrash) — use `transform: scale/translate`.
- Motion has direction and origin. A menu opens from the button that triggered it. A drawer slides from its edge. Things don't teleport or fade in from nowhere if they have a physical source.
- Stagger lists by 20–50ms per item for an elegant cascade — but cap total so it never feels slow.
- Entrance animations: make the visible end-state the base style; animate from hidden. So no-JS, print, and reduced-motion show content, not a blank pre-animation state.
- Respect `prefers-reduced-motion`. Gate non-essential motion behind `@media (prefers-reduced-motion: no-preference)`. Provide instant/opacity-only fallbacks.
- No infinite decorative loops in product UI (pulsing glows, perpetual float). They distract and signal "template." Loaders are the exception.
- Hover transitions are the cheapest polish. Every interactive element gets a 100–150ms transition on its hover/active state. Instant state changes feel broken.

---

## 8. Components — conventions

A component is a contract. Same input, same behavior, everywhere. Build the system, not the screen.

**Universal: every interactive component needs all of these states**
default · hover · active/pressed · focus-visible · disabled · loading · (and where relevant) selected · error. It is not done until every state exists. Missing states are the most common "looks unfinished" tell.

**Focus**
Always visible focus for keyboard users: a 2px ring with offset (`outline: 2px solid var(--focus-ring); outline-offset: 2px`), high-contrast. Never `outline: none` without a replacement. This is both accessibility and craft.

**Buttons**
- Hierarchy of emphasis: primary (filled, brand — one per view ideally) → secondary (outline/tinted) → tertiary/ghost (text only) → destructive (filled red, used sparingly, often with confirm).
- Comfortable height: 36–44px (44px = mobile touch min). Horizontal padding ≥ 1.5× vertical.
- Label is a verb: "Save changes," not "OK." Sentence case. Never a vague "Submit."
- Loading: show a spinner in place, keep the width stable, disable re-clicks.

**Forms (the highest-stakes, most-botched surface)**
- Label every field, always. Placeholder is not a label (it vanishes, fails a11y, kills recall). Labels sit above the field (fastest to scan).
- Show format/help text before the user errors, not only after.
- Inline validation on blur, not on every keystroke; success and error states both visible.
- Error messages are specific and kind: "Enter a valid email like name@site.com," not "Invalid input." Place errors adjacent to the field.
- Group related fields; use the spacing scale to separate groups. One column beats two for most forms (faster completion).
- Touch targets ≥ 44px; inputs comfortably tall (40–48px).
- Disable the submit only when truly invalid; otherwise let them submit and show errors (less frustrating).

**Cards**
- A card is a container with a job — don't card everything (the "everything in a box" look is a slop tell). Use a card when content is a distinct, repeatable unit.
- Consistent internal padding (16–24px), consistent radius, hairline border or subtle shadow — not both heavy.

**Tables / data (dashboards)**
- Right-align numbers, left-align text, tabular-nums. Generous row height (40–52px) or deliberately dense (32–36px) — pick one.
- Sticky header. Zebra striping is optional and often unnecessary if row spacing is good — try hairline row dividers first.
- Empty, loading (skeleton), and error states for every data view.

**Empty states**
Never a blank void. Every empty state: a one-line explanation + the primary action to fill it. This is where good products show their care.

**Navigation**
The user always knows where they are (clear active state) and how to get back. Active nav item gets a distinct, unmistakable treatment.

**Icons**
One icon set, one stroke width, consistent sizing (commonly 20 or 24px). Mixing icon styles is an instant tell. Icons support labels; they rarely replace them.

---

## 9. Content & microcopy

Words are UI. The fastest quality upgrade to most interfaces is rewriting the text. Design the words with the same rigor as the pixels.

- Be specific and human. "We couldn't reach the server. Try again in a moment." beats "Error 500."
- Lead with the user's goal, not the system's. "Get your report" > "Submit request."
- Verbs on buttons, nouns/labels for things. Match the user's mental model and vocabulary, not internal jargon.
- Sentence case for almost everything (buttons, labels, headings, menus). Title Case reads dated and corporate. ALL CAPS only for small eyebrow labels (with letter-spacing).
- Concision: cut every word that doesn't earn its place. Then cut one more. Microcopy is where verbosity hides.
- Tone matches the moment. Playful onboarding, calm errors. Never joke during a failure or a destructive confirm.
- Numbers and dates: format for humans ("2 days ago," "$1,200"), localize, use tabular-nums where they align.
- Empty states and errors are copywriting opportunities, not afterthoughts — they're where users are most lost.

---

## 10. Accessibility (this is craft, not compliance)

Accessible design is just good design with the edge cases respected. It overlaps almost entirely with quality.

- Contrast: body ≥ 4.5:1, large text & UI/borders ≥ 3:1 (§4).
- Keyboard: everything operable without a mouse; visible focus everywhere; logical tab order; no traps.
- Semantics: real HTML elements (`<button>`, `<nav>`, `<h1–h6>` in order, `<label>` tied to inputs). ARIA only to fill gaps, never as a substitute for semantics.
- Don't rely on color alone to convey meaning (§4).
- Targets ≥ 44×44px on touch.
- Motion: honor `prefers-reduced-motion` (§7).
- Text: resizable to 200% without breaking layout; never disable zoom; use rem/em for type.
- Alt text on meaningful images; empty alt on decorative ones.
- Don't trap meaning in placeholders (§8 forms).

---

## 11. Avoid AI slop ⚠️ (read this twice)

This is the section that decides whether your work looks designed or generated. Slop is the aggregate of unmade decisions. Each tell below is a place where the obvious choice was taken instead of the right one.

**The tells (do NOT do these)**
- ❌ Gradient soup. Purple→blue/pink→orange background gradients, gradient text on headlines, gradient buttons for no reason. Modern, confident UI is mostly flat color with intent. (One subtle, purposeful gradient can be fine — a wall of them is the #1 tell.)
- ❌ Default Inter on everything. It's the uniform of generated UI. Either choose a typeface with a point of view, or use Inter so deliberately and well that it's clearly a choice (tight tracking, real scale).
- ❌ The rounded-card-with-left-border-accent. A box, border-radius: 12px, a colored 4px left border, an emoji, a heading, two lines of gray text. The single most generated-looking component in existence. Avoid the template.
- ❌ Emoji as icons / as decoration in serious product UI (🚀✨🎉🔥). Use a real icon set. Emoji only if the brand genuinely is playful and it's intentional.
- ❌ Everything in a box. Nesting every element in bordered, shadowed, rounded cards. Most content needs space around it, not a container. Whitespace separates better than borders.
- ❌ Centered everything. Centered headings, centered body, centered three-column "features," all stacked. Editorial, left-aligned, asymmetric layouts read as designed.
- ❌ The three-icon feature row. Three (or four) identical centered cards, each a circle-icon + bold title + gray paragraph. The most templated marketing block on Earth. If you must, give them real differentiation, asymmetry, or scale contrast.
- ❌ Glassmorphism / heavy blur everywhere, neon glows, drop shadows on everything, perpetual floating/pulsing animations.
- ❌ Arbitrary values: padding: 13px, font-size: 17px, #3A7BD5 invented on the spot. Everything snaps to a scale (§3, §5).
- ❌ Fake data that screams fake: "John Doe," "Lorem ipsum," "Company Name," obviously-placeholder avatars. Use realistic, specific content (or ask for the real content).
- ❌ Rainbow semantic color used decoratively; six accent colors; tags in every hue.
- ❌ Dead-center hero + subhead + two buttons + dashboard screenshot, every single time. It's a fine pattern — but if it's your only move, it's a tell.
- ❌ **Status cosplay** — a colored dot beside an ALL-CAPS, letter-spaced, mono micro-label implying a "live / real-time / technical" state that isn't real: `● LIVE`, `● streaming`, a `· live` eyebrow on a static number, `FRONTEND ENGINEER · ACCRA / REMOTE` in tracked mono caps with middots. It's status *theatre* — the dot signals a channel that doesn't exist, and mono+tracked-caps+middots is a costume carrying zero information. One of the most recognizable generated-UI signatures, and it slips past a generous eye precisely because it *feels* polished. A live indicator is legitimate **only** for genuinely live, changing state (a real event stream, a deploy building, a toggle the person maintains) — then one quiet instance. For a role/location/section tag, use plain treated type (a weight, a size, a tonal color, a real word). Mono is for things that are literally code or data, never for cosplaying technical-ness. *(This is the tell a real designer's one glance caught after every self-judged test rated it "production-grade" — the reason this brain is validated by reproduction, not self-grading.)*
- ❌ **Redundant status encoding.** A red-tinted, red-iconed, red-headed alert does not *also* need a red left edge. Once status is carried once (a tint, an icon, a word), every extra carrier is noise. "But it encodes severity" is a loophole when severity already shows three other ways — a colored edge earns its place only as the *sole or primary* carrier (a status accent on an otherwise-neutral row), never as default card chrome.
- ❌ **Frozen-composition "components" and fake variety.** A "component" that bakes in an *arrangement* (a card that is permanently "hero number + exactly four stats in a row") homogenizes every screen that uses it. And a recipe menu padded with options that differ only by a card border or density (boxed vs bare) is cosmetic variety, not real range. Keep the *treatment* reusable (how a thing looks = coherence); let the *arrangement* vary (where things sit = variety). Real variety is elements in different places, not the same shape boxed or unboxed.
- ❌ **Deceptive ("dark") patterns** — confirmshaming ("No thanks, I like paying full price"), fake urgency/scarcity (reset-on-reload countdowns, invented "1,200 viewing", untrue "only 2 left"), against-interest preselected options, a roach-motel exit (one-click in, buried multi-step cancel), trick-question double-negatives. *Distinct from the other tells:* these aren't "looks generated," they're **dishonest to the user** — and increasingly **unlawful** (FTC Epic $245M; EU TikTok €345M; DSA/Data Act). The full taxonomy, the five-test gate, and the **production-scope carve-out** (placeholder counts in a *mockup/prototype* are fine — the line is deceiving a *real user at ship time*) live in `patterns/engagement.md` **P-EN-10/P-EN-11**. Healthy engagement (real progress, honest streaks, signal notifications) is the recommended other half of that file.

**The fixes (DO these instead)**
- ✅ Make one decision loud. One oversized headline, one strong accent, one hero image — and keep everything else quiet. Contrast of scale is the antidote to generic.
- ✅ Asymmetry and a real grid. Left-align, offset, let things breathe unevenly with intent. Symmetry is the safe, generic default.
- ✅ Flat color, tinted neutrals, one accent (§4). Confidence reads as restraint.
- ✅ A typeface with a point of view, set impeccably (§3).
- ✅ Whitespace instead of borders. Separate with space; reach for a hairline only when space isn't enough; reach for a shadow only when it floats.
- ✅ Specific, real content at real lengths and real edge cases.
- ✅ One signature moment per screen — a detail of craft (a beautiful empty state, a perfect hover, an unexpected but tasteful layout) — and restraint everywhere else.

> The meta-rule: AI slop is what you get when every choice is the most probable choice. Design is choosing the right choice. For at least one decision per screen, deliberately reject the obvious option and justify the replacement.

---

## 12. Domain playbooks

Same principles, different dials. Here's how to tune them.

**A) SaaS apps & dashboards**
Density medium-high; clarity absolute. The user is here to work, repeatedly. Speed and legibility over delight.
- App shell: persistent left nav (or top bar for shallow apps) + main canvas + optional right context panel. Clear active state in nav.
- Type: workhorse body often 14px; tabular numbers everywhere data aligns; restrained scale.
- Color: very neutral; accent reserved for primary actions and active/selected states. Status colors functional only.
- Data: every table/chart needs empty + loading (skeletons) + error states. Don't fake-load; design the wait.
- Depth: mostly hairline borders; shadows only for overlays (menus, modals, popovers).
- Motion: fast and minimal (100–200ms). No decoration. Optimistic UI where possible.
- Killer details: keyboard shortcuts (and a ? cheat-sheet), command palette (⌘K), bulk actions, sensible defaults, undo over confirm. These signal a tool built for pros.

**B) Marketing & landing pages**
Density low; drama high. This page sells. It should be confident, spacious, and have a clear narrative top-to-bottom.
- Hierarchy: one dominant headline (clear value prop in human words, not buzzwords), one primary CTA repeated down the page. Each section makes one point.
- Type: big and expressive — heroes 60–96px, editorial pairing, real scale contrast. This is where typographic courage pays off.
- Whitespace: 2–3× an app. Generous vertical rhythm (96–160px between major sections).
- Imagery earns its place: real product UI, real photography, or considered illustration — never generic stock or decorative blobs. Use placeholders and request real assets rather than faking it.
- Motion: tasteful scroll-reveal (subtle, fast, once — never re-trigger or bounce), maybe one signature hero moment. Respect reduced-motion.
- Avoid the slop stack (§11): not three-centered-feature-cards + gradient hero + everything boxed. Vary section layouts: alternate image sides, mix full-bleed with contained, change rhythm.
- Structure that works: Hero (value prop + CTA) → social proof (logos) → problem/solution → features (differentiated, not 3 identical cards) → deeper proof (testimonial/metrics/case) → pricing → FAQ → final CTA. Each section a different layout.

**C) Design systems & component libraries**
You're designing the rules, not a screen. Consistency, completeness, and clear naming are the product.
- Token-first (§4 architecture): primitives → semantic → component. Everything references tokens. This is what makes theming/dark mode trivial.
- Name by role, not value: `--color-text-muted`, not `--color-gray-500`. `space-4`, not `margin-medium`. Names should survive a redesign.
- Document every component's states and props, with do/don't examples and the why. A component without docs isn't done.
- Build the primitives first (color, type, space, radius, shadow, motion tokens), then atoms (button, input, badge), then molecules (field, card, menu), then organisms.
- Accessibility baked into components, not bolted on: focus states, ARIA, keyboard handling live inside the component so every consumer gets it free.
- Composability over configuration: small pieces that combine beat one component with 40 props.
- Version and changelog like code. A design system is software.

---

## 13. The pre-ship checklist

Run this before calling anything done. If you can't tick it, it's not finished.

**Structure & hierarchy**
- One clear #1 element per screen; the squint test passes (hierarchy survives blur).
- Everything aligns to the grid; no 1px drift; gutters/margins consistent.
- Grouping reads via spacing (between-group gap > within-group gap).

**Type**
- ≤2 families, ≤5 sizes per screen, all from the scale.
- Body 60–75ch measure; line-heights and tracking set by size.
- No font below 12px; reading text ≥14–16px; tabular-nums on aligned numbers.

**Color**
- Mostly neutrals + one accent (60-30-10). Grays are tinted, not dead.
- Contrast: body ≥4.5:1, large/UI ≥3:1. Meaning never by color alone.
- Dark mode (if any) uses lighter elevation + softened accents, not pure black/white.

**Space & depth**
- All spacing on the 4px scale. Container padding consistent per type.
- Borders 1px hairline; shadows only on floating elements; radius family consistent.

**States & motion**
- Every interactive element: hover, active, focus-visible, disabled, loading.
- Empty, loading (skeleton), and error states for every data view.
- Transitions 100–250ms, ease-out enters; prefers-reduced-motion respected; no infinite decorative loops.

**Content & a11y**
- Microcopy specific, human, sentence case; verbs on buttons; no lorem/placeholder.
- Keyboard-operable, visible focus, semantic HTML, labels on all fields, alt text.

**The slop pass (§11)**
- No gradient soup, no default-Inter-by-accident, no rounded-card-left-accent, no emoji-icons, no everything-in-a-box, no three-identical-centered-cards.
- At least one deliberate, defensible non-obvious choice per screen.
- I can name the reason for every value on the screen.

---

## 14. What to study (calibrate your taste)

You become as good as what you look at. Study these with intent — why does it work?

- Products: Linear (restraint, motion, dark UI, keyboard-first), Stripe (docs, depth, marketing craft), Vercel/Geist (typographic minimalism), Notion (warmth + density), Things 3 (calm precision), Arc, Raycast (command UI), Mercury, Pitch, Family.
- Type & editorial: Müller-Brockmann's Grid Systems; Massimo Vignelli's Canon; Robert Bringhurst's Elements of Typographic Style; magazine spreads (Monocle, Kinfolk, Bloomberg Businessweek).
- Principles: Dieter Rams' Ten Principles; Refactoring UI (Wathan/Schoger) — the most practical tactical book; The Design of Everyday Things (Norman) for affordances; Edward Tufte for data density.
- Systems: study real token architectures — Radix Colors, Tailwind's scale, Material's (as reference, not gospel), Polaris, Carbon, Primer.

How to look: don't copy the surface — extract the decision. Why that scale, that contrast, that timing, that restraint? Rebuild it from principles, don't trace it.

---

End. Principles over rules, but rules when in doubt. Subtract relentlessly, align obsessively, choose deliberately. The difference between good and world-class is entirely in the details nobody can name but everybody feels.
