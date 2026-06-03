# Reproduction #3 — settings page (system / forms)

**Domain:** system/component (forms) · **Target:** a real shipped work app's "My Settings" account page.
**Reference:** `_ref/clickup-settings.png` (eyedrop only).
**Build:** `clickup-settings.html` → render `clickup-settings@2x.png`.
**Gate:** pushed live to easel beside the reference. Status: **awaiting user eye-gate.**

---

## Why this one (what it tests that #1 and #2 didn't)

This is the **forms / component-state** test — §8 calls forms "the highest-stakes, most-botched surface," and neither prior repro touched it. It also exercises the **P-F-01 split in a single real screen**, plus the most control variety of the three.

## The decisions I extracted (not traced)

1. **The settings signature: a two-column section rhythm.** Every section = *label + description on the left, controls on the right*, divided by hairlines. Quiet and utilitarian — there is no loud move; the craft is consistency across control types.
2. **P-F-01 live in one screen.** Profile uses **label-above** field rows (Full Name / Email / Password, each with a leading icon). 2FA uses **label-left preference rows** (toggle + title + description + Edit link). The same screen proves the rule: *fields* label-above, *preferences* label-left.
3. **Control variety, one styling language.** Text inputs (leading icon, 40px, focus ring), toggles (on/off), a color-swatch picker with a selected-check + ring, and a segmented appearance picker (mini-window preview tiles). All share radius, border, and accent.
4. **Restraint (§4).** One accent (the app's purple) on: active nav, the "Enabled" badge, selected swatch ring, selected appearance tile, and toggle-on. The **Save button is near-black, not the accent** — same discipline as repro #2's nav button.
5. **Type (§3).** Plus Jakarta Sans — a friendly modern sans with character, deliberately not default Inter.

## Where the base HELPED

- **§8 Forms** — "label every field; labels above; inline help; one column; comfortable input height (40–48px); show focus." Drove the field rows directly.
- **§8 Components** — toggle/selected/focus states, "one icon set one stroke," button hierarchy (primary Save vs ghost Edit).
- **§4 Color** — one accent, tinted neutrals, the accent-scarcity that keeps Save near-black.
- **§12-C System** — token-first, name-by-role, the sectioned/consistent component discipline.
- **P-F-01** (a rule the *old* Lookbook earned, carried into the base's §8 spirit) — settings split by control type. Confirmed correct against a real screen.

## Where the base was SILENT (the distillables)

1. **No settings-page layout recipe.** §8 covers individual form controls, but not the *page*: the two-column (description-left / controls-right) section rhythm, hairline section dividers, the pinned Save footer, the settings sub-nav grouped by area. This is the most reused "system" surface in any app and the base has no recipe for it. → **cookbook candidate: "the settings page (two-column sections + pinned save)."**
2. **The control inventory isn't named as a set.** Swatch picker, segmented preview tiles, toggle-with-description, input-with-leading-icon — the base names *some* (toggle, input) but not the settings-specific cluster as a coherent kit. Minor; folds into the settings cookbook.

## Build misses (mine)

- Toggle-on uses the accent purple; the reference toggle reads slightly bluer. Defensible under one-accent, but a hair off the original.
- The appearance preview tiles are simpler than the reference's (mine = split panels; theirs = tiny window mockups). Reads correctly, less detailed.

---

## Score (my eye — pending the user's, at the agreed decision-transfer bar)

The **closest** of the three reproductions — settings chrome is the most deterministic surface (few asset variables), so surface fidelity is high *and* decision transfer is near-complete. The base supplied the controls and the forms discipline directly; the one real gap is the *page-level* settings recipe (two-column sections + pinned save), which the base doesn't operationalize. Same exit signal: a strong spine + one distillable cookbook, no invented machinery.

This completes the three-domain span (app · marketing · system). **Cookbook written after the user confirms the reproduction landed.**
