'use client';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MOCK_ACTIVITY } from '@/lib/mock-data';
import { useWallet } from '@/components/WalletProvider';
import { CheckCircle2, ArrowRightLeft, DollarSign } from 'lucide-react';
import { motion } from 'motion/react';

export function RecentActivityWidget() {
  const { privacyMode } = useWallet();

  const getIcon = (type: string) => {
    switch (type) {
      case 'Yield Paid':
        return <DollarSign className="w-4 h-4 text-emerald-500" />;
      case 'Deposit':
        return <CheckCircle2 className="w-4 h-4 text-cyan-500" />;
      case 'Omni Bridge':
        return <ArrowRightLeft className="w-4 h-4 text-purple-500" />;
      default:
        return <CheckCircle2 className="w-4 h-4 text-slate-500" />;
    }
  };

  return (
    <Card className="border-slate-200/50 dark:border-white/5 bg-white/60 dark:bg-zinc-900/40">
      <CardHeader className="pb-4">
        <CardTitle className="text-[11px] uppercase tracking-[0.2em] font-semibold text-slate-500 dark:text-zinc-500">
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {MOCK_ACTIVITY.map((activity, i) => (
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              key={activity.id} 
              className="flex items-center justify-between p-3.5 rounded-xl hover:bg-white dark:hover:bg-zinc-800/50 transition-colors border border-transparent dark:hover:border-white/5 hover:border-slate-200/50 hover:shadow-sm"
            >
              <div className="flex items-center space-x-4">
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-zinc-900 border border-slate-200/50 dark:border-white/5 shadow-sm">
                  {getIcon(activity.type)}
                </div>
                <div>
                  <p className="font-semibold tracking-tight text-sm text-slate-900 dark:text-zinc-100">{activity.type}</p>
                  <p className="text-[13px] font-medium text-slate-500 dark:text-zinc-500">{activity.asset}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="text-right">
                  <p className="font-mono text-[13px] tracking-tight font-medium text-slate-900 dark:text-zinc-100">
                    {privacyMode ? '***.**' : activity.amount}
                  </p>
                  <p className="text-[12px] font-medium text-slate-500 dark:text-zinc-500">{activity.time}</p>
                </div>
                <Badge variant="outline" className="hidden sm:inline-flex shadow-none font-mono text-[10px] uppercase tracking-wider">{activity.status}</Badge>
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
