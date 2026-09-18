import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const heroNotifications = [
    {
      id: 1,
      tag: 'Engineering Agent',
      action: 'Merged PR #142: Authentication & Stripe Webhooks',
      time: 'Just now',
      color: 'bg-blue-500/20 text-blue-300 border-blue-500/30'
    },
    {
      id: 2,
      tag: 'Finance Agent',
      action: 'Reduced AWS infra monthly cost by $3,400',
      time: '2m ago',
      color: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
    },
    {
      id: 3,
      tag: 'Sales Agent',
      action: 'Qualified & scheduled demo with Enterprise buyer',
      time: '5m ago',
      color: 'bg-amber-500/20 text-amber-300 border-amber-500/30'
    },
    {
      id: 4,
      tag: 'Marketing Agent',
      action: 'Published Product Launch announcement on X',
      time: '12m ago',
      color: 'bg-purple-500/20 text-purple-300 border-purple-500/30'
    }
  ];

  return (
    <div id="site-hero" className="relative w-full min-h-[720px] md:min-h-[620px] pixel-bg-hero pb-[69px] pt-[120px] flex items-center justify-center overflow-hidden">

      {/* Background Video Simulation overlay */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img
          src="/hero/cofounder-2-hero-poster.webp"
          alt="Cofounder 2 Hero Poster"
          className="w-full h-full object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

        {/* Hero Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 max-w-[720px]"
        >
          <h1 className="m-0 font-normal hero-gradient-text text-[38px] sm:text-[46px] lg:text-[54px] leading-[108%] tracking-tight text-left">
            Cofounder lets you run an entire company with AI
          </h1>

          <p className="mt-5 max-w-[540px] text-left text-[16px] md:text-[18px] font-[460] leading-[140%] text-white/80 font-sans">
            Start with an AI roadmap, then hand off engineering, sales, marketing, design, finance, and ops to agents.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="https://app.cofounder.co"
              className="btn-light-surface inline-flex items-center justify-center h-[41px] px-5 rounded-[8px] text-[15px] font-[460]"
            >
              Run a company
            </a>
            <a
              href="#resources"
              className="glass-pill-btn inline-flex items-center justify-center h-[41px] px-5 rounded-[8px] text-[15px] font-[460] text-white hover:bg-white/20 transition-all"
            >
              Check out the launch
            </a>
          </div>
        </motion.div>

        {/* Hero Right 3D Perspective Glass Notification Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 hidden lg:flex justify-center"
        >
          <div className="w-full max-w-[420px] rounded-2xl glass-pill p-5 border border-white/20 shadow-2xl backdrop-blur-2xl flex flex-col gap-3">

            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-xs font-mono font-semibold text-white/90 uppercase tracking-wider">
                Live Agent Stream
              </span>
              <span className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Active Swarm
              </span>
            </div>

            <div className="flex flex-col gap-2.5">
              {heroNotifications.map((notif) => (
                <div
                  key={notif.id}
                  className="p-3 rounded-xl bg-black/40 border border-white/10 flex flex-col gap-1 hover:bg-black/60 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${notif.color}`}>
                      {notif.tag}
                    </span>
                    <span className="text-[10px] font-mono text-white/40">{notif.time}</span>
                  </div>
                  <p className="text-xs text-white/80 font-mono mt-1">
                    {notif.action}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </motion.div>

      </div>
    </div>
  );
}
