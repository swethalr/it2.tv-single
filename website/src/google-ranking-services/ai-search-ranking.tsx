'use client';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

export default function GeoAIranking() {
  return (
    <section className="relative overflow-hidden bg-black py-24 selection:bg-orange-100 lg:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute bottom-[5%] left-[-5%] h-[500px] w-[500px] animate-pulse rounded-full bg-[#3cb878]/30 blur-[100px]" />
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[-5%] top-[-10%] h-[30%] w-[95%] rounded-full bg-[#3cb878]/10 blur-[190px]" />
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="h2 mx-auto text-center leading-[0.95] text-white">
          <span className=" text-[#3cb878]">Dominating GEO & </span> Ai Search
          Rankings
        </h2>
        <div className="flex flex-col items-center gap-16 lg:flex-row-reverse lg:gap-24">
          {/* --- IMAGE CONTAINER --- */}
          <div className="group relative mt-16 w-full lg:w-[35%]">
            {/* Modern Bordered Wrapper */}
            <div className=" relative z-10 rounded-[3.5rem]  p-2  transition-transform duration-700 group-hover:scale-[1.02]">
              <div className="overflow-hidden ">
                {/* Main Platform Illustration */}
                <img
                  src="/assets/images/google-ranking-services/dominate-ai-search-ranking.webp"
                  alt="Google Ranking Platforms Cloud"
                  className=" h-full w-full "
                />
              </div>
            </div>

            {/* Decorative Background Aura */}
            <div className="absolute left-1/2 top-1/2 -z-10 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3cb878] blur-[100px]" />
          </div>

          {/* --- CONTENT AREA --- */}
          <div className="w-full space-y-10  lg:w-[70%]">
            <div className="space-y-4">
              <div className="flex items-center  gap-3">
                <div className="bg-[#3cb878]] h-0.5 w-12" />
              </div>
            </div>

            <div className="space-y-6">
              <p className="p text-center lg:text-left leading-[2em] text-white">
                Search engine ranking defines where a website or URL appears on
                search engine results pages. Pages that rank well are placed at
                the top, attracting more visitors and engagement. Dominating GEO
                and AI search rankings means becoming the leading choice for
                local and AI-driven search queries, elevating your visibility in
                location-based and AI-powered search environments. Higher
                rankings not only boost your presence but establish your brand
                as an authoritative and trusted resource. Our strategies ensure
                you don’t just appear in search results— you stand out
                prominently, becoming the focal point in both the digital and
                local search landscapes.
              </p>
              <p className="p text-center lg:text-left leading-[2em] text-white ">
                We leverage advanced location targeting, AI-powered content
                optimization including AEO, and user behavior signals to capture
                traffic from both traditional and emerging AI platforms. This
                approach helps you maintain a competitive edge as search evolves
                in 2026, ensuring your business thrives across all search
                dimensions.
              </p>
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
