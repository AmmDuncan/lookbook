# Lookbook

The design-system mastermind that backs all web-app UI work. Tokens + component specs + page recipes + composition grammar — so every project is consistent, on-brand, accessible, and never generic-AI.

## Layout

```
lookbook/
├── packages/
│   ├── tokens/        # @lookbook/tokens — CSS custom properties. Shared verbatim by ALL projects.
│   └── ui-vue/        # @lookbook/ui-vue — Vue 3 primitives (built once, reused). ui-react added when needed.
├── apps/
│   └── gallery/       # the canonical visual spec (Claude Design export)
├── SKILL.md           # the agent brain — how to USE Lookbook
└── scripts/
    └── sync-gallery.sh
```

## How it's used

- **Tokens** are dropped into every project (`import "@lookbook/tokens/tokens.css"`) and re-skinned per project by overriding `:root` vars.
- **Components** are per-framework, built once to the gallery spec, reused across all projects in that framework.
- **Agents** load `SKILL.md` — it encodes the token contract, the use-or-build rule, the page-composition protocol ("converge on vocabulary, diverge on composition → generate 3 directions"), and points at the gallery as the visual source of truth.

## Refreshing the gallery

When Claude Design adds/updates a chapter, re-export and:

```bash
bash scripts/sync-gallery.sh ~/Downloads/Lookbook.zip
```

This syncs the section HTML/CSS into `apps/gallery` and the shared `tokens.css` into `packages/tokens`.

## View the gallery

```bash
pnpm gallery   # serves apps/gallery at http://localhost:4444
```
