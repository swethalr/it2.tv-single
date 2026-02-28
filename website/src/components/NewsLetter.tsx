'use client';

import React from 'react';
import { Mail, Smartphone, Settings } from 'lucide-react';

export default function Newsletter() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log('Email captured:', formData.get('email'));
  };

  return (
    <section
      className="relative overflow-hidden bg-[#3cb878] py-16 lg:py-20"
      aria-labelledby="newsletter-heading"
    >
      {/* Background Decorative Icons (Optional - Matches your screenshot's flair) */}
      <div className="animate-spin-slow absolute right-10 top-10 hidden opacity-20 lg:block">
        <Settings size={48} className="text-white" />
      </div>

      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-12 lg:flex-row">
          <div className="flex w-full justify-center lg:w-1/3 lg:justify-start">
            <div className="animate-float relative max-w-[280px] md:max-w-[350px]">
              <img
                src="/assets/images/google-ranking-services/subscr1.png"
                alt="Newsletter Subscription "
                className="h-auto w-full object-contain"
              />
            </div>
          </div>

          {/* Right Side: Content & Form */}
          <div className="w-full space-y-6 text-center lg:w-2/3 lg:text-left">
            <div className="space-y-2">
              <h4
                id="newsletter-heading"
                className="h4 tracking-[0.02em] text-white "
              >
                Email Newsletters!
              </h4>
              <p className="text-lg font-medium text-white/90">
                Sign up for new updates & offers.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mx-auto flex max-w-2xl flex-col items-stretch gap-0 overflow-hidden rounded-2xl shadow-2xl sm:flex-row sm:rounded-full lg:mx-0"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email Address
              </label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                required
                placeholder="Your Email Address"
                className="flex-grow px-8  text-lg font-medium text-slate-800 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-slate-900 px-10 py-5 font-black uppercase tracking-widest text-[#3cb878] transition-colors  duration-300 hover:bg-white hover:text-slate-900"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Animated Style logic for the spin-slow gear */}
      <style jsx global>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>
    </section>
  );
}
