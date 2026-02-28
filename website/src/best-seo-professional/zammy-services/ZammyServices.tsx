import React from 'react';
import Image from 'next/image';

const ZammyServices: React.FC = () => {
  return (
    <section className=" relative py-20 md:py-28">
      {/* Background Grids and Glows */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[-5%] top-[-10%] h-[30%] w-[95%] rounded-full bg-[#3cb878]/10 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-6xl px-4">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <h3 className="h3 mb-4 font-bold text-[#222222]">
            Zammy&apos;s SEO Services
          </h3>

          <div className="flex justify-center">
            <span className="block h-[2px] w-12 bg-[#2bb7a5]"></span>
            <span className="mx-2 block h-[2px] w-12 bg-[#2bb7a5] opacity-50"></span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-x-20 gap-y-14 md:grid-cols-2">
          {/* Global SEO */}
          <div className="flex items-start gap-5">
            <Image
              src="/assets/images/best-seo-expert/global-seo.webp"
              alt="Global SEO"
              width={100}
              height={100}
              className="shrink-0"
            />
            <div>
              <h4 className="h4 mb-2 font-semibold text-[#222222]">
                Global SEO
              </h4>
              <p className="text-[18px] leading-relaxed text-black">
                Specializing in multilingual SEO, they excel at enhancing the
                visibility of businesses on a global scale through customized
                strategies for SERP domination.
              </p>
            </div>
          </div>

          {/* Local SEO */}
          <div className="flex items-start gap-5">
            <Image
              src="/assets/images/best-seo-expert/local-seo.webp"
              alt="Local SEO"
              width={100}
              height={100}
              className="shrink-0"
            />
            <div>
              <h4 className="h4 mb-2 font-semibold text-[#222222]">
                Local SEO
              </h4>
              <p className="text-[18px] leading-relaxed text-black">
                Enhance your website and GMB listing to improve local SEO
                rankings. Optimization increases organic exposure, helps you
                rank first on Google SERPs and drives more local sales.
              </p>
            </div>
          </div>

          {/* Technical SEO */}
          <div className="flex items-start gap-5">
            <Image
              src="/assets/images/best-seo-expert/technical-seo.webp"
              alt="Technical Seo"
              width={100}
              height={100}
              className="shrink-0"
            />
            <div>
              <h4 className="h4 mb-2 font-semibold text-[#222222]">
                Technical SEO
              </h4>
              <p className="text-[18px] leading-relaxed text-black">
                Audit your website thoroughly to identify any technological
                flaws or faults that may cause quality difficulties when spiders
                crawl the site.
              </p>
            </div>
          </div>

          {/* Ecommerce SEO */}
          <div className="flex items-start gap-5">
            <Image
              src="/assets/images/best-seo-expert/ecommerce-seo.webp"
              alt="Ecommerce SEO"
              width={100}
              height={100}
              className="shrink-0"
            />
            <div>
              <h4 className="h4 mb-2 font-semibold text-[#222222]">
                Ecommerce SEO
              </h4>
              <p className="text-[18px] leading-relaxed text-black">
                Ecommerce SEO is the process of increasing the visibility of
                your online business when customers search for your products and
                categories on search engine results pages.
              </p>
            </div>
          </div>

          {/* Content Strategy */}
          <div className="flex items-start gap-5">
            <Image
              src="/assets/images/best-seo-expert/content-strategy.webp"
              alt="Content Strategy"
              width={100}
              height={100}
              className="shrink-0"
            />
            <div>
              <h4 className="h4 mb-2 font-semibold text-[#222222]">
                Content Strategy
              </h4>
              <p className="text-[18px] leading-relaxed text-black">
                With a proper content strategy, selecting right words to build a
                solid information structure and ensure competitive search engine
                rankings compared to others.
              </p>
            </div>
          </div>

          {/* PR Link Building */}
          <div className="flex items-start gap-5">
            <Image
              src="/assets/images/best-seo-expert/pr-link-building.webp"
              alt="PR Link Building"
              width={100}
              height={100}
              className="shrink-0"
            />
            <div>
              <h4 className="h4 mb-2 font-semibold text-[#222222]">
                PR Link Building
              </h4>
              <p className="text-[18px] leading-relaxed text-black">
                Developing effective public relations strategies such as PR and
                media pitching to get valuable editorial links in order to build
                trust and authority in highly competitive areas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZammyServices;
