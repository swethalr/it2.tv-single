'use client';
import ReCAPTCHA from 'react-google-recaptcha';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

import { ChevronDown } from 'lucide-react';

export default function FreeSeoPlan() {
  return (
    <section className="font-sans flex min-h-[650px] w-full flex-col bg-black lg:flex-row">
      {/* LEFT SIDE: ONLY IMAGE - CLEAN VERSION */}
      <div className="relative flex w-full items-end justify-center overflow-hidden bg-emerald-900/40 pt-10 lg:w-1/2 lg:pt-20">
        <div className="relative z-10 w-full px-4 lg:px-10">
          <img
            src="/assets/images/best-seo-expert/first-rank-expert.webp"
            alt="Best SEO Expert"
            className="mx-auto block h-auto max-h-[600px] w-full object-contain"
          />
        </div>
      </div>

      {/* RIGHT SIDE: FORM COLUMN */}
      <div className="flex w-full items-center justify-center bg-emerald-900/50 p-6 md:p-12 lg:w-1/2 lg:p-16">
        <div className="w-full max-w-2xl rounded-[2.5rem] border-[3px] border-white/30 p-8 md:p-12">
          {/* Form Heading: H2 inside H2 as requested */}
          <h4 className="h4 mb-10 text-center tracking-tight text-white">
            Get a free SEO plan
          </h4>

          <form className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <input
              type="text"
              placeholder="Name*"
              required
              className="h-14 w-full rounded-full bg-white px-6 text-slate-800 placeholder:text-slate-400 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Your Phone*"
              required
              className="h-14 w-full rounded-full bg-white px-6 text-slate-800 placeholder:text-slate-400 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email*"
              required
              className="h-14 w-full rounded-full bg-white px-6 text-slate-800 placeholder:text-slate-400 focus:outline-none"
            />

            <div className="relative">
              <select className="h-14 w-full cursor-pointer appearance-none rounded-full bg-white px-6 text-slate-500 focus:outline-none">
                <option value="">Website SEO Services</option>
                <option value="google-ranking">Google Ranking</option>
                <option value="local-seo">Local SEO</option>
              </select>
              <ChevronDown
                className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 text-slate-400"
                size={20}
              />
            </div>

            <input
              type="text"
              placeholder="GBP or Website URL"
              className="h-14 w-full rounded-full bg-white px-6 text-slate-800 placeholder:text-slate-400 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Subject"
              className="h-14 w-full rounded-full bg-white px-6 text-slate-800 placeholder:text-slate-400 focus:outline-none"
            />

            {/* ReCAPTCHA Container */}
            <div className="flex justify-center py-2 md:col-span-2">
              <div className="scale-90 transform rounded-xl bg-white p-2 shadow-md md:scale-100">
                <ReCAPTCHA
                  sitekey="YOUR_RECAPTCHA_SITE_KEY"
                  onChange={(val: string | null) => console.log(val)}
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-2 rounded-full bg-emerald-400/40 py-5 font-black uppercase tracking-wider text-white shadow-xl transition-all duration-300 hover:bg-slate-900 active:scale-95 md:col-span-2"
            >
              Submit Seo Estimate Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
