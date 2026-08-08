import { enUS } from './en-US';
import { esLATAM } from './es-LATAM';
import { ptBR } from './pt-BR';

export const contentByLocale = {
  'pt-BR': ptBR,
  'en-US': enUS,
  'es-LATAM': esLATAM,
} as const;

export type { SiteContent } from './types';
