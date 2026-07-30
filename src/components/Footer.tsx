import React from 'react';
import { STORES } from '../data/stores';
import { PharmacyCrossIcon } from './PharmacyCrossIcon';
import { ShieldCheck, FileText, Phone } from 'lucide-react';

interface FooterProps {
  onOpenPrivacyModal: () => void;
  onOpenTermsModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacyModal,
  onOpenTermsModal,
}) => {
  return (
    <footer id="footer-main" className="bg-slate-900 text-slate-300 pt-12 pb-8 px-4 sm:px-6 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        {/* Brand & Intro */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-8 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <PharmacyCrossIcon className="w-8 h-8" />
            <span className="font-bold text-xl text-white tracking-tight">
              Drogarias <span className="text-emerald-400">Viva Bem</span>
            </span>
          </div>
          <p className="text-xs text-slate-400">
            Site institucional — drogariavivabemrj.com
          </p>
        </div>

        {/* 3 Corporate Stores Summary */}
        <div className="py-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
          {STORES.map((store) => (
            <div key={store.id} id={`footer-store-${store.id}`} className="bg-slate-850/80 p-4 rounded-xl border border-slate-800 space-y-2">
              <p className="font-bold text-white text-sm">{store.nome}</p>
              <p className="text-slate-300 font-medium">{store.razaoSocial}</p>
              <p className="text-slate-400 font-mono">CNPJ: {store.cnpj}</p>
              <p className="text-slate-400">{store.endereco}</p>
              <p className="text-emerald-400 flex items-center gap-1.5 pt-1">
                <Phone className="w-3.5 h-3.5" />
                <span>WhatsApp: {store.whatsapp}</span>
              </p>
            </div>
          ))}
        </div>

        {/* Footer Bottom Controls */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p id="copyright">
            © {new Date().getFullYear()} Drogarias Viva Bem. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-4">
            <button
              id="btn-footer-privacidade"
              onClick={onOpenPrivacyModal}
              type="button"
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-emerald-400 transition-colors focus:outline-hidden focus:ring-2 focus:ring-emerald-500 rounded px-2 py-1 cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Política de Privacidade</span>
            </button>

            <span className="text-slate-700">•</span>

            <button
              id="btn-footer-termos"
              onClick={onOpenTermsModal}
              type="button"
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-emerald-400 transition-colors focus:outline-hidden focus:ring-2 focus:ring-emerald-500 rounded px-2 py-1 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-emerald-400" />
              <span>Termos de Uso</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
