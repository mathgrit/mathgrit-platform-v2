// Lokasi file: app/quizzes/page.tsx

"use client";

import QuizzesPage from "@/components/pages/quizzes-page";
import LoadingTransition from "@/components/loading-transition";

// Ini adalah file "pintu masuk" untuk rute /quizzes
export default function QuizzesRoute() {
  return (
    <>
      <LoadingTransition />
      <QuizzesPage />
    </>
  );
}