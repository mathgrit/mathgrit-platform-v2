"use client"

import { useState, useRef } from "react"
import { Play, Pause, Volume2, Settings, Maximize } from "lucide-react"
import { Button } from "@/components/ui/button"

interface YouTubePlayerProps {
  videoId: string
  playlistId?: string
  title: string
  onProgress?: (progress: number) => void
}

export default function YouTubePlayer({ videoId, playlistId, title, onProgress }: YouTubePlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(100)
  const [playbackRate, setPlaybackRate] = useState(1)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const playlistUrl = playlistId
    ? `https://www.youtube.com/embed/videoseries?list=${playlistId}&autoplay=0&rel=0&modestbranding=1`
    : `https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0&modestbranding=1`

  const chapters = [
    { title: "Introduction to Limits", time: "0:00" },
    { title: "Limit Laws", time: "5:30" },
    { title: "Continuity", time: "12:15" },
    { title: "Derivatives", time: "18:45" },
    { title: "Chain Rule", time: "25:20" },
  ]

  return (
    <div className="bg-white dark:bg-[#1b263b] rounded-lg overflow-hidden shadow-lg">
      {/* Video Player */}
      <div className="relative aspect-video bg-black">
        <iframe
          ref={iframeRef}
          src={playlistUrl}
          title={title}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />

        {/* Custom Controls Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <div className="flex items-center justify-between text-white">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsPlaying(!isPlaying)}
                className="text-white hover:bg-white/20"
              >
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
              </Button>

              <div className="flex items-center space-x-2">
                <Volume2 className="h-4 w-4" />
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                  className="w-20 h-1 bg-white/30 rounded-lg appearance-none slider"
                />
              </div>

              <span className="text-sm">
                {Math.floor(currentTime / 60)}:{(currentTime % 60).toString().padStart(2, "0")} /
                {Math.floor(duration / 60)}:{(duration % 60).toString().padStart(2, "0")}
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <select
                value={playbackRate}
                onChange={(e) => setPlaybackRate(Number(e.target.value))}
                className="bg-black/50 text-white text-sm rounded px-2 py-1"
              >
                <option value={0.5}>0.5x</option>
                <option value={0.75}>0.75x</option>
                <option value={1}>1x</option>
                <option value={1.25}>1.25x</option>
                <option value={1.5}>1.5x</option>
                <option value={2}>2x</option>
              </select>

              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                <Settings className="h-4 w-4" />
              </Button>

              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                <Maximize className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-2">
            <div className="w-full bg-white/30 rounded-full h-1">
              <div
                className="bg-red-500 h-1 rounded-full transition-all duration-300"
                style={{ width: `${(currentTime / duration) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Chapter Markers */}
      <div className="p-4 border-t border-gray-200 dark:border-[#415a77]/30">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Chapters</h3>
        <div className="space-y-2">
          {chapters.map((chapter, index) => (
            <button
              key={index}
              className="flex items-center justify-between w-full p-2 rounded hover:bg-gray-100 dark:hover:bg-[#415a77]/20 text-left"
            >
              <span className="text-sm text-gray-700 dark:text-gray-300">{chapter.title}</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">{chapter.time}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
