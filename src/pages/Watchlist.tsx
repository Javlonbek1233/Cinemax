import React from 'react';
import { movies } from '../data/mockData';
import MovieCard from '../components/MovieCard';
import { Bookmark, LayoutGrid, ListFilter } from 'lucide-react';

const Watchlist = () => {
  const watchlistMovies = movies.slice(0, 3);

  return (
    <div className="p-8 container mx-auto min-h-screen space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-3 text-brand">
            <Bookmark size={24} fill="currentColor" />
            <span className="font-bold tracking-widest text-sm uppercase">My Collection</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-black font-display tracking-tight">Watchlist</h1>
          <p className="text-white/40 font-medium">You have {watchlistMovies.length} movies saved for later.</p>
        </div>

        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-bold hover:bg-white/10 transition-colors">
            <LayoutGrid size={18} />
            Grid View
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-bold hover:bg-white/10 transition-colors">
            <ListFilter size={18} />
            Sort by: Recent
          </button>
        </div>
      </div>

      {watchlistMovies.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {watchlistMovies.map((movie, idx) => (
            <MovieCard key={movie.id} movie={movie} index={idx} />
          ))}
          
          {/* Add more placeholder */}
          <div className="aspect-[16/9] rounded-xl border-2 border-dashed border-white/5 flex flex-col items-center justify-center space-y-2 text-white/20 hover:text-brand hover:border-brand/40 cursor-pointer transition-all">
             <div className="w-12 h-12 rounded-full border-2 border-current flex items-center justify-center">
               <span className="text-2xl font-bold">+</span>
             </div>
             <span className="text-xs font-bold uppercase tracking-widest">Add Movie</span>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-32 space-y-6">
          <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center text-white/10">
            <Bookmark size={48} />
          </div>
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold">Your watchlist is empty</h2>
            <p className="text-white/40 max-w-xs mx-auto">Start adding movies you want to watch later and they'll show up here.</p>
          </div>
          <button className="bg-brand px-8 py-3 rounded-xl font-bold hover:bg-brand-hover transition-colors">
            Explore Movies
          </button>
        </div>
      )}
    </div>
  );
};

export default Watchlist;
