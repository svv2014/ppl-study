# PPL Study — Design System

**Status:** Canonical spec. Every page and component must adhere to this document.
**Visual direction:** Variant A · Cockpit Briefing — Jeppesen / ForeFlight inspired.
**Dual-scheme:** Dark (default) and Light, swappable at runtime.
**Last revised:** 2026-04-23

> **For reviewers & ASDLC:** If a PR deviates from this doc, the PR is non-compliant unless the PR explicitly amends this doc in the same commit. Referencing "the brief" or a specific mockup is not a substitute for referencing this document.

---

## 1. Design principles

1. **Aviation precision, not SaaS dashboard.** Sharp corners, thin lines, monospace tactical labels, technical voice. Feels like a pre-flight briefing, not a consumer app.
2. **Information is the feature.** Density is a virtue when it serves comprehension. Hide chrome, surface content.
3. **Dual-scheme parity.** Every component renders correctly in both dark and light modes without layout shift.
4. **Mobile-first, 360 px minimum.** All layouts collapse gracefully. Tap targets ≥ 48 × 48 px. No horizontal scroll anywhere.
5. **One source of truth.** Colors, typography, spacing, radii come from `tokens.ts`. No hardcoded hex in components.
6. **Additive migration.** New patterns don't break existing pages until those pages are explicitly migrated in their own ticket.

---

## 2. Color tokens

Canonical token shape — implemented in `web-app/src/tokens.ts`:

```ts
export const colorTokens = {
  dark: { /* dark scheme values below */ },
  light: { /* light scheme values below */ },
};
```

### 2.1 Dark scheme (default)

| Role | Token | Value |
|---|---|---|
| Page background | `bg` | `#071020` |
| Secondary background | `bg2` | `#0d1b2a` |
| Surface (card, panel) | `surface` | `#0f1f33` |
| Raised surface | `surface2` | `#142a40` |
| Border | `border` | `#1a3550` |
| Border, emphasized | `borderHi` | `#2a4a70` |
| Primary accent (amber) | `accent` | `#f0c040` |
| Accent dim | `accentDim` | `#8b6f24` |
| Text primary | `text` | `#e4ecf5` |
| Text muted | `textMuted` | `#7a9ab5` |
| Success | `success` | `#4caf7d` |
| Warning | `warning` | `#f0c040` |
| Danger | `danger` | `#e05050` |
| Info | `info` | `#5b9bd5` |

### 2.2 Light scheme

| Role | Token | Value |
|---|---|---|
| Page background | `bg` | `#f5f2ec` |
| Secondary background | `bg2` | `#eae5db` |
| Surface | `surface` | `#ffffff` |
| Raised surface | `surface2` | `#f9f5ed` |
| Border | `border` | `#c9c0ad` |
| Border, emphasized | `borderHi` | `#8a7f67` |
| Primary accent (amber) | `accent` | `#b87000` |
| Accent dim | `accentDim` | `#d89938` |
| Text primary | `text` | `#1a1713` |
| Text muted | `textMuted` | `#6b6458` |
| Success | `success` | `#2e8b57` |
| Warning | `warning` | `#b88720` |
| Danger | `danger` | `#a03020` |
| Info | `info` | `#305a80` |

### 2.3 Contrast rules

- Text on bg must meet **WCAG AA** (≥ 4.5:1 for body text, ≥ 3:1 for large text).
- Accent-on-bg is used for emphasis only, not body text.
- Danger/warning colors must be paired with an icon or label — color alone is insufficient.

---

## 3. Typography

### 3.1 Fonts

| Family | Purpose | Fallbacks |
|---|---|---|
| `Inter` (or system-ui) | Body, headings, UI | `system-ui, sans-serif` |
| `SF Mono` / `JetBrains Mono` | Tactical labels, code, numbers | `'SF Mono', 'JetBrains Mono', Consolas, monospace` |

Never use Georgia, Roboto, or any variable-font pairing outside Inter.

### 3.2 Scale

All sizes in `rem` where possible; pixel values shown for reference at default browser zoom.

| Role | Size | Weight | Line-height | Letter-spacing |
|---|---|---|---|---|
| Display (hero) | 44 px (2.75rem) | 700 | 1.1 | −0.02em |
| h2 | 28 px (1.75rem) | 600 | 1.2 | −0.015em |
| h3 | 20 px (1.25rem) | 600 | 1.3 | −0.01em |
| h4 / card title | 17 px | 600 | 1.35 | −0.01em |
| Body | 15 px | 400 | 1.55 | 0 |
| Caption | 13 px | 400 | 1.5 | 0 |
| Meta / monospace label | 11 px | 500 mono | 1.4 | 0.1 – 0.15em, uppercase |

### 3.3 Rules

- **Monospace is reserved** for: lesson IDs (`AL-014`), status-bar readouts, NOTAM meta rows, gauge numerics, code snippets. Never use monospace for body copy.
- **Letter-spacing** on uppercase micro-labels must be ≥ 0.1 em.
- Line-height below 1.45 is forbidden for body text.

---

## 4. Spacing, radii, borders

### 4.1 Spacing scale

4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 px — pick from the scale, nothing between.

### 4.2 Radii

| Element | Radius |
|---|---|
| Buttons, chips, inline controls | 3 px |
| Cards, panels, NOTAM callouts | 4 px |
| Full-pill buttons (mode toggle, track switcher) | 100 px |
| Everything else | 4 px default |

Large radii (> 8 px) are not part of this system. This is the cockpit direction, not the consumer-app direction.

### 4.3 Borders

- Default: `1px solid var(--border)`.
- Emphasized: `1px solid var(--border-hi)` or `1px solid var(--accent)`.
- Left-accent callouts (NOTAM, alerts): `3px solid var(--accent)` on left edge only.
- No box-shadows in dark mode. Light mode may use `0 1px 3px rgba(0,0,0,0.04)` on surfaces for paper feel.

### 4.4 Grid-paper backdrop

Every page body has a 40 × 40 px grid-paper backdrop:

```css
body::before {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background-image:
    linear-gradient(var(--grid-line) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid-line) 1px, transparent 1px);
  background-size: 40px 40px;
}
```

`--grid-line` in dark = `rgba(26,53,80,0.15)`; in light = `rgba(138,127,103,0.10)`.

---

## 5. Component patterns

### 5.1 Status bar (top of every page)

Two-row strip with top + bottom borders. Monospace uppercase labels, muted color, key values in accent color.

```
[dot] SYSTEM READY · TRANSPORT CANADA PPL · AEROPLANE          LESSONS 47/60 · LAST SESSION 2H AGO
```

Collapses to stacked vertical layout below 640 px. Status dot is a 7 px circle in success color with a subtle glow.

### 5.2 Altimeter gauge

120 × 120 SVG circular gauge for exam readiness. Amber arc, tick marks at 12/3/6/9 o'clock with numeric labels (100/25/50/75). Always paired with large gauge number (52 px, monospace, accent color) plus per-topic breakdown. See `variant-a-cockpit.html` for reference SVG — copy verbatim into a `<ReadinessGauge>` component.

### 5.3 NOTAM card (primary CTA)

Surface background, amber-dim top/right/bottom border (1px), amber left-border 3px accent. Contents:

- **Stamp line:** monospace uppercase, accent color, e.g., `▸ LESSON AL-014`
- **Title:** sans 18 px semibold, primary text color
- **Meta row:** monospace key-value pairs (DUR 20 MIN · AUDIO READY · QUESTIONS 5 · TOPIC AIR LAW 14/18)
- **Action link:** accent color, uppercase, `▸ BEGIN SESSION`

### 5.4 Section header

Horizontal rule (bottom border) divider with monospace uppercase heading on the left and a muted metadata chip on the right.

```
◆ NEXT ACTION ─────────────────────────────────────── RESUMING · 2H PAUSE
```

### 5.5 Topic card

Surface background, 1px border, 16 px padding. Four-column grid on desktop, two-column at ≤ 760 px.

- Top: monospace code + weight label (`AL · 30% WEIGHT`)
- Name (sans 15 px semibold)
- 2 px thin amber progress bar
- Footer: `lessons count` + accent-colored percentage

### 5.6 Exam card

Surface, 1px border, padded, hover border-turns-amber. Contents: kind (monospace uppercase), title, descriptor. Right-floated arrow in accent color.

### 5.7 Mode toggle (ModeToggle.tsx)

Icon button, 100 px pill radius, 48 × 48 px, sun icon in light mode and moon in dark mode. Slots into side-rail bottom on desktop, into the top-right on mobile. `aria-label="Switch to {next mode} mode"`.

### 5.8 Track switcher

Pill button with accent-soft badge + track code + name + progress + chevron. Click opens menu with: active-track section, your-other-tracks section, locked/coming-soon tracks (50 % opacity), and "Add another track" placeholder. See `multi-track.html` for binding spec.

---

## 6. Motion

- Transitions: 150 – 200 ms, ease-out, on `background`, `border-color`, `transform`, `color` only.
- Hover lift: `transform: translateY(-1px)` on interactive cards and buttons.
- Mode change: 200 ms transition on background/text/border colors — no flash, no layout shift.
- No scroll animations, no parallax, no stagger entrances. Aviation trust = absence of fidget.

---

## 7. Layout rules

### 7.1 Breakpoints

| Name | Width | Layout shift |
|---|---|---|
| `xs` | ≥ 360 px | Mobile — vertical stacks, 2-col topic grid |
| `sm` | ≥ 640 px | Two-column content allowed |
| `md` | ≥ 760 px | Desktop — hero 2-col, topic grid 4-col, side-rail nav |
| `lg` | ≥ 1024 px | Max content width 1100 px, centered |

### 7.2 Container widths

- Home / dashboard pages: max-width **1100 px**
- Lesson reading / long-form: max-width **760 px**
- Quiz / focus tasks: max-width **700 px**

### 7.3 Mobile rules

- Tap targets ≥ 48 × 48 px — hard requirement, not a guideline.
- No horizontal scroll from 360 px up — test every new layout at 360, 375, 414, 768.
- Bottom-nav items on mobile ≤ 5; more go into a menu.
- Keep key actions thumb-reachable (bottom third of screen).

---

## 8. Do / don't

**Do**
- Use tokens. Always.
- Use monospace for tactical labels, numbers, IDs.
- Default to sharp corners.
- Keep one primary accent color per page (amber).
- Pair color cues with icons or text labels.

**Don't**
- Introduce Georgia, Roboto, or serif display fonts.
- Use radii > 8 px outside full pills.
- Use box-shadows in dark mode.
- Use MUI default blue `#1976d2` anywhere — primary overrides must kill it.
- Use green for navigation, progress, or decoration — green is reserved for success/correct semantics only.
- Add motion that serves no feedback purpose.
- Use emoji in UI copy (status dots and arrows are ok: `▸ ◆ ⦿`).

---

## 9. How to add a new page

1. Start from a copy of `src/pages/Home.tsx` structure (after Phase-2 Home lands) — status bar + section-headers + cards.
2. Consume tokens via `useTheme()` / MUI `sx` with palette paths. No hardcoded hex.
3. Add at minimum: breadcrumb / back affordance, clear primary CTA, mobile-collapsed layout.
4. Test in both modes before opening PR.
5. Reference this document in the PR description (`Adheres to docs/design/DESIGN-SYSTEM.md`).

---

## 10. How to propose a design change

If a page needs a pattern not covered here:

1. Open a PR that modifies this document and adds the new pattern, with a worked example and a visual reference in `/docs/design/examples/`.
2. Discuss the amendment **before** filing the implementation ticket.
3. Once merged, the new pattern is canonical and can be used.

Design drift happens when patterns multiply unchecked. Amend this doc first, then build.

---

## Appendix A — Reference mockups

Live at `/design-lab/` during the Phase 2 rollout:

- `variant-a-cockpit.html` — canonical dark-scheme spec
- `variant-a-cockpit-light.html` — canonical light-scheme spec
- `multi-track.html` — track switcher + per-track dashboard scoping

These will be deleted after the last page migrates to the system. This document survives.

## Appendix B — Related docs

- `docs/pio-design-brief.md` — research that informed direction (read-only reference, not a spec)
- `docs/visuals-standards.md` — rules for lesson-visual HTML files (different from app UI; coexists)
- `docs/audio-standards.md` — Kokoro TTS rules (unrelated to visual design but same tone-of-voice)
