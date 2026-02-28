
import React from 'react';
import { MainHeader } from '@/src/layout/header';
import { Footer } from '@/src/layout/footer/v1';
import { HeroBanner } from '@/src/local-seo-services-hialeah/hero-banner';
import { GrowLocally } from '@/src/local-seo-services-hialeah/grow-locally';
import { LocalSeoStrategy } from '@/src/local-seo-services-hialeah/local-seo-strategy';
import { CaseStudies } from '@/src/local-seo-services-hialeah/case-studies';
import { ContentStrategy } from '@/src/local-seo-services-hialeah/content-strategy';
import { OptimizeGBP } from '@/src/local-seo-services-hialeah/optimize-gbp';
import { LocalSearchExperience } from '@/src/local-seo-services-hialeah/local-search-experience';
import { OnlineTrust } from '@/src/local-seo-services-hialeah/online-trust';
import { QualityLinks } from '@/src/local-seo-services-hialeah/quality-links';
import { ZammyBio } from '@/src/local-seo-services-hialeah/zammy-bio';
import { YourTurn } from '@/src/local-seo-services-hialeah/your-turn';
import { FaqSection } from '@/src/local-seo-services-hialeah/faq-section';
import { Sidebar } from '@/src/local-seo-services-hialeah/sidebar';
import { BottomContactForm } from '@/src/local-seo-services-hialeah/bottom-contact-form';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function LocalSeoServicesHialeahPage() {
  return (
    <div className="font-sans bg-white text-slate-900 selection:bg-[#3cb878]">
      <MainHeader version="2" />
      {/* ── Full-Width Hero Banner ─────────────────────────────────────── */}
      <HeroBanner />

      {/* ── Holy-Grail Layout: Main (72%) + Sidebar (20%) ─────────────── */}
      <div className="mx-auto flex max-w-[1536px] flex-col gap-16 px-6 py-20 lg:flex-row">
        {/* ── MAIN COLUMN ─────────────────────────────────────────────── */}
        <main className="order-2 w-full space-y-32 lg:order-1 lg:w-[72%]">
          {/* S1  – Grow Your Business Locally */}
          <GrowLocally />

          {/* S2  – Our Local SEO Strategy */}
          <LocalSeoStrategy />

          {/* S3  – AI SEO Result / Case Studies Carousel */}
          <CaseStudies />

          {/* S4  – Content Strategy for Local Reach */}
          <ContentStrategy />

          {/* S5  – Optimizing Google Business Profile + 4 feature cards */}
          <OptimizeGBP />

          {/* S6  – Creating Seamless Local Search Experience */}
          <LocalSearchExperience />

          {/* S7  – Creating Lasting Online Trust + image */}
          <OnlineTrust />

          {/* S8  – Boosting Authority With Quality Links */}
          <QualityLinks />

          {/* S9  – Google SEO Consultant – Zammy Zaif bio */}
          <ZammyBio />

          {/* S10 – Now It's Your Turn */}
          <YourTurn />

          {/* S11 – Frequently Asked Questions */}
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
