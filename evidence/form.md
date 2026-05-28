# Evidence — Form (P-F calibration)

Studied 4 real web forms on Mobbin, read by **how rules are applied** + **what's contextual** (the dynamic-generation question: which context picks which choice?). Screens: Supabase (Preferences), Babbel (Profile), Gorgias (Settings), SuperHi (Account). 2026-05-28.

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
