'use client';

import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
  MessageCircle,
} from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import CustomCombobox, { ComboboxOption } from '@/components/ui/CustomCombobox';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: '',
  });

  const subjectOptions: ComboboxOption[] = [
    { value: 'general', label: 'Renseignement Général' },
    { value: 'visit', label: 'Planifier une Visite sur Tanger' },
    { value: 'list', label: 'Vendre ou Louer mon Bien' },
    { value: 'notary', label: 'Conseil Juridique & Notarial' },
    { value: 'mre', label: 'Service MRE & Investisseurs' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20 pt-10 sm:pt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-navy/10 text-brand-navy text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Agence Immobilière Tanger</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Contactez TangerImmo
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Nos experts immobiliers à Tanger sont à votre disposition du lundi au samedi pour vous guider dans vos projets d’achat, vente ou location.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-8 shadow-xs space-y-6">
              <h2 className="text-lg font-bold text-slate-900">Coordonnées de l’Agence</h2>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-brand-teal flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Adresse à Tanger</h3>
                    <p className="text-slate-500 mt-0.5">{siteConfig.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Téléphone Fixe & Mobile</h3>
                    <p className="text-slate-500 mt-0.5">
                      <a href={`tel:${siteConfig.phone}`} className="hover:text-brand-navy">
                        {siteConfig.phone}
                      </a>{' '}
                      / {siteConfig.mobile}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Email</h3>
                    <p className="text-slate-500 mt-0.5">{siteConfig.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Horaires d’Ouverture</h3>
                    <p className="text-slate-500 mt-0.5">Lundi - Samedi : 9h00 - 19h00</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Direct Card */}
              <div className="pt-4 border-t border-slate-100">
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white py-3.5 px-4 text-xs sm:text-sm font-bold shadow-md transition active:scale-98"
                >
                  <MessageCircle className="h-5 w-5 fill-current" />
                  <span>Discussion Rapide sur WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form with CustomCombobox (NO NORMAL SELECT) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-8 shadow-xs">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-1">
                Envoyez-nous un Message
              </h2>
              <p className="text-xs text-slate-500 mb-6">
                Remplissez ce formulaire et notre conseiller référent vous contactera sous 2 heures.
              </p>

              {submitted ? (
                <div className="py-12 text-center bg-emerald-50 rounded-2xl p-6 border border-emerald-100 animate-in fade-in duration-300">
                  <CheckCircle2 className="h-12 w-12 text-emerald-600 mx-auto mb-3" />
                  <h3 className="text-base font-bold text-emerald-900">Message Transmis avec Succès !</h3>
                  <p className="text-xs text-emerald-700 mt-1 max-w-sm mx-auto">
                    Merci d’avoir contacté TangerImmo. Un conseiller spécialisé vous répondra très rapidement.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                        Nom et Prénom
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ex: Mohamed Alami"
                        className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 outline-none focus:border-brand-navy"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                        Adresse Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Ex: m.alami@gmail.com"
                        className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 outline-none focus:border-brand-navy"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                        Numéro de Téléphone
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+212 6..."
                        className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 outline-none focus:border-brand-navy"
                      />
                    </div>

                    {/* COMBOBOX REPLACING NORMAL SELECT */}
                    <div>
                      <CustomCombobox
                        label="Objet de la Demande"
                        placeholder="Choisir l'objet..."
                        options={subjectOptions}
                        value={formData.subject}
                        onChange={(val) => setFormData({ ...formData, subject: val })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                      Votre Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Précisez votre recherche (quartier à Tanger, budget, type de bien)..."
                      className="w-full rounded-xl border border-slate-200 p-3.5 text-xs sm:text-sm text-slate-800 outline-none focus:border-brand-navy"
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 rounded-xl bg-brand-navy px-8 py-3.5 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-slate-800 active:scale-98 transition"
                  >
                    <span>Envoyer ma Demande</span>
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
