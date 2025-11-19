'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { ArrowLeft, Utensils, Flame, Droplets, Apple, ChevronRight, Plus, CheckCircle2 } from 'lucide-react'

export default function WellnessScreen({ onBack }: { onBack: () => void }) {
  return (
    <div className="h-full bg-background flex flex-col overflow-y-auto">
      {/* Header */}
      <div className="p-4 border-b flex items-center gap-4 bg-card sticky top-0 z-10">
        <Button variant="ghost" size="icon" onClick={onBack}>
          <ArrowLeft className="w-6 h-6" />
        </Button>
        <h1 className="font-bold text-lg">Diet & Nutrition</h1>
      </div>

      <div className="p-6 space-y-6">
        {/* Calorie Counter */}
        <Card className="p-6 bg-gradient-to-br from-orange-400 to-pink-500 text-white border-none">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-2xl font-bold">1,240</h2>
              <p className="text-white/80 text-sm">Calories Eaten</p>
            </div>
            <div className="text-right">
              <h2 className="text-2xl font-bold">860</h2>
              <p className="text-white/80 text-sm">Left</p>
            </div>
          </div>
          <Progress value={60} className="h-3 bg-black/20" indicatorClassName="bg-white" />
          <div className="flex justify-between mt-4 text-sm font-medium">
            <div className="flex flex-col items-center">
              <span>98g</span>
              <span className="text-xs text-white/70">Carbs</span>
            </div>
            <div className="flex flex-col items-center">
              <span>65g</span>
              <span className="text-xs text-white/70">Protein</span>
            </div>
            <div className="flex flex-col items-center">
              <span>42g</span>
              <span className="text-xs text-white/70">Fat</span>
            </div>
          </div>
        </Card>

        {/* Water Tracker */}
        <Card className="p-4 flex items-center justify-between bg-blue-50 dark:bg-blue-900/10 border-blue-100 dark:border-blue-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
              <Droplets className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm">Water Intake</h3>
              <p className="text-xs text-muted-foreground">4 of 8 glasses</p>
            </div>
          </div>
          <Button size="sm" variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-100">
            <Plus className="w-4 h-4 mr-1" /> Add
          </Button>
        </Card>

        {/* Meal Plan */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-lg">Today's Plan</h3>
            <Button variant="link" className="text-primary text-sm h-auto p-0">View Weekly</Button>
          </div>
          
          {[
            { type: 'Breakfast', time: '08:00 AM', meal: 'Oatmeal with Berries', cal: 320, done: true },
            { type: 'Lunch', time: '01:00 PM', meal: 'Grilled Chicken Salad', cal: 450, done: true },
            { type: 'Snack', time: '04:00 PM', meal: 'Greek Yogurt', cal: 120, done: false },
            { type: 'Dinner', time: '08:00 PM', meal: 'Salmon with Quinoa', cal: 550, done: false },
          ].map((item, i) => (
            <Card key={i} className={`p-4 flex items-center justify-between ${item.done ? 'opacity-60' : ''}`}>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  item.done ? 'bg-muted text-muted-foreground' : 'bg-primary/10 text-primary'
                }`}>
                  <Utensils className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium uppercase">{item.type} • {item.time}</p>
                  <h4 className={`font-bold text-sm ${item.done ? 'line-through' : ''}`}>{item.meal}</h4>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <Flame className="w-3 h-3" /> {item.cal} kcal
                  </p>
                </div>
              </div>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                item.done ? 'bg-green-500 border-green-500 text-white' : 'border-muted-foreground'
              }`}>
                {item.done && <CheckCircle2 className="w-4 h-4" />}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
