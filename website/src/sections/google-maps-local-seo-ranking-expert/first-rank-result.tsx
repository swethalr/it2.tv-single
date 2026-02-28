'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { firstRankResultData } from '@/data/google-maps-local-seo';

// Swiper Essential Styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function FirstRankResult() {
  const data = firstRankResultData;

  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute bottom-[5%] left-[-5%] h-[500px] w-[500px] animate-pulse rounded-full bg-[#3cb878]/30 blur-[100px]" />
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[-5%] top-[-10%] h-[30%] w-[95%] rounded-full bg-[#3cb878]/10 blur-[190px]" />
      </div>

      <div className="absolute left-1/4 top-0 -z-10 h-96 w-96 rounded-full opacity-60 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto mb-6 max-w-7xl space-y-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#3cb878] bg-[#dbffce] px-4 py-2"
          >
            <Trophy size={14} className="text-[#3cb878]" />
            <span className="p font-bold uppercase text-[#3cb878]">
              {data.badge}
            </span>
          </motion.div>
          <h3 className="h3 tracking-tighter text-white">
            {data.heading.main}{' '}
            <span className="text-[#3cb878]">{data.heading.highlight}</span>
          </h3>
        </div>

        {/* Carousel Wrapper */}
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
            className="!static w-full"
          >
            {data.results.map((imgSrc, index) => (
              <SwiperSlide
                key={index}
                className="max-w-[100%] px-10 md:max-w-[400px] lg:max-w-[450px]"
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

          {/* Elegant Pagination */}
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
