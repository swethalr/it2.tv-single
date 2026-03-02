'use client';
/**
 * src/google-ranking-expert/sections/SeoResults.tsx
 *
 * Section 1: Client's 1st Rank SEO Results carousel + metrics strip
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import { Counter } from './shared';
import {
  seoResultsSection,
  resultCarouselImages,
  heroMetrics,
} from '../../data/google-ranking-expert';

export function SeoResults() {
  return (
    <section
      id="evidence-results"
      className="relative max-w-full space-y-12 overflow-hidden md:space-y-20"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[5%] top-[-10%] h-[30%] w-[95%] rounded-full bg-[#3cb878]/10 blur-[100px]" />
      </div>

      {/* Header */}
      <div className="mx-auto max-w-3xl  text-center">
        <h5 className="h5 mb-4 font-bold tracking-[0.1em] text-[#3cb878]">
          {seoResultsSection.eyebrow}
        </h5>
        <h3 className="h3 leading-[0.9] tracking-tighter text-slate-900">
          {seoResultsSection.heading}
          <span className="text-[#3cb878]">
            {seoResultsSection.headingAccent}
          </span>
        </h3>
      </div>

      {/* Coverflow Carousel */}
      <div className="relative w-full overflow-hidden py-4">
        <Swiper
          modules={[Autoplay, Pagination, EffectCoverflow]}
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView="auto"
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{ clickable: true, el: '.swiper-pagination-premium' }}
          className="!static w-full"
        >
          {resultCarouselImages.map((imgSrc, index) => (
            <SwiperSlide
              key={index}
              className="max-w-[100%] lg:px-10 md:max-w-[400px] lg:max-w-[450px]"
            >
              <div className="overflow-hidden rounded-[1.5rem] border border-slate-100 bg-white  md:rounded-[2.5rem]">
                <img
                  src={imgSrc}
                  alt={`SEO Result ${index + 1}`}
                  className="block h-auto w-full object-contain transition-transform duration-500 hover:scale-[1.01]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination-premium mt-10 flex justify-center gap-2" />
      </div>

      {/* Metrics Strip */}
      <div className="relative overflow-hidden rounded-[2.5rem] bg-[#3cb878] lg:px-4 lg:py-8 mx-10 py-8 ">
        <div className="pointer-events-none absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.12]" />
        <div className="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-0">
          {heroMetrics.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center first:border-none lg:items-center lg:border-l lg:border-white/20 lg:px-5"
            >
              <div className="flex items-baseline gap-1">
                <div className="text-xl font-bold leading-none tracking-tighter text-white md:text-2xl">
                  <Counter value={stat.v} />
                </div>
                <span className="text-xl font-bold text-[#E4FFF1] md:text-2xl">
                  {stat.unit}
                </span>
              </div>
              <p className="p mt-2 font-bold text-white">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .swiper-pagination-premium .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #cbd5e1;
          opacity: 1;
          transition: all 0.3s ease;
        }
        .swiper-pagination-premium .swiper-pagination-bullet-active {
          background: #3cb878 !important;
          width: 24px;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
}
