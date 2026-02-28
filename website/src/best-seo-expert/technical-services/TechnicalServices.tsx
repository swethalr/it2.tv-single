import React from 'react';
import { technicalServices } from '@/data/best-seo-expert/technical-services';

const TechnicalServices: React.FC = () => {
  return (
    <section className="border-t border-gray-200 bg-gray-50 py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-16 text-center">
          <h2 className="h2 font-black text-gray-900">
            Technical SEO Services
          </h2>
          <div className="mt-4 flex items-center justify-center gap-1">
            <span className="h-1 w-4 bg-[#3cb878]"></span>
            <span className="h-1 w-20 bg-[#3cb878]"></span>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {technicalServices.map((service, idx) => (
            <div
              key={idx}
              className="border-b-4 border-[#3cb878] bg-white p-10 shadow-sm transition-all hover:shadow-xl"
            >
              <h5 className="mb-4 text-xl font-bold text-gray-900">
                {service.t}
              </h5>
              <p className="text-justify leading-relaxed text-gray-600">
                {service.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalServices;
