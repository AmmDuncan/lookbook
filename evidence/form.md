# Evidence — Form (P-F calibration)

## Run 2026-05-29 — 16 live shipped forms, read by HOW the rules are applied

Source: a reference study of real, public, shipped products. Entry forms + settings panels,
breadth over one product's flow. Screens read this run:

**Settings / preferences panels (8):** Time2book (Account), Copy.ai (Account Settings), IFTTT
(Account settings), Patreon (Settings → Account), Relume (Account), Tripadvisor (account/address),
Foundation (Edit your profile), Vercel (Personal Account Settings).
**Entry / create-account forms (8):** Deel (Create organization account), Squarespace (Create Your
Account), Pinterest (Accept invite), ClassDojo (Create Teacher Account), Felt (Welcome to Felt),
Coinbase (Create an account), GoFundMe (Create an account), Duolingo (Create your profile).

Supplemented by a reference study of public design-system docs for the numeric clusters
(field height, label gap, input/button height parity).

### Rule-by-rule reading

| Rule / Fn | What the live screens show | Verdict |
|---|---|---|
| **P-F-02 field height (44–48px desktop)** | Desktop fields cluster **~38–44px**, not 44–48. Vercel, Copy.ai, IFTTT, Relume, Foundation all sit at the low end (~38–42px). Design-system docs put the desktop default at **40px** (Carbon 40px; Bootstrap base 32; input height = primary-button height for rhythm). 44–48 is the **mobile/touch** floor — GoFundMe/Pinterest mobile cards do hit ~44–48. | **CALIBRATE**: desktop **38–44px** (40px sweet spot), **mobile 44–48px**. Current band is the mobile number applied to desktop. |
| **P-F-01 label placement contextual** | Settings split confirmed: Time2book/Copy.ai/Patreon/Relume/Foundation = **top labels**; only data-row layouts (Time2book notification row, Vercel save-row) read as label-left. Entry forms = top labels universally (Deel, Squarespace, ClassDojo, Coinbase, GoFundMe). Floating/embedded labels appear (Deel, ClassDojo, GoFundMe place the label *inside the field top* once filled — a real, modern variant, NOT placeholder-as-label). | **VALIDATE** (top dominant). Note: top-labels dominate even settings now; pure label-left two-column is the minority. Embedded/floating label (Material-style) is a legitimate 3rd option distinct from forbidden placeholder-as-label. |
| **P-F-04 / F16 one primary** | Universal. Save changes (Time2book black), Save Changes (Copy.ai purple), Create account (Deel/Squarespace/Pinterest red/black), Sign up (ClassDojo/GoFundMe). Secondary = text/ghost (Cancel, Back, "I have an account"). | **VALIDATE**. |
| **P-F-05 primary placement contextual** | Entry forms: **full-width** primary at bottom of the card (Deel, Squarespace, Pinterest, Felt, ClassDojo, GoFundMe, Duolingo) — NOT bottom-right, NOT bottom-left, **full-width** is the entry-card norm. Settings: **per-section Save** (Vercel, Relume each section has its own Save; Patreon "Update password" under its group) OR top-right card Save (Copy.ai, Time2book bottom-right). | **CALIBRATE P-F-05**: add **full-width primary = entry-card default** (not just mobile). Add **per-section Save** as a settings norm (each editable section owns its own save), distinct from one bottom save. |
| **P-F-08 required vs optional, mark one** | Coinbase: "Required fields have an asterisk *" + `*` on every required field. Foundation/Duolingo: mark **(optional)** on the few optional ones, nothing on required. Confirms pick-one. | **VALIDATE**. |
| **P-F-06/07 error under field, on blur** | Squarespace "An account with this email already exists." under field; GoFundMe "Value does not comply with requirements" under field + red border; Coinbase "Too weak" inline strength. All field-level, under-field, not toast. | **VALIDATE**. |
| **P-F-11 help text below label** | Time2book has a help line under EVERY label ("Your email is used for signing in…", "This will appear on your public profile…"). Vercel "This is your URL namespace within Vercel." Foundation "This will not be shown on your profile." | **VALIDATE** strongly. Settings forms lean on per-field helper text heavily. |
| **P-F-12 single column** | Universal except conceptual pairs: First/Last name side-by-side (Coinbase, Relume pair them). Everything else single column. | **VALIDATE**. |
| **Destructive own section** | Tripadvisor "Close your Account" + "Sign out of all other sessions" in a separated footer block below the save; SuperHi pattern from prior run. | **VALIDATE**. |
| **F3 body / label size** | Labels cluster **13–14px** (some uppercase eyebrow-style ~11–12px: Squarespace, Foundation). Help text **12–13px**. Field input text ~14–15px. | **VALIDATE** label 13–14; uppercase-eyebrow label variant runs smaller (11–12px) but that's an allowed style choice. |
| **F8 base unit / spacing** | Field-to-field gap clusters **16–20px** (Time2book ~16, Vercel larger between sections). Label-to-field gap **6–8px** (tight, consistent). Section gap **32–48px**. All multiples of 4. | **VALIDATE F8**; state explicitly that label→field gap is **6–8px** (currently unstated). |
| **F11 section padding** | Card internal padding **24–32px** (Pinterest/ClassDojo modal cards ~24; Relume/Foundation ~32). Between settings sections **32–48px**. | **VALIDATE** (form card uses *card* padding 24–32, not the page-region 64–128 of F11 — already correctly scoped in P-F composition defaults). |
| **F17 one accent** | Each form: one accent on primary + focus ring only (Pinterest red, Felt pink, Coinbase/Duolingo blue, ClassDojo purple, GoFundMe green). Neutral everything else. | **VALIDATE**. |
| **F32/F34 states / focus** | Coinbase + GoFundMe show focused field with accent ring + border-weight change; error = red border + message. Focus-visible present. | **VALIDATE**. |

### TOO-STRICT findings
- **P-F-02 desktop 44–48px is the mobile number mis-applied to desktop.** Excellent desktop forms
  (Vercel, Copy.ai, Linear-class) run **38–44px** and feel correct, not cramped. The 44–48 floor is
  real *only on touch/mobile*. Keeping 44–48 on desktop pushes generated forms slightly chunky.
- **P-F-05 "bottom-right for wide/card" under-describes entry forms.** The dominant entry-card
  primary is **full-width**, not bottom-right. Bottom-right is a *settings-card-with-Save* pattern,
  and even there per-section Save is more common in modern apps.

### NEW-variant flagged (battle-test before adopting as a rule)
- **Embedded / floating label** (label parks at the field's top edge once focused/filled — Deel,
  ClassDojo, GoFundMe): a legitimate modern third option, distinct from forbidden
  placeholder-as-label (the label never disappears). Worth a contextual note on P-F-01 — battle-test.
- **Per-section Save in settings** (each section its own Save — Vercel, Relume): strong real-world
  signal; propose folding into P-F-05 / settings composition.

### Net
Most rules VALIDATE — the form contextual split (entry vs settings, label placement, destructive
section, one primary, error placement) holds against 16 live products. Two genuine calibrations:
**P-F-02 desktop field height → 38–44px** and **P-F-05 full-width entry primary + per-section
settings Save**. One explicit gap to state: **label→field gap 6–8px**.

---

## Run 2026-05-28 — original 4-form study

Studied 4 real web forms, read by **how rules are applied** + **what's contextual** (the dynamic-generation question: which context picks which choice?). Screens: Supabase (Preferences), Babbel (Profile), Gorgias (Settings), SuperHi (Account). 2026-05-28.

## Rule-application reading — the key finding is that form choices are CONTEXTUAL

| Rule | What real forms do | Verdict |
|---|---|---|
| P-F-01 label placement | **top labels** (Babbel, SuperHi — entry/profile); **left labels, control-right rows** (Supabase, Gorgias — settings) | **CONTEXTUAL**: top for fast-entry; left-label rows for settings/preferences. Don't mandate top-only. |
| Form shell | settings forms sit in a **left-sidebar app shell** (Supabase, Babbel, Gorgias); standalone entry forms are a **centered card** (signup/checkout) | **CONTEXTUAL**: settings → shell; entry → card. |
| P-F-05 primary placement | **bottom-right** (wide/card forms); **bottom-left under the last field** (Babbel, SuperHi single-column) | **CONTEXTUAL**: not always bottom-right. |
| P-F-09 sections + headings | Supabase (Account Info / Profile / Theme), SuperHi sections | CONFIRM. |
| P-F-11 helper text below | Babbel ("Must be ≥2 chars", "leave blank if you prefer"), Gorgias toggle descriptions | CONFIRM. |
| P-F-03 field bg ≠ page | Babbel off-white field on white; Supabase field lighter than dark bg | CONFIRM. |
| P-F-04 one primary | Save profile (dark) / Save Changes (blue) / Save (purple) | CONFIRM. |
| Destructive action | SuperHi "Delete your account" in its **own separated section** below the form | **ADD**: destructive gets its own section, separated from save. |
| Control variety | Gorgias: radio (date format), segmented (theme), toggles+description (booleans) | CONFIRM: settings forms use the full control vocabulary, not just text inputs. |

## The dynamic-generation lesson
A brain that generates good forms must branch on context, not stamp one layout:
- **Entry form** (signup, checkout, create): centered card · top labels · single column · primary bottom-right (or full-width mobile).
- **Settings/preferences form**: left app-shell · sectioned · label-left rows OR top labels · save per-section or bottom-left · destructive in its own section.
This branching *is* the dynamism — same vocabulary (Field, Input, Button), different composition per context.

## Calibrations applied to patterns/form.md
1. P-F-01 → label placement is **contextual** (top for entry; left-rows for settings).
2. Add **form-context split**: entry-card vs settings-in-shell, each with its own composition defaults.
3. P-F-05 → primary placement **contextual** (bottom-right for card/wide; bottom-left for single-column).
4. Add **destructive-action section** (separated, e.g. "Delete account").
