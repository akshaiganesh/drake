import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Sparkles, ArrowUpRight, Heart } from 'lucide-react';

function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function Footer() {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePos({ x, y });
  };

  return (
    <footer id="contact" className="w-full bg-[#FBFBF8] text-[#202020] pt-20 pb-12 border-t border-[#202020]/10 relative overflow-hidden">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/footer/bg-footer-pattern.png')] bg-repeat opacity-40 pointer-events-none" />

      <div className="w-full max-w-[1280px] mx-auto px-5 md:px-8 relative z-10 flex flex-col items-center">

        {/* Interactive Holographic Card */}
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setMousePos({ x: 0.5, y: 0.5 })}
          style={{
            transform: `perspective(1000px) rotateY(${(mousePos.x - 0.5) * 12}deg) rotateX(${(0.5 - mousePos.y) * 12}deg)`
          }}
          className="w-full rounded-3xl border border-[#202020]/10 p-8 md:p-14 text-center flex flex-col items-center justify-center mb-16 shadow-xl relative overflow-hidden transition-transform duration-200 ease-out bg-[#F5F5F2]"
        >
          {/* Holographic overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-multiply pointer-events-none transition-opacity duration-300 group-hover:opacity-50"
            style={{ backgroundImage: "url('/footer/Holo-bg-card.png')" }}
          />

          {/* Dynamic Light Gradient Following Cursor */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(600px circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(32, 32, 32, 0.08), transparent 40%)`
            }}
          />

          <div className="relative z-10 flex flex-col items-center max-w-[760px]">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#202020]/5 border border-[#202020]/10 text-[#202020] font-mono text-xs mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Living Snapshot of My Tech Journey</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-normal text-[#202020] leading-tight tracking-tight">
              Keep building. Keep breaking things. Keep learning.
            </h2>

            <p className="mt-4 text-[#202020]/70 max-w-[580px] text-sm md:text-base leading-relaxed font-normal">
              I’m 17, curious as hell, and probably discovering another weird piece of technology tomorrow. Want to chat about Hermes, local LLMs, n8n workflows, or collaborate on a side project?
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:akshai@example.com"
                className="cta-btn inline-flex items-center gap-2.5 h-[48px] px-8 rounded-xl font-medium text-sm md:text-base shadow-md transition-all text-[#FBFBF8]"
              >
                <Mail className="w-4 h-4 text-[#FBFBF8]" />
                <span>Let's Connect</span>
              </a>

              <a
                href="https://github.com/akshaiganesh/drake"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-[48px] px-6 rounded-xl font-medium text-sm text-[#202020] bg-white border border-[#202020]/15 hover:bg-[#F5F5F2] transition-all shadow-xs"
              >
                <GithubIcon className="w-4 h-4 text-[#202020]" />
                <span>GitHub Repos</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#202020]/50" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Footer Links */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-[#202020]/10 pt-12 pb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#202020]/50 block mb-4">Navigation</span>
            <ul className="space-y-2 text-xs md:text-sm text-[#202020]/75 font-mono">
              <li><a href="#projects" className="hover:text-black transition-colors">01 / What I Build</a></li>
              <li><a href="#hermes" className="hover:text-black transition-colors">02 / Hermes Daily Driver</a></li>
              <li><a href="#curriculum" className="hover:text-black transition-colors">03 / Chapters</a></li>
              <li><a href="#contact" className="hover:text-black transition-colors">04 / Connect</a></li>
            </ul>
          </div>

          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#202020]/50 block mb-4">Interests</span>
            <ul className="space-y-2 text-xs md:text-sm text-[#202020]/75 font-mono">
              <li>AI / ML & Fine-Tuning</li>
              <li>Local AI (Ollama & LM Studio)</li>
              <li>n8n & Python Automation</li>
              <li>Systemd Daemons & Linux</li>
            </ul>
          </div>

          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#202020]/50 block mb-4">Daily Stack</span>
            <ul className="space-y-2 text-xs md:text-sm text-[#202020]/75 font-mono">
              <li>Hermes (Daily Driver)</li>
              <li>Python, n8n, Git/GitHub</li>
              <li>Linux, Terminal, systemd</li>
              <li>Notion & Obsidian Vault</li>
            </ul>
          </div>

          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#202020]/50 block mb-4">Approach</span>
            <p className="text-xs text-[#202020]/60 leading-relaxed font-mono">
              Idea ➔ Research ➔ Build ➔ Break ➔ Debug ➔ Understand ➔ Fix ➔ Learn.
            </p>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between border-t border-[#202020]/10 pt-8 text-xs text-[#202020]/40 font-mono gap-3">
          <p>© 2026 Personal Portfolio. 17-Year-Old Student & Builder.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="w-3.5 h-3.5 text-[#202020] fill-[#202020]" /> React & Vite
          </p>
        </div>

      </div>
    </footer>
  );
}
