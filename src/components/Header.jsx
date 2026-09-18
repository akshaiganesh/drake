import React, { useState } from 'react';
import { Menu, X, Sparkles, Code2 } from 'lucide-react';

function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="site-header fixed top-0 left-0 right-0 z-[201] flex justify-center bg-[#0b0c10]/85 backdrop-blur-md border-b border-white/10 transition-all">
      <div className="w-full max-w-[1440px] mx-auto px-5 md:px-8 py-3.5 flex items-center justify-between">
        
        {/* Portfolio Branding */}
        <a href="#" className="shrink-0 flex items-center gap-2.5 group" aria-label="Home">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-500 p-[1px] shadow-lg shadow-cyan-500/20">
            <div className="w-full h-full bg-[#0b0c10] rounded-[7px] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-sm tracking-wide text-white font-semibold group-hover:text-cyan-400 transition-colors">
              AIML.<span className="text-cyan-400">STUDENT</span>
            </span>
            <span className="text-[10px] text-white/50 font-mono tracking-tighter">learning & building daily</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-3">
          <div className="relative flex h-[40px] items-center px-3.5 rounded-[10px] glass-pill gap-1">
            <a href="#projects" className="text-[14px] font-medium text-white/80 hover:text-cyan-400 px-2 py-1 transition-colors">Projects</a>
            <div className="w-[1px] h-3.5 bg-white/15 my-auto" />
            <a href="#curriculum" className="text-[14px] font-medium text-white/80 hover:text-cyan-400 px-2 py-1 transition-colors">Chapters</a>
            <div className="w-[1px] h-3.5 bg-white/15 my-auto" />
            <a href="#stack" className="text-[14px] font-medium text-white/80 hover:text-cyan-400 px-2 py-1 transition-colors">Tech Stack</a>
          </div>

          <a
            href="https://github.com/akshaiganesh/drake"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-light-surface inline-flex items-center gap-2 h-[40px] px-4 rounded-[10px] text-[14px] font-medium shadow-md shadow-cyan-500/10 hover:shadow-cyan-500/25 transition-all"
          >
            <GithubIcon className="w-4 h-4 text-[#0b0c10]" />
            <span>GitHub</span>
          </a>
        </nav>

        {/* Mobile action buttons */}
        <div className="flex items-center md:hidden gap-2">
          <a
            href="https://github.com/akshaiganesh/drake"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-light-surface inline-flex items-center gap-1.5 h-[36px] px-3 rounded-[8px] text-[13px] font-medium"
          >
            <GithubIcon className="w-3.5 h-3.5 text-[#0b0c10]" />
            <span>Code</span>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg glass-pill text-white hover:bg-white/15 active:scale-95 transition-all"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-[60px] left-0 right-0 bg-[#0e0f12]/95 border-b border-white/10 p-5 backdrop-blur-xl flex flex-col gap-3 text-white animate-in slide-in-from-top-2 duration-200">
          <span className="text-[11px] uppercase font-mono text-cyan-400 tracking-wider">Navigation</span>
          <a 
            href="#projects" 
            onClick={() => setMobileMenuOpen(false)} 
            className="p-3 bg-white/5 hover:bg-white/10 rounded-xl text-sm font-medium flex items-center justify-between transition-colors"
          >
            <span>Projects & Demos</span>
            <span className="text-xs text-cyan-400 font-mono">01</span>
          </a>
          <a 
            href="#curriculum" 
            onClick={() => setMobileMenuOpen(false)} 
            className="p-3 bg-white/5 hover:bg-white/10 rounded-xl text-sm font-medium flex items-center justify-between transition-colors"
          >
            <span>Learning Chapters (Books)</span>
            <span className="text-xs text-cyan-400 font-mono">02</span>
          </a>
          <a 
            href="#stack" 
            onClick={() => setMobileMenuOpen(false)} 
            className="p-3 bg-white/5 hover:bg-white/10 rounded-xl text-sm font-medium flex items-center justify-between transition-colors"
          >
            <span>Tech Stack & Matrix</span>
            <span className="text-xs text-cyan-400 font-mono">03</span>
          </a>
          <a 
            href="#contact" 
            onClick={() => setMobileMenuOpen(false)} 
            className="p-3 bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 rounded-xl text-sm font-medium flex items-center justify-between transition-colors text-cyan-300"
          >
            <span>Connect & Research</span>
            <span className="text-xs font-mono">04</span>
          </a>
        </div>
      )}
    </header>
  );
}
