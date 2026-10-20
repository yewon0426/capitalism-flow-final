import React, { useState } from 'react';
import { RefreshCw, Play, ArrowRight, AlertTriangle, CheckCircle2, ShoppingCart, DollarSign, Factory, Users, TrendingDown, BookOpen } from 'lucide-react';

interface Topic09EffectiveDemandCycleProps {
  activeStep: number;
}

const CYCLE_NODES = [
  {
    step: 1,
    id: 'consumption_drop',
    title: '1. 가계 소비 위축',
    subtitle: '불안감으로 지갑 닫음',
    icon: ShoppingCart,
    color: 'border-red-400 bg-red-50 text-red-950',
    description: '일자리가 불안하고 소득 감소를 걱정한 가계가 소비를 대폭 줄입니다.'
  },
  {
    step: 2,
    id: 'sales_drop',
    title: '2. 기업 매출 감소 & 재고 누적',
    subtitle: '물건이 팔리지 않고 쌓임',
    icon: TrendingDown,
    color: 'border-amber-400 bg-amber-50 text-amber-950',
    description: '물건이 팔리지 않아 공장 창고에 재고가 쌓이고 판매 수입이 급감합니다.'
  },
  {
    step: 3,
    id: 'production_cut',
    title: '3. 공장 감산 & 노동자 해고',
    subtitle: '생산 중단과 실업자 급증',
    icon: Factory,
    color: 'border-orange-400 bg-orange-50 text-orange-950',
    description: '기업은 손실을 막기 위해 생산을 줄이고 노동자를 대량 해고합니다.'
  },
  {
    step: 4,
    id: 'income_drop',
    title: '4. 가계 소득 급감',
    subtitle: '실업으로 구매력 상실',
    icon: DollarSign,
    color: 'border-rose-400 bg-rose-50 text-rose-950',
    description: '해고되거나 임금이 삭감된 가계의 실질 소득이 바닥으로 추락합니다.'
  },
  {
    step: 5,
    id: 'feedback_loop',
    title: '5. 유효수요 추가 위축 (악순환)',
    subtitle: '다시 1단계로 회귀하는 늪',
    icon: RefreshCw,
    color: 'border-purple-400 bg-purple-50 text-purple-950',
    description: '가계가 더욱 소비를 줄이면서 불황이 끝없이 깊어지는 악순환에 빠집니다.'
  }
];

export const Topic09EffectiveDemandCycle: React.FC<Topic09EffectiveDemandCycleProps> = ({ activeStep }) => {
  const [currentCycleIndex, setCurrentCycleIndex] = useState<number>(0);

  const handleNextInCycle = () => {
    setCurrentCycleIndex((prev) => (prev + 1) % CYCLE_NODES.length);
  };

  const handleResetCycle = () => {
    setCurrentCycleIndex(0);
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 md:p-6 max-w-[1520px] mx-auto select-none">
      {/* 1. Header */}
      <div className="shrink-0 mb-3">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs lg:text-sm font-bold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded border border-teal-200">
            주제 09 · 케인스 경제학 핵심 메커니즘
          </span>
          <span className="text-[#0F1E36]/30">·</span>
          <span className="text-xs lg:text-sm font-semibold text-[#0F1E36]/70">
            대공황을 설명한 유효수요 이론
          </span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <h2 className="text-2xl lg:text-3xl font-black text-[#0F1E36] tracking-tight">
            유효수요 부족의 5단계 악순환 고리
          </h2>
          <div className="flex items-center gap-2">
            <button
              onClick={handleNextInCycle}
              className="px-3.5 py-1.5 bg-teal-900 text-white rounded-lg text-xs lg:text-sm font-bold hover:bg-teal-950 transition-colors cursor-pointer flex items-center gap-1.5 shadow-xs"
            >
              <span>악순환 단계 회전</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={handleResetCycle}
              className="px-3 py-1.5 bg-white border border-[#0F1E36]/15 text-[#0F1E36] rounded-lg text-xs lg:text-sm font-bold hover:bg-[#F2EFE8] cursor-pointer"
            >
              1단계로 리셋
            </button>
          </div>
        </div>
      </div>

      {/* 2. Concept Anchor: 단순 욕구 vs 유효수요 (Clear Comparison) */}
      <div className="bg-white rounded-xl border border-[#0F1E36]/12 p-4 lg:p-5 shadow-xs grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
        <div className="p-4 bg-[#FAF8F3] rounded-xl border border-[#0F1E36]/10 flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center font-black text-sm shrink-0">
            ✕
          </div>
          <div>
            <span className="text-xs lg:text-sm font-bold text-slate-600 block mb-0.5">단순한 잠재적 욕구</span>
            <p className="text-sm lg:text-base text-[#0F1E36]/90 font-medium leading-snug">
              "배고픈 실업자가 빵을 먹고 싶어 하지만, 주머니에 돈이 없는 상태"
              <span className="block text-xs lg:text-sm text-red-700 font-bold mt-1">
                → 구매 능력이 없어 시장의 실제 거래로 이어지지 못함
              </span>
            </p>
          </div>
        </div>

        <div className="p-4 bg-teal-50/80 rounded-xl border border-teal-300 flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-teal-800 text-white flex items-center justify-center font-black text-sm shrink-0">
            ✓
          </div>
          <div>
            <span className="text-xs lg:text-sm font-bold text-teal-900 block mb-0.5">케인스의 유효수요</span>
            <p className="text-sm lg:text-base text-teal-950 font-bold leading-snug">
              <strong>실제 지불 능력(돈·구매력)</strong> + <strong>구매 의사</strong>가 결합된 실질적 수요
              <span className="block text-xs lg:text-sm text-teal-800 font-semibold mt-1">
                → 생산과 고용의 크기를 실질적으로 결정하는 핵심 열쇠
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* 3. The 5-Stage Vicious Cycle Interactive Flow */}
      <div className="flex-1 bg-white rounded-xl border border-[#0F1E36]/12 p-4 lg:p-5 shadow-xs flex flex-col justify-between my-1">
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5 my-auto">
          {CYCLE_NODES.map((node, idx) => {
            const isHighlight = currentCycleIndex === idx;
            const Icon = node.icon;
            return (
              <button
                key={node.id}
                onClick={() => setCurrentCycleIndex(idx)}
                className={`p-3.5 lg:p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isHighlight
                    ? `${node.color} ring-2 ring-teal-700 shadow-md scale-102`
                    : 'bg-[#FAF8F3] border-[#0F1E36]/10 hover:border-[#0F1E36]/30 text-[#0F1E36]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="w-6 h-6 rounded-md bg-white border border-black/10 flex items-center justify-center font-mono font-bold text-xs">
                      {idx + 1}
                    </span>
                    <Icon className="w-5 h-5 text-slate-700" />
                  </div>
                  <h4 className="text-sm lg:text-base font-black leading-snug mb-1">{node.title}</h4>
                </div>
                <p className="text-xs lg:text-sm text-[#0F1E36]/75 mt-1 leading-snug">
                  {node.subtitle}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Detail & Keynes's Solution */}
        <div className="mt-3 p-4 bg-[#FAF8F3] rounded-xl border border-[#0F1E36]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs lg:text-sm font-bold text-teal-900">
                현재 선택: {CYCLE_NODES[currentCycleIndex].title}
              </span>
            </div>
            <p className="text-sm lg:text-base text-[#0F1E36] font-medium leading-relaxed">
              {CYCLE_NODES[currentCycleIndex].description}
            </p>
          </div>
          <div className="shrink-0 bg-teal-100/80 px-4 py-2 rounded-xl border border-teal-300 text-teal-950 font-black text-xs lg:text-sm">
            케인스의 해법: 정부가 재정을 풀어 유효수요 주입!
          </div>
        </div>
      </div>

      {/* 4. Pedagogical Takeaway */}
      <div className="shrink-0 bg-teal-950 text-white rounded-xl p-3.5 lg:p-4 flex items-center justify-between gap-4 shadow-xs mt-2">
        <div>
          <span className="text-xs font-bold text-teal-300 block mb-0.5">
            수업 핵심 포인트 · 절약의 역설
          </span>
          <p className="text-xs lg:text-sm text-white/90 font-medium leading-relaxed">
            "개인에게는 미래를 대비한 저축이 합리적일 수 있지만, 사회 구성원 모두가 소비를 줄이면 유효수요가 붕괴하여 모두가 실업자가 된다."
          </p>
        </div>
        <div className="hidden md:block shrink-0 px-3.5 py-1.5 bg-white/10 rounded-lg border border-white/20 text-xs lg:text-sm font-mono font-bold text-teal-200">
          총수요 = 민간 소비 + 기업 투자 + 정부 지출
        </div>
      </div>
    </div>
  );
};
