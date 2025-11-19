'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Video, Pill, TestTube, Brain, Upload, Shield, Search, Calendar, FileText, Folder, User, Bell, Menu, Activity, Stethoscope, Users, HeartPulse, AlertCircle } from 'lucide-react'

const quickServices = [
  { icon: Video, label: 'Consult a Doctor', color: 'bg-blue-50 text-blue-600', screen: 'doctors' },
  { icon: Pill, label: 'Medicines', color: 'bg-green-50 text-green-600', screen: 'medicine' },
  { icon: TestTube, label: 'Lab Tests', color: 'bg-purple-50 text-purple-600', screen: 'diagnostics' },
  { icon: Stethoscope, label: 'Symptom Check', color: 'bg-indigo-50 text-indigo-600', screen: 'symptom-checker' },
  { icon: Activity, label: 'Health Score', color: 'bg-teal-50 text-teal-600', screen: 'health-insights' },
  
  { icon: Users, label: 'Community', color: 'bg-orange-50 text-orange-600', screen: 'community' },
  { icon: Brain, label: 'Mental Health', color: 'bg-yellow-50 text-yellow-600', screen: 'mental-health' },
  { icon: Upload, label: 'Upload Reports', color: 'bg-cyan-50 text-cyan-600', screen: 'vault' },
]

const vaultCategories = [
  { icon: FileText, label: 'Prescriptions', count: 12 },
  { icon: TestTube, label: 'Lab Reports', count: 8 },
  { icon: FileText, label: 'Scans/X-rays', count: 5 },
  { icon: Shield, label: 'Vaccination', count: 6 },
  { icon: FileText, label: 'Bills', count: 15 },
]

export default function HomeScreen({ onNavigate }: { onNavigate: (screen: string) => void }) {
  return (
    <div className="h-full bg-background flex flex-col overflow-y-auto">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-6 space-y-4 rounded-b-[2rem] shadow-lg z-10 relative">
        <div className="flex items-center justify-between">
          <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10" onClick={() => onNavigate('profile')}>
            <Menu className="w-6 h-6" />
          </Button>
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-primary-foreground hover:bg-primary-foreground/10 bg-red-500/20 hover:bg-red-500/30"
              onClick={() => onNavigate('sos')}
            >
              <AlertCircle className="w-6 h-6 text-red-100" />
            </Button>
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10" onClick={() => onNavigate('notifications')}>
              <Bell className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* User Profile Card */}
        <Card className="bg-white/10 backdrop-blur border-primary-foreground/20 p-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center overflow-hidden">
              <img src="/placeholder.svg?height=64&width=64" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-bold text-primary-foreground">Sarah Johnson</h2>
              <div className="flex items-center gap-2">
                <p className="text-primary-foreground/80 text-sm">32 years • Female</p>
                <span className="bg-white/20 px-2 py-0.5 rounded-full text-[10px] font-medium">Family Admin</span>
              </div>
              <Button
                variant="link"
                onClick={() => onNavigate('profile')}
                className="text-primary-foreground h-auto p-0 text-sm underline mt-1"
              >
                View Profile
              </Button>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-primary-foreground/20 flex gap-4">
            <div>
              <p className="text-xs text-primary-foreground/70">Next Appointment</p>
              <p className="font-semibold text-primary-foreground flex items-center gap-1 mt-1">
                <Calendar className="w-3 h-3" />
                <span className="text-sm">Dec 24, 10:00 AM</span>
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 py-6 space-y-6">
        {/* Daily Tasks / Reminders */}
        <Card className="p-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white border-none shadow-lg" onClick={() => onNavigate('medications')}>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-lg">Medication Reminder</h3>
              <p className="text-blue-100 text-sm">Next: Vitamin D (2:00 PM)</p>
            </div>
            <div className="bg-white/20 p-2 rounded-full">
              <Pill className="w-6 h-6" />
            </div>
          </div>
        </Card>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Search doctors, medicines, tests..."
            className="pl-10 h-12 text-base"
          />
        </div>

        {/* Quick Services */}
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Services</h3>
          <div className="grid grid-cols-3 gap-4">
            {quickServices.map((service) => (
              <button
                key={service.label}
                onClick={() => onNavigate(service.screen)}
                className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-card shadow-sm hover:shadow-md transition-all border border-border group"
              >
                <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-7 h-7" />
                </div>
                <span className="text-xs font-medium text-center text-balance leading-tight">{service.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Health Vault Preview */}
        <Card className="p-4 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-lg flex items-center gap-2">
              <Folder className="w-5 h-5 text-primary" />
              Health Vault
            </h3>
            <Button variant="link" onClick={() => onNavigate('vault')} className="text-primary text-sm p-0 h-auto">
              View All
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {vaultCategories.slice(0, 3).map((category) => (
              <button
                key={category.label}
                onClick={() => onNavigate('vault')}
                className="flex flex-col items-center gap-2 p-3 rounded-xl bg-muted hover:bg-muted/80 transition-colors"
              >
                <category.icon className="w-6 h-6 text-primary" />
                <span className="text-xs font-medium text-center text-balance">{category.label}</span>
                <span className="text-xs text-muted-foreground">{category.count}</span>
              </button>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
