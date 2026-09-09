import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-16 text-slate-800">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-teal hover:underline mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Return to Home</span>
      </Link>

      <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
        Privacy Policy
      </h1>
      <p className="text-xs text-slate-400 mb-8">Last revised: January 2026</p>

      <div className="space-y-6 text-sm text-slate-600 leading-relaxed">
        <section>
          <h2 className="text-lg font-bold text-slate-900 mb-2">1. Overview & Information Collection</h2>
          <p>
            At Urban Living, we take tenant and property owner privacy with the highest degree of seriousness. We collect information you provide directly to us when scheduling 3D virtual tours, submitting rental applications, or requesting property leasing evaluations.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900 mb-2">2. Use of Information</h2>
          <p>
            Collected data is strictly used to facilitate property tours, process digital lease execution, verify background qualification, and communicate essential leasing updates. We never sell personal tenant information to third-party data aggregators.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900 mb-2">3. Data Security & Storage</h2>
          <p>
            All submitted identification and payment verification credentials are encrypted utilizing industry-standard AES-256 protocols with restricted access authorization.
          </p>
        </section>
      </div>
    </div>
  );
}
