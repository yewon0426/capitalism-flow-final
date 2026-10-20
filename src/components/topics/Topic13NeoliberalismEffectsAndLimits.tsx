import React, { useState } from 'react';
import { TrendingUp, AlertTriangle, Globe, Sparkles, Scale, Info, BookOpen } from 'lucide-react';

interface Topic13NeoliberalismEffectsAndLimitsProps {
  activeStep: number;
}

export const Topic13NeoliberalismEffectsAndLimits: React.FC<Topic13NeoliberalismEffectsAndLimitsProps> = ({ activeStep }) => {
  const [modelCompare, setModelCompare] = useState<'us' | 'nordic'>('us');

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 md:p-6 max-w-[1520px] mx-auto select-none">
      {/* 1. Header */}
      <div className="shrink-0 mb-3">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs lg:text-sm font-bold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded border border-teal-200">
            주제 13 · 신자유주의의 종합 평가
          </span>
          <span className="text-[#0F1E36]/30">·</span>
          <span className="text-xs lg:text-sm font-semibold text-[#0F1E36]/70">
            효율성의 극대화와 양극화의 그늘
          </span>
        </div>
        <h2 className="text-2xl lg:text-3xl font-black text-[#0F1E36] tracking-tight">
          신자유주의의 기대 효과와 한계 (명과 암)
        </h2>
      </div>

      {/* 2. Dual Column Analysis: 성과 vs 한계 (Large Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mb-3">
        {/* Left: 기대 효과 & 성과 */}
        <div className="bg-white rounded-xl border border-teal-300 p-5 lg:p-6 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 pb-2.5 border-b border-teal-100 mb-3">
              <TrendingUp className="w-6 h-6 text-teal-700" />
              <h3 className="text-lg lg:text-xl font-black text-teal-950">
                기대 효과: 시장 활력과 글로벌 경제 확장
              </h3>
            </div>
            <div className="space-y-3">
              <div className="p-3.5 bg-teal-50/70 rounded-xl border border-teal-200">
                <span className="font-black text-sm lg:text-base text-teal-950 block mb-0.5">
                  ① 시장 경쟁 촉진 & 효율성 개선
                </span>
                <p className="text-xs lg:text-sm text-teal-900/90 font-medium leading-snug">
                  공기업 민영화와 규제 완화로 만성 적자 해소, 민간 기업의 생산성 제고
                </p>
              </div>
              <div className="p-3.5 bg-teal-50/70 rounded-xl border border-teal-200">
                <span className="font-black text-sm lg:text-base text-teal-950 block mb-0.5">
                  ② IT 기술 혁신과 벤처 생태계
                </span>
                <p className="text-xs lg:text-sm text-teal-900/90 font-medium leading-snug">
                  자본 투자의 자유화로 실리콘밸리 등 글로벌 IT 및 첨단 기술 혁신 가속화
                </p>
              </div>
              <div className="p-3.5 bg-teal-50/70 rounded-xl border border-teal-200">
                <span className="font-black text-sm lg:text-base text-teal-950 block mb-0.5">
                  ③ 소비자 선택권 확대
                </span>
                <p className="text-xs lg:text-sm text-teal-900/90 font-medium leading-snug">
                  세계화로 무역 장벽이 낮아져 전 세계의 다양하고 저렴한 상품 향유
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: 한계와 우려 */}
        <div className="bg-white rounded-xl border border-red-300 p-5 lg:p-6 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 pb-2.5 border-b border-red-100 mb-3">
              <AlertTriangle className="w-6 h-6 text-red-600" />
              <h3 className="text-lg lg:text-xl font-black text-red-950">
                한계 및 우려: 불평등 심화와 공공성 후퇴
              </h3>
            </div>
            <div className="space-y-3">
              <div className="p-3.5 bg-red-50/70 rounded-xl border border-red-200">
                <span className="font-black text-sm lg:text-base text-red-950 block mb-0.5">
                  ① 소득 불평등 & 자산 양극화 심화
                </span>
                <p className="text-xs lg:text-sm text-red-950/90 font-medium leading-snug">
                  상위 계층으로 부가 집중되고 중산층이 축소되는 심각한 '빈익빈 부익부' 초래
                </p>
              </div>
              <div className="p-3.5 bg-red-50/70 rounded-xl border border-red-200">
                <span className="font-black text-sm lg:text-base text-red-950 block mb-0.5">
                  ② 노동 유연화와 고용 불안정
                </span>
                <p className="text-xs lg:text-sm text-red-950/90 font-medium leading-snug">
                  비정규직 증가, 쉬운 해고로 인한 고용 불안, 노동자 협상력 약화
                </p>
              </div>
              <div className="p-3.5 bg-red-50/70 rounded-xl border border-red-200">
                <span className="font-black text-sm lg:text-base text-red-950 block mb-0.5">
                  ③ 공공서비스 축소 우려
                </span>
                <p className="text-xs lg:text-sm text-red-950/90 font-medium leading-snug">
                  필수 공공재 민영화 시 요금 인상과 취약계층의 접근성 악화 우려
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Deep Dive: 국가별 제도적 차이 (영미형 vs 북유럽형) */}
      <div className="flex-1 bg-white rounded-xl border border-[#0F1E36]/12 p-4 lg:p-5 shadow-xs flex flex-col justify-between my-1">
        <div className="flex items-center justify-between pb-2 border-b border-[#0F1E36]/10">
          <span className="text-sm lg:text-base font-black text-[#0F1E36]">
            국가별 제도의 차이: "신자유주의의 결과는 나라마다 왜 다를까?"
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setModelCompare('us')}
              className={`px-3 py-1 text-xs lg:text-sm font-bold rounded-lg cursor-pointer transition-all ${
                modelCompare === 'us' ? 'bg-teal-900 text-white shadow-xs' : 'bg-[#FAF8F3] text-[#0F1E36]/70'
              }`}
            >
              영미형 모델 (미국·영국)
            </button>
            <button
              onClick={() => setModelCompare('nordic')}
              className={`px-3 py-1 text-xs lg:text-sm font-bold rounded-lg cursor-pointer transition-all ${
                modelCompare === 'nordic' ? 'bg-teal-900 text-white shadow-xs' : 'bg-[#FAF8F3] text-[#0F1E36]/70'
              }`}
            >
              북유럽 유연안정성 모델 (스웨덴·덴마크)
            </button>
          </div>
        </div>

        <div className="my-2.5 p-4 bg-[#FAF8F3] rounded-xl border border-[#0F1E36]/10 text-xs lg:text-sm">
          {modelCompare === 'us' ? (
            <div>
              <span className="font-black text-sm lg:text-base text-teal-950 block mb-1">
                🇺🇸 🇬🇧 영미형 모델 (자유 경쟁과 주주 가치 극대화)
              </span>
              <p className="text-sm lg:text-base text-[#0F1E36]/85 leading-relaxed font-medium">
                철저한 시장 경쟁, 낮은 세율, 규제 완화로 기업 혁신을 이끌었으나, 복지 축소로 인한 양극화와 고용 불안정이라는 과제를 안게 되었습니다.
              </p>
            </div>
          ) : (
            <div>
              <span className="font-black text-sm lg:text-base text-teal-950 block mb-1">
                🇸🇪 🇩🇰 북유럽 복합 모델 (유연안정성: Flexicurity)
              </span>
              <p className="text-sm lg:text-base text-[#0F1E36]/85 leading-relaxed font-medium">
                기업의 고용 유연성을 인정하되, 실직자에게 실업 급여와 국가 주도의 재취업 교육 등 든든한 사회안전망을 제공하여 양극화를 최소화했습니다.
              </p>
            </div>
          )}
        </div>

        <div className="p-3 bg-teal-50 rounded-xl text-xs lg:text-sm text-teal-950 flex items-center justify-between font-medium">
          <span>
            💡 <strong>교과서 핵심 메시지:</strong> 신자유주의 정책의 효과는 일률적이지 않으며, <strong>각 국가의 사회적 합의와 제도적 보완책</strong>에 따라 크게 달라집니다.
          </span>
          <span className="font-bold text-teal-800 shrink-0 ml-2">→ PART 3 종합 정리로 이동</span>
        </div>
      </div>

      {/* 4. Bottom Footer */}
      <div className="shrink-0 text-xs lg:text-sm text-[#0F1E36]/60 flex items-center justify-between pt-1 border-t border-[#0F1E36]/10">
        <span>* 우측 상단 [교사용 수업 노트]를 누르면 상세 발문 대본을 볼 수 있습니다.</span>
        <span className="font-bold text-teal-800">→ 다음 단계: 주제 14 '자본주의 4단계 종합 비교 매트릭스'</span>
      </div>
    </div>
  );
};
