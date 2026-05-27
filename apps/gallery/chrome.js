/* Lookbook — shared chrome JS. Loaded as a normal <script> on every page.
   Self-contained: injects its own styles via <style id="lb-chrome-styles">
   so the chapter picker is bulletproof regardless of CSS load order /
   Tailwind preflight resets. */
(() => {
  const root = document.documentElement;
  const STORAGE = 'lookbook-theme';

  // ----- Inject picker styles (must run before DOMContentLoaded UI is shown) ---
  const styles = `
    .lb-page-nav { display: inline-flex; align-items: center; margin-left: auto; margin-right: 8px; }

    /* Theme toggle \u2014 inject here so it survives Tailwind preflight regardless of CSS load order. */
    .lb-theme-toggle {
      display: inline-flex;
      align-items: center;
      padding: 2px;
      border-radius: var(--radius-md);
      border: 1px solid var(--border);
      background: var(--surface);
    }
    .lb-theme-btn {
      display: inline-flex; align-items: center; gap: 6px;
      padding: 4px 10px;
      height: 26px;
      border-radius: calc(var(--radius-md) - 2px);
      color: var(--text-secondary);
      font-family: var(--font-sans);
      font-size: 12px;
      font-weight: 500;
      background: transparent;
      border: 0;
      cursor: pointer;
      line-height: 1;
      transition: background-color 120ms ease, color 120ms ease, box-shadow 120ms ease;
    }
    .lb-theme-btn[aria-pressed="true"] {
      background: var(--surface-sunken);
      color: var(--text-primary);
      box-shadow: var(--shadow-sm);
    }
    .lb-theme-btn:hover { color: var(--text-primary); }
    .lb-theme-btn > svg { display: inline-block; flex-shrink: 0; }
    .lb-picker { position: relative; display: inline-flex; }
    .lb-picker-trigger {
      display: inline-flex; align-items: center; gap: 8px;
      height: 30px; padding: 0 10px;
      border: 1px solid var(--border);
      border-radius: var(--radius-sm);
      background: var(--surface);
      font-family: var(--font-sans);
      font-size: 13px; font-weight: 500;
      color: var(--text-primary);
      cursor: pointer;
      letter-spacing: -0.005em;
    }
    .lb-picker-trigger:hover { background: var(--surface-sunken); }
    .lb-picker-trigger .num {
      font-family: var(--font-mono);
      font-size: 10.5px; color: var(--text-muted);
      padding: 2px 5px; background: var(--surface-sunken);
      border-radius: 3px;
    }
    .lb-picker-trigger > svg { width: 12px; height: 12px; color: var(--text-muted); }
    .lb-picker-trigger .kbd {
      font-family: var(--font-mono); font-size: 10.5px;
      padding: 1px 5px;
      background: var(--surface-sunken);
      border: 1px solid var(--border);
      border-radius: 3px;
      color: var(--text-secondary);
    }
    .lb-picker-panel {
      position: absolute;
      top: calc(100% + 8px); right: 0;
      display: none;
      width: 280px;
      background: var(--surface-raised, var(--surface));
      border: 1px solid var(--border);
      border-radius: var(--radius-md);
      box-shadow: var(--shadow-lg);
      padding: 4px;
      z-index: 2000;
      max-height: calc(100vh - 80px);
      overflow-y: auto;
    }
    .lb-picker[open] .lb-picker-panel,
    .lb-picker.is-open .lb-picker-panel { display: block; }
    .lb-picker-group {
      padding: 10px 10px 4px;
      font-size: 10.5px; font-weight: 600;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: var(--text-muted);
    }
    .lb-picker-item {
      display: grid; grid-template-columns: 28px 1fr auto;
      align-items: center; gap: 8px;
      padding: 7px 10px;
      border-radius: var(--radius-sm);
      color: var(--text-primary);
      font-size: 13px; font-weight: 500;
      text-decoration: none;
      letter-spacing: -0.005em;
    }
    .lb-picker-item .num {
      font-family: var(--font-mono);
      font-size: 10.5px; color: var(--text-muted);
    }
    .lb-picker-item .hint {
      font-family: var(--font-mono);
      font-size: 10px; color: var(--text-muted);
      text-transform: uppercase; letter-spacing: 0.04em;
    }
    .lb-picker-item:hover { background: var(--surface-sunken); }
    .lb-picker-item.is-current { background: var(--accent-subtle); color: var(--accent); }
    .lb-picker-item.is-current .num,
    .lb-picker-item.is-current .hint { color: var(--accent); }
  `;
  const styleEl = document.createElement('style');
  styleEl.id = 'lb-chrome-styles';
  styleEl.textContent = styles;
  (document.head || document.documentElement).appendChild(styleEl);

  // ----- Theme toggle ---------------------------------------------------------
  const setTheme = (t) => {
    root.setAttribute('data-theme', t);
    document.querySelectorAll('.lb-theme-btn').forEach(b => {
      const active = b.dataset.themeBtn === t;
      b.setAttribute('aria-pressed', String(active));
    });
    try { localStorage.setItem(STORAGE, t); } catch (_) {}
    window.dispatchEvent(new CustomEvent('lookbook:themechange', { detail: { theme: t } }));
  };
  let initial = 'light';
  try {
    const saved = localStorage.getItem(STORAGE);
    if (saved === 'dark' || saved === 'light') initial = saved;
  } catch (_) {}

  const ready = (fn) => (document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', fn, { once: true })
    : fn());

  ready(() => {
    setTheme(initial);
    document.querySelectorAll('.lb-theme-btn').forEach(b => {
      b.addEventListener('click', () => setTheme(b.dataset.themeBtn));
    });

    // ----- Chapter picker ----------------------------------------------------
    const CHAPTERS = [
      { num: '01', file: 'Foundations.html', name: 'Foundations', group: 'System' },
      { num: '02', file: 'Atoms.html',       name: 'Atoms',       group: 'System' },
      { num: '03', file: 'Molecules.html',   name: 'Molecules',   group: 'System' },
      { num: '04', file: 'Organisms.html',   name: 'Organisms',   group: 'System' },
      { num: '05', file: 'States.html',      name: 'States',      group: 'System' },
      { num: '06', file: 'Auth.html',        name: 'Auth',        group: 'Flows' },
      { num: '07', file: 'Personality.html', name: 'Personality', group: 'Craft' },
      { num: '08', file: 'Motion.html',      name: 'Motion',      group: 'Craft' },
      { num: '09', file: 'DataViz.html',     name: 'Data viz',    group: 'Craft' },
      { num: '10', file: 'Marketing.html',   name: 'Marketing',   group: 'Outward' },
      { num: '11', file: 'Layout.html',       name: 'Layout',      group: 'Reference' },
      { num: '12', file: 'Recipes.html',      name: 'Recipes',     group: 'Reference' },
      { num: '13', file: 'Guide.html',        name: 'Guide',       group: 'Reference' },
    ];
    const currentFile = location.pathname.split('/').pop() || 'Foundations.html';
    const currentChap = CHAPTERS.find(c => c.file === currentFile) || CHAPTERS[0];

    const groups = [];
    let lastGroup = null;
    for (const c of CHAPTERS) {
      if (c.group !== lastGroup) { groups.push({ name: c.group, items: [] }); lastGroup = c.group; }
      groups[groups.length - 1].items.push(c);
    }

    document.querySelectorAll('.lb-page-nav').forEach(nav => {
      nav.innerHTML = '';
      const picker = document.createElement('div');
      picker.className = 'lb-picker';

      const trigger = document.createElement('button');
      trigger.type = 'button';
      trigger.className = 'lb-picker-trigger';
      trigger.setAttribute('aria-haspopup', 'menu');
      trigger.setAttribute('aria-expanded', 'false');
      trigger.innerHTML = `
        <span class="num">${currentChap.num}</span>
        <span>${currentChap.name}</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        <span class="kbd">G</span>
      `;

      const panel = document.createElement('div');
      panel.className = 'lb-picker-panel';
      panel.setAttribute('role', 'menu');
      let html = '';
      for (const g of groups) {
        html += `<div class="lb-picker-group">${g.name}</div>`;
        for (const item of g.items) {
          const isCur = item.file === currentFile;
          html += `<a class="lb-picker-item${isCur ? ' is-current' : ''}" href="${item.file}" role="menuitem">
            <span class="num">${item.num}</span>
            <span>${item.name}</span>
            <span class="hint">${isCur ? 'here' : ''}</span>
          </a>`;
        }
      }
      panel.innerHTML = html;

      picker.appendChild(trigger);
      picker.appendChild(panel);
      nav.appendChild(picker);

      const close = () => { picker.classList.remove('is-open'); trigger.setAttribute('aria-expanded', 'false'); };
      const open  = () => { picker.classList.add('is-open');    trigger.setAttribute('aria-expanded', 'true');  };
      trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        picker.classList.contains('is-open') ? close() : open();
      });
      document.addEventListener('click', (e) => { if (!picker.contains(e.target)) close(); });
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') close();
        const tag = (e.target || {}).tagName;
        if (e.key && e.key.toLowerCase() === 'g' && !e.metaKey && !e.ctrlKey && !e.altKey &&
            !['INPUT','TEXTAREA','SELECT'].includes(tag)) {
          e.preventDefault();
          picker.classList.contains('is-open') ? close() : (open(), trigger.focus());
        }
      });
    });

    // Sidebar scroll-spy
    const sectionEls = [...document.querySelectorAll('.lb-section[id]')];
    const sidebarLinks = [...document.querySelectorAll('.lb-sidebar a[href^="#"]')];
    if (sectionEls.length && sidebarLinks.length && 'IntersectionObserver' in window) {
      const byId = new Map(sidebarLinks.map(a => [a.getAttribute('href').slice(1), a]));
      const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          const link = byId.get(e.target.id);
          if (!link) return;
          if (e.isIntersecting) {
            sidebarLinks.forEach(l => l.classList.remove('is-active'));
            link.classList.add('is-active');
          }
        });
      }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });
      sectionEls.forEach(s => io.observe(s));
    }
  });

  window.LookbookChrome = { setTheme };
})();
