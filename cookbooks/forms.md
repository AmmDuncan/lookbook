# Cookbook — forms (control inventory × state matrix)

> The input furniture every build inherits: text field · select · combobox (server-search) · textarea · checkbox · radio · toggle · segmented · the three-tier button — each carried across its full state matrix (default · hover · **focus-visible** · active · disabled · error · loading). The library *mentioned* controls in `settings-page`/`modal-and-repeater`, but no recipe **owned** them, and focus lived only in the spine's prose — so a real Lookbook-guided build shipped controls with **no focus states at all**. This cookbook exists to put focus, and every other state, where a build can inherit it instead of skip it.
>
> **Earned by:** reproduction #14 (`reproductions/forms.md`), grounded in real shipped forms (Linear preferences; Hashnode / Jasper / Substack / Salesforce / X error treatment). It applies a register *voice* (cool-technical) to the *furniture* — so this cookbook is the controls + states + focus discipline, not the voice.

## When to reach for this

Any surface where the user *enters or edits values*: a create/edit form, a settings page, a modal with fields, a filter panel, an onboarding step, a configurator. Reach here for the **controls themselves** — how a text field looks focused, how an error reads, what a disabled toggle is — alongside the page recipe that arranges them (`settings-page` for the two-column settings layout, `modal-and-repeater` for in-modal forms). Those recipes own the *layout*; this one owns the *furniture and its states*.

## The voice comes from elsewhere; this is the furniture

Pick the voice from `registers.md`. Reproduction #14 renders cool-technical (dark, Geist, scarce mint) because that's where the no-focus-states failure happened (Linear/Vercel/Supabase live there), but the **grammar is voice-agnostic** — the control sizing, the state matrix, the focus discipline, the error placement all hold on a light/warm/bold voice too. Re-point the dials; keep the rules below.

## The two parts (and why)

A real form *screenshot* can never show the whole matrix — you can't photograph focus + error + loading + disabled at once, and "no focus state" is invisible in a still of a resting form. So build two things:

1. **In context** — one believable form holding the whole inventory, in its resting/realistic states (one field focused, one errored, the combobox open). Proves the voice, composition, and label/help/error *placement*.
2. **State matrix** — each control walked across its seven states, with a dedicated **FOCUS** column. Proves every state *exists and reads*. This is the part `settings-page` never had.

## Focus is a first-class state — the spine of this cookbook

This is the rule the whole cookbook is built to enforce. **Every interactive element ships a visible keyboard focus indicator. Never `outline: none` without a replacement.**

- **Text fields → `:focus`** (the ring shows on click-to-type, which is correct for a field you click into).
- **Buttons, checkboxes, radios, toggles, segments, links, combobox options → `:focus-visible`** (keyboard-only, so a mouse click doesn't flash a ring).
- **The load-bearing indicator is a solid border / 2px outline that clears 3:1** against both the control and the page. A low-alpha glow *supplements*, it does not count — if you delete the solid ring and keep only the halo, the indicator fails.
- **Don't rely on the native browser ring.** It's keyboard-accessible but unpolished, and on a custom-styled dark control it often clashes or barely shows. Give every control an explicit indicator. (Even combobox `role=option` rows get a keyboard-highlight — the `aria-activedescendant` bar.)
- **Gate it:** `node scripts/check-focus.mjs <file>` — fails on any element whose focus is suppressed without replacement (the bare-button bug a real build shipped); flags native-ring reliance as an advisory. Drive the advisory count to **0** for a forms surface — this is the one cookbook where that's the whole point.

## The control inventory × the state matrix

Every control owns every applicable state. A state that doesn't *visually read* in the render is a missing state — widen the step until it does.

| Control | Notes that matter |
|---|---|
| **Text field** | 38px, resting on a panel surface with a *stronger* border than a hairline (it must read as an affordance). Focus: accent border + halo. Prefix/suffix (`float.app/…`) sits inside the frame. |
| **Select** | The text-field skin + a chevron. For a **bounded** set only (regions, statuses, year ranges). A list that grows from a backend is a combobox, not a 200-row select. |
| **Combobox (server-search)** | Debounced server-side search — **never** a `page_size: 200` client dump. The popover carries a real **loading row** (spinner + text), resolves already-selected labels even when narrowed out of the batch, and has an **empty** state. Show closed / searching / empty. |
| **Textarea** | The field skin, taller, vertically resizable, with a **tabular** character counter pinned bottom-right that turns the error colour on overflow (showing the overage) rather than hard-blocking the keystroke. |
| **Checkbox** | ~18px, low radius. Checked fills the accent with a *dark* tick (the glyph must read on the accent, so it's near-black, not white). Submitted with the form. |
| **Radio** | Checkbox metrics but round and exclusive. Selected = accent dot in an accent ring; the fill never goes solid (that's the checkbox's job). |
| **Toggle** | For a setting that takes effect **immediately** (no Save). Off = neutral track, on = accent. If the choice is *submitted with a form*, use a checkbox, not a toggle. |
| **Segmented** | A small fixed set of exclusive modes (2–4) shown at once; the active segment lifts onto a raised surface. Each segment is its own button with its own focus ring (a button-group, not a roving group) — pick one focus model and make the copy match the markup. |
| **Button (3-tier)** | Exactly one **primary** per view, filled high-emphasis (near-white / ink) — **never the accent**, so the accent stays scarce for state. **Secondary** bordered, **tertiary** ghost text. **Loading** disables and swaps a spinner in while keeping the label. |

**States, made to read:**
- **Default** — show it *empty* (placeholder) where "empty vs filled" is a real distinction; a default cell that's already filled looks identical to the Filled cell.
- **Hover** — must be a *visible* step (a clearly lighter border and/or a surface lift), not a 1.05:1 nudge.
- **Focus** — the headline state (above).
- **Active/pressed** — a *real* darker fill + inset shadow. A 1px `translateY` alone is invisible in a still and unphotographable in a specimen.
- **Disabled** — **one** treatment, applied by class everywhere (darker surface, dashed-flat border, dimmed text). Not an inline `opacity` on some controls and a class on others.
- **Error** — see below.
- **Loading** — spinner in place, control disabled; on a button the label stays.

## Label / help / error placement (P-F-06 / P-F-11)

- **Label above** for entry fields (a value you *type*); **label left** for preference rows (a setting you *flip*, with a description). The control's job picks the layout.
- **Help below** the control in the faint tier.
- **Error REPLACES the help, never stacks.** One message slot — help by default, the error message (in the error colour, with an alert glyph) when invalid. The control also gets a red border, a faint red wash, and an in-field error icon.
- **`*` for required, the word "optional" for optional — never both.** Required is a scarce accent `*`; optional is said in words.
- **Validate on blur**, not per keystroke — judge a field complete when the user leaves it, not while they're half-done.

## Contrast: the faint tiers are text

Help text, captions, the character counter, placeholder, kbd hints — all of it is **text** and must clear AA (≥4.5:1) on the surface it sits on, including a faint colour on an *elevated* popover surface. The error message is text too (clear AA in the error colour). Run `node scripts/check-contrast.mjs <file>` — it measures every named text tier in light *and* dark, and surfaces hardcoded `color:#hex` literals (a dark tick on an accent fill is fine; confirm each `⚐`). The focus ring is a *non-text* indicator → it must clear **3:1**; a solid accent border on a near-black control clears it by a wide margin, but verify it on lighter voices.

## Don't

- ❌ Ship a control with the focus ring suppressed and unreplaced — the bug this cookbook exists to kill. Gate with `check-focus`; drive native-ring reliance to 0.
- ❌ Spend the accent on a primary button — it's reserved for state (focus/selected/on). Primary is near-white/ink.
- ❌ A `page_size: 200` client-filtered picker for a backend-paginated list — that's a server-search combobox with a loading row.
- ❌ Stack an error line under the help line — the error *replaces* help in one slot.
- ❌ Mark both required `*` and "optional" — pick the minority and mark only it.
- ❌ Per-keystroke validation — validate on blur.
- ❌ A hover/active state that's a sub-1.5:1 luminance nudge — if it doesn't read in the render, it's a missing state; widen it.
- ❌ Two disabled encodings in one inventory — define disabled once, apply by class.
- ❌ A toggle for a value submitted with a form (use a checkbox) or a checkbox for an immediate-effect setting (use a toggle).
- ❌ A decorative accent dot beside a mono kicker — that's the AP28 status-cosplay tell; run the slop-radar on your own form chrome, not just reproduced UI.
