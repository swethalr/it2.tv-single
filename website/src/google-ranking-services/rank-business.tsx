'use client';
import React, { useState, useRef } from 'react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

export default function RankBusiness() {
  return (
    <section className="overflow-hidden bg-white py-24 selection:bg-[#3cb878] lg:py-32">
      
      
     
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-24">
          {/* --- IMAGE CONTAINER --- */}
          <div className="group relative w-full lg:w-[45%]">
            {/* Modern Bordered Wrapper */}
            <div className="relative z-10 rounded-[3.5rem]  bg-white p-2 shadow-[0_40px_100px_-20px_rgba(249,115,22,0.1)] transition-transform duration-700 scale-[1.02]">
              <div className="overflow-hidden ">
                {/* Main Platform Illustration */}
                <img
                  src="/assets/images/google-ranking-services/rank-your-business-everywhere.webp"
                  alt="Rank Your Business Everywhere"
                  className="object-fit h-auto max-h-[550px] w-full transform transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
            </div>

            {/* Decorative Background Aura */}
            <div className="absolute left-1/2 top-1/2 -z-10 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3cb878] blur-[100px]" />
          </div>

          {/* --- CONTENT AREA --- */}
          <div className="lg:w-4xl w-full space-y-10">
            <div className="space-y-4">
              <div className="flex items-center text-center gap-3">
                <div className="bg-[#3cb878]] h-0.5 w-12" />
              </div>
              <h2 className="h2  text-center lg:text-left tracking-tighter text-slate-900">
                Rank your Business
                <span className=" text-[#3cb878]"> Everywhere!</span>
              </h2>
            </div>

            <div className="space-y-6">
              <p className="p text-center lg:text-left leading-[2em] text-black">
                Our specialized Google & AI SEO Ranking services are engineered
                to propel your online visibility with a multi-pronged approach
                for Future 2026.
                <span className="font-bold text-[#3cb878]">
                  {' '}We optimize your Google Business Profile for Prime (#1 Spot in
                  Top 3 Rank) placement
                </span>{' '}
                and architect your website to dominate search results. Our
                cutting-edge strategies now fully integrate{' '}
                <span className="font-bold text-slate-900">
                  AEO (Answer Engine Optimization),
                </span>
                ensuring{' '}
                <span className="font-bold text-[#3cb878]">
                  {' '}
                  your content wins visibility across all AI platforms (Chatgpt,
                  Gemini, CoPilot, DeepSeek, Claude, Preplexity) and answer
                  engines.
                </span>{' '}
                We develop user-centric, semantic-rich experiences that
                decisively outpace the competition. This comprehensive
                methodology is designed to capture the next wave of search
                behavior. The result is a significant and sustained increase in
                high-intent organic traffic. This directly
                <span className="font-bold text-black">
                 {' '} drives a greater volume of qualified inquiries and those
                  all-important sales conversions.
                </span>{' '}
                Our focus is building a future-proof digital foundation that
                delivers lasting growth.
              </p>
            </div>

            {/* Premium CTA Button */}
            <div className="pt-4">
              <button className="group relative overflow-hidden rounded-2xl bg-[#3cb878] px-6 py-5 shadow-2xl shadow-slate-200 transition-all hover:scale-105 active:scale-95">
                {/* Shimmer Effect */}
                <div className="absolute inset-0 translate-y-full bg-white  transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
                <span className="h6 relative z-10 flex items-center gap-4 uppercase tracking-widest text-white group-hover:text-[#3cb878]">
                  Get Free Audit Now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform group-hover:translate-x-2"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
    @keyframes bounce-slow {
      0%, 100% { transform: translateY(-50%) translateY(0); }
      50% { transform: translateY(-50%) translateY(-15px); }
    }
    .animate-bounce-slow {
      animation: bounce-slow 4s ease-in-out infinite;
    }
  `,
        }}
      />
    </section>
  );
}
