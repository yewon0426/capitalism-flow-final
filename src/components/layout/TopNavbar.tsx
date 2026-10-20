import React from 'react';
import { BookOpen, Presentation, ListOrdered, Sparkles, Clock } from 'lucide-react';
import { PartId } from '../../types/curriculum';

interface TopNavbarProps {
  currentPartId: PartId;
  currentTopicId: number;
  onSelectPart: (partId: PartId) => void;
  onOpenTeacherNotes: () => void;
  onOpenTOC: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  timerSeconds: number;
  isTimerRunning: boolean;
  onToggleTimer: () => void;
  onResetTimer: () => void;
}

export const TopNavbar: React.FC<TopNavbarProps> = ({
  currentPartId,
  currentTopicId,
  onSelectPart,
  onOpenTeacherNotes,
  onOpenTOC,
  isFullscreen,
  onToggleFullscreen,
  timerSeconds,
  isTimerRunning,
  onToggleTimer,
  onResetTimer
}) => {
  const formatTimer = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <header className="h-16 px-6 bg-[#F8F6F0] border-b border-[#0F1E36]/10 flex items-center justify-between gap-8 select-none shrink-0 z-30">
      {/* Zone 1: Single text element wordmark with clean subject indicator */}
      <div className="flex items-center gap-3 shrink-0">
        <button
          onClick={onOpenTOC}
          className="text-left group cursor-pointer"
          title="전체 목차 열기"
        >
          <span className="font-extrabold tracking-tight text-lg text-[#0F1E36] group-hover:text-teal-700 transition-colors">
            CAPITALISM FLOW
          </span>
          <span className="ml-2 text-xs font-semibold text-teal-800 tracking-wider">
            통합사회2
          </span>
        </button>
      </div>

      {/* Zone 2: Clean single-line navigation links to sections */}
      <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#0F1E36]/70">
        <button
          onClick={() => onSelectPart('part1')}
          className={`cursor-pointer pb-0.5 transition-colors whitespace-nowrap shrink-0 ${
            currentPartId === 'part1'
              ? 'text-teal-800 font-bold border-b-2 border-teal-700'
              : 'hover:text-[#0F1E36]'
          }`}
        >
          1. 의미와 특징
        </button>
        <button
          onClick={() => onSelectPart('part2')}
          className={`cursor-pointer pb-0.5 transition-colors whitespace-nowrap shrink-0 ${
            currentPartId === 'part2'
              ? 'text-teal-800 font-bold border-b-2 border-teal-700'
              : 'hover:text-[#0F1E36]'
          }`}
        >
          2. 역사적 전개 과정
        </button>
        <button
          onClick={() => onSelectPart('part3')}
          className={`cursor-pointer pb-0.5 transition-colors whitespace-nowrap shrink-0 ${
            currentPartId === 'part3'
              ? 'text-teal-800 font-bold border-b-2 border-teal-700'
              : 'hover:text-[#0F1E36]'
          }`}
        >
          3. 종합 정리 및 복습
        </button>
        <button
          onClick={onOpenTOC}
          className="flex items-center gap-1.5 hover:text-teal-800 transition-colors cursor-pointer whitespace-nowrap shrink-0"
        >
          <ListOrdered className="w-4 h-4" />
          <span>전체 15개 목차</span>
        </button>
      </nav>

      {/* Zone 3: 1 primary action + minimal utility tools */}
      <div className="flex items-center gap-3 shrink-0">
        {/* Class Timer Tool */}
        <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 bg-white/80 border border-[#0F1E36]/10 rounded-md text-xs font-mono text-[#0F1E36]">
          <Clock className="w-3.5 h-3.5 text-teal-700" />
          <button
            onClick={onToggleTimer}
            className="cursor-pointer font-bold hover:text-teal-700"
            title={isTimerRunning ? '타이머 일시정지' : '수업 타이머 시작'}
          >
            {formatTimer(timerSeconds)}
          </button>
          <button
            onClick={onResetTimer}
            className="text-[10px] text-[#0F1E36]/40 hover:text-[#0F1E36] ml-0.5 cursor-pointer"
            title="타이머 리셋"
          >
            ↺
          </button>
        </div>

        {/* Fullscreen Toggle */}
        <button
          onClick={onToggleFullscreen}
          className="p-2 text-[#0F1E36]/70 hover:text-[#0F1E36] hover:bg-black/5 rounded-md transition-colors cursor-pointer"
          title={isFullscreen ? '전체화면 종료' : '교실 대형화면 발표 모드 (F)'}
        >
          <Presentation className="w-4 h-4" />
        </button>

        {/* Primary Action Button: Teacher's Lecture Notes */}
        <button
          onClick={onOpenTeacherNotes}
          className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-white bg-teal-800 hover:bg-teal-900 rounded-md shadow-sm transition-all cursor-pointer whitespace-nowrap shrink-0"
        >
          <BookOpen className="w-4 h-4" />
          <span>교사용 수업 노트</span>
        </button>
      </div>
    </header>
  );
};
