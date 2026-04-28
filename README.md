# PPL Study — Canadian Pilot Licence Exam Prep

> **Live site:** [https://ppl.suprun.ca](https://ppl.suprun.ca)

A structured, audio-first curriculum for Transport Canada PPL (Aeroplane) written exam preparation. Each lesson is a 20-minute audio module with practice questions and linked regulatory sources.

**Target:** Transport Canada PPL written exam (passing grade 60%, target 80%+)  
**Audience:** Student pilots preparing for the Canadian pilot licence  
**Format:** Audio-first lessons with visual support and practice questions

---

## Features at a Glance

- **Lesson library** — 69 lessons across four PPL-A topics plus a Radio/ROC-A track:
  - Air Law (18 lessons — audio available for all 18)
  - Navigation (14 lessons — 2 with audio, rest in production)
  - Meteorology (14 lessons — audio in production)
  - General Knowledge (14 lessons — audio in production)
  - Radio / ROC-A (9 lessons — audio in production)

- **Audio playlist** — Continuous playback with per-lesson progress tracking; study while commuting or flying

- **Track switcher** — Switch between three exam tracks in the app header:
  - **PPL-A** — full Transport Canada PPL syllabus
  - **PSTAR** — Pre-Solo Standard Test of Air Regulations subset
  - **RROE** — Radio/ROC-A (Restricted Operator Certificate with Aeronautical Qualification)

- **PSTAR path** — Dedicated study track for the mandatory pre-solo air regulations test

- **SRS review queue** — Spaced-repetition scheduling surfaces lessons due for review so knowledge stays fresh

- **Practice quiz** — 3–5 multiple-choice questions per lesson with explanations, taken right after the audio

- **Final exam mode** — Timed, randomised exam simulation covering the full syllabus

- **CI smoke testing** — Automated playlist audio smoke tests run on every deploy

---

## Quick Start

### Run the Web App Locally

```bash
cd web-app
npm install
npm run dev
```

The web app will be available at `http://localhost:5173`.

### Deploy

```bash
firebase deploy --only hosting
```

### Project Structure

```
ppl-study/
├── lessons/          # Lesson content (Markdown)
│   ├── air-law/
│   ├── navigation/
│   ├── meteorology/
│   └── general-knowledge/
├── audio/            # Generated narration files per lesson
├── web-app/          # React + Vite + TypeScript web application
├── docs/             # Reference docs, design system, audio standards
└── scripts/          # Utility scripts
```

---

## Tech Stack

- **Web App:** React 18 + TypeScript + Vite 6 + MUI 7
- **Narration:** Kokoro TTS (echo voice, speed 1.1)
- **Media Storage:** Cloudflare R2
- **Hosting:** Firebase Hosting
- **CI/CD:** GitHub Actions

---

## Factual Accuracy

- Every regulation reference cites a Transport Canada source: TP number or CARs section
- Canadian PPL only — regulations differ significantly from FAA; do not mix sources

---

## License

[MIT](./LICENSE) — Educational content. Contributed lessons remain the copyright of their authors unless transferred.

---

**Live site:** [https://ppl.suprun.ca](https://ppl.suprun.ca)  
**Made by:** Vadym Suprun & contributors
