import LessonsPage from "@/components/pages/lessons-page";
import LoadingTransition from "@/components/loading-transition";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lessons', // Ini sekarang akan bekerja
};

export default function LessonsRoute() {
  return (
    <>
      <LoadingTransition />
      <LessonsPage />
    </>
  );
}