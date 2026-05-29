#!/usr/bin/env bash
# Refresh the gallery from a fresh Claude Design export.
# Usage: bash scripts/sync-gallery.sh <path-to-export-dir-or-zip>
#
# The gallery (apps/gallery) is the canonical visual spec. When Claude Design
# adds/updates a chapter, re-export and run this to sync the HTML + CSS in,
# then copy the refreshed tokens.css into packages/tokens.
set -euo pipefail

SRC="${1:?usage: sync-gallery.sh <export-dir-or-zip>}"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
GALLERY="$ROOT/apps/gallery"
TOKENS="$ROOT/packages/tokens/src"

WORK="$SRC"
if [[ "$SRC" == *.zip ]]; then
  WORK="$(mktemp -d)"
  unzip -o "$SRC" -d "$WORK" >/dev/null
fi

# Section HTML + shared CSS/JS + uploads (skip debug scraps + standalone dups).
cp "$WORK"/*.html "$GALLERY"/ 2>/dev/null || true
rm -f "$GALLERY"/*"(standalone)"*.html
cp "$WORK"/components.css "$WORK"/lookbook.css "$WORK"/chrome.js "$GALLERY"/ 2>/dev/null || true
[[ -d "$WORK/uploads" ]] && rm -rf "$GALLERY/uploads" && cp -R "$WORK/uploads" "$GALLERY/uploads"

# tokens.css is the shared contract — it lives in the tokens package.
cp "$WORK"/tokens.css "$TOKENS"/tokens.css

echo "Synced gallery + tokens from: $SRC"
ls "$GALLERY" | grep '\.html$' | sed 's/^/  /'
