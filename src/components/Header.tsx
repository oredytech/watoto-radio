import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Search } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { href: '/', label: 'Accueil' },
    { href: '/actualites', label: 'Actualités' },
    { href: '#podcast', label: 'Podcast' },
    { href: '#nos-campagnes', label: 'Nos campagnes' },
    { href: '#apropos', label: 'À propos' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/8b410cfb-26bf-40c2-b8df-8769e55092ec.png" 
              alt="Watoto Radio Logo" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
            
            {/* Icône de recherche */}
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <Search className="h-5 w-5" />
            </Button>
            
            {/* Bouton En direct */}
            <Button className="bg-destructive hover:bg-destructive/90 text-white">
              En direct
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-white/20">
            <div className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            
            {/* Boutons mobile */}
            <div className="flex items-center space-x-4 pt-4">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Search className="h-5 w-5" />
              </Button>
              
              <Button className="bg-destructive hover:bg-destructive/90 text-white">
                En direct
              </Button>
            </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}