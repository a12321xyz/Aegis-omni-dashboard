'use client';

import { useWallet } from '@/components/WalletProvider';
import { MOCK_ASSETS } from '@/lib/mock-data';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

export function AssetGrid() {
  const { formatValue } = useWallet();

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-[family-name:var(--font-display)] tracking-tight font-medium text-slate-900 dark:text-white">Active Positions</h3>
        <span className="text-[11px] uppercase tracking-widest font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full">{MOCK_ASSETS.length} Assets Connected</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_ASSETS.map((asset, i) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + i * 0.1, type: "spring", stiffness: 200, damping: 20 }}
            key={asset.id}
            className={cn(i === 0 ? "lg:col-span-2" : "col-span-1")} // First asset spans 2 cols on lg
          >
            <Card className="h-full group hover:-translate-y-1 transition-all duration-400 cursor-pointer border-slate-200/50 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/20 bg-white/40 dark:bg-zinc-950/40 shadow-sm dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]">
              <div className="p-6">
                <div className="flex justify-between items-start mb-8 gap-2">
                  <div className="flex items-center space-x-3 sm:space-x-4 min-w-0">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 shrink-0 rounded-xl bg-white dark:bg-zinc-900 flex items-center justify-center text-xl sm:text-2xl shadow-sm border border-slate-100 dark:border-white/5 group-hover:scale-110 transition-transform duration-500">
                      {asset.icon}
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-semibold text-sm sm:text-base text-slate-900 dark:text-white tracking-tight truncate">{asset.name}</h4>
                      <p className="text-[12px] sm:text-[13px] text-slate-500 dark:text-zinc-500 font-medium truncate">{asset.protocol}</p>
                    </div>
                  </div>
                  <Badge variant="accent" className="font-mono text-[9px] sm:text-[10px] tracking-wider uppercase px-2 shadow-none shrink-0">{asset.type}</Badge>
                </div>
                
                <div className="grid grid-cols-2 gap-x-4 gap-y-6 mt-auto">
                  <div>
                    <p className="text-[10px] text-slate-400 dark:text-zinc-500 mb-1.5 uppercase tracking-widest font-semibold">Balance</p>
                    <p className="font-mono text-sm text-slate-900 dark:text-zinc-300">{formatValue(asset.balance, false)}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 dark:text-zinc-500 mb-1.5 uppercase tracking-widest font-semibold">Net Value</p>
                    <p className="font-mono text-sm font-medium text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-500 transition-colors">{formatValue(asset.value)}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 dark:text-zinc-500 mb-1.5 uppercase tracking-widest font-semibold">APY</p>
                    <div className="inline-flex items-center gap-1.5 bg-cyan-50 dark:bg-cyan-950/30 text-cyan-700 dark:text-cyan-400 px-2 py-0.5 rounded font-mono text-xs font-semibold">
                      <span>{asset.apy.toFixed(2)}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
