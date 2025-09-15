import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Heart, 
  BookOpen, 
  Users, 
  Stethoscope, 
  Home,
  Utensils,
  GraduationCap,
  Shield,
  ArrowRight,
  Target,
  Calendar
} from 'lucide-react';

const campaigns = [
  {
    id: 'watoto-radio',
    title: 'Watoto Radio',
    subtitle: 'La voix des enfants',
    description: 'Une initiative pionnière lancée par Daniel Makasi pour donner la parole aux enfants à travers des émissions locales diffusées dans des villes comme Goma, Uvira, Butembo, Kiwanja et Vitchumbi.',
    icon: BookOpen,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    progress: 85,
    goal: "25,000 €",
    raised: "21,250 €",
    supporters: 189,
    endDate: "2025-12-31",
    image: "/lovable-uploads/24d18f7c-7c9b-4609-9952-d41bf3cd91e2.png",
    features: [
      'Émissions dans 5 villes du Congo',
      'Sujets : santé, éducation, paix, culture',
      'Animé par Daniel Makasi',
      'Disponible sur myTuner Radio'
    ]
  },
  {
    id: 'watoto-on-air',
    title: 'Watoto On Air',
    subtitle: 'Les enfants aux commandes',
    description: 'Cette campagne met en lumière les émissions animées par les enfants eux-mêmes. Ils présentent l\'actualité, posent des questions aux adultes, et partagent leurs opinions sur les enjeux qui les concernent.',
    icon: Users,
    color: "text-green-600",
    bgColor: "bg-green-50",
    progress: 70,
    goal: "18,000 €",
    raised: "12,600 €",
    supporters: 124,
    endDate: "2025-06-30",
    image: "/lovable-uploads/30d5bbdd-adf0-49a9-846c-26c896ed1be2.png",
    features: [
      'Émissions animées par les enfants',
      'Actualité et débats',
      'Dialogue intergénérationnel',
      'Espace de créativité et liberté'
    ]
  },
  {
    id: 'batoto-hange',
    title: 'Batoto Hange na Bichuma',
    subtitle: 'Sensibilisation aux dangers',
    description: 'Cette campagne alerte sur les dangers des restes d\'explosifs abandonnés dans les zones de guerre. Les enfants sensibilisent leurs communautés sur les risques du ramassage de ferraille.',
    icon: Shield,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    progress: 60,
    goal: "22,000 €",
    raised: "13,200 €",
    supporters: 98,
    endDate: "2025-09-30",
    image: "/lovable-uploads/8b410cfb-26bf-40c2-b8df-8769e55092ec.png",
    features: [
      'Sensibilisation aux explosifs',
      'Protection des enfants',
      'Alerte communautaire',
      'Solutions durables'
    ]
  },
  {
    id: 'green-world',
    title: 'Bana For a Green World',
    subtitle: 'Les enfants pour l\'environnement',
    description: 'Les enfants prennent position pour la protection de l\'environnement à travers des émissions et actions locales de sensibilisation à la gestion des déchets et la reforestation.',
    icon: Heart,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    progress: 45,
    goal: "15,000 €",
    raised: "6,750 €",
    supporters: 67,
    endDate: "2025-11-30",
    image: "/lovable-uploads/24d18f7c-7c9b-4609-9952-d41bf3cd91e2.png",
    features: [
      'Protection de l\'environnement',
      'Gestion des déchets',
      'Reforestation',
      'Actions locales'
    ]
  }
];

const Campaigns = () => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center mb-6">
              <Target className="h-16 w-16" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Nos Campagnes
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Rejoignez-nous dans nos missions pour améliorer la vie des enfants congolais. 
              Chaque don compte, chaque action fait la différence.
            </p>
          </div>
        </section>

        {/* Campaigns Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {campaigns.map((campaign) => {
                const Icon = campaign.icon;
                return (
                  <Card key={campaign.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                    <CardHeader className="p-0">
                      <div className="relative">
                        <img
                          src={campaign.image}
                          alt={campaign.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className={`absolute top-4 left-4 p-3 rounded-full ${campaign.bgColor}`}>
                          <Icon className={`h-6 w-6 ${campaign.color}`} />
                        </div>
                        <Badge className="absolute top-4 right-4 bg-white/90 text-black">
                          {campaign.progress}% atteint
                        </Badge>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="p-6">
                      <CardTitle className="mb-2 group-hover:text-primary transition-colors">
                        {campaign.title}
                      </CardTitle>
                      <CardDescription className="mb-4 line-clamp-3">
                        {campaign.description}
                      </CardDescription>

                      {/* Progress Bar */}
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span className="font-medium">{campaign.raised}</span>
                          <span className="text-muted-foreground">sur {campaign.goal}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full transition-all duration-300"
                            style={{ width: `${campaign.progress}%` }}
                          ></div>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="flex justify-between text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {campaign.supporters} soutiens
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {formatDate(campaign.endDate)}
                        </div>
                      </div>

                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="font-medium mb-2 text-sm">Objectifs :</h4>
                        <ul className="space-y-1">
                          {campaign.features.slice(0, 2).map((feature, index) => (
                            <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                              <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex gap-2">
                        <Button className="flex-1">
                          Soutenir
                        </Button>
                        <Button variant="outline" size="icon">
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-muted py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Vous avez une idée de campagne ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contactez-nous pour proposer votre projet ou organiser une campagne 
              de sensibilisation dans votre communauté.
            </p>
            <Button size="lg" className="mr-4">
              Proposer une campagne
            </Button>
            <Button variant="outline" size="lg">
              Devenir bénévole
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Campaigns;