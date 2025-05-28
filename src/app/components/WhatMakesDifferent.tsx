import React from "react";

const leftItems = [
  {
    title: "Modular agent, composable logic",
    desc: "Z4R0 agents follow a plug-in structure. Each strategy, rule, or input source can be installed, replaced, or upgraded without touching the core system.",
  },
  {
    title: "One agent, many chains",
    desc: "Z4R0 agents execute seamlessly across Ethereum and L2s. With built-in LayerZero and IBC compatibility, multi-chain execution is not a hack — it's native.",
  },
  {
    title: "Real-time sensing, layered signals",
    desc: "Each agent processes a mix of signals: on-chain data, mempool info, TVL flows, DEX liquidity, token-specific sentiment, and even Discord/Twitter alpha — all in real-time.",
  },
];

const rightItems = [
  {
    title: "Strategy execution with guardrails",
    desc: "Agents follow smart contract-defined policies: gas limits, stop-loss, slippage caps, execution frequency, and risk budgets. Every move is predictable and traceable.",
  },
  {
    title: "Solo or swarm? Both.",
    desc: "When a task is too large, agents form swarms. Each one takes a subtask (like monitoring ",
  },
  {
    title: "Governed by the ones who use it",
    desc: "From strategy priorities to new protocol integrations, $ZRX holders decide what agents should care about. Governance isn't a checkbox — it's a live control panel.",
  },
];

export default function WhatMakesDifferent() {
  return (
    <section
      className="w-[70vw] mx-auto py-32 flex flex-col gap-16 relative overflow-visible"
      style={{ background: '#010613', marginTop: '-10px', zIndex: 30 }}
    >
      <style>{`
        .dash-animate {
          stroke-dasharray: 8 6;
          stroke-dashoffset: 0;
          animation: dashmove 1.2s linear infinite;
        }
        @keyframes dashmove {
          to {
            stroke-dashoffset: -28;
          }
        }
        .dash-animate-left {
          stroke-dasharray: 8 6;
          stroke-dashoffset: 0;
          animation: dashmoveleft 1.2s linear infinite;
        }
        @keyframes dashmoveleft {
          to {
            stroke-dashoffset: 28;
          }
        }
        .soft-pulse {
          animation: softPulse 3s ease-in-out infinite;
        }
        @keyframes softPulse {
          0%, 100% { opacity: 0.85; }
          50% { opacity: 0.45; }
        }
      `}</style>
      {/* 中间大背景图 */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" style={{width:'600px',height:'600px'}}>
        <img src="/images/image-center.png" alt="center visual" className="w-full h-full object-contain soft-pulse" />
      </div>
      {/* 三行对齐布局 */}
      {[0, 1, 2].map((idx) => (
        <div key={idx} className="flex flex-row items-center gap-16 min-h-[110px] relative z-10">
          {/* 左侧item+dot-line-dot */}
          <div className="flex-1 flex items-center relative">
            <div className="flex-1">
              <div className="text-white text-xl font-medium mb-2 font-[var(--font-aldrich)]">{leftItems[idx].title}</div>
              <div className="text-white/80 text-base leading-relaxed font-[var(--font-geist-sans)]">{leftItems[idx].desc}</div>
            </div>
            <div className="flex items-center ml-4">
              <div className="w-3 h-3 bg-white rounded-full" />
              <svg width="80" height="6" className="mx-0" style={{display:'block'}}>
                <line x1="0" y1="3" x2="80" y2="3" stroke="#fff" strokeWidth="3" className="dash-animate" />
              </svg>
              <div className="w-3 h-3 bg-white rounded-full" />
            </div>
          </div>
          {/* 中间heading（只在第2行显示） */}
          <div className="flex-1 flex items-center justify-center">
            {idx === 1 ? (
              <h2 className="text-4xl text-white font-medium font-[var(--font-aldrich)] text-center leading-tight">
                What makes<br />Z4R0 different?
              </h2>
            ) : null}
          </div>
          {/* 右侧dot-line-dot+item */}
          <div className="flex-1 flex items-center relative justify-end">
            <div className="flex items-center mr-4">
              <div className="w-3 h-3 bg-white rounded-full" />
              <svg width="80" height="6" className="mx-0" style={{display:'block'}}>
                <line x1="0" y1="3" x2="80" y2="3" stroke="#fff" strokeWidth="3" className="dash-animate-left" />
              </svg>
              <div className="w-3 h-3 bg-white rounded-full" />
            </div>
            <div className="flex-1">
              <div className="text-white text-xl font-medium mb-2 font-[var(--font-aldrich)]">{rightItems[idx].title}</div>
              <div className="text-white/80 text-base leading-relaxed font-[var(--font-geist-sans)]">{rightItems[idx].desc}</div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
} 