'use client';
/**
 * src/google-ranking-expert/sections/shared.tsx
 *
 * Shared sub-components reused across multiple section files:
 *  - Counter       — animated number counter (Framer Motion)
 *  - ContactModal  — the reusable green/white split contact modal
 */

import React, { useEffect, useRef } from 'react';
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
  AnimatePresence,
} from 'framer-motion';
import { TrendingUp, X, Send } from 'lucide-react';
import { contactModal } from '../../data/google-ranking-expert';

// ─────────────────────────────────────────────────────────────────────────────
// ANIMATED COUNTER
// ─────────────────────────────────────────────────────────────────────────────

export function Counter({ value }: { value: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest * 10) / 10);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, { duration: 2, ease: 'easeOut' });
      return controls.stop;
    }
  }, [inView, value, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

// ─────────────────────────────────────────────────────────────────────────────
// CONTACT MODAL (shared by ExpertDetail & CaseStudies sections)
// ─────────────────────────────────────────────────────────────────────────────

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  submitLabel?: string;
}

export function ContactModal({
  isOpen,
  onClose,
  submitLabel,
}: ContactModalProps) {
  const label = submitLabel ?? contactModal.submitLabel;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/80 backdrop-blur-xl"
          />

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            className="relative flex w-full max-w-2xl flex-col overflow-hidden rounded-[3rem] bg-white shadow-2xl md:flex-row"
          >
            {/* Left accent */}
            <div className="hidden w-1/3 flex-col justify-between bg-[#3cb878] p-10 text-white md:flex">
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20">
                  <TrendingUp size={24} />
                </div>
                <h3 className="text-2xl  uppercase uppercase leading-none tracking-tighter">
                  {contactModal.accentHeading}
                </h3>
              </div>
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">
                {contactModal.accentFooter}
              </p>
            </div>

            {/* Right: form */}
            <div className="relative flex-1 py-8 px-6  md:p-12">
              <button
                onClick={onClose}
                className="absolute right-6 top-6 p-2 font-bold text-slate-700 transition-colors hover:text-[#3cb878]"
              >
                <X size={24} />
              </button>

              <div className="mb-8">
                <h4 className="lg:text-xl text-lg  font-bold uppercase mt-10 tracking-tight text-slate-900">
                  {contactModal.formHeading}
                </h4>
                <p className="p mt-1 text-slate-700">
                  {contactModal.formSubtext}
                </p>
              </div>

              <form
                className="space-y-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  onClose();
                }}
              >
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <input
                    type="text"
                    placeholder={contactModal.namePh}
                    required
                    className="w-full rounded-2xl border border-slate-100 bg-slate-50 lg:px-5 lg:py-4 py-1 px-1 text-sm font-medium outline-none transition-all focus:bg-white focus:ring-2 focus:ring-[#3cb878]"
                  />
                  <input
                    type="email"
                    placeholder={contactModal.emailPh}
                    required
                    className="w-full rounded-2xl border border-slate-100 bg-slate-50 lg:px-5 lg:py-4 py-1 px-1  text-sm font-medium outline-none transition-all focus:bg-white focus:ring-2 focus:ring-[#3cb878]"
                  />
                </div>
                <input
                  type="url"
                  placeholder={contactModal.urlPh}
                  required
                  className="w-full rounded-2xl border border-slate-100 bg-slate-50 lg:px-5 lg:py-4 py-1 px-1  text-sm font-medium outline-none transition-all focus:bg-white focus:ring-2 focus:ring-[#3cb878]"
                />
                <input
                  type="tel"
                  placeholder={contactModal.phonePh}
                  required
                  className="w-full rounded-2xl border border-slate-100 bg-slate-50 lg:px-5 lg:py-4 py-1 px-1  text-sm font-medium outline-none transition-all focus:bg-white focus:ring-2 focus:ring-[#3cb878]"
                />
                <textarea
                  placeholder={contactModal.messagePh}
                  rows={3}
                  className="w-full resize-none rounded-2xl border border-slate-100 bg-slate-50 lg:px-5 lg:py-4 py-1 px-1  text-sm font-medium outline-none transition-all focus:bg-white focus:ring-2 focus:ring-[#3cb878]"
                />
                <button
                  type="submit"
                  className="group flex w-full items-center mb-5 justify-center gap-3 font-bold rounded-2xl bg-[#3cb878] lg:py-5 text-[11px]  uppercase py-3 text-white shadow-lg shadow-emerald-200 transition-all hover:bg-slate-900"
                >
                  {label}
                  <Send
                    size={16}
                    className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
