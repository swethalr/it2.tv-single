'use client';
/**
 * src/google-ranking-expert/sections/FirstRankServices.tsx
 *
 * Section 4: First Rank SEO Services — feature cards + stat counters
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Counter } from './shared';
import {
  firstRankServicesSection,
  seoFeatureCards,
  seoServiceStats,
} from '../../data/google-ranking-expert';

export function FirstRankServices() {
  const d = firstRankServicesSection;

  return (
    <section
      id="seo-services"
      className="relative  overflow-hidden bg-white py-24"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[-5%] top-[-10%] h-[30%] w-[95%] rounded-full bg-[#3cb878]/10 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-4xl space-y-12 px-6">
        {/* Header */}
        <div className="space-y-4 ">
          <h2 className="h2 text-center  leading-[1.2] tracking-tighter text-slate-900">
            {d.heading}
            <span className="text-[#3cb878]">{d.headingAccent}</span>
          </h2>
        </div>

        {/* Body */}
        <div className="space-y-6">
          <p className="p text-center leading-[2em] text-black">
            {d.bodyPrefix}
            <span className="mx-1 rounded px-2 py-0.5 font-bold text-[#3cb878]">
              {d.bodyAccent}
            </span>
            {d.bodyRemainder}
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-6">
          {seoFeatureCards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{
                  y: -8,
                  backgroundColor: '#3cb878',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                }}
                className="flex flex-col items-center space-y-4 rounded-[2rem] border border-slate-100 bg-[#dbffce] p-8 text-center shadow-sm transition-all"
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

        {/* Stat Counters */}
        <div className="grid grid-cols-2 gap-14 border-t border-slate-50 pt-10 lg:grid-cols-4">
          {seoServiceStats.map((stat, i) => (
            <div key={i} className="space-y-1 text-center lg:text-left">
              <div className="flex items-baseline justify-center gap-1 lg:justify-start">
                <div className="text-[2.75rem] font-black font-bold leading-none tracking-tighter text-[#3cb878] md:text-[3.5rem] xl:text-[3.0rem]">
                  <Counter value={stat.val} />
                </div>
                <span className="h4 font-bold text-[#3cb878]">{stat.unit}</span>
              </div>
              <h6 className="h6 uppercase tracking-[0.2em] text-slate-900">
                {stat.label}
              </h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
