export interface MenuItem {
  id: string;
  name: string; // Serbian Cyrillic
  nameLatin: string; // Transliterated Latin for easy reading or search
  price: number; // in RSD
  description?: string;
  category: string; // 'kafe' | 'posebno' | 'topli_napici' | 'dodaci' | 'piva' | 'zestine' | 'kokteli' | 'limunade' | 'ostala_pica'
  badges?: string[]; // e.g. ["Препорука", "Омиљено", "Локално"]
}

export interface PromoCombo {
  id: string;
  title: string;
  price: number;
  description: string;
  category: 'kafe' | 'kokteli';
  note?: string;
}

export interface CafeReview {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  authorDetails?: string;
}

export interface WorkingHours {
  days: string;
  hours: string;
}
