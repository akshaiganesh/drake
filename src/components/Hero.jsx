import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Cpu, Sparkles } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef(null);

  // Track scroll progress through Hero section for mobile vertical artwork pan
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  // Mobile-only: smoothly shift video background from top (sky/clouds) -> middle (tree) -> bottom (laptop)
  const mobileY = useTransform(scrollYProgress, [0, 1], ['0%', '-37.5%']);

  return (
    <div
      ref={containerRef}
      id="site-hero"
      className="relative w-full min-h-[720px] md:min-h-[720px] bg-[#FBFBF8] pb-16 pt-28 md:pt-36 flex items-center justify-center overflow-hidden border-b border-[#202020]/10"
    >

      {/* Main Video Artwork */}
      <div className="absolute inset-0 z-0 opacity-100 pointer-events-none overflow-hidden">
        <motion.div
          style={{ y: mobileY }}
          className="w-full h-[160%] md:h-full md:!transform-none"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={`${import.meta.env.BASE_URL}hero/cofounder-2-hero-poster.webp`}
            className="w-full h-full object-cover object-top md:object-center"
          >
            <source src={`${import.meta.env.BASE_URL}hero/cofounder-2-hero.webm`} type="video/webm" />
            <source src={`${import.meta.env.BASE_URL}hero/cofounder-2-hero.mp4`} type="video/mp4" />
          </video>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#FBFBF8]/60 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 md:px-8 flex items-center">

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[720px]"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FBFBF8]/90 border border-[#202020]/15 text-[#202020] text-xs font-departure mb-6 shadow-xs backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>17 y/o Student • 12th Grade Builder</span>
          </div>

          <h1 className="m-0 font-neoris font-normal text-[36px] sm:text-[48px] lg:text-[58px] leading-[108%] tracking-tight text-[#202020] text-left drop-shadow-xs">
            I’m 17. I <span className="font-semibold underline decoration-2 decoration-[#202020]/30 underline-offset-4">build things, break them, fix them</span>, and learn as I go.
          </h1>

          <p className="mt-5 max-w-[580px] text-left text-[15px] md:text-[17px] font-inter font-normal leading-[155%] text-[#202020]/80 backdrop-blur-[2px]">
            12th-grade student obsessed with AI/ML, coding agents, n8n automation, local LLMs, and Python services. Currently driving Hermes, jumping quotas, and figuring out what happens under the hood.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 font-inter">
            <a
              href="#projects"
              className="cta-btn inline-flex items-center justify-center gap-2 h-[44px] px-6 rounded-[10px] text-[15px] font-medium shadow-md transition-all"
            >
              <Cpu className="w-4 h-4 text-[#FBFBF8]" />
              <span>See What I Build</span>
            </a>
            <a
              href="#hermes"
              className="inline-flex items-center justify-center gap-2 h-[44px] px-6 rounded-[10px] text-[15px] font-medium text-[#202020] bg-[#F5F5F2]/90 hover:bg-white border border-[#202020]/15 backdrop-blur-md transition-all shadow-xs"
            >
              <Sparkles className="w-4 h-4 text-[#202020]" />
              <span>Coding Agent Obsession</span>
            </a>
          </div>

          {/* Persona Stack Highlights */}
          <div className="mt-10 pt-6 border-t border-[#202020]/15 grid grid-cols-3 gap-4 max-w-[520px]">
            <div>
              <span className="block font-mono-plex text-base md:text-lg font-bold text-[#202020]">Hermes</span>
              <span className="text-xs text-[#202020]/60 font-mono-plex font-medium">Daily Dev Companion</span>
            </div>
            <div>
              <span className="block font-mono-plex text-base md:text-lg font-bold text-[#202020]">Quota Jumper</span>
              <span className="text-xs text-[#202020]/60 font-mono-plex font-medium">Agent Tester 😂</span>
            </div>
            <div>
              <span className="block font-mono-plex text-base md:text-lg font-bold text-[#202020]">Python & n8n</span>
              <span className="text-xs text-[#202020]/60 font-mono-plex font-medium">Bots & Workflows</span>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
