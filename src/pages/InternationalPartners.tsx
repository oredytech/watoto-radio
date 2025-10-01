import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface Partner {
  name: string;
  type: string;
  location: string;
  logo?: string;
}

const InternationalPartners = () => {
  // Données exemple - à remplacer par vos vraies données
  const partners: Partner[] = [
    // Ajoutez vos partenaires internationaux ici
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Link to="/partenaires">
              <Button variant="ghost" className="mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour
              </Button>
            </Link>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Partenaires Internationaux
            </h1>
            <p className="text-lg text-muted-foreground mb-12">
              Nos partenaires à travers le monde
            </p>

            {partners.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6">
                {partners.map((partner, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-lg border border-border bg-card card-hover"
                  >
                    {partner.logo && (
                      <img
                        src={partner.logo}
                        alt={`Logo ${partner.name}`}
                        className="h-20 mb-4 object-contain"
                      />
                    )}
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {partner.name}
                    </h3>
                    <div className="space-y-1 text-muted-foreground">
                      <p>{partner.type}</p>
                      <p>{partner.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground text-center py-12">
                Aucun partenaire international pour le moment
              </p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InternationalPartners;
