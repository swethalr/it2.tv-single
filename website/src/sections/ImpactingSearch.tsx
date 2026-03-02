'use client';
/**
 * src/google-ranking-expert/sections/ImpactingSearch.tsx
 *
 * Section 14: Google Expert Impacting Search Engines
 */

import React from 'react';
import { motion } from 'framer-motion';
import {
  impactingSearchSection,
  impactQuestions,
} from '../../data/google-ranking-expert';

export function ImpactingSearch() {
  const d = impactingSearchSection;

  return (
    <section
      id="impacting-search-engine"
      className="relative bg-slate-50 py-24"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[5%] top-[-10%] h-[30%] w-[95%] rounded-full bg-[#3cb878]/10 blur-[100px]" />
      </div>

      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3cb878]/5 blur-[120px]" />

      <div className="relative z-10 max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center space-y-8"
        >
          {/* Heading */}
          <div>
            <h4 className="h4 leading-[1.2] text-center  tracking-tighter text-slate-900">
              {d.heading}
              <span className="text-[#3cb878]">{d.headingAccent}</span>
              {d.headingSuffix}
            </h4>
          </div>

          <p className="p text-slate-900 text-center ">{d.body1}</p>

          <p className="p text-slate-900 text-center">
            <span className="font-bold text-[#3cb878]">{d.body2Accent}</span>{' '}
            {d.body2Rest}
          </p>

          {/* Question Cards */}
          <div className="mt-8 space-y-6 text-left sm:mx-auto sm:max-w-2xl">
            {impactQuestions.map((q, idx) => {
              const Icon = q.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
                >
                  <div className="mt-1 flex-shrink-0">
                    <Icon className="text-[#3cb878]" size={20} />
                  </div>
                  <p className="p font-medium text-slate-900">{q.text}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
