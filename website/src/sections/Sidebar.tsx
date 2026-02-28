'use client';
/**
 * src/google-ranking-expert/sections/Sidebar.tsx
 *
 * Sticky sidebar with 4 widgets:
 *  1. Free Website Audit magnet
 *  2. Professional Network (social links)
 *  3. Trust / 45-Day Challenge widget
 *  4. "Get In Touch" outline slide button
 */

import React from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  Star,
  Instagram,
  Linkedin,
  Twitter,
  ArrowRight,
} from 'lucide-react';
import { sidebar } from '../../data/google-ranking-expert';

// Icon map for social links
const SocialIcon: Record<string, React.ReactNode> = {
  Instagram: <Instagram size={18} />,
  LinkedIn: <Linkedin size={18} />,
  Twitter: <Twitter size={18} />,
};

export function Sidebar() {
  const d = sidebar;

  return (
    <aside className="order-1 hidden w-[28%] lg:order-2 lg:block">
      <div className="sticky top-24 space-y-8">
        {/* 1. Audit Magnet */}
        <motion.section
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="group relative overflow-hidden rounded-[3rem] bg-[#3cb878] p-8 text-white shadow-[0_30px_60px_-15px_rgba(60,184,120,0.7)]"
        >
          <Search className="absolute -right-4 -top-4 h-32 w-32 opacity-10 transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110" />
          <div className="relative z-10 space-y-6">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#3cb878]/10 backdrop-blur-md">
              <Search className="h-5 w-5 text-white" />
            </div>
            <div className="space-y-2">
              <h4 className="h4 tracking-relaxed whitespace-pre-line leading-relaxed">
                {d.audit.heading}
              </h4>
              <p className="p tracking-[0.02em] text-white">{d.audit.body}</p>
            </div>
            <button className="flex w-full items-center justify-between rounded-2xl bg-white px-6 py-4 text-xs font-black uppercase tracking-widest text-[#3cb878] transition-all hover:bg-slate-900 hover:text-[#3cb878]">
              {d.audit.buttonLabel} <ArrowRight size={16} />
            </button>
          </div>
        </motion.section>

        {/* 2. Professional Network */}
        <section className="rounded-[3rem] border border-slate-100 bg-white p-8 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.03)]">
          <h4 className="mb-6 font-bold uppercase tracking-[0.2em] text-slate-700">
            {d.network.heading}
          </h4>
          <div className="space-y-3">
            {d.network.socials.map((social) => (
              <a
                key={social.name}
                href="#"
                className={`group flex items-center justify-between rounded-2xl border border-slate-50 bg-slate-50/50 p-4 transition-all duration-300 hover:border-[#3cb878] hover:bg-white ${social.colorClass}`}
              >
                <div className="flex items-center gap-3">
                  <div className="text-slate-700 transition-colors group-hover:text-inherit">
                    {SocialIcon[social.name]}
                  </div>
                  <span className="h6 font-bold text-slate-900">
                    {social.name}
                  </span>
                </div>
                <span className="text-[16px] font-bold text-slate-700 group-hover:text-[#3cb878]">
                  {social.count}
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* 3. Trust Widget */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-[3rem] p-8 text-slate-900"
        >
          <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-[#3cb878]/10" />
          <div className="relative z-10 space-y-6">
            <div className="flex items-center gap-2 text-[#3cb878]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>
            <div className="space-y-1">
              <p className="font-bold uppercase tracking-[0.1em] text-slate-700">
                {d.trust.rankLabel}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-xl font-black tracking-tighter text-[#3cb878]">
                {d.trust.challengeValue}
              </p>
              <p className="text-[14px] font-bold uppercase tracking-[0.1em] text-slate-700">
                {d.trust.challengeLabel}
              </p>
            </div>
            <div className="border-t border-white/5 pt-4">
              <p className="text-[16px] font-medium italic leading-relaxed text-slate-700">
                {d.trust.quote}
              </p>
            </div>
          </div>
        </motion.div>

        {/* 4. Contact Button */}
        <button className="group relative h-16 w-full overflow-hidden rounded-2xl border-2 border-slate-900 bg-white p-[2px]">
          <div className="absolute inset-0 w-0 bg-[#3cb878] transition-all duration-500 ease-out group-hover:w-full" />
          <span className="relative z-10 flex items-center justify-center gap-2 text-xs font-black uppercase tracking-widest text-slate-900 transition-colors duration-500 group-hover:text-white">
            {d.contactButton} <ArrowRight size={14} />
          </span>
        </button>
      </div>
    </aside>
  );
}
