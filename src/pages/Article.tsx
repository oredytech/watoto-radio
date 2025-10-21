import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Calendar, Clock, User, Share2, Eye } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { formatArticleContent } from '@/lib/formatArticleContent';

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
      media_details?: {
        sizes?: {
          full?: {
            source_url: string;
          };
        };
      };
    }>;
    'wp:term'?: Array<Array<{
      name: string;
      slug: string;
      id: number;
    }>>;
    author?: Array<{
      name: string;
      description: string;
      avatar_urls?: {
        '96': string;
      };
    }>;
  };
}

export default function Article() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<WordPressPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<WordPressPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;
      
      try {
        setLoading(true);
        const response = await fetch(
          `https://watotoradio.info/wp-json/wp/v2/posts?slug=${slug}&_embed`
        );
        
        if (!response.ok) {
          throw new Error('Article non trouvé');
        }
        
        const data = await response.json();
        if (data.length === 0) {
          throw new Error('Article non trouvé');
        }
        
        const currentPost = data[0];
        setPost(currentPost);
        
        // Fetch related posts from same categories
        if (currentPost.categories?.length > 0) {
          const relatedResponse = await fetch(
            `https://watotoradio.info/wp-json/wp/v2/posts?categories=${currentPost.categories[0]}&exclude=${currentPost.id}&per_page=3&_embed`
          );
          if (relatedResponse.ok) {
            const relatedData = await relatedResponse.json();
            setRelatedPosts(relatedData);
          }
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

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

  const shareArticle = () => {
    if (navigator.share) {
      navigator.share({
        title: post?.title.rendered,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  // Formater le contenu de l'article pour une meilleure lisibilité
  const formattedContent = useMemo(() => {
    return post ? formatArticleContent(post.content.rendered) : '';
  }, [post]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20 pb-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Skeleton className="h-8 w-32 mb-6" />
            <Skeleton className="h-12 w-full mb-4" />
            <Skeleton className="h-4 w-64 mb-8" />
            <Skeleton className="h-64 w-full mb-8" />
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20 pb-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Article non trouvé
            </h1>
            <p className="text-muted-foreground mb-6">
              {error || "Cet article n'existe pas ou a été supprimé."}
            </p>
            <Button asChild>
              <Link to="/actualites">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Retour aux actualités
              </Link>
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
      
      <main className="pt-20 pb-12">
        {/* Navigation */}
        <div className="container mx-auto px-4 mb-6">
          <Button variant="ghost" asChild>
            <Link to="/actualites">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour aux actualités
            </Link>
          </Button>
        </div>

        {/* Article Content */}
        <article className="container mx-auto px-4 max-w-4xl">
          {/* Article Header */}
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              {stripHtmlTags(post.title.rendered)}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(post.date)}</span>
              </div>
              
              {post._embedded?.author?.[0] && (
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{post._embedded.author[0].name}</span>
                </div>
              )}
              
              <Button
                variant="outline"
                size="sm"
                onClick={shareArticle}
                className="ml-auto"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Partager
              </Button>
            </div>
            
            {/* Categories */}
            {post._embedded?.['wp:term']?.[0] && (
              <div className="flex flex-wrap gap-2 mb-6">
                {post._embedded['wp:term'][0].map((category, index) => (
                  <Badge key={category.id} variant="secondary">
                    {category.name}
                  </Badge>
                ))}
              </div>
            )}
          </header>

          {/* Featured Image */}
          {post._embedded?.['wp:featuredmedia']?.[0] && (
            <div className="mb-8">
              <img
                src={post._embedded['wp:featuredmedia'][0].source_url}
                alt={post._embedded['wp:featuredmedia'][0].alt_text || post.title.rendered}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          )}

          {/* Article Body */}
          <div 
            className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-p:mb-6 prose-a:text-primary prose-strong:text-foreground prose-blockquote:border-primary prose-blockquote:text-muted-foreground prose-li:text-muted-foreground prose-ul:mb-6 prose-ol:mb-6"
            dangerouslySetInnerHTML={{ __html: formattedContent }}
          />

          {/* Author Info */}
          {post._embedded?.author?.[0] && post._embedded.author[0].description && (
            <Card className="mt-12">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  {post._embedded.author[0].avatar_urls && (
                    <img
                      src={post._embedded.author[0].avatar_urls['96']}
                      alt={post._embedded.author[0].name}
                      className="w-16 h-16 rounded-full"
                    />
                  )}
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">
                      {post._embedded.author[0].name}
                    </h3>
                    <p className="text-muted-foreground">
                      {stripHtmlTags(post._embedded.author[0].description)}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </article>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <section className="container mx-auto px-4 mt-16">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Articles similaires
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Card key={relatedPost.id} className="card-hover overflow-hidden">
                  {relatedPost._embedded?.['wp:featuredmedia']?.[0] && (
                    <div className="h-32 overflow-hidden">
                      <img
                        src={relatedPost._embedded['wp:featuredmedia'][0].source_url}
                        alt={stripHtmlTags(relatedPost.title.rendered)}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                      <Link 
                        to={`/article/${relatedPost.slug}`}
                        className="hover:text-primary transition-colors"
                      >
                        {stripHtmlTags(relatedPost.title.rendered)}
                      </Link>
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {stripHtmlTags(relatedPost.excerpt.rendered)}
                    </p>
                    <div className="text-xs text-muted-foreground">
                      {formatDate(relatedPost.date)}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}
      </main>
      
      <Footer />
    </div>
  );
}