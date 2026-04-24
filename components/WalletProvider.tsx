'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { toast } from 'sonner';

type WalletContextType = {
  isConnected: boolean;
  address: string | null;
  privacyMode: boolean;
  connect: () => void;
  disconnect: () => void;
  togglePrivacy: () => void;
  formatValue: (value: number, isCurrency?: boolean) => string;
};

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export function WalletProvider({ children }: { children: ReactNode }) {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState<string | null>(null);
  const [privacyMode, setPrivacyMode] = useState(false);

  // Load from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem('rialo_wallet_connected');
    const savedPrivacy = localStorage.getItem('rialo_privacy_mode');
    if (saved === 'true') {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsConnected(true);
      setAddress('0x8F9a...2B4c');
    }
    if (savedPrivacy === 'true') {
      setPrivacyMode(true);
    }
  }, []);

  const connect = () => {
    setIsConnected(true);
    setAddress('0x8F9a...2B4c');
    localStorage.setItem('rialo_wallet_connected', 'true');
    toast.success('Wallet connected to Rialo Mainnet');
  };

  const disconnect = () => {
    setIsConnected(false);
    setAddress(null);
    localStorage.removeItem('rialo_wallet_connected');
    toast.info('Wallet disconnected');
  };

  const togglePrivacy = () => {
    setPrivacyMode((prev) => {
      const next = !prev;
      localStorage.setItem('rialo_privacy_mode', String(next));
      if (next) toast.success('ZK-Privacy Mode Enabled');
      else toast.info('ZK-Privacy Mode Disabled');
      return next;
    });
  };

  const formatValue = (value: number, isCurrency = true) => {
    if (privacyMode) {
      return isCurrency ? '$***.**' : '***.**';
    }
    return isCurrency 
      ? new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value)
      : new Intl.NumberFormat('en-US', { maximumFractionDigits: 4 }).format(value);
  };

  return (
    <WalletContext.Provider 
      value={{ 
        isConnected, 
        address, 
        privacyMode, 
        connect, 
        disconnect, 
        togglePrivacy, 
        formatValue 
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet() {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
}
