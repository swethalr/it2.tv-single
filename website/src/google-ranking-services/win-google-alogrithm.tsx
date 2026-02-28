'use client';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

export default function WinGoogleAlogrithm() {
  return (
    <section className="relative overflow-hidden bg-white py-24 selection:bg-orange-100 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-16 lg:flex-row-reverse lg:gap-24">
          {/* --- IMAGE CONTAINER --- */}
          <div className="group relative w-full lg:w-[45%]">
            {/* Modern Bordered Wrapper */}
            <div className=" relative z-10 rounded-[3.5rem]  p-2  transition-transform duration-700 group-hover:scale-[1.02]">
              <div className="overflow-hidden rounded-[3rem]">
                {/* Main Platform Illustration */}
                <img
                  src="/assets/images/google-ranking-services/win-google-algorithm.webp"
                  alt="Google Ranking Platforms Cloud"
                  className=" h-full w-full "
                />
              </div>
            </div>

            {/* Decorative Background Aura */}
            <div className="absolute left-1/2 top-1/2 -z-10 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3cb878] blur-[100px]" />
          </div>

          {/* --- CONTENT AREA --- */}
          <div className="w-full space-y-10 lg:w-[70%]">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-[#3cb878]] h-0.5 w-12" />
              </div>
              <h5 className="h5 mb-1 font-bold text-center lg:text-left uppercase tracking-wider text-[#3cb878]">
                ZAMMY ZAIF
              </h5>
              <h3 className="h3 leading-[1.2] text-center lg:text-left  text-slate-900">
                <span className=" text-[#3cb878]"> Win Google Algorithm </span>{' '}
                & Win Competition
              </h3>
            </div>

            <div className="space-y-6">
              <p className="p leading-[2em] text-center lg:text-left text-black">
                Winning Google's algorithm and emerging victorious in
                competitions requires a multifaceted approach focused on
                high-quality, user-centric content. Prioritize original,
                in-depth content that addresses searcher intent while adhering
                to Google's quality guidelines. Employ technical SEO best
                practices, ensuring your site is fast, mobile-friendly, and
                crawlable. Build authority through reputable backlinks from
                relevant websites. Stay updated on algorithm changes, and don't
                engage in manipulative tactics that violate Google's guidelines.
                Remember that genuine value for users lies at the heart of
                long-term success.
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
