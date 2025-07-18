"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import LatexRenderer from '@/components/ui/latex-renderer';
import { BlockMath } from 'react-katex';
import type { Slide, ContentBlock } from '@/data/types';

interface LessonSlideViewerProps {
  slides: Slide[];
}

export default function LessonSlideViewer({ slides }: LessonSlideViewerProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const progressPercentage = ((currentSlide + 1) / slides.length) * 100;
  const slide = slides[currentSlide];

  const renderSlideContent = (block: ContentBlock) => {
    switch (block.type) {
      case 'heading':
        return <h2 className="text-2xl font-bold text-gray-900 dark:text-white"><LatexRenderer>{block.content}</LatexRenderer></h2>;
      case 'text':
        return <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300"><LatexRenderer>{block.content}</LatexRenderer></p>;
      case 'formula':
        return <div className="py-4"><BlockMath math={block.content} /></div>;
      case 'image':
        return <img src={block.content} alt="Lesson visual" className="w-full h-auto rounded-lg" />;
      default:
        return null;
    }
  };

  return (
    // PERUBAHAN LEBAR: diubah dari max-w-4xl menjadi max-w-6xl
    <div className="w-full max-w-6xl mx-auto">
      <Card className="bg-white/80 dark:bg-[#1b263b]/80 backdrop-blur-sm">
        {/* PERUBAHAN TINGGI: diubah dari min-h-[400px] menjadi min-h-[550px] */}
        <CardContent className="p-8 min-h-[550px] flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="flex-grow space-y-4"
            >
              {slide.content.map((block, index) => (
                <div key={index}>
                  {renderSlideContent(block)}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </CardContent>
      </Card>
      
      <div className="mt-6 flex items-center justify-between gap-4">
        <Button onClick={goToPreviousSlide} disabled={currentSlide === 0} variant="outline">
          <ChevronLeft className="h-4 w-4 mr-2" />
          Previous
        </Button>
        <div className="flex-grow flex items-center gap-4">
            <span className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">
                Slide {currentSlide + 1} of {slides.length}
            </span>
            <Progress value={progressPercentage} className="h-2" />
        </div>
        <Button onClick={goToNextSlide} disabled={currentSlide === slides.length - 1}>
          Next
          <ChevronRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </div>
  );
}