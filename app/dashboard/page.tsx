// Lokasi file: app/dashboard/page.tsx

"use client";

import DashboardPage from "@/components/pages/dashboard-page";
import LoadingTransition from "@/components/loading-transition";

export default function DashboardRoute() {
  return (
    <>
      <LoadingTransition />
      <DashboardPage />
    </>
  );
}