import React, { useState } from 'react';
import { Search as SearchIcon, Filter, X } from 'lucide-react';
import { movies, categories } from '../data/mockData';
import MovieCard from '../components/MovieCard';
import { motion, AnimatePresence } from 'motion/react';

const Search = () => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredMovies = movies.filter(m => {
    const matchesQuery = m.title.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || m.genre.includes(selectedCategory);
    return matchesQuery && matchesCategory;
  });

  return (
    <div className="p-8 container mx-auto min-h-screen space-y-12">
      {/* Search Header */}
      <div className="space-y-8 max-w-4xl mx-auto">
        <h1 className="text-4xl lg:text-6xl font-black font-display tracking-tight text-center">
          Find your next <span className="text-brand">masterpiece</span>
        </h1>
        
        <div className="relative group">
          <div className="absolute inset-y-0 left-6 flex items-center text-white/40 group-focus-within:text-brand transition-colors">
            <SearchIcon size={24} />
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search movies, actors, genres..."
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-6 pl-16 pr-6 text-xl font-medium focus:outline-none focus:ring-2 focus:ring-brand/50 focus:bg-white/10 transition-all placeholder:text-white/20"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="absolute inset-y-0 right-6 flex items-center text-white/40 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
          )}
        </div>

        {/* Categories Bar */}
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
           {categories.map((category) => (
             <button
               key={category}
               onClick={() => setSelectedCategory(category)}
               className={`px-6 py-2 rounded-full font-bold text-sm whitespace-nowrap transition-all ${
                 selectedCategory === category 
                   ? 'bg-brand text-white shadow-lg shadow-brand/20' 
                   : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/5'
               }`}
             >
               {category}
             </button>
           ))}
        </div>
      </div>

      {/* Results */}
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold font-display">
            {query || selectedCategory !== 'All' ? `Results (${filteredMovies.length})` : 'Popular Searches'}
          </h2>
          <button className="flex items-center gap-2 text-sm font-bold text-white/40 hover:text-white transition-colors">
            <Filter size={18} />
            Filter
          </button>
        </div>

        {filteredMovies.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            <AnimatePresence>
              {filteredMovies.map((movie, idx) => (
                <MovieCard key={movie.id} movie={movie} index={idx} />
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 space-y-4 opacity-50">
            <SearchIcon size={64} className="text-white/10" />
            <p className="text-xl font-medium">No movies found for "{query}"</p>
            <button 
               onClick={() => {setQuery(''); setSelectedCategory('All');}}
               className="text-brand font-bold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>

      {/* Recommended for you */}
      {!query && selectedCategory === 'All' && (
        <section className="space-y-6 pt-12 border-t border-white/5">
          <h2 className="text-2xl font-bold font-display">Trending Searches</h2>
          <div className="flex flex-wrap gap-4">
             {['Sci-Fi 2024', 'Award Winning', 'Family Night', 'New Originals', 'Horror Classics'].map(tag => (
               <div key={tag} className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-brand/40 cursor-pointer transition-all">
                 <span className="font-bold text-sm">{tag}</span>
               </div>
             ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Search;
