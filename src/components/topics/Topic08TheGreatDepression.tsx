import React, { useState } from 'react';
import { AlertCircle, TrendingDown, Landmark, Users, ArrowRight, BookOpen } from 'lucide-react';

interface Topic08TheGreatDepressionProps {
  activeStep: number;
}

const DEPRESSION_CAUSES = [
  {
    num: '01',
    title: '과잉 생산과 구매력 격차',
    detail: '공장의 대량 생산 속도에 비해 노동자 임금 상승이 지체되어 소비 여력이 위축됨.'
  },
  {
    num: '02',
    title: '금융 투기와 주가 폭락',
    detail: '과도한 빚에 기댄 주식 투기 거품이 붕괴하며 1929년 10월 뉴욕 증시가 급락함.'
  },
  {
    num: '03',
    title: '은행 연쇄 파산 & 신용 경색',
    detail: '대출 회수가 막힌 수천 개 은행이 파산하고 예금 인출 사태로 시중 자금이 얼어붙음.'
  },
  {
    num: '04',
    title: '보호관세로 세계 무역 급감',
    detail: '미국과 유럽 각국이 자국 산업 보호를 위해 관세를 높이자 국제 무역량이 60% 이상 급감함.'
  }
];

export const Topic08TheGreatDepression: React.FC<Topic08TheGreatDepressionProps> = ({ activeStep }) => {
  const [selectedCause, setSelectedCause] = useState<number>(0);

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 md:p-6 max-w-[1520px] mx-auto select-none">
      {/* 1. Header */}
      <div className="shrink-0 mb-3">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs lg:text-sm font-bold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded border border-teal-200">
            주제 08 · 자본주의 최대의 위기
          </span>
          <span className="text-[#0F1E36]/30">·</span>
          <span className="text-xs lg:text-sm font-semibold text-[#0F1E36]/70">
            1929년 10월 뉴욕 증시 폭락과 대공황
          </span>
        </div>
        <h2 className="text-2xl lg:text-3xl font-black text-[#0F1E36] tracking-tight">
          1929년 대공황: 시장의 자율 조절 기능 한계와 충격
        </h2>
      </div>

      {/* 2. Key Accurate Historical Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-4 mb-3">
        <div className="p-4 bg-red-50/80 rounded-xl border border-red-300 shadow-2xs">
          <span className="text-xs lg:text-sm font-bold text-red-900 block mb-1">
            미국 실업률 (1933년 정점 기준)
          </span>
          <div className="text-3xl lg:text-4xl font-black font-mono text-red-700">약 25.0%</div>
          <p className="text-xs lg:text-sm text-red-950/80 mt-1 font-medium">
            불황이 4년 가까이 지속되며 노동자 4명 중 1명이 일자리를 잃음
          </p>
        </div>

        <div className="p-4 bg-amber-50/80 rounded-xl border border-amber-300 shadow-2xs">
          <span className="text-xs lg:text-sm font-bold text-amber-900 block mb-1">
            미국 국민총생산 (GDP) 급감
          </span>
          <div className="text-3xl lg:text-4xl font-black font-mono text-amber-800">-46.0%</div>
          <p className="text-xs lg:text-sm text-amber-950/80 mt-1 font-medium">
            공장 폐쇄와 소비 절벽으로 국가 전체 생산량이 절반 가까이 위축
          </p>
        </div>

        <div className="p-4 bg-slate-100 rounded-xl border border-slate-300 shadow-2xs">
          <span className="text-xs lg:text-sm font-bold text-slate-800 block mb-1">
            세계 무역량 급감 (보호무역 여파)
          </span>
          <div className="text-3xl lg:text-4xl font-black font-mono text-slate-800">-60% 이상</div>
          <p className="text-xs lg:text-sm text-slate-700 mt-1 font-medium">
            각국의 보복 관세 전쟁으로 국가 간 물자 교류가 극도로 위축됨
          </p>
        </div>
      </div>

      {/* 3. Multi-Causal Analysis (대공황 복합 원인) */}
      <div className="flex-1 bg-white rounded-xl border border-[#0F1E36]/12 p-4 lg:p-6 shadow-xs flex flex-col justify-between my-1">
        <div className="flex items-center justify-between pb-2.5 border-b border-[#0F1E36]/10">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-red-700" />
            <h3 className="text-base lg:text-lg font-black text-[#0F1E36]">
              대공황의 복합적 요인 분석 (주가 폭락 · 금융 불안 · 소비 위축의 연쇄 작용)
            </h3>
          </div>
          <span className="text-xs lg:text-sm text-[#0F1E36]/60">
            * 단일 요인이 아닌 복합적 경제 불안정성의 발현
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 my-auto">
          {DEPRESSION_CAUSES.map((c, idx) => {
            const isSelected = selectedCause === idx;
            return (
              <button
                key={c.num}
                onClick={() => setSelectedCause(idx)}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-teal-900 text-white border-teal-900 shadow-md ring-2 ring-teal-600/30'
                    : 'bg-[#FAF8F3] hover:bg-white border-[#0F1E36]/10 text-[#0F1E36]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-mono font-bold ${isSelected ? 'text-teal-200' : 'text-teal-800'}`}>
                      원인 {c.num}
                    </span>
                    <span className={`text-xs font-bold px-1.5 py-0.5 rounded ${isSelected ? 'bg-teal-800 text-teal-100' : 'bg-slate-200 text-slate-700'}`}>
                      클릭
                    </span>
                  </div>
                  <h4 className="text-base lg:text-lg font-black leading-snug mb-2">
                    {c.title}
                  </h4>
                </div>
                <p className={`text-xs lg:text-sm leading-snug ${isSelected ? 'text-teal-50/90' : 'text-[#0F1E36]/75'}`}>
                  {c.detail}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Cause Detailed Showcase */}
        <div className="mt-3 p-4 bg-teal-50/80 rounded-xl border border-teal-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs lg:text-sm">
          <div>
            <span className="font-bold text-teal-900 block mb-0.5">
              선택한 요인: {DEPRESSION_CAUSES[selectedCause].title}
            </span>
            <p className="text-[#0F1E36]/90 font-medium">
              {DEPRESSION_CAUSES[selectedCause].detail} 시장이 스스로 회복하기를 기다리기에는 대량 실업과 고통이 너무 길어졌습니다.
            </p>
          </div>
          <div className="shrink-0 bg-white px-3 py-1.5 rounded-lg border border-teal-200 text-teal-900 font-bold">
            → 정부의 적극적 개입 요구 분출
          </div>
        </div>
      </div>

      {/* 4. Bottom Footer */}
      <div className="shrink-0 text-xs lg:text-sm text-[#0F1E36]/60 flex items-center justify-between pt-1 border-t border-[#0F1E36]/10">
        <span>* 우측 상단 [교사용 수업 노트]를 누르면 상세 발문 대본을 볼 수 있습니다.</span>
        <span className="font-bold text-teal-800">→ 다음 단계: 주제 09 '케인스의 유효수요 이론'</span>
      </div>
    </div>
  );
};
