import React, { createContext, useContext, useRef, useState, useEffect } from 'react';

interface AudioContextType {
  isPlaying: boolean;
  isLoading: boolean;
  togglePlay: () => void;
  play: () => void;
  pause: () => void;
  pauseForPodcast: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('https://stream.zeno.fm/gxybfvs91k8uv');
    audioRef.current.preload = 'none';
    
    const audio = audioRef.current;
    
    const handleCanPlay = () => setIsLoading(false);
    const handleWaiting = () => setIsLoading(true);
    const handleEnded = () => setIsPlaying(false);
    const handleError = () => {
      setIsPlaying(false);
      setIsLoading(false);
    };

    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('waiting', handleWaiting);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    // Listen for podcast play events to pause radio
    const handlePodcastPlay = () => {
      if (isPlaying) {
        pauseForPodcast();
      }
    };

    // Listen for messages from podcast iframe
    const handleMessage = (event: MessageEvent) => {
      if (event.data && (event.data.type === 'play' || event.data.action === 'play')) {
        handlePodcastPlay();
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('waiting', handleWaiting);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
      window.removeEventListener('message', handleMessage);
      audio.pause();
    };
  }, [isPlaying]);

  const play = async () => {
    if (audioRef.current) {
      setIsLoading(true);
      try {
        // Force reload the audio source to ensure fresh stream
        audioRef.current.load();
        await audioRef.current.play();
        setIsPlaying(true);
        setIsLoading(false);
      } catch (error) {
        console.error('Erreur lors de la lecture de la radio:', error);
        setIsPlaying(false);
        setIsLoading(false);
      }
    }
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const pauseForPodcast = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  return (
    <AudioContext.Provider value={{ isPlaying, isLoading, togglePlay, play, pause, pauseForPodcast }}>
      {children}
    </AudioContext.Provider>
  );
};