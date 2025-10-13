import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ChevronRight } from 'lucide-react';

interface WordPressPost {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  slug: string;
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

interface CategorySectionProps {
  categoryName: string;
  posts: WordPressPost[];
}

export default function CategorySection({ categoryName, posts }: CategorySectionProps) {
  const [showAll, setShowAll] = useState(false);
  const displayedPosts = showAll ? posts : posts.slice(0, 6);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const stripHtmlTags = (html: string) => {
    const tmp = document.createElement('DIV');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  if (posts.length === 0) return null;

  return (
    <div className="mb-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-foreground">{categoryName}</h2>
        <Badge variant="outline" className="text-base px-4 py-1">
          {posts.length} {posts.length > 1 ? 'articles' : 'article'}
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedPosts.map((post) => (
          <Card key={post.id} className="card-hover overflow-hidden bg-card border-border">
            {/* Featured Image */}
            {post._embedded?.['wp:featuredmedia']?.[0] && (
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post._embedded['wp:featuredmedia'][0].source_url}
                  alt={post._embedded['wp:featuredmedia'][0].alt_text || post.title.rendered}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            )}
            
            <CardHeader>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(post.date)}</span>
                {post._embedded?.author?.[0] && (
                  <>
                    <User className="h-4 w-4 ml-2" />
                    <span>{post._embedded.author[0].name}</span>
                  </>
                )}
              </div>
              
              <CardTitle className="text-xl font-bold text-foreground hover:text-primary transition-colors">
                <Link to={`/article/${post.slug}`}>
                  {stripHtmlTags(post.title.rendered)}
                </Link>
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <p className="text-muted-foreground mb-4 line-clamp-3">
                {stripHtmlTags(post.excerpt.rendered)}
              </p>
              
              {/* Categories */}
              {post._embedded?.['wp:term']?.[0] && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {post._embedded['wp:term'][0].slice(0, 2).map((category, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {category.name}
                    </Badge>
                  ))}
                </div>
              )}
            </CardContent>
            
            <CardFooter>
              <Button asChild className="w-full">
                <Link to={`/article/${post.slug}`}>
                  Lire l'article
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {posts.length > 6 && (
        <div className="flex justify-center mt-8">
          <Button 
            onClick={() => setShowAll(!showAll)} 
            variant="outline" 
            size="lg"
            className="gap-2"
          >
            {showAll ? 'Voir moins' : `Lire plus (${posts.length - 6} autres articles)`}
            <ChevronRight className={`h-4 w-4 transition-transform ${showAll ? 'rotate-90' : ''}`} />
          </Button>
        </div>
      )}
    </div>
  );
}
