import React, { useState } from 'react';
import { Landmark, ArrowRight, CheckCircle2, Shield, Briefcase, DollarSign, Factory, ShoppingCart, Sparkles, BookOpen } from 'lucide-react';

interface Topic10WelfareCapitalismInterventionProps {
  activeStep: number;
}

export const Topic10WelfareCapitalismIntervention: React.FC<Topic10WelfareCapitalismInterventionProps> = ({ activeStep }) => {
  const [activeStage, setActiveStage] = useState<number>(1);

  const STAGES = [
    {
      num: 1,
      title: '정부 재정 지출 확대',
      subtitle: '공공사업 발주 (뉴딜 정책)',
      icon: Landmark,
      desc: '정부 재정으로 댐·도로·교량 건설 등 대규모 공공사업을 추진하여 일자리를 직접 만듭니다.'
    },
    {
      num: 2,
      title: '대규모 일자리 & 임금 지급',
      subtitle: '수백만 실업자 구제',
      icon: Briefcase,
      desc: '일자리를 얻은 노동자들에게 매주 정기적인 임금이 지급되면서 가계 구매력이 복원됩니다.'
    },
    {
      num: 3,
      title: '가계 소비 회복 (유효수요 창출)',
      subtitle: '시장 거래의 활성화',
      icon: ShoppingCart,
      desc: '소득을 얻은 가계가 생필품과 상품을 구매하면서 시장에 실질적인 유효수요가 주입됩니다.'
    },
    {
      num: 4,
      title: '기업 생산 & 고용 정상화',
      subtitle: '자생적 경기 회복 선순환',
      icon: Factory,
      desc: '물건이 팔리자 기업들이 공장을 재가동하고 추가 고용을 진행하며 불황에서 탈출합니다.'
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 md:p-6 max-w-[1520px] mx-auto select-none">
      {/* 1. Header */}
      <div className="shrink-0 mb-3">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs lg:text-sm font-bold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded border border-teal-200">
            주제 10 · 대공황 극복의 열쇠
          </span>
          <span className="text-[#0F1E36]/30">·</span>
          <span className="text-xs lg:text-sm font-semibold text-[#0F1E36]/70">
            수정 자본주의: 루스벨트 뉴딜 정책과 적극적 정부
          </span>
        </div>
        <h2 className="text-2xl lg:text-3xl font-black text-[#0F1E36] tracking-tight">
          수정 자본주의: 정부의 확장적 재정 정책과 선순환 회복
        </h2>
      </div>

      {/* 2. Step-by-Step Multiplier Flowchart */}
      <div className="bg-white rounded-xl border border-[#0F1E36]/12 p-4 lg:p-6 shadow-xs mb-3">
        <div className="flex items-center justify-between pb-2.5 border-b border-[#0F1E36]/10 mb-3">
          <span className="text-xs lg:text-sm font-bold text-teal-900 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-teal-700" />
            <span>정부의 유효수요 주입이 만든 4단계 선순환 승수효과</span>
          </span>
          <span className="text-xs lg:text-sm text-[#0F1E36]/60">
            단계를 클릭하여 정책 메커니즘 확인
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {STAGES.map((s) => {
            const isSelected = activeStage === s.num;
            const Icon = s.icon;
            return (
              <button
                key={s.num}
                onClick={() => setActiveStage(s.num)}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-teal-900 text-white border-teal-900 shadow-md ring-2 ring-teal-600/30'
                    : 'bg-[#FAF8F3] hover:bg-white border-[#0F1E36]/10 text-[#0F1E36]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-mono font-bold ${isSelected ? 'text-teal-200' : 'text-teal-800'}`}>
                      단계 0{s.num}
                    </span>
                    <Icon className="w-5 h-5 opacity-80" />
                  </div>
                  <h4 className="text-base lg:text-lg font-black leading-snug mb-1">{s.title}</h4>
                </div>
                <p className={`text-xs lg:text-sm font-semibold mt-1 leading-snug ${isSelected ? 'text-teal-100/90' : 'text-[#0F1E36]/60'}`}>
                  {s.subtitle}
                </p>
              </button>
            );
          })}
        </div>

        <div className="mt-3.5 p-4 bg-teal-50/80 rounded-xl border border-teal-200 text-xs lg:text-sm">
          <span className="font-black text-teal-950 block mb-1">
            선택된 {STAGES[activeStage - 1].title} 상세 메커니즘
          </span>
          <p className="text-sm lg:text-base text-teal-950/90 leading-relaxed font-semibold">
            {STAGES[activeStage - 1].desc}
          </p>
        </div>
      </div>

      {/* 3. The Two Pillars of Modified Capitalism */}
      <div className="flex-1 bg-white rounded-xl border border-[#0F1E36]/12 p-4 lg:p-6 shadow-xs flex flex-col justify-between my-1">
        <h3 className="text-base lg:text-lg font-black text-[#0F1E36] mb-3">
          수정 자본주의의 2대 제도적 혁신 (복지 국가의 기틀 마련)
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 my-auto">
          <div className="p-4 lg:p-5 bg-[#FAF8F3] rounded-xl border border-teal-600/30 shadow-2xs">
            <div className="flex items-center gap-2 mb-2">
              <Landmark className="w-5 h-5 text-teal-700" />
              <span className="text-base lg:text-lg font-black text-teal-950">
                1. 거시경제 경기 안정화 정책
              </span>
            </div>
            <p className="text-sm lg:text-base text-[#0F1E36]/85 font-medium leading-relaxed">
              불황기에는 재정 지출을 늘리고, 과열기에는 세금을 늘려 <strong>주기적 공황을 예방</strong>하는 국가의 시장 조정자 역할 확립.
            </p>
          </div>

          <div className="p-4 lg:p-5 bg-[#FAF8F3] rounded-xl border border-amber-600/30 shadow-2xs">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-5 h-5 text-amber-700" />
              <span className="text-base lg:text-lg font-black text-amber-950">
                2. 사회 보장 제도 & 노동권 확립
              </span>
            </div>
            <p className="text-sm lg:text-base text-[#0F1E36]/85 font-medium leading-relaxed">
              <strong>사회보장제도</strong>(실업보험, 연금) 도입, <strong>최저임금제</strong> 시행, 노동자의 단결권을 보장하여 시장의 가혹성을 완화함.
            </p>
          </div>
        </div>

        <div className="mt-3 p-3 bg-amber-50 rounded-xl text-xs lg:text-sm text-amber-950 flex items-center justify-between font-medium">
          <span>
            💡 <strong>체제적 의미:</strong> 수정 자본주의는 사회주의가 아니며, <strong>자본주의를 지키기 위해</strong> 정부의 시장 개입을 제도화한 역사적 발전이었습니다.
          </span>
          <span className="font-bold text-amber-900 shrink-0 ml-3">→ 다음 단계: 주제 11 '1970년대 스태그플레이션'</span>
        </div>
      </div>

      {/* 4. Bottom Footer */}
      <div className="shrink-0 text-xs lg:text-sm text-[#0F1E36]/60 flex items-center justify-between pt-1 border-t border-[#0F1E36]/10">
        <span>* 우측 상단 [교사용 수업 노트]를 누르면 상세 발문 대본을 볼 수 있습니다.</span>
        <span className="font-bold text-teal-800">→ 다음 단계: 주제 11 '1970년대 스태그플레이션'</span>
      </div>
    </div>
  );
};
