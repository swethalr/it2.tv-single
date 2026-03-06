import mongoose, { Schema, Model } from 'mongoose';
import { IBlog } from '@/types';

// SEO Meta Tags Schema - Exact structure as required
const seoMetaSchema = new Schema(
  {
    customTitle: { type: String, maxlength: 60 },
    description: { type: String, maxlength: 160 },
    keywords: { type: String, maxlength: 255 },
    robots: { type: String },
    googlebotImage: { type: String },
    revisitAfter: { type: String },
    author: { type: String, maxlength: 100 },
    canonical: { type: String },
    ogLocale: { type: String },
    ogType: { type: String },
    ogTitle: { type: String, maxlength: 60 },
    ogDescription: { type: String, maxlength: 160 },
    ogUrl: { type: String },
    ogSiteName: { type: String, maxlength: 100 },
  },
  { _id: false }
);

const blogSchema = new Schema<IBlog>(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
      maxlength: [200, 'Title cannot exceed 200 characters'],
      index: true,
    },
    slug: {
      type: String,
      required: [true, 'Slug is required'],
      unique: true,
      lowercase: true,
      trim: true,
      maxlength: [200, 'Slug cannot exceed 200 characters'],
      match: [
        /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
        'Slug must be lowercase with hyphens only',
      ],
      index: true,
    },
    content: {
      type: String,
      required: [true, 'Content is required'],
    },
    excerpt: {
      type: String,
      maxlength: [500, 'Excerpt cannot exceed 500 characters'],
    },
    status: {
      type: String,
      enum: ['draft', 'published'],
      default: 'draft',
      required: true,
      index: true,
    },
    author: {
      type: String,
      required: [true, 'Author is required'],
      index: true,
    },
    mainImage: {
  type: String,
  default: '',
},
    seoMeta: {
      type: seoMetaSchema,
      default: () => ({}),
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// Compound indexes for common queries
blogSchema.index({ status: 1, createdAt: -1 });

blogSchema.index({ title: 'text', content: 'text' }); // Full-text search

// Prevent slug duplication
// Add the 'any' type to next to stop the error
// Prevent slug duplication - Modern Async Pattern
blogSchema.pre('save', async function () {
  if (this.isModified('slug')) {
    const existingBlog = await (this.constructor as Model<IBlog>).findOne({
      slug: this.slug,
      _id: { $ne: this._id },
    });

    if (existingBlog) {
      // Instead of next(error), just throw it!
      throw new Error('Slug already exists');
    }
  }
  // No next() call needed here!
});

// Check if model already exists (for hot reload)
const Blog: Model<IBlog> =
  mongoose.models.Blog || mongoose.model<IBlog>('Blog', blogSchema);

export default Blog;
