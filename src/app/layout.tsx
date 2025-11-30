// app/layout.tsx
import './globals.css';
import React from 'react';
import ScrollProgressBar from './components/ScrollProgressBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'LearnFlexAI',
  description: 'Empowering women in technology',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <ScrollProgressBar />
        <Navbar />
        <main className="pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
