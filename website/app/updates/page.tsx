// app/blog/page.tsx
// Save this file at: app/blog/page.tsx

import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaRegUser,
  FaMagnifyingGlass,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa6';

import { Footer } from '@/src/layout/footer/v2';
import { MainHeader } from '@/src/layout/header';
import { HeroSection } from '@/src/sections/hero/v3';
import { Container } from '@/src/components/container';
import { Button } from '@/src/components/button';
import { TextInput } from '@/src/components/inputs/text-input';
import { connectDB } from '@/lib/database';
import Blog from '@/models/Blogs';

// ── SEO ──────────────────────────────────────────────────────────────────────

// This metadata is great for SEO - your CEO will love this
export const metadata: Metadata = {
  title: 'Zammy Zaif',
  description: 'Hire an Best Google SEO expert to optimize your search engine ranking, organic results, traffic and featured snippets. Book Your Appointment Now! 91-9344618144"',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};


// ── Constants ────────────────────────────────────────────────────────────────
const BLOGS_PER_PAGE = 10;

// ── Sidebar data (identical to your single blog page) ────────────────────────
const authorData = {
  image: { src: '/assets/images/aboutimage/zam.jpg', alt: 'Author' },
  name: 'Zammy Zaif',
  about: 'Expert in IT Solutions and Google Ranking with years of experience in the tech industry.',
  socialLinks: [
    { icon: <FaFacebookF />, href: '#' },
    { icon: <FaTwitter />, href: '#' },
    { icon: <FaInstagram />, href: '#' },
  ],
};

const tags = ['All Project', 'Startup', 'Productsline', 'AI Tech', 'Future'];

// ── Helpers ──────────────────────────────────────────────────────────────────
function formatDate(date: string | Date) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function stripHtml(html: string, maxChars = 200): string {
  const plain = html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
  return plain.length > maxChars ? plain.slice(0, maxChars) + '…' : plain;
}

// ── Page ─────────────────────────────────────────────────────────────────────
interface PageProps {
  searchParams: { page?: string };
}

export default async function BlogListingPage({ searchParams }: PageProps) {
  await connectDB();

  const currentPage = Math.max(1, parseInt(searchParams.page || '1', 10));
  const skip = (currentPage - 1) * BLOGS_PER_PAGE;

  const [totalCount, blogs] = await Promise.all([
    Blog.countDocuments({ status: 'published' }),
    Blog.find({ status: 'published' })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(BLOGS_PER_PAGE)
      .select('title slug excerpt content mainImage author createdAt')
      .lean(),
  ]);

  const totalPages = Math.ceil(totalCount / BLOGS_PER_PAGE);

  return (
    <>
      <MainHeader version="2" />
        <section className="px-6 lg:pt-32 pt-10 lg:pb-10 max-w-[1440px] mx-auto">
        {/*<div className="flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="max-w-3xl">*/}
            
            <h1 className="h1 font-bold text-center text-slate-700 mb-4 tracking-relaxed leading-[1.2]">
              Blogs
            </h1>
            {/* Subheading */}
  <h3 className="h4 font-semibold text-gray-900  text-center mb-4">
   Stay Updated with Our Latest Articles
  </h3>
         
        
      </section>
     

      <section className="bg-white py-20">
        <Container>
          <div className="grid gap-[30px] lg:grid-cols-[1fr_410px]">

            {/* ── LEFT: Blog List ─────────────────────────────────────────── */}
            <div>
              {blogs.length === 0 ? (
                <p className="py-20 text-center text-gray-400 text-lg">No blog posts found.</p>
              ) : (
                <div>
                  {(blogs as any[]).map((blog, index) => {
                    const isLast = index === blogs.length - 1;
                    const excerpt = blog.excerpt
                      ? blog.excerpt.slice(0, 220) + (blog.excerpt.length > 220 ? '…' : '')
                      : stripHtml(blog.content || '', 220);

                    return (
                      <article key={blog._id.toString()}>

                        {/* Image — only shown if mainImage exists */}
                        {blog.mainImage && (
                          <Link href={`/blog/${blog.slug}`} className="block overflow-hidden mb-5">
                            <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
                              <Image
                                src={blog.mainImage}
                                alt={blog.title}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 65vw, 750px"
                                className="object-cover hover:scale-[1.02] transition-transform duration-500"
                              />
                            </div>
                          </Link>
                        )}

                        {/* Title */}
                        <Link href={`/blog/${blog.slug}`}>
                          <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-snug mb-2 hover:text-primary transition-colors duration-200">
                            {blog.title}
                          </h2>
                        </Link>

                        {/* Meta: By author | Date */}
                        <div className="flex flex-wrap items-center gap-2 text-sm text-gray-900 mb-4">
                          <span>By {blog.author || 'IT2.TV'}</span>
                          <span>|</span>
                          <span>{formatDate(blog.createdAt)}</span>
                        </div>

                        {/* Excerpt */}
                        <p className="text-gray-900 leading-relaxed p mb-3">
                          {excerpt}
                        </p>

                        {/* Read More */}
                        <Link
                          href={`/blog/${blog.slug}`}
                          className="inline-block text-sm font-medium text-gray-800 hover:text-primary transition-colors duration-200 mb-8"
                        >
                          Read More
                        </Link>

                        {/* Divider — not after last item */}
                        {!isLast && <hr className="border-gray-200 mb-8" />}

                      </article>
                    );
                  })}
                </div>
              )}

              {/* ── Pagination ─────────────────────────────────────────────── */}
              {totalPages > 1 && (
                <nav
                  aria-label="Blog pagination"
                  className="mt-10 flex flex-wrap items-center gap-2"
                >
                  {/* Prev */}
                  {currentPage > 1 && (
                    <Link
                      href={`/blog?page=${currentPage - 1}`}
                      className="flex h-9 items-center px-3 rounded border border-gray-300 text-sm text-gray-600 hover:border-primary hover:text-primary transition-all"
                    >
                      ← Prev
                    </Link>
                  )}

                  {/* Page numbers */}
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                    const nearCurrent = Math.abs(page - currentPage) <= 2;
                    const isEdge = page === 1 || page === totalPages;

                    if (!nearCurrent && !isEdge) {
                      // Show ellipsis only at the boundary points
                      if (page === currentPage - 3 || page === currentPage + 3) {
                        return (
                          <span key={`ell-${page}`} className="px-1 text-gray-400 select-none">
                            …
                          </span>
                        );
                      }
                      return null;
                    }

                    const isActive = page === currentPage;
                    return (
                      <Link
                        key={page}
                        href={`/blog?page=${page}`}
                        aria-current={isActive ? 'page' : undefined}
                        className={`flex h-9 w-9 items-center justify-center rounded text-sm font-semibold transition-all border
                          ${isActive
                            ? 'bg-primary text-white border-primary shadow-sm'
                            : 'bg-white text-gray-700 border-gray-300 hover:border-primary hover:text-primary'
                          }`}
                      >
                        {page}
                      </Link>
                    );
                  })}

                  {/* Next */}
                  {currentPage < totalPages && (
                    <Link
                      href={`/blog?page=${currentPage + 1}`}
                      className="flex h-9 items-center px-3 rounded border border-gray-300 text-sm text-gray-600 hover:border-primary hover:text-primary transition-all"
                    >
                      Next →
                    </Link>
                  )}
                </nav>
              )}

              {/* Post count info */}
              {totalCount > 0 && (
                <p className="mt-4 text-sm text-gray-400">
                  Showing {skip + 1}–{Math.min(skip + BLOGS_PER_PAGE, totalCount)} of {totalCount} posts
                </p>
              )}
            </div>

            {/* ── RIGHT: Sidebar (identical to your single blog page) ──────── */}
            <aside className="sticky top-24 grid gap-10 self-baseline max-md:mx-auto max-md:max-w-[410px]">

              {/* Author Widget */}
              <div className="space-y-5 rounded-5 bg-emerald-100/60 p-8 text-center">
                <Image
                  src={authorData.image.src}
                  alt={authorData.name}
                  width={127}
                  height={127}
                  className="mx-auto rounded-full object-cover"
                />
                <h3 className="text-lg font-bold text-accent-900">{authorData.name}</h3>
                <p className="p text-black">{authorData.about}</p>
                <div className="flex justify-center gap-4">
                  {authorData.socialLinks.map((s, i) => (
                    <a key={i} href={s.href} className="text-lg text-accent-900 hover:text-primary">
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Search Widget */}
              <div className="space-y-5 rounded-5 bg-emerald-100/60 p-8">
                <h4 className="h4 font-bold text-black">Search</h4>
                <div className="flex">
                  <TextInput
                    placeholder="Search..."
                    className="rounded-r-none border-none bg-white"
                  />
                  <Button className="rounded-l-none !p-4">
                    <FaMagnifyingGlass />
                  </Button>
                </div>
              </div>

              {/* Tags Widget */}
              <div className="space-y-5 rounded-5 bg-emerald-100/60 p-8">
                <h4 className="h4 font-bold text-accent-900">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, i) => (
                    <span
                      key={i}
                      className="p cursor-pointer rounded-5 border border-primary px-3 py-1 text-black transition-all hover:bg-primary hover:text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </aside>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}
