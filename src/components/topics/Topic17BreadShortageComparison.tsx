import React, { useState } from 'react';
import { 
  AlertTriangle, 
  ArrowRight, 
  Building2, 
  CheckCircle2, 
  Coins, 
  HelpCircle, 
  Layers, 
  Scale, 
  ShieldCheck, 
  Sparkles, 
  TrendingUp, 
  Truck, 
  Users, 
  Utensils 
} from 'lucide-react';

interface Topic17BreadShortageComparisonProps {
  activeStep: number;
}

type SystemType = 'market' | 'command' | 'mixed' | 'all';

export const Topic17BreadShortageComparison: React.FC<Topic17BreadShortageComparisonProps> = ({ activeStep }) => {
  const [selectedSystem, setSelectedSystem] = useState<SystemType>('market');

  const systemsData = {
    market: {
      id: 'market',
      title: '시장 경제 (Market Economy)',
      badge: '가격 기구 중심',
      badgeColor: 'blue',
      themeBorder: 'border-blue-500',
      themeBg: 'bg-blue-50/70',
      tagColor: 'bg-blue-100 text-blue-900 border-blue-200',
      coreActor: '민간 제빵 기업, 빵집 사장님, 소비자',
      decisionSignal: '시장의 가격 기구 (보이지 않는 손) & 이윤 획득 기회',
      flowSteps: [
        {
          num: '01',
          title: '초과 수요 발생',
          desc: '지역 내 빵 공급이 급감하면서 사려는 사람은 많은데 살 수 있는 빵이 부족해짐.',
          highlight: '공급 부족 발생'
        },
        {
          num: '02',
          title: '가격 신호 작동',
          desc: '빵 가격이 자연스럽게 상승 압력을 받으며 "지금 빵을 만들면 큰 이윤을 얻는다"는 시장 신호가 발생함.',
          highlight: '가격 상승 (이윤 신호)'
        },
        {
          num: '03',
          title: '자발적 생산 확대',
          desc: '빵집과 제빵 기업들이 높은 이윤을 기대하고 스스로 밀가루를 긴급 확보하여 야간 연장 조업을 시작함.',
          highlight: '민간 기업의 즉각 대응'
        },
        {
          num: '04',
          title: '수급 균형 회복',
          desc: '새로운 빵이 대량 공급되어 품귀가 해소되고 가격이 안정됨. (지불 능력에 따라 분배됨).',
          highlight: '효율적 수급 회복'
        }
      ],
      summarySentence: '가격 기구의 신호에 따라 개별 경제 주체가 자율적 이윤 추구로 신속히 해결',
      characteristics: [
        '장점: 정부의 특별한 지시 없이도 민간 기업의 혁신과 자발적 공급 확대로 신속하게 부족 해결',
        '유의점: 가격이 오를 경우 돈이 부족한 취약계층은 빵을 사기 어려워질 수 있음 (형평성 문제)'
      ]
    },
    command: {
      id: 'command',
      title: '계획 경제 (Command Economy)',
      badge: '중앙 정부 명령·계획 중심',
      badgeColor: 'red',
      themeBorder: 'border-red-500',
      themeBg: 'bg-red-50/70',
      tagColor: 'bg-red-100 text-red-900 border-red-200',
      coreActor: '중앙 계획 기구, 정부 관료, 국영 제빵 공장',
      decisionSignal: '행정 보고서, 국가 생산 계획서, 법적 할당 명령',
      flowSteps: [
        {
          num: '01',
          title: '지역 부족 보고 접수',
          desc: '지역 행정 단위 및 주민 위원회를 통해 중앙 정부에 "빵 부족 사태" 공식 보고가 전달됨.',
          highlight: '행정 보고 체계 가동'
        },
        {
          num: '02',
          title: '중앙 계획 수정',
          desc: '중앙 계획 기구가 국가 전체 곡물 재고와 수급 현황을 종합 분석하여 빵 생산 목표치를 상향 조정함.',
          highlight: '국가 생산 목표 수정'
        },
        {
          num: '03',
          title: '자원·원료 긴급 배분',
          desc: '국가가 국영 밀가루 공장과 국영 제빵 공장에 원료와 노동력을 행정 명령으로 즉각 배정·투입함.',
          highlight: '국가 행정 명령 집행'
        },
        {
          num: '04',
          title: '계획 배급 실시',
          desc: '국영 공장에서 생산된 빵을 공공 유통망과 배급소를 통해 주민들에게 배급표 기준으로 공급함.',
          highlight: '공공 배급망 분배'
        }
      ],
      summarySentence: '중앙 정부의 조사와 계획적 자원 배분 명령으로 공공 목표에 맞춰 해결',
      characteristics: [
        '장점: 돈의 유무와 상관없이 모든 사회 구성원에게 기본 빵을 골고루 배분할 수 있음 (형평성)',
        '유의점: 정보 수집과 행정 결재 과정에 시간이 걸릴 수 있고, 생산자의 자발적 혁신 유인이 약함'
      ]
    },
    mixed: {
      id: 'mixed',
      title: '혼합 경제 (Mixed Economy)',
      badge: '시장 자율 + 정부 보완',
      badgeColor: 'emerald',
      themeBorder: 'border-emerald-600',
      themeBg: 'bg-emerald-50/70',
      tagColor: 'bg-emerald-100 text-emerald-900 border-emerald-200',
      coreActor: '민간 제빵 기업 + 정부(재정·복지·공정거래 부처)',
      decisionSignal: '시장의 가격 신호 + 정부의 공공 정책 및 사회 안전망',
      flowSteps: [
        {
          num: '01',
          title: '부족 감지 & 복합 대응',
          desc: '시장 빵 가격 급등 징후가 나타나자, 시장과 정부가 동시에 현황을 파악하고 역할을 분담함.',
          highlight: '이원적 대응 체제'
        },
        {
          num: '02',
          title: '시장: 생산 인센티브',
          desc: '정부가 밀가루 긴급 할당관세를 인하하여 민간 빵집들이 원가 부담 없이 공급을 늘리도록 유도함.',
          highlight: '민간 공급 능력 촉진'
        },
        {
          num: '03',
          title: '정부: 취약계층 보호',
          desc: '저소득 취약계층에게 긴급 식료품 바우처를 지급하고, 사재기·매점매석 등 불공정 거래를 단속함.',
          highlight: '사회 안전망 가동'
        },
        {
          num: '04',
          title: '효율·형평 조화 달성',
          desc: '민간의 활발한 증산으로 시장 품귀가 해소되면서도, 취약계층의 기본 식생활이 안전하게 보장됨.',
          highlight: '효율성과 형평성 동시 확보'
        }
      ],
      summarySentence: '시장의 가격 기구와 생산 역량을 활용하면서, 정부가 형평성과 취약계층을 정책으로 보완',
      characteristics: [
        '장점: 시장의 신속한 공급 능력(효율성)과 정부의 복지 안전망(형평성)을 동시에 조화시킴',
        '유의점: 시장 자율성과 정부 개입 사이의 균형점을 찾는 사회적 합의와 정책 역량이 요구됨'
      ]
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-3 md:p-5 max-w-[1540px] mx-auto select-none">
      {/* 1. Classroom Top Header & Key Scenario Banner */}
      <div className="shrink-0 mb-3">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs lg:text-sm font-bold text-teal-900 bg-teal-100 px-2.5 py-0.5 rounded border border-teal-200">
            주제 17 · 핵심 비교 사례
          </span>
          <span className="text-[#0F1E36]/30">·</span>
          <span className="text-xs lg:text-sm font-bold text-[#0F1E36]/80">
            PART 3. 경제 체제의 유형별 특징
          </span>
          <span className="text-[#0F1E36]/30">·</span>
          <span className="text-xs lg:text-sm font-semibold text-teal-800 bg-white px-2 py-0.5 rounded border border-teal-200/80">
            고1 경제사고력 시뮬레이션
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2">
          <div>
            <h2 className="text-2xl lg:text-3xl font-black text-[#0F1E36] tracking-tight flex items-center gap-2">
              <span>같은 경제 문제, 다른 해결 방법</span>
              <span className="text-sm lg:text-base font-normal text-[#0F1E36]/60">
                — '빵 부족' 상황으로 보는 세 경제 체제의 의사결정
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-2 self-start lg:self-auto">
            <span className="text-xs font-bold text-[#0F1E36]/70 hidden sm:inline">체제별 모드:</span>
            <div className="flex bg-white rounded-lg border border-[#0F1E36]/15 p-1 shadow-2xs">
              <button
                onClick={() => setSelectedSystem('market')}
                className={`px-3 py-1 rounded text-xs font-bold transition-all cursor-pointer ${
                  selectedSystem === 'market'
                    ? 'bg-blue-800 text-white shadow-xs'
                    : 'text-[#0F1E36]/70 hover:text-[#0F1E36]'
                }`}
              >
                시장 경제
              </button>
              <button
                onClick={() => setSelectedSystem('command')}
                className={`px-3 py-1 rounded text-xs font-bold transition-all cursor-pointer ${
                  selectedSystem === 'command'
                    ? 'bg-red-800 text-white shadow-xs'
                    : 'text-[#0F1E36]/70 hover:text-[#0F1E36]'
                }`}
              >
                계획 경제
              </button>
              <button
                onClick={() => setSelectedSystem('mixed')}
                className={`px-3 py-1 rounded text-xs font-bold transition-all cursor-pointer ${
                  selectedSystem === 'mixed'
                    ? 'bg-emerald-800 text-white shadow-xs'
                    : 'text-[#0F1E36]/70 hover:text-[#0F1E36]'
                }`}
              >
                혼합 경제
              </button>
              <button
                onClick={() => setSelectedSystem('all')}
                className={`px-3 py-1 rounded text-xs font-bold transition-all cursor-pointer ${
                  selectedSystem === 'all'
                    ? 'bg-teal-900 text-white shadow-xs'
                    : 'text-[#0F1E36]/70 hover:text-[#0F1E36]'
                }`}
              >
                한눈에 비교
              </button>
            </div>
          </div>
        </div>

        {/* Common Crisis Situation Banner */}
        <div className="mt-2.5 p-3 lg:p-3.5 bg-amber-50/90 rounded-xl border border-amber-300 shadow-2xs flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-200 border border-amber-400 flex items-center justify-center text-amber-900 shrink-0">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-black text-amber-900 bg-amber-200/80 px-2 py-0.5 rounded">
                  공통 상황 발발
                </span>
                <span className="text-xs font-bold text-amber-800">
                  자원의 희소성과 심각한 수급 불균형 발생
                </span>
              </div>
              <p className="text-sm lg:text-base font-extrabold text-[#0F1E36] mt-0.5">
                "어느 지역에서 갑작스러운 밀 흉작과 공급망 차질로 빵이 심각하게 부족해졌다!"
              </p>
            </div>
          </div>
          <div className="hidden lg:flex flex-col text-right text-xs text-amber-900 font-semibold">
            <span>핵심 탐구 과제:</span>
            <span>누가, 어떤 신호와 규칙으로 이 문제를 해결할까?</span>
          </div>
        </div>
      </div>

      {/* 2. Main Visual Canvas */}
      <div className="flex-1 min-h-0 mb-3">
        {selectedSystem === 'all' ? (
          /* Multi-column Side-by-Side View */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 h-full items-stretch">
            {(['market', 'command', 'mixed'] as const).map((key) => {
              const data = systemsData[key];
              return (
                <div
                  key={key}
                  className={`p-3.5 rounded-xl border-2 ${data.themeBorder} ${data.themeBg} flex flex-col justify-between shadow-xs bg-white`}
                >
                  <div>
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#0F1E36]/10">
                      <div>
                        <span className={`text-[11px] font-bold px-2 py-0.5 rounded border ${data.tagColor}`}>
                          {data.badge}
                        </span>
                        <h4 className="text-base font-black text-[#0F1E36] mt-1">{data.title}</h4>
                      </div>
                    </div>

                    <div className="space-y-1.5 mb-2.5 text-xs text-[#0F1E36]/80 font-medium">
                      <div>
                        <span className="font-bold text-[#0F1E36]">주요 주체:</span> {data.coreActor}
                      </div>
                      <div>
                        <span className="font-bold text-[#0F1E36]">의사결정 신호:</span> {data.decisionSignal}
                      </div>
                    </div>

                    {/* Step pills */}
                    <div className="space-y-1.5">
                      {data.flowSteps.map((s, idx) => (
                        <div
                          key={idx}
                          className="p-2 bg-white rounded-lg border border-[#0F1E36]/10 text-xs shadow-2xs"
                        >
                          <div className="flex items-center justify-between mb-0.5">
                            <span className="font-black text-teal-900">단계 {s.num}. {s.title}</span>
                            <span className="text-[10px] font-bold text-teal-800 bg-teal-50 px-1.5 py-0.2 rounded">
                              {s.highlight}
                            </span>
                          </div>
                          <p className="text-[11px] text-[#0F1E36]/80 leading-tight">{s.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-2 pt-2 border-t border-[#0F1E36]/10 text-[11px] font-bold text-[#0F1E36]/90">
                    💡 {data.summarySentence}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Focused Single System Step-by-Step Interactive View */
          (() => {
            const data = systemsData[selectedSystem];

            return (
              <div className="bg-white rounded-xl border-2 border-teal-800 shadow-md p-4 lg:p-6 flex flex-col justify-between h-full">
                {/* Header Information */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-3 border-b border-[#0F1E36]/10 gap-2">
                    <div className="flex items-center gap-3">
                      <span className={`text-xs lg:text-sm font-black px-3 py-1 rounded-md border ${data.tagColor}`}>
                        {data.badge}
                      </span>
                      <h3 className="text-xl lg:text-2xl font-black text-[#0F1E36]">
                        {data.title}의 해결 메커니즘
                      </h3>
                    </div>

                    <div className="text-xs font-semibold text-[#0F1E36]/70">
                      의사결정 주체: <strong className="text-[#0F1E36]">{data.coreActor}</strong>
                    </div>
                  </div>

                  {/* 4-Step Linear Flow Diagram */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-3">
                    {data.flowSteps.map((step, idx) => (
                      <div
                        key={idx}
                        className={`p-3.5 rounded-xl border transition-all relative flex flex-col justify-between ${
                          activeStep >= idx + 1
                            ? 'bg-gradient-to-b from-white to-[#FAF8F3] border-teal-700 shadow-sm'
                            : 'bg-white/40 border-[#0F1E36]/10 opacity-40'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="w-6 h-6 rounded-full bg-teal-900 text-white text-xs font-black flex items-center justify-center">
                              {step.num}
                            </span>
                            <span className="text-[11px] font-bold text-teal-800 bg-teal-100 px-2 py-0.5 rounded border border-teal-200">
                              {step.highlight}
                            </span>
                          </div>

                          <h4 className="text-base font-extrabold text-[#0F1E36] mb-1.5">
                            {step.title}
                          </h4>

                          <p className="text-xs lg:text-sm text-[#0F1E36]/80 font-medium leading-relaxed">
                            {step.desc}
                          </p>
                        </div>

                        {idx < 3 && (
                          <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-teal-700">
                            <div className="w-6 h-6 rounded-full bg-white border border-teal-300 flex items-center justify-center shadow-xs">
                              <ArrowRight className="w-3.5 h-3.5" />
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Core Summary Quote Box */}
                  <div className="my-2 p-3 bg-teal-50 rounded-xl border border-teal-200 flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-teal-800 shrink-0" />
                    <p className="text-sm lg:text-base font-bold text-teal-950">
                      핵심 작동 원리: "{data.summarySentence}"
                    </p>
                  </div>
                </div>

                {/* Characteristics and High School Educational Perspectives */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-3 border-t border-[#0F1E36]/10">
                  <div className="p-3 bg-[#FAF8F3] rounded-lg border border-[#0F1E36]/10">
                    <span className="text-xs font-extrabold text-blue-900 block mb-1">
                      ✅ 해당 체제의 주요 장점 (핵심 가치)
                    </span>
                    <p className="text-xs lg:text-sm text-[#0F1E36]/80 font-medium leading-snug">
                      {data.characteristics[0]}
                    </p>
                  </div>

                  <div className="p-3 bg-[#FAF8F3] rounded-lg border border-[#0F1E36]/10">
                    <span className="text-xs font-extrabold text-amber-900 block mb-1">
                      ⚠️ 교실 수업 유의점 (균형적 시각)
                    </span>
                    <p className="text-xs lg:text-sm text-[#0F1E36]/80 font-medium leading-snug">
                      {data.characteristics[1]}
                    </p>
                  </div>
                </div>
              </div>
            );
          })()
        )}
      </div>

      {/* 3. Bottom Classroom Reflection & Transition */}
      <div className="shrink-0 p-2.5 lg:p-3 bg-white rounded-xl border border-[#0F1E36]/10 text-xs lg:text-sm text-[#0F1E36]/80 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 bg-teal-100 text-teal-900 font-extrabold text-xs rounded border border-teal-200">
            교실 토론 발문
          </span>
          <span className="font-medium">
            "빵이 부족할 때 가격이 오르게 두는 것과, 정부가 값을 통제하고 1인당 1개씩 배급표를 주는 것 중 여러분은 어느 방식을 지지하나요?"
          </span>
        </div>
        <span className="text-xs text-teal-800 font-bold hidden md:inline">
          다음 슬라이드: 7대 기준 종합 비교표 ➔
        </span>
      </div>
    </div>
  );
};
