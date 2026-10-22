import React from 'react';
import { ChevronLeft, ChevronRight, Eye, RotateCcw, Sparkles } from 'lucide-react';
import { CurriculumStep } from '../../types/curriculum';

interface BottomBarProps {
  currentTopicId: number;
  totalTopics: number;
  onPrevTopic: () => void;
  onNextTopic: () => void;
  steps: CurriculumStep[];
  activeStep: number;
  onSelectStep: (stepNumber: number) => void;
  onRevealAllSteps: () => void;
  onResetSteps: () => void;
  canPrev?: boolean;
  canNext?: boolean;
  topicNumberDisplay?: string;
}

export const BottomBar: React.FC<BottomBarProps> = ({
  currentTopicId,
  totalTopics,
  onPrevTopic,
  onNextTopic,
  steps,
  activeStep,
  onSelectStep,
  onRevealAllSteps,
  onResetSteps,
  canPrev,
  canNext,
  topicNumberDisplay
}) => {
  return (
    <footer className="h-16 px-6 bg-[#F8F6F0] border-t border-[#0F1E36]/10 flex items-center justify-between gap-4 select-none shrink-0 z-30">
      {/* Left: Topic slide stepper */}
      <div className="flex items-center gap-2">
        <button
          onClick={onPrevTopic}
          disabled={canPrev !== undefined ? !canPrev : currentTopicId <= 1}
          className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-[#0F1E36] bg-white border border-[#0F1E36]/15 rounded-md hover:bg-[#F0EDE3] disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer shadow-xs"
          title="이전 학습 주제 (Left Arrow)"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">이전 주제</span>
        </button>

        <div className="px-3 py-1 bg-white border border-[#0F1E36]/15 rounded-md text-xs font-mono font-bold text-[#0F1E36] shadow-xs">
          <span className="text-teal-800">{topicNumberDisplay || String(currentTopicId).padStart(2, '0')}</span>
          <span className="text-[#0F1E36]/30 mx-1.5">/</span>
          <span>{String(totalTopics).padStart(2, '0')}</span>
        </div>

        <button
          onClick={onNextTopic}
          disabled={canNext !== undefined ? !canNext : currentTopicId >= totalTopics}
          className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-[#0F1E36] bg-white border border-[#0F1E36]/15 rounded-md hover:bg-[#F0EDE3] disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer shadow-xs"
          title="다음 학습 주제 (Right Arrow)"
        >
          <span className="hidden sm:inline">다음 주제</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Center: Educational Step Progression (Stage Disclosure) */}
      <div className="flex items-center gap-1.5 p-1 bg-[#EAE6DB] rounded-lg">
        {steps.map((step) => {
          const isCurrent = activeStep === step.stepNumber;
          const isPassed = activeStep >= step.stepNumber;
          return (
            <button
              key={step.stepNumber}
              onClick={() => onSelectStep(step.stepNumber)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                isCurrent
                  ? 'bg-teal-800 text-white shadow-xs'
                  : isPassed
                  ? 'bg-white text-teal-900 shadow-xs'
                  : 'text-[#0F1E36]/60 hover:text-[#0F1E36]'
              }`}
            >
              <span>단계 {step.stepNumber}</span>
              <span className="hidden md:inline font-normal opacity-85">· {step.label}</span>
            </button>
          );
        })}

        <div className="h-4 w-px bg-[#0F1E36]/15 mx-1" />

        <button
          onClick={onRevealAllSteps}
          className="px-2.5 py-1.5 text-xs font-medium text-[#0F1E36]/70 hover:text-[#0F1E36] hover:bg-white/60 rounded-md transition-colors cursor-pointer flex items-center gap-1"
          title="모든 설명 한 번에 공개"
        >
          <Eye className="w-3.5 h-3.5" />
          <span className="hidden lg:inline">전체 공개</span>
        </button>

        <button
          onClick={onResetSteps}
          className="px-2 py-1.5 text-xs font-medium text-[#0F1E36]/50 hover:text-[#0F1E36] hover:bg-white/60 rounded-md transition-colors cursor-pointer"
          title="1단계로 리셋"
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Right: Keyboard navigation prompt */}
      <div className="hidden lg:flex items-center gap-2 text-[11px] text-[#0F1E36]/50">
        <span className="px-1.5 py-0.5 bg-white border border-[#0F1E36]/10 rounded font-mono text-[10px]">← / →</span>
        <span>주제 이동</span>
        <span className="text-[#0F1E36]/20">·</span>
        <span className="px-1.5 py-0.5 bg-white border border-[#0F1E36]/10 rounded font-mono text-[10px]">Space</span>
        <span>다음 단계</span>
      </div>
    </footer>
  );
};
