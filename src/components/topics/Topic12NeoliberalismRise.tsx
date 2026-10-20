import React, { useState } from 'react';
import { ArrowRight, Unlock, Building2, Globe2, AlertCircle, ShieldAlert, CheckCircle2, Sparkles, BookOpen } from 'lucide-react';

interface Topic12NeoliberalismRiseProps {
  activeStep: number;
}

export const Topic12NeoliberalismRise: React.FC<Topic12NeoliberalismRiseProps> = ({ activeStep }) => {
  const [selectedPillar, setSelectedPillar] = useState<number>(0);

  const NEOLIBERAL_PILLARS = [
    {
      num: '01',
      title: '과감한 규제 완화',
      icon: Unlock,
      policy: '금융, 항공, 에너지 분야의 진입 장벽 철폐',
      desc: '기업들이 자유롭게 투자하고 새로운 서비스로 경쟁할 수 있도록 가격 통제와 정부 허가제를 대폭 축소함.'
    },
    {
      num: '02',
      title: '공기업 민영화',
      icon: Building2,
      policy: '국영 철도, 국영 통신 등 공공기업 주식 매각',
      desc: '만성 적자와 방만한 경영에 빠진 국영 기업들을 민간에 매각하여 시장의 경쟁 원리와 경영 효율성을 도입함.'
    },
    {
      num: '03',
      title: '자유 무역 & 노동 시장 유연화',
      icon: Globe2,
      policy: '관세 인하, 글로벌 무역 확대, 유연한 고용 체제',
      desc: '국가 간 자본과 상품의 자유로운 이동을 허용하고, 성과 중심 보상과 유연한 고용 체제를 추진함.'
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 md:p-6 max-w-[1520px] mx-auto select-none">
      {/* 1. Header */}
      <div className="shrink-0 mb-3">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs lg:text-sm font-bold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded border border-teal-200">
            주제 12 · 시장의 귀환과 작은 정부
          </span>
          <span className="text-[#0F1E36]/30">·</span>
          <span className="text-xs lg:text-sm font-semibold text-[#0F1E36]/70">
            1970년대 말 ~ 1980년대: 신자유주의의 등장
          </span>
        </div>
        <h2 className="text-2xl lg:text-3xl font-black text-[#0F1E36] tracking-tight">
          신자유주의: 정부 실패 비판과 시장 기능의 복원
        </h2>
      </div>

      {/* 2. Government Failure Backdrop */}
      <div className="bg-white rounded-xl border border-[#0F1E36]/12 p-4 lg:p-5 shadow-xs mb-3">
        <div className="flex items-center gap-2 pb-2 border-b border-[#0F1E36]/10 mb-3">
          <ShieldAlert className="w-5 h-5 text-red-600" />
          <h3 className="text-sm lg:text-base font-black text-[#0F1E36]">
            '정부 실패(Government Failure)'에 대한 3대 비판
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="p-3.5 bg-[#FAF8F3] rounded-xl border border-[#0F1E36]/10">
            <span className="font-black text-sm lg:text-base text-red-900 block mb-1">① 관료주의와 예산 낭비</span>
            <p className="text-xs lg:text-sm text-[#0F1E36]/80 font-medium">정부 조직이 비대해지며 세금 낭비와 늑장 행정 만연</p>
          </div>
          <div className="p-3.5 bg-[#FAF8F3] rounded-xl border border-[#0F1E36]/10">
            <span className="font-black text-sm lg:text-base text-amber-900 block mb-1">② 복지병과 근로 의욕 감퇴</span>
            <p className="text-xs lg:text-sm text-[#0F1E36]/80 font-medium">과도한 실업 수당과 복지로 만성 재정 적자 누적</p>
          </div>
          <div className="p-3.5 bg-[#FAF8F3] rounded-xl border border-[#0F1E36]/10">
            <span className="font-black text-sm lg:text-base text-teal-900 block mb-1">③ 민간 활력 억압</span>
            <p className="text-xs lg:text-sm text-[#0F1E36]/80 font-medium">각종 규제와 높은 세금이 기업의 혁신 투자를 가로막음</p>
          </div>
        </div>
      </div>

      {/* 3. The 3 Policy Pillars of Neoliberalism */}
      <div className="flex-1 bg-white rounded-xl border border-[#0F1E36]/12 p-4 lg:p-6 shadow-xs flex flex-col justify-between my-1">
        <div className="flex items-center justify-between pb-2.5 border-b border-[#0F1E36]/10">
          <span className="text-sm lg:text-base font-black text-teal-950 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-teal-700" />
            <span>신자유주의의 3대 핵심 정책 (하이에크·프리드먼의 사상)</span>
          </span>
          <span className="text-xs lg:text-sm text-[#0F1E36]/60 font-semibold">
            대처리즘(영국) & 레이거노믹스(미국)의 기둥
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-4 my-auto">
          {NEOLIBERAL_PILLARS.map((p, idx) => {
            const isSelected = selectedPillar === idx;
            const Icon = p.icon;
            return (
              <button
                key={p.num}
                onClick={() => setSelectedPillar(idx)}
                className={`p-4 lg:p-5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-teal-900 text-white border-teal-900 shadow-md ring-2 ring-teal-600/30'
                    : 'bg-[#FAF8F3] hover:bg-white border-[#0F1E36]/10 text-[#0F1E36]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-mono font-bold ${isSelected ? 'text-teal-200' : 'text-teal-700'}`}>
                      기둥 {p.num}
                    </span>
                    <Icon className="w-5 h-5 opacity-80" />
                  </div>
                  <h4 className="text-base lg:text-lg font-black leading-snug mb-1">{p.title}</h4>
                </div>
                <p className={`text-xs lg:text-sm mt-1 font-semibold leading-snug ${isSelected ? 'text-teal-200' : 'text-amber-800'}`}>
                  {p.policy}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Pillar Detailed Card */}
        <div className="p-4 bg-teal-50/80 rounded-xl border border-teal-300 text-xs lg:text-sm">
          <span className="font-black text-teal-950 block mb-1 text-sm lg:text-base">
            선택된 {NEOLIBERAL_PILLARS[selectedPillar].title}의 취지와 효과
          </span>
          <p className="text-teal-950/90 leading-relaxed font-semibold text-sm lg:text-base">
            {NEOLIBERAL_PILLARS[selectedPillar].desc}
          </p>
        </div>

        {/* Teaching Note on Misconception */}
        <div className="mt-2.5 p-3 bg-amber-50 rounded-xl text-xs lg:text-sm text-amber-950 flex items-center justify-between font-medium">
          <span>
            ⚠️ <strong>교사용 오개념 방지:</strong> 신자유주의는 "정부를 완전히 없애자"는 뜻이 아니며, 시장의 공정한 경쟁 규칙과 사유재산권을 수호하는 법 집행자로서의 국가 역할은 철저히 강조되었습니다.
          </span>
          <span className="font-bold text-teal-800 shrink-0 ml-3">→ 다음 단계: 주제 13 '기대 효과와 한계'</span>
        </div>
      </div>

      {/* 4. Bottom Footer */}
      <div className="shrink-0 text-xs lg:text-sm text-[#0F1E36]/60 flex items-center justify-between pt-1 border-t border-[#0F1E36]/10">
        <span>* 우측 상단 [교사용 수업 노트]를 누르면 상세 발문 대본을 볼 수 있습니다.</span>
        <span className="font-bold text-teal-800">→ 다음 단계: 주제 13 '신자유주의의 기대 효과와 한계'</span>
      </div>
    </div>
  );
};
