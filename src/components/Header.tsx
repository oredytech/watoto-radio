import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Search } from 'lucide-react';
import { useAudio } from '@/contexts/AudioContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { play } = useAudio();

  const menuItems = [
    { href: '/', label: 'Accueil' },
    { href: '/actualites', label: 'Actualités' },
    { href: '/podcast', label: 'Podcast' },
    { href: '/nos-campagnes', label: 'Nos campagnes' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Mobile Menu Button - à gauche */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>

          {/* Logo - centré sur mobile, à gauche sur desktop */}
          <div className="flex items-center space-x-2 md:ml-0 ml-auto md:mr-auto mr-0">
            <img 
              src="/lovable-uploads/8b410cfb-26bf-40c2-b8df-8769e55092ec.png" 
              alt="Watoto Radio Logo" 
              className="h-10 w-auto"
            />
          </div>

          {/* Mobile: Icône recherche + En direct - à droite */}
          <div className="flex items-center space-x-2 md:hidden">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" className="text-white hover:bg-white/10 text-sm px-3" onClick={play}>
              En direct
            </Button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-white hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
            
            {/* Icône de recherche */}
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <Search className="h-5 w-5" />
            </Button>
            
            {/* Bouton En direct */}
            <Button className="bg-destructive hover:bg-destructive/90 text-white" onClick={play}>
              En direct
            </Button>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-white/20">
            <div className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-white hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}