// Lokasi file: app/signin/page.tsx

"use client";

import SignUpPage from "@/components/pages/signup-page";
import LoadingTransition from "@/components/loading-transition";

// Ini adalah file "pintu masuk" untuk rute /signin
export default function SignUpRoute() {
  return (
    <>
      <LoadingTransition />
      <SignUpPage />
    </>
  );
}