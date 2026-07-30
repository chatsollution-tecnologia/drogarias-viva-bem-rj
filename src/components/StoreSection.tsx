import React from 'react';
import { STORES } from '../data/stores';
import { MapPin, Navigation, MessageCircle, Building2 } from 'lucide-react';

export const StoreSection: React.FC = () => {
  return (
    <section id="nossas-lojas" className="py-12 sm:py-16 bg-slate-50 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 id="stores-title" className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Nossas Lojas
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            Conheça nossas três unidades no Rio de Janeiro
          </p>
        </div>

        {/* Grid of exactly 3 equal size cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {STORES.map((store) => (
            <article
              key={store.id}
              id={`store-card-${store.id}`}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col justify-between"
            >
              <div>
                {/* Store Name */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 shrink-0">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 id={`store-name-${store.id}`} className="text-lg font-bold text-slate-900 leading-snug">
                      {store.nome}
                    </h3>
                  </div>
                </div>

                <hr className="border-slate-100 my-4" />

                {/* Details list */}
                <div className="space-y-3.5 text-sm text-slate-700">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold block text-slate-900 text-xs uppercase tracking-wider">Endereço</span>
                      <p className="text-slate-700 leading-relaxed">{store.endereco}</p>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 space-y-1">
                    <div>
                      <span className="text-xs text-slate-500 font-medium">Razão Social:</span>{' '}
                      <span className="font-semibold text-slate-800 text-xs">{store.razaoSocial}</span>
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 font-medium">CNPJ:</span>{' '}
                      <span className="font-mono text-xs text-slate-800 font-medium">{store.cnpj}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="mt-6 pt-4 border-t border-slate-100 space-y-2.5">
                <a
                  id={`btn-whatsapp-${store.id}`}
                  href={store.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 px-4 rounded-xl transition-colors text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Falar no WhatsApp</span>
                </a>

                <a
                  id={`btn-maps-${store.id}`}
                  href={store.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-medium py-2.5 px-4 rounded-xl transition-colors text-sm focus:outline-hidden focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
                >
                  <Navigation className="w-4 h-4 text-slate-600" />
                  <span>Como chegar</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
