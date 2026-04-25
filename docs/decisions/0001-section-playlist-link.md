# ADR-0001: Section Header → Playlist Link

**Status:** Accepted  
**Date:** 2026-04-25  
**Issue:** [#336](https://github.com/svv2014/ppl-study/issues/336)  
**Author:** ASDLC (Vadym Suprun)

---

## Context

Each lesson section on the index page (`LessonsIndex.tsx`) is headed by a `TopicMasteryCard` component showing topic name, lesson count, and a mastery progress bar. Several subjects map to curated YouTube playlists that cover identical material. These playlists exist externally but are not surfaced anywhere in the app, so learners must find them independently.

**Components involved:**
- `web-app/src/pages/LessonsIndex.tsx` — renders one `TopicMasteryCard` per topic
- `web-app/src/components/TopicMasteryCard.tsx` — the section header card (topic, X/Y LESSONS, progress bar)
- `web-app/src/lib/curriculum.ts` — `TOPICS` array and `TOPIC_LABELS` map (topic slugs → display names)

**Four topics currently defined:**
| Slug | Display Label |
|------|---------------|
| `air-law` | Air Law |
| `navigation` | Navigation |
| `meteorology` | Meteorology |
| `general-knowledge` | General Knowledge |

---

## Decision

**Ship Option 1 — link-out "▶ Playlist" button** as v1.

When a playlist URL is configured for a topic, render a small "▶ Playlist" button (MUI `Button` or `Chip`, `size="small"`) inside `TopicMasteryCard`. Clicking it opens the YouTube playlist in a new tab (`target="_blank" rel="noopener noreferrer"`). When no URL is configured for a topic, hide the button entirely — no greyed-out placeholder.

---

## Rationale

### Option 1 — Link-out button (chosen)

- **Cost/complexity:** Trivial. Two prop additions to `TopicMasteryCard`, one config file, one `<a>`/`Button` element. No new dependencies.
- **Risk:** Near-zero. A broken link is a dead end, not a crash or layout regression. Can be fixed in minutes.
- **Mobile:** Works perfectly — opens YouTube's native mobile app or the mobile site, which are far better optimised for playlist playback than an in-app embed.
- **Privacy/GDPR:** No third-party cookies, no consent banner required. The user navigates to YouTube rather than YouTube loading inside the app.
- **Reversibility:** Adding drawer or inline options later is additive; starting inline forces a larger refactor.

### Option 2 — Drawer / overlay embed (rejected for v1)

- Requires a Drawer or Modal component, layout coordination, and responsive sizing.
- Embeds `<iframe>` from YouTube, which loads tracking cookies without an explicit user consent mechanism — non-trivial GDPR risk for EU learners.
- Even with `youtube-nocookie.com`, the ITP/consent complexity is disproportionate to the value at this stage.

### Option 3 — Inline header embed (rejected for v1)

- Largest layout impact: the header card would need to expand, potentially pushing lesson cards off-screen on 360 px mobile.
- Inline autoplay behaviour on mobile is browser-restricted; behaviour is inconsistent.
- Highest distraction potential relative to the core lesson-card workflow.

---

## Playlist Mapping Data Source

**Proposed file:** `web-app/src/data/playlists.ts`

Keyed by the same `Topic` slug used in `curriculum.ts` (`'air-law' | 'navigation' | 'meteorology' | 'general-knowledge'`). Value is the full YouTube playlist URL string, or `undefined` if no playlist exists yet. Keeping it in TypeScript (rather than YAML) avoids a build-time parse step and keeps it type-safe with the existing `Topic` union.

```typescript
// web-app/src/data/playlists.ts
import type { Topic } from '../lib/types';

/** YouTube playlist URLs keyed by topic slug. Omit or set undefined when no playlist exists. */
export const TOPIC_PLAYLISTS: Partial<Record<Topic, string>> = {
  'air-law':          undefined,   // fill in when confirmed
  'navigation':       undefined,
  'meteorology':      undefined,
  'general-knowledge': undefined,
};
```

Values default to `undefined`; the button is hidden (not rendered) when the value is absent. This means the feature is safe to ship before all playlists are confirmed — individual entries are filled in as curated playlists are identified and verified.

**Open question:** Which topic slugs currently have a confirmed curated playlist? This must be answered before the implementation PR merges. Until confirmed, all values remain `undefined` and no button renders.

---

## Files to Touch — Implementation Ticket

| File | Change |
|------|--------|
| `web-app/src/data/playlists.ts` | **Create.** `TOPIC_PLAYLISTS` map (see above). |
| `web-app/src/components/TopicMasteryCard.tsx` | **Edit.** Add optional `playlistUrl?: string` prop. Render `▶ Playlist` button/chip when truthy; omit otherwise. |
| `web-app/src/pages/LessonsIndex.tsx` | **Edit.** Import `TOPIC_PLAYLISTS`, pass `playlistUrl={TOPIC_PLAYLISTS[topic]}` to each `<TopicMasteryCard>`. |
| `docs/design/DESIGN-SYSTEM.md` | **Edit.** Add entry for playlist button pattern (token-based, no hardcoded colour). |

No other files need changing. No new npm dependencies required.

---

## Acceptance Criteria — Implementation Ticket

- [ ] `web-app/src/data/playlists.ts` exists with `TOPIC_PLAYLISTS` typed as `Partial<Record<Topic, string>>`.
- [ ] At least one topic has a confirmed, non-`undefined` playlist URL before merging.
- [ ] `TopicMasteryCard` renders a "▶ Playlist" button **only** when `playlistUrl` is a non-empty string.
- [ ] Button opens the URL in a new tab (`target="_blank" rel="noopener noreferrer"`).
- [ ] No button (not even disabled/greyed) appears when `playlistUrl` is absent.
- [ ] Button uses design-system tokens only — no hardcoded hex, no new MUI blue.
- [ ] Component renders correctly at 360 px width (mobile-first breakpoint).
- [ ] No TypeScript errors (`npm run typecheck` passes).
- [ ] `DESIGN-SYSTEM.md` documents the playlist button pattern.
- [ ] Existing snapshot / interaction tests (if any) pass or are updated.

---

## Out of Scope (this ADR)

- Implementing the UX (covered by the follow-up implementation issue).
- Video-progress tracking or "watched" state.
- Replacing or de-emphasising existing lesson cards.
- Drawer or inline embed (may be revisited in a future ADR if engagement data justifies it).
