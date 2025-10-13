import React, { useState, useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CategorySection from '@/components/CategorySection';

interface WordPressPost {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  date: string;
  slug: string;
  featured_media: number;
  author: number;
  categories: number[];
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
    'wp:term'?: Array<Array<{
      name: string;
      slug: string;
    }>>;
    author?: Array<{
      name: string;
    }>;
  };
}

interface CategoryGroup {
  name: string;
  posts: WordPressPost[];
}

export default function Actualites() {
  const [posts, setPosts] = useState<WordPressPost[]>([]);
  const [categories, setCategories] = useState<CategoryGroup[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          'https://watotoradio.info/wp-json/wp/v2/posts?_embed&per_page=100&orderby=date&order=desc'
        );
        
        if (!response.ok) {
          throw new Error('Erreur lors du chargement des articles');
        }
        
        const data = await response.json();
        setPosts(data);
        
        // Group posts by categories
        const categoryMap = new Map<string, WordPressPost[]>();
        
        data.forEach((post: WordPressPost) => {
          if (post._embedded?.['wp:term']?.[0]) {
            post._embedded['wp:term'][0].forEach((category) => {
              if (!categoryMap.has(category.name)) {
                categoryMap.set(category.name, []);
              }
              categoryMap.get(category.name)!.push(post);
            });
          }
        });
        
        // Convert to array and sort by number of posts
        const categoriesArray = Array.from(categoryMap.entries())
          .map(([name, posts]) => ({ name, posts }))
          .sort((a, b) => b.posts.length - a.posts.length);
        
        setCategories(categoriesArray);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20 pb-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Erreur de chargement
            </h1>
            <p className="text-muted-foreground mb-6">{error}</p>
            <Button onClick={() => window.location.reload()}>
              Réessayer
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
            Actualités
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Découvrez les dernières nouvelles et histoires de Watoto Radio
          </p>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="space-y-16">
              {Array.from({ length: 2 }).map((_, i) => (
                <div key={i}>
                  <Skeleton className="h-8 w-48 mb-8" />
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Array.from({ length: 6 }).map((_, j) => (
                      <div key={j} className="space-y-4">
                        <Skeleton className="h-48 w-full" />
                        <Skeleton className="h-4 w-3/4" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : categories.length > 0 ? (
            <div>
              {categories.map((category) => (
                <CategorySection
                  key={category.name}
                  categoryName={category.name}
                  posts={category.posts}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                Aucun article disponible pour le moment.
              </p>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
}