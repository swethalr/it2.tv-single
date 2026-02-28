import React from 'react';

const RankSpecialist: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white py-24 selection:bg-orange-100 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-16 lg:flex-row-reverse lg:gap-16">
          {/* --- IMAGE CONTAINER --- */}
          <div className="group relative w-full lg:w-[50%]">
            {/* Modern Bordered Wrapper */}
            <div className=" relative z-10 rounded-[3.5rem]  p-2  transition-transform duration-700 group-hover:scale-[1.02]">
              <div className="overflow-hidden rounded-[3rem]">
                {/* Main Platform Illustration */}
                <img
                  src="/assets/images/best-seo-expert/best-seo-expert-in-india.webp"
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
                WHY ZAMMY ZAIF
              </h5>
              <h3 className="h3 leading-[0.95]  text-slate-900">
                Google #1 Rank Specialist
              </h3>
            </div>

            <div className="space-y-6">
              <p className="text-[16px] leading-[2em] text-black">
                Considering various factors of Google&apos;s standards, Zammy is
                a First Rank SEO Professional of the Google search engine. He
                diligently adheres to all of Google&apos;s ranking algorithms
                and do not use any third-party SEO tools or plugins. This
                approach eliminates the possibility of being penalized by Google
                officials. By staying updated with the latest trends of
                Google&apos;s crore sources, he maintains a comprehensive
                understanding of the dynamic search engine. With his expertise,
                he consistently makes practical decisions based on the data
                provided by Google. He understands the both perspectives of
                potential customers and business owners and ensure their mutual
                growth and impact of sales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RankSpecialist;
