import React, { useState, useEffect } from 'react';
import { TIMELINE_ERAS, TIMELINE_HINGES } from '../../data/curriculumData';
import {
  ArrowRight,
  ArrowDown,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Eye,
  Sparkles,
  BookOpen,
  Zap,
  X,
  HelpCircle,
  Scale,
  Flame,
  Factory,
  Ship,
  TrendingDown,
  AlertTriangle,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

interface Topic03MasterTimelineProps {
  activeStep: number;
}

// Structured pedagogical sequence per era
interface EraPedagogyData {
  keyQuestion: string;
  questionContext: string;
  steps: {
    order: number;
    badge: string;
    keyword: string;
    summary: string;
    detail: string;
  }[];
  transitionFlow: {
    title: string;
    badge: string;
    explanation: string;
  };
}

const ERA_PEDAGOGY: Record<string, EraPedagogyData> = {
  commercial: {
    keyQuestion: '산업 혁명은 자본주의를 어떻게 변화시켰을까?',
    questionContext: '신항로 개척으로 무역 자본을 축적한 유럽 사회는 왜 공장제 기계 생산이라는 새로운 생산 방식으로 도약하게 되었을까?',
    steps: [
      {
        order: 1,
        badge: '① 시대적 배경',
        keyword: '상업·무역 확대와 자본 축적',
        summary: '신항로 개척과 동인도회사 독점 무역을 통해 유럽에 거대한 화폐 자본 축적',
        detail: '절대왕정의 중상주의적 보호와 무역 독점권 아래 특권 상인들이 막대한 시세 차익을 남기며, 훗날 기계와 공장을 세울 종잣돈(자본)을 마련했습니다.'
      },
      {
        order: 2,
        badge: '② 주요 경제적 변화',
        keyword: '산업 혁명과 기계·공장제 생산 확대',
        summary: '증기기관 발명으로 가내 수공업에서 공장제 기계 대량 생산으로 생산 방식 대전환',
        detail: '제임스 와트의 증기기관이 지치지 않는 기계 동력을 공급하면서, 수백 명의 노동자가 분업하여 면직물 등 생필품을 폭발적인 속도로 대량 생산하게 되었습니다.'
      },
      {
        order: 3,
        badge: '③ 관련 경제사상·정책',
        keyword: '산업 자본주의 발전 및 자유방임주의 강조',
        summary: '절대왕정의 국가 개입을 비판하고 시장 자율(보이지 않는 손)과 자유 경쟁 중시',
        detail: '애덤 스미스는 『국부론』을 통해 국가가 무역을 통제하던 중상주의를 비판하고, 개인이 자유롭게 이윤을 추구하고 경쟁할 때 사회 전체의 부가 늘어난다고 역설했습니다.'
      }
    ],
    transitionFlow: {
      title: '상업 자본주의 → 산업 자본주의 전환 핵심 도식',
      badge: '생산 방식의 혁명적 전환',
      explanation: '상업 자본주의 시기 축적된 무역 자본이 산업 혁명의 기술 혁신과 결합하여 공장제 대량 생산 체제인 산업 자본주의를 꽃피웠습니다.'
    }
  },
  industrial: {
    keyQuestion: '정부가 시장에 적극 개입하게 된 이유는 무엇일까?',
    questionContext: '자유방임주의 아래 유례없는 물질적 풍요를 일군 시장 경제는 왜 정부의 적극적인 경기 안정 역할을 절실히 요구하게 되었을까?',
    steps: [
      {
        order: 1,
        badge: '① 시대적 배경과 한계',
        keyword: '산업 자본주의의 성장과 한계',
        summary: '생산력 폭발 속 빈부 격차, 열악한 노동 환경, 독과점, 주기적 과잉 생산 누적',
        detail: '자유 경쟁의 결과 거대 독점 기업이 출현하여 가격을 조작하고, 장시간 저임금 노동과 아동 노동 등 시장 자율만으로는 해결하기 어려운 사회적 모순이 심화되었습니다.'
      },
      {
        order: 2,
        badge: '② 주요 경제적 위기',
        keyword: '1929년 대공황으로 생산·고용 급격히 위축',
        summary: '주가 폭락, 금융 불안, 소비 위축 등 복합 요인으로 1933년 미국 실업률 약 25% 급증',
        detail: '1929년 10월 뉴욕 증시 폭락을 시작으로 연쇄 은행 파산과 공장 폐업이 이어지며, 4년 넘게 생산량이 반토막 나고 노동자 4명 중 1명이 실직하는 전대미문의 위기에 직면했습니다.'
      },
      {
        order: 3,
        badge: '③ 관련 경제사상·정책',
        keyword: '경기 침체 대응을 위한 정부 개입의 필요성 확대',
        summary: '시장의 자동 조절 기능 신뢰 약화 및 케인스의 유효수요 창출 이론 대두',
        detail: '케인스는 불황기에는 시장이 스스로 회복하기를 기다릴 수 없으며, 정부가 적극적인 재정 지출(공공사업)로 일자리를 만들고 구매력(유효수요)을 주입해야 한다고 주장했습니다.'
      }
    ],
    transitionFlow: {
      title: '산업 자본주의 → 수정 자본주의 전환 핵심 도식',
      badge: '시장 실패에 대한 정책적 대응',
      explanation: '산업 자본주의의 구조적 모순과 1929년 대공황의 충격으로 인해, 시장 방임에서 벗어나 정부의 적극적인 경기 안정 역할이 제도화되었습니다.'
    }
  },
  modified: {
    keyQuestion: '왜 다시 시장의 자율성이 강조되었을까?',
    questionContext: '대공황을 극복하고 복지 국가를 일군 정부의 적극적 개입 정책은 왜 1970년대에 이르러 한계에 부딪히며 비판받게 되었을까?',
    steps: [
      {
        order: 1,
        badge: '① 시대적 배경',
        keyword: '정부의 경기 안정 정책과 유효수요 관리',
        summary: '루스벨트 뉴딜 정책, 대규모 공공사업, 사회보장제도 도입으로 복지 국가 기틀 마련',
        detail: '정부가 댐 건설 등 공공사업으로 실업자를 구제하고 최저임금과 사회보험으로 서민 구매력을 지탱하며, 1950~60년대 서구 선진국의 안정적 경제 성장을 이끌었습니다.'
      },
      {
        order: 2,
        badge: '② 주요 경제적 위기',
        keyword: '1970년대 석유 파동과 스태그플레이션',
        summary: '중동 전쟁으로 원유 가격이 4배 급등하며 물가 상승과 경기 침체·실업 동시 발발',
        detail: '원자재 가격 폭등이라는 외부 공급 충격으로 모든 공장의 생산 비용이 치솟으면서, 물가가 치솟는데도 경기는 얼어붙고 실업이 늘어나는 스태그플레이션이 발생했습니다.'
      },
      {
        order: 3,
        badge: '③ 관련 경제사상·정책',
        keyword: '기존 정책에 대한 비판과 시장 기능의 재강조',
        summary: '기존 수요 관리 정책의 딜레마 노출 및 정부 실패 비판, 시장 원리 복원론 대두',
        detail: '정부가 돈을 풀면 물가가 폭등하고 긴축하면 실업이 폭등하는 진퇴양난 속에서, 하이에크와 프리드먼을 필두로 정부 개입의 비효율을 비판하고 규제 완화를 요구하는 사조가 대두되었습니다.'
      }
    ],
    transitionFlow: {
      title: '수정 자본주의 → 신자유주의 전환 핵심 도식 (두 갈래 분기)',
      badge: '공급 충격과 정부 실패 비판',
      explanation: '원유 가격 폭등이 물가 상승과 경기 침체를 동시에 촉발하자 기존 정부 개입 정책이 무력해지며, 시장의 자율성과 효율성을 복원하려는 신자유주의로 전환되었습니다.'
    }
  },
  neoliberal: {
    keyQuestion: '현대 자본주의는 시장과 정부의 균형을 어떻게 찾아가야 할까?',
    questionContext: '작은 정부와 시장 경쟁을 앞세워 세계화를 이끈 신자유주의는 오늘날 어떤 성과와 과제를 안고 있을까?',
    steps: [
      {
        order: 1,
        badge: '① 시대적 배경과 정책',
        keyword: '시장 기능 강조와 과감한 규제 완화',
        summary: '공기업 민영화, 노동 시장 유연화, 자유 무역 확대로 민간 경제 활력 복원',
        detail: '대처리즘(영국)과 레이거노믹스(미국)를 시작으로 국가의 불필요한 시장 개입을 걷어내고, 민간 기업의 창의성과 시장 경쟁을 촉진하여 경제 효율성을 높였습니다.'
      },
      {
        order: 2,
        badge: '② 기대 효과와 한계',
        keyword: '경제 효율성 제고 vs 소득 불평등·고용 불안정 심화',
        summary: '글로벌 IT 혁신과 대중 소비재 풍요 달성 vs 빈익빈 부익부와 사회안전망 약화',
        detail: '글로벌 무역 확장과 첨단 벤처 기술 혁신을 촉진했으나, 비정규직 확산과 자산 격차 심화라는 새로운 사회적 과제를 낳았습니다.'
      },
      {
        order: 3,
        badge: '③ 현대 자본주의의 과제',
        keyword: '기후 위기와 AI 시대, 시장과 정부의 조화',
        summary: '시장의 역동적 혁신 동력과 정부의 공공성·사회안전망의 상호 보완 필요성 대두',
        detail: '기후 변화 대응, 탄소 중립 에너지 전환, AI 기술 혁신에 따른 일자리 변화 속에서, 시장의 활력과 정부의 든든한 사회안전망이 조화롭게 공존해야 합니다.'
      }
    ],
    transitionFlow: {
      title: '현대 자본주의의 과제: 시장과 정부의 조화로운 공존',
      badge: '새로운 균형의 모색',
      explanation: '자본주의는 고정된 완성품이 아니라, 시장의 자율적 활력과 정부의 공공성 보호가 서로를 보완하며 진화해 가는 열린 체제입니다.'
    }
  }
};

export const Topic03MasterTimeline: React.FC<Topic03MasterTimelineProps> = ({ activeStep }) => {
  // Currently selected era (default: 'commercial')
  const [selectedEraId, setSelectedEraId] = useState<string>('commercial');
  // Currently selected hinge for deep historical explanation modal/banner
  const [selectedHingeId, setSelectedHingeId] = useState<string | null>(null);
  // Current step: 0 = Key Question, 1 = Step 1, 2 = Step 2, 3 = Step 3, 4 = Transition Diagram, 5 = All
  const [revealedStep, setRevealedStep] = useState<number>(0);

  const currentEra = TIMELINE_ERAS.find((e) => e.id === selectedEraId) || TIMELINE_ERAS[0];
  const currentPedagogy = ERA_PEDAGOGY[selectedEraId] || ERA_PEDAGOGY.commercial;
  const currentHinge = selectedHingeId ? TIMELINE_HINGES.find((h) => h.id === selectedHingeId) : null;

  // Sync with bottom bar if teacher clicks bottom bar steps
  useEffect(() => {
    if (activeStep === 1) {
      setRevealedStep(1);
    } else if (activeStep === 2) {
      setRevealedStep(2);
    } else if (activeStep >= 3) {
      setRevealedStep(3);
    }
  }, [activeStep]);

  const handleSelectEra = (eraId: string) => {
    setSelectedEraId(eraId);
    setSelectedHingeId(null);
    setRevealedStep(0); // Start with Key Question as instructed!
  };

  const handleSelectHinge = (hingeId: string) => {
    setSelectedHingeId(hingeId);
  };

  const handleCloseHinge = () => {
    setSelectedHingeId(null);
  };

  const handleNextStep = () => {
    if (revealedStep < 4) {
      setRevealedStep((prev) => prev + 1);
    } else {
      setRevealedStep(5); // all
    }
  };

  const handlePrevStep = () => {
    if (revealedStep > 0) {
      setRevealedStep((prev) => prev - 1);
    }
  };

  const handleResetToQuestion = () => {
    setRevealedStep(0);
  };

  const handleRevealAll = () => {
    setRevealedStep(5); // Show full view
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-3 md:p-5 max-w-[1520px] mx-auto select-none">
      {/* 1. Header & Instructional Context */}
      <div className="shrink-0 mb-2">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs lg:text-sm font-bold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded border border-teal-200">
            주제 03 · 정규 수업용 거시 조망 도식
          </span>
          <span className="text-[#0F1E36]/30">·</span>
          <span className="text-xs lg:text-sm font-semibold text-[#0F1E36]/70">
            고등학교 1학년 통합사회2 자본주의 역사적 전개
          </span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <h2 className="text-2xl lg:text-3xl font-black text-[#0F1E36] tracking-tight">
            자본주의 역사적 전개와 3대 대전환
          </h2>
          <div className="flex items-center gap-2 text-xs lg:text-sm text-[#0F1E36]/80 bg-white px-3.5 py-1.5 rounded-lg border border-[#0F1E36]/12 shadow-2xs">
            <span className="font-black text-teal-900">수업 안내:</span>
            <span>상단 시대를 선택하고, 하단에서 질문부터 인과관계를 단계적으로 공개하세요</span>
          </div>
        </div>
      </div>

      {/* 2. Top Macro Timeline (16:9 optimized, concise keywords, calm unselected eras) */}
      <div className="shrink-0 bg-white rounded-xl border border-[#0F1E36]/12 p-3 lg:p-3.5 shadow-xs mb-2.5">
        <div className="grid grid-cols-1 md:grid-cols-7 items-center gap-1.5 lg:gap-2">
          {TIMELINE_ERAS.map((era, index) => {
            const isSelected = selectedEraId === era.id && !selectedHingeId;
            const hinge = TIMELINE_HINGES[index]; // hinge after era 0, 1, 2

            // Concise 1~2 keywords
            const conciseKeywords = [
              era.keyFeatures[0].split('와')[0].trim(),
              era.keyFeatures[1].split('과')[0].trim()
            ];

            return (
              <React.Fragment key={era.id}>
                {/* Era Block */}
                <div className="md:col-span-1 flex flex-col h-full">
                  <button
                    onClick={() => handleSelectEra(era.id)}
                    className={`w-full h-full p-2.5 lg:p-3 rounded-xl text-left transition-all cursor-pointer border flex flex-col justify-between ${
                      isSelected
                        ? 'bg-teal-900 text-white border-teal-900 shadow-md ring-2 ring-teal-600/40 scale-[1.02]'
                        : 'bg-[#FAF8F3]/70 hover:bg-white text-[#0F1E36] border-[#0F1E36]/10 opacity-75 hover:opacity-100 hover:border-teal-700/30'
                    }`}
                  >
                    <div>
                      {/* Top: Stage Tag & Period */}
                      <div className="flex items-center justify-between mb-1">
                        <span
                          className={`text-xs font-mono font-bold ${
                            isSelected ? 'text-teal-200' : 'text-teal-800'
                          }`}
                        >
                          0{index + 1}단계
                        </span>
                        <span
                          className={`text-[11px] font-mono ${
                            isSelected ? 'text-teal-100/90' : 'text-[#0F1E36]/50'
                          }`}
                        >
                          {era.period}
                        </span>
                      </div>

                      {/* Era Name */}
                      <div
                        className={`text-base lg:text-lg font-black tracking-tight leading-tight ${
                          isSelected ? 'text-white' : 'text-[#0F1E36]'
                        }`}
                      >
                        {era.name}
                      </div>

                      {/* Concise 1~2 Key terms */}
                      <div className="mt-1.5 flex flex-wrap gap-1 text-[11px]">
                        <span
                          className={`px-1.5 py-0.5 rounded font-medium ${
                            isSelected
                              ? 'bg-teal-800 text-teal-100'
                              : 'bg-white/80 text-[#0F1E36]/70 border border-black/5'
                          }`}
                        >
                          {conciseKeywords[0]}
                        </span>
                        <span
                          className={`px-1.5 py-0.5 rounded font-medium ${
                            isSelected
                              ? 'bg-teal-800 text-teal-100'
                              : 'bg-white/80 text-[#0F1E36]/70 border border-black/5'
                          }`}
                        >
                          {conciseKeywords[1]}
                        </span>
                      </div>
                    </div>

                    {/* Qualitative State Role Tag */}
                    <div
                      className={`mt-2 pt-1.5 border-t text-[11px] font-bold truncate ${
                        isSelected
                          ? 'border-white/15 text-teal-200'
                          : 'border-black/5 text-amber-900'
                      }`}
                    >
                      {era.govRoleQualitative}
                    </div>
                  </button>
                </div>

                {/* Transition Hinge Connector (between eras) */}
                {hinge && (
                  <div className="md:col-span-1 flex flex-col items-center justify-center p-0.5">
                    {/* Small Flow Arrow */}
                    <div className="hidden md:flex items-center justify-center w-full my-0.5 text-teal-700">
                      <svg className="w-full h-3 max-w-[40px]" viewBox="0 0 40 12" fill="none">
                        <line x1="2" y1="6" x2="32" y2="6" stroke="currentColor" strokeWidth="2" strokeDasharray="3 2" />
                        <polygon points="30,2 38,6 30,10" fill="currentColor" />
                      </svg>
                    </div>

                    {/* Clickable Transition Hinge Button */}
                    <button
                      onClick={() => handleSelectHinge(hinge.id)}
                      className={`w-full py-1.5 px-1 rounded-lg text-center transition-all cursor-pointer border shadow-2xs ${
                        selectedHingeId === hinge.id
                          ? 'bg-amber-600 text-white border-amber-600 ring-2 ring-amber-400/50'
                          : 'bg-white hover:bg-amber-50 text-amber-950 border-amber-300'
                      }`}
                      title={`${hinge.event} 상세 전환 원인 보기`}
                    >
                      <div className="text-[10px] font-black text-amber-600 block">
                        ⚡ 전환 원인
                      </div>
                      <div className="text-xs font-black leading-tight truncate">
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

      {/* 3. Lower Explanation & Diagram Stage (Same container, progressive disclosure) */}
      <div className="flex-1 bg-white rounded-xl border border-[#0F1E36]/12 p-3.5 lg:p-5 shadow-xs flex flex-col justify-between relative overflow-hidden">
        {selectedHingeId && currentHinge ? (
          /* ========================================================
             Pivotal Historical Shock (전환 원인) Detailed Modal/Display
             [원인] ──▶ [위기] ──▶ [대응]
             ======================================================== */
          <div className="h-full flex flex-col justify-between animate-in fade-in duration-200">
            {/* Header */}
            <div className="flex items-center justify-between pb-2 border-b border-amber-200">
              <div className="flex items-center gap-2.5">
                <span className="px-2.5 py-0.5 text-xs font-black bg-amber-600 text-white rounded-md shadow-2xs">
                  역사적 대전환 분석
                </span>
                <h3 className="text-xl lg:text-2xl font-black text-[#0F1E36]">
                  {currentHinge.event} ({currentHinge.year})
                </h3>
              </div>
              <button
                onClick={handleCloseHinge}
                className="flex items-center gap-1.5 px-3 py-1 text-xs font-bold text-teal-900 bg-teal-50 hover:bg-teal-100 rounded-md border border-teal-200 transition-colors cursor-pointer"
              >
                <span>시대별 단계 도식으로 복귀</span>
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Horizontal Causality Chain: [원인] ──▶ [위기] ──▶ [대응] */}
            <div className="flex flex-col md:flex-row items-stretch justify-between gap-3 my-auto w-full">
              {/* Card 1: 원인 */}
              <div className="flex-1 p-4 bg-[#FAF8F3] rounded-xl border border-amber-300 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-amber-900 bg-amber-100 px-2 py-0.5 rounded">
                      STEP 01
                    </span>
                    <span className="text-xs font-bold text-amber-800">
                      원인 (Trigger)
                    </span>
                  </div>
                  <h4 className="text-lg lg:text-xl font-black text-[#0F1E36] mb-2 leading-snug">
                    {currentHinge.causeTitle}
                  </h4>
                  <p className="text-xs lg:text-sm text-[#0F1E36]/90 font-medium leading-relaxed">
                    {currentHinge.triggerCause}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-amber-200/80 text-xs font-bold text-amber-900">
                  기존 경제 구조를 뒤흔든 배경과 충격
                </div>
              </div>

              {/* Connecting Arrow 1 */}
              <div className="shrink-0 flex items-center justify-center p-0.5 text-teal-700">
                <ArrowRight className="w-7 h-7 rotate-90 md:rotate-0" />
              </div>

              {/* Card 2: 위기 */}
              <div className="flex-1 p-4 bg-red-50/70 rounded-xl border border-red-300 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-red-900 bg-red-100 px-2 py-0.5 rounded">
                      STEP 02
                    </span>
                    <span className="text-xs font-bold text-red-800">
                      위기 (Crisis & Shock)
                    </span>
                  </div>
                  <h4 className="text-lg lg:text-xl font-black text-red-950 mb-2 leading-snug">
                    {currentHinge.crisisTitle}
                  </h4>
                  <p className="text-xs lg:text-sm text-red-950/90 font-medium leading-relaxed">
                    {currentHinge.crisisOrShift}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-red-200 text-xs font-bold text-red-900">
                  기존 시장 자율 조정의 한계와 실물 침체
                </div>
              </div>

              {/* Connecting Arrow 2 */}
              <div className="shrink-0 flex items-center justify-center p-0.5 text-teal-700">
                <ArrowRight className="w-7 h-7 rotate-90 md:rotate-0" />
              </div>

              {/* Card 3: 대응 */}
              <div className="flex-1 p-4 bg-teal-50/80 rounded-xl border border-teal-300 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-teal-900 bg-teal-100 px-2 py-0.5 rounded">
                      STEP 03
                    </span>
                    <span className="text-xs font-bold text-teal-800">
                      대응 (Response & Shift)
                    </span>
                  </div>
                  <h4 className="text-lg lg:text-xl font-black text-teal-950 mb-2 leading-snug">
                    {currentHinge.responseTitle}
                  </h4>
                  <p className="text-xs lg:text-sm text-teal-950/90 font-medium leading-relaxed">
                    {currentHinge.lesson}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-teal-200 text-xs font-bold text-teal-900">
                  정부와 시장의 역할 재조정 및 새로운 사조
                </div>
              </div>
            </div>

            {/* Bottom Footer Note */}
            <div className="p-3 bg-amber-50 rounded-lg text-xs lg:text-sm text-amber-950 flex items-center justify-between">
              <span>
                💡 <strong>교과서 핵심 정리:</strong> 역사적 전환은 단순한 우연이 아니며, 경제 위기에 직면했을 때 <strong>원인 → 위기 → 정책적 대응</strong>을 거쳐 시장과 정부의 균형을 재조정해 온 과정입니다.
              </span>
              <button
                onClick={handleCloseHinge}
                className="font-bold text-teal-800 hover:underline cursor-pointer shrink-0 ml-3 text-xs"
              >
                닫기
              </button>
            </div>
          </div>
        ) : (
          /* ========================================================
             Progressive Disclosure Stage for Selected Era
             Step 0: Initial Screen with Big Key Question
             Step 1: Background Concept 01
             Step 2: Economic Shift/Problem Concept 02
             Step 3: Thought/Policy Concept 03
             Step 4: Specialized Cause-and-Effect Transition Diagram
             Step 5: Full View (All concepts + Diagram)
             ======================================================== */
          <div className="h-full flex flex-col justify-between">
            {/* Top Sub-Header & Sequential Stage Controller */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2.5 border-b border-[#0F1E36]/10 gap-2 shrink-0">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-black text-teal-900 bg-teal-100 px-2.5 py-0.5 rounded border border-teal-200">
                  선택 시대
                </span>
                <h3 className="text-xl lg:text-2xl font-black text-[#0F1E36] tracking-tight">
                  {currentEra.name}
                </h3>
                <span className="text-xs font-mono text-[#0F1E36]/50">
                  ({currentEra.period})
                </span>
                <span className="text-xs lg:text-sm font-bold text-amber-900 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200 hidden md:inline">
                  {currentEra.govRoleQualitative}
                </span>
              </div>

              {/* Progressive Sequence Controller Bar */}
              <div className="flex items-center gap-1.5 self-end sm:self-auto bg-[#FAF8F3] p-1 rounded-lg border border-[#0F1E36]/10">
                <button
                  onClick={handlePrevStep}
                  disabled={revealedStep === 0}
                  className="px-2 py-1 text-xs font-bold text-[#0F1E36] hover:bg-white rounded transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer flex items-center gap-0.5"
                  title="이전 단계로 되돌리기"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">이전</span>
                </button>

                {/* Step indicator buttons */}
                {[
                  { num: 0, label: '질문' },
                  { num: 1, label: '개념 01' },
                  { num: 2, label: '개념 02' },
                  { num: 3, label: '개념 03' },
                  { num: 4, label: '전환 도식' }
                ].map((s) => (
                  <button
                    key={s.num}
                    onClick={() => setRevealedStep(s.num)}
                    className={`px-2.5 py-1 text-xs font-bold rounded transition-all cursor-pointer ${
                      revealedStep === s.num
                        ? 'bg-teal-900 text-white shadow-xs'
                        : revealedStep > s.num && revealedStep !== 5
                        ? 'bg-teal-100 text-teal-950 font-semibold'
                        : 'text-[#0F1E36]/60 hover:text-[#0F1E36]'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}

                <button
                  onClick={handleNextStep}
                  disabled={revealedStep >= 4}
                  className="px-2 py-1 text-xs font-bold text-[#0F1E36] hover:bg-white rounded transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer flex items-center gap-0.5"
                  title="다음 단계 공개"
                >
                  <span className="hidden sm:inline">다음</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <div className="h-3.5 w-px bg-black/10 mx-0.5" />

                <button
                  onClick={handleRevealAll}
                  className={`px-2 py-1 text-xs font-bold rounded transition-colors cursor-pointer flex items-center gap-1 ${
                    revealedStep === 5
                      ? 'bg-teal-900 text-white'
                      : 'text-teal-900 hover:bg-teal-50'
                  }`}
                  title="모든 도식과 설명 한 번에 보기"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>전체</span>
                </button>

                <button
                  onClick={handleResetToQuestion}
                  className="px-1.5 py-1 text-xs text-[#0F1E36]/50 hover:text-[#0F1E36] hover:bg-white rounded transition-colors cursor-pointer"
                  title="질문 화면으로 리셋"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Central Area: Render according to revealedStep */}
            <div className="flex-1 my-auto flex flex-col justify-center py-2">
              {revealedStep === 0 ? (
                /* ========================================================
                   Step 0: Initial Screen with Prominent Big Key Question
                   ======================================================== */
                <div className="p-6 lg:p-8 bg-gradient-to-br from-[#FAF8F3] via-white to-teal-50/40 rounded-2xl border border-teal-700/20 shadow-xs text-center flex flex-col items-center justify-center my-auto animate-in fade-in duration-200">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-100 text-teal-900 text-xs lg:text-sm font-black rounded-full mb-3 border border-teal-200">
                    <HelpCircle className="w-4 h-4 text-teal-700" />
                    <span>{currentEra.name} · 탐구 핵심 질문</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F1E36] max-w-4xl leading-snug tracking-tight mb-4">
                    "{currentPedagogy.keyQuestion}"
                  </h3>

                  <p className="text-sm lg:text-lg font-medium text-[#0F1E36]/80 max-w-2xl leading-relaxed mb-6">
                    {currentPedagogy.questionContext}
                  </p>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setRevealedStep(1)}
                      className="px-5 py-2.5 bg-teal-900 hover:bg-teal-950 text-white font-black text-sm lg:text-base rounded-xl shadow-md transition-all cursor-pointer flex items-center gap-2 hover:scale-[1.02]"
                    >
                      <span>▶ 핵심 탐구 시작하기 (개념 01 공개)</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleRevealAll}
                      className="px-4 py-2.5 bg-white hover:bg-slate-50 text-teal-900 font-bold text-xs lg:text-sm rounded-xl border border-teal-300 transition-colors cursor-pointer"
                    >
                      전체 도식 한 번에 보기
                    </button>
                  </div>
                </div>
              ) : revealedStep >= 1 && revealedStep <= 3 ? (
                /* ========================================================
                   Step 1 ~ 3: Single Focused Concept View with High Impact
                   ======================================================== */
                <div className="h-full flex flex-col justify-between animate-in fade-in duration-200">
                  {/* Step Breadcrumbs */}
                  <div className="flex items-center gap-2 mb-3">
                    {currentPedagogy.steps.map((st) => {
                      const isCurrent = revealedStep === st.order;
                      const isPast = revealedStep > st.order;
                      return (
                        <div
                          key={st.order}
                          onClick={() => setRevealedStep(st.order)}
                          className={`flex-1 p-2 rounded-lg border text-center transition-all cursor-pointer ${
                            isCurrent
                              ? 'bg-teal-900 text-white border-teal-900 shadow-xs'
                              : isPast
                              ? 'bg-teal-50 text-teal-950 border-teal-200 font-bold'
                              : 'bg-[#FAF8F3]/60 text-[#0F1E36]/40 border-dashed border-[#0F1E36]/10'
                          }`}
                        >
                          <span className="text-[11px] font-mono block">0{st.order}</span>
                          <span className="text-xs font-bold truncate block">{st.keyword}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Focused Main Card */}
                  {(() => {
                    const activeConcept = currentPedagogy.steps[revealedStep - 1];
                    return (
                      <div className="p-5 lg:p-7 bg-[#FAF8F3] rounded-2xl border border-teal-700/30 shadow-xs my-auto flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-xs lg:text-sm font-black text-teal-900 bg-teal-100 px-3 py-1 rounded-md border border-teal-200">
                              {activeConcept.badge}
                            </span>
                            <span className="text-xs font-mono font-bold text-[#0F1E36]/50">
                              단계 {activeConcept.order} / 3
                            </span>
                          </div>

                          <h4 className="text-2xl lg:text-3xl font-black text-[#0F1E36] mb-3 leading-snug tracking-tight">
                            {activeConcept.keyword}
                          </h4>

                          <div className="p-3.5 bg-white rounded-xl border border-teal-600/20 mb-3 shadow-2xs">
                            <p className="text-base lg:text-xl font-bold text-teal-950 leading-relaxed">
                              {activeConcept.summary}
                            </p>
                          </div>

                          <p className="text-sm lg:text-base font-medium text-[#0F1E36]/85 leading-relaxed">
                            {activeConcept.detail}
                          </p>
                        </div>

                        {/* Bottom action prompt */}
                        <div className="mt-5 pt-3 border-t border-[#0F1E36]/10 flex items-center justify-between">
                          <button
                            onClick={handlePrevStep}
                            className="px-3 py-1.5 text-xs font-bold text-[#0F1E36]/70 hover:text-[#0F1E36] cursor-pointer flex items-center gap-1"
                          >
                            <ChevronLeft className="w-4 h-4" />
                            <span>{revealedStep === 1 ? '질문으로' : '이전 개념'}</span>
                          </button>

                          <button
                            onClick={handleNextStep}
                            className="px-4 py-2 bg-teal-900 hover:bg-teal-950 text-white font-bold text-xs lg:text-sm rounded-lg shadow-xs transition-colors cursor-pointer flex items-center gap-1.5"
                          >
                            <span>{revealedStep === 3 ? '⚡ 전환 도식 보기' : '다음 개념 공개'}</span>
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              ) : (
                /* ========================================================
                   Step 4 or Step 5: Specialized Cause-and-Effect Transition Diagrams!
                   ======================================================== */
                <div className="h-full flex flex-col justify-between animate-in fade-in duration-200">
                  {/* Specialized Diagram Container */}
                  <div className="flex-1 my-auto flex flex-col justify-center">
                    {/* Era 1: Commercial -> Industrial */}
                    {selectedEraId === 'commercial' && (
                      <div className="space-y-4">
                        <div className="p-4 lg:p-5 bg-[#FAF8F3] rounded-xl border border-teal-600/30 shadow-2xs">
                          <span className="text-xs font-bold text-teal-900 block mb-2">
                            [상업 자본주의 → 산업 자본주의 핵심 인과 도식]
                          </span>
                          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center">
                            <div className="p-3.5 bg-white rounded-xl border border-teal-200 flex-1 w-full shadow-2xs">
                              <span className="text-xs font-bold text-teal-800 block mb-1">출발점</span>
                              <div className="text-base lg:text-lg font-black text-[#0F1E36]">상업·무역 중심</div>
                              <p className="text-xs text-[#0F1E36]/70 mt-1">원거리 무역을 통한 자본 축적</p>
                            </div>

                            <div className="text-teal-700 font-bold flex items-center gap-1">
                              <ArrowRight className="w-6 h-6 rotate-90 md:rotate-0" />
                            </div>

                            <div className="p-3.5 bg-amber-50 rounded-xl border border-amber-300 flex-1 w-full shadow-2xs">
                              <span className="text-xs font-bold text-amber-900 block mb-1">역사적 도약</span>
                              <div className="text-base lg:text-lg font-black text-amber-950">산업 혁명</div>
                              <p className="text-xs text-amber-900/80 mt-1">증기기관 발명과 생산 방식 변화</p>
                            </div>

                            <div className="text-teal-700 font-bold flex items-center gap-1">
                              <ArrowRight className="w-6 h-6 rotate-90 md:rotate-0" />
                            </div>

                            <div className="p-3.5 bg-teal-50 rounded-xl border border-teal-300 flex-1 w-full shadow-2xs">
                              <span className="text-xs font-bold text-teal-900 block mb-1">새로운 시대</span>
                              <div className="text-base lg:text-lg font-black text-teal-950">공장제 대량 생산 확대</div>
                              <p className="text-xs text-teal-900/80 mt-1">산업 자본주의와 자유방임주의</p>
                            </div>
                          </div>
                        </div>

                        {/* Comparative Table: 중상주의 vs 자유방임주의 */}
                        <div className="p-3.5 lg:p-4 bg-white rounded-xl border border-[#0F1E36]/12 shadow-2xs">
                          <span className="text-xs font-bold text-teal-900 block mb-2">
                            [경제 사조 비교: 중상주의 vs 자유방임주의]
                          </span>
                          <div className="grid grid-cols-2 gap-3 text-xs lg:text-sm">
                            <div className="p-3 bg-[#FAF8F3] rounded-lg border border-amber-200">
                              <span className="font-black text-amber-950 block mb-1">중상주의 (상업 자본주의)</span>
                              <p className="text-[#0F1E36]/80 leading-snug">
                                • <strong>국가의 강력한 개입</strong>: 수출 장려, 수입 억제(보호관세), 특권 상인 보호
                              </p>
                            </div>
                            <div className="p-3 bg-teal-50/70 rounded-lg border border-teal-200">
                              <span className="font-black text-teal-950 block mb-1">자유방임주의 (산업 자본주의)</span>
                              <p className="text-teal-950/85 leading-snug">
                                • <strong>시장의 자율 경쟁</strong>: '보이지 않는 손', 국가 개입 최소화(야경국가론)
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Era 2: Industrial -> Modified (Vertical Cause Chain) */}
                    {selectedEraId === 'industrial' && (
                      <div className="p-4 lg:p-5 bg-[#FAF8F3] rounded-xl border border-red-300/80 shadow-2xs">
                        <span className="text-xs font-bold text-red-900 block mb-3">
                          [산업 자본주의 → 수정 자본주의 전환 핵심 인과 도식]
                        </span>
                        <div className="flex flex-col md:flex-row items-center justify-between gap-2.5 text-center">
                          <div className="p-3.5 bg-white rounded-xl border border-[#0F1E36]/10 flex-1 w-full shadow-2xs">
                            <span className="text-xs font-bold text-slate-600 block mb-1">1단계</span>
                            <div className="text-base lg:text-lg font-black text-[#0F1E36]">산업 자본주의 발전과 문제점</div>
                            <p className="text-xs text-[#0F1E36]/70 mt-1">생산력 폭발 속 빈부격차·독과점 누적</p>
                          </div>

                          <div className="text-red-700 font-bold">
                            <ArrowRight className="w-5 h-5 rotate-90 md:rotate-0" />
                          </div>

                          <div className="p-3.5 bg-red-50 rounded-xl border border-red-300 flex-1 w-full shadow-2xs">
                            <span className="text-xs font-bold text-red-900 block mb-1">2단계</span>
                            <div className="text-base lg:text-lg font-black text-red-950">1929년 대공황</div>
                            <p className="text-xs text-red-950/80 mt-1">주가 폭락·금융 불안·소비 위축 복합 작용</p>
                          </div>

                          <div className="text-red-700 font-bold">
                            <ArrowRight className="w-5 h-5 rotate-90 md:rotate-0" />
                          </div>

                          <div className="p-3.5 bg-amber-50 rounded-xl border border-amber-300 flex-1 w-full shadow-2xs">
                            <span className="text-xs font-bold text-amber-900 block mb-1">3단계</span>
                            <div className="text-base lg:text-lg font-black text-amber-950">대량 실업과 경기 침체</div>
                            <p className="text-xs text-amber-900/80 mt-1">미국 실업률 25% 급증, 시장 자율 한계</p>
                          </div>

                          <div className="text-teal-700 font-bold">
                            <ArrowRight className="w-5 h-5 rotate-90 md:rotate-0" />
                          </div>

                          <div className="p-3.5 bg-teal-50 rounded-xl border border-teal-300 flex-1 w-full shadow-2xs">
                            <span className="text-xs font-bold text-teal-900 block mb-1">4단계 대응</span>
                            <div className="text-base lg:text-lg font-black text-teal-950">정부의 경기 안정 역할 강조</div>
                            <p className="text-xs text-teal-900/80 mt-1">뉴딜 정책과 수정 자본주의 등장</p>
                          </div>
                        </div>

                        <div className="mt-3 p-2.5 bg-white rounded-lg border border-red-200 text-xs text-red-950">
                          ⚠️ <strong>교과서 유의점:</strong> 산업 자본주의의 문제점을 대공황의 유일한 원인으로 단정하지 않으며, 금융 자산 투기 거품과 신용 경색 등 복합적인 요인을 함께 설명합니다.
                        </div>
                      </div>
                    )}

                    {/* Era 3: Modified -> Neoliberal (Two-branch bifurcation) */}
                    {selectedEraId === 'modified' && (
                      <div className="p-4 lg:p-5 bg-[#FAF8F3] rounded-xl border border-amber-300 shadow-2xs">
                        <span className="text-xs font-bold text-amber-900 block mb-2">
                          [수정 자본주의 → 신자유주의 전환 핵심 인과 도식 (두 갈래 분기)]
                        </span>

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-2.5 items-center">
                          {/* Left: Cause */}
                          <div className="md:col-span-3 p-3 bg-amber-100/70 rounded-xl border border-amber-300 text-center">
                            <span className="text-xs font-bold text-amber-900 block mb-0.5">외부 충격</span>
                            <div className="text-sm lg:text-base font-black text-amber-950">1970년대 석유 파동</div>
                            <p className="text-[11px] text-amber-900 mt-1">원유 가격 급등 → <strong>생산 비용 증가</strong></p>
                          </div>

                          <div className="md:col-span-1 flex items-center justify-center text-amber-700 font-bold">
                            <ArrowRight className="w-5 h-5 rotate-90 md:rotate-0" />
                          </div>

                          {/* Middle: Two Branches Bifurcation */}
                          <div className="md:col-span-4 space-y-2">
                            <div className="p-2.5 bg-red-50 rounded-lg border border-red-200 text-xs">
                              <span className="font-black text-red-900 block">분기 ① 물가 상승 압력</span>
                              <p className="text-[11px] text-red-950/80">원자재·에너지 원가 폭등으로 상품 가격 폭등</p>
                            </div>
                            <div className="p-2.5 bg-orange-50 rounded-lg border border-orange-200 text-xs">
                              <span className="font-black text-orange-950 block">분기 ② 생산 위축과 경기 침체</span>
                              <p className="text-[11px] text-orange-950/80">채산성 악화로 공장 감산 및 실업률 급증</p>
                            </div>
                          </div>

                          <div className="md:col-span-1 flex items-center justify-center text-teal-700 font-bold">
                            <ArrowRight className="w-5 h-5 rotate-90 md:rotate-0" />
                          </div>

                          {/* Right: Synthesis Outcome */}
                          <div className="md:col-span-3 p-3 bg-teal-50 rounded-xl border border-teal-300 text-center">
                            <span className="text-xs font-bold text-teal-900 block mb-0.5">합류 결과</span>
                            <div className="text-sm lg:text-base font-black text-teal-950">스태그플레이션 발발</div>
                            <p className="text-[11px] text-teal-900 mt-1">수요 관리 한계 → <strong>신자유주의 확산</strong></p>
                          </div>
                        </div>

                        <div className="mt-3 p-2.5 bg-white rounded-lg border border-amber-200 text-xs text-amber-950">
                          ⚠️ <strong>교과서 유의점:</strong> 스태그플레이션의 원인을 정부 지출 증가 하나로 단정하지 않고, 석유 파동이라는 대외적 공급 측 충격을 함께 설명합니다.
                        </div>
                      </div>
                    )}

                    {/* Era 4: Neoliberalism Balance Synthesis */}
                    {selectedEraId === 'neoliberal' && (
                      <div className="p-4 lg:p-5 bg-[#FAF8F3] rounded-xl border border-teal-600/30 shadow-2xs">
                        <span className="text-xs font-bold text-teal-900 block mb-2">
                          [신자유주의와 현대 자본주의의 과제: 시장과 정부의 조화]
                        </span>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
                          <div className="p-4 bg-teal-50 rounded-xl border border-teal-200">
                            <span className="text-sm font-black text-teal-950 block mb-1">시장 기능 (Market)</span>
                            <p className="text-xs lg:text-sm text-teal-900 leading-snug">
                              • 과감한 규제 완화, 공기업 민영화, 민간의 창의적 투자 활성화, 글로벌 무역망 확대
                            </p>
                          </div>
                          <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
                            <span className="text-sm font-black text-amber-950 block mb-1">정부의 역할 (Government)</span>
                            <p className="text-xs lg:text-sm text-amber-950 leading-snug">
                              • 양극화와 고용 불안 완화, 공정한 시장 규칙 집행, 기후 위기 및 AI 전환 사회안전망 구축
                            </p>
                          </div>
                        </div>
                        <div className="p-2.5 bg-white rounded-lg border border-teal-200 text-center text-xs lg:text-sm font-bold text-teal-900">
                          ⚖️ 결론: 시장의 자율적 활력과 정부의 공공성 보호가 유기적으로 공존하는 균형 모색
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Reset or Step Backward Controller */}
                  <div className="pt-2 border-t border-[#0F1E36]/10 flex items-center justify-between text-xs">
                    <button
                      onClick={handlePrevStep}
                      className="font-bold text-[#0F1E36]/70 hover:text-[#0F1E36] cursor-pointer flex items-center gap-1"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>개념 03으로 되돌리기</span>
                    </button>
                    <button
                      onClick={handleResetToQuestion}
                      className="font-bold text-teal-800 hover:underline cursor-pointer"
                    >
                      질문 화면으로 리셋 ↺
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Pedagogical Bar */}
            <div className="mt-2 p-2.5 bg-[#FAF8F3] rounded-lg border border-[#0F1E36]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs lg:text-sm shrink-0">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-teal-800 shrink-0" />
                <span className="text-[#0F1E36]">
                  <strong>수업 지도 요령:</strong> 핵심 질문으로 학생들의 호기심을 유도한 뒤, 단계 버튼이나 화살표를 눌러 개념을 하나씩 공개하세요.
                </span>
              </div>
              <div className="shrink-0 font-bold text-teal-900">
                {revealedStep === 0
                  ? '탐구 준비 단계'
                  : revealedStep === 5
                  ? '전체 도식 공개'
                  : `진행 상태: ${revealedStep} / 4`}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
