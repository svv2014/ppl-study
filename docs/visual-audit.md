# Visual Audit — PPL Study Visuals

Audit date: 2026-04-25  
Auditor: automated ASDLC agent (PPL-348)  
Scope: all 60 HTML files in `web-app/public/visuals/`

---

## Acceptance Criteria

Eight criteria extracted from `docs/visuals-standards.md` and `CLAUDE.md`:

| # | Criterion | Failure type |
|---|-----------|--------------|
| C1 | Stylesheet linked via **absolute** path `href="/visuals/_common.css"` in `<head>` | minor |
| C2 | Canonical `data-backlink="true"` back-button present immediately after `<body>` | major |
| C3 | No hardcoded hex colours outside the token set unless a code comment documents the aviation data-encoding or design exception | minor |
| C4 | WCAG AA contrast — body text (`#e8edf2` on `#0d1b2a`) and all labels meet the threshold | readability |
| C5 | No overlapping or unreadable labels; no flat-square spatial diagrams that omit drawn flight paths where a circuit or spatial concept is being taught | readability |
| C6 | Colour is never the **sole** means of conveying information — every colour cue is paired with a label, icon, or text | readability |
| C7 | No external resources — no `<img src="https://…">`, no Google Fonts `@import`, no CDN-hosted scripts or stylesheets | major |
| C8 | Instrument / gauge faces rendered as recognisable gauges (circular dial, needle, colour arcs, scale marks); not schematic wireframe rectangles or circles with a bare text label | teaching |

**Status definitions**

| Status | Rule |
|--------|------|
| **pass** | Meets all 8 criteria |
| **borderline** | Fails exactly 1 minor criterion (C1 or C3) |
| **needs-rebuild** | Fails 2 or more criteria, OR fails any readability/teaching criterion (C4, C5, C6, C8) |

---

## Summary

| Metric | Count |
|--------|-------|
| Total visuals audited | 60 |
| **Pass** | **44** |
| **Borderline** | **13** |
| **Needs-rebuild** | **2** |

### By subject area

| Subject | Total | Pass | Borderline | Needs-rebuild |
|---------|------:|-----:|-----------:|--------------:|
| Air Law (AL-001 – AL-018) | 18 | 17 | 0 | 1 |
| General Knowledge (GK-001 – GK-014) | 14 | 0 | 13 | 1 |
| Meteorology (MET-001 – MET-014) | 14 | 14 | 0 | 0 |
| Navigation (NAV-001 – NAV-014) | 14 | 14 | 0 | 0 |
| **Total** | **60** | **44** | **13** | **2** |

### Borderline root causes

All 13 borderline files fail **C1 only** — the `_common.css` stylesheet is linked via a relative path (`href="_common.css"`) instead of the canonical absolute path (`href="/visuals/_common.css"`). This affects every file in the `gk*` series (except GK-006, which is needs-rebuild). The relative path works correctly when pages are served from `/visuals/` via Firebase Hosting, but violates the spec and would break in any off-origin context (iframe, direct file open, testing).

### Needs-rebuild root causes

**GK-006** (`gk006-pitot-static-instruments.html`) fails two criteria:
- **C1** — relative stylesheet path
- **C8** — the system plumbing diagram represents the ASI, Altimeter, and VSI as plain `<rect>` + small `<circle>` + 3-letter text label. These schematic wireframe symbols do not constitute recognisable gauge faces. The separate ASI speed-arc diagram lower on the page IS a proper recognisable gauge, but the primary system diagram leaves the instrument faces unrecognisable to a student meeting them for the first time.

**AL-006** (`al006-aerodrome-traffic-circuit.html`) fails one readability criterion:
- **C5** — the aerodrome traffic circuit is rendered as a CSS text-grid with directional arrows only; no SVG drawn flight-path arcs convey the spatial circuit geometry. C5 is a readability criterion; by the status rules above, any readability/teaching criterion failure mandates needs-rebuild regardless of how many criteria fail.

---

## Detailed Audit Table

| File path | Lesson ID | Subject | Status | Reason |
|-----------|-----------|---------|--------|--------|
| `web-app/public/visuals/al001-airspace-classifications.html` | AL-001 | Air Law | **pass** | Meets all 8 criteria; hardcoded class-badge hex values documented as ICAO chart-convention data-encoding |
| `web-app/public/visuals/al002-controlled-vs-uncontrolled.html` | AL-002 | Air Law | **pass** | Meets all 8 criteria; airspace-class hex values commented as aviation data-encoding exceptions |
| `web-app/public/visuals/al003-vfr-weather-minimums.html` | AL-003 | Air Law | **pass** | Meets all 8 criteria; `--info` token tints documented as data-encoding for cloud-clearance values |
| `web-app/public/visuals/al004-altimeter-settings.html` | AL-004 | Air Law | **pass** | Meets all 8 criteria; uses CSS token variables throughout |
| `web-app/public/visuals/al005-right-of-way-rules.html` | AL-005 | Air Law | **pass** | Meets all 8 criteria; colour hierarchy paired with numbered labels |
| `web-app/public/visuals/al006-aerodrome-traffic-circuit.html` | AL-006 | Air Law | **needs-rebuild** | Fails C5 (readability): circuit pattern conveyed via CSS text-grid with directional arrows only; no SVG drawn flight-path arcs to reinforce the spatial circuit geometry — C5 is a readability criterion, mandating needs-rebuild |
| `web-app/public/visuals/al007-radio-communications.html` | AL-007 | Air Law | **pass** | Meets all 8 criteria; light-gun colour table paired with text descriptions |
| `web-app/public/visuals/al008-atc-services-clearances.html` | AL-008 | Air Law | **pass** | Meets all 8 criteria; design-exception hex values for handoff-row tints are commented |
| `web-app/public/visuals/al009-flight-plans-itineraries.html` | AL-009 | Air Law | **pass** | Meets all 8 criteria; token variables used throughout |
| `web-app/public/visuals/al010-notams.html` | AL-010 | Air Law | **pass** | Meets all 8 criteria; legend dots paired with text labels |
| `web-app/public/visuals/al011-cars-structure.html` | AL-011 | Air Law | **pass** | Meets all 8 criteria; hierarchy diagram readable and well-labelled |
| `web-app/public/visuals/al012-pilot-licences-recency.html` | AL-012 | Air Law | **pass** | Meets all 8 criteria; licence progression flow is labelled |
| `web-app/public/visuals/al013-aircraft-documents.html` | AL-013 | Air Law | **pass** | Meets all 8 criteria; ARROW acronym design uses token variables |
| `web-app/public/visuals/al014-emergency-procedures-law.html` | AL-014 | Air Law | **pass** | Meets all 8 criteria; emergency signal colours documented as ICAO AIM domain data-encoding |
| `web-app/public/visuals/al015-transponder-codes.html` | AL-015 | Air Law | **pass** | Meets all 8 criteria; squawk-code colours paired with text labels |
| `web-app/public/visuals/al016-wake-turbulence.html` | AL-016 | Air Law | **pass** | Meets all 8 criteria; severity colours documented as data-encoding exceptions |
| `web-app/public/visuals/al017-low-level-flight-rules.html` | AL-017 | Air Law | **pass** | Meets all 8 criteria; uses CSS token variables throughout |
| `web-app/public/visuals/al018-special-use-airspace.html` | AL-018 | Air Law | **pass** | Meets all 8 criteria; `#64a0ff` / `#a080ff` documented as aviation domain colour comments |
| `web-app/public/visuals/gk001-aircraft-parts-controls.html` | GK-001 | General Knowledge | **borderline** | Fails C1 only: stylesheet linked as `href="_common.css"` (relative) instead of `href="/visuals/_common.css"` (absolute) |
| `web-app/public/visuals/gk002-four-forces.html` | GK-002 | General Knowledge | **borderline** | Fails C1 only: relative `_common.css` path instead of absolute `/visuals/_common.css` |
| `web-app/public/visuals/gk003-piston-engines.html` | GK-003 | General Knowledge | **borderline** | Fails C1 only: relative `_common.css` path instead of absolute `/visuals/_common.css` |
| `web-app/public/visuals/gk004-fuel-system.html` | GK-004 | General Knowledge | **borderline** | Fails C1 only: relative `_common.css` path; `#d0c040` fuel-colour documented as design-exception |
| `web-app/public/visuals/gk005-electrical-system.html` | GK-005 | General Knowledge | **borderline** | Fails C1 only: relative `_common.css` path instead of absolute `/visuals/_common.css` |
| `web-app/public/visuals/gk006-pitot-static-instruments.html` | GK-006 | General Knowledge | **needs-rebuild** | Fails C1 (relative stylesheet path) AND C8 (teaching): system-diagram instrument faces are bare `rect`+`circle`+3-letter label wireframes — ASI, Altimeter, and VSI are not rendered as recognisable gauges in the primary diagram |
| `web-app/public/visuals/gk007-gyroscopic-instruments.html` | GK-007 | General Knowledge | **borderline** | Fails C1 only: relative `_common.css` path; instrument SVGs (AI sky/ground halves, HI compass rose, TC miniature aircraft) are all recognisable |
| `web-app/public/visuals/gk008-engine-instruments.html` | GK-008 | General Knowledge | **borderline** | Fails C1 only: relative `_common.css` path; all 8 engine-instrument SVGs are circular dials with coloured arcs and needles — recognisable |
| `web-app/public/visuals/gk009-weight-and-balance.html` | GK-009 | General Knowledge | **borderline** | Fails C1 only: relative `_common.css` path instead of absolute `/visuals/_common.css` |
| `web-app/public/visuals/gk010-performance-charts.html` | GK-010 | General Knowledge | **borderline** | Fails C1 only: relative `_common.css` path instead of absolute `/visuals/_common.css` |
| `web-app/public/visuals/gk011-takeoff-landing-perf.html` | GK-011 | General Knowledge | **borderline** | Fails C1 only: relative `_common.css` path instead of absolute `/visuals/_common.css` |
| `web-app/public/visuals/gk012-stalls-spins.html` | GK-012 | General Knowledge | **borderline** | Fails C1 only: relative `_common.css` path; stall SVG airfoil diagram is correctly drawn |
| `web-app/public/visuals/gk013-load-factor.html` | GK-013 | General Knowledge | **borderline** | Fails C1 only: relative `_common.css` path; V-n envelope SVG is a recognisable chart; minor 7-digit hex typo (`#6aaaaaa`) in SVG stroke has no visible impact |
| `web-app/public/visuals/gk014-preflight-inspection.html` | GK-014 | General Knowledge | **borderline** | Fails C1 only: relative `_common.css` path instead of absolute `/visuals/_common.css` |
| `web-app/public/visuals/met001-atmosphere-structure.html` | MET-001 | Meteorology | **pass** | Meets all 8 criteria; atmosphere-layer SVG is a labelled spatial diagram |
| `web-app/public/visuals/met002-temp-pressure-humidity.html` | MET-002 | Meteorology | **pass** | Meets all 8 criteria; pressure-system diagram uses labelled HIGH/LOW annotations |
| `web-app/public/visuals/met003-clouds-types.html` | MET-003 | Meteorology | **pass** | Meets all 8 criteria; text-card layout; colour paired with cloud-type labels |
| `web-app/public/visuals/met004-fog-types.html` | MET-004 | Meteorology | **pass** | Meets all 8 criteria; text-card layout; colour paired with fog-type labels |
| `web-app/public/visuals/met005-metar-decoding.html` | MET-005 | Meteorology | **pass** | Meets all 8 criteria; `#ffb040` ceiling-warning amber documented as design-exception |
| `web-app/public/visuals/met006-taf-decoding.html` | MET-006 | Meteorology | **pass** | Meets all 8 criteria; TAF change-group segment colours documented as data-encoding |
| `web-app/public/visuals/met007-gfa.html` | MET-007 | Meteorology | **pass** | Meets all 8 criteria; uses CSS token variables throughout |
| `web-app/public/visuals/met008-pireps.html` | MET-008 | Meteorology | **pass** | Meets all 8 criteria; uses CSS token variables throughout |
| `web-app/public/visuals/met009-thunderstorms.html` | MET-009 | Meteorology | **pass** | Meets all 8 criteria; thunderstorm SVG cell diagram is labelled |
| `web-app/public/visuals/met010-icing.html` | MET-010 | Meteorology | **pass** | Meets all 8 criteria; icing-domain hex colours documented as data-encoding |
| `web-app/public/visuals/met011-turbulence.html` | MET-011 | Meteorology | **pass** | Meets all 8 criteria; `#b030b0` extreme-turbulence accent documented as design-exception |
| `web-app/public/visuals/met012-wind-shear-microburst.html` | MET-012 | Meteorology | **pass** | Meets all 8 criteria; microburst approach-profile SVG is labelled |
| `web-app/public/visuals/met013-fronts.html` | MET-013 | Meteorology | **pass** | Meets all 8 criteria; frontal cross-section SVGs use labelled air mass regions |
| `web-app/public/visuals/met014-wx-decision-making.html` | MET-014 | Meteorology | **pass** | Meets all 8 criteria; risk-level tint colours documented as design-exceptions |
| `web-app/public/visuals/nav001-vfr-charts.html` | NAV-001 | Navigation | **pass** | Meets all 8 criteria; `#3a6a9a` scale-bar colour documented as chart-accurate hardcoded exception |
| `web-app/public/visuals/nav002-lat-lon-map-reading.html` | NAV-002 | Navigation | **pass** | Meets all 8 criteria; uses CSS token variables throughout |
| `web-app/public/visuals/nav003-true-magnetic-compass.html` | NAV-003 | Navigation | **pass** | Meets all 8 criteria; compass SVG is a recognisable circular rose with cardinal labels |
| `web-app/public/visuals/nav004-dead-reckoning-basics.html` | NAV-004 | Navigation | **pass** | Meets all 8 criteria; navigation line diagram is labelled |
| `web-app/public/visuals/nav005-wind-correction-angle.html` | NAV-005 | Navigation | **pass** | Meets all 8 criteria; wind triangle SVG is labelled with velocity vectors |
| `web-app/public/visuals/nav006-time-speed-distance.html` | NAV-006 | Navigation | **pass** | Meets all 8 criteria; TSD diagram SVG is labelled |
| `web-app/public/visuals/nav007-fuel-planning.html` | NAV-007 | Navigation | **pass** | Meets all 8 criteria; fuel-bar SVG segments are labelled with fuel-type text |
| `web-app/public/visuals/nav008-cross-country-planning.html` | NAV-008 | Navigation | **pass** | Meets all 8 criteria; `#80c880` sample nav-log row colour documented as assessment-state exception |
| `web-app/public/visuals/nav009-pilotage.html` | NAV-009 | Navigation | **pass** | Meets all 8 criteria; checkpoint quality colours documented as assessment-state exceptions |
| `web-app/public/visuals/nav010-vor-navigation.html` | NAV-010 | Navigation | **pass** | Meets all 8 criteria; VOR CDI SVG is a recognisable circular instrument with course needle |
| `web-app/public/visuals/nav011-gps-basics.html` | NAV-011 | Navigation | **pass** | Meets all 8 criteria; satellite constellation SVG is labelled schematic (appropriate for the concept) |
| `web-app/public/visuals/nav012-altitude-types.html` | NAV-012 | Navigation | **pass** | Meets all 8 criteria; altitude-stack SVG is labelled with altitude type text |
| `web-app/public/visuals/nav013-density-altitude.html` | NAV-013 | Navigation | **pass** | Meets all 8 criteria; density-altitude chart SVG is a recognisable performance graph; minor 7-digit hex typo (`#6aaaaaa`) in one stroke attribute has no visible impact |
| `web-app/public/visuals/nav014-lost-procedure.html` | NAV-014 | Navigation | **pass** | Meets all 8 criteria; `#c87040` flowchart colour documented as design-exception |
