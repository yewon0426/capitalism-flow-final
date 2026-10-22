import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Eye, 
  EyeOff, 
  HelpCircle, 
  Layers, 
  RotateCcw, 
  Scale, 
  Sparkles, 
  Table 
} from 'lucide-react';

interface Topic18EconomicSystemsComparisonProps {
  activeStep: number;
}

export const Topic18EconomicSystemsComparison: React.FC<Topic18EconomicSystemsComparisonProps> = ({ activeStep }) => {
  // Whether teacher is in Quiz / Blind Mode
  const [isQuizMode, setIsQuizMode] = useState<boolean>(false);
  // Manual reveal toggles per criterion row
  const [revealedRows, setRevealedRows] = useState<Record<number, boolean>>({});

  const toggleRow = (id: number) => {
    setRevealedRows((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleRevealAll = () => {
    setIsQuizMode(false);
    const allRevealed: Record<number, boolean> = {};
    CRITERIA_DATA.forEach((c) => {
      allRevealed[c.id] = true;
    });
    setRevealedRows(allRevealed);
  };

  const handleReset = () => {
    setIsQuizMode(true);
    setRevealedRows({});
  };

  const CRITERIA_DATA = [
    {
      id: 1,
      stepGroup: 1,
      name: '① 경제 문제 주요 해결 주체',
      subtext: '의사결정의 주도권',
      market: '민간 (개별 가계 및 기업)',
      marketHighlight: '개별 경제 주체',
      command: '국가 (중앙 정부 및 국가 계획 기구)',
      commandHighlight: '중앙 정부',
      mixed: '민간(시장) + 정부(국가)',
      mixedHighlight: '민간과 정부의 역할 분담'
    },
    {
      id: 2,
      stepGroup: 1,
      name: '② 자원 배분 방식',
      subtext: '신호와 조정 기구',
      market: '시장의 가격 기구 (\'보이지 않는 손\')',
      marketHighlight: '자율적 가격 신호',
      command: '중앙 정부의 행정 명령, 생산 계획, 강제 할당',
      commandHighlight: '계획과 명령',
      mixed: '시장 가격 기구 기본 + 정부의 정책적 조정·보완',
      mixedHighlight: '가격 기구 + 정책 개입'
    },
    {
      id: 3,
      stepGroup: 2,
      name: '③ 생산수단의 소유 방식',
      subtext: '토지·공장·기계의 법적 소유',
      market: '사적 소유권 전면 보장 (개인·법인 소유)',
      marketHighlight: '사적 소유 원칙',
      command: '국가 및 사회적 공공 소유 (사적 소유 부정·제한)',
      commandHighlight: '국유화·공유제',
      mixed: '사적 소유 보장 원칙 + 주요 기간산업·공공재 국공유',
      mixedHighlight: '사적 중심 + 공공재 국공유'
    },
    {
      id: 4,
      stepGroup: 2,
      name: '④ 경제활동의 자유',
      subtext: '직업·영업·소비의 선택권',
      market: '직업 선택, 계약, 기업 창업의 자유 전면 보장',
      marketHighlight: '자유로운 경제활동',
      command: '국가 계획에 따라 직업 및 생산 활동 강력 통제',
      commandHighlight: '국가 통제 및 배정',
      mixed: '사적 자유 폭넓게 보장 + 공공복리를 위한 법적 규제',
      mixedHighlight: '자유 보장 + 법적 규제'
    },
    {
      id: 5,
      stepGroup: 3,
      name: '⑤ 중시하는 핵심 가치',
      subtext: '체제의 기본 지향점',
      market: '개인의 자유, 효율성, 창의성, 경쟁 촉진',
      marketHighlight: '효율성과 자유',
      command: '형평성, 사회적 평등, 공공 목표 달성, 기본 생계',
      commandHighlight: '형평성과 평등',
      mixed: '효율성과 형평성의 조화, 지속 가능한 발전',
      mixedHighlight: '효율성·형평성 조화'
    },
    {
      id: 6,
      stepGroup: 3,
      name: '⑥ 주요 장점과 고유 한계',
      subtext: '성과와 부작용',
      market: '장점: 자원의 효율적 배분, 빠른 혁신\n한계: 빈부격차, 독과점, 환경오염(시장 실패)',
      marketHighlight: '효율적이나 시장 실패 위험',
      command: '장점: 사회적 필요에 따른 자원 집중 동원\n한계: 생산 의욕 저하(비효율), 관료제 경직성',
      commandHighlight: '평등 추구하나 비효율 위험',
      mixed: '장점: 시장 활력과 사회 안전망의 균형\n한계: 정부 개입의 적정선 논란 (시장 실패 vs 정부 실패)',
      mixedHighlight: '조화롭지만 균형 유지의 과제'
    },
    {
      id: 7,
      stepGroup: 4,
      name: '⑦ 정부의 역할',
      subtext: '국가의 개입 수준',
      market: '규칙 감시자 및 질서 유지 (야경국가, 최소 개입)',
      marketHighlight: '시장 룰 감시자',
      command: '모든 경제활동의 직접 기획자, 관리자, 배급자',
      commandHighlight: '전면적 지휘자',
      mixed: '시장 실패 교정, 공공재 공급, 복지 안전망 제공자',
      mixedHighlight: '적극적 보완·조정자'
    }
  ];

  const isRowVisible = (criterion: typeof CRITERIA_DATA[0]) => {
    if (!isQuizMode) return true;
    if (revealedRows[criterion.id]) return true;
    return activeStep >= criterion.stepGroup;
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-3 md:p-5 max-w-[1540px] mx-auto select-none">
      {/* 1. Classroom Top Header & Key Standard Banner */}
      <div className="shrink-0 mb-3">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs lg:text-sm font-bold text-teal-900 bg-teal-100 px-2.5 py-0.5 rounded border border-teal-200">
            주제 18 · 종합 비교 분석
          </span>
          <span className="text-[#0F1E36]/30">·</span>
          <span className="text-xs lg:text-sm font-bold text-[#0F1E36]/80">
            PART 3. 경제 체제의 유형별 특징
          </span>
          <span className="text-[#0F1E36]/30">·</span>
          <span className="text-xs lg:text-sm font-semibold text-teal-800 bg-white px-2 py-0.5 rounded border border-teal-200/80">
            7대 핵심 기준 종합 비교표
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2">
          <div>
            <h2 className="text-2xl lg:text-3xl font-black text-[#0F1E36] tracking-tight flex items-center gap-2">
              <span>경제 체제의 유형별 특징 종합 비교</span>
              <span className="text-sm lg:text-base font-normal text-[#0F1E36]/60">
                — 시장 경제 vs 계획 경제 vs 혼합 경제
              </span>
            </h2>
          </div>

          {/* Interactive Controller buttons */}
          <div className="flex items-center gap-2 self-start lg:self-auto">
            <button
              onClick={() => setIsQuizMode(!isQuizMode)}
              className={`px-3 py-1.5 rounded-lg border text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs ${
                isQuizMode
                  ? 'bg-amber-100 border-amber-300 text-amber-900'
                  : 'bg-white border-[#0F1E36]/15 text-[#0F1E36] hover:bg-[#FAF8F3]'
              }`}
            >
              {isQuizMode ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              <span>{isQuizMode ? '수업용 가림막 모드 ON' : '교사용 전체 공개 모드'}</span>
            </button>

            <button
              onClick={handleRevealAll}
              className="px-3 py-1.5 bg-teal-800 hover:bg-teal-900 text-white rounded-lg text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer shadow-2xs"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>전체 표 한 번에 보기</span>
            </button>

            {isQuizMode && (
              <button
                onClick={handleReset}
                className="p-1.5 bg-white border border-[#0F1E36]/15 text-[#0F1E36] rounded-lg hover:bg-[#FAF8F3] transition-colors cursor-pointer shadow-2xs"
                title="가림막 초기화"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Essential Core Concept Guidance Banner */}
        <div className="mt-2 p-2.5 lg:p-3 bg-white rounded-xl border border-[#0F1E36]/12 shadow-2xs flex items-center justify-between gap-3 text-xs lg:text-sm text-[#0F1E36]/80 font-medium">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 bg-teal-900 text-white font-black text-xs rounded">
              핵심 지도 포인트
            </span>
            <span>
              순수 시장 경제나 순수 계획 경제는 <strong>이론적 이상형(Ideal Type)</strong>이며, 현대 국가들은 대부분 시장의 역동성과 정부의 조정을 결합한 <strong>혼합 경제</strong>를 운영합니다.
            </span>
          </div>
          <span className="text-[11px] font-bold text-teal-800 hidden md:inline">
            ※ 행을 클릭하면 해당 기준의 가림막을 열거나 닫을 수 있습니다.
          </span>
        </div>
      </div>

      {/* 2. Central 7-Criteria Matrix Table (16:9 Optimized, No Scroll, Crisp Text) */}
      <div className="flex-1 bg-white rounded-xl border-2 border-[#0F1E36]/15 shadow-sm overflow-hidden flex flex-col justify-between mb-3 min-h-0">
        
        {/* Table Head */}
        <div className="grid grid-cols-12 bg-[#0F1E36] text-white text-xs lg:text-sm font-extrabold border-b border-[#0F1E36]/20 py-2.5 px-3">
          <div className="col-span-3 flex items-center gap-1.5">
            <Table className="w-4 h-4 text-teal-300" />
            <span>비교 기준 (7대 쟁점)</span>
          </div>
          <div className="col-span-3 text-center border-l border-white/15 px-2">
            <span className="text-blue-300">시장 경제</span>
            <span className="text-[11px] font-normal text-white/70 block">자율적 가격 기구 중심</span>
          </div>
          <div className="col-span-3 text-center border-l border-white/15 px-2">
            <span className="text-red-300">계획 경제</span>
            <span className="text-[11px] font-normal text-white/70 block">중앙 정부 명령·계획 중심</span>
          </div>
          <div className="col-span-3 text-center border-l border-white/15 px-2">
            <span className="text-emerald-300">혼합 경제</span>
            <span className="text-[11px] font-normal text-white/70 block">시장 기본 + 정부 보완</span>
          </div>
        </div>

        {/* Table Body: 7 criteria rows */}
        <div className="flex-1 flex flex-col justify-between divide-y divide-[#0F1E36]/10 text-xs lg:text-[13px]">
          {CRITERIA_DATA.map((crit) => {
            const visible = isRowVisible(crit);
            const isHighlightedByStep = activeStep === crit.stepGroup;

            return (
              <div
                key={crit.id}
                onClick={() => toggleRow(crit.id)}
                className={`grid grid-cols-12 items-center py-2 px-3 transition-colors cursor-pointer ${
                  isHighlightedByStep
                    ? 'bg-teal-50/80 ring-1 ring-inset ring-teal-500/40'
                    : 'hover:bg-[#FAF8F3]'
                }`}
              >
                {/* Criterion Name */}
                <div className="col-span-3 pr-2">
                  <div className="font-extrabold text-[#0F1E36] flex items-center gap-1.5">
                    <span>{crit.name}</span>
                  </div>
                  <span className="text-[11px] text-[#0F1E36]/50 block">
                    {crit.subtext}
                  </span>
                </div>

                {/* Market Economy Cell */}
                <div className="col-span-3 px-2 border-l border-[#0F1E36]/10 text-center">
                  {visible ? (
                    <div className="animate-in fade-in duration-150">
                      <span className="font-bold text-blue-900 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 inline-block text-[11px] lg:text-xs">
                        {crit.marketHighlight}
                      </span>
                      <p className="text-[#0F1E36]/80 text-[11px] lg:text-xs mt-0.5 whitespace-pre-line leading-tight">
                        {crit.market}
                      </p>
                    </div>
                  ) : (
                    <div className="py-2 bg-blue-50/50 rounded border border-dashed border-blue-300 text-blue-700 text-xs font-bold">
                      클릭하여 공개
                    </div>
                  )}
                </div>

                {/* Command Economy Cell */}
                <div className="col-span-3 px-2 border-l border-[#0F1E36]/10 text-center">
                  {visible ? (
                    <div className="animate-in fade-in duration-150">
                      <span className="font-bold text-red-900 bg-red-50 px-2 py-0.5 rounded border border-red-200 inline-block text-[11px] lg:text-xs">
                        {crit.commandHighlight}
                      </span>
                      <p className="text-[#0F1E36]/80 text-[11px] lg:text-xs mt-0.5 whitespace-pre-line leading-tight">
                        {crit.command}
                      </p>
                    </div>
                  ) : (
                    <div className="py-2 bg-red-50/50 rounded border border-dashed border-red-300 text-red-700 text-xs font-bold">
                      클릭하여 공개
                    </div>
                  )}
                </div>

                {/* Mixed Economy Cell */}
                <div className="col-span-3 px-2 border-l border-[#0F1E36]/10 text-center">
                  {visible ? (
                    <div className="animate-in fade-in duration-150">
                      <span className="font-bold text-emerald-900 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 inline-block text-[11px] lg:text-xs">
                        {crit.mixedHighlight}
                      </span>
                      <p className="text-[#0F1E36]/80 text-[11px] lg:text-xs mt-0.5 whitespace-pre-line leading-tight">
                        {crit.mixed}
                      </p>
                    </div>
                  ) : (
                    <div className="py-2 bg-emerald-50/50 rounded border border-dashed border-emerald-300 text-emerald-700 text-xs font-bold">
                      클릭하여 공개
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Table Footer */}
        <div className="bg-[#FAF8F3] border-t border-[#0F1E36]/10 p-2.5 px-4 flex items-center justify-between text-xs text-[#0F1E36]/70">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-teal-700" />
            <span className="font-semibold">
              통합사회2 결론: "현대 사회는 효율성과 형평성을 동시에 추구하기 위해 <strong>혼합 경제 체제</strong>를 발전시켜 왔다."
            </span>
          </div>
          <span className="font-bold text-teal-800">
            PART 4 종합 정리 및 복습으로 이어짐 ➔
          </span>
        </div>

      </div>

      {/* 3. Bottom Teacher Dialogue Indicator */}
      <div className="shrink-0 p-2.5 lg:p-3 bg-white rounded-xl border border-[#0F1E36]/10 text-xs lg:text-sm text-[#0F1E36]/80 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 bg-teal-100 text-teal-900 font-extrabold text-xs rounded border border-teal-200">
            수업 마무리 발문
          </span>
          <span className="font-medium">
            "우리나라(대한민국)는 혼합 경제 체제입니다. 현재 우리 사회에서 시장의 자율성을 더 살려야 할 부분과 정부의 개입을 늘려야 할 부분은 어디일까요?"
          </span>
        </div>
        <span className="text-xs text-teal-800 font-bold hidden md:inline">
          [N] 키로 교사용 질문 리스트 확인
        </span>
      </div>
    </div>
  );
};
