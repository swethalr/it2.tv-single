import slugify from 'slugify';
import Blog from '@/models/Blogs';

/**
 * Generate URL-safe slug from title
 */
export function generateSlug(title: string): string {
  return slugify(title, {
    lower: true,
    strict: true,
    remove: /[*+~.()'"!:@]/g,
  });
}

/**
 * Generate unique slug by checking database
 * If slug exists, append number (e.g., my-post-2)
 */
export async function generateUniqueSlug(
  title: string,
  excludeId?: string
): Promise<string> {
  let slug = generateSlug(title);
  let counter = 1;
  let isUnique = false;
  
  while (!isUnique) {
    const query: Record<string, unknown> = { slug };
    
    // Exclude current document when updating
    if (excludeId) {
      query._id = { $ne: excludeId };
    }
    
    const existingBlog = await Blog.findOne(query);
    
    if (!existingBlog) {
      isUnique = true;
    } else {
      // Append counter and try again
      slug = `${generateSlug(title)}-${counter}`;
      counter++;
    }
  }
  
  return slug;
}

/**
 * Validate slug format
 */
export function isValidSlug(slug: string): boolean {
  // Lowercase letters, numbers, and hyphens only
  const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
  return slugRegex.test(slug);
}
