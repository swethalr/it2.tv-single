/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL || 'http://localhost:3002';

    return [
      {
        // CHANGE THIS: Send /upload requests to the CMS API, not the folder
        source: '/upload/:path*',
        destination: `${cmsUrl}/api/admin/upload/:path*`,
      },
      {
        // FIX FOR OLD DATA: Send /uploads also to the same CMS API
        source: '/uploads/:path*',
        destination: `${cmsUrl}/api/admin/upload/:path*`,
      },
      {
        source: '/admin/:path*',
        destination: `${cmsUrl}/admin/:path*`,
      },
      {
        source: '/api/:path*',
        destination: `${cmsUrl}/admin/api/:path*`,
      }
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3002',
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