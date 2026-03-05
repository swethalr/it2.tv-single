/**
 * Sanitize HTML content to prevent XSS attacks
 * Server-safe version using regex (no jsdom dependency)
 */
export function sanitizeHTML(html: string): string {
  if (!html) return '';
  
  const ALLOWED_TAGS = ['p','br','strong','em','u','s','h1','h2','h3','h4','h5','h6',
    'blockquote','code','pre','ul','ol','li','a','img','table','thead','tbody','tr','th','td',
    'div','span','sup','sub'];
  
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/on\w+="[^"]*"/gi, '')
    .replace(/on\w+='[^']*'/gi, '')
    .replace(/javascript:[^"']*/gi, '');
}

/**
 * Sanitize plain text (remove all HTML)
 */
export function sanitizeText(text: string): string {
  if (!text) return '';
  return text.replace(/<[^>]*>/g, '').trim();
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
    if (!['http:', 'https:'].includes(parsed.protocol)) {
      return '';
    }
    return parsed.toString();
  } catch (error) {
    return '';
  }
}