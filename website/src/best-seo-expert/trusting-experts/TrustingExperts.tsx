import React from 'react';

const TrustingExperts: React.FC = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          <div className="lg:w-1/2">
            <img
              src="/assets/images/best-seo-expert/seo-analytics.webp"
              alt="website rank on google"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-1/2">
            <span className="text-xs font-bold uppercase tracking-[3px] text-[#3cb878]">
              TRUSTING EXPERTS ISN'T MUCH EASY
            </span>
            <h3 className="h3 mb-4 mt-2 font-extrabold text-gray-900">
              Digital Marketing or SEO Specialist
            </h3>
            <div className="mb-8 flex items-center gap-1">
              <span className="h-1 w-6 bg-[#3cb878]"></span>
              <span className="h-1 w-20 bg-[#3cb878]"></span>
            </div>
            <p className="text-justify leading-relaxed text-gray-600">
              Anyone on the internet may now claim themselves to be the best SEO
              expert. There are 1.5 million digital marketing specialists. All
              of them are claiming them as a digital marketing experts or SEO
              experts... [Include original full text here]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustingExperts;
