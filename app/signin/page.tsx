// Lokasi file: app/signin/page.tsx

"use client";

import SignInPage from "@/components/pages/signin-page";
import LoadingTransition from "@/components/loading-transition";

// Ini adalah file "pintu masuk" untuk rute /signin
export default function SignInRoute() {
  return (
    <>
      <LoadingTransition />
      <SignInPage />
    </>
  );
}