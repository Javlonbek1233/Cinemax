import React from 'react';
import Hero from '../components/Hero';
import MovieRow from '../components/MovieRow';
import { movies } from '../data/mockData';

const Home = () => {
  const trendingMovies = movies.filter(m => m.isTrending);
  const popularMovies = movies.filter(m => m.isPopular);
  const originals = movies.filter(m => m.isOriginal);
  const continueWatching = movies.filter(m => m.isContinueWatching);

  return (
    <div className="pb-20 space-y-12">
      {/* Hero Section */}
      <Hero movie={movies[0]} />

      <div className="container mx-auto px-4 lg:px-0 -mt-20 relative z-20 space-y-16">
        {continueWatching.length > 0 && (
          <MovieRow 
            title="Continue Watching" 
            movies={continueWatching} 
          />
        )}

        <MovieRow 
          title="Trending Now" 
          movies={trendingMovies} 
        />

        <MovieRow 
          title="Popular Collections" 
          movies={popularMovies} 
        />

        {/* Categories Grid - Quick access */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold font-display px-4 lg:px-0">Explore Genres</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 px-4 lg:px-0">
             {['Action', 'Sci-Fi', 'Horror', 'Comedy', 'Drama', 'Adventure'].map((genre) => (
               <div 
                 key={genre}
                 className="group relative h-32 rounded-2xl overflow-hidden cursor-pointer border border-white/10 glass-dark hover:border-brand/50 transition-all duration-300"
               >
                 <div className="absolute inset-0 bg-gradient-to-br from-brand/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                 <div className="absolute inset-0 flex items-center justify-center">
                   <span className="font-bold text-lg tracking-wide group-hover:scale-110 transition-transform">{genre}</span>
                 </div>
               </div>
             ))}
          </div>
        </section>

        <MovieRow 
          title="Cinemax Originals" 
          movies={originals} 
        />
      </div>
    </div>
  );
};

export default Home;
