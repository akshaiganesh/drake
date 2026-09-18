import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, ArrowDownRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const heroNotifications = [
    {
      id: 1,
      tag: 'Hermes Agent',
      action: 'Refactoring Python background service & debugging n8n webhook',
      time: 'Just now',
      color: 'bg-indigo-50 text-indigo-700 border-indigo-200'
    },
    {
      id: 2,
      tag: 'Local AI & LoRA',
      action: 'Running Llama-3 8B locally via Ollama & experimenting with fine-tuning',
      time: '5m ago',
      color: 'bg-blue-50 text-blue-700 border-blue-200'
    },
    {
      id: 3,
      tag: 'Systemd Service',
      action: 'Deployed Instagram DM auto-reply bot as systemd daemon on Linux',
      time: '18m ago',
      color: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    },
    {
      id: 4,
      tag: 'Learning Loop',
      action: 'Discovered PyTorch CUDA memory leak ➔ debugged ➔ fixed script',
      time: '1h ago',
      color: 'bg-amber-50 text-amber-700 border-amber-200'
    }
  ];

  return (
    <div id="site-hero" className="relative w-full min-h-[640px] md:min-h-[720px] bg-[#FBFBF8] pb-16 pt-28 md:pt-36 flex items-center justify-center overflow-hidden border-b border-[#202020]/10">

      {/* Main Video Artwork */}
      <div className="absolute inset-0 z-0 opacity-85 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/hero/cofounder-2-hero-poster.webp"
          className="w-full h-full object-cover object-center"
        >
          <source src="/hero/cofounder-2-hero.webm" type="video/webm" />
          <source src="/hero/cofounder-2-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#FBFBF8] via-[#FBFBF8]/20 to-[#FBFBF8]/40" />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

        {/* Hero Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 max-w-[720px]"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FBFBF8]/90 border border-[#202020]/15 text-[#202020] text-xs font-mono mb-6 shadow-xs backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>17 y/o Student • 12th Grade Builder</span>
          </div>

          <h1 className="m-0 font-normal text-[34px] sm:text-[44px] lg:text-[54px] leading-[112%] tracking-tight text-[#202020] text-left drop-shadow-xs">
            I’m 17. I <span className="font-semibold underline decoration-2 decoration-[#202020]/30 underline-offset-4">build things, break them, fix them</span>, and learn as I go.
          </h1>

          <p className="mt-5 max-w-[580px] text-left text-[15px] md:text-[17px] font-normal leading-[155%] text-[#202020]/80 font-sans backdrop-blur-[2px]">
            12th-grade student going deep into AI/ML, local LLMs, fine-tuning, Python automation, and background services. Currently obsessed with Hermes, n8n, and understanding what actually happens under the hood.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
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
              <span>Hermes — My Daily Driver</span>
            </a>
          </div>

          {/* Persona Stack Highlights */}
          <div className="mt-10 pt-6 border-t border-[#202020]/15 grid grid-cols-3 gap-4 max-w-[520px]">
            <div>
              <span className="block font-mono text-base md:text-lg font-bold text-[#202020]">Hermes</span>
              <span className="text-xs text-[#202020]/60 font-mono font-medium">Daily Dev Companion</span>
            </div>
            <div>
              <span className="block font-mono text-base md:text-lg font-bold text-[#202020]">Python & n8n</span>
              <span className="text-xs text-[#202020]/60 font-mono font-medium">Bots & Workflows</span>
            </div>
            <div>
              <span className="block font-mono text-base md:text-lg font-bold text-[#202020]">Local AI & LoRA</span>
              <span className="text-xs text-[#202020]/60 font-mono font-medium">Under the Hood</span>
            </div>
          </div>
        </motion.div>

        {/* Hero Right Notification Feed Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="w-full max-w-[440px] rounded-2xl bg-[#F5F5F2]/90 p-5 border border-[#202020]/15 shadow-xl backdrop-blur-md flex flex-col gap-3.5">

            <div className="flex items-center justify-between border-b border-[#202020]/10 pb-3">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#202020]" />
                <span className="text-xs font-mono font-semibold text-[#202020] uppercase tracking-wider">
                  Live Builder Stream
                </span>
              </div>
              <span className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-700">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                Active Experiments
              </span>
            </div>

            <div className="flex flex-col gap-2.5 max-h-[340px] overflow-y-auto pr-1">
              {heroNotifications.map((notif) => (
                <div
                  key={notif.id}
                  className="p-3 rounded-xl bg-white/95 border border-[#202020]/10 flex flex-col gap-1 hover:border-[#202020]/30 transition-all group shadow-xs"
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${notif.color}`}>
                      {notif.tag}
                    </span>
                    <span className="text-[10px] font-mono text-[#202020]/40">{notif.time}</span>
                  </div>
                  <p className="text-xs text-[#202020]/80 font-mono mt-1 group-hover:text-[#202020] transition-colors">
                    {notif.action}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-[#202020]/10 flex items-center justify-between text-[11px] text-[#202020]/50 font-mono">
              <span>Loop: Build ➔ Break ➔ Fix ➔ Learn</span>
              <span className="text-[#202020] flex items-center gap-1 font-semibold">
                Daily <ArrowDownRight className="w-3 h-3" />
              </span>
            </div>

          </div>
        </motion.div>

      </div>
    </div>
  );
}
