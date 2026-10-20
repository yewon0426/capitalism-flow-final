import React, { useState } from 'react';
import { Flame, ArrowRight, RotateCcw, AlertTriangle, ShieldAlert, TrendingUp, TrendingDown, DollarSign, Users, Factory, Sparkles } from 'lucide-react';

interface Topic11StagflationShockProps {
  activeStep: number;
}

type PolicyChoice = 'none' | 'stimulus' | 'austerity' | 'dilemma';

export const Topic11StagflationShock: React.FC<Topic11StagflationShockProps> = ({ activeStep }) => {
  // Scenario: normal (1960s) or oilshock (1970s)
  const [isShockActive, setIsShockActive] = useState<boolean>(true);
  // Teacher/Student policy intervention test
  const [policy, setPolicy] = useState<PolicyChoice>('dilemma');

  // Computed economic indicators based on state
  const getMetrics = () => {
    if (!isShockActive) {
      return {
        eraName: '1960년대 안정적 황금기 (케인스주의 전성기)',
        oilPrice: 3,
        inflation: 2.8,
        unemployment: 3.6,
        growth: 5.4,
        status: '물가와 고용이 모두 안정적인 건강한 경제',
        oilBadge: '정상 가격 ($3/배럴)',
        inflationColor: 'text-teal-800',
        unemploymentColor: 'text-teal-800',
        growthColor: 'text-teal-800',
        dilemmaNote: '경기가 침체되면 정부가 재정을 풀고, 과열되면 세금을 올려 조절하던 시기'
      };
    }

    if (policy === 'stimulus') {
      return {
        eraName: '정책 실험 A: 케인스식 재정 지출 확대 (돈 풀기)',
        oilPrice: 12,
        inflation: 18.5,
        unemployment: 7.8,
        growth: 0.5,
        status: '💥 물가 대폭발! 돈을 더 풀자 물가가 18%로 폭등하여 통제 불능',
        oilBadge: '4배 폭등 ($12/배럴)',
        inflationColor: 'text-red-600',
        unemploymentColor: 'text-amber-700',
        growthColor: 'text-[#0F1E36]',
        dilemmaNote: '생산 비용이 올라 물건이 부족한데 돈만 풀리니 화폐 가치만 폭락함 (불난 집에 기름 붓기)'
      };
    }

    if (policy === 'austerity') {
      return {
        eraName: '정책 실험 B: 물가 안정용 긴축 정책 (금리 인상 & 지출 축소)',
        oilPrice: 12,
        inflation: 7.8,
        unemployment: 12.4,
        growth: -2.8,
        status: '💥 실업 대란! 돈줄을 죄자 기업이 연쇄 부도나고 실업률 12% 폭등',
        oilBadge: '4배 폭등 ($12/배럴)',
        inflationColor: 'text-amber-700',
        unemploymentColor: 'text-rose-700',
        growthColor: 'text-rose-700',
        dilemmaNote: '물가를 잡으려고 금리를 대폭 올리자 대출 이자를 못 견딘 기업들이 줄도산하고 노동자가 해고됨'
      };
    }

    // Default: 'dilemma' or 'none' under shock
    return {
      eraName: '1970년대 1·2차 석유 파동 발발 (스태그플레이션 충격)',
      oilPrice: 12,
      inflation: 14.2,
      unemployment: 8.9,
      growth: -1.6,
      status: '⚠️ 물가 폭등(14%) + 경기 침체·실업(9%)이 동시에 덮친 스태그플레이션!',
      oilBadge: '4배 폭등 ($12/배럴)',
      inflationColor: 'text-red-600',
      unemploymentColor: 'text-rose-700',
      growthColor: 'text-rose-700',
      dilemmaNote: '정부가 돈을 풀면 물가가 폭등하고, 돈줄을 죄면 실업이 폭등하는 진퇴양난의 정책 마비'
    };
  };

  const current = getMetrics();

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 md:p-6 max-w-[1520px] mx-auto select-none">
      {/* 1. Top Header */}
      <div className="shrink-0 mb-2">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs lg:text-sm font-bold text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded border border-amber-200">
            주제 11 · 1970년대 스태그플레이션 시뮬레이터
          </span>
          <span className="text-[#0F1E36]/30">·</span>
          <span className="text-xs lg:text-sm font-semibold text-[#0F1E36]/70">
            고등학교 통합사회2 경제사 시뮬레이션
          </span>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2">
          <h2 className="text-2xl lg:text-3xl font-black text-[#0F1E36] tracking-tight">
            스태그플레이션: 물가 상승과 경기 침체의 동시 습격
          </h2>
          <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-[#0F1E36]/10 text-xs lg:text-sm shadow-2xs">
            <span className="font-bold text-amber-800">핵심 질문:</span>
            <span className="text-[#0F1E36]/80 font-medium">
              물가와 실업이 동시에 오르면, 정부는 왜 해결하지 못했을까?
            </span>
          </div>
        </div>
      </div>

      {/* 2. Primary Control Panel: Shock Trigger & Policy Decision */}
      <div className="shrink-0 bg-white rounded-xl border border-[#0F1E36]/12 p-3 lg:p-4 shadow-xs mb-3">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* Left: Oil Shock Scenario Buttons */}
          <div className="flex items-center gap-2">
            <span className="text-xs lg:text-sm font-bold text-[#0F1E36] shrink-0">
              ① 시대 상황:
            </span>
            <div className="flex items-center gap-1.5 p-1 bg-[#FAF8F3] rounded-lg border border-[#0F1E36]/10">
              <button
                onClick={() => {
                  setIsShockActive(false);
                  setPolicy('none');
                }}
                className={`px-3 py-1.5 text-xs lg:text-sm font-bold rounded-md transition-all cursor-pointer ${
                  !isShockActive
                    ? 'bg-teal-900 text-white shadow-xs'
                    : 'text-[#0F1E36]/70 hover:text-[#0F1E36]'
                }`}
              >
                1960년대 안정기 ($3)
              </button>
              <button
                onClick={() => {
                  setIsShockActive(true);
                  setPolicy('dilemma');
                }}
                className={`px-3 py-1.5 text-xs lg:text-sm font-bold rounded-md transition-all cursor-pointer flex items-center gap-1.5 ${
                  isShockActive
                    ? 'bg-amber-600 text-white shadow-xs ring-2 ring-amber-400/50'
                    : 'text-amber-900 hover:text-amber-950 font-bold'
                }`}
              >
                <Flame className="w-3.5 h-3.5" />
                <span>1970년대 석유 파동 발발! ($12)</span>
              </button>
            </div>
          </div>

          {/* Right: Government Policy Choice Buttons */}
          {isShockActive && (
            <div className="flex items-center gap-2 animate-in fade-in duration-200">
              <span className="text-xs lg:text-sm font-bold text-amber-900 shrink-0">
                ② 정부 정책 실험:
              </span>
              <div className="flex items-center gap-1.5 p-1 bg-amber-50 rounded-lg border border-amber-200">
                <button
                  onClick={() => setPolicy('stimulus')}
                  className={`px-2.5 py-1 text-xs lg:text-sm font-bold rounded-md transition-all cursor-pointer ${
                    policy === 'stimulus'
                      ? 'bg-red-700 text-white shadow-xs'
                      : 'text-red-900 hover:bg-red-100/60'
                  }`}
                >
                  선택 A: 돈 풀기 (재정 지출)
                </button>
                <button
                  onClick={() => setPolicy('austerity')}
                  className={`px-2.5 py-1 text-xs lg:text-sm font-bold rounded-md transition-all cursor-pointer ${
                    policy === 'austerity'
                      ? 'bg-blue-800 text-white shadow-xs'
                      : 'text-blue-900 hover:bg-blue-100/60'
                  }`}
                >
                  선택 B: 돈줄 죄기 (긴축 금리 인상)
                </button>
                <button
                  onClick={() => setPolicy('dilemma')}
                  className={`px-2.5 py-1 text-xs lg:text-sm font-bold rounded-md transition-all cursor-pointer ${
                    policy === 'dilemma'
                      ? 'bg-[#0F1E36] text-white shadow-xs'
                      : 'text-[#0F1E36]/80 hover:bg-black/5'
                  }`}
                >
                  진퇴양난 (딜레마 보기)
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 3. Large Digital Indicators Dashboard (Clear from classroom back) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 lg:gap-3 mb-3">
        {/* Metric 1: Crude Oil Price */}
        <div className="p-3.5 lg:p-4 bg-white rounded-xl border border-[#0F1E36]/12 shadow-2xs flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs lg:text-sm font-bold text-slate-700">
            <span>국제 원유 가격</span>
            <span className="text-[11px] font-mono font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
              배럴당
            </span>
          </div>
          <div className="my-1.5 flex items-baseline gap-2">
            <span className="text-3xl lg:text-4xl font-black font-mono text-slate-900">
              ${current.oilPrice}
            </span>
            <span className="text-xs lg:text-sm font-bold text-amber-700">
              {current.oilBadge}
            </span>
          </div>
          <div className="text-xs text-[#0F1E36]/60 pt-1.5 border-t border-[#0F1E36]/6">
            모든 공장의 전기·화학·물류 원가 결정
          </div>
        </div>

        {/* Metric 2: Inflation Rate */}
        <div className={`p-3.5 lg:p-4 rounded-xl border shadow-2xs flex flex-col justify-between transition-colors ${
          current.inflation > 10 ? 'bg-red-50/80 border-red-300' : 'bg-white border-[#0F1E36]/12'
        }`}>
          <div className="flex items-center justify-between text-xs lg:text-sm font-bold text-red-900">
            <span>소비자 물가 상승률</span>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-red-100 text-red-800 border border-red-200">
              인플레이션
            </span>
          </div>
          <div className="my-1.5 flex items-baseline gap-2">
            <span className={`text-3xl lg:text-4xl font-black font-mono ${current.inflationColor}`}>
              +{current.inflation}%
            </span>
            <span className="text-xs lg:text-sm font-bold text-red-700">
              {current.inflation > 10 ? '▲ 폭등 비상' : '● 정상 안정'}
            </span>
          </div>
          <div className="text-xs text-red-950/70 pt-1.5 border-t border-red-200/60">
            생활비 급등과 서민 가계 부담 폭발
          </div>
        </div>

        {/* Metric 3: Unemployment Rate */}
        <div className={`p-3.5 lg:p-4 rounded-xl border shadow-2xs flex flex-col justify-between transition-colors ${
          current.unemployment > 7 ? 'bg-amber-50/80 border-amber-300' : 'bg-white border-[#0F1E36]/12'
        }`}>
          <div className="flex items-center justify-between text-xs lg:text-sm font-bold text-amber-900">
            <span>실업률 (일자리 위기)</span>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-200">
              스태그네이션
            </span>
          </div>
          <div className="my-1.5 flex items-baseline gap-2">
            <span className={`text-3xl lg:text-4xl font-black font-mono ${current.unemploymentColor}`}>
              {current.unemployment}%
            </span>
            <span className="text-xs lg:text-sm font-bold text-amber-700">
              {current.unemployment > 6 ? '▲ 고용 대란' : '● 완전 고용'}
            </span>
          </div>
          <div className="text-xs text-amber-950/70 pt-1.5 border-t border-amber-200/60">
            공장 감산으로 청년 및 노동자 실직
          </div>
        </div>

        {/* Metric 4: Economic Growth (GDP) */}
        <div className={`p-3.5 lg:p-4 rounded-xl border shadow-2xs flex flex-col justify-between transition-colors ${
          current.growth < 0 ? 'bg-rose-50/80 border-rose-300' : 'bg-white border-[#0F1E36]/12'
        }`}>
          <div className="flex items-center justify-between text-xs lg:text-sm font-bold text-blue-900">
            <span>실질 경제성장률</span>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-900 border border-blue-200">
              GDP 성장
            </span>
          </div>
          <div className="my-1.5 flex items-baseline gap-2">
            <span className={`text-3xl lg:text-4xl font-black font-mono ${current.growthColor}`}>
              {current.growth > 0 ? `+${current.growth}%` : `${current.growth}%`}
            </span>
            <span className="text-xs lg:text-sm font-bold text-rose-700">
              {current.growth < 0 ? '▼ 역성장 (침체)' : '▲ 건전한 확장'}
            </span>
          </div>
          <div className="text-xs text-[#0F1E36]/60 pt-1.5 border-t border-[#0F1E36]/6">
            국가 전체 산업 생산력 지표
          </div>
        </div>
      </div>

      {/* 4. Cause-and-Effect Flow Diagram: High school friendly causality chain */}
      <div className="flex-1 bg-white rounded-xl border border-[#0F1E36]/12 p-3 lg:p-5 shadow-xs flex flex-col justify-between mb-2">
        <div className="flex items-center justify-between pb-2 border-b border-[#0F1E36]/10 mb-2">
          <span className="text-xs lg:text-sm font-bold text-teal-900 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-teal-700" />
            <span>스태그플레이션의 발생 메커니즘과 정부 개입의 한계 (인과관계 도식)</span>
          </span>
          <span className="text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">
            {current.eraName}
          </span>
        </div>

        {/* 4 Horizontal Connecting Steps */}
        <div className="grid grid-cols-1 md:grid-cols-7 items-center gap-2 my-auto">
          {/* Box 1: 외부 공급 충격 */}
          <div className="md:col-span-2 p-3 lg:p-4 bg-[#FAF8F3] rounded-xl border border-[#0F1E36]/12 shadow-2xs">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-mono font-bold text-amber-800">단계 01</span>
              <span className="text-[11px] font-bold text-amber-900 bg-amber-100 px-1.5 py-0.5 rounded">
                공급 충격
              </span>
            </div>
            <h4 className="text-base lg:text-lg font-black text-[#0F1E36] mb-1">
              원유 가격 4배 폭등
            </h4>
            <p className="text-xs lg:text-sm text-[#0F1E36]/80 font-normal leading-snug">
              중동 전쟁 발발로 배럴당 3달러이던 석유 가격이 12달러로 수직 상승함.
            </p>
          </div>

          {/* Connector Arrow 1 */}
          <div className="md:col-span-1 flex items-center justify-center text-teal-700">
            <ArrowRight className="w-6 h-6 rotate-90 md:rotate-0" />
          </div>

          {/* Box 2: 전 산업 생산비 급증 */}
          <div className="md:col-span-2 p-3 lg:p-4 bg-amber-50/70 rounded-xl border border-amber-300 shadow-2xs">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-mono font-bold text-amber-900">단계 02</span>
              <span className="text-[11px] font-bold text-amber-900 bg-amber-200/80 px-1.5 py-0.5 rounded">
                원가 상승
              </span>
            </div>
            <h4 className="text-base lg:text-lg font-black text-amber-950 mb-1">
              공장 생산 비용 급증
            </h4>
            <p className="text-xs lg:text-sm text-[#0F1E36]/80 font-normal leading-snug">
              전기, 운송, 원자재 등 모든 비용이 급등하여 기업들이 생산을 대폭 줄임.
            </p>
          </div>

          {/* Connector Arrow 2 */}
          <div className="md:col-span-1 flex items-center justify-center text-teal-700">
            <ArrowRight className="w-6 h-6 rotate-90 md:rotate-0" />
          </div>

          {/* Box 3: 스태그플레이션 발발 */}
          <div className="md:col-span-1 p-3 lg:p-4 bg-red-50 rounded-xl border border-red-300 shadow-2xs">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-mono font-bold text-red-900">단계 03</span>
              <span className="text-[11px] font-bold text-red-900 bg-red-200 px-1.5 py-0.5 rounded">
                비극
              </span>
            </div>
            <h4 className="text-base lg:text-lg font-black text-red-950 mb-1">
              스태그플레이션
            </h4>
            <p className="text-xs lg:text-sm text-red-950/90 font-medium leading-snug">
              물가 폭등 + 경기 침체·실업이 동시에 덮침!
            </p>
          </div>
        </div>

        {/* Dynamic Policy Outcome & Dilemma Result Strip */}
        <div className="mt-3 p-3 lg:p-4 bg-amber-50/90 rounded-xl border border-amber-300 flex flex-col md:flex-row md:items-center justify-between gap-2.5">
          <div className="flex items-start gap-2.5">
            <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <span className="text-xs lg:text-sm font-black text-amber-950 block">
                {current.status}
              </span>
              <p className="text-xs lg:text-sm text-amber-900/90 mt-0.5 font-medium">
                {current.dilemmaNote}
              </p>
            </div>
          </div>
          <div className="shrink-0 bg-white/95 px-3.5 py-2 rounded-lg border border-amber-300 text-right">
            <span className="text-[11px] font-bold text-amber-800 block">역사적 전환의 계기</span>
            <span className="text-xs lg:text-sm font-black text-teal-900">
              ──▶ "정부 실패" 비판과 신자유주의 등장
            </span>
          </div>
        </div>
      </div>

      {/* 5. Bottom Guide for Teachers */}
      <div className="shrink-0 text-xs lg:text-sm text-[#0F1E36]/60 flex items-center justify-between pt-1 border-t border-[#0F1E36]/10">
        <span>* 위 수치는 1970년대 미국 및 서구 선진국의 석유 파동 당시 경제 지표를 고1 수업용으로 재구성한 시뮬레이션입니다.</span>
        <span className="font-bold text-teal-800">→ 다음 단계: 주제 12 '신자유주의의 등장'</span>
      </div>
    </div>
  );
};
