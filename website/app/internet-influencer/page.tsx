import { MainHeader } from '@/src/layout/header';
import { Footer } from '@/src/layout/footer/v1';
import Banner from '@/src/internet-influencer/banner';
import LeadForm from 'src/components/LeadForm';
import Newsletter from 'src/components/NewsLetter';
import CtaBanner from '@/src/sections/cta/v2';
import { ctaBannerData } from '@/data/cta-website';
import InternetInfluencer from '@/src/internet-influencer/internet-influencer';
import DigitalInfluencer from '@/src/internet-influencer/digital-influencer';
import BrandJournalist from '@/src/internet-influencer/brand-journalist';
import PathToCrown from '@/src/internet-influencer/path-to-crown';
import BamsFlippedScript from '@/src/internet-influencer/bams-flipped-script';
import MakeMoneyAsInternetInfluencer from '@/src/internet-influencer/make-money';

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
      <MainHeader version="1" />
      <main>
        <Banner />
        <InternetInfluencer />
        <LeadForm />
        <DigitalInfluencer />
        <BrandJournalist />
        < PathToCrown />
        <BamsFlippedScript />
        <MakeMoneyAsInternetInfluencer />       
        <CtaBanner data={ctaBannerData} />
        <Newsletter />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
