import { z } from 'zod';

// SEO Meta Schema - Exact fields as required
export const seoMetaSchema = z.object({
  customTitle: z.string().max(60).optional(),
  description: z.string().max(160).optional(),
  keywords: z.string().max(255).optional(),
  robots: z.string().optional(),
  googlebotImage: z.string().optional(),
  revisitAfter: z.string().optional(),
  author: z.string().max(100).optional(),
  canonical: z.string().url().optional().or(z.literal('')),
  ogLocale: z.string().optional(),
  ogType: z.string().optional(),
  ogTitle: z.string().max(60).optional(),
  ogDescription: z.string().max(160).optional(),
  ogUrl: z.string().url().optional().or(z.literal('')),
  ogSiteName: z.string().max(100).optional(),
}).optional();

// Login Schema
export const loginSchema = z.object({
  email: z.string()
    .min(1, 'Email is required')
    .email('Invalid email format')
    .toLowerCase()
    .trim(),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .max(100, 'Password too long'),
});

// Blog Create/Update Schema
export const blogSchema = z.object({
  title: z.string()
    .min(1, 'Title is required')
    .max(200, 'Title too long')
    .trim(),
  slug: z.string()
    .min(1, 'Slug is required')
    .max(200, 'Slug too long')
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Slug must be lowercase with hyphens only')
    .optional(),
  content: z.string()
    .min(1, 'Content is required'),
  excerpt: z.string()
    .max(500, 'Excerpt too long')
    .optional(),
  status: z.enum(['draft', 'published'], {
    errorMap: () => ({ message: 'Status must be draft or published' }),
  }),
  seoMeta: seoMetaSchema,
});

// Pagination Schema
export const paginationSchema = z.object({
  page: z.number().int().positive().default(1),
  limit: z.number().int().positive().max(100).default(10),
  status: z.enum(['draft', 'published', 'all']).optional(),
  search: z.string().max(100).optional(),
});

// Blog ID Schema
export const blogIdSchema = z.object({
  id: z.string().regex(/^[0-9a-fA-F]{24}$/, 'Invalid blog ID format'),
});

// Export types from schemas
export type LoginInput = z.infer<typeof loginSchema>;
export type BlogInput = z.infer<typeof blogSchema>;
export type PaginationInput = z.infer<typeof paginationSchema>;
export type BlogIdInput = z.infer<typeof blogIdSchema>;
