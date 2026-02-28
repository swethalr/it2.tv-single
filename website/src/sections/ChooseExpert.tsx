'use client';
/**
 * src/google-ranking-expert/sections/ChooseExpert.tsx
 *
 * Section 11: How to Choose a Google SEO Expert — 4-step roadmap
 */

import React from 'react';
import { motion } from 'framer-motion';
import {
  chooseExpertSection,
  chooseSteps,
} from '../../data/google-ranking-expert';
import { ChooseExpertCtaButton } from '@/src/components/button';

export function ChooseExpert() {
  const d = chooseExpertSection;

  return (
    <section
      id="choose-expert-steps"
      className="relative overflow-hidden bg-white py-20"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[-5%] top-[-10%] h-[30%] w-[95%] rounded-full bg-[#3cb878]/10 blur-[100px]" />
      </div>
      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 space-y-4 text-center"
        >
          <h5 className="h5 font-bold uppercase text-[#3cb878]">{d.eyebrow}</h5>
          <h3 className="h3 leading-[0.9] tracking-tighter text-slate-900">
            {d.heading}
            <span className="text-[#3cb878]">{d.headingAccent}</span>
          </h3>
        </motion.div>

        {/* Roadmap */}
        <div className="relative">
          <div className="absolute bottom-0 left-1/2 top-0 hidden w-px bg-slate-900 lg:block" />

          <div className="space-y-12 lg:space-y-0">
            {chooseSteps.map((item, idx) => (
              <div
                key={idx}
                className={`flex w-full flex-col items-center justify-between lg:mb-20 lg:flex-row ${
                  item.alignment === 'right' ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content Card */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x: item.alignment === 'left' ? -50 : 50,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group w-full lg:w-[45%]"
                >
                  <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-900 bg-white p-8 shadow-sm transition-all duration-500 group-hover:border-[#3cb878] group-hover:bg-[#DBFFEC] group-hover:shadow-2xl md:p-10">
                    <span className="text-8xl pointer-events-none absolute -bottom-4 -right-4 font-black text-slate-50 transition-colors group-hover:text-orange-50">
                      0{idx + 1}
                    </span>
                    <div className="relative z-10 space-y-4">
                      <div className="inline-block rounded-full bg-[#3cb878] px-5 py-1.5 text-[18px] font-bold uppercase tracking-widest text-white shadow-lg shadow-[#3cb878]">
                        {item.step}
                      </div>
                      <h3 className="h3 uppercase tracking-tighter text-slate-900 transition-colors group-hover:text-[#3cb878]">
                        {item.title}
                      </h3>
                      <p className="p font-medium text-slate-900">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Central Node */}
                <div className="absolute left-1/2 z-20 hidden h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-4 border-slate-100 bg-white transition-all group-hover:border-[#3cb878] lg:flex">
                  <div className="h-3 w-3 animate-pulse rounded-full bg-[#3cb878]" />
                </div>

                {/* Desktop Spacer */}
                <div className="hidden lg:block lg:w-[45%]" />
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-20 rounded-[3rem] bg-[#3cb878] p-1 shadow-2xl shadow-[#3cb878]"
        >
          <div className="flex flex-col items-center justify-between gap-8 rounded-[2.8rem] bg-white lg:p-10 px-7 py-5 text-center md:flex-row">
            <div className="text-left">
              <h4 className="h4 font-bold text-center mb-4 text-slate-900">{d.ctaHeading}</h4>
              <p className="p text-slate-900 text-center ">{d.ctaSubtext}</p>
            </div>
            <ChooseExpertCtaButton label={d.ctaButton} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
