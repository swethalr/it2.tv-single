'use client';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

export default function WebsiteFirstRank() {
  return (
    <section className="relative overflow-hidden bg-white py-24 selection:bg-orange-100 lg:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:40px_40px]" />

      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[-5%] top-[-10%] h-[30%] w-[95%] rounded-full bg-[#3cb878]/10 blur-[190px]" />
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-24">
          {/* --- IMAGE CONTAINER --- */}
          <div className="group relative w-full bg-transparent lg:w-[45%]">
            {/* Modern Bordered Wrapper */}
            <div className=" relative z-10 rounded-[3.5rem]  p-2  transition-transform duration-700 group-hover:scale-[1.02]">
              <div className="overflow-hidden rounded-[3rem]">
                {/* Main Platform Illustration */}
                <img
                  src="/assets/images/google-ranking-services/website-1st-rank-result.GIF"
                  alt="Google Ranking Platforms Cloud"
                  className=" h-full w-full "
                />
              </div>
            </div>

            {/* Decorative Background Aura */}
          </div>

          {/* --- CONTENT AREA --- */}
          <div className="w-full space-y-10 lg:w-[70%]">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-[#3cb878]] h-0.5 w-12" />
              </div>

              <h3 className="h3 text-center lg:text-left leading-[1.2]  text-slate-900">
                Website <span className=" text-[#3cb878]">1st Rank </span>{' '}
                Search Result
              </h3>
            </div>

            <div className="space-y-6">
              <p className="p  text-center lg:text-left leading-[2em] text-black">
                Benefit from our seasoned SEO experts who are committed to
                delivering Website Ranking Optimization services aimed at
                securing the prestigious No.1 position on Google. With a track
                record dating back to 2008, we've consistently assisted
                businesses in dominating search results and reaching the summit
                of Google. Harness the potency of top-tier outcomes through our
                unwavering SEO services. Since 2014, we've enabled businesses of
                all scales to conquer search rankings and secure coveted
                first-page placements on Google.
              </p>
              <p className="p text-center lg:text-left leading-[2em] text-black ">
                With our unwavering dedication to tangible results, we assure
                you of substantial sales growth and heightened online
                visibility. Join forces with us to elevate your business to the
                pinnacle of Google's rankings.
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
