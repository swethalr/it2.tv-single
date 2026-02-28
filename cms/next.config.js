/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. The virtual path for the CMS
  basePath: '/admin',

  // 2. IMPORTANT: The trailing slash ensures /_next/ files 
  // route correctly through the Port 3000 tunnel
  assetPrefix: '/admin/', 

  reactStrictMode: true,
  swcMinify: true,

  // 3. Ensuring internal links don't break
  env: {
    NEXT_PUBLIC_APP_URL: 'http://localhost:3001/admin',
  },

  // 4. Standard Next.js Image optimization (optional but good for CEO)
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'it2.tv' },
    ],
  },
   typescript: { ignoreBuildErrors: true }, 
}





module.exports = nextConfig;