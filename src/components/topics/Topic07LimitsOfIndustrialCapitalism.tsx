import React, { useState } from 'react';
import { TrendingUp, AlertTriangle, Scale, Eye, BookOpen } from 'lucide-react';

interface Topic07LimitsOfIndustrialCapitalismProps {
  activeStep: number;
}

export const Topic07LimitsOfIndustrialCapitalism: React.FC<Topic07LimitsOfIndustrialCapitalismProps> = ({ activeStep }) => {
  const [activeSide, setActiveSide] = useState<'both' | 'bright' | 'dark'>('both');

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 md:p-6 max-w-[1520px] mx-auto select-none">
      {/* 1. Header */}
      <div className="shrink-0 mb-3">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs lg:text-sm font-bold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded border border-teal-200">
            주제 07 · 산업 자본주의의 명암
          </span>
          <span className="text-[#0F1E36]/30">·</span>
          <span className="text-xs lg:text-sm font-semibold text-[#0F1E36]/70">
            19세기: 자유방임주의의 성과와 구조적 문제점
          </span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <h2 className="text-2xl lg:text-3xl font-black text-[#0F1E36] tracking-tight">
            산업 자본주의의 눈부신 성과와 가혹한 한계
          </h2>
          <div className="flex items-center gap-1.5 p-1 bg-white rounded-lg border border-[#0F1E36]/12 shadow-2xs">
            <button
              onClick={() => setActiveSide('both')}
              className={`px-3 py-1.5 text-xs lg:text-sm font-bold rounded-md transition-colors cursor-pointer ${
                activeSide === 'both' ? 'bg-teal-900 text-white shadow-xs' : 'text-[#0F1E36]/70 hover:text-[#0F1E36]'
              }`}
            >
              양면 비교
            </button>
            <button
              onClick={() => setActiveSide('bright')}
              className={`px-3 py-1.5 text-xs lg:text-sm font-bold rounded-md transition-colors cursor-pointer ${
                activeSide === 'bright' ? 'bg-teal-800 text-white shadow-xs' : 'text-[#0F1E36]/70 hover:text-[#0F1E36]'
              }`}
            >
              빛: 경제적 성과
            </button>
            <button
              onClick={() => setActiveSide('dark')}
              className={`px-3 py-1.5 text-xs lg:text-sm font-bold rounded-md transition-colors cursor-pointer ${
                activeSide === 'dark' ? 'bg-red-700 text-white shadow-xs' : 'text-[#0F1E36]/70 hover:text-[#0F1E36]'
              }`}
            >
              그림자: 구조적 한계
            </button>
          </div>
        </div>
      </div>

      {/* 2. Dual Side Comparative Grid */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 my-auto items-stretch">
        {/* Bright Side (성과) */}
        {(activeSide === 'both' || activeSide === 'bright') && (
          <div className="bg-white rounded-xl border border-teal-300 p-5 lg:p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 pb-2.5 border-b border-teal-100 mb-4">
                <TrendingUp className="w-6 h-6 text-teal-700" />
                <h3 className="text-lg lg:text-xl font-black text-teal-950">
                  빛 (성과): 유례없는 물질적 번영
                </h3>
              </div>

              <div className="space-y-3.5">
                <div className="p-3.5 bg-teal-50/70 rounded-xl border border-teal-200">
                  <span className="font-black text-base lg:text-lg text-teal-950 block mb-1">
                    ① 폭발적인 대량 생산
                  </span>
                  <p className="text-sm lg:text-base font-semibold text-teal-900/90 leading-snug">
                    증기기관과 기계 도입으로 생산 속도가 수십 배 급증하여 물질적 풍요 달성
                  </p>
                </div>

                <div className="p-3.5 bg-teal-50/70 rounded-xl border border-teal-200">
                  <span className="font-black text-base lg:text-lg text-teal-950 block mb-1">
                    ② 대중 소비 시대 개막
                  </span>
                  <p className="text-sm lg:text-base font-semibold text-teal-900/90 leading-snug">
                    공산품 가격이 대폭 하락하여 서민들도 저렴한 직물과 생필품을 구매 가능
                  </p>
                </div>

                <div className="p-3.5 bg-teal-50/70 rounded-xl border border-teal-200">
                  <span className="font-black text-base lg:text-lg text-teal-950 block mb-1">
                    ③ 교통·물류 인프라 확장
                  </span>
                  <p className="text-sm lg:text-base font-semibold text-teal-900/90 leading-snug">
                    철도와 증기선으로 세계 물류가 연결되며 글로벌 교역망이 비약적 성장
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 p-3 bg-teal-100/70 rounded-xl text-xs lg:text-sm text-teal-950 font-bold">
              ★ 자유 경쟁과 사유재산 보장이 인류의 기술과 생산성을 폭발적으로 견인함
            </div>
          </div>
        )}

        {/* Dark Side (한계 및 문제점) */}
        {(activeSide === 'both' || activeSide === 'dark') && (
          <div className="bg-white rounded-xl border border-red-300 p-5 lg:p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 pb-2.5 border-b border-red-100 mb-4">
                <AlertTriangle className="w-6 h-6 text-red-600" />
                <h3 className="text-lg lg:text-xl font-black text-red-950">
                  그림자 (한계): 시장 방임의 비극과 모순
                </h3>
              </div>

              <div className="space-y-3.5">
                <div className="p-3.5 bg-red-50/70 rounded-xl border border-red-200">
                  <span className="font-black text-base lg:text-lg text-red-950 block mb-1">
                    ① 심각한 빈부격차와 아동 노동
                  </span>
                  <p className="text-sm lg:text-base font-semibold text-red-950/90 leading-snug">
                    하루 14~16시간 저임금 중노동, 유년층 아동의 광산 노동, 도시 빈민가 형성
                  </p>
                </div>

                <div className="p-3.5 bg-red-50/70 rounded-xl border border-red-200">
                  <span className="font-black text-base lg:text-lg text-red-950 block mb-1">
                    ② 거대 독과점 기업 출현
                  </span>
                  <p className="text-sm lg:text-base font-semibold text-red-950/90 leading-snug">
                    경쟁의 승자가 시장을 독점하여 가격을 일방적으로 조작하고 공정 경쟁 저해
                  </p>
                </div>

                <div className="p-3.5 bg-red-50/70 rounded-xl border border-red-200">
                  <span className="font-black text-base lg:text-lg text-red-950 block mb-1">
                    ③ 과잉 생산과 주기적 불황
                  </span>
                  <p className="text-sm lg:text-base font-semibold text-red-950/90 leading-snug">
                    공장은 물건을 쏟아내지만 노동자 구매력이 낮아 재고 누적으로 경제 위기 빈발
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 p-3 bg-red-100/70 rounded-xl text-xs lg:text-sm text-red-950 font-bold">
              ⚠️ 국가의 개입 없는 시장 방임은 1929년 마침내 대공황이라는 거대한 파국에 직면함
            </div>
          </div>
        )}
      </div>

      {/* 3. Bottom Pedagogical Note */}
      <div className="shrink-0 p-3 bg-[#FAF8F3] rounded-xl border border-[#0F1E36]/10 text-xs lg:text-sm text-[#0F1E36]/80 flex items-center justify-between">
        <span>
          💡 <strong>교과서 핵심 정리:</strong> 산업 자본주의는 전례 없는 물질적 풍요를 가져왔지만, 빈부 격차와 시장 실패를 스스로 해결하지 못하여 새로운 대안을 필요로 하게 되었습니다.
        </span>
        <span className="font-bold text-teal-800 shrink-0 ml-3">→ 다음 단계: 주제 08 '1929년 대공황'</span>
      </div>
    </div>
  );
};
