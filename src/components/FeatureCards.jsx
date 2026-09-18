import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Play, Check, Sparkles, Layers, Rocket, Shield, ArrowRight } from 'lucide-react';

export default function FeatureCards() {
  const [activeTab, setActiveTab] = useState('start');
  const [promptText, setPromptText] = useState('Create a full-stack AI SaaS app with Next.js 15, Stripe billing, and dark mode UI');
  const [isBuilding, setIsBuilding] = useState(false);
  const [buildLogs, setBuildLogs] = useState([]);

  const handleSimulateBuild = () => {
    setIsBuilding(true);
    setBuildLogs([]);
    const logs = [
      '⚡ Initializing Cofounder Agent Swarm...',
      '🔍 Architecting system spec & DB schemas...',
      '💻 Writing React components & Tailwind styles...',
      '⚙️ Provisioning PostgreSQL DB on Supabase...',
      '💳 Wiring Stripe Webhooks & Subscription tiers...',
      '✅ Deployed live to production on Vercel!'
    ];

    logs.forEach((log, index) => {
      setTimeout(() => {
        setBuildLogs((prev) => [...prev, log]);
        if (index === logs.length - 1) {
          setIsBuilding(false);
        }
      }, (index + 1) * 600);
    });
  };

  const pillars = [
    {
      id: 'start',
      title: 'How to Start',
      badge: '01 / Roadmap',
      heading: 'Turn raw ideas into an executable AI company roadmap',
      desc: 'Cofounder evaluates market opportunity, generates product specifications, designs system architecture, and splits execution into agent task bundles.',
      icon: Sparkles
    },
    {
      id: 'build',
      title: 'How to Build',
      badge: '02 / Engineering',
      heading: 'Hand off code, UI design, and cloud infra to agents',
      desc: 'Engineering & Design agents write production-grade code, open pull requests, perform automated regression testing, and deploy updates continuously.',
      icon: Layers
    },
    {
      id: 'sell',
      title: 'How to Sell',
      badge: '03 / Outbound',
      heading: 'Automate sales outreach and customer acquisition',
      desc: 'Sales agents find ICP prospects, draft hyper-personalized emails, qualify leads via AI chat, and book sales calls straight into your calendar.',
      icon: Rocket
    },
    {
      id: 'scale',
      title: 'How to Scale',
      badge: '04 / Operations',
      heading: 'Automate finance, SOC2 compliance, and support',
      desc: 'Finance & Ops agents track revenue, optimize cloud bills by 30%+, manage vendor invoices, and maintain zero-trust security compliance.',
      icon: Shield
    }
  ];

  return (
    <section id="features" className="w-full bg-[#0b0c10] py-24 border-b border-white/5">
      <div className="w-full max-w-[1280px] mx-auto px-6">
        
        {/* Navigation Tabs for Pillars */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {pillars.map((p) => {
            const Icon = p.icon;
            const isActive = activeTab === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setActiveTab(p.id)}
                className={`px-5 py-3 rounded-xl font-medium text-sm transition-all flex items-center gap-2 ${
                  isActive
                    ? 'bg-white text-black shadow-lg scale-105'
                    : 'glass-pill text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <Icon size={16} />
                <span>{p.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Pillar Content Display */}
        {pillars.filter(p => p.id === activeTab).map((p) => (
          <div key={p.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <span className="text-xs font-mono text-amber-400 font-semibold uppercase tracking-wider mb-2">
                {p.badge}
              </span>
              <h3 className="text-3xl sm:text-4xl font-normal leading-tight text-white">
                {p.heading}
              </h3>
              <p className="mt-4 text-base text-white/70 leading-relaxed">
                {p.desc}
              </p>

              <div className="mt-8 flex items-center gap-4">
                <button
                  onClick={handleSimulateBuild}
                  disabled={isBuilding}
                  className="cta-btn inline-flex items-center gap-2 h-11 px-5 rounded-lg text-sm font-medium"
                >
                  <Play size={14} className="fill-current" />
                  <span>{isBuilding ? 'Agents Working...' : 'Simulate Agent Run'}</span>
                </button>

                <a href="#demo" className="text-xs font-mono text-white/50 hover:text-white transition-colors flex items-center gap-1">
                  <span>View Documentation</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>

            {/* Right Interactive Code Simulator */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl glass-pill border border-white/15 bg-[#12141a]/90 overflow-hidden shadow-2xl">
                
                {/* Window Header */}
                <div className="px-4 py-3 bg-white/[0.04] border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-xs font-mono text-white/40">Cofounder Agent Prompt Console</span>
                  <div className="w-12" />
                </div>

                {/* Prompt Box */}
                <div className="p-4 border-b border-white/10 bg-black/40">
                  <label className="text-[11px] font-mono text-white/40 block mb-1">PROMPT INSTRUCTION</label>
                  <input
                    type="text"
                    value={promptText}
                    onChange={(e) => setPromptText(e.target.value)}
                    className="w-full bg-transparent text-sm font-mono text-white outline-none focus:ring-0 border-none"
                  />
                </div>

                {/* Terminal Output */}
                <div className="p-5 min-h-[220px] font-mono text-xs flex flex-col justify-end gap-2 bg-black/60">
                  {buildLogs.length === 0 ? (
                    <div className="text-white/30 italic flex items-center gap-2">
                      <Terminal size={14} />
                      <span>Click "Simulate Agent Run" to launch Cofounder execution flow...</span>
                    </div>
                  ) : (
                    buildLogs.map((log, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-emerald-400 flex items-center gap-2"
                      >
                        <span>{log}</span>
                      </motion.div>
                    ))
                  )}
                </div>

              </div>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}
