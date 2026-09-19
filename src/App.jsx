import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeatureCards from './components/FeatureCards';
import LaptopServer from './components/LaptopServer';
import CompanyGuide from './components/CompanyGuide';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FBFBF8] text-[#202020] flex flex-col font-sans selection:bg-[#202020] selection:text-[#FBFBF8] overflow-x-hidden">
      {/* Navigation Header */}
      <Header />

      {/* Main Portfolio Sections */}
      <main className="flex-1">
        <Hero />
        <LaptopServer />
        <FeatureCards />
        <CompanyGuide />
      </main>

      {/* Interactive Bottom Holo Card & Footer */}
      <Footer />
    </div>
  );
}
