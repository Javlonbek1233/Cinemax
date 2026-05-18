import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Play, Plus, Share2, Star, Calendar, Clock, ChevronRight } from 'lucide-react';
import { movies } from '../data/mockData';
import MovieRow from '../components/MovieRow';
import { cn } from '../lib/utils';

const MovieDetails = () => {
  const { id } = useParams();
  const movie = movies.find(m => m.id === id) || movies[0];
  const [activeTab, setActiveTab] = useState('overview');

  const similarMovies = movies.filter(m => m.id !== id).slice(0, 4);

  return (
    <div className="min-h-screen bg-bg-deep pb-20">
      {/* Background Banner */}
      <div className="relative h-[50vh] lg:h-[70vh]">
        <img 
          src={movie.bannerUrl} 
          alt={movie.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-deep via-bg-deep/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-bg-deep to-transparent" />
      </div>

      <div className="container mx-auto px-4 lg:px-0 -mt-32 relative z-20">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left: Poster & Actions */}
          <div className="w-full lg:w-80 flex-shrink-0 space-y-6">
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-[2/3]"
            >
              <img src={movie.posterUrl} alt={movie.title} className="w-full h-full object-cover" />
            </motion.div>
            
            <div className="grid grid-cols-2 gap-3">
              <Link 
                to={`/watch/${movie.id}`}
                className="col-span-2 bg-brand text-white py-4 rounded-xl flex items-center justify-center gap-3 font-bold hover:bg-brand-hover transition-colors shadow-lg shadow-brand/20"
              >
                <Play fill="currentColor" size={20} />
                Watch Now
              </Link>
              <button className="bg-white/5 border border-white/10 text-white py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
                <Plus size={20} />
                Watchlist
              </button>
              <button className="bg-white/5 border border-white/10 text-white py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
                <Share2 size={20} />
                Share
              </button>
            </div>
          </div>

          {/* Right: Info */}
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-white/60">
                <div className="flex items-center gap-1.5 text-rating">
                  <Star size={18} fill="currentColor" />
                  <span className="text-white font-bold">{movie.rating}</span>
                </div>
                <span className="flex items-center gap-1.5"><Calendar size={16} /> {movie.year}</span>
                <span className="flex items-center gap-1.5"><Clock size={16} /> {movie.duration}</span>
                <div className="flex gap-2">
                  {movie.genre.map(g => (
                    <span key={g} className="px-2 py-0.5 bg-white/5 border border-white/10 rounded">{g}</span>
                  ))}
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-7xl font-black font-display tracking-tighter">{movie.title}</h1>
              
              <p className="text-xl text-white/70 leading-relaxed max-w-3xl">
                {movie.description}
              </p>
            </div>

            {/* Tabs */}
            <div className="border-b border-white/10 pt-4">
               <div className="flex gap-8">
                 {['overview', 'cast', 'reviews'].map((tab) => (
                   <button
                     key={tab}
                     onClick={() => setActiveTab(tab)}
                     className={cn(
                       "pb-4 text-sm font-bold uppercase tracking-widest relative transition-colors",
                       activeTab === tab ? "text-brand" : "text-white/40 hover:text-white"
                     )}
                   >
                     {tab}
                     {activeTab === tab && (
                       <motion.div 
                         layoutId="activeTab"
                         className="absolute bottom-0 left-0 right-0 h-1 bg-brand"
                       />
                     )}
                   </button>
                 ))}
               </div>
            </div>

            <div className="min-h-[200px] py-4">
              {activeTab === 'overview' && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                      <h3 className="text-lg font-bold">The Story</h3>
                      <p className="text-white/60 leading-relaxed">
                        In this cinematic masterpiece, the stakes have never been higher. Join the journey as our heroes navigate a world of danger, mystery, and heart-pounding action. This story explores the depth of human emotion against a backdrop of stunning visuals and a hauntingly beautiful score.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-lg font-bold">Details</h3>
                      <div className="space-y-2 text-sm">
                         <div className="flex justify-between border-b border-white/5 py-2">
                           <span className="text-white/40">Status</span>
                           <span>Released</span>
                         </div>
                         <div className="flex justify-between border-b border-white/5 py-2">
                           <span className="text-white/40">Original Language</span>
                           <span>English</span>
                         </div>
                         <div className="flex justify-between border-b border-white/5 py-2">
                           <span className="text-white/40">Production Countries</span>
                           <span>USA, UK</span>
                         </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'cast' && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
                  {movie.cast.map((actor, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center space-y-2 group cursor-pointer">
                      <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden border-2 border-transparent group-hover:border-brand transition-all duration-300">
                        <img 
                          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${actor}`} 
                          alt={actor}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="font-bold text-white/80 group-hover:text-white transition-colors">{actor}</span>
                      <span className="text-xs text-white/40">Starring Role</span>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
                   {[1, 2, 3].map((i) => (
                     <div key={i} className="glass rounded-2xl p-6 space-y-4">
                       <div className="flex items-center justify-between">
                         <div className="flex items-center gap-3">
                           <div className="w-10 h-10 rounded-full bg-brand/20 flex items-center justify-center font-bold">U{i}</div>
                           <div>
                             <div className="font-bold">User {i}</div>
                             <div className="text-xs text-white/40">May 18, 2024</div>
                           </div>
                         </div>
                         <div className="flex items-center gap-1 text-rating">
                           <Star size={14} fill="currentColor" />
                           <span className="font-bold">{(Math.random() * 2 + 8).toFixed(1)}</span>
                         </div>
                       </div>
                       <p className="text-white/70 leading-relaxed italic">
                         "Absolutely incredible cinematic experience. The visual storytelling techniques used were ahead of their time. A must-watch for any fan of the genre!"
                       </p>
                     </div>
                   ))}
                </div>
              )}
            </div>

            <MovieRow title="More Like This" movies={similarMovies} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
