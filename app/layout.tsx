// Lokasi file: app/layout.tsx

"use client"; // Menandakan ini adalah Client Component untuk bisa menggunakan hooks dan context

import 'katex/dist/katex.min.css'; // CSS untuk me-render LaTeX
import './globals.css';             // CSS global Anda

// Impor semua provider dan komponen layout yang dibutuhkan
import { ThemeProvider } from "@/contexts/theme-context";
import { AuthProvider } from "@/contexts/auth-context";
import { ProgressProvider } from "@/contexts/progress-context";
import Navbar from "@/components/navbar";
import { AnimatePresence } from "framer-motion";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {/* Membungkus seluruh aplikasi dengan semua context provider */}
        <ThemeProvider>
          <AuthProvider>
            <ProgressProvider>
              {/* Div utama untuk latar belakang dan layout */}
              <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-[#0d1b2a] dark:to-[#1b263b] transition-colors duration-300">
                {/* Navbar akan selalu tampil di semua halaman */}
                <Navbar />
                <AnimatePresence mode="wait">
                  {/* Konten halaman spesifik (dari file page.tsx) akan dirender di sini */}
                  <main>{children}</main>
                </AnimatePresence>
              </div>
            </ProgressProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}