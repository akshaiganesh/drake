import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import OrchestrationPlatform from './components/OrchestrationPlatform';
import ProductWorkflows from './components/ProductWorkflows';
import CompanyGuide from './components/CompanyGuide';
import ToolsAndMatrix from './components/ToolsAndMatrix';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FBFBF8] text-[#202020] flex flex-col font-sans selection:bg-[#202020] selection:text-[#FBFBF8]">
      {/* Header */}
      <Header />

      {/* Main Sections matching cofounder.co */}
      <main className="flex-1">
        <Hero />
        <SocialProof />
        <OrchestrationPlatform />
        <ProductWorkflows />
        <CompanyGuide />
        <ToolsAndMatrix />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
