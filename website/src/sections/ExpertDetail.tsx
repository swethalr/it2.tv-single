'use client';
/**
 * src/google-ranking-expert/sections/ExpertDetail.tsx
 *
 * Section 2: Google Ranking Expert bio + "Get Free Audit Now" CTA modal
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { expertDetailSection } from '../../data/google-ranking-expert';
import { ContactModal } from './shared';

export function ExpertDetail() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const d = expertDetailSection;

  return (
    <section
      id="expert-detail"
      className="relative  space-y-6 overflow-hidden py-6 md:space-y-14"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[5%] top-[-10%] h-[30%] w-[95%] rounded-full bg-[#3cb878]/10 blur-[100px]" />
      </div>

      {/* Header */}
      <div className="mx-auto max-w-4xl text-center">
        <motion.h5
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="h5 text-center  mb-4 font-bold text-[#3cb878]"
        >
          {d.eyebrow}
        </motion.h5>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="h2 leading-[01.2] text-center  text-slate-900"
        >
          {d.heading}
          <span className="text-[#3cb878]">{d.headingAccent}</span>
        </motion.h2>
      </div>

      {/* Bio Body */}
      <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-1">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <p className="p leading-[2em] text-center  text-black">{d.bio1}</p>

          <div className="my-8 w-full overflow-hidden rounded-xl md:my-10">
            <img
              src={d.bio1Image.src}
              alt={d.bio1Image.alt}
              className="h-auto w-full object-contain"
            />
          </div>

          <p className="p leading-[2em] text-center text-black">{d.bio2}</p>
        </motion.div>
      </div>

      {/* CTA */}
      <div className="mb-20 mt-20 text-center">
        <motion.button
          onClick={() => setIsModalOpen(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative inline-flex items-center gap-4 rounded-2xl bg-[#3cb878] px-6 py-3 text-white shadow-xl transition-all duration-500 hover:bg-white hover:text-[#3cb878]"
        >
          <span className="h5 font-bold tracking-[0.1em]">{d.ctaLabel}</span>
        </motion.button>
      </div>

      {/* Shared Contact Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        submitLabel="Submit Application"
      />
    </section>
  );
}
