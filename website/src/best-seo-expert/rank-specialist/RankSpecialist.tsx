import React from 'react';

const RankSpecialist: React.FC = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          <div className="lg:w-7/12">
            <span className="text-xs font-bold uppercase tracking-[3px] text-[#3cb878]">
              WHY ZAMMY ZAIF
            </span>
            <h2 className="h2 mb-4 mt-2 font-extrabold text-gray-900">
              Google #1 Rank Specialist
            </h2>
            <div className="mb-8 flex items-center gap-1">
              <span className="h-1 w-6 bg-[#3cb878]"></span>
              <span className="h-1 w-20 bg-[#3cb878]"></span>
            </div>
            <p className="text-justify leading-relaxed text-gray-600">
              Considering various factors of Google's standards, Zammy is a
              First Rank SEO specialist... [Include original full text here]
            </p>
          </div>
          <div className="lg:w-5/12">
            <img
              src="/assets/images/seo-expert-india/best-seo-expert-in-india.webp"
              alt="Best SEO Expert"
              className="w-full rounded-xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RankSpecialist;
