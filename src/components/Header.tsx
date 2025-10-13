import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Search } from 'lucide-react';
import { useAudio } from '@/contexts/AudioContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { togglePlay } = useAudio();

  const menuItems = [
    { href: '/', label: 'Accueil' },
    { href: '/actualites', label: 'Actualités' },
    { href: '/podcast', label: 'Podcast' },
    { href: '/nos-campagnes', label: 'Nos campagnes' },
    { href: '/partenaires', label: 'Nos partenaires' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile & Tablet Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-white hover:bg-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>

          {/* Logo */}
          <div className="flex items-center space-x-2 lg:ml-0 ml-auto lg:mr-auto mr-0">
            <img 
              src="/lovable-uploads/8b410cfb-26bf-40c2-b8df-8769e55092ec.png" 
              alt="Watoto Radio Logo" 
              className="h-10 md:h-12 w-auto"
            />
          </div>

          {/* Mobile & Tablet: Actions compactes */}
          <div className="flex items-center space-x-2 lg:hidden">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10" asChild>
              <Link to="/search">
                <Search className="h-5 w-5" />
              </Link>
            </Button>
            <Button 
              variant="ghost" 
              className="text-white hover:bg-white/10 text-sm px-2 md:px-3" 
              onClick={togglePlay}
            >
              <span className="hidden sm:inline">En direct</span>
              <span className="sm:hidden">Direct</span>
            </Button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-white hover:text-primary transition-colors font-medium text-sm xl:text-base"
              >
                {item.label}
              </Link>
            ))}
            
            {/* Icône de recherche */}
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10" asChild>
              <Link to="/search">
                <Search className="h-5 w-5" />
              </Link>
            </Button>
            
            {/* Bouton En direct */}
            <Button className="bg-destructive hover:bg-destructive/90 text-white" onClick={togglePlay}>
              En direct
            </Button>
          </nav>
        </div>

        {/* Mobile & Tablet Navigation Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-white/20">
            <div className="flex flex-col space-y-3 md:space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-white hover:text-primary transition-colors font-medium py-2 text-base md:text-lg"
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