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

---

## Run-2 — Live-UI calibration (2026-05-29)

Second pass. Reference study of ~47 real, public, shipped auth screens (login, OTP/verify, password-reset, sign-up/SSO) across a broad set of products, read by **rule-application + what's contextual** (not "is it pretty"). Products observed: Clearbit, Height, Relume, Wayyy, Sprig, Family, Remote, PayPal, TheyDo, Kit, Coursera, Plausible, SeatGeek, Canny, Podia, Cosmos, Duolingo, Codecademy, Frame.io · Coinbase, Luma, HoneyBook, Walmart, Linktree, Asana, Link, Wave, Stripe, Visitors (OTP) · Mixpanel, Twist, Webflow, Mural, Retool, Skillshare, Coda, Hotjar (reset) · Brilliant, Mistral, Headspace, Air, Pi, mymind, Squarespace, Buy Me a Coffee, Fresha (sign-up/SSO).

### Rule-application reading

| Rule | What real auth does (corroboration) | Verdict |
|---|---|---|
| **P-A-01** centered card max-width 380–440px | Card-on-backplate clusters tightly at ~380–440px (Clearbit, Height, Relume, Wayyy, Sprig, PayPal, TheyDo, Plausible, Coinbase, Luma, HoneyBook, Air). **BUT** a large minority float the form directly on the page with *no card chrome at all* — bare-centered column ~300–400px wide (Wayyy, Family, Duolingo, Codecademy, SeatGeek, Canny, Podia, Asana, Walmart, Wave, Linktree, Skillshare, Mistral, Pi, Brilliant, Buy Me a Coffee). | **TOO-STRICT** — the *card* is over-mandated. Bare-centered-on-backplate is co-equal and arguably the modern default for clean products. Width band itself VALIDATES. |
| **P-A-07** OTP: 6 boxes, 48–56px tall, 40–48px wide, auto-advance, auto-submit | 6 separate boxes is dominant (Coinbase, Luma, Walmart, Wave, Asana, Visitors, Link); but box sizes run **smaller — ~36–44px square**, not 48–56×40–48 (measured against the ~400px card). Stripe groups **3+3**; HoneyBook uses a single segmented field. Auto-advance universal; **auto-submit NOT universal** — many ship an explicit Continue/Verify (Walmart, Asana, HoneyBook, Stripe). | **CALIBRATE** size to ~40–48px tall, ~36–44px wide; **TOO-STRICT** on auto-submit-mandatory → make it the default-but-optional (a confirm button is a valid, common choice). 6-box + tabular + auto-advance VALIDATE. |
| **P-A-13** show-password toggle *mandatory* | Present on ~40% (TheyDo, Remote, Coursera, Cosmos, Duolingo, Headspace, Mistral; HubSpot "Show" link). **Absent on the majority** (Clearbit, Height, Relume, Wayyy, PayPal, Plausible, Podia, SeatGeek, Canny, Kit, Codecademy, Frame.io). | **TOO-STRICT** — reality treats it as a strong-default best-practice, not a mandate. Recommend: strongly recommended on password-entry fields; not a hard requirement. |
| **P-A-09** SSO placement contextual | SSO-above-email is very common for consumer/AI products (Pi, mymind, Squarespace, Air, Fresha, Brilliant, Mistral, Headspace, Coursera below); SSO-below for email-primary (TheyDo, Remote, PayPal). | **VALIDATE** (Run-1 calibration holds and is reinforced). |
| **P-A-10** backplate texture optional | Plain off-white dominates; richer treatments are split-brand-panel (Remote, Frame.io, mymind, Fresha, Retool, Hotjar, Kit) or a subtle paper grain (Coda). Cosmos goes full-dark atmospheric. | **VALIDATE.** |
| **P-A-11** logo above card ~32px | Logo-above is common (Clearbit, Relume, TheyDo, PayPal, Plausible, Stripe, Wave, HoneyBook) but **wordmark top-left** is equally shipped (Webflow, Podia, Codecademy, Kit, Skillshare, Coda, SeatGeek, Canny). Run-1 already noted this. | **VALIDATE** (placement varies; "above the card" is one valid option, not the only one — already softened in spirit). |
| **P-A-03** short heading 24–32px | "Login" / "Welcome back" / "Sign up" / "Enter verification code" — short, single line, sizes land in band (Relume "Log in" ~32px; Coda/Asana larger display ~36–48px for OTP heroes). | **VALIDATE** (OTP screens occasionally push heading to display scale — within F4). |
| **P-A-05** primary full-width, one accent | Black / blue / orange / yellow / purple — exactly one filled primary, full-width inside the column. Universal. | **VALIDATE.** |
| **P-A-06** secondary actions as links | "Forgot?" inline (TheyDo, Relume, Frame.io) / in remember-me row (Remote, Kit) / below (Webflow, Mixpanel); sign-up prompt as a link below CTA. Always a link, placement varies. **Exception:** a few pair the primary with a *bordered* "Sign up" button (PayPal, Relume, Clearbit) — sign-in primary filled, sign-up outlined, clearly subordinate. | **VALIDATE** (the outlined-secondary case still honors F16 subordination; not equal weight). |
| **P-A-08** errors under field / above CTA, with icon | "Invalid login credentials" inline above CTA (Relume, Codecademy); "Invalid email or password" toast-card (Kit) — the one outlier; field-level inline is the norm. | **VALIDATE** (Kit's toast is the minority; rule holds). |
| **P-A-12** mobile full-width, side padding 16–20px | (Not directly observable in desktop captures; consistent with reflow logic.) | **VALIDATE** (carried). |
| Reset-flow "check your inbox" confirmation | Reset screens consistently ship a **two-state flow**: enter-email → explicit "check your inbox / email sent" confirmation, often with a resend timer (Mixpanel, Twist, Webflow, Mural, Hotjar, Coda "email me a link"). | OBSERVED — already covered by F33 (ship all data-view states) + composition sequence; **no new rule** (see PARKED). |

### The over-mandated-card lesson
The single strongest finding this pass: **P-A-01 mandates a card, but ~1/3 of excellent shipped auth has no card at all** — the form floats centered on the backplate, hierarchy carried by spacing + the one filled CTA (F13: hierarchy from spacing/contrast, not boxes). Both are first-class; the card is a *choice*, not a requirement. The width band (380–440px) holds for either. This mirrors Run-1's "centered OR split" finding — auth composition is a small menu of equally-valid shells, picked by context, not one mandated shell.

### Calibrations proposed to patterns/auth.md (user gates)
1. **P-A-01** → loosen "card" to **centered column on a sparse backplate, with OR without card chrome**; both first-class; width band 380–440px unchanged.
2. **P-A-07** → calibrate OTP box size to **~40–48px tall, ~36–44px wide**; auto-submit is the **default but not mandatory** (an explicit Verify/Continue is a valid common choice).
3. **P-A-13** → soften "mandatory" to **strongly recommended** on password-entry fields (reality ships it ~40% of the time; it's best-practice, not a floor).

