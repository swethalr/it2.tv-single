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
