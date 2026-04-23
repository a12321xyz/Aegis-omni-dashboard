'use client';

import { useWallet } from '@/components/WalletProvider';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { motion } from 'motion/react';
import { Lock, Shield, Zap } from 'lucide-react';
import { useState } from 'react';

export function LandingView() {
  const { connect } = useWallet();
  const [isConnecting, setIsConnecting] = useState(false);

  const handleConnect = () => {
    setIsConnecting(true);
    setTimeout(() => {
      connect();
    }, 1500); // Simulate connection delay
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <div className="absolute top-8 right-8 z-50">
        <ThemeToggle className="h-10 w-10 flex-shrink-0 bg-transparent border-slate-200/50 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/5" />
      </div>

      {/* Cinematic Background */}
      <div className="absolute w-full h-full inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-cyan-400/20 dark:bg-cyan-600/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-70 animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute top-1/3 right-1/4 w-[35vw] h-[35vw] bg-emerald-400/20 dark:bg-emerald-600/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-60 animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }} />
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} // smooth spring-like easing
        className="z-10 flex flex-col items-center text-center max-w-4xl px-6 w-full"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/80 dark:bg-white/5 border border-slate-200/50 dark:border-white/10 mb-8 backdrop-blur-xl shadow-sm dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
        >
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)] animate-pulse"></span>
          <span className="text-[11px] font-semibold tracking-widest uppercase text-slate-600 dark:text-zinc-300">Aegis Core V1 is Live</span>
        </motion.div>

        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[110px] leading-[0.95] tracking-[-0.04em] font-medium font-[family-name:var(--font-display)] mb-8 text-slate-900 dark:text-white">
          Assets,<br />
          <span className="relative">
            <span className="absolute -inset-1 blur-2xl opacity-20 bg-gradient-to-r from-cyan-500 to-emerald-500 dark:opacity-40"></span>
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-emerald-600 dark:from-cyan-400 dark:to-emerald-400">
              Unified.
            </span>
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 dark:text-zinc-400 mb-12 max-w-2xl font-light leading-relaxed">
          The institutional-grade, zero-knowledge dashboard. Private credit, tokenized real estate, and fixed yield—routed natively across chains.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-4">
          <Button 
            size="lg" 
            onClick={handleConnect} 
            disabled={isConnecting}
            className="group relative w-full sm:w-auto h-14 rounded-full px-8 text-[15px] font-medium overflow-hidden border border-slate-800 dark:border-white/10 bg-slate-900 text-white dark:bg-white/5 dark:text-white transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative flex items-center justify-center gap-2">
              {isConnecting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Establishing Link...
                </>
              ) : (
                <>
                  Enter Dashboard
                  <motion.span 
                    className="ml-1"
                    initial={{ x: 0 }}
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >→</motion.span>
                </>
              )}
            </div>
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 rounded-full px-8 text-[15px] font-medium border-slate-200 hover:bg-slate-100 dark:border-white/10 dark:hover:bg-white/5 dark:text-zinc-300 text-slate-700 bg-white/50 backdrop-blur-md dark:bg-transparent shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]">
            Read Documentation
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
