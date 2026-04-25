# Epic #340 — Visual Illustration Standard & Rebuild Tracker

**Epic issue:** [#340](../../issues/340) — *Visual illustration standard + audit/rebuild of existing visuals*
**Status:** In Progress — awaiting child issue merges

---

## Objective

Establish an opinionated illustration style standard for all lesson visuals and bring all 60
existing HTML visual files up to that standard. The target style is illustrative/diagrammatic:
clear, purposeful HTML+CSS/SVG art that reads like a quality ground-school workbook plate.

---

## Child Issue Status

| # | Title | Status | PR |
|---|-------|--------|----|
| [#347](../../issues/347) | Standards doc: add Illustration Style + 8-item checklist | OPEN | [#354](../../pull/354) |
| [#348](../../issues/348) | Audit: catalogue all 60 visuals with pass/rebuild/borderline | OPEN | [#355](../../pull/355) |
| [#349](../../issues/349) | Exemplars: rebuild AL-006 (circuit) + AL-001 (table) | OPEN | — |
| [#350](../../issues/350) | Rebuild wave — Air Law (AL-002–AL-018, post-exemplar) | OPEN | — |
| [#351](../../issues/351) | Rebuild wave — General Knowledge (GK-001–GK-014) | OPEN | [#360](../../pull/360) |
| [#352](../../issues/352) | Rebuild wave — Meteorology (MET-001–MET-014) | OPEN | [#359](../../pull/359) |
| [#353](../../issues/353) | Rebuild wave — Navigation (NAV-001–NAV-014) | OPEN | [#358](../../pull/358) |

---

## Dependency Order

```
#347 (standards doc + checklist)
  └─► #348 (audit — needs the checklist to assess pass/fail)
  └─► #349 (exemplars — need the style guide to build to)
        └─► #350 (AL rebuild wave)
        └─► #351 (GK rebuild wave)
        └─► #352 (MET rebuild wave)
        └─► #353 (NAV rebuild wave)
```

**Rule:** Do not merge #348, #349, or any rebuild wave (#350–#353) until #347 is merged.
Do not merge any rebuild wave (#350–#353) until both #348 and #349 are merged.

---

## 8-Item Acceptance Checklist

> **Placeholder — canonical definition will be authored in #347** and back-ported here
> once that PR merges. The items below are the skeleton drawn from the epic body; exact
> wording and criteria are owned by #347.

- [ ] **1. Illustration style** — visual uses illustrative/diagrammatic style (not purely
  schematic wireframe); spatial diagrams use SVG paths for angles/arcs
- [ ] **2. Colour tokens** — all non-domain colours use `_common.css` CSS custom properties
  (`--bg`, `--accent`, `--text-muted`, etc.); no hardcoded hex except domain-encoding colours
- [ ] **3. Domain-colour comments** — domain-encoding colours (instrument arcs, airspace
  classes, weather segment classes, emergency signals) are hardcoded with inline comments
  explaining why they are exempt from token vars
- [ ] **4. Back-link button** — file contains `data-backlink="true"` fixed button per the
  canonical snippet in `docs/visuals-standards.md`
- [ ] **5. `_common.css` link** — `<head>` contains
  `<link rel="stylesheet" href="/visuals/_common.css">`
- [ ] **6. Accessibility** — every `<img>` has descriptive `alt`; colour is not the sole
  means of conveying information; WCAG AA contrast maintained
- [ ] **7. Hard NOs clean** — no external resources, no identifiable people, no brand marks,
  no stock filler, no reproduced TC chart extracts
- [ ] **8. Build passes** — `npm run build` succeeds with this file present; no regressions
  in other visuals

---

## Files & Scope

```
docs/visuals-standards.md              updated by #347 (illustration style + checklist)
docs/visual-audit.md                   created by #348
web-app/public/visuals/al001-*.html    exemplar review/rebuild (#349)
web-app/public/visuals/al006-*.html    exemplar rebuild (#349)
web-app/public/visuals/al002-018-*.html  rebuild wave (#350)
web-app/public/visuals/gk001-014-*.html  rebuild wave (#351)
web-app/public/visuals/met001-014-*.html rebuild wave (#352)
web-app/public/visuals/nav001-014-*.html rebuild wave (#353)
```

**Do NOT touch:**
- `web-app/public/visuals/_common.css` — token source; read-only for this epic
- Lesson markdown files in `lessons/` (content accuracy is epic #282)
- `web-app/src/` — app source code

---

## Epic Done When

All of #347, #348, #349, #350, #351, #352, #353 are merged **and** every rebuilt visual
passes all 8 checklist items from #347.

This tracker issue (#340) should be closed manually (or via `Closes #340` in the final
child PR) only after all children have landed.

---

## Related

- **Epic #282** — content accuracy (parallel effort; this epic owns *style*, #282 owns
  *content*; coordinate to avoid conflicting edits on the same files)
- **Issue #289** — AL-006 content quality (child of #282; #349 exemplar rebuild must not
  regress those content fixes)
- **Issue #281** — theme sync (provides `data-scheme` mechanism that rebuilt visuals benefit
  from automatically via `_common.css` token vars)
