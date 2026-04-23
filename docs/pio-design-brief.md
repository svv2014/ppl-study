# PPL Study — UX/UI Design Brief

**Author:** Pio (Senior Product Designer + UX Researcher)
**Date:** 2026-04-21
**Status:** Draft v1 — for engineering review and epic scoping

---

## 1. Executive Summary

The PPL Study web app has solid bones: a dark aviation theme, audio-first lesson structure, and a quiz runner. But the current implementation leans heavily on default MUI styling, giving it a generic "dashboard" feel that does not match the focused, high-stakes context of aviation exam prep. Learners who are preparing for Transport Canada licensing need an interface that communicates authority, clarity, and progress — not a generic SaaS tool.

This brief covers competitive research, specific UX pattern recommendations, a scalable information architecture (IA) for multiple Canadian pilot licences and certs, a non-generic visual direction, a prioritized component map, and a practical migration path.

**Core design goal:** Build the study tool that serious PPL candidates trust — one that feels as precise as the subject matter.

---

## 2. Competitive Research

### 2.1 Duolingo

**What works:**
- Streak and XP gamification creates daily return habit.
- Lesson completion feels rewarding: confetti, sound, and progress arc.
- Each session is explicitly time-bounded ("~5 min") — reduces intimidation.
- Heart system creates stakes without punishing learners permanently.

**What doesn't transfer:**
- Gamification tone is playful/childish — wrong register for aviation.
- Short bite-sized format (1–2 questions) is too shallow for concepts like weight & balance or airspace classifications that require 10–15 min to build mental models.
- Audio is decorative, not instructional.

**Take:** Borrow the micro-progress feedback loops and time-bounded framing. Discard the gamified tone.

### 2.2 Khan Academy

**What works:**
- Topic mastery tracking at the concept level, not just "lesson done."
- Clean reading experience with embedded exercises inline — no context switch.
- Well-structured unit/lesson/exercise hierarchy that scales to large curricula.
- Hints system that scaffolds without giving away answers.

**What doesn't transfer:**
- Video-first model is heavy — PPL Study is audio + markdown.
- Mastery percentages can feel abstract without domain context.

**Take:** Adopt the unit > topic > lesson > exercise IA. Surface mastery percentage per topic (e.g., "Air Law — 72%").

### 2.3 Anki

**What works:**
- Spaced repetition system (SRS) is empirically the best tool for long-term retention.
- Card flipping is a low-friction interaction model.
- Difficulty self-rating (Again / Hard / Good / Easy) puts learner in control.

**What doesn't transfer:**
- Raw Anki UI is utilitarian to a fault — zero aviation context.
- No narrative — cards are atomic, which fragments subject understanding.

**Take:** Implement SM-2-style SRS for all quiz questions. Surface "due today" count on the dashboard. Offer Again/Hard/Good/Easy self-rating at the end of each question.

### 2.4 Brainscape

**What works:**
- Confidence-based repetition (CBR) — learner rates their confidence 1–5 after each card.
- Clean card UI: question front, answer reveal, confidence scale below.
- Shows mastery percentage per deck with visual bar.

**What doesn't transfer:**
- Card metaphor only — no lesson narrative, no audio support.
- Premium gating feels hostile in a licensed-content context.

**Take:** Confidence rating (1–5 or verbal: "Guessed / Unsure / Knew it") is more intuitive than Anki's 4-point scale. Use this for PPL Study quiz self-assessment.

### 2.5 Quizlet

**What works:**
- Multiple study modes for the same content (flashcard, learn, written, match, test) increases retention via varied retrieval.
- "Learn" mode adapts question type based on performance.
- Star/bookmark system to flag weak cards for focused review.

**What doesn't transfer:**
- Content quality is user-generated and unverified — critical problem for regulatory content.
- Modes feel disconnected, not sequenced.

**Take:** Offer 2–3 study modes (Audio lesson → Quiz → Flashcard review) as a deliberate learning sequence, not a menu of alternatives.

### 2.6 Brilliant

**What works:**
- Concept-first, question-second structure: short conceptual framing → immediate application problem → explanation.
- Visual aids embedded in the problem, not just decorative.
- Progress gates: you cannot advance without demonstrating understanding.

**What doesn't transfer:**
- Interactive visual problems require significant engineering investment.
- Subject-matter illustrations are Brilliant's core IP — not available off the shelf.

**Take:** Adopt the concept-first pattern: every audio lesson ends with a 3-question comprehension check before unlocking the next lesson. Gate progression by score ≥ 60%.

### 2.7 Coursera

**What works:**
- Certificate and credential framing creates extrinsic motivation.
- Clear course-level progress bar.
- Peer discussion forums provide community support.

**What doesn't transfer:**
- Long-form video lectures are too slow for exam prep.
- Forum engagement requires a large user base to be useful.

**Take:** Frame the entire PPL Written track as a "course" with a certificate-style completion screen. Show a top-level progress bar on every page.

---

## 3. Recommended UX Patterns

### 3.1 Lesson Progression

**Pattern:** Linear unlock with optional review bypass.

- Lessons are organized as a sequence within each topic (Air Law: AL-001 → AL-002 → AL-003...).
- A lesson is "unlocked" when the previous lesson's comprehension quiz is passed (≥ 60%).
- Learners can re-enter any completed lesson freely.
- A "Review Mode" toggle lets experienced learners skip narrative and jump straight to quiz.

**Session structure (per lesson):**
1. Audio narration plays automatically (can pause/rewind)
2. Key points appear synchronized with audio (or scrollable if audio off)
3. Visual aid renders inline at the relevant moment
4. After narration: 3–5 comprehension questions (must score ≥ 60% to mark complete)
5. "Lesson complete" confirmation screen with SRS scheduling notice: "You'll review this in 3 days."

### 3.2 Spaced Repetition

**Algorithm:** SM-2 variant (same as Anki, proven at scale).

- After every quiz question, learner self-rates: **Missed it / Unsure / Got it**.
- Each question has an independent repetition interval, tracked per user.
- "Daily Review" session on the dashboard shows questions due today — capped at 20 per session to avoid overwhelm.
- Questions from multiple topics can appear in a single review session (cross-topic mixing improves retention).
- Failed questions (rated "Missed it") are re-shown within the same session.

**Dashboard data:** Show streak, due-today count, and weekly review completion bar.

### 3.3 Quiz Flows

**Comprehension Quiz (end of lesson):**
- 3–5 questions, single correct answer (multiple choice, 4 options).
- Immediate feedback: correct = subtle green confirm; incorrect = red highlight + explanation text (not just "wrong").
- Score shown at end; ≥ 60% unlocks the next lesson.
- Option to retry immediately.

**Daily Review (SRS queue):**
- Flashcard format: question shown, learner thinks, then taps "Show Answer."
- Answer revealed with full explanation.
- Self-rating below: Missed it / Unsure / Got it.
- Progress indicator: "12 of 20 reviewed."
- End screen shows stats: how many due tomorrow, streak, mastery delta.

**Mock Exam:**
- 50-question timed exam (configurable: 25, 50, 100 questions).
- No immediate feedback — mirrors real TC exam experience.
- Timer visible at top; per-question flag for "review later."
- Results screen: score, topic breakdown, weakest area callout, link to review flagged questions.

### 3.4 Progress Tracking

**Three levels of progress:**

1. **Lesson completion** — binary (complete / not complete) + lesson-level score.
2. **Topic mastery** — percentage calculated from SRS confidence ratings across all questions in the topic.
3. **Exam readiness** — aggregate across all topics, weighted by TC exam topic distribution (Air Law ~30%, Nav ~25%, Met ~25%, GK ~20%).

**Visual treatment:**
- Topic cards on the lessons index show a horizontal progress bar (0–100%).
- Exam readiness shown as a circular gauge on the Home screen — styled like an aircraft altimeter (not a generic donut chart).
- Weekly streaks shown as a 7-day row of dots (filled = studied, empty = missed, gold = hit daily goal).

### 3.5 Audio-First

The core audio pattern is already in the codebase (AudioPlayer component). Elevate it:

- Audio player is always visible during a lesson — sticky at the bottom on mobile, inline at the top on desktop.
- Keyboard shortcut: spacebar toggles play/pause (add aria-label and document it visibly).
- Transcript toggle: expandable panel below the player — shows lesson text synchronized with audio position (word-level highlight if feasible, paragraph-level as fallback).
- "Audio Off" mode: all content readable as clean markdown — no content hidden behind audio.
- Playback speed control: 0.75×, 1×, 1.25×, 1.5× (learners re-listening for review use 1.5×).
- Download link for offline use (important for in-flight practice areas with poor connectivity).

### 3.6 Visual Aids

Aviation is inherently visual. Current app has no inline diagrams.

**What to build:**
- **Airspace diagrams:** Class A/B/C/D/E/G cross-sections. Static SVG, zoomable on tap.
- **Chart excerpt overlays:** Annotated VNC chart excerpts for navigation lessons.
- **Instrument illustrations:** Six-pack (AI, ASI, VSI, ALT, HI, TC) with labeled parts.
- **Weather pattern diagrams:** Fronts, METAR decode visuals, icing envelope charts.
- **Weight & balance diagram:** Interactive slider showing CG movement (general knowledge).

**Implementation note:** SVG is preferable to rasterized images — scales to any screen, theming-friendly, no licensing issues for Transport Canada reference material.

---

## 4. Scalable Information Architecture

The current app only targets "PPL Written (Aeroplane)." The IA must accommodate:

| Exam | Code | Status |
|------|------|--------|
| PPL Written (Aeroplane) | PPL-A | Current |
| Restricted Radiotelephone Operator (Aviation) | RROE | Near-future |
| PPL Written (Helicopter) | PPL-H | Planned |
| Night Rating | NR | Planned |
| IFR Written | IFR | Planned |
| INRAT (Instrument Rating) | INRAT | Future |
| CPL Written | CPL | Future |

### 4.1 Proposed Route Structure

```
/                             → Global home (select exam track)
/exam-select                  → Exam track picker

/[exam]/                      → Track home (e.g. /ppl-a/)
/[exam]/lessons               → Lessons index for this track
/[exam]/lessons/[topic]/[slug]→ Lesson detail
/[exam]/review                → Daily SRS review session
/[exam]/mock-exam             → Timed mock exam
/[exam]/plan                  → Study plan for this track
/[exam]/progress              → Progress dashboard

/settings                     → User preferences (audio, speed, notifications)
```

**Design principle:** Every exam track is a self-contained namespace. Shared components (AudioPlayer, QuizRunner, Nav) are exam-agnostic. Exam-specific content (questions, lessons, topic weights) is data-driven from config files.

### 4.2 Track Switcher

A persistent "track switcher" in the Nav allows learners working toward multiple certs to switch context without going back to home. Shows active track + completion percentage.

Example: `[✈ PPL-A — 42%] ▾` → dropdown to switch or add new track.

### 4.3 Topic → Lesson → Question Data Model

```
Track
  └── Topic (e.g., Air Law)
        └── Lesson (e.g., AL-003 — VFR Weather Minimums)
              └── Questions (SRS-tagged, difficulty 1–5)
```

Each lesson markdown file already has the slug and topic embedded in its path (`lessons/air-law/001-airspace-classifications.md`). The data model maps 1:1 with this structure — no migration needed. When adding a new exam track, create a new top-level topic directory.

---

## 5. Visual Direction

### 5.1 Design Philosophy

**Aviation precision, not SaaS dashboard.** The interface should feel like it belongs in a cockpit briefing context — technical, authoritative, focused. Think Garmin GTN, Jeppesen approach charts, and ForeFlight's dark mode — not Google Material or Atlassian.

Current theme has the right foundation (navy `#0a1628` + amber `#f5a623`) but uses all default MUI component shapes, spacing, and typography — which immediately reads as generic.

### 5.2 Color System

**Base palette (keep from current):**
```
Night Sky    #0a1628    Background default (deepest surface)
Instrument   #0d1f3c    Paper / card background
Horizon      #102848    Elevated surface (modals, popovers)
```

**New additions:**
```
Glide Amber  #f5a623    Primary — CTAs, active states, key data
Glide Light  #f7c06a    Primary light — hover states, chip backgrounds
Chart White  #e8eef5    Primary text — slightly warm white, not pure #fff
Steel Gray   #8fa3bf    Secondary text, labels, metadata
```

**Status / semantic palette:**
```
Clear Green  #22c55e    Correct answer, lesson complete, goal hit
Overcast Red #ef4444    Wrong answer, overdue review, error
Caution Amber #f59e0b   Warning: quiz not started, streak at risk
IFR Blue     #3b82f6    Informational, link color in text
```

**Never use:**
- Pure `#ffffff` backgrounds (kills the aviation feel).
- Default MUI blue `#1976d2` for anything.
- Green for navigation/progress — reserve it exclusively for "correct/complete" semantics.

### 5.3 Typography

Replace Roboto with a pairing that reads as precision, not generic utility:

| Role | Font | Weight | Size |
|------|------|--------|------|
| Headings (H1–H3) | IBM Plex Sans | 600 | 1.5–2.5rem |
| Body text | IBM Plex Sans | 400 | 1rem / 1.75 line-height |
| Code / data | IBM Plex Mono | 400 | 0.875rem |
| Nav labels | IBM Plex Sans | 500 | 0.8125rem uppercase |
| Callout / badge | IBM Plex Mono | 600 | 0.75rem uppercase |

**Rationale:** IBM Plex Sans has aviation-adjacent technical credibility (designed for IBM systems), excellent legibility at small sizes, and zero overlap with the generic Roboto/Noto "starter kit" look. IBM Plex Mono for data labels (lesson codes like AL-003, scores like 84%) reinforces the instrument-panel readability aesthetic.

**Available via Google Fonts / Fontsource** — no licensing issues.

### 5.4 Component Overrides (MUI De-generification)

To break out of the default MUI look without rewriting everything:

**Cards:**
- Remove default MUI `border-radius: 4px` → use `6px` with a `1px` border in `#1a3258` (slightly lighter than the card background) instead of MUI's default raised shadow.
- No `elevation` prop shadows on cards — use border + subtle `box-shadow: inset 0 1px 0 rgba(255,255,255,0.05)` to suggest instrument bezel depth.

**Buttons:**
- Primary CTA: solid Glide Amber, `border-radius: 4px`, uppercase label in IBM Plex Sans 600, no MUI ripple (replace with opacity fade).
- Secondary: outlined in Steel Gray, transparent background.
- Destructive/skip: Ghost style — text only, Steel Gray, no border.

**Progress bars:**
- Custom thin bars (4px height) with Glide Amber fill on Instrument (`#0d1f3c`) background.
- Animate fill on mount (300ms ease-out) — gives weight to progress.

**Quiz answer options:**
- Not standard MUI Radio buttons. Full-width cards with left-border accent (4px) that turns green/red on selection.
- Hover: lift `1px` via `transform: translateY(-1px)` — subtle but alive.

**Nav:**
- Bottom nav on mobile (aviation apps are used on tablets/phones in the pattern area).
- Side rail on desktop — 240px wide, collapsible to icon-only at 64px.
- Active item: Glide Amber left border (3px) + text color, not MUI blue highlight.

### 5.5 Motion and Feedback

Keep motion minimal and purposeful:

- Lesson complete: single amber pulse (scale 1 → 1.03 → 1) + audio chime (short, professional — not Duolingo confetti).
- Correct answer: left border flashes green (200ms), answer card transitions to `rgba(34,197,94,0.1)` background.
- Wrong answer: left border flashes red (200ms) + subtle shake (3px horizontal, 150ms).
- Progress bar fill: always animated on mount — signals real change.
- Page transitions: fade only (150ms) — no slide/zoom which would feel playful.

---

## 6. Prioritized Component Map

Ordered by impact × effort (high impact / lower effort first).

### Tier 1 — Foundation (ship first, unblocks everything)

| Component | Description | Priority |
|-----------|-------------|----------|
| `ExamTrackProvider` | Context provider for active exam track, exposes track config and progress | P0 |
| `LessonProgressBar` | Thin amber bar in lesson header showing position in topic sequence | P0 |
| `TopicMasteryCard` | Card on lessons index showing topic name + SRS mastery % + lesson count | P0 |
| `QuizOption` | Full-width answer card with left-border feedback (replaces MUI Radio) | P0 |
| `theme.ts` overrides | IBM Plex Sans, updated color palette, card/button/progress overrides | P0 |

### Tier 2 — Core Experience

| Component | Description | Priority |
|-----------|-------------|----------|
| `SRSQueue` | Daily review session UI: flashcard flip, self-rating, session progress | P1 |
| `AudioPlayerV2` | Sticky audio player with speed control, transcript toggle, keyboard shortcut | P1 |
| `ExamReadinessGauge` | Altimeter-style circular gauge on home screen | P1 |
| `MockExamRunner` | Timed exam UI with flag-for-review, no immediate feedback | P1 |
| `LessonCompleteScreen` | Post-lesson summary: score, SRS next-due, unlock confirmation | P1 |

### Tier 3 — Enrichment

| Component | Description | Priority |
|-----------|-------------|----------|
| `AirspaceDiagram` | SVG airspace cross-section, zoomable | P2 |
| `WeeklyStreakRow` | 7-dot streak row (dashboard) | P2 |
| `TrackSwitcher` | Nav dropdown for switching exam tracks | P2 |
| `InstrumentIllustration` | SVG six-pack diagram for General Knowledge lessons | P2 |
| `METARDecoder` | Interactive METAR decode visual (hover/tap field for explanation) | P2 |

### Tier 4 — Future

| Component | Description | Priority |
|-----------|-------------|----------|
| `CommunityFlag` | Flag lesson content for factual errors | P3 |
| `OfflineDownload` | Lesson package download for offline use | P3 |
| `NightRatingOverlay` | Additional content layer for NR learners using PPL-A base lessons | P3 |

---

## 7. Migration Path

The current app has working pages (Home, LessonsIndex, LessonDetail, Exam, Plan), a QuizRunner, AudioPlayer, and a Nav. The migration is additive — no big rewrites.

### Phase 1 — Visual Foundation (1–2 weeks)

1. **Update `theme.ts`**: IBM Plex Sans via Fontsource, new color tokens, override card/button/progress styles. No page-level changes needed — the theme propagates everywhere.
2. **Update `Nav.tsx`**: Side rail layout for desktop, bottom nav for mobile. Replace MUI blue highlight with amber left border.
3. **Audit and replace** any hardcoded `color` or `sx` overrides that fight the theme.

**Deliverable:** Every existing page looks like PPL Study, not a generic MUI app.

### Phase 2 — Progress Layer (2–3 weeks)

4. **`ExamTrackProvider`**: Wrap App in a track context. For now, hardcode PPL-A as the only track. IA is future-ready.
5. **`TopicMasteryCard`** on LessonsIndex: replaces the current flat lesson list. Mastery % starts at 0, driven by localStorage until auth is added.
6. **`LessonProgressBar`**: Add to LessonDetail header.
7. **`ExamReadinessGauge`**: Add to Home.

**Deliverable:** Learners can see their progress at a glance.

### Phase 3 — SRS and Audio (3–4 weeks)

8. **`SRSQueue`**: New route `/ppl-a/review`. SM-2 implementation in `lib/srs.ts`. State in localStorage (or IndexedDB for larger question sets).
9. **`AudioPlayerV2`**: Extend existing AudioPlayer — add speed control, transcript toggle.
10. **`LessonCompleteScreen`**: Post-quiz overlay with SRS scheduling.
11. **`QuizOption`**: Replace MUI Radio in QuizRunner with full-width card component.

**Deliverable:** Core retention loop is live — learn, quiz, SRS review.

### Phase 4 — Mock Exam and SVG Aids (ongoing)

12. **`MockExamRunner`**: Extends existing Exam page to proper timed mock format.
13. **SVG visual aids**: Start with airspace cross-section (highest value for Air Law lessons).
14. **`TrackSwitcher`**: Add when a second exam track (RROE) has content.

### Migration Risks

| Risk | Mitigation |
|------|------------|
| IBM Plex Sans adds ~60KB to bundle | Load via `@fontsource/ibm-plex-sans` with subset — only weights 400/600 needed |
| SRS state in localStorage lost on clear | Accept for v1; plan Firebase persistence in Phase 3–4 |
| Track IA adds routing complexity | Implement `ExamTrackProvider` as context, not route nesting, to keep React Router changes minimal |
| SVG diagram maintenance | Author diagrams in Figma → export clean SVG → check into `/src/assets/diagrams/` |

---

## Appendix: Design Tokens Quick Reference

```typescript
// tokens.ts (proposed)
export const tokens = {
  color: {
    bg: {
      base: '#0a1628',
      paper: '#0d1f3c',
      elevated: '#102848',
    },
    brand: {
      primary: '#f5a623',
      primaryLight: '#f7c06a',
    },
    text: {
      primary: '#e8eef5',
      secondary: '#8fa3bf',
    },
    status: {
      correct: '#22c55e',
      incorrect: '#ef4444',
      caution: '#f59e0b',
      info: '#3b82f6',
    },
  },
  typography: {
    fontSans: "'IBM Plex Sans', system-ui, sans-serif",
    fontMono: "'IBM Plex Mono', 'Courier New', monospace",
  },
  radius: {
    card: '6px',
    button: '4px',
    badge: '3px',
  },
};
```
