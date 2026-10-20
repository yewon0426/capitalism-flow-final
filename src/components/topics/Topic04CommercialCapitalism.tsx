import React, { useState, useEffect } from 'react';
import { Compass, Coins, Ship, Zap, ArrowRight, Sparkles, BookOpen, RotateCcw } from 'lucide-react';

interface Topic04CommercialCapitalismProps {
  activeStep: number;
}

export const Topic04CommercialCapitalism: React.FC<Topic04CommercialCapitalismProps> = ({ activeStep }) => {
  const [revealedStep, setRevealedStep] = useState<number>(4);

  useEffect(() => {
    if (activeStep >= 1 && activeStep <= 4) {
      setRevealedStep(activeStep);
    }
  }, [activeStep]);

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 md:p-6 max-w-[1520px] mx-auto select-none">
      {/* 1. Header */}
      <div className="shrink-0 mb-3">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs lg:text-sm font-bold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded border border-teal-200">
            주제 04 · 자본주의의 1단계
          </span>
          <span className="text-[#0F1E36]/30">·</span>
          <span className="text-xs lg:text-sm font-semibold text-[#0F1E36]/70">
            16세기 ~ 18세기: 상업 자본주의와 중상주의
          </span>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2">
          <h2 className="text-2xl lg:text-3xl font-black text-[#0F1E36] tracking-tight">
            상업 자본주의: 신항로 개척과 무역을 통한 자본 축적
          </h2>
          {/* Step Sequence Controller */}
          <div className="flex items-center gap-1.5 p-1 bg-white rounded-lg border border-[#0F1E36]/12 shadow-2xs">
            <span className="text-xs font-bold text-[#0F1E36]/70 px-2">개념 공개:</span>
            {[1, 2, 3, 4].map((stepNum) => (
              <button
                key={stepNum}
                onClick={() => setRevealedStep(stepNum)}
                className={`px-3 py-1 text-xs lg:text-sm font-bold rounded transition-all cursor-pointer ${
                  revealedStep === stepNum
                    ? 'bg-teal-900 text-white shadow-xs'
                    : revealedStep > stepNum
                    ? 'bg-teal-100 text-teal-900'
                    : 'bg-slate-100 text-[#0F1E36]/40'
                }`}
              >
                {stepNum === 4 ? '⚡ 산업 혁명' : `개념 0${stepNum}`}
              </button>
            ))}
            <button
              onClick={() => setRevealedStep(4)}
              className="px-2.5 py-1 text-xs font-semibold text-teal-900 bg-teal-50 hover:bg-teal-100 rounded transition-colors cursor-pointer"
            >
              전체 보기
            </button>
          </div>
        </div>
      </div>

      {/* 2. Main Visual Concept Map: 3 Core Interacting Concepts + 1 Historical Leap */}
      <div className="flex-1 bg-white rounded-xl border border-[#0F1E36]/12 p-4 lg:p-6 shadow-xs flex flex-col justify-between my-2">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-stretch my-auto">
          {/* Left/Center: 3 Core Interacting Elements (8 cols) */}
          <div className="lg:col-span-8 bg-[#FAF8F3] rounded-xl border border-[#0F1E36]/12 p-4 lg:p-5 flex flex-col justify-between shadow-2xs">
            <div className="flex items-center justify-between pb-2 border-b border-[#0F1E36]/10 mb-3">
              <span className="text-xs lg:text-sm font-bold text-teal-900 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-teal-700" />
                <span>상업 자본주의의 3대 핵심 개념 (동시대 상호작용)</span>
              </span>
              <span className="text-xs text-[#0F1E36]/60">
                * 시간순 나열이 아닌, 동시대에 맞물려 작동한 핵심 요소
              </span>
            </div>

            {/* 3 Large Concept Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-2">
              {/* Concept 1 */}
              <div
                onClick={() => setRevealedStep(1)}
                className={`p-4 lg:p-5 rounded-xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  revealedStep >= 1
                    ? 'bg-white border-teal-700 shadow-md ring-2 ring-teal-600/30'
                    : 'opacity-30 bg-white/50 border-dashed border-[#0F1E36]/20'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-teal-800">01</span>
                    <Ship className="w-5 h-5 text-teal-700" />
                  </div>
                  <h4 className="text-xl lg:text-2xl font-black text-[#0F1E36] leading-snug mb-2">
                    원거리 무역 확대
                  </h4>
                </div>
                <div className="pt-3 border-t border-[#0F1E36]/8">
                  <p className="text-sm lg:text-base font-bold text-[#0F1E36]/80 leading-normal">
                    상업 활동을 통한 이윤 추구
                  </p>
                  <span className="text-xs text-[#0F1E36]/50 block mt-1">
                    신항로 개척과 동인도회사 독점 무역
                  </span>
                </div>
              </div>

              {/* Concept 2 */}
              <div
                onClick={() => setRevealedStep(2)}
                className={`p-4 lg:p-5 rounded-xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  revealedStep >= 2
                    ? 'bg-white border-teal-700 shadow-md ring-2 ring-teal-600/30'
                    : 'opacity-30 bg-white/50 border-dashed border-[#0F1E36]/20'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-teal-800">02</span>
                    <Compass className="w-5 h-5 text-teal-700" />
                  </div>
                  <h4 className="text-xl lg:text-2xl font-black text-[#0F1E36] leading-snug mb-2">
                    중상주의 정책
                  </h4>
                </div>
                <div className="pt-3 border-t border-[#0F1E36]/8">
                  <p className="text-sm lg:text-base font-bold text-[#0F1E36]/80 leading-normal">
                    수출 장려 · 수입 제한 · 국내 산업 보호
                  </p>
                  <span className="text-xs text-[#0F1E36]/50 block mt-1">
                    절대왕정의 강력한 국가 개입과 보호관세
                  </span>
                </div>
              </div>

              {/* Concept 3 */}
              <div
                onClick={() => setRevealedStep(3)}
                className={`p-4 lg:p-5 rounded-xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  revealedStep >= 3
                    ? 'bg-white border-teal-700 shadow-md ring-2 ring-teal-600/30'
                    : 'opacity-30 bg-white/50 border-dashed border-[#0F1E36]/20'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-teal-800">03</span>
                    <Coins className="w-5 h-5 text-teal-700" />
                  </div>
                  <h4 className="text-xl lg:text-2xl font-black text-[#0F1E36] leading-snug mb-2">
                    상업 자본 축적
                  </h4>
                </div>
                <div className="pt-3 border-t border-[#0F1E36]/8">
                  <p className="text-sm lg:text-base font-bold text-[#0F1E36]/80 leading-normal">
                    무역 이윤을 통한 자본 축적
                  </p>
                  <span className="text-xs text-[#0F1E36]/50 block mt-1">
                    훗날 산업 혁명을 일으키는 거대 종잣돈 형성
                  </span>
                </div>
              </div>
            </div>

            {/* Interaction note bar */}
            <div className="mt-3 pt-2 border-t border-[#0F1E36]/8 flex items-center justify-between text-xs lg:text-sm text-[#0F1E36]/75">
              <span>
                💡 <strong>상호작용 구조:</strong> 국가의 중상주의적 보호 ↔ 상인의 무역 이윤 추구가 결합하여 거대한 상업 자본이 축적됨
              </span>
              <span className="font-bold text-teal-800">국가 개입형 자본주의</span>
            </div>
          </div>

          {/* Right: Separate Distinct Transition Area (4 cols) */}
          <div
            onClick={() => setRevealedStep(4)}
            className={`lg:col-span-4 rounded-xl border p-5 lg:p-6 flex flex-col justify-between transition-all duration-200 cursor-pointer relative overflow-hidden shadow-xs ${
              revealedStep < 4
                ? 'opacity-35 bg-white border-amber-200 border-dashed'
                : 'bg-gradient-to-br from-amber-50 via-white to-amber-50/70 border-amber-400 ring-2 ring-amber-400/50'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-amber-600 text-white flex items-center gap-1 shadow-2xs">
                  <Zap className="w-3.5 h-3.5" />
                  <span>별도 강조 · 역사적 대전환</span>
                </span>
                <span className="text-xs font-mono font-bold text-amber-900">
                  시대적 도약
                </span>
              </div>

              <h4 className="text-2xl lg:text-3xl font-black text-amber-950 leading-tight mb-2 tracking-tight">
                산업 혁명
              </h4>

              <p className="text-base lg:text-lg font-bold text-[#0F1E36]/85 mb-3 leading-snug">
                • 기계 · 공장제 생산 확대
              </p>
            </div>

            {/* Outcome Callout Box */}
            <div className="mt-4 p-4 bg-white/95 rounded-xl border border-amber-300 shadow-2xs">
              <span className="text-xs font-bold text-amber-800 block mb-1">
                다음 단계로의 역사적 전개:
              </span>
              <div className="text-lg lg:text-xl font-black text-teal-900 flex items-center gap-2">
                <ArrowRight className="w-5 h-5 text-teal-700" />
                <span>산업 자본주의 발전</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pedagogical Bottom Notice */}
        <div className="mt-4 p-3 bg-[#FAF8F3] rounded-lg border border-[#0F1E36]/10 flex items-center justify-between text-xs lg:text-sm">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-teal-800 shrink-0" />
            <span>
              <strong>교사용 안내:</strong> 원거리 무역, 중상주의, 자본 축적은 동시대 상호작용 요소이며, 축적된 자본이 산업 혁명이라는 역사적 도약으로 이어졌음을 강조해 주세요.
            </span>
          </div>
          <span className="font-bold text-teal-800 shrink-0 ml-3">
            개념 공개: {revealedStep} / 4
          </span>
        </div>
      </div>

      {/* 3. Bottom Bar */}
      <div className="shrink-0 text-xs lg:text-sm text-[#0F1E36]/60 flex items-center justify-between pt-1 border-t border-[#0F1E36]/10">
        <span>* 우측 상단 [교사용 수업 노트]를 누르면 상세 발문 및 역사적 배경을 확인할 수 있습니다.</span>
        <span className="font-bold text-teal-800">→ 다음 단계: 주제 05 '산업 혁명과 공장제 생산'</span>
      </div>
    </div>
  );
};
