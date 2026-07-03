import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '443LOVE | Love Always Wins',
  description: 'A premium Solana meme coin experience built for the 443LOVE community.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
