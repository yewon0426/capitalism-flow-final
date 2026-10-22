import React, { useState, useEffect, useCallback } from 'react';
import { CURRICULUM_TOPICS } from './data/curriculumData';
import { PartId, TopicItem } from './types/curriculum';
import { TopNavbar } from './components/layout/TopNavbar';
import { BottomBar } from './components/layout/BottomBar';
import { TeacherNoteDrawer } from './components/common/TeacherNoteDrawer';
import { TableOfContentsModal } from './components/common/TableOfContentsModal';

// Dedicated Topic Views
import { Topic01WhatIsCapitalism } from './components/topics/Topic01WhatIsCapitalism';
import { Topic02Characteristics } from './components/topics/Topic02Characteristics';
import { Topic03MasterTimeline } from './components/topics/Topic03MasterTimeline';
import { Topic04CommercialCapitalism } from './components/topics/Topic04CommercialCapitalism';
import { Topic05IndustrialRevolution } from './components/topics/Topic05IndustrialRevolution';
import { Topic06InvisibleHand } from './components/topics/Topic06InvisibleHand';
import { Topic07LimitsOfIndustrialCapitalism } from './components/topics/Topic07LimitsOfIndustrialCapitalism';
import { Topic08TheGreatDepression } from './components/topics/Topic08TheGreatDepression';
import { Topic09EffectiveDemandCycle } from './components/topics/Topic09EffectiveDemandCycle';
import { Topic10WelfareCapitalismIntervention } from './components/topics/Topic10WelfareCapitalismIntervention';
import { Topic11StagflationShock } from './components/topics/Topic11StagflationShock';
import { Topic12NeoliberalismRise } from './components/topics/Topic12NeoliberalismRise';
import { Topic13NeoliberalismEffectsAndLimits } from './components/topics/Topic13NeoliberalismEffectsAndLimits';
import { Topic14ComparativeMatrix } from './components/topics/Topic14ComparativeMatrix';
import { Topic15FinalSynthesis } from './components/topics/Topic15FinalSynthesis';
import { Topic16WhatIsEconomicSystem } from './components/topics/Topic16WhatIsEconomicSystem';
import { Topic17BreadShortageComparison } from './components/topics/Topic17BreadShortageComparison';
import { Topic18EconomicSystemsComparison } from './components/topics/Topic18EconomicSystemsComparison';

// Recommended Pedagogical Curriculum Sequence:
// 1. Part 1: 자본주의의 의미와 특징 (주제 1, 2)
// 2. Part 2: 자본주의의 역사적 전개 (주제 3 ~ 13)
// 3. Part 3: 경제 체제의 유형별 특징 (주제 16, 17, 18)
// 4. Part 4: 종합 정리 및 복습 (주제 14, 15)
const TOPIC_SEQUENCE = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 16, 17, 18, 14, 15];

export default function App() {
  const [currentTopicId, setCurrentTopicId] = useState<number>(3); // Start directly on flagship Timeline (Topic 03)
  const [activeStep, setActiveStep] = useState<number>(3); // Default reveal up to step 3
  const [isTeacherNotesOpen, setIsTeacherNotesOpen] = useState<boolean>(false);
  const [isTOCOpen, setIsTOCOpen] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  // Classroom Lesson Timer State
  const [timerSeconds, setTimerSeconds] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning]);

  const toggleTimer = () => setIsTimerRunning((prev) => !prev);
  const resetTimer = () => {
    setIsTimerRunning(false);
    setTimerSeconds(0);
  };

  const currentTopic: TopicItem =
    CURRICULUM_TOPICS.find((t) => t.id === currentTopicId) || CURRICULUM_TOPICS[0];

  const currentSequenceIndex = TOPIC_SEQUENCE.indexOf(currentTopicId);

  const handlePrevTopic = useCallback(() => {
    const idx = TOPIC_SEQUENCE.indexOf(currentTopicId);
    if (idx > 0) {
      setCurrentTopicId(TOPIC_SEQUENCE[idx - 1]);
      setActiveStep(3); // Reset to full reveal on slide switch
    }
  }, [currentTopicId]);

  const handleNextTopic = useCallback(() => {
    const idx = TOPIC_SEQUENCE.indexOf(currentTopicId);
    if (idx !== -1 && idx < TOPIC_SEQUENCE.length - 1) {
      setCurrentTopicId(TOPIC_SEQUENCE[idx + 1]);
      setActiveStep(3);
    }
  }, [currentTopicId]);

  const handleSelectPart = (partId: PartId) => {
    if (partId === 'part1') setCurrentTopicId(1);
    else if (partId === 'part2') setCurrentTopicId(3);
    else if (partId === 'part3') setCurrentTopicId(16);
    else if (partId === 'part4') setCurrentTopicId(14);
    setActiveStep(3);
  };

  const handleSelectTopic = (id: number) => {
    setCurrentTopicId(id);
    setActiveStep(3);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  };

  // Keyboard navigation handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if an input is focused
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrevTopic();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNextTopic();
      } else if (e.key === ' ' || e.code === 'Space') {
        e.preventDefault();
        // Cycle step
        setActiveStep((prev) => (prev >= currentTopic.steps.length ? 1 : prev + 1));
      } else if (e.key.toLowerCase() === 'f') {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key.toLowerCase() === 'n') {
        e.preventDefault();
        setIsTeacherNotesOpen((prev) => !prev);
      } else if (e.key === 'Escape') {
        setIsTeacherNotesOpen(false);
        setIsTOCOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrevTopic, handleNextTopic, currentTopic.steps.length]);

  // Render Topic Component dynamically
  const renderTopicContent = () => {
    switch (currentTopicId) {
      case 1:
        return <Topic01WhatIsCapitalism activeStep={activeStep} />;
      case 2:
        return <Topic02Characteristics activeStep={activeStep} />;
      case 3:
        return <Topic03MasterTimeline activeStep={activeStep} />;
      case 4:
        return <Topic04CommercialCapitalism activeStep={activeStep} />;
      case 5:
        return <Topic05IndustrialRevolution activeStep={activeStep} />;
      case 6:
        return <Topic06InvisibleHand activeStep={activeStep} />;
      case 7:
        return <Topic07LimitsOfIndustrialCapitalism activeStep={activeStep} />;
      case 8:
        return <Topic08TheGreatDepression activeStep={activeStep} />;
      case 9:
        return <Topic09EffectiveDemandCycle activeStep={activeStep} />;
      case 10:
        return <Topic10WelfareCapitalismIntervention activeStep={activeStep} />;
      case 11:
        return <Topic11StagflationShock activeStep={activeStep} />;
      case 12:
        return <Topic12NeoliberalismRise activeStep={activeStep} />;
      case 13:
        return <Topic13NeoliberalismEffectsAndLimits activeStep={activeStep} />;
      case 14:
        return <Topic14ComparativeMatrix activeStep={activeStep} />;
      case 15:
        return <Topic15FinalSynthesis activeStep={activeStep} />;
      case 16:
        return <Topic16WhatIsEconomicSystem activeStep={activeStep} />;
      case 17:
        return <Topic17BreadShortageComparison activeStep={activeStep} />;
      case 18:
        return <Topic18EconomicSystemsComparison activeStep={activeStep} />;
      default:
        return <Topic03MasterTimeline activeStep={activeStep} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F6F0] text-[#0F1E36] flex flex-col justify-between overflow-x-hidden font-sans">
      {/* 1. Classroom Top Navigation */}
      <TopNavbar
        currentPartId={currentTopic.partId}
        currentTopicId={currentTopicId}
        onSelectPart={handleSelectPart}
        onOpenTeacherNotes={() => setIsTeacherNotesOpen(true)}
        onOpenTOC={() => setIsTOCOpen(true)}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
        timerSeconds={timerSeconds}
        isTimerRunning={isTimerRunning}
        onToggleTimer={toggleTimer}
        onResetTimer={resetTimer}
      />

      {/* 2. Central Presentation Viewport (16:9 Optimizable Stage) */}
      <main className="flex-1 flex flex-col justify-center items-center p-3 md:p-6 w-full max-w-[1560px] mx-auto min-h-[calc(100vh-8rem)]">
        <div className="w-full h-full flex-1">
          {renderTopicContent()}
        </div>
      </main>

      {/* 3. Bottom Teacher & Slide Controller */}
      <BottomBar
        currentTopicId={currentTopicId}
        totalTopics={CURRICULUM_TOPICS.length}
        onPrevTopic={handlePrevTopic}
        onNextTopic={handleNextTopic}
        steps={currentTopic.steps}
        activeStep={activeStep}
        onSelectStep={(step) => setActiveStep(step)}
        onRevealAllSteps={() => setActiveStep(currentTopic.steps.length)}
        onResetSteps={() => setActiveStep(1)}
        canPrev={currentSequenceIndex > 0}
        canNext={currentSequenceIndex !== -1 && currentSequenceIndex < TOPIC_SEQUENCE.length - 1}
        topicNumberDisplay={currentTopic.chapterNumberStr}
      />

      {/* Teacher Lecture Note Drawer */}
      <TeacherNoteDrawer
        topic={currentTopic}
        isOpen={isTeacherNotesOpen}
        onClose={() => setIsTeacherNotesOpen(false)}
      />

      {/* 15 Lessons Table of Contents Modal */}
      <TableOfContentsModal
        currentTopicId={currentTopicId}
        isOpen={isTOCOpen}
        onClose={() => setIsTOCOpen(false)}
        onSelectTopic={handleSelectTopic}
      />
    </div>
  );
}
