'use client';

import React, { useState, useRef } from 'react';



import { ChevronRight, ChevronLeft, Check } from 'lucide-react';



import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import type { Swiper as SwiperType } from 'swiper';



import 'swiper/css';

import 'swiper/css/pagination';

import 'swiper/css/navigation';

import 'swiper/css/effect-coverflow';



export default function CostofServices() {

  const pricingData = [

    {

      id: 'gbp-local',

      title: 'GBP Local SEO',

      bgColor: '#e4ffeb',

      prices: {

        usd: '$750',

        inr: '₹61,000',

        gbp: '£600',

        aed: 'AED 2750',

        cad: 'C$1000',

      },

      features: [

        '45 Days Timeframe',

        '5-10 Miles of Area Radius',

        '5 Major Category Keywords',

        '5 Business Related Keywords',

        '1 Google Business Profile',

        'Website Ranking',

      ],

    },

    {

      id: 'city-based',

      title: 'City Based SEO',

      bgColor: '#e4ffeb',

      prices: {

        usd: '$999/Month',

        inr: '₹81,000/Month',

        gbp: '£899/Month',

        aed: 'AED 3750/Month',

        cad: 'C$1300/Month',

      },

      features: [

        '3-6 Months Timeframe',

        'A Particular City or District',

        '1st Rank for 25 Keywords',

        '1st page Rank for 75 Keywords',

        '1 Google Business Profile',

        '300 HQ White Hat Backlinks',

      ],

    },

    {

      id: 'state-level',

      title: 'State Level SEO',

      bgColor: '#e4ffeb',

      prices: {

        usd: '$1350/Month',

        inr: '₹1,10,000/Month',

        gbp: '£1100/Month',

        aed: 'AED 5000/Month',

        cad: 'C$1800/Month',

      },

      features: [

        '6-9 Months Timeframe',

        'State Level 1st Rank',

        '1st Rank for 25 Keywords',

        '1st Page Rank for 125 Key',

        '1-5 Google Business Profiles',

        '500 HQ White Hat Backlinks',

      ],

    },

    {

      id: 'country-level',

      title: 'Country Level SEO',

      bgColor: '#e4ffeb',

      prices: {

        usd: '$1800/Month',

        inr: '₹1,50,000/Month',

        gbp: '£1400/Month',

        aed: 'AED 6600/Month',

        cad: 'C$2400/Month',

      },

      features: [

        '9-12 Months Timeframe',

        'Country Level 1st Rank',

        '1st Rank for 50 Keywords',

        '1st Page Rank for 75 Keywords',

        '1-10 Google Business Profiles',

        '750 HQ White Hat Backlinks',

      ],

    },

    {

      id: 'global-level',

      title: 'Global SEO',

      bgColor: '#e4ffeb',

      prices: {

        usd: '$2000/Month',

        inr: '₹1,70,000/Month',

        gbp: '£1600/Month',

        aed: 'AED 7350/Month',

        cad: 'C$2550/Month',

      },

      features: [

        '12-24 Months Timeframe',

        'Global Level 1st Rank',

        '1st Rank for 75 Keywords',

        '1st Page Rank for 125 Keywords',

        'Snippet Featured Results ',

        '1550 HQ White Hat Backlinks',

      ],

    },

  ];

  const [pricingSwiper, setPricingSwiper] = React.useState<SwiperType | null>(

    null

  );

  const [currency, setCurrency] = React.useState('usd');

  const RANKING_CASES = [

    {

      id: 1,

      src: '/assets/images/results/case-1.jpg',

      title: '45 Days Challenge',

      location: 'New Gurgaon, India',

    },

    {

      id: 2,

      src: '/assets/images/results/case-2.jpg',

      title: 'GMB Performance Max',

      location: 'London, UK',

    },

    {

      id: 3,

      src: '/assets/images/results/case-3.jpg',

      title: 'Top #1 AI Ranking',

      location: 'Toronto, Canada',

    },

    {

      id: 4,

      src: '/assets/images/results/case-4.jpg',

      title: 'SEO Success Story',

      location: 'Dubai, UAE',

    },

    {

      id: 5,

      src: '/assets/images/results/case-5.jpg',

      title: 'Map Pack Dominance',

      location: 'New York, USA',

    },

  ];
  return (

    <section className="relative overflow-hidden bg-[#fafafa] py-16">

      <div className="container mx-auto max-w-[1480px] px-4">

        {/* Header Section */}

        <div className="mb-12 text-center">

          <h5 className="h5 mb-1 font-bold uppercase tracking-wider text-[#3cb878]">

            Local to Global Ranking

          </h5>

          <h2 className="h2 text-[#1a202c]">Cost of SEO Rank Services</h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#3cb878]"></div>

{/* Premium Centered Floating Switcher */}
<div className="mt-8 flex flex-wrap justify-center gap-2 w-full px-4">
  {['usd', 'inr', 'gbp', 'aed', 'cad'].map((curr) => (
    <button
      key={curr}
      onClick={() => setCurrency(curr)}
      className={`flex h-11 w-20 items-center justify-center rounded-full text-[13px] font-bold uppercase border border-slate-200 tracking-widest transition-all duration-300 ${
        currency === curr
          ? 'bg-[#1a202c] text-white shadow-xl scale-110' // Active: High-contrast Dark
          : 'bg-[#e4ffeb]  text-slate-900 hover:text-slate-900 hover:bg-slate-200' // Inactive: Clean & Minimal
      }`}
    >
      {curr}
    </button>
  ))}
</div>

        </div>

{/* SWIPER CONTAINER */}
<div className="relative z-10 px-2 lg:px-14">
  
  {/* DESKTOP ARROWS - Only visible on large screens */}
  <button
    onClick={() => pricingSwiper?.slidePrev()}
    className="hidden lg:flex absolute left-0 top-1/2 z-50 h-12 w-12 -translate-y-1/2 items-center bg-[#3cb878] text-white justify-center rounded-full text-slate-400 hover:text-[#3cb878] transition-all shadow-xl hover:bg-black active:scale-90"
  >
    <ChevronLeft size={24} />
  </button>

  <button
    onClick={() => pricingSwiper?.slideNext()}
    className="hidden lg:flex absolute right-0 top-1/2 z-50 h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#3cb878] text-white shadow-xl transition-all hover:bg-black active:scale-90"
  >
    <ChevronRight size={24} />
  </button>

          <Swiper

            onSwiper={setPricingSwiper}

            modules={[Navigation, Pagination, Autoplay]}

            spaceBetween={20}

            slidesPerView={1}

            grabCursor={true}

            loop={true}

            allowTouchMove={true}

            watchSlidesProgress={true}

            breakpoints={{

              640: { slidesPerView: 2 },

              1024: { slidesPerView: 4 },

            }}

            className="pb-12"

          >

            {pricingData.map((plan) => (

              <SwiperSlide key={plan.id}>

                <div

                  className="flex min-h-[600px] pb-8 flex-col rounded-[2rem] border border-slate-200  bg-white p-8 font-bold text-black "

                  style={{ backgroundColor: plan.bgColor }}

                >

                  <h4 className="h4 mb-6 border-b border-[#3cb878] pb-4 text-center font-bold uppercase">

                    {plan.title}

                  </h4>



                  <ul className="mb-8 flex-grow space-y-5">

                    {plan.features.map((feature, i) => (

                      <li

                        key={i}

                        className="flex items-start gap-3 text-[16px] font-semibold leading-tight"

                      >

                        <div className="mt-0.5 shrink-0 rounded bg-[#3cb878] p-0.5">

                          <Check

                            size={12}

                            className="stroke-[4px] text-white"

                          />

                        </div>

                        <span>{feature}</span>

                      </li>

                    ))}

                  </ul>



                  <div className="mt-auto text-center">

                    <p className="mb-1 text-[12px] font-bold uppercase opacity-80">

                      Starts from

                    </p>

                    <p className="mb-6 text-[22px] font-bold ">

                      {plan.prices[currency as keyof typeof plan.prices]}

                    </p>

                    <button className="w-full rounded-full border-2 border-[#3cb878] bg-[#3cb878] py-4 text-[14px] font-bold uppercase tracking-widest text-white transition-all hover:bg-white hover:text-[#3cb878]">

                      Contact Now

                    </button>

                  </div>

                </div>

              </SwiperSlide>

            ))}

          </Swiper>

          {/* MOBILE ARROWS - Only visible on small screens, placed at the bottom */}
  <div className="flex lg:hidden items-center justify-center gap-6 mt-8">
    <button
      onClick={() => pricingSwiper?.slidePrev()}
      className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-slate-200 bg-white text-slate-600 shadow-md active:scale-90"
    >
      <ChevronLeft size={28} />
    </button>
    <button
      onClick={() => pricingSwiper?.slideNext()}
      className="flex h-14 w-14 items-center justify-center rounded-full bg-[#3cb878] text-white shadow-lg shadow-green-200 active:scale-90"
    >
      <ChevronRight size={28} />
    </button>
  </div>

        </div>

      </div>

    </section>

  );

}