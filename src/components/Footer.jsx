import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#FBFBF8] text-[#202020] pt-20 pb-12 border-t border-[#E8E7E6]">
      <div className="w-full max-w-[1200px] mx-auto px-6 flex flex-col items-center">

        {/* Main CTA Section */}
        <div className="w-full rounded-3xl bg-[#F5F5F2] border border-black/10 p-12 md:p-16 text-center flex flex-col items-center justify-center mb-16 shadow-sm">
          <h2 className="text-3xl md:text-5xl font-normal text-[#202020] leading-tight max-w-[700px]">
            Run an entire company with AI agents
          </h2>
          <p className="mt-4 text-[#202020]/60 max-w-[500px] text-base">
            Cofounder is an agent orchestration platform designed to run an entire business.
          </p>
          <a
            href="https://app.cofounder.co"
            className="cta-btn mt-8 inline-flex items-center justify-center h-[46px] px-8 rounded-xl font-medium text-base tracking-wide"
          >
            Run a company
          </a>
        </div>

        {/* Navigation Links Grid */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-black/5 pt-12 pb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#202020]/40 block mb-4">How to</span>
            <ul className="space-y-2.5 text-sm text-[#202020]/70 font-medium">
              <li><a href="#how-to-start" className="hover:text-[#202020] transition-colors">How to start</a></li>
              <li><a href="#how-to-build" className="hover:text-[#202020] transition-colors">How to build</a></li>
              <li><a href="#how-to-sell" className="hover:text-[#202020] transition-colors">How to sell</a></li>
              <li><a href="#how-to-scale" className="hover:text-[#202020] transition-colors">How to scale</a></li>
            </ul>
          </div>

          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#202020]/40 block mb-4">Product</span>
            <ul className="space-y-2.5 text-sm text-[#202020]/70 font-medium">
              <li><a href="/" className="hover:text-[#202020] transition-colors">Homepage</a></li>
              <li><a href="#resources" className="hover:text-[#202020] transition-colors">Resources</a></li>
              <li><a href="#pricing" className="hover:text-[#202020] transition-colors">Pricing</a></li>
              <li><a href="#docs" className="hover:text-[#202020] transition-colors">Docs</a></li>
            </ul>
          </div>

          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#202020]/40 block mb-4">Company</span>
            <ul className="space-y-2.5 text-sm text-[#202020]/70 font-medium">
              <li><a href="#careers" className="hover:text-[#202020] transition-colors">Careers</a></li>
              <li><a href="#privacy" className="hover:text-[#202020] transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-[#202020] transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#202020]/40 block mb-4">Security</span>
            <p className="text-xs text-[#202020]/60 leading-relaxed font-mono">
              Automate with SOC 2 compliant security.
            </p>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between border-t border-black/5 pt-8 text-xs text-[#202020]/40 font-mono">
          <p>© 2026 The General Intelligence Company Of New York. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Design by Altalogy — Cofounder Drake Edition</p>
        </div>

      </div>
    </footer>
  );
}
