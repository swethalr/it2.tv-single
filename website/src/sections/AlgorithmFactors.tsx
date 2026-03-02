'use client';
/**
 * src/google-ranking-expert/sections/AlgorithmFactors.tsx
 *
 * Section 12: Factors of Google Rank Algorithm — interactive tab cards
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, ShieldCheck, Code2, Zap, ChevronRight } from 'lucide-react';
import { algorithmSection, algoData } from '../../data/google-ranking-expert';
import type { TabKey } from '../../data/google-ranking-expert';

const tabCards = [
  {
    label: 'AI Models' as TabKey,
    val: 'RankBrain / BERT',
    icon: <Cpu size={24} />,
  },
  {
    label: 'Core Signals' as TabKey,
    val: 'E-E-A-T Compliance',
    icon: <ShieldCheck size={24} />,
  },
  {
    label: 'Technical' as TabKey,
    val: 'MUM & Indexability',
    icon: <Code2 size={24} />,
  },
  {
    label: 'User Experience' as TabKey,
    val: 'Core Web Vitals',
    icon: <Zap size={24} />,
  },
];

export function AlgorithmFactors() {
  const [activeTab, setActiveTab] = useState<TabKey>('AI Models');
  const d = algorithmSection;

  return (
    <section
      id="algorithm-factors"
      className="relative overflow-hidden bg-white py-24"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[5%] top-[-10%] h-[30%] w-[95%] rounded-full bg-[#3cb878]/10 blur-[100px]" />
      </div>
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 space-y-4 text-center"
        >
          
          <h3 className="h3 leading-[1.2]  text-slate-900">
            {d.heading}
            <span className="text-[#3cb878]">{d.headingAccent}</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left: Dynamic Content */}
          <div className="order-2 lg:order-1 lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <h4 className="h4 italic tracking-[0.01em] text-[#3cb878]">
                    {algoData[activeTab].title}
                  </h4>
                  <div className="h-1 w-20 rounded-full bg-slate-900" />
                </div>
                <p className="p font-medium leading-relaxed text-slate-600">
                  {algoData[activeTab].desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Interactive Tab Cards */}
          <div className="order-1 space-y-4 lg:order-2 lg:col-span-5">
            {tabCards.map((item) => {
              const isActive = activeTab === item.label;
              return (
                <button
                  key={item.label}
                  onClick={() => setActiveTab(item.label)}
                  className={`group flex w-full items-center justify-between rounded-[2rem] border p-6 text-left transition-all duration-500 ${
                    isActive
                      ? 'border-[#3cb878] bg-[#3cb878] shadow-[0_20px_40px_-10px_rgb(219,255,236,0.2)]'
                      : 'border-slate-100 bg-white shadow-sm hover:border-[#3cb878]'
                  }`}
                >
                  <div className="flex items-center gap-5">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-colors duration-500 ${
                        isActive
                          ? 'bg-white text-[#3cb878]'
                          : 'bg-slate-900 text-[#3cb878]'
                      }`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p
                        className={`mb-2 text-[14px] font-bold uppercase leading-none tracking-widest ${
                          isActive ? 'text-[#dbffec]' : 'text-slate-700'
                        }`}
                      >
                        {item.label}
                      </p>
                      <p
                        className={`p leading-[2em] ${
                          isActive ? 'text-white' : 'text-slate-900'
                        }`}
                      >
                        {item.val}
                      </p>
                    </div>
                  </div>
                  <ChevronRight
                    className={`transition-transform duration-500 ${
                      isActive
                        ? 'translate-x-2 text-white'
                        : 'text-slate-200 group-hover:text-[#3cb878]'
                    }`}
                    size={20}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Quote Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 border-t border-slate-100 pt-10 text-center"
        >
          <p className="p mx-auto max-w-3xl font-bold italic leading-relaxed text-[#3cb878]">
            {d.quote}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
