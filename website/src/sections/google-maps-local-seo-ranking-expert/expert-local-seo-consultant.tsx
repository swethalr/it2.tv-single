'use client';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import { ExpertLocalSeoConsultant } from '@/data/google-maps-local-seo';

export default function ExpertLocalSeoConstultant() {
  const data = ExpertLocalSeoConsultant;
  return (
    <section className="relative overflow-hidden  bg-black py-20">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[-5%] top-[-10%] h-[30%] w-[95%] rounded-full bg-[#3cb878]/50 blur-[190px]" />
        <div
          className="absolute inset-0 opacity-[0.09]"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: '45px 45px',
          }}
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
          {/* CONTENT SIDE */}
          <div className="lg:col-span-7">
            <span className="p font-medium uppercase text-emerald-400">
              {data.badge}
            </span>
            <h2 className="h2 max-w-6xl leading-tight text-white">
              {data.title}
            </h2>

            <div className="mb-6 mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-green-500 to-emerald-500"></div>

            <p className="p leading-relaxed text-white">{data.description}</p>
          </div>

          {/* IMAGE SIDE */}
          <div className="group relative lg:col-span-5">
            <div className="absolute inset-0 rounded-3xl bg-black blur-xl  transition group-hover:opacity-100"></div>

            <img
              src={data.image}
              alt={data.alt}
              className="relative z-10 w-full rounded-3xl border border-green-100 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
