'use client';
/**
 * src/google-ranking-expert/sections/GoogleSeoExpertise.tsx
 *
 * Section 5: Expertise in Google SEO — bio paragraphs + image
 */

import React from 'react';
import { motion } from 'framer-motion';
import { googleSeoExpertiseSection } from '../../data/google-ranking-expert';

export function GoogleSeoExpertise() {
  const d = googleSeoExpertiseSection;

  return (
    <section
      id="google-seo-expertise"
      className="relative overflow-hidden bg-white py-14"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[5%] top-[-10%] h-[30%] w-[95%] rounded-full bg-[#3cb878]/10 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-4xl space-y-12 px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h5 className="h5 text-center font-bold uppercase text-[#3cb878]">
            {d.eyebrow}
          </h5>
          <h2 className="h2 text-center leading-[0.9] tracking-tighter text-slate-900">
            {d.heading}
            <span className="text-[#3cb878]">{d.headingAccent}</span>
          </h2>
          <div className="mx-auto mt-6 h-1.5 w-20 rounded-full bg-[#3cb878]" />
        </motion.div>

        {/* Para 1 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <p className="p leading-[2em] text-center text-black">
            {d.para1.part1}
            <span className="ml-1 font-bold text-slate-900">
              {d.para1.name}
            </span>{' '}
            {d.para1.part2}
            <span className="font-bold text-[#3cb878]">
              {d.para1.accent1}
            </span>{' '}
            {d.para1.part3}
            <span className="font-bold text-[#3cb878]">
              {d.para1.accent2}
            </span>{' '}
            {d.para1.part4}{' '}
            <span className="font-bold text-slate-900">{d.para1.bold1}</span>
            {d.para1.part5}
            <span className="font-bold text-slate-800">
              {d.para1.bold2}
            </span>{' '}
            {d.para1.part6}{' '}
            <span className="font-bold text-slate-800">{d.para1.bold3}</span>{' '}
            {d.para1.part7}
            <span className="font-bold text-slate-800">
              {d.para1.bold4}
            </span>{' '}
            {d.para1.part8}
            <span className="font-bold text-slate-800">
              {d.para1.bold5}
            </span>{' '}
            {d.para1.part9}{' '}
            <span className="font-bold text-slate-800">{d.para1.bold6}</span>
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="relative overflow-hidden  border border-slate-100 bg-slate-50 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)]"
        >
          <img
            src={d.image.src}
            alt={d.image.alt}
            className="block h-auto w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
        </motion.div>

        {/* Para 2 */}
        <p className="p leading-[2em] text-center text-black">
          {d.para2.prefix}
          <span className="font-bold text-[#3cb878]">{d.para2.accent}</span>
          {d.para2.suffix}
        </p>
      </div>
    </section>
  );
}
