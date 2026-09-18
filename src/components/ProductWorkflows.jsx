import React, { useState } from 'react';
import { CheckCircle, AlertCircle, Mail, TrendingUp, Sparkles, Layers, ChevronRight } from 'lucide-react';

export default function ProductWorkflows() {
  const [activeStage, setActiveStage] = useState('1.0');

  const tasks = [
    { id: 1, name: 'Pick a Company Name', type: 'User task', status: 'Completed', stage: 'Idea stage 1/1' },
    { id: 2, name: 'Connect Product Context', type: 'User task', status: 'Completed', stage: 'Initial stage 0/3' },
    { id: 3, name: 'Incorporate LLC', type: 'Agent task', status: 'Requires approval', stage: 'Initial stage 0/3' },
    { id: 4, name: 'Setup Social Presence', type: 'Agent task', status: 'Pending', stage: 'Initial stage 0/3' },
    { id: 5, name: 'Buy Domain', type: 'Agent task', status: 'Pending', stage: 'Identity stage 0/4' },
    { id: 6, name: 'Logo & Brand Spec', type: 'User task', status: 'Pending', stage: 'Identity stage 0/4' },
    { id: 7, name: 'Open Bank Account', type: 'Agent task', status: 'Requires approval', stage: 'Identity stage 0/4' }
  ];

  return (
    <div id="product-workflows" className="w-full bg-[#FBFBF8] py-24 border-b border-[#E8E7E6]">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-wider text-[#202020]/50 block mb-2">Autonomous Workflows</span>
          <h2 className="text-3xl md:text-5xl font-normal leading-tight text-[#202020]">
            Keep building the product. Put Cofounder to work on the company.
          </h2>
          <p className="mt-4 text-base md:text-lg text-[#202020]/60 max-w-[650px] mx-auto">
            Start with the outcome you need. Cofounder brings the right company context and capabilities together, then keeps you in control of what goes live.
          </p>
        </div>

        {/* Stage Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          
          {/* Stage 1.0 */}
          <button
            onClick={() => setActiveStage('1.0')}
            className={`p-6 rounded-2xl text-left transition-all border ${
              activeStage === '1.0'
                ? 'bg-[#F5F5F2] border-black/20 shadow-md scale-[1.02]'
                : 'bg-white border-black/5 hover:bg-[#F5F5F2]/50'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono font-semibold text-[#202020]/60">1.0 — Launch</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
            </div>
            <h3 className="text-lg font-semibold text-[#202020]">Cofounder launches a company with you</h3>
            <p className="text-xs text-[#202020]/60 mt-2 leading-relaxed">
              Give Cofounder the product you built. It turns that context into positioning, brand, website, and launch materials.
            </p>
          </button>

          {/* Stage 2.0 */}
          <button
            onClick={() => setActiveStage('2.0')}
            className={`p-6 rounded-2xl text-left transition-all border ${
              activeStage === '2.0'
                ? 'bg-[#F5F5F2] border-black/20 shadow-md scale-[1.02]'
                : 'bg-white border-black/5 hover:bg-[#F5F5F2]/50'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono font-semibold text-[#202020]/60">2.0 — Grow</span>
              <span className="w-2 h-2 rounded-full bg-blue-500" />
            </div>
            <h3 className="text-lg font-semibold text-[#202020]">Cofounder finds the right customers</h3>
            <p className="text-xs text-[#202020]/60 mt-2 leading-relaxed">
              Cofounder researches the market, finds promising prospects, and runs email outreach.
            </p>
          </button>

          {/* Stage 3.0 */}
          <button
            onClick={() => setActiveStage('3.0')}
            className={`p-6 rounded-2xl text-left transition-all border ${
              activeStage === '3.0'
                ? 'bg-[#F5F5F2] border-black/20 shadow-md scale-[1.02]'
                : 'bg-white border-black/5 hover:bg-[#F5F5F2]/50'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono font-semibold text-[#202020]/60">3.0 — Operate</span>
              <span className="w-2 h-2 rounded-full bg-purple-500" />
            </div>
            <h3 className="text-lg font-semibold text-[#202020]">Cofounder keeps the business moving</h3>
            <p className="text-xs text-[#202020]/60 mt-2 leading-relaxed">
              Bring formation, analytics, support, and recurring company work into Cofounder.
            </p>
          </button>

        </div>

        {/* Display Container for Selected Stage */}
        <div className="rounded-2xl bg-[#F5F5F2] border border-black/10 p-8 shadow-sm">
          
          {activeStage === '1.0' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5">
                <span className="text-xs font-mono text-[#202020]/40 font-semibold block mb-2">STAGE 1.0 SPECIFICATION</span>
                <h3 className="text-2xl font-semibold text-[#202020]">Formation & Positioning Engine</h3>
                <p className="text-sm text-[#202020]/70 mt-3 leading-relaxed">
                  Everything Cofounder creates stays aligned to the same company story. 
                </p>

                <div className="grid grid-cols-2 gap-3 mt-6">
                  <div className="p-3 bg-white rounded-xl border border-black/5 text-xs font-medium text-[#202020]">1.1 Business positioning</div>
                  <div className="p-3 bg-white rounded-xl border border-black/5 text-xs font-medium text-[#202020]">1.2 Brand identity</div>
                  <div className="p-3 bg-white rounded-xl border border-black/5 text-xs font-medium text-[#202020]">1.3 Marketing website</div>
                  <div className="p-3 bg-white rounded-xl border border-black/5 text-xs font-medium text-[#202020]">1.4 Launch content</div>
                </div>
              </div>

              {/* Task Cards Stack */}
              <div className="lg:col-span-7 bg-white rounded-2xl p-6 border border-black/10 flex flex-col gap-3">
                <div className="flex items-center justify-between border-b border-black/5 pb-3">
                  <span className="text-xs font-mono font-semibold text-[#202020]">Cofounder Task Queue</span>
                  <span className="text-xs font-mono text-[#202020]/40">7 Tasks Active</span>
                </div>

                <div className="flex flex-col gap-2">
                  {tasks.map((t) => (
                    <div key={t.id} className="p-3 rounded-xl bg-[#FBFBF8] border border-black/5 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {t.status === 'Completed' ? (
                          <CheckCircle size={16} className="text-emerald-500" />
                        ) : t.status === 'Requires approval' ? (
                          <AlertCircle size={16} className="text-amber-500 animate-pulse" />
                        ) : (
                          <div className="w-4 h-4 rounded-full border border-black/20" />
                        )}
                        <span className="text-xs font-semibold text-[#202020]">{t.name}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-[#202020]/50">{t.type}</span>
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                          t.status === 'Requires approval'
                            ? 'bg-amber-100 text-amber-800 font-semibold'
                            : 'bg-black/5 text-[#202020]/60'
                        }`}>
                          {t.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeStage === '2.0' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5">
                <span className="text-xs font-mono text-[#202020]/40 font-semibold block mb-2">STAGE 2.0 OUTBOUND ENGINE</span>
                <h3 className="text-2xl font-semibold text-[#202020]">Customer Research & Outreach</h3>
                <p className="text-sm text-[#202020]/70 mt-3 leading-relaxed">
                  Research, outreach, and marketing stay fully coordinated in Cofounder.
                </p>

                <div className="grid grid-cols-2 gap-3 mt-6">
                  <div className="p-3 bg-white rounded-xl border border-black/5 text-xs font-medium text-[#202020]">2.1 Customer research</div>
                  <div className="p-3 bg-white rounded-xl border border-black/5 text-xs font-medium text-[#202020]">2.2 Prospect discovery</div>
                  <div className="p-3 bg-white rounded-xl border border-black/5 text-xs font-medium text-[#202020]">2.3 Email outreach</div>
                  <div className="p-3 bg-white rounded-xl border border-black/5 text-xs font-medium text-[#202020]">2.4 Newsletters</div>
                </div>
              </div>

              {/* Email Live Preview Box */}
              <div className="lg:col-span-7 bg-white rounded-2xl p-6 border border-black/10 flex flex-col gap-4">
                <div className="flex items-center justify-between border-b border-black/5 pb-3">
                  <div className="flex items-center gap-2">
                    <Mail size={16} className="text-blue-500" />
                    <span className="text-xs font-mono font-semibold text-[#202020]">Outbound Email Preview</span>
                  </div>
                  <span className="text-xs font-mono text-emerald-600 font-semibold">12% Open Rate</span>
                </div>

                <div className="p-4 rounded-xl bg-[#FBFBF8] border border-black/5 font-mono text-xs text-[#202020]/80 space-y-2">
                  <div><span className="text-[#202020]/40">To:</span> Sarah Chen sarah@acme.com</div>
                  <div><span className="text-[#202020]/40">From:</span> Tanner Holloway tanner.holloway@ridgepoint.io</div>
                  <div><span className="text-[#202020]/40">Subject:</span> Thought you could use Cofounder for Acme</div>
                  <hr className="border-black/5 my-2" />
                  <p className="text-[#202020]/90 leading-relaxed font-sans text-xs">
                    Hey Sarah, I’ve been following how quickly your team at Acme has been shipping, going from a single product to a full suite in under a year is seriously impressive...
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeStage === '3.0' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5">
                <span className="text-xs font-mono text-[#202020]/40 font-semibold block mb-2">STAGE 3.0 CONTINUOUS OPERATIONS</span>
                <h3 className="text-2xl font-semibold text-[#202020]">Analytics & Customer Operations</h3>
                <p className="text-sm text-[#202020]/70 mt-3 leading-relaxed">
                  The same Cofounder context keeps every part of the business moving together seamlessly.
                </p>
              </div>

              {/* Analytics Dash UI */}
              <div className="lg:col-span-7 bg-white rounded-2xl p-6 border border-black/10 grid grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-[#FBFBF8] border border-black/5">
                  <span className="text-[11px] font-mono text-[#202020]/40 block">SIGN UPS</span>
                  <span className="text-2xl font-mono font-bold text-[#202020] block mt-1">211</span>
                  <span className="text-xs font-mono text-emerald-600 font-semibold">+34%</span>
                </div>

                <div className="p-4 rounded-xl bg-[#FBFBF8] border border-black/5">
                  <span className="text-[11px] font-mono text-[#202020]/40 block">DAILY ACTIVE</span>
                  <span className="text-2xl font-mono font-bold text-[#202020] block mt-1">9,262</span>
                  <span className="text-xs font-mono text-emerald-600 font-semibold">+8%</span>
                </div>

                <div className="p-4 rounded-xl bg-[#FBFBF8] border border-black/5">
                  <span className="text-[11px] font-mono text-[#202020]/40 block">MONTHLY ACTIVE</span>
                  <span className="text-2xl font-mono font-bold text-[#202020] block mt-1">44,264</span>
                  <span className="text-xs font-mono text-emerald-600 font-semibold">+37%</span>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
