import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="font-sans bg-black py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
          {/* Left Side: Stats and Certificate Card */}
          <div className="w-full lg:w-1/2">
            <div className="rounded-xl bg-[#29cc84] p-8 text-center shadow-lg md:p-12">
              {/* Image Container */}
              <div className="mb-10 overflow-hidden rounded-lg bg-white p-2 shadow-md">
                <img
                  src="https://it2.tv/seo-services/img/best-seo-professional-zammy-zaif.webp"
                  alt="Zammy Zaif Certificate"
                  className="block h-auto w-full rounded"
                />
              </div>

              {/* Stats Section */}
              <div className="flex flex-col gap-8">
                <div>
                  <h3 className="md:text-6xl text-5xl font-bold leading-none text-white">
                    18+
                  </h3>
                  <p className="mt-1 text-lg text-white">Years Of Experience</p>
                </div>
                <div>
                  <h3 className="md:text-6xl text-5xl font-bold leading-none text-white">
                    2T
                  </h3>
                  <p className="mt-1 text-lg text-white">Plus Clients</p>
                </div>
                <div>
                  <h3 className="md:text-6xl text-5xl font-bold leading-none text-white">
                    3K+
                  </h3>
                  <p className="mt-1 text-lg text-white">Projects</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2">
            <span className="mb-2 block text-lg font-semibold text-[#29cc84]">
              Proven Ranking Mastery Since 2008
            </span>

            <h2 className="mb-4 text-4xl font-extrabold text-[#222222] md:text-5xl">
              Best Google SEO Professional
            </h2>

            <div className="mb-8 h-[3px] w-16 bg-[#29cc84]"></div>

            <div className="space-y-6 text-base leading-relaxed text-[#444444] md:text-[17px]">
              <p>
                Zammy Zaif earns the global title of the best SEO professional
                through his unmatched track record of delivering #1 Google
                rankings for clients globally since 2008. Zaif's strategies
                consistently secure First & Top positions by adhering strictly
                to Google guidelines, transforming small businesses into
                lead-generating powerhouses.
                <span className="font-bold text-[#222222]">
                  {' '}
                  His shift since 2014 to prioritize the #1 spot
                </span>{' '}
                has boosted organic traffic by up to 50% and click-through rates
                by 20% for websites. This precision stems from deep technical
                audits, on-page optimization and ethical link-building that
                align with evolving algorithms.
              </p>

              <p>
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

export default AboutSection;
