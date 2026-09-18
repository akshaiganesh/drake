import React from 'react';

export default function SocialProof() {
  return (
    <div id="social-proof" className="w-full bg-[#FBFBF8] flex flex-col items-center pt-[32px] pb-[72px] border-b border-[#E8E7E6]">
      <div className="w-full max-w-[1200px] mx-auto px-6 flex flex-col items-center">
        
        {/* Logo Tiles Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full justify-items-center">
          
          <a href="#case-studies" className="logo-tile flex items-center justify-center w-[180px] h-[84px] p-6 group relative">
            <img src="/logos/activegraph-wordmark.png" alt="ActiveGraph" className="h-[26px] w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
            <span className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all text-[11px] font-mono text-[#202020] bg-[#F5F5F2] px-1.5 py-0.5 rounded border border-black/10">
              Case Study →
            </span>
          </a>

          <a href="#case-studies" className="logo-tile flex items-center justify-center w-[180px] h-[84px] p-6 group relative">
            <img src="/logos/veery-wordmark.png" alt="Veery" className="h-[26px] w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
            <span className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all text-[11px] font-mono text-[#202020] bg-[#F5F5F2] px-1.5 py-0.5 rounded border border-black/10">
              Case Study →
            </span>
          </a>

          <a href="#case-studies" className="logo-tile flex items-center justify-center w-[180px] h-[84px] p-6 group relative">
            <span className="text-[17px] font-[520] text-[#202020]/80 group-hover:text-[#202020] font-sans">LearnPath</span>
            <span className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all text-[11px] font-mono text-[#202020] bg-[#F5F5F2] px-1.5 py-0.5 rounded border border-black/10">
              Case Study →
            </span>
          </a>

          <a href="#case-studies" className="logo-tile flex items-center justify-center w-[180px] h-[84px] p-6 group relative">
            <span className="text-[17px] font-[520] text-[#202020]/80 group-hover:text-[#202020] font-sans">Valence OS</span>
            <span className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all text-[11px] font-mono text-[#202020] bg-[#F5F5F2] px-1.5 py-0.5 rounded border border-black/10">
              Case Study →
            </span>
          </a>

        </div>

        {/* Counter Text */}
        <p className="m-0 text-[13px] font-[460] leading-[140%] tracking-[0.13px] mt-8 text-[#202020]/60 text-center">
          <span className="shimmer font-semibold">over 10,650 companies</span> are running on Cofounder
        </p>

      </div>
    </div>
  );
}
