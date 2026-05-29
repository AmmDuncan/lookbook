# Evidence — Auth (P-A calibration)

Studied 4 real web login screens by **rule-application + what's contextual**. Screens: TheyDo, Remote, HubSpot, Webflow. 2026-05-28.

## Rule-application reading

| Rule | What real auth does | Verdict |
|---|---|---|
| Layout | centered card (TheyDo, HubSpot, Webflow) **OR** split-screen form+brand panel (Remote) | **CONTEXTUAL**: both first-class; split when there's a brand visual to show. |
| P-A-09 SSO placement | **above** email (Webflow) **OR below** the primary (TheyDo, HubSpot) | **CONTEXTUAL**: above when SSO is the preferred path; below when email is primary. Don't mandate above. |
| P-A-10 backplate texture | 3/4 plain white; Remote uses a split brand panel instead | **OPTIONAL**: plain is fine and common; texture/split-visual is the richer option, not required. |
| P-A-13 show-password | eye toggle (TheyDo, Remote) / "Show Password" link (HubSpot) | CONFIRM (mostly present). |
| P-A-06 forgot + secondary as links | "Forgot?" inline (TheyDo) / in a Remember-me row (Remote, HubSpot) / bottom row (Webflow) | CONFIRM; placement varies, always a link. |
| Remember me | checkbox present (Remote, HubSpot) | **ADD**: common optional element in the email/password row. |
| P-A-05 primary full-width colored | black / blue / orange / blue, one primary | CONFIRM. |
| P-A-11 logo/wordmark above | logo above card (TheyDo, HubSpot) / wordmark top-left (Webflow) | CONFIRM. |
| P-A-03 short heading | "Login" / "Welcome back!" / "Log Into My Account" | CONFIRM. |

## The dynamic-generation lesson
Auth has multiple valid compositions; the brain picks by context, not by mandate:
- **Centered card** (default): logo above · heading · email+password · primary · SSO (above or below) · sign-up link.
- **Split-screen**: form panel + brand-visual panel — when there's a real brand image/pattern worth showing.
SSO-above vs SSO-below and textured-vs-plain are *choices*, not rules.

## Calibrations applied to patterns/auth.md
1. P-A-09 → SSO placement **contextual** (above if preferred path; below if email primary).
2. P-A-10 → backplate texture **optional**; plain white is fine; split-screen brand panel is the richer alternative.
3. Composition → **centered card OR split-screen**, both first-class (pick by whether there's a brand visual).
4. Add **Remember-me** as a common optional element.
