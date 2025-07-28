
import { useEffect } from 'react';
import SellrNavbar from '@/components/SellrNavbar';
import HeroSection from '@/components/HeroSection';
import AICapabilitiesSection from '@/components/AICapabilitiesSection';
import SellrFeaturesSection from '@/components/SellrFeaturesSection';
import SellrServicesSection from '@/components/SellrServicesSection';
import SellrThemesSection from '@/components/SellrThemesSection';
import SellrCTASection from '@/components/SellrCTASection';
import SellrContactSection from '@/components/SellrContactSection';
import Footer from '@/components/Footer';
import { useHash } from '@/contexts/HashContext';

const Index = () => {
  const { currentHash } = useHash();
  
  // Handle hash navigation for scrolling
  useEffect(() => {
    if (currentHash) {
      const element = document.getElementById(currentHash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [currentHash]);
  
  return (
    <div className="min-h-screen bg-background">
      <SellrNavbar />
      <main>
        <HeroSection />
        <AICapabilitiesSection />
        <div className="w-full flex justify-center my-8">
          <hr className="w-32 border-t-2 border-primary/30 rounded-full" />
        </div>
        <SellrFeaturesSection />
        <SellrServicesSection />
        <SellrThemesSection />
        <SellrCTASection />
        <SellrContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
