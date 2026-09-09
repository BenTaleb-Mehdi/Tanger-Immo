'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ShieldCheck,
  Building2,
  Award,
  Users,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Compass,
} from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

const VALUES = [
  {
    icon: <ShieldCheck className="h-6 w-6 text-brand-teal" />,
    title: 'Transparence & Sécurité Juridique',
    description: 'Chaque bien à Tanger fait l’objet d’un audit foncier complet auprès de l’ANCFCC. Zéro mauvaise surprise, conformité totale du titre et du cadastre.',
  },
  {
    icon: <Award className="h-6 w-6 text-brand-teal" />,
    title: 'Excellence & Standing',
    description: 'Une sélection rigoureuse des plus belles résidences de la ville blanche : vues mer panoramiques à Malabata, appartements de caractère à Marshan et villas à Boubana.',
  },
  {
    icon: <Users className="h-6 w-6 text-brand-teal" />,
    title: 'Service MRE & Internationaux',
    description: 'Une expertise éprouvée dans l’accompagnement des Marocains Résidant à l’Étranger et investisseurs internationaux : visites visio WhatsApp, démarches notariées et gestion.',
  },
  {
    icon: <Compass className="h-6 w-6 text-brand-teal" />,
    title: 'Maîtrise du Marché Tangérois',
    description: 'Plus de 10 ans d’implantation locale à Tanger pour vous guider vers les quartiers à plus forte plus-value et aux meilleurs rendements locatifs.',
  },
];

const TEAM = [
  {
    name: 'Youssef El Amrani',
    role: 'Fondateur & Directeur d’Agence',
    bio: 'Plus de 15 ans d’expérience dans l’immobilier de prestige au Maroc. Expert en valorisation foncière sur la région de Tanger-Tétouan-Al Hoceima.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Salma Bennani',
    role: 'Responsable Pôle Ventes & Investissements',
    bio: 'Spécialiste des transactions haut de gamme et du conseil en investissement locatif sur Malabata, Iberia et le front de mer.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Karim Mansouri',
    role: 'Conseiller Juridique & Notarial',
    bio: 'Juriste de formation, il assure le suivi scrupuleux des dossiers auprès de la Conservation Foncière et des études notariales partenaires.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50/40">
      {/* Hero Header */}
      <section className="bg-slate-900 text-white py-20 px-4 sm:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />

        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold tracking-wider text-brand-teal uppercase">
            <Sparkles className="h-3.5 w-3.5" />
            <span>À Propos de TangerImmo</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            L’Immobilier de Référence dans la Capitale du Détroit
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Fondée avec la volonté d’offrir un service immobilier d’exception à Tanger, notre agence allie sélection prestigieuse, rigueur juridique et accompagnement sur-mesure.
          </p>
        </div>
      </section>

      {/* Key Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 -mt-10 relative z-20 w-full">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-lg">
          {siteConfig.stats.map((stat, i) => (
            <div key={i} className="text-center p-3">
              <span className="block text-2xl sm:text-4xl font-black text-brand-navy tracking-tight">
                {stat.value}
              </span>
              <span className="block text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <span className="text-xs font-bold text-brand-teal uppercase tracking-widest">
              Notre Mission à Tanger
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-snug">
              Sécuriser et Sublimer Vos Projets Immobiliers
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Tanger connaît un essor fulgurant. Entre le rayonnement du port Tanger Med, la ligne TGV Al Boraq et l’aménagement de la Marina Bay, la ville attire chaque jour de nouveaux résidents et investisseurs.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Chez TangerImmo, nous avons éliminé les incertitudes du marché traditionnel : tous nos biens disposent d'un titre foncier contrôlé, et nous travaillons main dans la main avec des notaires renommés pour garantir la sécurité de votre patrimoine.
            </p>

            <div className="pt-2 space-y-2.5">
              {[
                'Titres fonciers et certificats de propriété vérifiés avant mise en vente',
                'Zéro commission cachée, transparence totale des honoraires',
                'Accompagnement bancaire et notarié jusqu’à la remise des clés',
              ].map((point, index) => (
                <div key={index} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl bg-slate-100">
            <Image
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80"
              alt="Résidence de standing TangerImmo"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="bg-white py-20 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-brand-navy uppercase tracking-widest">
              Nos Engagements
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mt-1">
              Les Piliers de TangerImmo
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VALUES.map((v, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-md transition duration-300"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-50 border border-teal-100/60">
                  {v.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">{v.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-20 w-full">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-brand-navy uppercase tracking-widest">
            Équipe Locale
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mt-1">
            Vos Conseillers Dédiés à Tanger
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM.map((member, i) => (
            <div
              key={i}
              className="group flex flex-col rounded-3xl bg-white border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-lg transition duration-300"
            >
              <div className="relative aspect-square w-full bg-slate-100 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-base font-bold text-slate-900">{member.name}</h3>
                <p className="text-xs font-semibold text-brand-teal mt-0.5">{member.role}</p>
                <p className="text-xs text-slate-500 mt-2.5 leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 pb-20 w-full">
        <div className="rounded-3xl bg-brand-navy p-8 sm:p-14 text-white text-center flex flex-col items-center space-y-5 shadow-xl">
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
            Prêt à Réaliser Votre Projet Immobilier à Tanger ?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
            Consultez notre sélection d'appartements et villas vérifiés ou échangez directement avec nos conseillers sur WhatsApp.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/apartments"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-teal px-6 py-3 text-xs sm:text-sm font-bold text-white shadow hover:bg-teal-500 transition active:scale-95"
            >
              <span>Découvrir les Annonces</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/20 px-6 py-3 text-xs sm:text-sm font-bold text-white hover:bg-white/20 transition active:scale-95"
            >
              <span>Contacter l’Agence</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
