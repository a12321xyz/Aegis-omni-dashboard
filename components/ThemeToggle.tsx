'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={cn("w-10 h-10 rounded-full border border-transparent flex-shrink-0", className)} />;
  }

  return (
    <Button
      variant="ghost" 
      size="icon" 
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className={cn(
        "rounded-full shadow-sm dark:shadow-none border border-slate-200/60 dark:border-white/10 bg-white/50 dark:bg-zinc-800/50 text-slate-600 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-white backdrop-blur-sm",
        className
      )}
    >
      {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </Button>
  );
}
