import React from 'react';
import { Button } from '@/components/ui/button';
import AudioPlayer from './AudioPlayer';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="accueil" className="min-h-screen flex items-center bg-gradient-subtle">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center justify-center min-h-[80vh] space-y-12">
          {/* Logo Text */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-center">
            <span className="text-foreground">WATOTO</span>
            <span className="block text-transparent bg-gradient-hero bg-clip-text">
              RADIO
            </span>
          </h1>

          {/* Play/Pause Button */}
          <Button variant="radio" size="icon-lg" className="bg-secondary hover:bg-secondary/90">
            <svg
              className="h-8 w-8 text-secondary-foreground"
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