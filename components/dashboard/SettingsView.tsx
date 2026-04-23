'use client';

import { useTheme } from 'next-themes';
import { useWallet } from '@/components/WalletProvider';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Settings, Shield, Bell, Key, LogOut } from 'lucide-react';

export function SettingsView() {
  const { theme, setTheme } = useTheme();
  const { privacyMode, togglePrivacy, disconnect } = useWallet();

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h2 className="text-3xl font-[family-name:var(--font-display)] tracking-tight font-medium text-slate-900 dark:text-white mb-2">Settings</h2>
        <p className="text-slate-500 dark:text-zinc-400">Manage your workspace preferences, security configurations, and active connections.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Navigation Sidebar for Settings - Could be broken out if it gets complex */}
        <div className="col-span-1 space-y-2">
          <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white font-medium border border-transparent dark:border-white/5 shadow-sm dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]">
            <Settings className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>General</span>
          </button>
          <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-slate-600 dark:text-zinc-400 hover:bg-slate-50 dark:hover:bg-white/5 font-medium border border-transparent transition-colors">
            <Shield className="w-4 h-4" />
            <span>Security & ZK</span>
          </button>
          <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-slate-600 dark:text-zinc-400 hover:bg-slate-50 dark:hover:bg-white/5 font-medium border border-transparent transition-colors">
            <Bell className="w-4 h-4" />
            <span>Notifications</span>
          </button>
          <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-slate-600 dark:text-zinc-400 hover:bg-slate-50 dark:hover:bg-white/5 font-medium border border-transparent transition-colors">
            <Key className="w-4 h-4" />
            <span>API Keys</span>
          </button>
        </div>

        {/* Settings Content Area */}
        <div className="col-span-1 md:col-span-2 space-y-6">
          
          <Card className="border-slate-200/50 dark:border-white/5 bg-white/40 dark:bg-zinc-950/40">
            <CardHeader className="pb-6 border-b border-slate-200/50 dark:border-white/5">
              <CardTitle className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white">Workspace Preferences</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-8">
              
              {/* Theme Setting */}
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-sm font-semibold text-slate-900 dark:text-zinc-100 mb-1 block">Appearance</Label>
                  <p className="text-[13px] text-slate-500 dark:text-zinc-500">Toggle between light and dark mode for your dashboard interface.</p>
                </div>
                <div className="flex bg-slate-100 dark:bg-zinc-900 p-1 rounded-xl border border-slate-200/50 dark:border-white/5">
                  <button 
                    onClick={() => setTheme('light')}
                    className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${theme === 'light' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                  >
                    Light
                  </button>
                  <button 
                    onClick={() => setTheme('dark')}
                    className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${theme === 'dark' ? 'bg-zinc-800 text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-300'}`}
                  >
                    Dark
                  </button>
                </div>
              </div>

              {/* Privacy Mode Setting */}
              <div className="flex items-center justify-between">
                <div className="pr-8">
                  <Label className="text-sm font-semibold text-slate-900 dark:text-zinc-100 mb-1 block">ZK Privacy Mode</Label>
                  <p className="text-[13px] text-slate-500 dark:text-zinc-500">Mask sensitive portfolio values and transaction amounts across the application using zero-knowledge client-side obfuscation.</p>
                </div>
                <Switch 
                  checked={privacyMode} 
                  onCheckedChange={togglePrivacy} 
                  className="data-[state=checked]:bg-emerald-500"
                />
              </div>

            </CardContent>
          </Card>

          <Card className="border-red-200/50 dark:border-red-900/20 bg-red-50/50 dark:bg-red-950/10">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-semibold tracking-tight text-red-600 dark:text-red-400">Danger Zone</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="text-[13px] text-red-600/80 dark:text-red-400/80">Disconnect your current wallet session. This will clear local state and require re-authentication.</p>
                </div>
                <Button 
                  variant="destructive" 
                  onClick={disconnect}
                  className="w-full sm:w-auto shrink-0 bg-red-600 hover:bg-red-700 text-white shadow-sm dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] gap-2"
                >
                  <LogOut className="w-4 h-4" />
                  Disconnect Session
                </Button>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}
