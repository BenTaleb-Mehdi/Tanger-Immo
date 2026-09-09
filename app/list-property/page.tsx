'use client';

import React, { useState } from 'react';
import {
  Building2,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  Camera,
  ArrowRight,
  Upload,
} from 'lucide-react';

export default function ListPropertyPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    ownerName: '',
    email: '',
    phone: '',
    propertyTitle: '',
    city: 'New York',
    address: '',
    propertyType: 'Apartment',
    beds: '2',
    baths: '2',
    price: '',
    sqft: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      {/* Hero Banner */}
      <div className="bg-brand-navy text-white py-16 px-4 sm:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-3 py-1 rounded-full bg-teal-900/80 border border-teal-500/30 text-teal-300 text-xs font-bold uppercase tracking-wider">
            Property Owners & Asset Managers
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            List Your Residence With Zero Upfront Fees
          </h1>
          <p className="text-slate-300 text-sm sm:text-base">
            Reach high-net-worth verified tenants, benefit from 3D scanning, and fill vacancies in an average of 9 days.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-12 w-full">
        {/* Value badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div className="p-5 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-start gap-4">
            <div className="h-10 w-10 rounded-xl bg-teal-50 text-brand-teal flex items-center justify-center shrink-0">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Vetted Tenant Base</h4>
              <p className="text-xs text-slate-500 mt-0.5">Comprehensive credit, criminal, and income audits.</p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-start gap-4">
            <div className="h-10 w-10 rounded-xl bg-teal-50 text-brand-teal flex items-center justify-center shrink-0">
              <Camera className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Complimentary 3D Tour</h4>
              <p className="text-xs text-slate-500 mt-0.5">Our production team captures 4K Matterport scans at no charge.</p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-start gap-4">
            <div className="h-10 w-10 rounded-xl bg-teal-50 text-brand-teal flex items-center justify-center shrink-0">
              <TrendingUp className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Guaranteed Rental Payouts</h4>
              <p className="text-xs text-slate-500 mt-0.5">Automated ACH rent disbursement directly to your account.</p>
            </div>
          </div>
        </div>

        {/* Listing Submission Form */}
        <div className="rounded-3xl bg-white border border-slate-100 p-8 sm:p-10 shadow-sm">
          {submitted ? (
            <div className="py-16 text-center bg-teal-50/50 rounded-2xl p-6 border border-teal-100">
              <CheckCircle2 className="h-14 w-14 text-brand-teal mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-slate-900">Listing Submission Received!</h3>
              <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto">
                Thank you, {form.ownerName}. A portfolio manager will review your property details and contact you within 24 hours to schedule the physical audit and 3D capture.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Property & Contact Information</h3>
                <p className="text-xs text-slate-500">Provide the key specs for your residence.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Contact Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.ownerName}
                    onChange={(e) => setForm({ ...form, ownerName: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm text-slate-800 outline-none focus:border-brand-teal"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="jane@property.com"
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm text-slate-800 outline-none focus:border-brand-teal"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm text-slate-800 outline-none focus:border-brand-teal"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Property Title / Building Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.propertyTitle}
                    onChange={(e) => setForm({ ...form, propertyTitle: e.target.value })}
                    placeholder="e.g. The Paramount Luxury Tower - Unit 14B"
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm text-slate-800 outline-none focus:border-brand-teal"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    City
                  </label>
                  <select
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm text-slate-800 outline-none focus:border-brand-teal cursor-pointer"
                  >
                    <option>New York</option>
                    <option>Miami</option>
                    <option>Austin</option>
                    <option>Chicago</option>
                    <option>Los Angeles</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Monthly Rent ($)
                  </label>
                  <input
                    type="number"
                    required
                    value={form.price}
                    onChange={(e) => setForm({ ...form, price: e.target.value })}
                    placeholder="3500"
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm text-slate-800 outline-none focus:border-brand-teal"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Sq Ft Area
                  </label>
                  <input
                    type="number"
                    required
                    value={form.sqft}
                    onChange={(e) => setForm({ ...form, sqft: e.target.value })}
                    placeholder="1200"
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm text-slate-800 outline-none focus:border-brand-teal"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Bedrooms
                  </label>
                  <select
                    value={form.beds}
                    onChange={(e) => setForm({ ...form, beds: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm text-slate-800 outline-none focus:border-brand-teal cursor-pointer"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Bathrooms
                  </label>
                  <select
                    value={form.baths}
                    onChange={(e) => setForm({ ...form, baths: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm text-slate-800 outline-none focus:border-brand-teal cursor-pointer"
                  >
                    <option>1</option>
                    <option>1.5</option>
                    <option>2</option>
                    <option>3+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Additional Details & Highlights
                </label>
                <textarea
                  rows={4}
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  placeholder="Balcony views, high ceilings, sub-zero appliances, pet policy, etc."
                  className="w-full rounded-xl border border-slate-200 p-3.5 text-sm text-slate-800 outline-none focus:border-brand-teal"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-brand-navy px-8 py-3.5 text-sm font-bold text-white shadow hover:bg-slate-800 active:scale-95 transition"
              >
                <span>Submit Property for Audit</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
