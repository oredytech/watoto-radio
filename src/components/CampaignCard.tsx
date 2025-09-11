import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';

interface CampaignCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  color: 'primary' | 'secondary' | 'accent';
  features?: string[];
}

export default function CampaignCard({ 
  icon: Icon, 
  title, 
  subtitle, 
  description, 
  color, 
  features 
}: CampaignCardProps) {
  const colorClasses = {
    primary: 'bg-primary text-primary-foreground',
    secondary: 'bg-secondary text-secondary-foreground',
    accent: 'bg-accent text-accent-foreground'
  };

  return (
    <Card className="card-hover group">
      <CardHeader className="space-y-4">
        <div className={`w-16 h-16 rounded-xl ${colorClasses[color]} flex items-center justify-center group-hover:scale-110 transition-transform`}>
          <Icon className="h-8 w-8" />
        </div>
        <div>
          <CardTitle className="text-2xl font-bold">{title}</CardTitle>
          <CardDescription className="text-lg font-medium text-muted-foreground">
            {subtitle}
          </CardDescription>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
        
        {features && features.length > 0 && (
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-2">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        )}

        <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          En savoir plus
        </Button>
      </CardContent>
    </Card>
  );
}