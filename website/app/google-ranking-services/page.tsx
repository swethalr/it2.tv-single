import { MainHeader } from '@/src/layout/header';
import { Footer } from '@/src/layout/footer/v1';
import Banner from '@/src/google-ranking-services/banner';
import RankBusiness from '@/src/google-ranking-services/rank-business';
import Expert from '@/src/google-ranking-services/expert';
import LeadForm from '@/src/components/LeadForm';
import Newsletter from '@/src/components/NewsLetter';
import CostofServices from '@/src/google-ranking-services/cost-seo-rank-services';
import BusinessPride from '@/src/google-ranking-services/your-business-pride';
import GrowLeads from '@/src/google-ranking-services/grow-leads';
import BoostVisibility from '@/src/google-ranking-services/boost-visibility';
import GeoAIranking from '@/src/google-ranking-services/ai-search-ranking';
import WebsiteFirstRank from '@/src/google-ranking-services/website-first-rank-seo-result';
import RevolutionizeSeo from '@/src/google-ranking-services/revolutionize-seo';
import WinGoogleAlogrithm from '@/src/google-ranking-services/win-google-alogrithm';
import ClientReviews from '@/src/components/ClientReview';
import CommonInquiries from '@/src/google-ranking-services/common-inquiries';




// Next.js handles viewport separately for better performance
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};


export default function Page() {
  return (
    <>
      {/* Navigation */}
      <MainHeader version="2" />

      <main>
        <Banner />
        <RankBusiness />
        <Expert />
        <LeadForm />
        <CostofServices />
        <BusinessPride />
        <GrowLeads />
        <BoostVisibility />
        <GeoAIranking />
        <WebsiteFirstRank />
        <RevolutionizeSeo />
        <WinGoogleAlogrithm />
        <ClientReviews />
        <CommonInquiries />
        <Newsletter />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
