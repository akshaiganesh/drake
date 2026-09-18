import React, { useState } from 'react';
import { Shield, Layers, UserCheck, Plug, ChevronRight } from 'lucide-react';

export default function OrchestrationPlatform() {
  const nodes = [
    { id: 'strategy', label: 'Strategy', x: 260, y: 77 },
    { id: 'finance', label: 'Finance', x: 384, y: 135 },
    { id: 'marketing', label: 'Marketing', x: 425, y: 260 },
    { id: 'support', label: 'Support', x: 384, y: 384 },
    { id: 'website', label: 'Website', x: 260, y: 443 },
    { id: 'operations', label: 'Operations', x: 135, y: 384 },
    { id: 'design', label: 'Design', x: 95, y: 260 },
    { id: 'sales', label: 'Sales', x: 135, y: 135 }
  ];

  const [activeNode, setActiveNode] = useState(nodes[0]);

  return (
    <div id="orchestration" className="w-full bg-[#FBFBF8] py-20 border-b border-[#E8E7E6]">
      <div className="w-full max-w-[1100px] mx-auto px-6 flex flex-col items-center">
        
        {/* Dual Heading */}
        <div className="w-full text-center max-w-[850px] mb-12">
          <h2 className="m-0 text-[28px] md:text-[36px] lg:text-[42px] font-normal leading-[115%] text-[#202020]">
            <span>Cofounder is an agent orchestration platform</span>
            <br />
            <span className="text-[#202020]/40">designed to help you run an entire business</span>
          </h2>
        </div>

        {/* Orchestration Frame Box (orch-frame matching cofounder.co) */}
        <div className="orch-frame relative flex flex-col overflow-hidden w-full min-h-[560px] rounded-[16px] border border-black/10 p-6">
          
          {/* Top Account & Status Header */}
          <div className="flex items-center justify-between border-b border-black/5 pb-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-[6px] border border-black/10 bg-white/60">
                <div className="w-4 h-4 rounded-full bg-[#202020]/20 flex items-center justify-center text-[9px] font-bold text-[#202020]">GI</div>
                <span className="text-xs font-medium text-[#202020]">General Intelligence...</span>
              </div>
              <span className="text-xs font-mono text-[#202020]/40">Z 60%</span>
            </div>

            <span className="text-xs font-mono text-[#202020]/50">
              General-intelligence-company/superoptimizers
            </span>
          </div>

          {/* Central Radial Graph */}
          <div className="flex-1 flex items-center justify-center py-8 relative">
            <svg viewBox="0 0 520 520" className="w-full max-w-[460px] h-auto" fill="none">
              
              {/* Outer orbit boundary */}
              <circle cx="260" cy="260" r="204" stroke="rgba(32,32,32,0.12)" strokeWidth="1" strokeDasharray="4 4" />
              
              {/* Radial connector lines to center */}
              {nodes.map((node) => (
                <line
                  key={node.id}
                  x1="260"
                  y1="260"
                  x2={node.x}
                  y2={node.y}
                  stroke={activeNode.id === node.id ? "#202020" : "rgba(32,32,32,0.15)"}
                  strokeWidth={activeNode.id === node.id ? "1.5" : "1"}
                  strokeDasharray="4 4"
                />
              ))}

              {/* Center Hub */}
              <circle cx="260" cy="260" r="44" fill="#FBFBF8" stroke="rgba(32,32,32,0.2)" strokeWidth="1.5" />
              <text x="260" y="256" textAnchor="middle" fill="#202020" fontSize="12" fontWeight="600" fontFamily="IBM Plex Mono">Cofounder</text>
              <text x="260" y="272" textAnchor="middle" fill="rgba(32,32,32,0.5)" fontSize="9" fontFamily="IBM Plex Mono">Orchestrator</text>

              {/* Radial Nodes */}
              {nodes.map((node) => {
                const isActive = activeNode.id === node.id;
                return (
                  <g
                    key={node.id}
                    onClick={() => setActiveNode(node)}
                    className="cursor-pointer group"
                  >
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={isActive ? "28" : "24"}
                      fill={isActive ? "#202020" : "#FBFBF8"}
                      stroke={isActive ? "#202020" : "rgba(32,32,32,0.2)"}
                      strokeWidth="1.5"
                      className="transition-all duration-200"
                    />
                    <text
                      x={node.x}
                      y={node.y + 4}
                      textAnchor="middle"
                      fill={isActive ? "#FBFBF8" : "#202020"}
                      fontSize="10"
                      fontWeight="500"
                      fontFamily="Inter"
                    >
                      {node.label}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Bottom Selected Node Detail Pill */}
          <div className="p-4 rounded-xl bg-white/80 border border-black/10 flex flex-col md:flex-row items-center justify-between gap-3 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm font-semibold text-[#202020]">Active Department: {activeNode.label} Agent</span>
              <span className="text-xs font-mono text-[#202020]/50">Orchestrating autonomous workflows...</span>
            </div>
            <a href="https://app.cofounder.co" className="text-xs font-semibold text-[#202020] hover:underline flex items-center gap-1">
              <span>Start in Cofounder</span>
              <ChevronRight size={14} />
            </a>
          </div>

        </div>

        {/* 3 Feature Highlights Underneath */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 w-full">
          <div className="p-6 rounded-2xl bg-[#F5F5F2] border border-black/5 flex flex-col gap-2">
            <div className="w-8 h-8 rounded-lg bg-black/5 flex items-center justify-center text-[#202020] mb-2">
              <Layers size={18} />
            </div>
            <h3 className="text-base font-semibold text-[#202020]">Agentic departments</h3>
            <p className="text-xs text-[#202020]/60 leading-relaxed">
              Cofounder is designed like a real company, with departments, managers, and shared context.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#F5F5F2] border border-black/5 flex flex-col gap-2">
            <div className="w-8 h-8 rounded-lg bg-black/5 flex items-center justify-center text-[#202020] mb-2">
              <UserCheck size={18} />
            </div>
            <h3 className="text-base font-semibold text-[#202020]">Human in the loop</h3>
            <p className="text-xs text-[#202020]/60 leading-relaxed">
              Agents work alongside you, requiring approval when potentially dangerous actions are taken.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#F5F5F2] border border-black/5 flex flex-col gap-2">
            <div className="w-8 h-8 rounded-lg bg-black/5 flex items-center justify-center text-[#202020] mb-2">
              <Plug size={18} />
            </div>
            <h3 className="text-base font-semibold text-[#202020]">Fully extensible</h3>
            <p className="text-xs text-[#202020]/60 leading-relaxed">
              Easily connect MCP, custom APIs, custom skills, or an entire custom codebase to cofounder.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
