'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import { leadFormDarkData } from '@/data/google-maps-local-seo';

interface FormValues {
  web: string;
  phone: string;
  email: string;
  subject: string;
  honeypot: string;
}

export default function LeadFormDark() {
  const data = leadFormDarkData;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (formData: FormValues) => {
    if (formData.honeypot) return;
    console.log('Form Submitted:', formData);
  };

  return (
    <section className="relative overflow-hidden bg-black py-16 lg:py-24">
      {/* Background Accents */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.02] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute bottom-[5%] left-[-5%] h-[500px] w-[500px] animate-pulse rounded-full bg-[#3cb878]/30 blur-[100px]" />
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[-5%] top-[-10%] h-[30%] w-[95%] rounded-full bg-[#3cb878]/10 blur-[190px]" />
      </div>
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-slate-100 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto max-w-5xl px-6">
        <div className="mb-12 text-center">
          <h3 className="h3 mb-4 tracking-tight text-white">{data.heading}</h3>
          <p className="p mx-auto max-w-2xl text-white">{data.description}</p>
        </div>

        <div className="rounded-[2rem] bg-emerald-900/60 p-8 shadow-2xl md:p-12">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Row 1: Website, Phone, Email */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
              <div className="md:col-span-5">
                <input
                  {...register('web', { required: 'URL is required' })}
                  placeholder={data.placeholders.website}
                  className="w-full rounded-full border-none bg-white px-6 py-4 text-slate-900 outline-none transition-all focus:ring-2 focus:ring-[#3cb878]"
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
                  placeholder={data.placeholders.phone}
                  className="w-full rounded-full border-none bg-white px-6 py-4 text-slate-900 outline-none transition-all focus:ring-2 focus:ring-[#3cb878]"
                />
              </div>

              <div className="md:col-span-4">
                <input
                  {...register('email', { required: 'Email is required' })}
                  type="email"
                  placeholder={data.placeholders.email}
                  className="w-full rounded-full border-none bg-white px-6 py-4 text-slate-900 outline-none transition-all focus:ring-2 focus:ring-[#3cb878]"
                />
              </div>
            </div>

            {/* Row 2: Subject */}
            <div className="w-full">
              <input
                {...register('subject', { required: 'Subject is required' })}
                placeholder={data.placeholders.subject}
                className="w-full rounded-full border-none bg-white px-6 py-4 text-slate-900 outline-none transition-all focus:ring-2 focus:ring-[#3cb878]"
              />
            </div>

            {/* Anti-spam hidden field */}
            <input type="text" {...register('honeypot')} className="hidden" />

            {/* ReCAPTCHA */}
            <div className="flex justify-center py-2 md:col-span-2">
              <div className="scale-90 transform rounded-xl bg-white p-2 shadow-md md:scale-100">
                <ReCAPTCHA
                  sitekey={data.recaptchaKey}
                  onChange={(val: string | null) =>
                    console.log('Captcha Value:', val)
                  }
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#3cb878] px-10 py-5 font-bold uppercase tracking-widest text-white shadow-[0_10px_30px_rgba(60,184,120,0.3)] transition-all duration-300 hover:scale-105 hover:bg-slate-900 active:scale-95"
              >
                <span className="relative z-10">{data.buttonText}</span>
                <div className="absolute inset-0 translate-y-full bg-white/20 transition-transform duration-300 group-hover:translate-y-0" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
