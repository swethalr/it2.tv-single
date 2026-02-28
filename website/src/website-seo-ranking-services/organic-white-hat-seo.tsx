'use client';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

export default function OrganicWhiteHatSeo() {
  return (
    <section className="relative overflow-hidden bg-white py-24 selection:bg-orange-100 lg:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute bottom-[5%] left-[-5%] h-[500px] w-[500px] animate-pulse rounded-full bg-[#3cb878]/30 blur-[100px]" />
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[-5%] top-[-10%] h-[30%] w-[95%] rounded-full bg-[#3cb878]/10 blur-[190px]" />
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-24">
          {/* --- IMAGE CONTAINER --- */}
          <div className="group relative w-full lg:w-[45%]">
            {/* Modern Bordered Wrapper */}
            <div className=" relative z-10 rounded-[3.5rem]  p-2  transition-transform duration-700 group-hover:scale-[1.02]">
              <div className="overflow-hidden rounded-[3rem]">
                {/* Main Platform Illustration */}
                <img
                  src="/assets/images/website-ranking-services/whitehat-seo-process.webp"
                  alt="Google Ranking Platforms Cloud"
                  className=" h-full w-full "
                />
              </div>
            </div>

            {/* Decorative Background Aura */}
            <div className="absolute left-1/2 top-1/2 -z-10 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3cb878] blur-[100px]" />
          </div>

          {/* --- CONTENT AREA --- */}
          <div className="w-full space-y-10 lg:w-1/2">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-[#3cb878]] h-0.5 w-12" />
              </div>
              <h3 className="h3 leading-[0.95]  text-slate-900">
                <span className=" text-[#3cb878]">
                  {' '}
                  Organic <span className=" text-[#3cb878]"></span> White Hat
                  SEO Services
                </span>
              </h3>
            </div>

            <div className="space-y-6">
              <p className="p leading-[2em] text-black">
                In our company, we follow only organic White Hat SEO processes
                as per Google's guidelines. We never resort to third-party SEO
                tools or plugins, as Google has not recommended any such tools
                till date. By following these guidelines, we ensure that your
                website rank lasts longer as compared to your competitors who
                may use Black or Grey Hat SEO techniques. Our organic SEO
                services involves optimizing your website's content with
                relevant keywords and phrases that are likely to be searched by
                potential customers. We also focus on improving your website's
                user experience, including page load speed, mobile
                responsiveness and overall design. Our team also builds
                high-quality backlinks to your website, which is an important
                factor in improving your website's credibility and authority..
              </p>
            </div>

            {/* Premium CTA Button */}
            <div className="pt-4">
              <button className="group relative overflow-hidden rounded-2xl bg-[#3cb878] px-6 py-5 shadow-2xl shadow-slate-200 transition-all hover:scale-105 active:scale-95">
                {/* Shimmer Effect */}
                <div className="absolute inset-0 translate-y-full bg-white  transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
                <span className="h6 relative z-10 flex items-center gap-4 uppercase tracking-widest text-white group-hover:text-[#3cb878]">
                  Get Quote
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
