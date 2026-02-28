'use client';

import React from 'react';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 md:px-10">
        <div className="flex flex-col items-center gap-10 lg:flex-row">
          {/* LEFT SIDE: THE GREEN BOX (Fixed Layout) */}
          <div className="w-full flex-shrink-0 lg:w-[450px]">
            <div className="relative flex flex-col items-center rounded-[20px] bg-[#2ecc71] p-8 md:p-12">
              {/* The White Certificate Card - Exactly as shown in it2.tv */}
              <div className="-mt-20 mb-10 w-full transform rounded-[10px] bg-white p-2 shadow-xl transition-transform duration-300 hover:scale-105 lg:-ml-16">
                <div className="relative aspect-[1.4/1] w-full overflow-hidden rounded-[5px]">
                  <Image
                    src="/img/zammy-zaif-certificate.webp"
                    alt="Zammy Zaif Certificate"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* The Stats - Vertically aligned below the card */}
              <div className="w-full space-y-8 text-white">
                <div className="flex items-center gap-5">
                  <span className="min-w-[80px] text-5xl font-black">18+</span>
                  <span className="text-[13px] font-bold uppercase leading-tight tracking-wider">
                    Years Of <br /> Experience
                  </span>
                </div>
                <div className="flex items-center gap-5">
                  <span className="min-w-[80px] text-5xl font-black">2T</span>
                  <span className="text-[13px] font-bold uppercase leading-tight tracking-wider">
                    Plus <br /> Clients
                  </span>
                </div>
                <div className="flex items-center gap-5">
                  <span className="min-w-[80px] text-5xl font-black">3K+</span>
                  <span className="text-[13px] font-bold uppercase leading-tight tracking-wider">
                    Projects <br /> Completed
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: THE CONTENT */}
          <div className="flex-1 lg:pl-10">
            <h5 className="mb-3 text-[16px] font-bold tracking-wide text-[#2ecc71]">
              Proven Ranking Mastery Since 2008
            </h5>
            <h2 className="mb-8 text-[36px] font-black uppercase leading-[1.1] text-[#1a1a1a] md:text-[44px]">
              Best Google SEO Professional
            </h2>

            <div className="space-y-6 text-[16px] font-medium leading-[1.8] text-[#555]">
              <p>
                Zammy Zaif earns the global title of the best SEO professional
                through his unmatched track record of delivering #1 Google
                rankings for clients globally since 2008. Zaif's strategies
                consistently secure First & Top positions by adhering strictly
                to Google guidelines, transforming small businesses into
                lead-generating powerhouses.
                <span className="font-bold text-[#1a1a1a]">
                  {' '}
                  His shift since 2014 to prioritize the #1 spot{' '}
                </span>
                has boosted organic traffic by up to 50% and click-through rates
                by 20% for websites.
              </p>

              <p>
                Google recognizes Zaif via featured snippets and Search Central
                mentions, spotlighting his content as authoritative since 2018.
                Over 20 years, his methods have engaged 5 million+ users monthly
                without third-party shortcuts, earning trust from 1000+
                entrepreneurs. As CEO of Versa Forge, he resolves complex issues
                like map spam and profile hurdles for local dominance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
