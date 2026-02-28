import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { connectDB } from '@/lib/database';
import Blog from '@/models/Blog';
import { IBlog } from '@/types';

interface BlogPageProps {
  params: {
    slug: string;
  };
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  try {
    await connectDB();
    const blog = await Blog.findOne({
      slug: params.slug,
      status: 'published',
    }).lean();
    
    if (!blog) {
      return {
        title: 'Blog Not Found',
      };
    }
    
const typedBlog = blog as unknown as IBlog;
    const seo = typedBlog.seoMeta || {};
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://yourdomain.com';
    const blogUrl = `${appUrl}/blog/${typedBlog.slug}`;
    
    // Build metadata object with fallbacks
    const metadata: Metadata = {
      title: seo.customTitle || typedBlog.title,
      description: seo.description || typedBlog.excerpt || undefined,
      keywords: seo.keywords?.split(',').map(k => k.trim()) || undefined,
      authors: seo.author ? [{ name: seo.author }] : undefined,
      robots: {
        index: !seo.robots?.includes('noindex'),
        follow: !seo.robots?.includes('nofollow'),
        googleBot: {
          index: !seo.googlebotImage?.includes('noindex'),
          follow: !seo.googlebotImage?.includes('nofollow'),
        },
      },
      openGraph: {
        type: (seo.ogType as 'article' | 'website') || 'article',
        locale: seo.ogLocale || 'en_US',
        title: seo.ogTitle || seo.customTitle || typedBlog.title,
        description: seo.ogDescription || seo.description || typedBlog.excerpt || undefined,
        url: seo.ogUrl || blogUrl,
        siteName: seo.ogSiteName || 'Your Site Name',
        publishedTime: typedBlog.createdAt.toString(),
        modifiedTime: typedBlog.updatedAt.toString(),
      },
      alternates: {
        canonical: seo.canonical || blogUrl,
      },
    };
    
    // Add other metadata
    if (seo.revisitAfter) {
      metadata.other = {
        'revisit-after': seo.revisitAfter,
      };
    }

    
    return metadata;
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Error Loading Blog',
    };

  }

  
}


// Main blog page component
export default async function BlogPage({ params }: BlogPageProps) {
  try {
    await connectDB();
    const blog = await Blog.findOne({
      slug: params.slug,
      status: 'published',
    }).lean();
    
    if (!blog) {
      notFound();
    }
    
   const typedBlog = blog as unknown as IBlog;
    
    return (
      <article className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <header className="mb-8">


        

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"> 
              {typedBlog.title}
            </h1>
            
            <div className="flex items-center gap-4 text-gray-600">
              <time dateTime={typedBlog.createdAt.toString()}>
                {new Date(typedBlog.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <span>•</span>
              <span>By {typedBlog.author}</span>
            </div>
            
  {/* Replace your current image block with this */}
{typedBlog.mainImage && (
  <div className="mb-10 w-full overflow-hidden rounded-2xl shadow-lg border border-gray-200">
    <img 
      src={typedBlog.mainImage} 
      alt={typedBlog.title}
      className="w-full h-auto object-cover max-h-[600px]"
      // REMOVED onError here to fix the error
    />
  </div>
)}

            {typedBlog.excerpt && (
              <p className="mt-4 text-xl text-gray-600 leading-relaxed">
                {typedBlog.excerpt}
              </p>
            )}
          </header>
          
          {/* Content */}
          <div
            className="
              prose prose-lg max-w-none
              pros-slate
              prose-headings:font-bold prose-headings:text-gray-900
              prose-p:text-gray-700 prose-p:leading-relaxed
              prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-gray-900 prose-strong:font-semibold
              prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
              prose-pre:bg-gray-900 prose-pre:text-gray-100
              prose-img:rounded-lg prose-img:shadow-lg
              prose-blockquote:border-l-4 prose-blockquote:border-blue-500
              prose-blockquote:pl-4 prose-blockquote:italic
              bg-white rounded-lg shadow-sm px-8
              [--tw-prose-bullets:theme(colors.slate.900)]
              [--tw-prose-counters:theme(colors.slate.900)]
              prose-ol:list-decimal prose-ul:list-disc
              [&_.ql-align-justify]:text-justify
              [&_.ql-align-center]:text-center
              [&_.ql-align-right]:text-right
              
            "
            dangerouslySetInnerHTML={{ __html: typedBlog.content }}
          />
          
          {/* Footer */}
          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="p text-gray-900">
                Last updated:{' '}
                {new Date(typedBlog.updatedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
              <a
                href="/blog"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                ← Back to all blogs
              </a>
            </div>
          </footer>
        </div>
      </article>
    );
  } catch (error) {
    console.error('Error rendering blog:', error);
    notFound();
  }
}

// Optional: Generate static params for static generation
export async function generateStaticParams() {
  try {
    await connectDB();
    const blogs = await Blog.find({ status: 'published' })
      .select('slug')
      .lean();
    
    return blogs.map((blog) => ({
     slug: (blog as unknown as IBlog).slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}
