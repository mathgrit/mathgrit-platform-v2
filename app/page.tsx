// File: app/page.tsx
// GANTI SEMUA ISI FILE LAMA DENGAN KODE DI BAWAH INI

"use client";

import HomePage from "@/components/pages/home-page";
import LoadingTransition from "@/components/loading-transition";

// Ini adalah halaman untuk rute "/" (halaman utama).
// Tugasnya HANYA menampilkan komponen HomePage.
export default function Home() {
  return (
    <>
      <LoadingTransition />
      <HomePage />
    </>
  );
}