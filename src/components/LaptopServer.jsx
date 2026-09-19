import React from 'react';
import { motion } from 'framer-motion';
import { Server, Terminal, Cpu, HardDrive, CheckCircle2, Shield, Activity } from 'lucide-react';

export default function LaptopServer() {
  const serverServices = [
    { name: 'ig-autoreply.service', desc: 'Instagram DM Auto-Reply Bot Daemon', status: 'active (running)', memory: '34 MB' },
    { name: 'n8n-automation.service', desc: 'n8n Webhook & Workflow Engine', status: 'active (running)', memory: '142 MB' },
    { name: 'telegram-bot.service', desc: 'Python API & Telegram Bot Listener', status: 'active (running)', memory: '28 MB' },
    { name: 'obsidian-vault-sync.service', desc: 'Notion ➔ Obsidian Markdown Sync Service', status: 'active (running)', memory: '19 MB' }
  ];

  return (
    <section id="laptop-server" className="w-full bg-[#FBFBF8] py-20 md:py-28 border-b border-[#202020]/10">
      <div className="w-full max-w-[1280px] mx-auto px-5 md:px-8">

        {/* Container Box */}
        <div className="rounded-3xl bg-[#F5F5F2] border border-[#202020]/15 p-8 md:p-14 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* Left Text Content */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#202020]/5 border border-[#202020]/15 text-[#202020] font-mono text-xs mb-4">
                <Server className="w-3.5 h-3.5" />
                <span>Home Lab & Linux Setup</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-normal text-[#202020] tracking-tight leading-tight">
                I turned my old laptop into an actual server.
              </h2>

              <p className="mt-4 text-[#202020]/80 text-base md:text-lg leading-relaxed font-normal">
                Instead of leaving an old laptop sitting unused, I wiped it, installed Linux, and turned it into my personal little home server. It runs background services, bots, and automated workflows 24/7 without needing a terminal window open.
              </p>

              {/* Transformation Badge */}
              <div className="mt-6 p-4 rounded-2xl bg-white border border-[#202020]/10 font-mono text-xs md:text-sm text-[#202020] flex items-center justify-between shadow-2xs">
                <div className="flex items-center gap-2">
                  <span className="text-[#202020]/50">Old Laptop</span>
                  <span className="font-bold text-[#202020]">➔</span>
                  <span className="font-semibold text-emerald-700">My Personal Little Server</span>
                </div>
                <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                  systemd 24/7
                </span>
              </div>

              <p className="mt-4 text-xs md:text-sm text-[#202020]/60 font-sans leading-relaxed">
                It’s not some massive cloud infrastructure — it’s literally my own machine running my own stuff. I’m learning processes, networking, systemd, and Linux by running things myself.
              </p>
            </div>

            {/* Hardware Stats */}
            <div className="mt-8 pt-6 border-t border-[#202020]/10 grid grid-cols-3 gap-3 font-mono text-xs">
              <div>
                <span className="block text-[#202020]/50 text-[10px] uppercase">OS & Daemon</span>
                <span className="font-semibold text-[#202020]">Linux + systemd</span>
              </div>
              <div>
                <span className="block text-[#202020]/50 text-[10px] uppercase">Services Uptime</span>
                <span className="font-semibold text-emerald-700">24/7 Running</span>
              </div>
              <div>
                <span className="block text-[#202020]/50 text-[10px] uppercase">Approach</span>
                <span className="font-semibold text-[#202020]">Hands-on Lab</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Systemd Status Terminal */}
          <div className="lg:col-span-6 rounded-2xl bg-white border border-[#202020]/15 p-6 shadow-md font-mono">

            {/* Terminal Header */}
            <div className="flex items-center justify-between border-b border-[#202020]/10 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#202020]" />
                <span className="text-xs font-semibold text-[#202020] uppercase tracking-wider">
                  htop & systemctl status
                </span>
              </div>
              <span className="flex items-center gap-1 text-[10px] text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                <Activity className="w-3 h-3 text-emerald-600 animate-pulse" />
                Server Online
              </span>
            </div>

            {/* List of systemd services running on the laptop */}
            <div className="space-y-3">
              {serverServices.map((service, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-[#F5F5F2] border border-[#202020]/10 flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#202020] font-mono">
                      {service.name}
                    </span>
                    <span className="text-[10px] text-emerald-700 font-semibold bg-emerald-100/80 px-2 py-0.5 rounded">
                      ● {service.status}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#202020]/70 font-sans">
                    {service.desc}
                  </p>
                  <div className="text-[10px] text-[#202020]/40 pt-1 flex items-center justify-between border-t border-[#202020]/5">
                    <span>PID: 104{idx + 2}</span>
                    <span>Memory: {service.memory}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-[#202020]/10 flex items-center justify-between text-[11px] text-[#202020]/50">
              <span>Host: laptop-server-01</span>
              <span>Linux 6.8.0-generic</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
