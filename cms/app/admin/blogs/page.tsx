'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import AdminLayout from '@/components/admin/AdminLayout';
import Button from '@/components/ui/Button';
import Alert from '@/components/ui/Alert';
import Modal from '@/components/ui/Modal';
import { Plus, Edit, Trash2, Eye, Search } from 'lucide-react';
import { IBlog } from '@/types';

export default function BlogListPage() {
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
    hasNextPage: false,
    hasPrevPage: false,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'published' | 'draft'>('all');
  const [search, setSearch] = useState('');
  const [deleteModal, setDeleteModal] = useState<{
    isOpen: boolean;
    blog: IBlog | null;
  }>({ isOpen: false, blog: null });
  const [alert, setAlert] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);
  
  useEffect(() => {
    fetchBlogs();
  }, [pagination.currentPage, filter, search]);
  
  const fetchBlogs = async () => {
    setIsLoading(true);
    try {
      const params = new URLSearchParams({
        page: pagination.currentPage.toString(),
        limit: '10',
        status: filter,
        ...(search && { search }),
      });
      
      const response = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/admin/api/admin/blogs?${params}`);
      const data = await response.json();
      
      if (data.success) {
        setBlogs(data.data.data);
        setPagination(data.data.pagination);
      }
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleDelete = async () => {
    if (!deleteModal.blog) return;
    
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/admin/api/admin/blogs/${deleteModal.blog._id}`, {
        method: 'DELETE',
      });
      
      const data = await response.json();
      
      if (data.success) {
        setAlert({
          type: 'success',
          message: 'Blog deleted successfully',
        });
        fetchBlogs();
      } else {
        setAlert({
          type: 'error',
          message: data.error || 'Failed to delete blog',
        });
      }
    } catch (error) {
      setAlert({
        type: 'error',
        message: 'Network error. Please try again.',
      });
    } finally {
      setDeleteModal({ isOpen: false, blog: null });
    }
  };
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setPagination((prev) => ({ ...prev, currentPage: 1 }));
    fetchBlogs();
  };
  
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };
  
  return (
    <AdminLayout>
      <div className="max-w-7xl  mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold  text-gray-900">Blog Manager</h1>
          <Link href="/admin/blogs/new">
            <Button variant="primary">
              <Plus className="w-5 h-5 mr-2" />
              Create Blog
            </Button>
          </Link>
        </div>
        
        {alert && (
          <Alert
            type={alert.type}
            message={alert.message}
            onClose={() => setAlert(null)}
            className="mb-6"
          />
        )}
        
        {/* Filters */}
        <div className="bg-white rounded-lg shadow p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <form onSubmit={handleSearch} className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search blogs..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="
                    w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg
                    focus:outline-none focus:ring-2 focus:ring-blue-500
                  "
                />
                <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
              </div>
            </form>
            
            {/* Status Filter */}
            <select
              value={filter}
              onChange={(e) => {
                setFilter(e.target.value as typeof filter);
                setPagination((prev) => ({ ...prev, currentPage: 1 }));
              }}
              className="
                px-4 py-2 border border-gray-300 rounded-lg
                focus:outline-none focus:ring-2 focus:ring-blue-500
              "
            >
              <option value="all">All Status</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
            </select>
          </div>
        </div>
        
        {/* Blog List */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          {isLoading ? (
            <div className="p-8 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            </div>
          ) : blogs.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              No blogs found. Create your first blog post!
            </div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-indigo-100 py-6
                   border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-7 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                        Title
                      </th>
                      <th className="px-6 py-7 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-7 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                        Author
                      </th>
                      <th className="px-6 py-7 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-7 text-right text-xs font-medium text-gray-900 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {blogs.map((blog) => (
                      <tr key={blog._id.toString()} className="hover:bg-indigo-200">
                        <td className="px-6 py-4">
                          <div className="text-sm font-medium text-gray-900">
                            {blog.title}
                          </div>
                          <div className="text-sm text-gray-500">
                            /{blog.slug}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`
                              px-2 py-1 text-xs font-semibold rounded-full
                              ${
                                blog.status === 'published'
                                  ? 'bg-green-100 text-green-800'
                                  : 'bg-yellow-100 text-yellow-800'
                              }
                            `}
                          >
                            {blog.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">
                          {blog.author}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {formatDate(blog.createdAt.toString())}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            {blog.status === 'published' && (
                              <Link
                                href={`/blog/${blog.slug}`}
                                target="_blank"
                                className="text-blue-600 hover:text-blue-800"
                                title="View"
                              >
                                <Eye className="w-5 h-5" />
                              </Link>
                            )}
                            <Link
                              href={`/admin/blogs/edit/${blog._id}`}
                              className="text-gray-600 hover:text-gray-800"
                              title="Edit"
                            >
                              <Edit className="w-5 h-5" />
                            </Link>
                            <button
                              onClick={() =>
                                setDeleteModal({ isOpen: true, blog })
                              }
                              className="text-red-600 hover:text-red-800"
                              title="Delete"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {/* Pagination */}
              {pagination.totalPages > 1 && (
                <div className="px-6 py-4 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-700">
                      Showing page {pagination.currentPage} of{' '}
                      {pagination.totalPages} ({pagination.totalItems} total)
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="secondary"
                        size="sm"
                        disabled={!pagination.hasPrevPage}
                        onClick={() =>
                          setPagination((prev) => ({
                            ...prev,
                            currentPage: prev.currentPage - 1,
                          }))
                        }
                      >
                        Previous
                      </Button>
                      <Button
                        variant="secondary"
                        size="sm"
                        disabled={!pagination.hasNextPage}
                        onClick={() =>
                          setPagination((prev) => ({
                            ...prev,
                            currentPage: prev.currentPage + 1,
                          }))
                        }
                      >
                        Next
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      
      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={deleteModal.isOpen}
        onClose={() => setDeleteModal({ isOpen: false, blog: null })}
        title="Delete Blog"
      >
        <div className="space-y-4 ">
          <p className="text-gray-700">
            Are you sure you want to delete "{deleteModal.blog?.title}"?
             This action cannot be undone.
          </p>
          <div className="flex justify-end gap-3">
            <Button
              variant="secondary"
              onClick={() => setDeleteModal({ isOpen: false, blog: null })}
            >
              Cancel
            </Button>
            <Button variant="danger" onClick={handleDelete}>
              Delete
            </Button>
          </div>
        </div>
      </Modal>
    </AdminLayout>
  );
}
