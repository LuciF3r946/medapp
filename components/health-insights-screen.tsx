'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowLeft, Activity, Moon, Heart, Flame, TrendingUp, Info } from 'lucide-react'

export default function HealthInsightsScreen({ onBack }: { onBack: () => void }) {
  return (
    <div className="h-full bg-background flex flex-col overflow-y-auto">
      {/* Header */}
      <div className="p-4 border-b flex items-center gap-4 bg-card sticky top-0 z-10">
        <Button variant="ghost" size="icon" onClick={onBack}>
          <ArrowLeft className="w-6 h-6" />
        </Button>
        <h1 className="font-bold text-lg">Health Insights</h1>
      </div>

      <div className="p-6 space-y-6">
        {/* Health Score */}
        <div className="flex flex-col items-center justify-center py-6">
          <div className="relative w-48 h-48 flex items-center justify-center">
            {/* Circular Progress Background */}
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="96"
                cy="96"
                r="88"
                stroke="currentColor"
                strokeWidth="12"
                fill="transparent"
                className="text-muted"
              />
              <circle
                cx="96"
                cy="96"
                r="88"
                stroke="currentColor"
                strokeWidth="12"
                fill="transparent"
                strokeDasharray={2 * Math.PI * 88}
                strokeDashoffset={2 * Math.PI * 88 * (1 - 0.85)}
                className="text-primary transition-all duration-1000 ease-out"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-5xl font-bold text-primary">85</span>
              <span className="text-sm text-muted-foreground font-medium">Health Score</span>
            </div>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4 max-w-[200px]">
            You're doing great! Your vitals are stable and activity is up.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="p-4 space-y-2 bg-blue-50/50 dark:bg-blue-900/10 border-blue-100 dark:border-blue-800">
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
              <Moon className="w-5 h-5" />
              <span className="text-sm font-medium">Sleep</span>
            </div>
            <p className="text-2xl font-bold">7h 20m</p>
            <p className="text-xs text-muted-foreground">Avg. this week</p>
          </Card>
          <Card className="p-4 space-y-2 bg-red-50/50 dark:bg-red-900/10 border-red-100 dark:border-red-800">
            <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
              <Heart className="w-5 h-5" />
              <span className="text-sm font-medium">Heart Rate</span>
            </div>
            <p className="text-2xl font-bold">72 bpm</p>
            <p className="text-xs text-muted-foreground">Resting rate</p>
          </Card>
          <Card className="p-4 space-y-2 bg-orange-50/50 dark:bg-orange-900/10 border-orange-100 dark:border-orange-800">
            <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400">
              <Flame className="w-5 h-5" />
              <span className="text-sm font-medium">Calories</span>
            </div>
            <p className="text-2xl font-bold">1,840</p>
            <p className="text-xs text-muted-foreground">Burned today</p>
          </Card>
          <Card className="p-4 space-y-2 bg-green-50/50 dark:bg-green-900/10 border-green-100 dark:border-green-800">
            <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
              <Activity className="w-5 h-5" />
              <span className="text-sm font-medium">Steps</span>
            </div>
            <p className="text-2xl font-bold">8,432</p>
            <p className="text-xs text-muted-foreground">Goal: 10,000</p>
          </Card>
        </div>

        {/* Trends */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-lg">Trends</h3>
            <Tabs defaultValue="week" className="w-auto">
              <TabsList className="h-8">
                <TabsTrigger value="week" className="text-xs h-6">Week</TabsTrigger>
                <TabsTrigger value="month" className="text-xs h-6">Month</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          <Card className="p-4">
            <div className="h-40 flex items-end justify-between gap-2 px-2">
              {[40, 65, 45, 80, 55, 70, 85].map((h, i) => (
                <div key={i} className="w-full bg-primary/10 rounded-t-md relative group">
                  <div 
                    className="absolute bottom-0 w-full bg-primary rounded-t-md transition-all duration-500 group-hover:bg-primary/80"
                    style={{ height: `${h}%` }}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-xs text-muted-foreground px-2">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
          </Card>
        </div>

        {/* Tips */}
        <Card className="p-4 bg-primary text-primary-foreground">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-white/20 rounded-full">
              <Info className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm">Daily Tip</h4>
              <p className="text-xs opacity-90 mt-1 leading-relaxed">
                Consistent sleep schedules can improve your heart health. Try to go to bed at the same time tonight!
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
