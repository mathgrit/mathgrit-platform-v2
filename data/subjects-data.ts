// Lokasi: data/subjects-data.ts

import type { Subject } from './types';

// Impor data kursus dari file-file yang sudah dipisah
import { calculusCourses } from './courses/calculus';
import { algebraCourses } from './courses/algebra';
import { geometryCourses } from './courses/geometry';
import { discreteCourses } from './courses/discrete';
import { appliedCourses } from './courses/applied';

export const subjectsData: Subject[] = [
  {
    id: "calculus",
    name: "Kalkulus",
    description: "Pelajari dasar-dasar kalkulus, mulai dari limit, turunan, hingga integral.",
    icon: "Sigma",
    courses: calculusCourses, // Gunakan data yang diimpor
  },
  {
    id: "algebra",
    name: "Aljabar",
    description: "Kuatkan fondasi Anda dalam konsep aljabar, dari dasar hingga tingkat lanjut.",
    icon: "Variable",
    courses: algebraCourses, // Gunakan data yang diimpor
  },
  {
    id: "geometry",
    name: "Geometri",
    description: "Jelajahi keindahan pembuktian geometris dan penalaran spasial.",
    icon: "Compass",
    courses: geometryCourses, // Gunakan data yang diimpor
  },
  {
    id: "discrete",
    name: "Matematika Diskrit",
    description: "Selami dunia kombinatorika, teori graf, dan logika matematika.",
    icon: "Puzzle",
    courses: discreteCourses, // Gunakan data yang diimpor
  },
  {
    id: "applied",
    name: "Matematika Terapan",
    description: "Pelajari aplikasi matematika di dunia nyata, seperti statistika dan probabilitas.",
    icon: "BarChart2",
    courses: appliedCourses, // Gunakan data yang diimpor
  },
];