'use client';
/**
 * src/local-seo-service-london/sections/LocalSeoService.tsx
 *
 * Section 2: Local SEO Service in London
 * Eyebrow + H2 + body paragraph + download button → checklist modal
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { localSeoServiceSection } from '../../data/local-seo-service-london';
import { ChecklistModal } from '@/src/local-seo-service-london/shared';

export function LocalSeoService() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const d = localSeoServiceSection;

  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[-5%] top-[-10%] h-[30%] w-[95%] rounded-full bg-[#3cb878]/10 blur-[100px]" />
      </div>
      <div className="mx-auto max-w-4xl space-y-12 px-6">
        {/* Header */}
        <div className="space-y-4 text-center">
          <h5 className="h5 font-bold uppercase text-[#3cb878]">{d.eyebrow}</h5>
          <h2 className="h2 leading-[1.2]  text-slate-900">
            {d.heading}
            <span className="text-[#3cb878]">{d.headingAccent}</span>
          </h2>
          <div className="mx-auto mt-6 h-1.5 w-16 rounded-full bg-[#3cb878]" />
        </div>

        {/* Body */}
        <div className="space-y-8">
          <p className="p text-center lg:text-left leading-[2em] text-black">{d.body}</p>
        </div>

        {/* Download Button */}
        <div className="pt-4">
          <motion.button
            onClick={() => setIsFormOpen(true)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="group relative mx-auto flex items-center gap-3 rounded-2xl bg-[#3cb878] px-4 py-4 text-white shadow-[0_20px_40px_rgba(16,185,129,0.2)] transition-all duration-500 hover:bg-white hover:text-[#3cb878] hover:shadow-[0_20px_40px_rgba(16,185,129,0.4)]"
          >
            <Download
              size={20}
              className="transition-transform hidden md:block group-hover:translate-y-1"
            />
            <span className="h6 font-bold uppercase tracking-[0.2em]">
              {d.downloadLabel}
            </span>
          </motion.button>
        </div>

        {/* Checklist Modal */}
        <ChecklistModal
          isOpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
          data={d.modal}
        />
      </div>
    </section>
  );
}
