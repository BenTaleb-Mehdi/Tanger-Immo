'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { MapPin, Home, Banknote, ArrowUpDown, Filter, Sparkles, Building2 } from 'lucide-react';
import { APARTMENTS } from '@/data/apartments';
import ApartmentCard from '@/components/apartments/ApartmentCard';
import CustomCombobox, { ComboboxOption } from '@/components/ui/CustomCombobox';
import { siteConfig } from '@/data/siteConfig';

function ApartmentsContent() {
  const searchParams = useSearchParams();

  const initialStatus = searchParams.get('status') || 'all';
  const initialNeighborhood = searchParams.get('neighborhood') || '';
  const initialType = searchParams.get('type') || '';
  const initialPrice = searchParams.get('price') || '';

  const [status, setStatus] = useState<string>(initialStatus);
  const [neighborhood, setNeighborhood] = useState<string>(initialNeighborhood);
  const [propertyType, setPropertyType] = useState<string>(initialType);
  const [priceRange, setPriceRange] = useState<string>(initialPrice);
  const [sortBy, setSortBy] = useState<string>('featured');

  // Filtered & Sorted Apartments
  const filteredApartments = useMemo(() => {
    return APARTMENTS.filter((apt) => {
      // Status filter
      if (status === 'for-sale' && apt.status !== 'for-sale') return false;
      if (status === 'for-rent' && apt.status !== 'for-rent') return false;

      // Neighborhood filter
      if (neighborhood && !apt.location.neighborhood.toLowerCase().includes(neighborhood.toLowerCase())) {
        return false;
      }

      // Property type
      if (propertyType && apt.type !== propertyType) {
        return false;
      }

      // Price range
      if (priceRange) {
        const [min, max] = priceRange.split('-').map(Number);
        if (min !== undefined && apt.price < min) return false;
        if (max !== undefined && apt.price > max) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'recent') return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [status, neighborhood, propertyType, priceRange, sortBy]);

  // Options for Comboboxes
  const neighborhoodOptions: ComboboxOption[] = siteConfig.tangerQuartiers.map((q) => ({
    value: q.value,
    label: q.name,
  }));

  const typeOptions: ComboboxOption[] = siteConfig.propertyTypes.map((t) => ({
    value: t.value,
    label: t.name,
  }));

  const priceOptions: ComboboxOption[] = (
    status === 'for-rent' ? siteConfig.priceRangesRent : siteConfig.priceRangesSale
  ).map((p) => ({
    value: p.value,
    label: p.name,
  }));

  const sortOptions: ComboboxOption[] = [
    { value: 'featured', label: 'Coup de cœur en premier' },
    { value: 'price-asc', label: 'Prix croissant (Moins cher)' },
    { value: 'price-desc', label: 'Prix décroissant (Plus cher)' },
    { value: 'recent', label: 'Dernières annonces publiées' },
  ];

  const resetFilters = () => {
    setStatus('all');
    setNeighborhood('');
    setPropertyType('');
    setPriceRange('');
    setSortBy('featured');
  };

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20 pt-8 sm:pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Title */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy/10 text-brand-navy text-xs font-bold uppercase tracking-wider mb-2">
            <Building2 className="h-3.5 w-3.5" />
            <span>Catalogue Immobilier Tanger</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Biens Immobiliers Disponibles à Tanger
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-slate-500">
            {filteredApartments.length} bien(s) d'exception vérifiés avec titre foncier et conformité
          </p>
        </div>

        {/* Filter Controls Bar with Comboboxes (NO NORMAL SELECT TAGS) */}
        <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-xs mb-8 space-y-4">
          {/* Status buttons */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setStatus('all')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                  status === 'all'
                    ? 'bg-brand-navy text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Tous les biens
              </button>

              <button
                type="button"
                onClick={() => setStatus('for-sale')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                  status === 'for-sale'
                    ? 'bg-brand-navy text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                À Vendre
              </button>

              <button
                type="button"
                onClick={() => setStatus('for-rent')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                  status === 'for-rent'
                    ? 'bg-brand-navy text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                À Louer
              </button>
            </div>

            {(neighborhood || propertyType || priceRange || status !== 'all') && (
              <button
                type="button"
                onClick={resetFilters}
                className="text-xs font-bold text-red-500 hover:text-red-700 transition"
              >
                Réinitialiser les filtres
              </button>
            )}
          </div>

          {/* Combobox Dropdowns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <CustomCombobox
              label="Quartier à Tanger"
              placeholder="Tous les quartiers"
              options={neighborhoodOptions}
              value={neighborhood}
              onChange={setNeighborhood}
              icon={<MapPin className="h-4 w-4 text-slate-400" />}
            />

            <CustomCombobox
              label="Type de bien"
              placeholder="Tous les types"
              options={typeOptions}
              value={propertyType}
              onChange={setPropertyType}
              icon={<Home className="h-4 w-4 text-slate-400" />}
            />

            <CustomCombobox
              label="Budget (DH)"
              placeholder="Tous les prix"
              options={priceOptions}
              value={priceRange}
              onChange={setPriceRange}
              icon={<Banknote className="h-4 w-4 text-slate-400" />}
            />

            <CustomCombobox
              label="Trier les résultats"
              placeholder="Tri par défaut"
              options={sortOptions}
              value={sortBy}
              onChange={setSortBy}
              icon={<ArrowUpDown className="h-4 w-4 text-slate-400" />}
            />
          </div>
        </div>

        {/* Listings Grid */}
        {filteredApartments.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200/80 my-8">
            <div className="w-16 h-16 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-4">
              <Filter className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Aucun bien ne correspond à vos critères actuels
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-md mx-auto">
              Essayez d'élargir votre sélection de quartier à Tanger ou de modifier la tranche de budget.
            </p>
            <button
              onClick={resetFilters}
              className="mt-5 px-5 py-2.5 rounded-xl bg-brand-navy text-white text-xs font-bold hover:bg-slate-800 transition"
            >
              Afficher toutes les annonces
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredApartments.map((apartment) => (
              <ApartmentCard key={apartment.id} apartment={apartment} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function ApartmentsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-50/50 pb-20 pt-8 sm:pt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="animate-pulse space-y-6">
              <div className="h-8 bg-slate-200 rounded-lg w-1/3" />
              <div className="h-4 bg-slate-200 rounded-lg w-1/4" />
              <div className="h-24 bg-white rounded-3xl border border-slate-200/80" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="h-80 bg-slate-200 rounded-3xl" />
                ))}
              </div>
            </div>
          </div>
        </div>
      }
    >
      <ApartmentsContent />
    </Suspense>
  );
}
