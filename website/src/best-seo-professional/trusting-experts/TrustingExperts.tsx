import React from 'react';

const TrustingExperts: React.FC = () => {
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
                  src="/assets/images/best-seo-expert/website-rank-on-google.webp"
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
                TRUSTING EXPERTS ISN'T MUCH EASY
              </h5>
              <h3 className="h3 leading-[0.95]  text-slate-900">
                Digital Marketing or SEO Professional
              </h3>
            </div>

            <div className="space-y-6">
              <p className="text-[16px] leading-[2em] text-black">
                Anyone on the internet may now claim themselves to be the best
                SEO expert. There are 1.5 million digital marketing specialists.
                All of them are claiming them as a digital marketing experts or
                SEO experts. Engineers are classified into several categories,
                including Civil Engineer, Computer Engineer, Software Engineer,
                Electronics &amp; Communication Engineer, Electrical &amp;
                Electronics Engineer, Mechanical Engineer, and so on. Similarly,
                there are several sectors in digital marketing. Facebook
                Marketing, LinkedIn Marketing, Instagram Marketing, Search
                Engine Marketing, Search Engine Optimization, Social Media
                Optimization, Pay Per Click Experts, Youtube Marketing, Youtube
                SEO Experts, Normal SEO Experts, Google SEO Experts, and so on.
                It is quite impossible for one individual to be the best expert
                in everything.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustingExperts;
