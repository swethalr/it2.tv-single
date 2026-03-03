import { MainHeader } from '@/src/layout/header';
import { Footer } from '@/src/layout/footer/v1';
import Banner from '@/src/website-seo-ranking-services/banner';
import LeadForm from '@/src/components/LeadForm';
import Newsletter from '@/src/components/NewsLetter';
import BoostYourWebsiteRanking from '@/src/website-seo-ranking-services/boost-your-website-ranking';
import AchievingFirstRank from '@/src/website-seo-ranking-services/achieving-first-rank';
import OrganicWhiteHatSeo from '@/src/website-seo-ranking-services/organic-white-hat-seo';
import BenefitsOfAchievingFirstRank from '@/src/website-seo-ranking-services/benefits-of-achieving';
import WhyChooseZammyZaif from '@/src/website-seo-ranking-services/why-choose';
import CtaBanner from '@/src/sections/cta/v2';
import { ctaBannerData } from '@/data/cta-website';

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


export default function Page() {
  return (
    <>
      {/* Navigation */}
      <MainHeader version="2" />

      <main>
        <Banner />
        <BoostYourWebsiteRanking />
        <AchievingFirstRank />
        <LeadForm />
        <OrganicWhiteHatSeo />
        <BenefitsOfAchievingFirstRank />
        <WhyChooseZammyZaif />
        <CtaBanner data={ctaBannerData} />

        <Newsletter />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
