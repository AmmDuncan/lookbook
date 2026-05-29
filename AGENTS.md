# Lookbook — design brain (read before any UI work)

This repository is the **Lookbook design brain**: an agent-facing reasoning layer for building genuinely good, on-system, non-generic web UI. It is not a component library — it is the tokens, the rules, the per-surface patterns, and the verification loop that make *any* stack produce good UI.

## The one rule

**Before any UI work — designing, mocking up, building, styling, or reviewing a screen / component / page / flow — read `SKILL.md` in full and follow it.** It is the entry point and points you to everything else:

- `fundamentals.md` — the hard floor (measurable rules cited by ID: `F1`, `F2`, …).
- `patterns/<archetype>.md` — load the one for your surface (dashboard, form, auth, marketing, detail, list, pricing, checkout, …) plus the cross-cutting ones it names (states, motion, mobile, containers, accessibility).
- `patterns/approach.md` — for a new product/flow/redesign, run the **Frame-it intake** first: ask the user the framing questions (personality · accent/brand · theme · platform · scope) before composing. Never guess the dials.
- `CHECKLIST.md` — the runnable verification pass.

## Don't skip the render-and-look loop

Rules can't see flatness or "text-on-paper" dryness — only looking at the rendered pixels can. So: build the screen as a self-contained **HTML file**, **render it** (headless Chrome is fine: `--headless=new --screenshot`), **look at the actual PNG**, critique it against the north star (*is this genuinely good?* — not merely rule-passing), fix, and **re-render** until it holds. Then deliver to wherever it's going (the app, a mockup surface, etc.). Run the contrast gate on every text/fill pair:

```bash
node scripts/contrast.mjs "#fg:#bg:label" …   # exits non-zero on any sub-4.5:1 fail
```

## Not for normal use

`scripts/calibrate.*` is **maintainer-only** tooling for refining the brain against real products. Ignore it unless you are intentionally editing the brain itself.
