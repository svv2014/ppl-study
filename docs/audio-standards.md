# Audio Standards — PPL Study

## TTS Model and Voice

All lesson narration is generated with **Kokoro** using the following canonical parameters:

| Parameter | Value |
|---|---|
| Model | `mlx-community/Kokoro-82M-bf16` |
| Voice | `am_echo` |
| Speed | `1.1` |
| Output format | AAC/M4A, 64 kbps |

These parameters are fixed for the project. Do not mix voices or models between lessons — consistency across the audio library matters for listener experience.

## R2 Path Convention

Audio files are hosted on Cloudflare R2 under the `suprun-media` bucket. The R2 key mirrors the lesson markdown path exactly:

```
lessons/{topic}/{NNN}-{slug}.md  →  ppl/lessons/{topic}/{NNN}-{slug}.m4a
```

Public URL pattern:
```
https://media.suprun.workers.dev/ppl/lessons/{topic}/{NNN}-{slug}.m4a
```

Examples:

| Lesson file | R2 key | Public URL |
|---|---|---|
| `lessons/air-law/001-airspace-classifications.md` | `ppl/lessons/air-law/001-airspace-classifications.m4a` | `https://media.suprun.workers.dev/ppl/lessons/air-law/001-airspace-classifications.m4a` |
| `lessons/navigation/001-vfr-charts.md` | `ppl/lessons/navigation/001-vfr-charts.m4a` | `https://media.suprun.workers.dev/ppl/lessons/navigation/001-vfr-charts.m4a` |

See `docs/audio-hosting.md` for infrastructure details, credentials location, and verification steps.

## Canonical Generation Command

To regenerate audio for a single lesson manually:

```bash
scripts/generate-lesson-audio.sh lessons/air-law/001-airspace-classifications.md
```

The script:
1. Strips YAML frontmatter from the lesson `.md` file
2. Pipes the lesson body to Kokoro via `mlx_audio` with `am_echo` at speed 1.1
3. Encodes output to `.m4a` at 64 kbps AAC
4. Delegates upload to `scripts/upload-lesson-audio.sh`
5. Prints the resulting public URL

## Idempotency Rule

**Skip if already set:** If the `audio:` frontmatter field in a lesson file is already a non-null URL, do not regenerate — the audio is considered authoritative. Overwriting a published URL risks breaking existing listener sessions.

**Exception — AL-001:** Lesson `AL-001` (`lessons/air-law/001-airspace-classifications.md`) must be regenerated unconditionally when re-running the batch, as the initial recording predates these standards and used a different voice.

To force regeneration of a lesson that already has an audio URL, delete or null out the `audio:` field before running the script.
