'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, ArrowRight, Compass, Building, Sparkles } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

const NEIGHBORHOOD_GUIDES = [
  {
    name: 'Malabata & Corniche',
    slug: 'Malabata',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    description: 'Le quartier le plus emblématique du front de mer de Tanger. Résidences de grand standing avec vue imprenable sur la baie, à 2 minutes de la gare TGV Tanger Ville et de la Marina Bay.',
    pricePerM2: '18 000 - 28 000 DH / m²',
    ambiance: 'Moderne, bord de mer, haut standing',
    highlights: ['Marina Bay', 'Gare TGV', 'Tanger City Mall', 'Hôtels 5 étoiles'],
  },
  {
    name: 'Iberia & Place Koweit',
    slug: 'Iberia',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    description: 'Quartier bourgeois et diplomatique historique de Tanger. Environnement calme, verdoyant et ultra-sécurisé, plébiscité par les familles pour la proximité du Lycée français Regnault.',
    pricePerM2: '15 000 - 22 000 DH / m²',
    ambiance: 'Bourgeois, résidentiel, diplomatique',
    highlights: ['Lycée Regnault', 'Consulats', 'Parcs arborés', 'Cliniques privées'],
  },
  {
    name: 'Marshan & Vieille Montagne',
    slug: 'Marshan',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    description: 'Le charme intemporel de Tanger. Entre le célèbre Café Hafa, le Palais Mendoub et les falaises dominant le Détroit de Gibraltar, découvrez des demeures chargées d’histoire.',
    pricePerM2: '17 000 - 30 000 DH / m²',
    ambiance: 'Historique, bohème chic, vues océan',
    highlights: ['Café Hafa', 'Palais Mendoub', 'Vue Détroit', 'Proximité Kasbah'],
  },
  {
    name: 'Tanja Balia',
    slug: 'Tanja Balia',
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80',
    description: 'En plein renouveau, Tanja Balia séduit par ses résidences récentes fermées et sécurisées avec piscine. Excellent rapport qualité-prix et fort potentiel de valorisation.',
    pricePerM2: '10 000 - 14 000 DH / m²',
    ambiance: 'Jeune, familial, accessible',
    highlights: ['Résidences récentes', 'Centre Socco Alto', 'Espaces verts', 'Sortie autoroute'],
  },
  {
    name: 'Boubana & Royal Golf',
    slug: 'Boubana',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80',
    description: 'Le quartier le plus huppé pour les villas d’architecte à Tanger. En bordure directe des greens du Royal Golf de Tanger, dans une oasis de pins et de verdure.',
    pricePerM2: '20 000 - 35 000 DH / m²',
    ambiance: 'Ultra-luxe, privé, golfique',
    highlights: ['Royal Golf de Tanger', 'Villas de maître', 'Grands terrains', 'Calme absolu'],
  },
  {
    name: 'Centre-Ville & Boulevard Pasteur',
    slug: 'Centre-Ville',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
    description: 'Le cœur battant de la ville blanche. Immeubles de style Art Déco et néoclassique, commerces, cafés mythiques et vue plongeante sur le port de Tanger.',
    pricePerM2: '13 000 - 19 000 DH / m²',
    ambiance: 'Urbain, animé, central',
    highlights: ['Boulevard Pasteur', 'Place de France', 'Grand Socco', 'Port de Tanger Ville'],
  },
];

export default function NeighborhoodsPage() {
  return (
    <div className="min-h-screen bg-slate-50/50 pb-20 pt-10 sm:pt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-navy/10 text-brand-navy text-xs font-bold uppercase tracking-wider mb-3">
            <Compass className="h-3.5 w-3.5" />
            <span>Guide des Quartiers</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Les Meilleurs Quartiers de Tanger
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Découvrez les spécificités de chaque secteur de Tanger : prix au m², cadre de vie, équipements scolaires et opportunités d'investissement immobilier.
          </p>
        </div>

        {/* Neighborhood Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEIGHBORHOOD_GUIDES.map((neighborhood) => (
            <div
              key={neighborhood.name}
              className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                <Image
                  src={neighborhood.image}
                  alt={neighborhood.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-xs font-bold">
                  {neighborhood.pricePerM2}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-navy transition">
                    {neighborhood.name}
                  </h3>
                  <p className="text-xs font-semibold text-brand-teal mt-0.5 mb-3">
                    {neighborhood.ambiance}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {neighborhood.description}
                  </p>

                  {/* Highlights list */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {neighborhood.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-600 text-[11px] font-medium"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href={`/apartments?neighborhood=${neighborhood.slug}`}
                    className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-50 group-hover:bg-brand-navy text-slate-700 group-hover:text-white text-xs font-bold transition duration-200"
                  >
                    <span>Voir les biens à {neighborhood.name.split(' ')[0]}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
