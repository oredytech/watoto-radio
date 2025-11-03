import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { question } = await req.json();
    
    if (!question || typeof question !== 'string') {
      return new Response(
        JSON.stringify({ error: 'Question is required' }), 
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    const systemPrompt = `Tu es l'assistant virtuel de Watoto Radio, une radio dédiée aux enfants de la République Démocratique du Congo.

INFORMATIONS IMPORTANTES SUR WATOTO RADIO:

MISSION:
- Watoto Radio est une initiative de la Fondation Miel-Fondal dédiée à l'éducation et à l'information des enfants
- Notre objectif est de donner accès aux enfants à une information de qualité, adaptée à leur âge
- Nous voulons éduquer, informer et divertir les enfants de manière responsable

CHARTE ÉDITORIALE (Points principaux):
1. Actualités simplifiées et vérifiées pour les enfants
2. Contenus éducatifs et ludiques
3. Respect des droits de l'enfant
4. Promotion de la culture congolaise
5. Contenus adaptés à l'âge
6. Information objective et accessible
7. Participation des enfants encouragée
8. Pas de contenus violents ou inappropriés
9. Éducation aux médias et à l'information
10. Collaboration avec experts en éducation

PROGRAMMES ET PODCASTS:
- Mushakulu FM: Programme radio intergénérationnel pour la transmission des savoirs
- Tetea Mazingira: Podcast sur la gouvernance des ressources naturelles et les voix communautaires
- FRESE: Programme de sécurité routière pour enfants
- Injili Everywhere: Webradio pour contenus religieux et sociaux

FONDATEUR:
Daniel Makasi est un journaliste et activiste congolais, expert en environnement et développement durable. Il a fondé la Fondation Miel-Fondal et travaille dans la radio depuis 2015. Il est lauréat ePOP 2022 pour son film "Les bidons du tabou".

CAMPAGNES:
- Watoto Radio organise régulièrement des campagnes d'éducation et de sensibilisation pour les enfants
- Projets humanitaires et éducatifs dans différentes communautés
- Actions de plaidoyer pour les droits des enfants

PARTENAIRES:
- Partenaires nationaux et internationaux soutiennent nos initiatives
- Collaborations avec organisations éducatives et médias

TON RÔLE:
- Réponds aux questions sur Watoto Radio, ses programmes, sa mission et ses activités
- Sois pédagogue, bienveillant et adapte ton langage à tous les âges
- Si on te pose une question qui n'est pas en rapport avec Watoto Radio, explique poliment que tu es là pour parler de Watoto Radio
- Encourage les visiteurs à explorer le site et à découvrir nos contenus

Réponds toujours en français de manière claire et accessible.`;

    console.log('Calling Lovable AI with question:', question);

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: question }
        ],
        temperature: 0.7,
        max_tokens: 500
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('AI Gateway error:', response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: 'Trop de requêtes, veuillez réessayer dans quelques instants.' }), 
          { 
            status: 429, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
          }
        );
      }
      
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: 'Service temporairement indisponible.' }), 
          { 
            status: 402, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
          }
        );
      }
      
      throw new Error(`AI Gateway error: ${response.status}`);
    }

    const data = await response.json();
    const answer = data.choices?.[0]?.message?.content || 'Désolé, je n\'ai pas pu générer une réponse.';

    console.log('Successfully generated response');

    return new Response(
      JSON.stringify({ answer }), 
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );

  } catch (error) {
    console.error('Error in watoto-chatbot function:', error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : 'Erreur interne du serveur' 
      }), 
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});
