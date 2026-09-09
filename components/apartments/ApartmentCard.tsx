'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Bed, Bath, Square, MapPin } from 'lucide-react';
import { Apartment } from '@/data/types';
import PropertySharePopover from '@/components/property/PropertySharePopover';

interface ApartmentCardProps {
  apartment: Apartment;
}

export default function ApartmentCard({ apartment }: ApartmentCardProps) {
  // Format price in Moroccan Dirhams (MAD / DH)
  const formattedPrice = new Intl.NumberFormat('fr-MA', {
    maximumFractionDigits: 0,
  }).format(apartment.price);

  const priceDisplay =
    apartment.status === 'for-rent'
      ? `${formattedPrice} DH / mois`
      : `${formattedPrice} DH`;

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl sm:rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
      {/* Image Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
        <Link href={`/apartments/${apartment.id}`}>
          <Image
            src={apartment.images[0] || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80'}
            alt={apartment.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        {/* Status Badge */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 pointer-events-none">
          <span
            className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm ${
              apartment.status === 'for-rent'
                ? 'bg-emerald-600 text-white'
                : 'bg-brand-navy text-white'
            }`}
          >
            {apartment.status === 'for-rent' ? 'À Louer' : 'À Vendre'}
          </span>

          {apartment.featured && (
            <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-500 text-white shadow-sm">
              Coup de Cœur
            </span>
          )}
        </div>

        {/* Share Button (NO HEART BUTTON as requested) */}
        <div className="absolute top-3 right-3 z-10">
          <PropertySharePopover
            title={apartment.title}
            url={typeof window !== 'undefined' ? `${window.location.origin}/apartments/${apartment.id}` : undefined}
            variant="icon"
          />
        </div>

        {/* Price Tag Overlay on bottom of image */}
        <div className="absolute bottom-3 left-3 px-3.5 py-1.5 rounded-xl bg-black/75 backdrop-blur-md text-white shadow-sm pointer-events-none">
          <span className="text-sm sm:text-base font-extrabold tracking-tight">
            {priceDisplay}
          </span>
        </div>
      </div>

      {/* Details Container */}
      <div className="flex flex-col flex-1 p-4 sm:p-5">
        {/* Neighborhood / City */}
        <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1.5">
          <MapPin className="h-3.5 w-3.5 text-slate-400 flex-shrink-0" />
          <span className="font-semibold text-slate-700">{apartment.location.neighborhood}</span>
          <span>•</span>
          <span>{apartment.location.city}</span>
        </div>

        {/* Title */}
        <Link href={`/apartments/${apartment.id}`}>
          <h3 className="font-bold text-slate-900 text-base sm:text-lg line-clamp-1 group-hover:text-brand-navy transition">
            {apartment.title}
          </h3>
        </Link>

        <p className="mt-1 text-xs text-slate-500 line-clamp-2 leading-relaxed">
          {apartment.description}
        </p>

        {/* Features Row */}
        <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
          <div className="flex items-center gap-1.5" title="Chambres">
            <Bed className="h-4 w-4 text-slate-400" />
            <span className="font-semibold">{apartment.features.bedrooms}</span>
            <span className="text-slate-400">ch</span>
          </div>

          <div className="flex items-center gap-1.5" title="Salles de bain">
            <Bath className="h-4 w-4 text-slate-400" />
            <span className="font-semibold">{apartment.features.bathrooms}</span>
            <span className="text-slate-400">sdb</span>
          </div>

          <div className="flex items-center gap-1.5" title="Superficie">
            <Square className="h-4 w-4 text-slate-400" />
            <span className="font-semibold">{apartment.features.area}</span>
            <span className="text-slate-400">m²</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-4 pt-3 flex items-center gap-2">
          <Link
            href={`/apartments/${apartment.id}`}
            className="w-full text-center py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-brand-navy hover:text-white text-slate-700 text-xs sm:text-sm font-semibold transition duration-200 border border-slate-200/80 hover:border-brand-navy"
          >
            Voir les détails
          </Link>
        </div>
      </div>
    </div>
  );
}
