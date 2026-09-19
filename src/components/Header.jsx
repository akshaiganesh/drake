import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

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
    <header className="site-header fixed top-0 left-0 right-0 z-[201] flex justify-center bg-[#FBFBF8]/85 backdrop-blur-md border-b border-[#202020]/10 transition-all">
      <div className="w-full max-w-[1440px] mx-auto px-5 md:px-8 py-4 flex items-center justify-between">
        
        {/* Akshai Ganesh Brand Name Logo */}
        <a href="#" className="shrink-0 flex items-center gap-3 group" aria-label="Akshai Ganesh Portfolio">
          <span className="text-xl md:text-2xl font-bold tracking-tight text-[#202020] font-sans">
            Akshai<span className="text-emerald-500">.</span>
          </span>
          <span className="text-xs font-mono text-[#202020]/60 border-l border-[#202020]/20 pl-3 hidden sm:inline">
            17y/o Student Builder
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden min-[1000px]:flex items-center gap-3">
          <div className="relative flex h-[41px] items-center px-3 rounded-[8px] glass-pill-dark gap-1">
            <span className="text-[15px] font-[410] text-[#202020]/60 px-2 cursor-default font-mono">My Workspace</span>
            <div className="w-[1px] h-4 bg-[#202020]/20 my-auto" />
            
            <a href="#projects" className="text-[15px] font-[410] text-[#202020] hover:text-black px-2 py-1 transition-colors">What I Build</a>
            <div className="w-[1px] h-3 bg-[#202020]/20 my-auto" />
            <a href="#hermes" className="text-[15px] font-[410] text-[#202020] hover:text-black px-2 py-1 transition-colors">Hermes & Stack</a>
            <div className="w-[1px] h-3 bg-[#202020]/20 my-auto" />
            <a href="#laptop-server" className="text-[15px] font-[410] text-[#202020] hover:text-black px-2 py-1 transition-colors">Laptop Server</a>
            <div className="w-[1px] h-3 bg-[#202020]/20 my-auto" />
            <a href="#curriculum" className="text-[15px] font-[410] text-[#202020] hover:text-black px-2 py-1 transition-colors">Chapters</a>
            <div className="w-[1px] h-3 bg-[#202020]/20 my-auto" />
            <a href="#contact" className="text-[15px] font-[410] text-[#202020] hover:text-black px-2 py-1 transition-colors">Connect</a>
          </div>

          <a
            href="https://github.com/akshaiganesh/drake"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn inline-flex items-center gap-2 h-[41px] px-5 rounded-[8px] text-[15px] font-[460]"
          >
            <GithubIcon className="w-4 h-4 text-[#FBFBF8]" />
            <span>GitHub Profile</span>
          </a>
        </nav>

        {/* Mobile menu trigger */}
        <div className="flex items-center min-[1000px]:hidden gap-3">
          <a
            href="https://github.com/akshaiganesh/drake"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn inline-flex items-center gap-1.5 h-[38px] px-3.5 rounded-[8px] text-[14px] font-[460]"
          >
            <GithubIcon className="w-3.5 h-3.5 text-[#FBFBF8]" />
            <span>GitHub</span>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg glass-pill-dark text-[#202020]"
            aria-label="Open menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="min-[1000px]:hidden fixed top-[68px] left-0 right-0 bg-[#FBFBF8]/95 border-b border-[#202020]/10 p-6 backdrop-blur-xl flex flex-col gap-4 text-[#202020] shadow-xl">
          <span className="text-xs uppercase font-mono text-[#202020]/50">Navigation</span>
          <div className="grid grid-cols-2 gap-2">
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="p-3 bg-[#F5F5F2] rounded-lg text-sm font-medium">What I Build</a>
            <a href="#hermes" onClick={() => setMobileMenuOpen(false)} className="p-3 bg-[#F5F5F2] rounded-lg text-sm font-medium">Hermes & Stack</a>
            <a href="#laptop-server" onClick={() => setMobileMenuOpen(false)} className="p-3 bg-[#F5F5F2] rounded-lg text-sm font-medium">Laptop Server</a>
            <a href="#curriculum" onClick={() => setMobileMenuOpen(false)} className="p-3 bg-[#F5F5F2] rounded-lg text-sm font-medium">Chapters</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="p-3 bg-[#F5F5F2] rounded-lg text-sm font-medium">Connect</a>
          </div>
        </div>
      )}
    </header>
  );
}
