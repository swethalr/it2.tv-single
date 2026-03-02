'use client';
/**
 * src/google-ranking-expert/sections/SeoServicesGrid.tsx
 *
 * Section 9: Our Google SEO Services — 12-card grid
 */

import React from 'react';
import { motion } from 'framer-motion';
import {
  seoServicesGridSection,
  services,
} from '../../data/google-ranking-expert';

export function SeoServicesGrid() {
  const d = seoServicesGridSection;

  return (
    <section className="relative overflow-hidden bg-white py-14">
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[5%] top-[-10%] h-[30%] w-[95%] rounded-full bg-[#3cb878]/10 blur-[100px]" />
      </div>
      <div className="absolute right-0 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-orange-50/50 blur-[120px]" />
      <div className="absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] rounded-full bg-slate-50 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-20 text-center">
          <motion.h5
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="h5 font-bold uppercase text-[#3cb878]"
          >
            {d.eyebrow}
          </motion.h5>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="h2 mt-4 tracking-tighter text-slate-900"
          >
            {d.heading}
            <span className="text-[#3cb878]">{d.headingAccent}</span>
          </motion.h2>
        </div>

        {/* 12 Services Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="h-full rounded-[2.5rem] border border-slate-100 bg-white p-10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 group-hover:border-[#3cb878] group-hover:shadow-[0_30px_60px_-15px_rgba(60,184,120,0.7)]">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#DBFFEC] transition-colors duration-500 group-hover:bg-[#3cb878]">
                    <Icon className="h-7 w-7 text-[#3cb878] transition-colors duration-500 group-hover:text-white" />
                  </div>
                  <h4 className="h4 mb-3 font-bold text-slate-900 transition-colors group-hover:text-[#3cb878]">
                    {service.title}
                  </h4>
                  <p className="p text-slate-900">{service.desc}</p>
                  <div className="absolute right-6 top-6 opacity-[0.03] transition-opacity group-hover:opacity-[0.1]">
                    <Icon size={80} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
