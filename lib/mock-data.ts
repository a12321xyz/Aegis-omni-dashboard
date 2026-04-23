export type Asset = {
  id: string;
  name: string;
  protocol: string;
  type: string;
  apy: number;
  balance: number;
  value: number;
  icon: string;
};

export const MOCK_ASSETS: Asset[] = [
  {
    id: "us-treasury",
    name: "US Treasury Bill Pool",
    protocol: "Ondo Finance",
    type: "Fixed Yield",
    apy: 5.25,
    balance: 14500,
    value: 14500,
    icon: "🏦",
  },
  {
    id: "consumer-credit",
    name: "Consumer Loan Tranche A",
    protocol: "Centrifuge",
    type: "Private Credit",
    apy: 8.4,
    balance: 2400.5,
    value: 2400.5,
    icon: "💳",
  },
  {
    id: "real-estate",
    name: "Tokenized NY Commercial",
    protocol: "RealT",
    type: "Real Estate",
    apy: 6.8,
    balance: 5.2,
    value: 8450.2,
    icon: "🏢",
  },
];

export const MOCK_CHART_DATA = [
  { name: "Apr 1", value: 24000 },
  { name: "Apr 5", value: 24200 },
  { name: "Apr 10", value: 24350 },
  { name: "Apr 15", value: 24600 },
  { name: "Apr 20", value: 24900 },
  { name: "Apr 23", value: 25350 },
];

export const MOCK_ACTIVITY = [
  {
    id: "tx-1",
    type: "Yield Paid",
    asset: "US Treasury Bill Pool",
    amount: "+$64.20",
    time: "2 hours ago",
    status: "Completed",
  },
  {
    id: "tx-2",
    type: "Deposit",
    asset: "Consumer Loan Tranche A",
    amount: "+$500.00",
    time: "1 day ago",
    status: "Completed",
  },
  {
    id: "tx-3",
    type: "Omni Bridge",
    asset: "USDC (Ethereum -> Rialo)",
    amount: "$2,400.00",
    time: "3 days ago",
    status: "Completed",
  },
];
