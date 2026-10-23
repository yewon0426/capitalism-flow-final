import React, { useState, useEffect } from 'react';
import {
  HelpCircle,
  Scale,
  ShoppingBag,
  Factory,
  Users,
  ArrowRight,
  ArrowDown,
  CheckCircle2,
  Sparkles,
  Layers,
  Compass,
  Lightbulb,
  RotateCcw,
  Eye,
  ChevronRight
} from 'lucide-react';

interface Topic16WhatIsEconomicSystemProps {
  activeStep: number;
}

export const Topic16WhatIsEconomicSystem: React.FC<Topic16WhatIsEconomicSystemProps> = ({ activeStep }) => {
  // Sub-screen navigation (1: 개념과 희소성, 2: 3대 문제, 3: 체제 비교, 4: 종합 구조도)
  const [currentScreen, setCurrentScreen] = useState<number>(activeStep || 1);

  // Sync with activeStep from parent (e.g. keyboard navigation or bottom bar)
  useEffect(() => {
    if (activeStep >= 1 && activeStep <= 4) {
      setCurrentScreen(activeStep);
    }
  }, [activeStep]);

  // Screen 1: Step-by-step reveal of Scarcity Causal Diagram (1 ~ 5)
  const [screen1Reveal, setScreen1Reveal] = useState<number>(1);

  // Screen 2: Selected Problem among the 3 Fundamental Questions (1: 무엇을 얼마나, 2: 어떻게, 3: 누구를 위해)
  const [selectedProblem, setSelectedProblem] = useState<number>(1);

  // Screen 3: Criteria filter state (default is 'subject', not 'all')
  const [selectedCriterion, setSelectedCriterion] = useState<string>('subject');

  // Screen 4: Sequential flow reveal (1 ~ 5)
  const [screen4Reveal, setScreen4Reveal] = useState<number>(5); // default show all or can step-through
  const [activeDiagramNode, setActiveDiagramNode] = useState<number>(0);

  // ----------------------------------------------------
  // Screen 1: 5 Causal Steps Data
  // ----------------------------------------------------
  const screen1Steps = [
    {
      num: 1,
      badge: '원인 ①',
      title: '인간의 욕구는 다양하고 계속 증가함',
      desc: '의식주, 편리함, 문화, 안전 등 하나를 채우면 새로운 욕망이 끊임없이 발생합니다.'
    },
    {
      num: 2,
      badge: '원인 ②',
      title: '이용할 수 있는 자원은 한정됨',
      desc: '욕구를 충족해 줄 천연자원, 노동력, 자본(설비·기술), 시간은 유한합니다.'
    },
    {
      num: 3,
      badge: '핵심 상태',
      title: '자원의 희소성 (Scarcity)',
      desc: '인간의 무한한 욕구에 비해 이용 가능한 자원이 상대적으로 부족한 상태입니다.'
    },
    {
      num: 4,
      badge: '필연적 결과',
      title: '선택과 자원 배분의 필요성',
      desc: '모든 것을 다 가질 수 없으므로, 무엇을 선택하고 무엇을 포기할지 결정해야 합니다.'
    },
    {
      num: 5,
      badge: '제도적 해결',
      title: '경제 체제의 필요성',
      desc: '사회 구성원 간의 충돌을 방지하고 합리적으로 자원을 배분하기 위한 사회적 약속과 규칙입니다.'
    }
  ];

  // ----------------------------------------------------
  // Screen 2: 3 Basic Economic Problems Data (Exact requirements)
  // ----------------------------------------------------
  const problemDetails = [
    {
      id: 1,
      num: '①',
      question: '무엇을 얼마나 생산할 것인가?',
      coreConcept: '생산할 재화와 서비스의 종류 및 수량 결정',
      explanation: '한정된 자원을 활용하여 어떤 재화와 서비스를 얼마나 생산할지 결정하는 문제입니다.',
      keywords: ['생산 대상', '생산량', '종류와 수량', '소비자 선호'],
      icon: ShoppingBag,
      color: 'teal'
    },
    {
      id: 2,
      num: '②',
      question: '어떻게 생산할 것인가?',
      coreConcept: '생산 방법과 생산 요소의 결합 방식 결정',
      explanation: '노동·자본·토지 등 생산 요소를 어떤 방법과 기술로 결합하여 생산할지 결정하는 문제입니다.',
      keywords: ['생산 방법', '생산 기술', '생산 요소', '노동·자본 결합'],
      icon: Factory,
      color: 'blue'
    },
    {
      id: 3,
      num: '③',
      question: '누구를 위해 생산할 것인가?',
      coreConcept: '생산 결과의 분배 방식 결정',
      explanation: '생산된 재화와 서비스가 사회 구성원에게 어떤 원칙과 방식으로 분배될지 결정하는 문제입니다.',
      keywords: ['분배', '소득', '소비', '형평성과 기여도'],
      icon: Users,
      color: 'amber'
    }
  ];

  // ----------------------------------------------------
  // Screen 3: Criteria Data (Exact matching texts)
  // ----------------------------------------------------
  const criteriaData = [
    {
      id: 'subject',
      num: '①',
      title: '해결 주체',
      subPrompt: '경제 문제를 최종적으로 결정하는 주체는 누구인가?',
      market: '개인과 기업 등 민간 경제 주체',
      command: '국가 및 중앙 계획 기구',
      mixed: '민간 경제 주체와 정부'
    },
    {
      id: 'mechanism',
      num: '②',
      title: '자원 배분 방식',
      subPrompt: '어떤 신호와 수단으로 자원을 배분하는가?',
      market: '수요와 공급에 따른 시장 가격 기구',
      command: '중앙 계획에 따른 생산·분배 결정',
      mixed: '시장 가격 기구를 기본으로 하면서 정부 정책으로 보완'
    },
    {
      id: 'advantage',
      num: '③',
      title: '장점',
      subPrompt: '각 체제가 발휘하는 대표적 우수성은 무엇인가?',
      market: '경제활동의 자유와 경쟁을 통한 효율성·혁신 촉진',
      command: '국가적 목표에 따른 자원의 계획적 동원과 배분 가능',
      mixed: '시장 효율성을 활용하면서 시장 실패와 분배 문제 보완 가능'
    },
    {
      id: 'limitation',
      num: '④',
      title: '한계',
      subPrompt: '각 체제가 내포한 구조적 부작용이나 위험은 무엇인가?',
      market: '빈부 격차, 독과점, 외부효과 등 시장 실패 가능성',
      command: '정보 부족, 비효율, 경제활동의 자유 제한 가능성',
      mixed: '정책 실패 가능성, 비효율적인 정부 개입과 조정 비용'
    }
  ];

  // ----------------------------------------------------
  // Screen 4: 5 Causal Stage Flow
  // ----------------------------------------------------
  const screen4Nodes = [
    {
      step: 1,
      label: '출발점',
      title: '자원의 희소성',
      desc: '인간의 욕구 > 가용 자원'
    },
    {
      step: 2,
      label: '필연적 귀결',
      title: '선택과 자원 배분의 필요성',
      desc: '기회비용과 효율적 선택'
    },
    {
      step: 3,
      label: '공통 과제',
      title: '3대 기본 경제 문제',
      desc: '무엇을 얼마나, 어떻게, 누구를 위해'
    },
    {
      step: 4,
      label: '접근 방식',
      title: '경제 문제의 해결 방식',
      desc: '민간의 가격 vs 국가의 계획'
    },
    {
      step: 5,
      label: '제도적 체제',
      title: '시장 · 계획 · 혼합 경제',
      desc: '사회별 경제 체제의 성립'
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-3 md:p-5 max-w-[1540px] mx-auto select-none">
      
      {/* 1. Header with Breadcrumb & 4-Sub-Screen Selector */}
      <div className="shrink-0 mb-3">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2">
            <span className="text-xs lg:text-sm font-bold text-teal-900 bg-teal-100 px-2.5 py-0.5 rounded border border-teal-200">
              주제 16 · 경제 체제의 본질
            </span>
            <span className="text-[#0F1E36]/30">·</span>
            <span className="text-xs lg:text-sm font-bold text-[#0F1E36]/80">
              PART 3. 경제 체제의 유형별 특징
            </span>
            <span className="text-[#0F1E36]/30">·</span>
            <span className="text-xs lg:text-sm font-semibold text-teal-800 bg-white px-2 py-0.5 rounded border border-teal-200/80">
              2022 개정 교육과정 [10통사05-01]
            </span>
          </div>

          <div className="px-3 py-1 bg-teal-50 border border-teal-200 rounded-lg text-teal-900 text-xs lg:text-sm font-bold flex items-center gap-1.5">
            <HelpCircle className="w-4 h-4 text-teal-700 shrink-0" />
            <span>수업 핵심 질문: 사회는 왜 희소한 자원을 배분하는 규칙(체제)을 만들어야 할까?</span>
          </div>
        </div>

        {/* 4-Screen Step Navigation Tabs (One Screen = One Core Question) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {[
            { step: 1, label: '화면 1: 의미와 희소성', desc: '인과 흐름과 경제 체제의 정의' },
            { step: 2, label: '화면 2: 3대 기본 경제 문제', desc: '무엇을, 어떻게, 누구를 위해' },
            { step: 3, label: '화면 3: 3대 경제 체제 비교', desc: '해결 주체·배분 방식·장점·한계' },
            { step: 4, label: '화면 4: 종합 연결 구조도', desc: '희소성에서 경제 체제까지' }
          ].map((tab) => {
            const isActive = currentScreen === tab.step;
            return (
              <button
                key={tab.step}
                onClick={() => setCurrentScreen(tab.step)}
                className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'bg-teal-900 text-white border-teal-900 shadow-md ring-2 ring-teal-600/40'
                    : 'bg-white hover:bg-teal-50/50 border-[#0F1E36]/15 text-[#0F1E36]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-mono font-black ${isActive ? 'text-teal-200' : 'text-teal-800'}`}>
                    STEP 0{tab.step}
                  </span>
                  <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded ${
                    isActive ? 'bg-teal-800 text-teal-100' : 'bg-teal-50 text-teal-900 border border-teal-200'
                  }`}>
                    {isActive ? '진행 중' : '선택'}
                  </span>
                </div>
                <div className="text-xs lg:text-sm font-black mt-0.5 leading-tight">
                  {tab.label}
                </div>
                <div className={`text-[11px] truncate mt-0.5 ${isActive ? 'text-teal-100/80' : 'text-[#0F1E36]/60'}`}>
                  {tab.desc}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Main Central Stage */}
      <div className="flex-1 flex flex-col justify-center mb-3 min-h-[470px]">

        {/* ------------------------------------------------------------------ */}
        {/* [화면 1] 경제 체제의 의미와 희소성                                  */}
        {/* ------------------------------------------------------------------ */}
        {currentScreen === 1 && (
          <div className="h-full flex flex-col justify-between bg-white p-5 lg:p-7 rounded-2xl border border-teal-800/30 shadow-md animate-in fade-in duration-300">
            {/* 1-1. Top Core Definition */}
            <div className="p-4 lg:p-5 bg-gradient-to-r from-teal-50 via-emerald-50/40 to-white rounded-xl border-2 border-teal-600/50 shadow-xs">
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 bg-teal-800 text-white font-black text-xs rounded-md">
                    핵심 개념 정의
                  </span>
                  <h3 className="text-sm lg:text-base font-black text-teal-950">
                    경제 체제란 무엇인가?
                  </h3>
                </div>
                <span className="text-xs font-semibold text-teal-800 bg-white px-2.5 py-0.5 rounded border border-teal-300">
                  교과서 표준 정의
                </span>
              </div>
              <p className="text-lg lg:text-2xl font-black text-[#0F1E36] leading-snug">
                “경제 체제는 <span className="text-teal-900 underline decoration-teal-500 decoration-3 underline-offset-4">희소한 자원을 배분</span>하고 <span className="text-teal-900 underline decoration-teal-500 decoration-3 underline-offset-4">기본적인 경제 문제</span>를 해결하기 위해 사회가 채택한 <span className="text-teal-900 underline decoration-teal-500 decoration-3 underline-offset-4">제도와 방식의 총체</span>이다.”
              </p>
            </div>

            {/* 1-2. Sequential Causal Diagram (5 stages connected with arrows) */}
            <div className="my-3.5">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-black text-teal-900 bg-teal-100 px-2 py-0.5 rounded">
                    인과 흐름 도식
                  </span>
                  <h4 className="text-sm lg:text-base font-black text-[#0F1E36]">
                    욕망의 무한성과 자원의 유한성에서 출발하는 논리적 연결
                  </h4>
                </div>

                {/* Step Reveal Controller Buttons for Teachers */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setScreen1Reveal((prev) => Math.max(1, prev - 1))}
                    disabled={screen1Reveal <= 1}
                    className="px-2.5 py-1 text-xs font-bold rounded border border-[#0F1E36]/20 bg-white hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                  >
                    이전 단계
                  </button>
                  <button
                    onClick={() => setScreen1Reveal((prev) => Math.min(5, prev + 1))}
                    disabled={screen1Reveal >= 5}
                    className="px-2.5 py-1 text-xs font-bold rounded bg-teal-800 text-white hover:bg-teal-900 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer flex items-center gap-1"
                  >
                    다음 단계 공개 ({screen1Reveal}/5)
                  </button>
                  <button
                    onClick={() => setScreen1Reveal(5)}
                    className="px-2.5 py-1 text-xs font-bold rounded border border-teal-300 bg-teal-50 text-teal-900 hover:bg-teal-100 cursor-pointer"
                  >
                    전체 보기
                  </button>
                  <button
                    onClick={() => setScreen1Reveal(1)}
                    title="1단계로 초기화"
                    className="p-1 rounded text-teal-800 hover:bg-teal-50 cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* 5-Step Cards Connected with Arrows */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-2 lg:gap-2.5 items-stretch">
                {screen1Steps.map((step, idx) => {
                  const isVisible = idx < screen1Reveal;
                  const isCurrent = idx + 1 === screen1Reveal;
                  return (
                    <div
                      key={step.num}
                      onClick={() => setScreen1Reveal(step.num)}
                      className={`p-3.5 rounded-xl border-2 transition-all cursor-pointer flex flex-col justify-between min-h-[145px] ${
                        isVisible
                          ? isCurrent
                            ? 'bg-teal-900 text-white border-teal-900 shadow-md ring-2 ring-teal-500 scale-[1.01]'
                            : 'bg-white text-[#0F1E36] border-teal-700/30 hover:border-teal-600 shadow-2xs'
                          : 'bg-gray-50 text-gray-400 border-dashed border-gray-200 opacity-60'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className={`text-[10px] font-black px-1.5 py-0.5 rounded ${
                            isVisible
                              ? isCurrent
                                ? 'bg-teal-700 text-teal-100'
                                : 'bg-teal-50 text-teal-800 border border-teal-200'
                              : 'bg-gray-100 text-gray-400'
                          }`}>
                            단계 0{step.num} · {step.badge}
                          </span>
                          {idx < 4 && (
                            <span className={`hidden md:inline text-xs font-black ${isCurrent ? 'text-teal-300' : 'text-teal-700'}`}>
                              →
                            </span>
                          )}
                        </div>
                        <h5 className="text-sm lg:text-base font-black leading-snug">
                          {step.title}
                        </h5>
                      </div>
                      <p className={`text-xs mt-2 leading-relaxed ${
                        isVisible
                          ? isCurrent ? 'text-teal-100 font-medium' : 'text-[#0F1E36]/75'
                          : 'text-gray-400'
                      }`}>
                        {isVisible ? step.desc : '클릭하여 공개'}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 1-3. Scarcity Misconception Clarification Note */}
            <div className="p-3.5 lg:p-4 bg-[#FAF8F3] rounded-xl border-2 border-amber-300/80 shadow-2xs">
              <div className="flex items-start gap-2.5">
                <Lightbulb className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 bg-amber-500 text-white text-[11px] font-black rounded">
                      수업 필수 확인 · 오개념 바로잡기
                    </span>
                    <span className="text-xs font-bold text-amber-950">
                      희소성(Scarcity) vs 희귀성(Rarity)
                    </span>
                  </div>
                  <p className="text-sm lg:text-base font-bold text-[#0F1E36] leading-relaxed">
                    “<span className="text-teal-900 underline decoration-teal-500 underline-offset-2">희소성</span>은 자원의 절대적인 양이 적다는 의미가 아니라, <strong className="text-red-700">인간의 욕구에 비해 이용 가능한 자원이 상대적으로 부족하다는 의미</strong>이다.”
                  </p>
                  <p className="text-xs text-[#0F1E36]/70 mt-1">
                    ※ 아무리 양이 적어도 아무도 원하지 않는 길가의 돌멩이는 희소하지 않으며, 공기처럼 흔한 자원도 오염되어 맑은 공기를 돈 주고 사야 한다면 희소해집니다.
                  </p>
                </div>
              </div>
            </div>

            {/* 1-4. Bottom Navigation Prompt */}
            <div className="pt-2 flex items-center justify-between text-xs text-[#0F1E36]/70">
              <span className="font-semibold">
                자원의 희소성 때문에 어떤 사회든 반드시 직면하여 풀어야 하는 <strong>'3대 기본 경제 문제'</strong>로 이어집니다.
              </span>
              <button
                onClick={() => setCurrentScreen(2)}
                className="font-bold text-teal-800 hover:text-teal-900 flex items-center gap-1 cursor-pointer"
              >
                다음 화면: 3대 기본 경제 문제 확인하기 <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* [화면 2] 3대 기본 경제 문제                                         */}
        {/* ------------------------------------------------------------------ */}
        {currentScreen === 2 && (
          <div className="h-full flex flex-col justify-between bg-white p-5 lg:p-7 rounded-2xl border border-teal-800/30 shadow-md animate-in fade-in duration-300">
            {/* 2-1. Top Concept Banner */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#0F1E36]/10">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-teal-900 text-white text-xs font-black flex items-center justify-center">
                    02
                  </span>
                  <h3 className="text-xl lg:text-2xl font-black text-[#0F1E36]">
                    3대 기본 경제 문제
                  </h3>
                </div>
                <p className="text-xs lg:text-sm text-[#0F1E36]/70 mt-0.5">
                  자원의 희소성으로 인해 모든 사회가 반드시 직면하고 해결해야 하는 3가지 근본적 질문입니다.
                </p>
              </div>
              <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-md self-start sm:self-auto">
                질문 카드를 클릭하여 핵심 개념과 설명 확인
              </span>
            </div>

            {/* 2-2. 3 Prominent Question Selector Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-3">
              {problemDetails.map((item) => {
                const isSelected = selectedProblem === item.id;
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedProblem(item.id)}
                    className={`p-4 rounded-xl border-2 text-left transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'bg-teal-900 text-white border-teal-900 shadow-md ring-2 ring-teal-500 scale-[1.01]'
                        : 'bg-[#FAF8F3] hover:bg-white border-[#0F1E36]/15 text-[#0F1E36]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-xs font-mono font-black ${isSelected ? 'text-teal-200' : 'text-teal-800'}`}>
                        질문 {item.num}
                      </span>
                      <Icon className={`w-5 h-5 ${isSelected ? 'text-teal-200' : 'text-teal-700'}`} />
                    </div>
                    <div>
                      <h4 className="text-lg lg:text-xl font-black leading-tight">
                        {item.question}
                      </h4>
                      <p className={`text-xs mt-1.5 font-bold ${isSelected ? 'text-teal-100' : 'text-teal-900'}`}>
                        {item.coreConcept}
                      </p>
                    </div>
                    <div className={`mt-3 pt-2.5 border-t text-[11px] font-bold flex items-center justify-between ${
                      isSelected ? 'border-teal-700 text-teal-200' : 'border-[#0F1E36]/10 text-teal-800'
                    }`}>
                      <span>{isSelected ? '선택되어 크게 열람 중' : '클릭하여 상세 보기'}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* 2-3. Large Focused View of Selected Problem (High classroom readability, No cluttered example list) */}
            {(() => {
              const active = problemDetails.find((p) => p.id === selectedProblem) || problemDetails[0];
              const ProbIcon = active.icon;

              return (
                <div className="p-5 lg:p-6 bg-gradient-to-br from-[#FAF8F3] to-white rounded-xl border-2 border-teal-700/50 shadow-sm animate-in fade-in duration-200">
                  <div className="flex items-center gap-3 pb-3 border-b border-[#0F1E36]/10">
                    <div className="w-12 h-12 rounded-xl bg-teal-900 text-white flex items-center justify-center shrink-0 shadow-xs">
                      <ProbIcon className="w-6 h-6 text-teal-200" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-black text-teal-800">
                        핵심 질문 {active.num}
                      </span>
                      <h4 className="text-2xl lg:text-3xl font-black text-[#0F1E36] tracking-tight">
                        {active.question}
                      </h4>
                    </div>
                  </div>

                  {/* Core Definition in Large Font */}
                  <div className="my-3.5 p-4 bg-teal-50/80 rounded-xl border border-teal-300">
                    <div className="text-xs font-black text-teal-800 uppercase tracking-wider mb-1">
                      💡 핵심 개념
                    </div>
                    <div className="text-lg lg:text-xl font-black text-teal-950 mb-1">
                      {active.coreConcept}
                    </div>
                    <p className="text-base lg:text-lg text-[#0F1E36] font-medium leading-relaxed">
                      {active.explanation}
                    </p>
                  </div>

                  {/* Core Keywords Tags (Clean, uncluttered) */}
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <span className="text-xs font-black text-teal-900 bg-white px-2.5 py-1 rounded-md border border-teal-200">
                      핵심어
                    </span>
                    {active.keywords.map((kw, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white text-teal-950 text-xs lg:text-sm font-black rounded-lg border border-[#0F1E36]/15 shadow-2xs"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })()}

            {/* 2-4. Bottom Navigation Prompt */}
            <div className="pt-2 flex items-center justify-between text-xs text-[#0F1E36]/70">
              <span className="font-semibold">
                이 3대 기본 경제 문제를 <strong>'누가, 어떤 방식으로 해결하는가'</strong>에 따라 경제 체제가 분류됩니다.
              </span>
              <button
                onClick={() => setCurrentScreen(3)}
                className="font-bold text-teal-800 hover:text-teal-900 flex items-center gap-1 cursor-pointer"
              >
                다음 화면: 3대 경제 체제 비교하기 <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* [화면 3] 시장·계획·혼합 경제의 비교                                 */}
        {/* ------------------------------------------------------------------ */}
        {currentScreen === 3 && (
          <div className="h-full flex flex-col justify-between bg-white p-5 lg:p-7 rounded-2xl border border-teal-800/30 shadow-md animate-in fade-in duration-300">
            {/* 3-1. Top Header & Criteria Buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#0F1E36]/10">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-teal-900 text-white text-xs font-black flex items-center justify-center">
                    03
                  </span>
                  <h3 className="text-xl lg:text-2xl font-black text-[#0F1E36]">
                    시장·계획·혼합 경제의 비교
                  </h3>
                </div>
                <p className="text-xs lg:text-sm text-[#0F1E36]/70 mt-0.5">
                  기준을 선택하면 각 경제 체제가 경제 문제를 해결하는 방식을 교실에서 보기 쉽게 비교합니다.
                </p>
              </div>

              {/* 5 Filter Buttons (Default is 'subject', 'all' is review) */}
              <div className="flex flex-wrap items-center gap-1.5 self-start sm:self-auto bg-[#FAF8F3] p-1.5 rounded-xl border border-[#0F1E36]/15">
                {[
                  { id: 'subject', label: '① 해결 주체' },
                  { id: 'mechanism', label: '② 자원 배분 방식' },
                  { id: 'advantage', label: '③ 장점' },
                  { id: 'limitation', label: '④ 한계' },
                  { id: 'all', label: '⑤ 전체 비교 (복습)' }
                ].map((crit) => (
                  <button
                    key={crit.id}
                    onClick={() => setSelectedCriterion(crit.id)}
                    className={`px-3 py-1.5 text-xs lg:text-sm font-black rounded-lg transition-all cursor-pointer ${
                      selectedCriterion === crit.id
                        ? 'bg-teal-900 text-white shadow-xs ring-1 ring-teal-600'
                        : 'text-[#0F1E36]/70 hover:bg-white hover:text-[#0F1E36]'
                    }`}
                  >
                    {crit.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 3-2. Single Criterion Focused View (Default: Large typography, plenty of whitespace) */}
            {selectedCriterion !== 'all' ? (
              <div className="my-3.5 flex-1 flex flex-col justify-between">
                {(() => {
                  const currentCrit = criteriaData.find((c) => c.id === selectedCriterion) || criteriaData[0];
                  return (
                    <>
                      {/* Active Criterion Banner */}
                      <div className="p-3 bg-teal-50 rounded-xl border border-teal-200 mb-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-0.5 bg-teal-800 text-white font-black text-xs rounded-md">
                            선택된 비교 기준
                          </span>
                          <span className="text-base font-black text-teal-950">
                            {currentCrit.num} {currentCrit.title}
                          </span>
                        </div>
                        <span className="text-xs lg:text-sm text-teal-900 font-semibold">
                          {currentCrit.subPrompt}
                        </span>
                      </div>

                      {/* 3 Economy Columns with Large Text */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 flex-1">
                        
                        {/* 1. 시장 경제 */}
                        <div className="p-5 rounded-xl border-2 border-blue-300 bg-blue-50/40 flex flex-col justify-between shadow-2xs">
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="px-2 py-0.5 bg-blue-600 text-white text-xs font-black rounded">
                                자유 경쟁
                              </span>
                              <span className="text-xs font-bold text-blue-900">
                                시장 가격 기구 중심
                              </span>
                            </div>
                            <h4 className="text-2xl font-black text-blue-950 mb-1">
                              시장 경제
                            </h4>
                            <div className="text-xs text-blue-900/80 mb-4 pb-2 border-b border-blue-200">
                              개별 경제 주체들의 자유로운 선택
                            </div>
                            
                            <div className="p-4 bg-white rounded-xl border border-blue-200 shadow-xs">
                              <span className="text-xs font-black text-blue-800 uppercase block mb-1.5">
                                {currentCrit.title}
                              </span>
                              <p className="text-lg lg:text-xl font-black text-[#0F1E36] leading-snug">
                                {currentCrit.market}
                              </p>
                            </div>
                          </div>

                          <div className="mt-4 pt-2.5 border-t border-blue-200 text-xs text-blue-900 font-bold text-center">
                            원리: “보이지 않는 손(가격)에 의한 자율 조정”
                          </div>
                        </div>

                        {/* 2. 계획 경제 */}
                        <div className="p-5 rounded-xl border-2 border-red-300 bg-red-50/40 flex flex-col justify-between shadow-2xs">
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="px-2 py-0.5 bg-red-600 text-white text-xs font-black rounded">
                                중앙 명령
                              </span>
                              <span className="text-xs font-bold text-red-900">
                                중앙 계획 기구 중심
                              </span>
                            </div>
                            <h4 className="text-2xl font-black text-red-950 mb-1">
                              계획 경제
                            </h4>
                            <div className="text-xs text-red-900/80 mb-4 pb-2 border-b border-red-200">
                              국가의 통일된 계획과 명령·배급
                            </div>

                            <div className="p-4 bg-white rounded-xl border border-red-200 shadow-xs">
                              <span className="text-xs font-black text-red-800 uppercase block mb-1.5">
                                {currentCrit.title}
                              </span>
                              <p className="text-lg lg:text-xl font-black text-[#0F1E36] leading-snug">
                                {currentCrit.command}
                              </p>
                            </div>
                          </div>

                          <div className="mt-4 pt-2.5 border-t border-red-200 text-xs text-red-900 font-bold text-center">
                            원리: “국가 계획에 따른 중앙 집중적 목표 달성”
                          </div>
                        </div>

                        {/* 3. 혼합 경제 */}
                        <div className="p-5 rounded-xl border-2 border-emerald-400 bg-emerald-50/50 flex flex-col justify-between shadow-xs ring-1 ring-emerald-500/40">
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="px-2 py-0.5 bg-emerald-700 text-white text-xs font-black rounded">
                                현대 국가 표준
                              </span>
                              <span className="text-xs font-bold text-emerald-900">
                                시장 기능 + 정부 보완
                              </span>
                            </div>
                            <h4 className="text-2xl font-black text-emerald-950 mb-1">
                              혼합 경제
                            </h4>
                            <div className="text-xs text-emerald-900/80 mb-4 pb-2 border-b border-emerald-200">
                              시장 가격 기구 기본 + 정부 정책 보완
                            </div>

                            <div className="p-4 bg-white rounded-xl border border-emerald-300 shadow-xs">
                              <span className="text-xs font-black text-emerald-800 uppercase block mb-1.5">
                                {currentCrit.title}
                              </span>
                              <p className="text-lg lg:text-xl font-black text-[#0F1E36] leading-snug">
                                {currentCrit.mixed}
                              </p>
                            </div>
                          </div>

                          <div className="mt-4 pt-2.5 border-t border-emerald-200 text-xs text-emerald-950 font-black text-center">
                            원리: “시장 효율성과 정부 공공성의 조화”
                          </div>
                        </div>

                      </div>
                    </>
                  );
                })()}
              </div>
            ) : (
              /* 3-3. Full 4x3 Comparison Matrix for Review */
              <div className="my-3 flex-1 flex flex-col justify-between overflow-x-auto">
                <div className="min-w-[700px] border border-[#0F1E36]/15 rounded-xl overflow-hidden shadow-2xs">
                  <table className="w-full text-left border-collapse text-xs lg:text-sm">
                    <thead>
                      <tr className="bg-teal-900 text-white">
                        <th className="p-2.5 font-black text-center w-[16%]">비교 기준</th>
                        <th className="p-2.5 font-black w-[28%] bg-blue-900/80">시장 경제 (Market)</th>
                        <th className="p-2.5 font-black w-[28%] bg-red-900/80">계획 경제 (Command)</th>
                        <th className="p-2.5 font-black w-[28%] bg-emerald-900/90">혼합 경제 (Mixed)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#0F1E36]/10">
                      {criteriaData.map((c, i) => (
                        <tr key={c.id} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAF8F3]'}>
                          <td className="p-2.5 font-black text-[#0F1E36] bg-teal-50/50 text-center border-r border-[#0F1E36]/10">
                            {c.num} {c.title}
                          </td>
                          <td className="p-2.5 text-blue-950 font-bold border-r border-[#0F1E36]/10 leading-snug">
                            {c.market}
                          </td>
                          <td className="p-2.5 text-red-950 font-bold border-r border-[#0F1E36]/10 leading-snug">
                            {c.command}
                          </td>
                          <td className="p-2.5 text-emerald-950 font-black bg-emerald-50/30 leading-snug">
                            {c.mixed}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* 3-4. Bottom Pedagogical Note */}
            <div className="pt-2 flex items-center justify-between text-xs text-[#0F1E36]/70">
              <span className="font-semibold">
                ※ 순수 시장이나 순수 계획은 이론적 모형이며, <strong>현대 민주 국가는 모두 시장을 바탕으로 정부가 보완하는 '혼합 경제'</strong>를 채택하고 있습니다.
              </span>
              <button
                onClick={() => setCurrentScreen(4)}
                className="font-bold text-teal-800 hover:text-teal-900 flex items-center gap-1 cursor-pointer"
              >
                다음 화면: 종합 연결 구조도 보기 <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* [화면 4] 희소성에서 경제 체제까지 (종합 연결 구조도)                 */}
        {/* ------------------------------------------------------------------ */}
        {currentScreen === 4 && (
          <div className="h-full flex flex-col justify-between bg-white p-5 lg:p-7 rounded-2xl border border-teal-800/30 shadow-md animate-in fade-in duration-300">
            {/* 4-1. Top Concept Banner */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#0F1E36]/10">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-teal-900 text-white text-xs font-black flex items-center justify-center">
                    04
                  </span>
                  <h3 className="text-xl lg:text-2xl font-black text-[#0F1E36]">
                    희소성에서 경제 체제까지
                  </h3>
                </div>
                <p className="text-xs lg:text-sm text-[#0F1E36]/70 mt-0.5">
                  자원의 희소성에서 시작하여 경제 체제로 귀결되는 전체 논리적 흐름을 종합 정리합니다.
                </p>
              </div>

              {/* Reveal Controls */}
              <div className="flex items-center gap-1.5 self-start sm:self-auto">
                <button
                  onClick={() => setScreen4Reveal((prev) => Math.max(1, prev - 1))}
                  disabled={screen4Reveal <= 1}
                  className="px-2.5 py-1 text-xs font-bold rounded border border-[#0F1E36]/20 bg-white hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  이전
                </button>
                <button
                  onClick={() => setScreen4Reveal((prev) => Math.min(5, prev + 1))}
                  disabled={screen4Reveal >= 5}
                  className="px-2.5 py-1 text-xs font-bold rounded bg-teal-800 text-white hover:bg-teal-900 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer flex items-center gap-1"
                >
                  다음 단계 공개 ({screen4Reveal}/5)
                </button>
                <button
                  onClick={() => setScreen4Reveal(5)}
                  className="px-2.5 py-1 text-xs font-bold rounded border border-teal-300 bg-teal-50 text-teal-900 hover:bg-teal-100 cursor-pointer"
                >
                  전체 표시
                </button>
                <button
                  onClick={() => setScreen4Reveal(1)}
                  title="초기화"
                  className="p-1 rounded text-teal-800 hover:bg-teal-50 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* 4-2. 5 Causal Stage Flow Diagram */}
            <div className="my-3.5 grid grid-cols-1 md:grid-cols-5 gap-2 lg:gap-2.5 items-stretch">
              {screen4Nodes.map((node, idx) => {
                const isVisible = idx < screen4Reveal;
                const isCurrent = idx + 1 === screen4Reveal;
                const isFocused = activeDiagramNode === node.step;

                return (
                  <div
                    key={node.step}
                    onClick={() => {
                      setScreen4Reveal(Math.max(screen4Reveal, node.step));
                      setActiveDiagramNode(node.step);
                    }}
                    className={`p-3.5 rounded-xl border-2 transition-all cursor-pointer flex flex-col justify-between min-h-[145px] ${
                      isVisible
                        ? isFocused || isCurrent
                          ? 'bg-teal-900 text-white border-teal-900 shadow-md ring-2 ring-teal-500 scale-[1.01]'
                          : 'bg-white text-[#0F1E36] border-teal-700/30 hover:border-teal-600 shadow-2xs'
                        : 'bg-gray-50 text-gray-400 border-dashed border-gray-200 opacity-60'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className={`text-[10px] font-black px-1.5 py-0.5 rounded ${
                          isVisible
                            ? isFocused || isCurrent
                              ? 'bg-teal-700 text-teal-100'
                              : 'bg-teal-50 text-teal-800 border border-teal-200'
                            : 'bg-gray-100 text-gray-400'
                        }`}>
                          단계 0{node.step} · {node.label}
                        </span>
                        {idx < 4 && (
                          <span className={`hidden md:inline text-xs font-black ${isFocused || isCurrent ? 'text-teal-300' : 'text-teal-700'}`}>
                            →
                          </span>
                        )}
                      </div>
                      <h5 className="text-sm lg:text-base font-black leading-snug">
                        {node.title}
                      </h5>
                    </div>
                    <p className={`text-xs mt-2 leading-relaxed ${
                      isVisible
                        ? isFocused || isCurrent ? 'text-teal-100 font-medium' : 'text-[#0F1E36]/75'
                        : 'text-gray-400'
                    }`}>
                      {isVisible ? node.desc : '클릭하여 공개'}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* 4-3. High-Impact Summary Statement Card */}
            <div className="p-4 lg:p-5 bg-gradient-to-r from-teal-900 via-teal-950 to-slate-900 text-white rounded-xl shadow-md border border-teal-700">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-800 flex items-center justify-center shrink-0 shadow-xs">
                  <CheckCircle2 className="w-6 h-6 text-teal-300" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 bg-teal-700 text-teal-100 text-[11px] font-black rounded">
                      수업 마무리 핵심 정리
                    </span>
                    <span className="text-xs font-semibold text-teal-300">
                      단원 학습 목표 도달 확인
                    </span>
                  </div>
                  <p className="text-base lg:text-xl font-black text-white leading-relaxed">
                    “모든 사회는 <span className="text-teal-300 underline decoration-teal-400 underline-offset-4">희소성</span>으로 인해 <span className="text-teal-300 underline decoration-teal-400 underline-offset-4">기본적인 경제 문제</span>에 직면하며, 이를 해결하는 <span className="text-teal-300 underline decoration-teal-400 underline-offset-4">주체와 방식</span>에 따라 경제 체제를 구분할 수 있다.”
                  </p>
                </div>
              </div>
            </div>

            {/* 4-4. Next Topic Indicator */}
            <div className="pt-2 flex items-center justify-between text-xs text-[#0F1E36]/70">
              <span className="font-semibold">
                다음 시간: <strong>주제 17 · 같은 경제 문제, 다른 해결 방법 ('빵 부족' 상황 시뮬레이션)</strong>
              </span>
              <button
                onClick={() => setCurrentScreen(1)}
                className="font-bold text-teal-800 hover:text-teal-900 cursor-pointer"
              >
                ↺ 처음 화면(의미와 희소성)으로 돌아가기
              </button>
            </div>
          </div>
        )}

      </div>

      {/* 3. Bottom Teacher Dialogue Indicator */}
      <div className="shrink-0 p-2.5 lg:p-3 bg-white rounded-xl border border-[#0F1E36]/10 text-xs lg:text-sm text-[#0F1E36]/80 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 bg-teal-100 text-teal-900 font-extrabold text-xs rounded border border-teal-200">
            교사용 수업 포인트
          </span>
          <span className="font-medium">
            {currentScreen === 1 && '"인간의 욕망은 무한한데 자원은 유한합니다. 모든 선택에는 기회비용이 따르므로 규칙(체제)이 필요합니다."'}
            {currentScreen === 2 && '"무엇을, 어떻게, 누구를 위해 생산할 것인가는 어떤 사회든 피해 갈 수 없는 3대 질문입니다."'}
            {currentScreen === 3 && '"시장 경제는 가격 신호로, 계획 경제는 정부 명령으로, 혼합 경제는 둘의 조화로 이 문제를 해결합니다."'}
            {currentScreen === 4 && '"희소성에서 시작되어 기본 경제 문제를 거쳐 오늘날의 혼합 경제로 이어지는 큰 줄기를 기억합시다."'}
          </span>
        </div>
        <span className="text-xs text-teal-800 font-bold hidden md:inline">
          [N] 키를 누르면 상세 발문 대본과 오개념 지도 노트를 볼 수 있습니다.
        </span>
      </div>
    </div>
  );
};
