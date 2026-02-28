'use client';
/**
 * src/google-ranking-expert/sections/Testimonials.tsx
 *
 * Section 8: Client's Reviews — review carousel + Google Reviews CTA
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { testimonialsSection, reviews } from '../../data/google-ranking-expert';

export function Testimonials() {
  const d = testimonialsSection;

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-white py-16"
    >
      
      <div className="mx-auto max-w-3xl lg:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 space-y-4 text-center"
        >
          <h5 className="h5 font-bold uppercase tracking-[0.1em] text-[#3cb878]">
            {d.eyebrow}
          </h5>
          <h3 className="h3 leading-[0.9] tracking-tighter text-slate-900">
            {d.heading}
            <span className="text-[#3cb878]">{d.headingAccent}</span>
          </h3>
        </motion.div>

        {/* Carousel */}
        <div className="relative px-0 lg:px-4">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            className="pb-20"
          >
            {reviews.map((review, i) => (
              <SwiperSlide key={i}>
                <motion.div
                
                  whileHover={{ y: -5 }}
                  className="min-w-3xl relative mx-auto max-w-4xl  overflow-hidden rounded-[3rem] border border-slate-100 bg-white p-10 text-center  md:p-16"
                >
                  <Quote
                    className="absolute right-10 top-10 text-[#3cb878]/10"
                    size={120}
                  />
                  <div className="relative z-10 space-y-8">
                    <p className="p italic leading-relaxed text-slate-900">
                      &quot;{review.quote}&quot;
                    </p>
                    <div className="flex flex-col items-center gap-4">
                      <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border-4 border-orange-50 bg-white p-2 shadow-sm">
                        <img
                          src={review.logoUrl}
                          alt={review.name}
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <div>
                        <h4 className="h4 font-black uppercase tracking-tighter text-slate-900">
                          {review.name}
                        </h4>
                        <p className="p mt-1 text-xs font-black uppercase tracking-widest text-[#3cb878]">
                          {review.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Google Reviews CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-10 text-center  p-3 "
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group rounded-2xl bg-slate-900 px-3 lg:px-10 py-5 text-white shadow-xl transition-all duration-500 hover:bg-white hover:text-[#3cb878]"
          >
            <span className="p flex items-center lg:gap-2 font-bold ">
              {d.googleReviewsLabel}
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="text-[#3cb878] group-hover:text-[#3cb878]"
                  >
                    ★
                  </span>
                ))}
              </div>
            </span>
          </motion.button>
        </motion.div>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #cbd5e1 !important;
          opacity: 1 !important;
          width: 10px !important;
          height: 10px !important;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background: #3cb878 !important;
          width: 30px !important;
          border-radius: 5px !important;
        }
      `}</style>
    </section>
  );
}
