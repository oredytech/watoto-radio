import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ActualitesPreview from '@/components/ActualitesPreview';
import PodcastsSection from '@/components/PodcastsSection';
import CampaignsSection from '@/components/CampaignsSection';
import NewsletterSubscription from '@/components/NewsletterSubscription';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ActualitesPreview />
        <PodcastsSection />
        <CampaignsSection />
        <NewsletterSubscription />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
