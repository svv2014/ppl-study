# PPL Study — Canadian Pilot License Exam Prep

A structured, audio-first curriculum for Transport Canada PPL (Aeroplane) written exam preparation. Each lesson is a 20-minute audio module with practice questions and linked regulatory sources.

**Target:** Transport Canada PPL written exam (passing grade 60%, target 80%+)  
**Audience:** Student pilots preparing for the Canadian pilot license  
**Format:** Audio-first lessons with visual support and practice questions

## Features

- **20-minute audio lessons** — Kokoro-narrated, scientifically paced for retention
- **Audio-first design** — Study while driving, flying, or commuting
- **Regulatory references** — Every fact linked to TP (Transport Publications) or CARs (Canadian Aviation Regulations)
- **Practice questions** — 3–5 multi-choice questions per lesson with explanations
- **Web app** — React SPA for lesson playback and practice tests
- **Lessons by topic:**
  - Air Law
  - Human Performance & Limitations
  - Meteorology
  - Navigation
  - Aircraft Technical Knowledge
  - Flight Planning & Performance

## Quick Start

### Run the Web App Locally

```bash
cd web-app
npm install
npm run dev
```

The web app will be available at `http://localhost:5173`.

### Project Structure

```
ppl-study/
├── lessons/              # Lesson content (Markdown + audio)
│   ├── air-law/
│   ├── human-performance/
│   ├── meteorology/
│   └── ...
├── web-app/             # React + Vite + TypeScript web application
├── docs/                # Guides and schema documentation
│   ├── lesson-schema.md # Lesson format specification
│   └── curriculum-plan.md
└── scripts/             # Build & deployment scripts
```

## Contributing

Want to add lessons, fix content, or improve the web app? See [CONTRIBUTING.md](./CONTRIBUTING.md).

### Lesson Format

Lessons follow a strict schema:

```yaml
---
id: AL-001
topic: air-law
order: 1
slug: airspace-classifications
title: "Airspace Classifications"
duration_min: 20
status: published
audio: https://media.suprun.workers.dev/ppl/lessons/air-law/001-airspace-classifications.m4a
visual: null
sources:
  - CARs Part I, Section 101.01
  - TP 12880E "Pilot's Handbook of Aeronautical Knowledge"
questions:
  - id: q1
    prompt: "Class B airspace requires..."
    choices: [...]
```

See [docs/lesson-schema.md](./docs/lesson-schema.md) for the full schema.

### Factual Accuracy Rules

- **Every regulation reference must cite a source:** TP number (Transport Publications) or CARs section
- **No unsourced claims:** If you can't cite Transport Canada, CAA, or peer-reviewed aviation publications, don't include it
- **Canadian focus:** This is PPL (Canada), not FAA. Use Transport Canada materials exclusively

## Tech Stack

- **Web App:** React 18 + TypeScript + Vite 6 + MUI 7
- **Narration:** Kokoro TTS (ai-echo voice profile)
- **Media Storage:** Cloudflare R2
- **CI/CD:** GitHub Actions

## License

[MIT](./LICENSE) — Educational content. Contributed lessons remain the copyright of their authors unless transferred.

## Questions?

Open an [issue](https://github.com/svv2014/ppl-study/issues) or check [docs/](./docs) for guidance.

---

**Made by:** Vadym Suprun & contributors  
**Updated:** 2026-04-20
