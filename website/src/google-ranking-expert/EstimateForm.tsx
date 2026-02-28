import { useState } from 'react';
import { motion } from 'framer-motion';
import ReCAPTCHA from 'react-google-recaptcha';

export const EstimateForm = () => {
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-[3.5rem] bg-slate-900 p-10 md:p-20">
          <form className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <input
              type="text"
              placeholder="GBP or Website URL"
              className="h-14 w-full rounded-full bg-white px-6 text-slate-800 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Subject"
              className="h-14 w-full rounded-full bg-white px-6 text-slate-800 focus:outline-none"
            />

            <div className="flex justify-center py-2 md:col-span-2">
              <div className="scale-90 transform rounded-xl bg-white p-2 md:scale-100">
                <ReCAPTCHA
                  sitekey="YOUR_RECAPTCHA_SITE_KEY"
                  onChange={(val) => setCaptchaValue(val)}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={!captchaValue}
              className="mt-2 rounded-full bg-[#FF5A2C] py-5 font-black uppercase tracking-wider text-white shadow-xl transition-all hover:bg-[#3cb878] disabled:opacity-50 md:col-span-2"
            >
              Submit Seo Estimate Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
