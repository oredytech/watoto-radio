import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, Pause, Volume2, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    // Here you would integrate with actual audio player logic
  };

  return (
    <Card className="p-6 bg-gradient-hero text-primary-foreground">
      <div className="text-center space-y-6">
        {/* Main Play Button */}
        <div className="flex justify-center">
          <Button
            variant="secondary"
            size="icon-lg"
            onClick={togglePlay}
            className="rounded-full w-20 h-20 shadow-lg hover:scale-110 transition-transform"
          >
            {isPlaying ? (
              <Pause className="h-8 w-8" />
            ) : (
              <Play className="h-8 w-8 ml-1" />
            )}
          </Button>
        </div>

        {/* Status Text */}
        <div>
          <p className="text-lg font-semibold">
            {isPlaying ? 'En cours de diffusion' : 'Cliquez pour écouter'}
          </p>
          <p className="text-sm opacity-90">Watoto Radio - La voix des enfants</p>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center space-x-6">
          <div className="flex items-center space-x-2">
            <Volume2 className="h-5 w-5" />
            <div className="w-20 h-2 bg-primary-foreground/20 rounded-full">
              <div className="w-3/4 h-full bg-primary-foreground rounded-full"></div>
            </div>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            className="text-primary-foreground hover:bg-primary-foreground/10"
            asChild
          >
            <a 
              href="https://mytuner-radio.com/fr/radio/watoto-radio-482174/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-1"
            >
              <ExternalLink className="h-4 w-4" />
              <span>myTuner Radio</span>
            </a>
          </Button>
        </div>
      </div>
    </Card>
  );
}