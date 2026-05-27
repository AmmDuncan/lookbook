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
| Dialog / Modal | Reka `Dialog*` | ✓ scrim + centered + header/body/footer |
| DropdownMenu | Reka `DropdownMenu*` | ✓ items, shortcut, separator, destructive |
| Combobox | Reka `Combobox*` | ✓ client + **server-search** (focus-clears-search, loading, seen-map) |
| OverflowScroll | native + `useHoldRepeat` | ✓ scroll arrows (h/v/both), fade edges, press-hold |

**Composables:** `useServerSearch(fetcher)` (debounced + seen-map + `optionsFor(selected)`), `useHoldRepeat` (press-and-hold). DVLA patterns from v2 (`useSearchableUsers`/`OverflowScroll`) distilled into reusable, framework-light form.

Styling note: live overlay positioning lives in `ui-vue/src/overlays.css` (the gallery's
`components.css` styles overlays as in-frame demos; `styles.css` aggregates both).

## Pending

### `@lookbook/ui-vue` molecules — remaining
Drawer (Reka Dialog, side) · Toast (Reka Toast + a `useToast` composable) · MultiCombobox (Reka Popover + chips, multi-select) · Popover (Reka Popover) · Accordion · Field wrapper (label+helper+error).

### Organisms — LATER
App shell (sidebar + topbar), data table, page header, filter bar — bigger; build after molecules.

### Field/Form wrappers
`Field` (label + control + helper + error with `aria-describedby`) and `FieldSuccess` — flagged as gaps in the self-service mapping.

## Notes
- Self-service worktree was **not touched** — integration is a separate, user-led step.
- v2 is intentionally **not** bridged (user is happy with it).
- Verification: agent-browser headless. Re-verify with `pnpm --filter @lookbook/playground preview` then screenshot `localhost:4455`.
