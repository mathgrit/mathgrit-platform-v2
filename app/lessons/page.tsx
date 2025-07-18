// Lokasi: app/lessons/page.tsx

import type { Metadata } from 'next';
import LessonsPage from "@/components/pages/lessons-page";

export const metadata: Metadata = {
  title: 'Lessons',
};

// File ini adalah 'pintu masuk' untuk URL /lessons
export default function LessonsRoute() {
  return <LessonsPage />;
}