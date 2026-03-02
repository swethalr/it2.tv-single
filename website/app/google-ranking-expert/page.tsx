
import React from 'react';
import { MainHeader } from '@/src/layout/header';
import { Footer } from '@/src/layout/footer/v1';
import { HeroBanner } from '@/src/sections/Herobanner';
import { SeoResults } from '@/src/sections/SeoResults';
import { ExpertDetail } from '@/src/sections/ExpertDetail';
import { BusinessProfile } from '@/src/sections/BusinessProfile';
import { FirstRankServices } from '@/src/sections/FirstRankServices';
import { GoogleSeoExpertise } from '@/src/sections/GoogleSeoExpertise';
import { RankingStrategy } from '@/src/sections/RankingStrategy';
import { CaseStudies } from '@/src/sections/CaseStudies';
import { Testimonials } from '@/src/sections/Testimonials';
import { SeoServicesGrid } from '@/src/sections/Seoservicesgrid';
import { LocalSeoMaps } from '@/src/sections/LocalSeoMaps';
import { ChooseExpert } from '@/src/sections/ChooseExpert';
import { AlgorithmFactors } from '@/src/sections/AlgorithmFactors';
import { SectorsWeServe } from '@/src/sections/SectorsWeServe';
import { ImpactingSearch } from '@/src/sections/ImpactingSearch';
import { FaqSection } from '@/src/sections/FaqSection';
import { Sidebar } from '@/src/sections/Sidebar';
import { BottomContactForm } from '@/src/sections/BottomContactForm';




export default function GoogleRankingExpertPage() {
  return (
    <div className="font-sans bg-white text-slate-900 overflow-x-hidden selection:bg-[#3cb878]">
      {/* ── Full-Width Hero Banner ─────────────────────────────────────── */}
      <MainHeader version="2" />
      <HeroBanner />
      {/* ── Holy-Grail Layout: Main (72%) + Sidebar (20%) ─────────────── */}
      <div className="mx-auto flex max-w-[1536px] flex-col lg:gap-16 px-3 py-20 lg:flex-row">
        {/* ── MAIN COLUMN ─────────────────────────────────────────────── */}
        <main className="relative order-2 w-full overflow-x-hidden space-y-32 lg:order-1 lg:w-[72%]">
          {/* S1 – Client SEO Result Carousel + Metrics */}
          <SeoResults />

          {/* S2 – Ranking Expert Bio + Free Audit CTA */}
          <ExpertDetail />

          {/* S3 – GBP Performance Max + Download Checklist */}
          <BusinessProfile />

          {/* S4 – First Rank SEO Services Cards + Counters */}
          <FirstRankServices />

          {/* S5 – Expertise in Google SEO */}
          <GoogleSeoExpertise />

          {/* S6 – Google Ranking Strategy + Pillars */}
          <RankingStrategy />

          {/* S7 – SEO Growth Case Studies */}
          <CaseStudies />

          {/* S8 – Client Reviews Carousel */}
          <Testimonials />

          {/* S9 – 12-Card SEO Services Grid */}
          <SeoServicesGrid />

          {/* S10 – Local SEO for Google Maps */}
          <LocalSeoMaps />

          {/* S11 – How to Choose a Google SEO Expert */}
          <ChooseExpert />

          {/* S12 – Google Rank Algorithm Factors (Tab Cards) */}
          <AlgorithmFactors />

          {/* S13 – Sectors We Serve */}
          <SectorsWeServe />

          {/* S14 – Google Expert Impacting Search Engines */}
          <ImpactingSearch />

          {/* S15 – FAQ Accordion */}
          <FaqSection />
        </main>

        {/* ── SIDEBAR ─────────────────────────────────────────────────── */}
        <Sidebar />
      </div>

      {/* ── Full-Width Bottom Contact Form ────────────────────────────── */}
      <BottomContactForm />
      <Footer />
    </div>
  );
}
