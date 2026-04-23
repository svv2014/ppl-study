The current PPL Study web app has solid content and the right color foundation (navy + amber), but it reads as a generic MUI dashboard rather than a precision aviation tool. Competitive analysis of Duolingo, Khan Academy, Anki, Brainscape, Quizlet, Brilliant, and Coursera surfaces clear patterns to borrow: SM-2 spaced repetition for question review, concept-first lesson progression with comprehension gates, confidence self-rating after each quiz question, and a tiered progress model (lesson → topic mastery → exam readiness). The existing AudioPlayer and QuizRunner are good starting points but need elevation to match an audio-first, retention-focused learning loop.

The visual redesign must break out of default MUI without a full rewrite. Key moves: swap Roboto for IBM Plex Sans/Mono (technical credibility, aviation register), override card and button styles to use thin borders + inset shadows instead of MUI elevation, replace the generic progress bar and donut chart with an altimeter-style exam readiness gauge and lesson-level amber progress bars, and enforce strict color semantics (green = correct/complete only, amber = primary actions, steel gray = metadata). The information architecture needs a top-level exam track namespace (`/[exam]/...`) so PPL Written, RROE Radio, PPL Heli, and future certs each live in a self-contained route scope with shared stateless components — no structural refactor needed when a second track ships.

Full brief with research findings, component map, design tokens, and migration phases: [`docs/pio-design-brief.md`](docs/pio-design-brief.md).

---

## Child Issues

- [ ] **[Theme]** Replace Roboto with IBM Plex Sans/Mono; apply new color tokens and MUI component overrides in `theme.ts`
- [ ] **[Nav]** Desktop side-rail + mobile bottom-nav; amber active indicator replacing MUI blue highlight
- [ ] **[QuizOption]** Full-width answer card component with left-border correct/incorrect feedback (replaces MUI Radio in QuizRunner)
- [ ] **[TopicMasteryCard]** Topic card for LessonsIndex showing mastery % + lesson count + progress bar
- [ ] **[LessonProgressBar]** Thin amber bar in LessonDetail header showing position in topic sequence
- [ ] **[ExamTrackProvider]** Context provider for active exam track — unblocks multi-cert IA; hardcode PPL-A for v1
- [ ] **[SRSQueue]** Daily review session UI + SM-2 algorithm in `lib/srs.ts`; localStorage state for v1
- [ ] **[AudioPlayerV2]** Speed control (0.75×–1.5×), transcript toggle, sticky layout, spacebar shortcut
- [ ] **[LessonCompleteScreen]** Post-quiz overlay: score, SRS next-due date, lesson unlock confirmation
- [ ] **[ExamReadinessGauge]** Altimeter-style circular gauge on Home — weighted across topic mastery scores
- [ ] **[MockExamRunner]** Timed exam mode: configurable length, flag-for-review, no immediate feedback, results breakdown
- [ ] **[AirspaceDiagram]** SVG airspace cross-section (zoomable) for Air Law lessons
- [ ] **[TrackSwitcher]** Nav dropdown to switch/add exam tracks — ship when second track (RROE) has content
