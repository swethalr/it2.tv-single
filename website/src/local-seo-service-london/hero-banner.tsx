'use client';
/**
 * src/local-seo-service-london/sections/HeroBanner.tsx
 */

import React from 'react';
import { heroBanner } from '../../data/local-seo-service-london';

export function HeroBanner() {
  return (
    <section className="relative mt-28 overflow-hidden bg-[#3cb878] pb-24 pt-32 text-center">
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[-5%] top-[-10%] h-[30%] w-[95%] rounded-full bg-[#3cb878]/10 blur-[100px]" />
      </div>
      <div className="container relative z-10 mx-auto px-6">
        <h1 className="h1 mb-6 font-black tracking-tighter text-white drop-shadow-md">
          {heroBanner.heading}
        </h1>
        <p className="p font-bold uppercase tracking-[0.1em] text-white/90">
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
