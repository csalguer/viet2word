export type LayoutMode = 'editorial' | 'academic' | 'modern';

export interface Definition {
  id: string;
  partOfSpeech: string;
  meaning: string;
  example?: string;
  synonyms?: string[];
  antonyms?: string[];
  regions?: string[]; // e.g., "Am.", "Sp."
  meta?: string[]; // e.g., "colloquial", "archaic"
}

export interface WordEntry {
  word: string;
  pronunciation: string;
  etymology: string;
  definitions: Definition[];
  alternatives?: string[];
  secondarySpellings?: string[];
}
