import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermsPage() {
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
        Terms of Service
      </h1>
      <p className="text-xs text-slate-400 mb-8">Last updated: January 2026</p>

      <div className="space-y-6 text-sm text-slate-600 leading-relaxed">
        <section>
          <h2 className="text-lg font-bold text-slate-900 mb-2">1. Agreement to Terms</h2>
          <p>
            By accessing or using Urban Living’s web application, listing discovery features, and leasing coordination tools, you acknowledge and agree to comply with all applicable state and federal housing guidelines.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900 mb-2">2. Equal Housing Opportunity</h2>
          <p>
            Urban Living strictly adheres to the Fair Housing Act. We do not discriminate against any applicant based upon race, religion, sex, sexual orientation, disability, familial status, or national origin.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900 mb-2">3. Accurate Listing Verification</h2>
          <p>
            All listed rental rates, availability dates, and architectural floor specifications are reviewed for precision. Prospective tenants must execute formal lease agreements before occupancy is granted.
          </p>
        </section>
      </div>
    </div>
  );
}
