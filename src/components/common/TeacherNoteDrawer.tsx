import React from 'react';
import { X, BookOpen, AlertCircle, MessageCircleQuestion, GraduationCap, Lightbulb } from 'lucide-react';
import { TopicItem } from '../../types/curriculum';

interface TeacherNoteDrawerProps {
  topic: TopicItem;
  isOpen: boolean;
  onClose: () => void;
}

export const TeacherNoteDrawer: React.FC<TeacherNoteDrawerProps> = ({
  topic,
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  const note = topic.teacherNote;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div className="relative w-full max-w-xl bg-[#FAF8F3] border-l border-[#0F1E36]/15 shadow-2xl h-full flex flex-col z-10 animate-in slide-in-from-right duration-200">
        {/* Header */}
        <div className="p-5 border-b border-[#0F1E36]/10 bg-white/70 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-teal-800 mb-1">
              <GraduationCap className="w-4 h-4" />
              <span>교사용 수업 지도안 및 발문 노트</span>
              <span className="text-[#0F1E36]/30">·</span>
              <span className="font-mono">주제 {topic.chapterNumberStr}</span>
            </div>
            <h3 className="text-lg font-bold text-[#0F1E36]">{topic.title}</h3>
            <p className="text-xs text-[#0F1E36]/60 mt-0.5">{topic.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#0F1E36]/50 hover:text-[#0F1E36] hover:bg-black/5 rounded-md cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* 1. 수업 발문 대본 (Classroom Script) */}
          <section className="bg-white rounded-lg p-5 border border-[#0F1E36]/10 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold text-teal-900 mb-2">
              <Lightbulb className="w-4 h-4 text-amber-600" />
              <span>실제 수업 발문 가이드 (교사 멘트)</span>
            </div>
            <p className="text-sm text-[#0F1E36]/90 leading-relaxed font-normal bg-[#FDFBF7] p-3 rounded-md border border-amber-200/50">
              "{note.dialogue}"
            </p>
          </section>

          {/* 2. 핵심 개념 학술 해설 */}
          <section className="bg-white rounded-lg p-5 border border-[#0F1E36]/10 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold text-[#0F1E36] mb-2">
              <BookOpen className="w-4 h-4 text-teal-700" />
              <span>핵심 개념 및 경제사 맥락 해설</span>
            </div>
            <p className="text-sm text-[#0F1E36]/80 leading-relaxed">
              {note.coreConcept}
            </p>
          </section>

          {/* 3. 학생 오개념 방지 포인트 (Critical) */}
          <section className="bg-amber-50/70 rounded-lg p-5 border border-amber-200 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-900 mb-2.5">
              <AlertCircle className="w-4 h-4 text-amber-700" />
              <span>학생들의 대표적 오개념 주의 포인트</span>
            </div>
            <ul className="space-y-2.5">
              {note.misconceptions.map((item, idx) => (
                <li key={idx} className="text-xs text-amber-950/90 leading-relaxed flex items-start gap-2">
                  <span className="font-bold text-amber-700 shrink-0">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 4. 교실 토론 및 심화 질문 */}
          <section className="bg-white rounded-lg p-5 border border-[#0F1E36]/10 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold text-[#0F1E36] mb-2">
              <MessageCircleQuestion className="w-4 h-4 text-teal-700" />
              <span>학생 참여형 발문 & 탐구 질문</span>
            </div>
            <p className="text-sm font-medium text-teal-950 bg-teal-50/70 p-3 rounded-md border border-teal-200/60 leading-relaxed">
              Q. {note.discussionQuestion}
            </p>
          </section>

          {/* 5. 성취기준 연계 */}
          <section className="text-xs text-[#0F1E36]/50 pt-2 border-t border-[#0F1E36]/10 flex items-center justify-between">
            <span>2022 개정 교육과정 연계:</span>
            <span className="font-mono text-[#0F1E36]/70">{note.curriculumStandard}</span>
          </section>
        </div>
      </div>
    </div>
  );
};
