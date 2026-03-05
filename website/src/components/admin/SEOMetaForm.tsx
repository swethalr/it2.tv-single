'use client';

import React, { useState } from 'react';
import { ChevronDown, Globe, AlertCircle, Search, Zap, Info, TagIcon } from 'lucide-react';
import Input from '@/src/components/ui/Input';
import Textarea from '@/src/components/ui/Textarea';
import { SEOMetaTags } from '@/types';
import { getTextWidth } from '@/lib/seo-utils';
import Select from '@/src/components/ui/Select';

interface SEOMetaFormProps {
  seoMeta: SEOMetaTags;
  onChange: (seoMeta: SEOMetaTags) => void;
}

export default function SEOMetaForm({ seoMeta, onChange }: SEOMetaFormProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleChange = (field: keyof SEOMetaTags, value: string) => {
    onChange({ ...seoMeta, [field]: value });
  };

  const titleStats = {
    chars: (seoMeta.customTitle ?? '').length,
    px: Math.round(getTextWidth(seoMeta.customTitle ?? '', '18px Arial'))
  };

  const descStats = {
    chars: (seoMeta.description ?? '').length,
    px: Math.round(getTextWidth(seoMeta.description ?? '', '22px Arial'))
  };

  return (
    <div className="bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(79,70,229,0.04)] border border-indigo-50 overflow-hidden">
      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between px-8 py-6 bg-gradient-to-r from-white to-indigo-50/30"
      >
        <div className="flex items-center gap-4">
          <div className="p-3 bg-indigo-500 rounded-2xl text-white shadow-lg shadow-indigo-200">
            <Globe className="w-6 h-6" />
          </div>
          <div className="text-left">
            <h3 className="text-xl font-black text-slate-800 tracking-tight">Custom Meta Tags</h3>
            <p className="text-sm text-slate-500">Optimize your SEO by customizing meta tags for each blog post.</p>
          </div>
        </div>
        <ChevronDown className={`w-6 h-6 text-slate-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
      </button>

      {isExpanded && (
        <div className="p-8 lg:p-10 space-y-10 animate-in fade-in duration-500">
          
          {/* MANGOOLS STYLE TITLE ANALYSIS */}
          <div className="space-y-3">
            <div className="flex justify-between items-end px-1">
              <label className="text-sm font-bold text-slate-700">Custom Title</label>
              <span className="text-[11px] font-medium text-slate-400">
                {titleStats.chars} chars <span className={titleStats.px > 600 ? 'text-rose-500 font-bold' : ''}>({titleStats.px} / 600px)</span>
              </span>
            </div>
            <Input
              value={seoMeta.customTitle ?? ''}
              onChange={(e) => handleChange('customTitle', e.target.value)}
              className={`h-14 rounded-xl border-slate-200 focus:ring-4 focus:ring-indigo-50 ${titleStats.px > 600 ? 'border-rose-300 bg-rose-50/30' : ''}`}
              placeholder="Enter SEO title..."
            />
            {titleStats.px > 600 && (
              <div className="bg-rose-50 border border-rose-100 p-3 rounded-xl flex items-center gap-3 text-rose-600 text-xs font-semibold">
                <AlertCircle className="w-4 h-4" />
                The title is wider than 600px and it may not be displayed in full length.
              </div>
            )}
            
          </div>

          {/* DESCRIPTION ANALYSIS */}
          <div className="space-y-3">
            <div className="flex justify-between items-end px-1">
              <label className="text-sm font-bold text-slate-700">Description</label>
              <span className="text-[11px] font-medium text-slate-400">
                {descStats.chars} chars <span className={descStats.px > 960 ? 'text-rose-500 font-bold' : ''}>({descStats.px} / 960px)</span>
              </span>
            </div>
            <Textarea
            id="seo-meta-description"

              value={seoMeta.description ?? ''}
              onChange={(e) => handleChange('description', e.target.value)}
              rows={3}
              className="rounded-xl border-slate-200 bg-slate-50/30 focus:bg-white transition-all"
              placeholder="The meta description may get trimmed at ~960 pixels on desktop..."
            />
             {descStats.px > 960 && (
              <div className="bg-rose-50 border border-rose-100 p-3 rounded-xl flex items-center gap-3 text-rose-600 text-xs font-semibold">
                <AlertCircle className="w-4 h-4" />
                The description is wider than 960px and it may not be displayed in full length.
              </div>
            )}
          </div>

          {/* CRAWLER DIRECTIVES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 pt-8 border-t border-slate-100">
            <Input label="Keywords" value={seoMeta.keywords ?? ''} onChange={(e) => handleChange('keywords', e.target.value)}   />
            <Select id="seo-robots" label="Robots" value={seoMeta.robots ?? ''} onChange={(e) => handleChange('robots', e.target.value)} options={[
                      { value: 'all', label: 'All' },
                      { value: 'none', label: 'None' }
                    ]}className="rounded-xl"  />
            <Select id="seo-googlebot" label="Googlebot-Image" value={seoMeta.googlebotImage ?? ''} onChange={(e) => handleChange('googlebotImage', e.target.value)} options={[
                      { value: 'all', label: 'All' },
                      { value: 'none', label: 'None' }
                    ]} className="rounded-xl" />
            <Select  id="seo-revisit" label="Revisit After" value={seoMeta.revisitAfter ?? ''} onChange={(e) => handleChange('revisitAfter', e.target.value)} options ={[
              {value: '2 days', label: '2 Days'},
              {value: '5 days', label: '5 Days'},
              {value: '7 days', label:  '7 Days'},
              {value: '10 days', label: '10 Days'},
              {value: '14 days', label: '14 Days'},
              {value: '20 days', label: '20 Days'},
              {value: '30 days', label: '30 Days'},
               ]}
              className="rounded-xl" />
            <Input label="Author" value={seoMeta.author ?? ''} onChange={(e) => handleChange('author', e.target.value)} className="rounded-xl" />
            <Input label="Canonical URL" value={seoMeta.canonical ?? ''} onChange={(e) => handleChange('canonical', e.target.value)} className="rounded-xl" />
          </div>

          {/* OPEN GRAPH SECTION #7b08ff (PREMIUM PURPLE CARD) */}
          <div className="bg-white rounded-[2rem] p-3 lg:p-8  text-white space-y-8 shadow-2xl shadow-indigo-200">
            <div className="flex items-center gap-3">
              <TagIcon className="w-5 h-5 text-indigo-600" />
              <h4 className="text-sm font-black uppercase tracking-widest">Social Presence (OG)</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
              <div className="md:col-span-2 space-y-6">
              <Input label="OG:Locale" value={seoMeta.ogLocale ?? ''} onChange={(e) => handleChange('ogLocale', e.target.value)} className="bg-white border-indigo-400 text-slate-900 rounded-xl placeholder:text-indigo-300" />
              <Input label="OG:Type" value={seoMeta.ogType ?? ''} onChange={(e) => handleChange('ogType', e.target.value)} className="bg-white border-indigo-400 text-slate-900 rounded-xl" />
              
                <Input label="OG:Title" value={seoMeta.ogTitle ?? ''} onChange={(e) => handleChange('ogTitle', e.target.value)} className="bg-white border-indigo-400 text-slate-900 rounded-xl" />
                <Textarea  id="og-description-field" label="OG:Description"   value={seoMeta.ogDescription ?? ''} onChange={(e) => handleChange('ogDescription', e.target.value)} rows={2} className="bg-white border-indigo-400 text-slate-900 rounded-xl" />
              
              <Input label="OG:URL" value={seoMeta.ogUrl ?? ''} onChange={(e) => handleChange('ogUrl', e.target.value)} className="bg-white border-indigo-400 text-slate-900 rounded-xl" />
              <Input label="OG:Site Name" value={seoMeta.ogSiteName ?? ''} onChange={(e) => handleChange('ogSiteName', e.target.value)} className="bg-white border-indigo-400 text-slate-900 rounded-xl" />
            </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}