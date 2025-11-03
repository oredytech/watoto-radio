/**
 * Formate le contenu HTML d'un article WordPress pour améliorer la lisibilité
 * @param html - Le HTML brut de l'API WordPress
 * @returns HTML formaté avec une structure propre
 */
export function formatArticleContent(html: string): string {
  if (!html) return '';

  // Créer un élément temporaire pour parser le HTML
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = html;

  // Nettoyer les balises vides et les espaces inutiles
  const cleanHtml = (element: HTMLElement): void => {
    Array.from(element.children).forEach((child) => {
      const htmlChild = child as HTMLElement;
      
      // Supprimer les éléments vides (sauf img, br, hr)
      if (!['IMG', 'BR', 'HR'].includes(htmlChild.tagName) && 
          !htmlChild.textContent?.trim() && 
          htmlChild.children.length === 0) {
        htmlChild.remove();
        return;
      }

      // Récursion sur les enfants
      cleanHtml(htmlChild);
    });
  };

  cleanHtml(tempDiv);

  // Retourner le HTML nettoyé en préservant la structure originale
  return tempDiv.innerHTML;
}
