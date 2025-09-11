import React from 'react';
import { Button } from '@/components/ui/button';
import AudioPlayer from './AudioPlayer';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="accueil" className="min-h-screen flex items-center bg-gradient-subtle">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground">
                WATOTO
                <span className="block text-transparent bg-gradient-hero bg-clip-text">
                  RADIO
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                La première plateforme radiophonique au Congo dédiée à l'expression des enfants
              </p>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl">
              Ici, les jeunes voix prennent le micro pour partager leurs rêves, leurs défis 
              et leurs idées pour un monde meilleur. Découvrez comment les enfants transforment 
              leur communauté à travers la radio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl">
                Découvrir nos émissions
              </Button>
              <Button variant="outline" size="xl">
                En savoir plus
              </Button>
            </div>
          </div>

          {/* Audio Player */}
          <div className="space-y-6">
            <AudioPlayer />
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="space-y-1">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Villes</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-secondary">100+</div>
                <div className="text-sm text-muted-foreground">Enfants</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-primary">4</div>
                <div className="text-sm text-muted-foreground">Campagnes</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16 lg:mt-20">
          <Button
            variant="ghost"
            size="icon"
            className="animate-bounce"
            asChild
          >
            <a href="#watoto-radio">
              <ArrowDown className="h-6 w-6" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}