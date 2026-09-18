import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Play, Cpu, Brain, Eye, Volume2, Sparkles, ArrowUpRight } from 'lucide-react';

function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function FeatureCards() {
  const [activeProject, setActiveProject] = useState('llm-rag');
  const [isInferring, setIsInferring] = useState(false);
  const [inferenceLogs, setInferenceLogs] = useState([]);

  const projects = [
    {
      id: 'llm-rag',
      title: 'Agentic RAG & Fine-tuned LLM',
      category: 'NLP & Large Language Models',
      badge: '01 / RAG & Agents',
      icon: Brain,
      color: 'bg-blue-50 text-blue-700 border-blue-200',
      description: 'Built a specialized Retrieval-Augmented Generation (RAG) system with a fine-tuned Llama-3 8B model using QLoRA. Capable of multi-step document reasoning, vector search via Qdrant, and tool use.',
      tags: ['PyTorch', 'HuggingFace', 'LangChain', 'Qdrant', 'QLoRA', 'Python'],
      logs: [
        '🔍 Embedding query with BGE-large-en-v1.5...',
        '📚 Searching Qdrant Vector DB (Cosine similarity: 0.942)...',
        '🧠 Passing 4 retrieved context chunks to Llama-3-8B-Instruct...',
        '⚡ Executing Python code tool for math computation...',
        '✅ Generated accurate answer with citation sources [Doc 3, p. 14]!'
      ]
    },
    {
      id: 'vision-tracking',
      title: 'Real-Time Edge Object Detection',
      category: 'Computer Vision & Deep Learning',
      badge: '02 / Perception',
      icon: Eye,
      color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      description: 'High-throughput computer vision pipeline using YOLOv8 + DeepSORT for multi-object tracking. Optimized TensorRT engine running at 120+ FPS on GPU with minimal latency.',
      tags: ['PyTorch', 'YOLOv8', 'TensorRT', 'OpenCV', 'CUDA', 'C++'],
      logs: [
        '📹 Ingesting RTSP video stream @ 1080p 60FPS...',
        '⚡ TensorRT FP16 engine initialized on CUDA core 0...',
        '🎯 Detected: 14 Vehicles, 6 Pedestrians, 2 Bicycles (Avg Conf: 0.96)',
        '🔄 DeepSORT Kalman filter updated track IDs [ID #402, ID #403]',
        '✅ Outputting bounding boxes and trajectory metadata.'
      ]
    },
    {
      id: 'audio-diff',
      title: 'Neural Audio & Speech Synthesis',
      category: 'Generative AI & Audio',
      badge: '03 / Generative AI',
      icon: Volume2,
      color: 'bg-purple-50 text-purple-700 border-purple-200',
      description: 'Latent diffusion model for acoustic spectrum generation and zero-shot voice synthesis. Trained custom HiFi-GAN vocoder for crystal-clear 44.1kHz audio reconstruction.',
      tags: ['PyTorch', 'Diffusion Models', 'HiFi-GAN', 'Librosa', 'WandB'],
      logs: [
        '🎵 Extracting Mel-spectrogram features from 5 sec audio clip...',
        '🌀 Running 50 DDPIM diffusion sampling steps in latent space...',
        '🎛️ HiFi-GAN vocoder converting spectrogram to raw PCM audio...',
        '📊 PESQ speech quality score evaluated: 4.12 / 4.5',
        '✅ Audio waveform generated successfully.'
      ]
    },
    {
      id: 'rl-drone',
      title: 'Autonomous RL Flight Controller',
      category: 'Reinforcement Learning',
      badge: '04 / RL & Control',
      icon: Cpu,
      color: 'bg-amber-50 text-amber-700 border-amber-200',
      description: 'Proximal Policy Optimization (PPO) agent trained in PyBullet physics simulation to stabilize quadcopter flight under turbulent wind conditions.',
      tags: ['PyTorch', 'PPO Algorithm', 'PyBullet', 'Gymnasium', 'NumPy'],
      logs: [
        '🚁 Spawning quadcopter state vector [position, velocity, orientation]...',
        '🌪️ Simulating 15 m/s turbulent wind disturbance...',
        '🧠 PPO actor-critic network predicting motor PWM duty cycles...',
        '🎯 Reward function: Altitude drift < 0.02m (Episodic Return: +840)',
        '✅ Flight trajectory stabilized in 12ms reaction window.'
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
    <section id="projects" className="w-full bg-[#FBFBF8] py-20 md:py-28 border-b border-[#202020]/10">
      <div className="w-full max-w-[1280px] mx-auto px-5 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-[680px] mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#202020]/5 border border-[#202020]/10 text-[#202020] font-mono text-xs mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI/ML Projects Showcase</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-normal text-[#202020] tracking-tight">
            Hands-on AI & Deep Learning Projects
          </h2>
          <p className="mt-3 text-[#202020]/60 text-sm md:text-base font-normal">
            Explore interactive project demos, architectural details, and model outputs built with PyTorch, CUDA, and modern ML frameworks.
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

                {/* Tech Stack Tags */}
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
                  <span>{isInferring ? 'Running Model Inference...' : 'Run Interactive Demo'}</span>
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
                    model_eval.py --cuda
                  </span>
                </div>
                <span className="text-[10px] text-emerald-800 border border-emerald-300 px-2 py-0.5 rounded bg-emerald-50">
                  GPU 0: RTX 4090
                </span>
              </div>

              {/* Terminal Output Stream */}
              <div className="flex-1 overflow-y-auto max-h-[220px] space-y-2 text-xs text-[#202020] py-2">
                {inferenceLogs.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-8 text-[#202020]/40">
                    <Terminal className="w-8 h-8 mb-2 text-[#202020]/30 animate-pulse" />
                    <p className="text-xs">Click "Run Interactive Demo" to simulate live model inferencing.</p>
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
                <span>Status: {isInferring ? 'INFERRING...' : 'READY'}</span>
                <span>PyTorch 2.3 + CUDA 12.1</span>
              </div>

            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
