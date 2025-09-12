import React from 'react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section 
      id="accueil" 
      className="min-h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: `url(/lovable-uploads/30d5bbdd-adf0-49a9-846c-26c896ed1be2.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay sombre pour améliorer la lisibilité */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-[80vh] space-y-8">
          {/* Titre principal */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-center text-primary">
            WATOTO RADIO
          </h1>

          {/* Sous-titre */}
          <p className="text-xl md:text-2xl text-white text-center max-w-3xl">
            Expression libre et éducatif pour les enfants
          </p>

          {/* Bouton Play */}
          <Button 
            size="icon-lg" 
            className="bg-destructive hover:bg-destructive/90 rounded-full w-20 h-20 mt-8"
          >
            <svg
              className="h-10 w-10 text-white ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
}