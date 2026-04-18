# Audio Hosting — PPL Study

## Why audio isn't in the repo

Audio files (lesson narration, typically 2–4 MB each × 60 lessons = ~200 MB) are hosted on **Cloudflare R2**, not in git. The repo stays small, the CDN caches globally, and there are no egress fees.

This project reuses the existing `suprun-media` R2 bucket set up for suprun.ca. A dedicated `ppl/` prefix keeps the two projects cleanly separated.

## URL convention

Every lesson has a predictable URL derived from its repo path:

```
https://media.suprun.workers.dev/ppl/lessons/{topic}/{NNN}-{slug}.m4a
```

| Lesson file | Public audio URL |
|---|---|
| `lessons/air-law/001-airspace-classifications.md` | `https://media.suprun.workers.dev/ppl/lessons/air-law/001-airspace-classifications.m4a` |
| `lessons/navigation/001-vfr-charts.md` | `https://media.suprun.workers.dev/ppl/lessons/navigation/001-vfr-charts.m4a` |

The R2 key mirrors the repo path exactly — derive one from the other by prepending `ppl/` and swapping `.md` for `.m4a`.

> **Note on custom domain.** `media.suprun.ca` is the aspirational custom-domain CNAME (see `projects/suprun.ca/MEDIA-SETUP.md`), but as of 2026-04 it is not wired up at Cloudflare. The live hostname is `media.suprun.workers.dev`. Switch to the custom domain by doing a project-wide find/replace once the CNAME is active.

## Infrastructure

- **Bucket:** `suprun-media` (region ENAM, existing)
- **Worker:** `suprun-media-proxy` on `media.suprun.workers.dev`
- **Credentials:** `~/.cloudflare` (shared with suprun.ca — do not duplicate)
- **CORS:** The worker currently returns `Access-Control-Allow-Origin: https://suprun.ca`. HTML5 `<audio controls>` tags play without CORS, so the React app at `ppl-study-suprun-ca.web.app` will work. If we later add JavaScript-level audio processing (e.g. `fetch` + `AudioContext`), add the ppl-study origin to the worker allowlist.

## Uploading a lesson's audio

### One-off (Python)

```python
import boto3, os
from pathlib import Path

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
    'path/to/local-lesson.m4a',
    env['R2_BUCKET'],
    'ppl/lessons/air-law/001-airspace-classifications.m4a',
    ExtraArgs={'ContentType': 'audio/mp4'},
)
```

### Helper script

```bash
scripts/upload-lesson-audio.sh <local-audio-file> <lesson-markdown-file>
```

Derives the R2 key from the lesson markdown path and prints the resulting public URL. See `scripts/upload-lesson-audio.sh --help`.

## Verifying a URL

Cloudflare's worker returns `200` + `content-type: audio/mp4` when the key exists. Note: on macOS, the built-in `curl` (LibreSSL) fails the TLS handshake against `*.workers.dev`. Use Python or Homebrew curl for verification.

```bash
python3 -c "import urllib.request; r = urllib.request.urlopen('https://media.suprun.workers.dev/ppl/lessons/air-law/001-airspace-classifications.m4a'); print(r.status, r.headers['content-type'])"
```

## Retention

R2 storage is cheap ($0.015/GB/month) and egress is free. Keep everything indefinitely — no lifecycle rules.
