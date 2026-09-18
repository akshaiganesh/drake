import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, TrendingUp, Sparkles, Paintbrush, Coins, Cpu, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export default function OrchestrationWheel() {
  const agents = [
    {
      id: 'engineering',
      name: 'Engineering Agent',
      icon: Code2,
      role: 'Full-stack Dev & Infra',
      status: 'Active',
      color: '#3B82F6',
      desc: 'Writes production-ready code, runs test suites, manages CI/CD pipelines, and deploys cloud services automatically.',
      metric: '48 PRs Merged / wk',
      tasks: ['Refactoring auth middleware', 'Optimizing database indices', 'Running end-to-end Cypress tests']
    },
    {
      id: 'sales',
      name: 'Sales Workflows',
      icon: TrendingUp,
      role: 'Outbound & Deal Closing',
      status: 'Active',
      color: '#10B981',
      desc: 'Prospects ICP accounts, drafts targeted personalized email campaigns, books qualified demos, and logs CRM activities.',
      metric: '$42K Pipeline Added',
      tasks: ['Enriching 120 Enterprise leads', 'Sending follow-up emails', 'Drafting custom proposal deck']
    },
    {
      id: 'marketing',
      name: 'Marketing Workflows',
      icon: Sparkles,
      role: 'Content & Acquisition',
      status: 'Active',
      color: '#A855F7',
      desc: 'Generates SEO blog articles, social copy, product launch campaigns, and analyzes user funnel conversion analytics.',
      metric: '+140% Web Traffic',
      tasks: ['Publishing product updates on X', 'Generating campaign graphics', 'A/B testing landing page copy']
    },
    {
      id: 'design',
      name: 'Design Support',
      icon: Paintbrush,
      role: 'UI/UX & Brand Assets',
      status: 'Active',
      color: '#F43F5E',
      desc: 'Creates component design systems, vector logos, hero illustrations, export assets, and ensures brand consistency.',
      metric: '100% Brand Compliant',
      tasks: ['Updating design tokens in Figma', 'Exporting dark mode icon set', 'Creating social hero banners']
    },
    {
      id: 'finance',
      name: 'Finance Workflows',
      icon: Coins,
      role: 'Billing & Cost Control',
      status: 'Active',
      color: '#EAB308',
      desc: 'Monitors cloud spending, forecasts monthly burn, manages recurring subscription invoices, and automates tax reports.',
      metric: '34% Cloud Cost Saved',
      tasks: ['Auditing unattached AWS volumes', 'Generating monthly P&L statement', 'Reconciling Stripe payouts']
    },
    {
      id: 'operations',
      name: 'Operations Workflows',
      icon: Cpu,
      role: 'Compliance & Support',
      status: 'Active',
      color: '#06B6D4',
      desc: 'Coordinates cross-agent tasks, manages SOC2 security compliance policies, and handles customer tier-1 tickets.',
      metric: '100% Audit Readiness',
      tasks: ['Fulfilling customer support tickets', 'Verifying SOC2 policy compliance', 'Scheduling agent cron schedules']
    }
  ];

  const [selectedAgent, setSelectedAgent] = useState(agents[0]);

  return (
    <section id="orchestration-platform" className="w-full bg-[#0e0f12] py-24 border-b border-white/5 relative overflow-hidden">
      
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="w-full max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-mono text-white/70 mb-4">
            <Zap size={14} className="text-amber-400" />
            <span>Agent Orchestration Core</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal leading-tight tracking-tight text-white">
            Cofounder is an agent orchestration platform designed to help you run an entire business
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/60">
            Click on any agent node below to inspect real-time autonomous execution, task queues, and performance metrics.
          </p>
        </div>

        {/* Interactive Layout: Grid of Agents + Detailed Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left / Center Node Graph Visual */}
          <div className="lg:col-span-7 flex flex-col items-center">
            
            {/* Circular Orbit Display */}
            <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
              
              {/* Outer Orbit Line */}
              <div className="absolute inset-4 rounded-full border border-dashed border-white/15 animate-spin-slow pointer-events-none" style={{ animationDuration: '60s' }} />

              {/* Central Core Hub */}
              <div className="z-20 w-36 h-36 rounded-full glass-pill border border-white/20 flex flex-col items-center justify-center p-4 text-center shadow-2xl bg-[#0b0c10]/90">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-1 text-white">
                  <ShieldCheck size={22} className="text-amber-400" />
                </div>
                <span className="text-xs font-mono font-semibold text-white">Cofounder Core</span>
                <span className="text-[10px] font-mono text-emerald-400 mt-0.5">Orchestrator v2.4</span>
              </div>

              {/* Radial Nodes */}
              {agents.map((agent, index) => {
                const total = agents.length;
                const angle = (index * (360 / total)) * (Math.PI / 180);
                const radius = 175; // px offset from center
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                const isSelected = selectedAgent.id === agent.id;

                const Icon = agent.icon;

                return (
                  <button
                    key={agent.id}
                    onClick={() => setSelectedAgent(agent)}
                    style={{
                      transform: `translate(${x}px, ${y}px)`
                    }}
                    className={`absolute z-30 group flex flex-col items-center transition-all duration-300 ${
                      isSelected ? 'scale-110 z-40' : 'hover:scale-105'
                    }`}
                  >
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-all shadow-xl backdrop-blur-xl ${
                        isSelected
                          ? 'bg-white text-black border-white shadow-2xl ring-4 ring-white/20'
                          : 'bg-[#16181d] text-white/80 border-white/10 group-hover:border-white/40'
                      }`}
                      style={{
                        borderColor: isSelected ? agent.color : undefined
                      }}
                    >
                      <Icon size={24} style={{ color: isSelected ? agent.color : undefined }} />
                    </div>

                    <span className={`mt-2 text-xs font-mono font-medium px-2 py-0.5 rounded-full transition-all ${
                      isSelected ? 'bg-white/20 text-white' : 'text-white/60 group-hover:text-white'
                    }`}>
                      {agent.name.split(' ')[0]}
                    </span>
                  </button>
                );
              })}
            </div>

          </div>

          {/* Right Inspector Box */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedAgent.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="glass-pill p-6 rounded-2xl border border-white/15 bg-[#12141a]/90 shadow-2xl flex flex-col gap-5"
              >
                
                {/* Agent Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="p-3 rounded-xl bg-white/5 border border-white/10"
                      style={{ color: selectedAgent.color }}
                    >
                      <selectedAgent.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{selectedAgent.name}</h3>
                      <span className="text-xs font-mono text-white/50">{selectedAgent.role}</span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {selectedAgent.status}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-white/70 leading-relaxed font-normal">
                  {selectedAgent.desc}
                </p>

                {/* Highlight Metric */}
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-white/50 uppercase">Performance Metric</span>
                  <span className="text-sm font-mono font-semibold text-white" style={{ color: selectedAgent.color }}>
                    {selectedAgent.metric}
                  </span>
                </div>

                {/* Active Task Queue */}
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-white/40">Live Task Queue</span>
                  <div className="flex flex-col gap-2">
                    {selectedAgent.tasks.map((task, i) => (
                      <div key={i} className="p-2.5 rounded-lg bg-black/40 border border-white/5 flex items-center gap-2 text-xs font-mono text-white/80">
                        <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                        <span className="truncate">{task}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="w-full mt-2 py-2.5 rounded-xl glass-pill-btn text-xs font-mono text-white/90 hover:text-white transition-all text-center">
                  Configure {selectedAgent.name} Workflows →
                </button>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
