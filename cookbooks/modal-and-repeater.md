# Cookbook — the modal & the repeater

> The create/edit dialog floating over a dimmed app — and the "edit a list of things" control that lives inside so many of them. The job: reuse the overlay shell you already have, and get the repeater (add / reorder / remove a row) right, because forms reach for it constantly and it's never spelled out.
>
> **Earned by:** reproduction #9 (`reproductions/linktree-modal.md`). It confirmed the overlay shell from `command-palette.md` transfers; this cookbook adds only the modal-and-repeater-specific layer on top.

## When to reach for this

A focused create/edit task that shouldn't navigate away — add a field, create a record, edit settings for one thing. If it's a multi-step task, it's a wizard (same shell, stacked steps). If it's a list of sub-items inside the form (choices, options, line items, fields), that's the repeater.

## The shell — don't reinvent it

The backdrop + centered floating surface + shadow contract is **the same one `command-palette.md` documents** — scrim that dims the app (still faintly visible — a layer, not a navigation) + a centered surface + a real shadow (it floats, so it earns it, §6). Reuse it. A modal, a ⌘K, and a slideover all share this shell (a slideover just anchors to an edge instead of centering). Read that cookbook for the shell; this one is the contents.

## The modal-specific anatomy

```
        ┌─ ‹ Add field ────────────┐  ← prior step peeks behind (multi-step stack)
      ┌─┴──────────────────────────┴─┐
      │        Add field          ✕  │ ← centered title · X is the cancel
      │ Field Type                   │
      │ [◉ Single choice         ▾]  │ ← select
      │ Label                        │
      │ [ Design Scope            ]  │
      │                     12/200   │ ← char counter on a limited field
      │ Choices                      │
      │ ⠿ [ Interior            ] 🗑  │ ┐ the repeater
      │ ⠿ [                     ] 🗑  │ ┘ (empty trailing row)
      │ + Add another option         │
      │ [        Save            ]   │ ← full-width single primary
      └──────────────────────────────┘
```

- **One full-width primary action; the X is cancel.** No competing secondary button up top — the dismiss is the X (or a scrim click). Save is full-width, unmistakable.
- **Char counter on any length-limited field.** `12/200`, right-aligned under the input. Static frames need it where a live one would validate on type.
- **Multi-step? Stack the steps.** A faint, slightly-offset previous-step card behind the top edge (carrying the back-arrow) signals "you're mid-flow" without a breadcrumb. The front card has the title + X; the back card has the back-affordance.

## The repeater — the load-bearing detail

The "edit a list of sub-items" control. Each row = **drag handle (⠿, reorderable) + the input + a remove (🗑)**, then a **"+ Add another option"** affordance in the accent, and an **empty trailing row** inviting the next entry. That's the whole contract: add, reorder, remove, and an obvious next-row. Forms reach for this for choices, options, line items, tags, conditions — build it once, reuse it.

## Accent discipline (§4)

- **One accent, flat fill, used on the primary + the add-affordance + a selected radio — nothing else.** Solid, not a gradient. The spine's default is a flat accent button; a **gradient fill is a brand deviation you can choose but shouldn't reach for by default** (a gradient on a button is the kind of thing §11 side-eyes — it reads as decoration unless the brand owns it). If you're not deliberately matching a brand, keep it flat.
- Soft-filled inputs (faint grey fill + hairline), generous radii — a friendlier register suits consumer/creator tools; tighten the radii and cool the fills for a more technical one.

## Don't

- ❌ Reinvent the scrim/float/shadow — reuse the `command-palette.md` shell.
- ❌ A gradient primary button by default (§11) — flat accent fill; gradient only when a brand explicitly owns it.
- ❌ Two competing top buttons (Save + Cancel both prominent) — one full-width primary, X is cancel.
- ❌ A repeater with no reorder, no per-row remove, or no empty trailing row — those three are the contract.
- ❌ A limited field with no counter — the user hits the cap blind.
- ❌ A full page where a modal belongs — kill the context only when the task deserves its own route.
