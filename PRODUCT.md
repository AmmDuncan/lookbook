# Product idea — Mason (working name)

**Status:** parked for later. We are not building the product now. This file holds the idea so it's not lost.

## The thesis
A drop-in "design brain" for AI coding agents (Claude Code, Cursor, Continue, Aider) priced at ~$4/mo. Solves the universal "AI-generated UI looks generic" pain by giving the agent persistent, measurable design rules + verification.

## What it is
1. **Fundamentals** — `fundamentals.md`, 40+ timeless rules with concrete numbers, cited by ID.
2. **Patterns** — `patterns/<surface>.md`, per-archetype calibrations (dashboard, form, marketing, auth, ...).
3. **Personality** — `personality.md` per project, declared deviations + signature move, so 1000 customers don't ship 1000 identical sites.
4. **Verification pass** — every UI checks against measurable rules; flags violations or moves them to personality.md.
5. **Calibration loop** (planned) — `lookbook:calibrate` command that pulls Mobbin references for a rule, measures, and updates the numbers with evidence. Keeps the rules fresh as fashion shifts while fundamentals stay timeless.

## Battle test result (2026-05-28)
Built a fictional Mason landing page from scratch using the system. Verification pass caught:
- 6 hard violations (incl. a real WCAG F15 contrast bug — white-on-orange CTA at 3.1:1)
- 6 marginal/context-dependent observations
- 28+ rules passed cleanly

The catch that proves the product: F15. A developer would have shipped that. The system stopped it.

Mockup + audit pushes (#7, #8) live in this session's easel tab.

## What would have to be true to ship
- One-line install in any agent (Claude Code skill, Cursor rules, MCP server).
- Visible before/after on the landing — every visitor can verify the value in 30 seconds.
- The calibration loop is automated and demonstrable (the killer feature, not the rules themselves).
- Per-project personality system prevents 1000 sites looking the same (already designed).

## Risks
- Anthropic/OpenAI bake equivalent rules natively over 12–24 months. Mitigation: curation + calibration loop as the moat (rules that stay current, evidence-backed).
- Distribution is the hard part. Plan: ship as a Claude Code skill first (lowest friction), Cursor + MCP second.

## Sandbox lives at
`~/work/sandbox/lookbook-battle-test/` — `personality.md` for the fictional Mason brand. Mockup HTML was inline in the easel push, not saved as a file; can be reconstructed from the push #7 history.

## When to revisit
After Lookbook itself feels production-ready (the gaps in SKILL.md → iconography, imagery, anti-patterns, data viz, responsive, copy rules — all closed; calibrate command built).
