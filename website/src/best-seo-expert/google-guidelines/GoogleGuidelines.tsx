import React from 'react';

const GoogleGuidelines: React.FC = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          <div className="order-2 lg:order-1 lg:w-5/12">
            <img
              src="/assets/images/best-seo-expert/recover-google-penalty-website.webp"
              alt="recover google penalty website"
              className="w-full rounded-xl shadow-lg"
            />
          </div>
          <div className="order-1 lg:order-2 lg:w-7/12">
            <span className="text-xs font-bold uppercase tracking-[3px] text-[#3cb878]">
              ZAMMY ZAIF
            </span>
            <h2 className="h2 mb-4 mt-2 font-extrabold text-gray-900">
              Google Guidelines Based SEO Expert
            </h2>
            <div className="mb-8 flex items-center gap-1">
              <span className="h-1 w-6 bg-[#3cb878]"></span>
              <span className="h-1 w-20 bg-[#3cb878]"></span>
            </div>
            <p className="text-justify leading-relaxed text-gray-600">
              Since 2008, Zammy Zaif has been a Google Guidelines-based SEO
              Expert... [Include original full text here]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleGuidelines;
