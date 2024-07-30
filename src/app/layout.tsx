import type { Metadata } from 'next';

import { Inter } from 'next/font/google';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Explorer App',
  description: 'Explorer App is a concept of a web application for exploring the world.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="page-container">
          <div className="mobile-container">{children}</div>
        </div>
      </body>
    </html>
  );
}
