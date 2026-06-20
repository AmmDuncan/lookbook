# Palette generator

A local, offline browser tool that turns **one brand colour** into a complete Lookbook **skin** — the book's 7-step ramp mapped onto the semantic token roles, every value graded for contrast, light + dark, ready to drop in.

**Open it:** double-click `index.html` (no build, no server — works over `file://`).

## What it does

- **Brand → semantic ramp.** One colour generates `--accent`, `--text-primary/-secondary/-muted`, `--border`/`--border-strong`, `--surface`/`--bg`/`--surface-sunken`, etc. Neutrals carry the brand hue at low chroma (the book's "tinted greys").
- **Graded, not guessed.** Each role is measured against the surface it sits on. Text roles are *strong by design then verified* (primary lands well past its floor); only boundary roles (muted, functional border) are solved to the floor + a margin. The WCAG math mirrors `scripts/contrast.mjs`, so badges agree with the gate. **APCA Lc** is shown alongside WCAG — the better read on dark surfaces.
- **F66 white-on-accent.** If the brand is too light to carry white text, the tool deepens the accent (light mode) or flips `--text-on-accent` to dark ink (dark mode) — the book's light-brand fallback.
- **Status colours (F19/F55).** success / warning / danger / info, each a tint + a same-hue label solved to clear 4.5:1 on its own tint.
- **Add your own.** Any extra colour (a brand secondary, a chart hue) is graded both as text on the page and as a fill carrying white.
- **Light ⇄ dark**, live preview, and **export** a drop-in `skin.css` in the `@lookbook/tokens` skin format (load it after `tokens.css`).
- **Deep-link:** `?brand=RRGGBB&mode=light|dark`.

## Files

- `index.html` — markup + styles, loads the two scripts as classic `<script>` (so it opens offline).
- `color.js` — `window.LBColor`: OKLCH ⇄ sRGB, WCAG contrast (mirrors the gate), APCA Lc, gamut-clamped `oklchToHex`, `solveL`.
- `palette.js` — ramp + status + custom generation, render, export, wiring.

## Roadmap

- Per-size APCA pass/fail (currently shows Lc + a single target band).
- Multiple export formats (JSON, Tailwind `@theme`).
- Save/share a palette beyond the URL params.
