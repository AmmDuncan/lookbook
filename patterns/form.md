# Pattern: Form

**Inherits:** all of `fundamentals.md` unless overridden below.
**Cite as:** `P-F-<nn>`.

## Surface intent
A surface where the user gives the system structured data. Success = the user finishes without confusion or error. Speed matters less than confidence. Every choice the form makes is a tax on the user's attention, so the form must be ruthlessly clear about what's required, what's optional, and what went wrong.

## Density band
**Medium (F26).** Field height 44–48px (F27); inner padding 12–16px; vertical gap between fields 16–20px; gap between sections 32–48px. Compact forms feel cramped and error-prone; spacious forms feel slow.

## Calibrations

**P-F-01. Label placement is contextual. Fast-entry forms (signup, checkout, create) → labels above. Settings/preferences forms → label-left / control-right rows are equally valid.** Weight 500, size 13–14px either way.
Refines: F23. *Why:* Wroblewski — top labels read fastest for *data entry*, and reflow to mobile cleanly. But settings forms are scan-and-occasionally-edit, not fast entry, so the label-left two-column row (Supabase, Gorgias — `evidence/form.md`) is a real, good pattern there. Inline (placeholder-as-label) is forbidden in both — it disappears the moment the user types.

**P-F-02. Field height 44–48px desktop, 48px mobile (matches touch-target F-rule).**
Refines: F27. *Why:* 48px is the iOS/Material touch minimum; smaller fields force the user to aim.

**P-F-03. Field background ≠ page background.** Off-page-bg fields read as inputs without a heavy border. If the page is `#fafafa`, fields are `#fff` (or token equivalent in dark mode).
Refines: F20, F21. *Why:* eliminates the heavy-border tell.

**P-F-04. One primary action per form. Secondary actions (Cancel, Back) are ghost/text, never equal-weight.**
Refines: F16. *Why:* two equal-weight buttons make the user think.

**P-F-05. Primary action placement is contextual. Wide/card forms → bottom-right. Single-column forms → left-aligned under the last field (common, real). Mobile → full-width sticky bottom.**
New. *Why:* visual flow ends where action begins; in a single column the flow ends at the left margin, so bottom-left under the field reads naturally (Babbel, SuperHi — `evidence/form.md`). Bottom-right is for the wider/card layout. Mobile sticky keeps it reachable as the form scrolls.

**P-F-06. Error messages live *under the field*, in danger color, size 12–13px, with a leading icon.** Never as a toast for field-level errors. Never red borders without a message.
New. *Why:* error placement is the difference between a 30-second fix and a 5-minute hunt.

**P-F-07. Validation timing: validate on blur, not on every keystroke.** Re-validate while typing only *after* the field has shown an error once.
New. *Why:* keystroke validation interrupts thought; blur validation respects intent.

**P-F-08. Required vs optional: pick one and mark only that.** If most fields are required, mark optional with "(optional)"; if most are optional, mark required with `*`. Never mark both.
New. *Why:* Jarrett & Gaffney — marking everything is the same as marking nothing.

**P-F-09. Sections > 6 fields get a heading.** Sections > 12 fields get a stepper or paginate.
New. *Why:* working memory tops out around 7±2; long forms without structure feel infinite.

**P-F-10. Backend-paginated option lists use `Combobox` with server-side search (per F18 in the global rule set and CLAUDE.md rule 32).** Native `<select>` is forbidden for growing data.
Refines: existing Lookbook rule. *Why:* DVLA-validated; client-side filtering of paginated data is silently broken.

**P-F-11. Help text below the label or below the field, size 12–13px, neutral-muted color.** Never inside the field as placeholder.
New.

**P-F-12. Single-column layout by default.** Two columns only when (a) the two fields are conceptually a pair (first / last name, city / postcode), AND (b) both fields are short.
Refines: F22. *Why:* multi-column forms break the F-pattern eye scan; users miss fields.

## Container — page vs overlay (defer to `patterns/containers.md`, P-CN)
Whether this form opens as a **modal**, a **slideover/drawer**, or its **own page/route** is the container decision owned by `patterns/containers.md`. Short create/edit (≤ ~5 fields, resolve-now) → modal (P-CN-01); medium quick-edit beside a live list, esp. rapid-repeat down rows → slideover (P-CN-03/04); long/multi-step/deep-linkable/refresh-safe → page, step-in-URL (P-CN-05/06). The entry-vs-settings split below is *which form shape*; P-CN is *which container holds it*.

## Two form contexts (pick by purpose — this is the dynamic-generation branch)
- **Entry form** (signup, checkout, create-X): a **centered card**, single column, **top labels**, primary **bottom-right** (full-width sticky on mobile). Optimized for fast, confident completion.
- **Settings / preferences form**: lives in the **left-sidebar app shell** (same shell as the dashboard), **sectioned** (Account / Profile / Theme…), **label-left rows OR top labels**, save **per-section or bottom-left**, the full control vocabulary (text, radio, segmented, toggle+description). Optimized for scan-and-occasionally-edit.
- **Destructive actions** (Delete account, Reset all) get their **own separated section**, visually distinct, away from the save action — never adjacent to Save.

## Composition defaults
- **Form card** with off-page-bg backplate, internal padding 24–32px desktop, 20–24px mobile.
- **Section breaks** with heading + short helper text + 32–48px gap before next section.
- **Sticky action bar** at form bottom on long forms (>1 viewport); inline action on short forms.
- **Field grouping** uses gap, not borders — related fields tighter (16px), unrelated wider (24–32px). (F12.)
- **Disabled state** for the primary action until the form is valid — but never *invisible*; show *why* it's disabled near the action.

## Forbidden moves
- Placeholder-as-label.
- Validation on every keystroke from the start.
- Red field border with no message.
- Native `<select>` for paginated/growing lists.
- Two equal-weight buttons at the bottom.
- Marking both required and optional fields.
- Modals on top of forms on mobile.
- "Reset" buttons next to "Submit." Catastrophic miss-click.
- Multi-column on small screens.

## Sources
Wroblewski (*Web Form Design*, *Mobile First*) · Jarrett & Gaffney (*Forms that Work*) · Lookbook gallery → Atoms (Field, Combobox, Select) + Molecules · DVLA AddVehicleServiceModal + native-`<select>` ban + server-search composables (battle-tested) · **Reference study of real public products (Supabase, Babbel, Gorgias, SuperHi) → `evidence/form.md`** (contextual labels/placement, entry-vs-settings split, destructive section).
