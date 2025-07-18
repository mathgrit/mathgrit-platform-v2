"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronLeft, Download, BookOpen, Play, FileText, Calculator, CheckCircle, Circle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useProgress } from "@/contexts/progress-context"
import YouTubePlayer from "@/components/youtube-player"
import InteractiveExample from "@/components/interactive-example"
import { BlockMath } from "react-katex"
import type { Course } from "@/data/types"

export default function EnhancedLessonContentPage({ course }: { course: Course }) {
  const [activeTab, setActiveTab] = useState("video")
  const [completedSections, setCompletedSections] = useState<Set<string>>(new Set())
  const { getProgress, updateProgress } = useProgress()

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Lesson Not Found</h2>
        <Link href="/lessons">
          <Button>Back to Lessons</Button>
        </Link>
      </div>
    )
  }

  const markSectionComplete = (sectionId: string) => {
    const newCompleted = new Set(completedSections)
    newCompleted.add(sectionId)
    setCompletedSections(newCompleted)

    const totalSections = 4 // video, materials, examples, formulas
    const newProgress = Math.round((newCompleted.size / totalSections) * 100)
    updateProgress(course.id, newProgress)
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
            href="/lessons"
            className="inline-flex items-center text-blue-600 dark:text-cyan-400 hover:underline mb-4"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Lessons
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">{course.title}</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{course.description}</p>
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600 dark:text-gray-300">Progress</span>
                <span className="text-gray-900 dark:text-white font-medium">{getProgress(course.id)}%</span>
              </div>
              <Progress value={getProgress(course.id)} className="h-2" />
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-white/80 dark:bg-[#1b263b]/80 backdrop-blur-sm">
            <TabsTrigger value="video" className="flex items-center space-x-2"><Play className="h-4 w-4" /><span>Video</span></TabsTrigger>
            <TabsTrigger value="materials" className="flex items-center space-x-2"><FileText className="h-4 w-4" /><span>Materials</span></TabsTrigger>
            <TabsTrigger value="examples" className="flex items-center space-x-2"><Calculator className="h-4 w-4" /><span>Examples</span></TabsTrigger>
            <TabsTrigger value="formulas" className="flex items-center space-x-2"><BookOpen className="h-4 w-4" /><span>Formulas</span></TabsTrigger>
          </TabsList>

          <TabsContent value="video" className="space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <YouTubePlayer
                playlistId={course.videoPlaylist}
                title={course.title}
              />
              <div className="mt-4 flex justify-end">
                <Button onClick={() => markSectionComplete("video")} disabled={completedSections.has("video")} className="bg-green-600 hover:bg-green-700">
                  {completedSections.has("video") ? <><CheckCircle className="h-4 w-4 mr-2" />Completed</> : <><Circle className="h-4 w-4 mr-2" />Mark as Watched</>}
                </Button>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="materials" className="space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Card className="bg-white/80 dark:bg-[#1b263b]/80 backdrop-blur-sm border-gray-200 dark:border-[#415a77]/30">
                <CardHeader>
                  <CardTitle className="flex items-center"><Download className="h-5 w-5 mr-2" />Downloadable Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {course.materials?.map((material, index) => (
                      <a href={material.url} target="_blank" rel="noopener noreferrer" key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-[#415a77]/20 rounded-lg hover:bg-gray-100 dark:hover:bg-[#415a77]/30 transition-colors">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center"><FileText className="h-5 w-5 text-white" /></div>
                          <div>
                            <h3 className="font-medium text-gray-900 dark:text-white">{material.name}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">PDF</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm"><Download className="h-4 w-4 mr-2" />Download</Button>
                      </a>
                    ))}
                  </div>
                  <div className="mt-6 flex justify-end">
                    <Button onClick={() => markSectionComplete("materials")} disabled={completedSections.has("materials")} className="bg-green-600 hover:bg-green-700">
                      {completedSections.has("materials") ? <><CheckCircle className="h-4 w-4 mr-2" />Completed</> : <><Circle className="h-4 w-4 mr-2" />Mark as Reviewed</>}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="examples" className="space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-6">
              {course.interactiveExamples?.map((example, index) => (
                <InteractiveExample
                  key={index}
                  title={example.title}
                  description={example.description}
                  initialExpression={example.initialExpression}
                  steps={example.steps}
                />
              ))}
              <div className="flex justify-end">
                <Button onClick={() => markSectionComplete("examples")} disabled={completedSections.has("examples")} className="bg-green-600 hover:bg-green-700">
                  {completedSections.has("examples") ? <><CheckCircle className="h-4 w-4 mr-2" />Completed</> : <><Circle className="h-4 w-4 mr-2" />Mark as Completed</>}
                </Button>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="formulas" className="space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-6">
              {course.keyFormulas?.map((section, index) => (
                <Card key={index} className="bg-white/80 dark:bg-[#1b263b]/80 backdrop-blur-sm border-gray-200 dark:border-[#415a77]/30">
                  <CardHeader><CardTitle>{section.title}</CardTitle></CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {section.formulas.map((formula: string, formulaIndex: number) => (
                        <div key={formulaIndex} className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
                           <BlockMath math={formula} />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
              <div className="flex justify-end">
                <Button onClick={() => markSectionComplete("formulas")} disabled={completedSections.has("formulas")} className="bg-green-600 hover:bg-green-700">
                  {completedSections.has("formulas") ? <><CheckCircle className="h-4 w-4 mr-2" />Completed</> : <><Circle className="h-4 w-4 mr-2" />Mark as Reviewed</>}
                </Button>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}