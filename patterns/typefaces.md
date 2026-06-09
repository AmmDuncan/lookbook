# Pattern: Typefaces — the curated font menu

**Inherits:** `fundamentals.md` F1 (one primary family, optional display face), F6 (two weights), F7 (tracking). Feeds `patterns/identity.md` (the type-pairing dial) and `patterns/assets.md` P-AS-03 (font sourcing).
**Cite as:** `P-TY-<nn>`. **Visual specimen:** `apps/typefaces/index.html` (open it — a font is chosen by *seeing* it).

## Why this exists

The voice sets the temperature; the **typeface sets the character within it**. Two cool-technical apps — one in Geist, one in IBM Plex Sans — read differently even on the same voice. But the system defaulted to Geist and offered no menu, so every build looked the same and genuinely good faces (Fraunces, Clash Display) were only ever found by accident. This is the menu, **organised by voice**, so type is chosen on purpose. The ⭐ are the non-obvious finds.

**P-TY-01. Pick the typeface as a deliberate dial, not a default.** Choose the family from the voice's row below, then commit to a *display + body* pairing (F1) — never ship Geist/Inter-by-reflex (AP10). The face is part of the brand signature, not a fallback.

**P-TY-02. Know the two free sources — most character lives outside Google.**
- **Google Fonts** — the large free baseline. Load: `<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600&display=swap">`.
- **Fontshare** (Indian Type Foundry) — **the foundry nobody knows**, and where the best free character lives (Clash Display, Cabinet Grotesk, Satoshi, General Sans, Boska, Gambarino, Gambetta). Load: `<link href="https://api.fontshare.com/v2/css?f[]=clash-display@400,600&display=swap">`. *This row is the answer to "how would I have found it."*
- **Open foundries** — Vercel Geist, Undercase (Fraunces). Self-host the woff2.

## The menu, by voice

### Cool-technical — engineered, precise (dev tools, data, SaaS)
| Face | Class | Source | Feel · pairs with |
|---|---|---|---|
| **Geist** | neutral grotesque | Vercel | The clean default — and the over-used problem; reach past it. → Geist Mono |
| **Inter Tight** | tight grotesque | Google | Inter with the air removed — more decisive at display sizes |
| **Space Grotesk** | geometric grotesque | Google | Geometric with a quirk (g/a/t) — technical, not anonymous. → Space Mono |
| **IBM Plex Sans** | humanist-technical | Google | Corporate-engineering warmth, a human edge. → IBM Plex Mono |

### Warm-editorial — refined, literary (premium product, publishing)
| Face | Class | Source | Feel · pairs with |
|---|---|---|---|
| **Fraunces** ⭐ | soft serif · optical | Google | Old-style warmth + a "wonky" optical axis; set large for character. Endlessly distinctive. → Hanken / Geist body |
| **Newsreader** | editorial serif | Google | Built for screen reading — journalistic, calm; great italics |
| **Spectral** | screen serif | Google | Quiet, even, dependable body serif |
| **Hedvig Letters Serif** ⭐ | single-weight display serif | Google | One weight, lots of charm — warm headings, underused |
| **Gambetta** ⭐ | humanist serif | Fontshare | Calligraphic, literary — never surfaces from a default list |

### Bold-expressive — confident, loud (marketing, hero, brand)
| Face | Class | Source | Feel · pairs with |
|---|---|---|---|
| **Clash Display** ⭐ | modern display grotesque | Fontshare | The find everyone wishes they'd made — instant confident hero. The reason to know Fontshare. → General Sans / Satoshi body |
| **Cabinet Grotesk** ⭐ | geometric display | Fontshare | Tight geometric with distinctive cuts; great oversized |
| **Bricolage Grotesque** ⭐ | contemporary grotesque · optical | Google | Irregular, warm-industrial — "designed by a person"; display AND body |
| **Archivo** (+ Expanded) | grotesque · expanded axis | Google | Heavy and wide — punchy; the Expanded axis is a signature move |
| **Unbounded** ⭐ | rounded display · variable | Google | Rounded, playful-bold — loud brand voice, display only, sparingly |

### Humanist-friendly — approachable, calm (consumer product, onboarding)
| Face | Class | Source | Feel · pairs with |
|---|---|---|---|
| **Hanken Grotesk** | friendly grotesque | Google | Warm but precise — a friendlier Geist for the whole UI |
| **Figtree** | geometric-friendly | Google | Rounded geometric — approachable, no fuss |
| **Plus Jakarta Sans** | geometric humanist | Google | Distinctive lowercase without shouting |
| **Onest** ⭐ | neutral-warm | Google | Calm even neutral with warmth — underused Inter alternative |
| **General Sans** | neutral geometric | Fontshare | The do-everything Fontshare sans |
| **Satoshi** ⭐ | neutral grotesque | Fontshare | Fontshare crowd-favourite — crisp, modern; a real Inter/Geist substitute |

### Signature / high-character — one-shot brand moments (hero, logo lockup)
| Face | Class | Source | Feel |
|---|---|---|---|
| **Instrument Serif** ⭐ | high-contrast display serif | Google | Elegant, dramatic, free — one headline reads *expensive* |
| **Boska** ⭐ | high-contrast serif | Fontshare | Fashion-magazine contrast — editorial luxury at large sizes |
| **Gambarino** ⭐ | eccentric display serif | Fontshare | Weird in the best way — a revival oddball for a brand with a POV |

### Mono / technical — code, data, numerals, accent (pairs with a sans above)
| Face | Class | Source | Feel |
|---|---|---|---|
| **Geist Mono** | neutral mono | Vercel | Clean default; great tabular numerals. → Geist |
| **JetBrains Mono** | code mono | Google | Tall x-height, very legible — developer-native |
| **IBM Plex Mono** | humanist mono | Google | Slab-ish warmth. → IBM Plex Sans |
| **Space Mono** ⭐ | display mono | Google | Retro-technical character — a mono used for *feel*, not just code |

## Pairing rules

**P-TY-03. Display + body, max two families (F1).** One expressive display face for headings; one neutral, legible workhorse for body/UI. A serif display (Fraunces) over a clean sans body (Hanken) is the classic editorial pairing; a bold grotesque display (Clash) over a neutral sans (Satoshi) is the bold one. Never three families.

**P-TY-04. A mono is the third, scoped face — for data only.** Numerals, code, IDs, technical chrome (F-data, tabular-nums). It is not a body or display face. Pick the mono that matches the sans's foundry/feel where one exists (Geist↔Geist Mono, Plex Sans↔Plex Mono).

**P-TY-05. The expressive face is the signature — display only, ≤3 uses (F1, P-ID-08).** Instrument Serif / Boska / Unbounded carry a whole brand in one headline. They do not go in body text or UI labels; one expressive face, used scarcely, is the move.

## Don't
- ❌ Default to Geist/Inter with no decision (AP10) — pick from the voice's row.
- ❌ Three+ families on a screen (F1).
- ❌ A display/character face in body text — legibility dies; keep it to headings.
- ❌ Ignore Fontshare because it isn't Google — it's where the free character is (P-TY-02).
- ❌ A mono as a body or display face — it's the data/technical third only.

## Sources
The free finds are mostly Fontshare (Indian Type Foundry). Display-serif character: Undercase (Fraunces), Google (Instrument Serif, Hedvig). Workhorse sans: Google + Fontshare. Visual specimen with every face set in itself: `apps/typefaces/index.html`.
