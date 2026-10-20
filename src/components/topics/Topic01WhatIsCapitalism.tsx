import React, { useState } from 'react';
import { Coffee, ShieldCheck, TrendingUp, Sparkles, Building2, UserCheck, Coins, ArrowRight } from 'lucide-react';

interface Topic01WhatIsCapitalismProps {
  activeStep: number;
}

export const Topic01WhatIsCapitalism: React.FC<Topic01WhatIsCapitalismProps> = ({ activeStep }) => {
  // Interactive Cafe Startup Simulation State
  const [coffeePrice, setCoffeePrice] = useState<number>(4500);
  const [dailySales, setDailySales] = useState<number>(120);

  // Economic calculations
  const rawBeanCost = 1200; // 원두/우유 원가 per cup
  const laborCostDaily = 90000; // 바리스타 일당
  const rentDaily = 80000; // 매장 임대료 및 머신 감가상각
  const totalRevenue = coffeePrice * dailySales;
  const totalCost = rawBeanCost * dailySales + laborCostDaily + rentDaily;
  const netProfit = totalRevenue - totalCost;

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 md:p-6 max-w-[1520px] mx-auto select-none">
      {/* 1. Header & Definition */}
      <div className="shrink-0 mb-3">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs lg:text-sm font-bold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded border border-teal-200">
            주제 01 · 자본주의의 본질
          </span>
          <span className="text-[#0F1E36]/30">·</span>
          <span className="text-xs lg:text-sm font-semibold text-[#0F1E36]/70">
            PART 1. 자본주의의 의미와 특징
          </span>
        </div>
        <h2 className="text-2xl lg:text-3xl font-black text-[#0F1E36] tracking-tight">
          자본주의란 무엇인가?
        </h2>
        {/* Core Definition Banner */}
        <div className="mt-2 p-3.5 lg:p-4 bg-white rounded-xl border border-[#0F1E36]/12 shadow-2xs flex flex-col sm:flex-row sm:items-center gap-3">
          <span className="text-xs lg:text-sm font-black text-teal-900 bg-teal-100 px-3 py-1 rounded-md shrink-0 self-start sm:self-auto border border-teal-200">
            교과서 핵심 정의
          </span>
          <p className="text-base lg:text-xl font-bold text-[#0F1E36] leading-relaxed">
            <span className="text-teal-900 underline decoration-teal-500/40 underline-offset-4">생산수단의 사적 소유</span>를 바탕으로, 개별 경제 주체가 <span className="text-teal-900 underline decoration-teal-500/40 underline-offset-4">자유로운 경제활동</span>을 통해 <span className="text-teal-900 underline decoration-teal-500/40 underline-offset-4">사적 이윤을 추구</span>하는 경제 체제
          </p>
        </div>
      </div>

      {/* 2. Three Core Pillars (3대 핵심 축 - Large & Crisp) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-4 mb-3">
        {/* Pillar 1 */}
        <div
          className={`p-4 lg:p-5 rounded-xl border transition-all duration-200 ${
            activeStep >= 1
              ? 'bg-white border-teal-700 shadow-md ring-2 ring-teal-600/30'
              : 'bg-white/50 border-[#0F1E36]/10 opacity-40'
          }`}
        >
          <div className="flex items-center gap-3 mb-2.5">
            <div className="w-9 h-9 rounded-xl bg-teal-50 border border-teal-200 text-teal-900 flex items-center justify-center font-black text-sm lg:text-base">
              01
            </div>
            <h4 className="text-lg lg:text-xl font-black text-[#0F1E36]">생산수단의 사적 소유</h4>
          </div>
          <p className="text-sm lg:text-base font-semibold text-[#0F1E36]/80 leading-snug">
            토지, 공장, 건물, 기계 등 물품을 만들어내는 도구를 국가가 아닌 <strong>개인이 법적으로 소유</strong>할 권리 보장.
          </p>
        </div>

        {/* Pillar 2 */}
        <div
          className={`p-4 lg:p-5 rounded-xl border transition-all duration-200 ${
            activeStep >= 2
              ? 'bg-white border-teal-700 shadow-md ring-2 ring-teal-600/30'
              : 'bg-white/50 border-[#0F1E36]/10 opacity-40'
          }`}
        >
          <div className="flex items-center gap-3 mb-2.5">
            <div className="w-9 h-9 rounded-xl bg-teal-50 border border-teal-200 text-teal-900 flex items-center justify-center font-black text-sm lg:text-base">
              02
            </div>
            <h4 className="text-lg lg:text-xl font-black text-[#0F1E36]">경제활동의 자유</h4>
          </div>
          <p className="text-sm lg:text-base font-semibold text-[#0F1E36]/80 leading-snug">
            무엇을 생산할지, 어떤 직업을 가질지, 누구와 어떤 조건으로 계약할지를 <strong>국가 강제 없이 자율적으로 결정</strong>함.
          </p>
        </div>

        {/* Pillar 3 */}
        <div
          className={`p-4 lg:p-5 rounded-xl border transition-all duration-200 ${
            activeStep >= 3
              ? 'bg-white border-teal-700 shadow-md ring-2 ring-teal-600/30'
              : 'bg-white/50 border-[#0F1E36]/10 opacity-40'
          }`}
        >
          <div className="flex items-center gap-3 mb-2.5">
            <div className="w-9 h-9 rounded-xl bg-teal-50 border border-teal-200 text-teal-900 flex items-center justify-center font-black text-sm lg:text-base">
              03
            </div>
            <h4 className="text-lg lg:text-xl font-black text-[#0F1E36]">사적 이익 추구</h4>
          </div>
          <p className="text-sm lg:text-base font-semibold text-[#0F1E36]/80 leading-snug">
            자신의 노력과 창의성으로 <strong>정당한 이윤을 벌어들이려는 동기</strong>가 기술 혁신과 양질의 제품 생산을 견인함.
          </p>
        </div>
      </div>

      {/* 3. Interactive Pedagogical Simulation: "카페 창업" 모델 */}
      <div className="flex-1 bg-white rounded-xl border border-[#0F1E36]/12 p-4 lg:p-5 shadow-xs flex flex-col justify-between my-1">
        <div className="flex items-center justify-between pb-2.5 border-b border-[#0F1E36]/10">
          <div className="flex items-center gap-2">
            <Coffee className="w-5 h-5 text-amber-700" />
            <h3 className="text-base lg:text-lg font-black text-[#0F1E36]">
              실생활 사례로 이해하기: '카페 창업'으로 보는 자본주의 3요소
            </h3>
          </div>
          <span className="text-xs lg:text-sm text-[#0F1E36]/60">
            슬라이더를 조절하여 사적 이윤 추구의 작동 원리를 확인하세요
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 my-auto items-center">
          {/* Controls: Left 6 cols */}
          <div className="lg:col-span-6 space-y-4">
            <div>
              <div className="flex justify-between text-sm lg:text-base font-bold mb-1.5">
                <span>커피 판매 가격 (시장 가격 형성):</span>
                <span className="text-teal-900 font-black font-mono text-lg">{coffeePrice.toLocaleString()}원</span>
              </div>
              <input
                type="range"
                min="2500"
                max="7000"
                step="500"
                value={coffeePrice}
                onChange={(e) => setCoffeePrice(Number(e.target.value))}
                className="w-full accent-teal-800 cursor-pointer h-2 bg-slate-200 rounded-lg"
              />
            </div>

            <div>
              <div className="flex justify-between text-sm lg:text-base font-bold mb-1.5">
                <span>하루 판매 잔수 (소비자의 자유로운 선택):</span>
                <span className="text-teal-900 font-black font-mono text-lg">{dailySales}잔</span>
              </div>
              <input
                type="range"
                min="40"
                max="250"
                step="10"
                value={dailySales}
                onChange={(e) => setDailySales(Number(e.target.value))}
                className="w-full accent-teal-800 cursor-pointer h-2 bg-slate-200 rounded-lg"
              />
            </div>

            <div className="p-3 bg-[#FAF8F3] rounded-xl border border-[#0F1E36]/10 text-xs lg:text-sm space-y-1.5">
              <div className="flex justify-between text-[#0F1E36]/80 font-medium">
                <span>· 생산 수단 (에스프레소 머신 + 매장 임대):</span>
                <span className="font-mono font-bold">80,000원 / 일</span>
              </div>
              <div className="flex justify-between text-[#0F1E36]/80 font-medium">
                <span>· 노동 계약 (바리스타 임금):</span>
                <span className="font-mono font-bold">90,000원 / 일</span>
              </div>
              <div className="flex justify-between text-[#0F1E36]/80 font-medium">
                <span>· 원두 등 재료 원가:</span>
                <span className="font-mono font-bold">{(rawBeanCost * dailySales).toLocaleString()}원</span>
              </div>
            </div>
          </div>

          {/* Results Display: Right 6 cols */}
          <div className="lg:col-span-6 bg-[#FAF8F3] p-4 lg:p-5 rounded-xl border border-[#0F1E36]/12 flex flex-col justify-between">
            <span className="text-xs lg:text-sm font-bold text-teal-900 block mb-2.5">
              자본주의 원리 매핑 결과표
            </span>

            <div className="space-y-2.5 text-sm lg:text-base">
              <div className="flex justify-between items-center py-1.5 border-b border-black/5 font-medium">
                <span className="text-[#0F1E36]/80">하루 총 매출 (자유로운 거래 결과)</span>
                <span className="font-black font-mono text-lg text-[#0F1E36]">
                  {totalRevenue.toLocaleString()}원
                </span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-black/5 font-medium">
                <span className="text-[#0F1E36]/80">총 비용 (생산수단 + 임금 + 원자재)</span>
                <span className="font-mono font-bold text-[#0F1E36]/80">
                  -{totalCost.toLocaleString()}원
                </span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="font-black text-teal-950 text-base lg:text-lg">카페 주인의 최종 사적 이윤</span>
                <span
                  className={`font-mono text-2xl lg:text-3xl font-black ${
                    netProfit >= 0 ? 'text-teal-900' : 'text-red-600'
                  }`}
                >
                  {netProfit >= 0 ? `+${netProfit.toLocaleString()}원` : `${netProfit.toLocaleString()}원`}
                </span>
              </div>
            </div>

            <div className="mt-3.5 p-3 bg-white rounded-xl border border-[#0F1E36]/10 text-xs lg:text-sm text-[#0F1E36]/85 leading-relaxed">
              💡 <strong>수업 교훈:</strong> 카페 주인은 <strong>머신(생산수단)을 소유</strong>하고, <strong>바리스타와 자유롭게 계약(경제활동의 자유)</strong>하며, 더 좋은 커피를 만들어 <strong>이윤(사적 이익)</strong>을 남깁니다.
            </div>
          </div>
        </div>
      </div>

      {/* 4. Bottom Footer */}
      <div className="shrink-0 text-xs lg:text-sm text-[#0F1E36]/60 flex items-center justify-between pt-1 border-t border-[#0F1E36]/10">
        <span>* 우측 상단 [교사용 수업 노트]를 누르면 상세 발문 대본을 볼 수 있습니다.</span>
        <span className="font-bold text-teal-800">→ 다음 단계: 주제 02 '자본주의의 주요 특징과 시장경제'</span>
      </div>
    </div>
  );
};
