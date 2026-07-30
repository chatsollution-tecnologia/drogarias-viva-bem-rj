export interface Store {
  id: string;
  nome: string;
  razaoSocial: string;
  cnpj: string;
  endereco: string;
  whatsapp: string;
  whatsappUrl: string;
  mapsUrl: string;
}

export type ModalType = 'privacy' | 'terms' | null;
