import React, { useState } from 'react';
import { TIMELINE_ERAS, TIMELINE_HINGES } from '../../data/curriculumData';
import { Sparkles, MessageSquare, CheckCircle2, ArrowRight, BookOpen, GraduationCap } from 'lucide-react';

interface Topic15FinalSynthesisProps {
  activeStep: number;
}

export const Topic15FinalSynthesis: React.FC<Topic15FinalSynthesisProps> = ({ activeStep }) => {
  const [selectedItem, setSelectedItem] = useState<{ type: 'era' | 'hinge'; id: string }>({
    type: 'era',
    id: 'commercial'
  });

  const currentEra = TIMELINE_ERAS.find((e) => e.id === selectedItem.id);
  const currentHinge = TIMELINE_HINGES.find((h) => h.id === selectedItem.id);

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 md:p-6 max-w-[1520px] mx-auto select-none">
      {/* 1. Header */}
      <div className="shrink-0 mb-3">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs lg:text-sm font-bold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded border border-teal-200">
            주제 15 · 수업 총괄 마무리
          </span>
          <span className="text-[#0F1E36]/30">·</span>
          <span className="text-xs lg:text-sm font-semibold text-[#0F1E36]/70">
            전체 흐름 복습 & 미래 자본주의의 과제
          </span>
        </div>
        <h2 className="text-2xl lg:text-3xl font-black text-[#0F1E36] tracking-tight">
          자본주의의 진화와 시장·정부의 조화
        </h2>
      </div>

      {/* 2. Final Master Motto Banner */}
      <div className="bg-gradient-to-r from-teal-950 via-teal-900 to-slate-900 text-white rounded-2xl p-5 lg:p-6 shadow-md mb-3 border border-teal-800">
        <div className="flex items-center gap-2 text-teal-300 text-xs lg:text-sm font-bold mb-2">
          <Sparkles className="w-4 h-4" />
          <span>통합사회2 자본주의 단원 최종 핵심 명제</span>
        </div>
        <p className="text-xl md:text-2xl lg:text-3xl font-black tracking-tight text-white leading-snug">
          "자본주의는 시대의 경제적 문제에 대응하는 과정에서 <span className="text-amber-400 underline underline-offset-4">시장과 정부의 역할을 조정</span>하며 끊임없이 변화해 왔다."
        </p>
      </div>

      {/* 3. Interactive Review Timeline Navigator */}
      <div className="bg-white rounded-xl border border-[#0F1E36]/12 p-4 lg:p-5 shadow-xs mb-3">
        <div className="flex items-center justify-between pb-2 border-b border-[#0F1E36]/10 mb-3">
          <span className="text-xs lg:text-sm font-bold text-teal-900">
            총정리 타임라인 (시대 및 전환 사건을 클릭하여 복습)
          </span>
          <span className="text-xs text-[#0F1E36]/50">
            시대 4개 + 전환 사건 3개 탐색
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-7 items-center gap-2">
          {TIMELINE_ERAS.map((era, index) => {
            const isEraSelected = selectedItem.type === 'era' && selectedItem.id === era.id;
            const hinge = TIMELINE_HINGES[index];
            const isHingeSelected = hinge && selectedItem.type === 'hinge' && selectedItem.id === hinge.id;

            return (
              <React.Fragment key={era.id}>
                {/* Era Box */}
                <button
                  onClick={() => setSelectedItem({ type: 'era', id: era.id })}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    isEraSelected
                      ? 'bg-teal-900 text-white border-teal-900 shadow-md ring-2 ring-teal-600/30'
                      : 'bg-[#FAF8F3] hover:bg-white text-[#0F1E36] border-[#0F1E36]/10'
                  }`}
                >
                  <span className={`text-xs font-mono font-bold block ${isEraSelected ? 'text-teal-200' : 'text-teal-800'}`}>
                    0{index + 1}단계
                  </span>
                  <div className="text-sm lg:text-base font-black truncate">{era.name}</div>
                  <div className={`text-xs font-semibold truncate ${isEraSelected ? 'text-teal-100/90' : 'text-[#0F1E36]/60'}`}>
                    {era.period}
                  </div>
                </button>

                {/* Hinge Connector */}
                {hinge && (
                  <button
                    onClick={() => setSelectedItem({ type: 'hinge', id: hinge.id })}
                    className={`px-2 py-2 rounded-xl text-xs font-black border transition-all cursor-pointer whitespace-nowrap shadow-2xs text-center ${
                      isHingeSelected
                        ? 'bg-amber-600 text-white border-amber-600 ring-2 ring-amber-400/30'
                        : 'bg-white hover:bg-amber-50 text-amber-900 border-amber-300'
                    }`}
                  >
                    ⚡ {hinge.event.split(' ')[0]}
                  </button>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Selected Review Info Detail Box */}
        <div className="mt-3.5 p-4 bg-[#FAF8F3] rounded-xl border border-[#0F1E36]/10 text-xs lg:text-sm">
          {selectedItem.type === 'era' && currentEra ? (
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="font-black text-base text-teal-900">
                  {currentEra.name} ({currentEra.period})
                </span>
                <span className="text-xs font-bold text-teal-950 bg-teal-100 px-2.5 py-0.5 rounded border border-teal-200">
                  {currentEra.govRoleQualitative}
                </span>
              </div>
              <p className="text-sm lg:text-base text-[#0F1E36]/90 font-medium leading-relaxed">
                {currentEra.coreMechanism}
              </p>
            </div>
          ) : currentHinge ? (
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="font-black text-base text-amber-900">
                  {currentHinge.event} ({currentHinge.year})
                </span>
                <span className="text-xs text-amber-900 font-bold bg-amber-100 px-2 py-0.5 rounded">
                  {currentHinge.causeTitle}
                </span>
              </div>
              <p className="text-sm lg:text-base text-[#0F1E36]/90 font-medium leading-relaxed">
                {currentHinge.crisisOrShift}
              </p>
            </div>
          ) : null}
        </div>
      </div>

      {/* 4. Classroom Future Discussion Box */}
      <div className="flex-1 bg-white rounded-xl border border-[#0F1E36]/12 p-4 lg:p-5 shadow-xs flex flex-col justify-between my-1">
        <div className="flex items-center gap-2 mb-2">
          <MessageSquare className="w-5 h-5 text-teal-700" />
          <h3 className="text-base lg:text-lg font-black text-[#0F1E36]">
            수업 마무리 토론: "21세기 AI와 기후 위기 시대, 시장과 정부는 어떤 조화를 이루어야 할까?"
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-auto">
          <div className="p-4 bg-[#FAF8F3] rounded-xl border border-teal-300 shadow-2xs">
            <span className="font-black text-sm lg:text-base text-teal-950 block mb-1">
              시장(Market)의 끊임없는 혁신
            </span>
            <p className="text-xs lg:text-sm text-[#0F1E36]/85 font-medium leading-relaxed">
              친환경 기술 개발, 인공지능 신산업 창출, 창의적 기업가 정신으로 경제 전반에 활력 공급
            </p>
          </div>
          <div className="p-4 bg-[#FAF8F3] rounded-xl border border-amber-300 shadow-2xs">
            <span className="font-black text-sm lg:text-base text-amber-950 block mb-1">
              정부(Government)의 공공성 보호
            </span>
            <p className="text-xs lg:text-sm text-[#0F1E36]/85 font-medium leading-relaxed">
              탄소 배출 규제와 에너지 전환 유도, AI 일자리 변화에 대응하는 재교육과 사회안전망 구축
            </p>
          </div>
        </div>

        <div className="mt-3 p-3 bg-teal-50 rounded-xl text-center text-sm lg:text-base font-black text-teal-950 flex items-center justify-center gap-2 border border-teal-200">
          <GraduationCap className="w-5 h-5 text-teal-800" />
          <span>🎉 고등학교 통합사회2 '자본주의의 발전과 특징' 수업 완료!</span>
        </div>
      </div>
    </div>
  );
};
