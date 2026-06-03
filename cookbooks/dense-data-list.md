# Cookbook — the dense data list (app)

> A grouped, scannable list of records (issues, transactions, runs, tickets) in a working app. Density is the point: the user lives here and scans it hundreds of times a day.
>
> **Earned by:** reproduction #1 (`reproductions/linear-issue-list.md`) — reproduced a real shipped issue tracker from the base alone; these are the moves the base was silent on or got backwards for this surface.

## When to reach for this

A list where every row is the *same kind of thing*, the user scans far more than they read, and metadata (status, owner, dates, tags) rides alongside a primary label. Not for marketing lists, settings, or feeds of mixed content.

## The two moves the base gets wrong here

### 1. Hierarchy by opacity, not size

The base (§3) ranks hierarchy tools "size → weight → color/opacity — reach for size first." **In a dense row, invert it.** Every row is one type size; hierarchy is carried *entirely* by ink level:

- **Primary** (the title / the one thing you scan for): full text color.
- **Everything else** (ID, parent, project, labels, dates): one muted step down — a single cool-tinted gray, not several.

The squint test is the proof: blur the screen and you should see a clean column of titles, with all metadata dissolving to gray. If two ink levels compete, you over-encoded.

```
--text:        #eeeef0;   /* primary — titles only */
--text-muted:  #8a8f98;   /* ALL secondary metadata, one level */
--text-subtle: #62666d;   /* faintest: counts, empty-meta, far dates */
```

Why it works: size-based hierarchy needs vertical room a dense row doesn't have. Opacity costs zero height, so the row stays 36px and still reads instantly.

### 2. No row dividers — separate by rhythm + hover

The base (§6) headlines "prefer hairline borders over shadows," with the no-divider option as a parenthetical afterthought. **For a dense list, the parenthetical is the default.** Drop per-row borders entirely:

- Separation comes from the **consistent row height** (a 36px rhythm reads as rows without lines) and a **120ms hover lift**.
- Lines between every row make the list read as a *table* — heavier, busier, harder to scan a long column.
- Keep a hairline only at true section boundaries (the panel edge, the toolbar), never between peer rows.

```css
.row { height: 36px; transition: background 120ms ease-out; }   /* no border */
.row:hover { background: var(--row-hover); }
```

## The recipe (tokens + anatomy)

**Density tokens** — a dark working surface (light works the same with the ramp flipped):

```
--row-h: 36px;            /* the dense band (§8: 32–36 dense / 40–52 comfortable) */
--bg:      #08090a;       /* app + nav — dark, never pure #000 */
--surface: #0f1011;       /* the raised list panel */
--row-hover: #15161a;
--grp-bg: #131417;        /* sticky group header — MUST be opaque (see gotcha) */
font-size: 13px;          /* workhorse; 12px for meta; never below 12 */
font-variant-numeric: tabular-nums;   /* IDs + dates align in their columns */
```

**Row anatomy, left → right** — fixed-width leading slots, then the flexible title, then a right-aligned metadata cluster:

```
[priority] [ID] [status] [title ……………… ›parent]   ⟶ flex spacer ⟶   [project chip] [label dots] [dates] [avatar]
   16px    52px   16px      full ink, ellipsis              muted, all one ink level, fixed slots
```

- Title gets `min-width:0; white-space:nowrap; text-overflow:ellipsis` so a long title truncates instead of wrapping the row to two lines (a dense list must hold one line — the AP from the old kit's M3 table).
- The metadata cluster sits in a right-aligned group; the flex spacer between title and metadata is what keeps the title left and the metadata right.
- Group headers: status glyph + label + count, on the opaque `--grp-bg`, `position:sticky`.

## Gotcha (caught in the reproduction)

**A sticky group header must have an opaque background.** A near-transparent tint (`rgba(255,255,255,.02)`) looks fine at rest, then rows scroll *through* it and you read two layers of text. Give it a solid `--grp-bg` (one step lighter than the panel) and a `z-index`. This is a general sticky-element rule, but dense lists are where it bites because the headers stay pinned while a long list scrolls under them.

## Don't

- ❌ Bold the title to make it primary — opacity already did the work; bold-everything flattens the squint test.
- ❌ Color the metadata for "richness" — status is the only thing that earns color, and it earns it through shape first (see `state-as-shape.md`).
- ❌ Add zebra striping *and* the hover — pick rhythm + hover; striping is the table look this recipe avoids.
- ❌ Let any row wrap to two lines — truncate the title, keep the rhythm.
