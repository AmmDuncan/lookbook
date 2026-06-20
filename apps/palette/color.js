/* ============================================================
   LBColor — OKLCH ⇄ sRGB, WCAG contrast, APCA Lc.
   Pure functions on a window namespace so classic <script> tags
   share them offline (no ES-module import, which file:// blocks).
   WCAG luminance mirrors scripts/contrast.mjs so badges == the gate.
   ============================================================ */
(function (global) {
  'use strict';

  const clamp01 = (x) => Math.min(1, Math.max(0, x));
  const srgbToLinear = (c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
  const linearToSrgb = (c) => (c <= 0.0031308 ? 12.92 * c : 1.055 * c ** (1 / 2.4) - 0.055);

  function hexToRgb255(hex) {
    let h = hex.replace('#', '').trim();
    if (h.length === 3) h = h.split('').map((c) => c + c).join('');
    return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16));
  }
  const rgb255ToHex = ([r, g, b]) =>
    '#' + [r, g, b].map((v) => Math.round(clamp01(v / 255) * 255).toString(16).padStart(2, '0')).join('').toUpperCase();

  const hexToLinear = (hex) => hexToRgb255(hex).map((v) => srgbToLinear(v / 255));
  const relLuminance = ([r, g, b]) => 0.2126 * r + 0.7152 * g + 0.0722 * b;

  /** WCAG 2.x contrast ratio between two hex colours. */
  function contrast(a, b) {
    const la = relLuminance(hexToLinear(a)) + 0.05;
    const lb = relLuminance(hexToLinear(b)) + 0.05;
    return la > lb ? la / lb : lb / la;
  }

  /* ---- APCA (0.98G-4g) — perceptual lightness contrast Lc ---- */
  const apcaY = (hex) => {
    const [r, g, b] = hexToRgb255(hex);
    return 0.2126 * (r / 255) ** 2.4 + 0.7152 * (g / 255) ** 2.4 + 0.0722 * (b / 255) ** 2.4;
  };
  /** Signed APCA Lc of text on bg (negative = light-on-dark). Use Math.abs vs thresholds. */
  function apca(textHex, bgHex) {
    const blkThrs = 0.022, blkClmp = 1.414;
    let yt = apcaY(textHex), yb = apcaY(bgHex);
    yt = yt < blkThrs ? yt + (blkThrs - yt) ** blkClmp : yt;
    yb = yb < blkThrs ? yb + (blkThrs - yb) ** blkClmp : yb;
    if (Math.abs(yb - yt) < 0.0005) return 0;
    let Lc;
    if (yb > yt) { // normal: darker text on lighter bg
      Lc = (yb ** 0.56 - yt ** 0.57) * 1.14;
      Lc = Lc < 0.1 ? 0 : Lc - 0.027;
    } else { // reverse: lighter text on darker bg
      Lc = (yb ** 0.65 - yt ** 0.62) * 1.14;
      Lc = Lc > -0.1 ? 0 : Lc + 0.027;
    }
    return Lc * 100;
  }

  /* ---- OKLab / OKLCH (Ottosson) ---- */
  function linearRgbToOklab([r, g, b]) {
    const l = 0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b;
    const m = 0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b;
    const s = 0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b;
    const l_ = Math.cbrt(l), m_ = Math.cbrt(m), s_ = Math.cbrt(s);
    return [
      0.2104542553 * l_ + 0.7936177850 * m_ - 0.0040720468 * s_,
      1.9779984951 * l_ - 2.4285922050 * m_ + 0.4505937099 * s_,
      0.0259040371 * l_ + 0.7827717662 * m_ - 0.8086757660 * s_,
    ];
  }
  function oklabToLinearRgb([L, a, b]) {
    const l_ = L + 0.3963377774 * a + 0.2158037573 * b;
    const m_ = L - 0.1055613458 * a - 0.0638541728 * b;
    const s_ = L - 0.0894841775 * a - 1.2914855480 * b;
    const l = l_ ** 3, m = m_ ** 3, s = s_ ** 3;
    return [
      4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
      -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
      -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s,
    ];
  }
  const DEG = Math.PI / 180;
  const oklchToOklab = (L, C, H) => [L, C * Math.cos(H * DEG), C * Math.sin(H * DEG)];

  function hexToOklch(hex) {
    const [L, a, b] = linearRgbToOklab(hexToLinear(hex));
    const C = Math.hypot(a, b);
    let H = Math.atan2(b, a) / DEG;
    if (H < 0) H += 360;
    return [L, C, H];
  }
  const inGamut = ([r, g, b]) => [r, g, b].every((v) => v >= -0.0008 && v <= 1.0008);

  /** OKLCH → hex, reducing chroma until it fits the sRGB gamut. */
  function oklchToHex(L, C, H) {
    let c = C;
    let lin = oklabToLinearRgb(oklchToOklab(L, c, H));
    while (!inGamut(lin) && c > 0) {
      c -= 0.002;
      lin = oklabToLinearRgb(oklchToOklab(L, c, H));
    }
    return rgb255ToHex(lin.map((v) => linearToSrgb(clamp01(v)) * 255));
  }
  const oklchStr = (L, C, H) => `oklch(${L.toFixed(3)} ${C.toFixed(3)} ${Math.round(H)})`;

  /**
   * Solve a step's lightness to hit a target WCAG contrast vs a reference.
   * dir 'down' searches darker than the ref (text on light bg); 'up' lighter.
   */
  function solveL(C, H, refHex, target, dir) {
    const refL = hexToOklch(refHex)[0];
    let lo = dir === 'down' ? 0 : refL;
    let hi = dir === 'down' ? refL : 1;
    for (let i = 0; i < 28; i++) {
      const mid = (lo + hi) / 2;
      const tooLow = contrast(oklchToHex(mid, C, H), refHex) < target;
      if (dir === 'down') { tooLow ? (hi = mid) : (lo = mid); }
      else { tooLow ? (lo = mid) : (hi = mid); }
    }
    return (lo + hi) / 2;
  }

  global.LBColor = {
    clamp01, hexToRgb255, rgb255ToHex, contrast, apca,
    hexToOklch, oklchToHex, oklchStr, solveL,
  };
})(window);
