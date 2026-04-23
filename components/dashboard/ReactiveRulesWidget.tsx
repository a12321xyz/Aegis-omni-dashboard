'use client';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Blocks, Play } from 'lucide-react';
import { toast } from 'sonner';

export function ReactiveRulesWidget() {
  const triggerRule = () => {
    toast.success('Reactive rule triggered natively by Rialo VM');
  };

  return (
    <Card className="flex flex-col h-full border-slate-200/60 dark:border-white/10 bg-white/60 dark:bg-zinc-900/40 shadow-sm dark:shadow-none">
      <CardHeader className="pb-4 shrink-0">
        <CardTitle className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#F27D26] flex items-center">
          <Blocks className="w-3.5 h-3.5 mr-2" />
          Reactive Automation
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-between">
        <div>
          <p className="text-sm text-slate-500 dark:text-zinc-400 mb-6">
            Native logic processing. No external keeper networks required.
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-slate-50/70 dark:bg-black/50 p-5 rounded-xl border border-slate-200/60 dark:border-white/5 border-l-2 border-l-[#F27D26] shadow-[inset_0_2px_10px_rgb(0,0,0,0.02)] dark:shadow-none">
              <p className="text-[11px] text-slate-500 dark:text-zinc-500 mb-1 font-mono uppercase tracking-wider">Trigger (Onchain)</p>
              <p className="text-sm font-medium text-slate-900 dark:text-zinc-100">If <span className="text-cyan-600 dark:text-cyan-400">Treasury APY</span> drops below <span className="font-mono">5.0%</span></p>
            </div>
            <div className="bg-slate-50/70 dark:bg-black/50 p-5 rounded-xl border border-slate-200/60 dark:border-white/5 border-l-2 border-l-emerald-500 shadow-[inset_0_2px_10px_rgb(0,0,0,0.02)] dark:shadow-none">
              <p className="text-[11px] text-slate-500 dark:text-zinc-500 mb-1 font-mono uppercase tracking-wider">Action (Atomic)</p>
              <p className="text-sm font-medium text-slate-900 dark:text-zinc-100">Reallocate 100% to <span className="text-emerald-600 dark:text-emerald-400">Yield Tranche A</span></p>
            </div>
          </div>
        </div>

        <Button 
          onClick={triggerRule} 
          className="w-full h-12 shrink-0 text-[15px] bg-[#F27D26]/10 text-[#F27D26] hover:bg-[#F27D26]/20 border border-[#F27D26]/30 shadow-none"
        >
          <Play className="w-4 h-4 mr-2" />
          Test Rule Execution
        </Button>
      </CardContent>
    </Card>
  );
}
