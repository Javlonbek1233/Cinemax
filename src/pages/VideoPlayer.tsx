import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Play, Pause, Rewind, FastForward, Volume2, VolumeX, Maximize, ArrowLeft, Settings, SkipForward, Info } from 'lucide-react';
import { movies } from '../data/mockData';
import { cn } from '../lib/utils';

const VideoPlayer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find(m => m.id === id) || movies[0];
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(80);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && progress < 100) {
      interval = setInterval(() => {
        setProgress(prev => Math.min(prev + 0.1, 100));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, progress]);

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) setShowControls(false);
    }, 3000);
  };

  const formatTime = (p: number) => {
    const totalSeconds = 165 * 60; // 2h 45m
    const currentSeconds = (p / 100) * totalSeconds;
    const h = Math.floor(currentSeconds / 3600);
    const m = Math.floor((currentSeconds % 3600) / 60);
    const s = Math.floor(currentSeconds % 60);
    return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div 
      className="fixed inset-0 z-[100] bg-black flex flex-col cursor-none select-none"
      onMouseMove={handleMouseMove}
      style={{ cursor: showControls ? 'default' : 'none' }}
    >
      {/* Fake Video */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img 
          src={movie.bannerUrl} 
          alt={movie.title}
          className={cn(
            "w-full h-full object-cover transition-opacity duration-1000",
            isPlaying ? "opacity-30 blur-sm" : "opacity-60"
          )}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        {isPlaying ? (
          <div className="flex flex-col items-center gap-6 z-10 animate-pulse">
             <div className="w-16 h-16 border-4 border-brand border-t-transparent rounded-full animate-spin" />
             <p className="text-white/40 font-mono tracking-widest text-sm uppercase">Buffering Cinematic Experience...</p>
          </div>
        ) : (
          <button 
            onClick={() => setIsPlaying(true)}
            className="w-24 h-24 bg-brand text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform z-10 shadow-2xl shadow-brand/40"
          >
            <Play fill="currentColor" size={40} />
          </button>
        )}
      </div>

      {/* Top Controls */}
      <motion.div 
        animate={{ opacity: showControls ? 1 : 0, y: showControls ? 0 : -20 }}
        className="relative z-20 p-8 flex items-center justify-between bg-gradient-to-b from-black/80 to-transparent"
      >
        <div className="flex items-center gap-6">
          <button 
            onClick={() => navigate(-1)}
            className="p-3 hover:bg-white/10 rounded-full transition-colors"
          >
            <ArrowLeft size={28} />
          </button>
          <div>
            <h1 className="text-2xl font-black font-display tracking-tight leading-none">{movie.title}</h1>
            <p className="text-white/40 text-sm font-medium">S1:E12 • Part {movie.id}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <button className="p-3 hover:bg-white/10 rounded-full transition-colors"><Info size={24} /></button>
          <button className="p-3 hover:bg-white/10 rounded-full transition-colors"><Settings size={24} /></button>
        </div>
      </motion.div>

      {/* Bottom Controls */}
      <motion.div 
        animate={{ opacity: showControls ? 1 : 0, y: showControls ? 0 : 20 }}
        className="mt-auto relative z-20 p-8 space-y-6 bg-gradient-to-t from-black/80 to-transparent"
      >
        {/* Progress Bar */}
        <div className="group relative h-2 w-full bg-white/10 rounded-full overflow-hidden cursor-pointer hover:h-3 transition-all duration-300">
           <div 
             className="absolute h-full bg-brand" 
             style={{ width: `${progress}%` }}
           />
           <div 
             className="absolute h-full bg-white opacity-0 group-hover:opacity-30 transition-opacity" 
             style={{ width: '65%' }} // Buffer
           />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-3 hover:bg-white/10 rounded-full transition-colors"
            >
              {isPlaying ? <Pause fill="currentColor" size={32} /> : <Play fill="currentColor" size={32} />}
            </button>
            
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-white/10 rounded-full transition-colors"><Rewind size={24} /></button>
              <button className="p-2 hover:bg-white/10 rounded-full transition-colors"><FastForward size={24} /></button>
              <button className="p-2 hover:bg-white/10 rounded-full transition-colors"><SkipForward size={24} /></button>
            </div>

            <div className="flex items-center gap-4 group">
              <button 
                onClick={() => setIsMuted(!isMuted)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
              </button>
              <div className="w-24 h-1 bg-white/20 rounded-full overflow-hidden relative">
                <div 
                  className="absolute h-full bg-white" 
                  style={{ width: `${isMuted ? 0 : volume}%` }}
                />
              </div>
            </div>
            
            <div className="text-sm font-mono tracking-tighter text-white/60">
              <span className="text-white font-bold">{formatTime(progress)}</span> / 2:45:00
            </div>
          </div>

          <div className="flex items-center gap-6">
             <div className="text-xs font-bold uppercase tracking-widest text-white/40">Next: S1:E13 - The Rebirth</div>
             <button className="p-3 hover:bg-white/10 rounded-full transition-colors"><Maximize size={24} /></button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default VideoPlayer;
