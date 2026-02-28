import React from 'react';

const GoogleGuidelines: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white py-24 selection:bg-orange-100 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-16">
          {/* --- IMAGE CONTAINER --- */}
          <div className="group relative w-full lg:w-[50%]">
            {/* Modern Bordered Wrapper */}
            <div className=" relative z-10 rounded-[3.5rem]  p-2  transition-transform duration-700 group-hover:scale-[1.02]">
              <div className="overflow-hidden rounded-[3rem]">
                {/* Main Platform Illustration */}
                <img
                  src="/assets/images/best-seo-expert/recover-google-penalty-website.webp"
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
              <div className="flex items-center gap-3">
                <div className="bg-[#3cb878]] h-0.5 w-12" />
              </div>
              <h5 className="h5 mb-1 font-bold uppercase tracking-wider text-[#3cb878]">
                ZAMMY ZAIF
              </h5>
              <h3 className="h3 leading-[0.95]  text-slate-900">
                Google Guidelines Based SEO Expert
              </h3>
            </div>

            <div className="space-y-6">
              <p className="text-[16px] leading-[2em] text-black">
                Since 2008, Zammy Zaif has been a Google Guidelines-based SEO
                Expert, assisting businesses in building strong online network.
                By adhering to all the latest Google guidelines, he specializes
                in achieving #1 rank on Google for his clients, and also
                provides potential customers with the most valuable and relevant
                information on Google SERP. Zammy Zaif the CEO of Versa Forge
                provides extensive Google SEO services and optimizes Google
                Business Profiles for various local companies. As an SEO
                specialist, his expertise extends to generating new leads by
                expanding businesses, handling map spam, complex profile
                obstacles and resolving Google ranking issues.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleGuidelines;
