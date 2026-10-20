import React, { useState } from 'react';
import { Table, Eye, EyeOff, CheckCircle2, Scale, Sparkles, BookOpen } from 'lucide-react';

interface Topic14ComparativeMatrixProps {
  activeStep: number;
}

export const Topic14ComparativeMatrix: React.FC<Topic14ComparativeMatrixProps> = ({ activeStep }) => {
  const [isQuizMode, setIsQuizMode] = useState<boolean>(false);
  const [revealedCells, setRevealedCells] = useState<Record<string, boolean>>({});

  const toggleRevealCell = (key: string) => {
    setRevealedCells((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleRevealAll = () => {
    setIsQuizMode(false);
    setRevealedCells({});
  };

  const MATRIX_DATA = [
    {
      id: 'commercial',
      name: '상업 자본주의',
      period: '16세기 ~ 18세기',
      activity: '원거리 무역 및 시세 차익 획득',
      theorists: '중상주의 (국가 개입)',
      marketRole: '특권 상인의 무역 독점',
      govRole: '절대왕정의 강력한 보호 및 간섭 (수출 장려, 수입 억제)',
      hingeEvent: '산업 혁명으로 전환',
      keyTag: '큰 정부 (국가 개입)'
    },
    {
      id: 'industrial',
      name: '산업 자본주의',
      period: '18세기 후반 ~ 19세기',
      activity: '공장제 기계 대량 생산',
      theorists: '애덤 스미스 (자유방임주의)',
      marketRole: '보이지 않는 손에 의한 자율 배분',
      govRole: '야경국가 (국방·치안 등 최소한의 역할만 수행)',
      hingeEvent: '1929년 대공황으로 전환',
      keyTag: '작은 정부 (자유 방임)'
    },
    {
      id: 'modified',
      name: '수정 자본주의',
      period: '1930년대 ~ 1970년대',
      activity: '대량 소비와 복지 사회 구축',
      theorists: '존 메이너드 케인스',
      marketRole: '사유재산 인정 + 사회적 책임',
      govRole: '적극적 정부: 공공사업, 유효수요 창출, 복지 제도 확립',
      hingeEvent: '1970년대 스태그플레이션으로 전환',
      keyTag: '큰 정부 (정부 개입)'
    },
    {
      id: 'neoliberal',
      name: '신자유주의',
      period: '1970년대 말 ~ 현재',
      activity: '글로벌 무역·IT 혁신 & 시장 경쟁',
      theorists: '하이에크, 프리드먼',
      marketRole: '민간 자율성 극대화, 노동 유연성',
      govRole: '규제 완화, 공기업 민영화, 시장 룰 감시',
      hingeEvent: '현대 자본주의 과제로 이어짐',
      keyTag: '작은 정부 (시장 복원)'
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 md:p-6 max-w-[1520px] mx-auto select-none">
      {/* 1. Header */}
      <div className="shrink-0 mb-3">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs lg:text-sm font-bold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded border border-teal-200">
            주제 14 · PART 3 종합 정리
          </span>
          <span className="text-[#0F1E36]/30">·</span>
          <span className="text-xs lg:text-sm font-semibold text-[#0F1E36]/70">
            자본주의 4단계 5대 핵심 기준 비교 매트릭스
          </span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <h2 className="text-2xl lg:text-3xl font-black text-[#0F1E36] tracking-tight">
            자본주의 전개 과정 종합 비교표
          </h2>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsQuizMode(!isQuizMode)}
              className={`px-3.5 py-1.5 text-xs lg:text-sm font-bold rounded-lg border transition-all cursor-pointer flex items-center gap-1.5 shadow-xs ${
                isQuizMode
                  ? 'bg-amber-600 text-white border-amber-600 ring-2 ring-amber-400/50'
                  : 'bg-white text-[#0F1E36] border-[#0F1E36]/15 hover:bg-[#FAF8F3]'
              }`}
            >
              {isQuizMode ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              <span>{isQuizMode ? '퀴즈 모드 ON (클릭시 정답 공개)' : '교실 블라인드 퀴즈 모드'}</span>
            </button>
            {isQuizMode && (
              <button
                onClick={handleRevealAll}
                className="px-3 py-1.5 text-xs lg:text-sm font-bold text-teal-900 bg-teal-50 border border-teal-300 rounded-lg hover:bg-teal-100 cursor-pointer"
              >
                전체 정답 보기
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 2. Comprehensive Master Matrix Table */}
      <div className="flex-1 bg-white rounded-xl border border-[#0F1E36]/12 shadow-xs overflow-hidden flex flex-col justify-between my-1">
        <div className="overflow-x-auto flex-1">
          <table className="w-full text-left border-collapse text-xs lg:text-sm">
            <thead>
              <tr className="bg-[#FAF8F3] border-b border-[#0F1E36]/12 text-[#0F1E36]">
                <th className="p-3 lg:p-4 font-black text-center w-28 lg:w-36 text-sm lg:text-base">구분</th>
                <th className="p-3 lg:p-4 font-black text-center w-36 lg:w-48 text-sm lg:text-base text-teal-950">상업 자본주의</th>
                <th className="p-3 lg:p-4 font-black text-center w-36 lg:w-48 text-sm lg:text-base text-teal-950">산업 자본주의</th>
                <th className="p-3 lg:p-4 font-black text-center w-36 lg:w-48 text-sm lg:text-base text-teal-950">수정 자본주의</th>
                <th className="p-3 lg:p-4 font-black text-center w-36 lg:w-48 text-sm lg:text-base text-teal-950">신자유주의</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#0F1E36]/10">
              {/* Row 1: 시대 */}
              <tr>
                <td className="p-3 lg:p-3.5 font-black bg-[#FAF8F3] text-center text-teal-950 text-xs lg:text-sm">시대 배경</td>
                {MATRIX_DATA.map((col) => (
                  <td key={col.id} className="p-3 lg:p-3.5 text-center text-[#0F1E36]/85 font-mono font-bold text-xs lg:text-sm">
                    {col.period}
                  </td>
                ))}
              </tr>

              {/* Row 2: 주요 활동 */}
              <tr>
                <td className="p-3 lg:p-3.5 font-black bg-[#FAF8F3] text-center text-teal-950 text-xs lg:text-sm">주요 경제활동</td>
                {MATRIX_DATA.map((col) => {
                  const cellKey = `act-${col.id}`;
                  const isHidden = isQuizMode && !revealedCells[cellKey];
                  return (
                    <td
                      key={col.id}
                      onClick={() => isQuizMode && toggleRevealCell(cellKey)}
                      className={`p-3 lg:p-3.5 text-center cursor-pointer transition-colors ${
                        isHidden ? 'bg-amber-50 text-amber-900 font-bold' : 'text-[#0F1E36] font-semibold'
                      }`}
                    >
                      {isHidden ? '❓ 클릭하여 확인' : col.activity}
                    </td>
                  );
                })}
              </tr>

              {/* Row 3: 대표 사상 */}
              <tr>
                <td className="p-3 lg:p-3.5 font-black bg-[#FAF8F3] text-center text-teal-950 text-xs lg:text-sm">대표 사상·학자</td>
                {MATRIX_DATA.map((col) => {
                  const cellKey = `theo-${col.id}`;
                  const isHidden = isQuizMode && !revealedCells[cellKey];
                  return (
                    <td
                      key={col.id}
                      onClick={() => isQuizMode && toggleRevealCell(cellKey)}
                      className={`p-3 lg:p-3.5 text-center cursor-pointer transition-colors ${
                        isHidden ? 'bg-amber-50 text-amber-900 font-bold' : 'font-black text-teal-900 text-sm lg:text-base'
                      }`}
                    >
                      {isHidden ? '❓ 클릭하여 확인' : col.theorists}
                    </td>
                  );
                })}
              </tr>

              {/* Row 4: 정부의 역할 */}
              <tr>
                <td className="p-3 lg:p-3.5 font-black bg-[#FAF8F3] text-center text-teal-950 text-xs lg:text-sm">정부의 역할</td>
                {MATRIX_DATA.map((col) => {
                  const cellKey = `gov-${col.id}`;
                  const isHidden = isQuizMode && !revealedCells[cellKey];
                  return (
                    <td
                      key={col.id}
                      onClick={() => isQuizMode && toggleRevealCell(cellKey)}
                      className={`p-3 lg:p-3.5 text-center cursor-pointer transition-colors ${
                        isHidden ? 'bg-amber-50 text-amber-900 font-bold' : 'text-[#0F1E36]'
                      }`}
                    >
                      {isHidden ? '❓ 클릭하여 확인' : (
                        <div>
                          <span className={`inline-block px-2.5 py-0.5 rounded text-xs font-black mb-1 ${
                            col.keyTag.includes('큰 정부') ? 'bg-amber-100 text-amber-900' : 'bg-teal-100 text-teal-900'
                          }`}>
                            {col.keyTag}
                          </span>
                          <p className="text-xs lg:text-sm leading-tight text-[#0F1E36]/80 font-medium">{col.govRole}</p>
                        </div>
                      )}
                    </td>
                  );
                })}
              </tr>

              {/* Row 5: 전환 계기 */}
              <tr>
                <td className="p-3 lg:p-3.5 font-black bg-[#FAF8F3] text-center text-teal-950 text-xs lg:text-sm">전환 계기</td>
                {MATRIX_DATA.map((col) => {
                  const cellKey = `ev-${col.id}`;
                  const isHidden = isQuizMode && !revealedCells[cellKey];
                  return (
                    <td
                      key={col.id}
                      onClick={() => isQuizMode && toggleRevealCell(cellKey)}
                      className={`p-3 lg:p-3.5 text-center cursor-pointer transition-colors ${
                        isHidden ? 'bg-amber-50 text-amber-900 font-bold' : 'text-xs lg:text-sm font-black text-amber-900'
                      }`}
                    >
                      {isHidden ? '❓ 클릭하여 확인' : col.hingeEvent}
                    </td>
                  );
                })}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pendulum Motion Visual Strip - Big & Clear */}
        <div className="p-3.5 bg-[#FAF8F3] border-t border-[#0F1E36]/12 flex items-center justify-around text-xs lg:text-sm font-black">
          <span className="text-amber-900 bg-amber-100 px-3 py-1 rounded-md">1. 큰 정부 (중상주의)</span>
          <span className="text-slate-400 font-bold">──▶</span>
          <span className="text-teal-900 bg-teal-100 px-3 py-1 rounded-md">2. 작은 정부 (자유방임)</span>
          <span className="text-slate-400 font-bold">──▶</span>
          <span className="text-amber-900 bg-amber-100 px-3 py-1 rounded-md">3. 큰 정부 (뉴딜/복지)</span>
          <span className="text-slate-400 font-bold">──▶</span>
          <span className="text-teal-900 bg-teal-100 px-3 py-1 rounded-md">4. 작은 정부 (신자유주의)</span>
        </div>
      </div>

      {/* 3. Bottom Footer */}
      <div className="shrink-0 text-xs lg:text-sm text-[#0F1E36]/60 flex items-center justify-between pt-1 border-t border-[#0F1E36]/10">
        <span>* 테이블 셀을 클릭하거나 퀴즈 모드를 활용하여 학생들과 질문식 수업을 진행하세요.</span>
        <span className="font-bold text-teal-800">→ 다음 단계: 주제 15 '수업 총괄 마무리'</span>
      </div>
    </div>
  );
};
