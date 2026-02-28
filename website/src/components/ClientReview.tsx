'use client';

import React from 'react';

export default function ClientReviews() {
  return (
    <section className="relative overflow-hidden bg-[#dbffce] py-16 lg:py-24">
      {/* Container */}
      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
          {/* Left Content Area */}
          <div className="relative w-full text-center lg:w-[40%] lg:text-left">
            <h4 className="h4 mb-6 text-slate-900">Happy Clients About Us</h4>
            <div className="mx-auto mb-8 h-1 w-16 bg-[#3cb878] lg:mx-0" />
            <p className="p  leading-relaxed text-center lg:text-left tracking-tight text-black">
              Read what our client say about our SEO services, our client
              support & other things.
            </p>

            {/* Megaphone Image Positioned Bottom Left of Text */}
            <div className="-bottom-15 absolute -right-10 hidden w-64 lg:block">
              <img
                src="/assets/images/google-ranking-services/testimonial2.png"
                alt="Megaphone Illustration"
                className="h-auto w-full object-contain"
              />
            </div>
          </div>

          {/* Right Review Card Area */}
          <div className="relative w-full lg:w-[60%]">
            {/* Avatar Speech Bubble Tip */}
            <div className="absolute -top-12 left-10 z-20 lg:left-20"></div>

            {/* Decorative Gear & Path (Top Right of Card) */}
            <div className="absolute -right-4 -top-20 hidden w-48 md:block lg:right-10">
              <img
                src="/assets/images/google-ranking-services/testimonial1.png"
                alt="Decoration"
                className="h-auto w-full"
              />
            </div>

            {/* The Review Card */}
            <div className="relative overflow-hidden rounded-[3rem] bg-slate-800 p-10 shadow-2xl md:p-16">
              <p className="mb-10 text-center lg:text-left leading-relaxed text-white/90">
                Thank you for providing SEO services. My company was ranked
                first in Google Search and in Bahrain. In Bahrain, you may find
                printers, lasers, CNC machines, cutting plotters, machineries,
                and spare parts. Your SEO strategy worked for me; I'm pleased
                with the high-quality backlinks that were established, and I
                used all professional marketing techniques to get my website to
                the top of the Google search results. Expertise designed to
                establish a successful SEO strategy for my business. For my
                company, you've created a result-oriented SEO approach.
              </p>

              <div className="space-y-1">
                <h4 className="text-xl text-center lg:text-left font-bold text-[#3cb878]">
                  Ahmed Abdulaal
                </h4>
                <p className="text-sm font-medium text-center lg:text-left uppercase tracking-widest text-slate-300">
                  Founder (NABTAKER SIGN)
                </p>
              </div>

              {/* Large Quote Mark Decoration */}
              <div className="absolute bottom-8 right-12 opacity-10">
                <span className="text-9xl font-serif text-white">“</span>
              </div>
            </div>

            {/* Pagination Dots (Placeholder for slider functionality) */}
            <div className="mt-8 flex justify-center gap-3">
              <div className="h-3 w-3 rounded-full border-2 border-white" />
              <div className="h-3 w-3 rounded-full border-2 border-white bg-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
