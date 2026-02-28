 'use client';

{/*'use client';


import React from 'react';
import { heroBanner } from '../../data/google-ranking-expert';

export function HeroBanner() {
  return (
    <section className="relative mt-28 overflow-hidden bg-[#3cb878] pb-24 pt-32 text-center">
      <div className="container relative z-10 mx-auto px-6">
        <h1 className="h1 mb-6 font-black uppercase tracking-tighter text-white drop-shadow-md">
          {heroBanner.heading}
        </h1>
        <p className="p font-bold uppercase tracking-[0.4em] text-white/90">
          {heroBanner.breadHome}
          <span className="mx-2">/</span>
          {heroBanner.breadCurrent}
        </p>
      </div>
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)',
          backgroundSize: '40px 40px',
        }}
      />
    </section>
  );
}
  */}
 


import React from 'react';
import { motion } from 'framer-motion';
import { heroBanner } from '../../data/google-ranking-expert';

export function HeroBanner() {
  return (
    <section 
      className="relative mt-20 w-full max-w-full overflow-hidden bg-[#3cb878] pb-16 pt-28 text-center md:mt-28 md:pb-24 md:pt-40"
      aria-labelledby="hero-title"
    >
      {/* BACKGROUND LAYER - Strictly contained to prevent horizontal scroll */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden" 
        aria-hidden="true"
      >
        <div 
          className="h-full w-full opacity-10" 
          style={{
            backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)',
            backgroundSize: '40px 40px',
          }} 
        />
        <div className="absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-white/10 blur-[60px] md:h-64 md:w-64 md:blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto w-full px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto max-w-full"
        >
          {/* SEO H1 - break-words handles 320px viewport stability */}
          <h1 
            id="hero-title"
            className="mb-6 break-words font-black uppercase leading-[1.2] tracking-tighter text-white drop-shadow-sm h1"
          >
            {heroBanner.heading}
          </h1>

          {/* BREADCRUMBS - Semantic and Mobile-Safe */}
          <nav aria-label="Breadcrumb" className="inline-flex max-w-full justify-center">
            <ol className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/90 sm:text-xs md:tracking-[0.4em]">
              <li className="flex items-center">
                <a href="/" className="transition-colors hover:text-white">
                  {heroBanner.breadHome}
                </a>
              </li>
              <li className="opacity-50" aria-hidden="true">/</li>
              <li className="break-all text-white" aria-current="page">
                {heroBanner.breadCurrent}
              </li>
            </ol>
          </nav>
        </motion.div>
      </div>
    </section>
  );
}