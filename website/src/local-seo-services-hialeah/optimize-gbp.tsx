'use client';
/**
 * src/local-seo-services-hialeah/sections/OptimizeGBP.tsx
 *
 * Section 5: Optimizing Google Business Profile
 * Eyebrow + H3 + body paragraph + 4-card feature grid
 */

import React from 'react';
import { motion } from 'framer-motion';
import {
  optimizeGBPSection,
  gbpFeatureCards,
} from '../../data/local-seo-services-hialeah';

export function OptimizeGBP() {
  const d = optimizeGBPSection;

  return (
    <section
      id="seo-services"
      className="relative overflow-hidden bg-white py-5"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[-5%] top-[-10%] h-[30%] w-[95%] rounded-full bg-[#3cb878]/10 blur-[100px]" />
      </div>
      <div className="mx-auto max-w-4xl space-y-16 px-6">
        {/* Header */}
        <div className="space-y-4 text-left">
          <h5 className="h5 text-center tracking-[0.1em] text-[#3cb878]">
            {d.eyebrow}
          </h5>
          <h3 className="h3 text-center leading-[1.1] tracking-tighter text-slate-900">
            {d.heading}
          </h3>
        </div>

        {/* Body */}
        <div className="space-y-6">
          <p className="p leading-[2em] text-black">{d.body}</p>
        </div>

        {/* 4-Card Feature Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6 lg:grid-cols-4">
          {gbpFeatureCards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{
                  y: -8,
                  backgroundColor: '#3cb878',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                }}
                className="flex flex-col items-center space-y-4 rounded-[2rem] border border-slate-100 bg-white p-8 text-center shadow-sm transition-all"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white">
                  <Icon
                    className="text-[#3cb878] group-hover:text-white"
                    size={28}
                  />
                </div>
                <h5 className="h5 uppercase tracking-tight text-slate-800">
                  {item.label}
                </h5>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
