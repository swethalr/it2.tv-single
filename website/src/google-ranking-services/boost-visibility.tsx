'use client';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

export default function BoostVisibility() {
  return (
    <section className="relative overflow-hidden bg-white py-24 selection:bg-orange-100 lg:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute bottom-[5%] left-[-5%] h-[500px] w-[500px] animate-pulse rounded-full bg-[#3cb878]/30 blur-[100px]" />
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[-5%] top-[-10%] h-[30%] w-[95%] rounded-full bg-[#3cb878]/10 blur-[190px]" />
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-24">
          {/* --- IMAGE CONTAINER --- */}
          <div className="group relative w-full lg:w-[30%]">
            {/* Modern Bordered Wrapper */}
            <div className=" relative z-10 rounded-[3.5rem]  p-2  transition-transform duration-700 group-hover:scale-[1.02]">
              <div className="overflow-hidden rounded-[3rem]">
                {/* Main Platform Illustration */}
                <img
                  src="/assets/images/google-ranking-services/boost-website-visibility.svg"
                  alt="Google Ranking Platforms Cloud"
                  className=" h-full w-full "
                />
              </div>
            </div>

            {/* Decorative Background Aura */}
            <div className="absolute left-1/2 top-1/2 -z-10 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3cb878] blur-[100px]" />
          </div>

          {/* --- CONTENT AREA --- */}
          <div className="w-full space-y-10 lg:w-[70%]">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-[#3cb878]] h-0.5 w-12" />
              </div>

              <h3 className="h3 text-center lg:text-left leading-[1.2]  text-slate-900">
                <span className=" text-[#3cb878]">
                  Boost Website Visibility -{' '}
                </span>{' '}
                Accelerate Sales
              </h3>
            </div>

            <div className="space-y-6">
              <p className="p  text-center lg:text-left text-black">
                The visibility of a website is one of the most important factors
                for running a successful business. Accelerate your sales by
                boosting your website's visibility. Our data-driven optimization
                strategies transform your website presence into a
                high-performing sales machine. With customized design
                enhancements, persuasive copywriting and targeted A/B testing,
                we focus on relevant business-enquiry keywords to lead you
                towards sales qualified leads.
              </p>
              <p className="p  text-center lg:text-left text-black ">
                This increased visibility will take your business website to the
                top of search results, driving more organic traffic and has high
                chances of converting those leads into customers. By attracting
                more business, our optimization method builds strong credibility
                to help you stand out among your competitors easily. This active
                engagement will earn the trust of your targeted audience,
                resulting in more clicks. Choose our ranking services to quickly
                increase your business growth with high number of sales.
              </p>
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
