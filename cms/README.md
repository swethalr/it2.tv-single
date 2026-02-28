# Production-Ready CMS for Next.js

A professional, enterprise-grade Content Management System built with Next.js 14, TypeScript, MongoDB, and comprehensive security features.

## 🚀 Features

### Core Features
- ✅ Full blog CRUD operations with rich text editor
- ✅ JWT authentication with HTTP-only cookies
- ✅ Role-based access control (admin only)
- ✅ Rate limiting for login attempts
- ✅ XSS protection and input sanitization
- ✅ CSRF protection
- ✅ MongoDB injection prevention
- ✅ Comprehensive SEO meta tags
- ✅ Slug auto-generation
- ✅ Draft/Published status
- ✅ Pagination and search
- ✅ Responsive admin dashboard

### SEO Features
- Custom Meta Tags (Title, Description, Keywords, Robots, etc.)
- Open Graph tags for social media
- Canonical URLs
- Automatic sitemap generation support
- Server-side rendering for SEO

### Security Features
- Bcrypt password hashing (12 rounds)
- HTTP-only, Secure, SameSite cookies
- Middleware route protection
- Input validation with Zod
- Rate limiting on login
- Content sanitization (DOMPurify)
- Security headers (X-Frame-Options, CSP, etc.)

## 📋 Prerequisites

- Node.js 18.x or higher
- MongoDB Atlas account or local MongoDB
- npm or yarn

## 🛠️ Installation

### 1. Clone and Install Dependencies

```bash
npm install
```

### 2. Environment Setup

Create a `.env.local` file in the root directory:

```env
# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/cms_db?retryWrites=true&w=majority

# JWT Authentication
JWT_SECRET=your-super-secret-jwt-key-min-32-chars-long-change-in-production
JWT_EXPIRES_IN=7d

# App Configuration
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://yourdomain.com

# Security
CSRF_SECRET=your-csrf-secret-key-min-32-chars-change-in-production

# Rate Limiting
RATE_LIMIT_MAX_ATTEMPTS=5
RATE_LIMIT_WINDOW_MS=900000

# Admin Setup
ADMIN_EMAIL=admin@yourdomain.com
ADMIN_PASSWORD=ChangeThisPassword123!
```

⚠️ **IMPORTANT**: Generate strong secrets for production:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### 3. Database Setup

Create initial admin user:

```bash
npx ts-node scripts/seed.ts
```

### 4. Run Development Server

```bash
npm run dev
```

Access the admin panel at: `http://localhost:3000/admin/login`

## 📁 Project Structure

```
├── app/
│   ├── admin/               # Admin panel pages
│   │   ├── blogs/          # Blog management
│   │   ├── login/          # Login page
│   │   └── page.tsx        # Dashboard
│   ├── api/                # API routes
│   │   ├── admin/          # Protected admin APIs
│   │   └── auth/           # Authentication APIs
│   ├── blog/               # Public blog pages
│   │   └── [slug]/         # Dynamic blog post
│   ├── globals.css         # Global styles
│   └── layout.tsx          # Root layout
├── components/
│   ├── admin/              # Admin components
│   │   ├── AdminLayout.tsx
│   │   ├── AdminSidebar.tsx
│   │   └── SEOMetaForm.tsx
│   └── ui/                 # Reusable UI components
│       ├── Button.tsx
│       ├── Input.tsx
│       ├── Modal.tsx
│       ├── RichTextEditor.tsx
│       └── ...
├── lib/
│   ├── api-helpers.ts      # API utilities
│   ├── cookies.ts          # Cookie management
│   ├── database.ts         # MongoDB connection
│   ├── jwt.ts              # JWT utilities
│   ├── rate-limit.ts       # Rate limiting
│   ├── sanitize.ts         # XSS protection
│   ├── slug.ts             # Slug generation
│   └── validations.ts      # Zod schemas
├── models/
│   ├── Blog.ts             # Blog model
│   └── User.ts             # User model
├── types/
│   └── index.ts            # TypeScript types
├── middleware.ts           # Next.js middleware
└── scripts/
    └── seed.ts             # Database seeding
```

## 🔒 Security Best Practices

### Authentication
- Passwords hashed with bcrypt (12 rounds)
- JWT tokens stored in HTTP-only cookies
- Secure flag enabled in production
- SameSite=Lax policy
- Token expiration (7 days default)
- Rate limiting on login (5 attempts per 15 minutes)

### Input Validation
- All inputs validated with Zod schemas
- MongoDB query sanitization
- HTML content sanitized with DOMPurify
- XSS protection on all user inputs

### API Security
- Middleware-protected admin routes
- CSRF protection
- Centralized error handling
- No sensitive data in frontend

### Headers
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin

## 🚢 Deployment

### Vercel Deployment

1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Environment Variables for Production

Ensure all environment variables are set in your hosting platform:
- `MONGODB_URI` - Production MongoDB connection string
- `JWT_SECRET` - Strong secret (32+ characters)
- `CSRF_SECRET` - Strong secret (32+ characters)
- `NODE_ENV=production`
- `NEXT_PUBLIC_APP_URL` - Your domain

### MongoDB Atlas Setup

1. Create MongoDB Atlas cluster
2. Whitelist Vercel IP addresses (or use 0.0.0.0/0 for serverless)
3. Create database user
4. Get connection string
5. Add to environment variables

### Post-Deployment

1. Run seed script to create admin user
2. Login to admin panel
3. Change default password immediately
4. Create your first blog post

## 📝 Usage Guide

### Admin Login

1. Navigate to `/admin/login`
2. Use credentials from `.env` file
3. Change password after first login

### Creating a Blog

1. Go to `/admin/blogs`
2. Click "Create Blog"
3. Fill in title, content, excerpt
4. Expand "Custom Meta Tags" for SEO
5. Set status to "Published"
6. Submit

### SEO Optimization

The SEO panel includes:
- **Custom Title** - Override default title
- **Description** - Meta description (160 chars)
- **Keywords** - Comma-separated keywords
- **Robots** - Search engine directives
- **Canonical URL** - Prevent duplicate content
- **Open Graph** - Social media previews
  - OG:Title, OG:Description, OG:URL
  - OG:Type, OG:Locale, OG:Site Name

### Frontend Rendering

Blogs are rendered at `/blog/[slug]` with:
- Automatic SEO meta tags from admin
- Server-side rendering
- Static generation support
- Canonical URLs
- Open Graph tags

## 🧪 Testing

### Test Login
```bash
# Default credentials (change in production)
Email: admin@example.com
Password: (from .env)
```

### API Endpoints

#### Authentication
- `POST /api/auth/login` - Login
- `POST /api/auth/logout` - Logout
- `GET /api/auth/verify` - Verify token

#### Blogs (Protected)
- `GET /api/admin/blogs` - List blogs (with pagination)
- `POST /api/admin/blogs/create` - Create blog
- `GET /api/admin/blogs/[id]` - Get single blog
- `PUT /api/admin/blogs/[id]` - Update blog
- `DELETE /api/admin/blogs/[id]` - Delete blog

## 🐛 Troubleshooting

### MongoDB Connection Issues
- Check connection string format
- Verify network access in MongoDB Atlas
- Ensure IP whitelist includes your deployment platform

### Login Issues
- Verify JWT_SECRET is set
- Check rate limiting (5 attempts max)
- Clear cookies and try again

### Build Errors
- Run `npm run type-check` to find TypeScript errors
- Ensure all environment variables are set
- Check MongoDB connection during build

## 📚 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict mode)
- **Database**: MongoDB with Mongoose
- **Auth**: JWT with HTTP-only cookies
- **Validation**: Zod
- **Styling**: Tailwind CSS
- **Rich Text**: React Quill
- **Security**: bcryptjs, DOMPurify
- **Icons**: Lucide React

## 🔄 Updates & Maintenance

### Updating Dependencies
```bash
npm update
npm audit fix
```

### Database Backups
Set up automated backups in MongoDB Atlas

### Monitoring
- Monitor API response times
- Track failed login attempts
- Review error logs regularly

## 📄 License

This project is for educational and commercial use. Modify as needed for your projects.

## 🤝 Contributing

This is a production-ready template. Feel free to fork and customize for your needs.

## ⚠️ Important Notes

1. **Change default passwords** after deployment
2. **Use strong secrets** in production (32+ characters)
3. **Enable MongoDB IP whitelist** for security
4. **Set up SSL/TLS** for production domains
5. **Regular backups** of MongoDB database
6. **Monitor rate limiting** for DDoS protection
7. **Review security headers** for your use case

## 📞 Support

For issues or questions:
1. Check the troubleshooting section
2. Review Next.js documentation
3. Check MongoDB Atlas status
4. Verify environment variables

---

Built with ❤️ using Next.js 14 and TypeScript
