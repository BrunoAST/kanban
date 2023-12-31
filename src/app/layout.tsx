import './globals.css';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import React, { ReactNode } from 'react';
import Menu from './components/menu';
import ThemeProvider from './providers/theme-provider';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['500', '700'],
  style: 'normal',
  preload: true
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${plusJakartaSans.className} dark:bg-grey-600 bg-grey-100`}>
        <ThemeProvider>
          <Menu>{children}</Menu>
        </ThemeProvider>
      </body>
    </html>
  );
}
