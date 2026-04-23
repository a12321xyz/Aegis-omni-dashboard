'use client';

import { useWallet } from '@/components/WalletProvider';
import { Card, CardContent } from '@/components/ui/card';
import { MOCK_CHART_DATA } from '@/lib/mock-data';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'motion/react';
import { useTheme } from 'next-themes';

export function PortfolioOverview() {
  const { formatValue } = useWallet();
  const { theme } = useTheme();

  const totalValue = 25350.70;
  const blendedApy = 6.45;
  const isDark = theme !== 'light';

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="col-span-1"
      >
        <Card className="h-full bg-gradient-to-br from-white to-slate-50 dark:from-zinc-900/80 dark:to-zinc-950 border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none">
          <CardContent className="p-6 md:p-8 flex flex-col justify-center h-full">
            <p className="text-[13px] font-semibold text-slate-500 dark:text-zinc-500 mb-4 uppercase tracking-[0.2em]">Net Worth</p>
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight mb-8 md:mb-10 text-slate-900 dark:text-white font-[family-name:var(--font-display)] truncate">
              {formatValue(totalValue)}
            </h3>
            
            <div className="border-t border-slate-200/50 dark:border-white/5 pt-6 mt-auto">
              <p className="text-[11px] font-semibold text-slate-400 dark:text-zinc-500 uppercase tracking-widest mb-1.5">Blended APY</p>
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl font-mono tracking-tight text-emerald-600 dark:text-emerald-400 leading-none">+{blendedApy}%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="col-span-1 lg:col-span-2"
      >
        <Card className="h-full border-slate-200 dark:border-white/10 p-6 flex flex-col bg-white/60 dark:bg-transparent shadow-sm dark:shadow-none">
          <div className="flex justify-between items-center mb-6">
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-slate-500 dark:text-zinc-400">Growth (30d)</h4>
          </div>
          <div className="flex-1 min-h-[200px]">
             <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={MOCK_CHART_DATA}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={isDark ? "#22d3ee" : "#0891b2"} stopOpacity={isDark ? 0.3 : 0.15}/>
                    <stop offset="95%" stopColor={isDark ? "#22d3ee" : "#0891b2"} stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: isDark ? '#18181b' : '#ffffff', 
                    borderColor: isDark ? '#27272a' : '#e2e8f0', 
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' 
                  }}
                  itemStyle={{ color: isDark ? '#e4e4e7' : '#0f172a', fontFamily: 'monospace' }}
                  formatter={(value: any) => [formatValue(Number(value) || 0), "Value"]}
                />
                <Area type="monotone" dataKey="value" stroke={isDark ? "#22d3ee" : "#0891b2"} strokeWidth={2} fillOpacity={1} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
