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
  frequency?: string;
}

interface ProvincePartners {
  [province: string]: Partner[];
}

const NationalPartners = () => {
  // Données exemple - à remplacer par vos vraies données
  const partners: ProvincePartners = {
    'Nord-Kivu': [
      {
        name: 'Radio Bora FM',
        type: 'Radio communautaire',
        location: 'Goma',
        frequency: '103.5 MHz'
      }
    ],
    // Ajoutez les autres provinces et partenaires ici
  };

  const provinces = [
    'Bas-Uélé',
    'Équateur',
    'Haut-Katanga',
    'Haut-Lomami',
    'Haut-Uélé',
    'Ituri',
    'Kasai',
    'Kasai-Central',
    'Kasai-Oriental',
    'Kinshasa',
    'Kongo-Central',
    'Kwango',
    'Kwilu',
    'Lomami',
    'Lualaba',
    'Mai-Ndombe',
    'Maniema',
    'Mongala',
    'Nord-Kivu',
    'Nord-Ubangi',
    'Sankuru',
    'Sud-Kivu',
    'Sud-Ubangi',
    'Tanganyika',
    'Tshopo',
    'Tshuapa'
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
              Partenaires Nationaux
            </h1>
            <p className="text-lg text-muted-foreground mb-12">
              Découvrez les partenaires de Watoto Radio en RDC
            </p>

            <div className="space-y-12">
              {provinces.map((province) => {
                const provincePartners = partners[province] || [];
                const letter = province[0].toUpperCase();
                const isNewLetter = province === provinces.find(p => p[0].toUpperCase() === letter);

                return (
                  <div key={province}>
                    {isNewLetter && (
                      <div className="text-3xl font-bold text-primary mb-6 mt-8">
                        {letter}
                      </div>
                    )}
                    
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold text-foreground mb-4">
                        {province}
                      </h2>
                      
                      {provincePartners.length > 0 ? (
                        <div className="space-y-4">
                          {provincePartners.map((partner, index) => (
                            <div
                              key={index}
                              className="p-6 rounded-lg border border-border bg-card card-hover"
                            >
                              <h3 className="text-xl font-semibold text-foreground mb-2">
                                {partner.name}
                              </h3>
                              <div className="space-y-1 text-muted-foreground">
                                <p>{partner.type}</p>
                                <p>Basé en ville de {partner.location}</p>
                                {partner.frequency && (
                                  <p className="text-primary font-medium">
                                    Émettant sur la fréquence {partner.frequency}
                                  </p>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-muted-foreground italic">
                          Aucun partenaire dans cette province pour le moment
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NationalPartners;
