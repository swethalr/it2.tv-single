import FirstSection from '@/src/influencer-page/influencer';
import { Footer } from '@/src/layout/footer/v2';
import { MainHeader } from '@/src/layout/header';
import Newsletter from 'src/components/NewsLetter';
// This metadata is great for SEO - your CEO will love this
export const metadata = {
  title: 'About Zammy Zaif | The Legacy of Rank #1',
  description:
    'Explore the journey of Zammy Zaif, from founding Hopes Infosys in 2008 to becoming a global authority in Local SEO and Market Dominance.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* You can add your Navbar here if it's not in your layout.tsx */}
      <MainHeader />

      <FirstSection />

      <Newsletter />
      <Footer />
      {/* You can add your Footer here */}
    </main>
  );
}
