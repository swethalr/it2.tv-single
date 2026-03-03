
import { MainHeader } from '@/src/layout/header';
import LeadForm from 'src/components/LeadForm';
import Newsletter from 'src/components/NewsLetter';
import { Footer } from '@/src/layout/footer/v1';
import HeroSection from '@/src/best-seo-professional/hero-section/HeroSection';
import TopBar from '@/src/best-seo-professional/top-bar/TopBar';
import AboutProfessional from '@/src/best-seo-professional/about-professional/AboutProfessional';
import CardsGrid from '@/src/best-seo-professional/cards-grid/CardsGrid';
import ClientImpact from '@/src/best-seo-professional/client-impact/ClientImpact';
import DiverseIndustries from '@/src/best-seo-professional/diverse-industries/DiverseIndustries';
import MasterInSeo from '@/src/best-seo-professional/master-in-seo/MasterInSeo';
import ZammyServices from '@/src/best-seo-professional/zammy-services/ZammyServices';
import TrustingExperts from '@/src/best-seo-professional/trusting-experts/TrustingExperts';
import RoiFocused from '@/src/best-seo-professional/roi-focused/RoiFocused';
import GoogleGuidelines from '@/src/best-seo-professional/google-guidelines/GoogleGuidelines';
import TechnicalServices from '@/src/best-seo-professional/technical-services/TechnicalServices';
import RankSpecialist from '@/src/best-seo-professional/rank-specialist/RankSpecialist';
import VersaForge from '@/src/best-seo-professional/versa-forge/VersaForge';



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
{/*

const BestSEOProfessional: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Do you want to Hire a Best SEO Expert',
      subtitle:
        'Hire the best google seo expert to boost your google search engine rankings',
    },
    {
      title: 'Google #1 Rank Specialist',
      subtitle:
        'Obtaining high-quality targeted organic traffic without paying paid ads.',
    },
    {
      title: 'Best Google SEO Professional',
      subtitle: 'Grow Your Business with New Clients? Contact us immediately',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);*/}
export default function BestSEOProfessional() {
  return (
    <>
      <TopBar />
      <MainHeader version="2" />

      <HeroSection />
      <div className="min-h-screen bg-white">
        <AboutProfessional />
        <CardsGrid />
        <LeadForm />
        <ClientImpact />
        <DiverseIndustries />
        <MasterInSeo />
        <ZammyServices />
        <TrustingExperts />
        <RoiFocused />
        <GoogleGuidelines />
        <TechnicalServices />
        <RankSpecialist />
        <VersaForge />
        <Newsletter />
        <Footer />
      </div>
    </>
  );
};


