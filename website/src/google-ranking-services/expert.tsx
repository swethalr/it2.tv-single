'use client';
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

import { Trophy } from 'lucide-react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

export default function Expert() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute bottom-[5%] left-[-5%] h-[500px] w-[500px] animate-pulse rounded-full bg-[#3cb878]/30 blur-[100px]" />
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[-5%] top-[-10%] h-[30%] w-[95%] rounded-full bg-[#3cb878]/10 blur-[190px]" />
      </div>
      {/* Premium Background Accents */}
      <div className="absolute left-1/4 top-0 -z-10 h-96 w-96 rounded-full  opacity-60 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-7xl space-y-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#3cb878] bg-[#dbffce] px-4 py-2"
          >
            <Trophy size={14} className="text-[#3cb878]" />
            <span className="p  font-bold uppercase  text-[#3cb878]">
              Our First Rank Results
            </span>
          </motion.div>
          <h2 className="h2 tracking-tighter text-slate-900">
            Expert in{' '}
            <span className=" text-[#3cb878]">Google Ranking Services</span>
          </h2>
          <p className="p max-w-7xl  text-black">
            Google Ranking Services specializes in achieving the first rank on
            Google's SERP for clients locally & globally. We offer comprehensive
            services, including competitor analysis, strategic content creation,
            high-quality backlinks, GBP optimization & on-page technical
            optimization tailored to align with Google's algorithms. Our team of
            Google Rank Experts attracts the right audience for your business
            with our specialized SEO ranking services.
          </p>
        </div>

        {/* Carousel Wrapper: This div prevents the spillover into the sidebar */}
        <div className="relative w-full overflow-hidden py-4">
          <Swiper
            modules={[Autoplay, Pagination]}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination-premium',
            }}
            // Fixed width behavior to stay inside Main
            className="!static w-full"
          >
            {[
              '/assets/images/google-ranking-services/preston-dental-seo-win.webp',
              '/assets/images/google-ranking-services/realestate-coach.webp',
              '/assets/images/google-ranking-services/property-buyers-in-london-result.webp',
              '/assets/images/google-ranking-services/shingle-roofing-experts-los-angeles-result.webp',
              '/assets/images/google-ranking-services/dentru.webp',
              '/assets/images/google-ranking-services/google-business-ranking-performance.webp',
              '/assets/images/google-ranking-services/roy-cleeves.webp',
              '/assets/images/google-ranking-services/dentru-gurgaon.webp',
              '/assets/images/google-ranking-services/studio-7rk.webp',
            ].map((imgSrc, index) => (
              <SwiperSlide
                key={index}
                className="max-w-[100%] md:px-10 md:max-w-[400px] lg:max-w-[450px]"
              >
                <div className="overflow-hidden rounded-[1.5rem] border border-slate-100 bg-white shadow-xl md:rounded-[2.5rem]">
                  <img
                    src={imgSrc}
                    alt={`SEO Result ${index + 1}`}
                    className="block h-auto w-full object-contain transition-transform duration-500 hover:scale-[1.01]"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Elegant Pagination (Inside Main Only) */}
          <div className="swiper-pagination-premium mt-10 flex justify-center gap-2" />
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
