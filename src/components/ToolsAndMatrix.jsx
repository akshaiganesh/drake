import React, { useState } from 'react';
import { ShieldCheck, Cpu, SlidersHorizontal, Check } from 'lucide-react';

export default function ToolsAndMatrix() {
  const industries = [
    'AI VOICE AGENT',
    'YOUTUBE CHANNEL',
    'VIBE CODING IDE',
    'AI NEWSLETTER FIRM',
    'RECRUITING FIRM',
    'CONTENT WRITER',
    'CONSULTING FIRM',
    'SUPPORT AGENT',
    'GROWTH AGENCY'
  ];

  const [hoveredIndustry, setHoveredIndustry] = useState(industries[0]);

  return (
    <div id="tools-matrix" className="w-full bg-[#FBFBF8] py-24 border-b border-[#E8E7E6]">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-wider text-[#202020]/50 block mb-2">COMPLETE INTEGRATION</span>
          <h2 className="text-3xl md:text-5xl font-normal leading-tight text-[#202020]">
            All the tools and systems your company needs
          </h2>
          <p className="mt-4 text-base md:text-lg text-[#202020]/60 max-w-[600px] mx-auto">
            Give agents the context, tools, and approvals they need to keep company work moving.
          </p>

          {/* 3 Feature Control Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <div className="px-4 py-2 rounded-full bg-[#F5F5F2] border border-black/10 text-xs font-medium text-[#202020] flex items-center gap-2">
              <ShieldCheck size={14} className="text-emerald-600" />
              <span>You stay in control, nothing ships without your approval</span>
            </div>
            <div className="px-4 py-2 rounded-full bg-[#F5F5F2] border border-black/10 text-xs font-medium text-[#202020] flex items-center gap-2">
              <Cpu size={14} className="text-blue-600" />
              <span>Run multiple tasks in the background at the same time</span>
            </div>
            <div className="px-4 py-2 rounded-full bg-[#F5F5F2] border border-black/10 text-xs font-medium text-[#202020] flex items-center gap-2">
              <SlidersHorizontal size={14} className="text-purple-600" />
              <span>Customize agents with apps, skills, and schedules</span>
            </div>
          </div>
        </div>

        {/* Wordsearch / Industry Matrix Container */}
        <div className="mt-16 p-8 rounded-3xl bg-[#F5F5F2] border border-black/10 shadow-sm flex flex-col items-center">
          
          <div className="text-center max-w-[600px] mb-8">
            <span className="text-xs font-mono font-semibold text-[#202020]/40 uppercase tracking-wider">VERSATILE EXECUTION</span>
            <h3 className="text-2xl font-semibold text-[#202020] mt-1">Build across industries</h3>
            <p className="text-xs text-[#202020]/60 mt-2">
              From software products to service platforms and marketplaces, Cofounder helps you turn ideas into working companies.
            </p>
          </div>

          {/* Retro Wordsearch Pills Grid */}
          <div className="flex flex-wrap justify-center gap-3 max-w-[800px]">
            {industries.map((ind) => {
              const isSelected = hoveredIndustry === ind;
              return (
                <button
                  key={ind}
                  onMouseEnter={() => setHoveredIndustry(ind)}
                  onClick={() => setHoveredIndustry(ind)}
                  className={`px-4 py-2.5 rounded-xl font-mono text-xs font-semibold tracking-wider transition-all border ${
                    isSelected
                      ? 'bg-[#202020] text-[#FBFBF8] border-[#202020] scale-105 shadow-md'
                      : 'bg-white text-[#202020]/80 border-black/10 hover:border-black/30'
                  }`}
                >
                  {ind}
                </button>
              );
            })}
          </div>

          {/* Active Industry Banner Detail */}
          <div className="mt-8 p-4 rounded-xl bg-white border border-black/10 text-xs font-mono text-[#202020] flex items-center gap-3 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Target Market Template: <strong className="font-semibold">{hoveredIndustry}</strong> — Agent workflows pre-configured.</span>
          </div>

        </div>

      </div>
    </div>
  );
}
