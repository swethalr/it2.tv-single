'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target } from 'lucide-react';
import { rankingRadarData } from '@/data/google-maps-local-seo';

const RankingRadar = () => {
  const data = rankingRadarData;
  const [activeIndex, setActiveIndex] = useState(3);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#050505] px-6 py-24">
      {/* Background Grid & Accents */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[-5%] top-[-10%] h-[30%] w-[95%] rounded-full bg-[#3cb878]/20 blur-[190px]" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: '45px 45px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1600px] items-center gap-8 lg:grid-cols-12">
        {/* LEFT: THE RADAR */}
        <div className="relative flex items-center justify-center lg:col-span-5 lg:-ml-5 lg:justify-start">
          <div className="relative flex aspect-square w-full max-w-[500px] items-center justify-center">
            {/* Static Concentric Rings */}
            {[100, 75, 50, 25].map((size) => (
              <div
                key={size}
                className="absolute rounded-full border border-emerald-500/10"
                style={{ width: `${size}%`, height: `${size}%` }}
              />
            ))}

            {/* Active Pulse */}
            <motion.div
              initial={false}
              animate={{
                width: data.radarItems[activeIndex].radius,
                height: data.radarItems[activeIndex].radius,
              }}
              className="absolute rounded-full border border-emerald-500/40 bg-emerald-500/30 backdrop-blur-[4px]"
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            />

            {/* Center Business Pin */}
            <div className="relative z-30">
              <div className="absolute -inset-8 animate-pulse rounded-full bg-emerald-500/20 blur-3xl" />
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500 shadow-[0_0_50px_rgba(16,185,129,0.7)]">
                <Target className="text-black" size={32} />
              </div>
            </div>

            {/* Labels on Rings */}
            {data.radarItems.map((item, idx) => (
              <motion.div
                key={item.id}
                animate={{
                  opacity: activeIndex === idx ? 1 : 0.1,
                  scale: activeIndex === idx ? 1.1 : 0.9,
                }}
                className="absolute z-40 flex flex-col items-center gap-1"
                style={{ top: item.labelTop, right: item.labelRight }}
              >
                <div
                  className={`rounded border px-2 py-1 text-[10px] font-black tracking-tighter ${
                    activeIndex === idx
                      ? 'border-emerald-400 bg-emerald-500 text-black'
                      : 'bg-zinc-900 text-emerald-500'
                  }`}
                >
                  RANK #1
                </div>
                <div
                  className={`h-3 w-3 rounded-full ${activeIndex === idx ? 'bg-emerald-400 shadow-[0_0_15px_#10b981]' : 'bg-zinc-800'}`}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT: THE CONTENT */}
        <div className="flex flex-col gap-6 lg:col-span-7 lg:pl-10">
          <div className="mb-4">
            <h3 className="h3 mb-6 leading-[0.9] tracking-tighter text-white">
              {data.header.title}{' '}
              <span className="text-emerald-500">{data.header.highlight}</span>
            </h3>
            <p className="p max-w-2xl text-zinc-400">
              {data.header.description}
            </p>
          </div>

          <div className="grid gap-4">
            {data.radarItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActiveIndex(index)}
                className={`group relative w-full overflow-hidden rounded-[2.5rem] border p-6 text-left transition-all duration-500 ${
                  activeIndex === index
                    ? 'translate-x-2 border-emerald-500/50 bg-zinc-900 shadow-2xl'
                    : 'border-white/5 bg-transparent hover:border-white/10'
                }`}
              >
                {/* Active Indicator Bar */}
                {activeIndex === index && (
                  <motion.div
                    layoutId="activeBar"
                    className="absolute bottom-0 left-0 top-0 w-1 bg-emerald-500"
                  />
                )}

                <div className="flex items-center gap-2">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-500 ${
                      activeIndex === index
                        ? 'rotate-3 bg-emerald-500 text-black'
                        : 'bg-zinc-800 text-emerald-500 group-hover:bg-zinc-700'
                    }`}
                  >
                    {item.icon}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between ">
                      <h4
                        className={`h4 font-bold transition-colors ${activeIndex === index ? 'text-emerald-400' : 'text-zinc-200'}`}
                      >
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-[16px] leading-relaxed text-zinc-300">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </button>
            ))}

            <p className="p mt-2 text-emerald-400">{data.footerNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RankingRadar;
