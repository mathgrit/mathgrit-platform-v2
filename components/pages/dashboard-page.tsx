"use client"

import { motion } from "framer-motion"
import { Trophy, Flame, Star, BookOpen, Brain, Target, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { useAuth } from "@/contexts/auth-context"
import { useProgress } from "@/contexts/progress-context"
import { Link } from "react-router-dom"

export default function DashboardPage() {
  const { user } = useAuth()
  const { progress } = useProgress()

  if (!user) {
    return <div>Please sign in to view your dashboard.</div>
  }

  const recentActivity = [
    { type: "lesson", title: "Completed: Limits and Derivatives", time: "2 hours ago", xp: 50 },
    { type: "quiz", title: "Quiz: Polynomial Operations", time: "1 day ago", xp: 30 },
    { type: "problem", title: "Solved: IMO 2023 Problem 1", time: "2 days ago", xp: 100 },
    { type: "lesson", title: "Started: Linear Algebra Essentials", time: "3 days ago", xp: 0 },
  ]

  const achievements = [
    { name: "First Steps", description: "Complete your first lesson", earned: true },
    { name: "Quiz Master", description: "Score 90% or higher on 5 quizzes", earned: true },
    { name: "Problem Solver", description: "Solve 10 contest problems", earned: false },
    { name: "Streak Keeper", description: "Maintain a 7-day streak", earned: true },
    { name: "Math Olympian", description: "Solve an IMO problem", earned: true },
    { name: "Calculus Expert", description: "Complete all calculus courses", earned: false },
  ]

  const recommendations = [
    { id: "discrete-math", title: "Discrete Mathematics", progress: 30, difficulty: "Advanced" },
    { id: "statistics", title: "Statistics and Probability", progress: 20, difficulty: "Beginner" },
    { id: "geometry-intro", title: "Euclidean Geometry", progress: 45, difficulty: "Intermediate" },
  ]

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "lesson":
        return BookOpen
      case "quiz":
        return Brain
      case "problem":
        return Target
      default:
        return Star
    }
  }

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Welcome back, {user.name}!</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">Ready to continue your mathematical journey?</p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-100">Total XP</p>
                    <p className="text-3xl font-bold">{user.xp.toLocaleString()}</p>
                  </div>
                  <Trophy className="h-12 w-12 text-blue-100" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-gradient-to-r from-orange-500 to-red-400 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-orange-100">Current Streak</p>
                    <p className="text-3xl font-bold">{user.streak} days</p>
                  </div>
                  <Flame className="h-12 w-12 text-orange-100" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="bg-gradient-to-r from-purple-500 to-pink-400 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-purple-100">Level</p>
                    <p className="text-3xl font-bold">{user.level}</p>
                  </div>
                  <Star className="h-12 w-12 text-purple-100" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
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

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="lg:col-span-2"
          >
            <Card className="bg-white/80 dark:bg-[#1b263b]/80 backdrop-blur-sm border-gray-200 dark:border-[#415a77]/30">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => {
                    const Icon = getActivityIcon(activity.type)
                    return (
                      <div
                        key={index}
                        className="flex items-center space-x-4 p-3 rounded-lg bg-gray-50 dark:bg-[#415a77]/20"
                      >
                        <div className="flex-shrink-0">
                          <Icon className="h-8 w-8 text-blue-600 dark:text-cyan-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 dark:text-white">{activity.title}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{activity.time}</p>
                        </div>
                        {activity.xp > 0 && (
                          <Badge
                            variant="secondary"
                            className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                          >
                            +{activity.xp} XP
                          </Badge>
                        )}
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card className="bg-white/80 dark:bg-[#1b263b]/80 backdrop-blur-sm border-gray-200 dark:border-[#415a77]/30">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="h-5 w-5 mr-2" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className={`flex items-center space-x-3 p-2 rounded-lg ${
                        achievement.earned ? "bg-yellow-50 dark:bg-yellow-900/20" : "bg-gray-50 dark:bg-gray-800/20"
                      }`}
                    >
                      <div
                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                          achievement.earned
                            ? "bg-yellow-400 text-yellow-900"
                            : "bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-400"
                        }`}
                      >
                        <Trophy className="h-4 w-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p
                          className={`text-sm font-medium ${
                            achievement.earned ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400"
                          }`}
                        >
                          {achievement.name}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8"
        >
          <Card className="bg-white/80 dark:bg-[#1b263b]/80 backdrop-blur-sm border-gray-200 dark:border-[#415a77]/30">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="h-5 w-5 mr-2" />
                Recommended for You
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {recommendations.map((course, index) => (
                  <Link key={course.id} to={`/lessons/${course.id}`}>
                    <div className="p-4 rounded-lg bg-gray-50 dark:bg-[#415a77]/20 hover:bg-gray-100 dark:hover:bg-[#415a77]/30 transition-colors cursor-pointer">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium text-gray-900 dark:text-white">{course.title}</h3>
                        <Badge variant="outline" className="text-xs">
                          {course.difficulty}
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600 dark:text-gray-300">Progress</span>
                          <span className="text-gray-900 dark:text-white font-medium">{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
