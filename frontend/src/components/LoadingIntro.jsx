import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Flame } from 'lucide-react';

export default function LoadingIntro({ onComplete }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 1800);
    const t2 = setTimeout(() => setStep(2), 3200);
    const t3 = setTimeout(() => {
      if (onComplete) onComplete();
    }, 5500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] text-white px-4 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-black to-black opacity-60"></div>
      
      <div className="relative w-full max-w-4xl text-center z-10 flex flex-col items-center">
        
        <div className="min-h-[160px] flex items-center justify-center w-full">
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div
                key="step0"
                initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)", transition: { duration: 0.4 } }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col items-center space-y-4"
              >

                <span className="text-sm md:text-base font-medium tracking-[0.3em] text-slate-400 uppercase">
                  Sardar Patel Institute of Technology
                </span>
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white uppercase">
                  Sports Committee
                </h1>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, y: 20, letterSpacing: "0.1em" }}
                animate={{ opacity: 1, y: 0, letterSpacing: "0.5em" }}
                exit={{ opacity: 0, y: -20, transition: { duration: 0.4 } }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <span className="text-sm sm:text-lg md:text-xl font-bold text-red-500 uppercase ml-4">
                  Presents
                </span>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, type: "spring", bounce: 0.4 }}
                className="space-y-6 relative"
              >


                <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-red-500 via-red-600 to-red-800 pb-2">
                  Agility Cup
                  <span className="block text-3xl sm:text-5xl md:text-6xl mt-2 text-white/80">2026</span>
                </h1>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <p className="text-xs sm:text-sm md:text-base font-semibold text-slate-400 uppercase tracking-[0.4em]">
                    Compete Connect Conquer
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Minimal Progress Bar */}
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 w-48 sm:w-64 h-1 bg-slate-800/50 rounded-full overflow-hidden backdrop-blur-sm z-50">
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: step === 0 ? '30%' : step === 1 ? '60%' : '100%' }}
            transition={{ duration: step === 2 ? 2.3 : 1.2, ease: 'easeInOut' }}
            className="h-full bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.5)]"
          />
        </div>



      </div>
    </motion.div>
  );
}
