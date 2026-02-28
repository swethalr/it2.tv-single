import React from 'react';

const VersaForge: React.FC = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          <div className="lg:w-5/12">
            <img
              src="/assets/images/seo-expert-india/best-seo-company.webp"
              alt="Best SEO Company"
              className="w-full"
            />
          </div>
          <div className="lg:w-7/12">
            <span className="text-xs font-bold uppercase tracking-[3px] text-[#3cb878]">
              AN EXCELLENT TEAM LED BY ZAMMY ZAIF
            </span>
            <h3 className="h3 mb-4 mt-2 font-extrabold text-gray-900">
              Versa Forge – Best SEO Company
            </h3>
            <div className="mb-8 flex items-center gap-1">
              <span className="h-1 w-6 bg-[#3cb878]"></span>
              <span className="h-1 w-20 bg-[#3cb878]"></span>
            </div>
            <p className="mb-10 text-justify leading-relaxed text-gray-600">
              Versa Forge is the best SEO company, with a team of SEO experts...
              [Include original full text here]
            </p>
            <a
              href="contact-zammy-zaif.php"
              className="rounded-full bg-[#3cb878] px-12 py-4 font-bold uppercase text-white transition-all hover:bg-[#2e915d]"
            >
              Contact Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VersaForge;
