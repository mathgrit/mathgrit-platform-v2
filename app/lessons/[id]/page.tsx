// Lokasi: app/lessons/[id]/page.tsx

import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import EnhancedLessonContentPage from '@/components/pages/enhanced-lesson-content-page';
import { courses } from '@/data/lessons-data'; // Mengimpor data dari file baru
import type { Course } from '@/data/types';

interface LessonPageProps {
  params: { id: string };
}

export async function generateMetadata({ params }: LessonPageProps): Promise<Metadata> {
  const course = courses.find((c) => c.id === params.id);
  if (!course) return { title: 'Lesson Not Found' };
  return { title: `${course.title} - MathGrit` };
}

export default function LessonPage({ params }: LessonPageProps) {
  const course = courses.find((c) => c.id === params.id);
  if (!course) {
    notFound();
  }
  return <EnhancedLessonContentPage course={course} />;
}