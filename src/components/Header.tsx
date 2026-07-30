import React from 'react';
import { PharmacyCrossIcon } from './PharmacyCrossIcon';

interface HeaderProps {
  onOpenPrivacyModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenPrivacyModal }) => {
  return (
    <header id="header-main" className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <a id="brand-link" href="#inicio" className="flex items-center gap-2.5 group focus:outline-hidden focus:ring-2 focus:ring-emerald-600 rounded-md p-1">
          <PharmacyCrossIcon className="w-8 h-8 transition-transform group-hover:scale-105" />
          <span className="font-bold text-lg sm:text-xl text-slate-900 tracking-tight">
            Drogarias <span className="text-emerald-700">Viva Bem</span>
          </span>
        </a>

        {/* Navigation */}
        <nav id="nav-main" className="flex items-center gap-4 sm:gap-6 text-sm font-medium text-slate-700">
          <a
            id="nav-link-inicio"
            href="#inicio"
            className="hover:text-emerald-700 transition-colors focus:outline-hidden focus:ring-2 focus:ring-emerald-600 rounded px-1.5 py-1"
          >
            Início
          </a>
          <a
            id="nav-link-lojas"
            href="#nossas-lojas"
            className="hover:text-emerald-700 transition-colors focus:outline-hidden focus:ring-2 focus:ring-emerald-600 rounded px-1.5 py-1"
          >
            Nossas lojas
          </a>
          <button
            id="nav-btn-privacidade"
            onClick={onOpenPrivacyModal}
            type="button"
            className="hover:text-emerald-700 transition-colors focus:outline-hidden focus:ring-2 focus:ring-emerald-600 rounded px-1.5 py-1 cursor-pointer"
          >
            Privacidade
          </button>
        </nav>
      </div>
    </header>
  );
};
