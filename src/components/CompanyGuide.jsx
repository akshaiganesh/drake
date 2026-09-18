import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Sparkles, ExternalLink } from 'lucide-react';

export default function CompanyGuide() {
  const [activeBook, setActiveBook] = useState(null);

  const books = [
    {
      id: 'chap-1',
      chapter: 'I',
      num: 'Chapter 1',
      title: 'ML & Math Foundations',
      subtitle: 'Linear Algebra, Probability, Calculus & Convex Optimization',
      image: '/books-covers/UI 04/Frame 2147239727test-img-2.png',
      topics: ['Matrix Decomposition (SVD)', 'Gradient Descent', 'Probabilistic Models']
    },
    {
      id: 'chap-2',
      chapter: 'II',
      num: 'Chapter 2',
      title: 'Deep Learning & Vision',
      subtitle: 'Convolutional Nets, ResNets & Visual Transformers (ViT)',
      image: '/books-covers/UI 04/Frame 2147239728.png',
      topics: ['CNN Architectures', 'Object Detection (YOLO)', 'Backpropagation']
    },
    {
      id: 'chap-3',
      chapter: 'III',
      num: 'Chapter 3',
      title: 'Transformers & LLMs',
      subtitle: 'Attention Mechanism, QLoRA Fine-tuning & RAG Pipelines',
      image: '/books-covers/UI 04/Frame 2147239727test-img.png',
      topics: ['Multi-Head Attention', 'FlashAttention', 'PEFT & QLoRA']
    },
    {
      id: 'chap-4',
      chapter: 'IV',
      num: 'Chapter 4',
      title: 'AI Systems & CUDA',
      subtitle: 'TensorRT Acceleration, CUDA Kernels & Distributed GPU',
      image: '/books-covers/UI 04/Frame 2147239727.png',
      topics: ['CUDA C++ Programming', 'TensorRT Optimization', 'Distributed Data Parallel']
    }
  ];

  return (
    <section id="curriculum" className="w-full bg-[#0b0c10] py-24 border-b border-white/10 relative overflow-hidden">
      
      {/* Background Decor Artwork */}
      <div className="absolute inset-0 pointer-events-none opacity-20 flex justify-center">
        <img
          src="/decor/behind the books.png"
          alt="Behind the books decor"
          className="h-full w-full max-w-[1400px] object-cover object-center"
        />
      </div>

      <div className="w-full max-w-[1280px] mx-auto px-5 md:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-[680px] mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 font-mono text-xs mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>AI Curriculum & Learning Chapters</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-normal hero-gradient-text tracking-tight">
            Curriculum & Study Playbook
          </h2>
          <p className="mt-3 text-white/60 text-sm md:text-base">
            Mastering Artificial Intelligence layer by layer — from foundational mathematics to high-performance CUDA engineering.
          </p>
        </div>

        {/* 4 Interactive 3D Book Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.map((book) => (
            <motion.div
              key={book.id}
              whileHover={{ y: -8, scale: 1.02 }}
              onMouseEnter={() => setActiveBook(book.id)}
              onMouseLeave={() => setActiveBook(null)}
              className="rounded-2xl glass-pill p-6 border border-white/15 bg-black/40 backdrop-blur-xl flex flex-col justify-between group transition-all duration-300 shadow-xl relative overflow-hidden"
            >
              {/* Background card gradient highlight on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div>
                {/* Chapter Metadata Header */}
                <div className="flex items-center justify-between font-mono text-xs text-white/50 mb-4 pb-2 border-b border-white/10">
                  <span className="text-cyan-400 font-semibold">{book.num}</span>
                  <span>{book.chapter}</span>
                </div>

                {/* 3D Book Cover Image Container */}
                <div className="w-full aspect-[4/5] mb-5 rounded-xl overflow-hidden bg-black/60 border border-white/10 p-2 flex items-center justify-center relative group-hover:border-cyan-400/40 transition-colors shadow-2xl">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-contain rounded-lg transform group-hover:scale-105 group-hover:rotate-1 transition-transform duration-500 drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                    <span className="text-[11px] font-mono text-cyan-300 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> Tap to view topics
                    </span>
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                  {book.title}
                </h3>
                <p className="text-xs text-white/60 mt-2 font-normal leading-relaxed">
                  {book.subtitle}
                </p>
              </div>

              {/* Topics Bullet List */}
              <div className="mt-6 pt-4 border-t border-white/10 space-y-1.5">
                {book.topics.map((topic, i) => (
                  <div key={i} className="flex items-center gap-2 text-[11px] font-mono text-white/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80" />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
