'use client';
/**
 * src/local-seo-services-hialeah/sections/BottomContactForm.tsx
 *
 * Full-width split section:
 *  Left  — yellow (#FFB400) image panel
 *  Right — green (#3cb878) form panel with 6 inputs + ReCAPTCHA
 */

import React from 'react';
import { ChevronDown } from 'lucide-react';
import ReCAPTCHA from 'react-google-recaptcha';
import { bottomFormSection } from '../../data/local-seo-services-hialeah';

export function BottomContactForm() {
  const d = bottomFormSection;

  return (
    <section className="font-sans flex min-h-[650px] w-full flex-col bg-white lg:flex-row">
      {/* Left: Image Panel */}
      <div className="relative flex w-full items-end justify-center overflow-hidden bg-[#FFB400] pt-10 lg:w-1/2 lg:pt-20">
        <div className="relative z-10 w-full px-4 lg:px-10">
          <img
            src={d.image.src}
            alt={d.image.alt}
            className="mx-auto block h-auto max-h-[600px] w-full object-contain"
          />
        </div>
      </div>

      {/* Right: Form Panel */}
      <div className="flex w-full items-center justify-center bg-[#3cb878] p-6 md:p-12 lg:w-1/2 lg:p-16">
        <div className="w-full max-w-2xl rounded-[2.5rem] border-[3px] border-white/30 p-8 md:p-12">
          <h4 className="h4 mb-10 text-center tracking-tight text-white">
            {d.heading}
          </h4>

          <form className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <input
              type="text"
              placeholder={d.namePh}
              required
              className="h-14 w-full rounded-full bg-white px-6 text-slate-800 placeholder:text-slate-400 focus:outline-none"
            />
            <input
              type="text"
              placeholder={d.phonePh}
              required
              className="h-14 w-full rounded-full bg-white px-6 text-slate-800 placeholder:text-slate-400 focus:outline-none"
            />
            <input
              type="email"
              placeholder={d.emailPh}
              required
              className="h-14 w-full rounded-full bg-white px-6 text-slate-800 placeholder:text-slate-400 focus:outline-none"
            />

            <div className="relative">
              <select className="h-14 w-full cursor-pointer appearance-none rounded-full bg-white px-6 text-slate-500 focus:outline-none">
                {d.serviceOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 text-slate-400"
                size={20}
              />
            </div>

            <input
              type="text"
              placeholder={d.urlPh}
              className="h-14 w-full rounded-full bg-white px-6 text-slate-800 placeholder:text-slate-400 focus:outline-none"
            />
            <input
              type="text"
              placeholder={d.subjectPh}
              className="h-14 w-full rounded-full bg-white px-6 text-slate-800 placeholder:text-slate-400 focus:outline-none"
            />

            <div className="flex justify-center py-2 md:col-span-2">
              <div className="scale-90 transform rounded-xl bg-white p-2 shadow-md md:scale-100">
                <ReCAPTCHA
                  sitekey={d.recaptchaSiteKey}
                  onChange={(val: string | null) => console.log(val)}
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-2 rounded-full bg-[#FF5A2C] py-5 font-black uppercase tracking-wider text-white shadow-xl transition-all duration-300 hover:bg-slate-900 active:scale-95 md:col-span-2"
            >
              {d.submitLabel}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
