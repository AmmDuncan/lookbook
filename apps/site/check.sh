#!/usr/bin/env bash
# Smoke-check every link on the deployed index.
set -euo pipefail
BASE="${1:-https://lookbook-specimens.ammielgyanyawson.workers.dev}"
fail=0
for path in $(curl -s "$BASE/" | grep -o 'href="/[^"]*"' | cut -d'"' -f2); do
  code=$(curl -s -o /dev/null -w '%{http_code}' -L "$BASE$path")
  [ "$code" = "200" ] || { echo "FAIL $code $path"; fail=1; }
done
echo "checked $(curl -s "$BASE/" | grep -c 'href="/') links; fail=$fail"
exit $fail
