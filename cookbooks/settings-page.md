# Cookbook — the settings page

> The account/workspace settings surface: sectioned forms a user edits occasionally and scans to confirm state. The most reused "system" screen in any app.
>
> **Earned by:** reproduction #3 (`reproductions/clickup-settings.md`). §8 covers individual form *controls*; it has no recipe for the *page*. This is it.

## When to reach for this

Any settings / preferences / account / profile surface — a left settings sub-nav, a scrolling column of grouped sections, a pinned save. Edit-oriented, not view-oriented: optimize for *occasional confident edits*, not dense scanning.

## The layout: two-column sections + pinned save

```
┌ settings sub-nav ┬ content (scrolls) ───────────────────────┐
│ Workspace        │  Page title                              │
│  People          │  ┌ section ─────────────────────────────┐│
│  Settings        │  │ label + description │ controls        ││  ← each section:
│ Your name        │  │ (left, ~240px)      │ (right, fills)  ││    desc LEFT, controls RIGHT
│ ▸My Settings     │  └──────────────────── hairline ────────┘│
│  Notifications   │  ┌ section ─────────────────────────────┐│
│  …               │  │ …                   │ …               ││
│ Log out          │  └──────────────────────────────────────┘│
├──────────────────┴──── pinned footer ───── [ Save changes ] ─┤
└──────────────────────────────────────────────────────────────┘
```

- **Each section is a 2-column grid:** a `label + one-line description` on the left (~240px), the controls on the right (fills). This is the settings signature — it makes a long page scannable by *purpose* without the controls hunting for their labels.
- **Hairline dividers between sections**, generous vertical padding (24–28px). No cards around each section — whitespace + a hairline separates (§11 "everything in a box" is the tell to avoid here).
- **Pinned save footer.** The shell is a *fixed* height; the content column scrolls; the Save footer stays pinned bottom-right. (Build note: `height` on the shell, not `min-height`, or the footer floats away — caught in the reproduction.)
- **Settings sub-nav grouped by area** (Workspace / You / Security…), with a clear active item.

## Controls: label-above for fields, label-left for preferences (P-F-01)

The one rule that makes settings read right — **split by control type:**

- **Field rows** (text input, select, password) → **label ABOVE** the control, stacked. Fastest to scan and fill (§8). One column, comfortable 40px inputs, leading icon optional, visible focus ring.
- **Preference rows** (toggle, radio choice) → **label LEFT**, with a description under the title and the control on the row. The toggle's *state* is the value; a label above it would float.

```
FIELD ROW                         PREFERENCE ROW
┌─────────────────────────┐       [⬤——]  Text message (SMS)        Edit
│ Full name               │              Receive a one-time passcode…
│ ┌─────────────────────┐ │       [——○]  Authenticator app (TOTP)
│ │ 🔒 Alex Smith       │ │              Use an app to receive a code…
│ └─────────────────────┘ │
└─────────────────────────┘
```

## The settings control kit (one styling language)

All share radius / border / accent so the page reads as one system:
- **input** — 40px, 1px border, optional leading icon, `focus-within` ring in the accent tint.
- **toggle** — 36×20, knob slides, `on` = accent fill. State carries meaning; pair with a title+desc.
- **select** — same shell as input + chevron.
- **swatch / segmented picker** — selected gets an accent ring (swatch) or accent border (preview tile) + a check. (Selected = shape/ring, not just color — same discipline as `state-as-shape.md`.)
- **status badge** — e.g. "Enabled" in the accent tint, beside the section title.

## Restraint (§4)

One accent on: active nav, selected states, toggle-on, status badge. **The primary Save button is near-black, not the accent** — so the accent keeps meaning "selected/on," and Save reads as the page-level commit. (Same move as the marketing nav button in `marketing-hero.md`.)

## Don't

- ❌ Card-wrap every section (§11 everything-in-a-box) — hairline + space instead.
- ❌ Label-above a toggle, or label-left a text field — match label position to control type (P-F-01).
- ❌ `min-height` on the shell — the save footer won't pin; use a fixed height + scrolling content.
- ❌ Make Save the accent color — it competes with selected/on states.
- ❌ Placeholder-as-label (§8) — placeholders vanish; label every field.
