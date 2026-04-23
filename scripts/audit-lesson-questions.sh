#!/usr/bin/env bash
# Audits every lessons/**/*.md for well-formed quiz questions.
# Each lesson must have >=3 questions, each with id/prompt/options(>=3)/answer/explanation.
# Exits non-zero if any lesson fails.
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
LESSONS_DIR="$SCRIPT_DIR/../lessons"

if [ ! -d "$LESSONS_DIR" ]; then
  echo "ERROR: lessons directory not found at $LESSONS_DIR" >&2
  exit 1
fi

TMPPY=$(mktemp /tmp/audit-lesson-questions-XXXXXX.py)
trap 'rm -f "$TMPPY"' EXIT

cat > "$TMPPY" << 'PYEOF'
#!/usr/bin/env python3
"""Audit lesson files for quiz question coverage."""
import sys
import re
import glob
import os

try:
    import yaml
except ImportError:
    # Minimal YAML subset parser fallback — not needed if PyYAML present
    print("ERROR: PyYAML not installed. Run: pip install pyyaml", file=sys.stderr)
    sys.exit(2)

MIN_QUESTIONS = 3
MIN_OPTIONS = 3

def parse_frontmatter(path):
    with open(path) as f:
        content = f.read()
    m = re.match(r'^---\n(.*?)\n---', content, re.DOTALL)
    if not m:
        return None, content
    try:
        fm = yaml.safe_load(m.group(1)) or {}
    except yaml.YAMLError as e:
        print(f"  YAML parse error: {e}", file=sys.stderr)
        return None, content
    return fm, content[m.end():]

def validate_question(q):
    if not isinstance(q, dict):
        return False, "not a mapping"
    if 'id' not in q:
        return False, "missing 'id'"
    if not q.get('prompt'):
        return False, "missing or empty 'prompt'"
    choices = q.get('choices', {})
    if not isinstance(choices, dict) or len(choices) < MIN_OPTIONS:
        return False, f"'choices' must have >={MIN_OPTIONS} entries (got {len(choices) if isinstance(choices, dict) else 0})"
    if 'answer' not in q:
        return False, "missing 'answer'"
    if not q.get('explanation'):
        return False, "missing or empty 'explanation'"
    return True, ""

lessons_dir = sys.argv[1]
files = sorted(glob.glob(os.path.join(lessons_dir, '**', '*.md'), recursive=True))

if not files:
    print("ERROR: no lesson files found", file=sys.stderr)
    sys.exit(2)

failures = []

for path in files:
    rel = os.path.relpath(path, lessons_dir)
    fm, _ = parse_frontmatter(path)
    if fm is None:
        failures.append((rel, "could not parse frontmatter"))
        continue

    questions = fm.get('questions', [])
    if not isinstance(questions, list):
        failures.append((rel, "'questions' is not a list"))
        continue

    valid_count = 0
    for idx, q in enumerate(questions):
        ok, reason = validate_question(q)
        if ok:
            valid_count += 1
        else:
            print(f"  [{rel}] question[{idx}] invalid: {reason}")

    if valid_count < MIN_QUESTIONS:
        failures.append((rel, f"only {valid_count} valid question(s); need {MIN_QUESTIONS}"))

if failures:
    print(f"\nAUDIT FAILED — {len(failures)} lesson(s) below the bar:\n")
    for rel, reason in failures:
        print(f"  FAIL  {rel}: {reason}")
    sys.exit(1)
else:
    print(f"AUDIT PASSED — {len(files)} lessons, all have >={MIN_QUESTIONS} valid questions.")
    sys.exit(0)
PYEOF

python3 "$TMPPY" "$LESSONS_DIR"
