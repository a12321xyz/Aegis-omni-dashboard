'use client';

import { useWallet } from '@/components/WalletProvider';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRightLeft } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export function OmniBridgeWidget() {
  const [isBridging, setIsBridging] = useState(false);
  const { privacyMode } = useWallet();

  const handleBridge = () => {
    setIsBridging(true);
    toast.loading('Initiating Omni-Transaction...', { id: 'bridge' });
    
    setTimeout(() => {
      toast.success('Omni-Routed 500 USDC to Rialo Treasury Pool', { id: 'bridge' });
      setIsBridging(false);
    }, 2000);
  };

  return (
    <Card className="flex flex-col h-full border-slate-200/50 dark:border-white/5 bg-white/40 dark:bg-zinc-950/40">
      <CardHeader className="pb-4 shrink-0">
        <CardTitle className="text-[11px] uppercase tracking-[0.2em] font-semibold text-cyan-600 dark:text-cyan-400 flex items-center">
          <ArrowRightLeft className="w-3.5 h-3.5 mr-2" />
          Omni-Router Simulator
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-between">
        <div>
          <p className="text-[13px] text-slate-500 dark:text-zinc-500 mb-6 leading-relaxed">
            Simulate Rialo&apos;s unified liquidity. Route assets from Ethereum directly into an RWA pool in one transaction.
          </p>

          <div className="bg-white/50 dark:bg-black/50 p-6 rounded-2xl border border-slate-200/50 dark:border-white/5 mb-8 space-y-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]">
            <div className="flex justify-between items-center text-[13px]">
              <span className="text-slate-500 dark:text-zinc-500 font-medium">From</span>
              <span className="font-semibold bg-slate-100 dark:bg-zinc-900 px-3 py-1.5 rounded-lg border border-slate-200/50 dark:border-white/5 tracking-tight">Ethereum (USDC)</span>
            </div>
            <div className="flex justify-between items-center text-[13px]">
              <span className="text-slate-500 dark:text-zinc-500 font-medium">Amount</span>
              <span className="font-mono text-sm tracking-tight text-slate-900 dark:text-zinc-100">{privacyMode ? '***.**' : '500.00'} USDC</span>
            </div>
            <div className="flex justify-between items-center text-[13px] border-t border-slate-200/50 dark:border-white/5 pt-5 mt-4">
              <span className="text-slate-500 dark:text-zinc-500 font-medium">To</span>
              <span className="font-semibold tracking-tight text-emerald-600 dark:text-emerald-400">Rialo Treasury Pool</span>
            </div>
            <div className="flex justify-between items-center text-[13px]">
              <span className="text-slate-500 dark:text-zinc-500 font-medium">Expected Yield</span>
              <span className="font-mono text-sm font-medium tracking-tight text-slate-900 dark:text-zinc-100">5.25% APY</span>
            </div>
          </div>
        </div>

        <Button 
          onClick={handleBridge} 
          disabled={isBridging}
          variant="accent" 
          className="w-full h-12 shrink-0 text-[14px] font-semibold tracking-wide rounded-xl shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          {isBridging ? "Routing..." : "Simulate 1-Click Route"}
        </Button>
      </CardContent>
    </Card>
  );
}
