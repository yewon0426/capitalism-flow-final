import React, { useState } from 'react';
import { Cog, Zap, Users, Factory, ArrowRight, Check, Sparkles, BookOpen } from 'lucide-react';

interface Topic05IndustrialRevolutionProps {
  activeStep: number;
}

export const Topic05IndustrialRevolution: React.FC<Topic05IndustrialRevolutionProps> = ({ activeStep }) => {
  const [viewMode, setViewMode] = useState<'compare' | 'social'>('compare');

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 md:p-6 max-w-[1520px] mx-auto select-none">
      {/* 1. Header */}
      <div className="shrink-0 mb-3">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs lg:text-sm font-bold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded border border-teal-200">
            주제 05 · 생산 혁명과 산업 자본주의
          </span>
          <span className="text-[#0F1E36]/30">·</span>
          <span className="text-xs lg:text-sm font-semibold text-[#0F1E36]/70">
            18세기 후반 영국: 증기기관과 공장제 기계 공업
          </span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <h2 className="text-2xl lg:text-3xl font-black text-[#0F1E36] tracking-tight">
            산업 혁명과 공장제 기계 공업의 확립
          </h2>
          <div className="flex items-center gap-1.5 p-1 bg-white rounded-lg border border-[#0F1E36]/12 shadow-2xs">
            <button
              onClick={() => setViewMode('compare')}
              className={`px-3 py-1.5 text-xs lg:text-sm font-bold rounded-md transition-colors cursor-pointer ${
                viewMode === 'compare' ? 'bg-teal-900 text-white shadow-xs' : 'text-[#0F1E36]/70 hover:text-[#0F1E36]'
              }`}
            >
              ① 생산 방식 비교 도식
            </button>
            <button
              onClick={() => setViewMode('social')}
              className={`px-3 py-1.5 text-xs lg:text-sm font-bold rounded-md transition-colors cursor-pointer ${
                viewMode === 'social' ? 'bg-teal-900 text-white shadow-xs' : 'text-[#0F1E36]/70 hover:text-[#0F1E36]'
              }`}
            >
              ② 자본가와 노동자의 분화
            </button>
          </div>
        </div>
      </div>

      {/* 2. Visual Main Stage */}
      {viewMode === 'compare' ? (
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 my-auto items-stretch">
          {/* Card 1: 산업 혁명 이전 (가내 수공업) */}
          <div className="bg-white rounded-xl border border-[#0F1E36]/12 p-5 lg:p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-2.5 border-b border-[#0F1E36]/10 mb-4">
                <span className="text-xs lg:text-sm font-black text-slate-700 bg-slate-100 px-3 py-1 rounded-md">
                  과거: 가내 수공업 (도구와 인력)
                </span>
                <span className="text-xs lg:text-sm font-mono text-[#0F1E36]/50">18세기 이전</span>
              </div>

              <div className="space-y-4">
                <div className="p-3 bg-[#FAF8F3] rounded-xl border border-[#0F1E36]/8">
                  <span className="text-xs font-bold text-slate-600 block mb-0.5">· 주요 동력원</span>
                  <p className="text-base lg:text-lg font-bold text-[#0F1E36]">
                    사람의 완력, 가축의 힘, 물레방아(수력)에 의존
                  </p>
                </div>
                <div className="p-3 bg-[#FAF8F3] rounded-xl border border-[#0F1E36]/8">
                  <span className="text-xs font-bold text-slate-600 block mb-0.5">· 생산 장소 & 방식</span>
                  <p className="text-base lg:text-lg font-bold text-[#0F1E36]">
                    장인의 집이나 작은 공방에서 개별 수작업
                  </p>
                </div>
                <div className="p-3 bg-[#FAF8F3] rounded-xl border border-[#0F1E36]/8">
                  <span className="text-xs font-bold text-slate-600 block mb-0.5">· 생산성과 공급량</span>
                  <p className="text-base lg:text-lg font-bold text-[#0F1E36]">
                    소량 생산으로 물건이 귀하고 가격이 비쌈
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 p-3 bg-slate-100 rounded-xl text-xs lg:text-sm text-slate-700 font-semibold">
              ⚠️ 숙련된 장인의 손기술에 의존하여 전 사회적 물자 공급에 한계
            </div>
          </div>

          {/* Card 2: 산업 혁명 이후 (공장제 기계 공업) */}
          <div className="bg-white rounded-xl border border-teal-600/40 p-5 lg:p-6 shadow-md ring-2 ring-teal-600/20 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-2.5 border-b border-teal-200 mb-4">
                <span className="text-xs lg:text-sm font-black text-white bg-teal-800 px-3 py-1 rounded-md shadow-2xs">
                  혁신: 공장제 기계 공업 (증기기관 혁명)
                </span>
                <span className="text-xs lg:text-sm font-mono text-teal-800 font-bold">18세기 후반~</span>
              </div>

              <div className="space-y-4">
                <div className="p-3 bg-teal-50/70 rounded-xl border border-teal-200">
                  <span className="text-xs font-bold text-teal-900 block mb-0.5">· 혁신 동력원</span>
                  <p className="text-base lg:text-lg font-black text-teal-950">
                    제임스 와트의 증기기관 (석탄 에너지, 지치지 않는 기계 동력)
                  </p>
                </div>
                <div className="p-3 bg-teal-50/70 rounded-xl border border-teal-200">
                  <span className="text-xs font-bold text-teal-900 block mb-0.5">· 생산 장소 & 분업</span>
                  <p className="text-base lg:text-lg font-black text-teal-950">
                    수백 명이 일하는 대형 공장에서 기계 분업 협업
                  </p>
                </div>
                <div className="p-3 bg-teal-50/70 rounded-xl border border-teal-200">
                  <span className="text-xs font-bold text-teal-900 block mb-0.5">· 생산성 폭발</span>
                  <p className="text-base lg:text-lg font-black text-teal-900">
                    생산성 100배 급증! 저렴한 면직물 대량 생산
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 p-3 bg-teal-800 text-white rounded-xl text-xs lg:text-sm font-bold flex items-center gap-2 shadow-2xs">
              <Sparkles className="w-4 h-4 text-teal-200 shrink-0" />
              <span>기계 대량 생산으로 인류 역사상 최초의 '물질적 풍요 시대' 개막</span>
            </div>
          </div>
        </div>
      ) : (
        /* Social Structure View */
        <div className="flex-1 bg-white rounded-xl border border-[#0F1E36]/12 p-5 lg:p-7 shadow-xs flex flex-col justify-between my-auto">
          <div>
            <h3 className="text-xl lg:text-2xl font-black text-[#0F1E36] mb-2">
              산업 자본주의가 형성한 2대 핵심 사회 계급
            </h3>
            <p className="text-sm lg:text-base text-[#0F1E36]/70 mb-5">
              생산수단(공장·기계)의 소유 여부에 따라 자본가와 노동자로 분화되었습니다.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
              {/* Capitalist */}
              <div className="p-5 lg:p-6 bg-[#FAF8F3] rounded-2xl border border-teal-700/30 shadow-2xs">
                <div className="flex items-center gap-2.5 mb-3">
                  <Factory className="w-6 h-6 text-teal-800" />
                  <span className="text-xl lg:text-2xl font-black text-teal-950">
                    산업 자본가
                  </span>
                </div>
                <div className="space-y-2 text-sm lg:text-base font-semibold text-[#0F1E36]/85">
                  <p>• 공장, 기계, 토지 등 <strong>생산수단을 법적으로 소유</strong></p>
                  <p>• 원자재를 조달하고 노동자를 고용하여 상품을 대량 생산</p>
                  <p>• 시장 경쟁을 통해 <strong>이윤 극대화</strong>를 추구</p>
                </div>
              </div>

              {/* Wage Laborer */}
              <div className="p-5 lg:p-6 bg-[#FAF8F3] rounded-2xl border border-amber-600/30 shadow-2xs">
                <div className="flex items-center gap-2.5 mb-3">
                  <Users className="w-6 h-6 text-amber-700" />
                  <span className="text-xl lg:text-2xl font-black text-amber-950">
                    임금 노동자
                  </span>
                </div>
                <div className="space-y-2 text-sm lg:text-base font-semibold text-[#0F1E36]/85">
                  <p>• 스스로 소유한 생산수단이 없음</p>
                  <p>• 자신의 <strong>노동력을 자본가에게 제공</strong>하고 근로 계약 체결</p>
                  <p>• 그 대가로 <strong>임금을 받아</strong> 가계 생활을 유지</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3.5 bg-amber-50 rounded-xl border border-amber-200 text-xs lg:text-sm text-amber-950 font-medium">
            💡 <strong>교과서 핵심 포인트:</strong> 자본가와 노동자의 관계는 계약의 자유를 바탕으로 하지만, 이 구조 속에서 빈부격차와 열악한 노동 환경이라는 새로운 사회 문제가 싹트게 됩니다.
          </div>
        </div>
      )}

      {/* 3. Bottom Bar */}
      <div className="shrink-0 text-xs lg:text-sm text-[#0F1E36]/60 flex items-center justify-between pt-1 border-t border-[#0F1E36]/10">
        <span>* 우측 상단 [교사용 수업 노트]를 누르면 상세 발문 대본을 볼 수 있습니다.</span>
        <span className="font-bold text-teal-800">→ 다음 단계: 주제 06 '애덤 스미스와 보이지 않는 손'</span>
      </div>
    </div>
  );
};
