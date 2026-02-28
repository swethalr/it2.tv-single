'use client';
/**
 * src/local-seo-services-hialeah/sections/ZammyBio.tsx
 *
 * Section 9: Google SEO Consultant – Zammy Zaif
 * H2 heading + bio paragraph
 */

import React from 'react';
import { motion } from 'framer-motion';
import { zammyBioSection } from '../../data/local-seo-services-hialeah';

export function ZammyBio() {
  const d = zammyBioSection;

  return (
    <section
      id="google-seo-expertise"
      className="relative overflow-hidden bg-white py-14"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[-5%] top-[-10%] h-[30%] w-[95%] rounded-full bg-[#3cb878]/10 blur-[100px]" />
      </div>
      <div className="mx-auto max-w-4xl space-y-12 px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="h2 text-center leading-[0.9] tracking-tighter text-slate-900">
            {d.heading}
            <span className="text-[#3cb878]">{d.headingAccent}</span>
          </h2>
          <div className="mx-auto mt-6 h-1.5 w-20 rounded-full bg-[#3cb878]" />
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <p className="p leading-[2em] text-black">{d.body}</p>
        </motion.div>
      </div>
    </section>
  );
}
