'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Waves,
  Dumbbell,
  Laptop,
  Car,
  Dog,
  Shield,
  Wine,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

export default function AmenitiesPage() {
  const amenitiesList = [
    {
      icon: <Waves className="h-6 w-6 text-brand-teal" />,
      title: 'Rooftop Infinity Pools & Cabanas',
      description:
        'Heated skyline pools with panoramic city views, private sun cabanas, outdoor kitchenettes, and twilight fire lounges.',
      image:
        'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80',
    },
    {
      icon: <Dumbbell className="h-6 w-6 text-brand-teal" />,
      title: 'High-Performance Wellness Clubs',
      description:
        'Equipped with Technogym and Peloton machinery, private Pilates & yoga studios, Finnish dry saunas, and steam showers.',
      image:
        'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    },
    {
      icon: <Laptop className="h-6 w-6 text-brand-teal" />,
      title: 'Executive Coworking & Boardrooms',
      description:
        'Sound-isolated phone pods, high-speed Wi-Fi 6, barista espresso bars, and reservable conference suites with 4K presentation screens.',
      image:
        'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    },
    {
      icon: <Dog className="h-6 w-6 text-brand-teal" />,
      title: 'Dedicated Pet Spas & Dog Runs',
      description:
        'On-site temperature-controlled pet wash stations, agility runs on manicured astro-turf, and resident pet social events.',
      image:
        'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80',
    },
    {
      icon: <Car className="h-6 w-6 text-brand-teal" />,
      title: 'Subterranean Valet & EV Charging',
      description:
        'Secure underground garage with Level 2 and DC Fast Tesla charging bays, 24/7 valet assistance, and private bicycle storage.',
      image:
        'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80',
    },
    {
      icon: <Wine className="h-6 w-6 text-brand-teal" />,
      title: 'Private Resident Lounges & Cellars',
      description:
        'Temperature-regulated wine storage lockers, private demonstration chef kitchens for dinner parties, and billiards rooms.',
      image:
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-slate-100 py-16 px-4 sm:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-brand-teal font-bold text-xs">
            <Sparkles className="h-3.5 w-3.5" />
            <span>World-Class Living</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Resort-Grade Amenities
          </h1>
          <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto">
            Experience homes engineered for elevated comfort, wellness, and effortless productivity.
          </p>
        </div>
      </div>

      {/* Amenities Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenitiesList.map((amenity, i) => (
            <div
              key={i}
              className="flex flex-col rounded-3xl bg-white border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                <Image
                  src={amenity.image}
                  alt={amenity.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="h-10 w-10 rounded-xl bg-teal-50 flex items-center justify-center mb-3">
                    {amenity.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{amenity.title}</h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {amenity.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/apartments"
            className="inline-flex items-center gap-2 rounded-xl bg-brand-navy px-8 py-3.5 text-sm font-bold text-white shadow hover:bg-slate-800 transition active:scale-95"
          >
            <span>Browse Apartments with Top Amenities</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
