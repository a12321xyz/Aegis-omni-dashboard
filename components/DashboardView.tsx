'use client';

import { useEffect, useState } from 'react';
import { useWallet } from '@/components/WalletProvider';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import { MobileNav } from '@/components/layout/MobileNav';
import { PortfolioOverview } from '@/components/dashboard/PortfolioOverview';
import { AssetGrid } from '@/components/dashboard/AssetGrid';
import { OmniBridgeWidget } from '@/components/dashboard/OmniBridgeWidget';
import { ReactiveRulesWidget } from '@/components/dashboard/ReactiveRulesWidget';
import { RecentActivityWidget } from '@/components/dashboard/RecentActivityWidget';
import { SettingsView } from '@/components/dashboard/SettingsView';

export function DashboardView() {
  const [activeTab, setActiveTab] = useState('Portfolio');

  return (
    <div className="flex min-h-screen">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-4 md:p-8 relative">
          <div className="max-w-7xl mx-auto space-y-8 pb-24 md:pb-12">
            {activeTab === 'Portfolio' && (
              <>
                <PortfolioOverview />
                <AssetGrid />
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                  <div className="h-full"><OmniBridgeWidget /></div>
                  <div className="h-full"><ReactiveRulesWidget /></div>
                </div>

                <div className="mt-8">
                  <RecentActivityWidget />
                </div>
              </>
            )}
            {activeTab === 'Settings' && <SettingsView />}
            {/* Add placeholders for other tabs if they don't have implementations yet */}
            {activeTab !== 'Portfolio' && activeTab !== 'Settings' && (
              <div className="flex items-center justify-center h-64 rounded-3xl border border-dashed border-slate-300 dark:border-white/10 text-slate-500">
                <p>Module under construction: {activeTab}</p>
              </div>
            )}
          </div>
        </main>
        <MobileNav activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    </div>
  );
}
