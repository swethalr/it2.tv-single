'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

const slides = [
  {
    title: 'Google #1 Rank Specialist',
    text: 'Obtaining high-quality targeted organic traffic without paying paid ads.',
    img: '/assets/images/best-seo-expert/seo-analytics.webp',
    btnColor: 'bg-[#51cb93]',
  },
  {
    title: 'Best Google SEO Professional',
    text: 'Grow Your Business with New Clients? Contact us immediately',
    img: '/assets/images/best-seo-expert/seo-strategy.webp',
    btnColor: 'bg-[#ffb142]',
  },
];

export default function HeroSection() {
  return (
    <div className="w-full">
      <section className="relative h-[calc(100vh-140px)] w-full overflow-hidden bg-black">
        <Swiper
          modules={[EffectFade, Navigation]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop={true}
          speed={800}
          grabCursor={true}
          simulateTouch={true}
          touchRatio={1.5}
          navigation={{ nextEl: '.s-next', prevEl: '.s-prev' }}
          className="h-full w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div className="relative flex h-full w-full items-center justify-center">
                  <div className="absolute inset-0">
                    <Image
                      src={slide.img}
                      alt="Hero"
                      fill
                      className="object-cover opacity-60"
                      priority
                    />
                  </div>

                  {isActive && (
                    <div className="animate-in fade-in relative z-20 max-w-[940px] px-4 text-center duration-700">
                      <span className="mb-6 inline-block bg-white/20 px-3 py-1 text-[18px] font-semibold text-white">
                        Zammy Zaif
                      </span>
                      <h1 className="mb-4 text-[32px] font-black uppercase leading-tight text-white md:text-[60px] lg:text-[72px]">
                        {slide.title}
                      </h1>
                      <p className="mx-auto mb-10 max-w-2xl text-[18px] text-white/80">
                        {slide.text}
                      </p>
                      <button
                        className={`${slide.btnColor} rounded-full px-12 py-4 text-[14px] font-bold uppercase tracking-[2px] text-white`}
                      >
                        Get Started
                      </button>
                    </div>
                  )}
                </div>
              )}
            </SwiperSlide>
          ))}

          {/* Sticky Sidebar */}
          <div className="fixed right-0 top-1/2 z-[500] hidden -translate-y-1/2 flex-col lg:flex">
            <div className="rotate-180 cursor-pointer border-b border-white/10 bg-[#28a745] px-3 py-10 text-[10px] font-black uppercase tracking-widest text-white [writing-mode:vertical-lr]">
              Live Chat
            </div>
            <div className="rotate-180 cursor-pointer bg-[#007bff] px-3 py-10 text-[10px] font-black uppercase tracking-widest text-white [writing-mode:vertical-lr]">
              Mail Us
            </div>
          </div>

          <button className="s-prev absolute left-10 top-1/2 z-50 text-4xl font-bold text-white/90 hover:text-white">
            ←
          </button>
          <button className="s-next absolute right-10 top-1/2 z-50 text-4xl font-bold text-white/90 hover:text-white">
            →
          </button>
        </Swiper>
      </section>

      {/* 100% Identical Bottom Boxes - PLACED AFTER THE VIEWPORT */}
      <div className="hidden h-[130px] w-full grid-cols-3 lg:grid">
        <div className="group relative flex cursor-pointer flex-col justify-center overflow-hidden border-r border-white/5 bg-[#3cb878] px-12">
          <h4 className="text-[20px] font-bold text-white">Google SEO</h4>
          <p className="text-[12px] uppercase text-white/40">
            Want to Rank No.1 on Google
          </p>
          <span className="absolute bottom-0 right-8 -mb-5 text-[100px] font-black italic text-white/5">
            01
          </span>
          <div className="absolute bottom-0 left-0 h-[4px] w-full origin-left scale-x-0 bg-[#d63384] transition-transform group-hover:scale-x-100"></div>
        </div>

        <div className="relative flex cursor-pointer flex-col justify-center border-r border-white/5 bg-[#dbffce] px-12">
          <h4 className="text-[20px] font-bold text-white">
            Business Optimization
          </h4>
          <p className="text-[12px] uppercase text-white/80">
            Get business profile on top
          </p>
          <span className="absolute bottom-0 right-8 -mb-5 text-[100px] font-black italic text-white/10">
            02
          </span>
        </div>

        <div className="relative flex cursor-pointer flex-col justify-center bg-[#3cb878] px-12">
          <h4 className="text-[20px] font-bold text-white">
            Rank No.1 in Google
          </h4>
          <p className="text-[12px] uppercase text-white/80">
            Get website rank no.1
          </p>
          <span className="absolute bottom-0 right-8 -mb-5 text-[100px] font-black italic text-white/10">
            03
          </span>
        </div>
      </div>
    </div>
  );
}
