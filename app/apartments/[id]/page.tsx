'use client';

import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  MapPin,
  Bed,
  Bath,
  Square,
  Building,
  CheckCircle2,
  Calendar,
  Phone,
  MessageCircle,
  Mail,
  ArrowLeft,
  ShieldCheck,
  Compass,
} from 'lucide-react';
import { APARTMENTS } from '@/data/apartments';
import PropertyImageSlider from '@/components/property/PropertyImageSlider';
import PropertySharePopover from '@/components/property/PropertySharePopover';
import ApartmentCard from '@/components/apartments/ApartmentCard';

interface PageProps {
  params: {
    id: string;
  };
}

export default function ApartmentDetailsPage({ params }: PageProps) {
  const apartment = APARTMENTS.find((a) => a.id === params.id);

  if (!apartment) {
    notFound();
  }

  // Format price in Moroccan Dirhams (MAD / DH)
  const formattedPrice = new Intl.NumberFormat('fr-MA', {
    maximumFractionDigits: 0,
  }).format(apartment.price);

  const priceDisplay =
    apartment.status === 'for-rent'
      ? `${formattedPrice} DH / mois`
      : `${formattedPrice} DH`;

  // Similar Tangier properties (excluding current)
  const similarProperties = APARTMENTS.filter((a) => a.id !== apartment.id).slice(0, 3);

  const agentWhatsAppUrl = `https://wa.me/${apartment.agent?.whatsapp || '212661234567'}?text=${encodeURIComponent(
    `Bonjour TangerImmo, je souhaite visiter ce bien à Tanger : ${apartment.title} (Réf: ${apartment.id})`
  )}`;

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20 pt-6 sm:pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Breadcrumb and Actions Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <Link
            href="/apartments"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-brand-navy transition"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Retour aux biens à Tanger</span>
          </Link>

          {/* Action buttons (Share popover with WhatsApp, Facebook, Insta, Copy link; NO HEART BUTTON) */}
          <div className="flex items-center gap-2">
            <PropertySharePopover
              title={apartment.title}
              buttonLabel="Partager ce bien"
              variant="outline"
            />
          </div>
        </div>

        {/* Title & Price Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span
                className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                  apartment.status === 'for-rent'
                    ? 'bg-emerald-100 text-emerald-800'
                    : 'bg-slate-900 text-white'
                }`}
              >
                {apartment.status === 'for-rent' ? 'À Louer' : 'À Vendre'}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-200/80 text-slate-700 capitalize">
                {apartment.type}
              </span>
              <div className="flex items-center gap-1 text-xs text-slate-500">
                <MapPin className="h-3.5 w-3.5 text-brand-navy" />
                <span className="font-semibold text-slate-800">{apartment.location.neighborhood}</span>
                <span>, Tanger</span>
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              {apartment.title}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 flex items-center gap-2">
              <span>{apartment.location.address}</span>
            </p>
          </div>

          {/* Price Box */}
          <div className="lg:text-right flex-shrink-0 bg-white lg:bg-transparent p-4 lg:p-0 rounded-2xl border lg:border-none border-slate-200">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              {apartment.status === 'for-rent' ? 'Loyer Mensuel' : 'Prix de Vente'}
            </div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-navy">
              {priceDisplay}
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">Frais d’agence inclus</div>
          </div>
        </div>

        {/* Image Slider Component (Slides for apartment photos) */}
        <div className="mb-10">
          <PropertyImageSlider images={apartment.images} title={apartment.title} />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-start">
          {/* Left 2 Columns: Description & Features */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Stats Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600">
                  <Bed className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Chambres</div>
                  <div className="text-base font-bold text-slate-800">
                    {apartment.features.bedrooms} pièces
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-teal-50 text-teal-600">
                  <Bath className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Salles de bain</div>
                  <div className="text-base font-bold text-slate-800">
                    {apartment.features.bathrooms} sdb
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-amber-50 text-amber-600">
                  <Square className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Superficie</div>
                  <div className="text-base font-bold text-slate-800">
                    {apartment.features.area} m²
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-50 text-purple-600">
                  <Building className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Étage</div>
                  <div className="text-base font-bold text-slate-800">
                    {apartment.features.floor ? `${apartment.features.floor}ème étage` : 'RDC'}
                  </div>
                </div>
              </div>
            </div>

            {/* Description Section */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span>Description du Bien</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed whitespace-pre-line">
                {apartment.description}
              </p>

              {/* Tangier Highlights */}
              <div className="mt-6 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                <Compass className="h-5 w-5 text-brand-navy flex-shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-slate-600">
                  <span className="font-bold text-slate-800">Atouts du quartier {apartment.location.neighborhood} : </span>
                  Emplacement d'exception à Tanger, proche des axes principaux, commerces, écoles et transports en commun (Gare TGV Tanger Ville et Corniche à proximité immédiate).
                </div>
              </div>
            </div>

            {/* Amenities & Equipments */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4">
                Équipements & Prestations
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {apartment.amenities.map((amenity, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Legal & Security Guarantee */}
            <div className="bg-emerald-50/60 rounded-3xl p-6 border border-emerald-200/60 flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-emerald-600 text-white flex-shrink-0">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                  Garantie Juridique TangerImmo
                </h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Toutes nos annonces sont préalablement vérifiées auprès de la Conservation Foncière du Royaume du Maroc (Titre Foncier, absence d’hypothèque, conformité du plan de cadastre). Accompagnement notarié de A à Z.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Agent Card */}
          <div className="space-y-6 sticky top-24">
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-lg">
              <h3 className="text-base font-bold text-slate-900 mb-4">
                Conseiller Dédié TangerImmo
              </h3>

              {/* Agent info */}
           

              {/* Action Buttons: WhatsApp & Call */}
              <div className="space-y-3 pt-5">
                <a
                  href={agentWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-md transition active:scale-98"
                >
                  <MessageCircle className="h-5 w-5 fill-current" />
                  <span>Discuter sur WhatsApp</span>
                </a>

                <a
                  href={`tel:${apartment.agent?.phone || '+212661234567'}`}
                  className="w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition active:scale-98"
                >
                  <Phone className="h-4 w-4" />
                  <span>Appeler le conseiller</span>
                </a>

                <PropertySharePopover
                  title={apartment.title}
                  buttonLabel="Partager cette annonce"
                  className="w-full"
                  variant="outline"
                />
              </div>

              {/* Direct Booking Information */}
              <div className="mt-5 pt-4 border-t border-slate-100 text-center">
                <p className="text-xs text-slate-400">
                  Visite gratuite 7j/7 sur rendez-vous à Tanger
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Properties in Tangier */}
        {similarProperties.length > 0 && (
          <div className="mt-16 pt-12 border-t border-slate-200">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Autres Biens Similaires à Tanger
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Découvrez nos autres opportunités exclusives sélectionnées pour vous
                </p>
              </div>
              <Link
                href="/apartments"
                className="text-xs sm:text-sm font-bold text-brand-navy hover:underline"
              >
                Voir tout le catalogue →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarProperties.map((item) => (
                <ApartmentCard key={item.id} apartment={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
