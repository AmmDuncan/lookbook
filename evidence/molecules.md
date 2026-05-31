# Evidence: Molecules — grounding ledger

Reference observations for the cool-technical molecule kit (`kits/cool-technical/`, `patterns/molecules.md`).
Eyedropped from a study of real shipped products at their app surfaces (pixel-read proportions/hues —
not live computed styles). Apps are named; values are approximate (screenshot resolution). Use to
validate/tighten molecule numbers and to ground the next families before building.

Legend: ✓ = our value validated · �note = proposed tightening (flag for eye-gate, not auto-applied).

---

## Figures (hero-figure + stat) — validated
Refs: Midday (revenue), Mixpanel (SaaS KPIs), Causal (forecast), Whop (analytics).
- **Hero amount** sits restrained, not huge. Midday `$18,203.97` and Whop gross-revenue read ~32–40px
  *in a card/in context*; the truly large treatment is reserved for a standalone hero. Mixpanel's
  `9.28M` is a boxed big-number tile.
  - �note: our `hero-figure` default is 50px (cap 54). Real *in-card* heroes cluster ~36–44px; ≥50px
    suits `hero-solo` only. Consider hero-figure default ~44px, hero-solo ≤54px. (P-MOL-03 already caps; this tightens the *default*.)
- **Tabular, tight tracking, eyebrow above** ✓ — confirmed across all four.
- **Delta** = small up/down + muted "vs …" ✓ (Midday `vs $7,669 last period`).
- **Bare-on-page hero** is real (Midday, Whop) ✓ — corroborates the `bare-hero-band` recipe.
- Off-white canvas + left sidebar nav ✓ — corroborates `shell-frame`.

## Table / list (table-row) — validated
Refs: Fresha (client list), Airtable / Clay (grid), ClickUp (task list).
- **Row height** spans ~36–48px across refs: Airtable/Clay grids ~32–36px (spreadsheet-dense),
  ClickUp ~36px, Fresha ~44–48px (mid-density booking). Our **38px ✓** sits correctly in the admin band.
  - �note: offer a `--row-h` of 40px as a slightly roomier default for non-spreadsheet lists; keep 38 for dense.
- **Hairline horizontal dividers, no zebra** ✓ (Fresha, ClickUp).
- **Primary + muted secondary in one cell** ✓ (Fresha: name + email).
- **Status as low-chroma tint pill** ✓ (Fresha: green "Completed" / amber "To be completed" /
  red "Not completed") — validates `status` pill treatment (MC-7), no full-saturation badges.
- **Sortable headers** = label + tiny ⇅ chevron (Fresha, Airtable) — candidate detail for `toolbar-list`.
- **Trailing ⋮ row-action menu** (Fresha) — common; candidate atom (icon-button in last column).
- **"Load more" / pagination** at table foot (Fresha) — pair with `toolbar-list`.

## Shell (shell-frame) — validated
Refs: Linear, Fibery, GitBook, Strut.
- **Light labeled-rail dominates** ✓ — all four use a light (white/off-white) left rail, validating M1-A
  as a strong default (not just dark-anchor). Rail width ~220–240px ✓ (ours 224px).
- **Workspace switcher at the TOP of the rail** with a dropdown (Linear, Fibery, GitBook) — a detail
  our `shell-frame` brand block could fold in (brand + workspace name + ⌄).
- **Section labels**: small + muted, often with a ▾ collapse (Linear "Workspace" / "Your teams" / "Try").
  Ours uses uppercase eyebrow labels — close; sentence-case-muted + chevron is the Linear variant. Minor.
- **Top bar**: a search field spanning, with filter/view icons right (Linear "Search issues, projects…").
  Light, thin ✓ — corroborates topbar + the ⌘K affordance.
- **Rail foot**: trial/upgrade or org chip at the bottom (Linear "Business trial ends", GitBook "Upgrade") ✓.

## Form controls + recipes (atom-field, recipe-form) — validated
Refs: Clerk, Slite, Slack, User Interviews (settings), Webflow (field-type picker).
- **Field height ~40px** ✓; field has a light hairline border, sits on the card ✓.
- **Toggle = pill switch** ✓ (Clerk, Slite, Slack) — validates our `.sw`. Slack's are brand-green (status-tinted), ours accent.
- **Toggle + description row** ✓ (Clerk "Allow user to delete… / If checked, …") — validates the
  settings-row shape (label + helper + control), our `.srow` sk/skh.
- **Reset (ghost/secondary) + Save (primary)** action pair ✓ (Clerk "Reset changes"/"Save changes",
  Slack "Publish Changes") — validates the 3-tier button hierarchy + secfoot.
- **Label placement in settings**: label-ABOVE (Clerk, Slite) is as common as label-left (Slack rows).
  - �note: our `settings-sectioned` uses label-left; 2/3 refs use label-above. Consider label-above the
    default and label-left a variant (matches patterns/form.md P-F-01 "contextual").
- **Per-section / per-row Save** ✓ (Slack: Edit per row, Publish at foot) — corroborates P-F-05.
- **Checkbox group + select** ✓ (User Interviews). Webflow's field-type picker enumerates the same
  control set (Plain text · Switch · Email · Number · Option · Link) — confirms our atom coverage is complete.

---

# NEXT FAMILIES — grounding (not yet built; reference for when they are)

## Overlays — modal + slideover (family 3, to build)
Refs (modal): Relevance AI, ClassDojo, Whop, Salesforce, Portrait. Refs (slideover): Airwallex, Acctual, Julienne, Whop, Perplexity.
- **Modal** = centered card on a dimmed backdrop (~rgba(0,0,0,.4–.5)). Width ~360–480px for forms.
  Header: title (left or centered) + ✕ close. Body: form (top labels) or content. Footer: actions
  bottom-right — secondary/ghost (Cancel/Close) + primary (Create/Save). Radius + soft elevation shadow.
- **Slideover/drawer** = right-edge panel ~420–480px on a dimmed backdrop. Same header (title + ✕),
  body = stacked/sectioned form, footer actions bottom-right (sometimes sticky; sometimes full-width primary).
- **Split (per containers.md P-CN):** modal for short resolve-now (≤~5 fields); slideover for longer /
  contextual edit beside a live list (Acctual edits a contact beside the list; Airwallex adds a dept).
- **Recipe note:** both are *containers* that host the existing form recipes (entry-card / sectioned).
  So the overlay family's atoms = the dialog shell (backdrop + panel + header + footer-action-bar);
  the body reuses `recipe-form`. Builds cheaply on what exists.

## Empty states (DM-1, highest-ROI distinctive move; to build)
Refs: Quicken, Typeform, Tally, PayPal, Klarna.
- Centered stack in the content area: **small spot illustration (~120–160px)** → **confident one-line
  heading** ("No forms yet", "No holdings to display", "No brand kits here yet") → **optional muted
  sub-sentence** → **one primary CTA** ("+ Create form", "Connect account").
- **Personality is the move** (Typeform's sniffing dog, Tally's "as simple as one-two-three") — warm,
  never a gray "No data" box. This is DM-1 exactly.
- Recipe variants to build: rich-illustration · minimal-glyph (Quicken's accent bar-chart mark) ·
  first-run/onboarding tone. The illustration carries character; the copy is confident, not apologetic.

## Command palette ⌘K (DM-2 signature move; to build)
Refs: Linear, Vapi, Replit, Clay, Fey.
- Centered overlay (top third), ~520–560px, on a dimmed backdrop: **search input** ("Type a command or
  search…") → **grouped action list** (Actions / Recent / All Pages) → each row = icon + label +
  **right-aligned single-letter shortcut** (Linear A/I/S/P/L) → **footer nav hints** ("↑↓ navigate · ↵
  select · N results").
- Optional **context chip** above the input (Linear's "Issue – JOH-1" pill).
- Pairs with the `shell-frame` topbar's ⌘K affordance (the visible hint → this overlay).

---

## Pass summary (2026-05-30, eyedrop grounding via real-product study)
**Validated (shipped):** figures, tables, shell, forms — all hold; coherence corroborated in the wild
(Linear/Midday/Fresha/Clerk/etc.). **Tightenings — status:**
- ✅ APPLIED (rule-backed, P-MOL-03): hero-figure 50→**34px**, hero-solo 54→**44px**. Measured band
  32–40px in-app / ≤44 standalone; ≥48px = marketing tell. Real refs: Wise ~24, Monarch ~26, Rocket ~32.
- ⏳ offer 40px `--row-h` for non-dense lists (open).
- ✅ APPLIED (rule P-MOL-08): admin tables get a trailing row-action (quiet ⋮) + sortable-header signal.
- ✅ APPLIED (rule P-F-01 refined): settings split by control type — FIELD rows label-above (Clerk/Slite),
  PREFERENCE/toggle rows label-left + description. recipe-form sandbox updated (awaits forms gate to bank). **Pre-grounded (to build):** overlays
(modal + slideover — host the form recipes), empty-states (DM-1), command-palette (DM-2). Not grounded
(low-risk, build on demand): toast/banner, page-header/toolbar, badges/avatars.

## Icons & illustrations (2026-05-31, P-MOL-11/12 — retired the placeholder limit)
The kit's icons were unicode placeholders + a few per-file hand-drawn SVGs (shell nav). Both retired
to a real set, banked into the kit:
- **Icons → Lucide (ISC).** `_icons.svg` = 21-symbol inline sprite, `viewBox 0 0 24`, `stroke 1.75`,
  `currentColor`. `atom-icon.html` is the primitive; cmdk / empty / shell-frame / table-row /
  recipe-table / overlay all rewired to `<use href="#i-NAME"/>`. Lucide is what shadcn/Linear-adjacent
  products ship → lands on-register for free. Alternates (wholesale only): Phosphor / Tabler / Heroicons.
  Kept typographic (not icons): `⌘ ↑ ↓ ↵` in `<kbd>` chips, `·` separators, delta-direction arrows.
- **Illustrations → recolorable open sets (Popsy, unDraw).** Free, single/low-ink line-art that recolors
  to tokens. cool-technical DEFAULT empty state = a 40px Lucide mark (Linear/Vercel restraint); scene
  illustrations are the warm-leaning option and MUST have all inks remapped (a stock palette's violet ≠
  `--accent` — the kit's Popsy demo was remapped #5936D8→#5B5BD6, #BA8EFF→#C7C7F5, line→#9AA0AA).
- **"Get a better one if needed":** free set is the floor; flag bespoke/paid (Phosphor duotone,
  Streamline, custom spot art) only when a marquee surface earns it — not by default.
- **Whole-kit coherence (done, commit f3fa0da):** the 4 organisms' hand-drawn nav was rewired to the
  sprite too (mapped by nav label; charts/sparklines/brand-marks untouched), and `_icons.svg` grew
  21→30 for the organism domains (truck, package, git-branch, shopping-cart, credit-card, etc.). Every
  icon-using file now inlines the identical canonical 30-symbol sprite. One set across the entire kit.
