# Contributing to PPL Study

Thank you for helping improve PPL Study! This guide explains how to add lessons, fix content, or contribute code.

## Adding or Correcting a Lesson

### Lesson File Format

Lessons live in `lessons/{topic}/{NNN}-{slug}.md` (e.g., `lessons/air-law/001-airspace-classifications.md`).

Every lesson follows the schema defined in [docs/lesson-schema.md](./docs/lesson-schema.md). **Do not deviate from this schema.**

### Required Fields

- `id`: Lesson identifier (e.g., `AL-001` for Air Law lesson 1)
- `topic`: Category (e.g., `air-law`, `meteorology`)
- `order`: Numeric order within the topic
- `slug`: URL-friendly name (lowercase, hyphens, no spaces)
- `title`: Human-readable lesson title
- `duration_min`: Expected study time (usually 20 minutes)
- `status`: One of `draft`, `published`
- `audio`: URL to `.m4a` narration file (or `null` if not yet recorded)
- `sources`: List of Transport Canada sources (TP or CARs references)
- `questions`: 3–5 practice questions with answers

### Factual Accuracy Rules

**CRITICAL:** Every claim in a lesson must be sourced to Transport Canada materials.

- Use **TP** (Transport Publications) numbers when citing specific documents
  - Example: `TP 12880E` (Pilot's Handbook)
  - Example: `TP 10252` (CNO Aerodrome information)
- Use **CARs** (Canadian Aviation Regulations) for regulatory citations
  - Example: `CARs 602.35` (Altimeter requirements)
  - Example: `CARs Part I, Section 402.13` (Engine failure procedures)
- Link to **AIM RAC** (Aeronautical Information Manual — Rules of the Air & Air Traffic Services) when relevant
- **No unsourced statements.** If you cannot cite the regulation or Transport Canada handbook, do not include it.

### Before Submitting

1. Ensure the lesson YAML parses correctly
2. Run the validation script:
   ```bash
   scripts/validate-lesson-schema.sh lessons/{topic}/{NNN}-{slug}.md
   ```
3. Verify all sources (TP/CARs numbers) are correct and cited in Transport Canada publications
4. Test the web app locally:
   ```bash
   cd web-app && npm run dev
   ```

## Contributing Code

### Setup

```bash
git clone https://github.com/svv2014/ppl-study.git
cd ppl-study
cd web-app
npm install
npm run dev
```

### Tech Stack

- **React** 18 with TypeScript
- **Vite** 6 (fast bundler)
- **MUI** 7 (Material Design components)
- **Audio:** Web Audio API + HTML5 `<audio>`

### Running Tests & Builds

```bash
# TypeScript type check
npm run type-check

# Build for production
npm run build

# Validate all lessons
scripts/validate-lesson-schema.sh
```

### Code Style

- Use TypeScript — no `any` types without justification
- Format with Prettier (configured in `.prettierrc`)
- Follow MUI component patterns — keep UI simple and accessible
- Write comments only for **why**, not what — good naming explains the code

### Pull Request Process

1. Create a feature branch: `git checkout -b fix/issue-NNN-description`
2. Make your changes (lessons, web app, or scripts)
3. Run type check and build locally
4. Push and open a PR linked to the relevant GitHub issue
5. CI will run automated tests and validation
6. Await human review (label: `review-approved`)
7. Merge via the AISDLC automation

## Reporting Issues

Found a bug or have a feature request? Open an [issue](https://github.com/svv2014/ppl-study/issues) with:

- **Bug reports:** Steps to reproduce, expected behavior, actual behavior
- **Feature requests:** What problem does it solve? Why is it important?
- **Factual errors:** Which TP/CARs reference should we cite instead?

---

**Questions?** Check [docs/](./docs) or open a discussion.
