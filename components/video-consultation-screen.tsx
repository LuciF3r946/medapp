'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Mic, MicOff, Video, VideoOff, MessageSquare, Upload, Phone } from 'lucide-react'

export default function VideoConsultationScreen({ onEnd }: { onEnd: () => void }) {
  return (
    <div className="h-full bg-gray-900 flex flex-col relative">
      {/* Doctor Video (Main) */}
      <div className="flex-1 bg-gray-800 flex items-center justify-center relative">
        <div className="text-white text-center space-y-2">
          <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto">
            <span className="text-3xl font-bold">DC</span>
          </div>
          <p className="text-sm">Dr. Emily Chen</p>
          <p className="text-xs text-gray-400">Cardiologist</p>
        </div>

        {/* User Video (Floating) */}
        <Card className="absolute top-4 right-4 w-24 h-32 bg-gray-700 border-2 border-white overflow-hidden">
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">You</span>
            </div>
          </div>
        </Card>

        {/* Call Duration */}
        <div className="absolute top-4 left-4 bg-black/50 backdrop-blur px-3 py-1.5 rounded-full">
          <p className="text-white text-sm font-semibold">12:34</p>
        </div>
      </div>

      {/* Controls */}
      <div className="p-6 space-y-4">
        <div className="flex justify-center gap-4">
          <Button size="icon" variant="outline" className="w-14 h-14 rounded-full bg-white">
            <Mic className="w-6 h-6" />
          </Button>
          <Button size="icon" variant="outline" className="w-14 h-14 rounded-full bg-white">
            <Video className="w-6 h-6" />
          </Button>
          <Button size="icon" variant="destructive" onClick={onEnd} className="w-14 h-14 rounded-full">
            <Phone className="w-6 h-6" />
          </Button>
          <Button size="icon" variant="outline" className="w-14 h-14 rounded-full bg-white">
            <MessageSquare className="w-6 h-6" />
          </Button>
          <Button size="icon" variant="outline" className="w-14 h-14 rounded-full bg-white">
            <Upload className="w-6 h-6" />
          </Button>
        </div>

        <p className="text-center text-xs text-gray-400">
          Tap the red button to end consultation
        </p>
      </div>
    </div>
  )
}
