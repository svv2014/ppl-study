import { useMemo, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { typographyTokens } from '../tokens';
import { useExamTrack } from '../context/ExamTrackContext';
import { CURRICULUM } from '../lib/curriculum';
import { getLessonsByTrack } from '../lib/lesson-loader';
import type { Lesson } from '../lib/types';
import StatusBar, { LAST_SESSION_KEY } from '../components/home/StatusBar';
import CheckinHeatmap from '../components/CheckinHeatmap';
import ReadinessGauge from '../components/home/ReadinessGauge';
import TopicCoverageGrid from '../components/home/TopicCoverageGrid';
import NextActionCard from '../components/home/NextActionCard';
import type { TopicStat } from '../components/home/ReadinessGauge';
import type { NextLesson } from '../components/home/NextActionCard';
import { useSRSStore } from '../hooks/useSRSStore';

const MONO = typographyTokens.fontFamily.mono;

function renderAccentedHeading(heading: string, accent: string) {
  const idx = heading.indexOf(accent);
  if (idx === -1) return heading;
  const before = heading.slice(0, idx);
  const after = heading.slice(idx + accent.length);
  return (
    <>
      {before}
      <Box component="span" sx={{ color: 'primary.main' }}>{accent}</Box>
      <br />
      {after}
    </>
  );
}

const TOPIC_CONFIG = [
  { key: 'air-law' as const, code: 'AL', label: 'Air Law', weight: 0.30 },
  { key: 'navigation' as const, code: 'NAV', label: 'Navigation', weight: 0.25 },
  { key: 'meteorology' as const, code: 'MET', label: 'Meteorology', weight: 0.25 },
  { key: 'general-knowledge' as const, code: 'GK', label: 'General Knowledge', weight: 0.20 },
];

function SectionHead({ title, meta }: { title: string; meta: string }) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        mt: '40px',
        mb: '16px',
        borderBottom: '1px solid',
        borderColor: 'divider',
        pb: '10px',
      }}
    >
      <Typography
        component="h2"
        sx={{ fontFamily: MONO, fontSize: '12px', color: 'text.secondary', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 600 }}
      >
        ◆ {title}
      </Typography>
      <Box sx={{ fontFamily: MONO, fontSize: '11px', color: 'primary.main' }}>{meta}</Box>
    </Box>
  );
}

export default function Home() {
  const { activeTrack, trackProgress } = useExamTrack();
  const [lastSession] = useState<string | null>(() => localStorage.getItem(LAST_SESSION_KEY));
  const { getDueCount } = useSRSStore(activeTrack.id);

  const allLessons = useMemo(() => getLessonsByTrack(activeTrack.id), [activeTrack.id]);

  const srsLessonSlugs = useMemo(() => allLessons.map((l) => l.slug), [allLessons]);
  const srsQuestionsPerLesson = useMemo(() => {
    const map: Record<string, number> = {};
    for (const l of allLessons) map[l.slug] = l.questions.length;
    return map;
  }, [allLessons]);
  const srsDueCount = useMemo(
    () => getDueCount(srsLessonSlugs, srsQuestionsPerLesson),
    [getDueCount, srsLessonSlugs, srsQuestionsPerLesson],
  );

  // Filter topic config to the active track's topics (e.g. PSTAR = air-law only)
  const activeTopicConfig = useMemo(() => {
    return TOPIC_CONFIG.filter((tc) => activeTrack.lessonFilter({ topic: tc.key } as Lesson));
  }, [activeTrack]);

  const topicStats: TopicStat[] = useMemo(() => {
    // Renormalize weights so the readiness gauge reads 100% when track is fully complete
    const totalWeight = activeTopicConfig.reduce((s, tc) => s + tc.weight, 0) || 1;
    return activeTopicConfig.map(({ key, code, label, weight }) => {
      const slots = CURRICULUM.filter((s) => s.topic === key);
      const done = slots.filter((s) => trackProgress.completed.includes(s.id)).length;
      const pct = slots.length > 0 ? Math.round((done / slots.length) * 100) : 0;
      return { code, label, topic: key, weight: weight / totalWeight, pct, done, total: slots.length };
    });
  }, [activeTopicConfig, trackProgress.completed]);

  const weightedPct = useMemo(
    () => Math.round(topicStats.reduce((sum, s) => sum + s.pct * s.weight, 0)),
    [topicStats],
  );

  const trackCurriculum = useMemo(() => {
    return CURRICULUM.filter((s) => activeTrack.lessonFilter({ topic: s.topic } as Lesson));
  }, [activeTrack]);

  const totalLessons = trackCurriculum.length;
  const completedCount = trackCurriculum.filter((s) => trackProgress.completed.includes(s.id)).length;

  const nextLesson: NextLesson | null = useMemo(() => {
    const lesson = allLessons.find((l) => !trackProgress.completed.includes(l.id)) ?? null;
    if (!lesson) return null;
    return {
      id: lesson.id,
      title: lesson.title,
      topic: lesson.topic,
      slug: lesson.slug,
      durationMin: lesson.duration_min,
      hasAudio: !!lesson.audio,
      questionCount: lesson.questions.length,
    };
  }, [allLessons, trackProgress.completed]);

  const lastSessionAgo = useMemo((): string => {
    if (!lastSession) return '—';
    const mins = Math.round((Date.now() - new Date(lastSession).getTime()) / 60000);
    if (mins < 1) return 'JUST NOW';
    if (mins < 60) return `${mins}M AGO`;
    if (mins < 1440) return `${Math.round(mins / 60)}H AGO`;
    return `${Math.round(mins / 1440)}D AGO`;
  }, [lastSession]);

  const ctaTo = nextLesson
    ? `/lessons/${nextLesson.topic}/${nextLesson.slug}`
    : '/lessons';
  const ctaLabel = nextLesson ? `Continue lesson ${nextLesson.id}` : 'Start studying';

  return (
    <Box id="main-content" tabIndex={-1} sx={{ minHeight: '100vh', pb: 8 }}>
      <Container maxWidth="lg" sx={{ pt: { xs: 3, md: 5 } }}>
        <StatusBar completedCount={completedCount} totalLessons={totalLessons} lastSession={lastSession} />

        {/* Hero */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.5fr 1fr' }, gap: 4, alignItems: 'center', mb: '36px' }}>
          <Box>
            <Box sx={{ fontFamily: MONO, fontSize: '11px', color: 'primary.main', letterSpacing: '0.15em', mb: '14px', textTransform: 'uppercase' }}>
              {activeTrack.byline}
            </Box>
            <Typography
              variant="h1"
              component="h1"
              sx={{ mb: '14px' }}
            >
              {activeTrack.heroHeadingAccent
                ? renderAccentedHeading(activeTrack.heroHeading, activeTrack.heroHeadingAccent)
                : activeTrack.heroHeading}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2.5, maxWidth: 460 }}>
              {activeTrack.heroSubtitle}
            </Typography>
            <Box sx={{ fontFamily: MONO, fontSize: '11px', color: 'text.secondary', letterSpacing: '0.12em', mb: 2, textTransform: 'uppercase' }}>
              {activeTrack.credibilityTag}
            </Box>
            <Box
              component={RouterLink}
              to={ctaTo}
              sx={(theme) => ({
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                bgcolor: 'primary.main',
                color: theme.palette.text.onAccent,
                px: '22px',
                py: '12px',
                minHeight: 48,
                borderRadius: 1,
                textDecoration: 'none',
                fontWeight: 600,
                fontFamily: MONO,
                fontSize: '13px',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                '&:hover': { opacity: 0.9 },
                '&::after': { content: '"→"' },
              })}
            >
              {ctaLabel}
            </Box>
          </Box>
          <ReadinessGauge weightedPct={weightedPct} topicStats={topicStats} />
        </Box>

        {/* Next Action */}
        {nextLesson && (
          <>
            <SectionHead title="Next Action" meta={lastSessionAgo !== '—' ? `Resuming · ${lastSessionAgo} Pause` : 'First Session'} />
            <NextActionCard lesson={nextLesson} lastSessionAgo={lastSessionAgo} />
          </>
        )}

        {/* Study Activity */}
        <SectionHead title="Study Activity" meta="Last 30 Days" />
        <CheckinHeatmap />

        {/* Topic Coverage */}
        <SectionHead title="Topic Coverage · TC Exam Weight" meta="4 Domains" />
        <TopicCoverageGrid stats={topicStats} />

        {/* SRS Review Queue */}
        {srsDueCount > 0 && (
          <>
            <SectionHead title="Spaced Repetition" meta={`${srsDueCount} DUE TODAY`} />
            <Box
              component={RouterLink}
              to="/srs"
              sx={(theme) => ({
                display: 'block',
                bgcolor: 'background.paper',
                border: `1px solid ${theme.palette.divider}`,
                borderLeft: '3px solid',
                borderLeftColor: 'primary.main',
                borderRadius: 1,
                p: '18px',
                textDecoration: 'none',
                color: 'text.primary',
                minHeight: 48,
                transition: 'border-color 0.15s',
                '&:hover': { borderColor: 'primary.main' },
                mb: '14px',
              })}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <Box sx={{ fontFamily: MONO, fontSize: '10px', color: 'primary.main', letterSpacing: '0.15em', textTransform: 'uppercase', mb: '6px' }}>
                  ▸ SRS · {activeTrack.code}
                </Box>
                <Box
                  sx={{
                    fontFamily: MONO,
                    fontSize: '11px',
                    bgcolor: 'primary.main',
                    color: 'text.onAccent',
                    px: '8px',
                    py: '2px',
                    borderRadius: '100px',
                    fontWeight: 600,
                  }}
                >
                  {srsDueCount}
                </Box>
              </Box>
              <Box sx={{ fontSize: '17px', fontWeight: 600, mb: '6px', letterSpacing: '-0.01em' }}>Review Due Cards</Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box sx={{ fontSize: '12px', color: 'text.secondary' }}>
                  {srsDueCount} card{srsDueCount !== 1 ? 's' : ''} due · Spaced repetition queue
                </Box>
                <Box sx={{ color: 'primary.main', fontFamily: MONO, fontSize: '16px' }}>→</Box>
              </Box>
            </Box>
          </>
        )}

        {/* Practice & Exam */}
        <SectionHead title="Practice &amp; Exam" meta="2 Tracks" />
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: '14px' }}>
          {[
            { to: '/pstar-exam', kind: '★ PSTAR · Pre-Solo', title: 'PSTAR Practice Exam', desc: '50 Qs · 40 min · 90% pass mark · Core Air Law coverage' },
            { to: '/final-exam', kind: '★ PPL · Written', title: 'Final Mock Exam', desc: '100 Qs · 3.5 hr · 60% pass (target 80%) · TC-weighted pool' },
          ].map((card) => (
            <Box
              key={card.to}
              component={RouterLink}
              to={card.to}
              sx={(theme) => ({
                display: 'block',
                bgcolor: 'background.paper',
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: 1,
                p: '18px',
                textDecoration: 'none',
                color: 'text.primary',
                minHeight: 48,
                transition: 'border-color 0.12s',
                '&:hover': { borderColor: 'primary.main' },
              })}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <Box sx={{ fontFamily: MONO, fontSize: '10px', color: 'text.secondary', letterSpacing: '0.15em', textTransform: 'uppercase', mb: '6px' }}>
                  {card.kind}
                </Box>
                <Box sx={{ color: 'primary.main', fontFamily: MONO, fontSize: '16px' }}>→</Box>
              </Box>
              <Box sx={{ fontSize: '17px', fontWeight: 600, mb: '6px', letterSpacing: '-0.01em' }}>{card.title}</Box>
              <Box sx={{ fontSize: '12px', color: 'text.secondary' }}>{card.desc}</Box>
            </Box>
          ))}
        </Box>

      </Container>
    </Box>
  );
}
