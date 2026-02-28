'use client';
/**
 * src/google-ranking-expert/sections/LocalSeoMaps.tsx
 *
 * Section 10: Local SEO for Google Maps Rankings
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import {
  localSeoMapsSection,
  localFeatures,
} from '../../data/google-ranking-expert';

export function LocalSeoMaps() {
  const d = localSeoMapsSection;

  return (
    <section
      id="local-seo-maps"
      className="relative overflow-hidden bg-white py-6"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[-5%] top-[-10%] h-[30%] w-[95%] rounded-full bg-[#3cb878]/10 blur-[100px]" />
      </div>
      <div className="mx-auto max-w-5xl space-y-16 px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4 text-center"
        >
          <h5 className="h5 font-bold text-center uppercase tracking-[0.4em] text-[#3cb878]">
            {d.eyebrow}
          </h5>
          <h3 className="h3 text-center leading-[1.2] tracking-tighter text-slate-900">
            {d.heading}
            <span className="text-[#3cb878]">{d.headingAccent}</span>
          </h3>
        </motion.div>

      
        <div className="mx-auto max-w-4xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="p leading-[2em] text-center text-black"
          >
            {d.body}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="p mt-6 text-center font-bold italic leading-relaxed text-[#3cb878]"
          >
            {d.quote}
          </motion.p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 gap-x-12 gap-y-6 pt-10 md:grid-cols-2">
          {localFeatures.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group flex items-start gap-4 rounded-2xl p-4 transition-colors hover:bg-[#3cb878]"
            >
              <div className="mt-1 flex h-6 w-6 leading-relaxed shrink items-center justify-center rounded-full bg-white shadow-lg shadow-[#DBFFEC] transition-transform group-hover:scale-110">
                <Check size={14} className="stroke-[4px] text-[#3cb878]" />
              </div>
              <p className="p font-bold leading-relaxed text-slate-900 ">
                {feature}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
