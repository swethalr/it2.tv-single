'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, FreeMode } from 'swiper/modules';
import { ChevronRight, ChevronLeft, Trophy } from 'lucide-react';
import { futuristicServicesData } from '@/data/google-maps-local-seo';

// Swiper Essential Styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const FuturisticServices = () => {
  const data = futuristicServicesData;

  return (
    <section className="relative overflow-hidden bg-[#050505] py-24 lg:py-32">
      {/* Dynamic Backgrounds */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.01] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:60px_60px]" />
      <div className="absolute left-1/2 top-0 h-full w-full -translate-x-1/2 bg-[radial-gradient(circle_at_center,#10b98105_0%,transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute bottom-[5%] left-[-5%] h-[500px] w-[500px] animate-pulse rounded-full bg-[#3cb878]/30 blur-[100px]" />
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[-5%] top-[-10%] h-[30%] w-[95%] rounded-full bg-[#3cb878]/10 blur-[190px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 flex flex-col items-end justify-between gap-8 md:flex-row">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1">
              <Trophy size={14} className="text-emerald-400" />
              <span className="text-[12px] uppercase tracking-[0.2em] text-emerald-400">
                {data.badge}
              </span>
            </div>
            <h2 className="h2 mb-6 leading-[0.9] tracking-[0.01em] text-white">
              {data.titleMain}{' '}
              <span className="text-emerald-500">{data.titleHighlight}</span>
            </h2>
          </div>

          {/* Controls */}
          <div className="mb-2 flex gap-3">
            <button className="nav-prev rounded-full border border-white/10 bg-zinc-900 p-5 text-white shadow-xl transition-all hover:bg-emerald-500 hover:text-black active:scale-95">
              <ChevronLeft size={28} />
            </button>
            <button className="nav-next rounded-full border border-white/10 bg-zinc-900 p-5 text-white shadow-xl transition-all hover:bg-emerald-500 hover:text-black active:scale-95">
              <ChevronRight size={28} />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="w-full">
          <Swiper
            modules={[Navigation, Pagination, FreeMode]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            centeredSlides={true}
            speed={800}
            grabCursor={true}
            navigation={{ nextEl: '.nav-next', prevEl: '.nav-prev' }}
            pagination={{ clickable: true, el: '.custom-pagination' }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 2.5 },
            }}
            className="!overflow-visible"
          >
            {data.services.map((service, index) => (
              <SwiperSlide
                key={index}
                className="py-10 transition-all duration-500 ease-out"
              >
                <div className="group relative flex h-full min-h-[400px] flex-col justify-between overflow-hidden rounded-[3rem] border border-white/5 bg-zinc-900/40 p-10 backdrop-blur-md transition-all duration-500 hover:border-emerald-500/40">
                  <div className="absolute -right-24 -top-24 h-48 w-48 bg-emerald-500/10 blur-[80px] transition-all group-hover:bg-emerald-500/20" />

                  <div>
                    <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-[1.5rem] border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 transition-transform duration-500 group-hover:rotate-3 group-hover:scale-110">
                      {service.icon}
                    </div>

                    <span className="mb-4 block text-sm uppercase tracking-[0.3em] text-emerald-500/90">
                      {service.tag}
                    </span>

                    <h4 className="h4 service-card-heading mb-6 font-bold leading-snug text-white transition-colors group-hover:text-emerald-400">
                      {service.title}
                    </h4>

                    <p className="p max-w-xl leading-relaxed text-gray-400">
                      {service.desc}
                    </p>
                  </div>

                  <div className="mt-auto flex items-center justify-between pt-8 text-xs font-bold uppercase tracking-widest text-white transition-colors group-hover:text-emerald-400">
                    <span>Contact us</span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-all group-hover:translate-x-2 group-hover:border-emerald-500">
                      <ChevronRight size={18} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="custom-pagination mt-16 flex justify-center gap-3" />
        </div>
      </div>

      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          width: 40px;
          height: 4px;
          border-radius: 2px;
          background: rgba(255, 255, 255, 0.05);
          opacity: 1;
          transition: all 0.4s ease;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background: #10b981 !important;
          box-shadow: 0 0 20px rgba(16, 185, 129, 0.4);
        }
        .swiper-slide-active {
          transform: scale(1.05);
          z-index: 10;
        }
        .swiper-slide-active > div {
          background: rgba(24, 24, 27, 0.8) !important;
          border-color: rgba(16, 185, 129, 0.4) !important;
        }
        .service-card-heading {
          color: #ffffff !important;
          transition: color 0.5s ease;
        }
        .swiper-slide-active .service-card-heading {
          color: #34d399 !important;
        }
      `}</style>
    </section>
  );
};

export default FuturisticServices;
