# Cookbook — the details rail (and the master-detail shell)

> The metadata sidebar — Status / Priority / Assignee / dates / contact, the structured facts *about* the thing in the main pane. It's the rail that turns a reading view into a workspace. The job: a scannable column of label→value rows that never reads as a blank form.
>
> **Earned by:** reproduction #8 (`reproductions/lemni-inbox.md`). §8 gives layout principles but never the details-rail recipe or the master-detail shell it lives in. This is both.

## When to reach for this

Any app where you select a thing and act on its metadata — a CRM contact, an issue, a ticket, an email, a record. The rail pairs with a master-detail shell: **nav (which section) → list (which item) → reading (the item) → details (metadata about it)**. Each pane narrows scope.

## The master-detail shell

```
┌────────┬──────────┬─────────────────────────┬──────────────┐
│ nav    │ list     │ reading pane (1fr)      │ details rail │
│ (fixed)│ (fixed)  │ the selected item       │ (fixed)      │
│        │          │                         │ Information  │
│ Inbox● │ ⬤ Alex   │  Alex Smith · CPO       │  Status  ●…  │
│ Assign │  4d      │  ┌── field-labeled ──┐  │  Priority ▮▮ │
│        │  Busy…   │  │ Email / Subject…  │  │  Assigned ⬤  │
│        │          │  └───────────────────┘  │  Contact     │
└────────┴──────────┴─────────────────────────┴──────────────┘
   full-height hairline rules BETWEEN panes  ← the one place vertical rules are right
```

- Widths encode the hierarchy: nav + list are fixed-narrow chrome, the reading pane takes the `1fr`, the rail is fixed-narrow again.
- **Full-height hairlines between panes are correct (§8).** The data-table cookbook bans *column* rules; here a 1px vertical hairline separates *regions*, which organizes. Rules between regions = good; rules between cells = clutter. Know the difference.

## The details rail — the recipe

```
DETAILS
─────────────
INFORMATION                  ← quiet uppercase section caption
Status      ● In Progress    ← label (muted, fixed-width) → value (with leading glyph)
Priority    ▮▮▯ Medium
Assigned    ⬤ Alex Smith
Dates       📅 Jul 30  + Add
─────────────
CONTACT
Phone       + Add            ← empty field shows the affordance, NOT a blank
```

- **Captioned sections.** Group rows under quiet uppercase captions (Information / Contact / Thread). A hairline or spacing between sections.
- **The field row: fixed-width muted label → value.** The label column is a *fixed width* so all values left-align into one readable column. Label is `--muted`; value is `--ink`.
- **Values carry a leading glyph that encodes the field.** A colored **status dot**, a tiny **priority bar-chart**, a **mini-avatar** for an assignee, a calendar icon for a date. The glyph + word together (same color+shape+word discipline as `state-as-shape.md`) — never a glyph alone.
- **Empty fields show "+ Add", never a blank gap.** A field with no value reads "+ Add" in a faint tone — it says *this field exists and is fillable*. A blank reads as broken; the affordance reads as designed.
- **The reading pane echoes the same field rhythm.** Show the item's own fields (Email / Subject / Body) as the same caption→value pattern inside a hairline-bordered card. One way of showing a field, used in two places.

## Don't

- ❌ A blank gap where a field has no value — use "+ Add".
- ❌ A free-width label column — fix it so values align into a column.
- ❌ A bare colored dot with no word (§11) — glyph reinforces the label, doesn't replace it.
- ❌ Boxing every rail row in its own card — it's a quiet list, not a stack of cards.
- ❌ Vertical rules *inside* a pane (that's the table mistake) — the only vertical rules are the full-height ones *between* panes.
