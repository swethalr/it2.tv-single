import React from 'react';

const RoiFocused: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white py-24 selection:bg-orange-100 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-16 lg:flex-row-reverse lg:gap-16">
          {/* --- IMAGE CONTAINER --- */}
          <div className="group relative w-full lg:w-[50%]">
            {/* Modern Bordered Wrapper */}
            <div className=" relative z-10 rounded-[3.5rem]  border border-black p-2 transition-transform duration-700 group-hover:scale-[1.02]">
              <div className="overflow-hidden rounded-[3rem]">
                {/* Main Platform Illustration */}
                <img
                  src="/assets/images/best-seo-expert/seo-expert-in-india.webp"
                  alt="Google Ranking Platforms Cloud"
                  className=" h-full w-full "
                />
              </div>
            </div>

            {/* Decorative Background Aura */}
            <div className="absolute left-1/2 top-1/2 -z-10 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3cb878] blur-[100px]" />
          </div>

          {/* --- CONTENT AREA --- */}
          <div className="w-full space-y-5 lg:w-[60%]">
            <div className="space-y-4">
              <div className="flex items-center gap-3"></div>
              <h3 className="h3 leading-[0.95]  text-slate-900">
                ROI Focused SEO Expert
              </h3>
            </div>
            <div className="space-y-6">
              <p className="text-[16px] leading-[2em] text-black">
                Anyone can perform SEO to reach the first page of SERP, but only
                the ROI based SEO expert, Mr Zammy promises to secure the top
                position in Google search engine results for his client&apos;s
                websites. As previously indicated, with expert use of White Hat
                Search Engine Optimization methodology Zammy has successfully
                improved the rankings of several websites to appear first on
                Google. This rank increases the website&apos;s traffic, sales
                qualified leads and ROI for the organization. By using of
                ethical techniques, Google has recognized him as the
                world&apos;s leading Google Ranking expert and featured his
                image in a snippet.
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
};

export default RoiFocused;
