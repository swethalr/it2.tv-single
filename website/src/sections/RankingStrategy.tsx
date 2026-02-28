'use client';
/**
 * src/google-ranking-expert/sections/RankingStrategy.tsx
 *
 * Section 6: Our Google Ranking Strategy — intro + image + 6 strategy pillars
 */

import React from 'react';
import { motion } from 'framer-motion';
import {
  rankingStrategySection,
  strategyPillars,
} from '../../data/google-ranking-expert';

export function RankingStrategy() {
  const d = rankingStrategySection;

  return (
    <section
      id="ranking-strategy"
      className="relative overflow-hidden bg-white py-6"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[-5%] top-[-10%] h-[30%] w-[95%] rounded-full bg-[#3cb878]/10 blur-[100px]" />
      </div>
      <div className="mx-auto max-w-4xl space-y-10 px-6">
        {/* Header */}
        <div className="space-y-4 text-center">
          <h5 className="h5 text-center text-center font-bold uppercase text-[#3cb878]">
            {d.eyebrow}
          </h5>
          <h3 className="h3 leading-[0.9] text-center tracking-tighter text-slate-900">
            {d.heading}
            <span className="text-[#3cb878]">{d.headingAccent}</span>
          </h3>
        </div>

        {/* Intro + Image */}
        <div className="flex flex-col items-center gap-12">
          <div className="flex-1 space-y-6">
            <p className="p leading-[2em] text-center text-black">
              {d.introPrefix}{' '}
              <span className="font-bold text-slate-900">{d.introName}</span>
              {d.introSuffix}
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full flex-1"
          >
            <div className="overflow-hidden  border border-slate-300 bg-white lg:p-2 shadow-2xl">
              <img
                src={d.strategyImage.src}
                alt={d.strategyImage.alt}
                className="h-auto w-full object-contain"
              />
            </div>
          </motion.div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {strategyPillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, backgroundColor: '#3cb878' }}
              className="group relative overflow-hidden rounded-[2.5rem] border-2 border-[#3cb878] bg-white p-8 shadow-sm transition-all duration-500 hover:border-[#3cb878] hover:shadow-xl"
            >
              <div className="absolute right-0 top-0 -mr-16 -mt-16 h-32 w-32 rounded-bl-[5rem] bg-[#DBFFEC] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative z-10 space-y-4">
                <h4 className="h4 tracking-tight text-slate-900">
                  {pillar.title}
                </h4>
                <p className="p text-slate-900">{pillar.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
