import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <div id="site-hero" className="relative w-full min-h-screen flex flex-col justify-between bg-[#FBFBF8] pt-28 pb-8 overflow-hidden border-b border-[#202020]/10">

      {/* Main Video Artwork */}
      <div className="absolute inset-0 z-0 opacity-100 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={`${import.meta.env.BASE_URL}hero/cofounder-2-hero-poster.webp`}
          className="w-full h-full object-cover object-center"
        >
          <source src={`${import.meta.env.BASE_URL}hero/cofounder-2-hero.webm`} type="video/webm" />
          <source src={`${import.meta.env.BASE_URL}hero/cofounder-2-hero.mp4`} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#FBFBF8]/40 via-transparent to-[#FBFBF8]/70" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 my-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[640px]"
        >
          <h1 className="text-[44px] sm:text-[60px] md:text-[72px] font-extrabold text-[#111111] leading-[1.05] tracking-tight font-sans">
            Build.<br />
            Break.<br />
            <span className="text-[#2563EB]">Learn</span> as I go.
          </h1>

          <p className="mt-6 text-[16px] sm:text-[18px] text-[#202020]/85 font-normal leading-[150%] max-w-[500px]">
            17 y/o student exploring AI, automation and whatever interesting tech I find next.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <a
              href="#laptop-server"
              className="inline-flex items-center justify-center gap-2.5 h-[50px] px-8 rounded-full text-[15px] font-semibold text-white bg-[#111111] hover:bg-black transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar (Desktop & Mobile) */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 pt-8 flex items-center justify-between text-xs sm:text-sm font-mono text-[#202020]/70 border-t border-[#202020]/10">
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          <span>Currently: 12th Grade</span>
          <span>|</span>
          <span>AI/ML</span>
          <span>|</span>
          <span>Automation</span>
          <span>|</span>
          <span>Building Cool Stuff</span>
        </div>

        <a
          href="#laptop-server"
          className="inline-flex items-center gap-1.5 hover:text-[#111111] transition-colors font-medium whitespace-nowrap"
        >
          <span>Keep Building</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>

    </div>
  );
}
