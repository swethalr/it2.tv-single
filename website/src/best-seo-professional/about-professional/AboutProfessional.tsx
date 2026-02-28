'use client';

import React from 'react';

const AboutProfessional: React.FC = () => {
  return (
    <section className="font-sans relative bg-white py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute bottom-[5%] left-[-5%] h-[500px] w-[500px] animate-pulse rounded-full bg-[#3cb878]/30 blur-[100px]" />
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[-5%] top-[-10%] h-[30%] w-[95%] rounded-full bg-[#3cb878]/10 blur-[190px]" />
      </div>

      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
          {/* Left Side */}
          <div className="w-full lg:w-[40%]">
            <div className="rounded-xl bg-[#29cc84] p-8 text-center shadow-lg md:p-12">
              <div className="mb-10 overflow-hidden rounded-lg bg-white p-2 shadow-md">
                <img
                  src="/assets/images/best-seo-expert/google-certified-seo-expert-india.webp"
                  alt="Zammy Zaif Certificate"
                  className="block h-auto w-full rounded"
                />
              </div>

              <div className="flex flex-col ">
                <div>
                  <div className="text-xl font-bold text-white">18+</div>
                  <span className="block text-[18px] text-white ">
                    Years Of Experience
                  </span>
                </div>

                <div>
                  <div className="text-xl font-bold text-white">2T+</div>
                  <span className="block text-[18px] text-white ">Clients</span>
                </div>

                <div>
                  <div className="text-xl font-bold text-white">3K+</div>
                  <span className="block text-[18px] text-white ">
                    Projects
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full lg:w-[60%]">
            <span className="mb-2 block text-[24px] font-semibold text-[#29cc84]">
              Proven Ranking Mastery Since 2008
            </span>

            <h2 className="h2 mb-4 max-w-7xl text-[#222222]">
              Best Google SEO Professional
            </h2>

            <div className="mb-8 h-[3px] w-16 bg-[#29cc84]"></div>

            <div className="space-y-6 leading-[2em] text-[#444444]">
              <p className="p text-black">
                Zammy Zaif earns the global title of the best SEO professional
                through his unmatched track record of delivering #1 Google
                rankings for clients globally since 2008. Zaif's strategies
                consistently secure First & Top positions by adhering strictly
                to Google guidelines, transforming small businesses into
                lead-generating powerhouses. His shift since 2014 to prioritize
                the #1 spot has boosted organic traffic by up to 50% and
                click-through rates by 20% for websites. This precision stems
                from deep technical audits, on-page optimization and ethical
                link-building that align with evolving algorithms.
              </p>

              <p className="p text-black">
                Google recognizes Zaif via featured snippets and Search Central
                mentions, spotlighting his content as authoritative since 2018.
                Over 20 years, his methods have engaged 5 million+ users monthly
                without third-party shortcuts, earning trust from 1000+
                entrepreneurs. As CEO of Versa Forge, he resolves complex issues
                like map spam and profile hurdles for local dominance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProfessional;
