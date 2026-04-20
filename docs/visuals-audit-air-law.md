# Visuals Audit — Air Law (AL-001 to AL-003)

Audited against `docs/visuals-standards.md` (merged in #95).

## Standards Checklist

| Standard | AL-001 | AL-002 | AL-003 |
|----------|--------|--------|--------|
| `body { background: #0d1b2a }` | ✅ | ✅ | ✅ |
| `h1 { color: #f0c040 }` | ✅ | ✅ | ✅ |
| Standalone HTML, all CSS inline | ✅ | ✅ | ✅ |
| No external JS/CSS/font deps | ✅ | ✅ | ✅ |
| No `<img>` tags | ✅ | ✅ | ✅ |
| Viewport `<meta>` tag | ✅ | ✅ | ✅ |
| One `<h1>` per page | ✅ | ✅ | ✅ |
| `body { padding: 32px }` | ✅ | ✅ | ✅ |
| File naming: `{id_lowercase}-{slug}.html` | ✅ | ✅ | ❌ → **Fixed** |

## Violation Fixed

**AL-003 filename mismatch** (fixed in this PR):
- Old: `al003-weather-minimums.html`
- Required (slug = `vfr-weather-minimums`): `al003-vfr-weather-minimums.html`
- The `visual:` frontmatter field was already correct; only the on-disk filename was wrong.

## Frontmatter `visual:` Field Verification

| Lesson | `visual:` field | File exists? |
|--------|-----------------|-------------|
| `001-airspace-classifications.md` | `/visuals/al001-airspace-classifications.html` | ✅ |
| `002-controlled-vs-uncontrolled.md` | `/visuals/al002-controlled-vs-uncontrolled.html` | ✅ |
| `003-vfr-weather-minimums.md` | `/visuals/al003-vfr-weather-minimums.html` | ✅ (after rename) |

## Out of Scope

AL-004–AL-008 visuals are not covered here. Those lesson files did not exist at the time of this audit (blocked by #79). Visual creation for AL-004–AL-008 is tracked in a follow-up issue.
