'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';

interface PropertyImageSliderProps {
  images: string[];
  title: string;
}

export default function PropertyImageSlider({ images, title }: PropertyImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // If no images provided, use a fallback
  const validImages = images && images.length > 0 ? images : [
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80'
  ];

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? validImages.length - 1 : prev - 1));
  }, [validImages.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === validImages.length - 1 ? 0 : prev + 1));
  }, [validImages.length]);

  // Keyboard navigation
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape' && isFullscreen) setIsFullscreen(false);
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext, isFullscreen]);

  return (
    <div className="w-full space-y-3">
      {/* Main Slide Viewer */}
      <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-900 group shadow-md">
        <Image
          src={validImages[currentIndex]}
          alt={`${title} - Photo ${currentIndex + 1}`}
          fill
          priority
          sizes="(max-width: 1200px) 100vw, 1200px"
          className="object-cover transition-all duration-300 group-hover:scale-[1.01]"
        />

        {/* Gradient Overlay for controls readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-auto">
          <div className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-semibold shadow-sm">
            Photo {currentIndex + 1} / {validImages.length}
          </div>

          <button
            type="button"
            onClick={() => setIsFullscreen(true)}
            aria-label="Plein écran"
            className="p-2 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-black/80 transition active:scale-95"
          >
            <Maximize2 className="h-4 w-4" />
          </button>
        </div>

        {/* Navigation Arrows */}
        {validImages.length > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Photo précédente"
              className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-white/90 text-slate-800 backdrop-blur-sm shadow-lg hover:bg-white hover:scale-105 transition active:scale-95"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Photo suivante"
              className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-white/90 text-slate-800 backdrop-blur-sm shadow-lg hover:bg-white hover:scale-105 transition active:scale-95"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails row */}
      {validImages.length > 1 && (
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-2 pt-1 scrollbar-none">
          {validImages.map((img, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`relative flex-shrink-0 w-20 h-14 sm:w-28 sm:h-18 rounded-xl overflow-hidden transition-all duration-200 ${
                  isActive
                    ? 'ring-2 ring-brand-navy ring-offset-2 scale-100 opacity-100 shadow-sm'
                    : 'opacity-60 hover:opacity-100'
                }`}
              >
                <Image
                  src={img}
                  alt={`Vignette ${idx + 1}`}
                  fill
                  sizes="120px"
                  className="object-cover"
                />
              </button>
            );
          })}
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 animate-in fade-in duration-200">
          <div className="flex items-center justify-between text-white pb-4">
            <span className="text-sm font-semibold">
              {title} — {currentIndex + 1} / {validImages.length}
            </span>
            <button
              type="button"
              onClick={() => setIsFullscreen(false)}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition active:scale-95 text-white"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="relative flex-1 w-full max-w-6xl mx-auto flex items-center justify-center">
            <Image
              src={validImages[currentIndex]}
              alt={`${title} - Plein écran`}
              fill
              className="object-contain"
              sizes="100vw"
            />

            {validImages.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrev}
                  className="absolute left-2 sm:left-4 p-3 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-md transition"
                >
                  <ChevronLeft className="h-7 w-7" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="absolute right-2 sm:right-4 p-3 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-md transition"
                >
                  <ChevronRight className="h-7 w-7" />
                </button>
              </>
            )}
          </div>

          <div className="flex justify-center gap-2 overflow-x-auto py-4">
            {validImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`relative w-16 h-12 rounded-lg overflow-hidden border-2 transition ${
                  idx === currentIndex ? 'border-white scale-105' : 'border-transparent opacity-50'
                }`}
              >
                <Image src={img} alt="" fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
