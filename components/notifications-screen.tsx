'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowLeft, Bell, Calendar, Pill, FileText, Activity, Check } from 'lucide-react'

export default function NotificationsScreen({ onBack }: { onBack: () => void }) {
  const notifications = [
    {
      id: 1,
      type: 'appointment',
      title: 'Upcoming Appointment',
      message: 'Cardiology consultation with Dr. Sarah Smith in 1 hour.',
      time: '10:00 AM',
      icon: Calendar,
      color: 'text-blue-500 bg-blue-50 dark:bg-blue-900/20',
      read: false
    },
    {
      id: 2,
      type: 'medicine',
      title: 'Medication Reminder',
      message: 'Time to take your Vitamin D supplement.',
      time: '09:00 AM',
      icon: Pill,
      color: 'text-green-500 bg-green-50 dark:bg-green-900/20',
      read: false
    },
    {
      id: 3,
      type: 'report',
      title: 'Lab Results Available',
      message: 'Your blood test results are now available in Health Vault.',
      time: 'Yesterday',
      icon: FileText,
      color: 'text-purple-500 bg-purple-50 dark:bg-purple-900/20',
      read: true
    },
    {
      id: 4,
      type: 'insight',
      title: 'Weekly Health Report',
      message: 'You achieved your step goal 5 times this week! Keep it up.',
      time: 'Yesterday',
      icon: Activity,
      color: 'text-orange-500 bg-orange-50 dark:bg-orange-900/20',
      read: true
    }
  ]

  return (
    <div className="h-full bg-background flex flex-col overflow-y-auto">
      {/* Header */}
      <div className="p-4 border-b flex items-center justify-between bg-card sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={onBack}>
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <h1 className="font-bold text-lg">Notifications</h1>
        </div>
        <Button variant="ghost" size="sm" className="text-xs text-primary">
          Mark all read
        </Button>
      </div>

      <div className="p-4 space-y-4">
        {notifications.map((notification) => (
          <Card 
            key={notification.id} 
            className={`p-4 flex gap-4 transition-colors ${
              notification.read ? 'bg-background' : 'bg-muted/30 border-l-4 border-l-primary'
            }`}
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${notification.color}`}>
              <notification.icon className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h4 className={`text-sm font-bold ${notification.read ? 'text-muted-foreground' : 'text-foreground'}`}>
                  {notification.title}
                </h4>
                <span className="text-xs text-muted-foreground">{notification.time}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                {notification.message}
              </p>
            </div>
          </Card>
        ))}

        <div className="text-center pt-4">
          <p className="text-xs text-muted-foreground">No more notifications</p>
        </div>
      </div>
    </div>
  )
}
