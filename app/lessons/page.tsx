// Lokasi file: app/lessons/page.tsx

"use client";

import LessonsPage from "@/components/pages/lessons-page";
import LoadingTransition from "@/components/loading-transition";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lessons', // Hasil akhirnya akan menjadi "Lessons - MathGrit"
};

export default function LessonsRoute() {
  return (
    <>
      <LoadingTransition />
      <LessonsPage />
    </>
  );
}