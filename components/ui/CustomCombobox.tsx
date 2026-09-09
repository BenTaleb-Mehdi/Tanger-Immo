'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check, Search } from 'lucide-react';

export interface ComboboxOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
  badge?: string;
}

interface CustomComboboxProps {
  label?: string;
  placeholder?: string;
  options: ComboboxOption[];
  value: string;
  onChange: (value: string) => void;
  icon?: React.ReactNode;
  className?: string;
  error?: string;
}

export default function CustomCombobox({
  label,
  placeholder = 'Sélectionner...',
  options,
  value,
  onChange,
  icon,
  className = '',
  error,
}: CustomComboboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close on Escape
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setIsOpen(false);
    }
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen]);

  const selectedOption = options.find((opt) => opt.value === value);

  const filteredOptions = searchQuery.trim()
    ? options.filter((opt) =>
        opt.label.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : options;

  const handleSelect = (val: string) => {
    onChange(val);
    setIsOpen(false);
    setSearchQuery('');
  };

  return (
    <div className={`relative w-full ${className}`} ref={containerRef}>
      {label && (
        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
          {label}
        </label>
      )}

      {/* Combobox Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between gap-2.5 px-3.5 py-3 rounded-xl bg-white border text-left transition-all duration-200 outline-none ${
          isOpen
            ? 'border-brand-navy ring-2 ring-brand-navy/10 shadow-sm'
            : error
            ? 'border-red-400 bg-red-50/20'
            : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/60'
        }`}
      >
        <div className="flex items-center gap-2.5 min-w-0 flex-1">
          {icon && <span className="text-slate-400 flex-shrink-0">{icon}</span>}
          {selectedOption ? (
            <span className="font-medium text-slate-800 text-sm truncate">
              {selectedOption.label}
            </span>
          ) : (
            <span className="text-slate-400 text-sm truncate">{placeholder}</span>
          )}
        </div>

        <ChevronDown
          className={`h-4 w-4 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-brand-navy' : ''
          }`}
        />
      </button>

      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-full mt-2 z-50 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150">
          {/* Search input if more than 5 options */}
          {options.length > 5 && (
            <div className="p-2 border-b border-slate-100 bg-slate-50/70">
              <div className="relative flex items-center">
                <Search className="h-3.5 w-3.5 text-slate-400 absolute left-2.5 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Rechercher..."
                  className="w-full pl-8 pr-3 py-1.5 text-xs bg-white rounded-lg border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy"
                  autoFocus
                />
              </div>
            </div>
          )}

          {/* Options List */}
          <div className="max-h-60 overflow-y-auto p-1.5 space-y-0.5 custom-scrollbar">
            {filteredOptions.length === 0 ? (
              <div className="py-3 px-4 text-center text-xs text-slate-400">
                Aucun résultat trouvé
              </div>
            ) : (
              filteredOptions.map((option) => {
                const isSelected = option.value === value;
                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => handleSelect(option.value)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition text-left ${
                      isSelected
                        ? 'bg-slate-900 text-white font-semibold'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      {option.icon && (
                        <span className={isSelected ? 'text-white' : 'text-slate-400'}>
                          {option.icon}
                        </span>
                      )}
                      <span className="truncate">{option.label}</span>
                    </div>

                    <div className="flex items-center gap-2 ml-2 flex-shrink-0">
                      {option.badge && (
                        <span
                          className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                            isSelected
                              ? 'bg-white/20 text-white'
                              : 'bg-slate-100 text-slate-600'
                          }`}
                        >
                          {option.badge}
                        </span>
                      )}
                      {isSelected && <Check className="h-4 w-4 text-white flex-shrink-0" />}
                    </div>
                  </button>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
}
