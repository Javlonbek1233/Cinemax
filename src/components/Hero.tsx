import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Info, Plus, Star } from 'lucide-react';
import { Movie } from '../types';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

interface HeroProps {
  movie: Movie;
}

const Hero = ({ movie }: HeroProps) => {
  return (
    <div className="relative w-full h-[70vh] lg:h-[90vh] overflow-hidden">
      {/* Background Image with Editorial Gradient */}
      <div className="absolute inset-0 z-0">
        <img 
          src={movie.bannerUrl} 
          alt={movie.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,transparent_0%,#050505_85%)]" />
        <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-12 flex flex-col justify-center max-w-4xl z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 bg-[#00D1FF]/20 text-[#00D1FF] text-[10px] font-bold tracking-tighter uppercase rounded">
              IMAX EXPERIENCE
            </span>
            <div className="flex items-center gap-1.5 text-rating text-sm">
              <Star size={16} fill="currentColor" />
              <span className="font-bold text-white">{movie.rating}</span>
            </div>
            <span className="text-white/40 text-xs font-bold tracking-widest uppercase">2024 • {movie.genre[0]} • {movie.duration}</span>
          </div>

          <h1 className="text-[80px] lg:text-[130px] font-bold leading-[0.85] tracking-tighter uppercase">
            {movie.title}
          </h1>

          <p className="text-lg text-white/60 leading-relaxed max-w-lg">
            {movie.description}
          </p>

          <div className="flex items-center gap-4 pt-4">
            <Link 
              to={`/watch/${movie.id}`}
              className="px-10 py-5 bg-white text-black font-black rounded-full flex items-center gap-3 hover:bg-[#00D1FF] transition-all duration-300 group shadow-[0_10px_30px_rgba(255,255,255,0.1)] hover:scale-105 uppercase tracking-widest text-sm"
            >
              <Play fill="currentColor" size={20} />
              Watch Now
            </Link>
            
            <button className="p-5 border border-white/20 rounded-full hover:bg-white/10 transition-all duration-300">
              <Plus size={24} />
            </button>
          </div>
        </motion.div>
      </div>
      
      {/* Floating Detail Widget (Editorial Decor) */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 w-72 p-8 glass rounded-[40px] hidden xl:block animate-in fade-in slide-in-from-right-10 duration-1000">
        <h3 className="label-uppercase mb-6">Director's Cut</h3>
        <div className="space-y-6">
           <div className="flex gap-4">
             <div className="w-14 h-20 bg-gradient-to-br from-brand to-brand-hover rounded-xl shadow-lg border border-white/10" />
             <div className="space-y-2">
               <p className="text-sm font-black tracking-tight">{movie.title}</p>
               <p className="text-[10px] opacity-40 font-bold uppercase tracking-widest">{movie.cast[0]}</p>
               <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                 <motion.div 
                   initial={{ width: 0 }}
                   animate={{ width: "85%" }}
                   transition={{ duration: 1.5, delay: 0.5 }}
                   className="h-full bg-brand shadow-[0_0_10px_#00D1FF]" 
                 />
               </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
