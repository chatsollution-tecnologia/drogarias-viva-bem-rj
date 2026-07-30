import React, { useEffect, useRef } from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';
import { ModalType } from '../types';

interface LegalModalProps {
  modalType: ModalType;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ modalType, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!modalType) return;

    // Focus close button when modal opens
    setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    // Lock body scroll
    document.body.style.overflow = 'hidden';

    // Close on Escape key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalType, onClose]);

  if (!modalType) return null;

  const isPrivacy = modalType === 'privacy';

  return (
    <div
      id="legal-modal-backdrop"
      className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        id="legal-modal-content"
        className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[85vh] flex flex-col"
      >
        {/* Modal Header */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between shrink-0 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            {isPrivacy ? (
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
            ) : (
              <FileText className="w-5 h-5 text-emerald-400" />
            )}
            <h2 id="modal-title" className="text-lg font-bold">
              {isPrivacy ? 'Política de Privacidade' : 'Termos de Uso'}
            </h2>
          </div>

          <button
            ref={closeButtonRef}
            id="btn-close-modal"
            onClick={onClose}
            type="button"
            aria-label="Fechar modal"
            className="text-slate-400 hover:text-white hover:bg-slate-800 p-1.5 rounded-lg transition-colors focus:outline-hidden focus:ring-2 focus:ring-emerald-400 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto text-slate-700 text-sm leading-relaxed space-y-4">
          {isPrivacy ? (
            <>
              <p className="font-semibold text-slate-900 text-base">
                Informações Institucionais e Privacidade
              </p>
              <p>
                Este site é estritamente institucional e informativo, pertencente ao grupo Drogarias Viva Bem (drogariavivabemrj.com).
              </p>
              <p>
                <strong>Ausência de Cadastro e Formulários:</strong> O site não possui cadastro de usuários, criação de contas ou formulários de contato, e não coleta dados pessoais diretamente na plataforma.
              </p>
              <p>
                <strong>Serviços de Terceiros:</strong> Os botões de interação disponibilizados direcionam para serviços externos de terceiros — especificamente o WhatsApp e o Google Maps. A utilização desses serviços está sujeita às políticas de privacidade e termos de uso das respectivas plataformas.
              </p>
              <p>
                <strong>Atendimento via WhatsApp:</strong> Quaisquer dados pessoais enviadas voluntariamente pelo usuário ao entrar em contato via WhatsApp com uma de nossas unidades serão utilizados única e exclusivamente para responder ao atendimento solicitado.
              </p>
              <p>
                <strong>Conformidade com a LGPD:</strong> Em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD), prezamos pelo respeito aos direitos de privacidade, transparência e segurança de dados em todos os nossos canais de atendimento.
              </p>
            </>
          ) : (
            <>
              <p className="font-semibold text-slate-900 text-base">
                Termos de Uso e Condições Gerais
              </p>
              <p>
                O conteúdo apresentado neste site tem caráter exclusivamente institucional e informativo sobre as unidades das Drogarias Viva Bem no Rio de Janeiro.
              </p>
              <p>
                <strong>Confirmação Direta nas Lojas:</strong> Informações sobre produtos, preços, disponibilidade de estoque, entregas ou atendimentos devem ser confirmadas diretamente com a equipe de cada loja via WhatsApp ou presencialmente na unidade correspondente.
              </p>
              <p>
                <strong>Atualizações:</strong> As informações contidas neste portal podem ser atualizadas ou alteradas periodicamente sem aviso prévio.
              </p>
              <p>
                <strong>Links Externos:</strong> Links para plataformas externas (como Google Maps e WhatsApp) seguem as regras, termos e diretrizes de uso dos seus respectivos provedores.
              </p>
              <p className="p-3.5 bg-amber-50 border border-amber-200 text-amber-900 rounded-xl font-medium">
                <strong>Aviso de Saúde:</strong> As informações veiculadas neste site institucional não constituem e não substituem o conselho, diagnóstico ou tratamento médico profissional. Não oferecemos aconselhamento médico online.
              </p>
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 border-t border-slate-200 px-6 py-3.5 flex justify-end shrink-0">
          <button
            id="btn-modal-entendi"
            onClick={onClose}
            type="button"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm px-5 py-2 rounded-xl transition-colors focus:outline-hidden focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2 cursor-pointer"
          >
            Entendi
          </button>
        </div>
      </div>
    </div>
  );
};
