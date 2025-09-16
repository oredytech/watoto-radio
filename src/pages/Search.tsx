import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Search, ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Post {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  slug: string;
  date: string;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    
    setIsLoading(true);
    setHasSearched(true);
    
    try {
      const response = await fetch(
        `https://watotoradio.info/wp-json/wp/v2/posts?_embed&search=${encodeURIComponent(searchQuery)}&per_page=20`
      );
      const posts = await response.json();
      setSearchResults(posts);
    } catch (error) {
      console.error('Erreur lors de la recherche:', error);
      setSearchResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch();
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const stripHtml = (html: string) => {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.textContent || div.innerText || '';
  };

  return (
    <div className="min-h-screen pb-[60px]">
      <Header />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Recherche
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Trouvez les articles qui vous intéressent
            </p>
            
            {/* Search Form */}
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
              <div className="flex gap-4">
                <Input
                  type="text"
                  placeholder="Tapez votre recherche..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 h-12 text-lg"
                />
                <Button 
                  type="submit" 
                  size="lg"
                  disabled={isLoading || !searchQuery.trim()}
                  className="h-12 px-8"
                >
                  {isLoading ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-current"></div>
                  ) : (
                    <>
                      <Search className="h-5 w-5 mr-2" />
                      Rechercher
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>

          {/* Search Results */}
          {hasSearched && (
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">
                  {isLoading ? 'Recherche en cours...' : `Résultats pour "${searchQuery}"`}
                </h2>
                {!isLoading && (
                  <p className="text-muted-foreground">
                    {searchResults.length} résultat{searchResults.length !== 1 ? 's' : ''} trouvé{searchResults.length !== 1 ? 's' : ''}
                  </p>
                )}
              </div>

              {!isLoading && searchResults.length === 0 && (
                <div className="text-center py-12">
                  <Search className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Aucun résultat trouvé</h3>
                  <p className="text-muted-foreground">
                    Essayez avec d'autres mots-clés ou vérifiez l'orthographe.
                  </p>
                </div>
              )}

              {/* Results Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {searchResults.map((post) => {
                  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0];
                  
                  return (
                    <Card key={post.id} className="card-hover overflow-hidden">
                      {featuredImage && (
                        <div className="aspect-video overflow-hidden">
                          <img 
                            src={featuredImage.source_url} 
                            alt={featuredImage.alt_text || stripHtml(post.title.rendered)}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      
                      <CardContent className="p-6">
                        <div className="flex items-center text-sm text-muted-foreground mb-2">
                          <Calendar className="h-4 w-4 mr-1" />
                          {formatDate(post.date)}
                        </div>
                        
                        <h3 className="font-semibold text-lg leading-tight mb-3">
                          {stripHtml(post.title.rendered)}
                        </h3>
                        
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                          {stripHtml(post.excerpt.rendered).substring(0, 150)}...
                        </p>
                        
                        <Button 
                          variant="link" 
                          className="p-0 h-auto text-primary hover:text-primary/80"
                          asChild
                        >
                          <Link to={`/article/${post.slug}`} className="inline-flex items-center">
                            Lire la suite
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SearchPage;