'use client';
/**
 * src/google-ranking-expert/sections/SectorsWeServe.tsx
 *
 * Section 13: Sectors We Serve — 4-card industry grid
 */

import React from 'react';
import { motion } from 'framer-motion';
import { sectorsSection, sectors } from '../../data/google-ranking-expert';

export function SectorsWeServe() {
  const d = sectorsSection;

  return (
    <section
      id="sectors-we-serve"
      className="relative overflow-hidden  bg-white py-14"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[5%] top-[-10%] h-[30%] w-[95%] rounded-full bg-[#3cb878]/10 blur-[100px]" />
      </div>
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 flex flex-col justify-center text-center">
          <div className="space-y-4">
            <motion.h5
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="h5 tracking-[0.1em] text-[#3cb878]"
            >
              {d.eyebrow}
            </motion.h5>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="h4 leading-tight tracking-tighter text-slate-900"
            >
              {d.heading}
              <span className="text-[#3cb878]">{d.headingAccent}</span>
            </motion.h4>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="p mx-auto mt-10 justify-center text-center text-slate-900"
          >
            {d.subtext}
          </motion.p>
        </div>

        {/* Sector Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sectors.map((sector, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex h-48 flex-col items-center justify-center overflow-hidden rounded-[2rem] border border-slate-100 bg-slate-50 transition-all duration-500 hover:border-[#3cb878] hover:bg-white hover:shadow-[0_30px_60px_-15px_rgba(60,184,120,0.7)]"
            >
              <div className="relative z-10 flex flex-col items-center gap-4">
                <div className="rounded-2xl bg-white p-4 text-slate-800 shadow-sm transition-all duration-500 group-hover:bg-[#3cb878] group-hover:text-white">
                  <sector.icon size={32} strokeWidth={1.5} />
                </div>
                <span className="px-4 text-center font-bold uppercase tracking-tight text-slate-900 transition-colors group-hover:text-[#3cb878]">
                  {sector.name}
                </span>
              </div>
              <span className="pointer-events-none absolute -bottom-2 text-[6rem] font-black text-slate-200/20 transition-colors group-hover:text-orange-100/30">
                {idx + 1}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
