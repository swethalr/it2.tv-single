import { Document , Types} from 'mongoose';

// User Types
export interface IUser extends Document {
    _id: Types.ObjectId; 
  email: string;
  password: string;
  role: 'admin' | 'editor';
  createdAt: Date;
  updatedAt: Date;

   comparePassword(candidatePassword: string): Promise<boolean>;
}

// SEO Meta Types - Exact structure as required
export interface SEOMetaTags {
  customTitle?: string;
  description?: string;
  keywords?: string;
  robots?: string;
  googlebotImage?: string;
  revisitAfter?: string;
  author?: string;
  canonical?: string;
  ogLocale?: string;
  ogType?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  ogSiteName?: string;
}

// Blog Types
export interface IBlog extends Document {
  _id: Types.ObjectId; 
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  status: 'draft' | 'published';
  author: string;
  mainImage: string;
  seoMeta: SEOMetaTags;
  createdAt: Date;
  updatedAt: Date;
}

// API Response Types
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

// Auth Types
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface JWTPayload {
  userId: string;
  email: string;
  role: string;
  iat?: number;
  exp?: number;
}

// Pagination Types
export interface PaginationParams {
  page: number;
  limit: number;
  status?: 'draft' | 'published' | 'all';
  search?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
  };
}

// Form Data Types
export interface BlogFormData {
  title: string;
  slug?: string;
  content: string;
  excerpt?: string;
  status: 'draft' | 'published';
  mainImage: string;
  seoMeta?: SEOMetaTags;
}

// Rate Limiting
export interface RateLimitEntry {
  count: number;
  resetTime: number;
}

export interface RateLimitStore {
  [key: string]: RateLimitEntry;
}
