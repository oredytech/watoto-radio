import React from 'react';
import CampaignCard from './CampaignCard';
import { Radio, Mic, AlertTriangle, Leaf } from 'lucide-react';

export default function CampaignsSection() {
  const campaigns = [
    {
      id: 'watoto-radio',
      icon: Radio,
      title: 'Watoto Radio',
      subtitle: 'La voix des enfants',
      description: 'Une initiative pionnière lancée par Daniel Makasi pour donner la parole aux enfants à travers des émissions locales diffusées dans des villes comme Goma, Uvira, Butembo, Kiwanja et Vitchumbi.',
      color: 'primary' as const,
      features: [
        'Émissions dans 5 villes du Congo',
        'Sujets : santé, éducation, paix, culture',
        'Animé par Daniel Makasi',
        'Disponible sur myTuner Radio'
      ]
    },
    {
      id: 'watoto-on-air',
      icon: Mic,
      title: 'Watoto On Air',
      subtitle: 'Les enfants aux commandes',
      description: 'Cette campagne met en lumière les émissions animées par les enfants eux-mêmes. Ils présentent l\'actualité, posent des questions aux adultes, et partagent leurs opinions sur les enjeux qui les concernent.',
      color: 'secondary' as const,
      features: [
        'Émissions animées par les enfants',
        'Actualité et débats',
        'Dialogue intergénérationnel',
        'Espace de créativité et liberté'
      ]
    },
    {
      id: 'batoto-hange',
      icon: AlertTriangle,
      title: 'Batoto Hange na Bichuma',
      subtitle: 'Sensibilisation aux dangers',
      description: 'Cette campagne alerte sur les dangers des restes d\'explosifs abandonnés dans les zones de guerre. Les enfants sensibilisent leurs communautés sur les risques du ramassage de ferraille.',
      color: 'secondary' as const,
      features: [
        'Sensibilisation aux explosifs',
        'Protection des enfants',
        'Alerte communautaire',
        'Solutions durables'
      ]
    },
    {
      id: 'green-world',
      icon: Leaf,
      title: 'Bana For a Green World',
      subtitle: 'Les enfants pour l\'environnement',
      description: 'Les enfants prennent position pour la protection de l\'environnement à travers des émissions et actions locales de sensibilisation à la gestion des déchets et la reforestation.',
      color: 'accent' as const,
      features: [
        'Protection de l\'environnement',
        'Gestion des déchets',
        'Reforestation',
        'Actions locales'
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">Nos Campagnes</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez nos différentes initiatives qui donnent la parole aux enfants 
            et les accompagnent dans leur engagement pour un monde meilleur.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {campaigns.map((campaign) => (
            <div key={campaign.id} id={campaign.id}>
              <CampaignCard {...campaign} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}