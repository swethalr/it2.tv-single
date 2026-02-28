import React from 'react';

const RoiFocused: React.FC = () => {
  return (
    <section className="bg-[#3cb878] py-24 text-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          <div className="lg:w-1/2">
            <h2 className="h2 mb-4 font-bold">ROI Focused SEO Expert</h2>
            <div className="mb-10 flex items-center gap-1">
              <span className="h-1 w-6 bg-white/40"></span>
              <span className="h-1 w-24 bg-white"></span>
            </div>
            <p className="mb-10 text-justify text-xl leading-relaxed opacity-95">
              Anyone can perform SEO to reach the first page of SERP, but only
              the ROI based SEO expert, Mr Zammy promises to secure the top
              position in Google search engine results for his client's
              websites... [Include original full text here]
            </p>
            <a
              href="contact-zammy-zaif.php"
              className="inline-block rounded-full bg-gray-900 px-12 py-4 font-bold uppercase tracking-widest text-white shadow-xl transition-all hover:bg-black"
            >
              Contact Now
            </a>
          </div>
          <div className="lg:w-1/2">
            <img
              src="/assets/images/best-seo-expert/seo-plan.webp"
              alt="Zammy Zaif"
              className="w-full rounded-[40px] border-[6px] border-black shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoiFocused;
