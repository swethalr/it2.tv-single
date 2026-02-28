# CMS Architecture Documentation

## Table of Contents
1. [System Overview](#system-overview)
2. [Architecture Layers](#architecture-layers)
3. [Security Architecture](#security-architecture)
4. [Data Flow](#data-flow)
5. [Component Breakdown](#component-breakdown)
6. [API Design](#api-design)
7. [Database Schema](#database-schema)
8. [Authentication Flow](#authentication-flow)
9. [SEO Implementation](#seo-implementation)
10. [Deployment Architecture](#deployment-architecture)

---

## System Overview

This CMS follows a **modern serverless architecture** optimized for Vercel deployment with MongoDB Atlas as the database. It implements a **layered architecture pattern** with clear separation of concerns.

### Key Architectural Decisions

1. **App Router over Pages Router**: Using Next.js 14 App Router for better performance and RSC support
2. **TypeScript Strict Mode**: Full type safety across the application
3. **Server Components by Default**: Minimize client-side JavaScript
4. **HTTP-Only Cookies**: Secure token storage, not localStorage
5. **Zod Validation**: Runtime type checking for all inputs
6. **MongoDB Connection Pooling**: Optimized for serverless with caching
7. **Middleware Protection**: Route-level security before rendering

---

## Architecture Layers

### 1. Presentation Layer
**Location**: `/app`, `/components`

Handles all UI rendering and user interaction.

#### Components:
- **Page Components** (`/app/admin/**/page.tsx`)
  - Server Components by default
  - Client Components marked with 'use client'
  - Minimal client-side JavaScript

- **UI Components** (`/components/ui/*`)
  - Reusable, accessible components
  - Tailwind CSS styling
  - TypeScript interfaces for props

- **Admin Components** (`/components/admin/*`)
  - Dashboard layout
  - Sidebar navigation
  - SEO form (collapsible panel)

#### Client/Server Split:
```
Server Components (Default):
- Page layouts
- Data fetching
- SEO metadata generation

Client Components ('use client'):
- Forms with state
- Interactive elements
- Rich text editor
- Modal dialogs
```

### 2. API Layer
**Location**: `/app/api`

Handles HTTP requests, validates input, and coordinates business logic.

#### Structure:
```
/api
├── auth/                    # Public authentication endpoints
│   ├── login/              # POST: User login
│   ├── logout/             # POST: User logout
│   └── verify/             # GET: Token verification
└── admin/                   # Protected admin endpoints
    └── blogs/              # Blog CRUD operations
        ├── route.ts        # GET: List blogs (paginated)
        ├── create/         # POST: Create blog
        └── [id]/           # GET/PUT/DELETE: Single blog
```

#### API Design Principles:
- **RESTful conventions**
- **Centralized error handling**
- **Consistent response format**
- **Input validation on every endpoint**
- **Rate limiting on sensitive endpoints**

### 3. Business Logic Layer
**Location**: `/lib`

Contains reusable utilities and business logic.

#### Key Modules:

**Authentication & Security:**
- `jwt.ts` - Token generation and verification
- `cookies.ts` - Cookie management utilities
- `rate-limit.ts` - In-memory rate limiting
- `sanitize.ts` - XSS protection and content cleaning

**Data Processing:**
- `slug.ts` - URL slug generation and validation
- `validations.ts` - Zod schemas for input validation

**API Utilities:**
- `api-helpers.ts` - Response formatting and error handling
- `database.ts` - MongoDB connection with caching

### 4. Data Access Layer
**Location**: `/models`

Mongoose models for MongoDB interaction.

#### Models:
- **User Model** (`User.ts`)
  - Password hashing with bcrypt
  - Email validation
  - Role-based fields

- **Blog Model** (`Blog.ts`)
  - Content with rich text
  - SEO metadata (nested object)
  - Status (draft/published)
  - Slug uniqueness enforcement

### 5. Security Layer
**Location**: `middleware.ts`

Edge middleware for route protection and request validation.

#### Middleware Functions:
1. **Route Protection**
   - Validates JWT token
   - Checks admin role
   - Redirects unauthorized users

2. **Header Injection**
   - Adds user info to request headers
   - Available to API routes

3. **Token Refresh**
   - Handles expired tokens
   - Redirects to login with error

---

## Security Architecture

### Defense in Depth Strategy

#### Layer 1: Network Security
- HTTPS enforcement
- Security headers (X-Frame-Options, CSP, etc.)
- DDoS protection (Vercel)

#### Layer 2: Authentication
```
Flow:
1. User submits credentials
2. Rate limit check (5 attempts/15min)
3. Bcrypt password comparison
4. JWT token generation
5. HTTP-only cookie set
6. Middleware validates on each request
```

#### Layer 3: Authorization
```
Middleware checks:
1. Token exists in cookie
2. Token is valid (not expired)
3. User has admin role
4. Injects user info into headers
```

#### Layer 4: Input Validation
```
Validation Flow:
Request → Zod Schema → Parse → Sanitize → Process
                ↓ (if fails)
            Return 400 Error
```

#### Layer 5: Data Protection
- **Password Storage**: Bcrypt (12 rounds)
- **SQL Injection**: Mongoose escaping
- **XSS**: DOMPurify sanitization
- **CSRF**: Token validation (future enhancement)

### Security Checklist Implementation

✅ **Authentication**
- Bcrypt password hashing
- JWT with short expiration
- HTTP-only, Secure, SameSite cookies

✅ **Authorization**
- Middleware route protection
- Role-based access control

✅ **Input Validation**
- Zod schema validation
- Type checking at runtime
- Sanitization before storage

✅ **Output Encoding**
- DOMPurify for HTML content
- Escaped MongoDB queries

✅ **Session Management**
- Token rotation on login
- Secure cookie flags
- Automatic expiration

✅ **Rate Limiting**
- Login endpoint: 5 attempts/15min
- IP-based tracking
- Automatic cleanup

---

## Data Flow

### Blog Creation Flow

```
User Input → Form Validation → Client State
                                    ↓
                            API Request (POST)
                                    ↓
                          Rate Limit Check
                                    ↓
                          Zod Schema Validation
                                    ↓
                          Content Sanitization
                                    ↓
                          Slug Generation
                                    ↓
                          MongoDB Insert
                                    ↓
                          Success Response
                                    ↓
                          Redirect to List
```

### Authentication Flow

```
Login Form → Credentials
                ↓
        Rate Limit Check
                ↓
        Find User (with password)
                ↓
        Bcrypt Compare
                ↓
        Generate JWT
                ↓
        Set HTTP-only Cookie
                ↓
        Return User Data
                ↓
        Redirect to Dashboard

Subsequent Requests:
Request → Middleware → Extract Cookie → Verify JWT → Allow/Deny
```

### Blog Rendering Flow (SSR)

```
User visits /blog/[slug]
        ↓
    generateMetadata() executes
        ↓
    Fetch blog from MongoDB
        ↓
    Extract SEO meta from seoMeta object
        ↓
    Build Metadata object
        ↓
    Render page component (Server Component)
        ↓
    Inject meta tags in <head>
        ↓
    Serve HTML to client
```

---

## Component Breakdown

### Reusable UI Components

#### Button Component
```typescript
Features:
- Multiple variants (primary, secondary, danger, ghost)
- Size options (sm, md, lg)
- Loading state with spinner
- Disabled state handling
- Full TypeScript typing
- Tailwind CSS styling
```

#### Input Component
```typescript
Features:
- Label with required indicator
- Error message display
- Helper text
- Full accessibility (aria-labels, ids)
- Tailwind CSS styling
```

#### Rich Text Editor
```typescript
Features:
- React Quill integration
- Dynamic import (SSR safe)
- Customizable toolbar
- Placeholder support
- Error state
- Minimum height enforcement
```

#### SEO Meta Form
```typescript
Features:
- Collapsible panel
- All 14 SEO fields (as required)
- Character counters
- Input validation
- Organized sections (Basic, OpenGraph)
```

### Admin Components

#### Admin Layout
```typescript
Responsibilities:
- Sidebar integration
- Mobile menu toggle
- Main content area
- Responsive design
```

#### Admin Sidebar
```typescript
Features:
- Navigation menu
- Active route highlighting
- Logout button
- Mobile overlay
- Icon integration (Lucide)
```

---

## API Design

### Response Format

**Success Response:**
```typescript
{
  success: true,
  data: T,
  message?: string
}
```

**Error Response:**
```typescript
{
  success: false,
  error: string,
  data?: ValidationError[]
}
```

### Error Handling Strategy

```typescript
API Route → try/catch → handleApiError()
                            ↓
                    Check Error Type
                            ↓
        ┌───────────────────┼───────────────────┐
        ↓                   ↓                   ↓
    ZodError        MongoError           Generic Error
        ↓                   ↓                   ↓
   Validation      Duplicate Key         Internal Error
   Errors (400)     Error (409)            (500)
```

### Rate Limiting Implementation

```typescript
In-Memory Store:
{
  "login:192.168.1.1": {
    count: 3,
    resetTime: 1234567890
  }
}

Algorithm:
1. Check if identifier exists
2. If resetTime expired → reset count
3. If count >= maxAttempts → deny
4. Increment count
5. Allow request
```

---

## Database Schema

### User Collection

```typescript
{
  _id: ObjectId,
  email: string (unique, indexed),
  password: string (hashed, not selected by default),
  role: 'admin' | 'editor',
  createdAt: Date,
  updatedAt: Date
}

Indexes:
- email: 1 (unique)
```

### Blog Collection

```typescript
{
  _id: ObjectId,
  title: string (indexed),
  slug: string (unique, indexed),
  content: string (sanitized HTML),
  excerpt?: string,
  status: 'draft' | 'published' (indexed),
  author: string (indexed),
  seoMeta: {
    customTitle?: string,
    description?: string,
    keywords?: string,
    robots?: string,
    googlebotImage?: string,
    revisitAfter?: string,
    author?: string,
    canonical?: string,
    ogLocale?: string,
    ogType?: string,
    ogTitle?: string,
    ogDescription?: string,
    ogUrl?: string,
    ogSiteName?: string
  },
  createdAt: Date,
  updatedAt: Date
}

Indexes:
- slug: 1 (unique)
- status: 1, createdAt: -1 (compound)
- title: text, content: text (full-text search)
```

---

## Authentication Flow

### Login Sequence Diagram

```
Client                    API                 Database              JWT
  |                        |                      |                   |
  |--POST /api/auth/login->|                      |                   |
  |   {email, password}    |                      |                   |
  |                        |--Rate Limit Check--->|                   |
  |                        |                      |                   |
  |                        |--Find User---------->|                   |
  |                        |<--User with password-|                   |
  |                        |                      |                   |
  |                        |--Bcrypt Compare----->|                   |
  |                        |                      |                   |
  |                        |--Generate Token--------------------->|   |
  |                        |<--JWT Token--------------------------|   |
  |                        |                      |                   |
  |<--Set-Cookie-----------|                      |                   |
  |   (HTTP-only, Secure)  |                      |                   |
  |                        |                      |                   |
  |--Request /admin------->|                      |                   |
  |                        |                      |                   |
  |  [Middleware]          |                      |                   |
  |                        |--Verify Token------------------->|       |
  |                        |<--Payload------------------------|       |
  |                        |                      |                   |
  |<--Render Admin Page----|                      |                   |
```

---

## SEO Implementation

### Metadata Generation

```typescript
// Server Component
export async function generateMetadata({ params }): Promise<Metadata> {
  const blog = await fetchBlog(params.slug);
  const seo = blog.seoMeta || {};
  
  return {
    title: seo.customTitle || blog.title,
    description: seo.description || blog.excerpt,
    keywords: seo.keywords?.split(','),
    robots: {
      index: !seo.robots?.includes('noindex'),
      follow: !seo.robots?.includes('nofollow'),
    },
    openGraph: {
      title: seo.ogTitle || blog.title,
      description: seo.ogDescription || blog.excerpt,
      url: seo.ogUrl || canonicalUrl,
      type: seo.ogType || 'article',
      // ... more OG tags
    },
    alternates: {
      canonical: seo.canonical || canonicalUrl,
    },
  };
}
```

### SEO Tag Priority

```
1. Custom SEO fields (from admin panel)
2. Blog content (title, excerpt)
3. Default fallbacks (site-level)
```

### Rendered Output

```html
<!-- Generated by Next.js from Metadata object -->
<head>
  <title>Custom Title or Blog Title</title>
  <meta name="description" content="..." />
  <meta name="keywords" content="..." />
  <meta name="robots" content="index, follow" />
  <meta name="author" content="..." />
  <link rel="canonical" href="..." />
  
  <!-- Open Graph -->
  <meta property="og:title" content="..." />
  <meta property="og:description" content="..." />
  <meta property="og:url" content="..." />
  <meta property="og:type" content="article" />
  <meta property="og:locale" content="en_US" />
  <meta property="og:site_name" content="..." />
</head>
```

---

## Deployment Architecture

### Vercel + MongoDB Atlas

```
                    Internet
                        ↓
                  Vercel Edge Network
                        ↓
              Next.js Serverless Functions
                        ↓
        ┌───────────────┼───────────────┐
        ↓               ↓               ↓
   API Routes    Server Components   Static Assets
        ↓               ↓               ↓
        └───────────────┴───────────────┘
                        ↓
              MongoDB Atlas Cluster
              (Connection Pooling)
```

### Serverless Optimization

#### Connection Caching
```typescript
// Global variable persists between invocations
global.mongoose = {
  conn: null,
  promise: null
};

// Reuse connection if exists
if (cached.conn) return cached.conn;
```

#### Environment Variables
```
Production:
- Stored in Vercel dashboard
- Encrypted at rest
- Injected at build time
- Available in serverless functions
```

### Scaling Considerations

**Horizontal Scaling:**
- Vercel automatically scales serverless functions
- MongoDB Atlas handles replica sets

**Performance:**
- MongoDB indexes for fast queries
- Connection pooling reduces latency
- Edge caching for static content

**Monitoring:**
- Vercel Analytics for performance
- MongoDB Atlas monitoring for database
- Error tracking with Sentry (optional)

---

## Performance Optimizations

### Database Queries

```typescript
// ✅ Good: Indexed fields
Blog.find({ status: 'published' }).sort({ createdAt: -1 })

// ✅ Good: Pagination
.skip(skip).limit(limit)

// ✅ Good: Select only needed fields
.select('-content')

// ✅ Good: Lean queries (plain objects)
.lean()
```

### Component Optimization

```typescript
// Server Component (default) - no JS shipped
export default async function BlogPage() { }

// Client Component (only when needed)
'use client';
export default function InteractiveForm() { }

// Dynamic imports
const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false
});
```

---

## Testing Strategy

### Unit Tests (Recommended)
```typescript
// Model validation
test('Blog.slug must be unique')

// Utility functions
test('generateSlug() creates valid slugs')
test('sanitizeHTML() removes dangerous tags')

// JWT functions
test('verifyToken() returns null for expired tokens')
```

### Integration Tests (Recommended)
```typescript
// API endpoints
test('POST /api/auth/login returns 401 for invalid credentials')
test('GET /api/admin/blogs requires authentication')
test('POST /api/admin/blogs/create validates input')
```

### End-to-End Tests (Recommended)
```typescript
// User workflows
test('Admin can login and create blog')
test('Published blog renders with correct SEO tags')
test('Rate limiting prevents brute force')
```

---

## Monitoring & Maintenance

### Key Metrics

**Performance:**
- API response time (<200ms target)
- Database query time (<100ms target)
- Page load time (<2s target)

**Security:**
- Failed login attempts
- Rate limit hits
- Invalid token attempts

**Usage:**
- Active users
- Blog creation rate
- Search queries

### Logging Strategy

```typescript
// Error logging
console.error('API Error:', error);

// Security logging
console.log('Rate limit exceeded:', identifier);

// Database logging
console.log('MongoDB connected successfully');
```

### Backup Strategy

**MongoDB Atlas:**
- Continuous backup enabled
- Point-in-time recovery
- Automated snapshots (daily)
- 7-day retention

---

## Future Enhancements

### Phase 2 (Recommended)
- Image upload and management
- Categories and tags
- Comments system
- User roles (editor vs admin)

### Phase 3 (Optional)
- Multi-language support
- Version history
- Scheduled publishing
- Analytics dashboard

---

## Conclusion

This CMS architecture provides:
- ✅ Production-grade security
- ✅ Scalable serverless design
- ✅ Comprehensive SEO features
- ✅ Type-safe codebase
- ✅ Maintainable structure
- ✅ Professional UI/UX
- ✅ Performance optimizations

Built with modern best practices and ready for enterprise deployment.
