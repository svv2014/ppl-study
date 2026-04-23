# CLAUDE.md — PPL Study

## What This Is

A structured study project for the Canadian Private Pilot Licence (PPL) written exam
administered by Transport Canada. Goal: pass with 70%+ (minimum); target 80%+.

## Exam Facts

- **Exam:** Transport Canada PPL (Aeroplane) Written Exam
- **Prerequisite:** PSTAR (Pre-Solo Standard Test of Air Regulations) — must pass first
- **Passing grade:** 60% minimum; recommend targeting 80%+
- **Format:** Multiple choice, ~100 questions, 3.5 hours
- **Official resources:**
  - TP 12880E — Aeroplane Flight Training Manual (core textbook)
  - TP 1102 — Air Pilot's Manual series
  - TP 13014 — Sample exam questions (free PDF from Transport Canada)
  - Practice: PilotExamCanada.com, PrivatePilotCanada.com

## Syllabus Topics (Transport Canada)

1. **Air Law** — CARs, airspace classifications, rules of the air, NOTAMs, flight plans
2. **Navigation** — Charts, VFR charts, dead reckoning, wind correction, cross-country planning
3. **Meteorology** — METAR, TAF, GFAs, PIREPs, icing, fog, thunderstorms
4. **Aeronautics (General Knowledge)** — Aircraft systems, engines, instruments, weight & balance, performance

## Lesson Design Rules

- Each lesson = exactly 20 minutes of study material
- Lessons are audio-first: narrated explanation + key points
- Each lesson ends with 3–5 practice questions
- Lessons are self-contained — no prior lesson required to understand
- File naming: `lessons/{topic}/{NNN}-{slug}.md` (e.g. `lessons/air-law/001-airspace-classes.md`)

## Project Structure

```
ppl-study/
├── lessons/          Study content — one file per 20-min lesson
│   ├── air-law/
│   ├── navigation/
│   ├── meteorology/
│   └── general-knowledge/
├── audio/            Generated narration files per lesson
├── web/              Future web app for others to study
├── scripts/          Utility scripts
├── docs/             Reference docs, exam tips, resources
└── orchestrator/     ASDLC-compatible dev cycle (GitHub issue automation)
```

## Audio Generation

Lesson narration is generated with Kokoro TTS (voice `am_echo`, speed 1.1) and hosted on Cloudflare R2.
See **`docs/audio-standards.md`** for the canonical parameters, R2 path convention, generation command, and idempotency rule.
See `docs/audio-hosting.md` for infrastructure and upload details.

## Critical Rules

- All lesson content must be factually accurate against Transport Canada sources
- Never make up regulations — cite the CARs section if claiming a rule
- Lessons are for the Canadian exam, not FAA — regulations differ significantly
- Always cite source (TP number or CAR section) for any specific number or rule

## Design System — binding for every page and component

**`docs/design/DESIGN-SYSTEM.md` is the canonical spec.** Any PR that touches UI (new pages, components, styling, theme, layout) MUST adhere to it. If a PR needs a pattern not covered in the doc, the PR must amend the doc in the same commit.

Visual direction: **Variant A · Cockpit Briefing**, dual-scheme (dark default + light), mobile-first 360 px minimum.

Tokens live in `web-app/src/tokens.ts`; theme in `web-app/src/theme.ts`. No hardcoded hex in components. No Georgia/Roboto/serif fonts. No MUI blue. No radii > 8 px outside full pills. No box-shadows in dark mode.

## GitHub Workflow

- Label issues `dev` for automatic implementation by ASDLC cycle
- Label issues `po-review` for planning/scoping
- Issue format: what to create, which topic, lesson number

## Audio Generation Standard

**TTS Tool:** Kokoro  
**Voice Profile:** echo  

All lesson narration (past and future) uses Kokoro TTS with the echo voice profile. This is the project standard — ASDLC agents should use this configuration when generating audio for lessons.

## Visuals Standard

Lesson visuals are standalone dark-aviation HTML files stored in `web-app/public/visuals/` and served by Firebase Hosting. See **`docs/visuals-standards.md`** for palette, file naming, accessibility rules, and the canonical style sample.
