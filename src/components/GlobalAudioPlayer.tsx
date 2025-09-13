import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, Pause, Volume2, Loader2 } from 'lucide-react';
import { useAudio } from '@/contexts/AudioContext';

export default function GlobalAudioPlayer() {
  const { isPlaying, isLoading, togglePlay } = useAudio();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-primary text-primary-foreground border-t border-border z-40 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button
            variant="secondary"
            size="icon"
            onClick={togglePlay}
            disabled={isLoading}
            className="rounded-full"
          >
            {isLoading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : isPlaying ? (
              <Pause className="h-5 w-5" />
            ) : (
              <Play className="h-5 w-5 ml-0.5" />
            )}
          </Button>
          
          <div>
            <p className="font-semibold text-sm">
              {isLoading ? 'Chargement...' : isPlaying ? 'En direct - Watoto Radio' : 'Watoto Radio'}
            </p>
            <p className="text-xs opacity-80">La voix des enfants</p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Volume2 className="h-4 w-4" />
          <div className="w-16 h-2 bg-primary-foreground/20 rounded-full">
            <div className="w-3/4 h-full bg-primary-foreground rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}