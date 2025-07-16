// Lokasi file: app/lessons/page.tsx

"use client";

import LessonsPage from "@/components/pages/lessons-page";
import LoadingTransition from "@/components/loading-transition";

export default function LessonsRoute() {
  return (
    <>
      <LoadingTransition />
      <LessonsPage />
    </>
  );
}