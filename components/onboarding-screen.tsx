'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Activity, Calendar, Heart, Sparkles } from 'lucide-react'

const slides = [
  {
    title: 'Manage Your Health in One Place',
    description: 'Keep all your medical records, appointments, and health data organized and accessible.',
    icon: Activity,
  },
  {
    title: 'Book Appointments Easily',
    description: 'Find and book consultations with top doctors in minutes. Video or in-person.',
    icon: Calendar,
  },
  {
    title: 'Track Your Wellness',
    description: 'Monitor your health metrics, medications, and lab results all in one app.',
    icon: Heart,
  },
  {
    title: 'Your Health, Simplified',
    description: 'Everything you need for better health, right at your fingertips.',
    icon: Sparkles,
  },
]

export default function OnboardingScreen({ onComplete }: { onComplete: () => void }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    } else {
      onComplete()
    }
  }

  const skipOnboarding = () => {
    onComplete()
  }

  const slide = slides[currentSlide]
  const Icon = slide.icon

  return (
    <div className="h-full bg-gradient-to-b from-primary/5 to-background flex flex-col">
      {/* Skip Button */}
      <div className="p-6 flex justify-end">
        <Button variant="ghost" onClick={skipOnboarding} className="text-muted-foreground">
          Skip
        </Button>
      </div>

      {/* Illustration Area */}
      <div className="flex-1 flex items-center justify-center px-8">
        <div className="w-48 h-48 bg-primary/10 rounded-full flex items-center justify-center">
          <Icon className="w-24 h-24 text-primary" strokeWidth={1.5} />
        </div>
      </div>

      {/* Content */}
      <div className="px-8 pb-8 text-center space-y-4">
        <h1 className="text-2xl font-bold text-balance">{slide.title}</h1>
        <p className="text-muted-foreground text-balance leading-relaxed">{slide.description}</p>
      </div>

      {/* Progress Indicators */}
      <div className="flex justify-center gap-2 pb-6">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? 'w-8 bg-primary' : 'w-2 bg-border'
            }`}
          />
        ))}
      </div>

      {/* Next Button */}
      <div className="px-6 pb-8">
        <Button onClick={nextSlide} className="w-full h-12 text-base" size="lg">
          {currentSlide === slides.length - 1 ? 'Get Started' : 'Next'}
        </Button>
      </div>
    </div>
  )
}
