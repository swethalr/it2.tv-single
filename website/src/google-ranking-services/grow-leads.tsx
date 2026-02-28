'use client';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

export default function GrowLeads() {
  return (
    <section className="relative overflow-hidden bg-white py-24 selection:bg-orange-100 lg:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute bottom-[5%] left-[-5%] h-[500px] w-[500px] animate-pulse rounded-full bg-[#3cb878]/30 blur-[100px]" />
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[-5%] top-[-10%] h-[30%] w-[95%] rounded-full bg-[#3cb878]/10 blur-[190px]" />
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-16 lg:flex-row-reverse lg:gap-24">
          {/* --- IMAGE CONTAINER --- */}
          <div className="group relative w-full lg:w-[40%]">
            {/* Modern Bordered Wrapper */}
            <div className=" relative z-10 rounded-[3.5rem]  p-2 transition-transform duration-700 group-hover:scale-[1.02]">
              <div className="overflow-hidden rounded-[3rem]">
                {/* Main Platform Illustration */}
                <img
                  src="/assets/images/google-ranking-services/grow-with-google-business-profile.GIF"
                  alt="Google Ranking Platforms Cloud"
                  className=" h-full w-full "
                />
              </div>
            </div>

            {/* Decorative Background Aura */}
            <div className="absolute left-1/2 top-1/2 -z-10 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3cb878] blur-[100px]" />
          </div>

          {/* --- CONTENT AREA --- */}
          <div className="w-full space-y-10 lg:w-[65%]">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-[#3cb878]] h-0.5 w-12" />
              </div>
              <h5 className="h5 mb-1  text-center lg:text-left font-bold uppercase tracking-wider text-[#3cb878]">
                GBP is Your Key to Attract Local Audience
              </h5>
              <h3 className="h3 leading-[1.2]  text-center lg:text-left tracking-tighter text-slate-900">
                <span className=" text-[#3cb878]"> Grow Leads </span> with
                Google Business Profile
              </h3>
            </div>

            <div className="space-y-6">
              <p className="p text-center lg:text-left leading-[2em] text-black">
                Our team specializes in optimizing your Google Business Profile
                to maximize visibility and attract qualified leads in your local
                area. We'll ensure your profile is complete, accurate, and
                showcases positive customer reviews. Additionally, we'll
                strategically use Google Posts, messaging features, and targeted
                Q&A responses to build trust and convert searchers into
                customers. Our service helps you dominate local search results
                and drive a consistent stream of warm leads directly to your
                business.
              </p>
            </div>

            {/* Premium CTA Button */}
            <div className="pt-4">
              <button className="group relative overflow-hidden rounded-2xl bg-[#3cb878] px-6 py-5 shadow-2xl shadow-slate-200 transition-all hover:scale-105 active:scale-95">
                {/* Shimmer Effect */}
                <div className="absolute inset-0 translate-y-full bg-white  transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
                <span className="h6 relative z-10 flex items-center gap-4 uppercase tracking-widest text-white group-hover:text-[#3cb878]">
                  Contact Now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform group-hover:translate-x-2"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
    @keyframes bounce-slow {
      0%, 100% { transform: translateY(-50%) translateY(0); }
      50% { transform: translateY(-50%) translateY(-15px); }
    }
    .animate-bounce-slow {
      animation: bounce-slow 4s ease-in-out infinite;
    }
  `,
        }}
      />
    </section>
  );
}
