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
    id: 1,
    title: "Éducation pour Tous",
    description: "Construisons des écoles et fournissons du matériel scolaire pour que chaque enfant congolais ait accès à une éducation de qualité.",
    longDescription: "Notre campagne vise à construire 10 nouvelles écoles dans les zones rurales du Congo et à équiper 500 enfants avec des fournitures scolaires essentielles.",
    icon: BookOpen,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    progress: 75,
    goal: "50,000 €",
    raised: "37,500 €",
    supporters: 245,
    endDate: "2024-12-31",
    image: "/lovable-uploads/24d18f7c-7c9b-4609-9952-d41bf3cd91e2.png",
    features: [
      "Construction de 10 écoles",
      "Fournitures pour 500 enfants",
      "Formation des enseignants",
      "Bibliothèques communautaires"
    ]
  },
  {
    id: 2,
    title: "Santé Maternelle et Infantile",
    description: "Améliorons l'accès aux soins de santé pour les mères et les enfants dans les communautés rurales.",
    longDescription: "Cette campagne finance des centres de santé mobiles et forme des sages-femmes locales pour réduire la mortalité maternelle et infantile.",
    icon: Stethoscope,
    color: "text-green-600",
    bgColor: "bg-green-50",
    progress: 60,
    goal: "30,000 €",
    raised: "18,000 €",
    supporters: 156,
    endDate: "2024-11-30",
    image: "/lovable-uploads/30d5bbdd-adf0-49a9-846c-26c896ed1be2.png",
    features: [
      "5 centres de santé mobiles",
      "Formation de 20 sages-femmes",
      "Campagnes de vaccination",
      "Kits de premiers secours"
    ]
  },
  {
    id: 3,
    title: "Eau Potable et Assainissement",
    description: "Forons des puits et installons des systèmes d'assainissement pour améliorer les conditions de vie.",
    longDescription: "Accès à l'eau potable pour 2000 familles grâce à la construction de puits et l'installation de systèmes de purification d'eau.",
    icon: Heart,
    color: "text-cyan-600",
    bgColor: "bg-cyan-50",
    progress: 40,
    goal: "25,000 €",
    raised: "10,000 €",
    supporters: 89,
    endDate: "2025-02-28",
    image: "/lovable-uploads/8b410cfb-26bf-40c2-b8df-8769e55092ec.png",
    features: [
      "15 puits d'eau potable",
      "Systèmes de purification",
      "Latrines communautaires",
      "Éducation à l'hygiène"
    ]
  },
  {
    id: 4,
    title: "Protection de l'Enfance",
    description: "Protégeons les enfants vulnérables et offrons-leur un environnement sûr pour grandir.",
    longDescription: "Programme de protection pour 300 enfants orphelins ou abandonnés, incluant hébergement, éducation et suivi psychologique.",
    icon: Shield,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    progress: 85,
    goal: "40,000 €",
    raised: "34,000 €",
    supporters: 312,
    endDate: "2024-10-31",
    image: "/lovable-uploads/24d18f7c-7c9b-4609-9952-d41bf3cd91e2.png",
    features: [
      "Centre d'accueil pour 50 enfants",
      "Suivi psychologique",
      "Réinsertion familiale",
      "Programme de parrainage"
    ]
  },
  {
    id: 5,
    title: "Sécurité Alimentaire",
    description: "Luttons contre la malnutrition en distribuant des repas nutritifs dans les écoles et communautés.",
    longDescription: "Programme de nutrition qui vise à nourrir 1000 enfants par jour et à former les familles aux pratiques agricoles durables.",
    icon: Utensils,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    progress: 55,
    goal: "35,000 €",
    raised: "19,250 €",
    supporters: 178,
    endDate: "2025-01-31",
    image: "/lovable-uploads/30d5bbdd-adf0-49a9-846c-26c896ed1be2.png",
    features: [
      "Repas quotidiens pour 1000 enfants",
      "Jardins scolaires",
      "Formation en agriculture",
      "Suppléments nutritionnels"
    ]
  },
  {
    id: 6,
    title: "Formation Professionnelle",
    description: "Formons les jeunes aux métiers d'avenir pour réduire le chômage et favoriser l'autonomie économique.",
    longDescription: "Centre de formation professionnelle offrant des cours en informatique, couture, mécanique et entrepreneuriat pour 200 jeunes par an.",
    icon: GraduationCap,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    progress: 30,
    goal: "45,000 €",
    raised: "13,500 €",
    supporters: 98,
    endDate: "2025-03-31",
    image: "/lovable-uploads/8b410cfb-26bf-40c2-b8df-8769e55092ec.png",
    features: [
      "4 ateliers de formation",
      "Équipement informatique",
      "Stages en entreprise",
      "Microcrédit pour diplômés"
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