import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { motion } from 'motion/react';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  return (
    <div className="flex bg-bg-deep min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-20 lg:ml-64 relative overflow-x-hidden">
        <Navbar />
        {/* Animated background elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand/5 blur-[100px] rounded-full animate-pulse" />
          <div className="absolute bottom-[20%] right-[-10%] w-[30%] h-[30%] bg-blue-500/5 blur-[100px] rounded-full" />
        </div>

        <motion.div
           key={location.pathname}
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           exit={{ opacity: 0, x: -20 }}
           transition={{ duration: 0.3, ease: "easeOut" }}
           className="relative z-10"
        >
          {children}
        </motion.div>
        
        {/* Footer info */}
        <footer className="mt-20 border-t border-white/5 p-12 text-center text-white/30 text-sm">
          <div className="flex justify-center gap-8 mb-6">
            <span className="hover:text-white cursor-pointer transition-colors">Help Center</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Use</span>
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Contact Us</span>
          </div>
          <p>© 2026 CINEMAX Streaming. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
};

export default Layout;
