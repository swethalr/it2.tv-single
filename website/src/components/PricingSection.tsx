'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { ChevronLeft, ChevronRight, Check, Trophy } from 'lucide-react';

// CSS Imports
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

export default function PricingSection({
  pricingData,
}: {
  pricingData: any[];
}) {
  const [domLoaded, setDomLoaded] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);
  const [currency, setCurrency] = useState('usd');

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  if (!domLoaded) return null;

  return (
    <section className="relative overflow-hidden bg-[#fafafa] py-24 lg:py-32">
      {/* Background Decoration */}
      <div className="absolute left-1/4 top-0 -z-10 h-96 w-96 rounded-full bg-[#3cb878] opacity-10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header Section (Matching your Results Section UI) */}
        <div className="mx-auto mb-16 max-w-3xl space-y-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#3cb878] bg-[#dbffce] px-4 py-2">
            <Trophy size={14} className="text-[#3cb878]" />
            <span className="text-[16px] font-bold uppercase tracking-[0.3em] text-[#3cb878]">
              Flexible SEO Pricing
            </span>
          </div>
          <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-900 md:text-5xl">
            Cost of{' '}
            <span className="italic text-[#3cb878]">SEO Rank Services</span>
          </h2>

          {/* Currency Switcher */}
          <div className="mt-8 inline-flex rounded-full bg-slate-900 p-1 shadow-xl">
            {['usd', 'inr', 'gbp', 'aed', 'cad'].map((curr) => (
              <button
                key={curr}
                onClick={() => setCurrency(curr)}
                className={`rounded-full px-5 py-2 text-[14px] font-bold uppercase transition-all ${
                  currency === curr
                    ? 'bg-[#3cb878] text-white'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                {curr}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative w-full px-2 py-4 lg:px-12">
          {/* Custom Navigation - Positioned Outside the Swiper track to avoid blocking clicks */}
          <div className="pointer-events-none absolute inset-y-0 -left-4 -right-4 z-50 flex items-center justify-between">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="pointer-events-auto flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-[#3cb878] text-white shadow-2xl transition-all hover:scale-110 hover:bg-black active:scale-95"
            >
              <ChevronLeft size={32} />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="pointer-events-auto flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-[#3cb878] text-white shadow-2xl transition-all hover:scale-110 hover:bg-black active:scale-95"
            >
              <ChevronRight size={32} />
            </button>
          </div>

          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={false}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
              1280: { slidesPerView: 4, spaceBetween: 30 },
            }}
            className="!static w-full pb-16"
          >
            {pricingData.map((plan) => (
              <SwiperSlide key={plan.id}>
                <div className="flex h-[600px] flex-col rounded-[2.5rem] border-4 border-[#3cb878] bg-white p-8 text-black shadow-xl transition-transform duration-300 hover:scale-[1.02]">
                  <h4 className="mb-6 border-b border-[#3cb878] pb-4 text-center text-xl font-bold uppercase">
                    {plan.title}
                  </h4>

                  <ul className="mb-8 flex-grow space-y-4">
                    {plan.features.map((feature: string, i: number) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-[14px] font-semibold leading-tight text-slate-700"
                      >
                        <div className="mt-1 shrink-0 rounded bg-[#3cb878] p-0.5">
                          <Check
                            size={12}
                            className="stroke-[4px] text-white"
                          />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto border-t border-slate-100 pt-6 text-center">
                    <p className="mb-1 text-xs font-bold uppercase text-slate-400">
                      Total Investment
                    </p>
                    <p className="text-2xl font-black text-slate-900">
                      {plan.prices[currency]}
                    </p>
                    <button className="mt-6 w-full rounded-full bg-[#3cb878] py-4 font-bold uppercase tracking-widest text-white shadow-lg shadow-[#3cb878]/20 transition-all hover:bg-slate-900">
                      Contact Now
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Premium Pagination Styling */}
          <div className="swiper-pagination-pricing mt-4 flex justify-center gap-2" />
        </div>
      </div>

      <style jsx global>{`
        .swiper-pagination-pricing .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #cbd5e1;
          opacity: 1;
        }
        .swiper-pagination-pricing .swiper-pagination-bullet-active {
          background: #3cb878 !important;
          width: 24px;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
}
