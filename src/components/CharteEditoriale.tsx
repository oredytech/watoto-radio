import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Download, Users, Heart, Globe, Mic } from 'lucide-react';

export default function CharteEditoriale() {
  const chartePoints = [
    {
      number: 1,
      text: "Watoto Radio est un programme de la Fondation Miroir des Enfants Libres - Fondation Daniel Levergénois \"Miel-Fondal\".",
      icon: Heart
    },
    {
      number: 2,
      text: "Elle permet aux enfants de raconter leur vie, leurs idées, leurs rêves et leurs préoccupations.",
      icon: Mic
    },
    {
      number: 3,
      text: "Tous les enfants, qu'ils vivent en ville ou en campagne, peuvent participer, même sans Internet.",
      icon: Globe
    },
    {
      number: 4,
      text: "La radio respecte l'égalité entre filles et garçons, et encourage chacun à prendre la parole.",
      icon: Users
    },
    {
      number: 5,
      text: "Pendant les périodes de crises sanitaires, de catastrophes naturelles ou d'insécurité, Watoto Radio aide les enfants à rester informés et à mieux comprendre ce qui se passe."
    },
    {
      number: 6,
      text: "Les enfants peuvent aussi devenir de petits journalistes et présenter les informations à leur manière."
    },
    {
      number: 7,
      text: "Les émissions parlent de sujets importants comme les droits des enfants, la santé, l'école, la nature, les jeux et bien plus encore."
    },
    {
      number: 8,
      text: "La radio valorise les idées des enfants et les aide à mieux connaître le monde autour d'eux."
    },
    {
      number: 9,
      text: "Plusieurs radios locales travaillent ensemble pour diffuser les émissions de Watoto Radio dans différentes régions."
    },
    {
      number: 10,
      text: "Le but principal est de faire entendre la voix des enfants, de les respecter et de les encourager à participer à la vie de leur communauté avec et sous la supervision des journalistes professionnels."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
              <FileText className="h-6 w-6 text-primary-foreground" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold">Charte Éditoriale</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez les principes fondamentaux qui guident Watoto Radio dans sa mission d'éducation et d'expression des enfants.
          </p>
          <div className="pt-4">
            <Button asChild className="gap-2">
              <a 
                href="https://watotoradio.info/wp-content/uploads/2025/09/Charte-editoriale-de-Watoto-Radio-–-Resume-pour-les-enfants-2025.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Download className="h-4 w-4" />
                Télécharger la charte complète
              </a>
            </Button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="text-center text-2xl">
                Charte éditoriale de Watoto Radio – Résumé pour les enfants - 2025
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                {chartePoints.map((point) => {
                  const IconComponent = point.icon;
                  return (
                    <div key={point.number} className="flex gap-4 items-start">
                      <div className="flex-shrink-0">
                        {IconComponent ? (
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <IconComponent className="h-5 w-5 text-primary" />
                          </div>
                        ) : (
                          <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                            <span className="text-sm font-bold text-secondary">{point.number}</span>
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="text-muted-foreground leading-relaxed">
                          <span className="font-semibold text-foreground">{point.number}.</span> {point.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}