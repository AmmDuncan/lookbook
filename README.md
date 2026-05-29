# Lookbook

The design-system mastermind that backs all web-app UI work — **brain + gallery + tokens, bring-your-own-components**. Fundamentals + per-surface patterns + page recipes + composition grammar + the token contract + the visual spec, so any stack ships UI that's consistent, on-brand, accessible, and never generic-AI. Lookbook is the layer that makes *any* component library produce good UI — not another component library.

## Layout

```
lookbook/
├── packages/
│   └── tokens/        # @lookbook/tokens — CSS custom properties. The ONE shipped package, shared verbatim by ALL projects.
├── apps/
│   └── gallery/       # the canonical visual spec (Claude Design export)
├── fundamentals.md    # F-rules: timeless design fundamentals, cited by ID
├── patterns/          # per-archetype + cross-cutting calibrations (dashboard, form, motion, mobile, …)
├── anti-patterns.md   # the generic-AI "tells" sweep
├── CHECKLIST.md       # the runnable verification pass
├── SKILL.md           # the agent brain — how to USE Lookbook
└── scripts/
    ├── sync-gallery.sh
    └── contrast.mjs   # zero-dep WCAG contrast gate
```

> **Components are bring-your-own.** Lookbook does not ship a component package — it ships the tokens, the gallery specs (what each primitive looks/behaves like), and the brain. You build the primitives on your own stack to those specs, or vendor a reference implementation. (The former `@lookbook/ui-vue` Vue primitives were vendored into the one app that used them; see `BRIDGE-self-service.md`.)

## How it's used

- **Tokens** are dropped into every project (`import "@lookbook/tokens/tokens.css"`) and re-skinned per project by overriding `:root` vars.
- **Components** are the project's own, built/vendored to the gallery spec and kept in sync with it — never a Lookbook dependency.
- **Agents** load `SKILL.md` — it encodes the token contract, the design fundamentals + patterns, the use-or-build rule, the page-composition protocol ("converge on vocabulary, diverge on composition → generate 3 directions"), the render-and-look verification pass, and points at the gallery as the visual source of truth.

## Refreshing the gallery

When Claude Design adds/updates a chapter, re-export and:

```bash
bash scripts/sync-gallery.sh ~/Downloads/Lookbook.zip
```

This syncs the section HTML/CSS into `apps/gallery` and the shared `tokens.css` into `packages/tokens`.

## View the gallery

```bash
npm run gallery   # serves apps/gallery at http://localhost:4444 (static HTML, no build)
```
