import React from 'react';
import { Button } from '@/components/ui/button';
import { Facebook, Youtube, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/8b410cfb-26bf-40c2-b8df-8769e55092ec.png" 
                alt="Watoto Radio Logo" 
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-sm text-background/80">
              La première plateforme radiophonique au Congo dédiée à l'expression des enfants.
            </p>
            <p className="text-xs text-background/60">
              Un programme de la Fondation Miel-Fondal
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Nos Campagnes</h3>
            <div className="space-y-2">
              {[
                { href: '#watoto-radio', label: 'Watoto Radio' },
                { href: '#watoto-on-air', label: 'Watoto On Air' },
                { href: '#batoto-hange', label: 'Batoto Hange na Bichuma' },
                { href: '#green-world', label: 'Bana For a Green World' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-background/80 hover:text-background transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social & Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Suivez-nous</h3>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-background hover:bg-background/10"
                asChild
              >
                <a 
                  href="https://www.facebook.com/watotoradio" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-background hover:bg-background/10"
                asChild
              >
                <a 
                  href="https://www.youtube.com/@watotoradio" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-background hover:bg-background/10"
                asChild
              >
                <a 
                  href="https://mytuner-radio.com/fr/radio/watoto-radio-482174/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Écouter en ligne"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
            
            <div className="pt-4">
              <Button
                variant="ghost"
                className="text-background hover:bg-background/10 p-0 h-auto"
                asChild
              >
                <a 
                  href="https://mytuner-radio.com/fr/radio/watoto-radio-482174/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm"
                >
                  🎧 Écouter sur myTuner Radio
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-background/60">
            © 2025 Watoto Radio. Tous droits réservés.
          </p>
          <div className="flex items-center space-x-1 text-sm text-background/80">
            <span>Fait avec</span>
            <Heart className="h-4 w-4 fill-current text-secondary" />
            <span>pour les enfants du Congo</span>
          </div>
        </div>
      </div>
    </footer>
  );
}