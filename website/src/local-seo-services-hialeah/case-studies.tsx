'use client';
/**
 * src/local-seo-services-hialeah/sections/CaseStudies.tsx
 *
 * Section 3: AI SEO Result – Our Customer from Hialeah
 * Swiper carousel (3 images) + result paragraph + CTA → contact modal
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, X, Send } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import {
  caseStudiesSection,
  caseStudyImages,
  contactModal,
} from '../../data/local-seo-services-hialeah';

export function CaseStudies() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const d = caseStudiesSection;
  const cm = contactModal;

  return (
    <section
      id="case-studies"
      className="relative overflow-hidden bg-white py-6"
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
          className="mb-16 space-y-4 text-center"
        >
          <h5 className="h5 font-bold uppercase tracking-[0.2em] text-[#3cb878]">
            {d.eyebrow}
          </h5>
          <h3 className="h3 leading-[0.9] tracking-tighter text-slate-900">
            {d.heading}
            <span className="text-[#3cb878]">{d.headingAccent}</span>
          </h3>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="group relative"
        >
          <Swiper
            modules={[Pagination, Autoplay, EffectFade]}
            spaceBetween={30}
            slidesPerView={1}
            loop
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            className="overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)]"
          >
            {caseStudyImages.map((study, index) => (
              <SwiperSlide key={index}>
                <div className="relative aspect-[18/9] w-full overflow-hidden">
                  <img
                    src={study.src}
                    alt={study.alt}
                    className="h-full w-full select-none object-cover"
                  />
                  <div className="absolute inset-0 rounded-[2.5rem] ring-1 ring-inset ring-black/5" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute -bottom-6 -right-6 -z-10 h-24 w-24 rounded-full bg-[#3cb878]/10 blur-3xl" />
        </motion.div>

        {/* Result Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="relative pb-10 pt-24"
        >
          <div className="absolute left-1/2 top-12 h-[1px] w-24 -translate-x-1/2 bg-slate-100" />
          <p className="p mx-auto max-w-4xl leading-[1.8em] text-slate-900">
            {d.resultText}
          </p>
        </motion.div>

        {/* CTA */}
        <div className="mt-5 text-center">
          <motion.button
            onClick={() => setIsModalOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-4 rounded-2xl bg-[#3cb878] px-10 py-6 text-white shadow-xl transition-all duration-500 hover:bg-white hover:text-[#3cb878]"
          >
            <span className="h6 font-bold uppercase tracking-[0.25em]">
              {d.ctaLabel}
            </span>
          </motion.button>
        </div>

        {/* Inline Contact Modal */}
        <AnimatePresence>
          {isModalOpen && (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsModalOpen(false)}
                className="absolute inset-0 bg-slate-900/80 backdrop-blur-xl"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 40 }}
                className="relative flex w-full max-w-2xl flex-col overflow-hidden rounded-[3rem] bg-white shadow-2xl md:flex-row"
              >
                {/* Left Accent */}
                <div className="hidden w-1/3 flex-col justify-between bg-[#3cb878] p-10 text-white md:flex">
                  <div className="space-y-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20">
                      <TrendingUp size={24} />
                    </div>
                    <h3 className="text-2xl font-black uppercase leading-none tracking-tighter">
                      {cm.accentHeading}
                    </h3>
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">
                    {cm.accentFooter}
                  </p>
                </div>
                {/* Right Form */}
                <div className="relative flex-1 p-8 md:p-12">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="absolute right-6 top-6 p-2 text-slate-400 transition-colors hover:text-[#3cb878]"
                  >
                    <X size={24} />
                  </button>
                  <div className="mb-8">
                    <h4 className="text-xl font-black uppercase tracking-tight text-slate-900">
                      {cm.formHeading}
                    </h4>
                    <p className="mt-1 text-sm text-slate-500">
                      {cm.formSubtextAlt}
                    </p>
                  </div>
                  <form
                    className="space-y-4"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setIsModalOpen(false);
                    }}
                  >
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <input
                        type="text"
                        placeholder={cm.namePh}
                        required
                        className="w-full rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4 text-sm font-medium outline-none transition-all focus:bg-white focus:ring-2 focus:ring-[#3cb878]"
                      />
                      <input
                        type="email"
                        placeholder={cm.emailPh}
                        required
                        className="w-full rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4 text-sm font-medium outline-none transition-all focus:bg-white focus:ring-2 focus:ring-[#3cb878]"
                      />
                    </div>
                    <input
                      type="url"
                      placeholder={cm.urlPh}
                      required
                      className="w-full rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4 text-sm font-medium outline-none transition-all focus:bg-white focus:ring-2 focus:ring-[#3cb878]"
                    />
                    <input
                      type="tel"
                      placeholder={cm.phonePh}
                      required
                      className="w-full rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4 text-sm font-medium outline-none transition-all focus:bg-white focus:ring-2 focus:ring-[#3cb878]"
                    />
                    <textarea
                      placeholder={cm.messagePh}
                      rows={3}
                      className="w-full resize-none rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4 text-sm font-medium outline-none transition-all focus:bg-white focus:ring-2 focus:ring-[#3cb878]"
                    />
                    <button
                      type="submit"
                      className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-[#3cb878] py-5 text-[11px] text-sm font-black uppercase tracking-[0.2em] text-white shadow-lg shadow-orange-200 transition-all hover:bg-slate-900"
                    >
                      {cm.submitLabel}
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
      </div>
    </section>
  );
}
