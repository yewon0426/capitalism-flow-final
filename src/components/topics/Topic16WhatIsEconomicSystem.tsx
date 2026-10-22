import React, { useState } from 'react';
import { HelpCircle, Scale, ShoppingBag, Factory, Users, ArrowRight, ArrowDown, ChevronRight, CheckCircle2, Sparkles, AlertCircle } from 'lucide-react';

interface Topic16WhatIsEconomicSystemProps {
  activeStep: number;
}

export const Topic16WhatIsEconomicSystem: React.FC<Topic16WhatIsEconomicSystemProps> = ({ activeStep }) => {
  // Selected problem card state for classroom focus
  const [selectedProblem, setSelectedProblem] = useState<number>(1);

  const problemDetails = [
    {
      id: 1,
      num: '01',
      question: '무엇을 얼마나 생산할까?',
      subTitle: 'What & How much to produce',
      icon: ShoppingBag,
      color: 'teal',
      focusBadge: '생산물의 종류와 수량 결정',
      coreDefinition: '한정된 자원으로 소비자가 진정으로 원하고 사회에 필요한 재화와 서비스의 종류 및 생산량을 결정하는 문제입니다.',
      examples: [
        '소비재(빵·쌀·의류)를 더 만들 것인가, 자본재(기계·공장)나 국방재(무기)를 더 만들 것인가?',
        '스마트폰을 1,000만 대 생산할 것인가, 2,000만 대 생산할 것인가?',
        '미래를 위한 친환경 전기차에 자원을 집중할 것인가, 현재 수요가 많은 내연기관차를 유지할 것인가?'
      ],
      systemResolution: {
        market: '소비자의 수요와 시장 가격(이윤 가능성)을 보고 기업이 자율적으로 결정',
        command: '중앙 정부 계획 기구가 국가적 필요와 목표에 따라 품목과 생산 할당량을 결정',
        mixed: '시장의 가격 신호로 결정하되, 필수 공공재나 전략 산업은 정부 정책으로 조정'
      }
    },
    {
      id: 2,
      num: '02',
      question: '어떻게 생산할까?',
      subTitle: 'How to produce',
      icon: Factory,
      color: 'blue',
      focusBadge: '생산 방법과 기술·조합의 선택',
      coreDefinition: '선택된 재화와 서비스를 어떤 자원과 생산 기술, 어떤 주체가 담당하여 만들 것인가를 결정하는 문제입니다.',
      examples: [
        '많은 노동자를 고용하는 노동 집약적 방식으로 만들까, 최첨단 자동화 로봇을 쓰는 자본 집약적 방식으로 만들까?',
        '비용이 저렴한 화석 연료 발전소를 돌릴까, 환경비용이 적은 태양광·원자력 발전을 채택할까?',
        '원자재를 국내에서 조달할 것인가, 해외 글로벌 공급망에서 수입할 것인가?'
      ],
      systemResolution: {
        market: '기업이 생산 비용을 최소화하고 생산성을 극대화하는 가장 효율적인 기술 선택',
        command: '국가가 고용 목표, 가용 자원, 기술 정책에 맞춰 생산 공정과 투입 자원을 배분',
        mixed: '기업의 효율적 기술 혁신을 장려하면서, 탄소 배출 규제나 산업 안전 법률로 가이드'
      }
    },
    {
      id: 3,
      num: '03',
      question: '누구를 위해 생산할까?',
      subTitle: 'For whom to produce',
      icon: Users,
      color: 'amber',
      focusBadge: '생산 결과물의 사회적 분배 방식',
      coreDefinition: '생산된 재화와 서비스, 또는 그로부터 얻은 소득을 사회 구성원들에게 어떤 원칙과 기준으로 나눌 것인가의 문제입니다.',
      examples: [
        '생산 과정에 기여한 기여도(능력·노동·자본 투자)에 따라 소득을 분배할 것인가?',
        '가난하거나 질병으로 일할 수 없는 사람에게 최소한의 기본 생계를 보장해 줄 것인가?',
        '의료 서비스나 교육을 지불 능력에 따라 이용하게 할 것인가, 국민 모두에게 무상 배급할 것인가?'
      ],
      systemResolution: {
        market: '시장에 제공한 생산 요소의 가치와 기여도(임금, 지대, 이자, 이윤) 및 구매력에 따라 분배',
        command: '국가가 설정한 공공 분배 기준(직급, 가족 수, 공헌도, 사회적 필요)에 따라 배급',
        mixed: '시장 기여도에 따른 1차 분배 + 누진세 및 사회보장제도를 통한 정부의 재분배 보완'
      }
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-3 md:p-5 max-w-[1540px] mx-auto select-none">
      {/* 1. Classroom Top Header & Key Standard Banner */}
      <div className="shrink-0 mb-3">
        <div className="flex items-center gap-2 mb-1">
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

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2">
          <div>
            <h2 className="text-2xl lg:text-3xl font-black text-[#0F1E36] tracking-tight flex items-center gap-2">
              <span>경제 체제란 무엇인가?</span>
              <span className="text-sm lg:text-base font-normal text-[#0F1E36]/60">
                — 자원의 희소성과 3대 기본 경제 문제
              </span>
            </h2>
          </div>

          <div className="px-3.5 py-1.5 bg-teal-50 border border-teal-200 rounded-lg text-teal-900 text-xs lg:text-sm font-bold flex items-center gap-1.5 self-start lg:self-auto">
            <HelpCircle className="w-4 h-4 text-teal-700 shrink-0" />
            <span>수업 핵심 질문: 사회는 왜 희소한 자원을 배분하는 규칙(체제)을 만들어야 할까?</span>
          </div>
        </div>

        {/* Core Definition Banner */}
        <div className="mt-2 p-3 lg:p-3.5 bg-white rounded-xl border border-[#0F1E36]/12 shadow-2xs flex flex-col sm:flex-row sm:items-center gap-2.5">
          <span className="text-xs lg:text-sm font-black text-white bg-teal-800 px-3 py-1 rounded-md shrink-0 self-start sm:self-auto">
            교과서 핵심 정의
          </span>
          <p className="text-sm lg:text-lg font-bold text-[#0F1E36] leading-relaxed">
            <span className="text-teal-900 underline decoration-teal-500/50 underline-offset-4">자원의 희소성</span>으로 인해 발생하는 <span className="text-teal-900 underline decoration-teal-500/50 underline-offset-4">3대 기본 경제 문제</span>(무엇을, 어떻게, 누구를 위해)를 해결하기 위해 각 사회가 채택한 <span className="text-teal-900 underline decoration-teal-500/50 underline-offset-4">제도와 방식의 총체</span>
          </p>
        </div>
      </div>

      {/* 2. Central Classroom Visual Structure: 3 Progressive Sections */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-3.5 lg:gap-4 items-stretch mb-3 min-h-0">
        
        {/* Left Column (5 Cols): Step 1 Scarcity & Step 3 Big Picture Diagram */}
        <div className="lg:col-span-5 flex flex-col gap-3 justify-between">
          
          {/* Step 1 Card: 자원의 희소성과 경제 체제 */}
          <div
            className={`p-4 lg:p-4.5 rounded-xl border transition-all duration-300 flex-1 flex flex-col justify-between ${
              activeStep >= 1
                ? 'bg-white border-teal-700 shadow-sm ring-1 ring-teal-600/30'
                : 'bg-white/50 border-[#0F1E36]/10 opacity-50'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-teal-900 text-white font-black text-xs flex items-center justify-center">
                    01
                  </span>
                  <h3 className="text-base lg:text-lg font-black text-[#0F1E36]">
                    출발점: 자원의 희소성 (Scarcity)
                  </h3>
                </div>
                <span className="text-xs font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                  모든 사회의 출발 조건
                </span>
              </div>

              {/* Scarcity visual balance scale */}
              <div className="my-2 p-2.5 bg-[#FAF8F3] rounded-lg border border-[#0F1E36]/10 flex items-center justify-between gap-3">
                <div className="flex-1 text-center p-2 bg-red-50 rounded border border-red-200">
                  <span className="text-xs font-bold text-red-700 block">인간의 욕망</span>
                  <span className="text-base lg:text-lg font-black text-red-900">무한함 (∞)</span>
                </div>
                <div className="flex flex-col items-center shrink-0">
                  <Scale className="w-6 h-6 text-teal-800" />
                  <span className="text-[11px] font-black text-[#0F1E36]/70 mt-0.5">&gt; 불균형</span>
                </div>
                <div className="flex-1 text-center p-2 bg-blue-50 rounded border border-blue-200">
                  <span className="text-xs font-bold text-blue-700 block">존재하는 자원</span>
                  <span className="text-base lg:text-lg font-black text-blue-900">유한함 (한정)</span>
                </div>
              </div>

              <div className="space-y-1.5 text-xs lg:text-sm text-[#0F1E36]/80 font-medium">
                <p className="leading-snug">
                  • <strong>희소성 vs 희귀성</strong>: 자원의 절대량이 적어서가 아니라, 인간의 끝없는 욕구에 비해 상대적으로 부족하기 때문에 발생합니다.
                </p>
                <p className="leading-snug">
                  • <strong>불가피한 선택</strong>: 모든 것을 다 가질 수 없으므로, 어떤 것을 선택하고 어떤 것을 포기할지(기회비용) 결정해야 합니다.
                </p>
              </div>
            </div>

            <div className="mt-2 pt-2 border-t border-[#0F1E36]/10 flex items-center justify-between text-xs text-teal-900 font-bold bg-teal-50/60 p-2 rounded">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-700" />
                결론: 선택의 기준과 규칙이 반드시 필요함
              </span>
              <span className="text-teal-700">➔ 경제 체제 등장</span>
            </div>
          </div>

          {/* Step 3 Card: 생산·분배 연결 도식 (전체 구조도) */}
          <div
            className={`p-4 lg:p-4.5 rounded-xl border transition-all duration-300 flex-1 flex flex-col justify-between ${
              activeStep >= 3
                ? 'bg-gradient-to-br from-white to-[#F6F9F8] border-teal-800 shadow-md ring-1 ring-teal-700/40'
                : 'bg-white/50 border-[#0F1E36]/10 opacity-50'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-teal-900 text-white font-black text-xs flex items-center justify-center">
                    03
                  </span>
                  <h3 className="text-base lg:text-lg font-black text-[#0F1E36]">
                    생산·분배 연결 도식 (자원 배분 구조)
                  </h3>
                </div>
                <span className="text-xs font-bold text-teal-800 bg-teal-100 px-2 py-0.5 rounded border border-teal-200">
                  3단계 종합 흐름
                </span>
              </div>

              {/* Connected flow diagram */}
              <div className="space-y-2 mt-2">
                {/* Node 1 */}
                <div className="p-2 bg-white rounded-lg border border-[#0F1E36]/15 flex items-center justify-between shadow-2xs">
                  <span className="text-xs font-extrabold text-[#0F1E36]">① 자원의 희소성</span>
                  <span className="text-[11px] font-semibold text-[#0F1E36]/70">무한한 인간 욕망 vs 한정된 자원</span>
                </div>

                <div className="flex justify-center -my-1 text-teal-700">
                  <ArrowDown className="w-4 h-4 animate-bounce" />
                </div>

                {/* Node 2 */}
                <div className="p-2 bg-teal-50 rounded-lg border border-teal-300 flex items-center justify-between shadow-2xs">
                  <span className="text-xs font-extrabold text-teal-950">② 3대 기본 경제 문제 발생</span>
                  <span className="text-[11px] font-bold text-teal-800">무엇을? 어떻게? 누구를 위해?</span>
                </div>

                <div className="flex justify-center -my-1 text-teal-700">
                  <ArrowDown className="w-4 h-4" />
                </div>

                {/* Node 3: 3 Branches of Economic Systems */}
                <div className="p-2 bg-white rounded-lg border border-[#0F1E36]/15 shadow-2xs">
                  <div className="text-[11px] font-bold text-[#0F1E36]/70 text-center mb-1.5">
                    ③ 해결 주체와 방식에 따른 세 가지 경제 체제 분류
                  </div>
                  <div className="grid grid-cols-3 gap-1.5 text-center">
                    <div className="p-1.5 bg-blue-50 border border-blue-200 rounded">
                      <div className="text-[11px] font-black text-blue-900">시장 경제</div>
                      <div className="text-[10px] text-blue-700 font-semibold mt-0.5">가격 기구 중심</div>
                    </div>
                    <div className="p-1.5 bg-red-50 border border-red-200 rounded">
                      <div className="text-[11px] font-black text-red-900">계획 경제</div>
                      <div className="text-[10px] text-red-700 font-semibold mt-0.5">중앙 계획·명령</div>
                    </div>
                    <div className="p-1.5 bg-emerald-50 border border-emerald-200 rounded">
                      <div className="text-[11px] font-black text-emerald-900">혼합 경제</div>
                      <div className="text-[10px] text-emerald-700 font-semibold mt-0.5">시장 + 정부 보완</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-2 text-[11px] text-[#0F1E36]/60 text-center">
              ※ 오늘날 대부분의 국가는 시장 경제를 바탕으로 정부가 보완하는 <strong>혼합 경제</strong>를 채택하고 있습니다.
            </p>
          </div>
        </div>

        {/* Right Column (7 Cols): Step 2 3 Fundamental Economic Problems Interactive Cards */}
        <div
          className={`lg:col-span-7 p-4 lg:p-5 rounded-xl border flex flex-col justify-between transition-all duration-300 ${
            activeStep >= 2
              ? 'bg-white border-teal-700 shadow-md ring-1 ring-teal-600/30'
              : 'bg-white/50 border-[#0F1E36]/10 opacity-50'
          }`}
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-teal-900 text-white font-black text-xs flex items-center justify-center">
                  02
                </span>
                <h3 className="text-lg lg:text-xl font-black text-[#0F1E36]">
                  사회적 선택: 3대 기본 경제 문제
                </h3>
              </div>
              <span className="text-xs font-semibold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200">
                카드를 클릭하여 상세 해설과 해결 방식 확인
              </span>
            </div>

            {/* 3 Problem Selectors / Tabs */}
            <div className="grid grid-cols-3 gap-2 mb-3.5">
              {problemDetails.map((item) => {
                const isSelected = selectedProblem === item.id;
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedProblem(item.id)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'bg-teal-900 text-white border-teal-900 shadow-md scale-[1.02]'
                        : 'bg-[#FAF8F3] hover:bg-white border-[#0F1E36]/15 text-[#0F1E36]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className={`text-xs font-mono font-black ${isSelected ? 'text-teal-200' : 'text-teal-800'}`}>
                        문제 {item.num}
                      </span>
                      <Icon className={`w-4 h-4 ${isSelected ? 'text-teal-200' : 'text-teal-700'}`} />
                    </div>
                    <div className="font-extrabold text-xs lg:text-sm leading-tight">
                      {item.question}
                    </div>
                    <div className={`text-[10px] mt-1 font-medium ${isSelected ? 'text-teal-100/80' : 'text-[#0F1E36]/60'}`}>
                      {item.focusBadge}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Problem Active Interactive Focus Panel */}
            {(() => {
              const activeProb = problemDetails.find((p) => p.id === selectedProblem) || problemDetails[0];
              const ProbIcon = activeProb.icon;

              return (
                <div className="bg-[#FAF8F3] p-4 lg:p-5 rounded-xl border border-[#0F1E36]/12 animate-in fade-in duration-200">
                  {/* Title & Core Meaning */}
                  <div className="flex items-start gap-3 pb-3 mb-3 border-b border-[#0F1E36]/10">
                    <div className="w-10 h-10 rounded-xl bg-teal-100 border border-teal-300 text-teal-900 flex items-center justify-center shrink-0">
                      <ProbIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-black text-teal-800">
                          QUESTION {activeProb.num}
                        </span>
                        <span className="text-[11px] text-[#0F1E36]/50">
                          {activeProb.subTitle}
                        </span>
                      </div>
                      <h4 className="text-lg lg:text-xl font-black text-[#0F1E36] mt-0.5">
                        {activeProb.question}
                      </h4>
                      <p className="text-xs lg:text-sm font-semibold text-[#0F1E36]/80 mt-1 leading-snug">
                        {activeProb.coreDefinition}
                      </p>
                    </div>
                  </div>

                  {/* High School Textbook Examples */}
                  <div className="mb-3.5">
                    <h5 className="text-xs font-black text-teal-900 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-teal-700" />
                      실제 교실 수업 예시 (현실 적용 사례)
                    </h5>
                    <div className="space-y-1.5 bg-white p-3 rounded-lg border border-[#0F1E36]/10">
                      {activeProb.examples.map((ex, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs lg:text-sm text-[#0F1E36] font-medium">
                          <span className="text-teal-700 font-bold shrink-0">예{idx + 1}.</span>
                          <span className="leading-snug">{ex}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* How each system answers this question */}
                  <div>
                    <h5 className="text-xs font-black text-[#0F1E36] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <Scale className="w-3.5 h-3.5 text-teal-800" />
                      각 경제 체제는 이 문제를 어떻게 해결하는가?
                    </h5>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                      <div className="p-2.5 bg-blue-50/70 rounded-lg border border-blue-200">
                        <span className="text-xs font-black text-blue-900 block mb-1">시장 경제의 답</span>
                        <p className="text-xs text-blue-950 font-medium leading-snug">
                          {activeProb.systemResolution.market}
                        </p>
                      </div>
                      <div className="p-2.5 bg-red-50/70 rounded-lg border border-red-200">
                        <span className="text-xs font-black text-red-900 block mb-1">계획 경제의 답</span>
                        <p className="text-xs text-red-950 font-medium leading-snug">
                          {activeProb.systemResolution.command}
                        </p>
                      </div>
                      <div className="p-2.5 bg-emerald-50/70 rounded-lg border border-emerald-200">
                        <span className="text-xs font-black text-emerald-900 block mb-1">혼합 경제의 답</span>
                        <p className="text-xs text-emerald-950 font-medium leading-snug">
                          {activeProb.systemResolution.mixed}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>

          <div className="mt-3 pt-2 border-t border-[#0F1E36]/10 flex items-center justify-between text-xs text-[#0F1E36]/70">
            <span>💡 <strong>교과서 핵심 포인트</strong>: 3대 문제는 어떤 사회든 피할 수 없으며, 단지 해결하는 '방식과 주체'가 다를 뿐입니다.</span>
            <span className="font-bold text-teal-800">다음 슬라이드: 빵 부족 상황 비교 ➔</span>
          </div>
        </div>

      </div>

      {/* 3. Bottom Teacher Dialogue Indicator */}
      <div className="shrink-0 p-2.5 lg:p-3 bg-white rounded-xl border border-[#0F1E36]/10 text-xs lg:text-sm text-[#0F1E36]/80 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 bg-teal-100 text-teal-900 font-extrabold text-xs rounded border border-teal-200">
            교사용 수업 포인트
          </span>
          <span className="font-medium">
            "인간의 욕망은 무한한데 자원은 유한합니다. 그렇다면 사회는 무엇을 먼저 만들고, 어떻게 만들며, 누구에게 나누어 줄까요?"
          </span>
        </div>
        <span className="text-xs text-teal-800 font-bold hidden md:inline">
          [N] 키를 누르면 상세 발문 대본과 오개념 지도 노트를 볼 수 있습니다.
        </span>
      </div>
    </div>
  );
};
