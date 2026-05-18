export interface Movie {
  id: string;
  title: string;
  description: string;
  year: number;
  rating: number;
  duration: string;
  genre: string[];
  bannerUrl: string;
  posterUrl: string;
  trailerUrl: string;
  cast: string[];
  isTrending?: boolean;
  isPopular?: boolean;
  isOriginal?: boolean;
  isContinueWatching?: boolean;
  progress?: number;
}

export interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  watchlist: string[];
}
