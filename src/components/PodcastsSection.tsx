import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Clock, Calendar } from 'lucide-react';

const PodcastsSection = () => {
  const podcasts = [
    {
      id: 1,
      title: "Voix des enfants du Congo",
      description: "Écoutez les témoignages authentiques des enfants congolais qui partagent leurs histoires et leurs rêves.",
      duration: "25 min",
      date: "12 Sep 2025",
      image: "/lovable-uploads/8b410cfb-26bf-40c2-b8df-8769e55092ec.png"
    },
    {
      id: 2,
      title: "Éducation et Avenir",
      description: "Une émission dédiée à l'importance de l'éducation pour l'avenir des enfants congolais.",
      duration: "30 min",
      date: "10 Sep 2025",
      image: "/lovable-uploads/8b410cfb-26bf-40c2-b8df-8769e55092ec.png"
    },
    {
      id: 3,
      title: "Santé et Bien-être",
      description: "Découvrez les initiatives pour améliorer la santé et le bien-être des enfants au Congo.",
      duration: "22 min",
      date: "8 Sep 2025",
      image: "/lovable-uploads/8b410cfb-26bf-40c2-b8df-8769e55092ec.png"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nos Podcasts
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez nos émissions audio dédiées aux enfants du Congo, leurs histoires, leurs défis et leurs espoirs.
          </p>
        </div>

        {/* Iframe Podcast Player */}
        <div className="mb-8">
          <iframe 
            src="https://www.listennotes.com/podcasts/tetea-mazingira-swahili-podcast-makasi-CbFK5kHvMqy/embed/"
            height="600px"
            width="100%"
            style={{ border: 'none', minWidth: '100%' }}
            loading="lazy"
            title="Podcast Player"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {podcasts.map((podcast) => (
            <Card key={podcast.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="p-0">
                <div className="relative">
                  <img 
                    src={podcast.image} 
                    alt={podcast.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Button
                    size="icon"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full w-16 h-16 bg-primary/90 hover:bg-primary"
                  >
                    <Play className="h-6 w-6 text-primary-foreground" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="mb-2 text-xl">{podcast.title}</CardTitle>
                <CardDescription className="mb-4 text-muted-foreground">
                  {podcast.description}
                </CardDescription>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{podcast.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{podcast.date}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            Voir tous les podcasts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PodcastsSection;