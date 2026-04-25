# Visuals Standards — PPL Study

## What a visual is

A visual is a standalone HTML file that provides a diagram, reference table, or
chart to supplement a lesson's audio narration. Visuals are embedded in the web
app's lesson view and can also be opened directly in a browser as a self-contained
page.

## Canonical style sample

`web-app/public/visuals/al001-airspace-classifications.html`

All new visuals must match the look and structure of this file. Read it before
authoring a new one.

## Template

`docs/design/examples/visual-template.html` is the starting point for every new
visual. It already links `_common.css` and includes the back-link element.

## Scheme

**Variant A · Cockpit Briefing — dark scheme (canonical).** All visuals use the
dark scheme. Light-scheme variants are deferred and not produced at this time.

## Format

**Dark-aviation HTML** — a complete `<!DOCTYPE html>` document served via Firebase
Hosting. JavaScript frameworks and `<script src>` tags pointing outside the
document are prohibited.

**Every visual must link the shared token stylesheet in `<head>`:**

```html
<link rel="stylesheet" href="/visuals/_common.css">
```

`/visuals/_common.css` lives in `web-app/public/visuals/` and is served by
Firebase Hosting at the `/visuals/` path. It provides the design-system color
tokens (`:root`), body defaults, the 40 × 40 px grid-paper backdrop, and shared
component classes (`.diagram-box`, `.note-box`, `.memory-box`, `.fact-card`,
`.memory-hook`, `.hook-box`, `table`/`th`/`td`, `.yes`/`.no`, etc.).

Visual-specific layout rules go in a `<style>` block below the `<link>`. Do not
re-declare tokens or shared component styles inline — override only what is
unique to this visual.

## Viewport and dimensions

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

- Design for a **minimum width of 360 px** (mobile) and a comfortable reading
  width up to **900 px**.
- Do not use a fixed pixel width on `body` or top-level containers. Use
  `max-width` with `margin: auto` if you need to cap the content column.
- Padding: `32px` on `body` (matches canonical sample).

## Colour palette

The canonical color token set is defined in **`docs/design/DESIGN-SYSTEM.md §2.1`**
(dark scheme) and exposed as CSS custom properties (`--bg`, `--accent`,
`--text-muted`, etc.) by `/visuals/_common.css`.

Do not introduce colors outside the token set without first amending
`DESIGN-SYSTEM.md`. Alpha tints of existing palette colors (e.g.
`rgba(255,80,80,0.15)` for danger tags) are acceptable as long as they stay
within the dark-aviation aesthetic.

For reference, the most commonly used visual palette values:

| Role | Hex | CSS variable |
|------|-----|--------------|
| Background | `#0d1b2a` | `--bg2` |
| Primary text | `#e8edf2` | (body default) |
| Amber accent | `#f0c040` | `--accent` |
| Blue-grey secondary | `#7a9ab5` | `--text-muted` |
| Panel surface | `#1a2d3d` | (visual palette) |

See `docs/design/DESIGN-SYSTEM.md §2.1` for the full token table including
`--surface`, `--border`, `--success`, `--danger`, and `--info`.

## Illustration Style

This section defines the visual quality target. It describes what the output *looks like*,
not the toolchain used to produce it (toolchain is covered by "Generation approach" above).
The goal: a student opening a visual should feel it belongs in a quality ground-school
workbook, not a system-administration manual.

### Rendering target

**Illustrative / diagrammatic.** Visuals are clear, purposeful HTML+CSS/SVG art that reads
like a technical illustration or textbook plate. They are:

- **Not** hand-drawn or sketch-style (no rough strokes, no simulated pencil texture).
- **Not** purely schematic wireframe (no bare boxes-and-lines with no visual hierarchy).

### Perspective conventions

| Content type | Perspective |
|---|---|
| Airspace / chart structures | 2-D top-down |
| Aircraft diagrams | Side elevation |
| Instrument / panel layouts | Front-on panel view |
| Circuit-pattern spatial concepts (height layering required) | ¾ isometric |

Use the listed perspective for the content type. Do not mix perspectives in a single
diagram without a clear visual break.

### Line weights

Three weight classes only — no hairlines below 1 px:

| Class | Weight | Use |
|---|---|---|
| Thick outline | 2–3 px | Boundary shapes, primary subject outlines |
| Medium rule | 1.5 px | Secondary structures, dividing lines |
| Thin detail / leader | 1 px | Construction lines, dimension leaders, fine detail |

### Label typography

- Font and size tokens come from `_common.css`. Do not introduce ad-hoc `font-size`
  overrides below **11 px** anywhere in a visual.
- Leader lines connecting a label to a diagram element: **1 px stroke** with a
  **4 px filled endpoint dot** at the diagram end.
- All label text must meet the contrast thresholds in the Accessibility requirements
  section below.

### Shading conventions

- Use **flat colour fills** as the base for all shapes.
- Where depth is needed, add exactly one **highlight band** (a lighter tint of the fill
  colour) and one **shadow band** (a darker tint). No more than two tint steps per shape.
- **No CSS gradients** unless the gradient is data-encoding — i.e. it communicates
  altitude layers or atmospheric depth as part of the diagram's meaning, not merely
  as decoration.

### Colour use

- Source all colours from `_common.css` CSS custom properties (`--bg`, `--accent`,
  `--text-muted`, `--surface`, `--border`, `--success`, `--danger`, `--info`, etc.).
- **Domain colours** (airspace class colours, weather severity levels, signal/NAV
  colours) may use hardcoded hex values **only when a CSS variable does not exist for
  that specific domain meaning**.
- Every hardcoded hex in a visual **must** carry an inline comment explaining the
  domain meaning, e.g. `/* Class C airspace — ICAO cyan */`.

---

## File naming

```
{id_lowercase}-{slug}.html
```

| Lesson ID | Slug | Filename |
|-----------|------|----------|
| `AL-001` | `airspace-classifications` | `al001-airspace-classifications.html` |
| `NAV-001` | `vfr-charts` | `nav001-vfr-charts.html` |

Rules:
- Lowercase only.
- Strip the hyphen from the lesson ID prefix (`AL-001` → `al001`).
- Slug must match the `slug` field in the lesson's YAML frontmatter.
- Use hyphens, not underscores.

## Storage path

All visual files live under:

```
web-app/public/visuals/
```

This directory is served as static content by Firebase Hosting. The path a
browser requests is `/visuals/{filename}.html`, which maps directly to
`web-app/public/visuals/{filename}.html` on disk.

## Serving strategy

**Firebase Hosting static files — no external CDN.**

Files in `web-app/public/` are deployed to Firebase Hosting alongside the React
app. There is no separate CDN, no object storage bucket, and no Cloudflare Worker
involved. The Firebase Hosting global CDN handles caching automatically.

Do not reference visuals via an external URL. The `visual:` field in lesson
frontmatter must always be a root-relative path (e.g. `/visuals/al001-airspace-classifications.html`),
not an absolute URL.

## Generation approach

Visuals are **hand-authored or tool-assisted HTML**. There is no build pipeline
that compiles visuals from another format (e.g. no SCSS compilation, no SVG
export pipeline). Write HTML and CSS directly.

Tool-assisted authoring (e.g. asking an AI agent to generate the HTML) is
permitted, provided the output is reviewed against these standards before
committing. The committer is responsible for correctness and style compliance
regardless of how the file was produced.

## Accessibility requirements

- Every `<img>` tag must have a descriptive `alt` attribute. Do not use `alt=""`
  unless the image is purely decorative and adjacent text already conveys the
  information.
- Use semantic HTML where appropriate: `<table>` for tabular data, `<h1>`/`<h2>`
  for headings (one `<h1>` per page), `<p>` for prose.
- Colour must not be the sole means of conveying information — pair colour coding
  with a label, icon, or text so the visual is usable in grayscale or for
  colour-blind readers.
- Maintain sufficient contrast: body text (`#e8edf2` on `#0d1b2a`) already passes
  WCAG AA. Any new colour combinations must meet the same threshold.

## Qualification criteria — visual vs text-only

A lesson **should have a visual** when it covers:

- Airspace or chart structures that are inherently spatial (boundaries, layers,
  vertical stacks)
- Reference tables with more than three rows that a student would scan repeatedly
  (weather minimums, equipment requirements, speed limits)
- Diagrams that would require a paragraph to describe in words (circuit patterns,
  weight-and-balance arms, instrument layouts)

A lesson **does not need a visual** when:

- The concept is fully conveyed by the audio narration and a few inline key points
- The "diagram" would simply be a restatement of bullet points already in the
  lesson markdown
- A reliable, freely-licensed diagram already exists in the official Transport
  Canada publications the student is expected to have

When in doubt, add a visual. A well-designed reference table costs little to
produce and meaningfully aids recall.

Set `visual: null` in frontmatter if a lesson has no visual.

## Back-link required

Every visual HTML file **must** include a fixed "← Back to lesson" button injected
immediately after `<body>`. This allows the user to return to the lesson view when
the visual is opened in a new tab or iframe.

### Canonical snippet

```html
<button
  data-backlink="true"
  onclick="if(window.history.length<=1){window.close();}else{window.history.back();}"
  style="position:fixed;top:12px;left:12px;z-index:9999;background:rgba(13,27,42,0.9);color:#f0c040;border:1.5px solid rgba(240,192,64,0.4);border-radius:6px;padding:10px 14px;font-size:14px;font-family:inherit;cursor:pointer;min-width:44px;min-height:44px;line-height:1.2;backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);"
  aria-label="Back to lesson"
>&#8592; Back to lesson</button>
<style>.container{padding-top:56px!important;}@media(max-width:480px){.container{padding-top:60px!important;}}</style>
```

### Styling rules

| Property | Value | Reason |
|---|---|---|
| Background | `rgba(13,27,42,0.9)` | Dark-aviation palette with slight transparency |
| Text colour | `#f0c040` | Amber accent — matches palette |
| Font size | `14px` minimum | Legible at arm's length |
| Touch target | `min-width:44px; min-height:44px` | WCAG 2.5.5 minimum |
| Position | `fixed; top:12px; left:12px; z-index:9999` | Always visible, top-left corner |
| `backdrop-filter` | `blur(4px)` | Keeps button readable over any content |

### Detection / idempotency

The `data-backlink="true"` attribute is the canonical marker. Use this to detect
whether the button has already been injected before adding it — the script
`scripts/add-visual-backlink.sh` handles this automatically.

### Padding for `.container` elements

The injected `<style>` block forces `padding-top: 56px` (60 px on narrow viewports)
on any `.container` element so the fixed button does not overlap page content.
Files that use `body` padding directly (no `.container` class) are unaffected
and need no additional adjustment.

### Adding the back-link to new visuals

Run the script against any new file before committing:

```bash
bash scripts/add-visual-backlink.sh web-app/public/visuals/your-new-file.html
```

Or to process all files at once:

```bash
bash scripts/add-visual-backlink.sh
```

## Hard NOs

- **No identifiable people.** No photographs, illustrations, or avatars depicting
  real or realistic human faces or figures.
- **No brand infringement.** No airline logos, aircraft manufacturer marks, or
  other registered trademarks. Use generic aircraft silhouettes and neutral
  callsigns.
- **No stock filler.** Do not embed stock photos, clip art, or decorative imagery
  that does not directly support the lesson content.
- **No external resources.** No `<img src="https://...">`, no Google Fonts `@import`,
  no CDN-hosted scripts or stylesheets. The only permitted external stylesheet is
  `/visuals/_common.css` served from the same Firebase Hosting origin.
- **No copyright-protected charts.** Do not reproduce VNC/VTA chart extracts or
  other Transport Canada map products verbatim. Diagrams must be original
  illustrations inspired by the content, not reproductions of licensed materials.
- **No clip-art silhouettes or icon-font glyphs used as primary illustration** — build
  shapes from HTML/CSS or SVG paths.

## Acceptance checklist

Before a new or rebuilt visual is considered done, verify every item below. All answers
must be **Yes**.

| # | Criterion | Yes / No |
|---|---|---|
| 1 | Links `/visuals/_common.css` in `<head>`; no re-declared tokens | |
| 2 | Includes the canonical back-link button immediately after `<body>` | |
| 3 | Uses the correct perspective for its content type (top-down / elevation / panel / isometric) per the Illustration Style section | |
| 4 | Line weights stay within the three defined classes (2–3 px / 1.5 px / 1 px); no hairlines below 1 px | |
| 5 | No `font-size` below 11 px; labels use `_common.css` tokens | |
| 6 | All colours sourced from CSS custom properties; any hardcoded hex has an inline comment explaining the domain meaning | |
| 7 | Colour is not the sole means of conveying information (labels, icons, or text accompany colour coding) | |
| 8 | `npm run build` passes with the file in place; no JavaScript frameworks or external `<script src>` tags | |
