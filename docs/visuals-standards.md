# Visual Supplement Standards

Standards for all visual HTML supplements in the PPL Study project.
Visual files live in `web-app/public/visuals/` and are referenced from lesson frontmatter.

---

## File Naming Convention

| Lesson ID | Pattern | Example |
|-----------|---------|---------|
| AL-001 | `al{NNN}-{slug}.html` | `al001-airspace-classifications.html` |
| NAV-001 | `nav{NNN}-{slug}.html` | `nav001-vfr-charts.html` |
| MET-001 | `met{NNN}-{slug}.html` | `met001-metar-decoding.html` |
| GK-001 | `gk{NNN}-{slug}.html` | `gk001-aircraft-systems.html` |

Rules:
- All lowercase, no spaces
- Topic prefix matches lesson ID prefix, lower-cased (`al`, `nav`, `met`, `gk`)
- Three-digit zero-padded lesson number
- Slug matches the lesson's `slug` frontmatter field exactly

---

## When a Visual Is Required vs. Exempt

### Required
A visual is required when the lesson contains information that is meaningfully clearer
as a diagram, table, or chart than as prose alone. The following lesson types always
warrant a visual:

- Airspace classifications or boundaries (layered stack diagrams)
- VFR weather minimums tables (multi-axis comparison: airspace class × condition)
- Navigation chart symbology (symbol reference grids)
- Instrument approach procedures or cockpit instrument layouts
- Weight & balance envelopes or loading diagrams
- Meteorological phenomena with structural/spatial relationships (fronts, pressure systems)
- Any lesson whose frontmatter `status` is `complete`

### Exempt (set `visual: null`)
A lesson may set `visual: null` and omit the HTML file when:

- The lesson is in `status: planning` or `status: draft` — visual is deferred until complete
- The lesson has not yet been authored (file does not exist yet)
- The lesson covers purely procedural or regulatory text with no spatial/comparative content
  that benefits from visual layout

When a lesson transitions from `draft` → `complete`, a visual must be created or
the exemption must be explicitly justified in the PR.

---

## HTML Template Baseline

Every visual file is a self-contained HTML document. No external CDN, no JavaScript
frameworks, no web fonts loaded from the network. All styles are inline `<style>` blocks.

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{LESSON-ID}: {Lesson Title}</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    background: #0d1b2a;
    color: #e8edf2;
    font-family: 'Segoe UI', system-ui, sans-serif;
    padding: 32px;
    max-width: 860px;
  }
  h1 { font-size: 22px; color: #f0c040; letter-spacing: 1px; margin-bottom: 6px; }
  .subtitle { font-size: 13px; color: #7a9ab5; margin-bottom: 32px; letter-spacing: 0.5px; }
  .section-label {
    font-size: 11px; color: #7a9ab5; letter-spacing: 1px;
    text-transform: uppercase; margin-bottom: 10px; font-weight: 600;
  }
</style>
</head>
<body>

<h1>{LESSON-ID} — {Lesson Title}</h1>
<p class="subtitle">Transport Canada · {Primary Source} · PPL Written Exam</p>

<!-- Content sections go here -->

</body>
</html>
```

The `<title>` format is `{ID}: {Title}` (colon-separated).
The `<h1>` format is `{ID} — {Title}` (em-dash separated).
The subtitle always ends with `· PPL Written Exam`.

---

## Color Palette

All visuals use the aviation dark theme:

| Role | Hex | Usage |
|------|-----|-------|
| Page background | `#0d1b2a` | `body` background |
| Body text | `#e8edf2` | Default `color` |
| Heading / accent | `#f0c040` | `h1`, section headings, highlighted values |
| Subtitle / muted | `#7a9ab5` | Subtitles, column headers, secondary labels |
| Card background | `#0a1a35` | `.card`, `.scale-card`, any info box |
| Card border | `#1a3a5a` | Border on cards |
| Table header row | `#1a2d3d` | `th` background |
| Table border | `#1a2d3d` | `td` bottom border |
| Body text (cards) | `#c8d8e8` | Text inside cards |
| Positive / yes | `#80e080` | Permitted, yes, clearance granted |
| Negative / no | `#ff8080` | Not permitted, no, prohibited |
| Warning / caution | `#f0c040` | Same as accent — used for caution labels |

Additional tinted overlay colors (used sparingly for tag pills):

| Tag type | Background | Text | Border |
|----------|------------|------|--------|
| IFR/restricted | `rgba(255,80,80,0.15)` | `#ff8080` | `rgba(255,80,80,0.3)` |
| VFR/permitted | `rgba(80,200,80,0.15)` | `#80e080` | `rgba(80,200,80,0.3)` |
| Neutral/info | `rgba(150,150,150,0.1)` | `#888` | `rgba(150,150,150,0.2)` |

---

## Component Patterns

These CSS patterns recur across visuals. Copy and adapt as needed.

### Layered stack (airspace layers, altitude bands)
```css
.stack { display: flex; gap: 0; flex-direction: column; margin-bottom: 36px;
         border-radius: 10px; overflow: hidden; border: 1.5px solid #1a2d3d; }
.layer { display: grid; grid-template-columns: 120px 80px 1fr 1fr;
         align-items: center; padding: 12px 16px; gap: 12px;
         border-bottom: 1px solid rgba(255,255,255,0.05); }
.layer:last-child { border-bottom: none; }
```

### Two-column card grid
```css
.two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 32px; }
.card { background: #0a1a35; border: 1.5px solid #1a3a5a; border-radius: 10px; padding: 18px 20px; }
```

### Three-column symbol/icon grid
```css
.symbol-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-bottom: 32px; }
.sym-card { background: #0a1a35; border: 1.5px solid #1a3a5a; border-radius: 10px;
            padding: 16px; display: flex; flex-direction: column; align-items: center; gap: 10px; }
```

### Data table
```css
table { width: 100%; border-collapse: collapse; font-size: 12px; margin-bottom: 28px; }
th { background: #1a2d3d; color: #7a9ab5; padding: 8px 10px; text-align: left;
     font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; }
td { padding: 9px 10px; border-bottom: 1px solid #1a2d3d; }
```

### Memory-hook box (exam tip callout)
```css
.hook-box { background: #1a2a1a; border: 1.5px solid #2d5a2d; border-radius: 10px; padding: 18px 22px; }
.hook-box h2 { font-size: 12px; color: #80c880; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px; }
.hook-row { display: flex; gap: 10px; margin-bottom: 8px; align-items: flex-start; }
.hook-badge { background: #2d5a2d; color: #80c880; font-size: 10px; font-weight: 800;
              padding: 2px 8px; border-radius: 10px; white-space: nowrap; flex-shrink: 0; margin-top: 2px; }
.hook-text { font-size: 13px; color: #c8d8c8; line-height: 1.5; }
.hook-text strong { color: #f0c040; }
```

---

## Frontmatter Integration

Once a visual file exists, set the `visual` field in the lesson's frontmatter:

```yaml
visual: /visuals/al001-airspace-classifications.html
```

The leading `/` is required. The path is relative to `web-app/public/`.

If no visual exists yet, use:

```yaml
visual: null
```

---

## Quality Checklist

Before merging a new visual, verify:

- [ ] File is named according to the naming convention above
- [ ] File is self-contained — no `<link>`, no `<script src>`, no external image URLs
- [ ] Background is `#0d1b2a`, body text is `#e8edf2`
- [ ] `h1` uses `#f0c040`; subtitle uses `#7a9ab5`
- [ ] Lesson frontmatter `visual:` field updated to point to the file
- [ ] `scripts/validate-lesson-schema.sh` passes
- [ ] `web-app` build passes (`npm run build` in `web-app/`)
- [ ] Content is factually accurate against Transport Canada sources (TP 12880E, CARs, AIM)
