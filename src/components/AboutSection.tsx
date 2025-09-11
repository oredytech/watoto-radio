import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Users, Target } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="apropos" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">À propos de nous</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Watoto Radio est un programme de la Fondation Miel-Fondal qui développe 
            un espace d'expression libre et éducatif pour les enfants.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <Heart className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle>Notre Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Développer un espace d'expression libre et éducatif des enfants en mobilisant 
                  les radios locales, les écoles et les familles pour que chaque enfant puisse être entendu.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                    <Users className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <CardTitle>Notre Approche</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Nous collaborons avec les communautés locales pour créer des programmes 
                  radiophoniques qui permettent aux enfants de s'exprimer sur les sujets 
                  qui les préoccupent et les passionnent.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                    <Target className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <CardTitle>Notre Impact</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Plus de 100 enfants dans 5 villes congolaises participent activement 
                  à nos émissions, créant un dialogue intergénérationnel unique et 
                  sensibilisant leurs communautés aux enjeux contemporains.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Founder Section */}
          <div className="bg-card rounded-2xl p-8 shadow-lg">
            <div className="text-center space-y-6">
              <div className="w-24 h-24 bg-gradient-hero rounded-full mx-auto flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">DM</span>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Daniel Makasi</h3>
                <p className="text-lg text-muted-foreground">Fondateur & Journaliste</p>
              </div>
              
              <p className="text-muted-foreground">
                Journaliste et défenseur des droits des enfants, Daniel Makasi a lancé 
                cette initiative pionnière pour donner une voix aux enfants de la 
                République démocratique du Congo.
              </p>
              
              <div className="bg-muted rounded-lg p-4">
                <p className="text-sm text-muted-foreground italic">
                  "Chaque enfant a quelque chose d'important à dire. Notre rôle est 
                  de leur donner le micro et d'écouter attentivement."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}