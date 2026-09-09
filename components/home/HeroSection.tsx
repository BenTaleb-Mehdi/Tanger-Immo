'use client';

import React from 'react';
import SearchFilterCard from './SearchFilterCard';
import { Sparkles, Compass, ShieldCheck } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative min-h-[580px] sm:min-h-[640px] flex items-center justify-center pt-12 pb-16 px-4 sm:px-6 lg:px-8 bg-slate-900 overflow-hidden">
      {/* Background Image with dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity scale-105 transition-transform duration-1000"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=2000&q=80")',
        }}
      />

      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/70 to-slate-900/90 pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto text-center space-y-6 sm:space-y-8">
        {/* Tangier Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold tracking-wide animate-in fade-in slide-in-from-top-3 duration-500">
          <Sparkles className="h-3.5 w-3.5 text-brand-teal" />
          <span>L’Immobilier de Référence à Tanger, Maroc</span>
        </div>

        {/* Hero Title */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Trouvez votre bien d’exception <br className="hidden sm:inline" />
            sur la <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-200 to-white">Baie de Tanger</span>
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
            Appartements vue mer à Malabata, résidences d'époque à Marshan, penthouses à Iberia et villas exclusives au Royal Golf de Boubana.
          </p>
        </div>

        {/* Search & Combobox Filter Card */}
        <div className="pt-2">
          <SearchFilterCard />
        </div>

        {/* Badges / Guarantees below search */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 pt-4 text-xs text-slate-400 font-medium">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-brand-teal" />
            <span>Titres Fonciers 100% Vérifiés</span>
          </div>
          <div className="flex items-center gap-2">
            <Compass className="h-4 w-4 text-brand-teal" />
            <span>Accompagnement Notarié Complet</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>0% Commission Cachée</span>
          </div>
        </div>
      </div>
    </div>
  );
}
