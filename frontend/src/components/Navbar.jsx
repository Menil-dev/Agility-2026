import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ onOpenRegister }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-black/95 backdrop-blur-md border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Brand Logo without trophy icon */}
        <a href="#" className="flex items-center gap-2">
          <span className="text-base sm:text-lg font-extrabold text-white leading-none tracking-tight">
            Agility Cup <span className="text-red-500">2026</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <a href="#sports" className="hover:text-white transition-colors">
            Events & Pricing
          </a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => onOpenRegister && onOpenRegister()}
            className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 active:scale-95 text-white font-bold text-xs tracking-wide transition-all shadow-lg shadow-red-600/20"
          >
            Register Now
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => onOpenRegister && onOpenRegister()}
            className="px-3.5 py-1.5 rounded-lg bg-red-600 text-white text-xs font-semibold"
          >
            Register
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-b border-slate-900 px-4 pt-2 pb-4 space-y-2 text-sm text-slate-300">
          <a
            href="#sports"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 font-medium"
          >
            Events & Pricing
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenRegister && onOpenRegister();
            }}
            className="w-full text-left py-2 font-bold text-red-500"
          >
            Open Registration Modal
          </button>
        </div>
      )}
    </header>
  );
}
