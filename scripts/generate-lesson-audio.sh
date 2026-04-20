#!/usr/bin/env bash
# generate-lesson-audio.sh — generate narration audio for a single lesson.
#
# Usage:
#   scripts/generate-lesson-audio.sh <lesson.md>
#
# Strips YAML frontmatter, pipes the lesson body through Kokoro TTS
# (mlx-community/Kokoro-82M-bf16, voice am_echo, speed 1.1), encodes to .m4a
# at 64 kbps AAC, uploads via scripts/upload-lesson-audio.sh, and prints the
# public URL.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if [[ "${1:-}" == "--help" || "${1:-}" == "-h" ]]; then
    awk '/^#!/ {next} /^#/ {print substr($0, 3); next} {exit}' "$0"
    exit 0
fi

if [[ $# -ne 1 ]]; then
    echo "Usage: $0 <lesson.md>" >&2
    exit 2
fi

LESSON_MD="$1"

if [[ ! -f "$LESSON_MD" ]]; then
    echo "Lesson file not found: $LESSON_MD" >&2
    exit 1
fi

# Derive output paths (alongside the .md file)
LESSON_BASE="${LESSON_MD%.md}"
LESSON_WAV="${LESSON_BASE}.wav"
LESSON_M4A="${LESSON_BASE}.m4a"

# Strip YAML frontmatter (content between the two leading --- markers)
TMPBODY=$(mktemp /tmp/lesson-body-XXXXXX.txt)
trap 'rm -f "$TMPBODY" "$LESSON_WAV" "$LESSON_M4A"' EXIT

python3 - "$LESSON_MD" "$TMPBODY" <<'PYEOF'
import sys

lesson_path, out_path = sys.argv[1], sys.argv[2]
with open(lesson_path, encoding="utf-8") as f:
    content = f.read()

if not content.startswith("---"):
    body = content
else:
    close = content.find("\n---", 3)
    if close == -1:
        sys.exit("ERROR: frontmatter block never closed in " + lesson_path)
    body = content[close + 4:].lstrip("\n")

with open(out_path, "w", encoding="utf-8") as f:
    f.write(body)
PYEOF

echo "Generating audio for: $LESSON_MD" >&2

# Run Kokoro TTS via mlx_audio CLI; --join_audio produces a single wav file.
# Text is passed via stdin (omitting --text) to avoid shell argument-length limits.
# Requires Python 3.10+ for mlx_audio type-union syntax; prefer python3.12
PYTHON3=$(command -v python3.12 || command -v python3.11 || command -v python3.10 || echo python3)
"$PYTHON3" -m mlx_audio.tts.generate \
    --model "mlx-community/Kokoro-82M-bf16" \
    --voice "am_echo" \
    --speed 1.1 \
    --file_prefix "$LESSON_BASE" \
    --audio_format wav \
    --join_audio \
    < "$TMPBODY" \
    2>&1 | grep -v "^$" >&2 || true

# The CLI writes {LESSON_BASE}.wav when --join_audio is used
if [[ ! -f "$LESSON_WAV" ]]; then
    echo "ERROR: TTS did not produce $LESSON_WAV" >&2
    exit 1
fi

# Encode wav → m4a at 64 kbps AAC
ffmpeg -y -i "$LESSON_WAV" -c:a aac -b:a 64k "$LESSON_M4A" \
    -hide_banner -loglevel error >&2

rm -f "$LESSON_WAV"

# Upload and capture the public URL
PUBLIC_URL="$("$SCRIPT_DIR/upload-lesson-audio.sh" "$LESSON_M4A" "$LESSON_MD")"

echo "$PUBLIC_URL"
