"use client"

import { motion } from "framer-motion"
import { Trophy, Flame, Star, BookOpen, Brain, Target, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { useAuth } from "@/contexts/auth-context"
import { useProgress } from "@/contexts/progress-context"
import Link from "next/link" // <-- PERUBAHAN: Menggunakan Link dari Next.js

export default function DashboardPage() {
  const { user } = useAuth()
  const { progress } = useProgress()

  if (!user) {
    // Pesan ini akan muncul sebentar selagi data user dimuat
    return <div>Loading dashboard...</div>
  }

  // Data dummy, bisa Anda ganti dengan data asli nanti
  const recentActivity = [
    { type: "lesson", title: "Completed: Limits and Derivatives", time: "2 hours ago", xp: 50 },
    { type: "quiz", title: "Quiz: Polynomial Operations", time: "1 day ago", xp: 30 },
    { type: "problem", title: "Solved: IMO 2023 Problem 1", time: "2 days ago", xp: 100 },
  ]

  const achievements = [
    { name: "First Steps", description: "Complete your first lesson", earned: true },
    { name: "Quiz Master", description: "Score 90% or higher on 5 quizzes", earned: true },
    { name: "Problem Solver", description: "Solve 10 contest problems", earned: false },
  ]

  const recommendations = [
    { id: "discrete-math", title: "Discrete Mathematics", progress: 30, difficulty: "Advanced" },
    { id: "statistics", title: "Statistics and Probability", progress: 20, difficulty: "Beginner" },
    { id: "geometry-intro", title: "Euclidean Geometry", progress: 45, difficulty: "Intermediate" },
  ]

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "lesson": return BookOpen
      case "quiz": return Brain
      case "problem": return Target
      default: return Star
    }
  }

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-8">
          {/* PERUBAHAN: Mengambil nama dari user.full_name dengan aman */}
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Welcome back, {user?.full_name || 'Explorer'}!</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">Ready to continue your mathematical journey?</p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <Card className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-100">Total XP</p>
                    {/* PERUBAHAN: Mengambil XP dengan aman */}
                    <p className="text-3xl font-bold">{(user?.xp || 0).toLocaleString()}</p>
                  </div>
                  <Trophy className="h-12 w-12 text-blue-100" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <Card className="bg-gradient-to-r from-orange-500 to-red-400 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-orange-100">Current Streak</p>
                    {/* PERUBAHAN: Mengambil streak dengan aman */}
                    <p className="text-3xl font-bold">{(user?.streak || 0)} days</p>
                  </div>
                  <Flame className="h-12 w-12 text-orange-100" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <Card className="bg-gradient-to-r from-purple-500 to-pink-400 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-purple-100">Level</p>
                    {/* PERUBAHAN: Mengambil level dengan aman */}
                    <p className="text-3xl font-bold">{user?.level || 1}</p>
                  </div>
                  <Star className="h-12 w-12 text-purple-100" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
            <Card className="bg-gradient-to-r from-green-500 to-teal-400 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-100">Courses</p>
                    <p className="text-3xl font-bold">{Object.keys(progress).length}</p>
                  </div>
                  <BookOpen className="h-12 w-12 text-green-100" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* ... sisa kode dasbor Anda ... */}
        {/* PERUBAHAN: Link di bagian Recommendations */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
           {recommendations.map((course, index) => (
             <Link key={course.id} href={`/lessons/${course.id}`}>
               <div className="p-4 rounded-lg bg-gray-50 dark:bg-[#415a77]/20 hover:bg-gray-100 dark:hover:bg-[#415a77]/30 transition-colors cursor-pointer">
                  {/* ... isi card rekomendasi ... */}
               </div>
             </Link>
           ))}
        </div>
      </div>
    </div>
  )
}