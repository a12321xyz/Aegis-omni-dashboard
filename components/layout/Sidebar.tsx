import { PieChart, List, Settings, ArrowRightLeft, Blocks } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Sidebar({ activeTab = 'Portfolio', onTabChange }: { activeTab?: string, onTabChange?: (tab: string) => void }) {
  const navItems = [
    { icon: PieChart, label: 'Portfolio' },
    { icon: List, label: 'Asset Directory' },
    { icon: ArrowRightLeft, label: 'Omni Bridge' },
    { icon: Blocks, label: 'Reactive Rules' },
    { icon: Settings, label: 'Settings' },
  ];

  return (
    <aside className="w-64 border-r border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-[#0A0A0A]/60 backdrop-blur-3xl min-h-screen flex flex-col hidden md:flex">
      <div className="h-20 flex items-center px-8 border-b border-transparent">
        <div className="flex items-center space-x-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-emerald-500 flex items-center justify-center font-bold text-white shadow-sm">A</div>
          <span className="font-semibold text-lg tracking-tight text-slate-900 dark:text-white font-[family-name:var(--font-display)]">Aegis Core</span>
        </div>
      </div>
      
      <div className="flex-1 px-4 py-6 space-y-1">
        {navItems.map((item) => {
          const isActive = activeTab === item.label;
          return (
            <button
              key={item.label}
              onClick={() => onTabChange?.(item.label)}
              className={cn(
                "w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors cursor-pointer",
                isActive 
                  ? "bg-slate-900 dark:bg-white/10 text-white shadow-[0_1px_2px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]" 
                  : "text-slate-600 dark:text-zinc-400 hover:bg-slate-100 hover:dark:bg-white/5 hover:text-slate-900 hover:dark:text-zinc-100"
              )}
            >
              <item.icon className={cn("w-4 h-4", isActive ? "text-cyan-400" : "opacity-80")} />
              <span>{item.label}</span>
            </button>
          )
        })}
      </div>

      <div className="p-6">
        <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 p-4 shadow-sm dark:shadow-none">
          <p className="text-xs text-slate-500 dark:text-zinc-400 mb-2">Network Status</p>
          <div className="flex items-center space-x-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
            <span className="text-sm font-medium font-mono text-slate-900 dark:text-white">Mainnet</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
