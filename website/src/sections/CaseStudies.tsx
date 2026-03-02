'use client';
/**
 * src/google-ranking-expert/sections/CaseStudies.tsx
 *
 * Section 7: SEO Growth Case Studies — carousel + CTA modal
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import {
  caseStudiesSection,
  caseStudyImages,
} from '../../data/google-ranking-expert';
import { ContactModal } from './shared';

export function CaseStudies() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const d = caseStudiesSection;

  return (
    <section
      id="case-studies"
      className="relative overflow-hidden bg-white py-6"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[5%] top-[-10%] h-[30%] w-[95%] rounded-full bg-[#3cb878]/10 blur-[100px]" />
      </div>
      <div className="mx-auto max-w-5xl lg:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 space-y-4 text-center"
        >
          <h5 className="h5 font-bold uppercase tracking-[0.4em] text-[#3cb878]">
            {d.eyebrow}
          </h5>
          <h3 className="h3 leading-[0.9] tracking-tighter text-slate-900">
            {d.heading}
            <span className="text-[#3cb878]">{d.headingAccent}</span>
          </h3>
          <p className="p mx-auto max-w-2xl pt-4 text-black">{d.subtext}</p>
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
            className="overflow-hidden   bg-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)]"
          >
            {caseStudyImages.map((study, index) => (
              <SwiperSlide key={index}>
                <div className="relative aspect-[18/9] w-full overflow-hidden">
                  <img
                    src={study.src}
                    alt={study.alt}
                    className="h-full w-full select-none object-cover"
                  />
                  <div className="absolute inset-0  ring-1 ring-inset ring-black/5" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute -bottom-6 -right-6 -z-10 h-24 w-24  bg-[#3cb878]/10 blur-3xl" />
        </motion.div>

        {/* CTA */}
        <div className="mt-20 text-center">
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

        {/* Shared Contact Modal */}
        <ContactModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          submitLabel="SUBMIT"
        />
      </div>
    </section>
  );
}
