import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CompanyGuide() {
  const chapters = [
    {
      id: 'chapter-1',
      num: 'Chapter 1',
      roman: 'Chapter I',
      title: 'Chapter 1\nThe Learning Loop',
      subtitle: 'Idea ➔ Research ➔ Build ➔ Break ➔ Debug ➔ Understand ➔ Fix.',
      imageSrc: '/books-covers/UI 04/Frame 2147239727test-img-2.png',
      href: '#projects'
    },
    {
      id: 'chapter-2',
      num: 'Chapter 2',
      roman: 'Chapter II',
      title: 'Chapter 2\nBots & Systemd',
      subtitle: 'Building IG auto-reply bots, n8n automation & Linux background services.',
      imageSrc: '/books-covers/UI 04/Frame 2147239728.png',
      href: '#projects'
    },
    {
      id: 'chapter-3',
      num: 'Chapter 3',
      roman: 'Chapter III',
      title: 'Chapter 3\nDeep Into AI/ML',
      subtitle: 'Moving beyond prompts: PyTorch, LoRA fine-tuning, Transformers & CUDA.',
      imageSrc: '/books-covers/UI 04/Frame 2147239727test-img.png',
      href: '#projects'
    },
    {
      id: 'chapter-4',
      num: 'Chapter 4',
      roman: 'Chapter IV',
      title: 'Chapter 4\nTech + Creativity',
      subtitle: 'Combining coding with web design, visual media, video editing & aesthetics.',
      imageSrc: '/books-covers/UI 04/Frame 2147239727.png',
      href: '#projects'
    }
  ];

  return (
    <div id="curriculum" className="w-full bg-[#FBFBF8] py-24 border-b border-[#E8E7E6]">
      <div className="w-full max-w-[1200px] mx-auto px-6">

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#202020]/50 block mb-2 font-mono-retro font-semibold">MY JOURNEY & PLAYBOOK</span>
            <h2 className="text-3xl md:text-5xl font-normal leading-tight text-[#202020]">
              How I Learn & Build
            </h2>
            <p className="mt-3 text-base text-[#202020]/60 max-w-[540px]">
              Four chapters capturing my approach to tech, hands-on experimentation, AI/ML exploration, and creative projects.
            </p>
          </div>

          <a href="#contact" className="cta-btn inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium shrink-0">
            <span>Connect & Chat</span>
            <ArrowRight size={16} />
          </a>
        </div>

        {/* 4 Book Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {chapters.map((chap) => (
            <a
              key={chap.id}
              href={chap.href}
              className="p-6 rounded-2xl bg-[#F5F5F2] border border-black/5 hover:border-black/20 hover:bg-white transition-all flex flex-col justify-between min-h-[340px] group shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#202020]/40 mb-3">
                  <span>{chap.num}</span>
                  <span>{chap.roman}</span>
                </div>

                {/* Book Cover Image */}
                <div className="w-full aspect-[4/5] mb-4 rounded-xl overflow-hidden bg-white border border-black/5 p-2 flex items-center justify-center shadow-xs">
                  <img
                    src={chap.imageSrc}
                    alt={chap.title}
                    className="w-full h-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <h3 className="text-lg font-semibold text-[#202020] group-hover:text-black transition-colors whitespace-pre-line leading-tight">
                  {chap.title}
                </h3>
                <p className="text-xs text-[#202020]/60 mt-2 leading-relaxed">
                  {chap.subtitle}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between text-xs font-mono font-medium text-[#202020] group-hover:translate-x-1 transition-transform">
                <span>Explore Chapter</span>
                <ArrowRight size={14} />
              </div>
            </a>
          ))}
        </div>

      </div>
    </div>
  );
}
