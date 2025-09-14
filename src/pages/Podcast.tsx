import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Play, Pause, Clock, Calendar, Headphones } from 'lucide-react';

interface PodcastEpisode {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  link: string;
  featured_media: number;
  acf?: {
    duration?: string;
    audio_file?: string;
  };
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

const Podcast = () => {
  const [episodes, setEpisodes] = useState<PodcastEpisode[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [playingEpisode, setPlayingEpisode] = useState<number | null>(null);

  useEffect(() => {
    fetchPodcastEpisodes();
  }, []);

  const fetchPodcastEpisodes = async () => {
    try {
      setLoading(true);
      // Fetch episodes from a podcast category or custom post type
      const response = await fetch('https://watotoradio.info/wp-json/wp/v2/posts?categories=5&_embed&per_page=12');
      
      if (!response.ok) {
        throw new Error('Erreur lors du chargement des épisodes');
      }
      
      const data = await response.json();
      setEpisodes(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const stripHtmlTags = (html: string) => {
    const temp = document.createElement('div');
    temp.innerHTML = html;
    return temp.textContent || temp.innerText || '';
  };

  const togglePlay = (episodeId: number) => {
    setPlayingEpisode(playingEpisode === episodeId ? null : episodeId);
  };

  if (error) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-16">
          <div className="container mx-auto px-4 py-12 text-center">
            <h1 className="text-2xl font-bold text-destructive mb-4">Erreur</h1>
            <p className="text-muted-foreground mb-6">{error}</p>
            <Button onClick={fetchPodcastEpisodes}>Réessayer</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center mb-6">
              <Headphones className="h-16 w-16" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Nos Podcasts
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Découvrez nos émissions audio dédiées aux enfants du Congo. 
              Éducation, divertissement et sensibilisation pour un avenir meilleur.
            </p>
          </div>
        </section>

        {/* Podcast Player Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Écouter nos Podcasts</h2>
            <div className="max-w-4xl mx-auto">
              <iframe 
                src="https://www.listennotes.com/podcasts/tetea-mazingira-swahili-podcast-makasi-CbFK5kHvMqy/embed/"
                height="600px"
                width="100%"
                style={{ border: 'none', minWidth: '100%' }}
                loading="lazy"
                title="Podcast Player"
              />
            </div>
          </div>
        </section>

        {/* Episodes Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <Card key={i}>
                    <CardHeader>
                      <Skeleton className="h-48 w-full rounded-md" />
                      <Skeleton className="h-6 w-3/4" />
                      <Skeleton className="h-4 w-full" />
                    </CardHeader>
                    <CardContent>
                      <Skeleton className="h-10 w-full" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : episodes.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {episodes.map((episode) => (
                  <Card key={episode.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardHeader className="p-0">
                      {episode._embedded?.['wp:featuredmedia']?.[0] && (
                        <div className="relative">
                          <img
                            src={episode._embedded['wp:featuredmedia'][0].source_url}
                            alt={episode._embedded['wp:featuredmedia'][0].alt_text || episode.title.rendered}
                            className="w-full h-48 object-cover"
                          />
                          <Button
                            size="lg"
                            className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-primary/90 hover:bg-primary"
                            onClick={() => togglePlay(episode.id)}
                          >
                            {playingEpisode === episode.id ? (
                              <Pause className="h-6 w-6" />
                            ) : (
                              <Play className="h-6 w-6 ml-1" />
                            )}
                          </Button>
                        </div>
                      )}
                    </CardHeader>
                    <CardContent className="p-6">
                      <CardTitle className="line-clamp-2 mb-2">
                        {stripHtmlTags(episode.title.rendered)}
                      </CardTitle>
                      <CardDescription className="line-clamp-3 mb-4">
                        {stripHtmlTags(episode.excerpt.rendered)}
                      </CardDescription>
                      
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {formatDate(episode.date)}
                        </div>
                        {episode.acf?.duration && (
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {episode.acf.duration}
                          </div>
                        )}
                      </div>

                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => window.open(episode.link, '_blank')}
                      >
                        Écouter l'épisode
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Headphones className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">Aucun épisode disponible</h3>
                <p className="text-muted-foreground">
                  Les épisodes de podcast seront bientôt disponibles.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Podcast;