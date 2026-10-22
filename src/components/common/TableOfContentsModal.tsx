import React from 'react';
import { X, CheckCircle2, ChevronRight, Layers } from 'lucide-react';
import { CURRICULUM_TOPICS } from '../../data/curriculumData';

interface TableOfContentsModalProps {
  currentTopicId: number;
  isOpen: boolean;
  onClose: () => void;
  onSelectTopic: (topicId: number) => void;
}

export const TableOfContentsModal: React.FC<TableOfContentsModalProps> = ({
  currentTopicId,
  isOpen,
  onClose,
  onSelectTopic
}) => {
  if (!isOpen) return null;

  const part1Topics = CURRICULUM_TOPICS.filter((t) => t.partId === 'part1');
  const part2Topics = CURRICULUM_TOPICS.filter((t) => t.partId === 'part2');
  const part3Topics = CURRICULUM_TOPICS.filter((t) => t.partId === 'part3');
  const part4Topics = CURRICULUM_TOPICS.filter((t) => t.partId === 'part4');

  const handleSelect = (id: number) => {
    onSelectTopic(id);
    onClose();
  };

  const renderSection = (title: string, subtitle: string, topics: typeof CURRICULUM_TOPICS) => (
    <div className="mb-6">
      <div className="flex items-baseline justify-between mb-2 pb-1 border-b border-[#0F1E36]/10">
        <h4 className="text-xs font-extrabold uppercase tracking-wider text-teal-800">
          {title}
        </h4>
        <span className="text-[11px] text-[#0F1E36]/50">{subtitle}</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {topics.map((t) => {
          const isSelected = t.id === currentTopicId;
          return (
            <button
              key={t.id}
              onClick={() => handleSelect(t.id)}
              className={`p-3 text-left rounded-lg border transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-teal-800 text-white border-teal-800 shadow-sm'
                  : 'bg-white hover:bg-[#F2EFE8] border-[#0F1E36]/10 text-[#0F1E36]'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span
                  className={`text-[11px] font-mono font-bold ${
                    isSelected ? 'text-teal-200' : 'text-teal-700'
                  }`}
                >
                  주제 {t.chapterNumberStr}
                </span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded ${
                    isSelected
                      ? 'bg-teal-900/60 text-white'
                      : 'bg-[#F2EFE8] text-[#0F1E36]/60'
                  }`}
                >
                  {t.periodTag || '개념'}
                </span>
              </div>
              <p
                className={`text-xs font-bold leading-snug line-clamp-1 ${
                  isSelected ? 'text-white' : 'text-[#0F1E36]'
                }`}
              >
                {t.title}
              </p>
              <p
                className={`text-[11px] mt-1 line-clamp-1 ${
                  isSelected ? 'text-teal-100/80' : 'text-[#0F1E36]/60'
                }`}
              >
                {t.subtitle}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-[#FAF8F3] rounded-xl border border-[#0F1E36]/15 shadow-2xl flex flex-col max-h-[90vh] z-10 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="p-5 border-b border-[#0F1E36]/10 bg-white/70 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Layers className="w-5 h-5 text-teal-800" />
            <div>
              <h3 className="text-base font-extrabold text-[#0F1E36]">
                전체 18개 학습 주제 목차 (통합사회2)
              </h3>
              <p className="text-xs text-[#0F1E36]/60">
                원하는 주제를 클릭하여 즉시 해당 화면으로 이동합니다.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#0F1E36]/50 hover:text-[#0F1E36] hover:bg-black/5 rounded-md cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {renderSection('PART 1. 자본주의의 의미와 특징', '개념과 본질적 지탱 기둥 (주제 01~02)', part1Topics)}
          {renderSection('PART 2. 자본주의의 역사적 전개', '상업 → 산업 → 수정 → 신자유주의와 위기 극복 (주제 03~13)', part2Topics)}
          {renderSection('PART 3. 경제 체제의 유형별 특징', '희소성과 3대 기본 경제 문제, 빵 부족 비교, 7대 기준 비교표 (주제 16~18)', part3Topics)}
          {renderSection('PART 4. 종합 정리 및 복습', '종합 비교 매트릭스와 자본주의의 미래 (주제 14~15)', part4Topics)}
        </div>
      </div>
    </div>
  );
};
