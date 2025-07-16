"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useParams, useLocation, Link } from "react-router-dom"
import { ChevronLeft, Download, BookOpen, Play, FileText, Calculator, CheckCircle, Circle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useProgress } from "@/contexts/progress-context"
import YouTubePlayer from "@/components/youtube-player"
import InteractiveExample from "@/components/interactive-example"
import MathExpression from "@/components/math-expression"

export default function EnhancedLessonContentPage() {
  const { id } = useParams()
  const location = useLocation()
  const course = location.state?.course
  const [activeTab, setActiveTab] = useState("video")
  const [completedSections, setCompletedSections] = useState<Set<string>>(new Set())
  const { getProgress, updateProgress } = useProgress()

  // Enhanced lesson data with comprehensive content
  const lessonData = {
    "calc-101": {
      title: "Calculus I: Limits and Derivatives",
      description: "Master the fundamentals of calculus including limits, continuity, and derivatives.",
      videoPlaylist: "PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr",
      materials: [
        { name: "Limits Worksheet", type: "pdf", url: "/materials/limits-worksheet.pdf", size: "2.3 MB" },
        { name: "Derivative Rules Cheat Sheet", type: "pdf", url: "/materials/derivative-rules.pdf", size: "1.8 MB" },
        { name: "Practice Problems", type: "pdf", url: "/materials/calc-practice.pdf", size: "4.1 MB" },
        { name: "Formula Reference", type: "pdf", url: "/materials/formulas.pdf", size: "1.2 MB" },
      ],
      interactiveExamples: [
        {
          title: "Evaluating Limits",
          description: "Learn to evaluate limits step by step using algebraic manipulation.",
          initialExpression: "\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}",
          steps: [
            {
              expression: "\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}",
              explanation: "Start with the original limit expression.",
            },
            {
              expression: "\\lim_{x \\to 2} \\frac{(x-2)(x+2)}{x - 2}",
              explanation: "Factor the numerator: x² - 4 = (x-2)(x+2)",
            },
            {
              expression: "\\lim_{x \\to 2} (x+2)",
              explanation: "Cancel the common factor (x-2) from numerator and denominator.",
            },
            {
              expression: "2 + 2 = 4",
              explanation: "Substitute x = 2 into the simplified expression.",
            },
          ],
        },
        {
          title: "Derivative Using Definition",
          description: "Calculate derivatives using the limit definition.",
          initialExpression: "f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}",
          steps: [
            {
              expression: "f'(x) = \\lim_{h \\to 0} \\frac{(x+h)^2 - x^2}{h}",
              explanation: "For f(x) = x², substitute into the definition.",
            },
            {
              expression: "f'(x) = \\lim_{h \\to 0} \\frac{x^2 + 2xh + h^2 - x^2}{h}",
              explanation: "Expand (x+h)²",
            },
            {
              expression: "f'(x) = \\lim_{h \\to 0} \\frac{2xh + h^2}{h}",
              explanation: "Simplify by canceling x² terms",
            },
            {
              expression: "f'(x) = \\lim_{h \\to 0} (2x + h) = 2x",
              explanation: "Factor out h and evaluate the limit",
            },
          ],
        },
      ],
      keyFormulas: [
        {
          title: "Fundamental Limits",
          formulas: [
            "\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1",
            "\\lim_{x \\to \\infty} \\left(1 + \\frac{1}{x}\\right)^x = e",
            "\\lim_{x \\to 0} \\frac{e^x - 1}{x} = 1",
          ],
        },
        {
          title: "Derivative Rules",
          formulas: [
            "\\frac{d}{dx}[x^n] = nx^{n-1}",
            "\\frac{d}{dx}[e^x] = e^x",
            "\\frac{d}{dx}[\\ln x] = \\frac{1}{x}",
            "\\frac{d}{dx}[\\sin x] = \\cos x",
          ],
        },
      ],
    },
  }

  const lesson = lessonData[id as keyof typeof lessonData]

  if (!lesson) {
    return <div>Lesson not found</div>
  }

  const markSectionComplete = (sectionId: string) => {
    const newCompleted = new Set(completedSections)
    newCompleted.add(sectionId)
    setCompletedSections(newCompleted)

    // Update progress based on completed sections
    const totalSections = 4 // video, materials, examples, formulas
    const newProgress = Math.round((newCompleted.size / totalSections) * 100)
    updateProgress(id!, newProgress)
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
          <Link
            to="/lessons"
            className="inline-flex items-center text-blue-600 dark:text-cyan-400 hover:underline mb-4"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Lessons
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">{lesson.title}</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{lesson.description}</p>
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600 dark:text-gray-300">Progress</span>
                <span className="text-gray-900 dark:text-white font-medium">{getProgress(id!)}%</span>
              </div>
              <Progress value={getProgress(id!)} className="h-2" />
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-white/80 dark:bg-[#1b263b]/80 backdrop-blur-sm">
            <TabsTrigger value="video" className="flex items-center space-x-2">
              <Play className="h-4 w-4" />
              <span>Video</span>
            </TabsTrigger>
            <TabsTrigger value="materials" className="flex items-center space-x-2">
              <FileText className="h-4 w-4" />
              <span>Materials</span>
            </TabsTrigger>
            <TabsTrigger value="examples" className="flex items-center space-x-2">
              <Calculator className="h-4 w-4" />
              <span>Examples</span>
            </TabsTrigger>
            <TabsTrigger value="formulas" className="flex items-center space-x-2">
              <BookOpen className="h-4 w-4" />
              <span>Formulas</span>
            </TabsTrigger>
          </TabsList>

          {/* Video Tab */}
          <TabsContent value="video" className="space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <YouTubePlayer
                videoId="WUvTyaaNkzM"
                playlistId={lesson.videoPlaylist}
                title={lesson.title}
                onProgress={(progress) => {
                  if (progress > 80) markSectionComplete("video")
                }}
              />
              <div className="mt-4 flex justify-end">
                <Button
                  onClick={() => markSectionComplete("video")}
                  disabled={completedSections.has("video")}
                  className="bg-green-600 hover:bg-green-700"
                >
                  {completedSections.has("video") ? (
                    <>
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Completed
                    </>
                  ) : (
                    <>
                      <Circle className="h-4 w-4 mr-2" />
                      Mark as Watched
                    </>
                  )}
                </Button>
              </div>
            </motion.div>
          </TabsContent>

          {/* Materials Tab */}
          <TabsContent value="materials" className="space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Card className="bg-white/80 dark:bg-[#1b263b]/80 backdrop-blur-sm border-gray-200 dark:border-[#415a77]/30">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Download className="h-5 w-5 mr-2" />
                    Downloadable Resources
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {lesson.materials.map((material, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 bg-gray-50 dark:bg-[#415a77]/20 rounded-lg hover:bg-gray-100 dark:hover:bg-[#415a77]/30 transition-colors"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                            <FileText className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900 dark:text-white">{material.name}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">PDF • {material.size}</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex justify-end">
                    <Button
                      onClick={() => markSectionComplete("materials")}
                      disabled={completedSections.has("materials")}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      {completedSections.has("materials") ? (
                        <>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Completed
                        </>
                      ) : (
                        <>
                          <Circle className="h-4 w-4 mr-2" />
                          Mark as Reviewed
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Interactive Examples Tab */}
          <TabsContent value="examples" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {lesson.interactiveExamples.map((example, index) => (
                <InteractiveExample
                  key={index}
                  title={example.title}
                  description={example.description}
                  initialExpression={example.initialExpression}
                  steps={example.steps}
                />
              ))}
              <div className="flex justify-end">
                <Button
                  onClick={() => markSectionComplete("examples")}
                  disabled={completedSections.has("examples")}
                  className="bg-green-600 hover:bg-green-700"
                >
                  {completedSections.has("examples") ? (
                    <>
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Completed
                    </>
                  ) : (
                    <>
                      <Circle className="h-4 w-4 mr-2" />
                      Mark as Completed
                    </>
                  )}
                </Button>
              </div>
            </motion.div>
          </TabsContent>

          {/* Formulas Tab */}
          <TabsContent value="formulas" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {lesson.keyFormulas.map((section, index) => (
                <Card
                  key={index}
                  className="bg-white/80 dark:bg-[#1b263b]/80 backdrop-blur-sm border-gray-200 dark:border-[#415a77]/30"
                >
                  <CardHeader>
                    <CardTitle>{section.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {section.formulas.map((formula, formulaIndex) => (
                        <div
                          key={formulaIndex}
                          className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500"
                        >
                          <MathExpression math={formula} display={true} className="text-center" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
              <div className="flex justify-end">
                <Button
                  onClick={() => markSectionComplete("formulas")}
                  disabled={completedSections.has("formulas")}
                  className="bg-green-600 hover:bg-green-700"
                >
                  {completedSections.has("formulas") ? (
                    <>
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Completed
                    </>
                  ) : (
                    <>
                      <Circle className="h-4 w-4 mr-2" />
                      Mark as Reviewed
                    </>
                  )}
                </Button>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
