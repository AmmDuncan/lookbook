#!/usr/bin/env node
/**
 * Lookbook contrast checker — WCAG 2.x contrast ratios for the verification pass (F15/F54/F55/F66).
 *
 * Makes contrast a CHECK, not a discipline: paste every text-on-surface and label-on-fill
 * pair, run it, and the table tells you what fails — no eyeballing. Zero dependencies (Node only).
 *
 * Usage:
 *   node scripts/contrast.mjs "#fff:#0b5d44"                       # one pair (fg:bg)
 *   node scripts/contrast.mjs "#fff:#0b5d44:CTA label"            # with a label
 *   node scripts/contrast.mjs "#5b564c:#f4f1ea:body" "#8a8478:#f4f1ea:muted" ...
 *   node scripts/contrast.mjs --large "#fff:#0b5d44:big heading"  # judge against the large-text bar (3:1)
 *
 * A pair may be marked large by a trailing `:large` token or the global --large flag; large text
 * (>=18.66px bold / >=24px regular) only needs 3:1 (F66). Everything else is judged at AA 4.5:1.
 * Exits 1 if any pair fails its applicable bar — usable as a CI / agent gate.
 */

const AA = 4.5;
const AA_LARGE = 3;
const AAA = 7;

/** Parse a #rgb or #rrggbb string to [r,g,b] 0–255. Throws on malformed input. */
function parseHex(hex) {
  const m = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(hex.trim());
  if (!m) {
    throw new Error(`not a hex color: "${hex}"`);
  }
  let h = m[1];
  if (h.length === 3) {
    h = h.split("").map((c) => c + c).join("");
  }
  return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16));
}

/** WCAG relative luminance of an [r,g,b] color. */
function luminance([r, g, b]) {
  const lin = [r, g, b].map((v) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * lin[0] + 0.7152 * lin[1] + 0.0722 * lin[2];
}

/** WCAG contrast ratio between two hex colors (1–21). */
function ratio(fg, bg) {
  const a = luminance(parseHex(fg));
  const b = luminance(parseHex(bg));
  const [hi, lo] = a > b ? [a, b] : [b, a];
  return (hi + 0.05) / (lo + 0.05);
}

function parsePair(arg, globalLarge) {
  const parts = arg.split(":");
  let large = globalLarge;
  if (parts[parts.length - 1]?.toLowerCase() === "large") {
    large = true;
    parts.pop();
  }
  const [fg, bg, ...labelParts] = parts;
  return { fg: fg?.startsWith("#") ? fg : `#${fg}`, bg: bg?.startsWith("#") ? bg : `#${bg}`, label: labelParts.join(":") || "", large };
}

function main() {
  const args = process.argv.slice(2);
  const globalLarge = args.includes("--large");
  const pairs = args.filter((a) => !a.startsWith("--"));

  if (pairs.length === 0) {
    console.error('Usage: node scripts/contrast.mjs "#fff:#0b5d44:label" [...]  (add :large or --large for big text)');
    process.exit(2);
  }

  const rows = pairs.map((arg) => {
    const { fg, bg, label, large } = parsePair(arg, globalLarge);
    const r = ratio(fg, bg);
    const bar = large ? AA_LARGE : AA;
    return {
      label: label || `${fg} on ${bg}`,
      fg,
      bg,
      ratio: r,
      bar,
      pass: r >= bar,
      aaa: r >= AAA,
    };
  });

  const w = Math.max(...rows.map((r) => r.label.length), 5);
  console.log(`${"PAIR".padEnd(w)}  ${"RATIO".padStart(7)}  ${"BAR".padStart(5)}  RESULT`);
  for (const r of rows) {
    const verdict = r.pass ? (r.aaa ? "PASS (AAA)" : "PASS (AA)") : "FAIL";
    const flag = r.pass ? "  " : "✗ ";
    console.log(`${flag}${r.label.padEnd(w)}  ${r.ratio.toFixed(2).padStart(7)}  ${(r.bar + ":1").padStart(5)}  ${verdict}`);
  }

  const failures = rows.filter((r) => !r.pass);
  if (failures.length) {
    console.log(`\n${failures.length} of ${rows.length} pair(s) FAIL — darken the text, deepen the tint, or take a darker accent step (F54/F55/F66).`);
    process.exit(1);
  }
  console.log(`\nAll ${rows.length} pair(s) clear their bar.`);
}

main();
