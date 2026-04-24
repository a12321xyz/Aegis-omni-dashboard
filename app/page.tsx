'use client';

import { useEffect, useState } from 'react';
import { useWallet } from '@/components/WalletProvider';
import { LandingView } from '@/components/LandingView';
import { DashboardView } from '@/components/DashboardView';

export default function Page() {
  const { isConnected } = useWallet();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  // Prevent hydration mismatch by delaying the render block until it mounts on client
  if (!mounted) {
    return (
      <main className="w-full flex h-screen items-center justify-center">
        <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-emerald-500 animate-pulse"></div>
      </main>
    )
  }

  return (
    <main className="w-full">
      {isConnected ? <DashboardView /> : <LandingView />}
    </main>
  );
}
