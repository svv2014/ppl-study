#!/usr/bin/env bash
# Validates every lessons/**/*.md against the canonical frontmatter schema.
# Exits 1 if any lesson fails validation — safe for CI use.
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
LESSONS_DIR="$SCRIPT_DIR/../lessons"

if [ ! -d "$LESSONS_DIR" ]; then
  echo "ERROR: lessons directory not found at $LESSONS_DIR" >&2
  exit 1
fi

# Write the Python validator to a temp file so bash quoting stays clean
TMPPY=$(mktemp /tmp/validate-lesson-XXXXXX.py)
trap 'rm -f "$TMPPY"' EXIT

cat > "$TMPPY" << 'PYEOF'
#!/usr/bin/env python3
"""Validate a single lesson markdown file against the canonical frontmatter schema."""
import sys
import re

REQUIRED_FIELDS = [
    "id", "topic", "order", "slug", "title",
    "duration_min", "status", "audio", "visual",
    "sources", "questions",
]
VALID_TOPICS = {"air-law", "navigation", "meteorology", "general-knowledge", "radio", "cpl-a"}
REQUIRED_QUESTION_FIELDS = {"id", "prompt", "choices", "answer", "explanation"}

def fail(path, msg):
    print(f"  FAIL  {path}: {msg}")
    sys.exit(1)

def main():
    if len(sys.argv) != 2:
        print("Usage: validate.py <lesson.md>", file=sys.stderr)
        sys.exit(2)

    path = sys.argv[1]
    try:
        with open(path, encoding="utf-8") as f:
            content = f.read()
    except OSError as e:
        fail(path, f"cannot read file: {e}")

    # ── 1. Frontmatter block ──────────────────────────────────────────────────
    if not content.startswith("---"):
        fail(path, "missing YAML frontmatter (file must start with ---)")

    # Find closing ---
    close = content.find("\n---", 3)
    if close == -1:
        fail(path, "YAML frontmatter block is never closed (missing closing ---)")

    fm_text = content[3:close]

    # ── 2. Parse YAML ─────────────────────────────────────────────────────────
    try:
        import yaml
        fm = yaml.safe_load(fm_text)
    except ImportError:
        # Fallback: minimal key-presence check without full YAML parse
        fm = _parse_minimal(fm_text, path)
    except Exception as e:
        fail(path, f"YAML parse error: {e}")

    if not isinstance(fm, dict):
        fail(path, "frontmatter is not a YAML mapping")

    # ── 3. Required fields ────────────────────────────────────────────────────
    for field in REQUIRED_FIELDS:
        if field not in fm:
            fail(path, f"missing required field: '{field}'")

    # ── 4. topic must be in allowed set ──────────────────────────────────────
    topic = fm.get("topic")
    if topic not in VALID_TOPICS:
        fail(path, f"invalid topic {topic!r}; must be one of {sorted(VALID_TOPICS)}")

    # ── 5. questions must have exactly 5 entries (0 allowed for draft/planning) ─
    questions = fm.get("questions")
    if not isinstance(questions, list):
        fail(path, "questions must be a YAML list")
    status = fm.get("status", "")
    if len(questions) == 0 and status not in ("draft", "planning"):
        fail(path, f"questions list is empty; 5 required unless status is draft or planning")
    if len(questions) not in (0, 5):
        fail(path, f"questions must have exactly 5 entries (found {len(questions)})")

    # ── 6. Each question's answer key must exist in its choices map ───────────
    for i, q in enumerate(questions, start=1):  # skipped when questions is []
        if not isinstance(q, dict):
            fail(path, f"question {i} is not a YAML mapping")
        for qf in REQUIRED_QUESTION_FIELDS:
            if qf not in q:
                fail(path, f"question {i} missing field '{qf}'")
        choices = q.get("choices", {})
        if not isinstance(choices, dict):
            fail(path, f"question {i}: choices must be a YAML mapping")
        answer = str(q.get("answer", ""))
        if answer not in choices:
            fail(path, (
                f"question {i}: answer {answer!r} is not a key in choices "
                f"(available: {sorted(choices.keys())})"
            ))

    print(f"  OK    {path}")
    sys.exit(0)


def _parse_minimal(fm_text, path):
    """Bare-minimum key detector used when PyYAML is unavailable."""
    keys = {}
    for line in fm_text.splitlines():
        m = re.match(r'^([a-zA-Z_][a-zA-Z0-9_]*):', line)
        if m:
            keys[m.group(1)] = True
    # We can't validate values without a real YAML parser, so error out.
    print(f"  ERROR {path}: PyYAML is required (pip3 install pyyaml)", file=sys.stderr)
    sys.exit(2)


if __name__ == "__main__":
    main()
PYEOF

# ── Collect and validate all lesson files ────────────────────────────────────
total=0
failed=0

while IFS= read -r -d '' file; do
    total=$((total + 1))
    if python3 "$TMPPY" "$file"; then
        :
    else
        exit_code=$?
        if [ "$exit_code" -eq 2 ]; then
            # Fatal setup error (e.g. missing PyYAML)
            echo ""
            echo "Fatal: validator setup error — aborting." >&2
            exit 2
        fi
        failed=$((failed + 1))
    fi
done < <(find "$LESSONS_DIR" -name "*.md" -print0 | sort -z)

echo ""
echo "Validated $total lesson(s) — $failed failure(s)"

if [ "$failed" -gt 0 ]; then
    exit 1
fi

exit 0
PYEOF
