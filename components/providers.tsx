// Lokasi file: components/providers.tsx

"use client";

import type { ReactNode } from "react";
import { ThemeProvider } from "@/contexts/theme-context";
import { AuthProvider } from "@/contexts/auth-context";
import { ProgressProvider } from "@/contexts/progress-context";
import { AnimatePresence } from "framer-motion";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ProgressProvider>
          <AnimatePresence mode="wait">
            {children}
          </AnimatePresence>
        </ProgressProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}