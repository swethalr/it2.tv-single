
import Hero from '@/src/sections/google-maps-local-seo-ranking-expert/Hero';
import LeadForm from '@/src/components/LeadForm';
import { MainHeader } from '@/src/layout/header';
import PremiumSEOExpert from '@/src/sections/google-maps-local-seo-ranking-expert/About';
import FuturisticServices from '@/src/sections/google-maps-local-seo-ranking-expert/maps-seo-service';
import RadarSection from '@/src/sections/google-maps-local-seo-ranking-expert/ranking-radius';
import RankingEngine from '@/src/sections/google-maps-local-seo-ranking-expert/search-engine-optimization';
import FirstRankResult from '@/src/sections/google-maps-local-seo-ranking-expert/first-rank-result';
import {Testimonials} from '@/src/sections/Testimonials';
import { Footer } from '@/src/layout/footer/v1';
import WorkSectionDark from '@/src/sections/worksection/worksectiondark';
import GlobalGoogleRankingExpert from '@/src/sections/google-maps-local-seo-ranking-expert/global-google-ranking-expert';
import ExpertLocalSeoConstultant from '@/src/sections/google-maps-local-seo-ranking-expert/expert-local-seo-consultant';
import GoogleMapsLocalSeoRankingExpert from '@/src/sections/google-maps-local-seo-ranking-expert/google-places-to-google-maps';
import FreeSeoPlan from '@/src/sections/google-maps-local-seo-ranking-expert/free-seo-plan';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

import { Metadata } from 'next';
// This metadata is great for SEO - your CEO will love this
export const metadata: Metadata = {
  title: 'Zammy Zaif',
  description: 'Hire an Best Google SEO expert to optimize your search engine ranking, organic results, traffic and featured snippets. Book Your Appointment Now! 91-9344618144"',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};



export default function GoogleMapsLocalSeoRankingExpertPage() {
  return (
    <main className="overflow-x-hidden">
      <MainHeader version="2" />
      <Hero />
      <PremiumSEOExpert />
      <FirstRankResult />
      <LeadForm />
      <Testimonials />
      <FuturisticServices />
      <RadarSection />
      <GlobalGoogleRankingExpert />
      <ExpertLocalSeoConstultant />
      <WorkSectionDark />
      <GoogleMapsLocalSeoRankingExpert />
      <RankingEngine />
      <FreeSeoPlan />
      <Footer />
    </main>
  );
}
