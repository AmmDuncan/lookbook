/* Cross-chapter navigation for the Lookbook gallery.
   Injected into every chapter by sync-gallery.sh. Self-contained:
   a fixed launcher that opens a chapter list, highlighting the current page. */
(() => {
  const CHAPTERS = [
    'Foundations', 'Atoms', 'Molecules', 'Organisms', 'Auth', 'States',
    'Motion', 'DataViz', 'Marketing', 'Personality', 'Recipes', 'Layout', 'Guide',
  ]
  const here = (location.pathname.split('/').pop() || 'Foundations.html').replace('.html', '')

  const css = `
    .lbnav { position: fixed; bottom: 20px; left: 20px; z-index: 99999; font-family: var(--font-sans, system-ui); }
    .lbnav-btn { display: inline-flex; align-items: center; gap: 8px; padding: 9px 14px; border-radius: 999px;
      background: var(--surface, #fff); color: var(--text-primary, #111); border: 1px solid var(--border, #e5e7eb);
      box-shadow: var(--shadow-lg, 0 8px 24px rgba(0,0,0,.12)); cursor: pointer; font-size: 13px; font-weight: 600; }
    .lbnav-btn small { color: var(--text-muted, #888); font-weight: 500; }
    .lbnav-list { position: absolute; bottom: calc(100% + 8px); left: 0; min-width: 200px; padding: 6px;
      background: var(--surface-raised, #fff); border: 1px solid var(--border, #e5e7eb); border-radius: 12px;
      box-shadow: var(--shadow-xl, 0 20px 40px rgba(0,0,0,.18)); display: none; max-height: 70vh; overflow: auto; }
    .lbnav.open .lbnav-list { display: block; }
    .lbnav-list a { display: flex; justify-content: space-between; gap: 12px; padding: 7px 10px; border-radius: 7px;
      color: var(--text-secondary, #555); text-decoration: none; font-size: 13px; }
    .lbnav-list a:hover { background: var(--surface-sunken, #f3f4f6); color: var(--text-primary, #111); }
    .lbnav-list a.is-current { background: var(--accent-subtle, #eef); color: var(--accent, #2563c4); font-weight: 600; }
    .lbnav-list a span { color: var(--text-muted, #aaa); font-variant-numeric: tabular-nums; }
  `
  const style = document.createElement('style')
  style.textContent = css
  document.head.appendChild(style)

  const nav = document.createElement('div')
  nav.className = 'lbnav'
  nav.innerHTML =
    `<button class="lbnav-btn" aria-expanded="false">☰ <span>${here}</span> <small>· chapters</small></button>` +
    `<nav class="lbnav-list">` +
    CHAPTERS.map((c, i) =>
      `<a href="${c}.html" class="${c === here ? 'is-current' : ''}">${c}<span>${String(i + 1).padStart(2, '0')}</span></a>`,
    ).join('') +
    `</nav>`
  document.body.appendChild(nav)

  const btn = nav.querySelector('.lbnav-btn')
  btn.addEventListener('click', (e) => {
    e.stopPropagation()
    const open = nav.classList.toggle('open')
    btn.setAttribute('aria-expanded', String(open))
  })
  document.addEventListener('click', () => nav.classList.remove('open'))
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') nav.classList.remove('open') })
})()
