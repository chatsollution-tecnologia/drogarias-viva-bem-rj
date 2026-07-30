import React from 'react';
import { ArrowDown, MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-850 text-white py-12 sm:py-16 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-emerald-900/60 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-medium px-3.5 py-1.5 rounded-full mb-5">
          <MapPin className="w-4 h-4 text-emerald-400" />
          <span>Rio de Janeiro — RJ</span>
        </div>

        <h1 id="hero-title" className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
          Cuidado e confiança perto de você
        </h1>

        <p id="hero-subtitle" className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          Três lojas no Rio de Janeiro para atender você.
        </p>

        <a
          id="hero-cta-button"
          href="#nossas-lojas"
          className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg transition-all focus:outline-hidden focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-900"
        >
          <span>Nossas lojas</span>
          <ArrowDown className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};
