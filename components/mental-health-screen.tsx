'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Search, Star, Video, MessageSquare } from 'lucide-react'

const therapists = [
  {
    id: 1,
    name: 'Dr. Lisa Anderson',
    specialty: 'Clinical Psychologist',
    experience: '12 years',
    rating: 4.9,
    reviews: 284,
    fee: 80,
    availability: 'Available Today',
  },
  {
    id: 2,
    name: 'Dr. Mark Thompson',
    specialty: 'Counseling Therapist',
    experience: '8 years',
    rating: 4.8,
    reviews: 156,
    fee: 70,
    availability: 'Available Tomorrow',
  },
  {
    id: 3,
    name: 'Dr. Nina Patel',
    specialty: 'Psychiatrist',
    experience: '15 years',
    rating: 4.9,
    reviews: 312,
    fee: 100,
    availability: 'Available Today',
  },
]

export default function MentalHealthScreen({ onBack, onNavigate }: { onBack: () => void; onNavigate: (screen: string) => void }) {
  return (
    <div className="h-full bg-background flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary to-secondary text-primary-foreground p-6 space-y-4">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onBack}
            className="text-primary-foreground hover:bg-primary-foreground/10"
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <h1 className="text-xl font-bold">Mental Health Support</h1>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Search therapists..."
            className="pl-10 h-12 text-base bg-white"
          />
        </div>
      </div>

      {/* Info Banner */}
      <div className="p-6 pb-0">
        <Card className="p-4 bg-gradient-to-br from-pink-50 to-purple-50 border-pink-200">
          <p className="text-sm text-balance leading-relaxed">
            Your mental health matters. Connect with licensed therapists in a safe, confidential space. 🌸
          </p>
        </Card>
      </div>

      {/* Therapists List */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        <h2 className="font-bold text-lg">Available Therapists</h2>
        {therapists.map((therapist) => (
          <Card key={therapist.id} className="p-4 shadow-md">
            <div className="flex gap-4">
              {/* Therapist Photo */}
              <div className="w-20 h-20 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-purple-600">{therapist.name.split(' ')[1][0]}</span>
              </div>

              {/* Therapist Info */}
              <div className="flex-1 space-y-2">
                <div>
                  <h3 className="font-bold text-base">{therapist.name}</h3>
                  <p className="text-sm text-muted-foreground">{therapist.specialty}</p>
                </div>

                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span>{therapist.experience} exp</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                    <span className="font-semibold text-foreground">{therapist.rating}</span>
                    <span>({therapist.reviews})</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-xs bg-pink-100 text-pink-700">
                    {therapist.availability}
                  </Badge>
                  <span className="text-sm font-semibold text-primary">${therapist.fee}</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2 mt-4">
              <Button
                onClick={() => onNavigate('booking')}
                className="flex-1 h-10 bg-gradient-to-r from-primary to-secondary"
                size="sm"
              >
                <Video className="w-4 h-4 mr-2" />
                Book Session
              </Button>
              <Button variant="outline" size="sm" className="h-10">
                <MessageSquare className="w-4 h-4" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
