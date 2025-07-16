"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useParams, Link } from "react-router-dom"
import { ChevronLeft, Play, Pause, RotateCcw, CheckCircle, Circle, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useProgress } from "@/contexts/progress-context"

export default function LessonContentPage() {
  const { id } = useParams()
  const [currentSection, setCurrentSection] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [completedSections, setCompletedSections] = useState<Set<number>>(new Set([0, 1]))
  const { getProgress, updateProgress } = useProgress()

  // Mock lesson data
  const lesson = {
    id: id || 'calc-101',
    title: 'Calculus I: Limits and Derivatives',
    description: 'Master the fundamentals of calculus including limits, continuity, and derivatives.',
    sections: [
      {
        title: 'Introduction to Limits',
        duration: '12 min',
        content: 'In this section, we explore the concept of limits, which forms the foundation of calculus. A limit describes the behavior of a function as its input approaches a particular value.',
        mathContent: 'The limit of f(x) as x approaches a is written as: lim(x→a) f(x) = L'
      },
      {
        title: 'Limit Laws and Properties',
        duration: '15 min',
        content: 'We examine the fundamental laws that govern limits, including the sum rule, product rule, and quotient rule for limits.',
        mathContent: 'If lim(x→a) f(x) = L and lim(x→a) g(x) = M, then: lim(x→a) [f(x) + g(x)] = L + M'
      },
      {
        title: 'Continuity',
        duration: '10 min',
        content: 'A function is continuous at a point if the limit exists and equals the function value at that point.',
        mathContent: 'f is continuous at x = a if: lim(x→a) f(x) = f(a)'
      },
      {
        title: 'Introduction to Derivatives',
        duration: '18 min',
        content: 'The derivative represents the instantaneous rate of change of a function and is defined as a limit.',
        mathContent: "f'(x) = lim(h→0) [f(x+h) - f(x)]/h"
      },
      {
        title: 'Basic Differentiation Rules',
        duration: '20 min',
        content: 'Learn the power rule, product rule, quotient rule, and chain rule for finding derivatives.',
        mathContent: 'Power Rule: d/dx[x^n] = nx^(n-1)'
      }
    ]
  }

  const currentProgress = getProgress(lesson.id)
  const totalSections = lesson.sections.length
  const completedCount = completedSections.size

  const markSectionComplete = (sectionIndex: number) => {
    const newCompleted = new Set(completedSections)
    newCompleted.add(sectionIndex)
    setCompletedSections(newCompleted)
    
    const newProgress = Math.round((newCompleted.size / totalSections) * 100)
    updateProgress(lesson.id, newProgress)
  }

  const goToNextSection = () => {
    if (currentSection < totalSections - 1) {
      markSectionComplete(currentSection)
      setCurrentSection(currentSection + 1)
    }
  }

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link to="/lessons" className="inline-flex items-center text-blue-600 dark:text-cyan-400 hover:underline mb-4">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Lessons
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            {lesson.title}
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {lesson.description}
          </p>
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600 dark:text-gray-300">Progress</span>
                <span className="text-gray-900 dark:text-white font-medium">
                  {Math.round((completedCount / totalSections) * 100)}%
                </span>
              </div>
              <Progress value={(completedCount / totalSections) * 100} className="h-2" />
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              {completedCount} of {totalSections} sections
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <Card className="bg-white/80 dark:bg-[#1b263b]/80 backdrop-blur-sm border-gray-200 dark:border-[#415a77]/30 sticky top-24">
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Course Content
                </h3>
                <div className="space-y-2">
                  {lesson.sections.map((section, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSection(index)}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        currentSection === index
                          ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-900 dark:text-blue-300'
                          : 'hover:bg-gray-100 dark:hover:bg-[#415a77]/20 text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          {completedSections.has(index) ? (
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          ) : (
                            <Circle className="h-4 w-4 text-gray-400 mr-2 flex-shrink-0" />
                          )}
                          <div>
                            <div className="font-medium text-sm">{section.title}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              {section.duration}
                            </div>
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <Card className="bg-white/80 dark:bg-[#1b263b]/80 backdrop-blur-sm border-gray-200 dark:border-[#415a77]/30 mb-6">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {lesson.sections[currentSection].title}
                  </h2>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setIsPlaying(!isPlaying)}
                    >
                      {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                    </Button>
                    <Button variant="outline" size="icon">
                      <RotateCcw className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Video Placeholder */}
                <div className="bg-gray-900 rounded-lg aspect-video mb-6 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Play className="h-16 w-16 mx-auto mb-4 opacity-50" />
                    <p className="text-lg">Video Content</p>
                    <p className="text-sm opacity-75">{lesson.sections[currentSection].duration}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="prose dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    {lesson.sections[currentSection].content}
                  </p>
                  
                  {/* Math Content */}
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-500 mb-6">
                    <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">
                      Key Formula:
                    </h4>
                    <div className="font-mono text-lg text-blue-800 dark:text-blue-200 bg-white dark:bg-gray-800 p-3 rounded border">
                      {lesson.sections[currentSection].mathContent}
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-[#415a77]/30">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
                    disabled={currentSection === 0}
                  >
                    <ChevronLeft className="h-4 w-4 mr-2" />
                    Previous
                  </Button>
                  
                  <div className="flex items-center space-x-2">
                    {!completedSections.has(currentSection) && (
                      <Button
                        variant="outline"
                        onClick={() => markSectionComplete(currentSection)}
                      >
                        Mark Complete
                      </Button>
                    \
