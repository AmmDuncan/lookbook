# Lookbook — build status

_Last updated: 2026-05-27 (overnight autonomous run)_

## Done & browser-verified

### Gallery (visual spec) — complete
13 chapters exported from Claude Design, synced into `apps/gallery/`:
Foundations · Atoms · Molecules · Organisms · Auth · States · Motion · DataViz · Marketing · Personality · Recipes · **Layout** · Guide.

### `@lookbook/tokens` — complete
- `src/tokens.css` — the contract (OKLCH ramps, semantic light/dark roles, size scale, status, tints, hero-only gradient, motion).
- `skins/dvla-self-service.css` — example skin mapping the contract onto the DVLA-green brand.

### `@lookbook/ui-vue` — ATOMS done (Reka pattern)
Built on the spec's `components.css` (shipped as `styles.css`) + typed Vue SFCs. All **browser-verified** in the playground across default-light, default-dark, and the DVLA skin (see `/tmp/lookbook-shots/`, or run the playground):

| Atom | Notes |
|---|---|
| Button | 5 variants, 5 sizes (xs–xl), icon-only, loading, disabled, **focus-visible ring** |
| Input | sm/md/lg/xl, error (`aria-invalid`), disabled, readonly, leading/trailing affix |
| Textarea, Select | sized, error states (Select = native styled) |
| Checkbox, Radio, Switch | native (accessible), `v-model` |
| Stepper | min/max/step, `v-model` |
| Badge | 6 variants × subtle/solid, dot, sm/md |
| Avatar | image + initials fallback, sizes, status dot |
| Card (+ Header/Body/Footer) | base + interactive |
| Spinner, Skeleton | sizes / variants |

### Playground — `apps/playground`
Vite + Vue gallery of every atom with light/dark + DVLA-skin toggles. `pnpm --filter @lookbook/playground dev` (or `preview`).

### `@lookbook/ui-vue` molecules — core done (Reka-backed)
Built + verified in the playground:

| Molecule | Backing | Verified |
|---|---|---|
| Alert / inline-banner | native | ✓ 4 variants, dismissible |
| Tabs (pill + underline) | Reka `Tabs*` | ✓ active/disabled, keyboard |
| Tooltip | Reka `Tooltip*` | built (hover) |
| Dialog / Modal | Reka `Dialog*` | ✓ scrim + header/body/footer; **scroll-aware separators** (hairline only when content clips the edge) + `stickyBorders` to force; sticky header/footer, body scrolls |
| DropdownMenu | Reka `DropdownMenu*` | ✓ items, shortcut, separator, destructive |
| Combobox | Reka `Combobox*` | ✓ client + **server-search** (focus-clears-search, loading, seen-map), capped + scrollable popover |
| MultiCombobox | Reka `Combobox*` (multiple) | ✓ chips-in-field, checkmark rows, clears search on **close**, seen-map |
| OverflowScroll | native + `useHoldRepeat` | ✓ scroll arrows (h/v/both), fade edges, press-hold |
| Popover | Reka `Popover*` | ✓ side/align/offset, optional arrow |
| Drawer | Reka `Dialog*` (side) | ✓ left/right, scrim, header/body/footer; same scroll-aware separators + `stickyBorders` |
| Accordion | Reka `Accordion*` | ✓ single/multiple, collapsible, animated height |
| Field | native wrapper | ✓ label + helper/error/success, `aria-describedby` via slot props |
| Toast | Reka `Toast*` + `useToast` | ✓ success/danger/warning/info, action, sticky, stack position |

**Composables:** `useServerSearch(fetcher)` (debounced + seen-map + `optionsFor(selected)`), `useHoldRepeat` (press-and-hold). DVLA patterns from v2 (`useSearchableUsers`/`OverflowScroll`) distilled into reusable, framework-light form.

Styling note: live overlay positioning lives in `ui-vue/src/overlays.css` (the gallery's
`components.css` styles overlays as in-frame demos; `styles.css` aggregates both).

## Pending

### `@lookbook/ui-vue` molecules — DONE
All molecules built (see table above). Batch 2 (Drawer, Toast, MultiCombobox, Popover, Accordion, Field) browser-verified across light, dark, and DVLA skin.

### Gallery specimens — Lists & selection LANDED
Synced the Remix export: Molecules now has Combobox / MultiCombobox / OverflowScroll specimens. ui-vue Combobox/MultiCombobox/OverflowScroll were **re-pointed onto the gallery's official classes** (`.combobox-popover`/`.combobox-list`/`.combobox-row`/`.combobox-check`, `.multicombo`/`.chip--token`, `.overflow`/`.overflow-track`/`.overflow-arrow`) — implementation == spec, no more `.lb-*` forks (overlays.css keeps only the Reka popover width/height shim).

**Pending round-trip:** OverflowScroll's component outgrew the spec, so `.overflow*` in components.css was hand-extended (`.overflow--both`, `--overflow-fade-size/-color`, `--overflow-arrow-size`). A Claude Design prompt (`gallery-overflow-upgrade.txt`) is queued to make that canonical — until it's pasted + re-synced, a `sync-gallery.sh` would overwrite the hand edit.

### Accordion
Styling still lives in `overlays.css` (`.lb-accordion*`) — the export didn't add an Accordion specimen. Promote into `components.css` once the gallery ships one.

### Organisms — NEXT
App shell (sidebar + topbar), data table, page header, filter bar — bigger; build after molecules.

## Notes
- Self-service worktree was **not touched** — integration is a separate, user-led step.
- v2 is intentionally **not** bridged (user is happy with it).
- Verification: agent-browser headless. Re-verify with `pnpm --filter @lookbook/playground preview` then screenshot `localhost:4455`.
