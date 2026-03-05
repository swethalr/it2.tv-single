/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, 
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  async rewrites() {
    const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL || 'http://localhost:3000';

    return [
      {
        source: '/upload/:path*',
        destination: `${cmsUrl}/api/admin/upload/:path*`,
      },
      {
        source: '/uploads/:path*',
        destination: `${cmsUrl}/api/admin/upload/:path*`,
      },
    ];
  },

  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
      },
      {
        protocol: 'https',
        hostname: 'it2-tv-single.vercel.app',
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