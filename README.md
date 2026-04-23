# Aegis Omni-Dashboard

A privacy-preserving portfolio dashboard for Real World Assets (RWA) on the Rialo Network. 

Aegis Core provides an institutional-grade, zero-knowledge interface for tracking and managing unified liquidity, private credit, tokenized real estate, and fixed yield investments natively across chains.

## Features

- **Portfolio Analytics:** Track real-time net worth, blended APY, and active asset positions with interactive charts.
- **ZK Privacy Mode:** 1-click client-side obfuscation for masking sensitive portfolio values and transaction amounts.
- **Omni-Router:** Interface for simulating cross-chain routing models (e.g., Ethereum stablecoins into Rialo RWA pools).
- **Reactive Automation:** Configurable rules engine for conditional treasury reallocation and yield management.
- **Responsive Design:** Fully adaptive, fluid interface with mobile-friendly navigation.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Animations:** [Motion for React](https://motion.dev/)
- **Charts:** [Recharts](https://recharts.org/)

## Getting Started

### Prerequisites

Ensure you have Node.js (v18.17.0 or higher) installed on your local environment.

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Project Structure

- `/app`: Next.js App Router endpoints and global layout/styles.
- `/components`: Reusable UI components, including the Dashboard features, standard shadcn UI parts, and core layout pieces.
- `/lib`: Utility functions and static mock data sources.

## License

MIT
