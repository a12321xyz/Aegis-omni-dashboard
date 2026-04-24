import type {Metadata} from 'next';
import './globals.css'; // Global styles
import { Inter, JetBrains_Mono, Outfit } from 'next/font/google';
import { WalletProvider } from '@/components/WalletProvider';
import { ThemeProvider } from '@/components/ThemeProvider';
import { ToasterProvider } from '@/components/ToastProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'Aegis | Omni-Dashboard',
  description: 'A privacy-preserving portfolio dashboard for Real World Assets on the Rialo Network.',
};

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${outfit.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased min-h-screen bg-slate-50 dark:bg-[#050505] text-slate-900 dark:text-zinc-100 selection:bg-cyan-500/30 transition-colors duration-300" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <WalletProvider>
            {children}
            <ToasterProvider />
            <Analytics />
            <SpeedInsights />
          </WalletProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
