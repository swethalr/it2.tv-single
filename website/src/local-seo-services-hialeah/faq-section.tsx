'use client';
/**
 * src/local-seo-services-hialeah/sections/FaqSection.tsx
 *
 * Section 11: Frequently Asked Questions
 * Sparkles badge + H4 heading + 4-item animated accordion
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';
import { faqSection, faqData } from '../../data/local-seo-services-hialeah';

export function FaqSection() {
  const [expanded, setExpanded] = useState<number | null>(0);
  const d = faqSection;

  return (
    <section
      id="faq-premium"
      className="relative relative overflow-hidden bg-white py-24"
    >
      {/* Background blurs */}

      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[-5%] top-[-10%] h-[30%] w-[95%] rounded-full bg-[#3cb878]/10 blur-[100px]" />
      </div>
      <div className="absolute right-0 top-0 -z-10 h-[600px] w-[600px] translate-x-1/2 rounded-full bg-orange-50/50 blur-[120px]" />
      <div className="absolute bottom-0 left-0 -z-10 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-slate-50 blur-[100px]" />

      <div className="mx-auto max-w-3xl px-6">
        {/* Header */}
        <div className="mb-16 space-y-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="mb-2 inline-flex items-center gap-2 rounded-full border border-orange-100 bg-[#DBFFEC] px-4 py-2 text-[#3cb878]"
          >
            <Sparkles size={16} className="animate-pulse" />
            <h5 className="h5 font-bold uppercase">{d.badgeLabel}</h5>
          </motion.div>

          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="h4 tracking-tighter text-slate-900"
          >
            {d.heading}
          </motion.h4>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = expanded === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative overflow-hidden rounded-[2rem] border transition-all duration-500 ${
                  isOpen
                    ? 'border-[#3cb878] bg-white shadow-[0_20px_40px_rgba(249,115,22,0.08)]'
                    : 'border-slate-100 bg-slate-50/50 hover:border-[#3cb878]'
                }`}
              >
                <button
                  onClick={() => setExpanded(isOpen ? null : index)}
                  className="group flex w-full items-center justify-between p-6 text-left transition-all md:p-8"
                >
                  <div className="flex items-center gap-4 md:gap-6">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-2xl transition-all duration-500 md:h-12 md:w-12 ${
                        isOpen
                          ? 'rotate-12 bg-[#3cb878] text-white'
                          : 'bg-white text-slate-400 shadow-sm group-hover:text-[#3cb878]'
                      }`}
                    >
                      <HelpCircle size={24} strokeWidth={1.5} />
                    </div>
                    <span
                      className={`p font-bold transition-colors duration-300 ${
                        isOpen
                          ? 'text-slate-900'
                          : 'text-slate-600 group-hover:text-slate-900'
                      }`}
                    >
                      {item.question}
                    </span>
                  </div>
                  <div
                    className={`transition-transform duration-500 ${isOpen ? 'rotate-180 text-[#3cb878]' : 'text-slate-300'}`}
                  >
                    <ChevronDown size={24} />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.4,
                        ease: [0.04, 0.62, 0.23, 0.98],
                      }}
                    >
                      <div className="px-6 pb-8 md:px-24 md:pb-10">
                        <div className="mb-6 h-px w-full bg-slate-100" />
                        <p className="text-sm font-medium leading-relaxed text-slate-500 md:text-base">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
