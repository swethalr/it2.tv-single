import React from 'react';
import { services } from '@/data/best-seo-professional/services';

const TechnicalServices: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Heading */}
        <h2 className="h2 text-center font-bold text-gray-900">
          Technical SEO Services
        </h2>

        {/* Underline */}
        <div className="mb-14 mt-4 flex justify-center">
          <span className="h-[3px] w-6 rounded-full bg-teal-400"></span>
          <span className="mx-2 h-[3px] w-10 rounded-full bg-teal-400"></span>
          <span className="h-[3px] w-6 rounded-full bg-teal-400"></span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2">
          {services.map((item, index) => (
            <div
              key={index}
              className="relative rounded-md border border-gray-200 p-8"
            >
              {/* Left green line */}
              <span className="absolute left-0 top-0 h-full w-[5px] rounded-l-md bg-emerald-400"></span>

              <h3 className="mb-4 text-xl font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="text-[18px] leading-relaxed text-gray-900 ">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalServices;
