'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { ArrowLeft, Check } from 'lucide-react'

const steps = ['Consultation Type', 'Time Slot', 'Patient Details', 'Payment']

const timeSlots = [
  { time: '09:00 AM', available: true },
  { time: '10:00 AM', available: true },
  { time: '11:00 AM', available: false },
  { time: '02:00 PM', available: true },
  { time: '03:00 PM', available: true },
  { time: '04:00 PM', available: true },
]

export default function AppointmentBookingScreen({ onBack, onComplete }: { onBack: () => void; onComplete: () => void }) {
  const [currentStep, setCurrentStep] = useState(0)
  const [consultationType, setConsultationType] = useState('video')
  const [selectedSlot, setSelectedSlot] = useState('')

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      onComplete()
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    } else {
      onBack()
    }
  }

  return (
    <div className="h-full bg-background flex flex-col">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-6 space-y-4">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={prevStep}
            className="text-primary-foreground hover:bg-primary-foreground/10"
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <h1 className="text-xl font-bold">Book Appointment</h1>
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center gap-2">
          {steps.map((step, index) => (
            <div key={step} className="flex items-center flex-1">
              <div className="flex items-center gap-2 flex-1">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${index <= currentStep
                    ? 'bg-primary-foreground text-primary'
                    : 'bg-primary-foreground/20 text-primary-foreground/60'
                    }`}
                >
                  {index < currentStep ? <Check className="w-4 h-4" /> : index + 1}
                </div>
                <span className="text-xs text-primary-foreground/90 flex-1">{step}</span>
              </div>
              {index < steps.length - 1 && (
                <div className={`h-0.5 w-4 ${index < currentStep ? 'bg-primary-foreground' : 'bg-primary-foreground/20'}`} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6">
        {currentStep === 0 && (
          <div className="space-y-6">
            <h2 className="text-lg font-bold">Select Consultation Type</h2>
            <RadioGroup value={consultationType} onValueChange={setConsultationType} className="space-y-3">
              <Card className={`p-4 cursor-pointer ${consultationType === 'video' ? 'border-primary border-2' : ''}`}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="video" id="video" />
                  <Label htmlFor="video" className="flex-1 cursor-pointer">
                    <div className="font-semibold">Video Consultation</div>
                    <div className="text-sm text-muted-foreground">Consult from home</div>
                  </Label>
                  <span className="font-semibold text-primary"></span>
                </div>
              </Card>
              <Card className={`p-4 cursor-pointer ${consultationType === 'clinic' ? 'border-primary border-2' : ''}`}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="clinic" id="clinic" />
                  <Label htmlFor="clinic" className="flex-1 cursor-pointer">
                    <div className="font-semibold">Clinic Visit</div>
                    <div className="text-sm text-muted-foreground">In-person appointment</div>
                  </Label>
                  <span className="font-semibold text-primary"></span>
                </div>
              </Card>
            </RadioGroup>
          </div>
        )}

        {currentStep === 1 && (
          <div className="space-y-6">
            <h2 className="text-lg font-bold">Select Time Slot</h2>
            <div>
              <Label className="text-sm text-muted-foreground mb-3 block">December 24, 2024</Label>
              <div className="grid grid-cols-3 gap-3">
                {timeSlots.map((slot) => (
                  <Button
                    key={slot.time}
                    variant={selectedSlot === slot.time ? 'default' : 'outline'}
                    disabled={!slot.available}
                    onClick={() => setSelectedSlot(slot.time)}
                    className="h-12"
                  >
                    {slot.time}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-6">
            <h2 className="text-lg font-bold">Patient Details</h2>
            <Card className="p-4">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Name</span>
                  <span className="font-semibold">Sarah Johnson</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Age</span>
                  <span className="font-semibold">32 years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Contact</span>
                  <span className="font-semibold">+1 234 567 8900</span>
                </div>
              </div>
            </Card>
            <div className="space-y-2">
              <Label>Reason for Visit (Optional)</Label>
              <textarea
                className="w-full min-h-24 p-3 border border-input rounded-lg text-sm"
                placeholder="Describe your symptoms or reason for consultation..."
              />
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-6">
            <h2 className="text-lg font-bold">Payment Summary</h2>
            <Card className="p-4 space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Consultation Fee</span>
                <span className="font-semibold">₹50</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Platform Fee</span>
                <span className="font-semibold">₹5</span>
              </div>
              <div className="border-t pt-3 flex justify-between">
                <span className="font-bold">Total</span>
                <span className="font-bold text-primary text-lg">₹55</span>
              </div>
            </Card>
            <Card className="p-4 bg-primary/5 border-primary/20">
              <p className="text-sm text-muted-foreground">
                Payment will be processed securely. You&apos;ll receive a confirmation email with appointment details.
              </p>
            </Card>
          </div>
        )}
      </div>

      {/* Footer Button */}
      <div className="p-6 border-t">
        <Button onClick={nextStep} className="w-full h-12 text-base" size="lg">
          {currentStep === steps.length - 1 ? 'Confirm & Pay' : 'Continue'}
        </Button>
      </div>
    </div>
  )
}
