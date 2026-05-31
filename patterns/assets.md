# Pattern: Asset sourcing — what to pick and where to get it

**Inherits:** all of `fundamentals.md` unless overridden below.
**Cite as:** `P-AS-<nn>`.

## Surface intent
The brain bans the wrong assets (`SKILL.md` tells: emoji-as-icons, Inter-everywhere, stock photos) but a ban only tells an agent what NOT to do. This file is the **positive, self-triggering** half: the moment a build needs a concrete asset — an icon, an illustration, a font, a logo, imagery — this says **what to pick and where to get it**, so sourcing happens on its own instead of waiting for the human to point at it. Read it whenever you reach for any of the four asset classes below; it routes to the deeper rules (`P-MOL-11/12`, `P-M-07/08`) and names real sources.

**The cardinal discipline for every asset class: bind it to the token system.** An asset is on-brand only when its color resolves to `--accent` / `--ink` / `--subtle` etc. (recolor it), its scale resolves to the type/space tokens, and its style fits the register. A raw asset dropped in un-remapped is an off-system tell — the same failure for an icon, an illustration, or a stock photo.

## Calibrations

**P-AS-01. Icons — ONE monoline set, sourced as a sprite, never invented per-file.** Default to **Lucide** (ISC license; it's what shadcn/Linear-adjacent products ship, so it lands on-register for free). Alternates: Phosphor / Tabler / Heroicons — all MIT, all inline-able. Deliver as an inline `<symbol>` sprite and reference `<svg class="ic"><use href="#i-NAME"/></svg>` so each icon inherits context color via `currentColor`; size 14–16px inline / 24px standalone / 40–48px as an empty-state mark; one stroke weight (~1.75). **Swap the SET wholesale; never mix two sets or hand-draw a one-off into a single file.** Typographic glyphs that are NOT icons and stay as text: `⌘ ↑ ↓ ↵` inside `<kbd>` key-chips, `·` separators, small delta-direction arrows in number chips.
Operationalizes `P-MOL-11`, `AD-5`. **Reference implementation:** `kits/cool-technical/_icons.svg` (Lucide, 30 symbols) + `atom-icon.html`. **Where to get one:** the project's icon library if it has one (`lucide-vue-next`, `lucide-react`, `@phosphor-icons/*`); otherwise pull static SVGs from `https://unpkg.com/lucide-static@latest/icons/<name>.svg` and build the sprite. *Check:* every standalone affordance icon resolves to one set at one stroke; no emoji, no unicode symbol, no lone hand-drawn `<path>`.

**P-AS-02. Illustrations — a recolorable open set, tinted to tokens, register-appropriate.** Empty-state / first-run / marketing spot art is not hand-drawn per screen: pull from a free, recolorable open set and **remap every ink to the tokens** (`--subtle` for line work, `--accent` only on a focal element). The *style* tracks the register: a **restrained monoline mark** for cool-technical / product registers (Linear/Vercel empty state — a 40–48px icon mark beats a colorful scene), a **scene illustration** for warm/consumer/marketing registers. When you use a scene, remap ALL of its inks (a stock palette's own violet ≠ your `--accent`).
Operationalizes `P-MOL-12`. **Where to get one:** Popsy (`https://illustrations.popsy.co/<color>/<slug>.svg` — monoline line-art, single ink, recolor the fill) · unDraw (`undraw.co` — scenes, pick a base color then remap). **"Get a better one if needed":** a free set is the floor, not the ceiling — flag a bespoke/paid upgrade (Phosphor duotone, Streamline, custom spot art) only when a marquee surface genuinely earns it, never by default. *Check:* the illustration is from a real source, recolored to tokens, and its style fits the register (mark for cool-technical, scene only for warm).

**P-AS-03. Fonts — a display + sans pairing, never Inter-on-everything.** A surface needs at least a **display face** (hero + section titles) and a **sans** (body/UI); a mono is added for code/figures. Inter-everywhere with no display face is a banned tell (`SKILL.md`) and the flattest type choice there is. The pairing is a **per-project personality dial** set from the brand via `identity.md` → the `--font-display` / `--font-sans` / `--font-mono` tokens (gallery → **Foundations** has vetted pairings). Marketing especially needs the display face doing work (`P-M-08`: one display + one sans, never three families). Display carries the voice (a tight grotesk, a refined serif, an expressive sans); sans stays neutral and legible.
Refines `F1`, `AD-5`; deviation-checked by the `SKILL.md` "Inter-everywhere" ban. **Where to get one:** Google Fonts and Fontshare cover almost every pairing for free (self-host or `<link>`); the project's existing font stack first if it has one. *Check:* the surface uses a distinct display face for its largest type, not the body sans scaled up; the families resolve to `--font-display` / `--font-sans` tokens, never hardcoded.

**P-AS-04. Logos & imagery — product-true and bespoke, not stock and not from a set.** Product imagery is real UI in a device/browser frame, real photography, or custom illustration — never a stock "diverse people at a laptop" photo (`P-M-07`). The **brand logo/mark is bespoke** (it is NOT an icon-set glyph — keep it as the one hand-crafted mark). A social-proof logo wall uses real customer logos, usually monochromed to one neutral so they read as a set, not a ransom note.
Operationalizes `P-M-07`. **Where to get one:** real product screenshots (render the actual app), the customer's real logos (SVG, monochromed via `currentColor` or a single fill), brand assets from the project. *Check:* no stock photography on a marketing surface; the logo wall is one monochrome treatment; product shots are the real UI.

## How an agent reaches for an asset (the routing)
At the build step, when a surface needs an asset, pick by class — don't wait to be told:
- **An affordance icon?** → `P-AS-01`: one set (Lucide), inline sprite, `currentColor`. Reuse `kits/cool-technical/_icons.svg` or pull from `lucide-static`.
- **An empty state / first-run / marketing spot?** → `P-AS-02`: recolorable open illustration (Popsy/unDraw) remapped to tokens, OR a large Lucide mark for product registers.
- **The type voice?** → `P-AS-03`: a display + sans pairing via `identity.md` tokens, never Inter-only.
- **A hero visual / logo / social proof?** → `P-AS-04`: product-true imagery, bespoke mark, monochromed logo wall.

## Forbidden moves
- An emoji, unicode symbol, or per-file hand-drawn `<path>` standing in for an affordance icon. (`P-AS-01` / `P-MOL-11`)
- A stock illustration dropped in un-remapped; a colorful scene on a restrained product register. (`P-AS-02` / `P-MOL-12`)
- Inter (or any one family) doing display + body + everything, no distinct display face. (`P-AS-03` / `SKILL` ban)
- Stock photography on a marketing surface; a multi-color logo wall. (`P-AS-04` / `P-M-07`)

## Sources
`P-MOL-11`/`P-MOL-12` (the icon + illustration rules and the runnable `_icons.svg`) · `P-M-07`/`P-M-08` (marketing imagery + type pairing) · `identity.md` (brand → font/accent dials) · `fundamentals.md` F1/AD-5 (differentiated type registers) · gallery → **Foundations** (font pairings) + **Imagery**. Real sources named above are free/open (Lucide ISC, Popsy/unDraw, Google Fonts/Fontshare); name public products, never the reference aggregator.
