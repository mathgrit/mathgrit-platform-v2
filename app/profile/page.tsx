// Lokasi file: app/profile/page.tsx

"use client";

import ProfilePage from "@/components/pages/profile-page";
import LoadingTransition from "@/components/loading-transition";

export default function ProfileRoute() {
  return (
    <>
      <LoadingTransition />
      <ProfilePage />
    </>
  );
}