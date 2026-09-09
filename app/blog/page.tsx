'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight, Sparkles, BookOpen } from 'lucide-react';
import { BLOG_POSTS } from '@/data/apartments';

export default function BlogIndexPage() {
  const [featuredPost, ...otherPosts] = BLOG_POSTS;

  return (
    <div className="min-h-screen bg-slate-50/40 pb-20 pt-10 sm:pt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-navy/10 text-brand-navy text-xs font-bold uppercase tracking-wider mb-3">
            <BookOpen className="h-3.5 w-3.5" />
            <span>Actualités & Conseils Immobiliers</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Le Blog Immobilier de Tanger
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Guides d'achat, analyse des prix au mètre carré, conseils juridiques notariés et tendances du marché immobilier à Tanger et dans le Nord du Maroc.
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-14">
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-6 bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[16/10] lg:aspect-auto lg:col-span-7 overflow-hidden bg-slate-900 min-h-[300px]">
                <Image
                  src={featuredPost.coverImage}
                  alt={featuredPost.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-brand-navy text-white text-xs font-bold">
                  À la Une
                </div>
              </div>

              <div className="p-6 sm:p-8 lg:p-10 lg:col-span-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                    <span className="font-bold text-brand-navy">{featuredPost.category}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 group-hover:text-brand-navy transition leading-snug">
                    {featuredPost.title}
                  </h2>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={featuredPost.author.avatar}
                      alt={featuredPost.author.name}
                      className="w-10 h-10 rounded-full object-cover border border-slate-200"
                    />
                    <div>
                      <div className="text-xs font-bold text-slate-800">{featuredPost.author.name}</div>
                      <div className="text-[11px] text-slate-400">{featuredPost.publishedAt}</div>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-navy group-hover:translate-x-1 transition-transform">
                    <span>Lire le guide</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Other Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white text-xs font-semibold">
                  {post.category}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-slate-400 mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {post.publishedAt}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-brand-navy transition line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="mt-2 text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500">{post.author.name}</span>
                  <span className="font-bold text-brand-navy flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Lire →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
