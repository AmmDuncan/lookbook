# Pattern: Auth

**Inherits:** all of `fundamentals.md` unless overridden below.
**Cite as:** `P-A-<nn>`.

## Surface intent
Login, signup, OTP, password recovery, and the moments around them. The user is at their most impatient and most error-prone. Every visual choice serves *speed and trust*. This is not the place for marketing showmanship or product polish — it's the place for clarity and quiet competence.

## Density band
**Medium-spacious.** Auth cards are small focal islands in a mostly-empty surrounding. Inside the card: medium density (P-F field heights). Around the card: generous breathing room.

## Calibrations

**P-A-01. Centered auth column, max-width 380–440px, on a sparse backplate — with OR without card chrome; both first-class.**
New. *Why:* a wider column looks like a form, not a moment; narrower feels cramped on desktop. ~1/3 of excellent shipped auth has **no card** — the form floats centered, hierarchy carried by spacing + the one CTA (Duolingo, Codecademy, Asana, Linktree, Mistral, Brilliant — live-UI calibration); the card is one good option, not a mandate. The width band holds either way.

**P-A-02. Card padding 32–40px desktop, 24–28px mobile.**
Refines: F10. *Why:* the card *is* the page — it can afford the room.

**P-A-03. Heading 24–32px, weight 500–600, line-height 1.2.** One line for the heading ("Sign in"); optional 14–15px subhead below ("Welcome back. Continue to DVLA.").
Refines: F4. *Why:* the heading anchors the moment; bigger looks try-hard, smaller looks like a form section.

**P-A-04. Email + password (or OTP) and nothing else above the primary CTA.** No marketing copy, no "why sign up" pitch.
New. *Why:* every word above the CTA is a delay; the pitch belongs on the marketing page, not here.

**P-A-05. Primary CTA full-width inside the card, height 44–48px, weight 500–600, the same accent as the rest of the product.**
Refines: F16, P-F-04. *Why:* full-width inside a 400px card centers attention without ambiguity.

**P-A-06. Secondary actions ("Forgot password?", "Don't have an account?") are *text links*, not ghost buttons.** Placed: forgot-password inline right of the password label; sign-up prompt below the CTA.
Refines: F16. *Why:* button visual weight competes; links don't.

**P-A-07. OTP inputs: 6 separate boxes, ~40–48px tall, ~36–44px wide, monospace tabular numerals, auto-advance on type. Auto-submit on completion is the default but not mandatory — an explicit "Verify"/"Continue" button is a valid common choice (Walmart, Asana, Stripe).**
New. *Why:* the OTP UI is the moment that earns the trust; well-built OTP feels native, fumbled OTP makes the user reach for the password. (Live-UI calibration: real OTP boxes measure smaller than the old 48–56px band; many ship an explicit Verify rather than auto-submitting.)

**P-A-08. Errors land *under the field*, not as toasts.** Server errors ("Invalid credentials") above the CTA, same color/size as field errors, with a leading icon.
Refines: P-F-06. *Why:* the user's eye is on the form; errors need to be where the eye is.

**P-A-09. SSO buttons full-width, brand-correct logos, neutral chrome, separated by an "Or" divider. Placement is contextual: above email when SSO is the preferred path; below the primary when email is primary.** Both are real and good.
New. *Why:* if SSO is the answer for most users, putting it first saves typing (Webflow); if email/password is primary, SSO sits below as the alternative (TheyDo, HubSpot — `evidence/auth.md`). Don't mandate above. A **Remember-me** checkbox is a common optional element in the email/password row.

**P-A-10. Backplate texture is OPTIONAL.** Plain white/off-white is common and fine (TheyDo, HubSpot, Webflow). When you do dress it: one F35 texture *behind* the card, OR a split-screen brand panel beside it (Remote) — the richer alternative when there's a real brand visual to show.
Refines: F37. *Why:* auth is a clean-competence surface; texture is a nice-to-have, not a requirement — don't add it just to fill space (F35/F49).

**P-A-11. Brand mark (logo) sits above the card, centered, ~32px tall.** Not inside the card.
New. *Why:* the logo is context, not content.

**P-A-12. Mobile: the card spans the viewport with side padding 16–20px.** No max-width on mobile; full-width forms feel native there.
Refines: P-A-01. *Why:* a 400px card on a 375px viewport leaves awkward gutters.

**P-A-13. Show-password toggle on the password input is mandatory.**
New. *Why:* mistyped passwords are the #1 login failure; the toggle is a 30-second build and a 30% fewer-error feature.

## Composition defaults
- **Desktop**: centered card on backplate; optional split-screen with brand visual on the left (50/50 or 60/40), card on the right.
- **Mobile**: full-width form with logo + heading at top, CTA mid-screen, sign-up prompt + footer below.
- **Sequence (signup)**: identifier → verify (OTP) → password (if not magic link) → done. Each step is a separate screen, not a multi-section form.
- **Flow exits** (forgot password, switch account) are explicit links, never modals.

## Forbidden moves
- "Welcome back!" with confetti or animation.
- Marketing pitch inside the auth card.
- A primary AND a "Sign up" button at equal weight in the same card.
- Modals inside auth.
- CAPTCHA images without an audio alternative.
- Auto-focus on a non-form element (e.g. the logo).
- Hiding the email after typing (the user wants to verify what they entered).
- Animated heading reveals delaying the user.
- Auth card with shadow + border + ring + gradient backplate. Pick one elevation move.

## Sources
Wroblewski (*Mobile First*, *Web Form Design*) · Lookbook gallery → Auth + Recipes · canonical observable examples: Stripe, Linear, Notion, Vercel, Arc auth flows · DVLA self-service in-progress login refresh (direction A: desktop split + M1 mobile cap — see [[project_self_service_lookbook_refresh]]) · **Reference study of real public products (TheyDo, Remote, HubSpot, Webflow) → `evidence/auth.md`** (centered-OR-split first-class, SSO placement contextual, texture optional, remember-me).
