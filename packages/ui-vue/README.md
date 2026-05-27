# @lookbook/ui-vue

Vue 3 primitives implementing the Lookbook component specs. **Built once, reused by every Vue/Nuxt project** — a new Vue app just installs this + `@lookbook/tokens` and overrides skin tokens.

> Status: **stub**. Populated by the DVLA bridge pass (map `app/components/ui/` → gallery spec → align → extract here).

## Rules for every primitive

- Reference `@lookbook/tokens` only — **no** raw Tailwind default colors (`bg-emerald-500`), hex, or magic px.
- Match the gallery specimen exactly: all variants, sizes, and interaction states (default/hover/focus-visible/active/disabled/loading where applicable).
- Typed props contract (TS `defineProps`).
- Ship the relevant states for composite primitives (loading/empty/error).

## React?

When a React app appears, add a sibling `@lookbook/ui-react` off the **same** tokens + gallery spec. Don't fork tokens; don't copy components between frameworks.
