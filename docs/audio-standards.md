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

## Narration Extraction Rule

Audio is generated from the **`## Narration Script`** section of each lesson file only — not the full lesson body. The script must:

1. Locate the `## Narration Script` heading in the lesson body (after stripping YAML frontmatter).
2. Extract all text from that heading up to (but not including) the next `## ` heading, or end-of-file.
3. Strip all markdown formatting from the extracted text before passing it to Kokoro:
   - Bold markers: `**text**` → `text`
   - Italic markers: `*text*` → `text`
   - Inline code: `` `text` `` → `text`
   - Fenced code blocks: ` ```...``` ` → (removed)
   - ATX headings: lines starting with `#` → plain text (strip the `# ` prefix)
   - Horizontal rules: `---` lines → (removed)
   - Table rows: lines containing `|` → (removed)
   - Bullet markers: leading `- ` → (removed)

If a lesson file has no `## Narration Script` section, the script exits with an error — do not fall back to narrating the whole lesson.

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

**2026-04-21 cutoff — narration-extraction backfill:** Audio generated before 2026-04-21 was produced from the full lesson body, not the `## Narration Script` section. All 15 lessons existing on that date (AL-001 through AL-013, NAV-001, NAV-002) were regenerated with narration-only extraction as part of issue #141. Their `audio:` fields were nulled and re-set during that backfill. Any audio URL already present for these lessons after 2026-04-21 is considered authoritative under the narration-extraction standard.

To force regeneration of a lesson that already has an audio URL, delete or null out the `audio:` field before running the script.
