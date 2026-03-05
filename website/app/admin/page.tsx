'use client';

import React, { useEffect, useState } from 'react';
import AdminLayout from '@/src/components/admin/AdminLayout';
import { FileText, Clock, Eye } from 'lucide-react';

interface DashboardStats {
  totalBlogs: number;
  publishedBlogs: number;
  draftBlogs: number;
}

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<DashboardStats>({
    totalBlogs: 0,
    publishedBlogs: 0,
    draftBlogs: 0,
  });
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    fetchStats();
  }, []);
  
  const fetchStats = async () => {
    try {
      const [publishedRes, draftRes] = await Promise.all([
       fetch(`/api/admin/blogs?status=published&limit=1`),
        fetch(`/api/admin/blogs?status=draft&limit=1`),
      ]);
      
      const publishedData = await publishedRes.json();
      const draftData = await draftRes.json();
      
      const published = publishedData.data?.pagination?.totalItems || 0;
      const draft = draftData.data?.pagination?.totalItems || 0;
      
      setStats({
        totalBlogs: published + draft,
        publishedBlogs: published,
        draftBlogs: draft,
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
  const statCards = [
    {
      title: 'Total Blogs',
      value: stats.totalBlogs,
      icon: FileText,
      color: 'bg-blue-500',
    },
    {
      title: 'Published',
      value: stats.publishedBlogs,
      icon: Eye,
      color: 'bg-emerald-500',
    },
    {
      title: 'Drafts',
      value: stats.draftBlogs,
      icon: Clock,
      color: 'bg-yellow-500',
    },
  ];
  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>
        
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow p-6 animate-pulse"
              >
                <div className="h-16 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {statCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="bg-white rounded-lg shadow p-6"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        {card.title}
                      </p>
                      <p className="text-3xl font-bold text-gray-900 mt-2">
                        {card.value}
                      </p>
                    </div>
                    <div className={`${card.color} p-3 rounded-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        
        <div className="mt-8 bg-white rounded-lg shadow p-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href="/admin/admin/blogs/new"
              className="
                p-4 border-2 border-gray-200 rounded-lg
                hover:border-blue-500 hover:bg-indigo-50
                transition-colors
              "
            >
              <h3 className="font-semibold text-gray-900 mb-1">
                Create New Blog
              </h3>
              <p className="text-sm text-gray-700">
                Write and publish a new blog post
              </p>
            </a>
            <a
              href="/admin/admin/blogs"
              className="
                p-4 border-2 border-gray-200 rounded-lg
                hover:border-blue-500 hover:bg-blue-50
                transition-colors
              "
            >
              <h3 className="font-semibold text-gray-900 mb-1">
                Manage Blogs
              </h3>
              <p className="text-sm text-gray-600">
                View, edit, and delete blog posts
              </p>
            </a>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
