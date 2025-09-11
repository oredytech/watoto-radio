import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CampaignsSection from '@/components/CampaignsSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <CampaignsSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
