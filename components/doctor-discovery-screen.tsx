'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Search, Star, Video, MessageSquare } from 'lucide-react'

const doctors = [
  {
    id: 1,
    name: 'Dr. Emily Chen',
    specialty: 'Cardiologist',
    experience: '15 years',
    rating: 4.9,
    reviews: 342,
    fee: 50,
    availability: 'Available Today',
  },
  {
    id: 2,
    name: 'Dr. Michael Roberts',
    specialty: 'General Physician',
    experience: '12 years',
    rating: 4.8,
    reviews: 256,
    fee: 40,
    availability: 'Available Now',
  },
  {
    id: 3,
    name: 'Dr. Priya Sharma',
    specialty: 'Dermatologist',
    experience: '10 years',
    rating: 4.7,
    reviews: 198,
    fee: 45,
    availability: 'Available Tomorrow',
  },
  {
    id: 4,
    name: 'Dr. James Wilson',
    specialty: 'Pediatrician',
    experience: '18 years',
    rating: 4.9,
    reviews: 412,
    fee: 55,
    availability: 'Available Today',
  },
]

export default function DoctorDiscoveryScreen({ onBack, onNavigate }: { onBack: () => void; onNavigate: (screen: string) => void }) {
  return (
    <div className="h-full bg-background flex flex-col">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-6 space-y-4">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onBack}
            className="text-primary-foreground hover:bg-primary-foreground/10"
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <h1 className="text-xl font-bold">Find Doctors</h1>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Search by specialty or name..."
            className="pl-10 h-12 text-base bg-white"
          />
        </div>
      </div>

      {/* Doctors List */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {doctors.map((doctor) => (
          <Card key={doctor.id} className="p-4 shadow-md">
            <div className="flex gap-4">
              {/* Doctor Photo */}
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-primary">{doctor.name.split(' ')[1][0]}</span>
              </div>

              {/* Doctor Info */}
              <div className="flex-1 space-y-2">
                <div>
                  <h3 className="font-bold text-base">{doctor.name}</h3>
                  <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
                </div>

                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span>{doctor.experience} exp</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                    <span className="font-semibold text-foreground">{doctor.rating}</span>
                    <span>({doctor.reviews})</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-xs">
                    {doctor.availability}
                  </Badge>
                  <span className="text-sm font-semibold text-primary">₹{doctor.fee}</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2 mt-4">
              <Button
                onClick={() => onNavigate('booking')}
                className="flex-1 h-10"
                size="sm"
              >
                <Video className="w-4 h-4 mr-2" />
                Book Appointment
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
