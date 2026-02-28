import React from 'react';
import { servicesGrid } from '@/data/best-seo-expert/services-grid';

const ServicesGrid: React.FC = () => {
  return (
    <section className="container mx-auto max-w-6xl px-4 py-20">
      <div className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2">
        {servicesGrid.map((item, i) => (
          <div key={i} className="group flex flex-col gap-5 md:flex-row">
            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full border-2 border-[#3cb878] text-[#3cb878] transition-all duration-300 group-hover:bg-[#3cb878] group-hover:text-white">
              <span className="text-xl font-bold italic">
                {item.title.charAt(0)}
              </span>
            </div>
            <div>
              <h5 className="mb-3 text-xl font-bold text-gray-900">
                {item.title}
              </h5>
              <p className="text-justify text-lg leading-relaxed text-gray-600">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesGrid;
