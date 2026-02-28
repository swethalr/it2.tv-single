'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target } from 'lucide-react';
import { seoEngineContent } from '@/data/google-maps-local-seo';

const AwwwardsSEOEngine = () => {
  const [active, setActive] = useState(0);
  const { header, orbitalModules, formula, images } = seoEngineContent;

  return (
    <section className="font-sans relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#050505] px-6 py-32">
      {/* Background Ambience & Grids */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute bottom-[5%] left-[-5%] h-[500px] w-[500px] animate-pulse rounded-full bg-[#3cb878]/30 blur-[100px]" />
      <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,#10b981_1px,transparent_1px),linear-gradient(to_bottom,#10b981_1px,transparent_1px)] [background-size:100px_100px]" />

      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[-5%] top-[-10%] h-[30%] w-[95%] rounded-full bg-[#3cb878]/10 blur-[190px]" />
      </div>

      {/* High-Contrast Technical Grid */}
      <div className="absolute inset-0 opacity-[0.01] [background-image:linear-gradient(to_right,#10b981_1px,transparent_1px),linear-gradient(to_bottom,#10b981_1px,transparent_1px)] [background-size:100px_100px]" />

      {/* Header Architecture - Data Driven */}
      <div className="relative z-30 mb-16 text-center lg:absolute lg:top-20 lg:mb-0">
        <h2 className="h2 leading-none tracking-tighter text-white">
          {header.mainTitle}
          <span className="bg-gradient-to-r from-emerald-400 to-emerald-900 bg-clip-text text-transparent">
            {header.gradientTitle}
          </span>
        </h2>
      </div>

      {/* DESKTOP ORBITAL VIEW */}
      <div className="relative hidden h-[1400px] w-full max-w-[1400px] items-center justify-center lg:flex">
        {/* CENTER CORE */}
        <div className="relative z-20 flex h-64 w-64 items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-[-40px] rounded-full border border-dashed border-emerald-500/10"
          />

          <motion.div
            animate={{ rotate: orbitalModules[active].angle + 90 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className="relative flex h-32 w-32 rotate-45 items-center justify-center rounded-none bg-emerald-500 shadow-[0_0_60px_rgba(16,185,129,0.4)]"
          >
            <div className="flex h-[90%] w-[90%] -rotate-45 items-center justify-center bg-black">
              <Target className="animate-pulse text-emerald-500" size={40} />
            </div>
          </motion.div>

          {/* DYNAMIC LASER */}
          <motion.div
            animate={{ rotate: orbitalModules[active].angle }}
            className="absolute left-1/2 h-[2px] w-[200px] origin-left bg-gradient-to-r from-emerald-500 to-transparent"
          />
        </div>

        {/* ORBITAL DATA MODULES */}
        {orbitalModules.map((item, idx) => {
          const radius = 420;
          const x = Math.cos((item.angle * Math.PI) / 180) * radius;
          const y = Math.sin((item.angle * Math.PI) / 180) * radius;

          return (
            <motion.div
              key={item.id}
              onMouseEnter={() => setActive(idx)}
              style={{ x, y }}
              className="absolute z-30 w-[380px] cursor-pointer transition-all duration-500"
            >
              <div
                className={`border-2 p-8 transition-all duration-500 ${
                  active === idx
                    ? 'scale-110 border-emerald-500 bg-zinc-950 shadow-2xl'
                    : 'border-white/5 bg-black '
                }`}
              >
                <div className="mb-4 flex items-center justify-between">
                  <div
                    className={`rounded-none border p-2 ${active === idx ? 'border-emerald-500 text-emerald-500' : 'border-zinc-800 text-zinc-300'}`}
                  >
                    {item.icon}
                  </div>
                  <Target className="text-emerald-500" size={32} />
                </div>
                <h4 className="mb-2 text-lg font-bold uppercase tracking-tighter text-white">
                  {item.title}
                </h4>
                <p className="text-[16px] leading-relaxed text-zinc-300">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* MOBILE RESPONSIVE STACK */}
      <div className="z-30 flex w-full max-w-xl flex-col gap-6 lg:hidden">
        <div className="flex aspect-square w-full items-center justify-center">
          <div className="flex h-32 w-32 rotate-45 items-center justify-center bg-emerald-500">
            <Target className="-rotate-45 text-black" size={40} />
          </div>
        </div>
        {orbitalModules.map((item) => (
          <div
            key={item.id}
            className="border-2 border-white/5 bg-zinc-950 p-8"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xl font-black text-emerald-500">
                {item.percentage}%
              </span>
              <div className="text-zinc-700">{item.icon}</div>
            </div>
            <h4 className="h4 mb-2 font-bold uppercase tracking-tighter text-white">
              {item.title}
            </h4>
            <p className="text-p leading-relaxed text-white">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* KINETIC BLUEPRINT SECTION */}
      <div className="relative mx-auto w-full max-w-[1400px] overflow-hidden px-6 py-20">
        <div className="flex flex-col items-center gap-12 lg:grid lg:grid-cols-12">
          <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/5 bg-[#030303] lg:col-span-7">
            <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] [background-size:40px_40px]" />

            <div className="relative z-10 w-full max-w-md space-y-4">
              {formula.map((item, i) => (
                <div key={i} className="relative flex items-center gap-6">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: [0, 1, 0.5] }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      delay: item.delay,
                    }}
                    className="font-mono w-12 text-right text-xl font-black italic text-white"
                  >
                    {item.value}
                  </motion.div>

                  <div className="relative h-12 flex-1 overflow-hidden rounded-xl border border-white/5 bg-zinc-900/50">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.value + 30}%` }}
                      transition={{
                        duration: 2,
                        delay: item.delay,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      style={{ backgroundColor: item.color }}
                      className="relative h-full shadow-[0_0_30px_rgba(16,185,129,0.2)]"
                    >
                      <motion.div
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                        className="absolute inset-y-0 w-20 skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* TERMINAL IMAGE BOX */}
          <div className="flex w-full justify-center lg:col-span-5">
            <div className="group relative w-full max-w-[400px]">
              <div className="absolute -inset-4 rounded-full bg-emerald-500/10 opacity-50 blur-[80px]" />
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-zinc-950 p-2">
                <motion.div
                  animate={{ top: ['0%', '100%'] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-x-0 z-30 h-[2px] bg-emerald-400 shadow-[0_0_15px_#10b981]"
                />
                <img
                  src={images.terminalImage}
                  alt={images.altText}
                  className="h-auto w-full rounded-[2rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwwwardsSEOEngine;
