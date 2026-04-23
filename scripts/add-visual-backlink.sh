#!/usr/bin/env bash
# Idempotently injects a back-to-lesson button into visual HTML files.
# Usage: ./scripts/add-visual-backlink.sh [file1.html file2.html ...]
# If no arguments given, processes all files in web-app/public/visuals/*.html

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
VISUALS_DIR="$REPO_ROOT/web-app/public/visuals"

MARKER='data-backlink="true"'

BACKLINK_BUTTON='  <button data-backlink="true" onclick="if(window.history.length<=1){window.close();}else{window.history.back();}" style="position:fixed;top:12px;left:12px;z-index:9999;background:rgba(13,27,42,0.9);color:#f0c040;border:1.5px solid rgba(240,192,64,0.4);border-radius:6px;padding:10px 14px;font-size:14px;font-family:inherit;cursor:pointer;min-width:44px;min-height:44px;line-height:1.2;backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);" aria-label="Back to lesson">&#8592; Back to lesson</button>'
BACKLINK_STYLE='  <style>.container{padding-top:56px!important;}@media(max-width:480px){.container{padding-top:60px!important;}}</style>'

FILES=("$@")
if [ ${#FILES[@]} -eq 0 ]; then
  while IFS= read -r f; do FILES+=("$f"); done < <(find "$VISUALS_DIR" -maxdepth 1 -name "*.html" | sort)
fi

INJECTED=0
SKIPPED=0

for file in "${FILES[@]}"; do
  if ! [ -f "$file" ]; then
    echo "WARN: not found: $file" >&2
    continue
  fi

  if grep -qF "$MARKER" "$file"; then
    SKIPPED=$((SKIPPED + 1))
    continue
  fi

  # Inject after <body> using Python to avoid Perl variable interpolation issues
  python3 - "$file" "$BACKLINK_BUTTON" "$BACKLINK_STYLE" <<'PYEOF'
import sys, re
path, button, style = sys.argv[1], sys.argv[2], sys.argv[3]
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()
injection = '\n' + button + '\n' + style
new_content = re.sub(r'(<body[^>]*>)', r'\1' + injection, content, count=1)
with open(path, 'w', encoding='utf-8') as f:
    f.write(new_content)
PYEOF

  INJECTED=$((INJECTED + 1))
  echo "injected: $file"
done

echo ""
echo "Done — injected: $INJECTED, already present (skipped): $SKIPPED"
