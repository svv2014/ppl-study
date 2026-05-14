# Lesson Frontmatter Schema

Every lesson file under `lessons/**/*.md` must begin with a YAML frontmatter block
that conforms to this schema. The web app and validator both rely on it.

## Required Fields

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique lesson identifier, e.g. `AL-001`, `NAV-003` |
| `topic` | string | One of the four topic slugs (see allowed values below) |
| `order` | integer | Lesson order within the topic, starting at 1 |
| `slug` | string | URL-safe identifier matching the filename slug, e.g. `airspace-classifications` |
| `title` | string | Human-readable lesson title |
| `duration_min` | integer | Estimated study time in minutes (target: 20) |
| `status` | string | One of: `planning`, `draft`, `complete` |
| `audio` | string \| null | Full URL to the narration audio file, or `null` if not yet generated |
| `visual` | string \| null | Root-relative path to the visual/chart supplement — format: `/visuals/{id_lowercase}-{slug}.html` (e.g. `/visuals/al001-airspace-classifications.html`), or `null` if the lesson has no visual. See `docs/visuals-standards.md`. |
| `sources` | list of strings | Authoritative sources cited in the lesson (TP number or CARs section) |
| `questions` | list of 5 question objects | Practice questions — see question schema below |

### Allowed `topic` values

| Value | Exam Section |
|-------|-------------|
| `air-law` | Air Law (CARs, airspace, rules of the air) |
| `navigation` | Navigation (charts, dead reckoning, wind correction) |
| `meteorology` | Meteorology (METAR, TAF, GFAs, weather hazards) |
| `general-knowledge` | Aeronautics — General Knowledge (aircraft systems, instruments, W&B) |
| `radio` | Radiotelephony — RROE track |
| `cpl-a` | Commercial Pilot Licence (Aeroplane) — CPL-A track |
| `helicopter` | PPL Helicopter — PPL-H track |

### Question object schema

Each entry in `questions` must have:

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Question identifier within the lesson, e.g. `q1` … `q5` |
| `prompt` | string | The question text |
| `choices` | map | Key–value pairs where keys are single letters (A, B, C, D) and values are the choice text |
| `answer` | letter | The correct answer key — must exist as a key in `choices` |
| `explanation` | string | Why the answer is correct; cite the relevant CARs section or TP reference |

## Annotated Example

```yaml
---
id: AL-001
topic: air-law
order: 1
slug: airspace-classifications
title: "Canadian Airspace Classifications"
duration_min: 20
status: complete
# Real URL once audio is generated; null until then
audio: https://media.suprun.workers.dev/ppl/lessons/air-law/001-airspace-classifications.m4a
visual: /visuals/al001-airspace-classifications.html
sources:
  - CARs Part VI        # Canadian Aviation Regulations, Part VI (Airspace)
  - TP 12880E           # Aeroplane Flight Training Manual
  - AIM RAC 2.0         # Aeronautical Information Manual, Rules of the Air
questions:
  - id: q1
    prompt: "You are planning a VFR flight that will pass through Class C airspace. Before entering, you must:"
    choices:
      A: "Have a filed flight plan on record"
      B: "Obtain an ATC clearance and establish two-way radio contact"
      C: "Establish two-way radio contact only — no clearance is required"
      D: "Fly at or below 700 feet AGL to remain clear of Class C"
    answer: B          # must be a key that exists in choices above
    explanation: "Class C requires both an ATC clearance and established two-way radio contact before entry. Source: CARs 601.07, TP 12880E Chapter 7."
  # … questions q2–q5 follow the same structure
---
```

## Audio URL Convention

Audio files are hosted on Cloudflare R2 under the `suprun-media` bucket and served
via a Cloudflare Worker:

```
https://media.suprun.workers.dev/ppl/lessons/{topic}/{NNN}-{slug}.m4a
```

Example:
```
https://media.suprun.workers.dev/ppl/lessons/air-law/001-airspace-classifications.m4a
```

Set `audio: null` in the frontmatter when the file has not yet been generated.

## Validation

Run the validator to check all lessons at once:

```bash
scripts/validate-lesson-schema.sh
```

The script exits `0` on success and `1` if any lesson fails. It checks:
- YAML frontmatter block is present and parseable
- All required fields exist
- `topic` is in the allowed set
- `questions` has exactly 5 entries
- Each question's `answer` key exists in its `choices` map

Requires Python 3 with PyYAML (`pip3 install pyyaml`).
