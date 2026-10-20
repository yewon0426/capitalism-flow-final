import React, { useState, useEffect } from 'react';
import { TIMELINE_ERAS, TIMELINE_HINGES } from '../../data/curriculumData';
import { TimelineEra, TimelineHinge, CausalityStep } from '../../types/curriculum';
import {
  ArrowRight,
  ChevronDown,
  Sparkles,
  AlertTriangle,
  Zap,
  BookOpen,
  Info,
  CheckCircle2,
  X,
  Play,
  RotateCcw
} from 'lucide-react';

interface Topic03MasterTimelineProps {
  activeStep: number;
}

export const Topic03MasterTimeline: React.FC<Topic03MasterTimelineProps> = ({ activeStep }) => {
  // Currently selected era (default: 'industrial' or 'commercial')
  const [selectedEraId, setSelectedEraId] = useState<string>('industrial');
  // Currently selected hinge for deep historical explanation modal/banner
  const [selectedHingeId, setSelectedHingeId] = useState<string | null>(null);
  // Current concept map step within the selected era (1 to 4: 1~3 concepts, 4 transition area)
  const [revealedNodeStep, setRevealedNodeStep] = useState<number>(4);

  const currentEra = TIMELINE_ERAS.find((e) => e.id === selectedEraId) || TIMELINE_ERAS[0];
  const currentHinge = selectedHingeId ? TIMELINE_HINGES.find((h) => h.id === selectedHingeId) : null;

  // Sync with teacher's bottom bar activeStep if teacher clicks bottom bar
  useEffect(() => {
    if (activeStep === 1) {
      setRevealedNodeStep(1);
    } else if (activeStep === 2) {
      setRevealedNodeStep(2);
    } else {
      setRevealedNodeStep(4);
    }
  }, [activeStep]);

  const handleSelectEra = (eraId: string) => {
    setSelectedEraId(eraId);
    setSelectedHingeId(null);
    setRevealedNodeStep(4);
  };

  const handleSelectHinge = (hingeId: string) => {
    setSelectedHingeId(hingeId);
  };

  const handleStepForward = () => {
    if (revealedNodeStep < 4) {
      setRevealedNodeStep((prev) => prev + 1);
    }
  };

  const handleStepReset = () => {
    setRevealedNodeStep(1);
  };

  const handleRevealAll = () => {
    setRevealedNodeStep(4);
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 md:p-6 max-w-[1520px] mx-auto select-none">
      {/* 1. Header & Instructional Context */}
      <div className="shrink-0 mb-3">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-sm font-bold text-teal-800 tracking-wider">주제 03 · 거시 조망 도식</span>
          <span className="text-[#0F1E36]/30">·</span>
          <span className="text-sm text-[#0F1E36]/70">고등학교 통합사회2 자본주의 역사적 전개</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0F1E36] tracking-tight">
            자본주의 역사적 전개와 3대 대전환
          </h2>
          <div className="flex items-center gap-2 text-xs lg:text-sm text-[#0F1E36]/70 bg-white/90 px-3.5 py-1.5 rounded-lg border border-[#0F1E36]/10 shadow-2xs">
            <span className="font-semibold text-teal-900">수업 안내:</span>
            <span>시대를 클릭하면 하단에 실제 역사적 인과관계 도식이 나타납니다</span>
          </div>
        </div>
      </div>

      {/* 2. Top Macro Timeline (16:9 optimized, NO horizontal scroll, fits all 4 stages cleanly) */}
      <div className="shrink-0 bg-white rounded-xl border border-[#0F1E36]/12 p-3 lg:p-4 shadow-xs mb-3">
        <div className="grid grid-cols-1 md:grid-cols-7 items-center gap-1.5 lg:gap-2">
          {TIMELINE_ERAS.map((era, index) => {
            const isSelected = selectedEraId === era.id && !selectedHingeId;
            const hinge = TIMELINE_HINGES[index]; // hinge after era 0, 1, 2

            return (
              <React.Fragment key={era.id}>
                {/* Era Block (span 1 col or flex) */}
                <div className="md:col-span-1 flex flex-col h-full">
                  <button
                    onClick={() => handleSelectEra(era.id)}
                    className={`w-full h-full p-3 rounded-lg text-left transition-all cursor-pointer border flex flex-col justify-between ${
                      isSelected
                        ? 'bg-teal-900 text-white border-teal-900 shadow-md ring-2 ring-teal-600/40 scale-[1.02]'
                        : 'bg-[#FAF8F3] hover:bg-white text-[#0F1E36] border-[#0F1E36]/10 hover:border-teal-700/40'
                    }`}
                  >
                    {/* Top: Stage Tag & Period */}
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span
                          className={`text-xs font-mono font-bold ${
                            isSelected ? 'text-teal-200' : 'text-teal-800'
                          }`}
                        >
                          0{index + 1}단계
                        </span>
                        <span
                          className={`text-[11px] font-mono font-medium ${
                            isSelected ? 'text-teal-100/80' : 'text-[#0F1E36]/60'
                          }`}
                        >
                          {era.period}
                        </span>
                      </div>

                      {/* Era Name (Large, crisp, minimum 20px) */}
                      <div
                        className={`text-lg lg:text-xl font-extrabold tracking-tight leading-tight ${
                          isSelected ? 'text-white' : 'text-[#0F1E36]'
                        }`}
                      >
                        {era.name}
                      </div>

                      {/* Key 2 Features Only */}
                      <ul className="mt-2 space-y-1 text-xs">
                        <li className="flex items-start gap-1 leading-snug">
                          <span className={isSelected ? 'text-teal-300' : 'text-teal-700'}>•</span>
                          <span className={isSelected ? 'text-teal-50' : 'text-[#0F1E36]/80'}>
                            {era.keyFeatures[0]}
                          </span>
                        </li>
                        <li className="flex items-start gap-1 leading-snug">
                          <span className={isSelected ? 'text-teal-300' : 'text-teal-700'}>•</span>
                          <span className={isSelected ? 'text-teal-50' : 'text-[#0F1E36]/80'}>
                            {era.keyFeatures[1]}
                          </span>
                        </li>
                      </ul>
                    </div>

                    {/* Qualitative State Role (NO arbitrary percentages!) */}
                    <div
                      className={`mt-2.5 pt-2 border-t text-[11px] font-bold ${
                        isSelected
                          ? 'border-white/15 text-teal-200'
                          : 'border-black/5 text-amber-900 bg-amber-50/70 p-1 rounded'
                      }`}
                    >
                      {era.govRoleQualitative}
                    </div>
                  </button>
                </div>

                {/* Transition Hinge Connector (between eras) */}
                {hinge && (
                  <div className="md:col-span-1 flex flex-col items-center justify-center p-1">
                    {/* Flow Arrow */}
                    <div className="flex items-center justify-center w-full my-0.5">
                      <svg className="w-full h-4 max-w-[48px]" viewBox="0 0 48 16" fill="none">
                        <line
                          x1="2"
                          y1="8"
                          x2="40"
                          y2="8"
                          stroke="#0F1E36"
                          strokeWidth="2"
                          strokeDasharray="3 2"
                          strokeOpacity="0.3"
                        />
                        <polygon points="38,4 46,8 38,12" fill="#0D9488" />
                      </svg>
                    </div>

                    {/* Clickable Transition Hinge Button */}
                    <button
                      onClick={() => handleSelectHinge(hinge.id)}
                      className={`w-full py-1.5 px-1 rounded-md text-center transition-all cursor-pointer border shadow-2xs ${
                        selectedHingeId === hinge.id
                          ? 'bg-amber-600 text-white border-amber-600 ring-2 ring-amber-400/50'
                          : 'bg-white hover:bg-amber-50 text-amber-950 border-amber-300'
                      }`}
                      title={`${hinge.event} 상세 전환 원인 보기`}
                    >
                      <div className="text-[10px] font-extrabold text-amber-600 block">
                        ⚡ 전환 원인
                      </div>
                      <div className="text-xs font-bold leading-tight truncate">
                        {hinge.event.split(' ')[0]}
                      </div>
                      <div className="text-[9px] font-mono text-[#0F1E36]/50">
                        {hinge.year.split(' ')[0]}
                      </div>
                    </button>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* 3. Central & Lower Stage: SVG-Based Causality Flow Diagram or Hinge Modal */}
      <div className="flex-1 bg-white rounded-xl border border-[#0F1E36]/12 p-3 lg:p-5 shadow-xs flex flex-col justify-between relative overflow-hidden">
        {selectedHingeId && currentHinge ? (
          /* ========================================================
             Pivotal Historical Shock (전환 원인) Detailed Showcase
             [원인] ──(SVG Arrow)──▶ [위기] ──(SVG Arrow)──▶ [대응]
             ======================================================== */
          <div className="h-full flex flex-col justify-between animate-in fade-in duration-200">
            {/* Header */}
            <div className="flex items-center justify-between pb-2 border-b border-amber-200/80">
              <div className="flex items-center gap-2.5">
                <span className="px-2.5 py-0.5 text-xs font-bold bg-amber-600 text-white rounded">
                  역사적 대전환 분석
                </span>
                <h3 className="text-xl lg:text-2xl font-extrabold text-[#0F1E36]">
                  {currentHinge.event} ({currentHinge.year})
                </h3>
              </div>
              <button
                onClick={() => setSelectedHingeId(null)}
                className="flex items-center gap-1 px-3 py-1 text-xs font-bold text-teal-800 bg-teal-50 hover:bg-teal-100 rounded-md border border-teal-200 transition-colors cursor-pointer"
              >
                <span>시대별 인과 도식으로 복귀</span>
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Horizontal Causality Chain: [원인] ──▶ [위기] ──▶ [대응] */}
            <div className="flex flex-col md:flex-row items-stretch justify-between gap-2 lg:gap-3 my-2 lg:my-3 flex-1 w-full">
              {/* Card 1: 원인 */}
              <div className="flex-1 w-full p-3.5 lg:p-4 bg-[#FAF8F3] rounded-xl border border-amber-300/80 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-mono font-bold text-amber-900 bg-amber-100 px-2 py-0.5 rounded border border-amber-200">
                      STEP 01
                    </span>
                    <span className="text-xs font-bold text-amber-800">
                      원인 (Trigger)
                    </span>
                  </div>
                  <h4 className="text-base lg:text-lg font-extrabold text-[#0F1E36] mb-1.5 leading-snug">
                    {currentHinge.causeTitle}
                  </h4>
                  <p className="text-xs lg:text-sm text-[#0F1E36]/90 leading-relaxed font-normal">
                    {currentHinge.triggerCause}
                  </p>
                </div>
                <div className="mt-2.5 pt-2 border-t border-amber-200/60 text-[11px] font-medium text-amber-900">
                  기존 경제 구조를 뒤흔든 배경과 충격
                </div>
              </div>

              {/* Connecting SVG Arrow 1 */}
              <div className="shrink-0 flex items-center justify-center p-0.5 text-teal-700">
                <svg className="w-6 h-6 md:w-8 md:h-8 rotate-90 md:rotate-0" viewBox="0 0 32 32" fill="none">
                  <path d="M4 16h20M16 8l8 8-8 8" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Card 2: 위기 */}
              <div className="flex-1 w-full p-3.5 lg:p-4 bg-red-50/70 rounded-xl border border-red-300 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-mono font-bold text-red-900 bg-red-100 px-2 py-0.5 rounded border border-red-200">
                      STEP 02
                    </span>
                    <span className="text-xs font-bold text-red-800">
                      위기 (Crisis & Shock)
                    </span>
                  </div>
                  <h4 className="text-base lg:text-lg font-extrabold text-red-950 mb-1.5 leading-snug">
                    {currentHinge.crisisTitle}
                  </h4>
                  <p className="text-xs lg:text-sm text-red-950/90 leading-relaxed font-normal">
                    {currentHinge.crisisOrShift}
                  </p>
                </div>
                <div className="mt-2.5 pt-2 border-t border-red-200 text-[11px] font-semibold text-red-900">
                  기존 시장 자율 조정 기능의 한계와 실물 침체
                </div>
              </div>

              {/* Connecting SVG Arrow 2 */}
              <div className="shrink-0 flex items-center justify-center p-0.5 text-teal-700">
                <svg className="w-6 h-6 md:w-8 md:h-8 rotate-90 md:rotate-0" viewBox="0 0 32 32" fill="none">
                  <path d="M4 16h20M16 8l8 8-8 8" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Card 3: 대응 */}
              <div className="flex-1 w-full p-3.5 lg:p-4 bg-teal-50/80 rounded-xl border border-teal-300 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-mono font-bold text-teal-900 bg-teal-100 px-2 py-0.5 rounded border border-teal-200">
                      STEP 03
                    </span>
                    <span className="text-xs font-bold text-teal-800">
                      대응 (Response & Policy)
                    </span>
                  </div>
                  <h4 className="text-base lg:text-lg font-extrabold text-teal-950 mb-1.5 leading-snug">
                    {currentHinge.responseTitle}
                  </h4>
                  <p className="text-xs lg:text-sm text-teal-950/90 leading-relaxed font-normal">
                    {currentHinge.lesson}
                  </p>
                </div>
                <div className="mt-2.5 pt-2 border-t border-teal-200 text-[11px] font-semibold text-teal-900">
                  정부와 시장의 역할 재조정 및 새로운 경제 사조
                </div>
              </div>
            </div>

            {/* Bottom Insight */}
            <div className="p-2.5 lg:p-3 bg-amber-50 rounded-lg text-xs lg:text-sm text-amber-950 flex items-center justify-between">
              <span>
                💡 <strong>교과서 핵심 정리:</strong> 역사적 전환은 단순한 우연이 아니며, 경제 위기에 직면했을 때 <strong>원인 → 위기 → 정책적 대응</strong>을 거쳐 시장과 정부의 균형을 재조정해 온 과정입니다.
              </span>
              <button
                onClick={() => setSelectedHingeId(null)}
                className="font-bold text-teal-800 hover:underline cursor-pointer shrink-0 ml-3 text-xs"
              >
                닫기 및 도식 보기
              </button>
            </div>
          </div>
        ) : (
          /* ========================================================
             Era Visual Concept Map (시각적 개념도 중심: 3대 핵심 개념 + 1대 역사적 대전환)
             - 텍스트 대폭 축소, 카드 내 문단 금지
             - 제목 32px+, 핵심 개념 26px 내외, 1줄 설명 20~22px 내외
             - 동시대 상호작용 개념과 별도 역사적 대전환 영역 시각적 구분
             ======================================================== */
          <div className="h-full flex flex-col justify-between">
            {/* Top Sub-Header for Selected Era */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2.5 border-b border-[#0F1E36]/10 mb-2 gap-2">
              <div className="flex items-center gap-3">
                <h3 className="text-2xl lg:text-3xl font-black text-[#0F1E36] tracking-tight">
                  {currentEra.name}
                </h3>
                <span className="text-xs font-mono text-[#0F1E36]/50 hidden sm:inline">
                  {currentEra.period}
                </span>
                <span className="text-xs lg:text-sm font-bold text-teal-900 bg-teal-100/70 px-2.5 py-0.5 rounded border border-teal-200">
                  {currentEra.govRoleQualitative}
                </span>
                <span className="text-xs lg:text-sm text-[#0F1E36]/70 hidden md:inline">
                  대표 사상: <strong>{currentEra.theorists}</strong>
                </span>
              </div>

              {/* Step Sequence Controller */}
              <div className="flex items-center gap-1.5 self-end sm:self-auto">
                <span className="text-xs font-semibold text-[#0F1E36]/70 mr-1 hidden sm:inline">
                  개념도 순차 공개:
                </span>
                {[1, 2, 3, 4].map((stepNum) => (
                  <button
                    key={stepNum}
                    onClick={() => setRevealedNodeStep(stepNum)}
                    className={`px-2.5 py-1 text-xs font-bold rounded transition-all cursor-pointer ${
                      revealedNodeStep === stepNum
                        ? 'bg-teal-900 text-white shadow-xs'
                        : revealedNodeStep > stepNum
                        ? 'bg-teal-100 text-teal-950'
                        : 'bg-slate-100 text-[#0F1E36]/50 hover:text-[#0F1E36]'
                    }`}
                  >
                    {stepNum === 4 ? '⚡ 전환' : `개념 0${stepNum}`}
                  </button>
                ))}
                <button
                  onClick={handleRevealAll}
                  className="px-2 py-1 text-xs font-semibold text-[#0F1E36]/80 hover:text-[#0F1E36] bg-slate-100 hover:bg-slate-200 rounded transition-colors cursor-pointer ml-1"
                  title="모든 개념도 한 번에 표시"
                >
                  전체 표시
                </button>
                <button
                  onClick={handleStepReset}
                  className="px-1.5 py-1 text-xs text-[#0F1E36]/60 hover:text-[#0F1E36] bg-slate-100 hover:bg-slate-200 rounded transition-colors cursor-pointer"
                  title="1단계로 리셋"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Central Concept Canvas: 3 Core Interacting Concepts + 1 Historical Shift Area */}
            <div className="flex-1 my-2 flex flex-col justify-center">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-4 items-stretch">
                {/* 1. Left/Center Area (8 cols): 3 Core Interacting Concepts */}
                <div className="lg:col-span-8 bg-[#FAF8F3] rounded-xl border border-[#0F1E36]/12 p-3 lg:p-4 flex flex-col justify-between shadow-2xs">
                  <div className="flex items-center justify-between pb-1.5 border-b border-[#0F1E36]/8 mb-2">
                    <span className="text-xs font-bold text-teal-900 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-teal-700" />
                      <span>{currentEra.name}의 3대 핵심 개념 (동시대 상호작용)</span>
                    </span>
                    <span className="text-[11px] text-[#0F1E36]/50 hidden sm:inline">
                      * 순차적 사건이 아닌, 동시대에 맞물려 작동한 핵심 요소
                    </span>
                  </div>

                  {/* 3 Concepts Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 my-1">
                    {currentEra.concepts.map((concept, idx) => {
                      const isRevealed = revealedNodeStep >= concept.order;
                      const isFocus = revealedNodeStep === concept.order;

                      return (
                        <div
                          key={concept.id}
                          onClick={() => setRevealedNodeStep(concept.order)}
                          className={`p-3.5 lg:p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                            !isRevealed
                              ? 'opacity-25 bg-white/40 border-dashed border-[#0F1E36]/15'
                              : isFocus
                              ? 'bg-white border-teal-700 shadow-md ring-2 ring-teal-600/30 scale-[1.02]'
                              : 'bg-white hover:bg-[#FDFBF7] border-[#0F1E36]/12 shadow-2xs'
                          }`}
                        >
                          <div>
                            {/* Step Badge & Category Tag */}
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-xs font-mono font-bold text-teal-800">
                                0{concept.order}
                              </span>
                              <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-teal-50 text-teal-900 border border-teal-200">
                                {concept.badge}
                              </span>
                            </div>

                            {/* Main Keyword: 24~26px prominent bold font */}
                            <h4 className="text-xl lg:text-2xl font-black text-[#0F1E36] leading-snug tracking-tight mb-2">
                              {concept.keyword}
                            </h4>
                          </div>

                          {/* 1-Line Short Description: 18~20px font, absolutely NO paragraph */}
                          <div className="pt-2 border-t border-[#0F1E36]/6">
                            <p className="text-sm lg:text-base font-semibold text-[#0F1E36]/80 leading-normal">
                              {concept.shortDesc}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Mutual Interaction Guide Bar */}
                  <div className="mt-2 pt-1.5 border-t border-[#0F1E36]/8 flex items-center justify-center gap-2 text-xs text-[#0F1E36]/70">
                    <span className="font-bold text-teal-900">상호 연결:</span>
                    <span>
                      {currentEra.id === 'commercial' &&
                        '국가의 중상주의적 보호 ↔ 원거리 무역의 이윤 추구가 결합되어 막대한 자본 축적으로 이어짐'}
                      {currentEra.id === 'industrial' &&
                        '기계 대량 생산과 자유 경쟁이 폭발적 성장을 낳았으나, 구조적 모순이 함께 누적됨'}
                      {currentEra.id === 'modified' &&
                        '정부의 적극적 재정 지출과 사회보장이 맞물려 일자리와 유효수요를 지탱함'}
                      {currentEra.id === 'neoliberal' &&
                        '규제 완화와 시장 원리가 글로벌 무역을 확장시켰으나, 양극화와 고용 불안이 병존함'}
                    </span>
                  </div>
                </div>

                {/* 2. Right Area (4 cols): Separate Distinguished Transition Area (별도의 강조 영역) */}
                <div
                  onClick={() => setRevealedNodeStep(4)}
                  className={`lg:col-span-4 rounded-xl border p-4 lg:p-5 flex flex-col justify-between transition-all duration-200 cursor-pointer relative overflow-hidden shadow-xs ${
                    revealedNodeStep < 4
                      ? 'opacity-35 bg-white border-amber-200 border-dashed'
                      : 'bg-gradient-to-br from-amber-50/90 via-white to-amber-50/60 border-amber-400 ring-2 ring-amber-400/40'
                  }`}
                >
                  <div>
                    {/* Top Tag: Historical Transition */}
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="text-xs font-bold px-2 py-0.5 rounded bg-amber-600 text-white flex items-center gap-1 shadow-2xs">
                        <Zap className="w-3 h-3" />
                        <span>{currentEra.transitionArea.badge}</span>
                      </span>
                      <span className="text-[11px] font-mono text-amber-900 font-bold">
                        시대적 도약의 계기
                      </span>
                    </div>

                    {/* Transition Main Keyword: 26px bold font */}
                    <h4 className="text-2xl lg:text-3xl font-black text-amber-950 leading-tight mb-2 tracking-tight">
                      {currentEra.transitionArea.keyword}
                    </h4>

                    {/* 1-Line Sub Description: 20~22px font */}
                    <p className="text-sm lg:text-base font-semibold text-[#0F1E36]/85 mb-3 leading-snug">
                      • {currentEra.transitionArea.subDesc}
                    </p>
                  </div>

                  {/* Outcome Flow Badge */}
                  <div className="mt-3 p-3 bg-white/90 rounded-lg border border-amber-300 shadow-2xs">
                    <span className="text-[11px] font-bold text-amber-800 block mb-0.5">
                      다음 시대로의 전개 결과:
                    </span>
                    <div className="text-base lg:text-lg font-black text-teal-900 flex items-center gap-1.5">
                      <span>──▶</span>
                      <span>{currentEra.transitionArea.outcome}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Pedagogical Bar */}
            <div className="mt-2 p-2.5 lg:p-3 bg-[#FAF8F3] rounded-lg border border-[#0F1E36]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs lg:text-sm">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-teal-800 shrink-0" />
                <span className="text-[#0F1E36]">
                  <strong>수업 지도 요령:</strong> 화면의 3대 핵심 개념과 전환 영역을 학생들에게 제시한 후, 상단 우측 <strong>[교사용 수업 노트]</strong>를 열어 구체적 배경과 발문 대본을 활용하세요.
                </span>
              </div>
              <div className="shrink-0 font-bold text-teal-800">
                개념도 {revealedNodeStep} / 4 공개
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
