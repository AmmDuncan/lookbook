/* ============================================================
   Palette app — brand colour → semantic-role skin (light/dark),
   status colours, and add-your-own swatches. Uses window.LBColor.
   ============================================================ */
(function () {
  'use strict';
  const C = window.LBColor;
  const { hexToOklch, oklchToHex, oklchStr, contrast, apca, solveL } = C;

  const FLOORS = { primary: 7.5, secondary: 5.0, muted: 4.5, ui: 3.0, status: 4.5 };
  const STATUS_HUES = [
    { key: 'success', name: 'Success', hue: 150 },
    { key: 'warning', name: 'Warning', hue: 75 },
    { key: 'danger', name: 'Danger', hue: 25 },
    { key: 'info', name: 'Info', hue: 230 },
  ];

  /* ---- core semantic ramp ---- */
  function generate(brandHex, mode) {
    const [, bC, bH] = hexToOklch(brandHex);
    const H = bH;
    const nC = Math.min(0.01, 0.004 + bC * 0.03);

    if (mode === 'light') {
      const surface = '#FFFFFF';
      const bg = oklchToHex(0.985, nC * 0.7, H);
      let aL = hexToOklch(brandHex)[0];
      while (contrast('#FFFFFF', oklchToHex(aL, bC, H)) < 4.5 && aL > 0.2) aL -= 0.008;
      const accent = oklchToHex(aL, bC, H);
      const onAccent = contrast('#FFFFFF', accent) >= 4.5 ? '#FFFFFF' : oklchToHex(0.22, nC, H);
      return {
        mode, H, refText: bg, refUi: surface, surface, accent, onAccent, bg,
        sunken: oklchToHex(0.965, nC, H),
        border: oklchToHex(0.925, nC * 0.9, H),
        borderStrong: oklchToHex(solveL(nC, H, surface, FLOORS.ui + 0.15, 'down'), nC, H),
        textMuted: oklchToHex(solveL(nC, H, bg, FLOORS.muted + 0.15, 'down'), nC, H),
        textSecondary: oklchToHex(0.460, nC, H),
        textPrimary: oklchToHex(0.255, nC, H),
        accentHover: oklchToHex(Math.max(aL - 0.07, 0.16), bC, H),
        accentSubtle: oklchToHex(0.955, Math.min(bC * 0.22, 0.05), H),
        focusRing: oklchToHex(Math.min(aL + 0.07, 0.78), bC, H),
      };
    }
    const bg = oklchToHex(0.145, nC * 0.6, H);
    const surface = oklchToHex(0.190, nC * 0.8, H);
    let aL = Math.max(hexToOklch(brandHex)[0], 0.6);
    while (contrast(oklchToHex(aL, bC, H), bg) < 4.5 && aL < 0.86) aL += 0.008;
    const accent = oklchToHex(aL, bC, H);
    const onAccent = contrast('#FFFFFF', accent) >= 4.5 ? '#FFFFFF' : oklchToHex(0.16, nC, H);
    return {
      mode, H, refText: bg, refUi: surface, surface, accent, onAccent, bg,
      sunken: oklchToHex(0.120, nC * 0.6, H),
      border: oklchToHex(0.270, nC, H),
      borderStrong: oklchToHex(solveL(nC, H, surface, FLOORS.ui + 0.15, 'up'), nC, H),
      textMuted: oklchToHex(solveL(nC, H, bg, FLOORS.muted + 0.15, 'up'), nC, H),
      textSecondary: oklchToHex(0.760, nC, H),
      textPrimary: oklchToHex(0.965, nC * 0.5, H),
      accentHover: oklchToHex(Math.min(aL + 0.07, 0.88), bC, H),
      accentSubtle: oklchToHex(0.30, Math.min(bC * 0.4, 0.08), H),
      focusRing: oklchToHex(aL, bC, H),
    };
  }

  /* ---- status colours (F19/F55: tint bg + same-hue fg clearing 4.5 on it) ---- */
  function generateStatus(mode) {
    return STATUS_HUES.map(({ key, name, hue }) => {
      let bg, fg;
      if (mode === 'light') {
        bg = oklchToHex(0.945, 0.05, hue);
        fg = oklchToHex(solveL(0.13, hue, bg, FLOORS.status + 0.2, 'down'), 0.13, hue);
      } else {
        bg = oklchToHex(0.305, 0.07, hue);
        fg = oklchToHex(solveL(0.12, hue, bg, FLOORS.status + 0.2, 'up'), 0.12, hue);
      }
      return { key, name, hue, bg, fg, ratio: contrast(fg, bg) };
    });
  }

  /* ---- spec builders ---- */
  function coreRows(skin) {
    const t = (k) => skin[k];
    return [
      { sw: t('accent'), name: 'Primary', vn: '--accent', use: 'actions · links · focus', val: t('accent'),
        grade: { kind: 'fill', ratio: contrast(t('onAccent'), t('accent')), floor: 4.5, ref: 'white-on · F66' } },
      { sw: t('textPrimary'), name: 'Darkest', vn: '--text-primary', use: 'headings & body text', val: t('textPrimary'),
        grade: { kind: 'text', ratio: contrast(t('textPrimary'), skin.refText), floor: FLOORS.primary, ref: 'vs bg · F15',
          lc: apca(t('textPrimary'), skin.refText), lcTarget: 75 } },
      { sw: t('textSecondary'), name: 'Dark', vn: '--text-secondary', use: 'secondary text', val: t('textSecondary'),
        grade: { kind: 'text', ratio: contrast(t('textSecondary'), skin.refText), floor: 4.5, ref: 'vs bg',
          lc: apca(t('textSecondary'), skin.refText), lcTarget: 60 } },
      { sw: t('textMuted'), name: 'Dark', vn: '--text-muted', use: 'muted / helper text', val: t('textMuted'),
        grade: { kind: 'text', ratio: contrast(t('textMuted'), skin.refText), floor: 4.5, ref: 'vs bg',
          lc: apca(t('textMuted'), skin.refText), lcTarget: 60 } },
      { sw: t('borderStrong'), name: 'Medium', vn: '--border-strong', use: 'input / functional borders', val: t('borderStrong'),
        grade: { kind: 'ui', ratio: contrast(t('borderStrong'), skin.refUi), floor: 3.0, ref: 'UI · vs surface' } },
      { sw: t('border'), name: 'Light', vn: '--border', use: 'dividers / decorative', val: t('border'),
        grade: { kind: 'decorative' } },
      { sw: t('sunken'), name: 'Lightest', vn: '--bg / --surface-sunken', use: 'page / alt background', val: t('bg'),
        grade: { kind: 'base' } },
      { sw: t('surface'), name: 'White', vn: '--surface', use: 'cards', val: t('surface'),
        grade: { kind: 'base' } },
    ];
  }

  /* ---- rendering ---- */
  const state = { brand: '#3A6DF0', mode: 'light', custom: [] };

  function wcagBadge(g) {
    if (g.kind === 'decorative') return `<span class="badge b-mute">decorative</span>`;
    if (g.kind === 'base') return `<span class="badge b-mute">surface</span>`;
    const pass = g.ratio >= g.floor;
    const cls = pass ? 'b-ok' : (g.ratio >= g.floor - 0.6 ? 'b-warn' : 'b-bad');
    return `<span class="badge ${cls}">${pass ? '✓' : '⚠'} ${g.ratio.toFixed(2)}:1 <span class="rl">${g.ref || ''}</span></span>`;
  }
  function apcaChip(g) {
    if (g.kind !== 'text') return '';
    const lc = Math.abs(g.lc);
    const cls = lc >= g.lcTarget ? 'b-ok' : (lc >= g.lcTarget - 15 ? 'b-warn' : 'b-bad');
    return `<span class="badge ${cls} apca">Lc ${lc.toFixed(0)} <span class="rl">APCA</span></span>`;
  }

  function render() {
    const skin = generate(state.brand, state.mode);
    state._skin = skin;

    document.getElementById('rows').innerHTML = coreRows(skin).map((r) => {
      const [L, Cc, Hh] = hexToOklch(r.val);
      return `<div class="row">
        <span class="sw" style="background:${r.val}"></span>
        <span class="role"><span class="vn">${r.vn}</span><span class="step">${r.name}</span>
          <small>${r.use}</small></span>
        <span class="vals"><b>${r.val}</b><br>${oklchStr(L, Cc, Hh)}</span>
        <span class="gradecell">${wcagBadge(r.grade)}${apcaChip(r.grade)}</span>
      </div>`;
    }).join('');

    const whiteOnAccent = contrast('#FFFFFF', skin.accent);
    document.getElementById('note').innerHTML =
      `<b>Accent (F66):</b> white on accent is ${whiteOnAccent.toFixed(2)}:1 — ` +
      (whiteOnAccent >= 4.5
        ? `passes → <code>--text-on-accent: #fff</code>.`
        : `fails → tool deepened the accent / set <code>--text-on-accent</code> to dark ink (${skin.onAccent}).`) +
      ` Neutrals carry the brand hue (${Math.round(skin.H)}°) at low chroma. APCA Lc shown alongside WCAG for text — it's the better read on dark surfaces.`;

    // status rows
    const status = generateStatus(state.mode);
    document.getElementById('status-rows').innerHTML = status.map((s) => {
      const pass = s.ratio >= FLOORS.status;
      const cls = pass ? 'b-ok' : (s.ratio >= FLOORS.status - 0.6 ? 'b-warn' : 'b-bad');
      return `<div class="row">
        <span class="sw statusw" style="background:${s.bg};color:${s.fg}">Aa</span>
        <span class="role"><span class="vn">--${s.key}-bg / --${s.key}-fg</span><span class="step">${s.name}</span>
          <small>status pill — text on its own tint</small></span>
        <span class="vals"><b>${s.fg}</b> on<br><b>${s.bg}</b></span>
        <span class="gradecell"><span class="badge ${cls}">${pass ? '✓' : '⚠'} ${s.ratio.toFixed(2)}:1 <span class="rl">F55</span></span></span>
      </div>`;
    }).join('');

    renderCustom(skin);
    renderPreview(skin);
  }

  function renderCustom(skin) {
    const el = document.getElementById('custom-rows');
    if (!state.custom.length) {
      el.innerHTML = `<div class="row empty"><span></span><span class="role"><small>No extra colours yet — add a brand secondary, a chart hue, anything. Each is graded as text on the page and as a fill carrying white.</small></span><span></span><span></span></div>`;
      return;
    }
    el.innerHTML = state.custom.map((c, i) => {
      const asText = contrast(c.hex, skin.bg);
      const whiteOn = contrast('#FFFFFF', c.hex);
      const tCls = asText >= 4.5 ? 'b-ok' : (asText >= 3 ? 'b-warn' : 'b-bad');
      const fCls = whiteOn >= 4.5 ? 'b-ok' : (whiteOn >= 3 ? 'b-warn' : 'b-bad');
      return `<div class="row">
        <span class="sw" style="background:${c.hex}"></span>
        <span class="role"><span class="vn">--${c.name}</span>
          <small>custom colour</small></span>
        <span class="vals"><b>${c.hex.toUpperCase()}</b></span>
        <span class="gradecell">
          <span class="badge ${tCls}">${asText >= 4.5 ? '✓' : '⚠'} ${asText.toFixed(1)}:1 <span class="rl">as text</span></span>
          <span class="badge ${fCls} apca">${whiteOn >= 4.5 ? '✓' : '⚠'} ${whiteOn.toFixed(1)}:1 <span class="rl">white-on</span></span>
          <button class="rm" data-i="${i}" title="Remove">×</button>
        </span>
      </div>`;
    }).join('');
  }

  function renderPreview(skin) {
    document.getElementById('preview').innerHTML = `
      <div class="pv-pad" style="background:${skin.bg};color:${skin.textPrimary}">
        <p class="pv-ey" style="color:${skin.accent}">Live preview · ${skin.mode}</p>
        <h2 class="pv-h" style="color:${skin.textPrimary}">A surface in this skin</h2>
        <p class="pv-p" style="color:${skin.textSecondary}">Body on the page background, with
          <span style="color:${skin.accent}">an accent link</span> and
          <span style="color:${skin.textMuted}">muted helper text</span>.</p>
        <div class="pv-actions">
          <button class="pv-btn" style="background:${skin.accent};color:${skin.onAccent}">Primary action</button>
          <button class="pv-btn" style="background:${skin.surface};color:${skin.textPrimary};border-color:${skin.borderStrong}">Secondary</button>
        </div>
        <div class="pv-card" style="background:${skin.surface};border:1px solid ${skin.border};color:${skin.textSecondary}">
          A card on <code>--surface</code>, separated by <code>--border</code>.
        </div>
      </div>`;
  }

  /* ---- export ---- */
  function exportCss() {
    const light = generate(state.brand, 'light');
    const dark = generate(state.brand, 'dark');
    const sl = generateStatus('light');
    const sd = generateStatus('dark');
    const pad = (k) => `${k}:${' '.repeat(Math.max(1, 18 - k.length))}`;
    const coreBlock = (s) => [
      ['--bg', s.bg], ['--surface', s.surface], ['--surface-raised', s.surface], ['--surface-sunken', s.sunken],
      ['--border', s.border], ['--border-strong', s.borderStrong],
      ['--text-primary', s.textPrimary], ['--text-secondary', s.textSecondary], ['--text-muted', s.textMuted],
      ['--text-on-accent', s.onAccent],
      ['--accent', s.accent], ['--accent-hover', s.accentHover], ['--accent-subtle', s.accentSubtle],
      ['--focus-ring', s.focusRing],
    ].map(([k, v]) => `  ${pad(k)}${v};`).join('\n');
    const statusBlock = (arr) => arr.map((s) =>
      `  ${pad('--' + s.key + '-bg')}${s.bg};  ${pad('--' + s.key + '-fg')}${s.fg};`).join('\n');
    const customBlock = state.custom.length
      ? '\n\n  /* custom */\n' + state.custom.map((c) => `  ${pad('--' + c.name)}${c.hex.toUpperCase()};`).join('\n')
      : '';

    return `/* ============================================================
   Generated skin — brand ${state.brand}, hue ${Math.round(light.H)}°
   Load AFTER @lookbook/tokens. Generated by apps/palette.
   Text steps solved to Lookbook floors (F15 ≥7:1 primary text);
   accent verified for white-on-accent (F66); status fg clears 4.5 on its tint (F55).
   ============================================================ */

:root,
[data-theme="light"] {
${coreBlock(light)}

  /* status */
${statusBlock(sl)}${customBlock}
}

[data-theme="dark"] {
${coreBlock(dark)}

  /* status */
${statusBlock(sd)}${customBlock}
}
`;
  }

  /* ---- wiring ---- */
  const PRESETS = ['#3A6DF0', '#168A4A', '#E0533D', '#7C4DD1', '#0E7490', '#D4A017'];
  function buildPresets() {
    document.getElementById('presets').innerHTML = PRESETS.map(
      (c) => `<button class="preset" style="background:${c}" data-c="${c}" title="${c}"></button>`).join('');
  }
  function setBrand(hex) {
    let h = hex.startsWith('#') ? hex : '#' + hex;
    if (!/^#[0-9a-fA-F]{6}$/.test(h)) return;
    state.brand = h.toUpperCase();
    document.getElementById('picker').value = state.brand;
    document.getElementById('hex').value = state.brand;
    render();
  }
  function setMode(m) {
    state.mode = m;
    document.getElementById('m-light').setAttribute('aria-pressed', String(m === 'light'));
    document.getElementById('m-dark').setAttribute('aria-pressed', String(m === 'dark'));
    render();
  }
  function addCustom() {
    const nameEl = document.getElementById('custom-name');
    const hexEl = document.getElementById('custom-hex');
    let h = hexEl.value.trim();
    if (!h.startsWith('#')) h = '#' + h;
    if (!/^#[0-9a-fA-F]{6}$/.test(h)) { hexEl.focus(); return; }
    const name = (nameEl.value.trim() || 'custom').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    state.custom.push({ name, hex: h });
    nameEl.value = ''; hexEl.value = '';
    render();
  }

  function wire() {
    document.getElementById('picker').addEventListener('input', (e) => setBrand(e.target.value));
    document.getElementById('hex').addEventListener('change', (e) => setBrand(e.target.value.trim()));
    document.getElementById('presets').addEventListener('click', (e) => { const c = e.target.dataset.c; if (c) setBrand(c); });
    document.getElementById('m-light').addEventListener('click', () => setMode('light'));
    document.getElementById('m-dark').addEventListener('click', () => setMode('dark'));
    document.getElementById('custom-add').addEventListener('click', addCustom);
    document.getElementById('custom-hex').addEventListener('keydown', (e) => { if (e.key === 'Enter') addCustom(); });
    document.getElementById('custom-rows').addEventListener('click', (e) => {
      const i = e.target.dataset.i; if (i != null) { state.custom.splice(+i, 1); render(); }
    });

    const scrim = document.getElementById('scrim');
    document.getElementById('export').addEventListener('click', () => {
      document.getElementById('code').textContent = exportCss();
      document.getElementById('skinname').textContent = `· ${state.brand}`;
      scrim.classList.add('open');
    });
    document.getElementById('close').addEventListener('click', () => scrim.classList.remove('open'));
    scrim.addEventListener('click', (e) => { if (e.target === scrim) scrim.classList.remove('open'); });
    document.getElementById('copy').addEventListener('click', async () => {
      try { await navigator.clipboard.writeText(document.getElementById('code').textContent); } catch (_) {}
    });
    document.getElementById('download').addEventListener('click', () => {
      const blob = new Blob([document.getElementById('code').textContent], { type: 'text/css' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `skin-${state.brand.replace('#', '').toLowerCase()}.css`;
      a.click(); URL.revokeObjectURL(a.href);
    });

    const params = new URLSearchParams(location.search);
    if (params.get('mode') === 'dark') setMode('dark');
    buildPresets();
    const pBrand = params.get('brand');
    if (pBrand && /^#?[0-9a-fA-F]{6}$/.test(pBrand)) setBrand(pBrand.startsWith('#') ? pBrand : '#' + pBrand);
    else render();
  }

  document.addEventListener('DOMContentLoaded', wire);
})();
