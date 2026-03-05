import DOMPurify from 'isomorphic-dompurify';

/**
 * Sanitize HTML content to prevent XSS attacks
 * Allows safe HTML tags while removing dangerous scripts
 */
export function sanitizeHTML(html: string): string {
  if (!html) return '';
  
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: [
      'p', 'br', 'strong', 'em', 'u', 's', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
      'blockquote', 'code', 'pre', 'ul', 'ol', 'li', 'a', 'img',
      'table', 'thead', 'tbody', 'tr', 'th', 'td',
      'div', 'span', 'sup', 'sub',
    ],
    ALLOWED_ATTR: [
      'href', 'src', 'alt', 'title', 'class', 'id',
      'target', 'rel', 'width', 'height',
    ],
    ALLOW_DATA_ATTR: false,
    ALLOW_UNKNOWN_PROTOCOLS: false,
    ALLOWED_URI_REGEXP: /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,
  });
}

/**
 * Sanitize plain text (remove all HTML)
 */
export function sanitizeText(text: string): string {
  if (!text) return '';
  
  return DOMPurify.sanitize(text, {
    ALLOWED_TAGS: [],
    ALLOWED_ATTR: [],
  });
}

/**
 * Strip HTML tags completely
 */
export function stripHTML(html: string): string {
  if (!html) return '';
  
  return html.replace(/<[^>]*>/g, '').trim();
}

/**
 * Create safe excerpt from HTML content
 */
export function createExcerpt(html: string, maxLength: number = 160): string {
  const text = stripHTML(html);
  
  if (text.length <= maxLength) {
    return text;
  }
  
  return text.substring(0, maxLength).trim() + '...';
}

/**
 * Escape special characters for MongoDB regex
 */
export function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Validate and sanitize URL
 */
export function sanitizeURL(url: string): string {
  if (!url) return '';
  
  try {
    const parsed = new URL(url);
    
    // Only allow http and https protocols
    if (!['http:', 'https:'].includes(parsed.protocol)) {
      return '';
    }
    
    return parsed.toString();
  } catch (error) {
    // Invalid URL
    return '';
  }
}
