import React from 'react';
import { motion } from 'motion/react';
import { Play, Plus, Info, Star } from 'lucide-react';
import { Movie } from '../types';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

interface MovieCardProps {
  key?: string | number;
  movie: Movie;
  index: number;
}

const MovieCard = ({ movie, index }: MovieCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative group flex-shrink-0 w-[200px] md:w-[280px] lg:w-[320px] aspect-[16/9] rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-[#00D1FF]/20 transition-all duration-500"
    >
      <Link to={`/movie/${movie.id}`}>
        <img
          src={movie.bannerUrl}
          alt={movie.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-5 space-y-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-lg font-black font-display tracking-tight line-clamp-1">{movie.title}</h3>
            
            <div className="flex items-center gap-3 text-[10px] font-bold tracking-widest uppercase text-white/50">
              <div className="flex items-center gap-1 text-[#00D1FF]">
                <Star size={12} fill="currentColor" />
                <span className="font-bold">{movie.rating}</span>
              </div>
              <span>{movie.year}</span>
              <span className="px-1 border border-white/30 rounded">{movie.duration}</span>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <button className="flex-1 bg-white text-black py-2.5 rounded-full flex items-center justify-center gap-2 font-black text-[10px] uppercase tracking-widest hover:bg-[#00D1FF] transition-colors">
                <Play size={14} fill="currentColor" />
                Watch
              </button>
              <button className="p-2 border border-white/20 rounded-full hover:bg-white/10 text-white transition-colors">
                <Plus size={16} />
              </button>
            </div>
          </div>
        </div>
      </Link>
      
      {/* Progress bar for continue watching */}
      {movie.isContinueWatching && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
          <div 
            className="h-full bg-[#00D1FF] shadow-[0_0_10px_#00D1FF]" 
            style={{ width: `${movie.progress}%` }}
          />
        </div>
      )}

      {/* Ribbon for originals */}
      {movie.isOriginal && (
        <div className="absolute top-2 left-2 px-2 py-0.5 bg-brand text-white text-[10px] font-bold rounded shadow-lg uppercase tracking-wider">
          Original
        </div>
      )}
    </motion.div>
  );
};

export default MovieCard;
