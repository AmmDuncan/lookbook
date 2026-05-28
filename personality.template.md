# Project personality

Per-project file. Copy to the project root as `personality.md` (or `design/personality.md`) and fill in. Lookbook reads this before designing — declared deviations are sanctioned; everything else must follow `fundamentals.md`.

---

## Brand archetype
<one of: Editorial · Pragmatic · Playful · Industrial · Quiet-luxe · Brutalist · Soft-modern — see gallery → Personality>

## Personality dials (5 of 6 match the archetype; 1 is the deliberate wildcard)
- **Accent:** <hex / token override>
- **Type pairing:** <display font> + <sans font> (see gallery → Foundations · Font pairings)
- **Neutral temperature:** <warm / cool / true-neutral>
- **Radius personality:** <0 / 2 / 4 / 8 / 12 / 16 / pill>
- **Density:** <compact / medium / spacious>
- **Wildcard (the one that defies archetype):** <which dial, what value, why>

## Signature move (exactly one, from gallery → Variation)
- **Pick:** <e.g. "oversized type" / "asymmetric hero" / "edge anchor" / "ticker rail">
- **Used on:** <which surfaces, max 3 instances per page>
- **Removable without breaking layout:** <yes — required to be yes>

## Declared deviations from `fundamentals.md`

For each rule the project breaks, list:

```
F<n>: <original rule>
   Deviation: <new value or behavior>
   Reason: <why — brand spec, density-matches-work argument, etc.>
   Bounded by: <where it applies / does NOT apply>
```

Example:

```
F20: page background never pure white
   Deviation: marketing surfaces use pure white background
   Reason: brand spec for the public site insists on stark white; product surfaces still off-white
   Bounded by: only routes under /marketing, /pricing, /about
```

If you find yourself wanting to break a rule that isn't in this list — STOP. Either add it here with a reason, or fix the design to honor the rule. Undeclared deviations are violations, not personality.
