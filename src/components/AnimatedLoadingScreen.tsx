import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const AnimatedLoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[1000] bg-[#050505] flex flex-col items-center justify-center p-8 overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 bg-[#00D1FF]/5 blur-[120px] rounded-full scale-150" />
          
          <div className="relative space-y-12 flex flex-col items-center">
            {/* Logo Animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex items-center gap-6"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#00D1FF] to-[#0055FF] rounded-2xl flex items-center justify-center font-display font-black text-5xl shadow-2xl shadow-[#00D1FF]/40">C</div>
              <span className="font-display font-black text-6xl tracking-tighter uppercase">CINEMAX</span>
            </motion.div>

            {/* Loading Bar */}
            <div className="w-64 h-1 bg-white/5 rounded-full overflow-hidden relative">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="absolute inset-y-0 left-0 w-full bg-[#00D1FF] shadow-[0_0_15px_#00D1FF]"
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-white/40 text-xs font-bold uppercase tracking-[0.3em] font-mono"
            >
              Immersive Cinema Experience
            </motion.p>
          </div>

          {/* Cinematic Light Leaks */}
          <motion.div 
            animate={{ 
              x: [0, 100, -50, 0],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute -top-20 -left-20 w-80 h-80 bg-brand/10 blur-[100px] rounded-full"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnimatedLoadingScreen;
