import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Movie } from '../types';
import MovieCard from './MovieCard';
import { cn } from '../lib/utils';

interface MovieRowProps {
  title: string;
  movies: Movie[];
  className?: string;
}

const MovieRow = ({ title, movies, className }: MovieRowProps) => {
  const rowRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className={cn("space-y-4 group", className)}>
      <div className="flex items-center justify-between px-4 lg:px-0">
        <h2 className="text-xl md:text-2xl font-bold font-display tracking-tight hover:text-brand cursor-pointer transition-colors">
          {title}
        </h2>
        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button 
            onClick={() => scroll('left')}
            className="p-2 border border-white/10 rounded-full hover:bg-white/5 transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="p-2 border border-white/10 rounded-full hover:bg-white/5 transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div 
        ref={rowRef}
        className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth px-4 lg:px-0 pb-4"
      >
        {movies.map((movie, idx) => (
          <MovieCard key={movie.id} movie={movie} index={idx} />
        ))}
      </div>
    </div>
  );
};

export default MovieRow;
