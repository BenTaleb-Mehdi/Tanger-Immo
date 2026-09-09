'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Share2,
  Tag,
  BookOpen,
  ArrowRight,
  MapPin,
  CheckCircle2,
} from 'lucide-react';
import { BLOG_POSTS } from '@/data/apartments';
import PropertySharePopover from '@/components/property/PropertySharePopover';

interface BlogDetailPageProps {
  params: {
    slug: string;
  };
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  // Related posts excluding current
  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug);

  return (
    <article className="min-h-screen bg-slate-50/40 pb-20 pt-8 sm:pt-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation & Category Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-brand-navy transition"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Retour aux articles du blog</span>
          </Link>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-navy/10 text-brand-navy">
              {post.category}
            </span>

            {/* Share Popover */}
            <PropertySharePopover
              title={post.title}
              buttonLabel="Partager"
              variant="outline"
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
          {post.title}
        </h1>

        {/* Excerpt Lead */}
        <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed mb-6">
          {post.excerpt}
        </p>

        {/* Author & Meta Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-slate-200 mb-8 text-xs sm:text-sm text-slate-500">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full overflow-hidden relative bg-slate-200 border border-slate-300 flex-shrink-0">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="font-bold text-slate-800">{post.author.name}</div>
              <div className="text-xs text-slate-400">{post.author.role}</div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-slate-400" />
              {post.publishedAt}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-slate-400" />
              {post.readTime} de lecture
            </span>
          </div>
        </div>

        {/* Hero Cover Image */}
        <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-lg mb-10 bg-slate-900">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 900px"
            className="object-cover"
          />
        </div>

        {/* Table of Contents / Sommaire Rapide */}
        <div className="mb-10 p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="h-5 w-5 text-brand-navy" />
            <h3 className="font-bold text-slate-900 text-sm sm:text-base">
              Sommaire de ce guide :
            </h3>
          </div>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-600 list-disc list-inside">
            <li>Panorama des prix au mètre carré à Tanger par quartier</li>
            <li>Les étapes juridiques incontournables au Maroc (Titre Foncier & Notaire)</li>
            <li>Rendement locatif et attractivité touristique à Tanger</li>
            <li>Conseils pour négocier et sécuriser votre investissement</li>
          </ul>
        </div>

        {/* Article Body Content */}
        <div className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600">
          {post.content.split('\n\n').map((paragraph, index) => {
            const trimmed = paragraph.trim();
            if (!trimmed) return null;

            // Heading 3
            if (trimmed.startsWith('### ')) {
              return (
                <h2
                  key={index}
                  className="text-xl sm:text-2xl font-black text-slate-900 mt-10 mb-4 pb-2 border-b border-slate-100"
                >
                  {trimmed.replace('### ', '')}
                </h2>
              );
            }

            // List items
            if (trimmed.startsWith('- ') || trimmed.startsWith('1. ')) {
              const lines = trimmed.split('\n');
              return (
                <ul key={index} className="my-4 space-y-2.5 bg-white p-5 rounded-2xl border border-slate-100 shadow-xs">
                  {lines.map((line, lIdx) => (
                    <li key={lIdx} className="text-xs sm:text-sm text-slate-700 leading-relaxed list-none flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{line.replace(/^[-\d.]\s*/, '')}</span>
                    </li>
                  ))}
                </ul>
              );
            }

            return (
              <p key={index} className="text-sm sm:text-base text-slate-700 leading-relaxed my-4">
                {trimmed}
              </p>
            );
          })}
        </div>

        {/* Highlight Advice Callout for Morocco / Tangier */}
        <div className="my-10 p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-blue-600 text-white flex-shrink-0">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                Vous prévoyez d’acquérir un bien à Tanger ?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                Nos conseillers locaux vous accompagnent de la sélection du bien jusqu'à la signature de l'acte authentique chez le notaire. Bénéficiez d'une estimation gratuite et d'un audit juridique sans engagement.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-navy text-white text-xs font-bold hover:bg-slate-800 transition"
                >
                  Contacter un expert Tanger
                </Link>
                <a
                  href="https://wa.me/212661234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#25D366] text-white text-xs font-bold hover:bg-[#20bd5a] transition"
                >
                  WhatsApp Direct
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2 py-6 border-t border-slate-200">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
            <Tag className="h-3.5 w-3.5" /> Mots-clés :
          </span>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700 hover:bg-slate-200 transition"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Share Section at bottom */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-wrap items-center justify-between gap-4 mb-14">
          <div>
            <h4 className="font-bold text-slate-900 text-sm">
              Cet article vous a été utile ?
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Partagez ce guide avec vos proches ou sur vos réseaux
            </p>
          </div>
          <PropertySharePopover
            title={post.title}
            buttonLabel="Partager ce guide"
            variant="solid"
          />
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <div className="border-t border-slate-200 pt-10">
            <h3 className="text-xl font-bold text-slate-900 mb-6">
              Articles recommandés sur l’immobilier à Tanger
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((rPost) => (
                <Link
                  key={rPost.id}
                  href={`/blog/${rPost.slug}`}
                  className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-md transition"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={rPost.coverImage}
                      alt={rPost.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover group-hover:scale-105 transition duration-300"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white text-[11px] font-semibold">
                      {rPost.category}
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="text-xs text-slate-400 mb-1">{rPost.readTime} de lecture</div>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base group-hover:text-brand-navy transition line-clamp-2">
                      {rPost.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-2 line-clamp-2">
                      {rPost.excerpt}
                    </p>
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-xs font-bold text-brand-navy">
                      <span>Lire l’article</span>
                      <ArrowRight className="h-3.5 w-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
