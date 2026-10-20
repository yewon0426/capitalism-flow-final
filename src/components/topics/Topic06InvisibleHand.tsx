import React, { useState } from 'react';
import { Sparkles, Scale, AlertTriangle, CheckCircle, ArrowRight, ShieldAlert, BookOpen } from 'lucide-react';

interface Topic06InvisibleHandProps {
  activeStep: number;
}

export const Topic06InvisibleHand: React.FC<Topic06InvisibleHandProps> = ({ activeStep }) => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-4 md:p-6 max-w-[1520px] mx-auto select-none">
      {/* 1. Header */}
      <div className="shrink-0 mb-3">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs lg:text-sm font-bold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded border border-teal-200">
            주제 06 · 고전학파 경제학의 기초
          </span>
          <span className="text-[#0F1E36]/30">·</span>
          <span className="text-xs lg:text-sm font-semibold text-[#0F1E36]/70">
            1776년 애덤 스미스 『국부론』
          </span>
        </div>
        <h2 className="text-2xl lg:text-3xl font-black text-[#0F1E36] tracking-tight">
          애덤 스미스와 '보이지 않는 손' (가격 기구)
        </h2>
      </div>

      {/* 2. Classic Famous Quote & 3-Step Flow */}
      <div className="bg-white rounded-xl border border-[#0F1E36]/12 p-4 lg:p-6 shadow-xs mb-3">
        <div className="p-4 bg-[#FAF8F3] rounded-xl border border-amber-200/80 mb-4 shadow-2xs">
          <p className="text-base lg:text-xl font-serif italic text-[#0F1E36] leading-relaxed">
            "우리가 저녁 식사를 기대할 수 있는 것은 빵집 주인의 <span className="text-teal-900 font-bold not-italic">자비심 때문이 아니라</span>, 그들 자신의 <span className="text-teal-900 font-bold not-italic underline decoration-amber-400 underline-offset-4">사적 이익 추구 때문</span>이다."
          </p>
          <span className="text-xs lg:text-sm font-sans font-bold text-amber-900 block mt-2">
            — 애덤 스미스, 『국부론』
          </span>
        </div>

        {/* 3-Step Invisible Hand Flow - Large and clear */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-4">
          <div className="p-4 bg-[#FAF8F3] rounded-xl border border-[#0F1E36]/10 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-teal-800 block mb-1">단계 01</span>
              <h4 className="text-lg lg:text-xl font-black text-[#0F1E36] mb-2">개별 사익 추구</h4>
              <p className="text-sm lg:text-base font-semibold text-[#0F1E36]/80 leading-snug">
                생산자는 이윤을 원하고, 소비자는 맛있고 저렴한 빵을 원함
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-[#0F1E36]/6 text-xs font-bold text-teal-800">
              경제활동의 기본 동기
            </div>
          </div>

          <div className="p-4 bg-[#FAF8F3] rounded-xl border border-[#0F1E36]/10 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-teal-800 block mb-1">단계 02</span>
              <h4 className="text-lg lg:text-xl font-black text-[#0F1E36] mb-2">자유 시장 경쟁</h4>
              <p className="text-sm lg:text-base font-semibold text-[#0F1E36]/80 leading-snug">
                다른 생산자들과 경쟁하므로, 비싸거나 질 나쁜 빵을 팔면 시장에서 퇴출됨
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-[#0F1E36]/6 text-xs font-bold text-teal-800">
              품질 향상과 가격 인하 유도
            </div>
          </div>

          <div className="p-4 bg-teal-50 rounded-xl border border-teal-300 shadow-2xs flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-teal-900 block mb-1">단계 03</span>
              <h4 className="text-lg lg:text-xl font-black text-teal-950 mb-2">보이지 않는 손</h4>
              <p className="text-sm lg:text-base font-black text-teal-900 leading-snug">
                누가 명령하지 않아도 적정 가격에 빵이 공급되어 사회 전체의 부 증진!
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-teal-200 text-xs font-black text-teal-950">
              ★ 가격 기구에 의한 자율 조정
            </div>
          </div>
        </div>
      </div>

      {/* 3. Essential Limitation: 보이지 않는 손의 전제와 한계 */}
      <div className="flex-1 bg-white rounded-xl border border-amber-300 p-4 lg:p-6 shadow-xs flex flex-col justify-between my-1">
        <div className="flex items-center gap-2 pb-2.5 border-b border-amber-200">
          <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0" />
          <h3 className="text-base lg:text-lg font-black text-amber-950">
            교과서 필수 탐구: "보이지 않는 손은 항상 완벽할까?"
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-4 my-auto">
          <div className="p-4 bg-[#FFFDF9] rounded-xl border border-amber-200 shadow-2xs">
            <span className="font-black text-base lg:text-lg text-amber-900 block mb-1.5">
              ① 독점과 담합 발생
            </span>
            <p className="text-sm lg:text-base font-semibold text-[#0F1E36]/80 leading-snug">
              거대 기업이 시장을 독점하면 가격을 마음대로 올려 소비자가 큰 피해를 입음
            </p>
          </div>

          <div className="p-4 bg-[#FFFDF9] rounded-xl border border-amber-200 shadow-2xs">
            <span className="font-black text-base lg:text-lg text-amber-900 block mb-1.5">
              ② 환경오염과 외부효과
            </span>
            <p className="text-sm lg:text-base font-semibold text-[#0F1E36]/80 leading-snug">
              공장에서 매연을 뿜으며 이윤을 추구할 때 시장 가격에 반영되지 않아 공해가 방치됨
            </p>
          </div>

          <div className="p-4 bg-[#FFFDF9] rounded-xl border border-amber-200 shadow-2xs">
            <span className="font-black text-base lg:text-lg text-amber-900 block mb-1.5">
              ③ 공공재 공급 부족
            </span>
            <p className="text-sm lg:text-base font-semibold text-[#0F1E36]/80 leading-snug">
              국방, 치안, 도로처럼 이윤이 안 나지만 꼭 필요한 재화는 민간 시장이 공급하기 어려움
            </p>
          </div>
        </div>

        <div className="p-3 bg-amber-50 rounded-xl text-xs lg:text-sm text-amber-950 flex items-center justify-between font-medium">
          <span>
            💡 <strong>스미스의 전제 조건:</strong> 애덤 스미스 역시 <strong>공정한 법질서와 규칙</strong>이 지켜질 때만 보이지 않는 손이 작동한다고 강조했습니다.
          </span>
          <span className="font-bold text-amber-900 shrink-0 ml-3">→ 다음: 산업 자본주의의 한계</span>
        </div>
      </div>

      {/* 4. Bottom Footer */}
      <div className="shrink-0 text-xs lg:text-sm text-[#0F1E36]/60 flex items-center justify-between pt-1 border-t border-[#0F1E36]/10">
        <span>* 우측 상단 [교사용 수업 노트]를 누르면 상세 발문 대본을 볼 수 있습니다.</span>
        <span className="font-bold text-teal-800">→ 다음 단계: 주제 07 '산업 자본주의의 눈부신 성과와 가혹한 한계'</span>
      </div>
    </div>
  );
};
