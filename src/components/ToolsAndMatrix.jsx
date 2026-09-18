import React, { useState } from 'react';
import { Cpu, Terminal, CheckCircle2, ShieldCheck } from 'lucide-react';

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
    <section id="stack" className="w-full bg-[#FBFBF8] py-20 md:py-28 border-b border-[#202020]/10">
      <div className="w-full max-w-[1280px] mx-auto px-5 md:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-[760px] mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#202020]/5 border border-[#202020]/10 text-[#202020] font-mono text-xs mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>AI / ML Framework Matrix</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-normal text-[#202020] tracking-tight">
            Tech Stack & Frameworks
          </h2>
          <p className="mt-3 text-[#202020]/60 text-sm md:text-base font-normal">
            Every layer of the machine learning stack — from mathematical modeling to GPU inference pipelines.
          </p>

          {/* 3 Pill Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <div className="px-3.5 py-1.5 rounded-full bg-[#F5F5F2] border border-[#202020]/10 text-xs font-mono text-[#202020] flex items-center gap-2">
              <CheckCircle2 size={14} className="text-emerald-600" />
              <span>PyTorch & CUDA First</span>
            </div>
            <div className="px-3.5 py-1.5 rounded-full bg-[#F5F5F2] border border-[#202020]/10 text-xs font-mono text-[#202020] flex items-center gap-2">
              <ShieldCheck size={14} className="text-blue-600" />
              <span>Experimentation & W&B Tracking</span>
            </div>
            <div className="px-3.5 py-1.5 rounded-full bg-[#F5F5F2] border border-[#202020]/10 text-xs font-mono text-[#202020] flex items-center gap-2">
              <Terminal size={14} className="text-purple-600" />
              <span>Clean & Modular Code</span>
            </div>
          </div>
        </div>

        {/* Matrix Container */}
        <div className="mt-12 p-6 md:p-10 rounded-2xl bg-[#F5F5F2] border border-[#202020]/10 shadow-sm flex flex-col items-center">
          
          <div className="text-center max-w-[540px] mb-8">
            <span className="text-xs font-mono text-[#202020]/50 font-semibold uppercase tracking-wider">SKILL MATRIX</span>
            <h3 className="text-xl md:text-2xl font-semibold text-[#202020] mt-1">Interactive Tech Index</h3>
            <p className="text-xs text-[#202020]/60 mt-1 font-normal">
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
                      ? 'bg-[#202020] text-[#FBFBF8] border-[#202020] scale-105 shadow-md'
                      : 'bg-white text-[#202020]/80 border-[#202020]/10 hover:border-[#202020]/30 hover:bg-[#F5F5F2]'
                  }`}
                >
                  {t.name}
                </button>
              );
            })}
          </div>

          {/* Detailed Info Card for Active Tool */}
          <div className="mt-8 p-5 rounded-xl bg-white border border-[#202020]/10 text-xs font-mono text-[#202020] max-w-[680px] w-full shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-semibold text-[#202020] text-sm">{hoveredTool.name}</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-[#F5F5F2] text-[#202020]/70 border border-[#202020]/10">
                  {hoveredTool.type}
                </span>
              </div>
              <p className="text-[#202020]/70 font-sans text-xs leading-relaxed pt-1">
                {hoveredTool.desc}
              </p>
            </div>
            <div className="shrink-0 px-3 py-1 rounded bg-[#F5F5F2] border border-[#202020]/10 text-[#202020] font-mono text-[11px]">
              Proficiency: {hoveredTool.level}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
