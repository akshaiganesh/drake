import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, HardDrive, Server, Zap, Monitor, Activity, Terminal } from 'lucide-react';

export default function LaptopServer() {
  const specs = [
    {
      icon: Cpu,
      title: 'Intel i7-9750H',
      subtitle: '2.60GHz',
    },
    {
      icon: Monitor,
      title: 'NVIDIA GTX 1650',
      subtitle: '4GB (Max-Q)',
    },
    {
      icon: Activity,
      title: '32GB RAM',
      subtitle: 'DDR4',
    },
    {
      icon: HardDrive,
      title: '1TB NVMe SSD',
      subtitle: '~468GB usable',
    },
    {
      icon: Zap,
      title: 'Running as a Server',
      subtitle: 'Automation • Bots • AI Experiments',
      highlight: true,
    }
  ];

  const serverServices = [
    { name: 'ig-autoreply.service', desc: 'Instagram DM Auto-Reply Bot Daemon', memory: '34 MB' },
    { name: 'n8n-automation.service', desc: 'n8n Webhook & Workflow Engine', memory: '142 MB' },
    { name: 'telegram-bot.service', desc: 'Python API & Telegram Bot Listener', memory: '28 MB' },
    { name: 'obsidian-vault-sync.service', desc: 'Notion ➔ Obsidian Markdown Sync', memory: '19 MB' }
  ];

  return (
    <section id="laptop-server" className="w-full bg-[#0B0C0E] text-white py-20 md:py-28 border-b border-[#222]">
      <div className="w-full max-w-[1280px] mx-auto px-5 md:px-8">
        
        {/* Main Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Tech Specs */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              {/* Index number */}
              <span className="font-mono text-xs font-semibold uppercase text-zinc-500 tracking-widest block mb-2">
                02
              </span>

              <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
                My Laptop
              </h2>

              <p className="mt-3 text-lg md:text-xl text-zinc-400 font-normal">
                Not just a laptop, it's my server.
              </p>

              {/* Hardware Specs Grid */}
              <div className="mt-8 space-y-3">
                {specs.map((spec, idx) => {
                  const Icon = spec.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.08 }}
                      viewport={{ once: true }}
                      className={`p-4 rounded-2xl border flex items-center justify-between transition-all ${
                        spec.highlight
                          ? 'bg-zinc-900/90 border-emerald-500/40 shadow-lg shadow-emerald-950/20'
                          : 'bg-zinc-900/60 border-zinc-800/80 hover:border-zinc-700'
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <div className={`p-2.5 rounded-xl ${spec.highlight ? 'bg-emerald-500/10 text-emerald-400' : 'bg-zinc-800 text-zinc-300'}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="block font-medium text-sm text-white font-mono">
                            {spec.title}
                          </span>
                          <span className="text-xs text-zinc-400 font-sans">
                            {spec.subtitle}
                          </span>
                        </div>
                      </div>
                      {spec.highlight && (
                        <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                          24/7 ONLINE
                        </span>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/* Cursive handwritten accent text */}
              <div className="mt-10 pt-6 border-t border-zinc-800/60 flex items-center justify-between">
                <div className="font-serif italic text-2xl text-zinc-400 tracking-wide select-none">
                  old laptop.<br />
                  <span className="text-zinc-200">new possibilities.</span>
                </div>
                <span className="text-xs font-mono text-zinc-500">
                  Linux 6.8 • systemd
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: HP OMEN Laptop Visual + Live Daemon Monitor */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            {/* OMEN Laptop Lid Graphic Card */}
            <div className="w-full rounded-3xl bg-gradient-to-b from-zinc-900 via-zinc-900/90 to-black border border-zinc-800 p-8 flex flex-col items-center justify-center relative overflow-hidden shadow-2xl group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
              
              {/* Laptop Lid Illustration */}
              <div className="w-full max-w-[340px] aspect-[16/10] rounded-2xl bg-zinc-950 border border-zinc-800 p-4 relative flex flex-col items-center justify-center shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                {/* OMEN Diamond Logo */}
                <div className="w-10 h-10 border-2 border-zinc-400 rotate-45 flex items-center justify-center mb-3 shadow-md bg-zinc-900">
                  <div className="w-4 h-4 bg-white/90" />
                </div>
                <span className="font-mono text-xs font-semibold text-zinc-400 tracking-widest uppercase">
                  OMEN BY HP
                </span>

                {/* Sticker Badges */}
                <div className="absolute bottom-3 left-4 px-2 py-0.5 rounded bg-zinc-900 border border-zinc-700 text-[10px] font-mono text-blue-400 shadow-xs">
                  &lt;/&gt;
                </div>
                <div className="absolute top-3 right-4 px-2 py-0.5 rounded bg-zinc-900 border border-zinc-700 text-[10px] font-mono text-amber-400 shadow-xs">
                  👻 GHOST
                </div>
                <div className="absolute bottom-3 right-4 px-2 py-0.5 rounded bg-zinc-900 border border-zinc-700 text-[10px] font-mono text-emerald-400 shadow-xs">
                  24/7 SERVER
                </div>
              </div>

              <div className="mt-4 text-center">
                <span className="text-xs font-mono text-zinc-400">Personal Home Lab Daemon</span>
              </div>
            </div>

            {/* Live Daemon Status Window */}
            <div className="w-full rounded-2xl bg-zinc-900/80 border border-zinc-800 p-5 font-mono shadow-xl backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-3">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-semibold text-white uppercase tracking-wider">
                    systemctl status daemons
                  </span>
                </div>
                <span className="flex items-center gap-1.5 text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Active 24/7
                </span>
              </div>

              <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1">
                {serverServices.map((service, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-zinc-950/70 border border-zinc-800/80 flex items-center justify-between text-xs">
                    <div>
                      <span className="font-bold text-white block">{service.name}</span>
                      <span className="text-[11px] text-zinc-400 font-sans">{service.desc}</span>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 whitespace-nowrap">
                      ● active
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
