# @lookbook/tokens

The Lookbook design-token contract — pure CSS custom properties, no framework. This is the **single source of truth** for color, spacing, radius, shadow, typography, motion, sizing, status, tints, and the hero-only gradient/secondary accent.

## The contract

Components reference **token names**, never raw values. A project re-skins by overriding token **values** in `:root` — the structure (scale, weights, tracking) stays constant. Fonts, accent, neutrals, and radius personality are all re-skin dials.

## Usage

```ts
// app entry (Nuxt/Vite/etc.)
import "@lookbook/tokens/tokens.css";
```

Then point your Tailwind theme at the vars so utilities resolve to tokens:

```js
// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        border: "var(--border)",
        accent: "var(--accent)",
        "fg-primary": "var(--text-primary)",
        // …status, etc.
      },
    },
  },
};
```

## Re-skinning a project

```css
:root {
  --accent: oklch(0.55 0.17 145);   /* swap the brand */
  --font-display: "Fraunces", serif; /* swap the display face */
  --radius-md: 4px;                  /* sharper personality */
}
```

Light/dark are handled via `[data-theme="light|dark"]`; theme presets and the full token reference live in the gallery's **Foundations** chapter.
