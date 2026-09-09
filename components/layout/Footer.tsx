'use client';

import React from 'react';
import Link from 'next/link';
import { Building2, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-brand-teal flex items-center justify-center text-slate-950 font-black">
                <Building2 className="h-5 w-5" />
              </div>
              <span className="font-black tracking-tight text-xl text-white">
                TANGER<span className="text-brand-teal">IMMO</span>
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Votre agence immobilière de référence à Tanger, Maroc. Achat, vente et location de prestige à Malabata, Iberia, Marshan et Boubana.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brand-teal flex-shrink-0" />
                <span>{siteConfig.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand-teal flex-shrink-0" />
                <span>{siteConfig.phone} / {siteConfig.mobile}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-brand-teal flex-shrink-0" />
                <span>{siteConfig.email}</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {siteConfig.navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quartiers de Tanger */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">
              Quartiers Prisés
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {['Malabata Corniche', 'Iberia Standing', 'Marshan Historique', 'Tanja Balia', 'Boubana Golf', 'California'].map((q) => (
                <li key={q}>
                  <Link href={`/apartments?neighborhood=${q.split(' ')[0]}`} className="hover:text-white transition">
                    {q}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Direct WhatsApp */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">
              Conseil Immédiat
            </h4>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              Un projet d'achat ou de location à Tanger ? Nos agents sont joignables directement sur WhatsApp.
            </p>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold transition shadow-sm"
            >
              <span>Discuter sur WhatsApp</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} TangerImmo. Tous droits réservés. Tanger, Royaume du Maroc.</p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="hover:text-slate-400 transition">
              Politique de Confidentialité
            </Link>
            <Link href="/terms" className="hover:text-slate-400 transition">
              Conditions Générales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
