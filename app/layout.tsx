// Lokasi file: app/layout.tsx

import type { Metadata } from 'next';
import { Providers } from '@/components/providers'; // Impor komponen provider baru
import Navbar from '@/components/navbar';
import './globals.css';
import 'katex/dist/katex.min.css';

// PERUBAHAN: Menambahkan metadata dengan template judul
export const metadata: Metadata = {
  title: {
    template: '%s - MathGrit', // %s akan diganti dengan judul dari setiap halaman
    default: 'MathGrit - Immersive Math Learning', // Judul default (untuk halaman utama)
  },
  description: 'Master mathematics through interactive lessons, adaptive quizzes, and challenging contest problems.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {/* Bungkus semua konten dengan komponen Providers */}
        <Providers>
          <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-[#0d1b2a] dark:to-[#1b263b] transition-colors duration-300">
            <Navbar />
            <main>{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}