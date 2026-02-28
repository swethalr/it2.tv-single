'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { clientReviewDarkData } from '@/data/google-maps-local-seo';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

export default function ClientReviewDark() {
  const data = clientReviewDarkData;

  return (
    <section id="testimonials" className="overflow-hidden bg-black py-16">
      <div className="mx-auto max-w-3xl px-6">
        {/* Header Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 space-y-4 text-center"
        >
          <h3 className="h3 leading-[0.9] tracking-tighter text-white">
            {data.header.main}{' '}
            <span className="text-[#3cb878]">{data.header.highlight}</span>
          </h3>
        </motion.div>

        {/* Premium Carousel Container */}
        <div className="relative px-4">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            className="pb-20"
          >
            {data.reviews.map((review, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="relative mx-auto max-w-4xl overflow-hidden rounded-[3rem] border border-slate-100 bg-emerald-500/30 p-10 text-center shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] md:p-16"
                >
                  <Quote
                    className="absolute right-10 top-10 text-white/10"
                    size={120}
                  />

                  <div className="relative z-10 space-y-8">
                    <p className="p italic leading-relaxed text-white">
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
                        <h4 className="h4 font-black uppercase tracking-tighter text-white">
                          {review.name}
                        </h4>
                        <p className="p mt-1 text-xs font-black uppercase tracking-widest text-emerald-300">
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

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-10 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group rounded-2xl bg-emerald-700/50 px-10 py-5 text-white shadow-xl transition-all duration-500 hover:bg-white hover:text-[#3cb878]"
          >
            <span className="p flex items-center gap-3 font-bold uppercase tracking-[0.25em]">
              {data.ctaText}
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#3cb878]">
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
