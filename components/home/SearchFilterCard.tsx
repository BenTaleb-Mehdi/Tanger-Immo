'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MapPin, Home, Banknote, Search, Sparkles } from 'lucide-react';
import CustomCombobox, { ComboboxOption } from '@/components/ui/CustomCombobox';
import { siteConfig } from '@/data/siteConfig';

export default function SearchFilterCard() {
  const router = useRouter();
  const [status, setStatus] = useState<'all' | 'for-sale' | 'for-rent'>('all');
  const [selectedNeighborhood, setSelectedNeighborhood] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');

  // Quartiers options
  const neighborhoodOptions: ComboboxOption[] = siteConfig.tangerQuartiers.map((q) => ({
    value: q.value,
    label: q.name,
  }));

  // Type options
  const typeOptions: ComboboxOption[] = siteConfig.propertyTypes.map((t) => ({
    value: t.value,
    label: t.name,
  }));

  // Price range options based on sale vs rent
  const priceOptions: ComboboxOption[] = (
    status === 'for-rent' ? siteConfig.priceRangesRent : siteConfig.priceRangesSale
  ).map((p) => ({
    value: p.value,
    label: p.name,
  }));

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (status !== 'all') params.set('status', status);
    if (selectedNeighborhood) params.set('neighborhood', selectedNeighborhood);
    if (selectedType) params.set('type', selectedType);
    if (selectedPriceRange) params.set('price', selectedPriceRange);

    router.push(`/apartments?${params.toString()}`);
  };

  return (
    <div className="w-full max-w-5xl mx-auto rounded-3xl bg-white/95 backdrop-blur-xl p-4 sm:p-6 lg:p-7 shadow-2xl border border-white/50">
      {/* Top Status Tabs */}
      <div className="flex items-center gap-2 mb-5">
        <button
          type="button"
          onClick={() => setStatus('all')}
          className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
            status === 'all'
              ? 'bg-brand-navy text-white shadow-md'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          Tous les Biens
        </button>

        <button
          type="button"
          onClick={() => setStatus('for-sale')}
          className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
            status === 'for-sale'
              ? 'bg-brand-navy text-white shadow-md'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          Acheter à Tanger
        </button>

        <button
          type="button"
          onClick={() => setStatus('for-rent')}
          className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
            status === 'for-rent'
              ? 'bg-brand-navy text-white shadow-md'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          Louer à Tanger
        </button>
      </div>

      {/* Form with Modern Comboboxes (NO NORMAL SELECT TAGS) */}
      <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 items-end">
        {/* Combobox 1: Quartier */}
        <CustomCombobox
          label="Quartier à Tanger"
          placeholder="Tous les quartiers"
          options={neighborhoodOptions}
          value={selectedNeighborhood}
          onChange={setSelectedNeighborhood}
          icon={<MapPin className="h-4 w-4 text-slate-400" />}
        />

        {/* Combobox 2: Type de bien */}
        <CustomCombobox
          label="Type de propriété"
          placeholder="Tous les types"
          options={typeOptions}
          value={selectedType}
          onChange={setSelectedType}
          icon={<Home className="h-4 w-4 text-slate-400" />}
        />

        {/* Combobox 3: Budget en Dirhams */}
        <CustomCombobox
          label={status === 'for-rent' ? 'Loyer mensuel (DH)' : 'Budget d’achat (DH)'}
          placeholder="Tous les budgets"
          options={priceOptions}
          value={selectedPriceRange}
          onChange={setSelectedPriceRange}
          icon={<Banknote className="h-4 w-4 text-slate-400" />}
        />

        {/* Search Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-brand-navy hover:bg-slate-800 text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-200 active:scale-98 h-[46px]"
          >
            <Search className="h-4 w-4" />
            <span>Rechercher</span>
          </button>
        </div>
      </form>

      {/* Quick Tangier suggestions tags */}
      <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs text-slate-500">
        <span className="flex items-center gap-1 font-semibold text-slate-700">
          <Sparkles className="h-3.5 w-3.5 text-amber-500" />
          Populaire à Tanger :
        </span>
        {['Malabata Vue Mer', 'Iberia Standing', 'Boulevard Pasteur', 'Tanja Balia', 'Cap Spartel'].map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => {
              const q = tag.split(' ')[0];
              setSelectedNeighborhood(q);
            }}
            className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-medium transition"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}
