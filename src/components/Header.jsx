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
        
        {/* Retro Pixel Brand Logo */}
        <a href="#" className="shrink-0 flex items-center gap-3 group" aria-label="Home">
          <svg width="126" height="26" viewBox="0 0 126 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="block h-[20px] md:h-[26px] w-auto">
            <path d="M116.384 22.0101H111.751V20.8572H112.904V11.5848H111.751V10.4249H112.904V9.26497H114.064V8.10504H115.224V10.4249H116.384V11.5848H115.224V20.8572H116.384V22.0101ZM121.017 11.5848H118.704V10.4249H116.384V9.26497H121.017V11.5848Z" fill="#202020"/>
            <path d="M108.272 22.0107H102.48V20.8578H101.32V19.6979H100.16V17.378H99.0068V13.9053H100.16V11.5854H101.32V12.7454H108.272V11.5854H107.112V10.4255H102.48V9.26556H108.272V10.4255H109.432V11.5854H110.592V13.9053H101.32V17.378H102.48V19.6979H103.639V20.8578H108.272V22.0107ZM102.48 11.5854H101.32V10.4255H102.48V11.5854ZM110.592 19.6979H109.432V18.538H110.592V19.6979ZM109.432 20.8578H108.272V19.6979H109.432V20.8578Z" fill="#202020"/>
            <path d="M98.4375 22.0104H94.9577V20.8576H93.7978V19.6977H94.9577V11.5852H93.7978V10.4253H94.9577V3.47273H93.7978V2.31279H94.9577V1.15286H96.1176V0H97.2776V20.8576H98.4375V22.0104ZM93.7978 22.0104H89.1651V20.8576H88.0052V19.6977H86.8452V17.3778H85.6924V13.9051H86.8452V11.5852H88.0052V10.4253H89.1651V9.26532H93.7978V10.4253H90.325V11.5852H89.1651V13.9051H88.0052V17.3778H89.1651V19.6977H90.325V20.8576H93.7978V22.0104Z" fill="#202020"/>
            <path d="M75.8266 22.0101H71.194V20.8572H72.3468V11.5848H71.194V10.4249H72.3468V9.26497H73.5068V8.10504H74.6667V10.4249H75.8266V11.5848H74.6667V20.8572H75.8266V22.0101ZM84.5191 22.0101H79.8793V20.8572H81.0393V11.5848H79.8793V10.4249H75.8266V9.26497H81.0393V10.4249H82.1992V11.5848H83.3591V20.8572H84.5191V22.0101Z" fill="#202020"/>
            <path d="M64.2327 22.0107H60.18V20.8578H59.0201V19.6979H57.8601V10.4255H56.7073V9.26556H60.18V19.6979H61.3399V20.8578H64.2327V22.0107ZM70.0324 22.0107H66.5526V19.6979H65.3926V18.538H66.5526V10.4255H65.3926V9.26556H68.8724V20.8578H70.0324V22.0107ZM65.3926 20.8578H64.2327V19.6979H65.3926V20.8578Z" fill="#202020"/>
            <path d="M52.6497 22.0107H46.8571V20.8578H45.6972V19.6979H44.5373V17.378H43.3844V13.9053H44.5373V11.5854H45.6972V10.4255H46.8571V9.26556H52.6497V10.4255H53.8097V11.5854H54.9696V13.9053H56.1295V17.378H54.9696V19.6979H53.8097V20.8578H52.6497V22.0107ZM48.0171 20.8578H51.4898V19.6979H52.6497V17.378H53.8097V13.9053H52.6497V11.5854H51.4898V10.4255H48.0171V11.5854H46.8571V13.9053H45.6972V17.378H46.8571V19.6979H48.0171V20.8578Z" fill="#202020"/>
            <path d="M45.1416 3.47273H42.8288V1.15286H39.349V0H43.9816V1.15286H45.1416V3.47273ZM40.5089 22.0104H35.8762V20.8576H37.0291V10.4253H35.3033V9.26532H37.0291V3.47273H38.189V1.15286H39.349V9.26532H43.4017V10.4253H39.349V20.8576H40.5089V22.0104Z" fill="#202020"/>
            <path d="M31.2299 22.0107H25.4373V20.8578H24.2774V19.6979H23.1175V17.378H21.9646V13.9053H23.1175V11.5854H24.2774V10.4255H25.4373V9.26556H31.2299V10.4255H32.3899V11.5854H33.5498V13.9053H34.7097V17.378H33.5498V19.6979H32.3899V20.8578H31.2299V22.0107ZM26.5973 20.8578H30.07V19.6979H31.2299V17.378H32.3899V13.9053H31.2299V10.4255H26.5973V11.5854H25.4373V13.9053H24.2774V17.378H25.4373V19.6979H26.5973V20.8578Z" fill="#202020"/>
            <path d="M20.2178 8.10526H19.0579V6.9524H17.9051V5.79246H16.7451V4.63253H9.79259V3.4726H19.0579V5.79246H20.2178V8.10526ZM9.79259 20.8575H7.47273V19.6975H6.31279V18.5376H5.15286V16.2177H4V9.26519H5.15286V6.9524H6.31279V5.79246H7.47273V4.63253H9.79259V5.79246H8.63266V6.9524H7.47273V9.26519H6.31279V16.2177H7.47273V18.5376H8.63266V19.6975H9.79259V20.8575ZM19.0579 22.0103H9.79259V20.8575H16.7451V19.6975H17.9051V18.5376H19.0579V17.3777H20.2178V19.6975H19.0579V22.0103Z" fill="#202020"/>
          </svg>
          <span className="text-xs font-mono text-[#202020]/60 border-l border-[#202020]/20 pl-3 hidden sm:inline">17y/o Student</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden min-[1000px]:flex items-center gap-3">
          <div className="relative flex h-[41px] items-center px-3 rounded-[8px] glass-pill-dark gap-1">
            <span className="text-[15px] font-[410] text-[#202020]/60 px-2 cursor-default font-mono">My Journey</span>
            <div className="w-[1px] h-4 bg-[#202020]/20 my-auto" />
            
            <a href="#projects" className="text-[15px] font-[410] text-[#202020] hover:text-black px-2 py-1 transition-colors">Projects & Bots</a>
            <div className="w-[1px] h-3 bg-[#202020]/20 my-auto" />
            <a href="#curriculum" className="text-[15px] font-[410] text-[#202020] hover:text-black px-2 py-1 transition-colors">Learning Chapters</a>
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
            <span>GitHub</span>
          </a>
        </nav>

        {/* Mobile trigger */}
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
          <span className="text-xs uppercase font-mono text-[#202020]/50">Portfolio Navigation</span>
          <div className="grid grid-cols-2 gap-2">
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="p-3 bg-[#F5F5F2] rounded-lg text-sm font-medium">Projects & Bots</a>
            <a href="#curriculum" onClick={() => setMobileMenuOpen(false)} className="p-3 bg-[#F5F5F2] rounded-lg text-sm font-medium">Learning Chapters</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="p-3 bg-[#F5F5F2] rounded-lg text-sm font-medium">Connect</a>
            <a href="https://github.com/akshaiganesh/drake" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="p-3 bg-[#202020] text-white rounded-lg text-sm font-medium">GitHub</a>
          </div>
        </div>
      )}
    </header>
  );
}
