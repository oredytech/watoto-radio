import React from 'react';
import { Button } from '@/components/ui/button';
import { useAudio } from '@/contexts/AudioContext';
import { Play, Pause } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function HeroSection() {
  const { isPlaying, togglePlay } = useAudio();
  const navigate = useNavigate();
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
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-center text-primary whitespace-nowrap">
            WATOTO RADIO
          </h1>

          {/* Sous-titre */}
          <p className="text-xl md:text-2xl text-white text-center max-w-3xl">
            Expression libre et éducatif pour les enfants
          </p>

          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button 
              onClick={togglePlay}
              className="bg-primary text-white hover:bg-primary/90 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
              En direct
            </Button>
            
            <Button 
              variant="ghost"
              onClick={() => navigate('/actualites')}
              className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Actualités
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
