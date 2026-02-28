'use client';
/**
 * src/local-seo-service-london/sections/shared.tsx
 *
 * Shared sub-components reused across multiple section files:
 *  - Counter         — animated number (Framer Motion)
 *  - ContactModal    — green/white split two-panel contact modal
 *  - ChecklistModal  — compact single-column checklist download modal
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
import { TrendingUp, X, Send, ArrowRight } from 'lucide-react';

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
// CONTACT MODAL — two-panel green/white (used by RankHigher & CaseStudies)
// ─────────────────────────────────────────────────────────────────────────────

export interface ContactModalData {
  accentHeading: string;
  accentFooter: string;
  formHeading: string;
  formSubtext: string;
  namePh: string;
  emailPh: string;
  urlPh: string;
  phonePh: string;
  messagePh: string;
  submitLabel: string;
}

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: ContactModalData;
}

export function ContactModal({ isOpen, onClose, data }: ContactModalProps) {
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
                <h3 className="text-2xl font-black uppercase leading-none tracking-tighter">
                  {data.accentHeading}
                </h3>
              </div>
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">
                {data.accentFooter}
              </p>
            </div>

            {/* Right: form */}
            <div className="relative flex-1 p-8 md:p-12">
              <button
                onClick={onClose}
                className="absolute right-6 top-6 p-2 text-slate-400 transition-colors hover:text-[#3cb878]"
              >
                <X size={24} />
              </button>

              <div className="mb-8">
                <h4 className="text-xl font-black uppercase tracking-tight text-slate-900">
                  {data.formHeading}
                </h4>
                <p className="p mt-1 text-slate-700">{data.formSubtext}</p>
              </div>

              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  onClose();
                }}
              >
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder={data.namePh}
                      required
                      className="w-full rounded-2xl border border-slate-100 bg-slate-50 py-4 pl-5 pr-5 text-sm font-medium outline-none transition-all focus:bg-white focus:ring-2 focus:ring-[#3cb878]"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder={data.emailPh}
                      required
                      className="w-full rounded-2xl border border-slate-100 bg-slate-50 py-4 pl-5 pr-5 text-sm font-medium outline-none transition-all focus:bg-white focus:ring-2 focus:ring-[#3cb878]"
                    />
                  </div>
                </div>
                <input
                  type="url"
                  placeholder={data.urlPh}
                  required
                  className="w-full rounded-2xl border border-slate-100 bg-slate-50 py-4 pl-5 pr-5 text-sm font-medium outline-none transition-all focus:bg-white focus:ring-2 focus:ring-[#3cb878]"
                />
                <input
                  type="tel"
                  placeholder={data.phonePh}
                  required
                  className="w-full rounded-2xl border border-slate-100 bg-slate-50 py-4 pl-5 pr-5 text-sm font-medium outline-none transition-all focus:bg-white focus:ring-2 focus:ring-[#3cb878]"
                />
                <textarea
                  placeholder={data.messagePh}
                  rows={3}
                  className="w-full resize-none rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4 text-sm font-medium outline-none transition-all focus:bg-white focus:ring-2 focus:ring-[#3cb878]"
                />
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-[#3cb878] py-5 text-[11px] font-black uppercase tracking-[0.2em] text-white shadow-lg shadow-orange-200 transition-all hover:bg-slate-900"
                >
                  {data.submitLabel}
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

// ─────────────────────────────────────────────────────────────────────────────
// CHECKLIST MODAL — compact single-column download modal
// ─────────────────────────────────────────────────────────────────────────────

export interface ChecklistModalData {
  heading: string;
  subheading: string;
  nameLbl: string;
  namePh: string;
  emailLbl: string;
  emailPh: string;
  submitLabel: string;
  trustBadge: string;
}

interface ChecklistModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: ChecklistModalData;
}

export function ChecklistModal({ isOpen, onClose, data }: ChecklistModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
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
                {data.heading}
              </h3>
              <p className="p mt-3 font-bold uppercase tracking-[0.2em] opacity-90">
                {data.subheading}
              </p>
            </div>

            {/* Form */}
            <form
              className="space-y-5 p-10"
              onSubmit={(e) => {
                e.preventDefault();
                onClose();
              }}
            >
              <div className="text-left">
                <label className="ml-1 text-[12px] font-black uppercase tracking-widest text-slate-700">
                  {data.nameLbl}
                </label>
                <input
                  type="text"
                  placeholder={data.namePh}
                  required
                  className="mt-1 w-full rounded-xl border border-slate-100 bg-slate-50 px-5 py-4 text-sm font-medium text-slate-900 outline-none transition-all focus:bg-white focus:ring-2 focus:ring-[#3cb878]"
                />
              </div>
              <div className="text-left">
                <label className="ml-1 text-[12px] font-black uppercase tracking-widest text-slate-700">
                  {data.emailLbl}
                </label>
                <input
                  type="email"
                  placeholder={data.emailPh}
                  required
                  className="mt-1 w-full rounded-xl border border-slate-100 bg-slate-50 px-5 py-4 text-sm font-medium text-slate-900 outline-none transition-all focus:bg-white focus:ring-2 focus:ring-[#3cb878]"
                />
              </div>
              <button
                type="submit"
                className="group mt-4 flex w-full items-center justify-center gap-3 rounded-2xl bg-slate-900 py-5 text-[14px] font-black uppercase tracking-[0.2em] text-white shadow-lg transition-all duration-500 hover:bg-[#3cb878]"
              >
                {data.submitLabel}
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
              <p className="mt-4 text-center font-bold uppercase tracking-widest text-slate-400">
                {data.trustBadge}
              </p>
            </form>

            {/* Close */}
            <button
              onClick={onClose}
              className="absolute right-6 top-4 text-2xl font-light text-white/50 transition-colors hover:text-white"
            >
              ×
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
