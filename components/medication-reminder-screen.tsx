'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { ArrowLeft, Plus, Pill, Clock, Calendar, CheckCircle2, AlertCircle } from 'lucide-react'

interface Medication {
  id: string
  name: string
  dosage: string
  time: string
  taken: boolean
  type: 'pill' | 'syrup' | 'injection'
}

export default function MedicationReminderScreen({ onBack }: { onBack: () => void }) {
  const [medications, setMedications] = useState<Medication[]>([
    { id: '1', name: 'Amoxicillin', dosage: '500mg', time: '08:00 AM', taken: true, type: 'pill' },
    { id: '2', name: 'Vitamin D', dosage: '1 tablet', time: '09:00 AM', taken: true, type: 'pill' },
    { id: '3', name: 'Paracetamol', dosage: '650mg', time: '02:00 PM', taken: false, type: 'pill' },
    { id: '4', name: 'Cough Syrup', dosage: '10ml', time: '08:00 PM', taken: false, type: 'syrup' },
  ])

  const toggleMedication = (id: string) => {
    setMedications(medications.map(med => 
      med.id === id ? { ...med, taken: !med.taken } : med
    ))
  }

  return (
    <div className="h-full bg-background flex flex-col overflow-y-auto">
      {/* Header */}
      <div className="p-4 border-b flex items-center justify-between bg-card sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={onBack}>
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <h1 className="font-bold text-lg">Medications</h1>
        </div>
        <Button size="icon" variant="ghost" className="text-primary">
          <Plus className="w-6 h-6" />
        </Button>
      </div>

      <div className="p-6 space-y-6">
        {/* Calendar Strip */}
        <div className="flex justify-between items-center bg-muted/30 p-4 rounded-2xl">
          {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
            <div key={i} className={`flex flex-col items-center gap-1 ${i === 2 ? 'text-primary' : 'text-muted-foreground'}`}>
              <span className="text-xs font-medium">{day}</span>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                i === 2 ? 'bg-primary text-primary-foreground shadow-md' : ''
              }`}>
                {12 + i}
              </div>
            </div>
          ))}
        </div>

        {/* Progress */}
        <Card className="p-4 bg-gradient-to-r from-teal-500 to-emerald-500 text-white border-none">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-bold text-lg">Daily Progress</h3>
              <p className="text-teal-100 text-sm">2 of 4 medicines taken</p>
            </div>
            <div className="bg-white/20 p-2 rounded-lg">
              <Pill className="w-6 h-6" />
            </div>
          </div>
          <div className="w-full bg-black/20 h-2 rounded-full mt-2">
            <div className="bg-white h-full rounded-full w-1/2" />
          </div>
        </Card>

        {/* Morning */}
        <div>
          <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-3">Morning</h3>
          <div className="space-y-3">
            {medications.filter(m => m.time.includes('AM')).map(med => (
              <Card key={med.id} className={`p-4 transition-all ${med.taken ? 'bg-muted/50 border-transparent' : 'border-l-4 border-l-primary'}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      med.taken ? 'bg-muted text-muted-foreground' : 'bg-primary/10 text-primary'
                    }`}>
                      <Pill className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className={`font-bold ${med.taken ? 'text-muted-foreground line-through' : ''}`}>{med.name}</h4>
                      <p className="text-xs text-muted-foreground flex items-center gap-2">
                        <span>{med.dosage}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {med.time}</span>
                      </p>
                    </div>
                  </div>
                  <Switch 
                    checked={med.taken}
                    onCheckedChange={() => toggleMedication(med.id)}
                    className="data-[state=checked]:bg-green-500"
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Afternoon & Evening */}
        <div>
          <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-3">Afternoon & Evening</h3>
          <div className="space-y-3">
            {medications.filter(m => m.time.includes('PM')).map(med => (
              <Card key={med.id} className={`p-4 transition-all ${med.taken ? 'bg-muted/50 border-transparent' : 'border-l-4 border-l-primary'}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      med.taken ? 'bg-muted text-muted-foreground' : 'bg-primary/10 text-primary'
                    }`}>
                      <Pill className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className={`font-bold ${med.taken ? 'text-muted-foreground line-through' : ''}`}>{med.name}</h4>
                      <p className="text-xs text-muted-foreground flex items-center gap-2">
                        <span>{med.dosage}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {med.time}</span>
                      </p>
                    </div>
                  </div>
                  <Switch 
                    checked={med.taken}
                    onCheckedChange={() => toggleMedication(med.id)}
                    className="data-[state=checked]:bg-green-500"
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Refill Alert */}
        <Card className="p-4 border-orange-200 bg-orange-50 dark:bg-orange-900/10 dark:border-orange-800">
          <div className="flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-orange-500" />
            <div className="flex-1">
              <h4 className="font-bold text-sm text-orange-800 dark:text-orange-400">Refill Needed</h4>
              <p className="text-xs text-orange-700 dark:text-orange-500">Vitamin D is running low (3 days left)</p>
            </div>
            <Button size="sm" variant="outline" className="text-orange-600 border-orange-200 hover:bg-orange-100">
              Order
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}
