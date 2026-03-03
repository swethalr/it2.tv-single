import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import {
  FaRegUser,
  
  FaMagnifyingGlass,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa6';

// --- THEME IMPORTS ---
import { Footer } from '@/src/layout/footer/v2';
import { MainHeader } from '@/src/layout/header';
import { HeroSection } from '@/src/sections/hero/v3';
import { Container } from '@/src/components/container';
import { Button } from '@/src/components/button';

import { TextInput } from '@/src/components/inputs/text-input';


// --- DATABASE IMPORTS ---
import { connectDB } from '@/lib/database';
import Blog from '@/models/Blogs';
import { IBlog } from '@/types';



interface PageProps {
  params: { slug: string };
}

// 1. SEO METADATA
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  await connectDB();
  const blog = await Blog.findOne({
    slug: params.slug,
    status: 'published',
  }).lean();
  if (!blog) return { title: 'Not Found' };
  const typedBlog = blog as unknown as IBlog;
  return {
    title: `Techlab | ${typedBlog.seoMeta?.customTitle || typedBlog.title}`,
    description: typedBlog.seoMeta?.description || typedBlog.excerpt,
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
}





// 2. SIDEBAR DATA (Mock data for display)
const authorData = {
  image: { src: '/assets/images/aboutimage/zam.jpg', alt: 'Author' },
  name: 'Zammy Zaif',
  about:
    'Expert in IT Solutions and Google Ranking with years of experience in the tech industry.',
  socialLinks: [
    { icon: <FaFacebookF />, href: '#' },
    { icon: <FaTwitter />, href: '#' },
    { icon: <FaInstagram />, href: '#' },
  ],
};

const categories = [
  { label: 'General Construction', href: '#' },
  { label: 'Business Advice', href: '#' },
  { label: 'Stock Market', href: '#' },
  { label: 'IT Strategy', href: '#' },
];

const tags = ['All Project', 'Startup', 'Productsline', 'AI Tech', 'Future'];

// 3. MAIN PAGE COMPONENT
export default async function Page({ params }: PageProps) {
  await connectDB();
  const blog = await Blog.findOne({
    slug: params.slug,
    status: 'published',
  }).lean();

  if (!blog) notFound();
  
  // We use "as any" here to tell the computer: 
  // "Trust me, mainImage is in the database, don't worry about the rules."
  const typedBlog = blog as any; 

  return (
    <>
      <MainHeader version="2" />
      <HeroSection
        title={typedBlog.title}
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'Blog Details' },
        ]}
      />

      <section className="bg-white py-20 ">
        <Container>
          <div className="grid gap-[30px] lg:grid-cols-[1fr_410px]">
            <article>
              {/* Meta Info */}
              <div className="flex items-center gap-4 text-gray-600 mb-6">
                <time>
                  {new Date(typedBlog.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <span>•</span>
                <span className="flex items-center gap-2">
                  <FaRegUser className="text-primary" /> By {typedBlog.author}
                </span>
              </div>

              {/* --- THE IMAGE FIX --- 
              {typedBlog.mainImage && (
                <div className="mb-10 w-full overflow-hidden rounded-2xl shadow-lg border border-gray-200">
<img 
  src={typedBlog.mainImage} 
  alt={typedBlog.title}
  className="w-full h-auto object-cover rounded-2xl"
/>
        </div>
              )}*/}
              {/* --- THE IMAGE FIX --- */}
{typedBlog.mainImage && (
  <div className="relative mb-10 aspect-video w-full overflow-hidden rounded-2xl shadow-lg border border-gray-200">
    <Image 
      src={typedBlog.mainImage} 
      alt={typedBlog.title}
      fill
      priority
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
      className="object-cover" // This acts like 'background-size: cover'
    />
  </div>
)}

              {typedBlog.excerpt && (
                <p className="mt-4 text-xl leading-relaxed text-gray-600 mb-8">
                  {typedBlog.excerpt}
                </p>
              )}

              {/* Main Body Content */}
              <div
                className="prose prose-lg max-w-none text-[18px] text-slate-900 
                  md:prose-xl
                  prose-img:w-full 
                  prose-img:rounded-5"
                dangerouslySetInnerHTML={{ __html: typedBlog.content }}
              />

              <footer className="mt-12 border-t border-gray-200 pt-8">
                <div className="flex items-center justify-between">
                  <div className="text-gray-900">
                    Last updated: {new Date(typedBlog.updatedAt).toLocaleDateString()}
                  </div>
                  <a href="/blog" className="font-medium text-blue-600">
                    ← Back to all blogs
                  </a>
                </div>
              </footer>
            </article>

            {/* The Sidebar starts here (keep your existing sidebar code below this) */}

            {/* --- RIGHT SIDE: SIDEBAR --- */}
            <aside className="sticky top-24 grid gap-10 self-baseline max-md:mx-auto max-md:max-w-[410px]">
              {/* Author Widget */}
              <div className="space-y-5 rounded-5 bg-emerald-100/60 p-8 text-center ">
                <Image
                  src={authorData.image.src}
                  alt={authorData.name}
                  width={127}
                  height={127}
                  className="mx-auto rounded-full object-cover"
                />
                <h3 className="text-lg font-bold text-accent-900 ">
                  {authorData.name}
                </h3>
                <p className="p text-black">{authorData.about}</p>
                <div className="flex justify-center gap-4">
                  {authorData.socialLinks.map((s, i) => (
                    <a
                      key={i}
                      href={s.href}
                      className="text-lg text-accent-900  hover:text-primary "
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Search Widget */}
              <div className="space-y-5 rounded-5 bg-emerald-100/60 p-8 ">
                <h4 className="h4 font-bold text-black ">
                  Search
                </h4>
                <div className="flex">
                  <TextInput
                    placeholder="Search..."
                    className="rounded-r-none border-none bg-white "
                  />
                  <Button className="rounded-l-none !p-4">
                    <FaMagnifyingGlass />
                  </Button>
                </div>
              </div>

              {/* Categories Widget */}
              <div className="space-y-5 rounded-5 bg-emerald-100/60 p-8 ">
                <h4 className="h4 font-bold text-accent-900 ">
                  Category
                </h4>
                <ul className="grid gap-3">
                  {categories.map((cat, i) => (
                    <li
                      key={i}
                      className="p  flex items-center gap-2 border-b border-accent-200 pb-2 text-black last:border-0"
                    >
                      <span className="h-3 w-3 bg-primary"></span>
                      <a
                        href={cat.href}
                        className="transition-colors  hover:text-primary"
                      >
                        {cat.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags Widget */}
              <div className="space-y-5 rounded-5 bg-emerald-100/60 p-8 ">
                <h4 className="h4  font-bold text-accent-900 ">
                  Tags
                </h4>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, i) => (
                    <span
                      key={i}
                      className="p  cursor-pointer rounded-5 border border-primary px-3 py-1 text-black transition-all hover:bg-primary hover:text-white"
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
