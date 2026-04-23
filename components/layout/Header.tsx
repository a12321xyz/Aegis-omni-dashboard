'use client';

import { useWallet } from '@/components/WalletProvider';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { ThemeToggle } from '@/components/ThemeToggle';
import { LogOut, Shield } from 'lucide-react';
import { motion } from 'motion/react';

export function Header() {
  const { address, disconnect, privacyMode, togglePrivacy } = useWallet();

  return (
    <header className="h-20 border-b border-slate-200/60 dark:border-white/10 flex items-center justify-between px-4 md:px-8 bg-white/60 dark:bg-[#050505]/80 backdrop-blur-md sticky top-0 z-[100]">
      <div className="flex items-center space-x-4 min-w-0">
        <h2 className="text-xl font-medium tracking-tight text-slate-900 dark:text-white truncate">Overview</h2>
        {privacyMode && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="hidden sm:flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold shrink-0"
          >
            <Shield className="w-3 h-3" />
            <span className="uppercase tracking-wide">ZK-Secure</span>
          </motion.div>
        )}
      </div>

      <div className="flex items-center gap-2 sm:gap-3 shrink-0 ml-4">
        <div className="hidden md:flex items-center gap-3 px-4 h-10 rounded-full border border-slate-200/60 dark:border-white/10 bg-white/50 dark:bg-white/5 shadow-sm dark:shadow-none">
          <span className="text-xs text-slate-600 dark:text-zinc-400 font-medium tracking-wide">Privacy</span>
          <Switch checked={privacyMode} onCheckedChange={togglePrivacy} />
        </div>
        
        <ThemeToggle className="h-10 w-10 flex-shrink-0" />

        <div className="hidden sm:block h-6 w-px bg-slate-200 dark:bg-white/10 mx-1 sm:mx-2" />

        <div className="flex items-center sm:gap-4 sm:pl-2 h-10">
          <div className="hidden sm:flex flex-col items-end justify-center h-full">
            <span className="text-[10px] leading-[10px] uppercase tracking-wider text-slate-500 dark:text-zinc-500 font-medium mb-1">Connected</span>
            <span className="text-sm leading-none font-mono tracking-tight text-slate-900 dark:text-white truncate max-w-[100px]">{address}</span>
          </div>
          <Button variant="ghost" size="icon" onClick={disconnect} className="h-10 w-10 flex-shrink-0 rounded-full shadow-sm dark:shadow-none border border-slate-200/60 dark:border-transparent bg-white/50 dark:bg-transparent hover:bg-slate-100 dark:hover:bg-white/10 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white">
            <LogOut className="w-4 h-4 ml-0.5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
