'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HeroSection from '@/components/home/HeroSection';
import ApartmentCard from '@/components/apartments/ApartmentCard';
import { APARTMENTS, BLOG_POSTS } from '@/data/apartments';
import {
  ShieldCheck,
  Building2,
  MapPin,
  ArrowRight,
  Sparkles,
  Award,
  CheckCircle2,
  Clock,
  Compass,
  Star,
  Users,
} from 'lucide-react';

const TANGER_NEIGHBORHOODS = [
  {
    name: 'Malabata',
    tagline: 'Front de mer & Marina Bay',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    count: '24 biens',
    href: '/apartments?neighborhood=Malabata',
  },
  {
    name: 'Iberia',
    tagline: 'Prestige & Écoles Internationales',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    count: '18 biens',
    href: '/apartments?neighborhood=Iberia',
  },
  {
    name: 'Marshan',
    tagline: 'Histoire, Charme & Vue Détroit',
    image: 'https://images.unsplash.com/photo-1502005229762-ee1b2b8ab98f?auto=format&fit=crop&w=800&q=80',
    count: '12 biens',
    href: '/apartments?neighborhood=Marshan',
  },
  {
    name: 'Tanja Balia',
    tagline: 'Résidentiel moderne & Calme',
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80',
    count: '31 biens',
    href: '/apartments?neighborhood=Tanja%20Balia',
  },
  {
    name: 'Boubana',
    tagline: 'Royal Golf & Villas d’Exception',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80',
    count: '9 biens',
    href: '/apartments?neighborhood=Boubana',
  },
  {
    name: 'Centre-Ville',
    tagline: 'Boulevard Pasteur & Dynamisme',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
    count: '27 biens',
    href: '/apartments?neighborhood=Centre-Ville',
  },
];

const TANGER_TESTIMONIALS = [
  {
    name: 'Karim Tazi',
    role: 'Acquéreur à Malabata (MRE France)',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    quote: 'Résidant à Paris, j’avais besoin d’une agence de confiance pour acheter un appartement vue mer à Malabata. TangerImmo a géré la vérification du titre foncier et la signature chez le notaire avec une transparence exemplaire.',
    rating: 5,
  },
  {
    name: 'Nadia El Fassi',
    role: 'Propriétaire à Iberia',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    quote: 'Nous avons trouvé notre duplex à Iberia en moins de deux semaines. Des conseillers qui connaissent parfaitement le marché immobilier tangérois et sans aucune mauvaise surprise sur les frais.',
    rating: 5,
  },
  {
    name: 'Marc Duprès',
    role: 'Investisseur Expatrié à Tanger',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    quote: 'Le rendement locatif sur Tanger est exceptionnel grâce à la proximité de l’Europe et au TGV. L’équipe m’a orienté vers le bon quartier pour maximiser ma rentabilité.',
    rating: 5,
  },
];

export default function HomePage() {
  const [filterStatus, setFilterStatus] = useState<'all' | 'for-sale' | 'for-rent'>('all');

  const displayedApartments = APARTMENTS.filter((apt) => {
    if (filterStatus === 'all') return true;
    return apt.status === filterStatus;
  }).slice(0, 6);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50/40">
      {/* 1. Hero Section with Moroccan Tanger Branding & Custom Comboboxes */}
      <HeroSection />

      {/* 2. Key Tangier Stats Banner */}
      <section className="bg-white border-y border-slate-200/80 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-3">
              <div className="text-2xl sm:text-3xl font-black text-brand-navy">150+</div>
              <div className="text-xs sm:text-sm text-slate-500 mt-1">Biens Exclusifs à Tanger</div>
            </div>
            <div className="p-3 border-l border-slate-100">
              <div className="text-2xl sm:text-3xl font-black text-brand-navy">100%</div>
              <div className="text-xs sm:text-sm text-slate-500 mt-1">Titres Fonciers Vérifiés</div>
            </div>
            <div className="p-3 border-l border-slate-100">
              <div className="text-2xl sm:text-3xl font-black text-brand-navy">9 Quartiers</div>
              <div className="text-xs sm:text-sm text-slate-500 mt-1">Prisés du Grand Tanger</div>
            </div>
            <div className="p-3 border-l border-slate-100">
              <div className="text-2xl sm:text-3xl font-black text-emerald-600">+1 200</div>
              <div className="text-xs sm:text-sm text-slate-500 mt-1">Clients Satisfaits au Maroc</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Properties in Tangier */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-navy/10 text-brand-navy text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Sélection Exclusive</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                Biens en Vedette à Tanger
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Appartements, penthouses et villas sélectionnés par nos experts locaux
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 bg-white p-1 rounded-2xl border border-slate-200 shadow-xs">
              <button
                type="button"
                onClick={() => setFilterStatus('all')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
                  filterStatus === 'all'
                    ? 'bg-brand-navy text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Tous
              </button>
              <button
                type="button"
                onClick={() => setFilterStatus('for-sale')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
                  filterStatus === 'for-sale'
                    ? 'bg-brand-navy text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                À Vendre
              </button>
              <button
                type="button"
                onClick={() => setFilterStatus('for-rent')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
                  filterStatus === 'for-rent'
                    ? 'bg-brand-navy text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                À Louer
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {displayedApartments.map((apartment) => (
              <ApartmentCard key={apartment.id} apartment={apartment} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/apartments"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-brand-navy hover:bg-slate-800 text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition active:scale-98"
            >
              <span>Voir toutes les offres à Tanger</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Explore Tangier Neighborhoods */}
      <section className="py-14 sm:py-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-teal/10 text-brand-navy text-xs font-bold uppercase tracking-wider mb-2">
              <Compass className="h-3.5 w-3.5" />
              <span>Géographie & Cadre de Vie</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Explorez les Plus Beaux Quartiers de Tanger
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Chaque quartier de Tanger a sa personnalité unique, de la vue panoramique de Malabata au charme historique de Marshan.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TANGER_NEIGHBORHOODS.map((neighborhood) => (
              <Link
                key={neighborhood.name}
                href={neighborhood.href}
                className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-slate-900 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <Image
                  src={neighborhood.image}
                  alt={neighborhood.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition duration-700 opacity-80 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-teal-200 transition">
                      {neighborhood.name}
                    </h3>
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md">
                      {neighborhood.count}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 font-medium">
                    {neighborhood.tagline}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why TangerImmo (Morocco Guarantees) */}
      <section className="py-16 sm:py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-brand-teal text-xs font-bold uppercase tracking-wider">
              Votre Sécurité d'Abord
            </span>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
              Pourquoi Faire Confiance à TangerImmo ?
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Une expertise pointue du marché immobilier tangérois et un accompagnement juridique strict conforme aux normes du Royaume du Maroc.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-brand-teal/50 transition">
              <div className="w-12 h-12 rounded-2xl bg-brand-teal/20 text-brand-teal flex items-center justify-center mb-5">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">Audit Foncier Systématique</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Vérification rigoureuse auprès de la Conservation Foncière de Tanger : titre foncier, plan cadastral, certificat de propriété et absence d’hypothèque.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-brand-teal/50 transition">
              <div className="w-12 h-12 rounded-2xl bg-brand-teal/20 text-brand-teal flex items-center justify-center mb-5">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">Accompagnement Notarié</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Partenariats avec des études notariales réputées à Tanger pour encadrer vos compromis de vente et actes authentiques en toute sérénité.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-brand-teal/50 transition">
              <div className="w-12 h-12 rounded-2xl bg-brand-teal/20 text-brand-teal flex items-center justify-center mb-5">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">Service MRE & Internationaux</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Visites virtuelles en direct sur WhatsApp, procurations notariées à distance et gestion locative clé en main pour nos clients résidents à l’étranger.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Blog & Guides Section */}
      <section className="py-16 sm:py-20 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-brand-navy text-xs font-bold uppercase tracking-wider">
                Conseils d'Experts
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
                Le Blog Immobilier de Tanger
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Tout ce que vous devez savoir avant d'acheter, louer ou investir à Tanger
              </p>
            </div>

            <Link
              href="/blog"
              className="text-xs sm:text-sm font-bold text-brand-navy hover:underline flex items-center gap-1"
            >
              <span>Tous les articles</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl transition duration-300"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white text-[11px] font-semibold">
                    {post.category}
                  </div>
                </div>

                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="text-xs text-slate-400 mb-2 flex items-center gap-2">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{post.readTime} de lecture</span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-navy transition line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium">{post.author.name}</span>
                    <span className="font-bold text-brand-navy group-hover:translate-x-1 transition-transform">
                      Lire le guide →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Client Testimonials */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-brand-navy text-xs font-bold uppercase tracking-wider">
              Avis Clients
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Ils Ont Concrétisé Leur Projet à Tanger
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {TANGER_TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-slate-50/70 border border-slate-200/80 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3 mt-6 pt-5 border-t border-slate-200/60">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border border-slate-200"
                  />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">{t.name}</h4>
                    <p className="text-[11px] text-slate-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
