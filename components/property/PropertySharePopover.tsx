'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Share2, Copy, Check, X } from 'lucide-react';

interface PropertySharePopoverProps {
  title: string;
  url?: string;
  className?: string;
  buttonLabel?: string;
  variant?: 'outline' | 'solid' | 'icon';
}

export default function PropertySharePopover({
  title,
  url,
  className = '',
  buttonLabel = 'Partager',
  variant = 'outline',
}: PropertySharePopoverProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [instagramAlert, setInstagramAlert] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  const currentUrl = typeof window !== 'undefined' ? (url || window.location.href) : (url || '');

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setInstagramAlert(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close on Escape
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setIsOpen(false);
        setInstagramAlert(false);
      }
    }
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen]);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(currentUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    } catch {
      // Fallback
      const textArea = document.createElement('textarea');
      textArea.value = currentUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(`Regardez ce bien immobilier à Tanger sur TangerImmo :\n${title}\n${currentUrl}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const handleFacebook = () => {
    const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
    window.open(fbUrl, '_blank', 'width=600,height=500,noopener,noreferrer');
  };

  const handleInstagram = () => {
    // Copy link first
    handleCopy();
    setInstagramAlert(true);
    setTimeout(() => setInstagramAlert(false), 4000);
  };

  return (
    <div className={`relative inline-block ${className}`} ref={popoverRef}>
      {/* Trigger Button */}
      {variant === 'icon' ? (
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Partager ce bien"
          className="p-2.5 rounded-xl bg-white/90 hover:bg-white text-slate-700 shadow-sm border border-slate-200/80 hover:text-brand-navy transition active:scale-95"
        >
          <Share2 className="h-4 w-4" />
        </button>
      ) : variant === 'solid' ? (
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-brand-navy text-white text-xs sm:text-sm font-semibold hover:bg-slate-800 transition active:scale-95 shadow-sm"
        >
          <Share2 className="h-4 w-4" />
          <span>{buttonLabel}</span>
        </button>
      ) : (
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs sm:text-sm font-medium hover:bg-slate-50 hover:border-slate-300 transition active:scale-95 shadow-xs"
        >
          <Share2 className="h-4 w-4 text-slate-500" />
          <span>{buttonLabel}</span>
        </button>
      )}

      {/* Floating Share Dropdown / Div */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-72 sm:w-80 z-50 bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 animate-in fade-in zoom-in-95 duration-150">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-slate-100 text-slate-700">
                <Share2 className="h-4 w-4" />
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-800">
                Partager cet appartement
              </h4>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition"
              aria-label="Fermer"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Social Network Share Buttons */}
          <div className="space-y-2 mb-3">
            {/* WhatsApp */}
            <button
              onClick={handleWhatsApp}
              type="button"
              className="w-full flex items-center justify-between p-2.5 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#128C7E] font-semibold text-xs sm:text-sm transition group"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#25D366] flex items-center justify-center text-white shadow-xs">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </div>
                <span>Partager sur WhatsApp</span>
              </div>
              <span className="text-[11px] font-medium text-emerald-600 opacity-80 group-hover:translate-x-0.5 transition-transform">Envoyer →</span>
            </button>

            {/* Facebook */}
            <button
              onClick={handleFacebook}
              type="button"
              className="w-full flex items-center justify-between p-2.5 rounded-xl bg-[#1877F2]/10 hover:bg-[#1877F2]/20 text-[#1877F2] font-semibold text-xs sm:text-sm transition group"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#1877F2] flex items-center justify-center text-white shadow-xs">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <span>Partager sur Facebook</span>
              </div>
              <span className="text-[11px] font-medium text-blue-600 opacity-80 group-hover:translate-x-0.5 transition-transform">Publier →</span>
            </button>

            {/* Instagram */}
            <button
              onClick={handleInstagram}
              type="button"
              className="w-full flex items-center justify-between p-2.5 rounded-xl bg-gradient-to-r from-[#F58529]/10 via-[#DD2A7B]/10 to-[#8134AF]/10 hover:from-[#F58529]/20 hover:via-[#DD2A7B]/20 hover:to-[#8134AF]/20 text-[#DD2A7B] font-semibold text-xs sm:text-sm transition group"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] flex items-center justify-center text-white shadow-xs">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <span>Partager sur Instagram</span>
              </div>
              <span className="text-[11px] font-medium text-pink-600 opacity-80 group-hover:translate-x-0.5 transition-transform">Lien Story →</span>
            </button>
          </div>

          {/* Instagram alert banner if clicked */}
          {instagramAlert && (
            <div className="mb-3 p-2.5 rounded-xl bg-pink-50 border border-pink-200 text-pink-800 text-xs">
              <p className="font-bold">Lien copié dans le presse-papier !</p>
              <p className="text-[11px] text-pink-700 mt-0.5">
                Vous pouvez maintenant coller ce lien dans vos Stories ou messages directs Instagram.
              </p>
            </div>
          )}

          {/* Direct Copy Link Button */}
          <div className="pt-3 border-t border-slate-100">
            <div className="flex items-center gap-1.5 p-1.5 rounded-xl bg-slate-50 border border-slate-200">
              <input
                type="text"
                readOnly
                value={currentUrl}
                className="w-full bg-transparent text-xs text-slate-600 px-2 py-1 outline-none truncate font-mono"
              />
              <button
                type="button"
                onClick={handleCopy}
                className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  copied
                    ? 'bg-emerald-600 text-white'
                    : 'bg-brand-navy hover:bg-slate-800 text-white'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5" />
                    <span>Copié !</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Copier</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
