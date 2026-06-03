# Cookbook — state as shape (the status-cosplay antidote)

> How to encode status (todo / in-progress / done / blocked / error) so it reads instantly *and* survives colorblindness, dark mode, and a glance — without the "status-cosplay" tell.
>
> **Earned by:** reproduction #1 (`reproductions/linear-issue-list.md`). The base says "one icon set, one stroke" (§8) and "don't signal with color alone" (§4) but gives no recipe for an iconographic *state system*. This is that recipe — and it's the direct antidote to AP28, the status-cosplay tell that triggered the empirical rebuild.

## The tell it replaces (AP28 — status cosplay)

A pill or dot whose **color is the only signal**: a green dot = "active", a red dot = "error", an amber dot = "pending". Six hues doing six jobs. It looks like status; it isn't *legible* status. It fails the moment color fails (colorblind user, grayscale print, a dark theme where the hues shift), and a wall of colored dots reads as decoration, not meaning.

## The move: shape carries meaning, color reinforces it

Give each state a **distinct silhouette** so it's identifiable in pure grayscale. Color is the *second* channel, never the first.

| State | Shape (primary signal) | Color (reinforcement) |
|---|---|---|
| Backlog | dashed ring | faint gray |
| Todo | open solid ring | gray |
| In progress | ring with a filled pie wedge (the wedge grows with progress) | amber |
| Done | filled disc + check | brand/indigo or green |
| Canceled / blocked | ring with a slash or filled × | muted red / gray |

The pie-wedge for in-progress is the keystone: it's the one state that can show *degree*, and it does it through geometry (wedge angle), not a number.

```html
<!-- in-progress: ring + pie wedge, ~50% -->
<svg width="14" height="14" viewBox="0 0 24 24">
  <circle cx="12" cy="12" r="8" fill="none" stroke="var(--st-progress)" stroke-width="2.2"/>
  <path d="M12 12 L12 5 A7 7 0 0 1 18 9 Z" fill="var(--st-progress)"/>
</svg>

<!-- done: filled disc + check -->
<svg width="14" height="14" viewBox="0 0 24 24">
  <circle cx="12" cy="12" r="8" fill="var(--st-done)"/>
  <path d="M8.5 12.2l2.3 2.3 4.5-4.8" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
```

## Rules

- **One geometric family.** All states are variations on the same ring (open / dashed / wedge / filled). They read as a *set*, the way one icon family with one stroke does. Don't mix a ring, a triangle, and a square.
- **Grayscale test.** Desaturate the whole screen. Every status must still be distinguishable by shape alone. If two states collapse to the same silhouette, the shapes are wrong — not the colors.
- **Color is functional, scarce, and consistent.** Amber *always* means in-progress; the brand hue *always* means done. Never reuse a status hue for a category, a label, or decoration (that's how "green" ends up meaning both "active" and "Growth plan" — the category-color bleed from the old P-MOL-10).
- **Pair with text where the state isn't ambient.** In a list the column context makes the glyph legible; in isolation (a detail header, a card) add the word: a glyph plus "In progress", not the glyph alone.
- **Priority is a *separate* shape system** — ascending bars, not a colored dot. Don't let priority and status share an encoding; they're orthogonal and the user reads them independently.

## Don't

- ❌ A colored dot/pill as the *only* status signal (AP28).
- ❌ A rainbow of status hues (six accents = the slop tell).
- ❌ Reusing a status color for a non-status category anywhere on the same screen.
- ❌ Animating the in-progress wedge as a perpetual spin in a resting list (§7 — no infinite decorative loops); the wedge is a static state, not a spinner.
