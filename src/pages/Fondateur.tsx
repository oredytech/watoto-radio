import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Youtube, Facebook, Twitter, Award, BookOpen, Radio, Users, Globe, Heart } from 'lucide-react';
import danielMakasiPhoto from '@/assets/daniel-makasi.jpg';

const Fondateur = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="order-1 md:order-1 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                  Daniel Makasi
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
                  La Voix qui Agit pour le Climat et les Enfants en RDC
                </p>
                <div className="flex gap-4 justify-center md:justify-start">
                  <a 
                    href="https://www.youtube.com/@danielmakasi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    <Youtube className="w-8 h-8" />
                  </a>
                  <a 
                    href="https://www.facebook.com/Levergenois" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    <Facebook className="w-8 h-8" />
                  </a>
                  <a 
                    href="https://www.x.com/danielfirstpoem" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    <Twitter className="w-8 h-8" />
                  </a>
                </div>
              </div>
              <div className="order-2 md:order-2 flex justify-center">
                <img 
                  src={danielMakasiPhoto} 
                  alt="Daniel Makasi"
                  className="rounded-2xl shadow-2xl w-full max-w-md object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Bio Section */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
              <strong className="text-foreground">Daniel Jasiri Levergénois Makasi Mahamba</strong> (plus communément appelé <strong className="text-foreground">Daniel Makasi</strong>) est un <strong className="text-foreground">journaliste congolais</strong> basé à <strong className="text-foreground">Goma, dans la province du Nord-Kivu en République Démocratique du Congo (RDC)</strong>. Il est reconnu pour son engagement en tant que <strong className="text-foreground">défenseur des droits humains</strong> et pour son <strong className="text-foreground">journalisme sensible aux questions climatiques et à la gouvernance des ressources</strong>.
            </p>
          </div>
        </section>

        {/* Qualifications Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Qualifications et Expérience Professionnelle
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-4">
                    <BookOpen className="w-8 h-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-4 text-foreground">Expertise Académique et de Terrain</h3>
                      <ul className="space-y-3 text-muted-foreground">
                        <li><strong className="text-foreground">Formation Académique</strong> : Daniel Makasi est titulaire d'un <strong className="text-foreground">Bac+5</strong> (Master ou équivalent) en <strong className="text-foreground">Environnement et Développement Durable</strong>, ce qui est le fondement de son travail thématique.</li>
                        <li><strong className="text-foreground">Ancienneté dans les Médias</strong> : Il exerce le métier de la <strong className="text-foreground">radiodiffusion depuis 2015</strong>, consolidant son expérience en tant que producteur et entrepreneur média.</li>
                        <li><strong className="text-foreground">Engagement Scientifique International</strong> : Il est actuellement bénévole et <strong className="text-foreground">point focal en RDC</strong> pour l'<strong className="text-foreground">IUGS Young Reporters Initiative (YoRI)</strong> de l'Union Internationale pour les Sciences Géologiques.</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-4">
                    <Award className="w-8 h-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-4 text-foreground">Reconnaissance et Formation Internationale</h3>
                      <ul className="space-y-3 text-muted-foreground">
                        <li><strong className="text-foreground">Boursier NRGI (2019)</strong> : Il a été sélectionné par le <strong className="text-foreground">Natural Resource Governance Institute (NRGI)</strong> pour une formation de haut niveau.</li>
                        <li><strong className="text-foreground">Formation au CEGIEAF</strong> : Participation à l'Université d'été sur la gouvernance des ressources extractives, organisée par le <strong className="text-foreground">CEGIEAF</strong> (Centre d'Excellence en Gouvernance des Industries Extractives en Afrique Francophone) à <strong className="text-foreground">Yaoundé, Cameroun</strong>.</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Fondation Miel-Fondal Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Initiatives Clés de la Fondation Miel-Fondal
            </h2>
            <p className="text-center text-lg mb-12 max-w-4xl mx-auto text-muted-foreground">
              Daniel Makasi est le <strong className="text-foreground">fondateur</strong> de la <strong className="text-foreground">Fondation Miel-Fondal</strong>, l'ONG qui porte l'ensemble de ses projets sociaux, éducatifs et médiatiques visant à renforcer la société civile à Goma.
            </p>

            <div className="max-w-6xl mx-auto mb-12">
              <h3 className="text-2xl font-bold mb-8 text-foreground flex items-center gap-3">
                <Users className="w-7 h-7 text-primary" />
                Programmes pour la Jeunesse et l'Éducation
              </h3>
              
              <div className="grid gap-6">
                <Card className="border-primary/20">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <Radio className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-xl font-bold mb-2 text-foreground">Mushakulu Fm</h4>
                        <p className="text-muted-foreground">
                          Programme radiophonique <strong className="text-foreground">intergénérationnel</strong> où les enfants interviewent les <strong className="text-foreground">anciens</strong> (Mushakulu) sur l'histoire, les connaissances traditionnelles et l'actualité, assurant la <strong className="text-foreground">transmission du savoir</strong>.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-primary/20">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <Heart className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-xl font-bold mb-2 text-foreground">Watoto Radio</h4>
                        <p className="text-muted-foreground">
                          Campagne visant à assurer l'accès des enfants à l'<strong className="text-foreground">information, à l'éducation et au divertissement</strong> par la radio et à mener des actions humanitaires (distribution de kits).
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-primary/20">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-xl font-bold mb-2 text-foreground">FRESE</h4>
                        <p className="text-muted-foreground">
                          Programme de Sécurité Routière (Faire de nos Routes un Espace Sûr pour les Enfants), axé sur la sensibilisation et le plaidoyer pour la <strong className="text-foreground">sécurité des enfants</strong> sur la route.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="max-w-6xl mx-auto">
              <h3 className="text-2xl font-bold mb-8 text-foreground flex items-center gap-3">
                <Globe className="w-7 h-7 text-primary" />
                Plateformes d'Information et de Gouvernance
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-primary/20">
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-2 text-foreground">Tetea Mazingira Podcast</h4>
                    <p className="text-muted-foreground">
                      Dédié à la <strong className="text-foreground">gouvernance des ressources naturelles</strong> en RDC, il sert de plateforme pour donner la parole aux experts et aux <strong className="text-foreground">communautés affectées</strong>.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-primary/20">
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold mb-2 text-foreground">Injili Everywhere</h4>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Webradio</strong> créée pour diffuser du contenu religieux et social sous l'égide de la Fondation Miel-Fondal.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Award Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Award className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Distinction en Vidéo
              </h2>
              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <p className="text-lg mb-4 text-muted-foreground">
                    <strong className="text-foreground">Lauréat ePOP 2022</strong> : Il a remporté le <strong className="text-foreground">Prix Coup de Cœur du Jury</strong> au concours ePOP pour son film <strong className="text-foreground">"Les bidons du tabou"</strong>.
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Concours ePOP</strong> : Lancé par RFI Planète Radio et l'IRD, ce concours met en lumière les <strong className="text-foreground">témoignages vidéo</strong> des populations impactées par le <strong className="text-foreground">changement climatique</strong> et la <strong className="text-foreground">détérioration environnementale</strong>.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Fondateur;
