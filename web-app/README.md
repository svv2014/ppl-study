# PPL Study — Web App

React + Vite + MUI front-end for the Canadian PPL written exam study tool.

## Quick start

```bash
cd web-app
npm install
npm run dev
```

App runs at http://localhost:3000.

## Build

```bash
npm run build
```

Output goes to `web-app/dist/`.

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/lessons` | Lessons index |
| `/lessons/:topic/:slug` | Lesson detail |
| `/exam` | Exam practice |
| `/plan` | Study plan |

## Stack

- React 18 + TypeScript 5.9
- Vite 6
- MUI 7 (dark theme, navy `#0a1628` + amber `#f5a623`)
- React Router v6
