# scripts/

Utility scripts for the PPL Study project.

## Audio Generation

### `generate-lesson-audio.sh`

Generates narration audio for a single lesson and uploads it to Cloudflare R2.

```
Usage: scripts/generate-lesson-audio.sh <lesson.md>
```

**Audio standard: Kokoro TTS, voice: echo (`am_echo`), speed 1.1, output: AAC/M4A 64 kbps.**

This is the canonical voice for all PPL Study lesson audio. Do not use any other voice or model.

**What it does:**
1. Strips YAML frontmatter from the lesson `.md` file
2. Pipes the lesson body to Kokoro via `mlx_audio` (`mlx-community/Kokoro-82M-bf16`, voice `am_echo`, speed 1.1)
3. Encodes WAV output to `.m4a` at 64 kbps AAC via `ffmpeg`
4. Delegates upload to `upload-lesson-audio.sh`
5. Prints the resulting public URL

**Prerequisites:** Python 3.10+, `mlx_audio` package, `ffmpeg`, R2 credentials in `~/.cloudflare`.

**Idempotency:** Skip lessons whose frontmatter already has a non-null `audio:` URL, except AL-001 which must always be regenerated (its initial recording used a different voice).

### `upload-lesson-audio.sh`

Uploads a local `.m4a` file to Cloudflare R2, deriving the R2 key from the lesson markdown path.

```
Usage: scripts/upload-lesson-audio.sh <local-audio.m4a> <lesson.md>
```

R2 key pattern: `ppl/lessons/{topic}/{NNN}-{slug}.m4a`  
Public URL pattern: `https://media.suprun.workers.dev/ppl/lessons/{topic}/{NNN}-{slug}.m4a`

**Prerequisites:** Python 3, `boto3`, R2 credentials in `~/.cloudflare`.

## Validation

### `validate-lesson-schema.sh`

Validates the YAML frontmatter of lesson files against the lesson schema.

```
Usage: scripts/validate-lesson-schema.sh [lesson.md ...]
```

Omit arguments to validate all lessons under `lessons/`.
