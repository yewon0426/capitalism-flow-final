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
  ShieldCheck,
  Building2,
  Compass,
  Lightbulb,
  Maximize2
} from 'lucide-react';

interface Topic16WhatIsEconomicSystemProps {
  activeStep: number;
}

export const Topic16WhatIsEconomicSystem: React.FC<Topic16WhatIsEconomicSystemProps> = ({ activeStep }) => {
  // Local active sub-screen state (1: 개념·희소성, 2: 3대 문제, 3: 체제별 해결 방식, 4: 종합 구조도)
  // Syncs with activeStep whenever activeStep changes, but teacher can also click sub-tabs directly.
  const [currentScreen, setCurrentScreen] = useState<number>(activeStep || 1);

  // When parent step changes (e.g. from bottom bar or keyboard space), sync currentScreen
  useEffect(() => {
    if (activeStep >= 1 && activeStep <= 4) {
      setCurrentScreen(activeStep);
    }
  }, [activeStep]);

  // Screen 2: 3 Fundamental Problems selected item state
  const [selectedProblem, setSelectedProblem] = useState<number>(1);

  // Screen 3: Criteria filter state ('all' | 'subject' | 'mechanism' | 'advantage' | 'limitation')
  const [selectedCriterion, setSelectedCriterion] = useState<string>('all');

  // Screen 4: Active diagram node focus for interactive classroom presentation
  const [diagramFocusNode, setDiagramFocusNode] = useState<number>(0); // 0 = all visible

  // 3 Economic Problems details for Screen 2
  const problemDetails = [
    {
      id: 1,
      num: '01',
      question: '무엇을 얼마나 생산할까?',
      subTitle: 'What & How much to produce',
      icon: ShoppingBag,
      color: 'teal',
      badge: '생산물의 종류와 수량 결정',
      coreDefinition: '한정된 자원으로 소비자가 진정으로 필요로 하는 재화와 서비스의 종류 및 생산량을 결정하는 선택입니다.',
      examples: [
        {
          tag: '소비재 vs 자본재/국방',
          desc: '당장 가계가 소비할 빵과 옷을 더 만들 것인가, 미래 생산을 위한 공장 기계나 국가 안보를 위한 국방 무기를 더 만들 것인가?'
        },
        {
          tag: '수량의 최적화',
          desc: '시장에 스마트폰을 1,000만 대 생산할 것인가, 수요를 예측하여 2,000만 대를 대량 생산할 것인가?'
        },
        {
          tag: '미래 산업 전환',
          desc: '친환경 전기차와 2차 전지에 국가적 자원을 집중할 것인가, 현재 수요가 많은 내연기관차 생산을 유지할 것인가?'
        }
      ],
      quickSummary: '소비자의 욕구와 사회적 필요를 바탕으로 생산 대상 품목과 규모를 확정'
    },
    {
      id: 2,
      num: '02',
      question: '어떻게 생산할까?',
      subTitle: 'How to produce',
      icon: Factory,
      color: 'blue',
      badge: '생산 방법과 기술·조합의 선택',
      coreDefinition: '선택된 재화와 서비스를 어떤 생산 요소(노동·자본·토지)와 기술, 어떤 주체가 담당하여 만들 것인가를 결정하는 선택입니다.',
      examples: [
        {
          tag: '노동 집약 vs 자본 집약',
          desc: '많은 일자리를 창출하는 사람 중심의 노동 집약적 방식으로 만들까, 최첨단 자동화 AI·로봇 기반으로 만들까?'
        },
        {
          tag: '에너지원과 환경',
          desc: '단기 발전 단가가 저렴한 석탄 화력발전소를 돌릴까, 초기 투자비는 들지만 탄소 배출이 적은 태양광·원자력 발전을 채택할까?'
        },
        {
          tag: '원자재 조달처',
          desc: '식품 가공에 필요한 원료를 국내 농가에서 구매할 것인가, 글로벌 공급망에서 저렴하게 수입할 것인가?'
        }
      ],
      quickSummary: '생산 효율성을 높이고 비용과 부작용을 최소화하는 최적의 기술·공정 결정'
    },
    {
      id: 3,
      num: '03',
      question: '누구를 위해 생산할까?',
      subTitle: 'For whom to produce',
      icon: Users,
      color: 'amber',
      badge: '생산 결과물의 사회적 분배 방식',
      coreDefinition: '생산된 재화와 서비스, 또는 그로부터 발생한 소득을 사회 구성원들에게 어떤 원칙과 기준으로 나눌 것인가의 선택입니다.',
      examples: [
        {
          tag: '기여도에 따른 분배',
          desc: '생산 과정에 더 많은 노동 시간, 자본, 뛰어난 기술을 기여한 사람에게 더 많은 소득(임금·이윤)을 분배할 것인가?'
        },
        {
          tag: '기본 생계와 복지',
          desc: '장애나 질병, 고령으로 생산에 참여하기 어려운 취약계층에게도 인간다운 기본 생활을 보장해 줄 것인가?'
        },
        {
          tag: '필수 공공서비스',
          desc: '의료와 의무 교육 서비스를 돈을 지불할 능력이 있는 사람만 누리게 할까, 모든 시민에게 보편적으로 제공할까?'
        }
      ],
      quickSummary: '형평성과 효율성의 균형 속에서 사회적 소득과 생산물의 최종 귀속 기준 결정'
    }
  ];

  // 4 Simple Criteria for Screen 3
  const criteriaData = [
    {
      id: 'subject',
      num: '①',
      title: '해결 주체',
      sub: '누가 결정하는가?',
      market: '민간 경제 주체 (개별 가계와 기업)',
      command: '국가 중앙 정부 및 계획 기구 관료',
      mixed: '민간 경제 주체 + 정부의 정책적 참여'
    },
    {
      id: 'mechanism',
      num: '②',
      title: '자원 배분 방식',
      sub: '무엇을 신호로 움직이는가?',
      market: '시장 가격 기구 (보이지 않는 손, 이윤 신호)',
      command: '국가의 중앙 집중적 계획, 할당, 행정 명령',
      mixed: '시장 가격 기구 기본 + 정부의 공공 정책 보완'
    },
    {
      id: 'advantage',
      num: '③',
      title: '핵심 장점',
      sub: '체제가 발휘하는 힘은?',
      market: '자율적 창의성, 경제적 효율성, 소비자 주권 실현',
      command: '국가적 우선 목표로의 신속한 자원 동원, 기본 평등',
      mixed: '시장 경제의 효율성과 정부 복지의 공공성이 조화'
    },
    {
      id: 'limitation',
      num: '④',
      title: '주요 한계',
      sub: '어떤 위험이 따르는가?',
      market: '빈부 격차 심화, 독과점, 환경 오염 등 시장 실패',
      command: '창의성 저하, 관료제 비효율, 소비자 선택권 박탈',
      mixed: '정부 실패 위험, 과도한 규제 논란, 정책 조율 부담'
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-3 md:p-5 max-w-[1540px] mx-auto select-none">
      
      {/* 1. Header with Pedagogical Breadcrumbs & 4-Sub-Screen Selector */}
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
            { step: 1, label: '화면 1: 개념과 희소성', desc: '인간의 무한한 욕망 vs 유한한 자원' },
            { step: 2, label: '화면 2: 3대 기본 경제 문제', desc: '무엇을, 어떻게, 누구를 위하여' },
            { step: 3, label: '화면 3: 체제별 해결 방식', desc: '시장·계획·혼합 4대 핵심 기준 비교' },
            { step: 4, label: '화면 4: 종합 연결 구조도', desc: '희소성 ➔ 문제 ➔ 해결 ➔ 체제' }
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
                    {isActive ? '진행 중' : '클릭'}
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

      {/* 2. Main Central Screen Stage (Divided into 4 Focused, Uncluttered Views) */}
      <div className="flex-1 flex flex-col justify-center mb-3 min-h-[460px]">

        {/* ---------------------------------------------------- */}
        {/* [화면 1] 경제 체제란 무엇인가? & 자원의 희소성         */}
        {/* ---------------------------------------------------- */}
        {currentScreen === 1 && (
          <div className="h-full flex flex-col justify-between bg-white p-5 lg:p-7 rounded-2xl border border-teal-800/30 shadow-md animate-in fade-in duration-300">
            {/* Top Prominent Core Definition Box */}
            <div className="p-4 lg:p-5 bg-gradient-to-r from-teal-50 via-emerald-50/50 to-white rounded-xl border border-teal-300">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="px-2.5 py-0.5 bg-teal-800 text-white font-black text-xs rounded-md">
                  교과서 핵심 정의
                </span>
                <span className="text-xs lg:text-sm font-bold text-teal-900">
                  경제 체제 (Economic System)란?
                </span>
              </div>
              <h3 className="text-lg lg:text-2xl font-black text-[#0F1E36] leading-snug tracking-tight">
                <span className="text-teal-900 underline decoration-teal-500/50 underline-offset-4">자원의 희소성</span>으로 인해 발생하는 <span className="text-teal-900 underline decoration-teal-500/50 underline-offset-4">기본적 경제 문제</span>를 해결하기 위해 각 사회가 채택한 <span className="text-teal-900 underline decoration-teal-500/50 underline-offset-4">제도와 방식의 총체</span>
              </h3>
            </div>

            {/* Central Visual: High-Impact Balance Scale & Contrast Board */}
            <div className="my-4 grid grid-cols-1 md:grid-cols-11 gap-3.5 items-center">
              
              {/* Left Side: Infinite Desires */}
              <div className="md:col-span-4 p-4 lg:p-5 bg-red-50/80 rounded-xl border-2 border-red-200 flex flex-col justify-between text-center shadow-2xs">
                <div>
                  <div className="inline-block px-2.5 py-0.5 bg-red-600 text-white text-xs font-black rounded-md mb-2">
                    인간의 물질적 욕구
                  </div>
                  <h4 className="text-2xl lg:text-3xl font-black text-red-950 mb-1">
                    무한함 (Unlimited ∞)
                  </h4>
                  <p className="text-xs lg:text-sm text-red-900/80 font-medium leading-relaxed">
                    의식주, 편리함, 문화, 여가, 의료, 안전 등 하나를 충족하면 또 다른 욕망이 끝없이 생겨남
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-red-200/80 text-xs font-bold text-red-800">
                  "더 좋은 것, 더 많은 것을 원하는 인간 본성"
                </div>
              </div>

              {/* Center: The Imbalance (Scale Icon) */}
              <div className="md:col-span-3 flex flex-col items-center justify-center p-3 bg-[#FAF8F3] rounded-xl border border-[#0F1E36]/10 text-center">
                <Scale className="w-10 h-10 text-teal-800 mb-1" />
                <span className="text-sm font-black text-red-700 bg-red-100 px-3 py-0.5 rounded-full border border-red-200">
                  욕망 &gt; 자원 (불균형)
                </span>
                <span className="text-base lg:text-lg font-black text-teal-950 mt-1.5">
                  자원의 희소성
                </span>
                <span className="text-xs text-[#0F1E36]/70 mt-0.5 font-medium">
                  (Scarcity)
                </span>
              </div>

              {/* Right Side: Limited Resources */}
              <div className="md:col-span-4 p-4 lg:p-5 bg-blue-50/80 rounded-xl border-2 border-blue-200 flex flex-col justify-between text-center shadow-2xs">
                <div>
                  <div className="inline-block px-2.5 py-0.5 bg-blue-600 text-white text-xs font-black rounded-md mb-2">
                    지구상 생산 자원
                  </div>
                  <h4 className="text-2xl lg:text-3xl font-black text-blue-950 mb-1">
                    유한함 (Limited)
                  </h4>
                  <p className="text-xs lg:text-sm text-blue-900/80 font-medium leading-relaxed">
                    토지, 노동력, 자본(기계·공장), 천연자원, 시간 등 욕구를 채워줄 생산 수단은 언제나 한정됨
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-blue-200/80 text-xs font-bold text-blue-800">
                  "아무리 부유한 국가도 자원은 한정되어 있음"
                </div>
              </div>

            </div>

            {/* Bottom 2 Pillars: Scarcity Distinction & Inevitable Choice */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              <div className="p-3.5 lg:p-4 bg-[#FAF8F3] rounded-xl border border-[#0F1E36]/12">
                <div className="flex items-center gap-2 mb-1.5">
                  <Lightbulb className="w-4 h-4 text-amber-600 shrink-0" />
                  <span className="text-xs font-black text-[#0F1E36] uppercase tracking-wider">
                    오개념 바로잡기: 희소성 vs 희귀성
                  </span>
                </div>
                <p className="text-xs lg:text-sm text-[#0F1E36]/80 font-medium leading-relaxed">
                  • <strong>희귀성</strong>: 자원의 절대적인 매장량이나 개수가 적은 상태.<br />
                  • <strong>희소성</strong>: 자원의 절대량과 무관하게 <strong>인간의 욕망에 비해 상대적으로 부족한 상태</strong>입니다. 다이아몬드는 희소하고, 아무도 원하지 않는 길가의 돌멩이는 희소하지 않습니다.
                </p>
              </div>

              <div className="p-3.5 lg:p-4 bg-teal-900 text-white rounded-xl border border-teal-900 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-300 shrink-0" />
                    <span className="text-xs font-black text-teal-200 uppercase tracking-wider">
                      필연적 귀결: 선택의 기준과 규칙의 필요성
                    </span>
                  </div>
                  <p className="text-xs lg:text-sm text-teal-50 font-medium leading-relaxed">
                    모든 것을 다 가질 수 없기 때문에 <strong>선택과 포기(기회비용)</strong>가 발생합니다. 구성원들이 충돌 없이 자원을 배분하기 위한 <strong>사회적 합의와 제도(= 경제 체제)</strong>가 반드시 필요합니다.
                  </p>
                </div>
                <button
                  onClick={() => setCurrentScreen(2)}
                  className="mt-2 self-end text-xs font-bold text-teal-200 hover:text-white flex items-center gap-1 cursor-pointer"
                >
                  다음 단계: 3대 기본 경제 문제 살펴보기 <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ---------------------------------------------------- */}
        {/* [화면 2] 3대 기본 경제 문제 (Sequential Click Disclosure) */}
        {/* ---------------------------------------------------- */}
        {currentScreen === 2 && (
          <div className="h-full flex flex-col justify-between bg-white p-5 lg:p-6 rounded-2xl border border-teal-800/30 shadow-md animate-in fade-in duration-300">
            {/* Top Concept Banner */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#0F1E36]/10">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-teal-900 text-white text-xs font-black flex items-center justify-center">
                    02
                  </span>
                  <h3 className="text-xl lg:text-2xl font-black text-[#0F1E36]">
                    사회적 선택: 3대 기본 경제 문제
                  </h3>
                </div>
                <p className="text-xs lg:text-sm text-[#0F1E36]/70 mt-0.5">
                  자원의 희소성 때문에 어떤 사회든 반드시 직면하여 풀어야 하는 3가지 핵심 질문입니다.
                </p>
              </div>
              <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-md self-start sm:self-auto">
                카드를 클릭하여 상세 내용과 교과서 사례 확인
              </span>
            </div>

            {/* 3 Selector Cards (Compact when unselected, Prominent when selected) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-3">
              {problemDetails.map((item) => {
                const isSelected = selectedProblem === item.id;
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedProblem(item.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'bg-teal-900 text-white border-teal-900 shadow-md ring-2 ring-teal-500/50 scale-[1.01]'
                        : 'bg-[#FAF8F3] hover:bg-white border-[#0F1E36]/15 text-[#0F1E36]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-xs font-mono font-black ${isSelected ? 'text-teal-200' : 'text-teal-800'}`}>
                        질문 {item.num}
                      </span>
                      <Icon className={`w-4 h-4 ${isSelected ? 'text-teal-200' : 'text-teal-700'}`} />
                    </div>
                    <div>
                      <h4 className="text-base lg:text-lg font-black leading-tight">
                        {item.question}
                      </h4>
                      <p className={`text-[11px] mt-1 font-semibold ${isSelected ? 'text-teal-100' : 'text-[#0F1E36]/60'}`}>
                        {item.badge}
                      </p>
                    </div>
                    <div className={`mt-2 pt-2 border-t text-[10px] font-bold flex items-center justify-between ${
                      isSelected ? 'border-teal-700 text-teal-200' : 'border-[#0F1E36]/10 text-teal-800'
                    }`}>
                      <span>{isSelected ? '선택되어 크게 열람 중' : '클릭하여 상세 보기'}</span>
                      <ChevronRightSmall />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Large Active Detailed View of the Selected Problem */}
            {(() => {
              const active = problemDetails.find((p) => p.id === selectedProblem) || problemDetails[0];
              const ProbIcon = active.icon;

              return (
                <div className="p-4 lg:p-5 bg-gradient-to-br from-[#FAF8F3] to-white rounded-xl border-2 border-teal-700/40 shadow-sm animate-in fade-in duration-200">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-3 border-b border-[#0F1E36]/10">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-teal-900 text-white flex items-center justify-center shrink-0 shadow-xs">
                        <ProbIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-black text-teal-800">
                            QUESTION {active.num}
                          </span>
                          <span className="text-xs text-[#0F1E36]/50">
                            {active.subTitle}
                          </span>
                        </div>
                        <h4 className="text-xl lg:text-2xl font-black text-[#0F1E36] tracking-tight">
                          {active.question}
                        </h4>
                      </div>
                    </div>
                    <div className="px-3 py-1 bg-white rounded-lg border border-teal-300 text-teal-900 text-xs lg:text-sm font-bold">
                      {active.badge}
                    </div>
                  </div>

                  {/* Core Definition in 1~2 clear lines */}
                  <div className="my-3 p-3 bg-teal-50/70 rounded-lg border border-teal-200">
                    <p className="text-sm lg:text-base font-bold text-[#0F1E36] leading-relaxed">
                      💡 <strong>핵심 개념</strong>: {active.coreDefinition}
                    </p>
                  </div>

                  {/* High School Textbook Concrete Classroom Examples */}
                  <div>
                    <h5 className="text-xs font-black text-teal-950 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-teal-700" />
                      고등학교 교과서 속 구체적 사례 (현실 속 3대 선택)
                    </h5>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
                      {active.examples.map((ex, idx) => (
                        <div key={idx} className="p-3 bg-white rounded-lg border border-[#0F1E36]/12 shadow-2xs flex flex-col justify-between">
                          <div>
                            <span className="text-[11px] font-black text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200 inline-block mb-1.5">
                              사례 0{idx + 1} · {ex.tag}
                            </span>
                            <p className="text-xs lg:text-sm text-[#0F1E36] font-medium leading-snug">
                              "{ex.desc}"
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* Bottom Navigation Prompts */}
            <div className="pt-2 flex items-center justify-between text-xs text-[#0F1E36]/70">
              <span className="font-semibold">
                📌 3대 질문은 어떤 사회든 피할 수 없으며, 단지 <strong>'누가, 어떤 방식으로 해결하는가'</strong>에 따라 경제 체제가 나뉩니다.
              </span>
              <button
                onClick={() => setCurrentScreen(3)}
                className="font-bold text-teal-800 hover:text-teal-900 flex items-center gap-1 cursor-pointer"
              >
                다음 단계: 체제별 해결 방식 비교 <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* ---------------------------------------------------- */}
        {/* [화면 3] 경제 체제의 유형별 해결 방식 (4 Criteria)   */}
        {/* ---------------------------------------------------- */}
        {currentScreen === 3 && (
          <div className="h-full flex flex-col justify-between bg-white p-5 lg:p-6 rounded-2xl border border-teal-800/30 shadow-md animate-in fade-in duration-300">
            {/* Top Concept Banner */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#0F1E36]/10">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-teal-900 text-white text-xs font-black flex items-center justify-center">
                    03
                  </span>
                  <h3 className="text-xl lg:text-2xl font-black text-[#0F1E36]">
                    경제 체제의 유형별 해결 방식
                  </h3>
                </div>
                <p className="text-xs lg:text-sm text-[#0F1E36]/70 mt-0.5">
                  시장 경제, 계획 경제, 혼합 경제가 3대 기본 경제 문제를 해결하는 4대 핵심 기준을 비교합니다.
                </p>
              </div>

              {/* Criteria Selector Filter */}
              <div className="flex items-center gap-1.5 self-start sm:self-auto bg-[#FAF8F3] p-1 rounded-lg border border-[#0F1E36]/15">
                {[
                  { id: 'all', label: '전체 4대 기준' },
                  { id: 'subject', label: '① 주체' },
                  { id: 'mechanism', label: '② 배분 방식' },
                  { id: 'advantage', label: '③ 장점' },
                  { id: 'limitation', label: '④ 한계' }
                ].map((crit) => (
                  <button
                    key={crit.id}
                    onClick={() => setSelectedCriterion(crit.id)}
                    className={`px-2.5 py-1 text-xs font-bold rounded-md transition-all cursor-pointer ${
                      selectedCriterion === crit.id
                        ? 'bg-teal-800 text-white shadow-xs'
                        : 'text-[#0F1E36]/70 hover:bg-white'
                    }`}
                  >
                    {crit.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 3 System Columns with 4 Criteria Rows */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-3 flex-1">
              
              {/* Column 1: 시장 경제 (Market Economy) */}
              <div className="p-4 rounded-xl border-2 border-blue-200 bg-blue-50/30 flex flex-col justify-between shadow-2xs">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-0.5 bg-blue-600 text-white text-xs font-black rounded">
                      자유 경쟁
                    </span>
                    <span className="text-[11px] font-bold text-blue-900">사적 소유 중심</span>
                  </div>
                  <h4 className="text-xl font-black text-blue-950 mb-1">
                    시장 경제 (Market)
                  </h4>
                  <p className="text-xs text-blue-900/80 mb-3">
                    개별 경제 주체들의 자유로운 선택과 시장 가격 기구로 문제를 해결
                  </p>

                  {/* Criteria Points */}
                  <div className="space-y-2">
                    {criteriaData
                      .filter((c) => selectedCriterion === 'all' || selectedCriterion === c.id)
                      .map((c) => (
                        <div key={c.id} className="p-2.5 bg-white rounded-lg border border-blue-200 shadow-2xs">
                          <span className="text-[10px] font-black text-blue-800 uppercase block mb-0.5">
                            {c.num} {c.title}
                          </span>
                          <span className="text-xs lg:text-sm font-bold text-blue-950 leading-snug block">
                            {c.market}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>

                <div className="mt-3 pt-2 border-t border-blue-200 text-[11px] text-blue-900 font-semibold text-center">
                  핵심 원리: "보이지 않는 손(가격)에 의한 자율 조정"
                </div>
              </div>

              {/* Column 2: 계획 경제 (Command Economy) */}
              <div className="p-4 rounded-xl border-2 border-red-200 bg-red-50/30 flex flex-col justify-between shadow-2xs">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-0.5 bg-red-600 text-white text-xs font-black rounded">
                      명령·할당
                    </span>
                    <span className="text-[11px] font-bold text-red-900">공적 소유 중심</span>
                  </div>
                  <h4 className="text-xl font-black text-red-950 mb-1">
                    계획 경제 (Command)
                  </h4>
                  <p className="text-xs text-red-900/80 mb-3">
                    중앙 정부의 통일된 계획과 명령, 공적 배급으로 문제를 해결
                  </p>

                  {/* Criteria Points */}
                  <div className="space-y-2">
                    {criteriaData
                      .filter((c) => selectedCriterion === 'all' || selectedCriterion === c.id)
                      .map((c) => (
                        <div key={c.id} className="p-2.5 bg-white rounded-lg border border-red-200 shadow-2xs">
                          <span className="text-[10px] font-black text-red-800 uppercase block mb-0.5">
                            {c.num} {c.title}
                          </span>
                          <span className="text-xs lg:text-sm font-bold text-red-950 leading-snug block">
                            {c.command}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>

                <div className="mt-3 pt-2 border-t border-red-200 text-[11px] text-red-900 font-semibold text-center">
                  핵심 원리: "국가 계획에 따른 중앙 집중적 목표 달성"
                </div>
              </div>

              {/* Column 3: 혼합 경제 (Mixed Economy) */}
              <div className="p-4 rounded-xl border-2 border-emerald-300 bg-emerald-50/40 flex flex-col justify-between shadow-xs ring-1 ring-emerald-500/30">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-0.5 bg-emerald-700 text-white text-xs font-black rounded">
                      현대 국가의 표준
                    </span>
                    <span className="text-[11px] font-bold text-emerald-900">시장 + 정부 보완</span>
                  </div>
                  <h4 className="text-xl font-black text-emerald-950 mb-1">
                    혼합 경제 (Mixed)
                  </h4>
                  <p className="text-xs text-emerald-900/80 mb-3">
                    시장의 가격 기구를 기본으로 하되, 정부가 개입하여 시장 실패를 보완
                  </p>

                  {/* Criteria Points */}
                  <div className="space-y-2">
                    {criteriaData
                      .filter((c) => selectedCriterion === 'all' || selectedCriterion === c.id)
                      .map((c) => (
                        <div key={c.id} className="p-2.5 bg-white rounded-lg border border-emerald-200 shadow-2xs">
                          <span className="text-[10px] font-black text-emerald-800 uppercase block mb-0.5">
                            {c.num} {c.title}
                          </span>
                          <span className="text-xs lg:text-sm font-bold text-emerald-950 leading-snug block">
                            {c.mixed}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>

                <div className="mt-3 pt-2 border-t border-emerald-200 text-[11px] text-emerald-950 font-bold text-center">
                  핵심 원리: "효율성(시장)과 형평성(정부)의 조화로운 추구"
                </div>
              </div>

            </div>

            {/* Bottom Pedagogical Summary */}
            <div className="pt-2 flex items-center justify-between text-xs text-[#0F1E36]/70">
              <span className="font-semibold">
                ※ 순수 시장이나 순수 계획은 이론적 모형이며, <strong>현대 민주 국가는 모두 혼합 경제 체제</strong>를 채택하고 있습니다.
              </span>
              <button
                onClick={() => setCurrentScreen(4)}
                className="font-bold text-teal-800 hover:text-teal-900 flex items-center gap-1 cursor-pointer"
              >
                다음 단계: 종합 연결 구조도 보기 <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* ---------------------------------------------------- */}
        {/* [화면 4] 종합 정리 (Full Structural Causal Diagram)   */}
        {/* ---------------------------------------------------- */}
        {currentScreen === 4 && (
          <div className="h-full flex flex-col justify-between bg-white p-5 lg:p-7 rounded-2xl border border-teal-800/30 shadow-md animate-in fade-in duration-300">
            {/* Top Concept Banner */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#0F1E36]/10">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-teal-900 text-white text-xs font-black flex items-center justify-center">
                    04
                  </span>
                  <h3 className="text-xl lg:text-2xl font-black text-[#0F1E36]">
                    한눈에 보는 종합 연결 구조도
                  </h3>
                </div>
                <p className="text-xs lg:text-sm text-[#0F1E36]/70 mt-0.5">
                  자원의 희소성에서 시작하여 3대 기본 경제 문제를 거쳐 세 경제 체제로 귀결되는 전체 인과관계입니다.
                </p>
              </div>
              <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-md self-start sm:self-auto">
                각 블록을 클릭하면 핵심 요약 확인 가능
              </span>
            </div>

            {/* Central Causal Flow Diagram */}
            <div className="my-4 flex flex-col md:flex-row items-center justify-between gap-2 lg:gap-3">
              
              {/* Step 1: Scarcity */}
              <button
                onClick={() => setDiagramFocusNode(1)}
                className={`flex-1 w-full p-4 rounded-xl border-2 text-left transition-all cursor-pointer ${
                  diagramFocusNode === 1
                    ? 'border-red-600 bg-red-50/70 shadow-md ring-2 ring-red-400'
                    : 'border-red-200 bg-red-50/40 hover:bg-red-50'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-black text-red-700 bg-white px-2 py-0.5 rounded border border-red-200">
                    STEP 01. 출발 조건
                  </span>
                  <Scale className="w-4 h-4 text-red-600" />
                </div>
                <h4 className="text-base lg:text-lg font-black text-red-950">
                  자원의 희소성
                </h4>
                <p className="text-xs text-red-900/80 font-semibold mt-1">
                  인간의 무한한 욕망 &gt; 존재하는 유한한 자원
                </p>
                <div className="mt-2 text-[11px] text-red-800 font-medium">
                  ➔ 피할 수 없는 선택과 기회비용 발생
                </div>
              </button>

              <ArrowRight className="w-6 h-6 text-teal-700 shrink-0 hidden md:block" />
              <ArrowDown className="w-6 h-6 text-teal-700 shrink-0 md:hidden" />

              {/* Step 2: 3 Basic Problems */}
              <button
                onClick={() => setDiagramFocusNode(2)}
                className={`flex-1 w-full p-4 rounded-xl border-2 text-left transition-all cursor-pointer ${
                  diagramFocusNode === 2
                    ? 'border-teal-700 bg-teal-50/80 shadow-md ring-2 ring-teal-500'
                    : 'border-teal-300 bg-teal-50/40 hover:bg-teal-50'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-black text-teal-800 bg-white px-2 py-0.5 rounded border border-teal-200">
                    STEP 02. 사회적 질문
                  </span>
                  <HelpCircle className="w-4 h-4 text-teal-700" />
                </div>
                <h4 className="text-base lg:text-lg font-black text-teal-950">
                  3대 기본 경제 문제
                </h4>
                <p className="text-xs text-teal-900 font-semibold mt-1">
                  ① 무엇을 얼마나? ② 어떻게? ③ 누구를 위해?
                </p>
                <div className="mt-2 text-[11px] text-teal-800 font-medium">
                  ➔ 사회적 생산과 분배의 선택 기준 필요
                </div>
              </button>

              <ArrowRight className="w-6 h-6 text-teal-700 shrink-0 hidden md:block" />
              <ArrowDown className="w-6 h-6 text-teal-700 shrink-0 md:hidden" />

              {/* Step 3: Divergence of Methods */}
              <button
                onClick={() => setDiagramFocusNode(3)}
                className={`flex-1 w-full p-4 rounded-xl border-2 text-left transition-all cursor-pointer ${
                  diagramFocusNode === 3
                    ? 'border-amber-600 bg-amber-50/80 shadow-md ring-2 ring-amber-400'
                    : 'border-amber-200 bg-amber-50/40 hover:bg-amber-50'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-black text-amber-800 bg-white px-2 py-0.5 rounded border border-amber-200">
                    STEP 03. 해결 방식
                  </span>
                  <Compass className="w-4 h-4 text-amber-700" />
                </div>
                <h4 className="text-base lg:text-lg font-black text-amber-950">
                  해결 주체와 수단
                </h4>
                <p className="text-xs text-amber-900 font-semibold mt-1">
                  민간의 가격 기구 vs 국가의 명령·계획
                </p>
                <div className="mt-2 text-[11px] text-amber-800 font-medium">
                  ➔ 어떤 룰을 우선할 것인가의 제도적 선택
                </div>
              </button>

              <ArrowRight className="w-6 h-6 text-teal-700 shrink-0 hidden md:block" />
              <ArrowDown className="w-6 h-6 text-teal-700 shrink-0 md:hidden" />

              {/* Step 4: 3 Economic Systems */}
              <button
                onClick={() => setDiagramFocusNode(4)}
                className={`flex-1 w-full p-4 rounded-xl border-2 text-left transition-all cursor-pointer ${
                  diagramFocusNode === 4
                    ? 'border-emerald-700 bg-emerald-50/80 shadow-md ring-2 ring-emerald-500'
                    : 'border-emerald-300 bg-emerald-50/40 hover:bg-emerald-50'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-black text-emerald-800 bg-white px-2 py-0.5 rounded border border-emerald-200">
                    STEP 04. 최종 제도
                  </span>
                  <Layers className="w-4 h-4 text-emerald-700" />
                </div>
                <h4 className="text-base lg:text-lg font-black text-emerald-950">
                  3대 경제 체제
                </h4>
                <p className="text-xs text-emerald-900 font-semibold mt-1">
                  시장 경제 · 계획 경제 · 혼합 경제
                </p>
                <div className="mt-2 text-[11px] text-emerald-800 font-medium">
                  ➔ 현대 국가는 시장+정부 '혼합 경제' 채택
                </div>
              </button>

            </div>

            {/* Bottom Comprehensive Synthesis Callout */}
            <div className="p-4 bg-gradient-to-r from-teal-900 via-teal-950 to-slate-900 text-white rounded-xl shadow-md">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-teal-800 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-teal-300" />
                </div>
                <div>
                  <h5 className="text-sm lg:text-base font-black text-teal-200">
                    수업 마무리 핵심 정리: 왜 경제 체제를 배우는가?
                  </h5>
                  <p className="text-xs lg:text-sm text-teal-100/90 font-medium mt-1 leading-relaxed">
                    "자원의 희소성은 모든 사회의 숙명입니다. 그러나 그에 맞서 <strong>'무엇을, 어떻게, 누구를 위해'</strong> 생산할지 결정하는 방식은 사회마다 달랐습니다. 오늘날 우리는 시장 경제의 활력과 효율성을 기본으로 삼으면서도, 빈부격차와 복지 사각지대를 보완하기 위해 정부가 함께 협력하는 <strong>혼합 경제 체제</strong>를 가꾸어나가고 있습니다."
                  </p>
                </div>
              </div>
            </div>

            {/* Next Topic Indicator */}
            <div className="pt-2 flex items-center justify-between text-xs text-[#0F1E36]/70">
              <span className="font-semibold">
                다음 시간 예고: <strong>주제 17 · 같은 경제 문제, 다른 해결 방법 ('빵 부족' 상황 시뮬레이션)</strong>
              </span>
              <button
                onClick={() => setCurrentScreen(1)}
                className="font-bold text-teal-800 hover:text-teal-900 cursor-pointer"
              >
                ↺ 처음 화면(개념과 희소성)으로 돌아가기
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

// Mini internal helper icon for cleaner markup
const ChevronRightSmall: React.FC = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6" />
  </svg>
);
