# Reproduction #6 — command palette / ⌘K (overlay)

**Domain:** system/component (overlay) · **Target:** a real shipped dev-tool's command palette.
**Reference:** `_ref/vapi-cmdk.png` (eyedrop only).
**Build:** `vapi-cmdk.html` → render `vapi-cmdk@2x.png`. **Gate:** pushed live beside the reference. Status: **awaiting user eye-gate.**

> Deepening pass: a distinctive high-craft overlay surface; also the first pass at the *overlays* queue item (backdrop + floating surface).

## The decisions I extracted (not traced)

1. **The keyboard affordances ARE the design.** §12-A: a command palette "signals a tool built for pros." So the per-row shortcut chips (`⌘ O`), the type-hints (`— Build`, `— Observe`), and especially the **nav-hint footer** (`↑↓ to navigate · ↵ to select · ⌘O · 14 results`) aren't chrome — they're the whole point. A ⌘K without them is just a search box.
2. **Grouped commands.** Sections — Actions / Recent / All Pages — with quiet uppercase labels. Recency and category structure a long list so it stays scannable.
3. **Overlay done right (§6/§7).** A centered floating surface with a real shadow (it floats, so it earns the shadow), over a **scrim that dims the app** behind. The app stays faintly visible for context — the palette is a layer, not a new page.
4. **Dark done right (§4).** Palette surface is raised (`#17181c`), not pure black; text is off-white; the selected row is a subtle white wash, not a saturated highlight.
5. **Restraint.** No accent needed — the palette is neutral; hierarchy is icon (muted) → name (bright) → hint (muted). The selected row carries state by tonal wash, not color.

## Where the base HELPED

- **§12-A "killer details"** — names ⌘K explicitly as a pro-tool signal; the keyboard affordances follow from that.
- **§6 Depth** — "shadows only for things that float" — the palette is exactly that case.
- **§4 Dark mode** — not pure black, off-white text, subtle elevation.
- **§8 Navigation / components** — clear selected state, icon discipline (one set, one stroke), the row anatomy.

## Where the base was SILENT (the distillable)

1. **No command-palette recipe, and no general overlay-shell recipe.** §12-A *names* ⌘K as a killer detail but gives no how-to: the centered-floating-surface-over-scrim shell, the search→grouped-list→footer structure, the per-row shortcut/type-hint anatomy, the nav-hint footer. → **cookbook candidate: "the command palette (⌘K)."** And the backdrop+floating-surface+shadow shell underneath it is the reusable **overlay** primitive that a future modal/drawer reproduction will share — note it for the overlays cookbook.

## Build misses (mine)

- The dimmed app behind is abstract blocks, not a real dimmed app screen — reads as "overlay over an app" but less specific than the reference.
- The reference palette sits slightly left-of-center; mine is centered (the more canonical default).

## Score (my eye — pending the user's, decision-transfer bar)

Reproduces convincingly — the grouped commands, the per-row shortcut + type-hint anatomy, the nav-hint footer, and the dimmed-app overlay all land. The base supplied the principle (§12-A killer detail, §6 float-gets-shadow, §4 dark); the gap is the ⌘K recipe + the overlay shell. Same exit signal: strong spine + distillable cookbook, no invented machinery.

**Cookbook written after the user confirms the reproduction landed.**
