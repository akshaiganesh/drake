import React, { useState } from 'react';
import { Cpu, Layers, Terminal, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function ToolsAndMatrix() {
  const tools = [
    { name: 'PYTORCH', level: 'Expert', type: 'Deep Learning', desc: 'Primary framework for building custom neural networks, loss functions, and autograd pipelines.' },
    { name: 'HUGGING FACE', level: 'Advanced', type: 'LLM & NLP', desc: 'Transformers library, Datasets, and PEFT / QLoRA fine-tuning workflows.' },
    { name: 'CUDA & TENSORRT', level: 'Intermediate', type: 'GPU Acceleration', desc: 'C++ CUDA kernels, FP16 quantization, and TensorRT engine optimization.' },
    { name: 'OPENCV & YOLOV8', level: 'Advanced', type: 'Computer Vision', desc: 'Image transformations, real-time object detection, segmentation, and optical flow.' },
    { name: 'QDRANT VECTOR DB', level: 'Advanced', type: 'RAG Infrastructure', desc: 'High-dimensional vector indexing, HNSW graphs, and semantic similarity search.' },
    { name: 'WEIGHTS & BIASES', level: 'Advanced', type: 'Experiment Tracking', desc: 'Hyperparameter tuning, loss landscape logging, and model artifact versioning.' },
    { name: 'PYTHON 3.12', level: 'Expert', type: 'Core Language', desc: 'Asynchronous concurrency, type hints, NumPy, Pandas, and Scientific computing.' },
    { name: 'DOCKER & VAST.AI', level: 'Intermediate', type: 'Cloud GPU Infra', desc: 'Containerizing ML workloads and deploying to cloud GPU instances (RTX 4090 / A100).' }
  ];

  const [hoveredTool, setHoveredTool] = useState(tools[0]);

  return (
    <section id="stack" className="w-full bg-[#0b0c10] py-20 md:py-28 border-b border-white/10 relative">
      <div className="w-full max-w-[1280px] mx-auto px-5 md:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-[760px] mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>AI / ML Framework Matrix</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-normal hero-gradient-text tracking-tight">
            Tech Stack & Frameworks
          </h2>
          <p className="mt-3 text-white/60 text-sm md:text-base font-normal">
            Every layer of the machine learning stack — from mathematical modeling to GPU inference pipelines.
          </p>

          {/* 3 Pill Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <div className="px-3.5 py-1.5 rounded-full glass-pill border border-white/10 text-xs font-mono text-white/80 flex items-center gap-2">
              <CheckCircle2 size={14} className="text-cyan-400" />
              <span>PyTorch & CUDA First</span>
            </div>
            <div className="px-3.5 py-1.5 rounded-full glass-pill border border-white/10 text-xs font-mono text-white/80 flex items-center gap-2">
              <ShieldCheck size={14} className="text-emerald-400" />
              <span>Experimentation & W&B Tracking</span>
            </div>
            <div className="px-3.5 py-1.5 rounded-full glass-pill border border-white/10 text-xs font-mono text-white/80 flex items-center gap-2">
              <Terminal size={14} className="text-indigo-400" />
              <span>Clean & Modular Code</span>
            </div>
          </div>
        </div>

        {/* Matrix Container */}
        <div className="mt-12 p-6 md:p-10 rounded-2xl glass-pill border border-white/15 bg-black/40 backdrop-blur-xl shadow-2xl flex flex-col items-center">
          
          <div className="text-center max-w-[540px] mb-8">
            <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider">SKILL MATRIX</span>
            <h3 className="text-xl md:text-2xl font-semibold text-white mt-1">Interactive Tech Index</h3>
            <p className="text-xs text-white/60 mt-1 font-normal">
              Hover or tap any framework below to inspect usage & details.
            </p>
          </div>

          {/* Interactive Tool Badges */}
          <div className="flex flex-wrap justify-center gap-3 max-w-[840px]">
            {tools.map((t) => {
              const isSelected = hoveredTool.name === t.name;
              return (
                <button
                  key={t.name}
                  onMouseEnter={() => setHoveredTool(t)}
                  onClick={() => setHoveredTool(t)}
                  className={`px-4 py-2.5 rounded-xl font-mono text-xs font-semibold tracking-wider transition-all border ${
                    isSelected
                      ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white border-cyan-400 scale-105 shadow-lg shadow-cyan-500/25'
                      : 'bg-white/5 text-white/80 border-white/10 hover:border-cyan-400/40 hover:bg-white/10'
                  }`}
                >
                  {t.name}
                </button>
              );
            })}
          </div>

          {/* Detailed Info Card for Active Tool */}
          <div className="mt-8 p-5 rounded-xl bg-[#07080a] border border-white/15 text-xs font-mono text-white/90 max-w-[680px] w-full shadow-inner flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="font-semibold text-white text-sm">{hoveredTool.name}</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  {hoveredTool.type}
                </span>
              </div>
              <p className="text-white/70 font-sans text-xs leading-relaxed pt-1">
                {hoveredTool.desc}
              </p>
            </div>
            <div className="shrink-0 px-3 py-1 rounded bg-white/10 border border-white/15 text-cyan-400 font-mono text-[11px]">
              Proficiency: {hoveredTool.level}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
