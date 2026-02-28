'use client';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

export default function PathToCrown() {
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
          <div className="group relative w-full lg:w-[45%]">
            {/* Modern Bordered Wrapper */}
            <div className=" relative z-10 rounded-[3.5rem]  p-2  transition-transform duration-700 group-hover:scale-[1.02]">
              <div className="overflow-hidden rounded-[3rem]">
                {/* Main Platform Illustration */}
                <img
                  src="/assets/images/internet-influencer/tamilnadu-based-entrepreneur.webp"
                  alt="Google Ranking Platforms Cloud"
                  className=" h-full w-full "
                />
              </div>
            </div>

            {/* Decorative Background Aura */}
            <div className="absolute left-1/2 top-1/2 -z-10 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3cb878] blur-[100px]" />
          </div>

          {/* --- CONTENT AREA --- */}
          <div className="w-full space-y-10 lg:w-1/2">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-[#3cb878]] h-0.5 w-12" />
              </div>
              <h3 className="h3 leading-[0.95]  text-slate-900">
                The Path to the Most Desired Crown
              </h3>
            </div>

            <div className="space-y-6">
              <p className="p leading-[2em] text-black">
                For obvious reasons, the young Tamil Nadu-based entrepreneur MR ZAMMY ZAIF is an undisputed Google Influencer in India. We know him as the CEO of BAMS Technologies, a well-rounded IT solution company based in Kerala that was founded in 2008. MR ZAMMY ZAIF has been instrumental in propelling his brainchild to new heights on the wings of SEO, website auditing, and digital media marketing since its inception. With international experience, he has completed projects in India and other Asian countries. So far, he has successfully obtained funding and projects from reputable clients all over the world. He has already built an empire in the online world, thanks to a free-flowing workforce that complements his ideas and vision. As a result, India's most popular Google Influencer was born.
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
