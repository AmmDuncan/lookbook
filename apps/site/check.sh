#!/usr/bin/env bash
# Smoke-check every internal link reachable from the surfaces index.
set -euo pipefail
BASE="${1:-https://lookbook-specimens.ammielgyanyawson.workers.dev}"

pages=$(mktemp)
{ echo "/"; echo "/all"; curl -s "$BASE/" | grep -o 'href="/s/[^"]*"' | cut -d'"' -f2; } | sort -u > "$pages"

links=$(mktemp)
while read -r page; do
  curl -s "$BASE$page" | grep -o 'href="/[^"]*"' | cut -d'"' -f2
done < "$pages" | sort -u > "$links"

fail=0
while read -r path; do
  code=$(curl -s -o /dev/null -w '%{http_code}' -L "$BASE$path")
  [ "$code" = "200" ] || { echo "FAIL $code $path"; fail=1; }
done < "$links"

echo "checked $(wc -l < "$links" | tr -d ' ') links across $(wc -l < "$pages" | tr -d ' ') pages; fail=$fail"
rm -f "$pages" "$links"
exit $fail
