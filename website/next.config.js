/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Safety Guards: Set to false to ensure a professional, error-free build for it2.tv
  eslint: {
    ignoreDuringBuilds: false, 
  },
  typescript: {
    ignoreBuildErrors: false,
  },

  async rewrites() {
    // 2. Base URL: Using 3000 since your frontend and backend are in the same project
    const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL || 'http://localhost:3000';

    return [
      {
        // Redirects /upload and /uploads to the API handler
        source: '/upload/:path*',
        destination: `${cmsUrl}/api/admin/upload/:path*`,
      },
      {
        source: '/uploads/:path*',
        destination: `${cmsUrl}/api/admin/upload/:path*`,
      },
      // Note: We removed /admin and /api rewrites to prevent the Infinite Loop (ENOBUFS error)
    ];
  },

  images: {
    // 3. Remote Patterns: Allows Next.js to display images from your local and production sources
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
     
    ],
  },
};

module.exports = nextConfig;