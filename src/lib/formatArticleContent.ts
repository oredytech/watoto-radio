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

  // Fonction récursive pour traiter les nœuds
  const processNode = (node: Node): string => {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent?.trim() || '';
      return text ? `<p>${text}</p>` : '';
    }

    if (node.nodeType === Node.ELEMENT_NODE) {
      const element = node as HTMLElement;
      const tagName = element.tagName.toLowerCase();

      // Préserver les balises structurelles importantes
      if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'blockquote', 'ul', 'ol', 'li', 'pre', 'code'].includes(tagName)) {
        const children = Array.from(element.childNodes)
          .map(child => {
            if (child.nodeType === Node.TEXT_NODE) {
              return child.textContent || '';
            }
            if (child.nodeType === Node.ELEMENT_NODE) {
              const childElement = child as HTMLElement;
              return childElement.outerHTML;
            }
            return '';
          })
          .join('');

        return `<${tagName}>${children}</${tagName}>`;
      }

      // Préserver les liens et images
      if (tagName === 'a') {
        return element.outerHTML;
      }

      if (tagName === 'img') {
        return element.outerHTML;
      }

      // Pour les autres éléments, traiter récursivement les enfants
      const children = Array.from(element.childNodes)
        .map(child => processNode(child))
        .filter(content => content.trim() !== '')
        .join('\n');

      return children;
    }

    return '';
  };

  // Traiter tous les nœuds enfants
  const formattedContent = Array.from(tempDiv.childNodes)
    .map(node => processNode(node))
    .filter(content => content.trim() !== '')
    .join('\n');

  return formattedContent;
}
