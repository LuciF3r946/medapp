'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowLeft, User, Heart, Calendar, FileText, Settings, Bell, Shield, LogOut } from 'lucide-react'

const profileSections = [
  { icon: User, label: 'Personal Details', description: 'Name, age, contact info' },
  { icon: Heart, label: 'Health Metrics', description: 'BP, sugar, weight tracking' },
  { icon: Calendar, label: 'My Appointments', description: 'Upcoming and past visits' },
  { icon: User, label: 'Saved Doctors', description: 'Your favorite doctors' },
  { icon: FileText, label: 'Medical Records', description: 'Access your vault' },
  { icon: Bell, label: 'Notifications', description: 'Manage alerts' },
  { icon: Shield, label: 'Privacy & Security', description: 'Account settings' },
  { icon: Settings, label: 'App Settings', description: 'Preferences' },
]

const healthMetrics = [
  { label: 'Blood Pressure', value: '120/80', unit: 'mmHg', status: 'normal' },
  { label: 'Blood Sugar', value: '95', unit: 'mg/dL', status: 'normal' },
  { label: 'Weight', value: '68', unit: 'kg', status: 'normal' },
  { label: 'Heart Rate', value: '72', unit: 'bpm', status: 'normal' },
]

export default function UserProfileScreen({ onBack }: { onBack: () => void }) {
  return (
    <div className="h-full bg-background flex flex-col">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-6">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onBack}
            className="text-primary-foreground hover:bg-primary-foreground/10"
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <h1 className="text-xl font-bold">My Profile</h1>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Profile Card */}
        <div className="p-6 bg-primary">
          <Card className="p-6 shadow-lg -mb-12">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                <User className="w-10 h-10 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold">Sarah Johnson</h2>
                <p className="text-sm text-muted-foreground">32 years • Female</p>
                <p className="text-sm text-muted-foreground">sarah.j@email.com</p>
              </div>
              <Button size="sm" variant="outline">Edit</Button>
            </div>
          </Card>
        </div>

        {/* Health Metrics */}
        <div className="p-6 pt-16 space-y-4">
          <h3 className="font-bold text-lg">Quick Health Stats</h3>
          <div className="grid grid-cols-2 gap-3">
            {healthMetrics.map((metric) => (
              <Card key={metric.label} className="p-3 shadow-sm">
                <p className="text-xs text-muted-foreground">{metric.label}</p>
                <p className="text-xl font-bold text-primary mt-1">
                  {metric.value}
                  <span className="text-xs text-muted-foreground ml-1">{metric.unit}</span>
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Profile Sections */}
        <div className="px-6 pb-6 space-y-3">
          {profileSections.map((section) => (
            <Card key={section.label} className="p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <section.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-sm">{section.label}</h3>
                  <p className="text-xs text-muted-foreground">{section.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Logout Button */}
        <div className="px-6 pb-6">
          <Button variant="outline" className="w-full h-12 text-destructive hover:bg-destructive/10">
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>
    </div>
  )
}
