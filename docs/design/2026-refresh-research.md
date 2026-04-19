# 2026 Design Refresh Research — PPL Study

**Issue:** [#58](https://github.com/svv2014/ppl-study/issues/58)
**Status:** Research complete — feeds child issues #59, #60, #61, #62
**Stack:** React 18 + MUI v7 + Roboto + dark aviation theme (Vite + TypeScript)

---

## Objective

Research 2026 mobile-first design patterns across aviation tools, learning apps, and MUI v7
modernisation techniques. Produce a concrete design direction for PPL Study that is grounded in
the existing stack and feeds directly into four already-filed child workstreams.

**Child issues:**
- #59 — Typography & reading rhythm refresh (mobile-first type scale)
- #60 — Navigation modernisation — thumb-zone mobile + intentional desktop
- #61 — Theme token layers — surfaces, accents, semantics
- #62 — Landing page identity — distinctive aviation visual motif

---

## Trend Observations

### 1 — Mobile navigation has moved below the thumb line

Leading learning apps (Duolingo 2024, Brilliant, Khan Academy mobile) have shifted from top
AppBar text links to bottom navigation bars on mobile. The current PPL Study nav requires thumb
travel to the top of a 6"+ screen — the worst possible ergonomics for one-handed study on a
commute. **Recommendation for #60:** add a bottom `BottomNavigation` bar on xs–sm breakpoints
with ≤ 5 items; keep the desktop AppBar.

### 2 — Typography contrast does more work than colour in polished dark UIs

The "generic MUI dark" feel comes primarily from uniform type weight — everything reads at the
same visual weight. Apps like Readwise Reader and Linear escape this by using heavier headings
(700–800) against lighter body (400) with deliberately loose line-height (1.7–1.8) for reading
content. Roboto, already installed, has the full weight range. No new font package needed.
**Recommendation for #59:** add responsive `fontWeight` + `lineHeight` to the theme scale;
establish h1–h6 sizes at xs and md breakpoints.

### 3 — Aviation professional tools use amber as a signal colour, not decoration

ForeFlight, Garmin Pilot, and SkyVector share a common visual pattern: amber/yellow is reserved
exclusively for warnings, active states, and primary CTAs — never used as a surface colour or
decoration. The current PPL Study theme uses amber for the logo wordmark, chip backgrounds, and
primary buttons. Diluting the signal reduces its impact. **Recommendation for #61:** treat
`#f5a623` as a signal-only colour; introduce a `border-subtle` token for outlines and a muted
`accent-muted` for non-CTA highlights.

### 4 — Depth via surface elevation, not shadows

Dark mode apps that look polished (Obsidian, Linear, Vercel dashboard) use 3 surface tiers —
base → surface → surface-raised — rather than box shadows. The difference in perceived depth is
+4–8% lightness between tiers rather than colour changes. PPL Study currently has `#0a1628`
(base) and `#0d1f3c` (paper) but nothing for elevated modals/drawers. **Recommendation for #61:**
add `background.surfaceRaised: '#112244'` as a third tier.

### 5 — Consistent session containers make reading feel like an app, not a document

Brilliant and Kindle web limit content width to 640–700px and give the body a fixed max-width
reading container. PPL Study already moves toward this (LessonDetail constrains to ~700px per
#48) but the other pages still use `maxWidth="lg"`. Consistent reading width across all
content-heavy pages reduces cognitive load when switching between lesson, plan, and exam.
**Recommendation for #59/#48 followup:** enforce `maxWidth: 700` as the reading-content standard
in a shared `ReadingContainer` wrapper.

### 6 — Progress cues belong in persistent chrome, not just on the home page

Duolingo shows streak + daily XP in the top bar. Brilliant shows lesson-count dots in the
sidebar. PPL Study surfaces progress only on the Home page — once a user navigates away, the
motivation signal disappears. **Recommendation for #60 (nav):** add a small
`completedCount / total` chip to the nav bar so progress is always visible without requiring a
trip to Home.

### 7 — MUI v7 `cssVariables: true` is the correct escape hatch from hardcoded hex

The most impactful single change in MUI v7 modernisation is enabling `cssVariables: true` in
`createTheme`. This exposes every palette token as a CSS custom property
(`var(--mui-palette-primary-main)`), enables future server-side colour scheme switching, and is
the prerequisite for a potential light mode. It requires no runtime changes — just the config
flag plus TypeScript module augmentations for custom tokens. **Recommendation for #61.**

---

## Palette Decision: Keep Aviation DNA, Refine Token Depth

**Decision: keep `#0a1628` / `#f5a623`. Do not pivot.**

Rationale: the navy + amber combination is distinctive and correct for the product context. It
matches the night-flying, cockpit-display aesthetic of the most credible aviation apps. Generic
competitors (Sporty's, old King Schools) use flat blues and no visual identity. The
differentiation is a competitive advantage.

**Refined token set (target for #61):**

| Token | Value | Usage |
|-------|-------|-------|
| `background.default` | `#0a1628` | Page background |
| `background.paper` | `#0d1f3c` | Cards, sheets |
| `background.surfaceRaised` | `#112244` | Drawers, modals, elevated overlays |
| `primary.main` | `#f5a623` | CTAs, active states, warnings only |
| `primary.muted` | `rgba(245,166,35,0.15)` | Subtle highlight backgrounds |
| `text.primary` | `#ffffff` | Headings, labels |
| `text.secondary` | `rgba(255,255,255,0.65)` | Supporting copy |
| `text.disabled` | `rgba(255,255,255,0.35)` | Greyed-out slots |
| `text.onAccent` | `#000000` | Text on amber backgrounds |
| `divider` | `rgba(255,255,255,0.12)` | Subtle borders |

---

## Typography Stack, Scale, and Breakpoints

**Font family:** Roboto (already installed via `@fontsource/roboto`) — keep. Appropriate for
technical/educational content, reads cleanly at dark-mode contrast levels. No new font packages
needed.

**Monospace:** use `'Roboto Mono', monospace` for lesson IDs (AL-001), CARs citations
(CAR 602.14), and inline code. Roboto Mono is available as a system fallback; add
`@fontsource/roboto-mono` only if the team wants a guaranteed match (flag as optional in #59).

**Responsive scale (target for #59):**

| Variant | xs | md | Weight | LineHeight |
|---------|----|----|--------|-----------|
| h1 | 1.875rem | 3rem | 700 | 1.2 |
| h2 | 1.5rem | 2.25rem | 700 | 1.25 |
| h3 | 1.375rem | 1.875rem | 600 | 1.3 |
| h4 | 1.25rem | 1.5rem | 600 | 1.35 |
| h5 | 1.125rem | 1.25rem | 600 | 1.4 |
| h6 | 1rem | 1.125rem | 500 | 1.4 |
| body1 | 1rem | 1rem | 400 | 1.75 |
| body2 | 0.875rem | 0.875rem | 400 | 1.6 |
| caption | 0.75rem | 0.75rem | 400 | 1.5 |

Reading-content containers (LessonDetail, long-form plan) use `body1` at `lineHeight: 1.75`.
Navigation/UI copy uses `body2` at `lineHeight: 1.6`.

---

## Spacing Tokens

Base unit: **8px** (MUI default — keep).

| Token | Value | Usage |
|-------|-------|-------|
| `spacing(1)` | 8px | Tight inline gaps |
| `spacing(2)` | 16px | Default inner padding (cards, mobile page edges) |
| `spacing(3)` | 24px | Section spacing within a page |
| `spacing(4)` | 32px | Between major sections |
| `spacing(6)` | 48px | Above-fold hero padding |
| Reading container max-width | 700px | All lesson / long-form content |
| Page max-width | lg (1200px) | Marketing/discovery pages |

---

## Mood-Board References

1. **ForeFlight** (iOS app) — the closest professional aviation reference. Dark navy background,
   amber/yellow reserved exclusively for alerts and active states, dense information in
   `Roboto`-equivalent weight, monospace values for headings/frequencies. The tab bar on mobile
   is the nav pattern to borrow.

2. **Readwise Reader** (web) — best-in-class reading experience. Constrained 660px column,
   generous line-height, subtle surface elevation distinguishing header from content. Shows how
   to make long-form markdown reading feel designed rather than default.

3. **Linear** (web app) — demonstrates MUI-adjacent dark theme done well: 3-tier surface depth,
   no box shadows, amber/orange used only for attention states, consistent 8px spacing
   throughout. Reference for token depth without redesign.

---

## Acceptance Criteria

- [ ] Research observations (7 above) are posted in this issue and have been read by the
      implementers of #59, #60, #61, #62
- [ ] Palette direction decision ("keep aviation DNA") is documented here and referenced in #61
      before token values are finalised
- [ ] Typography scale table is included and referenced in #59 before implementation begins
- [ ] Spacing token table is included and referenced in child issues as needed
- [ ] All four child issues (#59, #60, #61, #62) are `dev`-labelled and unblocked
- [ ] This issue is closed once all four children have merged PRs
