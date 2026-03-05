'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import AdminLayout from '@/src/components/admin/AdminLayout';
import Button from '@/src/components/ui/Button';
import Input from '@/src/components/ui/Input';
import Textarea from '@/src/components/ui/Textarea';
import Select from '@/src/components/ui/Select';
import Alert from '@/src/components/ui/Alert';
import RichTextEditor from '@/src/components/ui/RichTextEditor';
import SEOMetaForm from '@/src/components/admin/SEOMetaForm';
import { BlogFormData, SEOMetaTags, IBlog } from '@/types';

export default function BlogEditPage() {
  const router = useRouter();
  const params = useParams();
  const blogId = params.id as string;
  
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const [alert, setAlert] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const [formData, setFormData] = useState<BlogFormData>({
    title: '',
    slug: '',
    content: '',
    excerpt: '',
    mainImage: '',
    status: 'draft',
    seoMeta: {},
  });
  
  useEffect(() => {
    fetchBlog();
  }, [blogId]);
  
  const fetchBlog = async () => {
    try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/admin/blogs/${blogId}`, {
  credentials: 'include',
});
      
      const data = await response.json();
      
      if (data.success) {
        const blog: IBlog = data.data;
        setFormData({
          title: blog.title,
          slug: blog.slug,
          content: blog.content,
          excerpt: blog.excerpt || '',
          mainImage: blog.mainImage || '',
          status: blog.status,
          seoMeta: blog.seoMeta || {},
        });
      } else {
        setAlert({
          type: 'error',
          message: 'Blog not found',
        });
      }
    } catch (error) {
      setAlert({
        type: 'error',
        message: 'Failed to load blog',
      });
    } finally {
      setIsFetching(false);
    }
  };
  
  const handleChange = (
    field: keyof BlogFormData,
    value: string | SEOMetaTags
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };
  
  const generateSlug = () => {
    if (!formData.title) return;
    
    const slug = formData.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    
    setFormData((prev) => ({ ...prev, slug }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setAlert(null);
    setErrors({});
    
    try {
     const response = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/admin/blogs/${blogId}`, {
  method: 'PUT',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
});
      
      const data = await response.json();
      
      if (!response.ok) {
        if (response.status === 400 && data.data) {
          // Validation errors
          const validationErrors: Record<string, string> = {};
          data.data.forEach((error: { field: string; message: string }) => {
            validationErrors[error.field] = error.message;
          });
          setErrors(validationErrors);
        } else {
          setAlert({
            type: 'error',
            message: data.error || 'Failed to update blog',
          });
        }
        return;
      }
      
      // Success
      setAlert({
        type: 'success',
        message: 'Blog updated successfully!',
      });
      
      // Redirect after short delay
      setTimeout(() => {
        router.push('/admin/blogs');
      }, 1500);
    } catch (error) {
      setAlert({
        type: 'error',
        message: 'Network error. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  if (isFetching) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </AdminLayout>
    );
  }
  
  return (
    <AdminLayout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Edit Blog</h1>
          <p className="text-gray-600 mt-2">
            Update the blog post details below
          </p>
        </div>
        
        {alert && (
          <Alert
            type={alert.type}
            message={alert.message}
            onClose={() => setAlert(null)}
            className="mb-6"
          />
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Info Card */}
          <div className="bg-white rounded-lg shadow p-6 space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Basic Information
            </h2>
            
            <Input
              label="Title"
              value={formData.title}
              onChange={(e) => handleChange('title', e.target.value)}
              error={errors.title}
              placeholder="Enter blog title"
              required
            />
            
            <div className="flex gap-2">
              <div className="flex-1">
                <Input
                  label="Slug"
                  value={formData.slug}
                  onChange={(e) => handleChange('slug', e.target.value)}
                  error={errors.slug}
                  placeholder="url-friendly-slug"
                  helperText="Change carefully - affects URL"
                />
              </div>
              <div className="pt-7">
                <Button
                  type="button"
                  variant="secondary"
                  onClick={generateSlug}
                >
                  Generate
                </Button>
              </div>
            </div>
            
            <Textarea
              label="Excerpt"
              value={formData.excerpt}
              onChange={(e) => handleChange('excerpt', e.target.value)}
              error={errors.excerpt}
              placeholder="Short description (optional)"
              rows={3}
              helperText="Brief summary for previews"
            />
            
            <Select
              label="Status"
              value={formData.status}
              onChange={(e) =>
                handleChange('status', e.target.value as 'draft' | 'published')
              }
              options={[
                { value: 'draft', label: 'Draft' },
                { value: 'published', label: 'Published' },
              ]}
              required
            />
          </div>
          
          {/* Content Card */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Content
            </h2>
            <RichTextEditor
              label="Blog Content"
              value={formData.content}
              onChange={(value) => handleChange('content', value)}
              error={errors.content}
              placeholder="Write your blog content here..."
            />
          </div>
          
          {/* SEO Card */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              SEO Settings
            </h2>
            <SEOMetaForm
              seoMeta={formData.seoMeta || {}}
              onChange={(seoMeta) => handleChange('seoMeta', seoMeta)}
            />
          </div>
          
          {/* Actions */}
          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="secondary"
              onClick={() => router.back()}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="primary"
              isLoading={isLoading}
            >
              Update Blog
            </Button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}
