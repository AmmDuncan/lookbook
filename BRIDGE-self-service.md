# Bridge analysis — DVLA Self-Service → Lookbook

How the self-service redesign (`dvla-self-service-worktrees/self-service-design-refresh`, branch `feat/self-service-design-refresh`) maps onto Lookbook, and the plan to adopt it. **Read-only analysis — the worktree was not modified.**

## Headline

The redesign already arrived, independently, at a **Lookbook-shaped** system: off-white `pagebg #F6F8F4`, white surfaces, a semantic green accent ramp, gray ramp with line colors, focus rings, status colors, rounded cards. So adoption is **re-skin + align**, not rewrite. The brand is already captured in `packages/tokens/skins/dvla-self-service.css`.

Stack note: self-service uses `@headlessui/vue` today; `@lookbook/ui-vue` is built on **Reka UI** (which v2 already uses). Adopting ui-vue modernizes self-service onto Reka.

## Component mapping (from read-only agent pass)

**STRONG matches** (already close to spec):
OtpInput · auth `Tabs` (pill) · forgot-password page · login page · `auth.vue` split layout · `AvailableServicesCard`.

**PARTIAL** (align to spec):
- `Button.vue` — has primary/secondary/outline/link/inverse + sm/md/lg. **Missing: destructive, xs/xl, ghost, and a `focus-visible` ring (no keyboard focus indication today).** Size heights are raw px, not the token scale.
- `form/Input.vue` — no size prop; **`aria-invalid` not set on the control** in error state; no readonly/helper/success; raw rgba focus/error rings instead of the `shadow-focus-ring` token.
- `PageCard.vue` — single slot; no header/body/footer, no loading/empty states.
- `layout/*` (AuthSidebar, DashboardSidebar, Topbar) — raw hex gradient stops that have theme-token equivalents; `<div>` used where `<aside>`/`<header>` is semantic; no collapsible sidebar; no topbar search.

**MISSING in self-service → build in ui-vue:**
Badge / status chip · Alert / inline banner · number Stepper · destructive Button.
(All except domain-specific items are now built or queued in ui-vue.)

**Domain-specific (no Lookbook home — leave as-is):**
AuthSidebar route-map SVG · dashboard sidebar decoration · `AccountTypeSelector` card-radio · `btn-option` wizard selector · license-verification banner · profile-incomplete strip · notification center.

## Quick wins (low-effort, high-value — for integration time)
- Button: add `focus-visible` ring; swap raw heights → size tokens.
- Input: set `aria-invalid` on the control; swap raw rings → `shadow-focus-ring`.
- OtpInput: add `role="group" aria-label`; swap raw rgba → tokens.
- Tabs: add `role="tablist"`/`role="tab"`/`aria-selected`.
- Layouts/sidebars: replace raw hex gradient stops with `theme('colors.green.*')`.
- forgot-password: reuse the `auth-card` utility instead of inline classes.
- Topbar → `<header>`, DashboardSidebar → `<aside>`.

## Integration plan (when self-service adopts Lookbook — user-led)
1. `pnpm add @lookbook/tokens @lookbook/ui-vue` (link the workspace or publish to a private registry / git).
2. `import "@lookbook/tokens/tokens.css"` then the skin (`skins/dvla-self-service.css`) in the app entry; `import "@lookbook/ui-vue/styles.css"`.
3. Point `tailwind.config.js` theme at the CSS vars (so existing utility usage keeps working), or migrate gradually.
4. Pilot one surface first (login page is a STRONG match) — swap `Button`/`Input`/`Tabs`/`Badge` for ui-vue, verify in browser, then roll outward.
5. Apply the quick wins as components are swapped.

Adopt incrementally — ui-vue and the existing components can coexist during migration.
