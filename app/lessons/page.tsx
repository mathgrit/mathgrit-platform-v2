// Lokasi file: app/lessons/page.tsx


import type { Metadata } from 'next';
// Pastikan ini mengimpor komponen LessonsPage, bukan yang lain
import LessonsPage from "@/components/pages/lessons-page"; 


export const metadata: Metadata = {
  title: 'Lessons',
};

// Pastikan fungsi ini me-render <LessonsPage />
export default function LessonsRoute() {
  return <LessonsPage />;
}