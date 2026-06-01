# Lookbook kits — pick your register

A **register** is a fixed, opinionated token foundation + a catalog of taste-bearing atoms and
composition recipes. It is how the cardinal rule (*converge on vocabulary, diverge on composition*)
becomes runnable: the register's tokens + atoms carry coherence, the recipes carry variety. Pick the
register by the surface's **job**, then compose from its kit. The generative machinery (treatment vs
composition, the granularity rules) is shared across registers and lives in `patterns/molecules.md`.

## The registers

| Register | Use for (surface job) | Feel | Kit | Picker |
|---|---|---|---|---|
| **cool-technical** | **Operate on data** — dashboards, ops consoles, monitoring, admin tables, record detail, settings, forms | Dense · cool-slate neutrals · Geist single-family · indigo accent · hairline borders · flat | `kits/cool-technical/` | `kits/cool-technical/KIT.md` |
| **marketing** | **Convince a visitor** — landing, pricing, features, CTA, social proof | Spacious · warm paper · Bricolage Grotesque + Geist · indigo accent · texture allowed · real depth | `kits/marketing/` | `kits/marketing/README.md` |

*Future registers (not yet built): warm-editorial, confident-fintech — port the slice, re-test.*

## How to choose

- **By the surface's job, not its topic.** A logged-in user *operating on records* gets cool-technical;
  a logged-out visitor *being convinced* gets marketing — even for the same concept (e.g. a pricing
  page rendered in the marketing register for visitors vs. a billing/settings surface in cool-technical
  for logged-in users).
- **One product often uses BOTH** — a marketing site (marketing register) + the logged-in app
  (cool-technical) + docs. Each is a distinct zone with a clear seam; any given page belongs to exactly
  one (`patterns/site-archetypes.md` P-SA-01).
- Within a register, **diverge on composition** (the recipes), never on the token system.

## Shared across every register

- **The token contract** — `@lookbook/tokens` (the one shipped package). Each register overrides the
  re-skin dials (accent, fonts, neutrals, radius, density); the scale/structure are constant.
- **The icon primitive** — ONE Lucide sprite (`kits/cool-technical/_icons.svg`), `currentColor`
  (P-AS-01 / P-MOL-11). The marketing kit reuses it.
- **The granularity machinery** — the two-layer model + the atom/recipe catalogs for both registers:
  `patterns/molecules.md`.
- **The asset-sourcing rules** — icons / illustrations / fonts / imagery: `patterns/assets.md` (P-AS).

## Discipline (every register, every change)

Render at 2× and LOOK before trusting it (`--force-device-scale-factor=2 --virtual-time-budget=5000`
so webfonts load); contrast-gate every non-neutral text pair (`scripts/contrast.mjs`); run the Flow
audit on edit-oriented surfaces; battle-test new rules against real shipped products. The exit
criterion for "this register is production-grade" is a **convergence test** — a fresh rules-only build
that comes back with nothing invented (both kits have passed it).
