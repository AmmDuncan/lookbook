# apps/site — the deployed Lookbook

Static Cloudflare Worker. The entry point is **surfaces**, not files: each hub page
pulls one surface's pattern doc, cookbooks, specimen sheets, reproductions, kit pieces
and gallery chapters into a single view, so the rules and the rendered evidence sit
together. `/all` keeps the flat A–Z list for when you know the name.

- Live: https://lookbook-specimens.ammielgyanyawson.workers.dev
- 16 surfaces over 175 artefacts.

```bash
npm run site:build     # -> apps/site/dist (gitignored)
npm run site:deploy    # build + wrangler deploy
npm run site:check     # crawl the surfaces and assert every link is 200
```

## The layers are not peers

`SKILL.md` ranks them and the site follows: you **pull a composition from the variation
specimens**, judge it against the earned cookbooks, and treat `patterns/` and `kits/` as
"untrusted reference until re-earned through the reproduction gate". So on every hub the
specimens come first and those two sit below a divider, tagged.

Kit tags are not hand-maintained — `build.mjs` parses the verdict table in
`kits/COVERAGE.md`, so the site cannot disagree with the repo's own status file.
COVERED → `superseded` (21 files), ORPHAN or infra → `untrusted reference` (12).
Nothing is deleted, per COVERAGE.md's own "the specimens stay as frozen reference".

## Adding content

`taxonomy.mjs` maps files to surfaces, and `SPINE` holds the system-wide docs. The build
**fails** if a file under any source dir is claimed by no surface, if a surface claims a
file that does not exist, or if a new root `.md` is in neither `SPINE` nor `EXCLUDED` —
so adding content forces the placement decision instead of letting it fall out of the
index silently. An artefact may belong to several surfaces.

## Two gotchas the build encodes

- Gallery chapters keep their original filenames — `chrome.js` links chapters by name,
  and Cloudflare's asset lookup is case-insensitive, so a lowercase duplicate 404s both.
- `tokens.css` lives in `packages/tokens/src`, not in the gallery dir; the build copies
  it in, along with each kit's `_tokens.css` / `_icons.svg`.
