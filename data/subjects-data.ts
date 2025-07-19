import type { Subject } from './types';

export const subjectsData: Subject[] = [
  {
    id: "calculus",
    name: "Kalkulus",
    description: "Pelajari dasar-dasar kalkulus, mulai dari limit, turunan, hingga integral.",
    icon: "Sigma", // <-- Diubah menjadi string
    courses: [
      {
        id: "calc-101",
        title: "Calculus I: Limits and Derivatives",
        thumbnail: "/placeholder.svg?height=200&width=300",
        difficulty: "Intermediate",
        duration: "15h",
        topic: "Calculus",
        description: "Master the fundamentals of calculus including limits, continuity, and derivatives.",
        rating: 4.8,
        students: 12500,
        videoPlaylist: "PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr",
        materials: [
          { name: "Limits Worksheet", type: "pdf", url: "/materials/limits-worksheet.pdf" },
          { name: "Derivative Rules Cheat Sheet", type: "pdf", url: "/materials/derivative-rules.pdf" },
          { name: "Practice Problems", type: "pdf", url: "/materials/calc-practice.pdf" },
        ],
      },
    ],
  },
  {
    id: "algebra",
    name: "Aljabar",
    description: "Kuatkan fondasi Anda dalam konsep aljabar, dari dasar hingga tingkat lanjut.",
    icon: "Variable", // <-- Diubah menjadi string
    courses: [
      {
        id: "algebra-basics",
        title: "Algebra Fundamentals",
        thumbnail: "/placeholder.svg?height=200&width=300",
        difficulty: "Beginner",
        duration: "8h",
        topic: "Algebra",
        description: "Build a solid foundation in algebraic concepts and problem-solving techniques.",
        rating: 4.9,
        students: 18200,
      },
      {
        id: "linear-algebra",
        title: "Linear Algebra Essentials",
        thumbnail: "/placeholder.svg?height=200&width=300",
        difficulty: "Intermediate",
        duration: "18h",
        topic: "Algebra",
        description: "Master vectors, matrices, and linear transformations.",
        rating: 4.8,
        students: 11200,
      },
    ],
  },
  {
    id: "geometry",
    name: "Geometri",
    description: "Jelajahi keindahan pembuktian geometris dan penalaran spasial.",
    icon: "Compass", // <-- Diubah menjadi string
    courses: [ /* ... */ ],
  },
  {
    id: "discrete",
    name: "Matematika Diskrit",
    description: "Selami dunia kombinatorika, teori graf, dan logika matematika.",
    icon: "Puzzle", // <-- Diubah menjadi string
    courses: [ /* ... */ ],
  },
  {
    id: "applied",
    name: "Matematika Terapan",
    description: "Pelajari aplikasi matematika di dunia nyata, seperti statistika dan probabilitas.",
    icon: "BarChart2", // <-- Diubah menjadi string
    courses: [ /* ... */ ],
  },
];