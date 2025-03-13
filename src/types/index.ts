export interface Flavor {
  name: string;
  category: string;
  tags: string[];
  isRecommended?: boolean;
  isNew?: boolean;
}

export interface Tag {
  id: string;
  name: string;
  color: string;
}

export type FilterType = string | null;