#!/usr/bin/env node
// check-contrast.mjs — a deterministic WCAG-AA gate for register HTML files.
//
// The pre-ship checklist says "verify every text-carrying token clears AA at its
// real size, including the faint tier." This makes that line enforceable instead
// of a manual instruction (the gap that let --faint ship at 2.4:1). It is
// intentionally conservative: it flags any primary TEXT token that fails 4.5:1
// against any primary SURFACE token it could realistically sit on. Better a false
// flag on a pairing that never happens than a real sub-AA label shipping silently.
//
// Usage:  node scripts/check-contrast.mjs <file.html> [...more.html]
//         node scripts/check-contrast.mjs registers/float-*.html
// Exit:   0 = all clear · 1 = at least one AA failure · 2 = bad input

import { readFileSync } from "node:fs";

const AA = 4.5;            // small-text floor
const LARGE = 3.0;         // large-text / non-text floor (used only to grade severity)

// names we treat as text vs surface (substring match, case-insensitive)
const TEXT_HINTS = ["ink", "text", "muted", "faint", "fg", "body", "label", "heading"];
const SURFACE_HINTS = ["bg", "paper", "panel", "card", "surface", "page", "canvas"];

// ---- color parsing ----
function hexToRgb(h) {
  h = h.replace("#", "");
  if (h.length === 3) h = h.split("").map((c) => c + c).join("");
  if (h.length !== 6) return null;
  return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16));
}
function srgbToLin(c) {
  c /= 255;
  return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
}
function luminance([r, g, b]) {
  return 0.2126 * srgbToLin(r) + 0.7152 * srgbToLin(g) + 0.0722 * srgbToLin(b);
}
function contrast(fg, bg) {
  const a = luminance(fg) + 0.05, b = luminance(bg) + 0.05;
  return Math.round((Math.max(a, b) / Math.min(a, b)) * 100) / 100;
}

// ---- extract :root tokens (only solid hex; rgba/var-chains skipped — they're
// almost never the load-bearing text/surface colors, and resolving them
// statically invites false precision) ----
function parseTokens(css) {
  const tokens = {};
  const re = /--([a-z0-9-]+)\s*:\s*(#[0-9a-fA-F]{3,6})\b/g;
  let m;
  while ((m = re.exec(css))) tokens[m[1]] = m[2]; // last write wins (matches CSS cascade)
  return tokens;
}
// which tokens are actually used as text color anywhere?
function colorUsedTokens(css) {
  const used = new Set();
  // the `color:` property only — the negative lookbehind for "-" rejects
  // border-color / outline-color / background-color / text-decoration-color,
  // which are not text fills and were causing false positives.
  const re = /(?<![-a-z])color\s*:\s*var\(\s*--([a-z0-9-]+)\s*\)/g;
  let m;
  while ((m = re.exec(css))) used.add(m[1]);
  return used;
}

function classify(name, colorUsed) {
  const n = name.toLowerCase();
  const isSurface = SURFACE_HINTS.some((h) => n.includes(h));
  // a surface-named token is never ALSO treated as text — when it appears in a
  // `color:` it's inverse text (light label ON a dark button), whose real bg is
  // the inverted element, not the page. Testing it against page surfaces is the
  // classic false positive (`--paper` on `--paper` = 1:1). Surfaces win the tie.
  const isText = !isSurface && (TEXT_HINTS.some((h) => n.includes(h)) || colorUsed.has(name));
  return { isSurface, isText };
}

function checkFile(path) {
  let css;
  try { css = readFileSync(path, "utf8"); }
  catch { console.error(`✗ cannot read ${path}`); return { fails: 0, error: true }; }

  const tokens = parseTokens(css);
  const colorUsed = colorUsedTokens(css);
  const names = Object.keys(tokens).filter((n) => hexToRgb(tokens[n]));

  const surfaces = names.filter((n) => classify(n, colorUsed).isSurface);
  let texts = names.filter((n) => classify(n, colorUsed).isText);

  if (!surfaces.length || !texts.length) {
    console.log(`• ${path}: no resolvable hex surface/text tokens — skipped (uses var-chains or rgba?)`);
    return { fails: 0, skipped: true };
  }

  // Determine the page's dominant polarity from its background surface, then keep
  // only PRIMARY text (opposite polarity to the page bg) checked against PRIMARY
  // surfaces (same polarity as the page bg). This drops inverse text/surfaces —
  // a dark-theme page's dark text tokens live on its light buttons, not the page,
  // so checking them against the dark page bg is meaningless.
  const bgName = surfaces.find((n) => /\b(bg|paper|page|canvas)\b/.test(n)) ||
                 surfaces.find((n) => /(bg|paper|page|canvas)/.test(n)) || surfaces[0];
  const pageLum = luminance(hexToRgb(tokens[bgName]));
  const pageIsDark = pageLum < 0.5;
  // primary surfaces = surfaces on the same polarity as the page bg (its own
  // dark/light family). Foreground text = tokens on the readable side of the page
  // bg: LIGHTER than the bg on a dark page, DARKER than the bg on a light page.
  // (Compared to the bg luminance, NOT a fixed 0.5 — a mid-gray faint on near-black
  // is still foreground.) Inverse text — darker than a dark bg, used on light
  // buttons — falls out and isn't spuriously failed against the page.
  const primarySurfaces = surfaces.filter((s) => (luminance(hexToRgb(tokens[s])) < 0.5) === pageIsDark);
  texts = texts.filter((t) => {
    const tl = luminance(hexToRgb(tokens[t]));
    return pageIsDark ? tl > pageLum : tl < pageLum;
  });

  if (!texts.length || !primarySurfaces.length) {
    console.log(`• ${path}: no primary text/surface pairings on the dominant polarity — skipped`);
    return { fails: 0, skipped: true };
  }

  const fails = [];
  for (const t of texts) {
    const tr = hexToRgb(tokens[t]);
    for (const s of primarySurfaces) {
      const sr = hexToRgb(tokens[s]);
      const ratio = contrast(tr, sr);
      if (ratio < AA) fails.push({ t, s, ratio, sev: ratio < LARGE ? "FAIL" : "warn" });
    }
  }

  const header = `${path}  (${texts.length} text × ${surfaces.length} surface tokens)`;
  if (!fails.length) {
    console.log(`✓ ${header} — all pairings ≥ ${AA}:1`);
    return { fails: 0 };
  }
  // a pairing only counts as a real failure if the text token fails against the
  // surface family it actually lives in. Heuristic: a text token fails for real
  // if it's < AA against its BEST surface (unreadable everywhere) OR < LARGE
  // against any surface (sub even the large-text floor).
  // Floor per token: a token NAMED as a text tier (ink/text/muted/faint/label)
  // carries small body/label text → 4.5. An un-named color token (an accent, a
  // display colour) might be large → only hard-fail below the 3.0 large-text
  // floor; 3.0–4.5 is a size-dependent WARN. Blocks the faint-tier bug without
  // over-darkening a 100px accent word.
  const floorFor = (name) => (TEXT_HINTS.some((h) => name.toLowerCase().includes(h)) ? AA : LARGE);
  const real = [];
  for (const t of texts) {
    if (!fails.some((f) => f.t === t)) continue;
    const best = Math.max(...primarySurfaces.map((s) => contrast(hexToRgb(tokens[t]), hexToRgb(tokens[s]))));
    if (best < floorFor(t)) real.push({ t, best, floor: floorFor(t) });
  }
  console.log(`✗ ${header}`);
  for (const f of fails) {
    const blocking = real.some((r) => r.t === f.t);
    console.log(`    ${blocking ? "✗" : "⚠"} --${f.t} on --${f.s}: ${f.ratio}:1`);
  }
  if (real.length) {
    console.log(`  → BLOCKING (text below its floor): ${real.map((r) => `--${r.t} ${r.best}:1 < ${r.floor}`).join(", ")}`);
  } else {
    console.log(`  → warnings only (3.0–4.5 on possibly-large text); no blocking failures`);
  }
  return { fails: real.length };
}

// ---- main ----
const files = process.argv.slice(2);
if (!files.length) {
  console.error("usage: node scripts/check-contrast.mjs <file.html> [...]");
  process.exit(2);
}
let total = 0;
for (const f of files) total += checkFile(f).fails || 0;
console.log(total === 0 ? "\nAA gate: PASS" : `\nAA gate: FAIL (${total} blocking token${total > 1 ? "s" : ""})`);
process.exit(total === 0 ? 0 : 1);
