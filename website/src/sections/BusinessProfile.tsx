'use client';
/**
 * src/google-ranking-expert/sections/BusinessProfile.tsx
 *
 * Section 3: Google Business Profile Performance Max + download checklist modal
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import { businessProfileSection } from '../../data/google-ranking-expert';

export function BusinessProfile() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const d = businessProfileSection;

  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[5%] top-[-10%] h-[30%] w-[95%] rounded-full bg-[#3cb878]/10 blur-[100px]" />
      </div>
      <div className="mx-auto max-w-4xl space-y-12 px-6">
        {/* Header */}
        <div className="space-y-4 text-center ">
          <h5 className="h5 font-bold uppercase text-[#3cb878]">{d.eyebrow}</h5>
          <h3 className="h3 leading-[1.2] tracking-tighter text-slate-900">
            {d.heading}
            <span className="text-[#3cb878]">{d.headingAccent}</span>
          </h3>
          <div className="mx-auto mt-6 h-1.5 w-16 rounded-full bg-[#3cb878]" />
        </div>

        {/* Body */}
        <div className="space-y-8">
          <p className="p text-center leading-[2em] text-black">
            {d.bodyPrefix}
            <span className="ml-1 text-[#3cb878]">{d.bodyAccent}</span>{' '}
            {d.bodyRemainder}
          </p>
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
              size={30}
              className="transition-transform group-hover:translate-y-1"
            />
            <span className="h6 font-bold leading-[2em ] uppercase tracking-[0.2em]">
              {d.downloadLabel}
            </span>
          </motion.button>
        </div>

        {/* Checklist Download Modal */}
        <AnimatePresence>
          {isFormOpen && (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsFormOpen(false)}
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative z-10 w-full max-w-[420px] overflow-hidden rounded-[2.5rem] bg-white shadow-2xl"
              >
                {/* Header */}
                <div className="bg-[#3cb878] p-10 text-center text-white">
                  <h3 className="h3 leading-none tracking-tighter">
                    {d.modal.heading}
                  </h3>
                  <p className="p mt-3 font-bold uppercase tracking-[0.2em] opacity-90">
                    {d.modal.subheading}
                  </p>
                </div>

                {/* Form */}
                <form
                  className="space-y-5 p-10"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setIsFormOpen(false);
                  }}
                >
                  <div className="text-left">
                    <label className="ml-1 text-[12px] font-black uppercase tracking-widest text-slate-700">
                      {d.modal.nameLbl}
                    </label>
                    <input
                      type="text"
                      placeholder={d.modal.namePh}
                      required
                      className="mt-1 w-full rounded-xl border border-slate-100 bg-slate-50 px-5 py-4 text-sm font-medium text-slate-900 outline-none transition-all focus:bg-white focus:ring-2 focus:ring-[#3cb878]"
                    />
                  </div>
                  <div className="text-left">
                    <label className="ml-1 text-[12px] font-black uppercase tracking-widest text-slate-700">
                      {d.modal.emailLbl}
                    </label>
                    <input
                      type="email"
                      placeholder={d.modal.emailPh}
                      required
                      className="mt-1 w-full rounded-xl border border-slate-100 bg-slate-50 px-5 py-4 text-sm font-medium text-slate-900 outline-none transition-all focus:bg-white focus:ring-2 focus:ring-[#3cb878]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="group mt-4 flex w-full items-center justify-center gap-3 rounded-2xl bg-slate-900 py-5 text-[14px] font-black uppercase tracking-[0.2em] text-white shadow-lg transition-all duration-500 hover:bg-[#3cb878]"
                  >
                    {d.modal.submitLabel}
                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>
                  <p className="mt-4 text-center font-bold uppercase tracking-widest text-slate-400">
                    {d.modal.trustBadge}
                  </p>
                </form>

                <button
                  onClick={() => setIsFormOpen(false)}
                  className="absolute right-6 top-4 text-2xl font-light text-white/50 transition-colors hover:text-white"
                >
                  ×
                </button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
