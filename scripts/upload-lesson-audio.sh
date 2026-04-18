#!/usr/bin/env bash
# upload-lesson-audio.sh — upload a lesson narration file to Cloudflare R2.
#
# Usage:
#   scripts/upload-lesson-audio.sh <local-audio.m4a> <lesson.md>
#
# The R2 key is derived from the lesson markdown path:
#   lessons/{topic}/{NNN}-{slug}.md  ->  ppl/lessons/{topic}/{NNN}-{slug}.m4a
# Prints the resulting public URL on success.

set -euo pipefail

if [[ "${1:-}" == "--help" || "${1:-}" == "-h" ]]; then
    awk '/^#!/ {next} /^#/ {print substr($0, 3); next} {exit}' "$0"
    exit 0
fi

if [[ $# -ne 2 ]]; then
    echo "Usage: $0 <local-audio.m4a> <lesson.md>" >&2
    exit 2
fi

LOCAL_AUDIO="$1"
LESSON_MD="$2"

if [[ ! -f "$LOCAL_AUDIO" ]]; then
    echo "Audio file not found: $LOCAL_AUDIO" >&2
    exit 1
fi

if [[ ! -f "$LESSON_MD" ]]; then
    echo "Lesson markdown file not found: $LESSON_MD" >&2
    exit 1
fi

# Derive R2 key: strip everything up to and including "lessons/", drop .md, add .m4a, prepend ppl/
REL_PATH="${LESSON_MD##*lessons/}"        # e.g. air-law/001-airspace-classifications.md
REL_BASE="${REL_PATH%.md}"                # e.g. air-law/001-airspace-classifications
R2_KEY="ppl/lessons/${REL_BASE}.m4a"
PUBLIC_URL="https://media.suprun.workers.dev/${R2_KEY}"

python3 - "$LOCAL_AUDIO" "$R2_KEY" <<'PYEOF'
import boto3, os, sys
from pathlib import Path

local_audio, r2_key = sys.argv[1], sys.argv[2]

env = {}
for line in Path(os.path.expanduser('~/.cloudflare')).read_text().splitlines():
    if '=' in line and not line.startswith('#'):
        k, v = line.split('=', 1)
        env[k.strip()] = v.strip().strip('"')

s3 = boto3.client(
    's3',
    endpoint_url=env['R2_ENDPOINT'],
    aws_access_key_id=env['R2_ACCESS_KEY_ID'],
    aws_secret_access_key=env['R2_SECRET_ACCESS_KEY'],
    region_name='auto',
)

s3.upload_file(
    local_audio,
    env['R2_BUCKET'],
    r2_key,
    ExtraArgs={'ContentType': 'audio/mp4'},
)
print(f"  key:  {r2_key}", file=sys.stderr)
PYEOF

echo "$PUBLIC_URL"
