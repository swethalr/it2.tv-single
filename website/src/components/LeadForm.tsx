'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import { contactUsFormSubmit } from '@/src/contact/contact';

interface FormValues {
  web: string;
  phone: string;
  email: string;
  subject: string;
  honeypot: string;
}

export default function LeadForm() {
  const [isPending, setIsPending] = useState(false);
  const [status, setStatus] = useState<{
    type: 'success' | 'error';
    msg: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    if (data.honeypot) return;
    setIsPending(true);
    setStatus(null);

    const result = await contactUsFormSubmit(data);

    if (result.isSuccess) {
      setStatus({ type: 'success', msg: 'Success' });
      reset();
    } else {
      setStatus({ type: 'error', msg: 'Submission failed. Please try again.' });
    }
    setIsPending(false);
  };

  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">
      {/* Background Decorations (Unchanged) */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.02] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute bottom-[5%] left-[-5%] h-[500px] w-[500px] animate-pulse rounded-full bg-[#3cb878]/30 blur-[100px]" />
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[-5%] top-[-10%] h-[30%] w-[95%] rounded-full bg-[#3cb878]/10 blur-[190px]" />
      </div>

      <div className="container mx-auto max-w-5xl px-6">
        <div className="mb-12 text-center">
          <h3 className="h3 mb-4 tracking-tight text-slate-900">
            Looking for More Traffic & Leads?
          </h3>
          <p className="p mx-auto max-w-2xl font-medium text-slate-600">
            We have helped 38 top brands in the world and 250+ local brands for
            the last 20+ years.
          </p>
        </div>

        <div className="rounded-[2rem] bg-[#DBFFCE] p-8 shadow-2xl transition-all duration-500 md:p-12">
          {status?.type === 'success' ? (
            /* --- 2026 BEST SEO SUCCESS SCREEN --- */
            <div className="animate-in zoom-in-95 flex flex-col items-center justify-center py-30 text-center duration-500">
              <div className="h-19 w-19 mb-6 flex items-center justify-center rounded-full bg-[#3cb878] shadow-[0_10px_40px_rgba(60,184,120,0.4)]">
                <svg
                  className="h-12 w-12 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div className=" mb-3 text-xl font-bold text-slate-900">
                Inquiry Received!
              </div>
              <p className="p max-w-3xl text-black">
                Thanks for reaching out. I’ve received your details and will
                personally review your current rankings. I’ll get back to you
                with a custom roadmap to help you hit Page 1. Talk soon!
              </p>
              <button
                onClick={() => setStatus(null)}
                className="p mt-8 font-bold uppercase tracking-widest text-[#3cb878] transition-colors hover:text-slate-900"
              >
                ← Send another inquiry
              </button>
            </div>
          ) : (
            /* --- YOUR ORIGINAL UI FORM --- */
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
                <div className="md:col-span-5">
                  <input
                    {...register('web', { required: 'URL is required' })}
                    placeholder="Type in your Website URL*"
                    className="w-full rounded-full border-none bg-white px-2 py-4 text-slate-900 outline-none transition-all focus:ring-2 focus:ring-[#3cb878]"
                  />
                  {errors.web && (
                    <span className="ml-4 text-xs text-red-400">
                      {errors.web.message}
                    </span>
                  )}
                </div>

                <div className="md:col-span-3">
                  <input
                    {...register('phone', { required: 'Phone is required' })}
                    type="number"
                    placeholder="Your Phone*"
                    className="w-full rounded-full border-none bg-white px-6 py-4 text-slate-900 outline-none transition-all focus:ring-2 focus:ring-[#3cb878]"
                  />
                </div>

                <div className="md:col-span-4">
                  <input
                    {...register('email', { required: 'Email is required' })}
                    type="email"
                    placeholder="Your Email*"
                    className="w-full rounded-full border-none bg-white px-6 py-4 text-slate-900 outline-none transition-all focus:ring-2 focus:ring-[#3cb878]"
                  />
                </div>
              </div>

              <div className="w-full">
                <input
                  {...register('subject', { required: 'Subject is required' })}
                  placeholder="Subject"
                  className="w-full rounded-full border-none bg-white px-6 py-4 text-slate-900 outline-none transition-all focus:ring-2 focus:ring-[#3cb878]"
                />
              </div>

              <input type="text" {...register('honeypot')} className="hidden" />

              <div className="flex justify-center p-2 md:col-span-2">
                <div className="scale-[0.75] transform rounded-xl bg-white p-2 shadow-md lg:scale-[100%]">
                  <ReCAPTCHA
                    sitekey="6LfipWIsAAAAAOGgh0z5OjFBf5veA_wIVKcg2c6N"
                   
                    onChange={(val) => console.log(val)}
                  />
                </div>
              </div>

              {status?.type === 'error' && (
                <p className="animate-pulse text-center font-bold text-red-600">
                  {status.msg}
                </p>
              )}

              <div className="flex justify-center">
                <button
                  disabled={isPending}
                  type="submit"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#3cb878] px-10 py-4 font-bold uppercase text-white shadow-[0_10px_30px_rgba(60,184,120,0.3)] transition-all duration-300 hover:scale-105 hover:bg-slate-900 active:scale-95 disabled:opacity-50"
                >
                  <span className="relative z-10">
                    {isPending ? 'Processing...' : 'Enquiry Now!'}
                  </span>
                  <div className="absolute inset-0 translate-y-full bg-white/20 transition-transform duration-300 group-hover:translate-y-0" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
