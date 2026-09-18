import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Play, Brain, Sparkles, ArrowUpRight, Workflow, FileText, Zap, Code2, Server, Repeat } from 'lucide-react';

function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function FeatureCards() {
  const [activeProject, setActiveProject] = useState('ig-bot');
  const [isInferring, setIsInferring] = useState(false);
  const [inferenceLogs, setInferenceLogs] = useState([]);

  const projects = [
    {
      id: 'ig-bot',
      title: 'Instagram DM Auto-Reply Bot & Systemd Services',
      category: 'Bots & Linux Services',
      badge: '01 / Linux Daemon',
      icon: Server,
      color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      description: 'Built an Instagram DM auto-reply bot running as a background systemd service on Linux. Configured systemd unit files so it runs continuously 24/7 in the background without keeping a terminal open.',
      tags: ['Python', 'systemd', 'Linux', 'REST APIs', 'Instagram API', 'Background Daemon'],
      logs: [
        '⚙️ systemctl status ig-autoreply.service ➔ Active (running)',
        '📩 Listening for new Instagram DM webhook events...',
        '🧠 Processing message payload & evaluating response logic...',
        '⚡ Replying with automated response via API in 180ms...',
        '✅ Background daemon healthy. RAM usage: 34 MB.'
      ]
    },
    {
      id: 'n8n-automation',
      title: 'n8n Workflows & Python Automations',
      category: 'Automation & APIs',
      badge: '02 / Workflows',
      icon: Workflow,
      color: 'bg-amber-50 text-amber-700 border-amber-200',
      description: 'Created automated pipelines combining n8n nodes, Telegram bots, HTTP webhooks, and custom Python scripts to connect tools, process data, and eliminate manual tasks.',
      tags: ['n8n', 'Python', 'Telegram API', 'Webhooks', 'REST APIs', 'Automation'],
      logs: [
        '⚡ Webhook trigger received from Telegram bot...',
        '⚙️ n8n executing custom Python data transformation node...',
        '📡 Sending processed output to external API endpoint...',
        '📝 Syncing result to database & notifying channel...',
        '✅ Workflow completed in 240ms.'
      ]
    },
    {
      id: 'local-ai',
      title: 'Local AI Models & Fine-Tuning Experiments',
      category: 'AI / ML & Local Models',
      badge: '03 / Under The Hood',
      icon: Brain,
      color: 'bg-blue-50 text-blue-700 border-blue-200',
      description: 'Moving beyond basic prompts to understand model architecture. Experimenting with Ollama, LM Studio, LoRA adapters, PyTorch, and local model inference on my own hardware.',
      tags: ['Ollama', 'LM Studio', 'LoRA', 'PyTorch', 'Transformers', 'CUDA'],
      logs: [
        '🦙 Ingesting Llama-3-8B GGUF via Ollama local runtime...',
        '⚡ Allocating VRAM & loading weights to GPU core...',
        '🧠 Running prompt with custom context & temperature 0.7...',
        '📊 Local inference speed: 42 tokens/sec...',
        '✅ Output generated locally without cloud dependency.'
      ]
    },
    {
      id: 'second-brain',
      title: 'Notion & Obsidian Knowledge Vault Sync',
      category: 'Developer Tooling',
      badge: '04 / Knowledge Vault',
      icon: FileText,
      color: 'bg-purple-50 text-purple-700 border-purple-200',
      description: 'Python scripts bridging Notion databases with local Obsidian Markdown notes. Automatically organizes research notes, code snippets, and study logs into my second brain vault.',
      tags: ['Notion API', 'Obsidian', 'Python', 'Markdown', 'Git Workflow'],
      logs: [
        '📚 Fetching modified notes from Notion API...',
        '🔄 Converting blocks to GitHub-flavored Markdown...',
        '📂 Writing files into Obsidian /Tech-Vault directory...',
        '🏷️ Updating internal bi-directional links [[LoRA-Fine-Tuning]]...',
        '✅ Knowledge vault updated: 14 notes synced.'
      ]
    }
  ];

  const currentProj = projects.find(p => p.id === activeProject) || projects[0];

  const handleRunInference = () => {
    setIsInferring(true);
    setInferenceLogs([]);

    currentProj.logs.forEach((log, index) => {
      setTimeout(() => {
        setInferenceLogs(prev => [...prev, log]);
        if (index === currentProj.logs.length - 1) {
          setIsInferring(false);
        }
      }, (index + 1) * 500);
    });
  };

  return (
    <div id="hermes" className="w-full bg-[#FBFBF8]">

      {/* HERMES SPOTLIGHT */}
      <section className="w-full py-16 md:py-24 border-b border-[#202020]/10">
        <div className="w-full max-w-[1280px] mx-auto px-5 md:px-8">
          <div
            className="rounded-3xl border border-white/10 p-8 md:p-14 shadow-2xl relative overflow-hidden min-h-[400px] flex items-end"
            style={{
              backgroundImage: 'url(/hermes-bg.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center top',
            }}
          >
            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20 rounded-3xl" />

            {/* Content sits above overlay */}
            <div className="relative z-10 max-w-[720px]">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/80 font-mono text-xs mb-5 backdrop-blur-sm">
                <Zap className="w-3.5 h-3.5" />
                <span>Personal AI Assistant</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-normal text-white tracking-tight leading-tight">
                Hermes runs on my server.<br />
                <span className="font-semibold">She works for me, always on.</span>
              </h2>

              <p className="mt-4 text-white/75 text-base md:text-lg leading-relaxed font-normal">
                Hermes is my personal AI assistant — not just a chat tool, but an agent that runs across my home server, handles tasks, manages workflows, and assists with code. She operates in the background so I don't have to.
              </p>

              <p className="mt-3 text-white/55 text-sm md:text-base leading-relaxed font-normal">
                Built to run persistently as a background service, Hermes bridges my automation stack — connecting with n8n workflows, Python scripts, and APIs to actually get things done while I focus on building.
              </p>

              <div className="mt-7 grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-xs text-white/70">
                <div className="p-2.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm">
                  <span className="block font-semibold text-white">Always Running</span>
                  <span className="text-[10px]">systemd service, 24/7</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm">
                  <span className="block font-semibold text-white">Server-Side</span>
                  <span className="text-[10px]">Runs on my laptop server</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm col-span-2 sm:col-span-1">
                  <span className="block font-semibold text-white">Workflow-Connected</span>
                  <span className="text-[10px]">n8n, Python, APIs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🛠️ PROJECTS & EXPERIMENTS SHOWCASE SECTION 🛠️ */}
      <section id="projects" className="w-full py-20 md:py-28 border-b border-[#202020]/10">
        <div className="w-full max-w-[1280px] mx-auto px-5 md:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col items-center text-center max-w-[680px] mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#202020]/5 border border-[#202020]/10 text-[#202020] font-mono text-xs mb-3">
              <Code2 className="w-3.5 h-3.5" />
              <span>Things I Actually Build</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-normal text-[#202020] tracking-tight">
              Build ➔ Break ➔ Fix ➔ Learn
            </h2>
            <p className="mt-3 text-[#202020]/60 text-sm md:text-base font-normal">
              I learn best by making things. I take an idea, build it, see what breaks, and understand why it works.
            </p>
          </div>

          {/* Project Selector Tabs */}
          <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-10 no-scrollbar justify-start md:justify-center">
            {projects.map((p) => {
              const Icon = p.icon;
              const isActive = activeProject === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => {
                    setActiveProject(p.id);
                    setInferenceLogs([]);
                  }}
                  className={`shrink-0 px-4 py-3 rounded-xl font-medium text-xs md:text-sm transition-all flex items-center gap-2 border ${
                    isActive
                      ? 'bg-[#202020] text-[#FBFBF8] border-[#202020] shadow-md scale-[1.02]'
                      : 'bg-[#F5F5F2] text-[#202020]/80 border-[#202020]/10 hover:border-[#202020]/30 hover:bg-[#eaeaea]'
                  }`}
                >
                  <Icon size={16} />
                  <span>{p.title}</span>
                </button>
              );
            })}
          </div>

          {/* Project Card Showcase Box */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProj.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch rounded-2xl bg-[#F5F5F2] p-6 md:p-10 border border-[#202020]/10 shadow-lg"
            >
              
              {/* Left Column: Project Overview */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-mono px-3 py-1 rounded-full border ${currentProj.color}`}>
                      {currentProj.badge}
                    </span>
                    <span className="text-xs font-mono text-[#202020]/40">{currentProj.category}</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-semibold text-[#202020] mb-3">
                    {currentProj.title}
                  </h3>

                  <p className="text-[#202020]/75 text-sm md:text-base leading-relaxed mb-6 font-normal">
                    {currentProj.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {currentProj.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-white border border-[#202020]/10 text-[#202020] font-mono text-xs font-medium shadow-2xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#202020]/10">
                  <button
                    onClick={handleRunInference}
                    disabled={isInferring}
                    className="cta-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs md:text-sm font-medium transition-all disabled:opacity-50"
                  >
                    <Play className={`w-4 h-4 text-[#FBFBF8] ${isInferring ? 'animate-spin' : ''}`} />
                    <span>{isInferring ? 'Simulating Service...' : 'Simulate Service'}</span>
                  </button>

                  <a
                    href="https://github.com/akshaiganesh/drake"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs md:text-sm font-medium text-[#202020] bg-white border border-[#202020]/15 hover:bg-[#F5F5F2] transition-all shadow-2xs"
                  >
                    <GithubIcon className="w-4 h-4 text-[#202020]" />
                    <span>View Code</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#202020]/50" />
                  </a>
                </div>
              </div>

              {/* Right Column: Terminal Simulator Box */}
              <div className="lg:col-span-6 rounded-xl bg-white border border-[#202020]/10 p-5 flex flex-col justify-between min-h-[300px] shadow-sm font-mono">
                
                {/* Terminal Header */}
                <div className="flex items-center justify-between border-b border-[#202020]/10 pb-3 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    </div>
                    <span className="text-xs text-[#202020]/60 ml-2 font-mono">
                      service_runner.py
                    </span>
                  </div>
                  <span className="text-[10px] text-emerald-800 border border-emerald-300 px-2 py-0.5 rounded bg-emerald-50">
                    Status: Active
                  </span>
                </div>

                {/* Terminal Output Stream */}
                <div className="flex-1 overflow-y-auto max-h-[220px] space-y-2 text-xs text-[#202020] py-2">
                  {inferenceLogs.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-center py-8 text-[#202020]/40">
                      <Terminal className="w-8 h-8 mb-2 text-[#202020]/30 animate-pulse" />
                      <p className="text-xs">Click "Simulate Service" to test this project in action.</p>
                    </div>
                  ) : (
                    inferenceLogs.map((log, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-start gap-2 leading-relaxed text-[#202020]"
                      >
                        <span className="text-[#202020]/40 select-none">&gt;</span>
                        <span>{log}</span>
                      </motion.div>
                    ))
                  )}
                </div>

                {/* Terminal Footer Info */}
                <div className="pt-3 border-t border-[#202020]/10 flex items-center justify-between text-[11px] text-[#202020]/50 font-mono">
                  <span>Mindset: Learn by Doing</span>
                  <span>Linux + systemd</span>
                </div>

              </div>

            </motion.div>
          </AnimatePresence>

        </div>
      </section>
    </div>
  );
}
