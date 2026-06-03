# Cookbook — the command palette (⌘K)

> The keyboard-first action launcher. §12-A calls it a "killer detail" that signals a tool built for pros. The discipline: the keyboard affordances *are* the design — a ⌘K without them is just a search box.
>
> **Earned by:** reproduction #6 (`reproductions/vapi-cmdk.md`). §12-A names ⌘K but gives no recipe. This is it — and the overlay shell underneath is reusable for modal/drawer.

## When to reach for this

Any app with enough surface area that menus get slow — jump-to-page, run-an-action, search. A power-user accelerator layered over the current screen, not a new page.

## The shell: a floating surface over a dimmed app

```
        ░░░░░ app dimmed by a scrim, still faintly visible ░░░░░
        ┌──────────────────────────────────────────────┐
        │ 🔍  Search pages…                              │ ← search input
        ├──────────────────────────────────────────────┤
        │ ACTIONS                                        │ ← group label (quiet caps)
        │ ⇄  Switch Organization              ⌘ O        │ ← selected row + shortcut
        │ RECENT                                         │
        │ ▤  Metrics      — Observe                      │ ← icon · name · type-hint
        │ ⊞  Monitors     — Observe / Issues             │
        │ ALL PAGES                                      │
        │ ✎  Composer     — Vapi Labs                    │
        │ …                                              │
        ├──────────────────────────────────────────────┤
        │ ↑↓ navigate · ↵ select · ⌘O Switch · 14 results│ ← nav-hint footer (the killer detail)
        └──────────────────────────────────────────────┘
```

- **Centered floating surface**, ~520–560px wide, max-height ~520px, real shadow (it floats → §6 earns the shadow), over a **scrim that dims the app** (the app stays faintly visible — it's a layer, not a navigation).
- **Three zones:** a search input (top, hairline below) → a scrollable grouped list → a footer. Fixed search + footer, only the list scrolls.

## The keyboard affordances (don't skip these — they're the point)

- **Per-row shortcut chips** — `⌘ O` right-aligned on rows that have a binding, in small bordered kbd chips.
- **Type-hints** — `— Build`, `— Observe` after the command name, muted; they tell you *where* the command lives.
- **The nav-hint footer** — `↑↓ to navigate · ↵ to select · ⌘O <action> · N results`. This is the single detail that separates a real ⌘K from a search box. Always include it.
- **A selected row** at all times (the first by default) — keyboard users need a cursor. Carry it by a tonal wash, not an accent color.

## Grouping + restraint

- **Group the list** — Actions / Recent / All Pages (or Suggestions / Pages / Commands). Quiet uppercase labels. Recency + category keep a long list scannable.
- **Row anatomy:** icon (muted, one set/one stroke) · name (bright) · type-hint (muted) · [grow] · shortcut chip. One line each.
- **Dark done right (§4)** if dark: palette surface raised (`#17181c`), not pure black; off-white text; selected row a subtle white wash. Light works the same with the ramp flipped.
- **No accent needed.** Hierarchy is icon→name→hint by brightness; state by tonal wash. Color would be noise here.

## The overlay shell is reusable

Strip the command-specific bits and you have the **overlay primitive** — scrim + centered floating surface + shadow + fixed header/footer with a scrolling body — that a modal and a slideover also use (a slideover just anchors to an edge instead of centering). When you build those, share this shell; don't reinvent the backdrop/float/scroll contract.

## Don't

- ❌ A ⌘K that's just a search box with results — no shortcuts, no footer, no groups. That's the whole tell that it's not really a power tool.
- ❌ Lose the selected-row cursor — keyboard users are stranded without it.
- ❌ Color the selected row with the accent — tonal wash; the palette stays neutral.
- ❌ A new full page instead of an overlay — kill the context; the palette must float over where you were.
- ❌ Pure-black surface in dark mode (§4) — raise it so it reads as elevated.
