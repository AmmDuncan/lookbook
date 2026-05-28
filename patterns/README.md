# Patterns — per-surface calibrations

Each file in this directory calibrates `fundamentals.md` for one **page archetype**. Inherit everything from fundamentals; add surface-specific numbers where the floor is too generic.

## File shape

```markdown
# Pattern: <archetype>

**Inherits:** all of `fundamentals.md` unless overridden below.

## Surface intent
One sentence: what this surface is for, who reads it, density expectation.

## Calibrations
P-<archetype>-01. <rule with concrete numbers>
   - Refines: F<n> (or "new" if no parent fundamental)
   - Why: <reason>
   - Check: <how to verify>
```

## Archetypes to cover (priority order)

1. `dashboard.md` — KPI tiles, charts, dense data, scan-first reading. Compact density.
2. `form.md` — create/edit, labelled fields, validation, single primary action. Medium density.
3. `detail-page.md` — record detail (vehicle, user, order). Hero + tabs + related data.
4. `list.md` — searchable/filterable index. Compact rows + filter rail.
5. `marketing.md` — landing/pricing/feature pages. Sparse density, display type.
6. `auth.md` — login/signup/OTP/recovery. Centered card, minimal chrome.
7. `empty-state.md` — empty / zero / first-run states across surfaces.
8. `settings.md` — sectioned forms, sticky save bar.

Build on demand — when a surface is first designed for a project, write its pattern file. Don't pre-populate all 8.
