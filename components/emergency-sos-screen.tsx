'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowLeft, Phone, MapPin, AlertTriangle, ShieldAlert, Ambulance } from 'lucide-react'

export default function EmergencySOSScreen({ onBack }: { onBack: () => void }) {
  const [countdown, setCountdown] = useState<number | null>(null)

  useEffect(() => {
    if (countdown === null) return
    if (countdown === 0) {
      // Trigger SOS
      return
    }
    const timer = setTimeout(() => setCountdown(countdown - 1), 1000)
    return () => clearTimeout(timer)
  }, [countdown])

  const handleSOSClick = () => {
    if (countdown === null) {
      setCountdown(5)
    } else {
      setCountdown(null)
    }
  }

  return (
    <div className="h-full bg-red-50 dark:bg-red-950/30 flex flex-col overflow-y-auto">
      {/* Header */}
      <div className="p-4 flex items-center gap-4 sticky top-0 z-10">
        <Button variant="ghost" size="icon" onClick={onBack} className="hover:bg-red-100 dark:hover:bg-red-900/50">
          <ArrowLeft className="w-6 h-6" />
        </Button>
        <h1 className="font-bold text-lg text-red-900 dark:text-red-100">Emergency SOS</h1>
      </div>

      <div className="flex-1 p-6 flex flex-col items-center justify-center space-y-8">
        {/* SOS Button */}
        <div className="relative">
          {countdown !== null && (
            <div className="absolute inset-0 rounded-full animate-ping bg-red-500 opacity-20" />
          )}
          <button
            onClick={handleSOSClick}
            className={`w-48 h-48 rounded-full flex flex-col items-center justify-center shadow-2xl transition-all transform active:scale-95 ${
              countdown !== null 
                ? 'bg-white text-red-600 border-4 border-red-600' 
                : 'bg-gradient-to-b from-red-500 to-red-700 text-white'
            }`}
          >
            {countdown !== null ? (
              <>
                <span className="text-6xl font-bold">{countdown}</span>
                <span className="text-sm font-medium mt-2">Tap to Cancel</span>
              </>
            ) : (
              <>
                <ShieldAlert className="w-16 h-16 mb-2" />
                <span className="text-3xl font-bold tracking-wider">SOS</span>
                <span className="text-xs opacity-80 mt-1">Tap for Help</span>
              </>
            )}
          </button>
        </div>

        <p className="text-center text-muted-foreground max-w-[250px]">
          Pressing SOS will alert your emergency contacts and share your live location.
        </p>

        {/* Quick Actions */}
        <div className="w-full grid grid-cols-2 gap-4">
          <Card className="p-4 flex flex-col items-center gap-2 bg-white dark:bg-card cursor-pointer hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
              <Ambulance className="w-5 h-5" />
            </div>
            <span className="font-bold text-sm">Call Ambulance</span>
          </Card>
          <Card className="p-4 flex flex-col items-center gap-2 bg-white dark:bg-card cursor-pointer hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <span className="font-bold text-sm">Police Control</span>
          </Card>
        </div>

        {/* Location Info */}
        <Card className="w-full p-4 bg-white/80 dark:bg-card/80 backdrop-blur">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-sm">Current Location</h4>
              <p className="text-xs text-muted-foreground mt-1">
                123 Health Avenue, Medical District, New York, NY 10001
              </p>
              <p className="text-xs text-green-600 font-medium mt-2 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                GPS Accurate (5m)
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
