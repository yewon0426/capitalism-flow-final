import React, { useState } from 'react';
import { Shield, Sparkles, Scale, RefreshCw, CheckCircle, Info } from 'lucide-react';

interface Topic02CharacteristicsProps {
  activeStep: number;
}

const PILLARS = [
  {
    num: '01',
    title: '사유 재산권 보장',
    example: '앱 특허권, 저작권, 집과 토지의 법적 소유권',
    desc: '개인이 경제활동으로 획득한 재산을 국가나 타인이 부당하게 침해할 수 없도록 법률로 철저히 보장합니다.'
  },
  {
    num: '02',
    title: '경제활동의 자유',
    example: '직업 선택, 카페 창업, 자유로운 근로 계약 체결',
    desc: '개인과 기업이 어떤 재화를 생산하고 소비할지 국가의 강제 없이 자율적으로 결정합니다.'
  },
  {
    num: '03',
    title: '사적 이익 추구',
    example: '신제품 개발을 통한 기업 이윤 창출, 노동자의 성과급',
    desc: '자신의 물질적·경제적 이익을 높이려는 합리적 동기가 경제 발전의 핵심 엔진이 됩니다.'
  },
  {
    num: '04',
    title: '시장 경쟁',
    example: '스마트폰 제조사의 품질 경쟁, 배달앱의 수수료 경쟁',
    desc: '다수의 생산자와 소비자가 경쟁함으로써 상품의 품질은 향상되고 가격은 합리적으로 낮아집니다.'
  },
  {
    num: '05',
    title: '시장 가격의 신호 기능',
    example: '배추 흉작 시 가격 급등 → 농가 공급 확대, 소비 절약',
    desc: '가격은 수요와 공급에 따라 변동하며, 희소한 자원이 가장 필요한 곳에 배분되도록 이끄는 신호등 역할을 합니다.'
  }
];

export const Topic02Characteristics: React.FC<Topic02CharacteristicsProps> = ({ activeStep }) => {
  const [selectedPillar, setSelectedPillar] = useState<number>(0);

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 md:p-6 max-w-[1520px] mx-auto select-none">
      {/* 1. Header */}
      <div className="shrink-0 mb-3">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs lg:text-sm font-bold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded border border-teal-200">
            주제 02 · 자본주의의 주요 특징과 시장경제
          </span>
          <span className="text-[#0F1E36]/30">·</span>
          <span className="text-xs lg:text-sm font-semibold text-[#0F1E36]/70">
            5대 기둥 & 자본주의 vs 시장경제의 개념 구분
          </span>
        </div>
        <h2 className="text-2xl lg:text-3xl font-black text-[#0F1E36] tracking-tight">
          자본주의의 5대 제도적 기둥과 체제 구분
        </h2>
      </div>

      {/* 2. Interactive 5 Pillars Strip */}
      <div className="bg-white rounded-xl border border-[#0F1E36]/12 p-4 lg:p-5 shadow-xs mb-3">
        <div className="text-xs lg:text-sm font-bold text-teal-900 mb-3">
          자본주의를 지탱하는 5대 제도적 기둥 (클릭하여 상세 설명 및 생활 사례 확인)
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
          {PILLARS.map((p, idx) => {
            const isSelected = selectedPillar === idx;
            return (
              <button
                key={p.num}
                onClick={() => setSelectedPillar(idx)}
                className={`p-3.5 lg:p-4 rounded-xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-teal-900 text-white border-teal-900 shadow-md ring-2 ring-teal-600/30'
                    : 'bg-[#FAF8F3] hover:bg-white border-[#0F1E36]/10 text-[#0F1E36]'
                }`}
              >
                <span
                  className={`text-xs font-mono font-bold block mb-1.5 ${
                    isSelected ? 'text-teal-200' : 'text-teal-700'
                  }`}
                >
                  기둥 {p.num}
                </span>
                <div
                  className={`text-sm lg:text-base font-black leading-snug ${
                    isSelected ? 'text-white' : 'text-[#0F1E36]'
                  }`}
                >
                  {p.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Pillar Detailed Callout - Big & Readable */}
        <div className="mt-3.5 p-4 lg:p-5 bg-[#FAF8F3] rounded-xl border border-[#0F1E36]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex-1">
            <span className="text-xs lg:text-sm font-bold text-teal-900 block mb-1">
              [기둥 {PILLARS[selectedPillar].num}] {PILLARS[selectedPillar].title}
            </span>
            <p className="text-sm lg:text-lg font-bold text-[#0F1E36] leading-relaxed">
              {PILLARS[selectedPillar].desc}
            </p>
          </div>
          <div className="shrink-0 bg-white px-4 py-2.5 rounded-xl border border-[#0F1E36]/10 text-xs lg:text-sm shadow-2xs">
            <span className="text-[#0F1E36]/60 block text-xs font-bold mb-0.5">실제 생활 사례</span>
            <span className="font-bold text-teal-900 text-sm lg:text-base">{PILLARS[selectedPillar].example}</span>
          </div>
        </div>
      </div>

      {/* 3. The 2x2 Matrix: 자본주의 vs 시장경제 */}
      <div className="flex-1 bg-white rounded-xl border border-[#0F1E36]/12 p-4 lg:p-5 shadow-xs flex flex-col justify-between my-1">
        <div className="flex items-center justify-between pb-2.5 border-b border-[#0F1E36]/10 mb-2">
          <div className="flex items-center gap-2">
            <Scale className="w-5 h-5 text-teal-700" />
            <h3 className="text-sm lg:text-base font-black text-[#0F1E36]">
              교과서 개념 구분: '자본주의'와 '시장경제'는 어떻게 다른가?
            </h3>
          </div>
          <span className="text-xs lg:text-sm text-[#0F1E36]/60">
            소유의 형태(자본주의) vs 배분의 방식(시장경제)
          </span>
        </div>

        {/* 2x2 Visual Table */}
        <div className="grid grid-cols-12 gap-2.5 my-auto">
          {/* Top Header */}
          <div className="col-span-4 p-2.5 bg-[#FAF8F3] font-black text-xs lg:text-sm text-[#0F1E36]/70 rounded-lg text-center flex items-center justify-center">
            체제 구분 매트릭스
          </div>
          <div className="col-span-4 p-2.5 bg-teal-100 font-black text-xs lg:text-sm text-teal-950 rounded-lg text-center">
            시장 경제 (가격 기구 배분)
          </div>
          <div className="col-span-4 p-2.5 bg-slate-200 font-black text-xs lg:text-sm text-slate-800 rounded-lg text-center">
            계획 경제 (정부 명령 배분)
          </div>

          {/* Row 1: 사적 소유 (자본주의) */}
          <div className="col-span-4 p-3.5 bg-teal-50 font-black text-teal-950 rounded-xl flex flex-col justify-center border border-teal-200">
            <span className="text-sm lg:text-base">사적 소유권 인정</span>
            <span className="text-xs text-teal-800 font-bold mt-0.5">(자본주의 체제)</span>
          </div>
          <div className="col-span-4 p-3.5 bg-teal-900 text-white rounded-xl shadow-xs flex flex-col justify-between">
            <span className="font-black block text-sm lg:text-base text-teal-200">★ 자본주의적 시장경제</span>
            <p className="text-xs lg:text-sm text-teal-50/90 mt-1 leading-snug font-medium">
              대부분의 현대 선진국 (한국, 미국 등). 사유재산 보장 + 시장 가격에 의한 자원 배분.
            </p>
          </div>
          <div className="col-span-4 p-3.5 bg-[#FAF8F3] border border-[#0F1E36]/10 text-[#0F1E36] rounded-xl flex flex-col justify-between">
            <span className="font-black block text-sm lg:text-base text-[#0F1E36]">통제 자본주의 / 전시 경제</span>
            <p className="text-xs lg:text-sm text-[#0F1E36]/75 mt-1 leading-snug">
              사유재산은 인정되나 전쟁 등 국가 비상사태 시 정부가 물자를 통제·배급.
            </p>
          </div>

          {/* Row 2: 공적 소유 (사회주의) */}
          <div className="col-span-4 p-3.5 bg-slate-100 font-black text-slate-800 rounded-xl flex flex-col justify-center border border-slate-300">
            <span className="text-sm lg:text-base">생산수단 국유화</span>
            <span className="text-xs text-slate-600 font-bold mt-0.5">(사회주의 체제)</span>
          </div>
          <div className="col-span-4 p-3.5 bg-[#FAF8F3] border border-teal-300 text-[#0F1E36] rounded-xl flex flex-col justify-between">
            <span className="font-black block text-sm lg:text-base text-teal-900">사회주의적 시장경제</span>
            <p className="text-xs lg:text-sm text-[#0F1E36]/75 mt-1 leading-snug">
              중국·베트남 등의 개혁개방 모델. 토지는 국유이나 시장 경쟁과 가격 기구 도입.
            </p>
          </div>
          <div className="col-span-4 p-3.5 bg-slate-100 text-[#0F1E36] rounded-xl flex flex-col justify-between border border-slate-200">
            <span className="font-black block text-sm lg:text-base text-slate-800">전통적 공산주의</span>
            <p className="text-xs lg:text-sm text-[#0F1E36]/75 mt-1 leading-snug">
              과거 구소련. 생산수단 국가 소유 + 중앙계획위원회의 수량·가격 통제.
            </p>
          </div>
        </div>

        <div className="mt-2.5 p-3 bg-[#FAF8F3] rounded-lg text-xs lg:text-sm text-[#0F1E36]/80 flex items-center gap-2">
          <Info className="w-4 h-4 text-teal-700 shrink-0" />
          <span>
            <strong>교사용 지도 팁:</strong> 학생들에게 "자본주의"는 생산수단을 누가 소유하느냐의 문제이고, "시장경제"는 생산물을 어떻게 배분하느냐의 방식임을 명확히 구분시켜 주면 오개념을 예방할 수 있습니다.
          </span>
        </div>
      </div>

      {/* 4. Bottom Footer */}
      <div className="shrink-0 text-xs lg:text-sm text-[#0F1E36]/60 flex items-center justify-between pt-1 border-t border-[#0F1E36]/10">
        <span>* 우측 상단 [교사용 수업 노트]를 누르면 상세 발문 대본을 볼 수 있습니다.</span>
        <span className="font-bold text-teal-800">→ 다음 단계: 주제 03 '자본주의 역사적 전개 타임라인'</span>
      </div>
    </div>
  );
};
