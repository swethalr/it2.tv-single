'use client';

import React, { useState, useMemo } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import RichTextEditor from '@/components/ui/RichTextEditor';
import SEOMetaForm from '@/components/admin/SEOMetaForm';
import { BlogFormData } from '@/types';
import { getTextWidth } from '@/lib/seo-utils';
import { PenTool, Hash, CheckCircle2, XCircle, Sparkles } from 'lucide-react';

export default function BlogCreatePage() {
  const [formData, setFormData] = useState<BlogFormData>({
    title: '',
    slug: '',
    content: '',
    excerpt: '',
    status: 'draft',
    mainImage: '',
    seoMeta: {},
  });

  const [uploading, setUploading] = useState(false);
const [realServerPath, setRealServerPath] = useState('');
  const seoAnalysis = useMemo(() => {
    const titleText = formData.seoMeta?.customTitle || formData.title || '';
    return {
      titlePx: getTextWidth(titleText, '18px Arial'),
      slugLen: (formData.slug ?? '').length,
    };
  }, [formData.title, formData.slug, formData.seoMeta?.customTitle]);

  const handleChange = (field: keyof BlogFormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
const handleMainImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (!file) return;

  setUploading(true);

  // 1. GENERATE LOCAL PREVIEW
  // This is a local "blob" URL. It works 100% of the time instantly.
  const localPreviewUrl = URL.createObjectURL(file);
  
  // Update the UI immediately so you see the image
  setFormData((prev) => ({ ...prev, mainImage: localPreviewUrl }));

  const data = new FormData();
  data.append('file', file);

  try {
    const res = await fetch('/api/admin/upload', { method: 'POST', body: data });
    const result = await res.json();

    if (result.url) {
      // 2. STORE THE SERVER PATH WITHOUT SHOWING IT YET
      // We save the /upload/... path to a separate variable so it's ready 
      // for the database, but we DON'T update the <img> tag with it yet 
      // to avoid the 404.
      setRealServerPath(result.url); 
      
      console.log("File saved to disk at:", result.url);
    }
  } catch (error) {
    console.error("Upload failed");
  } finally {
    setUploading(false);
  }
};
 
// Inside your BlogCreatePage component, update the handleSave function:

const handleSave = async (status: 'draft' | 'published') => {
  // 1. Validation
  if (!formData.title) return alert("Title is required");
  
  // CRITICAL FIX: Ensure we are not saving a temporary 'blob:' URL
  const finalImagePath = realServerPath; 

  if (!finalImagePath) {
    return alert("The image is still uploading or failed. Please wait a moment.");
  }

  // 2. Prepare the payload with the ACTUAL server path
  const payload = {
    ...formData,
    mainImage: finalImagePath, // This will be /upload/filename.webp
    status,
  };

  try {
    const res = await fetch('/api/admin/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      alert(`Post ${status} successfully!`);
      // Optional: Clear the state or redirect
    }
  } catch (error) {
    alert("Network error. Check your connection.");
  }
};

  return (
    <AdminLayout>
      <div className="min-h-screen bg-[#F8FAFF]">
        {/* STICKY HEADER */}
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-indigo-50 lg:px-8 py-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center lg:gap-3 gap-1">
              <div className="bg-indigo-600  p-2 rounded-xl text-white shadow-lg shadow-indigo-100">
                <PenTool className="lg:w-5  lg:h-5 w-4 h-4" />
              </div>
              <h1 className="h1 font-black text-slate-800">Blog Writer</h1>
            </div>
            <div className="flex gap-3">
              <Button variant="secondary"  onClick={() => handleSave('draft')}  className="rounded-xl border-slate-200">Save Draft</Button>
              <Button   onClick={() => handleSave('published')} className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-xl shadow-indigo-100">Publish Post</Button>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* CONTENT EDITOR */}
            <div className="lg:col-span-8 space-y-12">
              <div className="bg-white rounded-[2.5rem] lg:p-10 shadow-sm border border-slate-100">
                <input
                  value={formData.title}
                  onChange={(e) => handleChange('title', e.target.value)}
                  className="w-full text-3xl font-bold border border-indigo-400 focus:ring-0 placeholder:text-slate-400 p-2 mb-8"
                  placeholder="Enter Headline......."
                />
                <RichTextEditor value={formData.content} onChange={(v) => handleChange('content', v)} />
              </div>
              <SEOMetaForm 
                seoMeta={formData.seoMeta || {}} 
                onChange={(s) => handleChange('seoMeta', s)} 
              />
            </div>
            {/* ANALYTICS SIDEBAR */}
            <aside className="lg:col-span-4 space-y-8 sticky top-20 self-start">
              <div className="bg-white rounded-[2rem] p-8 border-2 border-indigo-500 shadow-sm space-y-8">
                <div className="space-y-4">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <Hash className="w-4 h-4" /> URL Slug
                  </label>
                  <Input 
                    value={formData.slug} 
                    onChange={(e) => handleChange('slug', e.target.value)} 
                    className="rounded-xl bg-slate-50 border-indigo-400 h-12" 
                  />
                </div>

                <div className="pt-6 border-t border-slate-50">
                  <Select
                    label="Publication Visibility"
                    value={formData.status}
                    onChange={(e) => handleChange('status', e.target.value as any)}
                    /* FIXED: Passing required options prop */
                    options={[
                      { value: 'draft', label: 'Save as Draft' },
                      { value: 'published', label: 'Public Post' }
                    ]}
                    className="rounded-xl bg-slate-50 border-none"
                  />
                </div> 
              </div>



            {/*  <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm space-y-4 mb-8">
  <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
     Featured Main Image
  </label>
  
  <div className="relative aspect-video rounded-2xl bg-slate-50 border-2 border-dashed border-slate-200 overflow-hidden flex flex-col items-center justify-center hover:border-[#3cb878] transition-all">
    {formData.mainImage ? (
     <img src={formData.mainImage} alt="Preview" />
    ) : (
      <div className="text-center p-4">
        <p className="text-xs text-slate-400">Click to upload main picture</p>
      </div>
    )}
    <input 
      type="file" 
      className="absolute inset-0 opacity-0 cursor-pointer" 
      onChange={handleMainImageUpload} 
      accept="image/*" 
    />
  </div>
  {uploading && <p className="text-xs text-[#3cb878] text-center animate-pulse font-bold">Uploading...</p>}
</div>*/}

           {/* ... other sidebar code ... */}

<div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm space-y-4 mb-8">
  <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
    Featured Main Image
  </label>
  
  {/* REPLACE YOUR OLD DIV WITH THIS ONE */}
  <div className="relative aspect-video rounded-2xl bg-slate-50 border-2 border-dashed border-slate-200 overflow-hidden flex flex-col items-center justify-center hover:border-[#3cb878] transition-all">
    {formData.mainImage ? (
      <img 
        src={formData.mainImage} 
        alt="Preview" 
        className="w-full h-full object-cover"
      />
    ) : (
      <div className="text-center p-4">
        <p className="text-xs text-slate-400">Click to upload main picture</p>
      </div>
    )}
    <input 
      type="file" 
      className="absolute inset-0 opacity-0 cursor-pointer" 
      onChange={handleMainImageUpload} 
      accept="image/*" 
    />
  </div>

  {uploading && <p className="text-xs text-[#3cb878] text-center animate-pulse font-bold">Uploading...</p>}
  
  {/* Optional: Show success checkmark if the server confirmed the save */}
  {realServerPath && !uploading && (
    <p className="text-[10px] text-emerald-600 text-center font-medium">✓ Synced to server</p>
  )}
</div>

{/* ... rest of the sidebar ... */}

              {/* SEO READINESS CARD bg-[#7b08ff] */}
              <div className="p-8 rounded-[2rem] bg-indigo-600 text-white shadow-2xl shadow-indigo-200 relative overflow-hidden group">
                <div className="absolute -right-4 -top-4 opacity-10 group-hover:scale-110 transition-transform duration-700">
                  <CheckCircle2 className="w-32 h-32" />
                </div>
                <h4 className="text-lg font-bold mb-6 flex items-center gap-2 relative z-10">
                  <Sparkles className="w-5 h-5 text-indigo-300" /> SEO Readiness
                </h4>
                <div className="space-y-5 relative z-10">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-indigo-100">Title Width</span>
                    {seoAnalysis.titlePx <= 600 ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <XCircle className="w-4 h-4 text-rose-400" />}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-indigo-100">Slug Length</span>
                    {seoAnalysis.slugLen <= 50 ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <XCircle className="w-4 h-4 text-rose-400" />}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </AdminLayout>
  );
}


























