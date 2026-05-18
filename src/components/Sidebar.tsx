import React from 'react';
import { Home, Search, Compass, Clock, Heart, Settings, User, LogOut, LayoutGrid, Bookmark } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

const navItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: Search, label: 'Search', path: '/search' },
  { icon: Compass, label: 'Discover', path: '/discover' },
  { icon: LayoutGrid, label: 'Categories', path: '/categories' },
];

const libraryItems = [
  { icon: Clock, label: 'Continue', path: '/continue' },
  { icon: Bookmark, label: 'Watchlist', path: '/watchlist' },
  { icon: Heart, label: 'Liked', path: '/liked' },
];

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 h-screen w-20 lg:w-64 bg-[#050505] border-r border-white/10 flex flex-col z-50">
      <div className="p-8 flex justify-center lg:justify-start">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-[#00D1FF] to-[#0055FF] rounded-lg flex items-center justify-center font-display font-bold text-xl shadow-[0_0_15px_rgba(0,209,255,0.4)]">C</div>
          <span className="font-display font-black text-xl hidden lg:block tracking-tighter">CINEMAX</span>
        </div>
      </div>

      <div className="flex-1 px-4 py-4 space-y-8 overflow-y-auto no-scrollbar">
        <div>
          <p className="px-5 label-uppercase mb-4 hidden lg:block">Discover</p>
          <div className="space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => cn(
                  "flex items-center gap-4 px-5 py-3 rounded-xl transition-all duration-300 group hover:bg-white/5",
                  isActive ? "text-[#00D1FF]" : "text-white/60 hover:text-white"
                )}
              >
                <item.icon size={20} className={cn("transition-transform duration-300 group-hover:scale-110")} />
                <span className="text-xs font-bold tracking-widest uppercase hidden lg:block">{item.label}</span>
              </NavLink>
            ))}
          </div>
        </div>

        <div>
           <p className="px-5 label-uppercase mb-4 hidden lg:block">Library</p>
          <div className="space-y-1">
            {libraryItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => cn(
                  "flex items-center gap-4 px-5 py-3 rounded-xl transition-all duration-300 group hover:bg-white/5",
                  isActive ? "text-[#00D1FF]" : "text-white/60 hover:text-white"
                )}
              >
                <item.icon size={20} className={cn("transition-transform duration-300 group-hover:scale-110")} />
                <span className="text-xs font-bold tracking-widest uppercase hidden lg:block">{item.label}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      <div className="p-4 space-y-1 mt-auto border-t border-white/10">
        <NavLink
          to="/settings"
          className={({ isActive }) => cn(
            "flex items-center gap-4 px-5 py-3 rounded-xl transition-all duration-300 group hover:bg-white/5",
            isActive ? "text-[#00D1FF]" : "text-white/60 hover:text-white"
          )}
        >
          <Settings size={20} />
          <span className="text-xs font-bold tracking-widest uppercase hidden lg:block">Settings</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
