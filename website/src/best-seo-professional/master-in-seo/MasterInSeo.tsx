import React from 'react';
import Image from 'next/image';

const MasterInSeo: React.FC = () => {
  return (
    <section className=" relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 text-center">
        {/* Small Heading */}
        <span className="h5 mb-3 block font-semibold tracking-widest text-[#2bb7a9]">
          FEATURED SEO COURSE
        </span>

        {/* Main Heading */}
        <h2 className="h2 mb-4 font-bold text-[#222222]">Master in SEO</h2>

        {/* Divider */}
        <div className="mb-6 flex justify-center">
          <span className="block h-[2px] w-10 bg-[#2bb7a9]"></span>
          <span className="ml-3 block h-[2px] w-10 bg-[#2bb7a9]"></span>
        </div>

        {/* Description */}
        <p className="mx-auto mb-14 max-w-5xl text-[18px] leading-relaxed text-black">
          The future of SEO, revolves around upholding brand integrity, building
          trust and gaining authority through partnerships. Thus, every
          individual should pursue the most suitable path towards success and
          learn SEO from Zammy. As of July 2023, a total of 250 individuals have
          been taught ethical SEO by the Master himself.
        </p>

        {/* Illustration */}
        <div className="relative mx-auto w-full max-w-2xl">
          <Image
            src="/assets/images/best-seo-expert/master-in-seo.webp"
            alt="Master in SEO course illustration"
            width={900}
            height={500}
            className="mx-auto h-auto w-full"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default MasterInSeo;
