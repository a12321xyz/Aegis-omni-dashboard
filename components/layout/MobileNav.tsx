import { PieChart, List, Settings, ArrowRightLeft, Blocks } from 'lucide-react';
import { cn } from '@/lib/utils';

export function MobileNav({ activeTab, onTabChange }: { activeTab: string, onTabChange: (tab: string) => void }) {
  const navItems = [
    { icon: PieChart, label: 'Portfolio' },
    { icon: List, label: 'Asset Directory' },
    { icon: ArrowRightLeft, label: 'Omni Bridge' },
    { icon: Blocks, label: 'Reactive Rules' },
    { icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-[100] bg-white/80 dark:bg-black/95 backdrop-blur-xl border-t border-slate-200/50 dark:border-white/10 pb-[env(safe-area-inset-bottom)]">
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.map((item) => {
          const isActive = activeTab === item.label;
          return (
            <button
              key={item.label}
              onClick={() => onTabChange(item.label)}
              className={cn(
                "flex flex-col items-center justify-center p-2 rounded-xl min-w-[64px] transition-all",
                isActive 
                  ? "text-cyan-600 dark:text-cyan-400" 
                  : "text-slate-500 dark:text-zinc-500 hover:text-slate-900 dark:hover:text-zinc-300"
              )}
            >
              <item.icon className={cn("w-5 h-5 mb-1", isActive ? "scale-110" : "")} />
              <span className="text-[10px] font-medium leading-none">{item.label.split(' ')[0]}</span>
            </button>
          )
        })}
      </div>
    </div>
  );
}