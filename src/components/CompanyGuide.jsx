import React from 'react';
import { BookOpen, Download, ArrowRight } from 'lucide-react';

export default function CompanyGuide() {
  const chapters = [
    { id: 'start', num: 'Chapter 1', roman: 'Chapter I', title: 'How To Start', subtitle: 'Turn raw concepts into actionable spec & roadmap.' },
    { id: 'build', num: 'Chapter 2', roman: 'Chapter II', title: 'How To Build', subtitle: 'Hand off full-stack code and UI design to agents.' },
    { id: 'sell', num: 'Chapter 3', roman: 'Chapter III', title: 'How To Sell', subtitle: 'Automate outbound customer discovery and outreach.' },
    { id: 'scale', num: 'Chapter 4', roman: 'Chapter IV', title: 'How To Scale', subtitle: 'Run finance, compliance, and ongoing operations.' }
  ];

  return (
    <div id="company-guide" className="w-full bg-[#FBFBF8] py-24 border-b border-[#E8E7E6]">
      <div className="w-full max-w-[1200px] mx-auto px-6">

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#202020]/50 block mb-2">FOUNDER PLAYBOOK</span>
            <h2 className="text-3xl md:text-5xl font-normal leading-tight text-[#202020]">
              Learn how to start a company
            </h2>
            <p className="mt-3 text-base text-[#202020]/60 max-w-[540px]">
              Read the guide, then let Cofounder turn each step into a roadmap, tasks, and agents.
            </p>
          </div>

          <button className="cta-btn inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium shrink-0">
            <Download size={16} />
            <span>Download full guide</span>
          </button>
        </div>

        {/* 4 Chapter Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {chapters.map((chap) => (
            <a
              key={chap.id}
              href={`#${chap.id}`}
              className="p-6 rounded-2xl bg-[#F5F5F2] border border-black/5 hover:border-black/20 hover:bg-white transition-all flex flex-col justify-between min-h-[220px] group shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#202020]/40 mb-4">
                  <span>{chap.num}</span>
                  <span>{chap.roman}</span>
                </div>
                <h3 className="text-xl font-semibold text-[#202020] group-hover:text-black transition-colors">
                  {chap.title}
                </h3>
                <p className="text-xs text-[#202020]/60 mt-2 leading-relaxed">
                  {chap.subtitle}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between text-xs font-mono font-medium text-[#202020] group-hover:translate-x-1 transition-transform">
                <span>Read this chapter</span>
                <ArrowRight size={14} />
              </div>
            </a>
          ))}
        </div>

      </div>
    </div>
  );
}
