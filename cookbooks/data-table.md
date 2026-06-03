# Cookbook — the data table

> The multi-column record list — people, orders, vehicles, invoices. The most slop-prone *system* surface: it wants to become a spreadsheet (every cell boxed, every column equal-weight) and stops being readable. The job: one column carries identity, the rest recede, and the grid is held by rhythm not rules.
>
> **Earned by:** reproduction #7 (`reproductions/deel-table.md`). §8 names tables and gives the principles (hairlines, anchor column, quiet headers) but never assembles the surface. This is the assembly.

## When to reach for this

Any list of records with several attributes per row that the user scans, sorts, filters, and acts on — an admin people directory, an orders table, a transactions list. If the data is one attribute per row, you want `dense-data-list.md` instead; reach here when there are *columns*.

## The anatomy

```
 ⌕ ⤓  [Group ▾] [●Worker status ▾] [Type ▾] [Country ▾]      [View as report] [Configure columns] ⋮   ← toolbar
 Total 289 people                                                                                       ← count line
 ☐  Person ⇅            Country      Entity        Worker status ⇅   Coverage   Start                    ← header
 ────────────────────────────────────────────────────────────────────────────────────────────────────
 ☐  ⬤ Adriana Costa     🇹🇼 Taiwan    Wayne Ent…    ● Active          None       Jul 4                    ← anchor cell + muted cols
    Regional Web Admin
 ☐  ⬤ Anna Olsson       🇺🇸 US        Wayne Ent…    ● Active          None       Nov 1                    + status pill + row ⋮
```

## The load-bearing rules

- **One anchor column carries identity; the rest recede.** The Person/primary cell gets weight — a colored monogram avatar + a link-toned name + a muted secondary line (role, email). *Every other column* drops to `--muted` one-line text. This is what stops the wall-of-equal-text. The eye tracks rows by the left-anchored identity, not by reading every cell.
- **Hairlines horizontal only — no vertical rules (§8).** Rows separated by a single faint hairline; **zero** column dividers. Vertical rules are the spreadsheet tell. The columns hold their lanes by alignment + the header, not by boxing.
- **Status is color + a WORD + a dot — never color alone (§11 / AP25).** A soft tinted pill with a leading dot *and* the label ("Active" / "Invited"). The word carries the meaning; the dot and tint reinforce. Each state is its own token triad (bg / text / dot). A bare colored dot or a color-only cell fails colorblind users and reads as decoration.
- **Affordances only where they're real.** Sort chevrons go on the *genuinely sortable* columns, not every header. Bulk-select is a header checkbox + per-row checkboxes (unfilled, hairline) — present but quiet. A row-end `⋮` opens row actions. Don't decorate every header/cell with an affordance it doesn't have.
- **The toolbar: facets left, utilities right.** A row of filter pills (ghost, one filled to show the active facet) + a search/sort icon cluster on the left; table-level utilities (View as report, Configure columns, overflow `⋮`) right-aligned. A "Total N" count line sits between toolbar and header.
- **Light done quiet (§4).** White table on a faintly cooler chrome. The only saturated color is the avatar monograms, the link-toned names, and the status hues. Everything structural is a neutral.

## Don't

- ❌ Vertical column rules / a boxed-cell grid (§8) — hairlines between rows only.
- ❌ Equal weight on every column — pick one anchor, mute the rest, or it's an unscannable wall.
- ❌ A bare colored dot or a color-only status cell (§11 / AP25) — color + word + dot.
- ❌ Sort chevrons / affordances on columns that don't have them — signals a capability that isn't there.
- ❌ Zebra striping *and* hairlines *and* hover *and* rules all at once — pick the one cue (here: hairlines + a generous row height) and stop.
