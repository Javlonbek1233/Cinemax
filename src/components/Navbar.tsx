import React, { useState, useEffect } from 'react';
import { Bell, Search, User, Gift, ChevronDown, Menu } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 right-0 left-20 lg:left-64 z-40 transition-all duration-500 px-12 h-24 flex items-center justify-between",
      isScrolled ? "bg-bg-deep/90 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
    )}>
      <div className="flex gap-10 items-center">
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-40 hover:opacity-100 cursor-pointer transition-opacity">Discover</span>
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-100 border-b-2 border-[#00D1FF] pb-1 cursor-pointer">Cinema</span>
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-40 hover:opacity-100 cursor-pointer transition-opacity">Series</span>
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-40 hover:opacity-100 cursor-pointer transition-opacity">Premium</span>
      </div>

      <div className="flex items-center gap-8">
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex -space-x-3">
             <div className="w-9 h-9 rounded-full border-2 border-bg-deep bg-gray-800 shadow-xl" />
             <div className="w-9 h-9 rounded-full border-2 border-bg-deep bg-[#00D1FF] flex items-center justify-center text-[10px] font-bold text-black shadow-xl">+</div>
          </div>
          <button className="px-6 py-2.5 border border-white/20 rounded-full text-[10px] font-bold tracking-widest uppercase hover:bg-white/10 transition-colors">
            Premium Account
          </button>
        </div>

        <button className="p-2 text-white/40 hover:text-white transition-colors relative">
          <Search size={20} />
        </button>
        
        <button className="p-2 text-white/40 hover:text-white transition-colors relative">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-[#00D1FF] rounded-full shadow-[0_0_8px_#00D1FF]" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
