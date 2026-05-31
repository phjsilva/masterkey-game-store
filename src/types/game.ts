export interface Game {
  id: number;
  name: string;
  price: number;
  desconto: number;
  rawgImageUrl?: string;
  giantbombImageUrl?: string;
  finalPrice?: string;
}

export interface GameRequirement {
  system: string;
  processor: string;
  memory: string;
  graphics: string;
  directX: string;
  storage: string;
}

export interface GameHighlight {
  title: string;
  description: string;
}

export interface GameDetails extends Game {
  id: number;
  title?: string;
  description?: string;
  genre?: string[];
  plataforma?: string[];
  lancamento?: string;
  empresa?: string;
  size?: number;
  requirements?: GameRequirement[];
  highlights?: GameHighlight[];
  closingDescription?: string;
  finalNote?: string;
  highlightsTitle?: string;
}

export interface HomeCatalog {
  bestSellers: Game[];
  featured: Game[];
  recent: Game[];
  rpg: Game[];
}
