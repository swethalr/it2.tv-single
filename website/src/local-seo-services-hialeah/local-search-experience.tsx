'use client';
/**
 * src/local-seo-services-hialeah/sections/LocalSearchExperience.tsx
 *
 * Section 6: Creating Seamless Local Search Experience
 * Eyebrow + H3 accent + body paragraph (mobile-focused SEO content)
 */

import React from 'react';
import { localSearchExperienceSection } from '../../data/local-seo-services-hialeah';

export function LocalSearchExperience() {
  const d = localSearchExperienceSection;

  return (
    <section
      id="seo-services"
      className="relative overflow-hidden bg-white py-5"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[-5%] top-[-10%] h-[30%] w-[95%] rounded-full bg-[#3cb878]/10 blur-[100px]" />
      </div>
      <div className="mx-auto max-w-4xl space-y-16 px-6">
        {/* Header */}
        <div className="space-y-4 text-left">
          <h5 className="h5 text-center tracking-[0.2em] text-[#3bc878]">
            {d.eyebrow}
          </h5>
          <h3 className="h3 text-center leading-[1.1] tracking-tighter text-slate-900">
            {d.heading}
            <span className="text-[#3cb878]">{d.headingAccent}</span>
          </h3>
        </div>

        {/* Body */}
        <div className="space-y-6">
          <p className="p leading-[2em] text-black">{d.body}</p>
        </div>
      </div>
    </section>
  );
}
