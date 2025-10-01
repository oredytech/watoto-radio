import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Globe, MapPin } from 'lucide-react';

const Partners = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Nos Partenaires
            </h1>
            <p className="text-lg text-muted-foreground mb-12">
              Découvrez les organisations qui soutiennent Watoto Radio dans sa mission de donner la voix aux enfants
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-16">
              <Link to="/partenaires/nationaux" className="group">
                <div className="card-hover p-8 rounded-lg border border-border bg-card h-full flex flex-col items-center justify-center space-y-4">
                  <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <MapPin className="h-12 w-12 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">
                    Partenaires Nationaux
                  </h2>
                  <p className="text-muted-foreground">
                    Nos partenaires à travers les provinces de la RDC
                  </p>
                  <Button variant="hero" size="lg" className="mt-4">
                    Découvrir
                  </Button>
                </div>
              </Link>

              <Link to="/partenaires/internationaux" className="group">
                <div className="card-hover p-8 rounded-lg border border-border bg-card h-full flex flex-col items-center justify-center space-y-4">
                  <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Globe className="h-12 w-12 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">
                    Partenaires Internationaux
                  </h2>
                  <p className="text-muted-foreground">
                    Nos partenaires à travers le monde
                  </p>
                  <Button variant="hero" size="lg" className="mt-4">
                    Découvrir
                  </Button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Partners;
