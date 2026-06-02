# Lookbook

**Lookbook is a design brain — with a render-and-look loop at its core.**

An agent-facing reasoning layer (timeless fundamentals, per-surface patterns, a composition grammar, an anti-generic-AI sweep) wired to a perception loop: it builds the screen, renders the real pixels at 2×, *looks*, and iterates — against what it sees and your eye — instead of emitting code it never views. Design **intelligence + a way of seeing**, on whatever stack you already use. It is not a component library; bring your own components.

It also **asks before it designs and after it presents**: a *Frame-it intake* pulls your direction (personality, accent, density, platform) up front, and a *Review intake* pulls your reaction afterward and revises on it — so the result converges on your eye, not the model's. (A token contract and a visual gallery ship alongside as supporting reference — but the brain and the loop are the point.)

## Getting started

The brain is plain markdown — any agent that can read files can use it. Clone it once, then point your tool at it.

```bash
git clone https://github.com/AmmDuncan/lookbook.git ~/work/tools/lookbook   # or anywhere you like
```

**Claude Code** (auto-triggers as a skill):
```bash
ln -s ~/work/tools/lookbook ~/.claude/skills/lookbook
```
Restart Claude Code. Now any UI request ("design a settings page", "build this dashboard", "show me 3 directions") loads the brain automatically — it reads `SKILL.md`, the relevant pattern, runs the render-and-look loop, and verifies. Confirm with `/skills` (you should see **lookbook**).

**Codex** (and other agent CLIs that read `AGENTS.md`):
```bash
cd ~/work/tools/lookbook   # work from inside the repo, or reference its path
```
`AGENTS.md` at the repo root onboards the agent automatically — it reads `SKILL.md` before any UI work. If your tool doesn't auto-read `AGENTS.md`, tell it once: *"Read `SKILL.md` in this repo and follow it for the UI work below."*

**Any other agent / model:** one instruction — *"Read `SKILL.md` first, then `fundamentals.md`, then the relevant `patterns/<archetype>.md`; build the screen as an HTML file, render it (headless Chrome) and look at the pixels, iterate to genuinely-good, then verify with `CHECKLIST.md` and `scripts/contrast.mjs`."*

**Smoke test** (paste into any of the above):
> Using the Lookbook brain in this repo, design a pricing page for a small SaaS. Run the Frame-it intake first, then build an HTML mockup, render and look, and verify.

You should get an intake question or two, then a rendered mockup that cites `F`/`P-` rule IDs and clears the contrast gate.

## What's in it (the brain first)

```
lookbook/
├── SKILL.md           # ⭐ the entry point — how an agent USES the brain (read first)
├── AGENTS.md          # auto-onboarding for Codex & agent CLIs → points at SKILL.md
├── fundamentals.md    # F-rules — timeless design fundamentals, cited by ID
├── patterns/          # per-surface + cross-cutting calibrations: dashboard · form · auth ·
│                      #   marketing · detail · list · states · motion · mobile · accessibility ·
│                      #   identity · approach (the Frame-it + Review intakes) · …
├── anti-patterns.md   # the generic-AI "tells" sweep
├── CHECKLIST.md       # the runnable verification pass
├── scripts/
│   ├── contrast.mjs   # zero-dep WCAG contrast gate — the brain's one hard gate
│   └── calibrate.*    # maintainer-only: refine the brain against real products
├── apps/gallery/      # the canonical VISUAL spec (human reference)
└── packages/tokens/   # a token contract to copy/reference (supporting — not required to use the brain)
```

**Bring your own components.** Lookbook guides the *design*; you keep your own primitives (it never gets imported as a dependency). It makes whatever component layer you already have produce good UI.

## How it works

An agent loads **`SKILL.md`** and follows it:

1. **Frame-it intake** — for a new surface or redesign, it asks you the framing inputs first (personality · accent · theme · platform · scope). Never guesses the dials.
2. **Pattern + directions** — pulls the relevant `patterns/<archetype>.md`, generates 2–3 composition directions of one clean system (*converge on vocabulary, diverge on composition*).
3. **Render and look** — builds an HTML mockup and **renders it**, because rules can't see flatness — only looking at the pixels can.
4. **Verify** — walks the `fundamentals.md` `Check:` lines, counts anti-pattern tells, and runs the `contrast.mjs` gate (a hard, blocking check).
5. **Review intake** — presents the result and asks what you'd change (incl. "does any part feel flat?"), then revises on your reaction — so the design lands on *your* eye, not the model's.

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
