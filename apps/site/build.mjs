#!/usr/bin/env node
// Build the deployed Lookbook: per-surface hub pages that pull each surface's
// pattern doc, cookbooks, specimens, reproductions and kit files into one view,
// plus an A-Z fallback index.
import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { marked } from 'marked';
import { SURFACES } from './taxonomy.mjs';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..', '..');
const dist = join(here, 'dist');

/**
 * Where each artefact kind comes from and how it is served.
 * `rename: false` keeps original filenames — the gallery's chrome.js links
 * chapters by name, and Cloudflare's asset lookup is case-insensitive, so a
 * lowercase duplicate would make both 404.
 */
const SOURCES = {
  gallery: { dir: ['apps', 'gallery'], out: 'gallery', kind: 'html', rename: false, label: 'Gallery chapters' },
  specimens: { dir: ['harvest', 'specimens'], out: 'specimens', kind: 'html', label: 'Specimens' },
  reproductions: { dir: ['reproductions'], out: 'reproductions', kind: 'html', label: 'Reproductions' },
  registers: { dir: ['registers'], out: 'registers', kind: 'html', label: 'Type registers' },
  kits: { dir: ['kits'], out: 'kits', kind: 'html', depth: 2, label: 'Kit pieces' },
  patterns: { dir: ['patterns'], out: 'docs/patterns', kind: 'md', label: 'Pattern docs' },
  cookbooks: { dir: ['cookbooks'], out: 'docs/cookbooks', kind: 'md', label: 'Cookbooks' },
};

const slug = (name) =>
  name
    .replace(/\.(html|md)$/, '')
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9/]+/g, '-')
    .replace(/^-|-$/g, '');

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const decode = (s) =>
  s
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&');

// Several specimens ship a placeholder <title>, so fall back to the filename.
const GENERIC_TITLE = /^(bundled page|document|untitled|page)$/i;

const titleOf = (html, fallback) => {
  const raw = decode(html.match(/<title>([^<]*)<\/title>/i)?.[1]?.trim() || '');
  return !raw || GENERIC_TITLE.test(raw) ? fallback : raw;
};

/** Strip prefixes and counts that the surrounding heading already carries. */
const cleanTitle = (t) =>
  t
    .replace(/^Lookbook\s*[—–-]\s*/i, '')
    .replace(/^Composed Recipe\s*[—–-]\s*/i, '')
    .replace(/^Pattern:\s*/i, '')
    .replace(/\s*\(\d+\s+compositions?\)\s*$/i, '')
    .trim();

/** First prose sentence of a markdown doc, for hub-card blurbs. */
function summarise(md) {
  const body = md
    .split('\n')
    .filter((l) => !/^\s*(#|\*\*(Inherits|Cite as|Molecule kit|Source|Status)|>|\||-{3,})/.test(l))
    .join('\n');
  const first = body.split(/\n\s*\n/).map((p) => p.trim()).find((p) => p.length > 60) || '';
  const sentence = first.replace(/\s+/g, ' ').split(/(?<=\.)\s/)[0] || '';
  const plain = sentence.replace(/[*`_]/g, '').replace(/\[([^\]]+)\]\([^)]*\)/g, '$1');
  return plain.length > 190 ? `${plain.slice(0, 187)}…` : plain;
}

/** Recursively list files with `ext` under dir, returning paths relative to it. */
function listFiles(dir, ext, depth = 1, prefix = '') {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const rel = prefix ? `${prefix}/${entry.name}` : entry.name;
    if (entry.isDirectory()) return depth > 1 ? listFiles(join(dir, entry.name), ext, depth - 1, rel) : [];
    return entry.name.endsWith(ext) ? [rel] : [];
  });
}

// ---------------------------------------------------------------- collect

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });

/** kind -> Map<basename, entry>. Entries carry href, title, blurb. */
const catalog = {};
const docQueue = [];

for (const [key, source] of Object.entries(SOURCES)) {
  const srcDir = join(root, ...source.dir);
  const outDir = join(dist, source.out);
  const entries = new Map();

  for (const file of listFiles(srcDir, source.kind === 'md' ? '.md' : '.html', source.depth ?? 1)) {
    const raw = readFileSync(join(srcDir, file), 'utf8');
    const fallback = file.replace(/\.(html|md)$/, '').split('/').pop();
    const name = source.rename === false ? file : `${slug(file)}.html`;
    const outPath = join(outDir, name);
    mkdirSync(dirname(outPath), { recursive: true });

    const isDoc = source.kind === 'md';
    // Docs are written in a second pass — their "used by" rail needs the full catalog.
    if (isDoc) docQueue.push({ key, file, raw, outPath });
    else writeFileSync(outPath, raw);

    entries.set(file, {
      file,
      title: isDoc ? cleanTitle(raw.match(/^#\s+(.+)$/m)?.[1]?.trim() || fallback) : cleanTitle(titleOf(raw, fallback)),
      blurb: isDoc ? summarise(raw) : '',
      href: `/${source.out}/${name.replace(/\.html$/, '').split('/').map(encodeURIComponent).join('/')}`,
    });
  }
  catalog[key] = entries;
}

// Assets the gallery chapters load relatively; tokens.css lives in the tokens package.
for (const asset of ['lookbook.css', 'components.css', 'chrome.js']) {
  cpSync(join(root, 'apps', 'gallery', asset), join(dist, 'gallery', asset));
}
cpSync(join(root, 'packages', 'tokens', 'src', 'tokens.css'), join(dist, 'gallery', 'tokens.css'));
cpSync(join(root, 'apps', 'gallery', 'uploads'), join(dist, 'gallery', 'uploads'), { recursive: true });
for (const kit of readdirSync(join(root, 'kits'), { withFileTypes: true }).filter((d) => d.isDirectory())) {
  for (const asset of ['_tokens.css', '_icons.svg']) {
    const from = join(root, 'kits', kit.name, asset);
    if (existsSync(from)) cpSync(from, join(dist, 'kits', kit.name, asset));
  }
}
cpSync(join(here, 'site.css'), join(dist, 'site.css'));

// ------------------------------------------------------- coverage check

const claimed = Object.fromEntries(Object.keys(SOURCES).map((k) => [k, new Set()]));
const unknown = [];
for (const surface of SURFACES) {
  for (const key of Object.keys(SOURCES)) {
    for (const file of surface[key] ?? []) {
      if (!catalog[key].has(file)) unknown.push(`${surface.id}: ${key}/${file} does not exist`);
      claimed[key].add(file);
    }
  }
}
const unclaimed = Object.keys(SOURCES).flatMap((key) =>
  [...catalog[key].keys()].filter((f) => !claimed[key].has(f)).map((f) => `${key}/${f}`),
);
if (unknown.length || unclaimed.length) {
  console.error('taxonomy.mjs is out of date:');
  for (const line of [...unknown, ...unclaimed.map((u) => `unclaimed: ${u}`)]) console.error(`  ${line}`);
  process.exit(1);
}

// ------------------------------------------------------------- rendering

const KIND_ORDER = ['patterns', 'cookbooks', 'specimens', 'gallery', 'reproductions', 'kits', 'registers'];

const entriesFor = (surface, key) =>
  (surface[key] ?? []).map((file) => catalog[key].get(file)).sort((a, b) => a.title.localeCompare(b.title));

const countOf = (surface) => KIND_ORDER.reduce((n, key) => n + (surface[key]?.length ?? 0), 0);

function shell({ title, crumb = '', body }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/site.css">
</head>
<body>
<nav class="topbar">
  <a class="brand" href="/">Lookbook</a>
  <span class="crumb">${crumb}</span>
  <span class="spacer"></span>
  <span class="links"><a href="/">Surfaces</a><a href="/all">A–Z</a></span>
</nav>
${body}
</body>
</html>
`;
}

/** Chrome for a rendered markdown doc, with a rail back to the surfaces citing it. */
function renderDoc({ key, file, raw }) {
  const { title } = catalog[key].get(file);
  const usedBy = SURFACES.filter((s) => (s[key] ?? []).includes(file));
  return shell({
    title: `${title} — Lookbook`,
    crumb: `${SOURCES[key].label.toLowerCase()} · ${esc(title)}`,
    body: `<main class="wrap"><article class="doc">${marked.parse(raw)}</article>${
      usedBy.length
        ? `<aside class="aside"><p class="eyebrow">Used by</p><ul class="rail">${usedBy
            .map((s) => `<li><a href="/s/${s.id}">${esc(s.name)}</a></li>`)
            .join('')}</ul></aside>`
        : ''
    }</main>`,
  });
}

for (const doc of docQueue) writeFileSync(doc.outPath, renderDoc(doc));

const cardList = (items) =>
  `<ul class="grid">${items
    .map(
      (i) =>
        `<li><a href="${i.href}"><span class="name">${esc(i.title)}</span>${
          i.blurb ? `<span class="blurb">${esc(i.blurb)}</span>` : `<span class="path">${esc(i.href)}</span>`
        }</a></li>`,
    )
    .join('')}</ul>`;

const railFor = (currentId) =>
  `<ul class="rail">${SURFACES.map(
    (s) =>
      `<li><a href="/s/${s.id}"${s.id === currentId ? ' aria-current="page"' : ''}>${esc(s.name)}</a></li>`,
  ).join('')}</ul>`;

// Surface hubs.
mkdirSync(join(dist, 's'), { recursive: true });
for (const surface of SURFACES) {
  const groups = KIND_ORDER.map((key) => [SOURCES[key].label, entriesFor(surface, key)]).filter(
    ([, items]) => items.length,
  );
  writeFileSync(
    join(dist, 's', `${surface.id}.html`),
    shell({
      title: `${surface.name} — Lookbook`,
      crumb: `surface · ${esc(surface.id)}`,
      body: `<main class="wrap">
  <header class="masthead">
    <p class="eyebrow">Surface</p>
    <h1>${esc(surface.name)}</h1>
    <p class="lede">${esc(surface.blurb)}</p>
    <p class="meta">${countOf(surface)} artefacts · ${groups.map(([l, i]) => `${i.length} ${l.toLowerCase()}`).join(' · ')}</p>
  </header>
  ${groups
    .map(
      ([label, items]) => `<section class="group">
    <div class="group-head"><h2>${esc(label)}</h2><span class="count">${items.length}</span></div>
    ${cardList(items)}
  </section>`,
    )
    .join('\n  ')}
  <aside class="aside"><p class="eyebrow">Other surfaces</p>${railFor(surface.id)}</aside>
</main>`,
    }),
  );
}

// Surfaces index.
const totalArtefacts = Object.values(catalog).reduce((n, m) => n + m.size, 0);
writeFileSync(
  join(dist, 'index.html'),
  shell({
    title: 'Lookbook — surfaces',
    body: `<main class="wrap">
  <header class="masthead">
    <p class="eyebrow">Lookbook</p>
    <h1>Design a surface.</h1>
    <p class="lede">Every surface pulls its pattern doc, cookbooks, specimen sheets, reproductions and kit pieces into one view — so the rules and the rendered evidence sit side by side. Open a sheet and read the pixels; composition does not survive a grep.</p>
    <p class="meta">${SURFACES.length} surfaces · ${totalArtefacts} artefacts</p>
  </header>
  <ul class="surfaces">
    ${SURFACES.map(
      (s) => `<li><a href="/s/${s.id}">
      <h2>${esc(s.name)}</h2>
      <p class="blurb">${esc(s.blurb)}</p>
      <span class="tally">${KIND_ORDER.filter((k) => s[k]?.length)
        .map((k) => `<span class="pill">${s[k].length} ${esc(SOURCES[k].label.toLowerCase())}</span>`)
        .join('')}</span>
    </a></li>`,
    ).join('\n    ')}
  </ul>
</main>`,
  }),
);

// A-Z fallback.
writeFileSync(
  join(dist, 'all.html'),
  shell({
    title: 'Lookbook — everything A–Z',
    crumb: 'everything',
    body: `<main class="wrap">
  <header class="masthead">
    <p class="eyebrow">Lookbook</p>
    <h1>Everything, A–Z</h1>
    <p class="lede">The flat list, by kind. If you know what you are looking for by name, it is faster than the surfaces.</p>
    <p class="meta">${totalArtefacts} artefacts</p>
  </header>
  ${KIND_ORDER.map((key) => {
    const items = [...catalog[key].values()].sort((a, b) => a.title.localeCompare(b.title));
    return `<section class="group">
    <div class="group-head"><h2>${esc(SOURCES[key].label)}</h2><span class="count">${items.length}</span></div>
    ${cardList(items)}
  </section>`;
  }).join('\n  ')}
</main>`,
  }),
);

console.log(
  `built ${SURFACES.length} surface hubs over ${totalArtefacts} artefacts ` +
    `(${KIND_ORDER.map((k) => `${catalog[k].size} ${k}`).join(', ')})`,
);
