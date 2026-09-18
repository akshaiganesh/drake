import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeatureCards from './components/FeatureCards';
import CompanyGuide from './components/CompanyGuide';
import ToolsAndMatrix from './components/ToolsAndMatrix';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0c10] text-[#E2E2DC] flex flex-col font-sans selection:bg-[#38bdf8] selection:text-[#0b0c10] overflow-x-hidden">
      {/* Navigation Header */}
      <Header />

      {/* Main Portfolio Sections */}
      <main className="flex-1">
        <Hero />
        <FeatureCards />
        <CompanyGuide />
        <ToolsAndMatrix />
      </main>

      {/* Interactive Bottom Holo Card & Footer */}
      <Footer />
    </div>
  );
}
