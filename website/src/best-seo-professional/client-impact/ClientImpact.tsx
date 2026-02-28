import React from 'react';
import Image from 'next/image';

const ClientImpact: React.FC = () => {
  return (
    <section className="relative overflow-hidden  bg-[#3bc878]/50 py-20 md:py-28">
      {/* Decorative Background Image bg-[#29cc84] */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/assets/images/best-seo-expert/elements.png"
          alt=""
          fill
          priority
          aria-hidden
          className="
            hidden
            object-contain
            opacity-100 md:block
          "
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
        <h3 className="h3 mb-4 font-bold text-black">
          Client Impact and Innovation
        </h3>

        {/* Divider */}
        <div className="mb-6 flex justify-center">
          <span className="block h-[2px] w-12 bg-white opacity-70"></span>
          <span className="mx-2 block h-[2px] w-12 bg-white opacity-40"></span>
          <span className="block h-[2px] w-12 bg-white opacity-70"></span>
        </div>

        <p className="p mx-auto max-w-3xl leading-relaxed text-black">
          Zaif customizes plans around audience insights, competitors and AIDA
          frameworks to drive sales conversions beyond mere visibility. His
          content creation - optimized blogs, SOPs, and meta structures—elevates
          brand credibility worldwide. Businesses hail him for measurable
          growth, from lead surges to top SERP presence, solidifying his global
          reputation.
        </p>
      </div>
    </section>
  );
};

export default ClientImpact;
