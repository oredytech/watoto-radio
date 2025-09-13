import React from 'react';
import { Button } from '@/components/ui/button';
import { useAudio } from '@/contexts/AudioContext';

export default function HeroSection() {
  const { play } = useAudio();
  return (
    <section 
      id="accueil" 
      className="min-h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: `url(/lovable-uploads/24d18f7c-7c9b-4609-9952-d41bf3cd91e2.png)`,
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
            variant="ghost"
            onClick={play}
            className="rounded-full w-32 h-32 mt-8 shadow-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105"
          >
            <svg
              className="h-20 w-20 text-white ml-2"
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