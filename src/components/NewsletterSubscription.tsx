import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Erreur",
        description: "Veuillez entrer votre adresse email.",
        variant: "destructive",
      });
      return;
    }

    // Simulate subscription
    setIsSubscribed(true);
    toast({
      title: "Succès !",
      description: "Vous êtes maintenant abonné à notre newsletter.",
    });
    setEmail('');
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="border-0 shadow-lg">
            <CardHeader className="text-center pb-6">
              <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl md:text-3xl font-bold mb-2">
                Restez informé
              </CardTitle>
              <CardDescription className="text-lg">
                Abonnez-vous à notre newsletter pour recevoir les dernières actualités 
                et informations sur nos campagnes pour les enfants du Congo.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!isSubscribed ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Input
                      type="email"
                      placeholder="Votre adresse email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 h-12"
                      required
                    />
                    <Button type="submit" size="lg" className="h-12 px-8">
                      S'abonner
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground text-center">
                    En vous abonnant, vous acceptez de recevoir nos communications par email. 
                    Vous pouvez vous désabonner à tout moment.
                  </p>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="mx-auto mb-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Merci pour votre abonnement !</h3>
                  <p className="text-muted-foreground">
                    Vous recevrez bientôt nos dernières actualités dans votre boîte email.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSubscription;