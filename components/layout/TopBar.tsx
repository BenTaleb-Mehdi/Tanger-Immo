'use client';

import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function TopBar() {
  return (
    <div className="bg-slate-900 text-slate-300 text-[11px] sm:text-xs py-2 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Contact info */}
        <div className="flex items-center space-x-4 sm:space-x-6">
          <a
            href={`tel:${siteConfig.phone}`}
            className="flex items-center gap-1.5 hover:text-white transition"
          >
            <Phone className="h-3.5 w-3.5 text-brand-teal" />
            <span>{siteConfig.phone}</span>
          </a>

          <a
            href={`mailto:${siteConfig.email}`}
            className="hidden sm:flex items-center gap-1.5 hover:text-white transition"
          >
            <Mail className="h-3.5 w-3.5 text-brand-teal" />
            <span>{siteConfig.email}</span>
          </a>

          <div className="hidden md:flex items-center gap-1.5 text-slate-400">
            <MapPin className="h-3.5 w-3.5 text-brand-teal" />
            <span>Place des Nations, Tanger</span>
          </div>
        </div>

        {/* Right: Agency Hours & Currency (NO SIGN IN / NO SIGN UP) */}
        <div className="flex items-center space-x-4">
          <div className="hidden sm:flex items-center gap-1.5 text-slate-400">
            <Clock className="h-3.5 w-3.5 text-brand-teal" />
            <span>Lun - Sam : 9h00 - 19h00</span>
          </div>

          <span className="px-2 py-0.5 rounded bg-slate-800 text-[11px] font-semibold text-emerald-400">
            MAD (DH)
          </span>
        </div>
      </div>
    </div>
  );
}
